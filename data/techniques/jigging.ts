import { Technique } from '../types';

export const jigging: Technique = {
  slug: 'jigging',
  name: 'Jigging',
  description:
    'Jigging is a versatile vertical technique where a weighted lure is worked up and down in the water column to mimic wounded baitfish or crawfish. Effective for bass, walleye, crappie, and many other species, jigging works year-round in virtually any body of water.',
  difficulty: 2,
  bestFor: ['walleye', 'crappie', 'largemouth-bass'],
  waterTypes: ['lake', 'river', 'pond', 'reservoir', 'saltwater'],
  seasons: ['spring', 'summer', 'fall', 'winter'],
  steps: [
    {
      step: 1,
      title: 'Select the Right Jig',
      description:
        'Match your jig to the species and conditions. Use bass jigs (3/8-1/2 oz) with trailers for bass, hair jigs or blade baits for walleye, and small tube jigs or marabou jigs (1/32-1/8 oz) for crappie.',
    },
    {
      step: 2,
      title: 'Position Over Structure',
      description:
        'Use your electronics to locate fish on structure — humps, ledges, brush piles, standing timber, or rock piles. Position your boat directly above or slightly up-current of the structure.',
    },
    {
      step: 3,
      title: 'Lower the Jig to the Bottom',
      description:
        'Drop the jig straight down on controlled, semi-tight line. Watch your depth finder and feel for the jig to hit bottom. Note the depth so you can keep track of where bites occur.',
    },
    {
      step: 4,
      title: 'Establish Your Jigging Cadence',
      description:
        'Lift the rod tip 6-12 inches, then let the jig fall back on a semi-slack line. The lift-and-fall is the foundation of jigging. Vary the speed and height of your lifts until you find what triggers bites.',
    },
    {
      step: 5,
      title: 'Add Pauses and Variations',
      description:
        'Mix in extended pauses at the bottom, sharp snaps, slow lifts, and swimming motions. In cold water, use subtler hops with longer pauses. In warm water, more aggressive snaps work well.',
    },
    {
      step: 6,
      title: 'Detect the Bite',
      description:
        'Most jig bites happen on the fall and feel like a subtle tick, a mushy feeling, or the jig simply feels heavier than normal. Any unusual sensation on the fall should prompt a hookset.',
    },
    {
      step: 7,
      title: 'Set the Hook',
      description:
        'When you detect a bite, reel down to remove slack and sweep the rod upward firmly. For bass jigs, a strong snap-set works best. For crappie and walleye, a gentle lift-set prevents tearing the hook free.',
    },
    {
      step: 8,
      title: 'Work the Area Thoroughly',
      description:
        'If you catch a fish, stay on the spot. Jig the same area multiple times at different depths. Schooling fish often stack on structure, and one catch usually means more are present.',
    },
  ],
  requiredGear: [
    {
      item: 'Assorted Jigs',
      description:
        'Stock a variety of jig styles: bass jigs with weed guards, round-head walleye jigs, tube jig heads, and marabou crappie jigs in 1/32 oz to 3/4 oz.',
      tags: ['jig', 'bass-jig', 'walleye-jig', 'crappie-jig', 'lure'],
    },
    {
      item: 'Jig Trailers',
      description:
        'Soft plastic trailers like craws, chunks, and grubs add bulk, action, and color to your jigs. Match trailer size to jig size.',
      tags: ['soft-plastic', 'trailer', 'craw', 'grub', 'jig'],
    },
    {
      item: 'Sensitive Rod',
      description:
        'A medium to medium-heavy rod with a fast tip allows you to feel subtle bites while having backbone for hooksets. Use a longer rod for vertical jigging from a boat.',
      tags: ['rod', 'baitcasting', 'spinning', 'sensitive'],
    },
    {
      item: 'Low-Stretch Line',
      description:
        'Fluorocarbon or braided line transmits the subtle vibrations and ticks that indicate a jig bite better than monofilament.',
      tags: ['line', 'fluorocarbon', 'braided', 'sensitivity'],
    },
    {
      item: 'Quality Electronics',
      description:
        'A fish finder or depth finder helps locate structure and fish, which is essential for effective vertical jigging from a boat.',
      tags: ['electronics', 'fish-finder', 'sonar'],
    },
  ],
  commonMistakes: [
    'Jigging too aggressively in cold water when fish want a subtle, slow presentation with long pauses.',
    'Not maintaining bottom contact and losing track of where the jig is in the water column.',
    'Ignoring bites on the fall — the majority of jig strikes happen as the bait drops, not on the lift.',
    'Using too heavy a jig in shallow water or too light a jig in deep water, compromising the natural action.',
  ],
  proTips: [
    'Add a piece of live bait (minnow or crawler tip) to your jig trailer for extra scent appeal, especially for walleye and crappie.',
    'When vertical jigging, use your trolling motor to hover over structure and watch your graph for fish reacting to the jig in real time.',
    'In stained water, choose jigs with rattles or blades that produce vibration and sound to help fish locate the bait.',
    'Keep a jig diary noting water temp, depth, cadence, and color for each successful outing — patterns emerge over time.',
    'Swim jigs laterally through shallow cover as an alternative to vertical jigging, covering more water when fish are spread out.',
  ],
  faq: [
    {
      question: 'What is the best jig color?',
      answer:
        'Black/blue is the top producer in stained water and low light. Green pumpkin and brown/orange (crawfish colors) excel in clear water. White and chartreuse work well for mimicking shad.',
    },
    {
      question: 'How do you know when a fish bites a jig?',
      answer:
        'Jig bites often feel like a subtle tap, a mushy heaviness, or your line simply feels different on the fall. Watch for line jumps, sideways movement, or any sensation that was not there on the previous lift.',
    },
    {
      question: 'What is the difference between a casting jig and a vertical jig?',
      answer:
        'Casting jigs (like swim jigs or flipping jigs) are designed to be cast and retrieved horizontally. Vertical jigs (blade baits, spoons, drop jigs) are worked straight up and down beneath the boat.',
    },
    {
      question: 'Can you jig from shore?',
      answer:
        'Yes. Cast a jig to structure and work it back with a lift-drag-pause retrieve. Swim jigs and casting jigs are particularly effective from shore along riprap, docks, and rocky banks.',
    },
  ],
  imagePath: '/images/techniques/jigging.jpg',
  imageAlt: 'Angler vertically jigging over submerged structure with a bass jig and craw trailer',
};
