import type { Species } from '../types';

export const redfish: Species = {
  slug: 'redfish',
  name: 'Redfish (Red Drum)',
  scientificName: 'Sciaenops ocellatus',
  type: 'saltwater',
  family: 'Sciaenidae',
  description:
    'The redfish, also known as red drum, is the undisputed king of inshore saltwater fishing along the Gulf and Atlantic coasts. Recognizable by the distinctive black spot near the tail, redfish are aggressive feeders that prowl shallow flats, marshes, and oyster bars. They are prized for both their sporting qualities and excellent table fare, making them one of the most sought-after inshore species in the United States.',
  identification:
    'Redfish have a bronze to coppery-red body coloration with a distinctive black ocellus (eyespot) near the base of the tail. Some fish may have multiple spots. They have a slightly downturned mouth suited for bottom feeding, a rounded tail, and large scales. Juveniles are more reddish-bronze while larger adults (bull reds) may appear darker. They can grow over 40 inches and exceed 50 lbs.',
  habitat:
    'Found in a wide range of inshore and nearshore habitats including grass flats, oyster bars, mud flats, mangrove shorelines, jetties, and surf zones. Juvenile redfish prefer shallow estuaries and marshes, while larger bull reds are commonly found in passes, inlets, and along beaches. They tolerate a broad range of salinities from nearly fresh to full saltwater.',
  behavior:
    'Redfish are schooling fish, especially as juveniles and sub-adults (slot-size fish). They are sight-feeders on the flats and use their downturned mouth to root along the bottom for crabs and shrimp. During fall, large schools of bull reds gather near passes and inlets for their spawning run. They are known for tailing on shallow flats as they feed, which makes them a prime sight-fishing target.',
  diet:
    'Redfish are opportunistic feeders that consume blue crabs, shrimp, mullet, menhaden, pinfish, mud minnows, and various crustaceans. Juveniles feed primarily on small crabs and shrimp, while larger adults eat more fish. They use their inferior (downturned) mouth to crush shellfish on the bottom.',
  recordWeight: { lbs: 94, oz: 2, location: 'Avon, North Carolina', year: 1984 },
  averageWeight: { min: 3, max: 15, unit: 'lbs' },
  averageLength: { min: 18, max: 30, unit: 'inches' },
  lifespan: { min: 20, max: 40, unit: 'years' },
  preferredTemp: { min: 65, max: 85, unit: 'F' },
  difficultyRating: 2,
  fightRating: 4,
  tasteRating: 4,
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
  ],
  seasonalPatterns: {
    spring:
      'Redfish become increasingly active as water temperatures climb into the mid-60s. They push onto shallow flats to feed on crabs and shrimp, making spring an excellent time for sight-fishing. Focus on spartina grass edges, oyster bars, and warming mud flats during incoming tides.',
    summer:
      'Summer brings consistent action on the flats, especially during early morning and late evening hours. Redfish seek shade and moving water during the heat of midday, often holding near dock pilings, mangrove roots, and deeper channels. Live bait under a popping cork is deadly during this season.',
    fall:
      'Fall is the premier redfish season as massive schools of bull reds congregate near passes, inlets, and along beaches for the annual spawning run. Slot-size fish remain aggressive on the flats while oversized bulls stack up in nearshore waters. This is the best time of year for trophy redfish.',
    winter:
      'Redfish slow down but remain catchable in deeper holes, channels, and areas with dark mud bottoms that absorb warmth. Fish on the warmest part of the day and focus on slower presentations near structure. In the deep South, mild winters can still produce decent flats fishing on sunny afternoons.',
  },
  bestTechniques: ['live-bait', 'artificial-lure-selection', 'drift-fishing'],
  bestBaits: [
    'Live shrimp',
    'Live blue crab (cut or whole)',
    'Live mullet (finger mullet)',
    'Gold spoon (weedless)',
    'Soft plastic jerkbait (new penny, rootbeer)',
    'Topwater plug',
    'Popping cork with shrimp',
    'Cut mullet',
    'Gulp! shrimp',
  ],
  relatedSpecies: ['speckled-trout', 'snook', 'flounder', 'sheepshead', 'red-snapper'],
  funFacts: [
    'The black spot near the tail is thought to confuse predators into attacking the tail instead of the head, giving the redfish a chance to escape.',
    'Redfish can live over 40 years in the wild and continue growing throughout their lives, with the largest bull reds exceeding 50 lbs.',
    'Red drum were so overfished in the 1980s after the "blackened redfish" craze popularized by Chef Paul Prudhomme that federal regulations were enacted to protect the species.',
    'Redfish produce a distinctive drumming sound by vibrating their swim bladder muscles, which is how they got the name "red drum." Males drum loudest during spawning season.',
    'A single large female redfish can produce over 2 million eggs in a single spawning season.',
  ],
  faq: [
    {
      question: 'What is the best bait for redfish?',
      answer:
        'Live shrimp under a popping cork is the most versatile and effective redfish bait in most situations. For trophy bull reds, cut blue crab or live mullet are top choices. Artificial anglers do extremely well with gold weedless spoons and soft plastic jerkbaits in natural colors.',
    },
    {
      question: 'What size redfish can you keep?',
      answer:
        'Most Gulf and Atlantic states have a "slot limit" for redfish, typically requiring fish to be between 18-27 inches to keep, with a daily bag limit of 2-5 fish depending on the state. Regulations vary by state and season, so always check current local rules before fishing.',
    },
    {
      question: 'Where is the best redfish fishing?',
      answer:
        'Louisiana is widely considered the redfish capital of the world, with the vast coastal marshes supporting enormous populations. Florida, Texas, and the Carolinas also offer world-class redfish fishing. The Mosquito Lagoon in Florida is renowned for sight-fishing redfish on the flats.',
    },
    {
      question: 'What is the difference between a redfish and a red snapper?',
      answer:
        'Despite the similar names, they are completely different species. Redfish (red drum) are inshore fish found in shallow bays and marshes with a bronze body and black tail spot. Red snapper are deep-water reef fish with bright red coloring found offshore in 60-300+ feet of water.',
    },
    {
      question: 'What is the best time of day to catch redfish?',
      answer:
        'Early morning and late afternoon are generally the best times. Redfish feed actively during low-light conditions and moving tides. However, they can be caught throughout the day, especially on overcast days or when tidal movement is strong.',
    },
    {
      question: 'Do redfish taste good?',
      answer:
        'Yes, redfish are excellent table fare with firm, white, mild-flavored flesh. Slot-size fish (18-27 inches) taste best. They are famously prepared "blackened" Cajun style but are also delicious grilled, broiled, or baked. Larger bull reds over 30 inches tend to have coarser flesh and are best released.',
    },
  ],
  imagePath: '/images/species/redfish-id.jpg',
  imageAlt: 'Angler holding a bronze-colored redfish with a visible black tail spot on a shallow grass flat',
  imageCredit: 'Photo via Unsplash',
};
