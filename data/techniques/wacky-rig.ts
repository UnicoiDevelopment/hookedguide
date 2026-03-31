import { Technique } from '../types';

export const wackyRig: Technique = {
  slug: 'wacky-rig',
  name: 'Wacky Rig',
  description:
    'The wacky rig is one of the easiest and most effective bass fishing techniques ever devised. By hooking a stick worm through the middle, both ends flutter and undulate on the fall, creating an irresistible action that triggers reaction strikes from even the most reluctant bass.',
  difficulty: 1,
  bestFor: ['largemouth-bass', 'smallmouth-bass'],
  waterTypes: ['lake', 'pond', 'reservoir'],
  seasons: ['spring', 'summer', 'fall'],
  steps: [
    {
      step: 1,
      title: 'Choose a Senko-Style Stick Worm',
      description:
        'Select a 4-6 inch straight stick worm like a Yamamoto Senko, YUM Dinger, or similar. The dense, salt-impregnated body provides the weight needed for casting and the signature shimmy on the fall.',
    },
    {
      step: 2,
      title: 'Add a Wacky Rig O-Ring (Optional)',
      description:
        'Slide a small O-ring to the center of the worm using a wacky tool. Hooking through the O-ring instead of the worm itself extends the life of each bait dramatically.',
    },
    {
      step: 3,
      title: 'Hook Through the Center',
      description:
        'Push a #1 to 2/0 wacky hook or octopus hook through the egg sac (center) of the worm, or through the O-ring. Both ends should hang evenly on each side.',
    },
    {
      step: 4,
      title: 'Use Spinning Tackle',
      description:
        'A 6\'6" to 7-foot medium spinning rod with 6-10 lb fluorocarbon or braid with a leader is ideal. The weightless rig casts best on spinning gear.',
    },
    {
      step: 5,
      title: 'Cast to Cover',
      description:
        'Target docks, overhanging trees, weed edges, seawalls, and any visible cover. The wacky rig is at its best when cast right next to or under structure.',
    },
    {
      step: 6,
      title: 'Let It Fall on Slack Line',
      description:
        'After the bait lands, let it sink on completely slack line. The slow, fluttering fall with both ends waving is what triggers strikes. Do not impart any action — the bait does the work.',
    },
    {
      step: 7,
      title: 'Watch for the Bite',
      description:
        'Most strikes come on the initial fall. Watch your line for any twitch, jump, or sideways movement. If the line moves or feels heavy when you pick it up, set the hook.',
    },
    {
      step: 8,
      title: 'Pop and Repeat',
      description:
        'If the bait reaches the bottom with no bite, give it one or two gentle pops with the rod tip, then let it flutter back down. Repeat this until the bait is back to the boat, then recast.',
    },
  ],
  requiredGear: [
    {
      item: 'Senko-Style Stick Worms (4-6 inch)',
      description:
        'Dense, salt-impregnated stick worms that provide casting weight and the signature wacky rig flutter. Yamamoto Senko is the gold standard.',
      tags: ['soft-plastic', 'senko', 'stick-worm', 'wacky-rig', 'bass'],
    },
    {
      item: 'Wacky Hooks (#1 - 2/0)',
      description:
        'Wide-gap wacky-specific hooks or octopus hooks provide a solid hookup. Weedless versions with a wire guard are available for light cover.',
      tags: ['hooks', 'wacky-hook', 'bass', 'wacky-rig'],
    },
    {
      item: 'O-Rings and Wacky Tool',
      description:
        'Small silicone O-rings slid onto the worm save bait by allowing you to hook through the ring instead of the soft plastic.',
      tags: ['accessory', 'o-ring', 'wacky-rig', 'wacky-tool'],
    },
    {
      item: 'Medium Spinning Rod',
      description:
        'A 7-foot medium-power spinning rod with moderate-fast action provides enough backbone for hooksets while casting weightless baits effectively.',
      tags: ['rod', 'spinning', 'bass', 'medium'],
    },
    {
      item: 'Fluorocarbon Line (8-10 lb)',
      description:
        'Fluorocarbon sinks and is nearly invisible, enhancing the natural fall of the wacky rig. Braided main line with a fluoro leader also works.',
      tags: ['line', 'fluorocarbon', 'bass'],
    },
  ],
  commonMistakes: [
    'Adding too much action — the wacky rig works best when you let the bait fall naturally with minimal rod input.',
    'Not watching the line closely on the fall. Most bites are subtle line movements, not hard thuds.',
    'Skipping the O-ring and burning through expensive stick worms. One O-ring can save a dozen baits.',
    'Using too heavy a hook that dampens the fluttering action of the worm ends.',
  ],
  proTips: [
    'Add a small nail weight (1/32 oz) to one end of the worm to create a different fall angle and get deeper faster.',
    'On windy days, the wacky rig drifts naturally under floating docks and overhangs — use the wind to your advantage.',
    'Green pumpkin and watermelon are the best all-around colors. Switch to black/blue in heavily stained water.',
    'The wacky rig is deadly during the spawn when bass are on beds — the slow, taunting fall drives bedding fish crazy.',
  ],
  faq: [
    {
      question: 'Where do you hook a wacky rig worm?',
      answer:
        'Hook the worm through the middle (the egg sac area). Both ends should hang evenly on each side of the hook. Use an O-ring around the middle to extend bait life.',
    },
    {
      question: 'What is the best worm for wacky rigging?',
      answer:
        'A 5-inch Yamamoto Senko or similar salt-impregnated stick worm is the classic choice. The dense body provides casting weight and the perfect shimmy on the fall.',
    },
    {
      question: 'Can you wacky rig in weeds?',
      answer:
        'Standard wacky rigs snag easily in vegetation. Use a weedless wacky hook with a wire guard or a wacky jig head with a built-in guard for fishing around light cover.',
    },
    {
      question: 'How deep can you fish a wacky rig?',
      answer:
        'Weightless wacky rigs work best in 1-10 feet of water. For deeper presentations, add a small nail weight to one end or use a weighted wacky jig head.',
    },
  ],
  imagePath: '/images/techniques/wacky-rig.jpg',
  imageAlt: 'Wacky rig showing a stick worm hooked through the middle with both ends hanging down',
};
