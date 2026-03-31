import { Species } from '../types';

export const musky: Species = {
  slug: 'musky',
  name: 'Muskellunge',
  scientificName: 'Esox masquinongy',
  type: 'freshwater',
  family: 'Esocidae',
  description:
    'The muskellunge, commonly known as the musky, is the largest member of the pike family and one of the most challenging freshwater game fish in North America. Dubbed the "fish of 10,000 casts," muskies are apex predators that demand patience, heavy tackle, and persistence. Landing a trophy musky is considered a pinnacle achievement among freshwater anglers.',
  identification:
    'Muskies have a long, torpedo-shaped body built for explosive ambush attacks. Their coloring varies by region but typically features dark vertical bars or spots on a light greenish-gold to silver background. The key identification feature is the lower half of the cheek and gill cover, which lack scales (unlike the similar northern pike). The tail is more pointed than a pike\'s, and the underside of the jaw has 6 to 9 sensory pores on each side.',
  habitat:
    'Muskies inhabit clear, cool lakes and large rivers throughout the upper Midwest and Northeast. They prefer water with abundant weed beds, rocky structure, and forage fish populations. Classic musky habitat includes the edges of cabbage weed beds, rocky points, sunken islands, and current breaks near river channels. They are found in natural lakes, reservoirs, and larger river systems.',
  behavior:
    'Muskies are solitary apex predators that ambush prey from concealed positions in weeds, timber, or along structure edges. They are notorious for following lures to the boat without striking, a behavior that infuriates and fascinates anglers. Muskies are most active during stable weather conditions and feed most aggressively during fall when they are bulking up for winter. They can be extremely lethargic between feeding windows.',
  diet:
    'Muskies are voracious predators that eat fish up to one-third their own body length. Their diet includes suckers, perch, walleye, bass, and other fish. They also consume muskrats, ducklings, frogs, crayfish, and snakes. Large muskies are at the top of the food chain and have few natural predators.',
  recordWeight: { lbs: 67, oz: 8, location: 'Chippewa Flowage, Hayward, Wisconsin', year: 1949 },
  averageWeight: { min: 10, max: 30, unit: 'lbs' },
  averageLength: { min: 30, max: 48, unit: 'inches' },
  lifespan: { min: 15, max: 30, unit: 'years' },
  preferredTemp: { min: 60, max: 75, unit: 'F' },
  difficultyRating: 5,
  fightRating: 5,
  tasteRating: 2,
  statesFound: [
    'kentucky',
    'michigan',
    'minnesota',
    'new-york',
    'ohio',
    'pennsylvania',
    'tennessee',
    'vermont',
    'virginia',
    'west-virginia',
    'wisconsin',
    'iowa',
    'illinois',
    'indiana',
    'north-carolina',
    'north-dakota',
  ],
  seasonalPatterns: {
    spring:
      'After ice-out, muskies move shallow to spawn when water temperatures reach the mid-50s. Post-spawn fish can be caught in shallow bays and along emerging weed lines using smaller baits fished slowly. Spring musky fishing requires patience as fish recover from spawning stress.',
    summer:
      'Summer is peak musky season as fish establish predictable patterns along deep weed edges, rock structures, and current breaks. Topwater lures produce explosive surface strikes during calm mornings and evenings. Fish deeper structure during midday heat with large bucktails, crankbaits, or soft plastics.',
    fall:
      'Fall is trophy season for muskies as fish feed aggressively to pack on weight before winter. The largest fish of the year are typically caught in October and November. Giant jerkbaits, bulldawgs, and oversized rubber baits fished near deep structure produce the biggest fish. Water temperatures in the 50s trigger the most intense feeding.',
    winter:
      'Muskies become largely dormant in winter, suspending over deep basins or holding near remaining green weeds. Ice fishing for muskies is practiced in some areas using large tip-up rigs with live suckers. Success rates are very low, but occasional giant fish are taken through the ice.',
  },
  bestTechniques: ['trolling', 'artificial-lure-selection'],
  bestBaits: [
    'large bucktail spinners',
    'Bulldawg soft plastic',
    'oversized jerkbaits',
    'topwater walk-the-dog lures',
    'large live suckers',
    'double-bladed inline spinners',
    'rubber shad baits',
    'glide baits',
  ],
  relatedSpecies: ['northern-pike', 'chain-pickerel'],
  funFacts: [
    'The nickname "fish of 10,000 casts" reflects how long anglers often go between musky catches — dedicated musky anglers may fish for days without a strike.',
    'Muskies and northern pike can hybridize to produce "tiger muskies," which are stocked in some states because they grow fast and are sterile, preventing overpopulation.',
    'A musky can accelerate from a standstill to over 30 miles per hour in a single burst, making them one of the fastest freshwater fish.',
    'The figure-eight technique, where anglers trace a large figure-eight pattern with their lure at boatside, was developed specifically for muskies that follow lures without striking.',
    'Muskies have been documented eating prey up to one-third their own body length, including full-grown mallard ducks.',
  ],
  faq: [
    {
      question: 'Why are muskies so hard to catch?',
      answer:
        'Muskies are difficult to catch for several reasons. They are relatively low in population density compared to other game fish, meaning there are simply fewer fish to target. They are also highly selective feeders with unpredictable feeding windows — a musky may only feed once every few days. Their habit of following lures without striking adds to the frustration. Success requires covering a lot of water with large lures, making precise casts to structure, and being persistent through long fishless stretches.',
    },
    {
      question: 'What size lures should I use for musky?',
      answer:
        'Musky lures are significantly larger than those used for other freshwater species. Bucktail spinners in 8 to 12 inches, jerkbaits from 6 to 10 inches, soft plastics from 8 to 15 inches, and topwater lures of 7 to 12 inches are standard. The general rule is "big bait, big fish." Heavy-duty musky tackle with 80 to 100 pound braided line and steel leaders is essential to handle these powerful fish and their sharp teeth.',
    },
    {
      question: 'What is the best time of year to catch a trophy musky?',
      answer:
        'Fall, particularly October and November, is widely considered the best time to catch a trophy muskellunge. Fish are feeding heavily to build fat reserves for winter, and the largest females are at their peak weights. Water temperatures in the 48 to 58 degree range seem to trigger the most aggressive feeding. Many of the largest muskies on record have been caught during late fall.',
    },
    {
      question: 'Are muskies good to eat?',
      answer:
        'While muskies are edible, they are generally not considered good table fare. Their flesh is soft, somewhat bland, and full of Y-bones that make cleaning difficult. More importantly, muskies are a slow-growing, low-density species, and catch-and-release is strongly encouraged to maintain healthy populations. Most serious musky anglers practice strict catch and release, and many fisheries have special regulations protecting the species.',
    },
    {
      question: 'What is the figure-eight technique for muskies?',
      answer:
        'The figure-eight is a boat-side maneuver where, at the end of each retrieve, the angler plunges the rod tip into the water and traces a wide figure-eight pattern with the lure. This triggers strikes from muskies that have followed the lure to the boat without committing. It is estimated that 15 to 25 percent of all musky catches come on the figure-eight. The key is making wide, smooth turns and keeping the lure moving at a consistent speed.',
    },
  ],
  imagePath: '/images/species/musky.jpg',
  imageAlt: 'A large muskellunge with dark vertical bars on a greenish body held by an angler at boatside',
  imageCredit: 'Photo via Unsplash',
};
