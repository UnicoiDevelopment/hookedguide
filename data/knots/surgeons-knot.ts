import { Knot } from '../types';

export const surgeonsKnot: Knot = {
  slug: 'surgeons-knot',
  name: "Surgeon's Knot",
  description: 'One of the easiest and fastest line-to-line knots for connecting two lines together. The Surgeon\'s knot retains about 90% of line strength and is ideal for joining leader to tippet in fly fishing or adding a leader to your main line. It works well even when the two lines differ in diameter.',
  difficulty: 1,
  strengthRating: 90,
  bestFor: ['easy line-to-line connection', 'leader to tippet', 'joining lines of different diameters'],
  lineTypes: ['monofilament', 'fluorocarbon'],
  steps: [
    { step: 1, instruction: 'Lay the two lines side by side with about 6-8 inches of overlap.' },
    { step: 2, instruction: 'Treating both lines as a single strand, form a simple loop with the overlapping section.' },
    { step: 3, instruction: 'Pass both lines through the loop together to form an overhand knot. Do not tighten yet.' },
    { step: 4, instruction: 'Pass both lines through the loop a second time (making it a double overhand knot).' },
    { step: 5, instruction: 'Moisten the knot, then pull all four ends simultaneously to tighten the knot evenly. Trim the tag ends.' },
  ],
  tips: [
    'For maximum strength, pass the lines through the loop three times instead of two, creating a Triple Surgeon\'s knot.',
    'Make sure you pull all four line ends at once when tightening to ensure the knot seats evenly.',
    'This knot is a great alternative to the Blood knot when lines are of different diameters.',
    'The Surgeon\'s knot is bulkier than a Blood knot, so it may not pass through rod guides as smoothly.',
  ],
  faq: [
    {
      question: 'What is the difference between a Surgeon\'s knot and a Blood knot?',
      answer: 'The Surgeon\'s knot is much easier to tie and works well with lines of different diameters, while the Blood knot is slimmer and more streamlined but requires similar diameter lines. The Surgeon\'s knot is slightly stronger (90% vs 85%) but creates a bulkier connection that may not pass through rod guides as smoothly.',
    },
    {
      question: 'Should I use a double or triple Surgeon\'s knot?',
      answer: 'A double Surgeon\'s knot (two passes through the loop) is sufficient for most situations. A triple Surgeon\'s knot (three passes) provides slightly more security and is recommended for slippery fluorocarbon lines or when joining lines of very different diameters.',
    },
    {
      question: 'Can I use the Surgeon\'s knot with braided line?',
      answer: 'While it can work in a pinch, the Surgeon\'s knot is not the best choice for braided line. Braid is slippery and the knot may slip under heavy loads. For braid connections, the Double Uni or Alberto knot are better options.',
    },
  ],
};
