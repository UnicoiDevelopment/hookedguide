import { Species } from '../types';

export const carp: Species = {
  slug: 'carp',
  name: 'Common Carp',
  scientificName: 'Cyprinus carpio',
  type: 'freshwater',
  family: 'Cyprinidae',
  description:
    'The common carp is one of the most widely distributed freshwater fish in the world and is gaining increasing respect as a challenging sport fish in North America. Originally from Asia and domesticated in Europe for centuries, carp were introduced to US waters in the 1800s. They are powerful fighters that can exceed 40 pounds and require patience, stealth, and specialized techniques to catch consistently. Carp fishing is the most popular form of freshwater angling in Europe and is rapidly growing in the United States.',
  identification:
    'Common carp have a deep, thick body with large, clearly defined scales that range from golden-bronze to olive-brown in color. Two pairs of barbels (whisker-like sensory organs) flank the downturned mouth — a key identifying feature. The dorsal fin is long with a serrated leading spine. Mirror carp, a variant, have irregularly placed, oversized scales. Leather carp are nearly scaleless. The tail is deeply forked and powerful.',
  habitat:
    'Carp are incredibly adaptable and thrive in nearly every type of freshwater habitat including lakes, ponds, reservoirs, rivers, and canals. They prefer slow-moving or still water with soft, muddy bottoms and abundant aquatic vegetation. Carp tolerate a wide range of water quality and temperatures, including low-oxygen conditions that would stress most game fish. They are often found in shallow flats, near creek mouths, and along muddy banks.',
  behavior:
    'Carp are intelligent, wary fish with excellent senses of smell, taste, and hearing. They feed primarily by rooting along the bottom, using their sensitive barbels to detect food in sediment. Feeding carp often create visible mud plumes or "carp clouds" and send streams of bubbles to the surface — telltale signs for observant anglers. They are highly social and often feed in groups. Carp spook easily from noise and shadows, requiring stealthy approaches.',
  diet:
    'Carp are omnivorous bottom feeders with a diet that includes aquatic insects, worms, crustaceans, snails, mollusks, seeds, plant material, and algae. They use their pharyngeal teeth (located in the throat) to crush hard-shelled prey. In urban waters, carp readily eat bread, corn, and other human food waste. Their ability to exploit diverse food sources contributes to their success in virtually any water body.',
  recordWeight: { lbs: 57, oz: 13, location: 'Tidal Basin, Washington DC area, Virginia', year: 1983 },
  averageWeight: { min: 5, max: 15, unit: 'lbs' },
  averageLength: { min: 18, max: 30, unit: 'inches' },
  lifespan: { min: 15, max: 47, unit: 'years' },
  preferredTemp: { min: 65, max: 80, unit: 'F' },
  difficultyRating: 4,
  fightRating: 4,
  tasteRating: 1,
  statesFound: [
    'alabama',
    'arizona',
    'arkansas',
    'california',
    'colorado',
    'connecticut',
    'delaware',
    'florida',
    'georgia',
    'idaho',
    'illinois',
    'indiana',
    'iowa',
    'kansas',
    'kentucky',
    'louisiana',
    'maine',
    'maryland',
    'massachusetts',
    'michigan',
    'minnesota',
    'mississippi',
    'missouri',
    'montana',
    'nebraska',
    'nevada',
    'new-hampshire',
    'new-jersey',
    'new-york',
    'north-carolina',
    'north-dakota',
    'ohio',
    'oklahoma',
    'oregon',
    'pennsylvania',
    'south-carolina',
    'south-dakota',
    'tennessee',
    'texas',
    'utah',
    'vermont',
    'virginia',
    'washington',
    'west-virginia',
    'wisconsin',
    'wyoming',
  ],
  seasonalPatterns: {
    spring:
      'Spring is prime carp fishing season as warming water temperatures into the 60s trigger pre-spawn feeding activity. Carp move into shallow flats, bays, and creek arms to feed and eventually spawn. Sight fishing for cruising carp in shallow water with fly rods or light tackle is exceptionally exciting during this period.',
    summer:
      'Summer provides consistent carp fishing as fish are most active and feeding heavily in water temperatures between 70 and 80 degrees. Early morning and late evening sessions are most productive, especially on heavily pressured waters. Chumming or pre-baiting a swim with corn, boilies, or pack bait concentrates fish and improves catch rates significantly.',
    fall:
      'Carp feed aggressively in fall to build fat reserves for winter, making it another excellent fishing window. Fish concentrate in areas with the last remaining warm water and abundant food sources. Bottom-fishing rigs with boilies, corn, or dough baits fished near structure and creek channels produce consistent action through October and November.',
    winter:
      'Carp become sluggish in cold water but can still be caught on warmer winter days, especially in the southern half of their range. Focus on the warmest available water — southern-facing banks, power plant discharges, and shallow dark-bottomed areas that absorb solar heat. Scaled-down baits and extremely patient presentations are required.',
  },
  bestTechniques: ['bottom-fishing', 'live-bait'],
  bestBaits: [
    'boilies (flavored bait balls)',
    'sweet corn',
    'bread crust',
    'pack bait (method mix)',
    'nightcrawlers',
    'dough balls',
    'hair-rigged tiger nuts',
    'carp fly patterns (woolly bugger, San Juan worm)',
  ],
  relatedSpecies: ['grass-carp', 'buffalo', 'goldfish'],
  funFacts: [
    'Common carp can live over 40 years, with some documented individuals in Europe reaching 60 years of age.',
    'Carp were deliberately introduced to US waters by the federal government in the 1870s and 1880s as a food fish, a decision now widely considered a mistake as they became invasive in many waterways.',
    'Carp have pharyngeal teeth in their throat that can crush snail shells, clam shells, and hard seeds — they have no teeth in their jaws.',
    'European-style carp fishing, which uses specialized rods, bite alarms, and boilie baits, has developed into a multi-billion dollar industry and is the most popular form of recreational fishing in the UK and continental Europe.',
    'Koi fish are domesticated ornamental varieties of common carp, and wild carp can interbreed with escaped koi.',
  ],
  faq: [
    {
      question: 'What is the best bait for carp?',
      answer:
        'Sweet corn is the most accessible and effective carp bait in North America — it is cheap, easy to use, and carp love it. Boilies (flavored, hardened bait balls) are the standard in European-style carp fishing and are highly effective. Other proven baits include bread crust, nightcrawlers, dough balls, and commercial pack baits. Hair rigs, which present the bait on a short piece of line trailing behind the hook, are far more effective than threading bait directly on the hook.',
    },
    {
      question: 'Why are carp considered difficult to catch?',
      answer:
        'Carp are highly intelligent fish with exceptional senses of smell, taste, and hearing. They learn to associate certain presentations with danger, especially in pressured waters. Carp will mouth a bait and eject it if they detect the hook, requiring refined rigs like the hair rig that separate the hook from the bait. They spook easily from noise, vibrations, and shadows. Successfully targeting large carp requires stealth, patience, and attention to tackle details that most casual anglers overlook.',
    },
    {
      question: 'Can you eat carp?',
      answer:
        'Carp are edible and are widely consumed in many countries, particularly in Eastern Europe and Asia. In North America, they are generally not favored as table fare due to their muddy flavor and numerous small bones. However, carp from clean, cold water can taste much better. Smoking, deep-frying, or preparing carp as gefilte fish are traditional preparation methods that improve the flavor. Most American carp anglers practice catch and release.',
    },
    {
      question: 'What tackle do I need for carp fishing?',
      answer:
        'For North American carp fishing, a medium-heavy spinning rod with 10 to 15 pound monofilament or braid works well for a basic setup. European-style carp anglers use specialized 12-foot carp rods, large baitrunner reels, and electronic bite alarms. Hair rigs are essential — these present the bait on a short length of line behind the hook so the carp picks up the bait freely and hooks itself. A landing net with a wide, soft mesh is important to safely handle these large, powerful fish.',
    },
    {
      question: 'Can you fly fish for carp?',
      answer:
        'Yes, fly fishing for carp has become one of the fastest-growing niches in fly fishing. Sight fishing for carp on shallow flats is often compared to stalking bonefish on saltwater flats. An 8-weight fly rod with a floating line and a long leader is the standard setup. Effective flies include woolly buggers, San Juan worms, crayfish patterns, and small nymphs in sizes 8 to 12. Carp are extremely spooky on the flats, requiring delicate presentations and long, accurate casts.',
    },
  ],
  imagePath: '/images/species/carp.jpg',
  imageAlt: 'A large golden-bronze common carp with prominent scales held by an angler near a lake',
  imageCredit: 'Photo via Unsplash',
};
