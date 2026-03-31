import { Knot } from '../types';

export const loopKnot: Knot = {
  slug: 'loop-knot',
  name: 'Loop Knot',
  description: 'A non-slip loop knot that gives lures and flies freedom of movement by creating a fixed loop at the connection point rather than cinching tight against the hook eye. Also known as the Non-Slip Mono Loop or Kreh Loop, it retains about 85% of line strength.',
  difficulty: 2,
  strengthRating: 85,
  bestFor: ['giving lures freedom of movement', 'jerkbaits', 'topwater lures', 'fly fishing streamers'],
  lineTypes: ['monofilament', 'fluorocarbon'],
  steps: [
    { step: 1, instruction: 'Tie a simple overhand knot about 6 inches from the end of the line. Do not tighten it.' },
    { step: 2, instruction: 'Pass the tag end through the eye of the hook or lure.' },
    { step: 3, instruction: 'Bring the tag end back and pass it through the overhand knot on the same side it exited.' },
    { step: 4, instruction: 'Wrap the tag end around the standing line 3 to 5 times, depending on line weight.' },
    { step: 5, instruction: 'Pass the tag end back through the overhand knot, entering on the same side as the standing line.' },
    { step: 6, instruction: 'Moisten the knot and slowly pull the tag end to snug the wraps, then pull the standing line to tighten the knot. The loop should remain open.' },
    { step: 7, instruction: 'Trim the tag end close to the knot.' },
  ],
  tips: [
    'Use fewer wraps (2-3) with heavy line over 30lb and more wraps (4-5) with lighter line for proper grip.',
    'The size of the loop is determined by where you tie the initial overhand knot — closer to the eye means a smaller loop.',
    'This knot is especially effective for topwater lures where a tight connection restricts the side-to-side walking action.',
    'Make sure the tag end enters and exits the overhand knot on the correct side, or the loop will slip and close under pressure.',
  ],
  faq: [
    {
      question: 'When should I use a loop knot instead of a tight knot?',
      answer: 'Use a loop knot whenever you want your lure to have maximum freedom of movement. This includes topwater lures (walk-the-dog action), jerkbaits, swimbaits, and fly fishing streamers. The open loop allows the lure to swing and dart more naturally. Use a tight knot like the Palomar when you want a rigid, direct connection.',
    },
    {
      question: 'How big should the loop be?',
      answer: 'A loop of about 1/4 to 1/2 inch is ideal for most applications. This provides enough freedom for lure action without being so large that it catches on cover or looks unnatural. For larger offshore lures, a slightly bigger loop (3/4 inch) can be used.',
    },
    {
      question: 'Will a loop knot reduce my hook-setting power?',
      answer: 'The loop does create a very slight delay in the hook set compared to a tight knot, but the improved lure action typically results in more strikes. For treble hook lures where hook penetration is easy, the trade-off is well worth it. For single-hook applications requiring maximum hook-set force, a tight knot may be preferable.',
    },
  ],
};
