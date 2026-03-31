import type { Species } from '../types';

export const kingMackerel: Species = {
  slug: 'king-mackerel',
  name: 'King Mackerel',
  scientificName: 'Scomberomorus cavalla',
  type: 'saltwater',
  family: 'Scombridae',
  description:
    'The king mackerel, known as "kingfish" or simply "kings," is one of the most exciting and hard-fighting offshore species in the Atlantic and Gulf of Mexico. These torpedo-shaped predators are built for speed, with razor-sharp teeth and blistering runs that strip line at alarming speed. King mackerel are a tournament staple and provide excellent sport on medium to heavy tackle, though a wire leader is essential to prevent bite-offs from their formidable teeth.',
  identification:
    'King mackerel have a streamlined, torpedo-shaped body built for speed. They are steel-blue to dark gray on the back with silver sides and a white belly. Juveniles may show yellowish spots similar to Spanish mackerel, but adult kings lack prominent spots. They have a sharply forked tail, a lateral line that dips sharply below the second dorsal fin, and a mouthful of razor-sharp, compressed teeth. They can exceed 5 feet in length.',
  habitat:
    'Found in the open ocean and nearshore waters of the Atlantic and Gulf of Mexico, typically over depths of 40-300 feet. They prefer areas near reefs, wrecks, ledges, and other structure that concentrates baitfish. King mackerel are migratory, moving north in spring and summer and south in fall and winter. They are commonly found near the surface to mid-depths around temperature breaks and current edges.',
  behavior:
    'King mackerel are fast, aggressive predators that hunt in loose schools or packs. They use their speed to slash through schools of baitfish, often cutting prey in half before circling to eat the pieces. When hooked, they make powerful, line-peeling runs and occasionally leap. Larger "smoker" kings are often solitary and strike with explosive force. Their razor teeth require wire leaders to prevent bite-offs.',
  diet:
    'Feed primarily on schooling baitfish including menhaden, herring, sardines, cigar minnows, blue runners, and squid. They are slashing predators that use speed to attack prey, often biting fish in half with their razor-sharp teeth. Larger kings will also eat smaller fish species including Spanish mackerel.',
  recordWeight: { lbs: 93, oz: 0, location: 'San Juan, Puerto Rico', year: 1999 },
  averageWeight: { min: 8, max: 30, unit: 'lbs' },
  averageLength: { min: 30, max: 50, unit: 'inches' },
  lifespan: { min: 14, max: 22, unit: 'years' },
  preferredTemp: { min: 68, max: 84, unit: 'F' },
  difficultyRating: 3,
  fightRating: 4,
  tasteRating: 3,
  statesFound: [
    'florida',
    'texas',
    'louisiana',
    'alabama',
    'mississippi',
    'georgia',
    'south-carolina',
    'north-carolina',
    'virginia',
  ],
  seasonalPatterns: {
    spring:
      'King mackerel begin migrating northward from their wintering grounds off South Florida as water temperatures rise above 68 degrees. By April and May, they are moving along the Gulf and Atlantic coasts, arriving at nearshore reefs and wrecks. Spring provides excellent action as hungry fish feed aggressively on their northward migration.',
    summer:
      'Summer is prime kingfish season throughout their range, with fish spread from Florida to the Carolinas and across the Gulf Coast. Tournament season is in full swing. Target kings around nearshore reefs, wrecks, and live bottom areas by slow-trolling live bait or high-speed trolling with spoons and plugs.',
    fall:
      'Fall brings the southward migration, concentrating fish along predictable routes near shore. Cooling water pushes baitfish and kings closer to inlets and beaches, creating excellent fishing opportunities. Some of the largest kings of the year are caught during the fall run as fish have fattened up all summer.',
    winter:
      'Kings concentrate in warmer southern waters, primarily off South Florida, the Keys, and south Texas. Winter fishing can be exceptional in these southern zones as fish stack up in large numbers. Farther north, kings have migrated out and the season is essentially over until spring.',
  },
  bestTechniques: ['trolling', 'live-bait'],
  bestBaits: [
    'Live blue runner (hardtail)',
    'Live menhaden (pogey)',
    'Live cigar minnow',
    'Dead cigar minnow (slow-trolled)',
    'Wire-rigged ballyhoo',
    'Trolling spoon (silver, gold)',
    'Dusters and skirted lures',
    'Live sardine or threadfin herring',
    'Rapala CD Magnum (trolling)',
  ],
  relatedSpecies: ['mahi-mahi', 'grouper', 'red-snapper', 'tarpon'],
  funFacts: [
    'A large king mackerel is called a "smoker king" because the reel drag smokes during the blistering first run, which can strip over 100 yards of line in seconds.',
    'King mackerel have razor-sharp teeth that can bite through monofilament and fluorocarbon line instantly. Wire leader is essential, though some tournament anglers use heavy fluorocarbon (60-80 lb) and accept occasional bite-offs for a more natural presentation.',
    'King mackerel are highly migratory and are managed as two separate stocks in the US: the Atlantic migratory group and the Gulf migratory group, which mix along the east coast of Florida.',
    'Kingfish tournaments are a massive industry along the Gulf and Atlantic coasts, with events like the SKA (Southern Kingfish Association) tournament trail attracting thousands of teams and offering millions in prize money.',
  ],
  faq: [
    {
      question: 'Do you need a wire leader for king mackerel?',
      answer:
        'Yes, wire leader is strongly recommended when targeting king mackerel. Their razor-sharp teeth will bite through monofilament and fluorocarbon instantly. Use #4 to #7 single-strand wire or light wire cable. Some tournament anglers use heavy (60-80 lb) fluorocarbon for a more natural presentation, accepting occasional bite-offs.',
    },
    {
      question: 'Are king mackerel good to eat?',
      answer:
        'Smaller kings (under 10 lbs, often called "snakes") are quite good eating when fresh, with firm, oily flesh that is excellent grilled, smoked, or prepared as fish dip. Larger kings over 30 lbs should be eaten in moderation due to higher mercury levels. King mackerel fish dip is a beloved coastal delicacy.',
    },
    {
      question: 'What is the difference between king mackerel and Spanish mackerel?',
      answer:
        'King mackerel are significantly larger (commonly 10-40+ lbs vs. 1-5 lbs for Spanish), have a lateral line that dips sharply below the second dorsal, and lack the golden spots that characterize Spanish mackerel. Kings also have a darker back and more pronounced, razor-sharp teeth.',
    },
    {
      question: 'How do you catch king mackerel?',
      answer:
        'The two primary methods are slow-trolling live bait (blue runners, menhaden, cigar minnows) on wire rigs and high-speed trolling with spoons and diving plugs. Slow-trolling live bait near reefs and wrecks at 2-4 knots is the most popular technique. Use a stinger hook rig to improve hookup rates.',
    },
    {
      question: 'What tackle do I need for king mackerel?',
      answer:
        'Medium-heavy spinning or conventional rods rated for 20-40 lb line are standard. Use 30 lb braided or monofilament main line with a wire leader. A quality reel with a strong, smooth drag system is essential because kings make powerful, drag-screaming runs. Bring plenty of line capacity (300+ yards).',
    },
    {
      question: 'When is king mackerel season?',
      answer:
        'King mackerel fishing is best from April through October along the Gulf and Atlantic coasts. The peak varies by location: South Florida year-round, Gulf Coast May-September, Carolinas June-October. Fall migration runs concentrate fish and can produce excellent fishing from September through November.',
    },
  ],
  imagePath: '/images/species/king-mackerel.jpg',
  imageAlt: 'Sleek king mackerel with steel-blue back and silver sides held on a charter boat',
  imageCredit: 'Photo via Unsplash',
};
