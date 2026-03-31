import { Knot } from '../types';

export const uniKnot: Knot = {
  slug: 'uni-knot',
  name: 'Uni Knot',
  description: 'An extremely versatile terminal knot that works with all line types including braided line. Also known as the Duncan Loop or Grinner knot, the Uni knot retains about 90% of line strength and can be used for hooks, lures, swivels, and even line-to-line connections when doubled as the Double Uni.',
  difficulty: 2,
  strengthRating: 90,
  bestFor: ['versatile terminal knot', 'works with braided line', 'hooks, lures, and swivels'],
  lineTypes: ['monofilament', 'fluorocarbon', 'braided'],
  steps: [
    { step: 1, instruction: 'Thread about 8 inches of line through the eye of the hook or lure.' },
    { step: 2, instruction: 'Bring the tag end back parallel to the standing line, forming a double strand.' },
    { step: 3, instruction: 'Make a loop by bending the tag end back toward the hook eye, creating a circle that overlaps both the tag end and standing line.' },
    { step: 4, instruction: 'Wrap the tag end through the loop and around the double strand 5 to 6 times, working toward the hook.' },
    { step: 5, instruction: 'Moisten the knot with saliva or water.' },
    { step: 6, instruction: 'Pull the tag end to snug the wraps together into a tight coil.' },
    { step: 7, instruction: 'Pull the standing line to slide the knot down against the eye of the hook. Trim the tag end.' },
  ],
  tips: [
    'Use 6-8 wraps when tying with braided line to prevent slipping, and 4-5 wraps for mono or fluorocarbon.',
    'You can leave the knot slightly loose to create a loop knot that gives lures more action in the water.',
    'The Uni knot is the foundation for the Double Uni knot used in line-to-line connections.',
    'Pull the knot tight in two stages: first snug the coils, then slide the knot to the eye.',
  ],
  faq: [
    {
      question: 'Is the Uni knot the same as the Duncan Loop?',
      answer: 'Yes, the Uni knot and the Duncan Loop are the same knot. Norman Duncan originally developed it, and it was later popularized under the name "Uni knot" by outdoor writer Vic Dunaway. Some anglers also call it the Grinner knot, particularly in Europe and Australia.',
    },
    {
      question: 'How many wraps should I use with braided line?',
      answer: 'Use 6-8 wraps when tying a Uni knot with braided line. Braid is much more slippery than monofilament, so extra wraps are needed to prevent the knot from slipping under load. With mono or fluoro, 4-5 wraps are sufficient.',
    },
    {
      question: 'Can I use the Uni knot as a loop knot?',
      answer: 'Yes. If you do not slide the knot all the way down to the hook eye, the Uni knot functions as a loop knot. This gives your lure more freedom of movement in the water, which can be beneficial for jerkbaits and other lures that benefit from extra action.',
    },
  ],
};
