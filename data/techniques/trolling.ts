import { Technique } from '../types';

export const trolling: Technique = {
  slug: 'trolling',
  name: 'Trolling',
  description:
    'Trolling is the technique of pulling lures or bait behind a moving boat to cover vast amounts of water and locate active fish. From walleye on inland lakes to offshore pelagics, trolling is one of the most efficient ways to target fish that are spread out or roaming open water.',
  difficulty: 2,
  bestFor: ['walleye', 'striped-bass', 'king-mackerel', 'mahi-mahi', 'musky'],
  waterTypes: ['lake', 'reservoir', 'saltwater'],
  seasons: ['spring', 'summer', 'fall', 'winter'],
  steps: [
    {
      step: 1,
      title: 'Select Your Trolling Lures',
      description:
        'Choose lures based on your target species: crankbaits and worm harnesses for walleye, large plugs for musky, spoons and skirted lures for saltwater. Match size and color to local forage.',
    },
    {
      step: 2,
      title: 'Determine Trolling Speed',
      description:
        'Speed is critical. Walleye typically prefer 1.0-2.0 mph, bass and musky 2.0-4.0 mph, and offshore species 5.0-8.0 mph. Use a GPS for accurate speed readings, as current affects boat speed relative to lure speed.',
    },
    {
      step: 3,
      title: 'Set Your Line Length',
      description:
        'The distance between the boat and lure (setback) affects depth and how far from boat noise the lure runs. Longer setbacks reach deeper and are farther from engine noise. Use line counters on your reels.',
    },
    {
      step: 4,
      title: 'Deploy Planer Boards (Optional)',
      description:
        'Planer boards pull your lines to the side of the boat, allowing you to cover a wider swath of water and run multiple lines without tangling. They also keep lines away from boat wake and motor noise.',
    },
    {
      step: 5,
      title: 'Use Downriggers for Depth Control (Optional)',
      description:
        'Downriggers use a heavy ball on a cable to get your lure to an exact depth. When a fish strikes, the line releases from the clip and you fight the fish without the weight. Essential for deep-water species.',
    },
    {
      step: 6,
      title: 'Monitor Electronics Constantly',
      description:
        'Watch your depth finder for baitfish, structure, and temperature breaks. Troll along contour lines, weed edges, and temperature transitions where fish are most likely to concentrate.',
    },
    {
      step: 7,
      title: 'Make S-Turns and Speed Changes',
      description:
        'Periodically turn the boat in wide S-curves. This causes inside lures to slow and fall while outside lures speed up and rise, triggering strikes from following fish. Speed bursts work similarly.',
    },
    {
      step: 8,
      title: 'Detect Strikes and Land Fish',
      description:
        'Watch your rod tips for the telltale pull-down of a strike. With planer boards, the board will pull back or release. Grab the rod, set the hook with a firm sweep, and fight the fish to the boat while the other angler clears remaining lines if needed.',
    },
  ],
  requiredGear: [
    {
      item: 'Trolling Rod and Reel Combos',
      description:
        'Medium to medium-heavy rods with line-counter reels allow precise setback measurements. You will need multiple rod holders and typically run 2-6 rods while trolling.',
      tags: ['rod', 'reel', 'trolling', 'line-counter', 'walleye'],
    },
    {
      item: 'Planer Boards',
      description:
        'In-line planer boards or mast systems spread lines to each side of the boat. They are essential for covering water and running multiple lines without tangling.',
      tags: ['planer-board', 'trolling', 'walleye', 'accessory'],
    },
    {
      item: 'Trolling Lures and Crankbaits',
      description:
        'Deep-diving crankbaits, worm harnesses, spoons, and trolling plugs designed to run true at speed. Stock multiple colors and diving depths.',
      tags: ['crankbait', 'spoon', 'trolling', 'lure', 'walleye'],
    },
    {
      item: 'GPS and Fish Finder',
      description:
        'A quality GPS/fish finder combo is essential for monitoring speed, tracking trolling routes, marking waypoints, and locating fish and structure.',
      tags: ['electronics', 'gps', 'fish-finder', 'trolling'],
    },
    {
      item: 'Downriggers (for deep trolling)',
      description:
        'Manual or electric downriggers with heavy balls allow precise depth control. They are essential for targeting suspended fish in deep water.',
      tags: ['downrigger', 'trolling', 'deep-water', 'accessory'],
    },
  ],
  commonMistakes: [
    'Trolling at the wrong speed for the target species — even small speed changes can make or break the bite.',
    'Not using line-counter reels, which makes it impossible to replicate the setback that produced bites.',
    'Running all lures at the same depth and distance instead of staggering them to find the productive zone.',
    'Ignoring turns and speed changes — straight-line trolling at constant speed catches fewer fish than dynamic trolling.',
  ],
  proTips: [
    'When you catch a fish, note the speed, setback, depth, and lure. Replicate those exact conditions with your other lines for multiple hookups.',
    'Troll into the wind whenever possible — it slows your ground speed and gives you better lure control.',
    'Use bright-colored lures on sunny days and natural patterns on overcast days as a starting point, then adjust based on bites.',
    'In-line planer boards with flag releases let you see strikes from a distance, making multi-rod trolling much more manageable.',
    'Keep a detailed trolling log with GPS coordinates, speed, lure, and conditions — this data is gold for future trips.',
  ],
  faq: [
    {
      question: 'How fast should I troll?',
      answer:
        'Speed depends on target species: 1.0-2.0 mph for walleye, 2.0-4.0 mph for bass and musky, 5.0-8.0 mph for offshore pelagics like king mackerel and mahi-mahi. Always use GPS speed, not your speedometer.',
    },
    {
      question: 'How many lines can I troll at once?',
      answer:
        'Check your state regulations, as many states limit the number of lines per angler (commonly 2-3). Planer boards and downriggers allow you to effectively manage multiple lines without tangling.',
    },
    {
      question: 'Do I need a big boat for trolling?',
      answer:
        'Not necessarily. You can troll effectively from a 14-foot aluminum boat with a small outboard or even a trolling motor. Larger boats are needed for offshore trolling and rough water.',
    },
    {
      question: 'What is the best fish finder for trolling?',
      answer:
        'Look for a unit with GPS, side imaging, and down imaging capabilities. Popular brands include Humminbird, Lowrance, and Garmin. A 7-inch screen is the minimum for comfortable trolling use.',
    },
  ],
  imagePath: '/images/techniques/trolling.jpg',
  imageAlt: 'Boat trolling with multiple rods deployed using planer boards spreading lines to either side',
};
