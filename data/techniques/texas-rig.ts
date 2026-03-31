import { Technique } from '../types';

export const texasRig: Technique = {
  slug: 'texas-rig',
  name: 'Texas Rig',
  description:
    'The Texas rig is the number one bass fishing technique in America. This weedless soft plastic presentation lets you fish heavy cover without snagging, making it deadly for largemouth and spotted bass in virtually any body of water year-round.',
  difficulty: 2,
  bestFor: ['largemouth-bass', 'spotted-bass'],
  waterTypes: ['lake', 'river', 'pond', 'reservoir'],
  seasons: ['spring', 'summer', 'fall', 'winter'],
  steps: [
    {
      step: 1,
      title: 'Select Your Hook and Weight',
      description:
        'Choose a 3/0 to 5/0 offset worm hook based on your soft plastic size. Pair it with a bullet weight between 1/8 oz and 1/2 oz depending on depth and cover density. Heavier weights punch through vegetation; lighter weights give a more natural fall.',
    },
    {
      step: 2,
      title: 'Thread the Bullet Weight onto Your Line',
      description:
        'Slide the bullet sinker onto your main line with the pointed end facing the rod tip. The weight should slide freely unless you peg it with a toothpick or bobber stop for punching through heavy mats.',
    },
    {
      step: 3,
      title: 'Tie On the Hook',
      description:
        'Tie your offset worm hook to the line using a Palomar knot or improved clinch knot. Make sure the hook point faces up when the bait is rigged.',
    },
    {
      step: 4,
      title: 'Rig the Soft Plastic',
      description:
        'Insert the hook point into the head of the worm about 1/4 inch, then push it through and out the side. Slide the worm up the hook shank, rotate the hook 180 degrees, and push the point back into the body of the worm so it sits skin-deep and weedless.',
    },
    {
      step: 5,
      title: 'Cast to Cover',
      description:
        'Target laydowns, docks, weed edges, brush piles, and rocky banks. Flip or pitch to tight spots, or make longer casts to open flats when fish are roaming.',
    },
    {
      step: 6,
      title: 'Let the Bait Sink',
      description:
        'After the bait hits the water, keep your rod tip up slightly and watch your line as the bait sinks on a semi-slack line. Many strikes happen on the initial fall, so stay alert for any sideways line movement or a subtle tick.',
    },
    {
      step: 7,
      title: 'Work the Bait Along the Bottom',
      description:
        'Once the bait reaches the bottom, use a slow lift-and-drag motion with your rod tip. Reel up slack on the drop, then lift again. Pause frequently near cover to let the bait sit.',
    },
    {
      step: 8,
      title: 'Detect the Bite and Set the Hook',
      description:
        'Feel for a mushy heaviness, a sharp tap, or see your line jump. Lower your rod tip, reel in slack until you feel weight, then drive the hook home with a firm upward sweep. Keep steady pressure to pull the fish away from cover.',
    },
  ],
  requiredGear: [
    {
      item: 'Offset Worm Hooks (3/0-5/0)',
      description:
        'Wide-gap offset hooks are essential for proper Texas rig presentation. The offset bend keeps the bait secure while the wide gap improves hookup ratio.',
      tags: ['hooks', 'worm-hook', 'bass', 'texas-rig', 'soft-plastic'],
    },
    {
      item: 'Bullet Weights (1/8 oz - 1/2 oz)',
      description:
        'Tungsten or lead bullet sinkers slide onto the line ahead of the hook. Tungsten is smaller and more sensitive; lead is more affordable.',
      tags: ['weights', 'bullet-weight', 'sinker', 'texas-rig', 'bass'],
    },
    {
      item: 'Soft Plastic Worms (6-10 inch)',
      description:
        'Ribbon-tail worms, straight-tail worms, and creature baits are the most popular Texas rig trailers. Stock a variety of natural and dark colors.',
      tags: ['soft-plastic', 'worm', 'creature-bait', 'texas-rig', 'bass'],
    },
    {
      item: 'Medium-Heavy Baitcasting Rod',
      description:
        'A 7-foot medium-heavy fast-action rod provides the backbone for solid hooksets and the sensitivity to detect subtle bites through cover.',
      tags: ['rod', 'baitcasting', 'bass', 'medium-heavy'],
    },
    {
      item: 'Fluorocarbon Line (12-17 lb)',
      description:
        'Fluorocarbon is nearly invisible underwater and sinks, keeping direct contact with your bait. It also has excellent abrasion resistance for fishing around cover.',
      tags: ['line', 'fluorocarbon', 'bass'],
    },
  ],
  commonMistakes: [
    'Setting the hook too fast before the fish has the bait — wait until you feel solid weight before swinging.',
    'Using too heavy a bullet weight in shallow water, causing an unnatural splash and overly fast fall.',
    'Not keeping your line semi-tight on the fall, which causes you to miss subtle strikes.',
    'Rigging the hook point too deep in the plastic, making hooksets difficult — keep the point just under the skin.',
    'Fishing too fast — the Texas rig is at its best with a slow, methodical approach.',
  ],
  proTips: [
    'Peg your weight with a bobber stop when punching through thick matted vegetation so the sinker and bait enter together.',
    'Dip your soft plastic in garlic or anise scent to encourage bass to hold the bait longer, giving you more time to set the hook.',
    'In cold water, downsize to a 4-inch finesse worm with a 1/8 oz weight for a slower, subtler presentation.',
    'Use a tungsten weight instead of lead — it transmits bottom composition (rock, sand, wood) much better through the rod.',
  ],
  faq: [
    {
      question: 'What is the best hook size for a Texas rig?',
      answer:
        'A 3/0 offset worm hook works for most 6-inch worms, while a 4/0 or 5/0 is better for larger 8-10 inch worms and creature baits. Match the hook gap to the thickness of your plastic.',
    },
    {
      question: 'Should I use a pegged or free-sliding weight?',
      answer:
        'Use a free-sliding weight in most situations for a more natural presentation. Peg the weight when flipping into heavy cover so the bait and weight enter the mat together.',
    },
    {
      question: 'What is the best line for Texas rig fishing?',
      answer:
        'Fluorocarbon in 12-17 lb test is the most popular choice because it sinks, is abrasion resistant, and is nearly invisible. Use braided line (30-50 lb) when punching through heavy vegetation.',
    },
    {
      question: 'Can you Texas rig with a spinning rod?',
      answer:
        'Yes, especially for finesse Texas rigs with lighter weights (1/16-1/8 oz). Use a medium-power spinning rod with 6-10 lb fluorocarbon or braided line with a fluorocarbon leader.',
    },
    {
      question: 'What colors work best for Texas rig worms?',
      answer:
        'Green pumpkin, junebug, black/blue, and watermelon red are top producers in most conditions. Use darker colors in stained water and more natural/translucent colors in clear water.',
    },
  ],
  imagePath: '/images/techniques/texas-rig.jpg',
  imageAlt: 'Texas rig setup with offset worm hook threaded through a soft plastic worm with bullet weight',
};
