import { Knot } from '../types';

export const doubleUniKnot: Knot = {
  slug: 'double-uni-knot',
  name: 'Double Uni Knot',
  description:
    'The double uni knot is the most popular line-to-line connection in fishing. It joins two lines of the same or different types and diameters by tying a uni knot on each side and sliding them together. At roughly 90% strength, it is the go-to knot for connecting braided main line to a fluorocarbon leader.',
  difficulty: 2,
  strengthRating: 90,
  bestFor: [
    'joining two lines together',
    'braid to fluorocarbon leader connections',
    'braid to monofilament leader connections',
    'connecting lines of different diameters',
  ],
  lineTypes: ['monofilament', 'fluorocarbon', 'braided'],
  steps: [
    { step: 1, instruction: 'Overlap the ends of the two lines you want to join by about 6 inches, with the tag ends pointing in opposite directions.' },
    { step: 2, instruction: 'With the first line, form a loop by doubling the tag end back toward the overlap area.' },
    { step: 3, instruction: 'Wrap the tag end of the first line through the loop and around both lines 3 to 4 times. Use 5 to 6 wraps if the first line is braided.' },
    { step: 4, instruction: 'Moisten the wraps and pull the tag end of the first line to tighten the first uni knot snugly.' },
    { step: 5, instruction: 'Repeat with the second line: form a loop, wrap the tag end through the loop and around both lines 3 to 4 times, and moisten.' },
    { step: 6, instruction: 'Pull the tag end of the second line to tighten the second uni knot snugly.' },
    { step: 7, instruction: 'Pull the two standing lines in opposite directions to slide the two uni knots together until they cinch firmly against each other.' },
    { step: 8, instruction: 'Trim both tag ends close to the knots, leaving about 1/8 inch on each side.' },
  ],
  tips: [
    'When joining braid to fluorocarbon, use 5 to 6 wraps on the braid side and 3 to 4 wraps on the fluorocarbon side to prevent the slick braid from slipping.',
    'Moisten each uni knot individually before tightening it, then moisten again before sliding the two knots together for the smoothest cinch.',
    'This knot passes through rod guides more smoothly than many other line-to-line knots, making it a great choice for casting setups with a leader.',
    'Practice tying both uni knots with the same wrap direction (both clockwise or both counterclockwise) for a neater finished knot that slides together evenly.',
  ],
  faq: [
    {
      question: 'Is the double uni knot good for braid to fluorocarbon?',
      answer:
        'Yes, the double uni knot is one of the best and most popular connections for braid to fluorocarbon. The key is to use more wraps (5-6) on the braid side to prevent slipping on the slick line, and fewer wraps (3-4) on the fluorocarbon side.',
    },
    {
      question: 'How does the double uni compare to the FG knot?',
      answer:
        'The FG knot is stronger (near 100% strength) and has a slimmer profile that passes through guides better. However, the double uni is much easier and faster to tie, especially in the field or on a rocking boat. Many anglers use the double uni for everyday fishing and reserve the FG knot for situations demanding maximum strength.',
    },
    {
      question: 'Can I join two lines of very different diameters?',
      answer:
        'The double uni knot handles moderate differences in line diameter well, such as 15 lb braid to 20 lb fluorocarbon. For extreme differences (like 10 lb braid to 60 lb fluorocarbon), the FG knot or Albright knot may provide a more secure connection.',
    },
    {
      question: 'How many wraps should I use for the double uni knot?',
      answer:
        'Use 3 to 4 wraps per side for monofilament and fluorocarbon. When one line is braided, increase that side to 5 or 6 wraps. More wraps add security on slippery braid, while fewer wraps on stiffer lines keep the knot compact and manageable.',
    },
  ],
};
