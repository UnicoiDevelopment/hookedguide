import { Species } from '../types';

export const yellowPerch: Species = {
  slug: 'yellow-perch',
  name: 'Yellow Perch',
  scientificName: 'Perca flavescens',
  type: 'freshwater',
  family: 'Percidae',
  description:
    'The yellow perch is one of the most popular panfish in North America, prized for its delicious, mild-flavored flesh and cooperative feeding habits. Found throughout the northern and central United States, yellow perch are schooling fish that provide fast-paced action when a school is located. They are a staple of Great Lakes fisheries and one of the top targets for ice anglers.',
  identification:
    'Yellow perch have an elongated, laterally compressed body with a distinctive golden-yellow to greenish-yellow coloring. Six to eight dark, vertical bars extend from the back down the sides. The lower fins are often tinged with orange or bright yellow, especially during spawning. Two separate dorsal fins — the front one spiny, the rear soft-rayed — are characteristic of the perch family. They have a slightly downturned mouth with small teeth.',
  habitat:
    'Yellow perch inhabit lakes, ponds, reservoirs, and slow-moving rivers throughout the northern and central United States. They prefer clear water with moderate weed growth and are commonly found over sandy or gravelly bottoms near weed edges, drop-offs, and submerged structure. In the Great Lakes, they are an important nearshore species found over rocky reefs and sandy shoals.',
  behavior:
    'Yellow perch are schooling fish that travel in groups of similar-sized individuals. When one perch is caught, there are almost always more nearby. They feed actively throughout the day with peaks during morning and late afternoon. Perch are bottom-oriented feeders that cruise along structure edges picking off invertebrates and small fish. They move shallower in spring and fall and deeper during summer heat.',
  diet:
    'Yellow perch feed on a variety of aquatic invertebrates including insect larvae, crayfish, snails, and freshwater shrimp. Larger perch also eat small fish including minnows, darters, and even smaller perch. During winter under the ice, perch primarily feed on insect larvae and zooplankton found near the bottom.',
  recordWeight: { lbs: 4, oz: 3, location: 'Bordentown, New Jersey', year: 1865 },
  averageWeight: { min: 0.25, max: 1, unit: 'lbs' },
  averageLength: { min: 6, max: 12, unit: 'inches' },
  lifespan: { min: 5, max: 11, unit: 'years' },
  preferredTemp: { min: 60, max: 70, unit: 'F' },
  difficultyRating: 1,
  fightRating: 1,
  tasteRating: 5,
  statesFound: [
    'connecticut',
    'idaho',
    'illinois',
    'indiana',
    'iowa',
    'kansas',
    'maine',
    'maryland',
    'massachusetts',
    'michigan',
    'minnesota',
    'missouri',
    'montana',
    'nebraska',
    'new-hampshire',
    'new-jersey',
    'new-york',
    'north-dakota',
    'ohio',
    'oregon',
    'pennsylvania',
    'south-dakota',
    'vermont',
    'virginia',
    'washington',
    'west-virginia',
    'wisconsin',
    'wyoming',
  ],
  seasonalPatterns: {
    spring:
      'Yellow perch spawn in early spring when water temperatures reach the mid-40s to low 50s, draping gelatinous egg strands over submerged vegetation and branches. Post-spawn perch feed aggressively in shallow water and can be caught in large numbers. Spring is one of the best times to target perch as they school heavily in predictable nearshore areas.',
    summer:
      'Perch move to deeper water during summer, typically holding in 15 to 30 feet along weed edges, drop-offs, and over hard-bottom structure. Schools can be located using electronics and then targeted with small jigs tipped with live bait. Morning and evening bites are best, though perch will feed intermittently throughout the day.',
    fall:
      'Cooling water draws perch back toward shallower structure as they follow baitfish and feed heavily before winter. Fall perch fishing can produce exceptional catches as large schools concentrate along weed lines and rocky points. This is an excellent time to stock the freezer with some of the finest-eating freshwater fish.',
    winter:
      'Yellow perch are one of the most popular ice fishing targets across the northern states. Schools roam over hard-bottom areas and along weed edges in 15 to 40 feet of water. Small jigging spoons and teardrops tipped with wax worms, spikes, or minnow heads are the standard approach. Mobile anglers who drill multiple holes and search for active schools have the most success.',
  },
  bestTechniques: ['jigging', 'live-bait'],
  bestBaits: [
    'small jigs tipped with minnows',
    'wax worms',
    'nightcrawler pieces',
    'small spoons',
    'live fathead minnows',
    'crappie jigs',
    'maggots (spikes)',
    'small soft plastic grubs',
  ],
  relatedSpecies: ['walleye', 'sauger', 'crappie'],
  funFacts: [
    'The world record yellow perch of 4 lbs 3 oz was caught in 1865, making it one of the oldest-standing freshwater fishing records in North America.',
    'Yellow perch are considered by many anglers and chefs to be the best-tasting freshwater fish, with sweet, firm, white flesh often compared to walleye.',
    'A single female yellow perch can produce up to 100,000 eggs in a single gelatinous ribbon that can stretch over 7 feet long.',
    'Yellow perch populations in the Great Lakes have experienced dramatic boom-and-bust cycles, with some years producing exceptional classes and others near-total spawning failure.',
  ],
  faq: [
    {
      question: 'What is the best bait for yellow perch?',
      answer:
        'Small jigs tipped with live minnows are the most consistently productive bait for yellow perch in open water. A 1/16 to 1/8 ounce jig head with a small fathead minnow hooked through the lips works in most situations. For ice fishing, small teardrops or jigging spoons tipped with wax worms, spikes (maggots), or minnow heads are standard. Small pieces of nightcrawler fished on a simple hook and split shot rig also work well year-round.',
    },
    {
      question: 'How do you find schools of yellow perch?',
      answer:
        'Locating perch schools requires covering water and using electronics. Start by checking known structure — weed edges, drop-offs, rocky points, and hard-bottom areas in 15 to 30 feet of water. A quality fish finder is invaluable for marking schools. Once you catch a perch, stay in that area because there are almost certainly more fish nearby. During ice fishing season, drilling multiple holes in a systematic pattern and using an underwater camera or flasher helps locate roaming schools.',
    },
    {
      question: 'What is the best time of year to catch yellow perch?',
      answer:
        'Late spring (post-spawn) and late fall produce the most consistent yellow perch fishing in open water as fish school heavily in accessible areas. Ice fishing season, particularly first ice and late ice, is also prime time for perch. Summer perch fishing can be excellent but requires finding deeper schools with electronics. The key is locating concentrations of fish, as perch always travel in schools.',
    },
    {
      question: 'How do you cook yellow perch?',
      answer:
        'Yellow perch are best prepared simply to let their delicate, sweet flavor shine. The classic preparation is a perch fry — fillets dipped in egg wash, coated in seasoned flour or breadcrumbs, and pan-fried in butter until golden. Perch can also be baked, broiled, or sauteed. The fillets are small and thin, so they cook quickly. Avoid heavy sauces or overpowering seasonings that mask the fish\'s natural flavor. A perch fry is a beloved tradition across the upper Midwest.',
    },
  ],
  imagePath: '/images/species/yellow-perch-id.jpg',
  imageAlt: 'A golden yellow perch with dark vertical bars held by an angler on a lake',
  imageCredit: 'Photo via Unsplash',
};
