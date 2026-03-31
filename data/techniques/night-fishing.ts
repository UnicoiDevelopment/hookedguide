import { Technique } from '../types';

export const nightFishing: Technique = {
  slug: 'night-fishing',
  name: 'Night Fishing',
  description:
    'Night fishing opens up opportunities that daytime anglers never see. Many species feed more aggressively after dark, and reduced boat traffic means less pressure on the fish. With the right lighting, lure choices, and safety precautions, night fishing can be some of the most productive and peaceful time on the water.',
  difficulty: 3,
  bestFor: ['channel-catfish', 'largemouth-bass', 'walleye', 'speckled-trout'],
  waterTypes: ['lake', 'river', 'reservoir', 'saltwater'],
  seasons: ['summer'],
  steps: [
    {
      step: 1,
      title: 'Prepare Before Dark',
      description:
        'Arrive at your fishing spot with at least 30 minutes of daylight remaining. Organize your tackle, tie rigs, and identify landmarks and structure you want to target. Familiarize yourself with the area so you can navigate safely once darkness falls.',
    },
    {
      step: 2,
      title: 'Set Up Your Lighting',
      description:
        'Mount a black light on your boat or bank setup to illuminate your fishing line without spooking fish. Use a red or green headlamp for tying knots and rigging — white light ruins your night vision and can push fish away from your area.',
    },
    {
      step: 3,
      title: 'Choose Dark-Colored or Glow Lures',
      description:
        'At night, fish see lure silhouettes against the sky from below. Dark colors like black, junebug, and dark blue create the strongest silhouette. Glow-in-the-dark soft plastics and lures charged with a UV light are also highly effective, especially in deeper or murkier water.',
    },
    {
      step: 4,
      title: 'Slow Down Your Retrieve',
      description:
        'Fish rely more on their lateral line and vibration detection at night than during the day. Slow your retrieve speed by 30 to 50 percent compared to daytime. Give fish extra time to locate and strike your bait in the darkness.',
    },
    {
      step: 5,
      title: 'Focus on Shallow Structure',
      description:
        'Many species move shallow to feed at night. Target points, flats, riprap, docks with lights, and shoreline cover. Fish that hold deep during the day often push into water as shallow as 2 to 5 feet after dark, especially during summer.',
    },
    {
      step: 6,
      title: 'Stay Safe on the Water',
      description:
        'Always wear a PFD when night fishing. Tell someone where you are going and when you expect to return. Fish with a buddy whenever possible. Carry a fully charged phone, a whistle, and a bright flashlight for emergencies. Keep navigation lights on at all times when on a boat.',
    },
    {
      step: 7,
      title: 'Use Noise and Vibration Lures',
      description:
        'Lures that produce sound and vibration are critical at night. Buzzbaits, rattling crankbaits, chatterbaits, and rattling soft plastic rigs help fish home in on your bait. The added noise compensates for reduced visibility and triggers aggressive reaction strikes.',
    },
    {
      step: 8,
      title: 'Be Patient and Stay Quiet',
      description:
        'Night fishing requires patience. Bites can come in flurries separated by long quiet periods. Minimize noise — sound carries farther over water at night. Avoid banging tackle boxes, slamming hatches, or talking loudly. Let the fish come to you.',
    },
  ],
  requiredGear: [
    {
      item: 'Black Light (UV Light)',
      description:
        'A black light makes fluorescent monofilament and fluorocarbon line glow brightly so you can detect bites visually. Mount it on the bow or clamp it to your chair for bank fishing.',
      tags: ['lighting', 'black-light', 'night-fishing', 'line-visibility'],
    },
    {
      item: 'Headlamp (Red or Green Lens)',
      description:
        'A hands-free headlamp with a red or green mode preserves your night vision while providing enough light to tie knots, rig baits, and handle fish. Avoid white light when possible.',
      tags: ['lighting', 'headlamp', 'night-fishing', 'safety'],
    },
    {
      item: 'Glow Lures and Glow Sticks',
      description:
        'Glow-in-the-dark soft plastics, jig heads, and bobber glow sticks help attract fish and let you track your presentation in dark water. Charge glow baits periodically with your black light or headlamp.',
      tags: ['lures', 'glow', 'night-fishing', 'soft-plastic'],
    },
    {
      item: 'Rattling and Vibration Lures',
      description:
        'Buzzbaits, rattling crankbaits, and chatterbaits produce noise and vibration that fish can detect through their lateral line, making them essential for night presentations.',
      tags: ['lures', 'buzzbait', 'crankbait', 'chatterbait', 'night-fishing'],
    },
  ],
  commonMistakes: [
    'Using a bright white light near the water, which destroys your night vision and can spook shallow fish out of the area.',
    'Fishing too fast — at night, fish need more time to locate your bait, so slowing down is essential for getting bit.',
    'Ignoring safety precautions like wearing a PFD and telling someone your plan, which can turn a fun trip into a dangerous situation.',
    'Sticking with daytime lure colors instead of switching to dark silhouette or glow colors that fish can actually detect at night.',
  ],
  proTips: [
    'Fish around dock lights and bridge lights — these attract baitfish, which in turn attract predators like bass, walleye, and speckled trout.',
    'Use a full moon to your advantage. Fish feed aggressively on bright moonlit nights, especially on shallow flats where they can see prey silhouettes.',
    'Spray your gear and boat deck with non-slip coating before night trips. Wet surfaces become extra hazardous when you cannot see well.',
    'For catfish at night, set up multiple rods with fresh cut bait or live bait on bottom rigs and use rod-tip bells or electronic bite alarms to detect strikes.',
  ],
  faq: [
    {
      question: 'What is the best time for night fishing?',
      answer:
        'The first two hours after sunset and the last hour before sunrise are typically the most productive. Fish are most active during the transition from light to dark and back. Mid-summer nights with a full or near-full moon can produce bites all night long.',
    },
    {
      question: 'Is night fishing legal everywhere?',
      answer:
        'Night fishing is legal in most states and on most public waters, but some specific lakes, rivers, and parks close at sunset. Always check local regulations before planning a night fishing trip. Some states also restrict the use of lights for attracting fish.',
    },
    {
      question: 'What fish are most active at night?',
      answer:
        'Channel catfish, walleye, largemouth bass, and speckled trout are among the most active night feeders. Catfish and walleye have excellent low-light vision and feed heavily after dark. Bass often move shallow to ambush prey at night during summer.',
    },
    {
      question: 'Do I need special line for night fishing?',
      answer:
        'High-visibility monofilament line in yellow or green glows brightly under a black light, making bite detection much easier. Many night anglers use hi-vis main line with a fluorocarbon leader for the best combination of visibility above water and stealth below.',
    },
    {
      question: 'Is night fishing safe from a boat?',
      answer:
        'Night fishing from a boat is safe with proper precautions. Always wear a PFD, keep navigation lights on, carry emergency lighting and communication devices, fish with a buddy, and let someone on shore know your plan. Avoid unfamiliar waters at night.',
    },
  ],
  imagePath: '/images/techniques/night-fishing.jpg',
  imageAlt: 'Night fishing setup with black light illuminating fishing line against a dark lake at dusk',
};
