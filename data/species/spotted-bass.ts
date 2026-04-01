import { Species } from '../types';

export const spottedBass: Species = {
  slug: 'spotted-bass',
  name: 'Spotted Bass',
  scientificName: 'Micropterus punctulatus',
  type: 'freshwater',
  family: 'Centrarchidae',
  description:
    'The spotted bass occupies a niche between its largemouth and smallmouth cousins, combining traits of both species. Originally native to the Ohio and Mississippi River drainages, spotted bass have been widely introduced across the southern and western United States, where they thrive in deep, clear reservoirs. They tend to relate to deeper structure than largemouth and are often found suspended over open water or holding on steep bluff walls and ledges. Spotted bass have become especially important in western reservoirs where they can grow to trophy sizes exceeding 9 pounds.',
  identification:
    'Spotted bass can be tricky to distinguish from largemouth bass. The key differences: the spotted bass jaw does NOT extend past the back of the eye (similar to smallmouth). Look for rows of small dark spots below the lateral line, which largemouth lack. Spotted bass also have a rough tooth patch on the tongue that largemouth do not have. The dorsal fin has a shallower notch than a largemouth, with the spiny and soft portions more connected. Body color is typically olive-green with a series of dark diamond-shaped blotches along the midline.',
  habitat:
    'Spotted bass prefer deep, clear reservoirs with rocky structure, steep bluff walls, and defined creek channels. They are commonly found in deeper water than largemouth, often suspending at 20-40 feet over structure. In rivers, they inhabit pools with moderate current and rocky bottoms. They thrive in the highland reservoirs of the South, including the Tennessee River chain, Ozark lakes, and western California and Oregon impoundments.',
  behavior:
    'Spotted bass are more pelagic than largemouth, frequently suspending in open water and chasing schools of baitfish. They are aggressive feeders that will chase fast-moving baits through the water column. Spotted bass school more than largemouth and are often caught in groups of similar-sized fish. They spawn earlier than largemouth, typically when water reaches 57-63F. They are less cover-dependent than largemouth and more willing to roam open water.',
  diet:
    'Spotted bass feed primarily on threadfin shad, baitfish, and crayfish. In reservoirs, they often key on suspended schools of shad and will chase them through open water. They also eat aquatic insects, smaller fish species, and crayfish when available. In western reservoirs, rainbow trout stockings can become a primary forage source for large spotted bass.',
  recordWeight: { lbs: 11, oz: 4, location: 'Pine Flat Lake, CA', year: 2001 },
  averageWeight: { min: 1, max: 3, unit: 'lbs' },
  averageLength: { min: 10, max: 17, unit: 'inches' },
  lifespan: { min: 6, max: 12, unit: 'years' },
  preferredTemp: { min: 65, max: 78, unit: 'F' },
  difficultyRating: 3,
  fightRating: 4,
  tasteRating: 3,
  statesFound: [
    'alabama', 'arkansas', 'california', 'georgia', 'illinois', 'indiana',
    'kansas', 'kentucky', 'louisiana', 'mississippi', 'missouri',
    'north-carolina', 'ohio', 'oklahoma', 'oregon', 'south-carolina',
    'tennessee', 'texas', 'virginia', 'west-virginia',
  ],
  seasonalPatterns: {
    spring:
      'Spotted bass spawn earlier than largemouth, moving to gravel and rock substrate when water hits 57-63F. Pre-spawn spotted bass stage on secondary points and channel swings in 10-20 feet of water. Jerkbaits and underspins are top pre-spawn baits. During the spawn, they nest on rocky banks and gravel flats, typically deeper than largemouth nests.',
    summer:
      'Summer is prime time for spotted bass as they suspend over deep structure chasing schools of threadfin shad. They are commonly found on bluff walls, steep banks, and over submerged humps in 20-40 feet of water. Drop-shotting, football jigs, and deep-diving crankbaits are the most effective techniques. Night fishing under lights that attract baitfish can produce excellent results.',
    fall:
      'Fall spotted bass follow baitfish into the backs of creek arms, often mixing with largemouth on shallow flats. They remain more willing to suspend than largemouth and will chase topwater baits and jerkbaits. Look for bird activity over the water as an indicator of schooling bass busting shad on the surface. Umbrella rigs and swimbaits are effective.',
    winter:
      'Winter spotted bass hold on deep bluff walls, steep channel banks, and suspended over the deepest water in the lake. They often group tightly and can be located with electronics. Small metal lures like blade baits, jigging spoons, and underspin jigs fished vertically are most effective. Spotted bass tend to stay more active in cold water than largemouth.',
  },
  bestTechniques: ['drop-shot', 'crankbait', 'jigging', 'ned-rig'],
  bestBaits: [
    'Shad-colored drop-shot worm',
    'Deep-diving shad-pattern crankbait',
    'Football jig with craw trailer',
    'Jigging spoon (silver)',
    'Small underspins with paddle-tail swimbait',
    'Morning Dawn Roboworm',
    'Blade bait (silver/gold)',
    'Live minnows',
  ],
  relatedSpecies: ['largemouth-bass', 'smallmouth-bass', 'crappie'],
  funFacts: [
    'The world record spotted bass of 11 lbs 4 oz from Pine Flat Lake, California, was caught on a live crawdad by Bryan Shishido in 2001.',
    'Spotted bass hybridize readily with smallmouth bass in some reservoirs, creating fish that are difficult to identify and complicating management efforts.',
    'In some California reservoirs, spotted bass have displaced native species and can grow to sizes that rival largemouth, fueled by stocked trout as forage.',
    'Spotted bass have a unique rough tooth patch on their tongue that neither largemouth nor smallmouth bass possess, making it the most reliable field identification method.',
  ],
  faq: [
    {
      question: 'How do I tell a spotted bass from a largemouth bass?',
      answer:
        'The most reliable method is the tongue test: run your thumb along the tongue of the fish. Spotted bass have a distinct rough tooth patch on the tongue that largemouth bass completely lack. Additionally, the spotted bass jaw does not extend past the back of the eye when closed (largemouth jaw extends well past). Look for rows of small dark spots below the lateral line. The dorsal fin connection is also more continuous on spotted bass.',
    },
    {
      question: 'Do spotted bass get as big as largemouth bass?',
      answer:
        'No, spotted bass are generally smaller than largemouth. While the world record spotted bass is 11 lbs 4 oz, the average spotted bass is 1-3 pounds. In most waters, a 5-pound spotted bass is a trophy. However, in western reservoirs with trout forage, spotted bass can grow surprisingly large. They typically max out at about half the size of the largest largemouth in the same body of water.',
    },
    {
      question: 'Where are the best spotted bass fisheries?',
      answer:
        'The best trophy spotted bass fisheries are in California reservoirs like Bullards Bar, New Melones, and Pine Flat Lake, where trout forage produces giants. In the Southeast, Smith Lake and Lewis Smith Lake (AL), Table Rock Lake (MO), Lake Lanier (GA), and Pickwick Lake (AL/TN) are top destinations. The Tennessee River chain of lakes consistently produces quality spotted bass.',
    },
    {
      question: 'What techniques work best for spotted bass?',
      answer:
        'Drop-shotting is arguably the single most effective technique for spotted bass because they often suspend off the bottom over deep structure. Deep-diving crankbaits along bluff walls and ledges are also excellent. In winter, vertical jigging with blade baits and jigging spoons over schools of fish located on electronics is deadly. Spotted bass respond well to finesse presentations because they often inhabit clear water.',
    },
  ],
  imagePath: '/images/species/spotted-bass-id.jpg',
  imageAlt: 'Spotted bass showing the characteristic rows of spots below the lateral line',
  imageCredit: 'Photo via Unsplash',
};
