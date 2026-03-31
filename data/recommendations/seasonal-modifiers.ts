import type { Season } from '../types';

interface SeasonalModifier {
  technique?: string;
  lure?: { name: string; color: string; size: string; tags: string[] };
  depth?: string;
  tips?: string[];
}

export const seasonalModifiers: Record<string, Record<Season, Partial<SeasonalModifier>>> = {
  'largemouth-bass': {
    spring: {
      technique: 'spinnerbait',
      lure: { name: 'Spinnerbait / Jerkbait', color: 'white/chartreuse', size: '3/8oz', tags: ['spinnerbait', 'reaction', 'prespawn'] },
      depth: '2-8 feet',
      tips: [
        'Target shallow flats and spawning pockets as water warms',
        'Jerkbaits are excellent in the prespawn period',
        'Fish slowly warm up so match your retrieve speed to their activity level'
      ]
    },
    summer: {
      technique: 'texas-rig',
      lure: { name: 'Deep Diving Crankbait / Plastic Worm', color: 'green pumpkin', size: '7-10"', tags: ['deep', 'worm', 'summer-pattern'] },
      depth: '8-20 feet',
      tips: [
        'Fish deep structure during midday heat',
        'Early morning and late evening topwater bites can be incredible',
        'Worms fished slowly along deep ledges produce big bass in summer'
      ]
    },
    fall: {
      technique: 'artificial-lure-selection',
      lure: { name: 'Lipless Crankbait / Spinnerbait', color: 'red craw/shad', size: '1/2oz', tags: ['lipless', 'reaction', 'fall-pattern'] },
      depth: '3-12 feet',
      tips: [
        'Follow the baitfish into the backs of creeks',
        'Lipless crankbaits ripped through grass are deadly in fall',
        'Bass feed aggressively in fall to bulk up for winter'
      ]
    },
    winter: {
      technique: 'jigging',
      lure: { name: 'Blade Bait / Slow Jig', color: 'silver/natural', size: '1/2oz', tags: ['blade-bait', 'slow', 'winter-pattern'] },
      depth: '15-30 feet',
      tips: [
        'Slow way down as bass metabolism drops in cold water',
        'Blade baits worked vertically over deep structure produce in winter',
        'Focus on the warmest part of the day for best activity'
      ]
    }
  },
  'smallmouth-bass': {
    spring: {
      technique: 'ned-rig',
      lure: { name: 'Ned Rig / Tube', color: 'green pumpkin', size: '3"', tags: ['ned-rig', 'finesse', 'prespawn'] },
      depth: '3-10 feet',
      tips: [
        'Smallmouth move to shallow gravel and rock areas to spawn',
        'Ned rigs dragged slowly across rocky flats are hard to beat',
        'Look for beds on gravel points in 3-6 feet of water'
      ]
    },
    summer: {
      technique: 'drop-shot',
      lure: { name: 'Drop Shot Minnow', color: 'smoke/silver', size: '3-4"', tags: ['drop-shot', 'deep', 'finesse'] },
      depth: '15-30 feet',
      tips: [
        'Smallmouth relate to deep rock structure and humps in summer',
        'Drop shot with a nose-hooked minnow bait is the top producer',
        'Fish main lake points and offshore humps for bigger fish'
      ]
    },
    fall: {
      technique: 'jigging',
      lure: { name: 'Tube Jig / Swimbait', color: 'crayfish/brown', size: '3-4"', tags: ['tube', 'aggressive', 'fall-feeding'] },
      depth: '8-20 feet',
      tips: [
        'Smallmouth feed aggressively on crayfish in fall',
        'Tubes dragged along rocky bottoms mimic fleeing crayfish perfectly',
        'Look for smallmouth chasing bait on windblown points'
      ]
    },
    winter: {
      technique: 'jigging',
      lure: { name: 'Blade Bait / Hair Jig', color: 'silver/brown', size: '1/4-3/8oz', tags: ['blade-bait', 'slow', 'deep'] },
      depth: '20-40 feet',
      tips: [
        'Smallmouth go very deep in winter and become lethargic',
        'Use a slow lift-and-drop with blade baits on deep structure',
        'Small hair jigs barely moved can trigger bites from cold fish'
      ]
    }
  },
  'spotted-bass': {
    spring: {
      technique: 'jigging',
      lure: { name: 'Jerkbait / Jig', color: 'shad/crawfish', size: '3-4"', tags: ['jerkbait', 'spring', 'prespawn'] },
      depth: '5-15 feet',
      tips: [
        'Spotted bass spawn deeper than largemouth typically 8-15 feet',
        'Jerkbaits over rock bluffs produce aggressive strikes in spring',
        'Target steep banks and bluff walls as water warms'
      ]
    },
    summer: {
      technique: 'drop-shot',
      lure: { name: 'Drop Shot Finesse Worm', color: 'morning dawn', size: '4"', tags: ['drop-shot', 'deep', 'spotted-bass'] },
      depth: '20-40 feet',
      tips: [
        'Spotted bass suspend over deep structure in summer',
        'Drop shot with a long leader lets you target suspended fish precisely',
        'Fish bluff walls and steep rock banks in the shade'
      ]
    },
    fall: {
      technique: 'carolina-rig',
      lure: { name: 'Carolina Rig Creature Bait', color: 'green pumpkin', size: '4-5"', tags: ['carolina-rig', 'fall', 'transition'] },
      depth: '10-25 feet',
      tips: [
        'Spotted bass follow shad to creek arms in fall',
        'Carolina rigs cover water quickly to locate scattered fall fish',
        'Target transition zones between deep and shallow water'
      ]
    },
    winter: {
      technique: 'drop-shot',
      lure: { name: 'Blade Bait / Spoon', color: 'silver', size: '1/2oz', tags: ['blade-bait', 'winter', 'deep'] },
      depth: '25-50 feet',
      tips: [
        'Spotted bass go the deepest of the black bass species in winter',
        'Vertical jigging spoons over deep schools can be very effective',
        'Use electronics to find suspended schools on bluff walls'
      ]
    }
  },
  'crappie': {
    spring: {
      technique: 'jigging',
      lure: { name: 'Tube Jig / Minnow', color: 'chartreuse/white', size: '1/16oz', tags: ['tube', 'shallow', 'spawning'] },
      depth: '2-8 feet',
      tips: [
        'Crappie move to shallow brush piles and stake beds to spawn',
        'Fish around wood cover in protected coves and bays',
        'Spring is the best time of year to catch numbers of crappie'
      ]
    },
    summer: {
      technique: 'jigging',
      lure: { name: 'Deep Jig / Minnow', color: 'blue/silver', size: '1/8oz', tags: ['jig', 'deep', 'summer-structure'] },
      depth: '12-25 feet',
      tips: [
        'Crappie move to deep brush piles and bridge pilings in summer',
        'Use electronics to find the exact depth crappie are holding',
        'Spider rigging allows you to present multiple baits at different depths'
      ]
    },
    fall: {
      technique: 'jigging',
      lure: { name: 'Jig / Small Crankbait', color: 'chartreuse/shad', size: '1/16oz', tags: ['jig', 'transition', 'fall'] },
      depth: '8-15 feet',
      tips: [
        'Crappie transition between summer and winter depths in fall',
        'Target channel swings and creek mouths as crappie migrate',
        'Casting small crankbaits can locate scattered fall crappie quickly'
      ]
    },
    winter: {
      technique: 'jigging',
      lure: { name: 'Hair Jig / Minnow', color: 'white/pink', size: '1/32oz', tags: ['hair-jig', 'slow', 'deep'] },
      depth: '15-30 feet',
      tips: [
        'Crappie hold tight to deep structure in winter',
        'Slow vertical jigging with tiny movements is the key',
        'Tipping jigs with live minnows increases catch rates in cold water'
      ]
    }
  },
  'bluegill': {
    spring: {
      technique: 'live-bait',
      lure: { name: 'Live Worm / Cricket', color: 'natural', size: '#8 hook', tags: ['live-bait', 'bedding', 'spawning'] },
      depth: '1-5 feet',
      tips: [
        'Bluegill bed in large colonies on sandy flats in late spring',
        'Sight fishing to beds with a small fly or bait is exciting',
        'This is the best time of year to catch big bull bluegill'
      ]
    },
    summer: {
      technique: 'live-bait',
      lure: { name: 'Worm / Small Jig', color: 'natural/chartreuse', size: '#8 hook or 1/64oz', tags: ['live-bait', 'weed-edges', 'summer'] },
      depth: '3-10 feet',
      tips: [
        'Bluegill hold along weed edges and dock shade in summer',
        'Fish early and late in the day during peak summer heat',
        'A small piece of worm on a tiny jig is very effective'
      ]
    },
    fall: {
      technique: 'jigging',
      lure: { name: 'Small Jig / Worm', color: 'black/chartreuse', size: '1/64oz', tags: ['jig', 'fall', 'panfish'] },
      depth: '5-12 feet',
      tips: [
        'Bluegill feed actively in fall as water temps drop',
        'Target deeper weed edges and drop-offs as weeds die back',
        'Small jigs tipped with wax worms are excellent in fall'
      ]
    },
    winter: {
      technique: 'jigging',
      lure: { name: 'Tiny Jig / Wax Worm', color: 'glow/chartreuse', size: '1/64oz', tags: ['ice-fishing', 'micro-jig', 'winter'] },
      depth: '8-20 feet',
      tips: [
        'Bluegill can be caught through the ice on tiny presentations',
        'Downsize everything in winter for cold-water bluegill',
        'Look for green weeds as they produce oxygen and attract bluegill'
      ]
    }
  },
  'channel-catfish': {
    spring: {
      technique: 'bottom-fishing',
      lure: { name: 'Night Crawler / Stink Bait', color: 'natural', size: 'whole worm', tags: ['live-bait', 'spring', 'warming'] },
      depth: '3-10 feet',
      tips: [
        'Catfish move to shallow flats as water warms in spring',
        'Fish near creek mouths and riprap banks in early spring',
        'Night crawlers are excellent as catfish become more active'
      ]
    },
    summer: {
      technique: 'bottom-fishing',
      lure: { name: 'Stink Bait / Cut Shad', color: 'varies', size: 'dip tube or 2-3" chunks', tags: ['prepared-bait', 'summer', 'deep'] },
      depth: '10-25 feet',
      tips: [
        'Fish deep channel ledges and holes during summer heat',
        'Night fishing is most productive during hot summer months',
        'Stink baits work best in warm water when scent disperses quickly'
      ]
    },
    fall: {
      technique: 'bottom-fishing',
      lure: { name: 'Cut Shad / Chicken Liver', color: 'natural', size: '2-3" chunks', tags: ['cut-bait', 'fall', 'creek-mouth'] },
      depth: '5-15 feet',
      tips: [
        'Catfish feed heavily in fall near creek mouths following shad',
        'Use fresh cut shad as baitfish migrate into creeks',
        'Fish transition areas between shallow and deep water'
      ]
    },
    winter: {
      technique: 'bottom-fishing',
      lure: { name: 'Cut Bait / Blood Bait', color: 'natural', size: '2-3" chunks', tags: ['cut-bait', 'winter', 'deep-hole'] },
      depth: '15-30 feet',
      tips: [
        'Catfish hold in deep holes and slow current areas in winter',
        'Slow down your presentation as catfish are less active',
        'Fish the warmest part of the day for best winter catfish action'
      ]
    }
  },
  'blue-catfish': {
    spring: {
      technique: 'bottom-fishing',
      lure: { name: 'Fresh Cut Shad', color: 'natural', size: '4-6" fillet', tags: ['cut-bait', 'spring', 'staging'] },
      depth: '10-20 feet',
      tips: [
        'Blues move to shallow flats and tributaries in spring',
        'Target current breaks and channel edges in rivers',
        'Fresh cut shad outperforms old or frozen bait in spring'
      ]
    },
    summer: {
      technique: 'bottom-fishing',
      lure: { name: 'Fresh Cut Skipjack / Shad', color: 'natural', size: '4-6" fillet', tags: ['cut-bait', 'summer', 'deep-channel'] },
      depth: '20-40 feet',
      tips: [
        'Fish deep river channels and reservoir creek ledges',
        'Blue catfish school heavily in summer and can be found with electronics',
        'Anchor on deep ledges and fish multiple rods for best results'
      ]
    },
    fall: {
      technique: 'bottom-fishing',
      lure: { name: 'Fresh Cut Shad / Live Shad', color: 'natural', size: '4-8"', tags: ['cut-bait', 'fall', 'feeding'] },
      depth: '10-25 feet',
      tips: [
        'Blue catfish follow shad migrations into creek arms in fall',
        'Trophy blues feed aggressively in the fall cooling period',
        'Fish creek mouths and flats where shad congregate'
      ]
    },
    winter: {
      technique: 'bottom-fishing',
      lure: { name: 'Fresh Cut Shad', color: 'natural', size: '4-6" fillet', tags: ['cut-bait', 'winter', 'deep'] },
      depth: '25-50 feet',
      tips: [
        'Blue catfish hold in the deepest holes and channels in winter',
        'Fish mid-afternoon during the warmest water temperatures',
        'Blue catfish remain more active than other catfish species in cold water'
      ]
    }
  },
  'flathead-catfish': {
    spring: {
      technique: 'live-bait',
      lure: { name: 'Live Bluegill / Sunfish', color: 'natural', size: '4-6"', tags: ['live-bait', 'spring', 'shallow'] },
      depth: '3-10 feet',
      tips: [
        'Flatheads move shallow near log jams and undercut banks in spring',
        'Live bait fished near wood cover is most productive',
        'As water warms above 60F flatheads become increasingly active'
      ]
    },
    summer: {
      technique: 'live-bait',
      lure: { name: 'Live Bluegill / Shad', color: 'natural', size: '5-8"', tags: ['live-bait', 'summer', 'trophy'] },
      depth: '5-20 feet',
      tips: [
        'Summer is peak flathead season with fish most active at night',
        'Target deep logjams and structure in main river channels',
        'Larger live baits target larger flatheads in summer'
      ]
    },
    fall: {
      technique: 'live-bait',
      lure: { name: 'Live Shad / Bluegill', color: 'natural', size: '5-7"', tags: ['live-bait', 'fall', 'feeding'] },
      depth: '5-15 feet',
      tips: [
        'Flatheads feed heavily before winter dormancy in fall',
        'Fish transitional areas near deep holes and structure',
        'Some of the biggest flatheads of the year come in early fall'
      ]
    },
    winter: {
      technique: 'bottom-fishing',
      lure: { name: 'Live Bluegill / Cut Bait', color: 'natural', size: '4-6"', tags: ['live-bait', 'winter', 'deep'] },
      depth: '15-30 feet',
      tips: [
        'Flatheads become very lethargic in cold water and are hard to catch',
        'Fish deep holes and log jams where flatheads winter',
        'Warm winter days may trigger brief feeding windows'
      ]
    }
  },
  'walleye': {
    spring: {
      technique: 'jigging',
      lure: { name: 'Jig + Minnow', color: 'chartreuse/white', size: '1/8-1/4oz', tags: ['jig', 'minnow', 'prespawn'] },
      depth: '4-12 feet',
      tips: [
        'Walleye run up rivers and tributaries to spawn in early spring',
        'Jig and minnow fished slowly along gravel bars is the go-to',
        'Fish the windblown side of points for staging walleye'
      ]
    },
    summer: {
      technique: 'trolling',
      lure: { name: 'Deep Diving Crankbait', color: 'perch/firetiger', size: '4-5"', tags: ['crankbait', 'trolling', 'deep'] },
      depth: '15-30 feet',
      tips: [
        'Trolling deep diving crankbaits covers water and finds scattered fish',
        'Use lead core line or snap weights to reach deeper depths',
        'Target mud flats and deep weed edges in summer'
      ]
    },
    fall: {
      technique: 'jigging',
      lure: { name: 'Jigging Rap / Blade Bait', color: 'perch/silver', size: '3/8oz', tags: ['jigging-rap', 'aggressive', 'fall'] },
      depth: '10-25 feet',
      tips: [
        'Walleye feed aggressively in fall as they fatten up for winter',
        'Jigging Raps and blade baits trigger reaction strikes in fall',
        'Target rocky points and transitions from gravel to mud'
      ]
    },
    winter: {
      technique: 'jigging',
      lure: { name: 'Jig + Minnow / Spoon', color: 'gold/glow', size: '1/8oz', tags: ['ice-fishing', 'slow', 'winter'] },
      depth: '20-35 feet',
      tips: [
        'Walleye are a top ice fishing target in northern states',
        'Tip jigs with a minnow head and work very slowly',
        'First and last light are the prime bite windows even in winter'
      ]
    }
  },
  'rainbow-trout': {
    spring: {
      technique: 'live-bait',
      lure: { name: 'PowerBait / Nymph', color: 'rainbow/chartreuse', size: 'small', tags: ['nymph', 'subsurface', 'spring'] },
      depth: '3-8 feet',
      tips: [
        'Stocked trout are most actively feeding in cool spring water',
        'Nymphs drifted below an indicator are effective in streams',
        'Spring runoff can muddy water so use brighter colors'
      ]
    },
    summer: {
      technique: 'fly-fishing-basics',
      lure: { name: 'Dry Fly / Spinner', color: 'natural', size: '#14-16', tags: ['dry-fly', 'early-morning', 'summer'] },
      depth: '1-6 feet',
      tips: [
        'Fish early morning and late evening when trout are most active',
        'Trout become stressed in water above 65F so handle carefully',
        'Target shaded areas and deeper pools during midday heat'
      ]
    },
    fall: {
      technique: 'fly-fishing-basics',
      lure: { name: 'Streamer / Egg Pattern', color: 'olive/orange', size: '#8-12', tags: ['streamer', 'fall', 'aggressive'] },
      depth: '2-8 feet',
      tips: [
        'Fall stocking programs put fresh fish in many waters',
        'Egg patterns work well as other trout species spawn in fall',
        'Streamers stripped through deeper runs produce larger fish'
      ]
    },
    winter: {
      technique: 'live-bait',
      lure: { name: 'Tiny Nymph / PowerBait', color: 'natural/olive', size: '#16-18', tags: ['nymph', 'slow', 'deep'] },
      depth: '4-12 feet',
      tips: [
        'Trout remain active in cold water and can be caught all winter',
        'Slow your presentation and use smaller baits in cold water',
        'Midday is often the best time as water warms slightly'
      ]
    }
  },
  'brown-trout': {
    spring: {
      technique: 'fly-fishing-basics',
      lure: { name: 'Nymph / Wet Fly', color: 'natural/olive', size: '#12-14', tags: ['nymph', 'subsurface', 'spring'] },
      depth: '3-8 feet',
      tips: [
        'Brown trout feed subsurface on nymphs as insects become active',
        'Fish deeper runs and pools where browns hold in spring',
        'Use a longer leader and lighter tippet for wary spring browns'
      ]
    },
    summer: {
      technique: 'fly-fishing-basics',
      lure: { name: 'Dry Fly / Terrestrial', color: 'natural/black', size: '#10-14', tags: ['dry-fly', 'terrestrial', 'summer'] },
      depth: '2-6 feet',
      tips: [
        'Hopper and beetle patterns are deadly for brown trout in summer',
        'Fish very early or very late as big browns are nocturnal',
        'Large browns often hold in the deepest pools during daylight'
      ]
    },
    fall: {
      technique: 'artificial-lure-selection',
      lure: { name: 'Streamer / Large Fly', color: 'olive/brown/white', size: '#2-6', tags: ['streamer', 'fall-spawn', 'trophy'] },
      depth: '2-10 feet',
      tips: [
        'Fall is brown trout spawning season and big fish move into streams',
        'Large streamers swung through runs trigger aggressive strikes',
        'This is the best time of year to catch a trophy brown trout'
      ]
    },
    winter: {
      technique: 'fly-fishing-basics',
      lure: { name: 'Tiny Nymph / Midge', color: 'black/olive', size: '#18-22', tags: ['midge', 'nymph', 'winter'] },
      depth: '4-10 feet',
      tips: [
        'Tiny midges are the primary food source for trout in winter',
        'Fish slow deep runs with small nymphs below an indicator',
        'Brown trout remain catchable all winter with patience and finesse'
      ]
    }
  },
  'brook-trout': {
    spring: {
      technique: 'fly-fishing-basics',
      lure: { name: 'Small Nymph / Wet Fly', color: 'natural', size: '#14-16', tags: ['nymph', 'small-stream', 'spring'] },
      depth: '1-4 feet',
      tips: [
        'Brook trout become active as streams warm above 45F in spring',
        'Small nymphs drifted through pocket water are effective',
        'Stealth is critical in the small streams brookies inhabit'
      ]
    },
    summer: {
      technique: 'fly-fishing-basics',
      lure: { name: 'Dry Fly / Terrestrial', color: 'natural/black', size: '#14-18', tags: ['dry-fly', 'attractor', 'summer'] },
      depth: '1-5 feet',
      tips: [
        'Small attractor dry flies produce exciting surface strikes',
        'Fish cold headwater streams as brook trout need water below 65F',
        'Short accurate casts to small pools and pockets are essential'
      ]
    },
    fall: {
      technique: 'fly-fishing-basics',
      lure: { name: 'Streamer / Egg Pattern', color: 'orange/olive', size: '#10-14', tags: ['streamer', 'spawn', 'fall'] },
      depth: '1-6 feet',
      tips: [
        'Brook trout spawn in fall on clean gravel in cold streams',
        'Males develop brilliant spawning colors in fall',
        'Avoid fishing directly on redds to protect spawning fish'
      ]
    },
    winter: {
      technique: 'live-bait',
      lure: { name: 'Tiny Nymph / Worm', color: 'natural', size: '#16-20', tags: ['nymph', 'slow', 'winter'] },
      depth: '2-6 feet',
      tips: [
        'Brook trout slow down significantly in winter',
        'Fish the deepest pools in small streams during cold months',
        'Very small slow presentations are the key in winter'
      ]
    }
  },
  'musky': {
    spring: {
      technique: 'artificial-lure-selection',
      lure: { name: 'Jerkbait / Twitch Bait', color: 'perch/sucker', size: '6-8"', tags: ['jerkbait', 'prespawn', 'shallow'] },
      depth: '3-10 feet',
      tips: [
        'Musky move to shallow bays and flats in spring',
        'Work jerkbaits slowly along weed edges and points',
        'Many states have closed musky seasons in spring to protect spawning fish'
      ]
    },
    summer: {
      technique: 'trolling',
      lure: { name: 'Large Bucktail / Topwater', color: 'black/orange', size: '1-2oz', tags: ['bucktail', 'topwater', 'prime-time'] },
      depth: '5-15 feet',
      tips: [
        'Summer is prime musky season with fish most active',
        'Topwater lures on calm mornings can produce incredible strikes',
        'Figure-eight at the boat on every cast as musky often follow'
      ]
    },
    fall: {
      technique: 'artificial-lure-selection',
      lure: { name: 'Large Jerkbait / Crankbait', color: 'natural', size: '8-12"', tags: ['jerkbait', 'trophy', 'fall-feed'] },
      depth: '8-20 feet',
      tips: [
        'Fall is trophy musky season as fish feed heavily before winter',
        'Upsize your lures in fall as musky want a big meal',
        'Target deep weed edges and rocky structure as weeds die'
      ]
    },
    winter: {
      technique: 'jigging',
      lure: { name: 'Large Sucker / Jig', color: 'natural', size: 'large', tags: ['live-bait', 'slow', 'deep'] },
      depth: '15-30 feet',
      tips: [
        'Winter musky fishing is very challenging but possible',
        'Live suckers fished deep are the best winter option',
        'Fish the warmest days when water temperature rises slightly'
      ]
    }
  },
  'northern-pike': {
    spring: {
      technique: 'spinnerbait',
      lure: { name: 'Spinnerbait / Spoon', color: 'white/silver', size: '1/2oz', tags: ['spinnerbait', 'shallow', 'prespawn'] },
      depth: '2-8 feet',
      tips: [
        'Pike move to warm shallow bays to spawn in early spring',
        'Slow-rolling spinnerbaits through shallow weeds is very effective',
        'Target dark-bottomed bays that warm faster in spring'
      ]
    },
    summer: {
      technique: 'trolling',
      lure: { name: 'Large Spoon / Crankbait', color: 'silver/firetiger', size: '3/4-1oz', tags: ['spoon', 'trolling', 'deep-weed'] },
      depth: '8-20 feet',
      tips: [
        'Pike relate to deep weed edges and points in summer',
        'Trolling spoons along weed lines covers water effectively',
        'Fish early morning before pike become lethargic in summer heat'
      ]
    },
    fall: {
      technique: 'artificial-lure-selection',
      lure: { name: 'Large Swimbait / Jerkbait', color: 'perch/sucker', size: '6-8"', tags: ['swimbait', 'fall', 'aggressive'] },
      depth: '5-15 feet',
      tips: [
        'Pike feed aggressively in fall on large baitfish',
        'Big swimbaits and jerkbaits target trophy pike in fall',
        'Target remaining weed beds as dying weeds push bait to green patches'
      ]
    },
    winter: {
      technique: 'jigging',
      lure: { name: 'Tip-Up / Large Jig', color: 'natural', size: 'large minnow/sucker', tags: ['tip-up', 'ice-fishing', 'live-bait'] },
      depth: '5-15 feet',
      tips: [
        'Pike are one of the top ice fishing species',
        'Tip-ups with large shiners are the classic winter pike method',
        'Pike remain relatively active under the ice near weed beds'
      ]
    }
  },
  'yellow-perch': {
    spring: {
      technique: 'live-bait',
      lure: { name: 'Live Minnow / Small Jig', color: 'chartreuse', size: '1/16oz', tags: ['live-bait', 'spring', 'shallow'] },
      depth: '4-12 feet',
      tips: [
        'Perch move to shallow gravel and sand to spawn in spring',
        'Minnows on a slip float are effective for shallow spring perch',
        'Look for perch in marinas and near riprap in early spring'
      ]
    },
    summer: {
      technique: 'jigging',
      lure: { name: 'Small Jig / Worm Harness', color: 'chartreuse/yellow', size: '1/16-1/8oz', tags: ['jig', 'deep', 'summer'] },
      depth: '15-30 feet',
      tips: [
        'Perch move to deeper flats and structure in summer',
        'Drifting with bottom bouncers and worm harnesses finds scattered schools',
        'Mark schools on electronics and anchor over them for vertical jigging'
      ]
    },
    fall: {
      technique: 'jigging',
      lure: { name: 'Small Jig + Minnow', color: 'chartreuse/orange', size: '1/16oz', tags: ['jig', 'fall', 'feeding'] },
      depth: '10-25 feet',
      tips: [
        'Perch feed aggressively in fall and are often found in large schools',
        'Target mid-depth flats and transitions for fall perch',
        'Tipping jigs with minnows or minnow heads increases strikes'
      ]
    },
    winter: {
      technique: 'jigging',
      lure: { name: 'Tiny Jig / Spoon', color: 'glow/chartreuse', size: '1/32oz', tags: ['ice-fishing', 'micro', 'winter'] },
      depth: '15-30 feet',
      tips: [
        'Yellow perch are a premier ice fishing species',
        'Small spoons tipped with minnow heads or spikes are deadly',
        'Drill many holes and stay mobile to locate schools under the ice'
      ]
    }
  },
  'striped-bass': {
    spring: {
      technique: 'live-bait',
      lure: { name: 'Live Herring / Jig', color: 'white/chartreuse', size: '6-8" or 1/2oz', tags: ['live-bait', 'spring-run', 'shallow'] },
      depth: '5-20 feet',
      tips: [
        'Stripers run up rivers to spawn in spring creating excellent fishing',
        'Live herring drifted near current breaks produce big fish',
        'Cast jigs into breaking fish during the spring run'
      ]
    },
    summer: {
      technique: 'trolling',
      lure: { name: 'Umbrella Rig / Deep Diver', color: 'white/silver', size: 'multi-arm', tags: ['umbrella-rig', 'trolling', 'deep'] },
      depth: '20-40 feet',
      tips: [
        'Stripers go deep in summer to find cooler water',
        'Trolling umbrella rigs over deep humps and channels is most effective',
        'Fish early morning and night when stripers come shallow to feed'
      ]
    },
    fall: {
      technique: 'artificial-lure-selection',
      lure: { name: 'Topwater / Swimbait', color: 'shad/silver', size: '4-6"', tags: ['topwater', 'fall-feeding', 'aggressive'] },
      depth: '5-25 feet',
      tips: [
        'Fall is prime striper fishing as they chase baitfish aggressively',
        'Watch for surface feeding frenzies and cast into the action',
        'Large swimbaits and topwater plugs produce trophy fish in fall'
      ]
    },
    winter: {
      technique: 'jigging',
      lure: { name: 'Slab Spoon / Blade Bait', color: 'silver/white', size: '1-2oz', tags: ['spoon', 'deep', 'winter'] },
      depth: '25-50 feet',
      tips: [
        'Stripers hold deep near the thermocline in winter',
        'Vertical jigging heavy spoons over schools is the top method',
        'Use electronics to locate bait balls and fish will be nearby'
      ]
    }
  },
  'carp': {
    spring: {
      technique: 'bottom-fishing',
      lure: { name: 'Corn / Pack Bait', color: 'yellow', size: 'varies', tags: ['corn', 'spring', 'shallow'] },
      depth: '2-8 feet',
      tips: [
        'Carp move to warm shallow flats in spring and are very active',
        'Pre-baiting with corn attracts carp to your fishing area',
        'Sight fishing to cruising carp on flats is exciting in spring'
      ]
    },
    summer: {
      technique: 'bottom-fishing',
      lure: { name: 'Boilie / Method Feeder', color: 'various', size: '15-20mm', tags: ['boilie', 'method', 'summer'] },
      depth: '3-15 feet',
      tips: [
        'Summer is peak carp season with fish feeding actively',
        'Night fishing produces some of the biggest carp in summer',
        'Use a method feeder with micro pellets for consistent action'
      ]
    },
    fall: {
      technique: 'bottom-fishing',
      lure: { name: 'Boilie / Corn', color: 'fruity/spicy', size: '18-22mm', tags: ['boilie', 'fall', 'big-bait'] },
      depth: '5-15 feet',
      tips: [
        'Carp feed heavily in fall building fat reserves for winter',
        'Larger baits tend to select for bigger fish in fall',
        'Fruity and spicy flavored boilies work well in cooling water'
      ]
    },
    winter: {
      technique: 'bottom-fishing',
      lure: { name: 'Small Boilie / Corn', color: 'fishy/natural', size: '10-12mm', tags: ['boilie', 'winter', 'small'] },
      depth: '8-20 feet',
      tips: [
        'Carp are much less active in winter but can still be caught',
        'Downsize your bait and reduce the amount of free offerings',
        'Fish the warmest part of the afternoon for winter carp'
      ]
    }
  },
  'gar': {
    spring: {
      technique: 'live-bait',
      lure: { name: 'Rope Lure / Cut Bait', color: 'white', size: '4-6"', tags: ['rope-lure', 'spring', 'spawning'] },
      depth: 'surface to 3 feet',
      tips: [
        'Gar spawn in shallow backwaters and marshes in spring',
        'Large concentrations of gar can be found near spawning areas',
        'Rope lures are most effective on surface-rolling gar'
      ]
    },
    summer: {
      technique: 'live-bait',
      lure: { name: 'Cut Bait / Rope Lure', color: 'natural/white', size: '3-5"', tags: ['cut-bait', 'summer', 'surface'] },
      depth: 'surface to 5 feet',
      tips: [
        'Gar are most active and visible during warm summer months',
        'Look for gar surfacing to breathe and cast near them',
        'Early morning gar are less wary and more willing to strike'
      ]
    },
    fall: {
      technique: 'live-bait',
      lure: { name: 'Cut Shad / Rope Lure', color: 'natural/white', size: '3-5"', tags: ['cut-bait', 'fall', 'feeding'] },
      depth: 'surface to 5 feet',
      tips: [
        'Gar feed actively in fall as baitfish concentrate',
        'Target areas where shad schools are visible near the surface',
        'Gar can still be caught on warm fall days near the surface'
      ]
    },
    winter: {
      technique: 'bottom-fishing',
      lure: { name: 'Cut Bait on Bottom', color: 'natural', size: '3-4"', tags: ['cut-bait', 'winter', 'slow'] },
      depth: '5-10 feet',
      tips: [
        'Gar become much less active in winter cold water',
        'Fish deeper slow-moving areas where gar congregate',
        'Warm winter days can briefly activate gar for short feeding windows'
      ]
    }
  },
  'white-bass': {
    spring: {
      technique: 'jigging',
      lure: { name: 'White Jig / Road Runner', color: 'white/chartreuse', size: '1/8-1/4oz', tags: ['jig', 'spring-run', 'river'] },
      depth: '2-8 feet',
      tips: [
        'White bass make spawning runs up rivers and creeks in spring',
        'The spring run is the best time to catch large numbers',
        'Cast small white jigs into current and retrieve steadily'
      ]
    },
    summer: {
      technique: 'jigging',
      lure: { name: 'Slab Spoon / Jig', color: 'white/silver', size: '1/4-3/8oz', tags: ['slab-spoon', 'deep', 'summer'] },
      depth: '10-25 feet',
      tips: [
        'White bass school over deep structure and humps in summer',
        'Watch for surface feeding on calm summer mornings',
        'Vertical jigging with slab spoons over schools is very effective'
      ]
    },
    fall: {
      technique: 'artificial-lure-selection',
      lure: { name: 'Small Crankbait / Jig', color: 'shad/silver', size: '2-3"', tags: ['crankbait', 'fall', 'schooling'] },
      depth: '5-20 feet',
      tips: [
        'White bass chase shad schools aggressively in fall',
        'Follow the birds to find surface feeding white bass',
        'Fast-moving lures that mimic fleeing shad trigger strikes'
      ]
    },
    winter: {
      technique: 'jigging',
      lure: { name: 'Blade Bait / Small Spoon', color: 'silver/gold', size: '1/4-3/8oz', tags: ['blade-bait', 'deep', 'winter'] },
      depth: '15-30 feet',
      tips: [
        'White bass hold deep in winter near baitfish schools',
        'Blade baits worked slowly near the bottom can be effective',
        'Schools can still be located with electronics in deep water'
      ]
    }
  },
  'sauger': {
    spring: {
      technique: 'jigging',
      lure: { name: 'Jig + Minnow', color: 'chartreuse/orange', size: '1/4oz', tags: ['jig', 'spring', 'river'] },
      depth: '8-15 feet',
      tips: [
        'Sauger move up rivers to spawn below dams in spring',
        'Jig and minnow fished along the bottom near dams is most productive',
        'Target current breaks and eddy areas below spillways'
      ]
    },
    summer: {
      technique: 'jigging',
      lure: { name: 'Jig / Worm Harness', color: 'chartreuse', size: '1/4-3/8oz', tags: ['jig', 'deep', 'summer'] },
      depth: '20-35 feet',
      tips: [
        'Sauger move to deeper river channels and pools in summer',
        'Heavier jigs are needed to stay on bottom in current',
        'Trolling worm harnesses along deep flats locates scattered fish'
      ]
    },
    fall: {
      technique: 'jigging',
      lure: { name: 'Blade Bait / Jig + Minnow', color: 'silver/chartreuse', size: '3/8-1/2oz', tags: ['blade-bait', 'fall', 'aggressive'] },
      depth: '15-25 feet',
      tips: [
        'Sauger become more aggressive as water cools in fall',
        'Blade baits are an excellent search bait for fall sauger',
        'Fish below dams where sauger stage for fall and winter'
      ]
    },
    winter: {
      technique: 'jigging',
      lure: { name: 'Small Jig + Minnow', color: 'glow/chartreuse', size: '1/8-1/4oz', tags: ['jig', 'slow', 'winter'] },
      depth: '20-35 feet',
      tips: [
        'Sauger are one of the better winter fishing targets',
        'Slow vertical jigging tipped with a live minnow is most effective',
        'Sauger stack up below dams in winter making them easy to locate'
      ]
    }
  },
  'redfish': {
    spring: {
      technique: 'artificial-lure-selection',
      lure: { name: 'Gold Spoon / Soft Plastic', color: 'gold/new penny', size: '1/2oz', tags: ['spoon', 'spring', 'warming-flats'] },
      depth: '1-4 feet',
      tips: [
        'Redfish move onto warming grass flats in spring',
        'Gold spoons worked over shallow grass produce explosive strikes',
        'Sight fishing to tailing reds on spring flats is world-class'
      ]
    },
    summer: {
      technique: 'live-bait',
      lure: { name: 'Live Shrimp / Crab', color: 'natural', size: 'medium', tags: ['live-bait', 'summer', 'early-morning'] },
      depth: '1-6 feet',
      tips: [
        'Fish early morning before summer heat pushes reds deep',
        'Live shrimp under a popping cork is hard to beat in summer',
        'Target dock shade and deeper cuts during midday heat'
      ]
    },
    fall: {
      technique: 'artificial-lure-selection',
      lure: { name: 'Topwater / Gold Spoon', color: 'bone/gold', size: '3-4"', tags: ['topwater', 'fall', 'bait-migration'] },
      depth: '1-5 feet',
      tips: [
        'Fall is peak redfish season as bait floods the marshes',
        'Topwater plugs produce incredible blowups on fall redfish',
        'Bull redfish school up near passes and jetties in fall'
      ]
    },
    winter: {
      technique: 'live-bait',
      lure: { name: 'Live Shrimp / Slow Soft Plastic', color: 'natural/dark', size: 'medium', tags: ['live-bait', 'winter', 'deep'] },
      depth: '3-10 feet',
      tips: [
        'Redfish move to deeper holes and channels in winter',
        'Slow down your retrieve as redfish are less active in cold water',
        'Look for redfish stacked up in deep holes on the coldest days'
      ]
    }
  },
  'speckled-trout': {
    spring: {
      technique: 'live-bait',
      lure: { name: 'Live Shrimp / Soft Plastic', color: 'natural/chartreuse', size: '3-4"', tags: ['live-bait', 'spring', 'warming'] },
      depth: '2-6 feet',
      tips: [
        'Speckled trout move onto grass flats as water warms in spring',
        'Popping corks with live shrimp are the go-to spring technique',
        'Target areas near passes where clean water brings baitfish'
      ]
    },
    summer: {
      technique: 'topwater',
      lure: { name: 'Topwater Walk-the-Dog / Live Shrimp', color: 'bone/chrome', size: '3-4"', tags: ['topwater', 'dawn', 'summer'] },
      depth: '2-8 feet',
      tips: [
        'Dawn topwater fishing for specks in summer is incredible',
        'Fish very early in the morning before the heat sets in',
        'Deeper grass edges and channels hold fish during midday'
      ]
    },
    fall: {
      technique: 'artificial-lure-selection',
      lure: { name: 'Soft Plastic / Topwater', color: 'glow/white', size: '3-5"', tags: ['soft-plastic', 'fall', 'aggressive'] },
      depth: '2-8 feet',
      tips: [
        'Fall is prime time for big speckled trout called gator trout',
        'Target points and drop-offs near passes as bait migrates',
        'Larger soft plastics select for bigger fall specks'
      ]
    },
    winter: {
      technique: 'live-bait',
      lure: { name: 'Live Shrimp / Slow Soft Plastic', color: 'natural/dark', size: 'medium', tags: ['live-bait', 'winter', 'deep-holes'] },
      depth: '5-15 feet',
      tips: [
        'Speckled trout move to deep holes and channels in winter cold',
        'Slow your retrieve significantly in cold water',
        'Fish can be stacked up in deep holes making for great fishing once located'
      ]
    }
  },
  'flounder': {
    spring: {
      technique: 'drift-fishing',
      lure: { name: 'Live Mud Minnow / Bucktail', color: 'white/chartreuse', size: '1/4-1/2oz', tags: ['live-bait', 'spring', 'inlet'] },
      depth: 'bottom 3-10 feet',
      tips: [
        'Flounder move from deep water to inshore areas in spring',
        'Drifting through inlets and passes is very productive in spring',
        'Tip your bucktail with a strip of cut bait or live minnow'
      ]
    },
    summer: {
      technique: 'bottom-fishing',
      lure: { name: 'Live Finger Mullet / Bucktail', color: 'white', size: '3-4" or 1/2oz', tags: ['live-bait', 'summer', 'flats'] },
      depth: 'bottom 2-8 feet',
      tips: [
        'Flounder spread out across flats and channels in summer',
        'Live finger mullet are a top summer flounder bait',
        'Work sandy areas near structure changes and channel edges'
      ]
    },
    fall: {
      technique: 'drift-fishing',
      lure: { name: 'Bucktail Jig / Live Minnow', color: 'white/pink', size: '1/2-1oz', tags: ['bucktail', 'fall-run', 'inlet'] },
      depth: 'bottom 5-20 feet',
      tips: [
        'The fall flounder run as fish migrate offshore is prime time',
        'Fish inlets and passes as flounder funnel through them',
        'Heavier jigs help keep your bait on the bottom in current'
      ]
    },
    winter: {
      technique: 'bottom-fishing',
      lure: { name: 'Bucktail / Cut Bait', color: 'white', size: '1-2oz', tags: ['bucktail', 'winter', 'offshore'] },
      depth: 'bottom 20-60 feet',
      tips: [
        'Most flounder move offshore to deeper water in winter',
        'Party boats target winter flounder over offshore structure',
        'Heavier tackle is needed for deeper winter fishing'
      ]
    }
  },
  'snook': {
    spring: {
      technique: 'live-bait',
      lure: { name: 'Live Pilchard / Greenback', color: 'natural', size: '3-4"', tags: ['live-bait', 'spring', 'beach'] },
      depth: '1-8 feet',
      tips: [
        'Snook begin moving to beaches and passes for summer spawn',
        'Live pilchards freelined near bridges and docks are deadly',
        'Fish incoming tides for best snook action in spring'
      ]
    },
    summer: {
      technique: 'live-bait',
      lure: { name: 'Live Pilchard / Topwater', color: 'natural/bone', size: '3-4"', tags: ['live-bait', 'summer', 'beach-spawn'] },
      depth: '1-6 feet',
      tips: [
        'Snook spawn on beaches and passes during summer months',
        'Beach fishing at dawn for spawning snook is incredible',
        'Live bait cast along the beach and near passes is most effective'
      ]
    },
    fall: {
      technique: 'artificial-lure-selection',
      lure: { name: 'Topwater / Jerkbait', color: 'white/bone', size: '4-5"', tags: ['topwater', 'fall', 'aggressive'] },
      depth: '1-8 feet',
      tips: [
        'Snook move back into estuaries and canals in fall',
        'Topwater lures at dawn produce explosive snook strikes',
        'Target dock lights and bridge pilings on outgoing tides'
      ]
    },
    winter: {
      technique: 'live-bait',
      lure: { name: 'Live Shrimp / Slow Jerkbait', color: 'natural/white', size: 'medium', tags: ['live-bait', 'winter', 'warm-water'] },
      depth: '3-10 feet',
      tips: [
        'Snook seek warm water refuges like power plant discharges in winter',
        'Fish are sluggish in cold water so slow down your presentation',
        'Cold fronts can be deadly to snook so handle with extra care in winter'
      ]
    }
  },
  'tarpon': {
    spring: {
      technique: 'live-bait',
      lure: { name: 'Live Crab / Mullet', color: 'natural', size: 'medium-large', tags: ['live-bait', 'spring', 'migration'] },
      depth: '2-10 feet',
      tips: [
        'Tarpon begin their annual migration northward in spring',
        'Live crabs drifted in passes and channels produce big fish',
        'Look for rolling tarpon in the early morning hours'
      ]
    },
    summer: {
      technique: 'live-bait',
      lure: { name: 'Live Crab / Large Fly', color: 'natural/black-purple', size: 'large', tags: ['live-bait', 'summer', 'peak'] },
      depth: '2-15 feet',
      tips: [
        'Summer is peak tarpon season in most coastal areas',
        'Fish bridges and passes during tide changes for the best action',
        'Fly fishing for tarpon in the Keys is a bucket-list experience'
      ]
    },
    fall: {
      technique: 'live-bait',
      lure: { name: 'Live Mullet / Crab', color: 'natural', size: 'medium-large', tags: ['live-bait', 'fall', 'southward'] },
      depth: '2-12 feet',
      tips: [
        'Tarpon migrate southward in fall and can still be found in warm areas',
        'Target inlets and passes as tarpon funnel through on migration',
        'Fall tarpon can be less pressured than during peak summer season'
      ]
    },
    winter: {
      technique: 'live-bait',
      lure: { name: 'Live Mullet / Shrimp', color: 'natural', size: 'medium', tags: ['live-bait', 'winter', 'resident'] },
      depth: '3-15 feet',
      tips: [
        'Resident tarpon remain in warm water areas like South Florida year-round',
        'Winter tarpon fishing is slower but fish are less pressured',
        'Target deep channels and warm water discharges in winter'
      ]
    }
  },
  'mahi-mahi': {
    spring: {
      technique: 'trolling',
      lure: { name: 'Skirted Trolling Lure / Ballyhoo', color: 'blue/pink', size: '6-8"', tags: ['trolling', 'spring', 'arriving'] },
      depth: 'surface to 20 feet',
      tips: [
        'Mahi begin moving into range as water warms in spring',
        'Target floating debris and weed lines for early season fish',
        'Trolling with a spread of bright lures locates fish quickly'
      ]
    },
    summer: {
      technique: 'trolling',
      lure: { name: 'Live Ballyhoo / Skirted Lure', color: 'natural/bright', size: '8-10"', tags: ['trolling', 'summer', 'peak'] },
      depth: 'surface to 30 feet',
      tips: [
        'Summer is peak mahi season with the best numbers and size',
        'Keep hooked fish in the water to hold the school near the boat',
        'Light tackle casting to schooling mahi is incredibly fun'
      ]
    },
    fall: {
      technique: 'trolling',
      lure: { name: 'Skirted Lure / Chunk Bait', color: 'green/yellow', size: '6-8"', tags: ['trolling', 'fall', 'transition'] },
      depth: 'surface to 25 feet',
      tips: [
        'Mahi-mahi numbers decrease in fall but quality fish remain',
        'Focus on current edges and temperature breaks for fall fish',
        'Chunking with cut bait can attract and hold mahi near the boat'
      ]
    },
    winter: {
      technique: 'trolling',
      lure: { name: 'Trolling Lure', color: 'blue/white', size: '6-8"', tags: ['trolling', 'winter', 'limited'] },
      depth: 'surface to 20 feet',
      tips: [
        'Mahi-mahi are scarce in winter in most areas',
        'Only the warmest waters like the Gulf Stream hold winter mahi',
        'When found in winter they tend to be larger fish'
      ]
    }
  },
  'king-mackerel': {
    spring: {
      technique: 'trolling',
      lure: { name: 'Live Blue Runner / Cigar Minnow', color: 'natural', size: '8-10"', tags: ['live-bait', 'spring', 'arriving'] },
      depth: '10-30 feet',
      tips: [
        'King mackerel begin migrating inshore as water warms in spring',
        'Slow trolling live bait near reefs and wrecks is most effective',
        'Watch for diving birds indicating baitfish being pushed to the surface'
      ]
    },
    summer: {
      technique: 'trolling',
      lure: { name: 'Live Bait / Diving Plug', color: 'natural/silver', size: '8-12" or 5-7"', tags: ['live-bait', 'trolling', 'peak'] },
      depth: '15-40 feet',
      tips: [
        'Summer is peak king mackerel season in most areas',
        'Live bait on a stinger rig is the top technique for big kings',
        'Fish near temperature breaks and bait concentrations'
      ]
    },
    fall: {
      technique: 'trolling',
      lure: { name: 'Live Bait / Spoon', color: 'natural/silver', size: 'large', tags: ['live-bait', 'fall', 'migration'] },
      depth: '10-30 feet',
      tips: [
        'Kings migrate southward in fall following baitfish',
        'Pier fishing for kings is popular during the fall run',
        'Larger fish often show up during the fall migration'
      ]
    },
    winter: {
      technique: 'trolling',
      lure: { name: 'Diving Plug / Live Bait', color: 'silver/blue', size: '5-7"', tags: ['trolling', 'winter', 'deep'] },
      depth: '20-50 feet',
      tips: [
        'King mackerel move to deeper warmer water in winter',
        'Only available in the southernmost waters during winter months',
        'Fish offshore reefs and wrecks in deeper water for winter kings'
      ]
    }
  },
  'grouper': {
    spring: {
      technique: 'bottom-fishing',
      lure: { name: 'Live Pinfish / Grunt', color: 'natural', size: '5-7"', tags: ['live-bait', 'spring', 'reef'] },
      depth: '30-80 feet',
      tips: [
        'Grouper move to shallower reefs as water warms in spring',
        'Check season dates carefully as spring openings vary by species',
        'Live bait fished near bottom structure is most effective'
      ]
    },
    summer: {
      technique: 'bottom-fishing',
      lure: { name: 'Live Bait / Large Jig', color: 'natural/white', size: '5-8" or 2-4oz', tags: ['live-bait', 'summer', 'deep'] },
      depth: '40-120 feet',
      tips: [
        'Grouper are often deeper in summer requiring heavier tackle',
        'Speed jigging with large butterfly jigs is very effective in summer',
        'Fish early morning before boat traffic scatters the fish'
      ]
    },
    fall: {
      technique: 'bottom-fishing',
      lure: { name: 'Live Pinfish / Jig', color: 'natural/chartreuse', size: '5-7" or 2oz', tags: ['live-bait', 'fall', 'feeding'] },
      depth: '30-100 feet',
      tips: [
        'Grouper feed aggressively in fall before cooler water slows them',
        'Target ledges and wrecks where grouper stage for spawning',
        'Fall can produce the best grouper fishing of the year'
      ]
    },
    winter: {
      technique: 'jigging',
      lure: { name: 'Large Jig / Cut Bait', color: 'white/natural', size: '2-4oz', tags: ['jig', 'winter', 'deep'] },
      depth: '60-150 feet',
      tips: [
        'Grouper move to deeper water and spawn in winter in some areas',
        'Many grouper seasons close in winter so check regulations carefully',
        'Heavy vertical jigs worked near bottom structure produce in cold water'
      ]
    }
  },
  'sheepshead': {
    spring: {
      technique: 'bottom-fishing',
      lure: { name: 'Fiddler Crab / Fresh Shrimp', color: 'natural', size: 'small', tags: ['live-bait', 'spring', 'pilings'] },
      depth: 'near structure 2-15 feet',
      tips: [
        'Spring is peak sheepshead season as fish move inshore to spawn',
        'Fish pilings, jetties, and bridges where barnacles grow',
        'Fiddler crabs are the number one spring sheepshead bait'
      ]
    },
    summer: {
      technique: 'bottom-fishing',
      lure: { name: 'Fresh Shrimp / Sand Flea', color: 'natural', size: 'small hook', tags: ['live-bait', 'summer', 'structure'] },
      depth: 'near structure 3-20 feet',
      tips: [
        'Sheepshead spread out along inshore and nearshore structure in summer',
        'Sand fleas and fresh shrimp on small hooks work well',
        'Fish tight to structure as sheepshead rarely stray far from cover'
      ]
    },
    fall: {
      technique: 'bottom-fishing',
      lure: { name: 'Fiddler Crab / Oyster', color: 'natural', size: 'small', tags: ['live-bait', 'fall', 'nearshore'] },
      depth: 'near structure 5-20 feet',
      tips: [
        'Sheepshead move to nearshore reefs and jetties in fall',
        'Scraping barnacles off pilings creates an excellent chum trail',
        'Fall sheepshead can be very aggressive and easier to catch'
      ]
    },
    winter: {
      technique: 'bottom-fishing',
      lure: { name: 'Fresh Shrimp / Fiddler Crab', color: 'natural', size: 'small', tags: ['live-bait', 'winter', 'deep-structure'] },
      depth: 'near structure 10-30 feet',
      tips: [
        'Sheepshead move to deeper structure like bridges and offshore pilings in winter',
        'Smaller baits on lighter hooks detect the subtle winter bite better',
        'Fish are less aggressive in winter so patience is important'
      ]
    }
  },
  'red-snapper': {
    spring: {
      technique: 'bottom-fishing',
      lure: { name: 'Cut Squid / Live Bait', color: 'natural', size: '3-4" piece', tags: ['cut-bait', 'spring', 'reef'] },
      depth: '60-150 feet',
      tips: [
        'Red snapper season often opens in late spring in some regions',
        'Live bait like pinfish and cigar minnows are most effective',
        'Use circle hooks as required by regulations in most areas'
      ]
    },
    summer: {
      technique: 'bottom-fishing',
      lure: { name: 'Live Bait / Vertical Jig', color: 'natural/silver', size: '5-7" or 4oz', tags: ['live-bait', 'summer', 'season-open'] },
      depth: '60-200 feet',
      tips: [
        'Summer is prime red snapper season when most areas are open',
        'Live bait dropped to the bottom on reefs and wrecks is the top method',
        'Use descending devices for fish you plan to release'
      ]
    },
    fall: {
      technique: 'jigging',
      lure: { name: 'Vertical Jig / Cut Bait', color: 'silver/blue', size: '4-6oz', tags: ['speed-jig', 'fall', 'aggressive'] },
      depth: '60-200 feet',
      tips: [
        'Red snapper feed aggressively in fall and can be caught on jigs',
        'Speed jigging is effective when snapper are feeding actively',
        'Check if the season is still open as dates vary by region'
      ]
    },
    winter: {
      technique: 'bottom-fishing',
      lure: { name: 'Cut Bait / Jig', color: 'natural/silver', size: '3-4" or 4oz', tags: ['cut-bait', 'winter', 'deep'] },
      depth: '80-200 feet',
      tips: [
        'Red snapper season is typically closed in winter in most areas',
        'When open, fish deeper reefs where snapper hold in colder months',
        'Winter weather limits offshore access so plan trips around conditions'
      ]
    }
  }
};
