import { Knot } from '../types';

export const albertoKnot: Knot = {
  slug: 'alberto-knot',
  name: 'Alberto Knot',
  description: 'A top-tier knot for connecting braided line to a fluorocarbon or monofilament leader. Named after Captain Alberto Knie, this knot retains about 95% of line strength and creates a slim, compact connection that casts smoothly through rod guides.',
  difficulty: 3,
  strengthRating: 95,
  bestFor: ['braid to fluorocarbon leader', 'braid to mono leader', 'saltwater fishing connections'],
  lineTypes: ['braided', 'fluorocarbon'],
  steps: [
    { step: 1, instruction: 'Create a loop in the end of the fluorocarbon leader by doubling back about 6 inches.' },
    { step: 2, instruction: 'Thread the braided line through the loop of the fluorocarbon leader.' },
    { step: 3, instruction: 'Wrap the braid around both strands of the leader loop 7 times, working away from the loop opening.' },
    { step: 4, instruction: 'Then wrap the braid back toward the loop opening 7 times, crossing over the first set of wraps.' },
    { step: 5, instruction: 'Pass the tag end of the braid through the leader loop on the same side it entered.' },
    { step: 6, instruction: 'Moisten the knot thoroughly with saliva or water.' },
    { step: 7, instruction: 'Slowly pull the braid standing line and the leader standing line in opposite directions to tighten the knot.' },
    { step: 8, instruction: 'Trim both the braid tag end and the leader loop tag end close to the knot.' },
  ],
  tips: [
    'Use 7 wraps in each direction for the best balance of strength and slim profile.',
    'Make sure the braid exits the leader loop on the same side it entered — exiting the wrong side will cause the knot to fail.',
    'Tighten the knot slowly and evenly; rushing this step can cause the wraps to bunch unevenly.',
    'Apply a small drop of super glue to the trimmed tag ends for extra security in heavy saltwater applications.',
    'This knot is a great alternative to the FG knot when you need a strong braid-to-leader connection but want an easier knot to tie.',
  ],
  faq: [
    {
      question: 'How does the Alberto knot compare to the FG knot?',
      answer: 'The FG knot is slightly stronger (99% vs 95%) and has a slimmer profile, but it is much harder to tie (difficulty 5 vs 3). The Alberto knot is a great middle ground — nearly as strong, much easier to tie, and still casts smoothly through guides. Many anglers prefer it for everyday use and save the FG knot for situations demanding maximum strength.',
    },
    {
      question: 'Can I use the Alberto knot with monofilament leader?',
      answer: 'Yes, the Alberto knot works well with both fluorocarbon and monofilament leaders. The key is that the braid wraps around the leader material, so any stiffer line material will work as the leader portion of this knot.',
    },
    {
      question: 'What pound test braid works best with the Alberto knot?',
      answer: 'The Alberto knot works well with all braid weights, but it is most commonly used with 10-65lb braided line connected to a leader that is at least double the braid diameter. The difference in diameter between the braid and leader actually helps the wraps grip securely.',
    },
  ],
};
