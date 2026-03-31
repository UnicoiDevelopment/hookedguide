import { Knot } from '../types';

export const snellKnot: Knot = {
  slug: 'snell-knot',
  name: 'Snell Knot',
  description: 'A powerful knot that connects the line to the shank of the hook rather than just the eye, providing a direct pull that improves hook-setting ability. The Snell knot retains about 95% of line strength and is especially popular for live bait fishing and circle hooks.',
  difficulty: 3,
  strengthRating: 95,
  bestFor: ['live bait hooks', 'circle hooks', 'catfishing', 'strong hook connections'],
  lineTypes: ['monofilament', 'fluorocarbon', 'braided'],
  steps: [
    { step: 1, instruction: 'Thread about 10 inches of line through the hook eye from the top (point side) of the hook.' },
    { step: 2, instruction: 'Form a large loop below the hook by bringing the tag end back up alongside the shank.' },
    { step: 3, instruction: 'Hold the loop against the hook shank with your thumb and forefinger.' },
    { step: 4, instruction: 'Wrap the tag end around the hook shank and the standing line together, working from the eye toward the bend of the hook.' },
    { step: 5, instruction: 'Make 6 to 8 tight wraps, keeping them neat and side by side.' },
    { step: 6, instruction: 'While holding the wraps in place, pull the standing line to close the loop and snug the wraps against the shank.' },
    { step: 7, instruction: 'Moisten and pull both the standing line and tag end to fully tighten the knot.' },
    { step: 8, instruction: 'Trim the tag end close to the wraps.' },
  ],
  tips: [
    'The Snell knot aligns the line with the hook shank, which improves the hook-set angle — especially important with circle hooks.',
    'Use more wraps (7-8) for braided line to prevent slipping, and fewer (5-6) for monofilament.',
    'This knot works even with hooks that have a turned-down or turned-up eye.',
    'Keep the wraps tight and neat as you go — loose or overlapping wraps will weaken the connection.',
    'The Snell is a top choice for bottom fishing rigs where strong, reliable hook connections are essential.',
  ],
  faq: [
    {
      question: 'Why should I snell a hook instead of tying directly to the eye?',
      answer: 'Snelling a hook creates a connection along the shank rather than at the eye, which aligns the force of the hook-set with the point of the hook. This results in better hook penetration and more positive hookups, especially with circle hooks where the angle of pull is critical for the hook to rotate into the corner of the fish\'s mouth.',
    },
    {
      question: 'Do I need a special hook for a Snell knot?',
      answer: 'No, you can snell any hook that has an eye. The knot works with straight-eye, turned-down, and turned-up eye hooks. It is most commonly used with circle hooks and octopus hooks for live bait fishing, but there is no hook limitation.',
    },
    {
      question: 'Can I snell a hook with braided line?',
      answer: 'Yes, braided line works well for snelling. Because braid is thinner and more flexible, use extra wraps (7-8 minimum) to ensure the knot grips the shank securely. The flexibility of braid actually makes it easier to make neat, tight wraps.',
    },
  ],
};
