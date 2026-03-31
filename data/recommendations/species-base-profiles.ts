export const speciesBaseProfiles: Record<string, {
  primaryTechnique: string;
  secondaryTechnique: string;
  primaryLure: { name: string; color: string; size: string; tags: string[] };
  secondaryLure: { name: string; color: string; size: string; tags: string[] };
  line: { type: string; weight: string };
  rodReel: { rodType: string; power: string; action: string; reelType: string; tags: string[] };
  defaultDepth: string;
  generalTips: string[];
}> = {
  'largemouth-bass': {
    primaryTechnique: 'texas-rig',
    secondaryTechnique: 'crankbait',
    primaryLure: { name: 'Soft Plastic Worm', color: 'green pumpkin', size: '7"', tags: ['soft-plastic', 'worm', 'bass'] },
    secondaryLure: { name: 'Square Bill Crankbait', color: 'shad', size: '2.5"', tags: ['crankbait', 'hard-bait', 'shallow'] },
    line: { type: 'fluorocarbon', weight: '12-15lb' },
    rodReel: { rodType: 'casting', power: 'medium-heavy', action: 'fast', reelType: 'baitcasting', tags: ['bass', 'versatile'] },
    defaultDepth: '3-10 feet',
    generalTips: [
      'Target cover like laydowns, docks, and vegetation edges',
      'Work your bait slowly along the bottom for inactive fish',
      'Match your lure color to local forage species',
      'Pay attention to water clarity when selecting colors'
    ]
  },
  'smallmouth-bass': {
    primaryTechnique: 'drop-shot',
    secondaryTechnique: 'ned-rig',
    primaryLure: { name: 'Finesse Worm', color: 'green pumpkin', size: '4"', tags: ['soft-plastic', 'finesse', 'bass'] },
    secondaryLure: { name: 'Ned Rig', color: 'brown', size: '1/4oz', tags: ['ned-rig', 'finesse', 'mushroom-head'] },
    line: { type: 'fluorocarbon', weight: '8-10lb' },
    rodReel: { rodType: 'spinning', power: 'medium', action: 'fast', reelType: 'spinning', tags: ['finesse', 'smallmouth'] },
    defaultDepth: '5-15 feet',
    generalTips: [
      'Focus on rocky points, gravel bars, and current breaks',
      'Smallmouth are often found near crayfish habitat',
      'Use lighter line and finesse presentations in clear water',
      'These fish fight hard for their size so set your drag accordingly'
    ]
  },
  'spotted-bass': {
    primaryTechnique: 'drop-shot',
    secondaryTechnique: 'carolina-rig',
    primaryLure: { name: 'Finesse Worm', color: 'green pumpkin', size: '4"', tags: ['soft-plastic', 'finesse', 'bass'] },
    secondaryLure: { name: 'Carolina Rig Lizard', color: 'watermelon red', size: '6"', tags: ['carolina-rig', 'soft-plastic', 'deep'] },
    line: { type: 'fluorocarbon', weight: '8-12lb' },
    rodReel: { rodType: 'spinning', power: 'medium', action: 'fast', reelType: 'spinning', tags: ['finesse', 'versatile'] },
    defaultDepth: '10-25 feet',
    generalTips: [
      'Spotted bass tend to hold deeper than largemouth',
      'Focus on bluff walls, steep rock banks, and deep points',
      'They school more than largemouth so when you find one expect more',
      'Use a drop shot for vertical presentations near steep structure'
    ]
  },
  'crappie': {
    primaryTechnique: 'jigging',
    secondaryTechnique: 'live-bait',
    primaryLure: { name: 'Tube Jig', color: 'chartreuse', size: '1/16oz', tags: ['jig', 'tube', 'panfish'] },
    secondaryLure: { name: 'Live Minnow', color: 'natural', size: 'small', tags: ['live-bait', 'minnow', 'panfish'] },
    line: { type: 'monofilament', weight: '4-6lb' },
    rodReel: { rodType: 'spinning', power: 'ultra-light', action: 'slow', reelType: 'spinning', tags: ['panfish', 'ultralight'] },
    defaultDepth: '5-15 feet',
    generalTips: [
      'Look for brush piles, stake beds, and submerged structure',
      'Use a slip float to keep your bait at the right depth',
      'Crappie often suspend so use electronics to find the right depth',
      'Slow vertical jigging is deadly around structure',
      'Spider rigging multiple poles covers more water'
    ]
  },
  'bluegill': {
    primaryTechnique: 'live-bait',
    secondaryTechnique: 'jigging',
    primaryLure: { name: 'Live Worm on #6 Hook', color: 'natural', size: '#6 hook', tags: ['live-bait', 'worm', 'panfish'] },
    secondaryLure: { name: 'Small Jig', color: 'chartreuse', size: '1/64oz', tags: ['jig', 'micro', 'panfish'] },
    line: { type: 'monofilament', weight: '4lb' },
    rodReel: { rodType: 'spinning', power: 'ultra-light', action: 'slow', reelType: 'spinning', tags: ['panfish', 'ultralight'] },
    defaultDepth: '1-8 feet',
    generalTips: [
      'Fish around docks, weed edges, and shallow cover',
      'Small hooks are essential as bluegill have tiny mouths',
      'Use a bobber to suspend bait just above the bottom',
      'Bluegill bed in colonies during late spring in sandy or gravel areas',
      'Crickets and red worms are top live baits'
    ]
  },
  'channel-catfish': {
    primaryTechnique: 'bottom-fishing',
    secondaryTechnique: 'live-bait',
    primaryLure: { name: 'Stink Bait', color: 'varies', size: 'dip tube', tags: ['prepared-bait', 'catfish', 'scent'] },
    secondaryLure: { name: 'Cut Shad', color: 'natural', size: '2-3" chunks', tags: ['cut-bait', 'catfish', 'natural'] },
    line: { type: 'monofilament', weight: '15-20lb' },
    rodReel: { rodType: 'spinning', power: 'medium-heavy', action: 'moderate', reelType: 'spinning', tags: ['catfish', 'heavy-duty'] },
    defaultDepth: 'bottom',
    generalTips: [
      'Fish near channel edges, holes, and current breaks',
      'Catfish rely on scent so use strong-smelling baits',
      'Circle hooks reduce gut-hooking and improve catch-and-release',
      'Night fishing is often more productive than daytime'
    ]
  },
  'blue-catfish': {
    primaryTechnique: 'bottom-fishing',
    secondaryTechnique: 'live-bait',
    primaryLure: { name: 'Fresh Cut Shad', color: 'natural', size: '4-6" fillet', tags: ['cut-bait', 'catfish', 'fresh'] },
    secondaryLure: { name: 'Fresh Cut Skipjack', color: 'natural', size: '4-6" fillet', tags: ['cut-bait', 'catfish', 'oily'] },
    line: { type: 'monofilament', weight: '30-50lb' },
    rodReel: { rodType: 'casting', power: 'heavy', action: 'moderate', reelType: 'baitcasting', tags: ['catfish', 'heavy-duty', 'trophy'] },
    defaultDepth: 'bottom to deep channels',
    generalTips: [
      'Blue catfish prefer fresh cut bait over prepared baits',
      'Target river channel ledges, deep holes, and dam tailwaters',
      'Use circle hooks sized 8/0 to 10/0 for trophy blues',
      'Anchor upstream and let scent trail downstream to the fish',
      'These fish can exceed 50lbs so use heavy tackle'
    ]
  },
  'flathead-catfish': {
    primaryTechnique: 'live-bait',
    secondaryTechnique: 'bottom-fishing',
    primaryLure: { name: 'Live Bluegill', color: 'natural', size: '4-6"', tags: ['live-bait', 'catfish', 'large-bait'] },
    secondaryLure: { name: 'Live Shad', color: 'natural', size: '4-8"', tags: ['live-bait', 'catfish', 'large-bait'] },
    line: { type: 'monofilament', weight: '30-50lb' },
    rodReel: { rodType: 'casting', power: 'heavy', action: 'moderate', reelType: 'baitcasting', tags: ['catfish', 'heavy-duty', 'trophy'] },
    defaultDepth: 'bottom near structure',
    generalTips: [
      'Flatheads strongly prefer live bait over cut or prepared bait',
      'Fish near log jams, undercut banks, and large structure',
      'Night fishing is far more productive for flatheads',
      'Set the hook hard as flatheads have very tough mouths',
      'Check local regulations on using live bait species'
    ]
  },
  'walleye': {
    primaryTechnique: 'jigging',
    secondaryTechnique: 'trolling',
    primaryLure: { name: 'Jig + Minnow', color: 'chartreuse/white', size: '1/4oz', tags: ['jig', 'live-bait-combo', 'walleye'] },
    secondaryLure: { name: 'Deep-Diving Crankbait', color: 'perch pattern', size: '4-5"', tags: ['crankbait', 'trolling', 'deep'] },
    line: { type: 'fluorocarbon', weight: '8-10lb' },
    rodReel: { rodType: 'spinning', power: 'medium', action: 'moderate-fast', reelType: 'spinning', tags: ['walleye', 'sensitivity'] },
    defaultDepth: '10-25 feet',
    generalTips: [
      'Walleye feed most actively during low-light conditions',
      'Bounce a jig tipped with a minnow along the bottom slowly',
      'Target rocky points, gravel bars, and windblown shorelines',
      'Use bottom bouncers with spinners when trolling flats',
      'Fluorocarbon line is critical in clear water as walleye are line-shy'
    ]
  },
  'rainbow-trout': {
    primaryTechnique: 'live-bait',
    secondaryTechnique: 'fly-fishing-basics',
    primaryLure: { name: 'PowerBait / Worm', color: 'chartreuse/rainbow', size: 'small', tags: ['prepared-bait', 'trout', 'stocked'] },
    secondaryLure: { name: 'Small Inline Spinner', color: 'silver', size: '1/8oz', tags: ['spinner', 'trout', 'casting'] },
    line: { type: 'monofilament', weight: '4-6lb' },
    rodReel: { rodType: 'spinning', power: 'ultra-light', action: 'moderate', reelType: 'spinning', tags: ['trout', 'ultralight'] },
    defaultDepth: '2-10 feet',
    generalTips: [
      'Stocked trout respond well to PowerBait and worms',
      'Fish early morning or late evening for best results',
      'Use light line as trout have excellent vision in clear water',
      'In streams cast upstream and let your bait drift naturally'
    ]
  },
  'brown-trout': {
    primaryTechnique: 'fly-fishing-basics',
    secondaryTechnique: 'live-bait',
    primaryLure: { name: 'Nymph Fly', color: 'natural/olive', size: '#14', tags: ['fly', 'nymph', 'subsurface'] },
    secondaryLure: { name: 'Inline Spinner', color: 'gold', size: '1/4oz', tags: ['spinner', 'trout', 'hardware'] },
    line: { type: 'fluorocarbon', weight: '4-6lb' },
    rodReel: { rodType: 'spinning', power: 'ultra-light', action: 'moderate', reelType: 'spinning', tags: ['trout', 'finesse'] },
    defaultDepth: '3-12 feet',
    generalTips: [
      'Brown trout are more wary than other trout species',
      'Fish deeper pools and undercut banks during the day',
      'Use longer leaders and lighter tippet for spooky fish',
      'Fall is prime time for big browns during the spawn',
      'Gold and brown-colored lures mimic their natural forage'
    ]
  },
  'brook-trout': {
    primaryTechnique: 'fly-fishing-basics',
    secondaryTechnique: 'live-bait',
    primaryLure: { name: 'Small Dry Fly', color: 'natural', size: '#16', tags: ['fly', 'dry-fly', 'surface'] },
    secondaryLure: { name: 'Tiny Spinner', color: 'silver', size: '1/8oz', tags: ['spinner', 'trout', 'small-stream'] },
    line: { type: 'monofilament', weight: '2-4lb' },
    rodReel: { rodType: 'spinning', power: 'ultra-light', action: 'slow', reelType: 'spinning', tags: ['trout', 'ultralight', 'small-stream'] },
    defaultDepth: '1-6 feet',
    generalTips: [
      'Brook trout prefer cold clean water in small headwater streams',
      'Approach pools quietly as brookies spook easily in small streams',
      'Short accurate casts are more important than distance',
      'Small presentations work best as brook trout eat tiny insects',
      'Wet wading lets you approach fish without bank disturbance'
    ]
  },
  'musky': {
    primaryTechnique: 'trolling',
    secondaryTechnique: 'artificial-lure-selection',
    primaryLure: { name: 'Large Bucktail', color: 'black/orange', size: '1oz', tags: ['bucktail', 'musky', 'large'] },
    secondaryLure: { name: 'Large Jerkbait', color: 'perch', size: '8"', tags: ['jerkbait', 'musky', 'glide-bait'] },
    line: { type: 'braided', weight: '50-80lb + fluorocarbon leader' },
    rodReel: { rodType: 'casting', power: 'extra-heavy', action: 'fast', reelType: 'baitcasting', tags: ['musky', 'heavy-duty', 'trophy'] },
    defaultDepth: '5-20 feet',
    generalTips: [
      'Musky are the fish of 10,000 casts so patience is key',
      'Always do a figure-eight at the boat as musky often follow',
      'Use a steel or heavy fluorocarbon leader to prevent bite-offs',
      'Target weed edges, points, and rock structures',
      'Large baits catch large fish with musky'
    ]
  },
  'northern-pike': {
    primaryTechnique: 'spinnerbait',
    secondaryTechnique: 'trolling',
    primaryLure: { name: 'Large Spinnerbait', color: 'white/chartreuse', size: '1/2oz', tags: ['spinnerbait', 'pike', 'flash'] },
    secondaryLure: { name: 'Spoon', color: 'gold', size: '3/4oz', tags: ['spoon', 'pike', 'casting'] },
    line: { type: 'braided', weight: '30lb + wire leader' },
    rodReel: { rodType: 'casting', power: 'medium-heavy', action: 'fast', reelType: 'baitcasting', tags: ['pike', 'heavy-duty'] },
    defaultDepth: '3-15 feet',
    generalTips: [
      'Always use a wire or heavy fluorocarbon leader to prevent bite-offs',
      'Cast parallel to weed edges and retrieve steadily',
      'Pike are ambush predators so target areas near cover',
      'In spring target shallow warm bays where pike spawn'
    ]
  },
  'yellow-perch': {
    primaryTechnique: 'jigging',
    secondaryTechnique: 'live-bait',
    primaryLure: { name: 'Small Jig + Minnow', color: 'chartreuse', size: '1/16oz', tags: ['jig', 'panfish', 'perch'] },
    secondaryLure: { name: 'Live Minnow', color: 'natural', size: 'small', tags: ['live-bait', 'minnow', 'perch'] },
    line: { type: 'monofilament', weight: '4-6lb' },
    rodReel: { rodType: 'spinning', power: 'ultra-light', action: 'moderate', reelType: 'spinning', tags: ['panfish', 'perch'] },
    defaultDepth: '8-20 feet',
    generalTips: [
      'Perch travel in schools so when you catch one stay in the area',
      'Tip your jig with a minnow head or waxworm for best results',
      'Use electronics to locate schools on flats and drop-offs',
      'Perch are excellent table fare and one of the best tasting freshwater fish'
    ]
  },
  'striped-bass': {
    primaryTechnique: 'live-bait',
    secondaryTechnique: 'trolling',
    primaryLure: { name: 'Live Herring/Shad', color: 'natural', size: '6-8"', tags: ['live-bait', 'striper', 'large-bait'] },
    secondaryLure: { name: 'Umbrella Rig', color: 'white/silver', size: 'multi-arm', tags: ['umbrella-rig', 'striper', 'schooling'] },
    line: { type: 'braided', weight: '20-30lb' },
    rodReel: { rodType: 'spinning', power: 'medium-heavy', action: 'moderate-fast', reelType: 'spinning', tags: ['striper', 'heavy-duty'] },
    defaultDepth: '10-40 feet',
    generalTips: [
      'Follow the baitfish schools and stripers will be nearby',
      'Look for birds diving on bait to locate surface feeding stripers',
      'Downlines and planer boards help cover different depths when trolling',
      'In reservoirs target points and humps near deep water'
    ]
  },
  'carp': {
    primaryTechnique: 'bottom-fishing',
    secondaryTechnique: 'live-bait',
    primaryLure: { name: 'Pack Bait / Corn', color: 'yellow/tan', size: 'varies', tags: ['prepared-bait', 'carp', 'method'] },
    secondaryLure: { name: 'Hair Rig Boilie', color: 'various', size: '15-20mm', tags: ['boilie', 'carp', 'hair-rig'] },
    line: { type: 'monofilament', weight: '15-20lb' },
    rodReel: { rodType: 'spinning', power: 'medium', action: 'moderate', reelType: 'spinning', tags: ['carp', 'euro-style'] },
    defaultDepth: 'bottom',
    generalTips: [
      'Pre-bait your swim with corn or boilies to attract carp',
      'Use a hair rig to present bait naturally away from the hook',
      'Carp are line-shy so use a long leader and stay quiet',
      'Look for carp tailing in shallow water during warm mornings',
      'Patience is essential as carp fishing often requires long waits'
    ]
  },
  'gar': {
    primaryTechnique: 'live-bait',
    secondaryTechnique: 'artificial-lure-selection',
    primaryLure: { name: 'Rope Lure', color: 'white', size: '4-6"', tags: ['rope-lure', 'gar', 'specialty'] },
    secondaryLure: { name: 'Cut Bait on Treble', color: 'natural', size: '2-3"', tags: ['cut-bait', 'gar', 'treble-hook'] },
    line: { type: 'braided', weight: '20-30lb' },
    rodReel: { rodType: 'casting', power: 'medium-heavy', action: 'fast', reelType: 'baitcasting', tags: ['gar', 'specialty'] },
    defaultDepth: 'surface to 5 feet',
    generalTips: [
      'Rope lures tangle in gar teeth making hooksets unnecessary',
      'Look for gar rolling on the surface to breathe',
      'Do not set the hook immediately as gar hold bait sideways before swallowing',
      'Gar have very hard bony mouths making traditional hooks difficult'
    ]
  },
  'white-bass': {
    primaryTechnique: 'jigging',
    secondaryTechnique: 'live-bait',
    primaryLure: { name: 'White Jig', color: 'white', size: '1/4oz', tags: ['jig', 'white-bass', 'schooling'] },
    secondaryLure: { name: 'Small Inline Spinner', color: 'silver', size: '1/4oz', tags: ['spinner', 'white-bass', 'casting'] },
    line: { type: 'monofilament', weight: '6-8lb' },
    rodReel: { rodType: 'spinning', power: 'medium-light', action: 'fast', reelType: 'spinning', tags: ['white-bass', 'light-tackle'] },
    defaultDepth: '5-20 feet',
    generalTips: [
      'White bass school heavily so once you find one you will find many',
      'In spring white bass run up tributaries making them easy to target',
      'Small white or chartreuse jigs are the go-to bait',
      'Watch for surface feeding frenzies and cast into the chaos'
    ]
  },
  'sauger': {
    primaryTechnique: 'jigging',
    secondaryTechnique: 'live-bait',
    primaryLure: { name: 'Jig + Minnow', color: 'chartreuse/orange', size: '1/4oz', tags: ['jig', 'sauger', 'walleye-family'] },
    secondaryLure: { name: 'Blade Bait', color: 'silver', size: '1/2oz', tags: ['blade-bait', 'sauger', 'vibration'] },
    line: { type: 'fluorocarbon', weight: '8-10lb' },
    rodReel: { rodType: 'spinning', power: 'medium', action: 'moderate-fast', reelType: 'spinning', tags: ['sauger', 'sensitivity'] },
    defaultDepth: '15-30 feet',
    generalTips: [
      'Sauger prefer deeper murkier water than walleye',
      'Fish below dams and in deep river channels for best results',
      'Vertical jigging with a minnow-tipped jig is the top technique',
      'Sauger bite very lightly so use a sensitive rod tip'
    ]
  },
  'redfish': {
    primaryTechnique: 'live-bait',
    secondaryTechnique: 'artificial-lure-selection',
    primaryLure: { name: 'Live Shrimp', color: 'natural', size: 'medium', tags: ['live-bait', 'saltwater', 'inshore'] },
    secondaryLure: { name: 'Gold Spoon', color: 'gold', size: '1/2oz', tags: ['spoon', 'saltwater', 'weedless'] },
    line: { type: 'braided', weight: '15-20lb + fluorocarbon leader' },
    rodReel: { rodType: 'spinning', power: 'medium', action: 'fast', reelType: 'spinning', tags: ['inshore', 'saltwater', 'redfish'] },
    defaultDepth: '1-6 feet',
    generalTips: [
      'Look for tailing redfish on shallow grass flats during low tide',
      'Gold spoons are the classic redfish lure on the flats',
      'Cast ahead of cruising fish not directly at them',
      'Target oyster bars, dock pilings, and grass edges',
      'Live shrimp under a popping cork is hard to beat'
    ]
  },
  'speckled-trout': {
    primaryTechnique: 'live-bait',
    secondaryTechnique: 'topwater',
    primaryLure: { name: 'Live Shrimp Under Popping Cork', color: 'natural', size: 'medium', tags: ['live-bait', 'saltwater', 'popping-cork'] },
    secondaryLure: { name: 'Soft Plastic Paddle Tail', color: 'glow/chartreuse', size: '3-4"', tags: ['soft-plastic', 'saltwater', 'jighead'] },
    line: { type: 'braided', weight: '10-15lb + fluorocarbon leader' },
    rodReel: { rodType: 'spinning', power: 'medium-light', action: 'fast', reelType: 'spinning', tags: ['inshore', 'saltwater', 'trout'] },
    defaultDepth: '2-8 feet',
    generalTips: [
      'Pop a cork to attract speckled trout with the commotion',
      'Fish grass flats, drop-offs, and areas near passes',
      'Topwater lures at dawn produce explosive strikes',
      'Speckled trout have soft mouths so use a lighter drag'
    ]
  },
  'flounder': {
    primaryTechnique: 'bottom-fishing',
    secondaryTechnique: 'drift-fishing',
    primaryLure: { name: 'Live Mud Minnow / Shrimp', color: 'natural', size: 'medium', tags: ['live-bait', 'saltwater', 'bottom'] },
    secondaryLure: { name: 'White Bucktail Jig', color: 'white', size: '1/2oz', tags: ['bucktail', 'saltwater', 'bottom-bouncing'] },
    line: { type: 'braided', weight: '15-20lb' },
    rodReel: { rodType: 'spinning', power: 'medium', action: 'moderate-fast', reelType: 'spinning', tags: ['inshore', 'saltwater', 'flounder'] },
    defaultDepth: 'bottom',
    generalTips: [
      'Flounder lie flat on the bottom waiting to ambush prey',
      'Drift across flats and channel edges dragging bait along bottom',
      'Tip a bucktail jig with a strip of cut bait for scent and action',
      'Wait before setting the hook as flounder engulf bait slowly',
      'Target sandy or muddy bottoms near structure changes'
    ]
  },
  'snook': {
    primaryTechnique: 'live-bait',
    secondaryTechnique: 'topwater',
    primaryLure: { name: 'Live Pilchard', color: 'natural', size: '3-4"', tags: ['live-bait', 'saltwater', 'snook'] },
    secondaryLure: { name: 'White Jerkbait', color: 'white', size: '4-5"', tags: ['jerkbait', 'saltwater', 'topwater'] },
    line: { type: 'braided', weight: '20-30lb + 30lb fluorocarbon leader' },
    rodReel: { rodType: 'spinning', power: 'medium to medium-heavy', action: 'fast', reelType: 'spinning', tags: ['inshore', 'saltwater', 'snook'] },
    defaultDepth: '1-10 feet',
    generalTips: [
      'Snook are ambush feeders that stage around structure and current',
      'Fish bridges, dock lights, and mangrove shorelines',
      'Live pilchards freelined near structure are deadly',
      'Snook have a sharp gill plate so use a heavy leader',
      'Dawn and dusk are prime feeding windows for snook'
    ]
  },
  'tarpon': {
    primaryTechnique: 'live-bait',
    secondaryTechnique: 'fly-fishing-basics',
    primaryLure: { name: 'Live Crab / Mullet', color: 'natural', size: 'medium-large', tags: ['live-bait', 'saltwater', 'tarpon'] },
    secondaryLure: { name: 'Large Tarpon Fly', color: 'black/purple', size: '3/0-4/0', tags: ['fly', 'saltwater', 'tarpon'] },
    line: { type: 'braided', weight: '40-60lb + 60lb fluorocarbon leader' },
    rodReel: { rodType: 'spinning', power: 'heavy', action: 'fast', reelType: 'spinning', tags: ['offshore', 'saltwater', 'tarpon', 'trophy'] },
    defaultDepth: '2-15 feet',
    generalTips: [
      'Tarpon are catch-and-release only in many areas so check regulations',
      'Present bait in the path of rolling or migrating tarpon',
      'Set the hook multiple times as tarpon have extremely hard mouths',
      'Bow to the fish during jumps to prevent line breaks',
      'Use heavy leader to withstand their abrasive mouth'
    ]
  },
  'mahi-mahi': {
    primaryTechnique: 'trolling',
    secondaryTechnique: 'live-bait',
    primaryLure: { name: 'Skirted Trolling Lure', color: 'blue/pink', size: '6-8"', tags: ['trolling', 'offshore', 'skirted'] },
    secondaryLure: { name: 'Live Ballyhoo', color: 'natural', size: '8-10"', tags: ['live-bait', 'offshore', 'rigged'] },
    line: { type: 'braided', weight: '30-50lb' },
    rodReel: { rodType: 'spinning', power: 'medium-heavy', action: 'fast', reelType: 'spinning', tags: ['offshore', 'saltwater', 'pelagic'] },
    defaultDepth: 'surface to 30 feet',
    generalTips: [
      'Look for floating debris, weed lines, and current edges',
      'Mahi-mahi are schooling fish so keep hooked fish near the boat to hold the school',
      'Bright colored lures in blue, pink, and green work best',
      'Troll at 6-9 knots with a spread of lures at different distances'
    ]
  },
  'king-mackerel': {
    primaryTechnique: 'trolling',
    secondaryTechnique: 'live-bait',
    primaryLure: { name: 'Live Blue Runner', color: 'natural', size: '8-12"', tags: ['live-bait', 'offshore', 'king-mackerel'] },
    secondaryLure: { name: 'Diving Plug', color: 'silver/blue', size: '5-7"', tags: ['plug', 'trolling', 'diving'] },
    line: { type: 'monofilament', weight: '30-40lb + wire leader' },
    rodReel: { rodType: 'spinning', power: 'medium-heavy', action: 'fast', reelType: 'spinning', tags: ['offshore', 'saltwater', 'kingfish'] },
    defaultDepth: '15-40 feet',
    generalTips: [
      'Wire leader is essential as king mackerel have razor-sharp teeth',
      'Slow troll live bait on stinger rigs around reefs and wrecks',
      'Look for bait schools on your electronics and fish nearby',
      'Kings often hit the tail end of a bait so stinger hooks are important'
    ]
  },
  'grouper': {
    primaryTechnique: 'bottom-fishing',
    secondaryTechnique: 'jigging',
    primaryLure: { name: 'Live Pinfish', color: 'natural', size: '5-7"', tags: ['live-bait', 'offshore', 'grouper'] },
    secondaryLure: { name: 'Large Jig', color: 'white/chartreuse', size: '2oz', tags: ['jig', 'vertical', 'offshore'] },
    line: { type: 'braided', weight: '50-80lb' },
    rodReel: { rodType: 'casting', power: 'heavy', action: 'fast', reelType: 'baitcasting', tags: ['offshore', 'saltwater', 'bottom', 'heavy-duty'] },
    defaultDepth: '30-100 feet',
    generalTips: [
      'Grouper dive into structure immediately when hooked so reel hard and fast',
      'Fish ledges, wrecks, and reef structure on the bottom',
      'Use heavy tackle to keep grouper from reaching their holes',
      'Vertical jigging with large butterfly jigs can be very effective',
      'Check season dates carefully as grouper seasons are strictly regulated'
    ]
  },
  'sheepshead': {
    primaryTechnique: 'bottom-fishing',
    secondaryTechnique: 'live-bait',
    primaryLure: { name: 'Live Fiddler Crab', color: 'natural', size: 'small', tags: ['live-bait', 'saltwater', 'crab'] },
    secondaryLure: { name: 'Fresh Shrimp on Small Hook', color: 'natural', size: '#1-#2 hook', tags: ['live-bait', 'saltwater', 'shrimp'] },
    line: { type: 'fluorocarbon', weight: '15-20lb' },
    rodReel: { rodType: 'spinning', power: 'medium', action: 'fast', reelType: 'spinning', tags: ['inshore', 'saltwater', 'sheepshead'] },
    defaultDepth: 'near structure and pilings',
    generalTips: [
      'Sheepshead have small mouths with human-like teeth so use small sharp hooks',
      'Fish directly against pilings, docks, jetties, and bridges',
      'Their bite is very subtle so watch your line closely',
      'Scrape barnacles off pilings to create a chum trail',
      'Fiddler crabs are the number one bait for sheepshead'
    ]
  },
  'red-snapper': {
    primaryTechnique: 'bottom-fishing',
    secondaryTechnique: 'jigging',
    primaryLure: { name: 'Cut Squid / Cigar Minnow', color: 'natural', size: '3-4" piece', tags: ['cut-bait', 'offshore', 'snapper'] },
    secondaryLure: { name: 'Vertical Jig', color: 'silver/blue', size: '4oz', tags: ['jig', 'vertical', 'speed-jig'] },
    line: { type: 'braided', weight: '50-80lb' },
    rodReel: { rodType: 'casting', power: 'heavy', action: 'fast', reelType: 'baitcasting', tags: ['offshore', 'saltwater', 'bottom', 'heavy-duty'] },
    defaultDepth: '60-200 feet',
    generalTips: [
      'Red snapper seasons are very short and strictly regulated so check dates',
      'Fish directly over natural and artificial reefs in deep water',
      'Use circle hooks as they are often required by regulation',
      'Descending devices help with barotrauma for released fish',
      'Electric reels make deep dropping much less fatiguing'
    ]
  }
};
