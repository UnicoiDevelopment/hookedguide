import { Species } from '../types';

export const bluegill: Species = {
  slug: 'bluegill',
  name: 'Bluegill',
  scientificName: 'Lepomis macrochirus',
  type: 'freshwater',
  family: 'Centrarchidae',
  description:
    'The bluegill is the most common and widely distributed panfish in North America, found in virtually every state. It is often the first fish that young anglers catch, making it an essential gateway species that hooks people on fishing for life. Despite their small size, bluegill are scrappy fighters on ultralight tackle and are considered one of the finest-tasting freshwater fish. They are a keystone forage species in most warm-water ecosystems, serving as a primary food source for largemouth bass.',
  identification:
    'Bluegill are easily identified by the distinctive dark blue or black "ear" flap on the gill cover, which is solid colored without a colored border (unlike other sunfish species). They have a deep, laterally compressed body with olive to dark green backs, yellow to copper-orange breast and belly (especially pronounced in breeding males), and 5-9 dark vertical bars on the sides. The pectoral fins are long and pointed. Bluegill are distinguished from pumpkinseed sunfish by the lack of orange or red on the ear flap and from redear sunfish by the absence of a red border on the ear flap.',
  habitat:
    'Bluegill are found in nearly every warm-water habitat across North America including ponds, lakes, reservoirs, rivers, streams, and even brackish water in some coastal areas. They prefer calm, warm water with aquatic vegetation, brush piles, docks, and other structure. Bluegill are tolerant of a wide range of water conditions and can thrive in small farm ponds as well as large reservoirs. They are typically found in water less than 15 feet deep, especially near cover.',
  behavior:
    'Bluegill are social fish that form loose schools, especially when young. They feed throughout the day but are most active in the morning and evening. During the spawn (late spring through summer), males create circular nests in shallow water, often forming large colonies of 50 or more beds. Males guard the nest aggressively and will strike at anything that approaches. Bluegill are known for their ability to reproduce prolifically, which can lead to stunted populations in small bodies of water without sufficient predators.',
  diet:
    'Bluegill are omnivorous feeders that eat aquatic insects, terrestrial insects that fall on the water, zooplankton, small crustaceans, snails, worms, fish eggs, and small minnows. They feed by sight and are especially attracted to slow-moving or stationary prey. Their small, slightly downturned mouths are designed for picking food items off vegetation and structure. In many lakes, bluegill are a critical link between invertebrate prey and larger predators like bass.',
  recordWeight: { lbs: 4, oz: 12, location: 'Ketona Lake, AL', year: 1950 },
  averageWeight: { min: 0.25, max: 0.75, unit: 'lbs' },
  averageLength: { min: 6, max: 9, unit: 'inches' },
  lifespan: { min: 4, max: 8, unit: 'years' },
  preferredTemp: { min: 65, max: 80, unit: 'F' },
  difficultyRating: 1,
  fightRating: 1,
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
      'Spring is the start of bluegill season. As water warms into the upper 60s, bluegill move to shallow flats and banks to begin spawning. Bedding colonies are visible in 1-4 feet of clear water as light-colored circular depressions on the bottom. Males are extremely aggressive on beds and will strike nearly anything. Small jigs, crickets, and worms fished near beds produce fast action.',
    summer:
      'Summer is peak bluegill season with spawning activity continuing through July or even August in southern states. Bluegill remain shallow near cover, docks, and vegetation throughout the summer. Early morning and late evening are the most productive times, though bluegill will bite all day in shaded areas. Fly fishing with poppers and dry flies is outstanding during summer evenings.',
    fall:
      'As water cools in fall, bluegill move to slightly deeper water, holding around brush piles, vegetation edges, and docks in 5-12 feet. They feed less aggressively but can still be caught consistently on small jigs and live bait. Look for bluegill schooled up on structure with your electronics. They are often found mixed with crappie at this time of year.',
    winter:
      'Winter bluegill hold in the deepest available cover, often in 10-20 feet around brush piles and vegetation. They feed less frequently but will take small jigs and wax worms presented slowly. In northern states, bluegill are extremely popular ice-fishing targets, often caught in large numbers through the ice on tiny jigs tipped with wax worms or spikes. Look for them near deep weed edges under the ice.',
  },
  bestTechniques: ['live-bait', 'jigging', 'fly-fishing-basics', 'ice-fishing'],
  bestBaits: [
    'Live crickets',
    'Red worms or nightcrawlers (pieces)',
    'Wax worms',
    'Small beetle spin (1/32 oz)',
    '1/64 oz jig with soft plastic',
    'Foam popper (fly rod)',
    'Bread balls',
    'Small dry flies (size 10-14)',
  ],
  relatedSpecies: ['crappie', 'largemouth-bass', 'channel-catfish'],
  funFacts: [
    'Bluegill were among the first fish taken into space by NASA in 1973 aboard Skylab to study the effects of microgravity on otolith (inner ear) development.',
    'A large male bluegill can spawn up to 8 times in a single season with different females, each time defending the nest aggressively for several days.',
    'Bluegill have excellent color vision and can see into the ultraviolet spectrum, which influences their attraction to certain lure colors.',
    'In balanced ecosystems, bluegill serve as the primary forage for largemouth bass, and a healthy bass-bluegill ratio is essential for quality fishing in ponds and lakes.',
    'The world record bluegill of 4 lbs 12 oz caught in 1950 from Ketona Lake, Alabama, is widely considered one of the most unbreakable freshwater records.',
  ],
  faq: [
    {
      question: 'What is the best bait for bluegill?',
      answer:
        'Live crickets are widely considered the single best bait for bluegill, followed by red worms and wax worms. Use a small #6 or #8 hook with a split shot and small bobber, casting near structure like docks, brush, and weed edges. For artificial baits, small beetle spins (1/32 oz) in white or chartreuse and tiny soft plastic grubs on 1/64 oz jigheads are very effective. On a fly rod, foam poppers and small rubber-legged nymphs are outstanding.',
    },
    {
      question: 'How do I catch bigger bluegill?',
      answer:
        'Trophy bluegill over 10 inches require different strategies than catching small ones. Focus on deeper structure like brush piles and weed edges in 8-15 feet of water rather than shallow beds. Use slightly larger bait like whole nightcrawlers or crickets. Fish early morning and late evening when big bluegill feed most aggressively. Private ponds with proper bass-bluegill management often produce the largest bluegill. In public waters, look for lakes with slot limits or special regulations that protect larger fish.',
    },
    {
      question: 'Are bluegill good to eat?',
      answer:
        'Bluegill are considered one of the best-tasting freshwater fish. Their sweet, firm white meat is mild and flavorful with very few bones in the fillets. The most popular preparation is pan-frying in seasoned cornmeal or light batter. Because bluegill are small, it typically takes 6-10 fish to make a meal. Many anglers consider hand-sized bluegill (7-8 inches) the ideal eating size, as they are easy to fillet and abundant enough to harvest sustainably.',
    },
    {
      question: 'What rod and reel should I use for bluegill?',
      answer:
        'An ultralight spinning rod (4\'6" to 5\'6") paired with a 1000-size spinning reel spooled with 2-4 lb monofilament is ideal for bluegill fishing. This light setup lets you feel every bite and enjoy the fight of these scrappy little fish. A fly rod setup (3-5 weight, 7-8 feet) is also excellent and many anglers consider fly fishing for bluegill with poppers and small flies to be one of the most fun experiences in freshwater fishing.',
    },
  ],
  imagePath: '/images/species/bluegill.jpg',
  imageAlt: 'Colorful bluegill sunfish showing its distinctive dark ear flap and orange breast',
  imageCredit: 'Photo via Unsplash',
};
