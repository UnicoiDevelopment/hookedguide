import type { TimeOfDay } from '../types';

export const timeOfDayAdjustments: Record<TimeOfDay, {
  generalTips: string[];
  techniqueBonus: string[];
  depthModifier: string;
  speciesExceptions: Record<string, { tips: string[] }>;
}> = {
  dawn: {
    generalTips: ['Prime feeding time for most species', 'Topwater lures are most effective at dawn', 'Fish move to shallower water to feed'],
    techniqueBonus: ['topwater', 'spinnerbait'],
    depthModifier: 'Fish shallower — 1-8 feet',
    speciesExceptions: {
      'channel-catfish': { tips: ['Catfish may still be active from overnight feeding — great transition period'] },
      'walleye': { tips: ['Prime walleye feeding period — low light is their advantage'] }
    }
  },
  morning: {
    generalTips: ['Good activity continues from dawn', 'Transition period — fish moving from shallow to mid-depth', 'Moving baits cover water efficiently'],
    techniqueBonus: ['crankbait', 'spinnerbait'],
    depthModifier: 'Fish shallow to mid-depth — 3-12 feet',
    speciesExceptions: {
      'rainbow-trout': { tips: ['Morning hatches produce excellent dry fly fishing'] }
    }
  },
  midday: {
    generalTips: ['Toughest time for most species — fish go deeper and become less active', 'Slow down your presentation significantly', 'Focus on shaded areas and deep structure'],
    techniqueBonus: ['carolina-rig', 'drop-shot', 'jigging'],
    depthModifier: 'Fish deeper — 10-25 feet or find shade',
    speciesExceptions: {
      'bluegill': { tips: ['Bluegill remain active midday — fish docks and shaded cover'] },
      'carp': { tips: ['Carp often feed actively in warm midday sun on shallow flats'] }
    }
  },
  afternoon: {
    generalTips: ['Fish begin moving shallower as sun angle decreases', 'Activity picks up in the last 2 hours before sunset', 'Good time for reaction baits as fish start feeding'],
    techniqueBonus: ['texas-rig', 'jigging', 'crankbait'],
    depthModifier: 'Transitioning shallower — 5-15 feet',
    speciesExceptions: {
      'redfish': { tips: ['Afternoon falling tide often pushes redfish to drain points and oyster bars'] }
    }
  },
  dusk: {
    generalTips: ['Second prime feeding window of the day', 'Topwater lures excel again as light fades', 'Fish are aggressive and often in shallow water'],
    techniqueBonus: ['topwater', 'spinnerbait', 'live-bait'],
    depthModifier: 'Fish shallower — 1-8 feet',
    speciesExceptions: {
      'channel-catfish': { tips: ['Catfish begin their peak feeding period at dusk — great time to start'] },
      'walleye': { tips: ['Second prime feeding window — walleye eyes give them a low-light advantage'] },
      'speckled-trout': { tips: ['Dusk topwater bite on grass flats can be incredible'] }
    }
  },
  night: {
    generalTips: ['Specialized fishing — be prepared and prioritize safety', 'Use dark-colored lures with rattle or vibration', 'Slow your retrieve and fish by feel'],
    techniqueBonus: ['night-fishing', 'bottom-fishing', 'live-bait'],
    depthModifier: 'Fish shallow — many species feed in 1-6 feet at night',
    speciesExceptions: {
      'channel-catfish': { tips: ['Peak catfish feeding time — flatheads especially active at night'] },
      'walleye': { tips: ['Walleye feed aggressively at night — use crankbaits along shallow rock'] },
      'largemouth-bass': { tips: ['Bass feed shallow at night — dark spinnerbaits and topwater buzzbaits work well'] },
      'snook': { tips: ['Snook stack up under bridge lights feeding on baitfish attracted to the light'] }
    }
  }
};
