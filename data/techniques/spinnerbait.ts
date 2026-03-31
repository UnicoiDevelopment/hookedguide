import { Technique } from '../types';

export const spinnerbait: Technique = {
  slug: 'spinnerbait',
  name: 'Spinnerbait Fishing',
  description:
    'Spinnerbaits are one of the most versatile and beginner-friendly lures in fishing. The combination of flash from spinning blades and vibration makes them deadly in dirty water and around cover. They are virtually snag-proof and catch bass and pike throughout the year.',
  difficulty: 1,
  bestFor: ['largemouth-bass', 'northern-pike'],
  waterTypes: ['lake', 'river', 'pond', 'reservoir'],
  seasons: ['spring', 'summer', 'fall'],
  steps: [
    {
      step: 1,
      title: 'Choose Blade Style and Size',
      description:
        'Colorado blades produce maximum vibration for stained water and slow retrieves. Willow blades create flash for clear water and faster retrieves. Indiana blades split the difference. Use 3/8 oz in shallow water and 1/2 to 3/4 oz for deeper applications.',
    },
    {
      step: 2,
      title: 'Select a Skirt Color',
      description:
        'White and chartreuse are the two most important colors. Use white/silver in clear water with shad, chartreuse/white in stained water, and black in muddy water or at night.',
    },
    {
      step: 3,
      title: 'Add a Trailer',
      description:
        'Thread a soft plastic trailer (grub, twin-tail, or swimbait) onto the hook to add bulk, action, and a larger profile. A trailer hook can also improve hookup percentages.',
    },
    {
      step: 4,
      title: 'Cast to Cover',
      description:
        'Target laydowns, docks, grass edges, riprap, and rocky banks. Spinnerbaits can be cast directly into cover since the wire frame deflects off obstructions without snagging.',
    },
    {
      step: 5,
      title: 'Slow Roll Along the Bottom',
      description:
        'Retrieve the spinnerbait slowly so the blades barely turn, keeping the lure near the bottom. This technique excels in cold or muddy water when bass are lethargic.',
    },
    {
      step: 6,
      title: 'Burn it Across the Surface',
      description:
        'In warm water, retrieve fast enough that the blades bulge the surface without breaking through. This high-speed technique covers water and triggers reaction strikes from active fish.',
    },
    {
      step: 7,
      title: 'Helicopter Down Ledges',
      description:
        'Cast the spinnerbait past a drop-off and let it flutter down the ledge with the blades spinning on the fall. This vertical presentation mimics a dying shad and is deadly on bluff walls and channel swings.',
    },
    {
      step: 8,
      title: 'Set the Hook Firmly',
      description:
        'When you feel the strike — a sharp thump or sudden heaviness — set the hook with a firm upward sweep. Keep steady pressure during the fight since spinnerbaits have a single hook.',
    },
  ],
  requiredGear: [
    {
      item: 'Spinnerbaits (3/8 oz - 3/4 oz)',
      description:
        'Stock Colorado blade, willow blade, and tandem blade models in white, chartreuse, and shad patterns.',
      tags: ['spinnerbait', 'lure', 'bass', 'pike', 'bladed'],
    },
    {
      item: 'Soft Plastic Trailers',
      description:
        'Twin-tail grubs, swimbaits, and chunk trailers add bulk and action to the spinnerbait skirt.',
      tags: ['soft-plastic', 'trailer', 'grub', 'swimbait', 'spinnerbait'],
    },
    {
      item: 'Trailer Hooks',
      description:
        'A small extra hook that slides onto the main hook to catch short-striking fish. Especially important with large-skirted spinnerbaits.',
      tags: ['hooks', 'trailer-hook', 'spinnerbait', 'accessory'],
    },
    {
      item: 'Medium-Heavy Baitcasting Rod',
      description:
        'A 7-foot medium-heavy fast-action rod handles the weight of spinnerbaits and provides leverage for hooksets around cover.',
      tags: ['rod', 'baitcasting', 'bass', 'medium-heavy'],
    },
    {
      item: 'Fluorocarbon Line (14-20 lb)',
      description:
        'Fluorocarbon provides low visibility and abrasion resistance for fishing spinnerbaits around wood and rock cover.',
      tags: ['line', 'fluorocarbon', 'bass'],
    },
  ],
  commonMistakes: [
    'Only using one retrieve speed — vary between slow-rolling, moderate, and burning to find what fish want on any given day.',
    'Not adding a trailer hook, which causes you to miss short-striking fish that nip at the skirt.',
    'Throwing spinnerbaits only in dirty water — they also excel along grass edges and around cover in clear water.',
    'Using a rod that is too light, making it harder to feel bites and control the lure around heavy cover.',
  ],
  proTips: [
    'In muddy water, a big Colorado blade spinnerbait slow-rolled near the bottom is one of the most reliable bass catchers in all of fishing.',
    'When bass are short-striking, add a trailer hook and downsize your skirt or remove it entirely.',
    'During the fall shad migration, burning a willow-blade spinnerbait through schooling bass is as exciting as topwater.',
    'After a rain muddies the water, tie on a chartreuse/white spinnerbait before anything else — it will be the most productive lure on the lake.',
  ],
  faq: [
    {
      question: 'What is the best spinnerbait color?',
      answer:
        'White with silver blades is the top all-around choice for clear to lightly stained water. Chartreuse/white with gold blades is the go-to for stained water. Black is surprisingly effective at night.',
    },
    {
      question: 'What is the difference between Colorado and willow blades?',
      answer:
        'Colorado blades are round and produce maximum vibration with a slower spin — ideal for muddy water and slow retrieves. Willow blades are elongated and produce more flash with less vibration — best for clear water and faster retrieves.',
    },
    {
      question: 'How deep can you fish a spinnerbait?',
      answer:
        'Spinnerbaits can effectively fish from the surface to about 15 feet. Use heavier models (3/4 oz or more) and slow-roll them for deeper applications. Beyond 15 feet, other techniques are more efficient.',
    },
    {
      question: 'Do spinnerbaits work for species other than bass?',
      answer:
        'Absolutely. Northern pike and musky love spinnerbaits, especially large willow-blade models. Smaller spinnerbaits also catch pickerel, perch, and trout.',
    },
  ],
  imagePath: '/images/techniques/spinnerbait.jpg',
  imageAlt: 'White and chartreuse spinnerbait with tandem willow leaf blades retrieved near a laydown log',
};
