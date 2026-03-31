import type { Species } from '../types';

export const mahiMahi: Species = {
  slug: 'mahi-mahi',
  name: 'Mahi-Mahi (Dolphinfish)',
  scientificName: 'Coryphaena hippurus',
  type: 'saltwater',
  family: 'Coryphaenidae',
  description:
    'The mahi-mahi, also known as dolphinfish or dorado, is one of the most visually stunning and exciting offshore gamefish in the world. Renowned for their electric neon colors, blistering speed, acrobatic jumps, and outstanding table quality, mahi-mahi are a favorite of offshore anglers worldwide. They are fast-growing, pelagic fish that associate with floating structure, weed lines, and current edges in tropical and subtropical waters.',
  identification:
    'Mahi-mahi are unmistakable with their brilliant coloration: electric blue-green back, golden-yellow sides, and an array of blue spots and iridescent patches. Males (bulls) develop a prominent, blunt, squared-off forehead, while females (cows) have a more rounded head. They have a long, continuous dorsal fin stretching from head to tail, a deeply forked tail, and a compressed body. Colors rapidly fade after death.',
  habitat:
    'Open ocean pelagic fish found in tropical and warm-temperate waters worldwide. They strongly associate with floating objects including sargassum weed lines, floating debris, buoys, fish aggregating devices (FADs), and current rips. Found offshore in blue water, typically over depths of 100-1000+ feet. Water temperature is the primary driver of their distribution.',
  behavior:
    'Mahi-mahi are schooling fish that travel in groups ranging from a handful to hundreds. They are among the fastest-growing fish in the sea, reaching 30+ lbs in a single year. When hooked, they make searing runs and spectacular leaps. They are aggressive feeders that will readily strike trolled lures, live bait, and even fly patterns. Keeping one hooked fish in the water often holds the school near the boat.',
  diet:
    'Voracious predators that feed on flying fish, ballyhoo, squid, small tuna, triggerfish, and various crustaceans. They use their speed to chase down prey near the surface. Flying fish are a primary forage species in many regions. Mahi-mahi found under floating debris also feed on the small fish and invertebrates that gather there.',
  recordWeight: { lbs: 87, oz: 0, location: 'Costa Rica', year: 1976 },
  averageWeight: { min: 5, max: 25, unit: 'lbs' },
  averageLength: { min: 24, max: 48, unit: 'inches' },
  lifespan: { min: 3, max: 5, unit: 'years' },
  preferredTemp: { min: 72, max: 84, unit: 'F' },
  difficultyRating: 3,
  fightRating: 5,
  tasteRating: 5,
  statesFound: [
    'florida',
    'texas',
    'louisiana',
    'south-carolina',
    'north-carolina',
    'georgia',
    'hawaii',
    'california',
  ],
  seasonalPatterns: {
    spring:
      'Spring marks the beginning of the mahi-mahi season along the southeastern US coast as warm Gulf Stream and tropical waters push northward. Fish begin appearing off South Florida in March and the Carolinas by May. Look for birds working over weed lines and current edges where mahi-mahi congregate to feed.',
    summer:
      'Peak mahi-mahi season throughout the Atlantic and Gulf coasts. Fish are abundant, aggressive, and often found in large schools under weed lines, floating debris, and along current rips. Summer offers the best chance at trophy bulls in the 30-50+ lb class. Trolling and live-baiting along weed lines is most productive.',
    fall:
      'Mahi-mahi remain available through fall, though fish begin moving south with cooling water temperatures. Fall fish are often fattened up and provide excellent table fare. As the season progresses, the fish move farther offshore to stay in warm water. Some of the largest fish of the year are caught in early fall.',
    winter:
      'Winter fishing for mahi-mahi is limited to the warmest waters off South Florida, the Keys, and Hawaii. Fish are less abundant but can still be found along weed lines and floating objects in blue water. Winter trips often require longer runs offshore to find productive water temperatures above 72 degrees.',
  },
  bestTechniques: ['trolling', 'live-bait', 'fly-fishing-basics'],
  bestBaits: [
    'Ballyhoo (rigged for trolling)',
    'Live pilchard or sardine',
    'Skirted trolling lure (blue/white, green/yellow)',
    'Feather jig (green, yellow)',
    'Live goggle-eye (bigeye scad)',
    'Chunk cut bait (bonito, squid)',
    'Fly (deceiver, popper, EP baitfish)',
    'Cedar plug',
    'Rapala X-Rap Magnum',
  ],
  relatedSpecies: ['king-mackerel', 'tarpon', 'grouper', 'red-snapper'],
  funFacts: [
    'Mahi-mahi are one of the fastest-growing fish in the ocean, capable of reaching 40+ lbs in just two years. Their rapid growth rate and high reproductive capacity make them one of the most sustainable offshore species to harvest.',
    'The vivid neon colors of a mahi-mahi are produced by specialized cells called chromatophores. When the fish dies, these cells rapidly lose function, causing the brilliant blues, greens, and golds to fade to a dull gray-yellow within minutes.',
    'Mahi-mahi can swim at speeds exceeding 50 mph in short bursts, making them one of the fastest fish in the ocean. This speed allows them to chase down flying fish, their primary prey in many regions.',
    'The name "mahi-mahi" comes from Hawaiian and means "very strong." The species was rebranded from "dolphinfish" to "mahi-mahi" in the seafood market to avoid confusion with dolphins (marine mammals).',
    'Female mahi-mahi can spawn every 2-3 days during the spawning season, releasing 100,000 to over 1 million eggs per event. This prolific reproduction is key to sustaining the species despite heavy fishing pressure.',
  ],
  faq: [
    {
      question: 'What is the best way to catch mahi-mahi?',
      answer:
        'Trolling with rigged ballyhoo or skirted lures along weed lines, current edges, and floating debris is the most productive method. When a school is located, switch to live bait or cut chunks to keep the school near the boat. Keeping one hooked fish in the water will often hold the school within casting range.',
    },
    {
      question: 'How do you find mahi-mahi offshore?',
      answer:
        'Look for floating sargassum weed lines, current rips, temperature breaks, floating debris (boards, pallets, buckets), and diving birds. Mahi-mahi associate strongly with any floating structure. Use sea surface temperature charts and satellite imagery to identify warm-water edges and weed concentrations.',
    },
    {
      question: 'Is mahi-mahi the same as dolphin?',
      answer:
        'Mahi-mahi are also called "dolphinfish" or simply "dolphin" by fishermen, but they are a fish species, not a marine mammal. They have no relation to bottlenose dolphins or other cetaceans. The Hawaiian name "mahi-mahi" was widely adopted by the restaurant industry to eliminate this common confusion.',
    },
    {
      question: 'Is mahi-mahi good to eat?',
      answer:
        'Mahi-mahi is one of the most popular eating fish worldwide, with firm, white, mild-flavored flesh that holds up well to any cooking method. It is excellent grilled, blackened, baked, or pan-seared. Fresh mahi-mahi is significantly superior to frozen, so many anglers consider it one of the best rewards of offshore fishing.',
    },
    {
      question: 'What size mahi-mahi is best to eat?',
      answer:
        'Fish in the 5-15 lb range generally have the best texture and flavor. Larger bulls can have slightly coarser flesh but are still excellent eating. Very small "peanut" mahi under 20 inches are best released to grow. Most anglers keep a few eating-size fish and release the rest.',
    },
    {
      question: 'What tackle do I need for mahi-mahi?',
      answer:
        'A medium-heavy spinning or conventional rod rated for 20-40 lb line works well for most mahi-mahi fishing. Use 30-40 lb braided main line with a 40-60 lb fluorocarbon leader. For trolling, standard offshore trolling rods with 30-50 lb class reels are appropriate. Fly anglers use 9-10 weight outfits.',
    },
  ],
  imagePath: '/images/species/mahi-mahi.jpg',
  imageAlt: 'Brilliantly colored mahi-mahi with electric blue and golden-yellow coloring alongside a boat',
  imageCredit: 'Photo via Unsplash',
};
