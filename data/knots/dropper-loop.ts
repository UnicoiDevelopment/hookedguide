import { Knot } from '../types';

export const dropperLoop: Knot = {
  slug: 'dropper-loop',
  name: 'Dropper Loop',
  description: 'A knot used to create a loop in the middle of a line, allowing you to attach a hook, fly, or dropper rig directly from the standing line. The Dropper Loop retains about 85% of line strength and is essential for bottom fishing rigs and multi-hook setups.',
  difficulty: 2,
  strengthRating: 85,
  bestFor: ['creating loop in main line for dropper rigs', 'bottom fishing', 'multi-hook rigs', 'chicken rigs'],
  lineTypes: ['monofilament', 'fluorocarbon'],
  steps: [
    { step: 1, instruction: 'Form a loop in the line where you want the dropper to be positioned. The size of this loop will determine the length of the dropper.' },
    { step: 2, instruction: 'Twist the loop around the standing line 5 to 6 times, creating a series of twists with an opening in the center.' },
    { step: 3, instruction: 'Find the center opening of the twisted section.' },
    { step: 4, instruction: 'Push the top of the original loop through the center opening.' },
    { step: 5, instruction: 'Hold the pushed-through loop with your teeth or a pen while pulling both ends of the standing line in opposite directions.' },
    { step: 6, instruction: 'Moisten the knot and continue pulling the standing line ends to tighten the wraps securely around the base of the loop.' },
    { step: 7, instruction: 'Adjust the loop size if needed and ensure all wraps are seated tightly.' },
  ],
  tips: [
    'The loop should stick out at a 90-degree angle from the main line for the best rig presentation.',
    'Make the loop larger than you think you need — you can always trim it shorter, but you cannot make it longer.',
    'Use a pen, nail, or small dowel to hold the loop open while tightening to keep it from collapsing.',
    'Space multiple dropper loops 12-18 inches apart on a bottom rig for optimal bait separation.',
  ],
  faq: [
    {
      question: 'How do I attach a hook to a dropper loop?',
      answer: 'Simply pass the loop through the hook eye, then pass the hook through the loop and pull tight. This creates a loop-to-eye connection. Alternatively, you can cut one side of the loop to create a tag end and tie the hook on with a standard knot like a Palomar or Improved Clinch.',
    },
    {
      question: 'How many dropper loops can I tie on one line?',
      answer: 'You can tie as many as your rig design requires, though 2-3 is most common. Each dropper loop does reduce the overall line strength slightly, so do not go overboard. For bottom fishing rigs, two droppers spaced 12-18 inches apart is standard.',
    },
    {
      question: 'Can I use the Dropper Loop with braided line?',
      answer: 'While technically possible, the Dropper Loop does not work well with braided line because the slick braid tends to slip. For braid, it is better to tie in a fluorocarbon or monofilament section using line-to-line knots and then tie your Dropper Loops in that section.',
    },
  ],
};
