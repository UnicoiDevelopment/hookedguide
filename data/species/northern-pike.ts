import { Species } from '../types';

export const northernPike: Species = {
  slug: 'northern-pike',
  name: 'Northern Pike',
  scientificName: 'Esox lucius',
  type: 'freshwater',
  family: 'Esocidae',
  description:
    'The northern pike is an aggressive, hard-fighting predator found across the northern United States and Canada. Known for savage strikes and acrobatic fights, pike are a favorite target of anglers who enjoy fast-paced action with big fish. Their willingness to hit large, flashy lures and their widespread distribution make them one of the most accessible trophy freshwater fish.',
  identification:
    'Northern pike have an elongated, torpedo-shaped body with a broad, flat snout resembling a duck bill. Their coloring is dark green to olive with rows of lighter bean-shaped spots along the flanks. Unlike muskellunge, pike have scales on the entire cheek and the upper half of the gill cover. The dorsal fin is set far back near the tail. Their mouth is full of sharp, backward-pointing teeth designed for gripping prey.',
  habitat:
    'Northern pike inhabit weedy lakes, slow-moving rivers, reservoirs, and backwater areas throughout the northern United States and Canada. They prefer shallow, vegetated bays in spring and fall, moving to deeper weed edges and structure during summer. Classic pike habitat includes cabbage weed beds, lily pad fields, reed-lined bays, and areas where current meets slack water.',
  behavior:
    'Pike are aggressive ambush predators that lie motionless in or near vegetation, then explode forward to seize prey with a sudden burst of speed. They are less finicky than muskies and more willing to strike a variety of presentations. Pike can be caught throughout the day but are most active during morning and late afternoon. They are territorial and solitary, with larger fish commanding the best ambush points.',
  diet:
    'Pike are opportunistic predators that eat a wide variety of prey including perch, suckers, minnows, sunfish, and other available fish. They also consume frogs, crayfish, ducklings, mice, and even muskrats. Pike have been documented eating prey up to half their own body length. Their metabolism is highest in spring and fall when they feed most aggressively.',
  recordWeight: { lbs: 46, oz: 2, location: 'Great Sacandaga Lake, New York', year: 1940 },
  averageWeight: { min: 3, max: 10, unit: 'lbs' },
  averageLength: { min: 20, max: 35, unit: 'inches' },
  lifespan: { min: 10, max: 25, unit: 'years' },
  preferredTemp: { min: 55, max: 70, unit: 'F' },
  difficultyRating: 3,
  fightRating: 4,
  tasteRating: 2,
  statesFound: [
    'alaska',
    'colorado',
    'connecticut',
    'idaho',
    'illinois',
    'indiana',
    'iowa',
    'maine',
    'maryland',
    'massachusetts',
    'michigan',
    'minnesota',
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
    'washington',
    'wisconsin',
    'wyoming',
  ],
  seasonalPatterns: {
    spring:
      'Spring is arguably the best time for pike fishing. After ice-out, pike move into shallow bays and marshes to spawn when water hits the mid-40s. Post-spawn fish remain shallow and feed aggressively to recover energy. Large spinnerbaits and jerkbaits worked along emerging weed lines produce excellent results.',
    summer:
      'Pike move to deeper weed edges and structure as shallow water warms. Focus on cabbage weed lines in 8 to 15 feet of water and points adjacent to deep basins. Trolling with large spoons or crankbaits is effective for covering water. Early morning topwater action can be explosive in weedy bays before the sun gets high.',
    fall:
      'Cooling water temperatures trigger aggressive fall feeding as pike bulk up for winter. Fish move back toward shallower structure and follow baitfish schools. Large spinnerbaits, jerkbaits, and live suckers fished near remaining green weeds are top producers. Some of the largest pike of the year are caught in October.',
    winter:
      'Pike remain active under the ice and are one of the most popular ice fishing targets. Tip-ups baited with large shiners or suckers set near weed edges and structure produce consistent action. Dead bait rigs on the bottom can also be effective. Pike feed throughout the winter, making them reliable quarry for ice anglers.',
  },
  bestTechniques: ['spinnerbait', 'trolling'],
  bestBaits: [
    'large spinnerbaits',
    'Dardevle spoon',
    'jerkbaits',
    'large live shiners',
    'live suckers',
    'topwater buzzbaits',
    'soft plastic swimbaits',
    'inline spinners',
  ],
  relatedSpecies: ['musky', 'chain-pickerel'],
  funFacts: [
    'A wire or heavy fluorocarbon leader is essential when pike fishing because their razor-sharp teeth can slice through monofilament line in an instant.',
    'Northern pike are one of the fastest-growing freshwater fish and can reach 30 inches in just 3 to 4 years in productive waters.',
    'Pike have been known to attack and eat ducklings, muskrats, and even other pike up to half their own body length.',
    'In Scandinavian folklore, giant pike were said to inhabit deep lakes and could pull down livestock that came to drink at the water\'s edge.',
    'Northern pike have the widest natural distribution of any freshwater game fish, found across North America, Europe, and Asia.',
  ],
  faq: [
    {
      question: 'Do I need a wire leader for pike fishing?',
      answer:
        'Yes, a wire or heavy fluorocarbon leader is strongly recommended for pike fishing. Pike have extremely sharp teeth that will easily cut through monofilament and standard fluorocarbon leaders. Titanium wire leaders in 20 to 30 pound test are the most popular choice, as they resist kinking better than stainless steel. Some anglers use 80 to 100 pound fluorocarbon as a bite-resistant alternative that is less visible in the water.',
    },
    {
      question: 'What is the best lure for northern pike?',
      answer:
        'Large spinnerbaits and inline spinners are arguably the most consistently productive pike lures because they combine flash, vibration, and can be fished at various depths. The classic red-and-white Dardevle spoon has been catching pike for generations. In weedy areas, weedless spinnerbaits and soft plastic swimbaits excel. For trophy pike, oversized jerkbaits and glide baits trigger strikes from the largest fish.',
    },
    {
      question: 'Are northern pike good to eat?',
      answer:
        'Northern pike are edible but are considered only fair table fare by most anglers. The main issue is the Y-bones — a set of small, forked bones embedded in the fillets that are difficult to remove. There are special filleting techniques (the 5-fillet method) that remove Y-bones, producing boneless meat. The flesh itself is white, flaky, and mild-tasting. Smaller pike in the 2 to 5 pound range generally taste better than large specimens.',
    },
    {
      question: 'How can I tell the difference between a pike and a musky?',
      answer:
        'The easiest way to distinguish pike from muskies is by their markings and cheek scales. Pike have light, bean-shaped spots on a dark background, while muskies have dark bars or spots on a light background. Pike have scales covering the entire cheek and the upper half of the gill cover, while muskies only have scales on the upper half of the cheek. Pike also have a more rounded tail fork compared to the musky\'s more pointed tail lobes.',
    },
    {
      question: 'What is the best time of year to catch big pike?',
      answer:
        'Late fall (October and November) and the immediate post-ice-out period in spring produce the largest pike. In fall, pike feed aggressively before winter and are at their heaviest weights. In early spring, pre-spawn females are laden with eggs and at peak size. Summer fishing tends to produce more but smaller fish, while ice fishing can occasionally yield trophy specimens on tip-ups.',
    },
  ],
  imagePath: '/images/species/northern-pike-id.jpg',
  imageAlt: 'A northern pike with olive-green coloring and light spots displayed alongside a fishing rod',
  imageCredit: 'Photo via Unsplash',
};
