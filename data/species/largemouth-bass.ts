import { Species } from '../types';

export const largemouthBass: Species = {
  slug: 'largemouth-bass',
  name: 'Largemouth Bass',
  scientificName: 'Micropterus salmoides',
  type: 'freshwater',
  family: 'Centrarchidae',
  description:
    'The largemouth bass is the most popular freshwater game fish in the United States, pursued by millions of anglers across 48 states. Known for explosive topwater strikes and powerful runs, the largemouth thrives in warm, shallow waters with abundant cover. Its willingness to strike a wide variety of lures and baits makes it accessible to beginners while remaining endlessly challenging for experienced anglers. Bass fishing supports a multi-billion dollar tournament industry and is deeply woven into American fishing culture.',
  identification:
    'The largemouth bass is distinguished by its large mouth, where the upper jaw extends well past the eye when the mouth is closed. It has a dark green to olive back with a prominent dark lateral stripe running from gill to tail, fading with age in larger fish. The belly is white to yellowish. The dorsal fin has a deep notch between the spiny and soft-rayed portions, nearly separating them into two fins. This notch is the easiest way to distinguish it from the spotted bass, which has a shallower notch, and the smallmouth bass, whose jaw does not extend past the eye.',
  habitat:
    'Largemouth bass are found in lakes, ponds, reservoirs, rivers, and streams throughout the continental United States. They prefer warm, slow-moving or still water with plenty of structure such as submerged vegetation, fallen timber, docks, lily pads, and rocky points. They are often found in water less than 20 feet deep, though they will move deeper in summer heat or clear-water lakes. Ideal habitat includes a mix of open water for feeding and dense cover for ambush opportunities.',
  behavior:
    'Largemouth bass are ambush predators that rely on cover and structure to surprise prey. They are most active during low-light periods at dawn and dusk. In spring, males build nests on firm bottoms in shallow water and aggressively guard eggs and fry, making them vulnerable to sight-fishing. During summer, they often move to deeper structure or shade during midday and feed aggressively in mornings and evenings. In fall, they follow schools of shad and other baitfish into the shallows. Winter slows their metabolism significantly, and they hold tight to deep structure.',
  diet:
    'Largemouth bass are opportunistic predators with a varied diet. Juveniles feed on insects, zooplankton, and small crustaceans. Adults primarily eat baitfish such as shad, bluegill, and minnows, as well as crayfish, frogs, snakes, and even small birds or mice that fall into the water. They feed by ambush, using a rapid burst of speed and their large mouth to inhale prey with a vacuum-like suction.',
  recordWeight: { lbs: 22, oz: 4, location: 'Montgomery Lake, GA', year: 1932 },
  averageWeight: { min: 1, max: 5, unit: 'lbs' },
  averageLength: { min: 12, max: 20, unit: 'inches' },
  lifespan: { min: 10, max: 16, unit: 'years' },
  preferredTemp: { min: 65, max: 80, unit: 'F' },
  difficultyRating: 2,
  fightRating: 4,
  tasteRating: 3,
  statesFound: [
    'alabama', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
    'delaware', 'florida', 'georgia', 'idaho', 'illinois', 'indiana', 'iowa',
    'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts',
    'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska',
    'nevada', 'new-hampshire', 'new-jersey', 'new-mexico', 'new-york',
    'north-carolina', 'north-dakota', 'ohio', 'oklahoma', 'oregon',
    'pennsylvania', 'rhode-island', 'south-carolina', 'south-dakota',
    'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington',
    'west-virginia', 'wisconsin', 'wyoming',
  ],
  seasonalPatterns: {
    spring:
      'Spring is prime time for largemouth bass. As water temperatures rise past 55F, bass move shallow to spawn. Pre-spawn fish feed aggressively on crawfish and baitfish near staging areas such as points and channel swings. During the spawn (60-70F), males fan out beds on firm bottoms in 1-6 feet of water and can be caught sight-fishing with soft plastics.',
    summer:
      'In summer, bass transition to deeper structure during the heat of the day, holding on ledges, humps, brush piles, and creek channels in 10-25 feet of water. Early morning and late evening topwater bites can be outstanding. Night fishing with black buzzbait or dark-colored worms becomes productive. Target shade from docks, bridges, and overhanging trees during midday.',
    fall:
      'Fall triggers a major feeding binge as bass follow schools of shad into creek arms and shallow flats. This is one of the best times to catch numbers of quality fish. Crankbaits, spinnerbaits, and swimbaits that mimic baitfish are extremely effective. Look for surface activity like schooling bass busting shad on the surface.',
    winter:
      'Winter slows bass metabolism significantly. Fish move to the deepest available structure and become lethargic. Slow presentations like a jig dragged along the bottom or a small finesse worm on a drop-shot rig are most effective. Bites are subtle and infrequent. Focus on the warmest parts of the day, especially sunny afternoons when water temps tick up slightly.',
  },
  bestTechniques: ['texas-rig', 'crankbait', 'topwater', 'spinnerbait'],
  bestBaits: [
    'Green pumpkin Senko worm',
    'Shad-pattern square-bill crankbait',
    'White/chartreuse spinnerbait',
    'Black/blue jig with craw trailer',
    'Watermelon red flake creature bait',
    'Buzzbait',
    'Live shiners',
    'Zoom Super Fluke (white)',
  ],
  relatedSpecies: ['smallmouth-bass', 'spotted-bass', 'crappie', 'bluegill'],
  funFacts: [
    'George Perry\'s 1932 world record of 22 lbs 4 oz from Montgomery Lake, Georgia, stood uncontested for over 77 years and remains the most iconic record in freshwater fishing.',
    'Largemouth bass can open their mouths wide enough to create a suction force that pulls prey in from several inches away.',
    'A female largemouth bass can lay between 2,000 and 40,000 eggs per pound of body weight during a single spawn.',
    'Bass have been shown to remember and avoid specific lure types they have been caught on for up to two weeks.',
    'The bass fishing industry generates an estimated $60+ billion annually in economic impact in the United States.',
  ],
  faq: [
    {
      question: 'What is the best time of day to catch largemouth bass?',
      answer:
        'Dawn and dusk are generally the most productive times to catch largemouth bass. During low-light conditions, bass move shallow and feed aggressively. In summer, early morning (5-9 AM) and late evening (6-9 PM) are prime windows. However, overcast days can produce all-day action, and night fishing with dark-colored lures can be excellent in summer months.',
    },
    {
      question: 'What pound test line should I use for largemouth bass?',
      answer:
        'For most largemouth bass fishing, 12-17 lb fluorocarbon or 30-50 lb braided line is ideal. Use heavier line (17 lb fluoro or 50 lb braid) when fishing heavy cover like thick vegetation or laydowns. For finesse techniques like drop-shot or shaky head, 8-10 lb fluorocarbon works well. Braided line is preferred for topwater, frogging, and punching heavy mats.',
    },
    {
      question: 'What colors work best for largemouth bass lures?',
      answer:
        'Follow the general rule: in clear water, use natural and translucent colors like green pumpkin, watermelon, and shad patterns. In stained or muddy water, use bold colors like black/blue, junebug, chartreuse, and white. For topwater, bone and white are consistent producers. Match the predominant forage in your lake, whether that is shad, bluegill, or crawfish.',
    },
    {
      question: 'Where do largemouth bass go in winter?',
      answer:
        'In winter, largemouth bass move to the deepest available structure in the lake, typically 15-30 feet deep depending on the body of water. They hold near creek channels, deep points, standing timber, and bridge pilings. Their metabolism slows dramatically, so they feed infrequently and prefer small, slow-moving baits. Look for bass grouped together on sonar near the bottom in the warmest water available.',
    },
    {
      question: 'How can I tell the difference between a largemouth and spotted bass?',
      answer:
        'The most reliable method is the jaw test: a largemouth bass\'s upper jaw extends well past the back of the eye when closed, while a spotted bass\'s jaw barely reaches the back of the eye. Spotted bass also have rows of small dark spots below the lateral line and rough tooth patches on the tongue. Largemouth bass have a deeper notch between their dorsal fin sections, while the spotted bass dorsal is more connected.',
    },
    {
      question: 'Do largemouth bass taste good?',
      answer:
        'Largemouth bass have mild, white, flaky meat that is perfectly edible. Fish from clean, cold water tend to taste best. Bass from warm, muddy water can have a somewhat muddy flavor. Most bass anglers practice catch and release, especially for larger fish, to maintain healthy populations. If you keep bass to eat, smaller fish (12-15 inches) generally taste better than large ones.',
    },
  ],
  imagePath: '/images/species/largemouth-bass.jpg',
  imageAlt: 'Largemouth bass being held by an angler showing its distinctive large jaw and dark lateral stripe',
  imageCredit: 'Photo via Unsplash',
};
