import type { Species } from '../types';

export const tarpon: Species = {
  slug: 'tarpon',
  name: 'Tarpon',
  scientificName: 'Megalops atlanticus',
  type: 'saltwater',
  family: 'Megalopidae',
  description:
    'The tarpon, known as the "silver king," is widely considered the most spectacular gamefish in the world. Renowned for their incredible aerial acrobatics, raw power, and epic endurance battles, tarpon can grow to over 200 lbs and leap 10 feet out of the water when hooked. They are primarily a catch-and-release species pursued by anglers seeking the ultimate inshore saltwater challenge.',
  identification:
    'Tarpon are unmistakable with their massive, compressed body covered in huge, reflective silver scales the size of silver dollars. They have a distinctive upturned lower jaw, large eyes, a deeply forked tail, and a single dorsal fin with an elongated last ray. They are dark blue-green on the back, brilliant silver on the sides and belly. Adults commonly reach 4-6 feet in length and 60-200+ lbs.',
  habitat:
    'Found in warm waters of the Atlantic Ocean, Gulf of Mexico, and Caribbean. They inhabit a wide range of environments including open ocean, coastal bays, mangrove estuaries, tidal rivers, bridges, passes, and even landlocked freshwater canals and lakes. Tarpon possess a modified swim bladder that allows them to gulp atmospheric air, enabling them to survive in low-oxygen waters.',
  behavior:
    'Tarpon are migratory fish that move along the coast following warm water and baitfish schools. They "roll" on the surface to gulp air, which is a telltale sign of their presence. When hooked, they immediately launch into spectacular aerial displays, jumping repeatedly and shaking violently to throw the hook. Battles with large tarpon can last 30 minutes to over 2 hours. They spawn offshore in deep water.',
  diet:
    'Feed on a variety of baitfish including mullet, pinfish, sardines, crabs, shrimp, and various small fish. They are primarily sight feeders during the day and often feed along current edges, in passes, and around structures where bait is concentrated. Juvenile tarpon feed on insects, small fish, and crustaceans in backwater habitats.',
  recordWeight: { lbs: 286, oz: 9, location: 'Rubane, Guinea-Bissau', year: 2003 },
  averageWeight: { min: 40, max: 120, unit: 'lbs' },
  averageLength: { min: 48, max: 78, unit: 'inches' },
  lifespan: { min: 50, max: 80, unit: 'years' },
  preferredTemp: { min: 74, max: 88, unit: 'F' },
  difficultyRating: 5,
  fightRating: 5,
  tasteRating: 1,
  statesFound: ['florida', 'texas', 'louisiana', 'alabama', 'south-carolina', 'georgia'],
  seasonalPatterns: {
    spring:
      'Tarpon begin their annual migration northward along the Florida coast in April and May as water temperatures reach the mid-70s. Fish stage in passes, channels, and along beaches. Spring is the start of the prime tarpon season in the Florida Keys and Southwest Florida, with massive schools moving through Boca Grande Pass and the Keys bridges.',
    summer:
      'Summer is peak tarpon season throughout Florida, the Gulf Coast, and as far north as the Carolinas. Huge schools migrate along the beaches and stack up in passes during the spawn. June and July at Boca Grande Pass and in the Florida Keys offer the most legendary tarpon fishing in the world. Fish are aggressive and plentiful.',
    fall:
      'Tarpon begin their southward migration in fall as water temperatures drop. Fishing remains productive through October in most Gulf Coast areas. Resident tarpon in South Florida canals and backcountry provide year-round opportunities. Late-season fish can be less pressured and more willing to eat.',
    winter:
      'Most tarpon migrate to warmer southern waters or Central American and Caribbean wintering grounds. Resident populations remain in the Florida Keys, Everglades, and warm-water refuges year-round. Winter tarpon fishing can be productive in South Florida on warm days, particularly around bridges and in backcountry creeks with dark, warm water.',
  },
  bestTechniques: ['live-bait', 'fly-fishing-basics', 'jigging'],
  bestBaits: [
    'Live mullet (large)',
    'Live crab (pass crab or blue crab)',
    'Live threadfin herring',
    'Live pinfish',
    'Large streamer fly (tarpon toad, black death)',
    'DOA Baitbuster soft plastic',
    'Jig with soft plastic body',
    'Cut mullet (for juvenile tarpon)',
    'Suspending twitch bait',
  ],
  relatedSpecies: ['snook', 'redfish', 'mahi-mahi', 'king-mackerel'],
  funFacts: [
    'Tarpon have a modified swim bladder that functions as a primitive lung, allowing them to gulp atmospheric air at the surface. This adaptation lets them survive in oxygen-depleted waters where other fish cannot.',
    'Tarpon can live over 80 years, making them one of the longest-lived gamefish species. Their huge, reflective scales can be read like tree rings to estimate age.',
    'A tarpon is estimated to jump an average of 5-8 times when hooked, and each jump can reach heights of 6-10 feet. It is estimated that anglers land less than 30% of the tarpon they hook due to these acrobatics.',
    'Tarpon are among the most ancient fish species alive today. Fossil records show they have remained virtually unchanged for over 100 million years, making them contemporaries of the dinosaurs.',
    'The town of Boca Grande, Florida, hosts one of the most famous tarpon fisheries in the world. The deep pass between Gasparilla and Cayo Costa islands funnels migrating tarpon, creating incredible concentrations of fish each May and June.',
  ],
  faq: [
    {
      question: 'Can you eat tarpon?',
      answer:
        'Tarpon are technically edible but are considered very poor table fare. Their flesh is dark, bony, and strong-tasting. Additionally, tarpon are almost universally catch-and-release due to their incredible sporting value and conservation status. In Florida, a special harvest tag is required, and very few are ever kept.',
    },
    {
      question: 'Where is the best tarpon fishing?',
      answer:
        'Boca Grande Pass on the Southwest Florida coast and the bridges of the Florida Keys are the two most famous tarpon fisheries in the world. Homosassa, the Everglades backcountry, and various Gulf Coast passes also offer world-class tarpon fishing. Peak season is May through July.',
    },
    {
      question: 'What tackle do I need for tarpon?',
      answer:
        'For conventional tackle, a heavy spinning or conventional rod rated for 30-80 lb line is standard. Use 60-80 lb braided main line with a 60-100 lb fluorocarbon leader. Circle hooks in 5/0-8/0 sizes are preferred for live bait. Fly anglers use 10-12 weight rods with large-arbor saltwater reels and heavy tippets.',
    },
    {
      question: 'How do you fight a tarpon?',
      answer:
        'When a tarpon jumps, "bow to the king" by pointing your rod tip toward the fish and dropping your arms to create slack line, preventing the hook from tearing free. Keep steady pressure between jumps and let the fish run when it needs to. Avoid high-sticking the rod. Patience is essential as fights can last over an hour.',
    },
    {
      question: 'How big do tarpon get?',
      answer:
        'The IGFA all-tackle world record is 286 lbs 9 oz. In Florida waters, tarpon over 200 lbs are caught annually, with the state record at approximately 243 lbs. Average adult tarpon range from 40-120 lbs, though fish over 150 lbs are considered true trophies.',
    },
    {
      question: 'Why are tarpon called the silver king?',
      answer:
        'Tarpon earned the nickname "silver king" due to their enormous, mirror-like silver scales that flash brilliantly in the sunlight, especially during their spectacular aerial displays. Their regal size, power, and the reverence anglers hold for them further cement the royal title.',
    },
  ],
  imagePath: '/images/species/tarpon.jpg',
  imageAlt: 'Large silver tarpon leaping out of the water with scales flashing in sunlight',
  imageCredit: 'Photo via Unsplash',
};
