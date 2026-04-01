import type { Species } from '../types';

export const flounder: Species = {
  slug: 'flounder',
  name: 'Flounder',
  scientificName: 'Paralichthys (genus)',
  type: 'saltwater',
  family: 'Paralichthyidae',
  description:
    'Flounder are flat, bottom-dwelling ambush predators found along the Atlantic and Gulf coasts. Both southern flounder and summer flounder (fluke) are highly prized by anglers for their superb eating quality and challenging, stealthy fishing style. They lie camouflaged on the bottom waiting to ambush passing baitfish, making them one of the most unique gamefish pursued by inshore anglers.',
  identification:
    'Flounder have a distinctive flat, oval body with both eyes on the left side (southern flounder) or left side (summer flounder/fluke). They are brownish-green to olive on the eyed side with the ability to change color and pattern to match the bottom substrate. The blind side is white. Southern flounder lack distinctive spots, while summer flounder typically have five or more ocellated spots. They have a large mouth with sharp teeth.',
  habitat:
    'Found on sandy and muddy bottoms in bays, estuaries, inlets, passes, nearshore reefs, and surf zones. They prefer areas where current carries baitfish past their ambush position, such as channel edges, inlet mouths, bridge pilings, and dock structures. Flounder bury themselves in the substrate with only their eyes exposed.',
  behavior:
    'Flounder are lie-and-wait ambush predators. They bury themselves in sand or mud and strike upward at passing prey with remarkable speed. During fall, flounder undergo a significant offshore migration (the "flounder run") to spawn in deeper ocean waters, creating one of the most productive fishing periods of the year. They are solitary fish but often concentrate along migration corridors.',
  diet:
    'Primarily eat small fish including mullet, menhaden, mud minnows, pinfish, and silversides. They also consume shrimp, crabs, and squid. Flounder strike from below with an upward lunge, often engulfing prey much larger than expected for their flat profile.',
  recordWeight: { lbs: 20, oz: 9, location: 'Nassau Sound, Florida', year: 1983 },
  averageWeight: { min: 1, max: 5, unit: 'lbs' },
  averageLength: { min: 14, max: 24, unit: 'inches' },
  lifespan: { min: 7, max: 14, unit: 'years' },
  preferredTemp: { min: 56, max: 78, unit: 'F' },
  difficultyRating: 3,
  fightRating: 2,
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
    'virginia',
    'maryland',
    'new-jersey',
    'new-york',
    'connecticut',
    'massachusetts',
  ],
  seasonalPatterns: {
    spring:
      'Flounder move back inshore from their offshore spawning grounds as water temperatures warm into the upper 50s and 60s. They set up along channel edges, inlet mouths, and the first grass flats they encounter. Spring fishing improves steadily through May as more fish arrive and feeding intensifies.',
    summer:
      'Summer offers the most consistent flounder fishing as fish are well established on their inshore feeding grounds. Target sandy areas adjacent to structure, channel drop-offs, and grass flat edges. Drift fishing with live bait or bucktail jigs tipped with minnows or Gulp! strips is highly effective.',
    fall:
      'The fall flounder run (September through November) is the most anticipated period for flounder anglers. Fish congregate near inlets, passes, and channels as they migrate offshore to spawn. This concentration of fish creates exceptional catch rates, particularly on outgoing tides near inlet mouths.',
    winter:
      'Most flounder move offshore to deeper ocean waters for spawning during winter. Inshore fishing is slow to nonexistent in most areas. Some flounder remain in deep holes in southern regions but fishing effort is minimal. This is the off-season for most flounder anglers.',
  },
  bestTechniques: ['bottom-fishing', 'drift-fishing', 'live-bait'],
  bestBaits: [
    'Live mud minnow (bull minnow)',
    'Live finger mullet',
    'Bucktail jig with Gulp! strip',
    'Live shrimp on bottom rig',
    'Berkley Gulp! swimming mullet',
    'Carolina-rigged live bait',
    'White or chartreuse grub on jighead',
    'Live killifish',
  ],
  relatedSpecies: ['redfish', 'speckled-trout', 'sheepshead', 'snook'],
  funFacts: [
    'Flounder are born as normal, vertically oriented fish. During metamorphosis, one eye migrates to the other side of the head and the body flattens, a transformation that takes about 5-6 weeks.',
    'Flounder can change their color and pattern to match the bottom they are lying on, rivaling chameleons in their camouflage ability. Studies have shown they can even mimic a checkerboard pattern.',
    'The southern flounder is one of the few flatfish species that regularly enters freshwater, sometimes found miles upriver from the coast in tidal river systems.',
    'A flounder can strike and engulf prey in less than one-hundredth of a second, making them one of the fastest ambush predators in the ocean despite their sluggish appearance.',
    'Gigging flounder at night with lights in shallow water is a popular and traditional harvest method along the Gulf Coast, particularly in Texas and the Carolinas.',
  ],
  faq: [
    {
      question: 'What is the best bait for flounder?',
      answer:
        'Live mud minnows (bull minnows) and live finger mullet are the top natural baits for flounder. A live mud minnow on a Carolina rig or under a drop-weight rig dragged slowly along the bottom is extremely effective. For artificials, bucktail jigs tipped with Gulp! strips are the go-to choice.',
    },
    {
      question: 'When is the flounder run?',
      answer:
        'The flounder run occurs in fall, typically from late September through November, when flounder migrate from inshore waters through inlets and passes to offshore spawning areas. This concentration of fish near inlets creates the best fishing of the year. Timing varies by latitude, starting earlier in northern states.',
    },
    {
      question: 'How do you catch flounder?',
      answer:
        'The key to catching flounder is keeping your bait on or near the bottom and moving slowly. Drift fishing or slow-trolling with live bait along sandy edges, channel drop-offs, and structure is most productive. When you feel a bite, wait several seconds before setting the hook, as flounder often grab prey and reposition it before swallowing.',
    },
    {
      question: 'Are flounder good to eat?',
      answer:
        'Flounder are considered among the finest eating fish in saltwater, with delicate, white, mild flesh that has a sweet flavor. They are excellent pan-fried, baked, broiled, or stuffed. Flounder is a premium menu item at coastal restaurants and is one of the top reasons anglers pursue them.',
    },
    {
      question: 'What is the difference between southern flounder and summer flounder?',
      answer:
        'Southern flounder (Paralichthys lethostigma) dominate the Gulf Coast and southern Atlantic, while summer flounder/fluke (Paralichthys dentatus) are found primarily from the Carolinas northward. Summer flounder have distinctive eyespots and grow larger on average. Both are left-eyed flatfish with similar habits.',
    },
    {
      question: 'Why do I keep missing flounder bites?',
      answer:
        'Flounder often grab bait by the tail first and take time to turn and swallow it headfirst. The most common mistake is setting the hook too quickly. When you feel the initial thump, lower your rod tip, feed slack, and wait 5-10 seconds before slowly reeling tight and setting the hook with a sweep.',
    },
  ],
  imagePath: '/images/species/flounder-id.jpg',
  imageAlt: 'Flat-bodied flounder with camouflage coloring lying on sandy bottom',
  imageCredit: 'Photo via Unsplash',
};
