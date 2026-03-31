import { Species } from '../types';

export const channelCatfish: Species = {
  slug: 'channel-catfish',
  name: 'Channel Catfish',
  scientificName: 'Ictalurus punctatus',
  type: 'freshwater',
  family: 'Ictaluridae',
  description:
    'The channel catfish is the most numerous and widely distributed catfish species in North America, found in rivers, lakes, and reservoirs across the continent. It is the most commonly stocked and farmed catfish, supporting both a massive aquaculture industry and an enormous recreational fishery. Channel cats are opportunistic feeders that will eat almost anything, making them one of the easiest fish to catch. Their firm, mild flesh makes them a staple of fish fries across the South and Midwest.',
  identification:
    'Channel catfish have a slender, streamlined body compared to other catfish species. They are bluish-gray to olive on the back, fading to silver-white on the belly. Young channel cats have prominent dark spots scattered across their sides, which may fade in older, larger fish. The tail is deeply forked, which distinguishes them from flathead and bullhead catfish. They have a rounded anal fin with 24-29 rays (blue catfish have 30-36 rays, a key difference). Channel cats also have a slightly overbite upper jaw and barbels (whiskers) around the mouth.',
  habitat:
    'Channel catfish are found in a wide variety of habitats including large and small rivers, lakes, reservoirs, ponds, and even brackish tidal waters. In rivers, they prefer areas with moderate current over sand, gravel, or rocky bottoms with access to deeper pools. In lakes, they relate to channel edges, points, flats, and near-dam areas. Channel cats are tolerant of a wide range of water conditions including turbid water, moderate pollution, and warm temperatures.',
  behavior:
    'Channel catfish are primarily nocturnal feeders, using their highly developed sense of smell and taste (via barbels and skin) to locate food in dark or murky water. They are bottom feeders but will feed at all levels of the water column. During the spawn in late spring and early summer (water temps 75-85F), males select dark cavities like holes in banks, hollow logs, or rock crevices to nest. Males guard the eggs and fry aggressively. Channel cats are social and often found in schools, particularly near food sources.',
  diet:
    'Channel catfish are omnivorous and opportunistic, eating nearly anything they can find. Their diet includes baitfish, crayfish, insects, snails, clams, worms, aquatic plants, algae, and carrion. They are famous for being attracted to strong-smelling baits like chicken liver, stink bait, cut shad, and cheese. In rivers, they often feed on dead or dying fish and organic matter washed downstream. Their ability to eat both live and dead prey makes them easy to target with a wide range of baits.',
  recordWeight: { lbs: 58, oz: 0, location: 'Santee-Cooper Reservoir, SC', year: 1964 },
  averageWeight: { min: 1, max: 5, unit: 'lbs' },
  averageLength: { min: 12, max: 24, unit: 'inches' },
  lifespan: { min: 5, max: 15, unit: 'years' },
  preferredTemp: { min: 75, max: 85, unit: 'F' },
  difficultyRating: 1,
  fightRating: 3,
  tasteRating: 4,
  statesFound: [
    'alabama', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
    'delaware', 'florida', 'georgia', 'idaho', 'illinois', 'indiana', 'iowa',
    'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts',
    'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska',
    'nevada', 'new-hampshire', 'new-jersey', 'new-mexico', 'new-york',
    'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon',
    'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington',
    'west-virginia', 'wisconsin', 'wyoming',
  ],
  seasonalPatterns: {
    spring:
      'As water temperatures warm past 55F, channel catfish become increasingly active after a sluggish winter. They move from deep holes to shallower flats and current areas to feed. Pre-spawn channel cats can be found cruising shorelines and flats in 5-15 feet of water. Fresh cut bait and nightcrawlers are top producers in spring. Look for cats near riprap, dam tailraces, and creek mouths.',
    summer:
      'Summer is the best season for channel catfish. Water temps of 75-85F align perfectly with their preferred range and spawning activity. They feed aggressively throughout summer, especially at night. Stink baits, chicken liver, and cut shad are all highly effective. Target deeper holes in rivers during the day, then fish shallower flats and current areas at night. Dam tailraces are hotspots as dead and injured baitfish wash downstream.',
    fall:
      'Channel catfish feed heavily in fall to build fat reserves for winter. As water cools into the 60s, they remain active and aggressive. They begin to congregate in deeper holes and channel areas as the season progresses. Cut shad and live bait are the top choices. Fall is often an overlooked season for quality channel cats, and the action can rival summer fishing.',
    winter:
      'Winter slows channel catfish activity significantly. They group up in deep holes, river bends, and near warm-water discharges (power plants). They feed less frequently but can still be caught on fresh cut bait and nightcrawlers fished slowly on the bottom. Target the warmest water available. In southern states, winter catfishing can still be productive on mild days with stable weather patterns.',
  },
  bestTechniques: ['bottom-fishing', 'live-bait', 'drift-fishing', 'night-fishing'],
  bestBaits: [
    'Chicken liver',
    'Cut shad (fresh)',
    'Nightcrawlers',
    'Stink bait / dip bait',
    'Punch bait',
    'Live minnows',
    'Shrimp (raw)',
    'Hot dogs (believe it or not)',
    'Catfish Charlie dough bait',
  ],
  relatedSpecies: ['blue-catfish', 'flathead-catfish', 'crappie', 'bluegill'],
  funFacts: [
    'Channel catfish have roughly 100,000 taste buds distributed across their entire body, especially concentrated on their barbels and skin, allowing them to literally taste the water around them.',
    'The US farm-raised catfish industry produces over 300 million pounds of catfish annually, with Mississippi, Alabama, and Arkansas as the top producers.',
    'Channel catfish can detect food concentrations as low as one part per 10 billion in the water, equivalent to finding one drop of a substance in an Olympic-sized swimming pool.',
    'Male channel catfish develop a swollen, darkened head during spawning season and will not eat while guarding eggs, surviving solely on stored body fat for up to two weeks.',
  ],
  faq: [
    {
      question: 'What is the best bait for channel catfish?',
      answer:
        'The best baits depend on the situation. For numbers of smaller channel cats, prepared stink baits and punch baits are hard to beat because the strong scent attracts fish from a wide area. For larger channel cats, fresh cut shad or skipjack herring is the top choice. Chicken liver is a classic all-around bait that works everywhere. Nightcrawlers are excellent in rivers and during cooler months. Live minnows or small bluegill are effective when targeting bigger fish.',
    },
    {
      question: 'What is the best time to catch channel catfish?',
      answer:
        'Channel catfish are primarily nocturnal feeders, so night fishing is often the most productive. The hours between sunset and midnight are typically the best window. However, channel cats also feed well during the day in stained or muddy water, in dam tailraces where food is churned up, and during overcast or rainy conditions. Summer evenings with stable warm weather produce the most consistent action.',
    },
    {
      question: 'How do I tell a channel catfish from a blue catfish?',
      answer:
        'The most reliable method is counting anal fin rays: channel catfish have 24-29 rays with a rounded anal fin edge, while blue catfish have 30-36 rays with a straight anal fin edge. Channel catfish often have dark spots on their sides (especially younger fish), while blue catfish lack spots entirely. Blue catfish have a more pronounced overbite and a straighter, more slate-blue back compared to the olive tones of a channel cat.',
    },
    {
      question: 'What is the best rig for channel catfish?',
      answer:
        'The Carolina rig (slip sinker rig) is the most popular and effective setup for channel catfish. Thread a 1/2 to 1 oz egg sinker on your main line, add a bead, tie to a barrel swivel, then attach an 18-24 inch fluorocarbon or mono leader to a #2 to 2/0 circle hook. This allows the catfish to pick up the bait and move without feeling resistance from the sinker. Use circle hooks to improve hookup rates and reduce gut-hooking.',
    },
    {
      question: 'Are channel catfish good to eat?',
      answer:
        'Channel catfish are excellent table fare with firm, white, mild-flavored meat. Fish from clean, flowing water taste best. The most popular preparation is deep-fried fillets or nuggets coated in seasoned cornmeal. They are also good blackened, grilled, or baked. Smaller channel cats (1-5 lbs) generally taste better than large ones. Remove the red lateral line meat to reduce any fishy taste. Farm-raised channel catfish from the grocery store is the same species.',
    },
  ],
  imagePath: '/images/species/channel-catfish.jpg',
  imageAlt: 'Channel catfish showing its spotted sides and deeply forked tail',
  imageCredit: 'Photo via Unsplash',
};
