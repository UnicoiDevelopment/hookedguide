import { Technique } from '../types';

export const crankbait: Technique = {
  slug: 'crankbait',
  name: 'Crankbait Fishing',
  description:
    'Crankbait fishing is a power technique that uses lipped diving lures to cover water quickly and trigger reaction strikes. By selecting the right bill size, you can target specific depth ranges while the lure deflects off cover, mimicking a fleeing baitfish and provoking aggressive strikes from bass, walleye, and other predators.',
  difficulty: 2,
  bestFor: ['largemouth-bass', 'smallmouth-bass', 'walleye'],
  waterTypes: ['lake', 'river', 'reservoir'],
  seasons: ['spring', 'summer', 'fall'],
  steps: [
    {
      step: 1,
      title: 'Select the Right Crankbait Depth',
      description:
        'Match the crankbait diving depth to the water you are fishing. Shallow cranks (2-5 feet), medium divers (6-12 feet), and deep divers (12-20+ feet) each have specific applications. The lure should contact or run just above the bottom or cover.',
    },
    {
      step: 2,
      title: 'Choose the Right Color',
      description:
        'Match the hatch: use shad patterns in clear water with baitfish, crawfish patterns around rocky bottoms, and chartreuse or bright patterns in stained water. Contrast matters more than exact color match.',
    },
    {
      step: 3,
      title: 'Tie Directly or Use a Snap',
      description:
        'Tie the crankbait directly to your line with a Palomar or clinch knot, or use a small round snap (not a snap-swivel) to allow maximum lure action. Avoid snap-swivels, which hinder the wobble.',
    },
    {
      step: 4,
      title: 'Make a Long Cast',
      description:
        'Distance is critical with crankbaits because they need room to reach their maximum depth. Long casts mean the lure spends more time in the strike zone at peak depth.',
    },
    {
      step: 5,
      title: 'Use a Steady Retrieve',
      description:
        'Start with a steady medium-speed retrieve. The consistent wobble of a crankbait does the work for you. Let the lure dig into the bottom or tick off cover as you reel.',
    },
    {
      step: 6,
      title: 'Deflect Off Cover',
      description:
        'The magic of crankbait fishing happens when the lure hits something — a rock, stump, or branch — and deflects erratically. This random change of direction triggers reaction strikes. Intentionally crank into cover.',
    },
    {
      step: 7,
      title: 'Pause After Deflection',
      description:
        'When the crankbait deflects off cover, briefly pause the retrieve for half a second. Many strikes come immediately after the pause as the lure rises and then resumes its wobble.',
    },
    {
      step: 8,
      title: 'Handle the Strike',
      description:
        'Crankbait strikes are usually violent and unmistakable. Do not set the hook hard — simply keep reeling with steady pressure. The treble hooks do the work. A hard hookset often rips the bait free.',
    },
  ],
  requiredGear: [
    {
      item: 'Crankbaits (Shallow, Medium, Deep)',
      description:
        'Stock a selection of crankbaits in various diving depths. Key models include squarebills for shallow, medium-diving round-bills, and deep-diving crankbaits with large lips.',
      tags: ['crankbait', 'hard-bait', 'lure', 'bass', 'walleye'],
    },
    {
      item: 'Medium-Power Cranking Rod',
      description:
        'A 7-foot medium-power moderate-action (parabolic) rod absorbs the violent strikes and keeps treble hooks from tearing free during the fight.',
      tags: ['rod', 'baitcasting', 'cranking', 'moderate-action', 'bass'],
    },
    {
      item: 'Baitcasting Reel (5:1 to 6:1 ratio)',
      description:
        'A slower gear ratio reel provides the torque needed to pull deep-diving crankbaits and prevents retrieving too fast.',
      tags: ['reel', 'baitcasting', 'cranking', 'bass'],
    },
    {
      item: 'Monofilament or Fluorocarbon Line (10-14 lb)',
      description:
        'Monofilament stretches to absorb shock and prevent hooks from pulling. Fluorocarbon sinks, helping the bait reach maximum depth. Both work well.',
      tags: ['line', 'monofilament', 'fluorocarbon', 'bass'],
    },
    {
      item: 'Split Ring Pliers',
      description:
        'Essential for replacing worn treble hooks on crankbaits. Upgrading to premium hooks can dramatically improve hookup ratios.',
      tags: ['tool', 'pliers', 'split-ring', 'accessory'],
    },
  ],
  commonMistakes: [
    'Setting the hook too hard on a crankbait strike — the treble hooks need steady pressure, not a violent snap.',
    'Using a rod that is too stiff, which rips treble hooks free during the fight. A moderate (parabolic) action is essential.',
    'Retrieving too fast and above the strike zone instead of letting the bait dig into the bottom and contact cover.',
    'Not making long enough casts, which limits the time the crankbait spends at maximum diving depth.',
  ],
  proTips: [
    'When your crankbait keeps snagging, switch to a squarebill design — the flat lip deflects off wood and rock better than round bills.',
    'Upgrade your treble hooks to premium short-shank trebles for better hookup percentages and reduced snagging.',
    'In cold water, slow your retrieve dramatically and use suspending jerkbait-style cranks that hover in the strike zone.',
    'Use line diameter to fine-tune depth: thinner line lets the bait dive deeper, while thicker line keeps it shallower.',
    'Mark your crankbaits with their actual tested diving depth so you can quickly select the right one on the water.',
  ],
  faq: [
    {
      question: 'How do you know what depth a crankbait runs?',
      answer:
        'Most manufacturers list the diving depth on the packaging. As a general rule, larger lip equals deeper dive. You can also test by counting down and feeling for bottom contact. Use thinner line to maximize depth.',
    },
    {
      question: 'What is the best crankbait color?',
      answer:
        'Shad patterns (silver, white, chartreuse) work best where shad are the primary forage. Crawfish patterns (red, brown, orange) excel around rocky bottoms. In stained water, use bright colors with contrast.',
    },
    {
      question: 'Should I use monofilament or fluorocarbon for crankbaits?',
      answer:
        'Both work well. Monofilament is more forgiving due to stretch, which keeps treble hooks pinned. Fluorocarbon sinks and helps the bait reach maximum depth. Many anglers use mono for shallow cranks and fluoro for deep cranks.',
    },
    {
      question: 'When is the best time to throw a crankbait?',
      answer:
        'Crankbaits excel in spring (pre-spawn), early summer, and fall when bass are actively feeding and relating to hard cover. Water temperatures between 55-80 degrees F are the prime window.',
    },
    {
      question: 'How do I prevent crankbaits from snagging?',
      answer:
        'Use squarebill crankbaits around wood and rock, which deflect rather than dig in. Keep your rod tip high to control depth, and learn to feel the lure tick cover rather than bury into it.',
    },
  ],
  imagePath: '/images/techniques/crankbait.jpg',
  imageAlt: 'Angler retrieving a diving crankbait along a rocky bank with the lure deflecting off submerged cover',
};
