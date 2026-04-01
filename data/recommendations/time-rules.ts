export interface TimeRule {
  id: string;
  conditions: {
    hourRange: [number, number];
    months?: number[];
  };
  appliesTo: string[];
  adjustments: {
    techniqueModifier?: string;
    depthModifier?: string;
    speedModifier?: string;
    tips: string[];
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

const catfishSlugs = ['channel-catfish', 'blue-catfish', 'flathead-catfish'];

export const timeRules: TimeRule[] = [
  {
    id: 'pre-dawn',
    conditions: {
      hourRange: [4, 5],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      depthModifier: 'shallow to moderate',
      speedModifier: 'slow to moderate',
      tips: [
        'Pre-dawn is a transition period — fish are beginning to move from nighttime holding spots.',
        'Dark-colored lures create strong silhouettes against the lightening sky.',
        'Position yourself on your best spots before first light so you are ready when the bite starts.',
        'Keep noise to a minimum as fish are especially spooky in the pre-dawn quiet.',
      ],
    },
    priority: 50,
  },
  {
    id: 'dawn-golden-hour',
    conditions: {
      hourRange: [5, 7],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      techniqueModifier: 'topwater and shallow moving baits',
      depthModifier: 'shallow',
      speedModifier: 'moderate to fast',
      tips: [
        'Dawn is the premier topwater window — fish are actively feeding in the shallows.',
        'Buzzbaits, walking baits, poppers, and frogs produce explosive surface strikes.',
        'Fish are at their most aggressive and least cautious during the golden hour.',
        'Cover water quickly to find active fish — they are roaming and feeding.',
        'This is statistically the highest catch-rate period for most freshwater species.',
      ],
    },
    priority: 85,
  },
  {
    id: 'post-sunrise',
    conditions: {
      hourRange: [7, 9],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      techniqueModifier: 'transition from topwater to shallow-to-mid-depth presentations',
      depthModifier: 'shallow transitioning to moderate',
      speedModifier: 'moderate',
      tips: [
        'Fish begin transitioning from shallow feeding flats toward nearby deeper structure.',
        'Switch from topwater to shallow crankbaits, spinnerbaits, and swim jigs.',
        'Target the edges — grass lines, drop-offs, and points where shallow meets deep.',
        'This is still a very productive window; do not waste it on unproductive water.',
      ],
    },
    priority: 70,
  },
  {
    id: 'mid-morning',
    conditions: {
      hourRange: [9, 11],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      techniqueModifier: 'medium-depth presentations and structure-oriented fishing',
      depthModifier: 'moderate',
      speedModifier: 'moderate',
      tips: [
        'Fish have settled into their mid-depth holding spots after the morning feed.',
        'Target structure at moderate depths — points, ledges, and submerged timber.',
        'Crankbaits, jigs, and Carolina rigs are solid mid-morning producers.',
        'Use your electronics to mark fish and determine the productive depth range.',
      ],
    },
    priority: 60,
  },
  {
    id: 'midday-summer',
    conditions: {
      hourRange: [11, 15],
      months: [6, 7, 8],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      techniqueModifier: 'deep structure fishing — ledges, humps, deep brush piles',
      depthModifier: 'deep',
      speedModifier: 'slow',
      tips: [
        'Summer midday heat pushes fish to the deepest available structure and cover.',
        'Deep cranking, drop shots, heavy jigs, and Carolina rigs are your best tools.',
        'Offshore ledges and creek channel swings often hold massive schools of fish.',
        'Shaded areas under docks and thick canopy can still hold shallow fish even at midday.',
        'Hydrate and protect yourself from the sun — afternoon heat is no joke for anglers either.',
      ],
    },
    priority: 70,
  },
  {
    id: 'midday-winter',
    conditions: {
      hourRange: [11, 15],
      months: [12, 1, 2],
    },
    appliesTo: allFreshwater,
    adjustments: {
      techniqueModifier: 'slow finesse presentations on deep and mid-depth structure',
      depthModifier: 'moderate to deep',
      speedModifier: 'slow',
      tips: [
        'Midday is often the best fishing window in winter as water temperatures peak.',
        'Fish become slightly more active as the sun warms the water a few critical degrees.',
        'Jerkbaits, blade baits, and small jigs worked slowly near the bottom are deadly.',
        'Target sun-warmed banks on the north side of the lake that receive the most direct sunlight.',
        'Be patient — winter bites are subtle and fish will not chase far for a meal.',
      ],
    },
    priority: 60,
  },
  {
    id: 'afternoon',
    conditions: {
      hourRange: [14, 17],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      techniqueModifier: 'transition back toward shallower presentations as shadows lengthen',
      depthModifier: 'moderate transitioning to shallow',
      speedModifier: 'moderate',
      tips: [
        'Afternoon is the transition from midday doldrums toward the evening bite.',
        'Fish begin staging on shallower structure in preparation for the evening feed.',
        'Target creek channel bends, secondary points, and mid-depth transition areas.',
        'Increasing afternoon shade from tree lines and bluffs can activate fish early.',
      ],
    },
    priority: 55,
  },
  {
    id: 'evening-golden-hour',
    conditions: {
      hourRange: [17, 20],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      techniqueModifier: 'topwater, shallow crankbaits, and aggressive moving baits',
      depthModifier: 'shallow',
      speedModifier: 'moderate to fast',
      tips: [
        'The evening golden hour rivals dawn as the best fishing period of the day.',
        'Topwater lures come back into play as light levels drop and fish push shallow.',
        'Shad and baitfish often school near the surface at dusk, triggering a feeding frenzy.',
        'Work points, flats, and shoreline cover where fish ambush baitfish in fading light.',
        'Stay on the water until you can no longer see — the last 30 minutes of light can be magical.',
      ],
    },
    priority: 85,
  },
  {
    id: 'night-catfish',
    conditions: {
      hourRange: [21, 4],
    },
    appliesTo: catfishSlugs,
    adjustments: {
      techniqueModifier: 'bottom rigs with cut bait, live bait, or stink baits',
      depthModifier: 'shallow to moderate — catfish move shallow to feed at night',
      speedModifier: 'stationary or very slow',
      tips: [
        'Night is prime time for catfish — they are most active and feeding aggressively after dark.',
        'Cut shad, chicken liver, and commercial stink baits are top night catfish producers.',
        'Fish shallow flats, points, and creek mouths where catfish cruise to feed.',
        'Use a bell or electronic bite alarm on your rod so you can detect strikes in the dark.',
        'Flathead catfish especially become more active at night — use live bluegill or shad for trophies.',
      ],
    },
    priority: 80,
  },
  {
    id: 'night-walleye',
    conditions: {
      hourRange: [21, 4],
    },
    appliesTo: ['walleye', 'sauger'],
    adjustments: {
      techniqueModifier: 'shallow crankbaits, jigs, and live bait rigs on flats and points',
      depthModifier: 'shallow — walleye move to shallow reefs and flats at night',
      speedModifier: 'slow to moderate',
      tips: [
        'Walleye are legendary nighttime feeders — their eyes give them a huge advantage in the dark.',
        'Target shallow rock reefs, sand flats, and gravel points where walleye cruise at night.',
        'Shallow-running crankbaits in dark colors or glow patterns are extremely effective.',
        'Live bait rigs with leeches or nightcrawlers fished on bottom produce consistent results.',
        'Wade fishing shallow flats at night is a proven trophy walleye tactic.',
      ],
    },
    priority: 80,
  },
  {
    id: 'night-bass-summer',
    conditions: {
      hourRange: [21, 2],
      months: [6, 7, 8],
    },
    appliesTo: bassSlugs,
    adjustments: {
      techniqueModifier: 'dark topwater, black spinnerbaits, and large dark worms',
      depthModifier: 'shallow',
      speedModifier: 'slow',
      tips: [
        'Summer night fishing for bass is an underutilized tactic that produces big fish.',
        'Black is the go-to color at night — it creates the strongest silhouette against the sky.',
        'Buzzbaits, black spinnerbaits, and large dark worms are the top nighttime bass lures.',
        'Fish are less pressured at night and willing to eat larger presentations.',
        'Focus on shallow flats, points, and docks illuminated by lights that attract baitfish.',
      ],
    },
    priority: 75,
  },
];
