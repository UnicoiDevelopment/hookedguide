import { Species } from '../types';

export const blueCatfish: Species = {
  slug: 'blue-catfish',
  name: 'Blue Catfish',
  scientificName: 'Ictalurus furcatus',
  type: 'freshwater',
  family: 'Ictaluridae',
  description:
    'The blue catfish is the largest species of catfish in North America, capable of exceeding 100 pounds. Originally native to the Mississippi, Missouri, and Ohio River drainages, blue cats have been widely introduced across the Southeast, most notably in the Chesapeake Bay watershed where they have become controversially invasive. They are powerful, hard-fighting fish that are increasingly popular among trophy anglers. Blue catfish are efficient predators that patrol river channels and reservoir ledges, feeding on schools of baitfish.',
  identification:
    'Blue catfish are distinguished by their slate-blue to grayish-blue back, silver-white sides, and white belly. They lack the dark spots found on channel catfish. The most reliable identification feature is the anal fin: blue catfish have a straight-edged anal fin with 30-36 rays, compared to the channel catfish\'s rounded anal fin with 24-29 rays. Blue cats have a pronounced overbite where the upper jaw extends beyond the lower jaw. The tail is deeply forked. They are heavier-bodied and more robust than channel catfish, with a more humped back profile in large specimens.',
  habitat:
    'Blue catfish prefer large rivers with strong current and deep channels, as well as large reservoirs. In rivers, they are found in the main channel, near wing dikes, in deep bends, and below dams. In reservoirs, they relate to creek and river channels, points, humps, and dam areas. Blue cats are more current-oriented than channel catfish and are often found in faster water. They have been introduced into many tidal river systems along the East Coast, including the James, Potomac, and Rappahannock Rivers.',
  behavior:
    'Blue catfish are active predators that roam large areas in search of food, unlike the ambush-oriented flathead catfish. They are schooling fish, with groups of similar-sized fish often found together. Blues feed at all hours but are particularly active during periods of rising water, current changes, and low-light conditions. They migrate seasonally, moving upstream in spring and downstream in fall in river systems. Large blue cats are apex predators in their environment and have very few natural enemies.',
  diet:
    'Blue catfish are primarily piscivorous (fish eaters), especially as adults. Their diet consists mainly of shad (threadfin and gizzard), herring, menhaden, and other baitfish. They also eat crayfish, freshwater mussels, blue crabs (in tidal waters), and other invertebrates. Large blue cats are capable of eating fish several pounds in size. In tidal rivers, they have become major predators of blue crabs, which has generated significant concern among commercial crab fishermen.',
  recordWeight: { lbs: 143, oz: 0, location: 'Kerr Lake, VA', year: 2011 },
  averageWeight: { min: 3, max: 20, unit: 'lbs' },
  averageLength: { min: 18, max: 40, unit: 'inches' },
  lifespan: { min: 10, max: 25, unit: 'years' },
  preferredTemp: { min: 70, max: 85, unit: 'F' },
  difficultyRating: 2,
  fightRating: 4,
  tasteRating: 4,
  statesFound: [
    'alabama', 'arkansas', 'california', 'florida', 'georgia', 'illinois',
    'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maryland',
    'mississippi', 'missouri', 'nebraska', 'north-carolina', 'ohio',
    'oklahoma', 'pennsylvania', 'south-carolina', 'south-dakota', 'tennessee',
    'texas', 'virginia', 'west-virginia',
  ],
  seasonalPatterns: {
    spring:
      'Spring blue catfish become increasingly active as water warms past 55F. They move from deep winter holes toward shallower flats and current areas to feed. In rivers, look for blues below dams and near wing dikes where current concentrates baitfish. Fresh cut shad and skipjack herring are the top baits. Pre-spawn blues feed aggressively, and this can be one of the best seasons for trophy fish.',
    summer:
      'Summer is peak season for blue catfish. They are most active in their preferred temperature range of 70-85F and feed heavily. In rivers, target deep holes, outside bends, and areas with current breaks. In reservoirs, blues roam open water following schools of shad, often suspending at thermocline depth. Cut skipjack herring and large live shad are top baits. Night fishing in tailrace areas below dams can produce incredible catches.',
    fall:
      'Fall blue catfish gorge on baitfish migrating through river systems. They become more concentrated in main river channels and below dams. This is an excellent time for trophy fish as big blues feed heavily to store energy for winter. Schools of blue cats can be located on electronics following large balls of shad. Cut bait and whole shad drifted through river channels are most effective.',
    winter:
      'Contrary to popular belief, blue catfish remain active in winter and can be caught in good numbers. They concentrate in deep river holes, reservoir channels, and near warm-water discharges. Winter blue cats group tightly and once located can produce fast action. Fresh cut shad is the best bait. In tidal rivers like the James and Potomac, winter is actually considered prime trophy season as large blues concentrate in predictable areas.',
  },
  bestTechniques: ['bottom-fishing', 'live-bait', 'drift-fishing', 'night-fishing'],
  bestBaits: [
    'Fresh cut skipjack herring',
    'Cut gizzard shad',
    'Whole live shad (large)',
    'Fresh cut mullet',
    'Live bluegill (where legal)',
    'White perch (cut, in tidal waters)',
    'Chicken breast on treble hook',
    'Large nightcrawler bunches',
  ],
  relatedSpecies: ['channel-catfish', 'flathead-catfish', 'largemouth-bass'],
  funFacts: [
    'The world record blue catfish of 143 lbs was caught by Richard Nicholas Anderson from Kerr Lake (Buggs Island), Virginia, in 2011, surpassing the previous record by over 20 pounds.',
    'Blue catfish introduced into the Chesapeake Bay watershed have become invasive and now number in the tens of millions, eating native species and competing with commercial fisheries.',
    'A large blue catfish can consume up to 5% of its body weight per day, meaning a 50-pound blue cat eats roughly 2.5 pounds of fish daily.',
    'Blue catfish can live for over 25 years and do not stop growing throughout their lifetime, which is why truly massive individuals exist in systems with abundant forage.',
    'In some tidal rivers, commercial fishermen now harvest blue catfish for pet food and fertilizer to help control invasive populations, with some processors handling over 1 million pounds annually.',
  ],
  faq: [
    {
      question: 'How big do blue catfish get?',
      answer:
        'Blue catfish are the largest catfish species in North America. The world record is 143 lbs from Kerr Lake, Virginia. Fish over 50 pounds are caught regularly in prime waters like the James River (VA), Santee-Cooper (SC), Mississippi River, and Wheeler Lake (AL). The average blue catfish is 3-20 pounds, but 30-50 lb fish are realistic targets in quality fisheries. Some biologists believe blue cats could potentially reach 200 pounds in ideal conditions.',
    },
    {
      question: 'What is the best bait for big blue catfish?',
      answer:
        'Fresh cut skipjack herring is widely considered the number one bait for trophy blue catfish. The oily, bloody flesh puts out tremendous scent that draws big blues from long distances. Fresh-cut gizzard shad is a close second and more widely available. For the biggest fish, whole live gizzard shad (8-12 inches) can be deadly. The key word is "fresh" - blue catfish strongly prefer fresh bait over old or frozen bait. Keep bait on ice and cut it fresh on the water.',
    },
    {
      question: 'Are blue catfish invasive in the Chesapeake Bay?',
      answer:
        'Yes, blue catfish are considered invasive in the Chesapeake Bay watershed. They were introduced into Virginia tidal rivers in the 1970s and 1980s and have exploded in population. They now inhabit most major Bay tributaries and eat native species including blue crabs, shad, herring, and other fish. Wildlife agencies encourage anglers to harvest blue catfish from these waters and have removed bag limits in many tidal rivers to encourage removal.',
    },
    {
      question: 'Where are the best blue catfish fisheries?',
      answer:
        'The top trophy blue catfish destinations include the James River and Kerr Lake in Virginia, Santee-Cooper Reservoir in South Carolina, Wheeler and Wilson Lakes in Alabama, the Mississippi River (particularly near Memphis and Vicksburg), the Ohio River, and Lake Texoma in Texas/Oklahoma. The Potomac and Rappahannock Rivers in Virginia/Maryland have also become excellent fisheries due to the expanding invasive population.',
    },
    {
      question: 'How do you fight a large blue catfish?',
      answer:
        'Fighting a large blue catfish requires heavy tackle. Use a 7-8 foot heavy-power rod with a baitcasting reel spooled with 50-80 lb braided line and a 40-60 lb mono or fluoro leader. When a big blue hits, let the rod load before setting the hook. They fight with powerful head shakes and bulldogging runs toward the bottom. Keep steady pressure and do not try to horse them in. Large blues can fight for 10-20 minutes. Use a large landing net or lip grips for boating.',
    },
  ],
  imagePath: '/images/species/blue-catfish-id.jpg',
  imageAlt: 'Large blue catfish showing its characteristic slate-blue coloring and straight anal fin',
  imageCredit: 'Photo via Unsplash',
};
