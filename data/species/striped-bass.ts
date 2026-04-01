import { Species } from '../types';

export const stripedBass: Species = {
  slug: 'striped-bass',
  name: 'Striped Bass',
  scientificName: 'Morone saxatilis',
  type: 'both',
  family: 'Moronidae',
  description:
    'The striped bass is one of North America\'s most iconic game fish, prized for both its powerful fighting ability and excellent table quality. Naturally anadromous — living in saltwater and migrating to freshwater rivers to spawn — striped bass have also been widely stocked in landlocked freshwater reservoirs across the South and Midwest, where they thrive as top predators. Whether caught in coastal surf or an inland lake, stripers provide an unforgettable angling experience.',
  identification:
    'Striped bass have a streamlined, silvery body with 7 to 8 dark horizontal stripes running from the gill plate to the tail. The back is olive to dark blue-green, fading to bright silver on the sides and white on the belly. They have a large mouth with a projecting lower jaw. Two separate dorsal fins and a broad, forked tail contribute to their powerful swimming ability. Landlocked stripers tend to be stockier than their coastal counterparts.',
  habitat:
    'In their native anadromous range, striped bass are found along the Atlantic coast from Maine to Florida and in the Gulf of Mexico. They migrate up major river systems to spawn in spring. Landlocked populations thrive in large reservoirs and lakes across the central and southern United States. In freshwater, stripers favor open water near dam tailraces, deep main-lake points, and areas with strong current where they chase schools of shad and herring.',
  behavior:
    'Striped bass are schooling predators that follow massive schools of baitfish such as threadfin and gizzard shad. In reservoirs, they often suspend in open water at specific temperature and dissolved oxygen levels, making electronics essential for locating them. Surface-feeding frenzies — called "boils" — occur when stripers push baitfish to the surface, creating explosive topwater action. They are powerful fighters known for long, sustained runs.',
  diet:
    'Striped bass feed primarily on schooling baitfish including shad, herring, menhaden, anchovies, and alewives. In freshwater reservoirs, threadfin and gizzard shad are the primary forage. They also eat crayfish, crabs, squid (in saltwater), eels, and worms. Stripers are visual predators that feed most actively during low-light conditions and around current breaks where prey concentrates.',
  recordWeight: { lbs: 81, oz: 14, location: 'Connecticut River, Connecticut', year: 2011 },
  averageWeight: { min: 5, max: 20, unit: 'lbs' },
  averageLength: { min: 18, max: 36, unit: 'inches' },
  lifespan: { min: 15, max: 30, unit: 'years' },
  preferredTemp: { min: 55, max: 70, unit: 'F' },
  difficultyRating: 3,
  fightRating: 5,
  tasteRating: 4,
  statesFound: [
    'alabama',
    'arkansas',
    'california',
    'connecticut',
    'delaware',
    'florida',
    'georgia',
    'kentucky',
    'louisiana',
    'maine',
    'maryland',
    'massachusetts',
    'mississippi',
    'missouri',
    'new-hampshire',
    'new-jersey',
    'new-york',
    'north-carolina',
    'ohio',
    'oklahoma',
    'pennsylvania',
    'rhode-island',
    'south-carolina',
    'tennessee',
    'texas',
    'virginia',
  ],
  seasonalPatterns: {
    spring:
      'Spring is spawning season for striped bass. Anadromous fish migrate up coastal rivers in massive runs that create legendary fishing opportunities, particularly in the Chesapeake Bay tributaries and along the New England coast. In freshwater reservoirs, stripers move toward dam tailraces and tributary mouths where they can be caught on live bait and swimbaits.',
    summer:
      'In reservoirs, summer stripers seek the thermocline — the narrow band of water where temperature and oxygen levels are optimal. Locating them requires electronics to find fish suspended at specific depths, often 20 to 40 feet. Dawn and dusk surface boils provide the most exciting fishing. In saltwater, stripers spread along the coast and can be caught from beaches, jetties, and boats.',
    fall:
      'Fall triggers aggressive feeding as stripers chase baitfish schools. In reservoirs, surface boils become frequent as water cools and shad move shallow. On the coast, the southward fall migration produces spectacular surf fishing along the Atlantic seaboard. Topwater lures, large swimbaits, and live bait all produce well during the fall feed-up.',
    winter:
      'Stripers slow down in winter but remain catchable, particularly in southern reservoirs and dam tailraces where water temperatures stay relatively mild. In coastal areas, fish move to deeper, warmer water offshore. Slow presentations with live bait or deep-running lures fished near bottom structure produce winter fish. Some tailrace fisheries offer excellent year-round striper action.',
  },
  bestTechniques: ['live-bait', 'trolling', 'topwater'],
  bestBaits: [
    'live gizzard shad',
    'live threadfin shad',
    'large swimbaits',
    'topwater poppers',
    'bucktail jigs',
    'umbrella rigs',
    'live eels (saltwater)',
    'chicken liver (freshwater)',
  ],
  relatedSpecies: ['white-bass', 'hybrid-striped-bass', 'largemouth-bass'],
  funFacts: [
    'The world record striped bass of 81 lbs 14 oz caught in 2011 was taken from the Connecticut River — a freshwater tidal river, blurring the line between fresh and saltwater records.',
    'Striped bass can live over 30 years, and females do not reach sexual maturity until age 4 to 8, making them vulnerable to overfishing.',
    'Landlocked striped bass in freshwater reservoirs can reach weights over 60 pounds, rivaling their anadromous coastal relatives.',
    'During fall migration, huge schools of striped bass move south along the Atlantic coast, creating a legendary surf fishing season known as the "fall run" that draws thousands of anglers to beaches from Cape Cod to the Outer Banks.',
    'Striped bass were so important to early American colonists that one of the first conservation laws in the New World, passed in Massachusetts in 1639, protected striped bass spawning runs.',
  ],
  faq: [
    {
      question: 'What is the difference between landlocked and anadromous striped bass?',
      answer:
        'Anadromous striped bass live in the ocean and migrate to freshwater rivers to spawn each spring, while landlocked stripers spend their entire lives in freshwater reservoirs and lakes. Genetically they are the same species. Landlocked fish tend to be slightly stockier and may not grow quite as large, though fish over 50 pounds have been caught in reservoirs. The primary difference is habitat and available forage, with landlocked fish feeding primarily on shad rather than ocean baitfish.',
    },
    {
      question: 'How do you find striped bass in a reservoir?',
      answer:
        'Finding striped bass in reservoirs requires quality electronics. Stripers often suspend in open water along the thermocline — typically at depths of 20 to 40 feet in summer. Use your depth finder to locate baitfish schools and look for striper arches nearby. Focus on main-lake points, humps, and creek channel intersections. During low-light periods, watch for surface boils where stripers push baitfish to the surface. Dam tailraces and tributary mouths are also reliable holding areas.',
    },
    {
      question: 'What is the best time to fish for striped bass?',
      answer:
        'Dawn and dusk are consistently the best times to fish for striped bass in both fresh and saltwater environments. These low-light periods coincide with peak feeding activity and surface-feeding events. Spring spawning runs offer the most concentrated fishing opportunities. In saltwater, incoming tides during low-light periods create ideal conditions. Fall migration along the coast and fall feeding frenzies in reservoirs also produce exceptional fishing.',
    },
    {
      question: 'Can you eat striped bass?',
      answer:
        'Striped bass are excellent table fare with firm, white, mildly flavored flesh. They can be grilled, baked, broiled, pan-seared, or fried. Smaller fish in the 18 to 28 inch range generally taste best. Larger fish can sometimes have a stronger flavor and may accumulate contaminants in certain waters, so checking local consumption advisories is recommended. Striper is a popular menu item at seafood restaurants and fish markets along the East Coast.',
    },
    {
      question: 'What tackle do I need for striped bass?',
      answer:
        'For freshwater reservoir stripers, a medium-heavy baitcasting setup with 20 to 30 pound braided line handles most situations. For live bait fishing, circle hooks in 5/0 to 8/0 are preferred. For surf fishing, a 10 to 11 foot surf rod with a large spinning reel spooled with 30 to 50 pound braid is standard. Use a monofilament or fluorocarbon leader of 30 to 50 pounds. Umbrella rigs, large swimbaits, and topwater plugs all require stout gear to handle these powerful fish.',
    },
  ],
  imagePath: '/images/species/striped-bass-id.jpg',
  imageAlt: 'A silvery striped bass with prominent horizontal stripes held by an angler near the water',
  imageCredit: 'Photo via Unsplash',
};
