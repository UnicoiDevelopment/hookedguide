import { Technique } from '../types';

export const topwater: Technique = {
  slug: 'topwater',
  name: 'Topwater Fishing',
  description:
    'Topwater fishing produces the most exciting strikes in all of fishing. Surface lures like poppers, walking baits, buzzbaits, and frogs create commotion on top that draws explosive blowups from bass, redfish, snook, and other predators. Best at dawn, dusk, and in low-light conditions.',
  difficulty: 2,
  bestFor: ['largemouth-bass', 'striped-bass', 'redfish', 'speckled-trout', 'snook'],
  waterTypes: ['lake', 'river', 'pond', 'reservoir'],
  seasons: ['spring', 'summer', 'fall'],
  steps: [
    {
      step: 1,
      title: 'Choose the Right Topwater Style',
      description:
        'Select your lure based on conditions: poppers for calm water, walking baits (Zara Spook style) for open water, buzzbaits for covering water fast, and frogs for heavy surface vegetation.',
    },
    {
      step: 2,
      title: 'Time It Right',
      description:
        'Topwater fishing is best during low-light periods — dawn, dusk, overcast days, and nighttime. Early morning is the prime window when fish are feeding on the surface.',
    },
    {
      step: 3,
      title: 'Cast Past Your Target',
      description:
        'Cast beyond where you expect fish to be, then work the lure through the strike zone. This prevents spooking fish with the splash of your cast landing directly on them.',
    },
    {
      step: 4,
      title: 'Walk the Dog',
      description:
        'For walking baits, use a rhythmic twitch-pause-twitch with the rod tip pointed down toward the water. The lure should zigzag side to side in a cadence. Keep slack in the line between twitches.',
    },
    {
      step: 5,
      title: 'Pop and Pause',
      description:
        'For poppers, use sharp downward rod tip snaps to create a popping, spitting action. Pause 2-5 seconds between pops. Longer pauses work better in calm conditions and colder water.',
    },
    {
      step: 6,
      title: 'Buzz It Back',
      description:
        'For buzzbaits, start your retrieve the instant the bait hits the water to keep it on the surface. Maintain a steady retrieve speed that keeps the blade churning without the bait going subsurface.',
    },
    {
      step: 7,
      title: 'Wait for the Weight',
      description:
        'The hardest part of topwater fishing is not setting the hook on the explosion. Wait until you feel the weight of the fish pulling on the line before setting the hook. Many anglers miss fish by reacting to the visual strike too quickly.',
    },
    {
      step: 8,
      title: 'Set the Hook and Fight',
      description:
        'Once you feel the weight, set the hook with a firm sweep. Keep your rod tip up during the fight, as topwater fish often jump and thrash at the surface. Steady pressure with a slightly loose drag prevents them from throwing the lure.',
    },
  ],
  requiredGear: [
    {
      item: 'Walking Bait (Zara Spook / Pencil Style)',
      description:
        'Side-to-side walking baits are the most versatile topwater lures. Models like the Zara Spook, Heddon Super Spook, and One Knocker are classics.',
      tags: ['topwater', 'walking-bait', 'hard-bait', 'lure', 'bass'],
    },
    {
      item: 'Popper',
      description:
        'Cupped-face poppers create a spitting, popping action that mimics baitfish feeding on the surface. Effective in calm water for bass and saltwater species.',
      tags: ['topwater', 'popper', 'hard-bait', 'lure', 'bass', 'redfish'],
    },
    {
      item: 'Buzzbait',
      description:
        'Inline or safety-pin style buzzbaits churn the surface with a rotating blade, creating noise and a bubble trail that draws fish from a distance.',
      tags: ['topwater', 'buzzbait', 'lure', 'bass'],
    },
    {
      item: 'Topwater Frog',
      description:
        'Hollow-body frogs walk over lily pads, mats, and surface vegetation where other lures cannot go. They are completely weedless.',
      tags: ['topwater', 'frog', 'weedless', 'lure', 'bass'],
    },
    {
      item: 'Medium-Heavy Rod with Moderate Tip',
      description:
        'A rod with moderate tip action helps prevent pulling the bait away from the fish during the explosive strike, while still having backbone for hooksets.',
      tags: ['rod', 'baitcasting', 'topwater', 'bass'],
    },
    {
      item: 'Monofilament Line (12-17 lb)',
      description:
        'Monofilament floats, which helps keep topwater lures on the surface. The stretch also acts as a shock absorber during violent strikes.',
      tags: ['line', 'monofilament', 'topwater', 'bass'],
    },
  ],
  commonMistakes: [
    'Setting the hook on the splash instead of waiting to feel the weight of the fish — this is the most common topwater mistake.',
    'Fishing topwater in the middle of a bright, sunny day when fish have moved deeper and are less likely to come to the surface.',
    'Retrieving too fast and not giving fish time to track and commit to the bait.',
    'Using braided line with treble-hook topwater lures, which has no stretch and pulls hooks free on the violent strikes.',
  ],
  proTips: [
    'When a fish blows up and misses your walking bait, immediately stop the lure and let it sit motionless for 5-10 seconds. The fish will often come back for a second strike.',
    'Use braided line ONLY for frogs, where you need zero stretch to drive the hooks through the bait and into the fish. Use monofilament for all treble-hook topwater.',
    'On calm mornings, a subtle popper or prop bait outperforms loud buzzbaits. Match the noise level to the conditions.',
    'Overcast, slightly windy days extend the topwater bite well past the normal dawn/dusk windows.',
  ],
  faq: [
    {
      question: 'Why do I keep missing topwater strikes?',
      answer:
        'You are likely setting the hook on the visual explosion rather than waiting to feel the fish. Close your eyes or look away when you see the blowup, then set the hook only when you feel the rod load up with the weight of the fish.',
    },
    {
      question: 'What is the best topwater lure for bass?',
      answer:
        'A walking bait like the Heddon Zara Spook or Super Spook is the most versatile topwater. Buzzbaits are best for covering water, poppers for calm conditions, and frogs for heavy cover.',
    },
    {
      question: 'What time of day is best for topwater?',
      answer:
        'The first two hours after sunrise and the last hour before sunset are prime topwater windows. Overcast days and nighttime can also produce excellent topwater action.',
    },
    {
      question: 'Can you fish topwater in the fall?',
      answer:
        'Fall is outstanding for topwater fishing. Bass and other predators chase shad and baitfish to the surface as water temperatures cool. Walking baits and poppers over schooling fish is some of the best fishing of the year.',
    },
    {
      question: 'What color topwater lure should I use?',
      answer:
        'Bone (white/cream), chrome/silver, and black are the three essential colors. Use bone and chrome in clear water, black in low light and stained water. Fish see topwater from below, so the silhouette matters most.',
    },
  ],
  imagePath: '/images/techniques/topwater.jpg',
  imageAlt: 'Explosive topwater bass strike on a walking bait at dawn with water spraying',
};
