import { Species } from '../types';

export const sauger: Species = {
  slug: 'sauger',
  name: 'Sauger',
  scientificName: 'Sander canadensis',
  type: 'freshwater',
  family: 'Percidae',
  description:
    'The sauger is a close cousin of the walleye that thrives in deeper, murkier water conditions. Found primarily in large river systems and reservoirs throughout the central United States, sauger are excellent table fare that rivals walleye in taste. Though they do not grow as large as walleye, sauger are plentiful in many waters and readily caught on jigs and live bait. They can hybridize with walleye to produce "saugeye," which are stocked in some states.',
  identification:
    'Sauger closely resemble walleye but can be distinguished by several key features. Sauger have distinct dark blotches or saddle-shaped markings on their back and dorsal fin, while walleye lack these. Sauger are generally smaller and more cylindrical than walleye. Their cheeks are fully scaled (walleye cheeks are mostly smooth). The first dorsal fin has rows of dark spots rather than the walleye\'s single dark blotch at the rear base. Sauger also lack the white tip on the lower tail lobe that walleye display.',
  habitat:
    'Sauger prefer large, turbid river systems and deep reservoirs — conditions where walleye are less dominant. They are particularly abundant in the Mississippi, Missouri, and Ohio River drainages and their associated reservoirs. Sauger tolerate higher turbidity and siltation than walleye and are often found in deeper water near channel breaks, wing dams, river bends, and dam tailraces. They concentrate below dams during spawning migrations.',
  behavior:
    'Sauger are bottom-oriented predators that feed primarily during low-light conditions, much like their walleye cousins. They have excellent low-light vision thanks to a reflective layer (tapetum lucidum) in their eyes that amplifies available light. Sauger school more tightly than walleye and tend to hold in deeper water closer to the bottom. They migrate significant distances in river systems, moving upstream in fall and spring to spawn below dams and in tributary mouths.',
  diet:
    'Sauger feed primarily on small fish including shad, minnows, shiners, young perch, and darters. They also eat crayfish, leeches, mayfly larvae, and other aquatic invertebrates. Like walleye, sauger are most active feeders during dawn, dusk, and nighttime hours. They use their superior low-light vision to hunt prey in the turbid, deep water they prefer.',
  recordWeight: { lbs: 8, oz: 12, location: 'Lake Sakakawea, North Dakota', year: 1971 },
  averageWeight: { min: 0.5, max: 2, unit: 'lbs' },
  averageLength: { min: 10, max: 16, unit: 'inches' },
  lifespan: { min: 5, max: 13, unit: 'years' },
  preferredTemp: { min: 55, max: 70, unit: 'F' },
  difficultyRating: 3,
  fightRating: 3,
  tasteRating: 5,
  statesFound: [
    'alabama',
    'arkansas',
    'illinois',
    'indiana',
    'iowa',
    'kansas',
    'kentucky',
    'louisiana',
    'minnesota',
    'mississippi',
    'missouri',
    'montana',
    'nebraska',
    'north-dakota',
    'ohio',
    'oklahoma',
    'pennsylvania',
    'south-dakota',
    'tennessee',
    'virginia',
    'west-virginia',
    'wisconsin',
    'wyoming',
  ],
  seasonalPatterns: {
    spring:
      'Spring spawning runs concentrate sauger below dams and at the mouths of major tributaries, creating the most productive fishing of the year. Sauger spawn when water temperatures reach the mid-40s to low 50s, typically in April. Vertical jigging with minnow-tipped jigs in dam tailraces is the go-to technique during the spring run.',
    summer:
      'Sauger retreat to deeper water in summer, holding along river channel edges, over deep humps, and near structure in 20 to 40 feet of water. They feed primarily during low-light periods, making dawn and dusk the most productive fishing times. Trolling with bottom bouncers and crawler harnesses or vertically jigging over structure are effective summer tactics.',
    fall:
      'Fall cooling triggers upstream migration in river systems as sauger move toward wintering areas and eventual spring spawning sites. Fish concentrate along channel breaks, wing dams, and below locks and dams. Fall fishing can be excellent as migrating fish stage in predictable locations and feed actively during the transition.',
    winter:
      'Sauger remain active through winter and are a popular ice fishing target on reservoirs in the northern part of their range. In open-water river systems, sauger concentrate in deep holes below dams and along channel edges. Slow presentations with jigging spoons, blade baits, or jigs tipped with minnows near the bottom produce winter sauger consistently.',
  },
  bestTechniques: ['jigging', 'live-bait'],
  bestBaits: [
    'jigs tipped with minnows',
    'live fathead minnows',
    'nightcrawler harnesses',
    'jigging spoons',
    'blade baits',
    'small crankbaits',
    'live leeches',
    'bottom bouncer rigs with crawlers',
  ],
  relatedSpecies: ['walleye', 'yellow-perch', 'saugeye'],
  funFacts: [
    'Sauger can hybridize with walleye to produce "saugeye," which are intentionally stocked in some states because they grow faster and tolerate poorer water conditions than either parent species.',
    'Sauger have even better low-light vision than walleye, thanks to a more developed tapetum lucidum (the reflective eye layer), which is why they thrive in murkier water.',
    'In some river systems, sauger migrate over 100 miles during their spring spawning runs, congregating in massive numbers below impassable dams.',
    'Many anglers cannot distinguish sauger from walleye — the simplest method is to check for dark spots on the first dorsal fin (sauger) versus a single dark blotch at the base of the last few spines (walleye).',
    'Sauger populations have declined in some historic habitats due to dam construction that blocks their spawning migrations, making them a conservation concern in several states.',
  ],
  faq: [
    {
      question: 'How do you tell the difference between a sauger and a walleye?',
      answer:
        'The easiest way to distinguish sauger from walleye is by examining the first dorsal fin: sauger have distinct rows of dark spots across the membrane, while walleye have a large dark blotch only at the rear base of the dorsal. Sauger lack the white tip on the lower tail lobe that is characteristic of walleye. Sauger also have dark saddle-shaped blotches on their backs, fully scaled cheeks, and tend to be smaller and more cylindrical than walleye. When in doubt, check the dorsal fin spots — it is the most reliable field identification.',
    },
    {
      question: 'Are sauger good to eat?',
      answer:
        'Sauger are outstanding table fare — many anglers consider them equal to or even slightly better than walleye in taste. The flesh is white, flaky, and mild with a delicate sweetness. Sauger fillets are typically smaller than walleye fillets but cook and taste nearly identical. They are excellent fried, baked, or broiled. In many Midwestern and Southern states, sauger are among the most prized fish for the table.',
    },
    {
      question: 'Where is the best sauger fishing?',
      answer:
        'The best sauger fishing is found in large river systems and their associated reservoirs in the central United States. The Missouri River system, particularly Lake Sakakawea and Fort Peck Reservoir in Montana and North Dakota, produces excellent sauger fishing. The Mississippi River below lock and dam structures holds strong populations. The Ohio and Tennessee River systems also offer good sauger fisheries. Dam tailraces during spring and fall migrations concentrate the most fish.',
    },
    {
      question: 'What is a saugeye?',
      answer:
        'A saugeye is a hybrid cross between a male sauger and a female walleye. Saugeye are intentionally produced in hatcheries and stocked in many states because they combine desirable traits from both parents — they grow faster than sauger, tolerate poorer water quality than walleye, and are excellent to eat. Saugeye look similar to both parents but often display blended characteristics. They are popular stocking fish in Ohio, Indiana, and several other states. Most saugeye are functionally sterile and do not reproduce in the wild.',
    },
    {
      question: 'What is the best technique for catching sauger?',
      answer:
        'Vertical jigging with a jig and minnow combination is the most consistent sauger technique. Use a 1/8 to 3/8 ounce jig head tipped with a live fathead or shiner minnow, bounced slowly along the bottom near channel edges, wing dams, or dam tailraces. Keep your jig in contact with or very close to the bottom — sauger are strict bottom feeders and rarely chase baits more than a few inches off the substrate. A sensitive rod with a braided main line helps detect the often subtle sauger bite.',
    },
  ],
  imagePath: '/images/species/sauger.jpg',
  imageAlt: 'A sauger with dark saddle markings and spotted dorsal fin held by an angler on a river',
  imageCredit: 'Photo via Unsplash',
};
