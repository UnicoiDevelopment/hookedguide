import { Species } from '../types';

export const walleye: Species = {
  slug: 'walleye',
  name: 'Walleye',
  scientificName: 'Sander vitreus',
  type: 'freshwater',
  family: 'Percidae',
  description:
    'The walleye is widely regarded as the finest-eating freshwater fish in North America and is the most sought-after species across the upper Midwest and Great Lakes region. Named for their large, glassy, light-gathering eyes that appear to "wall" outward, walleye are uniquely adapted to feed in low-light conditions, giving anglers a distinct advantage at dawn, dusk, and after dark. Walleye fishing is deeply embedded in Midwestern culture, with enormous tournaments and festivals dedicated to the species. Their combination of excellent table quality and challenging catch makes them one of the most valued freshwater game fish.',
  identification:
    'Walleye have an elongated, torpedo-shaped body with olive-green to golden-brown sides and a white belly. The most distinctive feature is their large, opaque, reflective eyes caused by a layer of pigment called the tapetum lucidum, which gives them superior low-light vision. They have two separated dorsal fins: the first with sharp spines, the second with soft rays. The lower lobe of the tail fin has a white tip, which is a key identifier that distinguishes them from the closely related sauger (which lacks the white tail tip). They have large canine teeth in their jaws. Sauger have more distinct dark blotches on their body and lack the white tail tip.',
  habitat:
    'Walleye are found primarily in large, cool lakes and rivers across the northern United States and Canada. They prefer large bodies of water with firm bottoms of gravel, rock, or sand. In lakes, they relate to points, reefs, humps, weed edges, and wind-blown shorelines. In rivers, they hold in current breaks, eddies, and below dams. Walleye are most common in the Great Lakes, large Midwestern and Canadian shield lakes, and major northern river systems. They avoid heavy vegetation and soft muddy bottoms.',
  behavior:
    'Walleye are schooling fish that travel in groups of similar-sized individuals, often at specific depths related to the thermocline and light penetration. They are low-light specialists, feeding most actively at dawn, dusk, night, and on overcast days. Their reflective eyes give them a major advantage over prey species in dim conditions. Walleye spawn in early spring, running up rivers and tributaries or moving to windswept rocky shorelines when water temperatures reach 42-50F. They are known for being "mood" fish, going from completely inactive to aggressively feeding as conditions change.',
  diet:
    'Walleye are primarily piscivorous, feeding on yellow perch, shiners, smelt, shad, minnows, and juvenile fish of various species. They also eat leeches, nightcrawlers, crayfish, and aquatic insects, especially in spring. Walleye are crepuscular feeders, doing the majority of their hunting during low-light transition periods. They use their superior night vision to ambush prey that cannot see them approaching in dim light.',
  recordWeight: { lbs: 25, oz: 0, location: 'Old Hickory Lake, TN', year: 1960 },
  averageWeight: { min: 1, max: 5, unit: 'lbs' },
  averageLength: { min: 14, max: 22, unit: 'inches' },
  lifespan: { min: 7, max: 20, unit: 'years' },
  preferredTemp: { min: 55, max: 70, unit: 'F' },
  difficultyRating: 3,
  fightRating: 3,
  tasteRating: 5,
  statesFound: [
    'alabama', 'arkansas', 'colorado', 'connecticut', 'georgia', 'idaho',
    'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'maine', 'maryland',
    'massachusetts', 'michigan', 'minnesota', 'missouri', 'montana',
    'nebraska', 'new-hampshire', 'new-jersey', 'new-york', 'north-carolina',
    'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania',
    'south-dakota', 'tennessee', 'utah', 'vermont', 'virginia', 'washington',
    'west-virginia', 'wisconsin', 'wyoming',
  ],
  seasonalPatterns: {
    spring:
      'Spring is the most important season for walleye anglers. Walleye spawn when water reaches 42-50F, running up rivers and congregating on wind-blown rocky shorelines. Post-spawn walleye are hungry and aggressive, making late spring one of the best fishing windows of the year. Jigs tipped with minnows or leeches along current breaks and rocky flats are deadly. Many rivers have outstanding tailrace fisheries below dams during the spring run.',
    summer:
      'Summer walleye move to deeper structure, often relating to the thermocline layer in 15-30 feet of water. They hold on deep humps, reefs, weed edges, and main-lake points. Trolling with crankbaits and spinner harnesses is the most efficient way to locate and catch summer walleye. Live bait rigs with leeches or nightcrawlers fished slowly along structure transitions are also highly effective. Dawn and dusk remain the best bite windows.',
    fall:
      'Fall walleye follow massive schools of baitfish, especially perch and shad, into shallow bays and along shorelines. This triggers some of the most aggressive feeding of the year as walleye fatten up for winter. Crankbaits and jigs worked along wind-blown rocky shorelines and points produce well. Water temps of 50-60F are the sweet spot. Night fishing from shore with jerkbaits can be outstanding in fall.',
    winter:
      'Winter walleye slow down but remain catchable. They hold on deep structure such as mid-lake humps, points, and basin edges. In ice-fishing states, walleye are one of the most prized ice-fishing targets. Jigging with spoons, Jigging Raps, and jigs tipped with minnow heads through the ice is extremely popular. The low-light periods around dawn and dusk remain the most productive bite windows even under the ice.',
  },
  bestTechniques: ['jigging', 'trolling', 'live-bait', 'ice-fishing', 'night-fishing'],
  bestBaits: [
    'Jig and minnow (1/4-3/8 oz)',
    'Leech on live-bait rig',
    'Nightcrawler harness (spinner rig)',
    'Jigging Rap (size 7)',
    'Shad-pattern crankbait',
    'Reef Runner Ripshad',
    'Gulp! Alive minnow',
    'Blade bait (silver)',
  ],
  relatedSpecies: ['smallmouth-bass', 'crappie', 'rainbow-trout'],
  funFacts: [
    'Walleye have a special light-gathering layer behind the retina called the tapetum lucidum, the same adaptation found in cats and deer, which is why their eyes glow in flashlight beams at night.',
    'Minnesota considers walleye so important that it is the official state fish, and Lake Mille Lacs and other walleye fisheries generate hundreds of millions of dollars in tourism revenue annually.',
    'Walleye can detect color in near-total darkness, giving them a significant feeding advantage over prey species in the dim conditions of dawn, dusk, and deep water.',
    'The Maumee River walleye run in northwest Ohio draws an estimated 50,000-100,000 anglers each spring, making it one of the largest single-species fishing events in the world.',
    'Female walleye can produce up to 500,000 eggs per spawning season, but survival rates are extremely low, with only a fraction of one percent reaching adulthood.',
  ],
  faq: [
    {
      question: 'What is the best time of day to catch walleye?',
      answer:
        'Dawn and dusk are by far the most productive times for walleye fishing. Their light-gathering eyes give them a significant advantage over prey during low-light transition periods. The hour before and after sunrise and sunset typically produce the most bites. Night fishing can also be excellent, especially in summer when walleye move to shallower feeding areas after dark. Overcast, windy days can extend the bite window throughout the day by reducing light penetration.',
    },
    {
      question: 'What is the best walleye bait?',
      answer:
        'The classic jig-and-minnow combination is the most versatile and effective walleye presentation across all seasons. A 1/4 to 3/8 oz jig head tipped with a fathead minnow or shiner worked along the bottom is hard to beat. In summer, live leeches on a Lindy Rig or nightcrawler spinner harnesses are equally effective. For artificial-only situations, Jigging Raps, blade baits, and shad-pattern crankbaits are top producers. The best bait often depends on the season and local forage.',
    },
    {
      question: 'Why are walleye so hard to catch?',
      answer:
        'Walleye can be challenging because they are "mood" fish that transition quickly between inactive and feeding states. They are light-sensitive, meaning they often feed only during narrow windows at dawn and dusk. Walleye are also schooling fish that relate to specific structure at specific depths, and being even a few feet off the correct depth can mean no bites. They tend to have subtle bites that are easy to miss. Successful walleye anglers master electronics, understand structure, and time their outings around low-light periods.',
    },
    {
      question: 'Where are the best walleye fisheries in the US?',
      answer:
        'Lake Erie is considered the walleye capital of the world, producing incredible numbers of fish from Toledo to Buffalo. Lake of the Woods and Mille Lacs Lake in Minnesota are legendary destinations. Other top fisheries include Devils Lake (ND), Green Bay (WI), Saginaw Bay (MI), Fort Peck Reservoir (MT), Columbia River (OR/WA), and the Missouri River system. In spring, river fisheries like the Maumee River (OH) and Mississippi River tailraces are outstanding.',
    },
    {
      question: 'How do you cook walleye?',
      answer:
        'Walleye has sweet, mild, flaky white meat that is widely considered the best-tasting freshwater fish. The classic preparation is a simple beer batter or light breading pan-fried in butter until golden. Walleye is also excellent baked, broiled, grilled on a cedar plank, or prepared as fish tacos. The fillets are delicate, so avoid heavy sauces that mask the natural flavor. Shore lunch tradition in Canada and Minnesota involves frying fresh-caught walleye fillets in a cast-iron skillet over a campfire, which many anglers consider the ultimate outdoor meal.',
    },
  ],
  imagePath: '/images/species/walleye-id.jpg',
  imageAlt: 'Walleye held at water level showing its distinctive reflective golden eyes and olive-green body',
  imageCredit: 'Photo via Unsplash',
};
