import { Species } from '../types';

export const whiteBass: Species = {
  slug: 'white-bass',
  name: 'White Bass',
  scientificName: 'Morone chrysops',
  type: 'freshwater',
  family: 'Moronidae',
  description:
    'The white bass is an aggressive, schooling freshwater fish found throughout the central United States. Best known for their explosive spring spawning runs up rivers and tributaries, white bass provide fast-paced action when schools are located. They are scrappy fighters on light tackle and are closely related to striped bass. White bass can hybridize with striped bass to produce the popular hybrid "wiper" or "whiterock bass."',
  identification:
    'White bass have a deep, laterally compressed body with a silvery-white color and 5 to 7 dark horizontal stripes along the sides. Unlike striped bass, their stripes are often faint, broken, or incomplete, particularly below the lateral line. They have a moderately sized mouth with a projecting lower jaw. The two dorsal fins are separate. White bass are smaller and deeper-bodied than striped bass, rarely exceeding 4 pounds.',
  habitat:
    'White bass thrive in large reservoirs, natural lakes, and river systems throughout the Mississippi River drainage and Great Lakes region. They prefer open water in large lakes and reservoirs, where they roam in schools following baitfish. During spring spawning runs, they crowd into tributary rivers and creeks. They are most abundant in productive, moderately turbid waters with healthy shad populations.',
  behavior:
    'White bass are highly social, traveling in large schools that can number in the hundreds. When a school is feeding, action can be nonstop with fish on nearly every cast. They chase shad to the surface in feeding frenzies similar to striped bass boils. White bass are aggressive strikers that will hit a variety of lures retrieved quickly. Their spring spawning runs up rivers and creeks create the most concentrated and predictable fishing opportunity of the year.',
  diet:
    'White bass are primarily piscivorous, feeding heavily on threadfin and gizzard shad, which are their staple forage in most reservoir environments. They also eat minnows, young-of-year fish of various species, aquatic insects, and zooplankton. White bass are aggressive, competitive feeders that feed most intensely during early morning, late evening, and on overcast days.',
  recordWeight: { lbs: 6, oz: 13, location: 'Lake Orange, Virginia', year: 1989 },
  averageWeight: { min: 0.5, max: 2, unit: 'lbs' },
  averageLength: { min: 10, max: 15, unit: 'inches' },
  lifespan: { min: 4, max: 9, unit: 'years' },
  preferredTemp: { min: 60, max: 75, unit: 'F' },
  difficultyRating: 2,
  fightRating: 3,
  tasteRating: 3,
  statesFound: [
    'alabama',
    'arkansas',
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
    'new-york',
    'north-carolina',
    'north-dakota',
    'ohio',
    'oklahoma',
    'pennsylvania',
    'south-dakota',
    'tennessee',
    'texas',
    'virginia',
    'west-virginia',
    'wisconsin',
  ],
  seasonalPatterns: {
    spring:
      'Spring spawning runs are the highlight of white bass fishing. When water temperatures reach the mid-50s to low 60s, massive schools of white bass migrate up rivers and creeks to spawn over gravel and rocky substrates. The run concentrates thousands of fish into accessible water, creating the best fishing of the year. Small jigs, inline spinners, and live minnows produce fast action.',
    summer:
      'After the spawn, white bass return to main lake environments and school over open water, following baitfish. Surface feeding frenzies occur during early morning and evening when schools push shad to the surface. Locating these schools with electronics or by watching for bird activity is the key. Small crankbaits, jigs, and spoons are effective when cast into surfacing schools.',
    fall:
      'White bass continue schooling behavior through fall, often concentrating near creek mouths and along main lake points as shad schools migrate. Cooler water temperatures increase feeding activity and surface feeding events become more frequent. Fall fishing can rival spring runs for action when schools are located.',
    winter:
      'White bass move to deeper water in winter and become less active, though they still feed on the warmest days. Schools hold near channel swings, deep points, and over submerged humps in 20 to 40 feet of water. Small jigging spoons and blade baits worked vertically produce winter fish. White bass are also a viable ice fishing target in northern states.',
  },
  bestTechniques: ['jigging', 'live-bait'],
  bestBaits: [
    'small white or chartreuse jigs',
    'Rooster Tail spinners',
    'live minnows',
    'small crankbaits',
    'jigging spoons',
    'curly-tail grubs',
    'blade baits',
    'small swimbaits',
  ],
  relatedSpecies: ['striped-bass', 'hybrid-striped-bass', 'yellow-perch'],
  funFacts: [
    'White bass spring spawning runs are so predictable and concentrated that they draw huge crowds of anglers to rivers across the Midwest and South — some fisheries attract thousands of anglers over a few weeks.',
    'White bass can hybridize with striped bass to produce "wipers" or "whiterock bass," which combine the white bass\'s aggressiveness with the striper\'s size and fighting ability.',
    'A single female white bass can produce up to 500,000 eggs during the spring spawn, though survival rates are extremely low.',
    'White bass have been recorded traveling up to 100 miles upstream during spawning migrations in large river systems.',
  ],
  faq: [
    {
      question: 'When is the white bass run?',
      answer:
        'The white bass spawning run typically occurs from late March through May, depending on latitude and water temperature. In the southern part of their range (Texas, Oklahoma, Arkansas), runs may begin in March when water temperatures hit the mid-50s. In the upper Midwest (Minnesota, Wisconsin), runs occur later in April and May. The run usually lasts 2 to 4 weeks in any given water body. Local fishing reports and bait shops are the best sources for current run timing.',
    },
    {
      question: 'What is the best lure for white bass?',
      answer:
        'Small white, chartreuse, or silver jigs in 1/16 to 1/4 ounce are the most versatile and effective white bass lures. Inline spinners like Rooster Tails and Mepps in silver or white patterns also produce consistently. During surface feeding events, small topwater lures and spoons cast into the boiling fish work well. The key is matching the size of the baitfish — white bass shad forage is usually 1 to 3 inches, so small lures outperform large ones.',
    },
    {
      question: 'Are white bass good to eat?',
      answer:
        'White bass are decent table fare when prepared properly. The key is removing the red lateral line meat (the "blood line" or "mud vein"), which has a strong, fishy taste. With the red meat trimmed away, white bass fillets are mild and white. They are best fried, and their small size makes them ideal for fish fry preparations. Eating quality is best with fish caught from clean, cool water during spring.',
    },
    {
      question: 'How do you tell white bass from striped bass?',
      answer:
        'White bass are significantly smaller (rarely exceeding 4 pounds vs. 50+ for stripers), deeper-bodied, and more laterally compressed. Their horizontal stripes are usually faint, broken, and incomplete — particularly below the lateral line — while striped bass have bold, unbroken stripes that extend the full length of the body. White bass also have a single tooth patch on the tongue, while striped bass have two parallel tooth patches. If in doubt, the body shape is the easiest distinction: white bass are chunky while striped bass are streamlined.',
    },
  ],
  imagePath: '/images/species/white-bass-id.jpg',
  imageAlt: 'A silvery white bass with faint horizontal stripes held by an angler on a reservoir',
  imageCredit: 'Photo via Unsplash',
};
