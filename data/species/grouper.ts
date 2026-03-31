import type { Species } from '../types';

export const grouper: Species = {
  slug: 'grouper',
  name: 'Grouper',
  scientificName: 'Epinephelus (genus)',
  type: 'saltwater',
  family: 'Serranidae',
  description:
    'Grouper are powerful, structure-dwelling reef fish prized for their exceptional eating quality and the raw-strength battle they provide. Found throughout the Gulf of Mexico and Atlantic coast, species like black grouper, red grouper, and gag grouper inhabit rocky reefs, wrecks, ledges, and artificial structure at depths ranging from 30 to 300+ feet. Landing a quality grouper requires heavy tackle and the ability to turn the fish before it buries itself in its rocky lair.',
  identification:
    'Grouper are heavy-bodied, large-headed fish with a wide mouth and thick lips. Coloration varies by species: gag grouper are brownish-gray with dark worm-like markings; red grouper are reddish-brown with pale blotches; black grouper are dark olive to black with rectangular bronze blotches. All have a large, rounded tail, stout body, and powerful pectoral fins. They can grow from 10 lbs (common) to over 100 lbs (trophy black grouper).',
  habitat:
    'Grouper are structure-dependent fish found on natural rock reefs, limestone ledges, coral formations, shipwrecks, artificial reefs, and any hard bottom with holes and crevices. Depth preferences vary by species: red grouper favor 60-200 feet, gag grouper 80-250 feet, and black grouper 60-300+ feet. They use structure for ambush points and shelter.',
  behavior:
    'Grouper are ambush predators that wait inside or near structure and lunge at passing prey with a powerful inhaling strike. When hooked, their first instinct is to dive back into their rocky hole, requiring immediate, aggressive rod work to prevent a break-off. They are solitary and territorial as adults, though they form spawning aggregations at specific locations during winter months.',
  diet:
    'Grouper are opportunistic predators that eat a wide variety of prey including snappers, grunts, pinfish, crabs, lobster, shrimp, squid, and octopus. They use their large mouth to create powerful suction that inhales prey whole. Larger grouper can eat surprisingly large prey items.',
  recordWeight: { lbs: 113, oz: 6, location: 'Dry Tortugas, Florida', year: 2001 },
  averageWeight: { min: 5, max: 30, unit: 'lbs' },
  averageLength: { min: 20, max: 40, unit: 'inches' },
  lifespan: { min: 15, max: 50, unit: 'years' },
  preferredTemp: { min: 65, max: 82, unit: 'F' },
  difficultyRating: 3,
  fightRating: 4,
  tasteRating: 5,
  statesFound: [
    'florida',
    'texas',
    'louisiana',
    'alabama',
    'mississippi',
    'georgia',
    'south-carolina',
    'north-carolina',
  ],
  seasonalPatterns: {
    spring:
      'Spring is a transitional period as grouper begin moving from their winter spawning aggregations back to nearshore structure. Red grouper become increasingly available on inshore reefs and hard bottom. Gag grouper remain in deeper water in many areas. As water warms, fish become more active and feeding increases.',
    summer:
      'Summer provides consistent grouper fishing, especially for red grouper on nearshore reefs and ledges. Gag grouper may be found shallower during early summer. Live bait and vertical jigging around structure are most productive. Check regulations carefully as some species may be closed during certain summer months.',
    fall:
      'Fall is excellent for grouper as fish feed heavily before winter. Gag grouper begin moving to deeper spawning ledges. Red grouper remain active on nearshore reefs. Some of the best fishing of the year occurs in October and November before seasonal closures take effect in some areas.',
    winter:
      'Gag grouper form spawning aggregations on deep ledges (150-300+ feet) during winter. Red grouper fishing can remain productive in moderate depths. Many grouper species have harvest closures during winter spawning months. Deepwater jigging and bottom fishing can produce trophy fish during this period.',
  },
  bestTechniques: ['bottom-fishing', 'live-bait', 'jigging'],
  bestBaits: [
    'Live pinfish',
    'Live grunt',
    'Live blue runner',
    'Cut squid',
    'Butterfly jig (vertical)',
    'Live sardine or threadfin',
    'Frozen sardine on bottom rig',
    'Large bucktail jig',
    'Knocker rig with cut bait',
  ],
  relatedSpecies: ['red-snapper', 'sheepshead', 'king-mackerel', 'mahi-mahi'],
  funFacts: [
    'Most grouper species are protogynous hermaphrodites, meaning they are born female and transition to male as they grow older and larger. This makes large males especially valuable to the breeding population.',
    'Goliath grouper (formerly called jewfish) can exceed 800 lbs and are protected from harvest throughout their range. They are known to follow divers and can produce a booming sound to intimidate intruders.',
    'Grouper use their massive mouths to create a powerful vacuum that sucks in prey whole. The strike is so fast and forceful that it produces an audible "thump" that anglers can feel through the rod.',
    'Red grouper are considered "ecosystem engineers" because they excavate and maintain sandy depressions on the seafloor, creating habitat used by numerous other species including lobster, snapper, and various invertebrates.',
    'Black grouper hold the record for the largest grouper landed on rod and reel at 113 lbs 6 oz. However, Warsaw grouper, which can exceed 500 lbs, are occasionally landed on deep-drop tackle.',
  ],
  faq: [
    {
      question: 'What is the best bait for grouper?',
      answer:
        'Live pinfish and live grunts are the premier grouper baits, fished on a heavy bottom rig directly over structure. Live blue runners work well for larger grouper. Cut squid and frozen sardines are effective budget alternatives. Vertical butterfly jigs have become increasingly popular among sport anglers targeting grouper.',
    },
    {
      question: 'Why do grouper break you off so often?',
      answer:
        'Grouper are structure-oriented fish whose first instinct when hooked is to dive back into their rocky hole. Once inside, their gill plates flare out and lock them in place, making extraction nearly impossible. The key is using heavy tackle (50-80 lb braid, stout rod) and immediately cranking hard to turn the fish away from structure.',
    },
    {
      question: 'What is the grouper season in Florida?',
      answer:
        'Grouper seasons vary by species and region. In the Gulf, gag grouper are typically open June 1 through December 31, and red grouper are open year-round. In the Atlantic, seasons differ. Regulations change frequently, so always check the current FWC or NOAA regulations before your trip.',
    },
    {
      question: 'How deep do you fish for grouper?',
      answer:
        'Grouper are caught at depths ranging from 30 feet (nearshore red grouper) to 300+ feet (deepwater gag, Warsaw, and snowy grouper). Most recreational grouper fishing occurs in 60-200 feet of water over natural reefs, wrecks, and ledges. Deeper species require specialized electric reel tackle.',
    },
    {
      question: 'Is grouper good to eat?',
      answer:
        'Grouper is considered one of the finest eating fish in saltwater, with firm, white, mild flesh that is versatile and holds up to any preparation. It is a premium menu item at seafood restaurants. Grouper is excellent fried (grouper sandwich), grilled, blackened, baked, or prepared as ceviche.',
    },
    {
      question: 'What tackle do I need for grouper fishing?',
      answer:
        'Heavy tackle is essential. Use a stout conventional rod rated for 50-80 lb line with a powerful reel. Spool with 65-80 lb braided line and use a 60-100 lb fluorocarbon leader. Heavy-duty circle hooks in 6/0-9/0 sizes are standard. You need enough backbone to turn a fish away from structure immediately.',
    },
  ],
  imagePath: '/images/species/grouper.jpg',
  imageAlt: 'Large grouper with distinctive mottled brown coloring held near rocky reef structure',
  imageCredit: 'Photo via Unsplash',
};
