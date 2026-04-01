import type { Species } from '../types';

export const redSnapper: Species = {
  slug: 'red-snapper',
  name: 'Red Snapper',
  scientificName: 'Lutjanus campechanus',
  type: 'saltwater',
  family: 'Lutjanidae',
  description:
    'The red snapper is one of the most iconic and highly sought-after reef fish in the Gulf of Mexico and South Atlantic. Known for their striking red coloration, excellent fighting ability, and superb table quality, red snapper are also one of the most heavily regulated species in US waters. Their populations have rebounded significantly thanks to strict management, making each limited-season opportunity a highlight of the offshore fishing year.',
  identification:
    'Red snapper have a deep, compressed body with a distinctive bright pinkish-red coloration over the entire body, fins included. They have a pointed, triangular snout, large canine teeth, and a moderately forked tail. Juveniles (under 10 inches) often have a dark spot on the upper side below the dorsal fin, which fades with age. Eyes are bright red. They are sometimes confused with vermilion snapper, which are smaller with more yellow coloring.',
  habitat:
    'Found over natural and artificial reefs, rocky ledges, oil and gas platforms, and shipwrecks in the Gulf of Mexico and along the South Atlantic coast. Adults typically inhabit depths of 60-300+ feet, though they can be found shallower, especially around oil rigs. Juveniles use shallow nearshore reefs and structure as nursery habitat before moving deeper as they mature.',
  behavior:
    'Red snapper are structure-oriented fish that form aggregations over reef habitat. They are aggressive feeders that compete with other reef species for food, readily striking both natural and artificial baits. When hooked, they make strong downward runs toward the reef. Red snapper form spawning aggregations from May through October, with peak spawning in summer.',
  diet:
    'Red snapper are opportunistic predators and scavengers that eat fish, shrimp, crabs, squid, and marine worms. They feed on whatever is most available in their reef environment, including small snappers, grunts, pinfish, and various invertebrates. They are not particularly picky eaters, which is one reason they can be caught reliably.',
  recordWeight: { lbs: 50, oz: 4, location: 'Gulf of Mexico, Louisiana', year: 1996 },
  averageWeight: { min: 4, max: 15, unit: 'lbs' },
  averageLength: { min: 18, max: 30, unit: 'inches' },
  lifespan: { min: 20, max: 57, unit: 'years' },
  preferredTemp: { min: 64, max: 80, unit: 'F' },
  difficultyRating: 2,
  fightRating: 3,
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
      'Red snapper become increasingly active as water temperatures warm in spring. Pre-season scouting trips help locate productive structure before the short federal season opens. Fish are hungry after a less active winter and feed aggressively on reefs and wrecks. Some state seasons may be open during spring months.',
    summer:
      'Summer is the traditional red snapper season, with the short federal season typically opening in June. Fish are aggressive, plentiful, and concentrated on structure in 60-200+ feet of water. Competition from other reef species (triggerfish, amberjack) can make it challenging to get baits to the bottom, but red snapper are typically the dominant feeder.',
    fall:
      'Fall offers continued red snapper action as some state seasons extend later in the year. Fish remain on structure and feed heavily. Cooler weather brings calmer seas and fewer crowds. Many experienced anglers consider early fall to be some of the best red snapper fishing of the year with less boat pressure.',
    winter:
      'Red snapper remain on deep structure through winter but feeding activity slows with cooler water temperatures. Federal waters are typically closed during winter months. Fish can still be caught as bycatch while targeting other species, but they must be released with proper descending devices to reduce barotrauma mortality.',
  },
  bestTechniques: ['bottom-fishing', 'jigging'],
  bestBaits: [
    'Cut bonito or skipjack tuna',
    'Whole squid',
    'Live cigar minnow',
    'Live pinfish',
    'Butterfly jig (vertical)',
    'Cut fresh fish (any available)',
    'Frozen sardine',
    'Live vermilion snapper (where legal)',
    'Chunk menhaden',
  ],
  relatedSpecies: ['grouper', 'sheepshead', 'king-mackerel', 'mahi-mahi'],
  funFacts: [
    'Red snapper can live over 50 years, with the oldest documented specimen aged at 57 years. Older, larger fish are the most prolific spawners, producing exponentially more eggs than younger fish.',
    'The federal red snapper season in the Gulf of Mexico is one of the shortest and most anticipated fishing seasons in the country, sometimes lasting only a few days to a few weeks per year due to strict quota management.',
    'Red snapper populations in the Gulf have rebounded dramatically since strict regulations were implemented in the 1990s. Oil and gas platforms have provided critical artificial reef habitat that supports enormous populations.',
    'When brought up from deep water, red snapper suffer barotrauma (pressure-related injuries) that cause their swim bladder to expand and eyes to bulge. Descending devices that return fish to depth are now required to improve survival of released fish.',
    'Red snapper were so overfished that by the 1980s, the average size caught was under 4 lbs. Today, thanks to management, anglers regularly catch fish over 20 lbs, and true monsters over 40 lbs are landed each season.',
  ],
  faq: [
    {
      question: 'When is red snapper season?',
      answer:
        'The federal red snapper season in the Gulf of Mexico typically opens on June 1 and lasts a limited number of days (recently 40-75 days for recreational anglers). Individual Gulf states also have their own seasons that may extend beyond the federal window. Atlantic red snapper seasons are separate. Always check current NOAA and state regulations.',
    },
    {
      question: 'How deep do you fish for red snapper?',
      answer:
        'Most recreational red snapper fishing occurs in 60-200 feet of water over natural reefs, artificial reefs, oil platforms, and wrecks. Red snapper can be found deeper (300+ feet), but most productive fishing is in the 80-150 foot range. Use electronic fish finders to locate structure and mark fish.',
    },
    {
      question: 'What is the red snapper size limit?',
      answer:
        'The minimum size limit for red snapper is 16 inches total length in both the Gulf and South Atlantic. The daily bag limit is typically 2 fish per person in federal Gulf waters. State regulations may differ. Seasons, sizes, and limits change frequently, so always verify current regulations before fishing.',
    },
    {
      question: 'Is red snapper good to eat?',
      answer:
        'Red snapper is one of the most prized eating fish in the ocean, with firm, white, delicate flesh and a mild, sweet flavor. It is a premium restaurant fish worldwide. Red snapper is excellent baked whole, grilled, blackened, fried, or prepared as ceviche. Its reputation makes it one of the most commonly mislabeled fish in restaurants.',
    },
    {
      question: 'What tackle do I need for red snapper?',
      answer:
        'A stout conventional or spinning rod rated for 30-50 lb line handles most red snapper fishing. Use 50-65 lb braided line with an 80 lb fluorocarbon leader. A heavy egg sinker (4-16 oz depending on depth and current) on a knocker or chicken rig with circle hooks (5/0-7/0) is the standard bottom-fishing setup.',
    },
    {
      question: 'What is a descending device and why is it required?',
      answer:
        'A descending device is a weighted tool that returns a fish to depth after being brought up from deep water. Red snapper suffer barotrauma (expanded swim bladder, bulging eyes) from the pressure change and cannot swim back down on their own. NOAA now requires anglers to have a descending device or venting tool on board when fishing for reef species.',
    },
  ],
  imagePath: '/images/species/red-snapper-id.jpg',
  imageAlt: 'Bright red snapper with vivid pinkish-red coloring held over deep blue water',
  imageCredit: 'Photo via Unsplash',
};
