import { Technique } from '../types';

export const kayakFishing: Technique = {
  slug: 'kayak-fishing',
  name: 'Kayak Fishing',
  description:
    'Kayak fishing combines the stealth and access of a small watercraft with serious angling capability. Fishing kayaks can reach water that boats cannot — skinny flats, narrow creeks, and pressured shorelines. From freshwater bass to inshore redfish and speckled trout, kayak fishing is the fastest-growing segment of the sport.',
  difficulty: 3,
  bestFor: ['largemouth-bass', 'redfish', 'speckled-trout'],
  waterTypes: ['lake', 'river', 'pond', 'reservoir', 'saltwater'],
  seasons: ['spring', 'summer', 'fall'],
  steps: [
    {
      step: 1,
      title: 'Rig Your Kayak',
      description:
        'Install or position rod holders, a paddle leash, tackle crate, and fish finder before launching. Organize your tackle so everything is within arm\'s reach from a seated position. Less is more in a kayak.',
    },
    {
      step: 2,
      title: 'Wear Your PFD',
      description:
        'Always wear a personal flotation device while kayak fishing. Choose a fishing-specific PFD that allows full arm movement for paddling and casting while keeping you safe.',
    },
    {
      step: 3,
      title: 'Launch Safely',
      description:
        'Choose a calm launch point with gradual entry. Straddle the kayak in shallow water, sit down carefully, then push off. Avoid launching in strong current or heavy waves until you are experienced.',
    },
    {
      step: 4,
      title: 'Position with Stealth',
      description:
        'Use a paddle or pedal drive to position yourself quietly near structure, grass lines, or shoreline targets. The low profile and silence of a kayak lets you get closer to fish than any motorized boat.',
    },
    {
      step: 5,
      title: 'Anchor or Stake Out',
      description:
        'Use a shallow-water stake-out pole or anchor trolley system to hold position when you find fish. An anchor trolley lets you adjust anchor point from bow to stern for optimal boat positioning in wind and current.',
    },
    {
      step: 6,
      title: 'Cast from a Seated Position',
      description:
        'Adjust your casting technique for a lower vantage point. Use sidearm casts to keep lures low and accurate. Standing is possible in stable fishing kayaks but not required for effective fishing.',
    },
    {
      step: 7,
      title: 'Manage the Fish Fight',
      description:
        'When hooked up, stow your paddle and focus on the fish. The kayak will move with the fish, acting as a giant drag system. Keep your rod low to maintain stability and avoid capsizing on big fish.',
    },
    {
      step: 8,
      title: 'Land Fish Safely',
      description:
        'Lip-grip bass or use a short-handled net for larger fish. Keep the fish in the water alongside the kayak as much as possible. For photos, use a fish gripper to hold the fish over the water, not over the kayak.',
    },
  ],
  requiredGear: [
    {
      item: 'Fishing Kayak',
      description:
        'A stable, sit-on-top fishing kayak with rod holders, tank well, and optional pedal drive. Width of 32 inches or more provides good stability for fishing.',
      tags: ['kayak', 'boat', 'kayak-fishing', 'watercraft'],
    },
    {
      item: 'PFD (Personal Flotation Device)',
      description:
        'A Coast Guard-approved fishing PFD with high-back design and arm freedom. Required by law in most states and essential for safety.',
      tags: ['pfd', 'life-jacket', 'safety', 'kayak-fishing'],
    },
    {
      item: 'Paddle or Pedal Drive',
      description:
        'A quality kayak paddle or hands-free pedal drive system for positioning. Pedal drives allow you to fish while moving.',
      tags: ['paddle', 'pedal-drive', 'kayak-fishing', 'accessory'],
    },
    {
      item: 'Anchor Trolley System',
      description:
        'A rope-and-pulley system that lets you adjust the anchor attachment point along the length of the kayak for optimal positioning in wind and current.',
      tags: ['anchor', 'anchor-trolley', 'kayak-fishing', 'accessory'],
    },
    {
      item: 'Compact Tackle Storage',
      description:
        'Waterproof tackle trays and a small crate system that fits in the kayak tank well. Bring only what you need — space is limited.',
      tags: ['tackle-box', 'storage', 'kayak-fishing', 'accessory'],
    },
    {
      item: 'Fish Finder (Portable)',
      description:
        'A compact, portable fish finder with GPS helps locate structure and fish from a kayak. Many mount directly to the kayak hull.',
      tags: ['electronics', 'fish-finder', 'kayak-fishing', 'portable'],
    },
  ],
  commonMistakes: [
    'Overloading the kayak with too much gear, which reduces stability and freeboard. Pack light and bring only essentials.',
    'Not wearing a PFD — kayak capsizes happen, and even strong swimmers can be in trouble without a life jacket.',
    'Standing up in an unstable kayak to cast or fight fish, risking a capsize.',
    'Forgetting to leash critical items (paddle, rod, phone) — anything that falls overboard in deep water is gone.',
    'Kayak fishing in conditions beyond your skill level, such as strong current, large waves, or boat traffic.',
  ],
  proTips: [
    'A pedal-drive kayak is a game-changer for fishing — it frees both hands for casting and fighting fish while you position with your feet.',
    'Use the stealth advantage of a kayak on pressured water. The low profile and silent approach put you on fish that boats push away.',
    'Install a drift chute attachment point so you can slow your drift on windy days without constantly repositioning.',
    'For saltwater kayak fishing, rinse your entire kayak and all gear with fresh water after every trip to prevent corrosion.',
  ],
  faq: [
    {
      question: 'What is the best kayak for fishing?',
      answer:
        'A sit-on-top fishing kayak at least 12 feet long and 32 inches wide provides the stability and features needed. Popular brands include Hobie, Old Town, Bonafide, and Perception. Pedal-drive models offer the most fishing convenience.',
    },
    {
      question: 'Is kayak fishing safe?',
      answer:
        'Yes, when practiced responsibly. Always wear a PFD, check weather conditions, tell someone your float plan, carry a whistle and light, and stay within your skill level. Avoid strong currents, boat traffic, and offshore conditions until experienced.',
    },
    {
      question: 'Can you stand up in a fishing kayak?',
      answer:
        'Many modern fishing kayaks are stable enough to stand and fish. Look for models specifically designed for standing stability with a width of 34 inches or more. Practice standing in calm, shallow water first.',
    },
    {
      question: 'How do you transport a fishing kayak?',
      answer:
        'Roof rack systems, truck bed carriers, and kayak trailers are the most common options. Some kayaks are light enough (under 80 lbs) for one person to car-top. Inflatable and folding kayaks are also available for easier transport.',
    },
  ],
  imagePath: '/images/techniques/kayak-fishing.jpg',
  imageAlt: 'Angler fishing from a sit-on-top kayak on calm water with rod holders and tackle crate visible',
};
