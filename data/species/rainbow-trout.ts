import { Species } from '../types';

export const rainbowTrout: Species = {
  slug: 'rainbow-trout',
  name: 'Rainbow Trout',
  scientificName: 'Oncorhynchus mykiss',
  type: 'freshwater',
  family: 'Salmonidae',
  description:
    'The rainbow trout is one of the most widely recognized and popular game fish in the world. Native to Pacific drainages from Alaska to Mexico, rainbow trout have been stocked in suitable waters on every continent except Antarctica. They are prized for their beauty, acrobatic fights, and excellent table quality. Rainbow trout are the foundation of the fly-fishing tradition and support massive stocking programs in cold-water streams, rivers, and tailrace fisheries across the United States. Steelhead are the anadromous (sea-run) form of the same species.',
  identification:
    'Rainbow trout are among the most beautiful freshwater fish. They have a silvery body with a distinctive pink to red lateral band running from gill to tail, which is most vivid in wild and spawning fish. The back is olive to blue-green with black spots scattered across the back, dorsal fin, and tail. The belly is white to silver. Stocked (hatchery) rainbows tend to be paler with a less vivid stripe and often have worn or shortened fins. Rainbow trout are distinguished from brown trout by their pink lateral stripe (brown trout have red spots with pale halos) and from brook trout by the lack of worm-like markings (vermiculations) on the back.',
  habitat:
    'Rainbow trout require cold, clean, well-oxygenated water and are found in streams, rivers, lakes, and tailrace fisheries where water temperatures remain below 70F. They are native to western drainages but have been stocked extensively in cold-water habitats nationwide. Ideal habitat includes clear streams with riffle-pool sequences, gravel substrate for spawning, and abundant aquatic insects. In the eastern US, they are most common in mountain streams, spring-fed creeks, and dam tailraces where cold water releases maintain suitable temperatures year-round.',
  behavior:
    'Rainbow trout are active, aggressive feeders that hold in current, feeding on drifting insects and baitfish. In streams, they establish feeding lanes in current seams, behind rocks, and at the heads and tails of pools. They rise to the surface to eat insects off the surface film, making them ideal targets for dry fly fishing. Rainbow trout are spring spawners (unlike brown trout which spawn in fall), requiring gravel substrate with upwelling groundwater. They are known for acrobatic leaps and sustained runs when hooked.',
  diet:
    'Rainbow trout are opportunistic feeders with a diet that varies by habitat. In streams, they eat primarily aquatic insects (mayflies, caddisflies, stoneflies, midges) and their larvae, as well as terrestrial insects that fall on the water. In lakes, they feed on zooplankton, baitfish, scuds, and leeches. Larger rainbows become increasingly piscivorous, eating minnows, sculpin, and even juvenile trout. Stocked rainbow trout will eat a wide variety of baits including worms, corn, PowerBait, and salmon eggs.',
  recordWeight: { lbs: 48, oz: 0, location: 'Lake Diefenbaker, Saskatchewan, Canada', year: 2009 },
  averageWeight: { min: 0.5, max: 3, unit: 'lbs' },
  averageLength: { min: 10, max: 18, unit: 'inches' },
  lifespan: { min: 3, max: 11, unit: 'years' },
  preferredTemp: { min: 50, max: 65, unit: 'F' },
  difficultyRating: 2,
  fightRating: 4,
  tasteRating: 5,
  statesFound: [
    'alabama', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
    'georgia', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky',
    'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'missouri',
    'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey',
    'new-mexico', 'new-york', 'north-carolina', 'ohio', 'oklahoma', 'oregon',
    'pennsylvania', 'south-carolina', 'south-dakota', 'tennessee', 'texas',
    'utah', 'vermont', 'virginia', 'washington', 'west-virginia', 'wisconsin',
    'wyoming',
  ],
  seasonalPatterns: {
    spring:
      'Spring is a prime season for rainbow trout. Wild fish spawn from February through May depending on latitude, and post-spawn fish feed aggressively to recover body condition. Spring insect hatches including blue-winged olives, hendricksons, and caddisflies produce excellent dry fly fishing. Stocking programs in many states release large numbers of trout in spring, providing easy action in put-and-take fisheries. Water levels are often higher with snowmelt runoff.',
    summer:
      'Summer trout fishing requires focusing on the coolest water available. Early morning fishing is most productive as water temperatures are lowest. In tailrace fisheries, generation schedules provide cold water all summer. High-elevation mountain streams and spring creeks remain productive through summer. Terrestrial patterns like ants, beetles, and grasshoppers become important fly selections. In lakes, trout go deep, and trolling or fishing near cold-water inflows is most effective.',
    fall:
      'Fall is often the best season for large rainbow trout. Cooling water temperatures bring fish back to peak activity. Fall insect hatches including blue-winged olives and October caddis produce excellent dry fly fishing. Rainbows feed aggressively to build fat reserves before winter. Streamers imitating minnows and sculpin are highly effective for targeting large fish. Many states conduct fall stocking programs as well.',
    winter:
      'Winter rainbow trout fishing can be surprisingly productive. Trout remain active in cold water and continue feeding, though at a slower pace. Small nymphs like midges and blue-winged olives are the primary food sources. Fish move to slower, deeper pools to conserve energy. Winter tailrace fisheries can be outstanding because water temperatures remain stable. In northern states with ice, rainbow trout are a popular ice-fishing target on stocked lakes.',
  },
  bestTechniques: ['fly-fishing-basics', 'live-bait', 'trolling', 'drift-fishing', 'ice-fishing'],
  bestBaits: [
    'PowerBait (chartreuse/rainbow)',
    'Live nightcrawlers',
    'Salmon eggs',
    'Rooster tail spinner (1/8 oz)',
    'Pheasant Tail nymph (fly)',
    'Elk Hair Caddis (fly)',
    'Woolly Bugger (olive/black)',
    'Kastmaster spoon (gold/silver)',
    'Corn (where legal)',
    'Small Panther Martin spinner',
  ],
  relatedSpecies: ['smallmouth-bass', 'walleye'],
  funFacts: [
    'Rainbow trout and steelhead are the exact same species (Oncorhynchus mykiss). Steelhead are simply rainbow trout that migrate to the ocean or Great Lakes before returning to rivers to spawn.',
    'Rainbow trout have been successfully introduced to every continent except Antarctica, making them one of the most widely distributed fish species on Earth.',
    'Trout can see into the ultraviolet spectrum, which helps them detect the UV-reflective bodies of aquatic insects drifting in the current.',
    'The global trout farming industry produces over 800,000 metric tons of rainbow trout annually, making it one of the most important aquaculture species in the world.',
    'In the wild, rainbow trout can jump obstacles up to 6 feet high during upstream spawning migrations, rivaling salmon in their athletic ability.',
  ],
  faq: [
    {
      question: 'What is the difference between rainbow trout and steelhead?',
      answer:
        'Rainbow trout and steelhead are the same species (Oncorhynchus mykiss). The difference is life history: steelhead are the anadromous form that migrates to the ocean (or Great Lakes) to feed and grow before returning to freshwater to spawn. Resident rainbow trout spend their entire lives in freshwater. Steelhead are typically much larger (8-20+ lbs) than resident rainbows (0.5-5 lbs) due to the abundant food in the ocean. The two forms can interbreed and produce viable offspring.',
    },
    {
      question: 'What is the best bait for stocked rainbow trout?',
      answer:
        'For recently stocked hatchery rainbow trout, PowerBait dough bait (chartreuse, rainbow, or orange) is the most popular and effective bait. Mold a pea-sized ball onto a #12 treble hook, use a sliding sinker rig, and fish it off the bottom with enough leader to let the PowerBait float up. Nightcrawlers, salmon eggs, and kernel corn (where legal) are also excellent. Small inline spinners like Rooster Tails and Panther Martins are the best artificial options for newly stocked trout.',
    },
    {
      question: 'What water temperature is too warm for rainbow trout?',
      answer:
        'Rainbow trout become stressed when water temperatures exceed 68F and mortality increases rapidly above 72-75F. Their preferred range is 50-65F. This is why trout fishing in lowland streams is best in spring and fall, and why summer fishing should focus on high-elevation streams, spring creeks, and tailrace fisheries with cold-water releases. If you catch trout in warm water, handle them minimally and release them immediately in the current to maximize survival.',
    },
    {
      question: 'How do I start fly fishing for rainbow trout?',
      answer:
        'Start with a 9-foot, 5-weight fly rod outfit, which is the most versatile trout setup. Learn to cast 30-40 feet with reasonable accuracy. Begin with nymph fishing using a Pheasant Tail or Hare\'s Ear nymph under a strike indicator, as trout feed subsurface roughly 80% of the time. When you see fish rising, try a dry fly like an Elk Hair Caddis or Parachute Adams. Focus on small streams at first, where shorter casts are needed. Match the size and color of insects you see on the water.',
    },
    {
      question: 'Can you eat rainbow trout?',
      answer:
        'Rainbow trout are among the finest-eating freshwater fish. Hatchery-raised trout from stocking programs are ideal for keeping, as they have been bred for the table and harvesting them does not impact wild populations. The pink to white flesh is mild, slightly sweet, and flaky. Pan-frying whole trout in butter with lemon is the classic preparation. They are also excellent smoked, grilled, baked in foil with herbs, or prepared as trout almondine. Wild trout in special regulation waters should generally be released to protect those fisheries.',
    },
    {
      question: 'Where are the best rainbow trout fisheries in the US?',
      answer:
        'Top rainbow trout fisheries include the White River system in Arkansas (world-class tailrace fishery), the San Juan River in New Mexico, the South Holston and Clinch Rivers in Tennessee, the Green River in Utah, the upper Sacramento and McCloud Rivers in California, and nearly any mountain stream in the Great Smoky Mountains. Western states like Montana, Idaho, Colorado, and Oregon have abundant wild trout streams. The Great Lakes tributaries offer outstanding steelhead runs.',
    },
  ],
  imagePath: '/images/species/rainbow-trout.jpg',
  imageAlt: 'Rainbow trout showing its vibrant pink lateral stripe and spotted pattern in clear stream water',
  imageCredit: 'Photo via Unsplash',
};
