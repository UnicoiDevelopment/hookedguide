import { Knot } from '../types';

export const arborKnot: Knot = {
  slug: 'arbor-knot',
  name: 'Arbor Knot',
  description:
    'The arbor knot attaches fishing line to a reel spool and is the first knot you tie when spooling new line. It is a simple two-overhand-knot system that grips the spool arbor and prevents the line from spinning freely. While it is not a high-strength connection, it only needs to hold the line to the spool since you should never fight a fish down to the arbor.',
  difficulty: 1,
  strengthRating: 60,
  bestFor: [
    'spooling new line on any reel',
    'attaching line to spinning reel spools',
    'attaching line to baitcasting reel spools',
    'first knot when re-spooling',
  ],
  lineTypes: ['monofilament', 'fluorocarbon', 'braided'],
  steps: [
    { step: 1, instruction: 'Wrap the line around the reel spool arbor and bring the tag end back alongside the standing line.' },
    { step: 2, instruction: 'Tie an overhand knot with the tag end around the standing line. This creates a sliding loop that will tighten around the spool.' },
    { step: 3, instruction: 'Tie a second overhand knot in the tag end alone, about half an inch from the first knot. This acts as a stopper knot that prevents the first knot from slipping.' },
    { step: 4, instruction: 'Moisten both knots and pull the standing line so the first overhand knot slides down and cinches against the stopper knot.' },
    { step: 5, instruction: 'Continue pulling the standing line so the entire knot assembly tightens against the spool arbor and the line grips the spool firmly.' },
  ],
  tips: [
    'Place a small piece of electrical tape over the knot on the spool to prevent it from slipping, especially when using slick braided line.',
    'When spooling braided line, wrap a few turns of monofilament on the spool first (attached with an arbor knot) as a base layer. Braid can spin on a bare spool even with an arbor knot.',
    'Pull the line tight and make several turns on the reel to confirm the arbor knot is gripping before spooling the rest of the line.',
  ],
  faq: [
    {
      question: 'Does the arbor knot need to be strong?',
      answer:
        'No. The arbor knot only needs to hold the line to the spool so it does not spin freely. You should never fight a fish down to the arbor — if you are seeing the arbor knot during a fight, you did not have enough line on the spool. The knot just needs to grip.',
    },
    {
      question: 'Can I use an arbor knot with braided line?',
      answer:
        'You can, but braided line is very slick and may slip on the smooth spool. Most anglers spool a base layer of monofilament first (attached with an arbor knot), then connect braid to the mono with a double uni knot. Alternatively, put a strip of electrical tape over the knot to keep it from slipping.',
    },
    {
      question: 'Is there a better knot for attaching line to a reel?',
      answer:
        'The arbor knot is the standard and works for nearly all situations. Some anglers use a uni knot around the spool for a more secure grip, which can be helpful with braided line. For most anglers, the arbor knot is simple, fast, and perfectly adequate.',
    },
  ],
};
