import type { Species } from '../types';

export const speckledTrout: Species = {
  slug: 'speckled-trout',
  name: 'Speckled Trout (Spotted Seatrout)',
  scientificName: 'Cynoscion nebulosus',
  type: 'saltwater',
  family: 'Sciaenidae',
  description:
    'The speckled trout, or spotted seatrout, is the most popular inshore saltwater gamefish across the Gulf Coast and lower Atlantic states. Despite the name, they are not true trout but members of the drum family. Speckled trout are aggressive strikers that hit topwater lures explosively, fight well on light tackle, and are considered among the finest-eating inshore fish available.',
  identification:
    'Speckled trout have an elongated body with a silvery-gray to greenish back, iridescent blue-purple sheen along the sides, and white belly. They are covered with round black spots on the back, dorsal fin, and upper tail. They have a large mouth with prominent canine teeth in the upper jaw, distinguishing them from other members of the drum family. Average fish are 14-20 inches, though trophy specimens can exceed 30 inches.',
  habitat:
    'Found throughout coastal bays, estuaries, bayous, grass flats, and nearshore waters. They prefer areas with seagrass beds, sand flats adjacent to deeper channels, and structure like oyster reefs and dock pilings. Speckled trout are sensitive to cold water and will move to deeper holes during winter cold fronts.',
  behavior:
    'Speckled trout are ambush predators that use grass beds and structure to stage and attack passing baitfish and shrimp. They feed most aggressively during moving tides and low-light conditions. During spawning season (spring through fall), males produce a distinctive drumming sound to attract females. They are schooling fish, so catching one often means more are nearby.',
  diet:
    'Primarily feed on shrimp, small crabs, and baitfish including mullet, menhaden, pinfish, and silversides. Shrimp dominate the diet of smaller trout, while larger trout become increasingly piscivorous, preferring mullet and other baitfish.',
  recordWeight: { lbs: 17, oz: 7, location: 'Fort Pierce, Florida', year: 1995 },
  averageWeight: { min: 1, max: 4, unit: 'lbs' },
  averageLength: { min: 14, max: 22, unit: 'inches' },
  lifespan: { min: 8, max: 12, unit: 'years' },
  preferredTemp: { min: 60, max: 82, unit: 'F' },
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
    'virginia',
    'maryland',
  ],
  seasonalPatterns: {
    spring:
      'As water temperatures reach the low 60s, speckled trout move from their deep winter refuges back onto the flats and begin feeding aggressively. Spring is a transitional period with excellent action on both live bait and artificials. Target grass flat edges and drains on warming tides for the best bite.',
    summer:
      'Summer provides consistent action with fish spread across the flats, especially during early morning topwater bites. Fish dawn and dusk to avoid the midday heat when trout push deeper. Live shrimp under a popping cork or soft plastic jigs worked along grass edges are most productive.',
    fall:
      'Fall is arguably the best season for speckled trout as fish feed heavily before winter. Large "gator trout" are more accessible, and schools stack up along channel edges and drop-offs. Topwater action can be spectacular during the fall mullet run. This is trophy season for dedicated trout anglers.',
    winter:
      'Speckled trout are highly susceptible to cold water and will seek deep holes, channels, and power plant outflows during cold fronts. Fishing slows considerably but patient anglers can find concentrated fish in thermal refuges. Work slow-sinking lures along the bottom in deeper water. Major cold snaps can cause fish kills.',
  },
  bestTechniques: ['live-bait', 'topwater'],
  bestBaits: [
    'Live shrimp under popping cork',
    'Soft plastic jig (chartreuse/white, glow)',
    'MirrOlure topwater plug',
    'Live croaker (where legal)',
    'Gulp! shrimp on jighead',
    'Suspending twitch bait',
    'Topwater walk-the-dog lure',
    'Live pigfish',
  ],
  relatedSpecies: ['redfish', 'snook', 'flounder', 'sheepshead', 'king-mackerel'],
  funFacts: [
    'Despite their name, speckled trout are not true trout at all. They belong to the drum family (Sciaenidae), making them relatives of redfish, croakers, and black drum.',
    'Male speckled trout produce a drumming sound by vibrating muscles against their swim bladder to attract females during the spawning season, which runs from April through September.',
    'Speckled trout have two prominent canine teeth in their upper jaw, earning them the nickname "paper mouth" because their thin mouth tissue tears easily during the fight, requiring careful hook-setting and handling.',
    'A trophy speckled trout over 7 lbs is called a "gator trout" by Gulf Coast anglers, and fish over 10 lbs are considered specimens of a lifetime.',
  ],
  faq: [
    {
      question: 'What is the best bait for speckled trout?',
      answer:
        'Live shrimp fished under a popping cork is the most universally effective bait for speckled trout. For artificial anglers, soft plastic jigs in chartreuse, white, or glow colors on 1/8 to 1/4 oz jigheads are consistently productive. During the fall, topwater plugs at dawn can produce explosive strikes.',
    },
    {
      question: 'What is the best time of year to catch speckled trout?',
      answer:
        'Fall (October-November) is widely considered the best season for speckled trout, particularly for trophy fish. The fall mullet run triggers aggressive feeding, and larger "gator trout" become more accessible. Spring and early summer also offer excellent fishing as fish move onto the flats.',
    },
    {
      question: 'Are speckled trout good to eat?',
      answer:
        'Speckled trout are among the best-eating inshore fish, with delicate, white, flaky flesh and a mild flavor. They are excellent fried, broiled, grilled, or prepared as a meuniere. Fresh speckled trout is a staple of Gulf Coast cuisine and many consider them the finest-eating inshore species.',
    },
    {
      question: 'What is a "gator trout"?',
      answer:
        'A "gator trout" is slang for a large speckled trout, typically over 25 inches or 5-7+ lbs. These trophy-sized fish are almost always females and are often found as solitary ambush predators near structure or along channel edges rather than in open-flat schools.',
    },
    {
      question: 'Why do speckled trout die in cold weather?',
      answer:
        'Speckled trout are cold-sensitive and cannot tolerate water temperatures below about 45-48 degrees F for extended periods. Severe winter cold fronts can cause mass fish kills, particularly in shallow bays that cool rapidly. Fish that survive seek deep thermal refuges until conditions improve.',
    },
    {
      question: 'What tackle should I use for speckled trout?',
      answer:
        'A medium-light to medium spinning rod in the 7-foot range paired with a 2500-3000 size reel spooled with 10-15 lb braided line and a 15-20 lb fluorocarbon leader is ideal. This setup handles everything from popping corks and live bait to soft plastics and topwater plugs.',
    },
  ],
  imagePath: '/images/species/speckled-trout.jpg',
  imageAlt: 'Speckled trout with distinctive black spots held over seagrass flats',
  imageCredit: 'Photo via Unsplash',
};
