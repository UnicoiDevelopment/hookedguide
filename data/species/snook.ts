import type { Species } from '../types';

export const snook: Species = {
  slug: 'snook',
  name: 'Snook',
  scientificName: 'Centropomus undecimalis',
  type: 'saltwater',
  family: 'Centropomidae',
  description:
    'The common snook is a premier tropical inshore gamefish renowned for its explosive strikes, powerful runs, and acrobatic jumps. Found primarily in Florida and southern Texas, snook inhabit mangrove shorelines, passes, inlets, and beaches. They are a challenging species that tests an angler\'s skill with their structure-oriented habits and line-cutting gill plates, earning them a devoted following among serious inshore anglers.',
  identification:
    'Snook have a sleek, torpedo-shaped body with a pronounced black lateral line running from the gill plate to the tail. They have a sloping forehead, protruding lower jaw, and a divided dorsal fin. Body color is golden-yellow to greenish on the back, bright silver on the sides, and white on the belly. The fins are often yellowish. A key identifying feature is the sharp gill plate edges that can easily cut line.',
  habitat:
    'Primarily found in tropical and subtropical waters of Florida (both coasts) and southern Texas. They inhabit mangrove shorelines, seawalls, dock pilings, bridge pilings, inlet mouths, passes between islands, and sandy beaches during summer spawning aggregations. Snook require warm water and are highly sensitive to cold, limiting their northern range.',
  behavior:
    'Snook are ambush predators that use structure and current to set up feeding stations. They position themselves on the downcurrent side of structure and strike at baitfish swept past by the current. During summer, they aggregate on beaches and in passes to spawn. Snook are structure-oriented and will wrap line around pilings, roots, and rocks to break free, requiring strong tackle and quick reactions.',
  diet:
    'Opportunistic predators that feed on a variety of baitfish including mullet, pilchards (scaled sardines), pinfish, greenbacks, shrimp, and crabs. During the summer mullet run, they gorge on schools of finger mullet along the beaches. Larger snook become increasingly piscivorous.',
  recordWeight: { lbs: 44, oz: 3, location: 'Fort Myers, Florida', year: 2014 },
  averageWeight: { min: 3, max: 15, unit: 'lbs' },
  averageLength: { min: 20, max: 36, unit: 'inches' },
  lifespan: { min: 15, max: 21, unit: 'years' },
  preferredTemp: { min: 70, max: 88, unit: 'F' },
  difficultyRating: 4,
  fightRating: 5,
  tasteRating: 4,
  statesFound: ['florida', 'texas'],
  seasonalPatterns: {
    spring:
      'Snook transition from their deep winter haunts back to inshore feeding areas as water temperatures stabilize above 70 degrees. Fish begin staging near inlets and passes as they prepare for summer spawning. Spring offers increasingly better fishing, especially around bridges, docks, and mangrove shorelines on moving tides.',
    summer:
      'Summer is the prime snook season. Fish aggregate on beaches, near inlets, and in passes for spawning from June through September. Beach snook fishing at dawn and dusk during the mullet run is legendary. Live pilchards (scaled sardines) freelined near structure and along beaches produce spectacular action.',
    fall:
      'Post-spawn snook feed heavily in fall, making it an excellent season. Fish remain around inlets and begin transitioning back into residential canals and rivers before cold weather arrives. The fall mullet run provides outstanding topwater and live-bait fishing around bridges and mangrove shorelines.',
    winter:
      'Cold water is the primary threat to snook, and fish seek thermal refuge in residential canals, power plant outflows, deep holes, and warm river systems. Fishing slows considerably but dedicated anglers find concentrated fish in warm-water areas. Slow, subtle presentations are required. Severe cold events can be lethal to snook.',
  },
  bestTechniques: ['live-bait', 'topwater'],
  bestBaits: [
    'Live pilchard (scaled sardine)',
    'Live mullet (finger mullet)',
    'Live pinfish',
    'Live shrimp (jumbo)',
    'Topwater walk-the-dog plug',
    'Soft plastic jerkbait',
    'Bucktail jig (white)',
    'DOA Baitbuster or CAL shad',
    'Yo-Zuri Crystal Minnow',
  ],
  relatedSpecies: ['redfish', 'speckled-trout', 'tarpon', 'mahi-mahi'],
  funFacts: [
    'Snook are protandric hermaphrodites, meaning they are born male and some transition to female as they grow larger, typically between 18-30 inches. Most large snook are females.',
    'The sharp edges of a snook\'s gill plates can slice through fishing line like a razor, which is why experienced snook anglers always use a heavy fluorocarbon leader of 30-50 lb test.',
    'Snook cannot survive water temperatures below about 60 degrees Fahrenheit for extended periods. The devastating cold snap of January 2010 killed millions of snook in Florida, leading to a multi-year harvest closure.',
    'Snook are one of the few saltwater fish that regularly enter and thrive in freshwater. They are commonly caught miles upstream in coastal rivers and even in residential freshwater canals in South Florida.',
    'A snook\'s lateral line is one of the most developed sensory organs in the fish world, allowing them to detect vibrations and pressure changes to hunt in murky water and at night with remarkable precision.',
  ],
  faq: [
    {
      question: 'What is the best bait for snook?',
      answer:
        'Live pilchards (scaled sardines) are widely considered the top snook bait, especially during summer. Live mullet is preferred in fall and for targeting larger fish. Live shrimp works well year-round. For artificials, topwater walk-the-dog lures at dawn and soft plastic jerkbaits around structure are top choices.',
    },
    {
      question: 'Can you keep snook?',
      answer:
        'Snook are highly regulated in Florida with specific seasons, slot limits (typically 28-33 inches), and bag limits (usually 1 per person). A separate snook permit is required in addition to a fishing license. Seasons and limits vary between the Atlantic and Gulf coasts. Always check current FWC regulations.',
    },
    {
      question: 'Where is the best snook fishing?',
      answer:
        'Southwest Florida, particularly the areas around Fort Myers, Naples, the Everglades, and the Ten Thousand Islands, offers the best snook fishing in the world. The Indian River Lagoon, Tampa Bay, and the beaches from Captiva to Marco Island are also legendary snook destinations.',
    },
    {
      question: 'What tackle do I need for snook?',
      answer:
        'A medium-heavy spinning or baitcasting rod in the 7-foot range paired with 20-30 lb braided line and a 30-50 lb fluorocarbon leader is standard. The heavy leader is essential because snook have razor-sharp gill plates that will cut lighter line. Use strong, sharp hooks that can penetrate the bony mouth.',
    },
    {
      question: 'Why are snook so hard to catch?',
      answer:
        'Snook are considered difficult because they are structure-oriented fish that immediately dive into mangrove roots, pilings, or rocks when hooked, requiring heavy tackle and quick reactions. They also have keen eyesight, spook easily in clear water, and can be finicky feeders, especially pressured fish.',
    },
    {
      question: 'Do snook taste good?',
      answer:
        'Snook are excellent table fare with firm, white, delicate meat that is often compared to the best grouper. The skin has a soapy taste and should always be removed before cooking. Snook fillets are delicious grilled, blackened, or pan-seared. However, harvest regulations are strict, so many anglers practice catch and release.',
    },
  ],
  imagePath: '/images/species/snook-id.jpg',
  imageAlt: 'Silver snook with prominent black lateral line held near mangrove shoreline',
  imageCredit: 'Photo via Unsplash',
};
