import { Technique } from '../types';

export const dropShot: Technique = {
  slug: 'drop-shot',
  name: 'Drop Shot',
  description:
    'The drop shot is a finesse vertical presentation that suspends your bait above the bottom at a precise depth. Originally developed for pressured smallmouth, it has become one of the most versatile and effective techniques for all three bass species in clear and tough-bite conditions.',
  difficulty: 3,
  bestFor: ['smallmouth-bass', 'spotted-bass', 'largemouth-bass'],
  waterTypes: ['lake', 'river', 'pond', 'reservoir'],
  seasons: ['spring', 'summer', 'fall', 'winter'],
  steps: [
    {
      step: 1,
      title: 'Select Your Hook and Weight',
      description:
        'Choose a #1 to 1/0 drop shot hook (octopus or specialized drop shot style). Select a cylindrical or round drop shot weight between 1/8 oz and 3/8 oz depending on depth and current.',
    },
    {
      step: 2,
      title: 'Tie the Hook Using a Palomar Knot',
      description:
        'Tie the hook in-line using a Palomar knot, leaving a long tag end (12-24 inches). After cinching the knot, pass the tag end back through the hook eye from the top so the hook stands perpendicular to the line.',
    },
    {
      step: 3,
      title: 'Attach the Weight to the Tag End',
      description:
        'Pinch or clip the drop shot weight to the end of the tag line. The distance between the hook and weight determines how far off the bottom your bait sits — start with 8-12 inches.',
    },
    {
      step: 4,
      title: 'Nose-Hook the Bait',
      description:
        'Thread a small finesse worm, minnow bait, or shad-style soft plastic through just the nose. Nose-hooking allows maximum natural action as the bait shakes and quivers.',
    },
    {
      step: 5,
      title: 'Cast or Drop Vertically',
      description:
        'Cast to a target and let the weight sink to the bottom. The drop shot also excels when dropped vertically over structure from a boat. Watch your line for strikes on the initial fall.',
    },
    {
      step: 6,
      title: 'Shake the Bait in Place',
      description:
        'With the weight on the bottom, gently shake your rod tip to impart subtle action to the bait while keeping it in the strike zone. The bait dances in place — this is what makes the drop shot so effective.',
    },
    {
      step: 7,
      title: 'Slowly Drag and Repeat',
      description:
        'After shaking for 10-15 seconds, slowly drag the rig a foot or two and repeat. The weight maintains bottom contact while the bait continues to hover at the set distance above.',
    },
    {
      step: 8,
      title: 'Set the Hook with a Reel Set',
      description:
        'When you feel a bite or see your line move, do not snap-set the hook. Instead, reel down and apply steady upward pressure. The light wire hooks and light line require a controlled hookset.',
    },
  ],
  requiredGear: [
    {
      item: 'Drop Shot Hooks (#1 - 1/0)',
      description:
        'Specialized drop shot hooks with an upturned eye hold the bait perpendicular to the line for optimal action.',
      tags: ['hooks', 'drop-shot', 'finesse', 'bass', 'hook'],
    },
    {
      item: 'Drop Shot Weights (1/8 oz - 3/8 oz)',
      description:
        'Cylindrical tungsten weights clip onto the tag end of the line. Tungsten provides better sensitivity and a smaller profile.',
      tags: ['weights', 'drop-shot', 'tungsten', 'finesse', 'sinker'],
    },
    {
      item: 'Finesse Soft Plastics (3-5 inch)',
      description:
        'Small straight-tail worms, shad shapes, and minnow imitations work best. Roboworm, hand-poured baits, and nose-hookable plastics are top choices.',
      tags: ['soft-plastic', 'finesse', 'drop-shot', 'worm', 'bass'],
    },
    {
      item: 'Spinning Rod (Medium-Light to Medium)',
      description:
        'A 6\'10" to 7\'2" medium-light spinning rod with fast action provides the sensitivity and light touch needed for this finesse technique.',
      tags: ['rod', 'spinning', 'finesse', 'bass', 'medium-light'],
    },
    {
      item: 'Light Fluorocarbon Line (6-8 lb)',
      description:
        'Light fluorocarbon gives the drop shot an invisible presentation in clear water. Braid-to-fluoro leader setups also work well.',
      tags: ['line', 'fluorocarbon', 'finesse', 'light-line'],
    },
  ],
  commonMistakes: [
    'Setting the hook too hard and pulling the bait away from the fish — use a reel set with steady pressure instead.',
    'Using too heavy a line, which restricts the natural movement of the bait and is more visible to wary fish.',
    'Shaking the rod too aggressively — subtle, tight shakes at the rod tip are far more effective than wild movements.',
    'Not adjusting the leader length between hook and weight to match fish positioning in the water column.',
  ],
  proTips: [
    'Use your electronics to see fish and drop the rig right on top of them — the drop shot is the ultimate sight-fishing-with-sonar technique.',
    'In clear water, use light 4-6 lb fluorocarbon and downsize to #2 hooks for a nearly invisible presentation.',
    'Vary the distance between hook and weight: 6 inches for bottom huggers, 18-24 inches when fish are suspended slightly off structure.',
    'When bass are schooled on offshore spots, keep the boat directly above them and drop shot vertically for maximum efficiency.',
    'Reuse the weight system by not tying a knot — most drop shot weights have a pinch clip that holds to any line diameter.',
  ],
  faq: [
    {
      question: 'What is the best bait for a drop shot?',
      answer:
        'A 4-5 inch straight-tail or hand-poured worm in natural colors (morning dawn, green pumpkin, smoke) is the gold standard. Shad-shaped baits work well when bass are feeding on baitfish.',
    },
    {
      question: 'How long should the leader be on a drop shot?',
      answer:
        'Start with 8-12 inches between the hook and weight. Shorten to 4-6 inches when fish are tight to the bottom, and lengthen to 18-24 inches when they are slightly suspended.',
    },
    {
      question: 'Can you use a drop shot from the bank?',
      answer:
        'Absolutely. Cast the drop shot to rocky banks, docks, or any shoreline structure and shake it in place. It is extremely effective from shore, especially for smallmouth on rocky lakes.',
    },
    {
      question: 'Is a drop shot good for beginners?',
      answer:
        'While the technique itself is straightforward, tying the rig correctly takes practice. Once set up properly, it is one of the most forgiving techniques because the bait stays in the strike zone.',
    },
    {
      question: 'Should I use braid or fluorocarbon for drop shot fishing?',
      answer:
        'Many anglers use braided main line (6-10 lb) with a 6-8 lb fluorocarbon leader for the best combination of sensitivity and invisibility. Straight fluorocarbon also works well in 6-8 lb test.',
    },
  ],
  imagePath: '/images/techniques/drop-shot.jpg',
  imageAlt: 'Drop shot rig showing hook tied above weight with a small finesse worm nose-hooked',
};
