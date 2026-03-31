import { Technique } from '../types';

export const iceFishing: Technique = {
  slug: 'ice-fishing',
  name: 'Ice Fishing',
  description:
    'Ice fishing is the practice of catching fish through holes drilled in frozen lakes and ponds. This winter-only technique opens up fishing opportunities when open-water anglers have put their gear away. Walleye, perch, crappie, and pike are the primary targets, and modern electronics and portable shelters have made ice fishing more comfortable and productive than ever.',
  difficulty: 3,
  bestFor: ['walleye', 'yellow-perch', 'crappie', 'northern-pike'],
  waterTypes: ['lake', 'pond', 'reservoir'],
  seasons: ['winter'],
  steps: [
    {
      step: 1,
      title: 'Check Ice Safety',
      description:
        'Before going on the ice, verify that the ice is at least 4 inches thick for walking and 5-7 inches for snowmobiles or ATVs. Use an ice chisel or auger to check thickness at multiple points. Clear ice is stronger than white or snow-covered ice. Never go out alone.',
    },
    {
      step: 2,
      title: 'Locate Fish with a Map or Electronics',
      description:
        'Study a lake map to find structure like points, humps, weed edges, and drop-offs before drilling. A portable flasher or fish finder shows depth, bottom composition, and fish in real time through the hole.',
    },
    {
      step: 3,
      title: 'Drill Your Holes',
      description:
        'Use a hand auger, power auger, or electric auger to drill holes in the ice. Drill multiple holes over a likely area, spaced 10-20 feet apart, so you can move between them to find active fish.',
    },
    {
      step: 4,
      title: 'Set Up Your Shelter',
      description:
        'A portable flip-over or hub-style shelter blocks wind and traps heat. Inside, set up your electronics, heater, and rod holders. Shelters also darken the hole, making it easier to see fish on your flasher.',
    },
    {
      step: 5,
      title: 'Jig with Small Presentations',
      description:
        'Use a short (24-36 inch) ice rod with a small jig tipped with a wax worm, spike, or minnow head. Jig with subtle lifts and drops — cold-water fish want slow, small movements. Watch your flasher to see fish approach.',
    },
    {
      step: 6,
      title: 'Set Tip-Ups for Pike and Walleye',
      description:
        'A tip-up is a device that suspends live bait below the ice and signals a bite with a pop-up flag. Set tip-ups with live minnows at various depths over a spread area to cover more water while you jig.',
    },
    {
      step: 7,
      title: 'Detect and React to Bites',
      description:
        'On a jigging rod, bites feel like a slight tap or the line simply goes slack. On tip-ups, the flag pops up and the spool spins as the fish runs. Let the fish take line before setting the hook on a tip-up bite.',
    },
    {
      step: 8,
      title: 'Land the Fish Through the Hole',
      description:
        'Guide the fish directly under the hole and lift it smoothly through. Do not force a large fish through — keep steady pressure and let it tire. A skimmer keeps ice chips clear of the hole between catches.',
    },
  ],
  requiredGear: [
    {
      item: 'Ice Auger',
      description:
        'A hand, gas, or electric auger for drilling holes through the ice. Most anglers use 6-8 inch diameter holes. Electric augers have become the most popular choice for their quiet operation and ease of use.',
      tags: ['auger', 'ice-fishing', 'ice-auger', 'tool'],
    },
    {
      item: 'Ice Fishing Rod and Reel (24-36 inch)',
      description:
        'Short, sensitive rods designed for vertical jigging through the ice. Pair with a small spinning reel or inline reel spooled with 2-6 lb line.',
      tags: ['rod', 'reel', 'ice-fishing', 'ice-rod', 'walleye', 'panfish'],
    },
    {
      item: 'Tip-Ups',
      description:
        'Wind or thermal tip-up devices that hold live bait below the ice and signal a bite with a flag. Essential for covering water and targeting pike and walleye.',
      tags: ['tip-up', 'ice-fishing', 'pike', 'walleye', 'live-bait'],
    },
    {
      item: 'Portable Flasher / Fish Finder',
      description:
        'A real-time sonar unit that shows depth, bottom, and fish through the ice hole. The Vexilar and Marcum brands are ice-fishing standards.',
      tags: ['electronics', 'flasher', 'fish-finder', 'ice-fishing', 'sonar'],
    },
    {
      item: 'Portable Ice Shelter',
      description:
        'A flip-over or hub-style shelter that blocks wind and provides warmth. Look for shelters rated for the number of anglers and conditions you face.',
      tags: ['shelter', 'ice-fishing', 'ice-shanty', 'accessory'],
    },
    {
      item: 'Ice Jigs and Live Bait',
      description:
        'Small tungsten or lead jigs (1/16 oz or smaller) tipped with wax worms, spikes, or minnow heads. Glow colors are popular for low-light conditions.',
      tags: ['jig', 'ice-jig', 'ice-fishing', 'live-bait', 'panfish', 'walleye'],
    },
  ],
  commonMistakes: [
    'Going on ice that is too thin — never assume ice is safe without checking thickness. Four inches of clear ice is the minimum for walking.',
    'Staying on dead holes instead of moving — if you are not marking fish on electronics within 15 minutes, move to a new spot.',
    'Jigging too aggressively in cold water when fish want slow, subtle presentations with long pauses.',
    'Not using electronics — a flasher or fish finder dramatically increases your ability to locate and catch fish through the ice.',
    'Dressing inadequately — hypothermia is a real risk. Layer properly with moisture-wicking base layers and windproof outer layers.',
  ],
  proTips: [
    'Drill your holes in a pattern over structure: a line of holes along a weed edge, across a point, or around a hump lets you systematically find where fish are holding.',
    'Dawn and dusk are the best bite windows through the ice, just like open water. Plan to be set up and fishing before sunrise.',
    'Use a camera down the hole to see bottom composition and fish behavior. Watching how fish react to your jig is invaluable for adjusting your presentation.',
    'Keep your holes clear of ice with a skimmer. Refreezing holes reduce light entering the water and make it harder to land fish.',
  ],
  faq: [
    {
      question: 'How thick does ice need to be for fishing?',
      answer:
        'A minimum of 4 inches of clear, solid ice is needed for walking. For snowmobiles or ATVs, 5-7 inches is recommended. Vehicles require 8-12 inches or more. Always check thickness in multiple spots as ice is not uniform.',
    },
    {
      question: 'What is the best time of day for ice fishing?',
      answer:
        'Dawn and dusk are the most productive periods, similar to open-water fishing. First ice (early season) and last ice (late season) tend to produce the best overall fishing as fish are most active during these transitional periods.',
    },
    {
      question: 'Do I need a fishing license for ice fishing?',
      answer:
        'Yes, ice fishing requires a valid fishing license in every state. Some states require additional stamps or permits for certain species. Check your state regulations before heading out.',
    },
    {
      question: 'What is first ice and why is it good?',
      answer:
        'First ice refers to the initial freeze-up period when ice is first thick enough to fish safely. Fish are still in fall feeding patterns and have not been pressured, making them aggressive. It is often the best ice fishing of the season.',
    },
  ],
  imagePath: '/images/techniques/ice-fishing.jpg',
  imageAlt: 'Ice fishing setup with auger-drilled holes, portable shelter, and angler jigging with an ice rod',
};
