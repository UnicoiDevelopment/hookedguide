import { Technique } from '../types';

export const bottomFishing: Technique = {
  slug: 'bottom-fishing',
  name: 'Bottom Fishing',
  description:
    'Bottom fishing is one of the oldest and simplest fishing techniques — drop a sinker to the bottom with bait above it, and wait. This straightforward approach catches catfish, grouper, snapper, sheepshead, and dozens of other bottom-dwelling species in fresh and saltwater alike.',
  difficulty: 1,
  bestFor: ['channel-catfish', 'blue-catfish', 'grouper', 'red-snapper', 'sheepshead'],
  waterTypes: ['lake', 'river', 'pond', 'reservoir', 'saltwater'],
  seasons: ['spring', 'summer', 'fall', 'winter'],
  steps: [
    {
      step: 1,
      title: 'Choose the Right Rig',
      description:
        'The two most common bottom rigs are the fish-finder rig (sliding sinker above a swivel and leader) and the dropper rig (sinker on the bottom with hooks on dropper loops above). Choose based on species and conditions.',
    },
    {
      step: 2,
      title: 'Select Your Weight',
      description:
        'Use enough weight to hold bottom in the current. In still water, 1-2 oz is often enough. In rivers or tidal current, you may need 4-8 oz. Bank sinkers hold in sand, pyramid sinkers grip in current.',
    },
    {
      step: 3,
      title: 'Bait Your Hook',
      description:
        'Use cut bait, live bait, or prepared bait based on your target. Cut shad or skipjack for catfish, live shrimp for sheepshead, squid or cut fish for snapper and grouper. Thread the bait securely so it stays on during the cast.',
    },
    {
      step: 4,
      title: 'Cast to Structure',
      description:
        'Target areas where bottom dwellers congregate: channel edges, rock piles, bridge pilings, reef structure, ledges, and holes. Use your electronics to locate structure before anchoring.',
    },
    {
      step: 5,
      title: 'Let the Rig Settle',
      description:
        'Allow the sinker to reach the bottom and the bait to settle. Reel up any slack until you have a slight bend in your rod tip. Place the rod in a holder and wait.',
    },
    {
      step: 6,
      title: 'Detect the Bite',
      description:
        'Watch your rod tip for taps, bobs, or a steady pull-down. Catfish often give a series of quick taps followed by a steady pull. Snapper bites can be subtle. In some setups, a bell or electronic bite alarm helps.',
    },
    {
      step: 7,
      title: 'Set the Hook',
      description:
        'For circle hooks (recommended for catch-and-release), simply reel tight and let the hook set itself in the corner of the mouth. For J-hooks, wait for a sustained pull, then set with a firm upward sweep.',
    },
    {
      step: 8,
      title: 'Fight and Land the Fish',
      description:
        'Keep steady pressure and pump the rod to gain line. Bottom fish will try to dive back into structure — keep them headed up. Use a net or lip gripper to land the fish safely.',
    },
  ],
  requiredGear: [
    {
      item: 'Circle Hooks (various sizes)',
      description:
        'Circle hooks set themselves in the corner of the mouth, greatly reducing gut-hooking. Use 2/0-4/0 for catfish, 4/0-8/0 for large saltwater species.',
      tags: ['hooks', 'circle-hook', 'catfish', 'saltwater', 'bottom-fishing'],
    },
    {
      item: 'Sinkers (bank, pyramid, egg)',
      description:
        'Stock various sinker shapes and sizes. Bank sinkers for general use, pyramid for current, and egg sinkers for sliding fish-finder rigs.',
      tags: ['weights', 'sinker', 'bottom-fishing', 'terminal-tackle'],
    },
    {
      item: 'Medium-Heavy to Heavy Rod',
      description:
        'A stout rod with a sensitive tip detects bites while providing the backbone to haul fish away from structure. Longer rods aid casting from shore.',
      tags: ['rod', 'bottom-fishing', 'catfish', 'saltwater', 'heavy'],
    },
    {
      item: 'Swivels and Leader Material',
      description:
        'Barrel swivels prevent line twist, and fluorocarbon or monofilament leaders provide abrasion resistance near the hook.',
      tags: ['swivel', 'leader', 'terminal-tackle', 'bottom-fishing'],
    },
    {
      item: 'Rod Holders',
      description:
        'Bank sticks, sand spikes, or boat-mounted rod holders free your hands and provide a visual bite indicator as the rod tip dips.',
      tags: ['rod-holder', 'accessory', 'bottom-fishing', 'catfish'],
    },
  ],
  commonMistakes: [
    'Using too light a sinker that drifts out of the strike zone in current — your weight must hold bottom.',
    'Setting the hook on circle hooks instead of letting the fish hook itself by simply reeling tight.',
    'Using old or smelly bait that has lost its attractant. Fresh bait almost always outperforms old bait.',
    'Not checking bait regularly — crabs, small fish, and current can strip your hook without you noticing.',
  ],
  proTips: [
    'Fresh cut bait almost always outperforms frozen. If using frozen bait, let it thaw completely and add scent spray for extra attraction.',
    'Use a fish-finder rig with a sliding sinker so the fish can pick up the bait and move without feeling the weight of the sinker.',
    'Chum the area lightly to concentrate fish around your baits. A mesh bag of crushed bait hung over the side works well offshore.',
    'At night, bottom fishing productivity increases dramatically for catfish and many saltwater species. Bring proper lighting and safety gear.',
  ],
  faq: [
    {
      question: 'What is the best bait for bottom fishing?',
      answer:
        'It depends on the species. Cut shad or chicken liver for catfish, live shrimp for sheepshead and snapper, squid for general saltwater, and nightcrawlers for freshwater panfish and catfish.',
    },
    {
      question: 'Should I use circle hooks or J-hooks?',
      answer:
        'Circle hooks are recommended for bottom fishing because they self-set in the corner of the mouth, resulting in better survival rates for released fish and fewer gut-hooks. Many saltwater regulations now require circle hooks.',
    },
    {
      question: 'How do I keep my bait on the bottom in strong current?',
      answer:
        'Use a heavier sinker, switch to a pyramid or grip-style weight, or anchor your boat further upstream so less line is in the current. A shorter leader also helps keep the bait near the bottom.',
    },
    {
      question: 'Can I bottom fish from shore?',
      answer:
        'Absolutely. Shore-based bottom fishing is one of the most accessible forms of fishing. Use a longer rod (7-10 feet) for casting distance and sturdy bank sticks or sand spikes to hold your rod.',
    },
    {
      question: 'What time of day is best for bottom fishing?',
      answer:
        'Early morning, late afternoon, and night are generally the most productive times for bottom fishing. Catfish are especially active at night. Tidal movement is more important than time of day for saltwater bottom fishing.',
    },
  ],
  imagePath: '/images/techniques/bottom-fishing.jpg',
  imageAlt: 'Bottom fishing setup with sinker on the bottom and baited hook suspended above on a leader',
};
