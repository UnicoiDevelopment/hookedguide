import { Knot } from '../types';

export const improvedClinchKnot: Knot = {
  slug: 'improved-clinch-knot',
  name: 'Improved Clinch Knot',
  description: 'A classic and widely used fishing knot for attaching hooks, lures, and swivels to monofilament or fluorocarbon line. The Improved Clinch knot retains about 90% of line strength and is one of the first knots most anglers learn.',
  difficulty: 1,
  strengthRating: 90,
  bestFor: ['hooks and lures to monofilament', 'hooks and lures to fluorocarbon', 'general terminal connections'],
  lineTypes: ['monofilament', 'fluorocarbon'],
  steps: [
    { step: 1, instruction: 'Thread about 6 inches of line through the eye of the hook or lure.' },
    { step: 2, instruction: 'Wrap the tag end around the standing line 5 to 7 times, working away from the hook eye.' },
    { step: 3, instruction: 'Pass the tag end through the small loop formed just above the eye of the hook.' },
    { step: 4, instruction: 'Then pass the tag end through the large loop you just created by going through the small loop.' },
    { step: 5, instruction: 'Moisten the knot with saliva or water and slowly pull the standing line to tighten the knot against the eye.' },
    { step: 6, instruction: 'Trim the tag end close to the knot, leaving about 1/8 inch.' },
  ],
  tips: [
    'Use 5 wraps for lines over 20lb test and up to 7 wraps for lighter lines to maximize strength.',
    'Always pass the tag end through the final big loop — this is what makes it the "improved" version and prevents the knot from unraveling.',
    'Wet the knot before tightening to prevent friction damage to the line.',
    'This knot is not recommended for braided line as it tends to slip; use a Palomar or Uni knot instead.',
    'Pull the knot tight slowly and steadily rather than with a quick jerk.',
  ],
  faq: [
    {
      question: 'What is the difference between the Clinch knot and the Improved Clinch knot?',
      answer: 'The standard Clinch knot only passes the tag end through the small loop above the hook eye. The Improved Clinch adds one extra step: after passing through the small loop, the tag end is also passed through the larger loop that forms. This extra tuck prevents the knot from slipping under heavy loads and significantly increases reliability.',
    },
    {
      question: 'How many wraps should I use for the Improved Clinch knot?',
      answer: 'Use 5 wraps for heavier lines (20lb test and above) and 6-7 wraps for lighter lines (under 20lb). Too many wraps on heavy line makes the knot bulky and hard to tighten properly, while too few wraps on light line reduces strength.',
    },
    {
      question: 'Can I use the Improved Clinch knot with braided line?',
      answer: 'It is not recommended. Braided line is very slippery and the Improved Clinch knot tends to slip and fail with braid. For braided line, use a Palomar knot, Uni knot, or a knot specifically designed for braid.',
    },
  ],
};
