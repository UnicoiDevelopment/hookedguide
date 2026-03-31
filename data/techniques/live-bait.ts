import { Technique } from '../types';

export const liveBait: Technique = {
  slug: 'live-bait',
  name: 'Live Bait Fishing',
  description:
    'Live bait fishing is the most natural and versatile way to catch fish. Whether you are threading a worm on a hook, lip-hooking a minnow, or pinching a shrimp under a popping cork, presenting a real meal is often the fastest path to a bent rod. This guide covers minnows, worms, shrimp, and crawfish for freshwater and saltwater species.',
  difficulty: 1,
  bestFor: [
    'crappie',
    'walleye',
    'channel-catfish',
    'blue-catfish',
    'flathead-catfish',
    'redfish',
    'speckled-trout',
    'bluegill',
  ],
  waterTypes: ['lake', 'river', 'pond', 'reservoir', 'saltwater'],
  seasons: ['spring', 'summer', 'fall', 'winter'],
  steps: [
    {
      step: 1,
      title: 'Thread a Worm Correctly',
      description:
        'Insert the hook point into the head of the worm and thread it up the shank until the worm is bunched and secure. For larger worms, you can wacky-rig them by hooking through the middle. Leave enough worm tail dangling to create natural movement in the water.',
    },
    {
      step: 2,
      title: 'Lip-Hook or Back-Hook a Minnow',
      description:
        'For casting, hook the minnow through both lips from bottom to top so it stays on during the cast. For float fishing or slow trolling, hook through the back just behind the dorsal fin, avoiding the spine. Back-hooked minnows swim more naturally but come off easier on hard casts.',
    },
    {
      step: 3,
      title: 'Hook a Shrimp for Saltwater',
      description:
        'Hook live shrimp through the horn (the hard point on top of the head) for the most natural swimming action. Alternatively, thread the hook through the tail for casting distance. Avoid hooking through the dark spot behind the head, which is the brain and will kill the shrimp quickly.',
    },
    {
      step: 4,
      title: 'Hook a Crawfish Through the Tail',
      description:
        'Push the hook through the second or third segment of the crawfish tail from the underside up. This keeps the crawfish alive and allows it to move naturally along the bottom. Remove or break the pincers if the crawfish keeps grabbing cover and hanging up.',
    },
    {
      step: 5,
      title: 'Keep Your Bait Alive',
      description:
        'Use an aerated bait bucket or a flow-through bait container tied to the dock. Change water frequently if using a non-aerated bucket. Keep bait out of direct sunlight and avoid overcrowding. Cold water holds more oxygen, so add ice in summer if your bait species tolerates it.',
    },
    {
      step: 6,
      title: 'Fish Under a Float',
      description:
        'Attach a slip bobber or fixed bobber above your hook and set the depth so your bait suspends just above the strike zone. Add a small split shot 12 to 18 inches above the hook to keep the bait down. This is ideal for crappie, bluegill, and speckled trout.',
    },
    {
      step: 7,
      title: 'Fish on the Bottom',
      description:
        'Use a Carolina rig or simple egg sinker rig to present live bait on the bottom for catfish, walleye, and redfish. Thread the sinker on your main line, tie a swivel, then run 18 to 24 inches of leader to the hook. The bait can move freely without feeling the weight.',
    },
    {
      step: 8,
      title: 'Free-Line for a Natural Presentation',
      description:
        'Cast your hooked bait with no weight or float and let it swim freely. This works well in current, around docks, and over shallow flats where fish are actively feeding. Keep a slight bow in your line and watch for twitches or steady movement indicating a bite.',
    },
  ],
  requiredGear: [
    {
      item: 'Live Bait Hooks (size 6 to 3/0)',
      description:
        'Thin-wire live bait hooks keep your bait alive longer and penetrate easily on the hookset. Use smaller sizes for crappie and bluegill, larger sizes for catfish and redfish.',
      tags: ['hooks', 'live-bait', 'bait-hook', 'crappie', 'catfish'],
    },
    {
      item: 'Bobbers and Floats',
      description:
        'Slip bobbers allow adjustable depth and are essential for suspending live bait. Fixed bobbers work in shallow water. Popping corks add noise attraction for saltwater species.',
      tags: ['bobber', 'float', 'slip-bobber', 'popping-cork', 'live-bait'],
    },
    {
      item: 'Split Shot Sinkers',
      description:
        'Small split shot weights pinch onto your line to control bait depth and casting distance without adding excessive weight that spooks wary fish.',
      tags: ['weights', 'split-shot', 'sinker', 'live-bait'],
    },
    {
      item: 'Aerated Bait Bucket',
      description:
        'A battery-powered aerated bucket keeps minnows, shrimp, and other bait alive for hours. Essential for any serious live bait angler, especially in warm weather.',
      tags: ['bait-bucket', 'aerator', 'live-bait', 'minnow', 'shrimp'],
    },
  ],
  commonMistakes: [
    'Hooking bait too deep and killing it quickly — use thin-wire hooks and hook through non-vital areas to keep bait lively.',
    'Letting bait die by neglecting water quality and temperature — change water often and keep the bucket in the shade.',
    'Using the wrong hook size — a hook that is too large kills small bait fast, and a hook that is too small leads to missed hooksets on bigger fish.',
    'Setting the hook too fast on the first bump — many species mouth live bait before committing, so wait for steady weight or a second run before swinging.',
  ],
  proTips: [
    'Add a small piece of bright yarn or bead above the hook to act as an attractor that draws fish to your live bait from a distance.',
    'When crappie fishing with minnows, use a double-hook rig with baits at different depths to find the fish faster.',
    'In saltwater, tip your jig head with a live shrimp for a combination of artificial action and natural scent that redfish and trout cannot resist.',
    'For trophy flathead catfish, use the liveliest large bait you can find — flatheads strongly prefer live prey over cut or dead bait.',
  ],
  faq: [
    {
      question: 'What is the best live bait for crappie?',
      answer:
        'Small minnows in the 1.5 to 2 inch range are the top live bait for crappie. Hook them through the lips for casting or through the back for float fishing. Crappie also respond well to small worms and wax worms, especially in cold water.',
    },
    {
      question: 'How do I keep minnows alive all day?',
      answer:
        'Use an aerated bait bucket and keep it out of direct sunlight. Do not overcrowd the bucket. In summer, add a small frozen water bottle to keep the temperature down. Change the water periodically if you are not using an aerator.',
    },
    {
      question: 'Can I use live bait in saltwater?',
      answer:
        'Absolutely. Live shrimp is the most versatile saltwater bait and catches redfish, speckled trout, flounder, and many other species. Live finger mullet, pinfish, and mud minnows are also excellent, especially for larger predators.',
    },
    {
      question: 'Is live bait better than artificial lures?',
      answer:
        'Live bait is often more effective for beginners and in tough fishing conditions because it provides natural scent, movement, and appearance. However, artificial lures allow you to cover more water faster and target specific species. Many experienced anglers use both.',
    },
    {
      question: 'What size hook should I use for live bait?',
      answer:
        'Use size 6 to size 2 hooks for panfish and crappie, size 1 to 1/0 for walleye and trout, and 2/0 to 3/0 for catfish and redfish. Always match the hook to the size of your bait — the hook should not overpower the bait or restrict its natural movement.',
    },
  ],
  imagePath: '/images/techniques/live-bait.jpg',
  imageAlt: 'Live bait fishing setup showing a minnow hooked under a slip bobber rig',
};
