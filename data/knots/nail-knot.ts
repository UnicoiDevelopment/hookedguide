import { Knot } from '../types';

export const nailKnot: Knot = {
  slug: 'nail-knot',
  name: 'Nail Knot',
  description: 'A specialized fly fishing knot used to connect the fly line to the leader butt section. The Nail knot creates a smooth, compact connection that passes through rod guides easily and retains about 90% of line strength. It gets its name from the nail or tube used as a tying aid.',
  difficulty: 4,
  strengthRating: 90,
  bestFor: ['fly line to leader connection', 'fly fishing', 'smooth guide transitions'],
  lineTypes: ['monofilament'],
  steps: [
    { step: 1, instruction: 'Lay the end of the fly line, a small nail or hollow tube, and the butt end of the leader parallel to each other with about 6 inches of overlap.' },
    { step: 2, instruction: 'Pinch all three together (fly line, nail, and leader) about 2 inches from the end of the fly line.' },
    { step: 3, instruction: 'Wrap the leader butt section back toward the end of the fly line, making 5-6 neat, tight wraps over the fly line and the nail.' },
    { step: 4, instruction: 'After completing the wraps, pass the leader butt end through the space created by the nail or through the hollow tube.' },
    { step: 5, instruction: 'Carefully slide the nail or tube out while holding the wraps in place.' },
    { step: 6, instruction: 'Moisten the knot and slowly pull both ends of the leader to begin tightening the wraps around the fly line.' },
    { step: 7, instruction: 'Pull the standing leader and the fly line in opposite directions to fully tighten the knot.' },
    { step: 8, instruction: 'Trim both the leader tag end and the fly line tag end close to the knot. Apply a coat of flexible cement or UV knot sense for a smooth finish.' },
  ],
  tips: [
    'A small hollow tube (like a coffee straw) is easier to use than an actual nail and works just as well.',
    'Keep wraps tight and neat — sloppy wraps will create a bumpy knot that catches in the guides.',
    'Use heavy leader butt material (25-30lb) for this connection, as it provides a better grip on the slick fly line coating.',
    'Nail knot tools are inexpensive and make this knot much easier to tie on the water.',
    'Apply UV-cure knot sealant for the smoothest possible finish that glides through guides.',
  ],
  faq: [
    {
      question: 'Do I need an actual nail to tie a Nail knot?',
      answer: 'No. While the knot is traditionally tied using a small nail as a guide, most anglers today use a small hollow tube, a coffee straw, or a dedicated nail knot tool. A hollow tube is actually easier because you can thread the leader through it rather than sliding it alongside a solid nail.',
    },
    {
      question: 'Can I use a loop-to-loop connection instead of a Nail knot?',
      answer: 'Yes, many modern fly lines come with a welded loop at the end, allowing a simple loop-to-loop connection to the leader. While this is much easier, a Nail knot creates a slimmer, smoother connection that passes through guides more cleanly. For serious fly fishing, the Nail knot is the superior option.',
    },
    {
      question: 'How often should I retie my Nail knot?',
      answer: 'A well-tied Nail knot can last an entire season or longer. Inspect it periodically for signs of wear, cracking, or loosening. Retie it if you notice any damage or if the knot starts to feel rough as it passes through your guides.',
    },
    {
      question: 'What size leader butt should I use for the Nail knot?',
      answer: 'Use a leader butt section of 25-30lb monofilament for the strongest grip on the fly line. The stiff, heavy mono wraps securely around the fly line coating. Thinner leader material does not grip as well and is more likely to cut into the fly line coating under pressure.',
    },
  ],
};
