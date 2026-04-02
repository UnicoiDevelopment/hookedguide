import type { GearReview } from '../../types';

export const garminLivescopePlus: GearReview = {
  slug: 'garmin-livescope-plus',
  productName: 'Garmin LiveScope Plus System',
  brand: 'Garmin',
  category: 'best-fish-finders-2026',
  rating: 4.9,
  pros: [
    'Real-time, video-like sonar shows fish, structure, and your bait simultaneously.',
    'Forward, down, and perspective modes cover every angle below and around the boat.',
    'Range and clarity are a step above the competition in most conditions.',
    'Compatible with Garmin EchoMap Ultra and GPSMAP series displays.',
    'Completely changes how you fish — you can watch fish react to your presentation.',
  ],
  cons: [
    'Total system cost of $2,500+ is a major investment (transducer plus compatible display).',
    'Requires a compatible Garmin display — cannot be used with Lowrance or Humminbird.',
    'Can create a dependency where you stop fishing without it.',
  ],
  bestFor: ['Tournament anglers competing at the highest level', 'Crappie and bass anglers targeting suspended fish', 'Ice fishing with real-time under-ice viewing', 'Anglers willing to invest in the best available sonar technology'],
  description: 'The Garmin LiveScope Plus is the most advanced consumer sonar system available and it lives up to the hype. Watching bass follow your jig in real time, seeing crappie suspend around brush piles, or tracking your bait through ice — it is genuinely like having an underwater camera with unlimited range. The image clarity and refresh rate are remarkable. It is expensive, and you need a compatible Garmin display, but nothing else on the market provides this level of real-time underwater awareness.',
  specifications: [
    { key: 'Transducer', value: 'LVS34 with GLS 10 black box' },
    { key: 'Modes', value: 'Forward, Down, Perspective' },
    { key: 'Beam Width', value: '135 degrees (Perspective mode)' },
    { key: 'Range', value: 'Up to 200 ft forward' },
    { key: 'Compatible Displays', value: 'EchoMap Ultra, GPSMAP 8400/8600/9000 series' },
    { key: 'Power', value: 'Requires 12V, moderate draw' },
  ],
  affiliateProductId: 'garmin-livescope-plus',
  faq: [
    { question: 'Is LiveScope Plus really worth $2,500?', answer: 'For competitive anglers, yes. It provides a measurable advantage in tournaments and completely changes how you locate and catch fish. For casual weekend anglers, it is harder to justify unless you simply want the best technology available.' },
    { question: 'What display do I need to run LiveScope Plus?', answer: 'You need a compatible Garmin display such as the EchoMap Ultra series or GPSMAP 8400/8600/9000 series. Budget $1,000-2,500 for the display on top of the LiveScope system cost.' },
    { question: 'How does LiveScope compare to Lowrance Active Target?', answer: 'Both are excellent live sonar systems. LiveScope Plus generally gets the edge for image clarity and range, while Active Target is praised for its ease of use and forward-view quality. Both will transform your fishing.' },
  ],
};
