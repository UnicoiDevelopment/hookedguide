import type { Season } from '../types';

export const temperatureTriggers: {
  species: string;
  condition: 'below' | 'above' | 'between';
  tempF: number | [number, number];
  overrides: Partial<{
    technique: string;
    lure: { name: string; color: string; size: string; tags: string[] };
    depth: string;
    tips: string[];
  }>;
}[] = [
  // Largemouth Bass
  { species: 'largemouth-bass', condition: 'below', tempF: 50, overrides: {
    technique: 'jigging', lure: { name: 'Football Jig', color: 'brown/orange', size: '1/2 oz', tags: ['jig', 'bass', 'cold-water'] },
    depth: '15-30 feet (deep structure)', tips: ['Slow way down — bass are lethargic in cold water', 'Drag jig slowly along bottom', 'Downsize your presentation']
  }},
  { species: 'largemouth-bass', condition: 'between', tempF: [50, 60], overrides: {
    technique: 'crankbait', lure: { name: 'Jerkbait', color: 'shad/silver', size: 'medium', tags: ['jerkbait', 'bass', 'prespawn'] },
    depth: '5-12 feet (prespawn staging areas)', tips: ['Fish transitions between deep and shallow', 'Long pauses on jerkbait — 5 to 10 seconds', 'Target 45-degree banks']
  }},
  { species: 'largemouth-bass', condition: 'between', tempF: [60, 72], overrides: {
    technique: 'spinnerbait', lure: { name: 'Spinnerbait', color: 'white/chartreuse', size: '3/8 oz', tags: ['spinnerbait', 'bass', 'spawn'] },
    depth: '1-6 feet (spawning flats)', tips: ['Fish are moving shallow to spawn', 'Slow roll spinnerbaits along banks', 'Sight fish beds in clear water with polarized glasses']
  }},
  { species: 'largemouth-bass', condition: 'above', tempF: 82, overrides: {
    technique: 'topwater', lure: { name: 'Buzzbait', color: 'black', size: '3/8 oz', tags: ['topwater', 'buzzbait', 'bass', 'summer'] },
    depth: '0-3 feet early/late, 15-25 feet midday', tips: ['Fish topwater at dawn and dusk only', 'Midday move deep with Texas rig or Carolina rig', 'Bass feed in low-light to avoid heat']
  }},
  // Smallmouth Bass
  { species: 'smallmouth-bass', condition: 'below', tempF: 45, overrides: {
    technique: 'jigging', lure: { name: 'Blade Bait', color: 'silver', size: '1/2 oz', tags: ['blade-bait', 'smallmouth', 'cold-water'] },
    depth: '20-40 feet', tips: ['Ultra-slow hops off bottom', 'Smallmouth hold tight to rock in winter', 'Light line 6-8 lb fluorocarbon']
  }},
  { species: 'smallmouth-bass', condition: 'between', tempF: [55, 68], overrides: {
    technique: 'ned-rig', lure: { name: 'Ned Rig', color: 'green pumpkin', size: '1/4 oz mushroom head', tags: ['ned-rig', 'finesse', 'smallmouth'] },
    depth: '5-15 feet', tips: ['Prespawn smallmouth are aggressive and shallow', 'Target rocky points and gravel flats', 'Subtle presentation is key']
  }},
  // Walleye
  { species: 'walleye', condition: 'below', tempF: 40, overrides: {
    technique: 'jigging', lure: { name: 'Jigging Spoon', color: 'gold', size: '1/4 oz', tags: ['spoon', 'walleye', 'cold-water'] },
    depth: '20-35 feet', tips: ['Extremely slow presentation — barely lift and drop', 'Tip jig with live minnow head', 'Fish deep breaks near main lake basin']
  }},
  { species: 'walleye', condition: 'between', tempF: [42, 55], overrides: {
    technique: 'jigging', lure: { name: 'Jig and Minnow', color: 'chartreuse/orange', size: '1/8-1/4 oz', tags: ['jig', 'walleye', 'spring'] },
    depth: '6-15 feet', tips: ['Spring walleye run — fish near spawning tributaries', 'Slow drag along gravel/rock bottoms', 'Low-light periods are most productive']
  }},
  // Crappie
  { species: 'crappie', condition: 'between', tempF: [55, 68], overrides: {
    technique: 'jigging', lure: { name: 'Tube Jig', color: 'chartreuse/white', size: '1/16 oz', tags: ['tube', 'crappie', 'spawn'] },
    depth: '1-6 feet (spawning beds)', tips: ['Crappie spawn in shallow brush and stake beds', 'Vertical jigging around brush piles is deadly', 'Use a slip float for precise depth control']
  }},
  { species: 'crappie', condition: 'below', tempF: 50, overrides: {
    technique: 'jigging', lure: { name: 'Hair Jig', color: 'white/pink', size: '1/32 oz', tags: ['hair-jig', 'crappie', 'winter'] },
    depth: '15-25 feet (deep brush/structure)', tips: ['Winter crappie stack in deep brush piles', 'Use electronics to find suspended fish', 'Super slow presentation — barely twitch']
  }},
  // Channel Catfish
  { species: 'channel-catfish', condition: 'above', tempF: 75, overrides: {
    technique: 'bottom-fishing', lure: { name: 'Stink Bait / Punch Bait', color: 'N/A', size: 'golf ball size', tags: ['catfish-bait', 'stink-bait', 'catfish'] },
    depth: 'Shallow flats and channel edges 3-15 feet', tips: ['Peak feeding temperature for channel cats', 'Stink bait and punch bait most effective in warm water', 'Fish shallow flats at night']
  }},
  { species: 'channel-catfish', condition: 'below', tempF: 50, overrides: {
    depth: 'Deep holes 20-40 feet', tips: ['Catfish hold in deep wintering holes', 'Use fresh cut bait — scent is critical in cold water', 'Very slow bite — be patient, longer soaks']
  }},
  // Blue Catfish
  { species: 'blue-catfish', condition: 'above', tempF: 70, overrides: {
    technique: 'bottom-fishing', lure: { name: 'Fresh Cut Skipjack', color: 'natural', size: 'large chunk', tags: ['cut-bait', 'catfish', 'blue-catfish'] },
    depth: 'Channel ledges 15-30 feet', tips: ['Blues actively feed on shad schools in summer', 'Fresh cut skipjack herring is the top bait', 'Anchor on channel ledges near bait schools']
  }},
  // Rainbow Trout
  { species: 'rainbow-trout', condition: 'above', tempF: 65, overrides: {
    depth: 'Deep pools and spring-fed areas', tips: ['Trout are stressed above 65F — fish early morning only', 'Seek cold water inflows and deep shaded pools', 'Handle fish carefully and release quickly in warm water', 'Consider not fishing for trout above 68F to prevent mortality']
  }},
  { species: 'rainbow-trout', condition: 'between', tempF: [48, 58], overrides: {
    technique: 'fly-fishing-basics', lure: { name: 'Nymph (Pheasant Tail)', color: 'natural brown', size: '#14-#18', tags: ['fly', 'nymph', 'trout'] },
    depth: 'Mid-column to bottom 2-6 feet', tips: ['Optimal feeding temperature range for trout', 'Subsurface nymphs produce best — dead drift with indicator', 'Match the hatch — check rocks for prevalent insect larvae']
  }},
  // Brown Trout
  { species: 'brown-trout', condition: 'between', tempF: [45, 55], overrides: {
    technique: 'fly-fishing-basics', lure: { name: 'Streamer (Woolly Bugger)', color: 'olive/black', size: '#6-#10', tags: ['fly', 'streamer', 'brown-trout'] },
    depth: '3-8 feet — undercuts and deep runs', tips: ['Fall spawning season — browns are aggressive', 'Strip streamers through deep pools and runs', 'Low light and overcast days are best for big browns']
  }},
  // Northern Pike
  { species: 'northern-pike', condition: 'between', tempF: [50, 65], overrides: {
    technique: 'spinnerbait', lure: { name: 'Large Spinnerbait', color: 'chartreuse/white', size: '3/4 oz', tags: ['spinnerbait', 'pike', 'spring'] },
    depth: '3-10 feet shallow bays', tips: ['Post-spawn pike feed aggressively in warming shallows', 'Wire or heavy fluorocarbon leader required', 'Target shallow weedy bays']
  }},
  // Musky
  { species: 'musky', condition: 'between', tempF: [55, 72], overrides: {
    technique: 'trolling', lure: { name: 'Large Bucktail', color: 'black/orange', size: '1-2 oz', tags: ['bucktail', 'musky', 'trophy'] },
    depth: '5-15 feet weed edges', tips: ['Prime musky season — figure-8 at the boat on every cast', 'Larger lures produce larger fish', 'Full moon periods increase activity']
  }},
  // Redfish
  { species: 'redfish', condition: 'between', tempF: [68, 78], overrides: {
    technique: 'artificial-lure-selection', lure: { name: 'Gold Spoon', color: 'gold', size: '1/2 oz weedless', tags: ['spoon', 'gold-spoon', 'redfish', 'inshore'] },
    depth: '1-4 feet shallow flats', tips: ['Optimal redfish temperature — most aggressive on artificials', 'Sight-fish tailing reds on shallow flats', 'Gold spoon is the classic redfish lure']
  }},
  { species: 'redfish', condition: 'below', tempF: 58, overrides: {
    depth: 'Deeper holes and channels 6-12 feet', tips: ['Cold reds move to deeper warmer water', 'Slow your retrieve way down', 'Live shrimp on bottom is most reliable in cold']
  }},
  // Speckled Trout
  { species: 'speckled-trout', condition: 'below', tempF: 55, overrides: {
    depth: 'Deep holes and channels 8-15 feet', tips: ['Specks concentrate in deep holes during cold snaps', 'Slow-sinking soft plastics worked very slowly', 'Live shrimp under a popping cork fished slow']
  }},
  { species: 'speckled-trout', condition: 'between', tempF: [65, 78], overrides: {
    technique: 'topwater', lure: { name: 'Topwater Walking Bait', color: 'bone/silver', size: '4 inch', tags: ['topwater', 'speckled-trout', 'inshore'] },
    depth: '2-6 feet over grass flats', tips: ['Prime topwater season for specks', 'Walk-the-dog over submerged grass', 'Dawn and dusk produce explosive strikes']
  }},
  // Flounder
  { species: 'flounder', condition: 'between', tempF: [62, 75], overrides: {
    technique: 'drift-fishing', lure: { name: 'Bucktail Jig with Gulp', color: 'white/chartreuse', size: '1/2 oz', tags: ['bucktail', 'jig', 'flounder'] },
    depth: 'Bottom — channels and drop-offs 5-15 feet', tips: ['Drift channels and drop-offs where flounder ambush bait', 'Slow bumping along bottom is key', 'Tip bucktail with live minnow or Gulp strip']
  }},
  // Snook
  { species: 'snook', condition: 'below', tempF: 60, overrides: {
    depth: 'Deep residential canals and warm water outflows', tips: ['Snook are cold-sensitive — they seek warm water refuges', 'Fish power plant outflows and deep canals', 'Very slow presentation — snook are lethargic below 60F', 'Do not target snook in extreme cold — they may not survive catch and release']
  }},
  // Grouper
  { species: 'grouper', condition: 'above', tempF: 68, overrides: {
    technique: 'bottom-fishing', lure: { name: 'Live Pinfish', color: 'natural', size: '6-8 inch', tags: ['live-bait', 'grouper', 'offshore'] },
    depth: '60-120 feet on reef structure', tips: ['Summer grouper feed aggressively', 'Use heavy tackle — grouper dive into structure', 'Circle hooks reduce gut-hooking for catch and release']
  }},
  // Tarpon
  { species: 'tarpon', condition: 'between', tempF: [75, 88], overrides: {
    technique: 'live-bait', lure: { name: 'Live Crab or Mullet', color: 'natural', size: 'palm-sized', tags: ['live-bait', 'tarpon', 'inshore'] },
    depth: '3-15 feet passes and beaches', tips: ['Peak tarpon migration season', 'Fish passes and beaches at dawn', 'Bow to the king — drop rod tip when tarpon jumps']
  }},
  // Striped Bass
  { species: 'striped-bass', condition: 'between', tempF: [55, 68], overrides: {
    technique: 'topwater', lure: { name: 'Large Pencil Popper', color: 'white', size: '6-7 inch', tags: ['topwater', 'striper', 'surface'] },
    depth: '0-10 feet — surface feeding', tips: ['Spring and fall striper blitzes — watch for surface activity', 'Match lure size to baitfish — bunker, herring, shad', 'Dawn and dusk are prime topwater windows']
  }},
  // Carp
  { species: 'carp', condition: 'above', tempF: 65, overrides: {
    technique: 'bottom-fishing', lure: { name: 'Pack Bait / Method Feeder', color: 'N/A', size: 'fist-sized', tags: ['pack-bait', 'carp', 'method'] },
    depth: 'Shallow flats 2-8 feet', tips: ['Carp actively feed in warm shallows', 'Pre-bait your spot 30 minutes before fishing', 'Hair rig with corn or boilie is most effective']
  }},
];
