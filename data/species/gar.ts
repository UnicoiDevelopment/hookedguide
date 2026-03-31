import { Species } from '../types';

export const gar: Species = {
  slug: 'gar',
  name: 'Gar',
  scientificName: 'Lepisosteus (genus)',
  type: 'freshwater',
  family: 'Lepisosteidae',
  description:
    'Gar are prehistoric freshwater fish that have remained virtually unchanged for over 100 million years. Several species exist in North America including longnose gar, shortnose gar, spotted gar, Florida gar, and the massive alligator gar, which can exceed 300 pounds. Once dismissed as trash fish, gar are gaining recognition as challenging sport fish. Their bony, armored mouths make them notoriously difficult to hook with conventional tackle.',
  identification:
    'Gar have a distinctive elongated, torpedo-shaped body covered in thick, diamond-shaped ganoid scales that function like armor plating. Their most recognizable feature is a long, narrow snout filled with sharp teeth, used for slashing at prey. Longnose gar have the most elongated snout, while alligator gar have a broad, alligator-like snout. Gar have a single dorsal fin positioned far back near the rounded tail. Their coloring is typically olive-green to brown on top with lighter sides and a white belly.',
  habitat:
    'Gar are found in slow-moving rivers, bayous, oxbow lakes, reservoirs, and backwater areas throughout the central and southern United States. Alligator gar are most common in the lower Mississippi River basin and Gulf Coast drainages. Longnose gar have the widest range, extending into the Great Lakes and Northeast. Gar prefer warm, sluggish water and are tolerant of low-oxygen conditions thanks to their ability to breathe atmospheric air using a modified swim bladder.',
  behavior:
    'Gar are surface-oriented ambush predators that lie motionless near the surface or in shallow water, using their camouflage to ambush passing prey. They can often be seen basking or gulping air at the surface — their modified swim bladder allows them to supplement gill breathing with atmospheric air. This adaptation lets them survive in stagnant, oxygen-depleted water that would kill most fish. Gar are most active during warm months and feed primarily during daylight hours.',
  diet:
    'Gar are primarily piscivorous, feeding on a variety of fish including shad, sunfish, catfish, and minnows. They attack prey with a sideways slashing motion of their toothy snout, then manipulate the stunned or dead prey to swallow it headfirst. Smaller gar species also eat crayfish, insects, and small crustaceans. Alligator gar are apex predators capable of consuming very large prey fish and occasionally waterfowl.',
  recordWeight: { lbs: 327, oz: 0, location: 'Rio Grande, Texas', year: 1951 },
  averageWeight: { min: 5, max: 20, unit: 'lbs' },
  averageLength: { min: 24, max: 48, unit: 'inches' },
  lifespan: { min: 15, max: 50, unit: 'years' },
  preferredTemp: { min: 70, max: 85, unit: 'F' },
  difficultyRating: 4,
  fightRating: 3,
  tasteRating: 1,
  statesFound: [
    'alabama',
    'arkansas',
    'florida',
    'georgia',
    'illinois',
    'indiana',
    'iowa',
    'kansas',
    'kentucky',
    'louisiana',
    'michigan',
    'minnesota',
    'mississippi',
    'missouri',
    'nebraska',
    'ohio',
    'oklahoma',
    'south-carolina',
    'tennessee',
    'texas',
    'virginia',
    'west-virginia',
    'wisconsin',
  ],
  seasonalPatterns: {
    spring:
      'Gar become increasingly active as water temperatures climb into the 60s and 70s. Spawning occurs in late spring when gar congregate in shallow, vegetated backwaters and flooded areas. Pre-spawn and spawning fish can be seen rolling and splashing at the surface, making them easier to locate. Spring is an excellent time to sight-fish for gar in clear, shallow water.',
    summer:
      'Summer is peak gar season as warm water temperatures boost their metabolism and feeding activity. Gar can be found basking at the surface in backwater areas, near river bends, and along vegetation lines. They are most active and most willing to strike during warm summer months. Surface presentations and live bait fished under a float produce the best results.',
    fall:
      'Gar remain active through early fall as water temperatures stay warm. As temperatures drop below 65 degrees, gar begin slowing down and moving toward deeper, slower water. Early fall still offers good fishing, particularly in the southern parts of their range where warm weather persists longer.',
    winter:
      'Gar become largely dormant in cold winter water, congregating in deep, slow pools and barely feeding. In the Deep South, gar may remain somewhat active throughout winter during warm spells. In northern portions of their range, gar essentially hibernate near the bottom and are not realistically targetable until spring.',
  },
  bestTechniques: ['live-bait'],
  bestBaits: [
    'live shiners',
    'cut shad',
    'live sunfish (where legal)',
    'rope lures (nylon frays tangle in teeth)',
    'topwater plugs',
    'cut mullet',
    'live minnows under a float',
    'chicken breast strips',
  ],
  relatedSpecies: ['bowfin', 'northern-pike', 'musky'],
  funFacts: [
    'Gar have existed for over 100 million years — they swam alongside dinosaurs and have changed remarkably little since the Cretaceous period.',
    'Alligator gar can grow over 8 feet long and weigh more than 300 pounds, making them the second-largest freshwater fish in North America after the white sturgeon.',
    'Gar scales were used as arrowheads by Native Americans and as tools for plowing by Caribbean islanders — the ganoid scales are so hard they can deflect a knife blade.',
    'One of the most effective methods for hooking gar is using a "rope lure" — a frayed nylon rope that tangles in the gar\'s teeth without requiring a conventional hook set.',
    'Gar eggs are toxic to mammals and birds. The bright green eggs should never be consumed by humans, though the flesh itself is edible when prepared properly.',
  ],
  faq: [
    {
      question: 'Why are gar so hard to hook?',
      answer:
        'Gar have extremely hard, bony mouths that are very difficult to penetrate with conventional hooks. Their long snout is armored with dense bone, and standard hook sets often fail to find purchase. This is why many gar anglers use rope lures — pieces of frayed nylon rope that tangle in the gar\'s teeth and hold without needing to pierce the mouth. When using conventional hooks, treble hooks and braided line with a very strong hook set are recommended. Patience is essential, as gar often hold bait sideways in their snout for some time before swallowing.',
    },
    {
      question: 'Are gar dangerous to humans?',
      answer:
        'Gar are not aggressive toward humans and pose no real danger in the water. However, their teeth are sharp and can cause cuts if a fish is handled carelessly. Alligator gar in particular should be handled with caution due to their size and powerful jaws. Their eggs are toxic and should never be eaten. There are no documented cases of gar attacking humans, despite their fearsome appearance.',
    },
    {
      question: 'Can you eat gar?',
      answer:
        'Gar flesh is edible and tastes somewhat like lobster or alligator when prepared properly. The challenge is getting through the extremely tough, armor-like scales — tin snips or heavy-duty shears are often needed. The white flesh can be grilled, fried, or made into gar balls (a Cajun specialty). However, gar eggs are toxic to mammals and must never be consumed. Many anglers, especially in Louisiana and Texas, consider gar a worthwhile food fish.',
    },
    {
      question: 'What is the difference between alligator gar and longnose gar?',
      answer:
        'Alligator gar are dramatically larger (up to 300+ pounds vs. 50 pounds for longnose) and have a much broader, shorter snout resembling an alligator. Alligator gar have two rows of teeth on each side of the upper jaw, while longnose gar have a single row. Longnose gar have a much longer, narrower snout and are more widely distributed, found from the Great Lakes to the Gulf Coast. Alligator gar are restricted primarily to the lower Mississippi basin, Gulf Coast drainages, and Texas rivers.',
    },
  ],
  imagePath: '/images/species/gar.jpg',
  imageAlt: 'A longnose gar with an elongated snout and armored scales near the surface of a river',
  imageCredit: 'Photo via Unsplash',
};
