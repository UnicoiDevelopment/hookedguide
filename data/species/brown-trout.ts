import { Species } from '../types';

export const brownTrout: Species = {
  slug: 'brown-trout',
  name: 'Brown Trout',
  scientificName: 'Salmo trutta',
  type: 'freshwater',
  family: 'Salmonidae',
  description:
    'The brown trout is a highly prized freshwater game fish known for its wariness and selective feeding habits. Originally native to Europe, it was introduced to North American waters in the 1880s and has since become one of the most sought-after trout species. Brown trout are more tolerant of warmer water than other trout and tend to grow larger, making them a favorite target of experienced anglers.',
  identification:
    'Brown trout have a golden-brown to olive body covered with large dark spots, many of which are surrounded by pale halos. Red or orange spots are scattered along the flanks, particularly below the lateral line. The belly ranges from pale yellow to white. The adipose fin often has an orange or reddish tint. The tail is typically squared off rather than forked, helping distinguish them from other trout species.',
  habitat:
    'Brown trout thrive in clear, cold streams and rivers with rocky substrates and abundant cover such as undercut banks, fallen timber, and deep pools. They are also found in large lakes and reservoirs. They tolerate slightly warmer and more turbid water than brook or rainbow trout, allowing them to inhabit a wider range of environments.',
  behavior:
    'Brown trout are notoriously wary and difficult to approach, especially larger specimens. They are primarily crepuscular feeders, most active during dawn and dusk. Large browns become increasingly nocturnal and piscivorous as they age. They are territorial and prefer lies that offer both shelter from current and access to drifting food. Brown trout hold in deeper pools and undercut banks during the day, venturing into shallows to feed under low-light conditions.',
  diet:
    'Brown trout are opportunistic feeders with a diet that shifts as they grow. Juveniles eat aquatic insects including mayflies, caddisflies, and stoneflies. As they mature, brown trout increasingly consume crayfish, sculpins, minnows, and other small fish. Large browns are aggressive predators that will take mice, frogs, and even small birds that fall into the water.',
  recordWeight: { lbs: 42, oz: 1, location: 'Little Red River, Arkansas', year: 1992 },
  averageWeight: { min: 1, max: 5, unit: 'lbs' },
  averageLength: { min: 12, max: 22, unit: 'inches' },
  lifespan: { min: 6, max: 20, unit: 'years' },
  preferredTemp: { min: 55, max: 65, unit: 'F' },
  difficultyRating: 4,
  fightRating: 4,
  tasteRating: 5,
  statesFound: [
    'arkansas',
    'california',
    'colorado',
    'connecticut',
    'georgia',
    'idaho',
    'illinois',
    'iowa',
    'maine',
    'maryland',
    'massachusetts',
    'michigan',
    'minnesota',
    'missouri',
    'montana',
    'nebraska',
    'new-hampshire',
    'new-jersey',
    'new-mexico',
    'new-york',
    'north-carolina',
    'ohio',
    'oregon',
    'pennsylvania',
    'south-dakota',
    'tennessee',
    'utah',
    'vermont',
    'virginia',
    'washington',
    'west-virginia',
    'wisconsin',
    'wyoming',
  ],
  seasonalPatterns: {
    spring:
      'As water temperatures rise into the mid-40s to low 50s, brown trout become increasingly active after winter dormancy. Spring hatches of blue-winged olives and early caddisflies trigger excellent dry fly opportunities. Fish move from deeper winter holding water into riffles and runs to feed.',
    summer:
      'Brown trout seek thermal refuge in deeper pools, spring-fed tributaries, and shaded stretches during warm summer months. Early morning and late evening provide the best fishing as browns avoid bright daylight. Terrestrial patterns like hoppers, beetles, and ants become highly effective in mid to late summer.',
    fall:
      'Fall is spawning season for brown trout, and fish become aggressive and territorial as they move onto gravel beds in October and November. Large males develop hooked jaws (kypes) and intensified coloration. Streamer fishing for pre-spawn browns can produce trophy fish. Many waters have special regulations during the spawn.',
    winter:
      'Brown trout become lethargic in cold winter water and hold in slow, deep pools to conserve energy. They will still feed opportunistically on midges and small nymphs drifted slowly through their holding lies. Fishing can be productive on warmer winter afternoons when water temperatures tick up slightly.',
  },
  bestTechniques: ['fly-fishing-basics', 'live-bait'],
  bestBaits: [
    'Woolly Bugger streamer',
    'Elk Hair Caddis',
    'Pheasant Tail nymph',
    'nightcrawlers',
    'live minnows',
    'Rapala Original floating minnow',
    'Mepps Aglia spinner',
    'PowerBait dough',
  ],
  relatedSpecies: ['rainbow-trout', 'brook-trout', 'lake-trout'],
  funFacts: [
    'Brown trout were first successfully introduced to North America in 1884 when eggs from Germany were shipped to a hatchery in Michigan.',
    'A brown trout can detect the shadow of a fishing line on the water surface, which is why many anglers use long, fine leaders.',
    'The world-record brown trout of 42 lbs 1 oz from the Little Red River in Arkansas was initially thought to be too large to be real and was DNA-tested to confirm the species.',
    'Brown trout have been documented living over 20 years in some European waters, making them one of the longer-lived salmonids.',
    'Large brown trout are so nocturnal that some trophy-hunting anglers exclusively fish for them after dark with large articulated streamers or live bait.',
  ],
  faq: [
    {
      question: 'Why are brown trout harder to catch than rainbow trout?',
      answer:
        'Brown trout are generally more wary and line-shy than rainbows. They tend to inspect food more carefully before striking, are more sensitive to angler presence and noise, and larger specimens become primarily nocturnal feeders. Their preference for heavy cover also makes presentation more challenging. Successful brown trout anglers typically use lighter tippets, longer leaders, and more precise casts.',
    },
    {
      question: 'What is the best time of day to fish for brown trout?',
      answer:
        'Dawn and dusk are the most productive times for brown trout fishing. These low-light periods coincide with their natural feeding activity. During summer, the hour before dark and even after nightfall can produce the largest fish. Overcast days can extend the feeding window throughout the day, as browns are more willing to move and feed when light levels are reduced.',
    },
    {
      question: 'What water temperature do brown trout prefer?',
      answer:
        'Brown trout prefer water temperatures between 55 and 65 degrees Fahrenheit. They can tolerate temperatures up to about 75 degrees for short periods, making them more heat-tolerant than brook trout. When water temperatures exceed their comfort range, they seek out cold-water refugia such as spring seeps, tributary mouths, and deep pools.',
    },
    {
      question: 'Can you eat brown trout?',
      answer:
        'Brown trout are excellent table fare with firm, flavorful flesh that ranges from white to orange depending on their diet. Fish that feed heavily on crustaceans tend to have the pinkest flesh. They can be prepared by pan-frying, baking, grilling, or smoking. Many anglers consider stream-caught brown trout among the finest-tasting freshwater fish available.',
    },
    {
      question: 'What is the best fly for brown trout?',
      answer:
        'There is no single best fly, as it depends on the season and conditions. A Woolly Bugger in olive or black is arguably the most versatile year-round pattern. For dry fly fishing, an Elk Hair Caddis or Parachute Adams covers most situations. Nymphing with a Pheasant Tail or Hare\'s Ear in sizes 14-18 is consistently productive. For trophy browns, large articulated streamers fished on sinking lines can trigger aggressive strikes.',
    },
  ],
  imagePath: '/images/species/brown-trout-id.jpg',
  imageAlt: 'A brown trout with golden-brown coloring and distinctive red spots held above a clear stream',
  imageCredit: 'Photo via Unsplash',
};
