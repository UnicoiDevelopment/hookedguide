import { Technique } from '../types';

export const driftFishing: Technique = {
  slug: 'drift-fishing',
  name: 'Drift Fishing',
  description:
    'Drift fishing uses wind or current to move the boat while presenting bait naturally along the bottom or at a controlled depth. This technique covers large areas of water efficiently and puts the bait in front of more fish than anchoring in one spot. It excels for walleye, flounder, and inshore saltwater species.',
  difficulty: 2,
  bestFor: ['walleye', 'flounder', 'redfish'],
  waterTypes: ['river', 'saltwater'],
  seasons: ['spring', 'summer', 'fall'],
  steps: [
    {
      step: 1,
      title: 'Check Wind and Current',
      description:
        'Assess wind speed and current direction before deploying. Ideal drift speed is 0.3-1.5 mph depending on species. Use a GPS to track drift speed and adjust with a drift sock if needed.',
    },
    {
      step: 2,
      title: 'Deploy a Drift Sock (If Needed)',
      description:
        'A drift sock or sea anchor slows the boat in strong wind. Deploy from the bow to drift bow-first, or from the stern to drift stern-first. Match drift sock size to boat size and wind conditions.',
    },
    {
      step: 3,
      title: 'Rig Your Bait',
      description:
        'Use a bottom bouncer, three-way rig, or Carolina-style rig to keep bait near the bottom during the drift. Adjust weight based on depth and drift speed — the bait should tick bottom occasionally.',
    },
    {
      step: 4,
      title: 'Select the Right Weight',
      description:
        'Use just enough weight to maintain bottom contact at your drift speed. Start with 1/4 oz in shallow calm water and increase up to 1 oz or more in deep water or strong current. If you are snagging constantly, reduce weight slightly.',
    },
    {
      step: 5,
      title: 'Lower Bait and Begin the Drift',
      description:
        'Lower your bait to the bottom, engage the reel, and begin drifting. Keep your rod tip up at a 45-degree angle so you can detect bites and maintain bottom contact.',
    },
    {
      step: 6,
      title: 'Maintain Bottom Contact',
      description:
        'Periodically lift and drop your rod tip to check that you are still touching bottom. If you lose contact, let out more line. If you are dragging too much, reel in. The bait should tap bottom every few seconds.',
    },
    {
      step: 7,
      title: 'Detect Bites',
      description:
        'Feel for a tap-tap, a sudden heaviness, or the rod tip loading up. Walleye bites are notoriously subtle — any change in what you feel on the bottom could be a fish. Flounder often feel like extra weight.',
    },
    {
      step: 8,
      title: 'Set the Hook and Reset',
      description:
        'When you feel a bite, reel down and sweep the rod upward. After landing or losing a fish, motor back up-drift of the productive area and drift through again. Multiple passes through a productive zone can yield limits.',
    },
  ],
  requiredGear: [
    {
      item: 'Drift Sock / Sea Anchor',
      description:
        'A fabric cone that drags through the water to slow boat drift. Essential for controlling speed in windy conditions.',
      tags: ['drift-sock', 'sea-anchor', 'drift-fishing', 'accessory', 'boat'],
    },
    {
      item: 'Bottom Bouncers',
      description:
        'L-shaped wire weights that bounce along the bottom while keeping the bait above snags. A walleye drift-fishing staple.',
      tags: ['bottom-bouncer', 'weights', 'walleye', 'drift-fishing'],
    },
    {
      item: 'Medium-Action Spinning Rod',
      description:
        'A 6\'6" to 7-foot medium-action spinning rod provides bite detection sensitivity and a soft enough tip to avoid pulling hooks on subtle strikes.',
      tags: ['rod', 'spinning', 'walleye', 'drift-fishing', 'medium'],
    },
    {
      item: 'Live Bait (Minnows, Leeches, Crawlers)',
      description:
        'Live bait is the most common choice for drift fishing. Minnows and leeches for walleye, shrimp and cut bait for saltwater species.',
      tags: ['live-bait', 'minnow', 'leech', 'crawler', 'walleye'],
    },
    {
      item: 'GPS / Fish Finder',
      description:
        'Monitor drift speed, mark productive drifts, and locate structure and baitfish concentrations for repeated passes.',
      tags: ['electronics', 'gps', 'fish-finder', 'drift-fishing'],
    },
  ],
  commonMistakes: [
    'Drifting too fast and blowing past fish — use a drift sock to control speed to the ideal 0.3-1.5 mph range.',
    'Not maintaining bottom contact, which means your bait is floating above the fish in the water column.',
    'Failing to re-drift productive areas — when you catch a fish, mark the spot and drift through it again.',
    'Using too heavy a weight, which makes it impossible to detect the subtle bites typical of walleye and flounder.',
  ],
  proTips: [
    'Drift along depth contours rather than across them — this keeps your bait in the productive depth zone for the entire drift.',
    'Use a marker buoy when you catch a fish so you can return to the exact spot for another drift.',
    'Tip your jig or hook with live bait for the best of both worlds: the flash and action of artificial with the scent of live bait.',
    'On calm days with no wind, use your trolling motor on low to create a slow, controlled drift over structure.',
  ],
  faq: [
    {
      question: 'How fast should I drift fish?',
      answer:
        'For walleye, 0.3-0.8 mph is ideal. For flounder, 0.5-1.0 mph. For redfish, 0.5-1.5 mph. Use a GPS for accurate readings and deploy a drift sock if you are moving too fast.',
    },
    {
      question: 'What is the difference between drift fishing and trolling?',
      answer:
        'Drift fishing uses wind or current to move the boat passively, while trolling uses the motor. Drift fishing typically presents bait vertically or at short distances, while trolling pulls lures horizontally behind the boat.',
    },
    {
      question: 'Can I drift fish from shore?',
      answer:
        'River anglers can use current to drift bait downstream from a bank position. Cast upstream and let the current carry a light jig or bait rig naturally downstream through holding areas.',
    },
    {
      question: 'What is a bottom bouncer?',
      answer:
        'A bottom bouncer is an L-shaped wire weight that keeps your bait above the bottom while the wire arm bounces along the substrate. It greatly reduces snags compared to traditional sinkers and is a staple of Midwest walleye fishing.',
    },
  ],
  imagePath: '/images/techniques/drift-fishing.jpg',
  imageAlt: 'Boat drifting with a drift sock deployed while anglers present bait along the bottom',
};
