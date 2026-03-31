import { Technique } from '../types';

export const nedRig: Technique = {
  slug: 'ned-rig',
  name: 'Ned Rig',
  description:
    'The Ned rig is the simplest and most beginner-friendly bass technique. A small mushroom-head jig paired with a short soft plastic stick bait creates a subtle, natural presentation that catches bass when nothing else will. Named after fishing writer Ned Kehde, it has become a go-to finesse approach nationwide.',
  difficulty: 1,
  bestFor: ['smallmouth-bass', 'largemouth-bass', 'spotted-bass'],
  waterTypes: ['lake', 'river', 'pond', 'reservoir'],
  seasons: ['spring', 'summer', 'fall', 'winter'],
  steps: [
    {
      step: 1,
      title: 'Choose Your Mushroom Head Jig',
      description:
        'Select a 1/16 oz to 1/4 oz mushroom-style jig head. The flat bottom design allows the bait to stand upright on the bottom, mimicking a feeding baitfish or crawfish.',
    },
    {
      step: 2,
      title: 'Select a Short Soft Plastic',
      description:
        'Use a 2.5 to 3.5 inch stick bait, TRD (The Real Deal) style bait, or finesse worm. The short profile is key to the Ned rig concept — resist the urge to upsize.',
    },
    {
      step: 3,
      title: 'Thread the Bait onto the Jig Head',
      description:
        'Push the jig head hook straight through the center of the bait, keeping it aligned so it sits straight. About 1/3 to 1/2 of the bait should extend past the hook bend.',
    },
    {
      step: 4,
      title: 'Use Light Spinning Tackle',
      description:
        'Spool a spinning reel with 6-8 lb fluorocarbon or a thin braid with fluorocarbon leader. Pair with a 6\'6" to 7-foot medium-light spinning rod.',
    },
    {
      step: 5,
      title: 'Cast to Structure and Cover',
      description:
        'Cast the Ned rig to rocks, docks, points, or any structure. The lightweight jig does not cast far, so position yourself within range or use lighter line for distance.',
    },
    {
      step: 6,
      title: 'Let It Sink and Sit',
      description:
        'Allow the bait to sink on a semi-slack line. The mushroom head makes the bait stand upright on the bottom — let it sit there for several seconds. Many bites come during the pause.',
    },
    {
      step: 7,
      title: 'Retrieve with Small Hops',
      description:
        'Use small rod tip twitches to hop the bait a few inches off the bottom, then let it settle back down. A slow, lazy drag-and-pause also works well. The key is patience.',
    },
    {
      step: 8,
      title: 'Set the Hook Gently',
      description:
        'When you feel a thump or see the line move, reel down and sweep the rod upward with moderate pressure. The exposed hook on a Ned rig means hookup ratios are excellent with just a reel set.',
    },
  ],
  requiredGear: [
    {
      item: 'Mushroom Head Jigs (1/16 oz - 1/4 oz)',
      description:
        'Flat-bottom mushroom-style jig heads that let the bait stand upright on the bottom. The round head also comes through rocks well.',
      tags: ['jig', 'mushroom-head', 'ned-rig', 'finesse', 'bass'],
    },
    {
      item: 'Short Stick Baits (2.5-3.5 inch)',
      description:
        'Z-Man TRD, Berkley TRD, or similar short finesse stick baits made from buoyant ElaZtech or standard plastic. Buoyant materials make the bait stand up.',
      tags: ['soft-plastic', 'stick-bait', 'ned-rig', 'finesse', 'bass'],
    },
    {
      item: 'Medium-Light Spinning Rod',
      description:
        'A 6\'6" to 7-foot medium-light fast-action spinning rod provides the sensitivity and light backbone needed for Ned rig fishing.',
      tags: ['rod', 'spinning', 'finesse', 'medium-light', 'bass'],
    },
    {
      item: 'Spinning Reel (2500 size)',
      description:
        'A smooth 2500-size spinning reel with a quality drag system handles the light line and subtle hooksets required.',
      tags: ['reel', 'spinning', 'finesse', 'bass'],
    },
    {
      item: 'Light Fluorocarbon Line (6-8 lb)',
      description:
        'Light fluorocarbon provides low visibility and a direct connection to the bait for detecting subtle bites.',
      tags: ['line', 'fluorocarbon', 'finesse', 'light-line'],
    },
  ],
  commonMistakes: [
    'Using too large a bait — the Ned rig works because of its small, subtle profile. Stick with 3 inches or shorter.',
    'Fishing too fast — the Ned rig is designed for slow, patient presentations with extended pauses.',
    'Setting the hook too hard and pulling the bait away from the fish. A gentle sweep is all you need with exposed hooks.',
    'Using heavy line that impairs the natural action and subtle fall of the lightweight jig.',
  ],
  proTips: [
    'Use ElaZtech or similar buoyant material so the bait stands straight up on the bottom like a feeding baitfish.',
    'The Ned rig is one of the best techniques for fishing behind other anglers — it catches pressured fish that refused reaction baits.',
    'Downsize to a 1/16 oz head in calm, shallow water for an incredibly slow, natural fall that smallmouth cannot resist.',
    'Try the Ned rig on a shaky head for slightly larger presentations while keeping the finesse approach.',
  ],
  faq: [
    {
      question: 'Why is the Ned rig so effective?',
      answer:
        'The small profile, slow fall, and ability to stand upright on the bottom create a presentation that looks like a small baitfish or crawfish feeding. It triggers bites from pressured fish that ignore larger, more aggressive presentations.',
    },
    {
      question: 'What size hook is on a Ned rig jig head?',
      answer:
        'Most Ned rig jig heads use a #1 or #2 hook, which matches the small baits used. Some weedless versions use a #1/0 hook with a wire guard.',
    },
    {
      question: 'Can you fish a Ned rig in heavy cover?',
      answer:
        'Standard Ned rigs have an exposed hook, so they snag easily in heavy cover. Use a weedless mushroom head jig with a wire guard for brushy or weedy areas.',
    },
    {
      question: 'What is the best color for a Ned rig?',
      answer:
        'Green pumpkin, watermelon, and natural brown/tan colors work in most situations. Use brighter colors like chartreuse or white in stained water.',
    },
    {
      question: 'Is the Ned rig good for tournaments?',
      answer:
        'Absolutely. The Ned rig has won money at every level of tournament fishing. It is especially valuable as a follow-up bait on pressured water or as a reliable limit-catcher.',
    },
  ],
  imagePath: '/images/techniques/ned-rig.jpg',
  imageAlt: 'Ned rig with mushroom head jig and short stick bait standing upright on a rocky bottom',
};
