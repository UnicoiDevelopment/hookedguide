import { Technique } from '../types';

export const carolinaRig: Technique = {
  slug: 'carolina-rig',
  name: 'Carolina Rig',
  description:
    'The Carolina rig is a deep-water bottom-bouncing technique that covers water efficiently and keeps your soft plastic hovering just off the bottom. The heavy weight drags along the substrate while the bait floats behind on a leader, creating an irresistible presentation for bass relating to structure.',
  difficulty: 2,
  bestFor: ['largemouth-bass', 'spotted-bass'],
  waterTypes: ['lake', 'reservoir'],
  seasons: ['summer', 'fall'],
  steps: [
    {
      step: 1,
      title: 'Thread the Egg Sinker',
      description:
        'Slide a 1/2 oz to 1 oz egg sinker or Carolina-specific weight onto your main line. Heavier weights work better in deeper water or when wind and current are factors.',
    },
    {
      step: 2,
      title: 'Add a Bead',
      description:
        'Slide a glass or plastic bead onto the line after the sinker. The bead protects the knot from the weight and creates a clicking sound against the sinker that attracts fish.',
    },
    {
      step: 3,
      title: 'Tie on the Barrel Swivel',
      description:
        'Tie your main line to one end of a barrel swivel using a Palomar knot. The swivel prevents line twist and acts as a stop for the weight and bead assembly.',
    },
    {
      step: 4,
      title: 'Attach the Leader',
      description:
        'Tie a 2-4 foot fluorocarbon leader (12-15 lb) to the other end of the swivel. Longer leaders give the bait more freedom to float and move naturally.',
    },
    {
      step: 5,
      title: 'Rig the Hook and Bait',
      description:
        'Tie a 1/0 to 3/0 offset hook to the end of the leader. Rig a soft plastic lizard, creature bait, or French fry worm Texas-style (weedless) on the hook.',
    },
    {
      step: 6,
      title: 'Make a Long Cast',
      description:
        'The Carolina rig is built for distance. Make a long cast to cover as much water as possible. Target points, humps, ledges, and transition areas where bass stage in deeper water.',
    },
    {
      step: 7,
      title: 'Drag and Sweep',
      description:
        'Use long, slow sweeps of the rod to drag the weight across the bottom. The sinker kicks up sediment and makes noise while the bait trails behind enticingly. Reel up slack between sweeps.',
    },
    {
      step: 8,
      title: 'Detect Bites and Set the Hook',
      description:
        'Bites often feel like a subtle mushy pull or extra weight on the line. When you feel a bite, reel down to the fish, then set the hook with a long sweeping hookset rather than a sharp snap.',
    },
  ],
  requiredGear: [
    {
      item: 'Egg Sinkers (1/2 oz - 1 oz)',
      description:
        'Egg-shaped or barrel-shaped sinkers that slide on the main line. Tungsten versions are more compact and sensitive.',
      tags: ['weights', 'egg-sinker', 'carolina-rig', 'bass', 'sinker'],
    },
    {
      item: 'Glass Beads',
      description:
        'Faceted glass beads placed between the sinker and swivel create a clicking sound that mimics crawfish and attracts bass.',
      tags: ['beads', 'glass-bead', 'carolina-rig', 'bass', 'accessory'],
    },
    {
      item: 'Barrel Swivels',
      description:
        'Quality barrel swivels prevent line twist and serve as the junction between main line and leader.',
      tags: ['swivel', 'barrel-swivel', 'carolina-rig', 'terminal-tackle'],
    },
    {
      item: 'Soft Plastic Baits',
      description:
        'Lizards, creature baits, French fry worms, and flukes all work well on the Carolina rig. Choose buoyant plastics that float off the bottom.',
      tags: ['soft-plastic', 'lizard', 'creature-bait', 'carolina-rig', 'bass'],
    },
    {
      item: 'Heavy Baitcasting Rod (7\'6" or longer)',
      description:
        'A longer medium-heavy to heavy rod is essential for making long casts and sweeping hooksets at distance.',
      tags: ['rod', 'baitcasting', 'bass', 'heavy', 'carolina-rig'],
    },
    {
      item: 'Fluorocarbon Leader (12-15 lb)',
      description:
        'A fluorocarbon leader between the swivel and hook provides near-invisibility and abrasion resistance near the bait.',
      tags: ['line', 'fluorocarbon', 'leader', 'bass'],
    },
  ],
  commonMistakes: [
    'Using too short of a leader — a 2-4 foot leader lets the bait move naturally; shorter leaders restrict action.',
    'Dragging too fast and not giving bass time to commit to the bait.',
    'Forgetting the bead, which eliminates the clicking sound and exposes the knot to damage from the weight.',
    'Using sinking plastics instead of buoyant ones — the bait should float up off the bottom behind the sinker.',
  ],
  proTips: [
    'Use a tungsten weight for maximum sensitivity — you can feel every rock, stump, and transition on the bottom.',
    'Try a 3-4 foot leader in clear water and shorten to 18 inches in stained or muddy conditions.',
    'The Carolina rig excels as a search bait — use it to locate fish on large flats, then switch to a Texas rig or jig to pick apart specific spots.',
    'Add a small float to your leader near the hook to keep the bait elevated even higher off the bottom.',
  ],
  faq: [
    {
      question: 'What is the difference between a Carolina rig and a Texas rig?',
      answer:
        'The main difference is the leader. A Carolina rig uses a heavy weight separated from the hook by a swivel and 2-4 foot leader, keeping the bait hovering off the bottom. A Texas rig puts the weight directly above the hook on the same line.',
    },
    {
      question: 'How deep should I fish a Carolina rig?',
      answer:
        'Carolina rigs shine in 8-25 feet of water, though they can be fished deeper. They are most effective on offshore structure like humps, points, and ledges where bass hold in summer and fall.',
    },
    {
      question: 'What rod action is best for a Carolina rig?',
      answer:
        'A 7\'6" medium-heavy to heavy moderate-action rod is ideal. The extra length aids casting distance, and the moderate action loads up for sweeping hooksets at long range.',
    },
    {
      question: 'Can I use a Carolina rig from the bank?',
      answer:
        'Yes, but it works best from a boat where you can position over deeper structure. From shore, target points and drop-offs within casting range using the longest rod you can manage.',
    },
  ],
  imagePath: '/images/techniques/carolina-rig.jpg',
  imageAlt: 'Carolina rig diagram showing egg sinker, glass bead, swivel, leader, and soft plastic bait',
};
