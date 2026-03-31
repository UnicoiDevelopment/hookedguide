import { Species } from '../types';

export const flatheadCatfish: Species = {
  slug: 'flathead-catfish',
  name: 'Flathead Catfish',
  scientificName: 'Pylodictis olivaris',
  type: 'freshwater',
  family: 'Ictaluridae',
  description:
    'The flathead catfish is the second-largest catfish species in North America and is prized as the best-eating catfish by most anglers. Unlike channel and blue catfish, flatheads are solitary ambush predators that strongly prefer live prey. They are nocturnal hunters that hide in heavy cover during the day and emerge at night to feed. Flatheads are also the target species for noodling (hand-fishing), a practice with deep cultural roots in the rural South and Midwest. Their firm, white flesh is considered superior to all other catfish species.',
  identification:
    'Flathead catfish are easily identified by their broad, flattened head and jutting lower jaw (underbite), which distinguishes them from all other catfish. Their coloring is mottled yellow-brown to olive-brown, earning them the nickname "yellow cat." The tail is only slightly notched or squared off, NOT deeply forked like channel and blue catfish. The eyes are small and set wide on the flattened head. Young flatheads can be confused with bullheads but are distinguished by their mottled pattern and flatter head shape.',
  habitat:
    'Flathead catfish prefer large rivers and reservoirs with abundant cover. They seek out log jams, root wads, undercut banks, rock ledges, boulder fields, and other heavy structural cover where they can hide and ambush prey. In rivers, they are found in deep pools, bends, and near logjams. In reservoirs, they relate to submerged timber, rocky banks, and creek channels with wood cover. Flatheads are generally solitary and territorial, claiming specific hiding spots that they use repeatedly.',
  behavior:
    'Flatheads are solitary, nocturnal ambush predators. During the day, they wedge themselves into heavy cover like logjams, rock crevices, and undercut banks. At dusk, they emerge to patrol nearby areas for live prey. They are territorial and will aggressively defend their chosen cover from other flatheads. During the spawn (water temps 75-80F), males select cave-like cavities for nest sites. Flatheads are the preferred species for noodling because of their habit of nesting in underwater cavities accessible to hand-fishermen.',
  diet:
    'Flathead catfish are almost exclusively live-prey feeders, which distinguishes them from channel and blue catfish. They eat live fish including sunfish, shad, carp, drum, and even other catfish. Large flatheads can eat prey up to one-third their body length. They rarely scavenge dead or decaying food and generally will not eat prepared or stink baits. Crayfish are an important secondary food source, especially for smaller flatheads. Their preference for live bait is so strong that it significantly impacts fishing strategies.',
  recordWeight: { lbs: 123, oz: 0, location: 'Elk City Reservoir, KS', year: 1998 },
  averageWeight: { min: 3, max: 20, unit: 'lbs' },
  averageLength: { min: 15, max: 35, unit: 'inches' },
  lifespan: { min: 12, max: 28, unit: 'years' },
  preferredTemp: { min: 75, max: 85, unit: 'F' },
  difficultyRating: 3,
  fightRating: 5,
  tasteRating: 5,
  statesFound: [
    'alabama', 'arkansas', 'arizona', 'california', 'colorado', 'florida',
    'georgia', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky',
    'louisiana', 'michigan', 'minnesota', 'mississippi', 'missouri',
    'nebraska', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma',
    'oregon', 'pennsylvania', 'south-carolina', 'south-dakota', 'tennessee',
    'texas', 'virginia', 'west-virginia', 'wisconsin',
  ],
  seasonalPatterns: {
    spring:
      'Spring flatheads emerge from deep winter holes as water temperatures rise past 55F and begin feeding after months of reduced activity. They move to shallower water near wood cover and rocky structure. Live bluegill and sunfish fished near logjams and undercut banks are the top producers. Pre-spawn flatheads in May and early June feed aggressively and this is one of the best windows for trophy fish.',
    summer:
      'Summer is the prime season for flathead catfish. Water temperatures in their preferred 75-85F range trigger spawning activity and peak feeding. Night fishing is most productive as flatheads leave their daytime hiding spots to hunt. Target logjams, rock ledges, and undercut banks with live bait such as bluegill, creek chubs, or large shiners. This is also prime noodling season when flatheads are on nests in underwater cavities.',
    fall:
      'Fall flatheads feed heavily as water temperatures cool, building energy reserves for winter. They remain near cover but may roam more widely in search of prey. Live baitfish remain the top choice. As water drops below 65F, flatheads begin staging near their deep winter holes. Early fall (September-October) can produce trophy-sized fish in peak condition with maximum weight.',
    winter:
      'Winter flatheads become largely dormant, holding in the deepest holes and timber-filled areas available. They eat very infrequently and are the most difficult of the three major catfish species to catch in cold water. Slow-fished live bait near deep cover is the only reliable method. In southern states with milder winters, flatheads can occasionally be caught during warm spells when water temps temporarily rise.',
  },
  bestTechniques: ['live-bait', 'noodling', 'bottom-fishing', 'night-fishing'],
  bestBaits: [
    'Live bluegill (3-6 inches)',
    'Live creek chubs',
    'Live green sunfish',
    'Live large shiners',
    'Live crayfish (large)',
    'Live bullheads (small)',
    'Live goldfish (where legal)',
    'Live shad',
  ],
  relatedSpecies: ['channel-catfish', 'blue-catfish', 'largemouth-bass'],
  funFacts: [
    'Flathead catfish are the target species for noodling (hand-fishing), where anglers reach into underwater cavities to grab spawning catfish by the mouth. The practice is legal in about 15 states.',
    'A flathead catfish\'s stomach contents have included turtles, ducks, muskrats, and even small dogs, though fish make up the vast majority of their diet.',
    'Flatheads are so territorial that introducing them into new waterways can devastate native fish populations. They are considered invasive in several eastern river systems.',
    'The world record flathead catfish of 123 lbs was caught by Ken Paulie from Elk City Reservoir, Kansas, in 1998 using a rod and reel.',
    'Male flathead catfish do not eat for the entire 5-7 day egg-guarding period and will violently attack anything that approaches the nest, including noodlers\' hands.',
  ],
  faq: [
    {
      question: 'Why do flathead catfish only eat live bait?',
      answer:
        'Flathead catfish are ambush predators that rely on detecting the vibrations and movements of live prey. Unlike channel and blue catfish, which have evolved to be scavengers and opportunistic feeders, flatheads have developed a strong preference for live, struggling baitfish. While they occasionally eat freshly killed bait, prepared baits, stink baits, and cut bait are rarely effective for flatheads. This live-bait preference is one reason flatheads are harder to catch than other catfish species.',
    },
    {
      question: 'What is noodling and is it legal?',
      answer:
        'Noodling (also called hand-fishing, hogging, or grabbling) is the practice of catching catfish by hand by reaching into underwater cavities where catfish are nesting. The angler feels for the fish, gets it to bite their hand or arm, and then wrestles it out of the hole. Noodling is legal in approximately 15 states including Oklahoma, Mississippi, Louisiana, Alabama, Georgia, Tennessee, and several others. It is controversial due to safety concerns (drowning risk, snapping turtles, snakes) and potential impacts on spawning populations.',
    },
    {
      question: 'Why are flathead catfish considered the best-eating catfish?',
      answer:
        'Flathead catfish are widely considered the best-eating catfish because their diet of live fish (rather than scavenged food) produces exceptionally clean, firm, white meat with none of the muddy or fishy taste sometimes associated with other catfish species. The flesh has a slightly sweet flavor and firm, flaky texture that holds up well to any cooking method. Many catfish anglers who release channel and blue cats will keep flatheads specifically for the table.',
    },
    {
      question: 'What is the best setup for flathead catfish?',
      answer:
        'A heavy-action rod (7-8 feet) paired with a baitcasting reel spooled with 30-50 lb monofilament or 65-80 lb braided line is standard for flathead fishing. Use a slip-sinker rig with a 2-4 oz weight, barrel swivel, and 24-36 inch leader to a 5/0-8/0 circle hook. Hook a live bluegill or sunfish through the back (behind the dorsal fin) or lips and set the bait near logjams, rock ledges, or undercut banks. Fish at night for best results and use a rod holder with a clicker reel to detect bites.',
    },
    {
      question: 'How big do flathead catfish get?',
      answer:
        'The world record flathead catfish is 123 lbs from Elk City Reservoir, Kansas. Fish over 50 pounds are caught regularly in quality rivers like the Mississippi, Missouri, Ohio, and their major tributaries. The average flathead is 3-20 pounds, but fish over 30 pounds are realistic targets in good habitat. Flatheads grow slowly but can live 25+ years, reaching trophy size only in waters with abundant forage and minimal harvest pressure.',
    },
  ],
  imagePath: '/images/species/flathead-catfish.jpg',
  imageAlt: 'Flathead catfish showing its distinctive flattened head and mottled yellow-brown coloring',
  imageCredit: 'Photo via Unsplash',
};
