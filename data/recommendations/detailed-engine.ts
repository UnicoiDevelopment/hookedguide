import type {
  DetailedRecommendationInput,
  DetailedRecommendationOutput,
  TechnicalRecommendation,
  MoonPhase,
  WaterBodyType,
  WaterClarity,
  CoverType,
  DepthAvailable,
  SkyCondition,
  WindSpeed,
  WindDirection,
  FrontalSystem,
  PressureTrend,
} from '../types';
import { technicalDetails } from './technical-details';
import { temperatureMaps, type TempBehavior } from './temperature-maps';
import { saltwaterTemperatureMaps } from './temperature-maps-saltwater';
import { weatherRules, type WeatherRule } from './weather-rules';
import { waterBodyRules, type WaterBodyRule } from './water-body-rules';
import { timeRules, type TimeRule } from './time-rules';
import { seasonalLatitude, type SeasonalContext } from './seasonal-latitude';
import { moonRules } from './moon-rules';
import { speciesBaseProfiles } from './species-base-profiles';
import { allStates } from '../states';

// ── Merge all temperature maps ──────────────────────────────────────────────
const allTempMaps: Record<string, TempBehavior[]> = {
  ...temperatureMaps,
  ...saltwaterTemperatureMaps,
};

// ── Technique name lookup ───────────────────────────────────────────────────
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
  return (
    techniqueNameMap[slug] ||
    slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ')
  );
}

// ── Default hook sizes by species category ──────────────────────────────────
const hookDefaults: Record<string, { type: string; size: string }> = {
  'largemouth-bass': { type: 'EWG Worm Hook', size: '3/0' },
  'smallmouth-bass': { type: 'Drop Shot Hook', size: '1' },
  'spotted-bass': { type: 'Drop Shot Hook', size: '1' },
  'striped-bass': { type: 'Circle Hook', size: '5/0' },
  'white-bass': { type: 'Jig Hook', size: '1/0' },
  'walleye': { type: 'Octopus Hook', size: '2' },
  'sauger': { type: 'Octopus Hook', size: '2' },
  'crappie': { type: 'Aberdeen Hook', size: '4' },
  'bluegill': { type: 'Aberdeen Hook', size: '6' },
  'yellow-perch': { type: 'Aberdeen Hook', size: '6' },
  'channel-catfish': { type: 'Circle Hook', size: '2/0' },
  'blue-catfish': { type: 'Circle Hook', size: '8/0' },
  'flathead-catfish': { type: 'Circle Hook', size: '8/0' },
  'rainbow-trout': { type: 'Egg Hook', size: '8' },
  'brown-trout': { type: 'Nymph Hook', size: '10' },
  'brook-trout': { type: 'Dry Fly Hook', size: '14' },
  'northern-pike': { type: 'Treble Hook', size: '2' },
  'musky': { type: 'Treble Hook', size: '3/0' },
  'carp': { type: 'Wide Gape Hook', size: '4' },
  'gar': { type: 'Treble Hook', size: '2/0' },
  'redfish': { type: 'Weedless Jig Hook', size: '2/0' },
  'speckled-trout': { type: 'Jig Hook', size: '1/0' },
  'snook': { type: 'Circle Hook', size: '4/0' },
  'tarpon': { type: 'Circle Hook', size: '7/0' },
  'flounder': { type: 'Kahle Hook', size: '2/0' },
  'red-snapper': { type: 'Circle Hook', size: '6/0' },
  'grouper': { type: 'Circle Hook', size: '7/0' },
  'king-mackerel': { type: 'Treble Hook / Stinger Rig', size: '3/0' },
  'mahi-mahi': { type: 'J-Hook', size: '5/0' },
  'sheepshead': { type: 'Short Shank Hook', size: '1' },
};

// ── Speed label map ─────────────────────────────────────────────────────────
const speedLabels: Record<string, string> = {
  'dead-slow': 'Dead slow — barely moving',
  slow: 'Slow, steady retrieve',
  moderate: 'Moderate, natural retrieve speed',
  fast: 'Fast, aggressive retrieve',
  burn: 'Burn — fastest retrieve possible',
};

// ── Cast direction from wind ────────────────────────────────────────────────
function getCastDirection(
  windDir: WindDirection | undefined,
  windSpeed: WindSpeed | undefined,
): string {
  if (!windDir || !windSpeed || windSpeed === 'calm') {
    return 'Fan-cast all directions';
  }
  const opposites: Record<string, string> = {
    N: 'south',
    NE: 'southwest',
    E: 'west',
    SE: 'northwest',
    S: 'north',
    SW: 'northeast',
    W: 'east',
    NW: 'southeast',
  };
  return `Cast into the wind (toward ${opposites[windDir] ?? 'the wind'}) — baitfish are pushed with it, predators face into it`;
}

// ── Helper 1: interpolateTempBehavior ───────────────────────────────────────
function interpolateTempBehavior(
  maps: Record<string, TempBehavior[]>,
  species: string,
  tempF: number,
): TempBehavior | null {
  const entries = maps[species];
  if (!entries || entries.length === 0) return null;

  // Exact match
  const exact = entries.find((e) => e.tempF === tempF);
  if (exact) return exact;

  // Sort by temp ascending
  const sorted = [...entries].sort((a, b) => a.tempF - b.tempF);

  // Below the lowest recorded temp
  if (tempF <= sorted[0].tempF) return sorted[0];

  // Above the highest recorded temp
  if (tempF >= sorted[sorted.length - 1].tempF) return sorted[sorted.length - 1];

  // Find the two bracketing entries and return the closest one
  for (let i = 0; i < sorted.length - 1; i++) {
    if (tempF >= sorted[i].tempF && tempF <= sorted[i + 1].tempF) {
      const lowerDist = tempF - sorted[i].tempF;
      const upperDist = sorted[i + 1].tempF - tempF;
      return lowerDist <= upperDist ? sorted[i] : sorted[i + 1];
    }
  }

  // Fallback: closest overall
  return sorted.reduce((closest, entry) =>
    Math.abs(entry.tempF - tempF) < Math.abs(closest.tempF - tempF) ? entry : closest,
  );
}

// ── Helper 2: getStateRegion ────────────────────────────────────────────────
function getStateRegion(stateSlug: string): string | null {
  const state = allStates.find((s) => s.slug === stateSlug);
  return state?.region ?? null;
}

// ── Helper 3: getSeasonalContext ────────────────────────────────────────────
function getSeasonalContext(
  month: number,
  region: string | null,
  species: string,
): { pattern: string; spawnStatus: string; adjustment: string } | null {
  if (!region) return null;

  // Try exact species first, then common aliases
  const speciesAliases: Record<string, string[]> = {
    'channel-catfish': ['catfish'],
    'blue-catfish': ['catfish'],
    'flathead-catfish': ['catfish'],
    'rainbow-trout': ['trout'],
    'brown-trout': ['trout'],
    'brook-trout': ['trout'],
  };

  const keysToTry = [species, ...(speciesAliases[species] ?? [])];

  for (const entry of seasonalLatitude) {
    if (!entry.months.includes(month)) continue;
    if (!entry.regions.includes(region)) continue;

    for (const key of keysToTry) {
      if (entry.speciesContext[key]) {
        return entry.speciesContext[key];
      }
    }
  }

  return null;
}

// ── Helper 4: buildBaseRecommendation ───────────────────────────────────────
function buildBaseRecommendation(
  species: string,
  tempBehavior: TempBehavior | null,
  seasonalCtx: { pattern: string; spawnStatus: string; adjustment: string } | null,
  input: DetailedRecommendationInput,
): DetailedRecommendationOutput {
  const profile = speciesBaseProfiles[species];

  // If species has no profile, build entirely from defaults
  const primaryTechSlug = profile?.primaryTechnique ?? 'live-bait';
  const secondaryTechSlug = profile?.secondaryTechnique ?? 'artificial-lure-selection';

  const primaryLure = profile?.primaryLure ?? {
    name: 'General Purpose Lure',
    color: 'natural',
    size: 'medium',
    tags: [],
  };
  const secondaryLure = profile?.secondaryLure ?? {
    name: 'Alternate Lure',
    color: 'natural',
    size: 'medium',
    tags: [],
  };
  const line = profile?.line ?? { type: 'monofilament', weight: '10lb' };
  const rodReel = profile?.rodReel ?? {
    rodType: 'spinning',
    power: 'medium',
    action: 'fast',
    reelType: 'spinning',
    tags: [],
  };

  const hook = hookDefaults[species] ?? { type: 'Octopus Hook', size: '1/0' };

  // Depth and speed from temp behavior or defaults
  const depth = tempBehavior?.depth ?? profile?.defaultDepth ?? '5-15 feet';
  const speed = tempBehavior?.speed ?? 'moderate';
  const pattern = tempBehavior?.primaryPattern ?? '';

  // Build the "why" explanation for technique
  const whyParts: string[] = [];
  if (tempBehavior) {
    whyParts.push(
      `At ${input.waterTemp}°F, ${species.replace(/-/g, ' ')} are ${tempBehavior.activity}`,
    );
  }
  if (seasonalCtx) {
    whyParts.push(seasonalCtx.pattern);
  }
  if (pattern) {
    whyParts.push(`Current pattern: ${pattern}`);
  }
  const techniqueWhy =
    whyParts.length > 0
      ? whyParts.join('. ') + '.'
      : `Standard approach for ${species.replace(/-/g, ' ')}.`;

  // Build lure "why"
  const lureWhy = tempBehavior?.notes ?? `Best all-around lure for ${species.replace(/-/g, ' ')}.`;

  // Determine rod length from rod type
  const rodLengthMap: Record<string, string> = {
    casting: "6'10\" - 7'3\"",
    spinning: "6'6\" - 7'0\"",
  };

  // Reel speed based on technique
  const fastReelTechniques = ['spinnerbait', 'crankbait', 'topwater', 'trolling'];
  const reelSpeed = fastReelTechniques.includes(primaryTechSlug) ? '7.1:1 or higher' : '6.2:1 - 6.8:1';

  // Structure from cover type
  const structureMap: Record<string, string> = {
    grass: 'Vegetation edges and matted grass',
    wood: 'Laydowns, stumps, and standing timber',
    rock: 'Rocky points, riprap, and bluff walls',
    docks: 'Dock pilings, walkways, and boat lifts',
    'open-water': 'Offshore structure, humps, and ledges',
    mixed: 'Mixed cover — work the most prominent features',
  };

  // Feeding window based on hour
  const hour = input.hourOfDay;
  const feedingDescription = getFeedingDescription(hour);
  const peakTimes = getPeakTimes(hour, input.month);

  // Alternate technique "why"
  const altWhy = seasonalCtx?.adjustment ?? `Alternate approach when primary pattern is not producing.`;

  // Gather initial tips from base profile and temp behavior
  const tips: string[] = [];
  if (profile?.generalTips) {
    tips.push(...profile.generalTips);
  }
  if (tempBehavior?.notes) {
    tips.push(tempBehavior.notes);
  }
  if (seasonalCtx?.adjustment) {
    tips.push(seasonalCtx.adjustment);
  }

  return {
    primary: {
      technique: {
        name: getTechniqueName(primaryTechSlug),
        slug: primaryTechSlug,
        why: techniqueWhy,
      },
      presentation: {
        speed: speedLabels[speed] ?? speed,
        action: getDefaultAction(primaryTechSlug),
        depth,
      },
      lure: {
        type: primaryLure.tags[0] ?? 'general',
        specificLure: primaryLure.name,
        color: primaryLure.color,
        size: primaryLure.size,
        why: lureWhy,
        tags: [...primaryLure.tags],
      },
      line: {
        type: line.type,
        weight: line.weight,
        why: getLineWhy(line.type, input.waterBody.clarity),
      },
      rodReel: {
        rodLength: rodLengthMap[rodReel.rodType] ?? "7'0\"",
        rodPower: rodReel.power,
        rodAction: rodReel.action,
        reelType: rodReel.reelType,
        reelSpeed,
        why: `Matched to ${getTechniqueName(primaryTechSlug)} for ${species.replace(/-/g, ' ')}.`,
        tags: [...rodReel.tags],
      },
      hookType: hook.type,
      hookSize: hook.size,
      targetDepth: depth,
      targetStructure: structureMap[input.waterBody.coverType] ?? 'Available structure and cover',
      castDirection: getCastDirection(input.weather.windDirection, input.weather.wind),
    },
    alternate: {
      technique: {
        name: getTechniqueName(secondaryTechSlug),
        slug: secondaryTechSlug,
        why: altWhy,
      },
      lure: {
        type: secondaryLure.tags[0] ?? 'general',
        specificLure: secondaryLure.name,
        color: secondaryLure.color,
        size: secondaryLure.size,
        tags: [...secondaryLure.tags],
      },
    },
    tips,
    warnings: [],
    confidence: 'medium',
    confidenceNotes: '',
    feedingWindow: {
      description: feedingDescription,
      peakTimes,
    },
  };
}

// ── Presentation action defaults by technique ───────────────────────────────
function getDefaultAction(techniqueSlug: string): string {
  const actionMap: Record<string, string> = {
    'texas-rig': 'Drag and hop along the bottom',
    'carolina-rig': 'Slow drag with periodic pauses',
    'drop-shot': 'Shake in place, lift and drop',
    'ned-rig': 'Slow drag with long pauses on bottom',
    jigging: 'Vertical lift-and-drop',
    crankbait: 'Steady retrieve with occasional pauses',
    spinnerbait: 'Steady retrieve, slow-rolling near cover',
    topwater: 'Walk-the-dog or pop-and-pause',
    trolling: 'Consistent trolling speed with rod in holder',
    'bottom-fishing': 'Stationary soak on the bottom',
    'live-bait': 'Natural drift or under a float',
    'fly-fishing-basics': 'Dead drift or strip retrieve',
    'drift-fishing': 'Natural drift with the current',
    'artificial-lure-selection': 'Steady retrieve',
  };
  return actionMap[techniqueSlug] ?? 'Steady retrieve';
}

// ── Line type explanation ───────────────────────────────────────────────────
function getLineWhy(lineType: string, clarity: WaterClarity): string {
  if (lineType === 'fluorocarbon') {
    return clarity === 'crystal-clear' || clarity === 'clear'
      ? 'Fluorocarbon is nearly invisible underwater — critical in clear water conditions.'
      : 'Fluorocarbon provides excellent sensitivity and abrasion resistance with low visibility.';
  }
  if (lineType === 'braided') {
    return 'Braided line provides maximum sensitivity and strength for pulling fish from cover.';
  }
  return 'Monofilament provides stretch and forgiveness, ideal for treble hooks and live bait.';
}

// ── Feeding window helpers ──────────────────────────────────────────────────
function getFeedingDescription(hour: number): string {
  if (hour >= 4 && hour < 6) return 'Pre-dawn transition — fish are beginning to move toward feeding areas.';
  if (hour >= 6 && hour < 8) return 'Prime dawn feeding window — peak activity and aggression.';
  if (hour >= 8 && hour < 10) return 'Post-dawn — fish transitioning from shallow feeding to mid-depth holding areas.';
  if (hour >= 10 && hour < 14) return 'Midday lull — fish hold tight to cover and structure at depth.';
  if (hour >= 14 && hour < 17) return 'Afternoon transition — fish begin staging for the evening feed.';
  if (hour >= 17 && hour < 20) return 'Prime evening golden hour — rivals dawn as the best feeding window.';
  if (hour >= 20 && hour < 22) return 'Post-dusk — fish feeding in shallows under low-light conditions.';
  return 'Nighttime — species-dependent activity. Catfish, walleye, and snook feed actively after dark.';
}

function getPeakTimes(hour: number, month: number): string[] {
  const isSummer = [5, 6, 7, 8].includes(month);
  const isWinter = [12, 1, 2].includes(month);

  if (isSummer) {
    return ['5:30 AM - 8:00 AM', '7:00 PM - 9:00 PM', 'Night fishing can be productive'];
  }
  if (isWinter) {
    return ['10:00 AM - 2:00 PM (warmest part of day)', '2:00 PM - 4:00 PM'];
  }
  // Spring and fall
  return ['6:00 AM - 9:00 AM', '5:00 PM - 7:30 PM'];
}

// ── Helper 5: applyWaterBodyRules ───────────────────────────────────────────
function applyWaterBodyRules(
  rec: DetailedRecommendationOutput,
  waterBody: DetailedRecommendationInput['waterBody'],
  species: string,
): void {
  const matching = waterBodyRules
    .filter((rule) => {
      const c = rule.conditions;
      if (c.type && !c.type.includes(waterBody.type)) return false;
      if (c.clarity && !c.clarity.includes(waterBody.clarity)) return false;
      if (c.cover && !c.cover.includes(waterBody.coverType)) return false;
      if (c.depth && !c.depth.includes(waterBody.depthAvailable)) return false;
      if (!rule.appliesTo.includes(species) && !rule.appliesTo.includes('all')) return false;
      return true;
    })
    .sort((a, b) => a.priority - b.priority);

  for (const rule of matching) {
    const adj = rule.adjustments;
    if (adj.techniqueModifier) {
      rec.primary.presentation.action = adj.techniqueModifier;
    }
    if (adj.lureColorModifier) {
      rec.primary.lure.color = adj.lureColorModifier;
    }
    if (adj.lureSizeModifier === 'upsize') {
      rec.primary.lure.size = upsizeLabel(rec.primary.lure.size);
    } else if (adj.lureSizeModifier === 'downsize') {
      rec.primary.lure.size = downsizeLabel(rec.primary.lure.size);
    }
    if (adj.lineWeightModifier) {
      rec.primary.line.why = adj.lineWeightModifier;
    }
    if (adj.presentationNotes) {
      rec.primary.presentation.action = adj.presentationNotes;
    }
    if (adj.tips) {
      rec.tips.push(...adj.tips);
    }
  }
}

// ── Helper 6: applyWeatherRules ─────────────────────────────────────────────
function applyWeatherRules(
  rec: DetailedRecommendationOutput,
  weather: DetailedRecommendationInput['weather'],
  species: string,
): void {
  const matching = weatherRules
    .filter((rule) => {
      const c = rule.conditions;
      if (c.sky && !c.sky.includes(weather.sky)) return false;
      if (c.wind && !c.wind.includes(weather.wind)) return false;
      if (c.windDirection && !c.windDirection.includes(weather.windDirection)) return false;
      if (c.frontalSystem && !c.frontalSystem.includes(weather.frontalSystem)) return false;
      if (c.pressureTrend && !c.pressureTrend.includes(weather.pressureTrend)) return false;
      if (!rule.appliesTo.includes(species) && !rule.appliesTo.includes('all')) return false;
      return true;
    })
    .sort((a, b) => a.priority - b.priority);

  for (const rule of matching) {
    const adj = rule.adjustments;
    if (adj.techniqueModifier) {
      rec.primary.presentation.action = adj.techniqueModifier;
    }
    if (adj.lureColorModifier) {
      rec.primary.lure.color = adj.lureColorModifier;
    }
    if (adj.lureSizeModifier === 'upsize') {
      rec.primary.lure.size = upsizeLabel(rec.primary.lure.size);
    } else if (adj.lureSizeModifier === 'downsize') {
      rec.primary.lure.size = downsizeLabel(rec.primary.lure.size);
    }
    if (adj.lureActionModifier) {
      rec.primary.presentation.action = adj.lureActionModifier;
    }
    if (adj.speedModifier === 'slower') {
      rec.primary.presentation.speed = slowDown(rec.primary.presentation.speed);
    } else if (adj.speedModifier === 'faster') {
      rec.primary.presentation.speed = speedUp(rec.primary.presentation.speed);
    }
    if (adj.depthModifier === 'shallower') {
      rec.primary.presentation.depth = 'Shallower than normal — ' + rec.primary.presentation.depth;
    } else if (adj.depthModifier === 'deeper') {
      rec.primary.presentation.depth = 'Deeper than normal — ' + rec.primary.presentation.depth;
    }
    if (adj.tips) {
      rec.tips.push(...adj.tips);
    }
    if (adj.warnings) {
      rec.warnings.push(...adj.warnings);
    }
  }
}

// ── Helper 7: applyTimeRules ────────────────────────────────────────────────
function hourInRange(hour: number, range: [number, number]): boolean {
  const [start, end] = range;
  if (start <= end) {
    // Normal range like [5, 7]
    return hour >= start && hour <= end;
  }
  // Wrap-around range like [21, 4]
  return hour >= start || hour <= end;
}

function applyTimeRules(
  rec: DetailedRecommendationOutput,
  hour: number,
  month: number,
  species: string,
): void {
  const matching = timeRules
    .filter((rule) => {
      if (!hourInRange(hour, rule.conditions.hourRange)) return false;
      if (rule.conditions.months && !rule.conditions.months.includes(month)) return false;
      if (!rule.appliesTo.includes(species) && !rule.appliesTo.includes('all')) return false;
      return true;
    })
    .sort((a, b) => a.priority - b.priority);

  for (const rule of matching) {
    const adj = rule.adjustments;
    if (adj.techniqueModifier) {
      rec.primary.presentation.action = adj.techniqueModifier;
    }
    if (adj.depthModifier) {
      rec.primary.presentation.depth = adj.depthModifier;
      rec.primary.targetDepth = adj.depthModifier;
    }
    if (adj.speedModifier) {
      rec.primary.presentation.speed = adj.speedModifier;
    }
    if (adj.tips) {
      rec.tips.push(...adj.tips);
    }
  }
}

// ── Helper 8: applyMoonRules ────────────────────────────────────────────────
function applyMoonRules(
  rec: DetailedRecommendationOutput,
  moonPhase: MoonPhase | undefined,
): void {
  if (!moonPhase) return;

  const rule = moonRules.find((r) => r.phase === moonPhase);
  if (!rule) return;

  rec.tips.push(...rule.tips);

  // Build moon feeding periods based on phase
  const moonFeedingPeriods: string[] = [];
  if (rule.feedingActivity === 'peak') {
    moonFeedingPeriods.push('Major: Dawn and dusk (strongest)', 'Minor: Midday and midnight');
  } else if (rule.feedingActivity === 'above-average') {
    moonFeedingPeriods.push('Major: Dawn and dusk', 'Minor: Mid-morning and late evening');
  } else if (rule.feedingActivity === 'average') {
    moonFeedingPeriods.push('Standard dawn and dusk feeding windows');
  } else {
    moonFeedingPeriods.push('Below average — focus on dawn and structure-oriented fishing');
  }

  rec.feedingWindow.moonFeedingPeriods = moonFeedingPeriods;
  rec.feedingWindow.description += ` Moon phase (${moonPhase.replace(/-/g, ' ')}): ${rule.feedingActivity} feeding activity.`;
}

// ── Helper 9: calculateConfidence ───────────────────────────────────────────
function calculateConfidence(
  input: DetailedRecommendationInput,
): { level: 'very-high' | 'high' | 'medium' | 'low'; notes: string } {
  const hasSpecies = !!input.species;
  const hasTemp = typeof input.waterTemp === 'number';
  const hasWaterBody = !!input.waterBody?.type;
  const hasWeather = !!input.weather?.sky;
  const hasMoon = !!input.moonPhase;
  const hasState = !!input.state;

  if (hasSpecies && hasTemp && hasWaterBody && hasWeather && hasMoon) {
    return {
      level: 'very-high',
      notes:
        'All environmental factors provided including moon phase. This recommendation accounts for temperature, weather, water conditions, time, and lunar influence.',
    };
  }
  if (hasSpecies && hasTemp && hasWaterBody && hasWeather) {
    return {
      level: 'high',
      notes:
        'Core environmental data provided. Adding moon phase data would further refine feeding window predictions.',
    };
  }
  if (hasSpecies && hasTemp && hasWaterBody) {
    return {
      level: 'medium',
      notes:
        'Species, temperature, and water body data provided. Weather data would significantly improve technique and presentation recommendations.',
    };
  }
  return {
    level: 'low',
    notes:
      'Limited input data. Provide water temperature, water body details, and weather conditions for a more accurate recommendation.',
  };
}

// ── Helper 10: deduplicateAndPrioritize ─────────────────────────────────────
function deduplicateAndPrioritize(tips: string[], limit: number): string[] {
  const seen = new Set<string>();
  const unique: string[] = [];

  // Iterate in reverse so that later (higher-priority) tips take precedence
  for (let i = tips.length - 1; i >= 0; i--) {
    const normalized = tips[i].toLowerCase().trim();
    // Use first 60 chars as a fuzzy dedup key to catch near-duplicates
    const key = normalized.slice(0, 60);
    if (!seen.has(key)) {
      seen.add(key);
      unique.unshift(tips[i]);
    }
  }

  return unique.slice(0, limit);
}

// ── Size adjustment helpers ─────────────────────────────────────────────────
function upsizeLabel(current: string): string {
  return `${current} (upsize for conditions)`;
}

function downsizeLabel(current: string): string {
  return `${current} (downsize for conditions)`;
}

// ── Speed adjustment helpers ────────────────────────────────────────────────
function slowDown(current: string): string {
  if (current.includes('Burn') || current.includes('burn') || current.includes('fastest')) {
    return 'Fast, aggressive retrieve';
  }
  if (current.includes('Fast') || current.includes('fast')) {
    return 'Moderate, natural retrieve speed';
  }
  if (current.includes('Moderate') || current.includes('moderate')) {
    return 'Slow, steady retrieve';
  }
  return 'Dead slow — barely moving';
}

function speedUp(current: string): string {
  if (current.includes('Dead slow') || current.includes('dead-slow') || current.includes('barely')) {
    return 'Slow, steady retrieve';
  }
  if (current.includes('Slow') || current.includes('slow')) {
    return 'Moderate, natural retrieve speed';
  }
  if (current.includes('Moderate') || current.includes('moderate')) {
    return 'Fast, aggressive retrieve';
  }
  return 'Burn — fastest retrieve possible';
}

// ── Main engine function ────────────────────────────────────────────────────
export function getDetailedRecommendation(
  input: DetailedRecommendationInput,
): DetailedRecommendationOutput {
  const { species, waterTemp, state, waterBody, month, hourOfDay, weather, moonPhase } = input;

  // 1. Temperature behavior lookup
  const tempBehavior = interpolateTempBehavior(allTempMaps, species, waterTemp);

  // 2. State region lookup
  const region = state ? getStateRegion(state) : null;

  // 3. Seasonal context
  const seasonalCtx = getSeasonalContext(month, region, species);

  // 4. Build the base recommendation
  const rec = buildBaseRecommendation(species, tempBehavior, seasonalCtx, input);

  // 5. Apply rule layers in order (lowest priority applied first, highest last wins)
  applyWaterBodyRules(rec, waterBody, species);
  applyWeatherRules(rec, weather, species);
  applyTimeRules(rec, hourOfDay, month, species);
  applyMoonRules(rec, moonPhase);

  // 6. Calculate confidence
  const confidence = calculateConfidence(input);
  rec.confidence = confidence.level;
  rec.confidenceNotes = confidence.notes;

  // 7. Regulations
  if (state) {
    const stateData = allStates.find((s) => s.slug === state);
    if (stateData) {
      const reg = stateData.regulations.find((r) => r.species === species);
      if (reg) {
        rec.regulations = {
          bagLimit: reg.bagLimit,
          sizeLimit: reg.sizeLimit,
          season: reg.season,
          notes: reg.notes,
          disclaimerUrl: stateData.licenseUrl,
        };
      } else {
        // Still provide the disclaimer URL even if no species-specific regulation found
        rec.regulations = {
          bagLimit: 'Check state regulations',
          sizeLimit: 'Check state regulations',
          season: 'Check state regulations',
          notes: `No specific regulation data found for ${species.replace(/-/g, ' ')} in ${stateData.name}. Always verify current regulations before fishing.`,
          disclaimerUrl: stateData.licenseUrl,
        };
      }
    }
  }

  // 8. Deduplicate tips and warnings, apply limits
  rec.tips = deduplicateAndPrioritize(rec.tips, 12);
  rec.warnings = deduplicateAndPrioritize(rec.warnings, 5);

  // 9. Ensure no empty arrays for required fields
  if (rec.tips.length === 0) {
    rec.tips = [`Target ${species.replace(/-/g, ' ')} with patience and pay attention to subtle bites.`];
  }

  // 11. Look up and attach technical details
  const techSlug = rec.primary.technique.slug;
  const speciesTechKey = `${techSlug}:${input.species}`;
  const techDetail = technicalDetails[speciesTechKey] || technicalDetails[techSlug];
  if (techDetail) {
    // Clone to avoid mutating the source
    const details = JSON.parse(JSON.stringify(techDetail)) as TechnicalRecommendation;

    // Adjust color strategy based on conditions
    const clarity = input.waterBody.clarity;
    const sky = input.weather.sky;
    if (clarity === 'muddy') {
      details.colorStrategy.primaryColor = details.colorStrategy.dirtyWaterColor;
      details.colorStrategy.whyThisColor = `Muddy water — dark colors create the strongest silhouette. ${details.colorStrategy.whyThisColor}`;
    } else if (clarity === 'crystal-clear') {
      details.colorStrategy.primaryColor = details.colorStrategy.clearWaterColor;
      details.colorStrategy.whyThisColor = `Crystal clear water demands natural, translucent colors. ${details.colorStrategy.whyThisColor}`;
    }

    // Adjust depth from temp behavior
    if (tempBehavior) {
      details.depthStrategy.targetDepth = tempBehavior.depth;
    }

    // Select seasonal adjustment
    const monthToSeason: Record<number, string> = { 1:'winter',2:'winter',3:'spring',4:'spring',5:'spring',6:'summer',7:'summer',8:'summer',9:'fall',10:'fall',11:'fall',12:'winter' };
    const currentSeason = monthToSeason[input.month] || 'summer';
    if (details.seasonalAdjustments[currentSeason]) {
      const seasonal = details.seasonalAdjustments[currentSeason];
      // Prepend seasonal tip to the main tips
      rec.tips = [seasonal.tip, ...rec.tips].slice(0, 12);
    }

    rec.technicalDetails = details;
  }

  return rec;
}
