import type { WaterBodyType, WaterClarity, CoverType, DepthAvailable } from '../types';

export interface WaterBodyRule {
  id: string;
  conditions: {
    type?: WaterBodyType[];
    clarity?: WaterClarity[];
    cover?: CoverType[];
    depth?: DepthAvailable[];
  };
  appliesTo: string[];
  adjustments: {
    techniqueModifier?: string;
    lureColorModifier?: string;
    lureSizeModifier?: 'upsize' | 'downsize' | 'no-change';
    lineWeightModifier?: string;
    presentationNotes?: string;
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

export const waterBodyRules: WaterBodyRule[] = [
  {
    id: 'muddy-water',
    conditions: {
      clarity: ['muddy'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      lureColorModifier: 'bright and dark high-contrast colors',
      lureSizeModifier: 'upsize',
      lineWeightModifier: 'heavier line is fine — visibility is low',
      presentationNotes: 'Use lures with strong vibration, rattle, and displacement to help fish locate your bait.',
      tips: [
        'Chartreuse, black-and-blue, white, and orange are top muddy water colors.',
        'Colorado-blade spinnerbaits create maximum vibration and thump for detection.',
        'Rattling crankbaits and lipless cranks give fish an auditory target.',
        'Slow your retrieve slightly so fish have time to track and strike the bait.',
        'Fish tighter to cover — fish hold very close to structure in low-visibility water.',
      ],
    },
    priority: 85,
  },
  {
    id: 'stained-water',
    conditions: {
      clarity: ['stained'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      lureColorModifier: 'bold natural colors with some chartreuse or orange accents',
      lureSizeModifier: 'no-change',
      presentationNotes: 'Stained water is a sweet spot — fish are less wary but can still track your bait visually.',
      tips: [
        'Stained water is often the most productive clarity level for many species.',
        'Use colors like chartreuse and white, firetiger, or black and gold.',
        'Moderate retrieval speeds work well — fish can see but need a moment to commit.',
        'Moving baits like spinnerbaits, chatterbaits, and crankbaits excel in stained water.',
        'You can get away with heavier line without spooking fish.',
      ],
    },
    priority: 80,
  },
  {
    id: 'clear-water',
    conditions: {
      clarity: ['clear'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      lureColorModifier: 'natural and translucent shad, bluegill, or crawfish patterns',
      lureSizeModifier: 'no-change',
      lineWeightModifier: 'lighter line or fluorocarbon for stealth',
      presentationNotes: 'Match the hatch with realistic profiles and natural colors. Fluorocarbon is important.',
      tips: [
        'Natural bait colors that mimic local forage are essential in clear water.',
        'Fluorocarbon line or leaders drastically reduce line visibility.',
        'Longer casts help you stay far enough from fish to avoid spooking them.',
        'Subtle presentations like drop shots, finesse jigs, and wacky rigs shine here.',
        'Early morning and late evening bites are more reliable in clear water.',
      ],
    },
    priority: 80,
  },
  {
    id: 'crystal-clear-water',
    conditions: {
      clarity: ['crystal-clear'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      lureColorModifier: 'ghost, smoke, and ultra-translucent colors only',
      lureSizeModifier: 'downsize',
      lineWeightModifier: 'lightest fluorocarbon you can get away with',
      presentationNotes: 'Maximum stealth is required. Light line, long casts, and natural colors are non-negotiable.',
      tips: [
        'Downsize everything — line, lures, and hooks — fish scrutinize every detail.',
        'Ghost colors, smoke, and subtle translucent patterns are your best bet.',
        'Make long casts and let baits sink naturally without excess line splash.',
        'Avoid heavy boat traffic areas where fish become extremely pressured.',
        'Sight fishing opportunities are excellent — use polarized sunglasses to your advantage.',
      ],
    },
    priority: 85,
  },
  {
    id: 'small-pond',
    conditions: {
      type: ['pond'],
    },
    appliesTo: allFreshwater,
    adjustments: {
      lureSizeModifier: 'downsize',
      lineWeightModifier: 'lighter tackle for smaller water',
      presentationNotes: 'Pond fish see fewer lures but are in confined space — work the edges and any visible cover.',
      tips: [
        'Ponds have smaller fish populations so work the entire perimeter systematically.',
        'Bank fishing is often very effective — cast parallel to the shore.',
        'Target any visible cover: fallen trees, grass edges, docks, or culvert pipes.',
        'Smaller lures match the smaller forage base typical of ponds.',
        'Catch-and-release is especially important in small ponds to maintain the fishery.',
      ],
    },
    priority: 60,
  },
  {
    id: 'major-reservoir',
    conditions: {
      type: ['large-reservoir', 'major-reservoir'],
    },
    appliesTo: allFreshwater,
    adjustments: {
      lureSizeModifier: 'upsize',
      lineWeightModifier: 'standard to heavy depending on cover',
      presentationNotes: 'Break the lake into sections and use your electronics. Focus on creek channels, points, and ledges.',
      tips: [
        'Use your depth finder to locate baitfish schools, structure, and submerged channels.',
        'Creek channels, main lake points, and ledges are the primary structure to target.',
        'Long points that extend into the main lake are highway on-ramps for migrating fish.',
        'Wind-blown banks on large reservoirs concentrate baitfish and predators.',
        'Seasonal patterns are amplified on reservoirs — fish migrate significantly between shallow and deep.',
      ],
    },
    priority: 60,
  },
  {
    id: 'grass-cover-bass',
    conditions: {
      cover: ['grass'],
    },
    appliesTo: bassSlugs,
    adjustments: {
      techniqueModifier: 'punching, frogging, or working grass edges',
      lureSizeModifier: 'upsize',
      lineWeightModifier: 'heavy braid 50-65lb for pulling fish from thick vegetation',
      presentationNotes: 'Fish the edges, holes, and matted sections. Use weedless presentations to avoid constant snagging.',
      tips: [
        'Punch through matted grass with heavy tungsten weights (1 to 1.5 oz) and compact baits.',
        'Frogs and toads worked over grass mats produce explosive strikes.',
        'Swim jigs and ChatterBaits are ideal for working along grass edges.',
        'Look for irregularities in the grass line — points, pockets, and isolated clumps hold fish.',
        'Heavy braided line is essential for hauling bass out of thick vegetation before they bury up.',
      ],
    },
    priority: 70,
  },
  {
    id: 'wood-cover-bass',
    conditions: {
      cover: ['wood'],
    },
    appliesTo: bassSlugs,
    adjustments: {
      techniqueModifier: 'flipping, pitching, and skipping jigs',
      lureSizeModifier: 'no-change',
      lineWeightModifier: 'heavy fluorocarbon 17-20lb or braid with fluoro leader',
      presentationNotes: 'Precise casts tight to wood are critical. Skip baits under docks and overhanging branches.',
      tips: [
        'Jigs and Texas-rigged soft plastics are the go-to presentations for wood cover.',
        'Pitch or flip baits tight to stumps, laydowns, and standing timber.',
        'Bass often sit on the shaded side of wood — target the side away from the sun.',
        'Let your bait fall on semi-slack line and watch for the line to jump or move sideways.',
        'Heavy fluorocarbon provides abrasion resistance against rough wood surfaces.',
      ],
    },
    priority: 70,
  },
  {
    id: 'rock-cover-bass',
    conditions: {
      cover: ['rock'],
    },
    appliesTo: bassSlugs,
    adjustments: {
      techniqueModifier: 'crankbaits, jerkbaits, and football jigs bounced off rock',
      lureSizeModifier: 'no-change',
      lineWeightModifier: 'fluorocarbon 12-17lb for bottom contact feel',
      presentationNotes: 'Deflect your lures off rocks to trigger reaction strikes. Contact with the bottom is key.',
      tips: [
        'Crankbaits deflecting off rocks trigger reaction strikes from nearby bass.',
        'Football jigs mimic crawfish crawling across rocky bottoms — a bass staple.',
        'Smallmouth bass especially love rocky structure — riprap, bluffs, and gravel points.',
        'Chunk rock transitions to other bottom types are high-percentage areas.',
        'Crawfish-colored baits in brown, orange, and green pumpkin excel on rocky bottoms.',
      ],
    },
    priority: 70,
  },
  {
    id: 'dock-cover',
    conditions: {
      cover: ['docks'],
    },
    appliesTo: [...bassSlugs, 'crappie', 'bluegill'],
    adjustments: {
      techniqueModifier: 'skipping jigs, wacky rigs, and dock shooting for crappie',
      lureSizeModifier: 'downsize',
      lineWeightModifier: 'fluorocarbon for stealth around clear dock water',
      presentationNotes: 'Skip baits as far back under docks as possible. The farthest back fish see the fewest lures.',
      tips: [
        'Learn to skip jigs and soft plastics under docks — it is a game-changing skill.',
        'The deepest shade under the dock, near the back posts, holds the biggest fish.',
        'Floating docks in deeper water are more productive than shallow fixed docks in summer.',
        'Crappie stack up under docks, especially around brush piles placed near dock posts.',
        'Work both sides and the ends of every dock — do not just cast at the obvious spots.',
      ],
    },
    priority: 65,
  },
  {
    id: 'open-water',
    conditions: {
      cover: ['open-water'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      techniqueModifier: 'trolling, long-casting, or suspending baits over structure',
      lureSizeModifier: 'no-change',
      presentationNotes: 'Use electronics to find fish. Target suspended schools, submerged humps, and offshore ledges.',
      tips: [
        'Electronics are your most important tool in open water — find the fish before you start fishing.',
        'Trolling crankbaits or spinner rigs is the most efficient way to cover open water.',
        'Look for baitfish schools on sonar and fish directly above, below, or beside them.',
        'Offshore humps, ledges, and channel swings hold fish even when there is no visible cover.',
        'Marker buoys help you stay on productive spots when there are no visual landmarks.',
      ],
    },
    priority: 55,
  },
  {
    id: 'creek-fishing',
    conditions: {
      type: ['creek'],
    },
    appliesTo: ['rainbow-trout', 'brown-trout', 'brook-trout', 'smallmouth-bass', 'bluegill', 'channel-catfish'],
    adjustments: {
      techniqueModifier: 'upstream casting with natural drift presentations',
      lureSizeModifier: 'downsize',
      lineWeightModifier: 'light line 4-8lb test',
      presentationNotes: 'Wade quietly and cast upstream, allowing your bait to drift naturally with the current.',
      tips: [
        'Approach pools and runs from downstream to avoid spooking fish facing into the current.',
        'Small inline spinners, micro jigs, and live bait drifted naturally are top producers.',
        'Target the heads and tails of pools, current seams, and undercut banks.',
        'Stealth is paramount in small creeks — wade slowly and keep a low profile.',
        'Polarized sunglasses help you spot fish and read the water structure.',
      ],
    },
    priority: 65,
  },
  {
    id: 'river-current',
    conditions: {
      type: ['small-river', 'large-river'],
    },
    appliesTo: allFreshwater,
    adjustments: {
      techniqueModifier: 'current-oriented presentations: drift fishing, current seams, and eddies',
      lureSizeModifier: 'no-change',
      lineWeightModifier: 'adjust weight to maintain bottom contact in current',
      presentationNotes: 'Fish relate to current breaks. Target eddies, wing dams, bridge pilings, and slack water behind objects.',
      tips: [
        'Fish face upstream and use current breaks to ambush prey — cast upstream and retrieve with the current.',
        'Eddies behind boulders, bridge pilings, and wing dams are prime holding water.',
        'Use enough weight to maintain bottom contact without getting constantly snagged.',
        'Current seams where fast water meets slow water are feeding lanes for gamefish.',
        'River fish are often more aggressive than lake fish due to the need to make quick feeding decisions.',
      ],
    },
    priority: 65,
  },
  {
    id: 'saltwater-inshore',
    conditions: {
      type: ['saltwater-inshore'],
    },
    appliesTo: allSaltwater,
    adjustments: {
      techniqueModifier: 'sight fishing, popping cork, and wade fishing flats',
      lureSizeModifier: 'no-change',
      lineWeightModifier: 'braided main line 15-30lb with fluorocarbon leader 20-30lb',
      presentationNotes: 'Tides are everything inshore. Learn the tidal patterns and focus on moving water.',
      tips: [
        'Moving tide is the single most important factor for inshore fishing success.',
        'Target oyster bars, grass flats, mangrove shorelines, and channel edges on falling tides.',
        'Popping corks with live shrimp or soft plastics are deadly for speckled trout and redfish.',
        'Wade fishing grass flats gives you stealth advantages over boat anglers.',
        'Match your lure size to the local baitfish — mullet, shrimp, and small crabs.',
      ],
    },
    priority: 70,
  },
  {
    id: 'saltwater-offshore',
    conditions: {
      type: ['saltwater-offshore'],
    },
    appliesTo: ['red-snapper', 'grouper', 'king-mackerel', 'mahi-mahi'],
    adjustments: {
      techniqueModifier: 'bottom fishing, trolling, and vertical jigging',
      lureSizeModifier: 'upsize',
      lineWeightModifier: 'heavy tackle — braided 50-80lb with heavy fluorocarbon leader',
      presentationNotes: 'Use GPS and sonar to locate reefs, wrecks, and ledges. Chum and live bait are king offshore.',
      tips: [
        'Reef and wreck structures are the primary targets — mark productive spots with GPS waypoints.',
        'Live bait is almost always more effective than artificials for offshore bottom species.',
        'Vertical jigging with heavy metal jigs produces grouper, snapper, and amberjack.',
        'Trolling the surface with skirted lures and ballyhoo produces pelagic species.',
        'Always have a variety of weight sizes to handle different depths and current speeds.',
      ],
    },
    priority: 70,
  },
  {
    id: 'shallow-only',
    conditions: {
      depth: ['shallow'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      techniqueModifier: 'shallow-water presentations: topwater, squarebills, and weightless soft plastics',
      lureSizeModifier: 'no-change',
      presentationNotes: 'When only shallow water is available, fish are concentrated. Focus on the best available cover.',
      tips: [
        'In shallow-only environments, fish have nowhere to go deep — they hold tight to the best cover.',
        'Topwater, shallow crankbaits, and weightless soft plastics are your primary tools.',
        'Early morning and late evening produce the best results in shallow water.',
        'Approach quietly — trolling motor on low or push pole to avoid spooking fish.',
        'Shade from docks, trees, or overhanging vegetation is critical when fish cannot go deep.',
      ],
    },
    priority: 60,
  },
  {
    id: 'deep-water-available',
    conditions: {
      depth: ['deep'],
    },
    appliesTo: allSpeciesSlugs,
    adjustments: {
      techniqueModifier: 'deep cranking, drop shot, football jigs, and vertical presentations',
      lureSizeModifier: 'no-change',
      presentationNotes: 'Deep water gives fish options. Use electronics to find where they are staging at depth.',
      tips: [
        'Fish with access to deep water use it as a sanctuary — especially during midday and post-frontal conditions.',
        'Deep crankbaits, heavy jigs, and drop shots are essential for reaching fish at depth.',
        'Offshore ledges, humps, and creek channel bends are primary deep-water structure.',
        'Use your sonar to determine the exact depth fish are holding and match your presentation accordingly.',
        'Vertical presentations like spoons, blade baits, and jigging raps are efficient in deep water.',
      ],
    },
    priority: 55,
  },
  {
    id: 'canal-fishing',
    conditions: {
      type: ['canal'],
    },
    appliesTo: [...bassSlugs, 'bluegill', 'channel-catfish', 'snook', 'tarpon'],
    adjustments: {
      techniqueModifier: 'parallel casting along canal walls and targeting culverts',
      lureSizeModifier: 'downsize',
      lineWeightModifier: 'moderate — canals often have structure to pull fish from',
      presentationNotes: 'Canals are linear. Cast parallel to the walls and work seawalls, culverts, and bridges thoroughly.',
      tips: [
        'Cast parallel to the canal walls rather than across — your bait stays in the strike zone longer.',
        'Seawall corners, culvert openings, and bridge pilings are the highest-percentage spots.',
        'Canals often have consistent depth, so focus on anything that creates a depth change or current.',
        'In Florida canals, live shiners or wild shiners are the top bait for trophy largemouth.',
        'Water flow through culverts concentrates baitfish and attracts predators — always check these spots.',
      ],
    },
    priority: 60,
  },
];
