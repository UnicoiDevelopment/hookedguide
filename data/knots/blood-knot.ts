import { Knot } from '../types';

export const bloodKnot: Knot = {
  slug: 'blood-knot',
  name: 'Blood Knot',
  description: 'A trusted line-to-line knot for joining two lines of similar diameter. The Blood knot is a staple in fly fishing for building tapered leaders and connecting tippet sections. It retains about 85% of line strength and produces a slim, symmetrical connection.',
  difficulty: 3,
  strengthRating: 85,
  bestFor: ['joining two lines of similar diameter', 'fly fishing leaders', 'tippet-to-tippet connections'],
  lineTypes: ['monofilament', 'fluorocarbon'],
  steps: [
    { step: 1, instruction: 'Overlap the ends of the two lines you want to join by about 6-8 inches.' },
    { step: 2, instruction: 'Take the tag end of the first line and wrap it around the second line 5 times, working away from the overlap point.' },
    { step: 3, instruction: 'Bring the tag end of the first line back and pass it between the two lines at the center where they overlap.' },
    { step: 4, instruction: 'Pinch that center opening with your thumb and forefinger to hold the tag end in place.' },
    { step: 5, instruction: 'Take the tag end of the second line and wrap it around the first line 5 times, working in the opposite direction.' },
    { step: 6, instruction: 'Pass the tag end of the second line through the center opening in the opposite direction from the first tag end.' },
    { step: 7, instruction: 'Moisten the knot thoroughly and slowly pull both standing lines in opposite directions to tighten the knot.' },
    { step: 8, instruction: 'Trim both tag ends close to the knot.' },
  ],
  tips: [
    'Both lines should be of similar diameter — if they differ by more than one or two sizes, use a Surgeon\'s knot instead.',
    'The two tag ends must pass through the center loop in opposite directions or the knot will unravel.',
    'Use 5 wraps on each side for standard lines; use 7 wraps for very light tippet material.',
    'Tighten the knot slowly and evenly to ensure the coils seat properly.',
    'This knot is compact and passes through rod guides smoothly, making it ideal for fly leaders.',
  ],
  faq: [
    {
      question: 'Can I use the Blood knot to join lines of different diameters?',
      answer: 'The Blood knot works best when the two lines are of similar diameter — ideally within one or two sizes of each other. If you need to join lines of very different diameters, the Surgeon\'s knot or Alberto knot are better choices, as the Blood knot loses significant strength when line sizes differ greatly.',
    },
    {
      question: 'How many wraps should I use for the Blood knot?',
      answer: 'Use 5 wraps on each side for most line weights. For very fine tippet (6X or 7X), increase to 6-7 wraps per side for extra security. For heavier lines above 20lb, you can reduce to 3-4 wraps per side to keep the knot manageable.',
    },
    {
      question: 'Why is it called a Blood knot?',
      answer: 'The name likely originates from its historical use on the ends of cat-o\'-nine-tails whips, where small knots were tied to draw blood. In fishing, the name stuck simply by tradition. Despite the grim origin, it is one of the most elegant and functional knots in angling.',
    },
    {
      question: 'Is the Blood knot good for braided line?',
      answer: 'No, the Blood knot is not recommended for braided line. Braid is too slippery for the wraps to grip properly, causing the knot to slip. For braid-to-braid or braid-to-leader connections, use a Double Uni knot, Alberto knot, or FG knot instead.',
    },
  ],
};
