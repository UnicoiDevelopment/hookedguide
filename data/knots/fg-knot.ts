import { Knot } from '../types';

export const fgKnot: Knot = {
  slug: 'fg-knot',
  name: 'FG Knot',
  description: 'The strongest braid-to-leader connection available, retaining up to 99% of line strength. The FG knot creates an incredibly slim profile that passes through rod guides effortlessly, making it ideal for long casts. While difficult to master, it is the gold standard for serious anglers.',
  difficulty: 5,
  strengthRating: 99,
  bestFor: ['strongest braid-to-leader connection', 'slim profile for casting', 'saltwater leader connections', 'tournament fishing'],
  lineTypes: ['braided', 'fluorocarbon'],
  steps: [
    { step: 1, instruction: 'Hold the fluorocarbon leader in your mouth or secure it taut between a fixed point and your hand. Keep tension on the braid with your other hand.' },
    { step: 2, instruction: 'Cross the braid over the top of the leader, then wrap it under and back over — this is one complete weave.' },
    { step: 3, instruction: 'Alternate weaving the braid over and under the leader, making 15 to 20 tight weaves. Each weave should lock onto the leader.' },
    { step: 4, instruction: 'After completing the weaves, pull the braid tag end tight to lock all the weaves in place against the leader.' },
    { step: 5, instruction: 'Tie a half hitch with the braid tag end around the standing braid line to lock the weaves.' },
    { step: 6, instruction: 'Tie 3-4 more half hitches, alternating the direction each time, to secure the connection.' },
    { step: 7, instruction: 'Trim the leader tag end flush with the weave section.' },
    { step: 8, instruction: 'Continue tying 3-4 more half hitches over both the standing braid and the trimmed leader tag to create a smooth taper.' },
    { step: 9, instruction: 'Finish with a final two-turn half hitch (like a small Uni knot) and pull tight.' },
    { step: 10, instruction: 'Trim the braid tag end and optionally apply a small drop of super glue to the finishing hitches for extra security.' },
  ],
  tips: [
    'Keeping proper tension on both lines throughout the tying process is the most critical factor — slack will cause the weaves to fail.',
    'Practice this knot at home before trying it on the water. It typically takes 10-15 practice attempts to develop confidence.',
    'Alternate the direction of your half hitches to prevent the locking knots from spiraling around the line.',
    'The FG knot gets its strength from friction between the braid and leader — more weaves mean more friction and more strength.',
    'Use a lighter or line burner to carefully trim and melt the braid tag end into a small ball for a cleaner finish.',
  ],
  faq: [
    {
      question: 'What does FG stand for?',
      answer: 'FG stands for "Fine Grip." The name refers to the way the braided line grips the fluorocarbon leader through a series of interlocking weaves rather than wraps or loops. This weaving technique is what gives the knot its exceptional strength and slim profile.',
    },
    {
      question: 'Why is the FG knot so strong?',
      answer: 'The FG knot achieves near 100% line strength because it distributes pressure evenly across 15-20 contact points where the braid grips the leader. Unlike traditional knots that create stress points where the line bends sharply, the FG knot uses friction across a wide area. The braid actually tightens and grips harder under load.',
    },
    {
      question: 'How long does it take to tie an FG knot?',
      answer: 'For beginners, the FG knot can take 5-10 minutes to tie. With practice, most anglers can tie it in 1-2 minutes. Speed comes from developing muscle memory for the weaving motion. Many experienced anglers can tie it in under 60 seconds on the water.',
    },
    {
      question: 'Is the FG knot worth learning when the Alberto knot is easier?',
      answer: 'For casual anglers, the Alberto knot (95% strength) is a perfectly fine choice. However, the FG knot\'s slimmer profile and superior strength make it worthwhile for serious anglers who make long casts, fish heavy cover, or target large fish. Tournament anglers and saltwater enthusiasts especially benefit from investing the time to learn it.',
    },
  ],
};
