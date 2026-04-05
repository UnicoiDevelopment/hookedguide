import { Technique } from '../types';

export const rodSelectionGuide: Technique = {
  slug: 'rod-selection-guide',
  name: 'Fishing Rod Length, Power, and Action Explained',
  description:
    'Choosing the right fishing rod means understanding three things: length, power, and action. These three specs determine which techniques a rod can handle, how far it casts, how sensitive it is, and how well it fights fish. This guide explains what every rod rating actually means so you can stop guessing and start matching the right rod to the right job.',
  difficulty: 1,
  bestFor: ['largemouth-bass', 'smallmouth-bass', 'walleye', 'crappie', 'channel-catfish', 'redfish'],
  waterTypes: ['lake', 'river', 'pond', 'reservoir', 'saltwater'],
  seasons: ['spring', 'summer', 'fall', 'winter'],
  steps: [
    {
      step: 1,
      title: 'Understand Rod Length',
      description:
        'Fishing rods range from about 5\'6" to 8\' for most freshwater applications. Shorter rods (6\' to 6\'6") give you more accuracy for close-quarters casting around docks, brush, and tight cover. Longer rods (7\' to 7\'6") cast farther, move more line on hooksets, and give you better leverage fighting fish. The most popular all-around length is 7\' — it balances casting distance, accuracy, and fish-fighting ability.',
    },
    {
      step: 2,
      title: 'Understand Rod Power (Weight Rating)',
      description:
        'Power describes how much force it takes to bend the rod. Ultra-light and light power rods bend easily and handle 2-8 lb line and tiny lures. Medium power is the most versatile, handling 6-14 lb line and lures from 1/8 oz to 5/8 oz. Medium-heavy is the workhorse power for bass fishing, handling 10-20 lb line and lures from 3/8 oz to 1 oz. Heavy power rods are for big swimbaits, heavy jigs, and punching mats with 15-25+ lb line.',
    },
    {
      step: 3,
      title: 'Understand Rod Action',
      description:
        'Action describes where the rod bends. Fast action rods flex mostly in the top third — they are very sensitive and set hooks quickly, making them ideal for single-hook lures like jigs, Texas rigs, and worms. Moderate (or moderate-fast) action rods bend into the middle — they load better for casting and keep treble hooks pinned during the fight, making them better for crankbaits, spinnerbaits, and topwater. Slow action rods bend throughout and are mainly used for ultralight or fly fishing.',
    },
    {
      step: 4,
      title: 'Match Rod Specs to Common Techniques',
      description:
        'Texas rig / jigs / worms: 7\' to 7\'3" medium-heavy, fast action. Crankbaits: 7\' medium, moderate action. Drop shot / finesse: 6\'10" to 7\' medium, fast action (spinning). Topwater: 6\'6" to 7\' medium, moderate-fast. Frogging: 7\'2" to 7\'6" heavy, fast action. Swimbaits: 7\'6" to 8\' medium-heavy to heavy, moderate-fast. Flipping/pitching: 7\'2" to 7\'6" heavy, fast action.',
    },
    {
      step: 5,
      title: 'Rod Materials: Graphite vs Fiberglass vs Composite',
      description:
        'Graphite rods are lighter, more sensitive, and stiffer — best for techniques where you need to feel the bite (jigs, worms, bottom contact baits). Fiberglass rods are heavier but have more flex and durability — better for reaction baits with treble hooks (crankbaits, spinnerbaits) because the flex prevents ripping hooks. Composite rods blend both materials for a middle ground.',
    },
    {
      step: 6,
      title: 'One-Piece vs Two-Piece Rods',
      description:
        'One-piece rods have better sensitivity and strength with no ferrule (joint) to create a weak point. Two-piece rods are easier to transport and store. For serious fishing from a boat, one-piece is preferred. For travel, kayak fishing, or bank fishing where you walk a lot, two-piece is practical. The performance gap has narrowed significantly in modern rods.',
    },
    {
      step: 7,
      title: 'Build Your First Rod Collection',
      description:
        'If you only own one rod, make it a 7\' medium power, fast action spinning rod — it covers the most water. For a two-rod arsenal, add a 7\' medium-heavy, fast action casting rod for heavier lures. A solid three-rod setup adds a 7\' medium, moderate-fast casting rod for moving baits. Most tournament anglers carry 6-10 rods on the boat, each purpose-built for a specific technique.',
    },
  ],
  requiredGear: [
    { item: 'All-around spinning rod', description: '7\' medium power, fast action — the one rod every angler needs', tags: ['rod', 'spinning', 'versatile'] },
    { item: 'Workhorse casting rod', description: '7\' medium-heavy, fast action — handles jigs, Texas rigs, and topwater', tags: ['rod', 'casting', 'bass'] },
    { item: 'Moving bait casting rod', description: '7\' medium, moderate-fast action — crankbaits, spinnerbaits, chatterbaits', tags: ['rod', 'casting', 'crankbait'] },
    { item: 'Finesse spinning rod', description: '6\'10" medium-light, fast action — drop shot, ned rig, light line', tags: ['rod', 'spinning', 'finesse'] },
  ],
  commonMistakes: [
    'Using a fast action rod for crankbaits — the stiff tip rips treble hooks out of the fish\'s mouth during the fight.',
    'Buying a heavy power rod as your first rod — it\'s too stiff for most techniques and kills casting distance with normal lures.',
    'Ignoring the line weight rating printed on the rod — exceeding it risks breaking the rod on a hookset or big fish.',
    'Matching a heavy rod with light line or vice versa — the rod and line should be rated for similar ranges.',
    'Spending too much on a rod and skimping on the reel — the reel matters more for smooth operation and durability.',
  ],
  proTips: [
    'The lure weight range printed on the rod is a guideline, not a hard rule. Most rods can comfortably throw 10-20% above or below the printed range.',
    'When in doubt between two power ratings, go lighter. A medium rod that\'s slightly under-powered is more fun to fight fish on and more versatile than a medium-heavy that\'s too stiff for half your lures.',
    'Rod sensitivity matters most for bottom-contact techniques. If you mainly throw reaction baits (crankbaits, spinnerbaits), you don\'t need the most expensive, most sensitive rod.',
    'A longer rod isn\'t always better for distance — proper casting mechanics and matching your lure weight to the rod\'s sweet spot matter more.',
    'High-end rods ($200+) are noticeably lighter and more sensitive than budget rods, but a $100 rod in the right specs will outfish a $300 rod in the wrong specs every time.',
  ],
  faq: [
    {
      question: 'What is the best all-around fishing rod length?',
      answer: 'Seven feet is the most versatile length for freshwater fishing. It casts well, sets hooks effectively, and handles fish from panfish to large bass. A 7\' medium spinning rod or 7\' medium-heavy casting rod covers the widest range of techniques.',
    },
    {
      question: 'What does rod power mean?',
      answer: 'Power is the rod\'s resistance to bending, also called its backbone. Ultralight rods bend under very little pressure (great for trout and panfish). Medium rods handle moderate loads (versatile for many species). Heavy rods resist bending and handle big lures and big fish. Think of power as how much weight the rod is designed to lift.',
    },
    {
      question: 'What is the difference between fast and moderate action?',
      answer: 'Fast action rods bend mostly at the tip — they\'re sensitive and set hooks quickly but can pull hooks on fish with softer mouths. Moderate action rods bend through the middle — they load better for casting distance and keep consistent pressure on fish during the fight, reducing pulled hooks with treble-hook lures.',
    },
    {
      question: 'Should I buy a one-piece or two-piece rod?',
      answer: 'One-piece rods offer slightly better sensitivity and have no ferrule weak point. Choose one-piece if you fish from a boat or have storage space. Choose two-piece if you travel frequently, fish from a kayak, or need to fit rods in a car trunk. Modern two-piece rods are very close in performance to one-piece.',
    },
    {
      question: 'How much should I spend on a fishing rod?',
      answer: 'Quality bass rods start at $80-100 (St. Croix Bass X, Dobyns Fury). The sweet spot is $130-200 where you get significant upgrades in weight and sensitivity. Above $250, diminishing returns kick in. Budget $100-150 for a good rod and put equal or more into your reel.',
    },
    {
      question: 'What rod do I need for bass fishing?',
      answer: 'For most bass fishing, a 7\' medium-heavy, fast action baitcasting rod is the workhorse. It handles Texas rigs, jigs, spinnerbaits, topwater, and most plastics. Add a 7\' medium, fast action spinning rod for finesse techniques like drop shot and ned rig.',
    },
  ],
  imagePath: '/images/techniques/rod-selection-guide.jpg',
  imageAlt: 'Assortment of fishing rods showing different lengths, powers, and actions',
};
