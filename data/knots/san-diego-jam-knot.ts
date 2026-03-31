import { Knot } from '../types';

export const sanDiegoJamKnot: Knot = {
  slug: 'san-diego-jam-knot',
  name: 'San Diego Jam Knot',
  description:
    'The San Diego jam knot is a powerful terminal connection trusted by saltwater anglers and tuna fishermen on the West Coast. With approximately 95% line strength, it cinches down firmly against the hook eye and resists slipping under heavy loads, making it ideal for big fish on all line types.',
  difficulty: 2,
  strengthRating: 95,
  bestFor: [
    'strong connection to hooks and lures',
    'saltwater fishing',
    'big game fishing',
    'heavy fluorocarbon leaders',
  ],
  lineTypes: ['monofilament', 'fluorocarbon', 'braided'],
  steps: [
    { step: 1, instruction: 'Pass the line through the hook eye, pulling through about 10 inches of tag end to give yourself plenty of line to work with.' },
    { step: 2, instruction: 'Wrap the tag end around the standing line 5 to 7 times, working away from the hook eye. Use 5 wraps for heavy line and 7 wraps for lighter line.' },
    { step: 3, instruction: 'Bring the tag end back toward the hook and pass it through the first open loop closest to the hook eye.' },
    { step: 4, instruction: 'Pass the tag end through the large loop that was formed between the wraps and the standing line.' },
    { step: 5, instruction: 'Moisten the entire knot thoroughly with saliva or water. Slowly pull the tag end to begin snugging the wraps together.' },
    { step: 6, instruction: 'Pull the standing line firmly to cinch the knot tight against the hook eye. The wraps should stack neatly and the knot should jam securely against the eye.' },
    { step: 7, instruction: 'Trim the tag end close to the knot, leaving about 1/8 inch.' },
  ],
  tips: [
    'Use 7 wraps with monofilament and fluorocarbon under 20 lb test, and 5 wraps with heavier line or braided line to prevent the knot from becoming bulky.',
    'Moisten the knot generously before tightening — this knot generates significant friction that can weaken line if pulled tight dry.',
    'Pull the standing line and tag end simultaneously during the final tightening to ensure the wraps seat evenly against the hook eye.',
    'This knot excels with heavy fluorocarbon leaders (25-80 lb) where other knots may slip or fail under the stiffness of thick line.',
  ],
  faq: [
    {
      question: 'How does the San Diego jam knot compare to the Palomar knot?',
      answer:
        'Both knots rate at approximately 95% line strength. The Palomar is simpler to tie and works great for most situations. The San Diego jam excels with heavier line and larger hook eyes where the Palomar can be awkward to tie, and it is a favorite for saltwater applications.',
    },
    {
      question: 'Can I use the San Diego jam knot with braided line?',
      answer:
        'Yes, the San Diego jam knot works with braid, but increase your wrap count to 7 to prevent slipping on the slick surface. Some anglers add a small drop of superglue to the finished knot when using braid for extra security.',
    },
    {
      question: 'Is this knot good for tuna fishing?',
      answer:
        'The San Diego jam knot is one of the most popular knots among West Coast tuna anglers. It handles heavy fluorocarbon leaders and holds up under the powerful runs of yellowfin and bluefin tuna. Many charter captains tie this knot exclusively for their clients.',
    },
    {
      question: 'Why is it called the San Diego jam knot?',
      answer:
        'The knot gets its name from the San Diego long-range fishing fleet, where it became the standard terminal connection for tying heavy fluorocarbon leaders to hooks for tuna and yellowtail. The "jam" refers to how the knot cinches and jams tightly against the hook eye.',
    },
  ],
};
