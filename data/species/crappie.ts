import { Species } from '../types';

export const crappie: Species = {
  slug: 'crappie',
  name: 'Crappie',
  scientificName: 'Pomoxis spp.',
  type: 'freshwater',
  family: 'Centrarchidae',
  description:
    'Crappie are among the most popular panfish in America, prized for their delicious white meat and willingness to bite. The genus includes two species: white crappie (Pomoxis annularis) and black crappie (Pomoxis nigromaculatus), both found throughout the eastern and central United States. Crappie are schooling fish that can be caught in large numbers when located, making them a favorite for family fishing trips and fish fries. Spring spawning runs draw millions of anglers to shorelines each year.',
  identification:
    'White crappie have 5-6 dorsal spines and vertical dark bars on their silvery-green sides. Black crappie have 7-8 dorsal spines and irregular dark speckles scattered across their body rather than vertical bars. Both species have deeply compressed (flat) bodies, large mouths relative to their size, and prominent dorsal and anal fins. Black crappie tend to be slightly darker overall and prefer clearer water, while white crappie tolerate more turbid conditions. Both have thin, papery mouths that tear easily, hence the nickname "papermouths."',
  habitat:
    'Crappie are found in lakes, reservoirs, ponds, and slow-moving rivers across the eastern two-thirds of the United States, with introductions throughout the West. They relate to submerged structure including brush piles, standing timber, fallen trees, docks, stake beds, and bridge pilings. Black crappie prefer clearer water with more vegetation, while white crappie tolerate stained and turbid water. Both species are commonly found at depths of 5-25 feet outside of the spawn.',
  behavior:
    'Crappie are schooling fish that travel and feed in groups, often suspending at a specific depth over structure. They feed most actively during low-light conditions, particularly at dawn, dusk, and on overcast days. During spring, they move shallow to spawn in water 1-6 feet deep around wood, brush, and vegetation. After the spawn, they retreat to deeper brush piles, channel ledges, and other submerged structure. Crappie are known for feeding on small baitfish and minnows by ambushing them from cover.',
  diet:
    'Crappie are primarily minnow and small baitfish feeders. They eat threadfin shad, gizzard shad fry, fathead minnows, small bluegill, and aquatic insects. They feed by hovering near structure and darting out to engulf small prey. Crappie have relatively large mouths for their body size, allowing them to eat baitfish up to one-third their own length.',
  recordWeight: { lbs: 5, oz: 3, location: 'Enid Dam, MS', year: 1957 },
  averageWeight: { min: 0.5, max: 1.5, unit: 'lbs' },
  averageLength: { min: 8, max: 12, unit: 'inches' },
  lifespan: { min: 3, max: 8, unit: 'years' },
  preferredTemp: { min: 55, max: 70, unit: 'F' },
  difficultyRating: 1,
  fightRating: 2,
  tasteRating: 5,
  statesFound: [
    'alabama', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware',
    'florida', 'georgia', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas',
    'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan',
    'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada',
    'new-hampshire', 'new-jersey', 'new-mexico', 'new-york', 'north-carolina',
    'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania',
    'south-carolina', 'south-dakota', 'tennessee', 'texas', 'utah', 'vermont',
    'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming',
  ],
  seasonalPatterns: {
    spring:
      'Spring is the premier season for crappie fishing. As water temperatures reach 55-65F, crappie move from deep winter haunts into shallow water to spawn. They stage on secondary points and channel edges before moving to shoreline brush, laydowns, and docks in 1-6 feet of water. This is the easiest time to catch crappie, as they are shallow, concentrated, and aggressive.',
    summer:
      'After the spawn, crappie move to deeper structure and become more challenging to locate. They suspend over brush piles, channel ledges, and standing timber in 15-25 feet of water. Electronics are essential for finding schools. Spider rigging with multiple poles is a popular technique for covering water and finding the right depth. Night fishing under lights is very productive in summer.',
    fall:
      'Fall crappie begin to feed aggressively as water temperatures cool into the 60s. They move from deep summer haunts toward shallower structure following baitfish. Creek channels and secondary points with brush are key areas. Minnows and small jigs fished around submerged wood are most effective. This is often an overlooked but highly productive season for quality crappie.',
    winter:
      'Winter crappie group tightly in deep water, often stacking up on specific brush piles or channel bends in 20-35 feet. They can be caught but require precise presentations at exact depths. Slow-falling jigs tipped with minnows fished vertically over known structure are most effective. In northern states, crappie are one of the most popular ice-fishing targets.',
  },
  bestTechniques: ['jigging', 'live-bait', 'trolling', 'ice-fishing'],
  bestBaits: [
    'Live minnows (fathead or shiner)',
    '1/16 oz jig with curly-tail grub (chartreuse)',
    'Bobby Garland Baby Shad (monkey milk)',
    'Small tube jig (white/chartreuse)',
    'Marabou jig (1/32 oz)',
    'Road Runner underspin (chartreuse/white)',
    'Crappie Magnet (various colors)',
    'Small hair jig tipped with wax worm',
  ],
  relatedSpecies: ['bluegill', 'largemouth-bass', 'channel-catfish', 'walleye'],
  funFacts: [
    'Crappie are called "papermouths" because their thin, membranous mouth tears easily, which is why a slow, steady rod lift is better than a hard hookset.',
    'A single female crappie can produce 20,000 to 60,000 eggs in a single spawn, leading to population booms and busts that affect fish size.',
    'The name "crappie" comes from the Canadian French word "crapet," which refers to various sunfish species.',
    'Crappie have some of the best night vision of any freshwater fish, which is why they are so effective at feeding in low-light conditions and why night fishing under lights is so productive.',
    'White crappie and black crappie can hybridize, producing fish with intermediate characteristics that can be difficult to identify.',
  ],
  faq: [
    {
      question: 'What is the difference between white and black crappie?',
      answer:
        'The easiest way to tell them apart is the dorsal fin spine count: white crappie have 5-6 spines, black crappie have 7-8. Visually, white crappie have vertical dark bars on their sides, while black crappie have irregular scattered dark speckles. Black crappie prefer clearer water and are more commonly associated with vegetation, while white crappie tolerate murkier water and tend to grow slightly larger on average.',
    },
    {
      question: 'What depth do crappie live at?',
      answer:
        'Crappie depth varies dramatically by season. During the spring spawn, they may be as shallow as 1-3 feet. In summer and winter, they commonly suspend over structure at 15-30 feet. The key is finding the thermocline and the depth where baitfish are concentrated. Use electronics to locate suspended schools, then present baits at the exact same depth. Even being 2-3 feet off can mean the difference between a big catch and nothing.',
    },
    {
      question: 'What is the best time to catch crappie?',
      answer:
        'The spring spawn (water temps 55-65F, typically March-May depending on latitude) is the single best time to catch crappie because they are shallow, concentrated, and aggressive. Outside of the spawn, dawn and dusk are the most productive times. Overcast days with light wind often produce all-day bites. Night fishing under submersible lights during summer can be incredibly productive as lights attract baitfish, which attract crappie.',
    },
    {
      question: 'How do you cook crappie?',
      answer:
        'Crappie have sweet, mild, white flesh that is considered among the best-tasting freshwater fish. The most popular preparation is a simple pan-fry: coat fillets in seasoned cornmeal or fish breading and fry in oil at 350-375F for 2-3 minutes per side until golden. They are also excellent blackened, baked, or in fish tacos. Crappie fillets are thin and cook quickly, so avoid overcooking. Fresh crappie can also be eaten as sashimi in clean-water fisheries.',
    },
  ],
  imagePath: '/images/species/crappie-id.jpg',
  imageAlt: 'Black crappie showing its distinctive speckled pattern held over calm lake water',
  imageCredit: 'Photo via Unsplash',
};
