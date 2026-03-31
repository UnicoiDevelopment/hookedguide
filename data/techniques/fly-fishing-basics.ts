import { Technique } from '../types';

export const flyFishingBasics: Technique = {
  slug: 'fly-fishing-basics',
  name: 'Fly Fishing Basics',
  description:
    'Fly fishing is a specialized casting technique where the weight of the fly line propels a nearly weightless artificial fly to the fish. From mountain trout streams to saltwater flats, fly fishing offers a uniquely connected and immersive angling experience. While the learning curve is steep, the fundamentals can be learned in a single session.',
  difficulty: 4,
  bestFor: ['rainbow-trout', 'brown-trout', 'brook-trout', 'tarpon'],
  waterTypes: ['river', 'lake', 'saltwater'],
  seasons: ['spring', 'summer', 'fall', 'winter'],
  steps: [
    {
      step: 1,
      title: 'Assemble Your Fly Rod and Reel',
      description:
        'Connect the rod sections, seat the reel, and string the fly line through each guide. Pull out enough line to load the rod for casting — typically 20-30 feet of fly line past the rod tip.',
    },
    {
      step: 2,
      title: 'Attach Leader, Tippet, and Fly',
      description:
        'Connect a 7-9 foot tapered leader to the fly line with a loop-to-loop connection. Add 2-3 feet of tippet to the leader end, then tie on your fly using an improved clinch knot.',
    },
    {
      step: 3,
      title: 'Learn the Overhead Cast',
      description:
        'With your elbow close to your body, lift the line off the water with a smooth backcast, pause to let the line straighten behind you, then drive the rod forward to deliver the fly. Stop the rod at the 10 o\'clock position and let the line unroll.',
    },
    {
      step: 4,
      title: 'Practice the Roll Cast',
      description:
        'When there is no room for a backcast, raise the rod slowly until the line hangs in a D-loop beside you, then drive the rod forward firmly. The roll cast is essential for tight quarters and windy conditions.',
    },
    {
      step: 5,
      title: 'Learn to Mend Line',
      description:
        'After the fly lands, flip an upstream loop of line onto the water to slow down drag. Proper mending keeps the fly drifting naturally at the same speed as the current — this is critical for trout fishing.',
    },
    {
      step: 6,
      title: 'Present the Fly Naturally',
      description:
        'Cast upstream of the fish and let the fly drift naturally into the feeding lane. For dry flies, a drag-free drift is essential. For nymphs, get the fly deep quickly with weighted flies or split shot.',
    },
    {
      step: 7,
      title: 'Detect the Strike',
      description:
        'For dry flies, watch for the fish to eat the fly on the surface and set the hook with a gentle lift. For nymphs, watch your strike indicator or the tip of the fly line for any hesitation or movement — set the hook on any anomaly.',
    },
    {
      step: 8,
      title: 'Fight and Land the Fish',
      description:
        'Let the fish run against the reel drag. Use the rod to steer the fish away from obstructions. Keep the rod bent and maintain steady pressure. Net the fish headfirst and handle with wet hands for a safe release.',
    },
  ],
  requiredGear: [
    {
      item: 'Fly Rod (5-weight for trout)',
      description:
        'A 9-foot 5-weight fly rod is the most versatile starting point. It handles dry flies, nymphs, and small streamers for trout. Upgrade to 8-weight or higher for saltwater.',
      tags: ['rod', 'fly-rod', 'trout', 'fly-fishing'],
    },
    {
      item: 'Fly Reel with Matching Line',
      description:
        'A quality fly reel matched to the rod weight with a smooth drag system. Load it with weight-forward floating fly line for the most versatile setup.',
      tags: ['reel', 'fly-reel', 'fly-line', 'fly-fishing', 'trout'],
    },
    {
      item: 'Tapered Leaders and Tippet',
      description:
        'Tapered leaders (7-9 foot) turn over flies properly. Tippet (4X-6X for trout) extends the leader and is replaced as you change flies.',
      tags: ['leader', 'tippet', 'fly-fishing', 'terminal-tackle'],
    },
    {
      item: 'Fly Selection (Dry, Nymph, Streamer)',
      description:
        'A basic fly box should include Adams, Elk Hair Caddis, Parachute Adams (dry), Pheasant Tail, Hare\'s Ear (nymph), and Woolly Bugger (streamer).',
      tags: ['flies', 'dry-fly', 'nymph', 'streamer', 'fly-fishing', 'trout'],
    },
    {
      item: 'Waders and Wading Boots',
      description:
        'Breathable chest waders with felt or rubber-sole wading boots keep you dry and provide safe footing on slippery river bottoms.',
      tags: ['waders', 'boots', 'fly-fishing', 'apparel'],
    },
    {
      item: 'Landing Net',
      description:
        'A rubber-mesh catch-and-release net protects the fish\'s slime coat and makes landing fish easier when wading.',
      tags: ['net', 'landing-net', 'fly-fishing', 'accessory'],
    },
  ],
  commonMistakes: [
    'Using too much wrist and not enough arm during the cast — the power comes from the forearm, with the wrist acting as a hinge at the very end.',
    'Not pausing long enough on the backcast, causing the line to pile up behind you instead of straightening fully.',
    'Ignoring the drag on a dry fly presentation. Even slight drag makes a fly look unnatural and puts trout off.',
    'Wading too aggressively into the water and spooking fish. Always fish the water in front of you before stepping in.',
    'Starting with too heavy or too light a fly rod. A 5-weight is the ideal all-around starting point for most freshwater fly fishing.',
  ],
  proTips: [
    'Spend your first hour on the water practicing casting on grass before fishing — clean loops and good timing will catch more fish than fancy flies.',
    'Match the hatch: turn over rocks to see what nymphs are present, and look at the surface for emerging or egg-laying adults to determine what fly to use.',
    'Upstream presentations to trout are most effective because you approach from behind the fish, staying out of their line of sight.',
    'Learn the reach cast and the curve cast early — these casts help achieve drag-free drifts in complex currents and will dramatically increase your catch rate.',
  ],
  faq: [
    {
      question: 'Is fly fishing hard to learn?',
      answer:
        'The basics can be learned in a few hours with instruction, but mastering fly casting and presentation takes years. Starting with a lesson or a guide trip dramatically shortens the learning curve.',
    },
    {
      question: 'What weight fly rod should a beginner use?',
      answer:
        'A 9-foot 5-weight rod is the best all-around starting rod. It handles trout-sized fish in rivers and lakes, can cast dry flies and nymphs, and is forgiving enough for learning proper casting technique.',
    },
    {
      question: 'How much does fly fishing equipment cost to get started?',
      answer:
        'A quality beginner outfit (rod, reel, line, leader) ranges from $150 to $400. Add $50-100 for a basic fly selection and $100-300 for waders if needed. Many shops offer starter packages that include everything.',
    },
    {
      question: 'Can you fly fish in saltwater?',
      answer:
        'Yes, saltwater fly fishing is a huge and growing sport. Target redfish, bonefish, tarpon, striped bass, and many other species. You will need a heavier rod (8-12 weight) and corrosion-resistant reel.',
    },
    {
      question: 'What is the difference between dry flies and nymphs?',
      answer:
        'Dry flies float on the surface and imitate adult insects. Nymphs sink below the surface and imitate the larval/pupal stage of insects living on the river bottom. Nymphs catch fish about 80% of the time since trout feed subsurface most of the day.',
    },
  ],
  imagePath: '/images/techniques/fly-fishing-basics.jpg',
  imageAlt: 'Fly angler casting a tight loop on a mountain trout stream with line unfurling in the air',
};
