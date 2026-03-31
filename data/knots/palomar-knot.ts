import { Knot } from '../types';

export const palomarKnot: Knot = {
  slug: 'palomar-knot',
  name: 'Palomar Knot',
  description: 'One of the strongest and most reliable fishing knots for tying hooks, lures, and swivels to your line. The Palomar knot retains approximately 95% of line strength and works well with all line types including braid, monofilament, and fluorocarbon.',
  difficulty: 1,
  strengthRating: 95,
  bestFor: ['tying hooks and lures to any line', 'terminal connections', 'everyday fishing knots'],
  lineTypes: ['monofilament', 'fluorocarbon', 'braided'],
  steps: [
    { step: 1, instruction: 'Double about 6 inches of line and pass the doubled line through the eye of the hook or lure.' },
    { step: 2, instruction: 'Tie a loose overhand knot with the doubled line, letting the hook or lure hang below.' },
    { step: 3, instruction: 'Hold the overhand knot between your thumb and forefinger. Pass the loop of doubled line over the hook or lure completely.' },
    { step: 4, instruction: 'Pull the loop up and over the eye of the hook so it slides above the eye and rests on the standing line.' },
    { step: 5, instruction: 'Moisten the knot with saliva or water and pull both the tag end and standing line to tighten the knot snugly against the eye.' },
    { step: 6, instruction: 'Trim the tag end close to the knot, leaving about 1/8 inch.' },
  ],
  tips: [
    'Always double the line through the eye — do not try to pass a single strand and then double back.',
    'Make sure the lines do not cross over each other as you tighten; crossed lines weaken the knot significantly.',
    'Wet the knot before tightening to reduce friction and heat that can damage the line.',
    'This knot works especially well with braided line where many other knots tend to slip.',
    'Use a slightly longer doubled section (8-10 inches) when tying to larger lures to make it easier to pass the loop over the bait.',
  ],
  faq: [
    {
      question: 'Is the Palomar knot good for braided line?',
      answer: 'Yes, the Palomar knot is one of the best knots for braided line. Because it cinches down evenly with doubled line, it resists the slipping problems that plague many other knots when used with slick braided lines. Many anglers consider it their go-to knot for braid.',
    },
    {
      question: 'Why does my Palomar knot keep breaking?',
      answer: 'The most common reason a Palomar knot fails is that the lines cross over each other during tightening, which creates a weak point. Make sure the two strands of doubled line lay parallel and flat as you cinch the knot. Also, always wet the knot before tightening to prevent heat damage from friction.',
    },
    {
      question: 'Can I use the Palomar knot with a Texas rig?',
      answer: 'Absolutely. The Palomar knot is an excellent choice for Texas rigs because of its high strength and simplicity. Just make sure to slide your bullet weight and any beads onto the line before doubling it to tie the knot.',
    },
    {
      question: 'How does the Palomar knot compare to the Improved Clinch knot?',
      answer: 'The Palomar knot is generally considered stronger (95% vs 90% line strength) and is easier to tie correctly. The Improved Clinch knot works well with monofilament and fluorocarbon but can slip with braided line, while the Palomar works reliably with all line types.',
    },
  ],
};
