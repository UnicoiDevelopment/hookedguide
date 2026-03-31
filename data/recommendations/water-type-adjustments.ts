import type { WaterType } from '../types';

export const waterTypeAdjustments: Record<WaterType, {
  lineWeightModifier: string;
  depthModifier: string;
  tips: string[];
  techniqueNotes: string;
}> = {
  lake: {
    lineWeightModifier: 'Standard line weight for species',
    depthModifier: 'Fish structure, drop-offs, and points',
    tips: [
      'Use a fish finder to locate structure and baitfish',
      'Fish points and creek channel intersections',
      'Wind-blown banks often concentrate baitfish',
      'Vary your depth until you find active fish'
    ],
    techniqueNotes: 'Most techniques work well in lakes — match technique to cover type and depth'
  },
  river: {
    lineWeightModifier: '+2-4 lb for current resistance',
    depthModifier: 'Focus on current breaks, eddies, and seams',
    tips: [
      'Use heavier weights to hold bottom in current',
      'Cast upstream and let bait drift naturally downstream',
      'Fish behind rocks, log jams, and bridge pilings',
      'Current seams where fast water meets slow are prime spots'
    ],
    techniqueNotes: 'Drift fishing and bottom rigs work best in moving water — let the current do the work'
  },
  pond: {
    lineWeightModifier: '-2 lb lighter for clear, pressured water',
    depthModifier: 'Fish shallower — most ponds are under 15 feet',
    tips: [
      'Approach quietly — pond fish spook easily',
      'Downsize your lures in small bodies of water',
      'Focus on any available cover: docks, fallen trees, lily pads',
      'Early morning and late evening are best for pressured ponds'
    ],
    techniqueNotes: 'Finesse techniques excel in ponds — fish see more lures and become wary'
  },
  reservoir: {
    lineWeightModifier: 'Standard to +2 lb — reservoirs hold larger fish',
    depthModifier: 'Fish creek channels, standing timber, and points — depth varies widely',
    tips: [
      'Learn the old creek channels — that is where fish travel and stage',
      'Standing timber and flooded brush hold fish year-round',
      'Main lake points are highways for migrating fish',
      'Water level fluctuations move fish — rising water pushes them shallow, falling pulls them deep'
    ],
    techniqueNotes: 'Crankbaits and jigging excel around reservoir structure — use your electronics'
  },
  saltwater: {
    lineWeightModifier: '+5-10 lb — saltwater fish fight harder and structure is rougher',
    depthModifier: 'Tides dictate everything — fish moving water and structure',
    tips: [
      'Match your fishing to the tide — moving water is feeding time',
      'Use corrosion-resistant hooks and rinse gear after every trip',
      'Live bait is king in saltwater — shrimp, mullet, pinfish',
      'Watch for birds diving — they show you where baitfish are'
    ],
    techniqueNotes: 'Inshore: lighter tackle, sight fishing. Offshore: heavy tackle, trolling and bottom fishing'
  }
};
