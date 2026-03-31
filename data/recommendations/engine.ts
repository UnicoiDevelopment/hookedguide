import type { RecommendationInput, RecommendationOutput, WaterType, Season, TimeOfDay } from '../types';
import { speciesBaseProfiles } from './species-base-profiles';
import { seasonalModifiers } from './seasonal-modifiers';
import { waterTypeAdjustments } from './water-type-adjustments';
import { temperatureTriggers } from './temperature-triggers';
import { timeOfDayAdjustments } from './time-of-day-adjustments';
import { allStates } from '../states';

const techniqueNameMap: Record<string, string> = {
  'texas-rig': 'Texas Rig',
  'carolina-rig': 'Carolina Rig',
  'drop-shot': 'Drop Shot',
  'ned-rig': 'Ned Rig',
  'jigging': 'Jigging',
  'crankbait': 'Crankbait Fishing',
  'spinnerbait': 'Spinnerbait Fishing',
  'topwater': 'Topwater Fishing',
  'trolling': 'Trolling',
  'bottom-fishing': 'Bottom Fishing',
  'live-bait': 'Live Bait Fishing',
  'fly-fishing-basics': 'Fly Fishing',
  'drift-fishing': 'Drift Fishing',
  'artificial-lure-selection': 'Artificial Lure Fishing',
  'night-fishing': 'Night Fishing',
  'float-fishing': 'Float Fishing',
  'surf-fishing': 'Surf Fishing',
  'kayak-fishing': 'Kayak Fishing',
  'ice-fishing': 'Ice Fishing',
  'wade-fishing': 'Wade Fishing',
};

function getTechniqueName(slug: string): string {
  return techniqueNameMap[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function getTechniqueDescription(slug: string): string {
  const descriptions: Record<string, string> = {
    'texas-rig': 'Weedless soft plastic presentation for fishing heavy cover',
    'carolina-rig': 'Bottom-dragging rig that covers water and finds fish on structure',
    'drop-shot': 'Finesse vertical presentation that keeps bait suspended above bottom',
    'ned-rig': 'Subtle mushroom-head jig with small soft plastic for finesse fishing',
    'jigging': 'Vertical or casting presentation with a weighted jig',
    'crankbait': 'Diving hard bait that deflects off cover to trigger reaction strikes',
    'spinnerbait': 'Wire bait with spinning blades that imitates baitfish',
    'topwater': 'Surface lure fishing for explosive strikes',
    'trolling': 'Pulling lures behind a moving boat to cover large areas',
    'bottom-fishing': 'Presenting bait on or near the bottom for species that feed there',
    'live-bait': 'Using live baitfish, worms, or crustaceans for natural presentation',
    'fly-fishing-basics': 'Casting weighted fly line to deliver lightweight flies to fish',
    'drift-fishing': 'Drifting with current or wind while presenting bait along the bottom',
    'artificial-lure-selection': 'Selecting and fishing artificial lures matched to conditions',
    'night-fishing': 'Techniques adapted for fishing after dark',
    'float-fishing': 'Suspending bait at a set depth beneath a float or bobber',
    'surf-fishing': 'Casting from shore into the surf zone for saltwater species',
    'kayak-fishing': 'Fishing from a kayak for stealthy access to shallow water',
    'ice-fishing': 'Fishing through holes in the ice during winter',
    'wade-fishing': 'Walking into the water to access fish on foot',
  };
  return descriptions[slug] || 'A proven fishing technique for the target species';
}

function matchesTemperature(
  trigger: { condition: 'below' | 'above' | 'between'; tempF: number | [number, number] },
  waterTemp: number
): boolean {
  if (trigger.condition === 'below' && typeof trigger.tempF === 'number') {
    return waterTemp < trigger.tempF;
  }
  if (trigger.condition === 'above' && typeof trigger.tempF === 'number') {
    return waterTemp > trigger.tempF;
  }
  if (trigger.condition === 'between' && Array.isArray(trigger.tempF)) {
    return waterTemp >= trigger.tempF[0] && waterTemp <= trigger.tempF[1];
  }
  return false;
}

function deduplicateTips(tips: string[], limit: number = 6): string[] {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const tip of tips) {
    const normalized = tip.toLowerCase().trim();
    if (!seen.has(normalized)) {
      seen.add(normalized);
      unique.push(tip);
    }
    if (unique.length >= limit) break;
  }
  return unique;
}

export function getRecommendation(input: RecommendationInput): RecommendationOutput {
  const { species, state, waterType, season, timeOfDay, waterTemp } = input;

  // 1. Get species base profile
  const baseProfile = speciesBaseProfiles[species];
  if (!baseProfile) {
    throw new Error(`Species "${species}" not found in base profiles`);
  }

  // Start with base profile values
  let technique = baseProfile.primaryTechnique;
  let alternateTechnique = baseProfile.secondaryTechnique;
  let lure = { ...baseProfile.primaryLure, description: '' };
  let alternateLure = { ...baseProfile.secondaryLure, description: '' };
  let line = { ...baseProfile.line, description: '' };
  let rodReel = { ...baseProfile.rodReel, description: '' };
  let targetDepth = baseProfile.defaultDepth;
  let tips: string[] = [...baseProfile.generalTips];

  // 2. Apply seasonal modifier
  const seasonalMod = seasonalModifiers[species]?.[season];
  const hasSeasonalModifier = !!seasonalMod;

  if (seasonalMod) {
    if (seasonalMod.technique) {
      alternateTechnique = technique;
      technique = seasonalMod.technique;
    }
    if (seasonalMod.lure) {
      alternateLure = { ...lure };
      lure = { ...seasonalMod.lure, description: '' };
    }
    if (seasonalMod.depth) {
      targetDepth = seasonalMod.depth;
    }
    if (seasonalMod.tips) {
      tips = [...seasonalMod.tips, ...tips];
    }
  }

  // 3. Apply water type adjustment tips
  const waterAdj = waterTypeAdjustments[waterType];
  if (waterAdj) {
    tips.push(...waterAdj.tips);
    line.description = waterAdj.lineWeightModifier;
    rodReel.description = waterAdj.techniqueNotes;
  }

  // 4. Apply temperature triggers
  if (waterTemp !== undefined) {
    const matchingTriggers = temperatureTriggers.filter(
      t => t.species === species && matchesTemperature(t, waterTemp)
    );

    for (const trigger of matchingTriggers) {
      if (trigger.overrides.technique) {
        alternateTechnique = technique;
        technique = trigger.overrides.technique;
      }
      if (trigger.overrides.lure) {
        alternateLure = { ...lure };
        lure = { ...trigger.overrides.lure, description: '' };
      }
      if (trigger.overrides.depth) {
        targetDepth = trigger.overrides.depth;
      }
      if (trigger.overrides.tips) {
        tips = [...trigger.overrides.tips, ...tips];
      }
    }
  }

  // 5. Apply time of day adjustments
  const todAdj = timeOfDayAdjustments[timeOfDay];
  if (todAdj) {
    tips.push(...todAdj.generalTips);

    if (todAdj.depthModifier) {
      targetDepth = `${targetDepth} (${todAdj.depthModifier})`;
    }

    const speciesException = todAdj.speciesExceptions[species];
    if (speciesException) {
      tips = [...speciesException.tips, ...tips];
    }
  }

  // 6. Look up regulations if state provided
  let regulations: RecommendationOutput['regulations'] | undefined;
  if (state) {
    const stateData = allStates.find(s => s.slug === state);
    if (stateData) {
      const reg = stateData.regulations.find((r: { species: string }) => r.species === species);
      if (reg) {
        regulations = {
          bagLimit: reg.bagLimit,
          sizeLimit: reg.sizeLimit,
          season: reg.season,
          notes: reg.notes,
        };
      }
    }
  }

  // 7. Deduplicate tips, limit to 6
  tips = deduplicateTips(tips, 6);

  // Build descriptions
  lure.description = `${lure.name} in ${lure.color} (${lure.size})`;
  alternateLure.description = `${alternateLure.name} in ${alternateLure.color} (${alternateLure.size})`;
  line.description = line.description || `${line.type} ${line.weight}`;

  // Set confidence
  let confidence: 'high' | 'medium' | 'low';
  if (waterTemp !== undefined) {
    confidence = 'high';
  } else if (!hasSeasonalModifier) {
    confidence = 'low';
  } else {
    confidence = 'medium';
  }

  // 8. Return RecommendationOutput
  return {
    technique: {
      name: getTechniqueName(technique),
      slug: technique,
      description: getTechniqueDescription(technique),
    },
    alternateTechnique: {
      name: getTechniqueName(alternateTechnique),
      slug: alternateTechnique,
      description: getTechniqueDescription(alternateTechnique),
    },
    lure,
    alternateLure,
    line,
    rodReel,
    targetDepth,
    tips,
    confidence,
    regulations,
  };
}
