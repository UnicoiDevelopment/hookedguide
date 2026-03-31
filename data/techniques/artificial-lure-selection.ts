import { Technique } from '../types';

export const artificialLureSelection: Technique = {
  slug: 'artificial-lure-selection',
  name: 'Artificial Lure Selection',
  description:
    'Choosing the right artificial lure is one of the most important skills in fishing. Water clarity, forage base, season, and depth all influence which lure will trigger strikes. This guide walks you through a systematic approach to lure selection so you spend less time guessing and more time catching.',
  difficulty: 2,
  bestFor: ['largemouth-bass', 'redfish', 'speckled-trout', 'walleye'],
  waterTypes: ['lake', 'river', 'pond', 'reservoir', 'saltwater'],
  seasons: ['spring', 'summer', 'fall', 'winter'],
  steps: [
    {
      step: 1,
      title: 'Assess Water Clarity',
      description:
        'Before you tie anything on, look at the water. Can you see the bottom in 3 feet of water? That is clear. Can you see your lure at 1 foot? That is stained. If you cannot see your hand at 6 inches, that is muddy. Water clarity dictates color, size, and action choices for every lure you pick.',
    },
    {
      step: 2,
      title: 'Match the Hatch',
      description:
        'Identify what the fish are eating. Look along the shoreline for baitfish, crawfish, or insects. Check stomach contents of any fish you catch. Select a lure that closely mimics the size, shape, and color of the primary forage in that body of water.',
    },
    {
      step: 3,
      title: 'Select the Right Lure Size',
      description:
        'Match your lure size to the forage. In early spring when baitfish are small, downsize to 2 to 3 inch lures. In fall when shad are full-grown, go up to 4 to 6 inches. When in doubt, start smaller — fish are more likely to eat a smaller meal than something that looks unnaturally large.',
    },
    {
      step: 4,
      title: 'Choose Color Based on Clarity',
      description:
        'In clear water, use natural and translucent colors like shad, ghost minnow, and green pumpkin. In stained water, switch to brighter colors like chartreuse, orange, and firetiger. In muddy water, go dark (black, junebug, black/blue) or use lures with strong vibration and rattle.',
    },
    {
      step: 5,
      title: 'Pick the Right Action Type',
      description:
        'Aggressive fish respond to fast-moving reaction baits like spinnerbaits, crankbaits, and jerkbaits. Lethargic fish in cold or pressured water prefer slow presentations like soft plastics, ned rigs, and finesse jigs. Read the mood of the fish and adjust your lure action accordingly.',
    },
    {
      step: 6,
      title: 'Consider the Target Depth',
      description:
        'Use topwater lures when fish are feeding on the surface. Choose shallow-diving crankbaits for 2 to 5 feet, medium divers for 6 to 12 feet, and deep divers or jigs for anything over 12 feet. Your lure must reach the depth where fish are holding to get bit.',
    },
    {
      step: 7,
      title: 'Test and Adjust Your Retrieve',
      description:
        'Start with a steady retrieve and vary your speed until you get a response. Try pausing, twitching, burning, and slow-rolling. Many strikes come on a change of pace, so mix in erratic movements that mimic injured or fleeing prey.',
    },
    {
      step: 8,
      title: 'Switch If It Is Not Working',
      description:
        'Give a lure 15 to 20 minutes of focused effort before switching. If fish are following but not committing, change color or downsize. If you are getting no interest at all, change lure type entirely. Do not fall into the trap of throwing the same bait all day because it worked last time.',
    },
  ],
  requiredGear: [
    {
      item: 'Assorted Soft Plastics',
      description:
        'Stock worms, creature baits, swimbaits, and tubes in natural and bright colors. Soft plastics are the most versatile artificial bait category and can be rigged dozens of ways.',
      tags: ['soft-plastic', 'worm', 'swimbait', 'creature-bait', 'bass'],
    },
    {
      item: 'Crankbaits (Shallow, Medium, Deep)',
      description:
        'Carry a selection of crankbaits that cover the water column from 2 feet to 20-plus feet. Square-bill crankbaits for shallow cover, round-bill for medium depth, and deep-diving models for offshore structure.',
      tags: ['crankbait', 'hard-bait', 'bass', 'walleye'],
    },
    {
      item: 'Spinnerbaits and Chatterbaits',
      description:
        'Bladed baits create flash and vibration that draw strikes in stained and muddy water. Keep white/chartreuse and shad-colored versions in 3/8 oz and 1/2 oz sizes.',
      tags: ['spinnerbait', 'chatterbait', 'bladed-jig', 'bass', 'reaction-bait'],
    },
    {
      item: 'Topwater Lures',
      description:
        'Poppers, walking baits, buzzbaits, and frogs cover surface fishing situations. Topwater produces explosive strikes in low-light conditions and over shallow cover.',
      tags: ['topwater', 'popper', 'buzzbait', 'frog', 'bass'],
    },
  ],
  commonMistakes: [
    'Using the wrong lure color for the water clarity — bright colors in clear water spook fish, and natural colors in muddy water are invisible.',
    'Throwing lures that are too large for the current forage size, resulting in fewer strikes from all but the biggest fish.',
    'Not matching the hatch — ignoring what the fish are actually eating and relying on a favorite lure instead.',
    'Sticking with a non-producing lure for too long instead of adapting to what the fish want that day.',
  ],
  proTips: [
    'Carry a small pair of binoculars to observe baitfish activity on the surface from a distance. This tells you what size and species to imitate.',
    'When fish short-strike a lure, add a trailer hook or downsize rather than setting the hook harder.',
    'In heavily pressured waters, use colors and lure styles that other anglers are not throwing — sometimes an unusual presentation triggers reaction strikes.',
    'Keep a fishing journal noting what lure, color, and retrieve worked on each outing so you can identify patterns over time.',
  ],
  faq: [
    {
      question: 'What is the best all-around artificial lure?',
      answer:
        'A 5-inch soft plastic stick bait like a Senko-style worm is arguably the most versatile lure in fishing. It can be rigged weightless, Texas-rigged, wacky-rigged, or on a drop shot and catches bass, walleye, and many other species in all conditions.',
    },
    {
      question: 'How do I choose lure color?',
      answer:
        'Follow the water clarity rule: natural and translucent colors for clear water, chartreuse and bright colors for stained water, and dark or vibrating lures for muddy water. When in doubt, green pumpkin works in most freshwater situations.',
    },
    {
      question: 'Should I use scented artificial lures?',
      answer:
        'Scented soft plastics can help fish hold the bait longer before spitting it, giving you more time to set the hook. Garlic and anise are popular scent additives. Scent matters most in slow presentations where fish mouth the bait before committing.',
    },
    {
      question: 'How many lures should a beginner carry?',
      answer:
        'Start with five versatile options: a soft plastic stick bait, a spinnerbait, a shallow crankbait, a topwater popper, and a jig. In a few colors each, this covers most situations you will encounter without overwhelming your tackle box.',
    },
    {
      question: 'Do expensive lures catch more fish than cheap ones?',
      answer:
        'Premium lures often have better hooks, more consistent action, and more durable finishes, but a well-presented budget lure will outfish a poorly presented expensive one every time. Invest in quality hooks and upgrade the hooks on cheaper hard baits for the best value.',
    },
  ],
  imagePath: '/images/techniques/artificial-lure-selection.jpg',
  imageAlt: 'Assortment of artificial fishing lures including crankbaits, soft plastics, and spinnerbaits organized by color',
};
