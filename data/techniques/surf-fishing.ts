import { Technique } from '../types';

export const surfFishing: Technique = {
  slug: 'surf-fishing',
  name: 'Surf Fishing',
  description:
    'Surf fishing is the art of casting from the beach into the ocean to catch fish beyond the breakers. Reading the surf to find troughs, sandbars, and cuts where fish feed is the key skill. This shore-based technique provides access to redfish, flounder, striped bass, and many other species without needing a boat.',
  difficulty: 3,
  bestFor: ['redfish', 'flounder', 'striped-bass'],
  waterTypes: ['saltwater'],
  seasons: ['spring', 'summer', 'fall'],
  steps: [
    {
      step: 1,
      title: 'Read the Surf',
      description:
        'Look for darker water (deeper troughs), breaking wave patterns that indicate sandbars, and cuts or channels between sandbars where water flows. Fish concentrate in these troughs and cuts where bait collects.',
    },
    {
      step: 2,
      title: 'Choose Your Rig',
      description:
        'A fish-finder rig (sliding sinker with a leader and hook) is the most versatile surf rig. A two-hook dropper rig covers more of the water column. Use pyramid sinkers to hold bottom in the current.',
    },
    {
      step: 3,
      title: 'Select Bait',
      description:
        'Fresh is best. Cut mullet, shrimp, sand fleas, clams, and bloodworms are top surf baits. Match your bait to what naturally washes in the surf where you are fishing.',
    },
    {
      step: 4,
      title: 'Position on the Beach',
      description:
        'Set up near a trough, cut, or point in the sand where current converges. Avoid areas with heavy seaweed. If possible, arrive at low tide to study the beach structure before the water rises.',
    },
    {
      step: 5,
      title: 'Cast Beyond the Breakers',
      description:
        'Use a long (10-12 foot) surf rod with a powerful overhead or pendulum cast to launch your rig past the breaking waves and onto the outer sandbar or into the trough beyond.',
    },
    {
      step: 6,
      title: 'Set the Rod and Wait',
      description:
        'Place the rod in a sand spike at a 45-degree angle facing the water. Tighten the line until you have a slight bend in the tip. The rod tip will telegraph bites with dips and bounces.',
    },
    {
      step: 7,
      title: 'Time Your Fishing with Tides',
      description:
        'The two hours before and after a tide change (incoming and outgoing) are typically the most productive. Moving water carries bait into troughs and triggers feeding activity.',
    },
    {
      step: 8,
      title: 'Fight Fish Through the Surf',
      description:
        'When you hook up, keep steady pressure and work the fish through the waves. Time your final pull with an incoming wave to beach the fish. Use the surf to your advantage rather than fighting it.',
    },
  ],
  requiredGear: [
    {
      item: 'Surf Rod (10-12 foot)',
      description:
        'A long, powerful surf rod provides the leverage needed to cast heavy rigs past the breakers. Medium-heavy to heavy power with moderate-fast action is standard.',
      tags: ['rod', 'surf-rod', 'saltwater', 'surf-fishing'],
    },
    {
      item: 'Large Spinning Reel (5000-8000 size)',
      description:
        'A large-capacity spinning reel holds the heavy line and long casts required for surf fishing. Corrosion-resistant construction is essential in saltwater.',
      tags: ['reel', 'spinning', 'saltwater', 'surf-fishing', 'large'],
    },
    {
      item: 'Pyramid Sinkers (2-6 oz)',
      description:
        'Pyramid sinkers dig into the sand and hold your rig in place against the current and wave action. Stock multiple sizes for varying conditions.',
      tags: ['weights', 'pyramid-sinker', 'sinker', 'surf-fishing', 'saltwater'],
    },
    {
      item: 'Sand Spikes / Rod Holders',
      description:
        'PVC or aluminum sand spikes driven into the beach hold your rods at the proper angle while you wait for bites.',
      tags: ['rod-holder', 'sand-spike', 'surf-fishing', 'accessory'],
    },
    {
      item: 'Surf Fishing Rigs',
      description:
        'Pre-tied fish-finder rigs and double-dropper rigs save time on the beach. Use circle hooks for best catch-and-release results.',
      tags: ['rig', 'surf-fishing', 'terminal-tackle', 'circle-hook', 'saltwater'],
    },
    {
      item: 'Bait Bucket and Aerator',
      description:
        'Keep live shrimp and sand fleas alive in an aerated bucket for maximum effectiveness. A sand flea rake helps collect bait on site.',
      tags: ['bait-bucket', 'aerator', 'live-bait', 'surf-fishing'],
    },
  ],
  commonMistakes: [
    'Not reading the surf before setting up — understanding where troughs, cuts, and sandbars are is the most important skill in surf fishing.',
    'Casting as far as possible every time instead of targeting the near-shore trough, which often holds more fish than the far bar.',
    'Using too light a sinker that rolls with the current and pulls your bait out of the strike zone.',
    'Ignoring the tides — fishing during dead-slack tides is far less productive than fishing the moving water around tide changes.',
    'Leaving rods unattended without proper sand spikes, risking losing gear to a big fish.',
  ],
  proTips: [
    'Scout the beach at low tide to map sandbars, troughs, and cuts. Take photos on your phone so you know exactly where to cast when the water rises.',
    'Fresh bait is king in the surf. Catch sand fleas on the same beach you are fishing for the freshest possible presentation.',
    'Dawn and dusk are peak feeding windows, but night surf fishing can be incredibly productive for large redfish and sharks.',
    'After a storm, fish the surf immediately — the churned-up water exposes sand fleas and crabs, triggering a feeding frenzy.',
  ],
  faq: [
    {
      question: 'How far do I need to cast for surf fishing?',
      answer:
        'Many fish are caught within 50-80 yards of the beach in the near-shore trough. While long casts (100+ yards) can reach the outer bar, do not overlook the water right in front of you. Fish often feed in the wash zone.',
    },
    {
      question: 'What is the best tide for surf fishing?',
      answer:
        'Moving water is key. The two hours before and after both high and low tides are typically the most productive. Incoming tide is slightly preferred as it pushes bait into the troughs.',
    },
    {
      question: 'Do I need waders for surf fishing?',
      answer:
        'Waders are helpful in cooler weather but not required. Many surf anglers fish in shorts and sandals in warm months. If you wade out, be mindful of rip currents and wave action.',
    },
    {
      question: 'What pound test line should I use for surf fishing?',
      answer:
        'Most surf anglers use 15-20 lb monofilament or 30-50 lb braided line with a 20-30 lb fluorocarbon or mono leader. Braid casts farther due to its thinner diameter.',
    },
  ],
  imagePath: '/images/techniques/surf-fishing.jpg',
  imageAlt: 'Surf fishing rods set in sand spikes along the beach with waves breaking in the background',
};
