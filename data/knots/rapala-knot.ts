import { Knot } from '../types';

export const rapalaKnot: Knot = {
  slug: 'rapala-knot',
  name: 'Rapala Knot',
  description:
    'The Rapala knot creates a non-slip loop that gives lures maximum freedom of movement. Originally designed for Rapala minnow lures, this knot is the top choice whenever you want your bait to swing and dart naturally on a loop rather than being cinched tight to the line.',
  difficulty: 2,
  strengthRating: 85,
  bestFor: [
    'giving lures maximum action',
    'jerkbaits',
    'topwater lures',
    'Rapala lures',
  ],
  lineTypes: ['monofilament', 'fluorocarbon'],
  steps: [
    { step: 1, instruction: 'Tie a loose overhand knot in the line about 6 inches from the tag end. Do not tighten it.' },
    { step: 2, instruction: 'Pass the tag end through the hook eye of the lure.' },
    { step: 3, instruction: 'Pass the tag end back through the overhand knot, entering from the same side it exited.' },
    { step: 4, instruction: 'Wrap the tag end around the standing line 3 times, moving away from the overhand knot.' },
    { step: 5, instruction: 'Pass the tag end back through the overhand knot, again entering from the same side.' },
    { step: 6, instruction: 'Pass the tag end through the large loop that was just formed by the previous step.' },
    { step: 7, instruction: 'Moisten the knot thoroughly with saliva or water. Slowly pull the tag end and standing line to tighten the knot, making sure the loop stays open and the wraps seat neatly.' },
    { step: 8, instruction: 'Trim the tag end close to the knot, leaving about 1/8 inch.' },
  ],
  tips: [
    'Keep the overhand knot loose until the final tightening — if it cinches prematurely, the loop will close and you lose the benefit of this knot.',
    'Use 3 wraps for monofilament up to 12 lb test. For heavier line, 2 wraps may seat better and maintain a cleaner loop.',
    'This knot is not recommended for braided line because the slick surface causes the wraps to slip. Use a loop knot designed for braid instead.',
    'Adjust the loop size by controlling how far from the lure eye you position the overhand knot before tightening.',
  ],
  faq: [
    {
      question: 'When should I use a Rapala knot instead of a Palomar knot?',
      answer:
        'Use a Rapala knot when you want your lure to swing freely on a loop for maximum action, such as with jerkbaits, topwater walkers, and suspending minnow lures. Use a Palomar knot when you want a tight, direct connection for better hooksets, like with jigs and Texas rigs.',
    },
    {
      question: 'Does the Rapala knot work with fluorocarbon?',
      answer:
        'Yes, the Rapala knot works well with fluorocarbon line. Fluorocarbon is stiffer than monofilament, so moisten the knot extra well before tightening and cinch it down slowly to avoid kinking or weakening the line.',
    },
    {
      question: 'How big should the loop be?',
      answer:
        'A loop of about 1/4 to 1/2 inch is ideal for most lures. A loop that is too large can cause the lure to foul on the line during the cast, while a loop that is too small restricts the lure action you are trying to achieve.',
    },
    {
      question: 'Is the Rapala knot strong enough for big fish?',
      answer:
        'At approximately 85% line strength, the Rapala knot is adequate for most freshwater and inshore saltwater fishing. For heavy offshore applications or fish that make long powerful runs, consider a stronger loop knot like the perfection loop or non-slip mono loop.',
    },
  ],
};
