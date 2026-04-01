import type { SkyCondition, WindSpeed, WindDirection, FrontalSystem, PressureTrend } from '../types';

export interface WeatherRule {
  id: string;
  conditions: {
    sky?: SkyCondition[];
    wind?: WindSpeed[];
    windDirection?: WindDirection[];
    frontalSystem?: FrontalSystem[];
    pressureTrend?: PressureTrend[];
  };
  appliesTo: string[];
  adjustments: {
    techniqueModifier?: string;
    lureColorModifier?: string;
    lureSizeModifier?: 'upsize' | 'downsize' | 'no-change';
    lureActionModifier?: string;
    speedModifier?: 'slower' | 'faster' | 'no-change';
    depthModifier?: 'shallower' | 'deeper' | 'no-change';
    tips: string[];
    warnings?: string[];
  };
  priority: number;
}

const allFreshwater = [
  'largemouth-bass', 'smallmouth-bass', 'spotted-bass', 'striped-bass', 'white-bass',
  'walleye', 'sauger', 'crappie', 'bluegill', 'yellow-perch',
  'channel-catfish', 'blue-catfish', 'flathead-catfish',
  'rainbow-trout', 'brown-trout', 'brook-trout',
  'northern-pike', 'musky', 'carp', 'gar',
];

const allSaltwater = [
  'redfish', 'speckled-trout', 'snook', 'tarpon', 'flounder',
  'red-snapper', 'grouper', 'king-mackerel', 'mahi-mahi', 'sheepshead',
];

const allSpeciesSlugs = [...allFreshwater, ...allSaltwater];

const bassSlugs = ['largemouth-bass', 'smallmouth-bass', 'spotted-bass'];

export const weatherRules: WeatherRule[] = [
  {
    id: 'pre-frontal-all',
    conditions: {
      frontalSystem: ['pre-frontal'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'faster',
      depthModifier: 'shallower',
      lureSizeModifier: 'upsize',
      lureActionModifier: 'aggressive reaction baits',
      tips: [
        'Fish are feeding aggressively ahead of the front — this is prime time.',
        'Cover water quickly with moving baits like spinnerbaits, crankbaits, and chatterbaits.',
        'Target shallower structure as fish push up to feed before pressure drops.',
        'Use larger profile baits to trigger reaction strikes from actively feeding fish.',
        'Fish the windblown banks where baitfish are being pushed by increasing winds.',
      ],
    },
    priority: 100,
  },
  {
    id: 'post-frontal-all',
    conditions: {
      frontalSystem: ['post-frontal'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'slower',
      depthModifier: 'deeper',
      lureSizeModifier: 'downsize',
      lureColorModifier: 'natural and subtle colors',
      lureActionModifier: 'finesse presentations',
      tips: [
        'Post-frontal conditions cause lockjaw — downsize everything and slow way down.',
        'Switch to finesse tactics: drop shot, shaky head, ned rig, or small jigs.',
        'Target deeper structure and cover where fish retreat after frontal passage.',
        'Use natural, translucent colors — green pumpkin, watermelon, and smoke.',
        'Be patient and make repeated casts to the same spot; fish may need coaxing.',
      ],
    },
    priority: 100,
  },
  {
    id: 'during-front-all',
    conditions: {
      frontalSystem: ['during-front'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'no-change',
      depthModifier: 'no-change',
      lureSizeModifier: 'no-change',
      tips: [
        'Fishing during an active front can be unpredictable — be ready to adapt quickly.',
        'Rapid pressure changes can trigger short bursts of feeding activity.',
        'Focus on protected areas out of the strongest wind and weather.',
      ],
      warnings: [
        'SAFETY FIRST: Lightning kills more anglers than any other weather event. Get off the water immediately if you see lightning or hear thunder.',
        'Monitor weather radar continuously during frontal passage.',
        'Have a plan to reach safe shelter within minutes if conditions deteriorate.',
      ],
    },
    priority: 100,
  },
  {
    id: 'overcast-bass',
    conditions: {
      sky: ['overcast'],
    },
    appliesTo: bassSlugs,
    adjustments: {
      speedModifier: 'faster',
      depthModifier: 'shallower',
      lureSizeModifier: 'upsize',
      lureActionModifier: 'moving baits with strong vibration',
      tips: [
        'Overcast skies push bass shallower and make them more aggressive.',
        'Throw moving baits like spinnerbaits, buzzbaits, and squarebill crankbaits.',
        'Fish the first few feet of depth near cover — bass roam more freely under clouds.',
        'Darker lure colors like black-and-blue or junebug create strong silhouettes.',
        'Cover water quickly and let the fish tell you where they are.',
      ],
    },
    priority: 80,
  },
  {
    id: 'sunny-clear-bass',
    conditions: {
      sky: ['clear'],
    },
    appliesTo: bassSlugs,
    adjustments: {
      speedModifier: 'slower',
      depthModifier: 'deeper',
      lureSizeModifier: 'no-change',
      lureColorModifier: 'natural and translucent colors',
      tips: [
        'Bright sun pushes bass tight to cover and into deeper water.',
        'Use natural, translucent colors — green pumpkin, watermelon seed, and shad patterns.',
        'Target shaded sides of docks, laydowns, and overhanging trees.',
        'Slow down your presentation; bass in clear sunny conditions are more wary.',
        'Fluorocarbon line is critical for its near-invisibility underwater.',
      ],
    },
    priority: 80,
  },
  {
    id: 'overcast-walleye',
    conditions: {
      sky: ['overcast'],
    },
    appliesTo: ['walleye', 'sauger'],
    adjustments: {
      speedModifier: 'faster',
      depthModifier: 'shallower',
      lureSizeModifier: 'no-change',
      lureActionModifier: 'aggressive trolling or casting presentations',
      tips: [
        'Walleye absolutely love overcast conditions — their light-sensitive eyes give them an advantage.',
        'Expect walleye to push into shallower flats and weed edges under cloud cover.',
        'Crankbaits and spinner rigs trolled at moderate speeds are deadly on overcast days.',
        'Check mid-depth rock transitions and gravel points where walleye stage.',
        'All-day bite is possible; do not limit yourself to dawn and dusk windows.',
      ],
    },
    priority: 80,
  },
  {
    id: 'fog-all',
    conditions: {
      sky: ['fog'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'slower',
      depthModifier: 'shallower',
      lureSizeModifier: 'no-change',
      lureActionModifier: 'topwater and subtle surface presentations',
      tips: [
        'Foggy mornings can produce incredible topwater bites — fish feel secure near the surface.',
        'Low-light fog keeps fish shallow longer, extending the dawn feeding window.',
        'Use noisy topwater lures like poppers and buzzbaits so fish can locate them.',
        'Sound-based lures outperform sight-based lures in thick fog.',
        'Fish close to the boat since visibility is reduced for both you and the fish.',
      ],
      warnings: [
        'Use navigation lights and sound signals when boating in fog.',
        'Stay close to shore and familiar water; disorientation is common in thick fog.',
      ],
    },
    priority: 70,
  },
  {
    id: 'wind-south-west',
    conditions: {
      windDirection: ['S', 'SW', 'W'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'no-change',
      depthModifier: 'no-change',
      lureSizeModifier: 'no-change',
      tips: [
        'South and southwest winds are associated with warming trends and active fish.',
        'The old saying holds true: "Wind from the south blows the bait in their mouth."',
        'Position your boat to cast into the wind — baitfish are pushed with it and predators face into it.',
        'Windblown banks concentrate baitfish and plankton, drawing gamefish in.',
        'Expect improved feeding activity, especially after a period of stable weather.',
      ],
    },
    priority: 60,
  },
  {
    id: 'wind-north-east',
    conditions: {
      windDirection: ['N', 'NE', 'E'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'slower',
      depthModifier: 'deeper',
      lureSizeModifier: 'downsize',
      tips: [
        'North and northeast winds often follow cold fronts — expect tougher fishing.',
        '"Wind from the east, fish bite least" — an old rule with real truth behind it.',
        'Downsize your presentations and focus on high-percentage spots.',
        'Fish tighter to cover and structure rather than roaming open water.',
        'Patience is key; work proven spots thoroughly before moving.',
      ],
    },
    priority: 60,
  },
  {
    id: 'moderate-wind-positioning',
    conditions: {
      wind: ['moderate'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'no-change',
      depthModifier: 'no-change',
      lureSizeModifier: 'no-change',
      lureActionModifier: 'use wind to add natural action to baits',
      tips: [
        'Moderate wind breaks up the surface, reducing fish wariness and improving bite rates.',
        'Use the wind to drift baits naturally along structure and drop-offs.',
        'Position your boat upwind and let the wind carry you along productive stretches.',
        'Spinnerbaits, crankbaits, and bladed jigs excel in moderate wind conditions.',
        'Windblown points and shorelines concentrate baitfish — focus your efforts there.',
      ],
    },
    priority: 50,
  },
  {
    id: 'strong-wind-safety',
    conditions: {
      wind: ['strong'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'no-change',
      depthModifier: 'no-change',
      lureSizeModifier: 'upsize',
      tips: [
        'Fish the lee side of points, islands, and shorelines for protection from waves.',
        'Upsize your lures so fish can find them in turbulent, churned-up water.',
        'Use heavier jigs and sinkers to maintain bottom contact in wind-driven current.',
        'Anchor or use a heavy trolling motor to hold position on productive spots.',
      ],
      warnings: [
        'SAFETY WARNING: Strong winds create dangerous wave conditions, especially on large open water.',
        'Small boats should stay close to shore or seek protected coves and creeks.',
        'Wear your life jacket at all times in strong wind conditions.',
        'Be prepared to call it a day if conditions exceed your comfort level.',
      ],
    },
    priority: 90,
  },
  {
    id: 'falling-pressure',
    conditions: {
      pressureTrend: ['falling'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'faster',
      depthModifier: 'shallower',
      lureSizeModifier: 'no-change',
      lureActionModifier: 'moving baits that cover water',
      tips: [
        'Falling barometric pressure signals an approaching weather change and often triggers feeding.',
        'Fish sense the pressure drop and feed more aggressively in anticipation of the front.',
        'Cover water with moving presentations — crankbaits, jerkbaits, and spinnerbaits.',
        'Check shallow flats and creek channels where fish move to feed.',
        'The bite often improves steadily as pressure continues to drop.',
      ],
    },
    priority: 70,
  },
  {
    id: 'rapidly-falling-pressure',
    conditions: {
      pressureTrend: ['rapidly-falling'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'faster',
      depthModifier: 'shallower',
      lureSizeModifier: 'upsize',
      lureActionModifier: 'fast-moving reaction baits',
      tips: [
        'Rapidly falling pressure can trigger a feeding frenzy — this is the best window to be on the water.',
        'Fish are gorging before the incoming severe weather; match their intensity with aggressive presentations.',
        'Burn spinnerbaits, rip lipless crankbaits, and work topwater aggressively.',
        'Target main lake points, channel swings, and shallow flats where fish push up to feed.',
        'This window may be short, so fish fast and cover as much productive water as possible.',
      ],
      warnings: [
        'Rapidly falling pressure means severe weather is approaching — keep a close eye on the sky and radar.',
      ],
    },
    priority: 75,
  },
  {
    id: 'rising-pressure',
    conditions: {
      pressureTrend: ['rising'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'slower',
      depthModifier: 'deeper',
      lureSizeModifier: 'downsize',
      lureColorModifier: 'subtle, natural tones',
      tips: [
        'Rising pressure after a front means fish are transitioning — be patient.',
        'Start slow and finesse-oriented; fish are recovering from the frontal passage.',
        'Target deeper structure and cover where fish have pulled back.',
        'As pressure stabilizes, fish gradually resume normal feeding patterns.',
        'Afternoon hours often fish better than morning during rising pressure periods.',
      ],
    },
    priority: 70,
  },
  {
    id: 'light-rain-all',
    conditions: {
      sky: ['light-rain'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'faster',
      depthModifier: 'shallower',
      lureSizeModifier: 'no-change',
      lureActionModifier: 'moving baits and topwater',
      tips: [
        'Light rain is one of the best conditions for fishing — reduced visibility emboldens fish.',
        'The rain dimples the surface, providing cover and making fish less wary.',
        'Topwater lures are surprisingly effective during a light, warm rain.',
        'Rain runoff washes insects and nutrients into the water, attracting baitfish.',
        'Fish creek mouths, drains, and any inflow points where fresh water enters.',
      ],
    },
    priority: 75,
  },
  {
    id: 'heavy-rain-all',
    conditions: {
      sky: ['heavy-rain'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'slower',
      depthModifier: 'no-change',
      lureSizeModifier: 'upsize',
      lureColorModifier: 'bright and dark colors for murky water',
      lureActionModifier: 'vibrating and noisy lures fish can sense',
      tips: [
        'Heavy rain muddies the water quickly — switch to baits with strong vibration and color.',
        'Black-and-blue, chartreuse, and white lures stand out in stained or muddy conditions.',
        'Colorado-blade spinnerbaits and loud rattling crankbaits help fish locate your bait.',
        'Rising water levels can push fish into newly flooded cover and vegetation.',
      ],
      warnings: [
        'SAFETY: Heavy rain reduces visibility and can cause flash flooding on rivers and creeks.',
        'Lightning risk increases dramatically during heavy rain — get off the water if storms develop.',
        'Watch for rapidly rising water levels, strong current, and floating debris.',
      ],
    },
    priority: 85,
  },
  {
    id: 'snow-conditions',
    conditions: {
      sky: ['snow'],
    },
    appliesTo: allFreshwater,
    adjustments: {
      speedModifier: 'slower',
      depthModifier: 'deeper',
      lureSizeModifier: 'downsize',
      lureColorModifier: 'subtle natural colors',
      lureActionModifier: 'ultra-slow finesse presentations',
      tips: [
        'Snow and extreme cold dramatically slow fish metabolism — fish ultra-slow.',
        'If ice fishing, use tiny jigs and spoons tipped with live bait or soft plastics.',
        'Open water in winter requires patience; vertical jigging and drop-shotting excel.',
        'Target the warmest water available — deeper areas, power plant discharges, and spring-fed areas.',
        'Midday is often the best window as water temperatures peak slightly.',
      ],
      warnings: [
        'Hypothermia risk is real — dress in layers and bring extra dry clothes.',
        'Ice anglers must verify ice thickness: 4 inches of clear ice minimum for walking.',
      ],
    },
    priority: 80,
  },
  {
    id: 'calm-wind-clear-water',
    conditions: {
      wind: ['calm'],
      sky: ['clear'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      speedModifier: 'slower',
      depthModifier: 'no-change',
      lureSizeModifier: 'downsize',
      lureColorModifier: 'natural, translucent, and ghost patterns',
      lureActionModifier: 'subtle finesse presentations',
      tips: [
        'Calm, clear conditions demand stealth — fish can see and hear everything.',
        'Make long casts and use lighter line to avoid spooking wary fish.',
        'Fluorocarbon leaders or main line are essential for near-invisibility.',
        'Work baits slowly and keep a low profile in the boat.',
        'Early morning and late evening will be far more productive than midday in these conditions.',
      ],
    },
    priority: 65,
  },
];
