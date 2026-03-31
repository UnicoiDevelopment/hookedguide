import { Species } from '../types';

export const smallmouthBass: Species = {
  slug: 'smallmouth-bass',
  name: 'Smallmouth Bass',
  scientificName: 'Micropterus dolomieu',
  type: 'freshwater',
  family: 'Centrarchidae',
  description:
    'The smallmouth bass is widely regarded as the hardest-fighting freshwater fish pound for pound. Often called "bronzebacks" for their distinctive brown and bronze coloring, smallmouth bass thrive in clear, cool rivers and lakes across the northern and central United States. Their acrobatic leaps, bulldogging runs, and willingness to strike a variety of presentations make them a favorite among serious anglers. Smallmouth are typically found in cleaner, rockier waters than their largemouth cousins.',
  identification:
    'Smallmouth bass have a bronze to brownish-green body with dark vertical bars along the sides, though these bars can fade depending on water clarity and mood. The key distinguishing feature is the jaw: the upper jaw does NOT extend past the eye when closed, unlike the largemouth. The eye is often reddish-orange. The dorsal fin has a shallow notch between the spiny and soft-rayed portions, more connected than a largemouth. Smallmouth also lack the prominent dark lateral stripe seen on largemouth bass.',
  habitat:
    'Smallmouth bass prefer clear, cool water with rocky substrate. They are found in rivers with moderate current, rocky lakes, and deep clear reservoirs. Key habitat features include boulder fields, gravel bars, rocky points, ledges, and current breaks in rivers. They generally prefer harder bottom composition than largemouth and are rarely found in heavy vegetation. In rivers, look for smallmouth near riffles, eddies, and current seams.',
  behavior:
    'Smallmouth bass are more current-oriented and structure-related than largemouth. They are schooling fish, often found in groups of similar-sized individuals. They feed heavily on crayfish and baitfish, often relating to rocky structure where crayfish are abundant. Smallmouth spawn in spring when water reaches 58-65F, building nests on gravel or rocky bottoms. They are known for incredible fight quality, often making multiple jumps and sustained powerful runs.',
  diet:
    'Crayfish are the number-one forage for smallmouth bass and often comprise over 60% of their diet. They also feed heavily on minnows, sculpins, gobies, hellgrammites, and aquatic insects. Smallmouth in large lakes often key on goby and alewife populations. They are more selective feeders than largemouth and typically prefer smaller, more natural-looking presentations.',
  recordWeight: { lbs: 11, oz: 15, location: 'Dale Hollow Lake, TN', year: 1955 },
  averageWeight: { min: 1, max: 3, unit: 'lbs' },
  averageLength: { min: 10, max: 18, unit: 'inches' },
  lifespan: { min: 6, max: 15, unit: 'years' },
  preferredTemp: { min: 60, max: 75, unit: 'F' },
  difficultyRating: 3,
  fightRating: 5,
  tasteRating: 3,
  statesFound: [
    'alabama', 'arkansas', 'california', 'colorado', 'connecticut', 'georgia',
    'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'maine',
    'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi',
    'missouri', 'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey',
    'new-york', 'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon',
    'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington',
    'west-virginia', 'wisconsin', 'wyoming',
  ],
  seasonalPatterns: {
    spring:
      'Spring is the best season for trophy smallmouth. As water temps reach 50-55F, smallmouth move from deep winter haunts to staging areas near spawning flats. Pre-spawn fish feed aggressively on crayfish and baitfish near rocky points and gravel transitions. The spawn occurs at 58-65F in 3-8 feet of water on gravel or rock substrate. Jerkbaits and tubes are top producers.',
    summer:
      'Summer smallmouth relate to main-lake rock structure, deep points, and current areas in rivers. In lakes, they often suspend over deep humps and ledges in 15-30 feet of water, feeding on schools of baitfish. River smallmouth hold in current seams, behind boulders, and in riffles. Topwater fishing at dawn can be phenomenal. Drop-shots and Ned rigs are go-to presentations.',
    fall:
      'Fall brings some of the most consistent smallmouth action of the year. Bass follow baitfish into creek mouths and along rocky shorelines, feeding heavily to bulk up for winter. Look for surface-feeding activity early and late. Crankbaits, jerkbaits, and swimbaits fished along rock transitions are extremely effective. Water temps of 55-65F are the sweet spot.',
    winter:
      'In winter, smallmouth group up in deep water, often in 25-50 feet, near the steepest breaks and channel edges. They become lethargic and feed sparingly. Slow presentations like a hair jig, blade bait, or drop-shot with small plastics are most effective. In northern states, smallmouth are a popular ice-fishing target using small jigging spoons and live minnows.',
  },
  bestTechniques: ['drop-shot', 'ned-rig', 'crankbait'],
  bestBaits: [
    'Green pumpkin tube jig',
    'TRD on Ned rig head',
    'Brown/orange crayfish-pattern crankbait',
    'Smoke-colored Roboworm on drop-shot',
    'Hair jig with craw trailer',
    'Live crayfish',
    'White paddle-tail swimbait',
    'Natural-colored jerkbait',
  ],
  relatedSpecies: ['largemouth-bass', 'spotted-bass', 'walleye', 'rainbow-trout'],
  funFacts: [
    'David Hayes\'s 1955 world record of 11 lbs 15 oz from Dale Hollow Lake on the Tennessee-Kentucky border has stood for over 70 years, making it one of the oldest standing freshwater records.',
    'Smallmouth bass are widely considered the hardest-fighting freshwater fish pound for pound, often making 4-6 jumps during a single fight.',
    'In clear water, smallmouth bass can see a lure or bait from over 30 feet away, making them one of the most visually oriented freshwater predators.',
    'Male smallmouth bass guard their nest for up to three weeks after eggs hatch, barely eating during this time and losing significant body weight.',
    'Smallmouth bass populations have actually expanded their range northward in recent decades, likely due to warming water temperatures in northern lakes and rivers.',
  ],
  faq: [
    {
      question: 'What is the difference between smallmouth and largemouth bass?',
      answer:
        'The easiest way to tell them apart is the jaw: a largemouth\'s upper jaw extends well past the eye, while a smallmouth\'s jaw does not reach past the eye. Smallmouth have bronze-brown coloring with vertical bars, while largemouth are green with a dark horizontal stripe. Smallmouth prefer rocky, clear, cool water while largemouth thrive in warmer, weedy environments. Smallmouth are generally considered harder fighters pound for pound.',
    },
    {
      question: 'What is the best bait for smallmouth bass?',
      answer:
        'Crayfish-imitating baits are the top producers for smallmouth bass year-round because crayfish make up the majority of their diet. Tube jigs in green pumpkin or brown, Ned rigs with TRD-style baits, and small brown/orange crankbaits are all extremely effective. For live bait, a live crayfish or hellgrammite on a light jighead is hard to beat. In summer, drop-shotting with small finesse worms is a consistent producer.',
    },
    {
      question: 'Where are the best smallmouth bass fisheries in the US?',
      answer:
        'Dale Hollow Lake (TN/KY) is the legendary trophy smallmouth destination and still produces giants. Lake Erie is considered the best numbers fishery, routinely producing 50+ fish days. The Great Lakes system, including Lake St. Clair and Lake Michigan, are world-class. Top rivers include the Susquehanna (PA), James River (VA), Umpqua (OR), and Buffalo National River (AR). Table Rock Lake (MO) and Pickwick Lake (AL/TN) are top reservoir fisheries.',
    },
    {
      question: 'What rod and reel setup is best for smallmouth bass?',
      answer:
        'A 6\'6" to 7\' medium-power, fast-action spinning rod paired with a 2500-size spinning reel is the most versatile smallmouth setup. Spool with 6-8 lb fluorocarbon or 10-15 lb braid with a 6-8 lb fluoro leader. For crankbaits and jerkbaits, a medium-power baitcasting rod with 10-12 lb fluorocarbon works well. Lighter setups are preferred for smallmouth because they tend to be line-shy in clear water.',
    },
  ],
  imagePath: '/images/species/smallmouth-bass.jpg',
  imageAlt: 'Smallmouth bass showing its characteristic bronze coloring and vertical barring pattern',
  imageCredit: 'Photo via Unsplash',
};
