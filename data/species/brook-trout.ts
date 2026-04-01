import { Species } from '../types';

export const brookTrout: Species = {
  slug: 'brook-trout',
  name: 'Brook Trout',
  scientificName: 'Salvelinus fontinalis',
  type: 'freshwater',
  family: 'Salmonidae',
  description:
    'The brook trout is the only trout native to much of the eastern United States and is actually a char, not a true trout. Revered for its stunning beauty and willingness to take a fly, the brook trout is a cold-water specialist that requires the cleanest, coldest streams to thrive. Though they rarely grow large, their vibrant colors and the pristine habitats they occupy make them a treasured quarry for anglers.',
  identification:
    'Brook trout are among the most beautifully colored freshwater fish. Their backs are dark olive-green with distinctive worm-like vermiculations (wavy markings). The flanks display red spots with bright blue halos. The lower fins are strikingly marked with a white leading edge followed by a black stripe and then orange or red coloring. During spawning, males develop vivid orange-red bellies.',
  habitat:
    'Brook trout require cold, clean, well-oxygenated water and are typically found in small headwater streams, spring-fed creeks, and cold mountain lakes. They are sensitive to water quality and cannot tolerate temperatures much above 68 degrees Fahrenheit for extended periods. Their presence is often used as an indicator of high water quality and healthy aquatic ecosystems.',
  behavior:
    'Brook trout are less wary than brown trout and more willing to strike at a variety of offerings, making them an excellent species for beginning fly anglers. They tend to hold in pocket water behind rocks, in small plunge pools, and under overhanging vegetation. Brook trout are fall spawners, building redds in areas with upwelling groundwater. They are competitive feeders and will aggressively defend feeding territories.',
  diet:
    'Brook trout feed primarily on aquatic and terrestrial insects, including mayflies, caddisflies, stoneflies, ants, beetles, and grasshoppers. They also eat small crustaceans, worms, and in larger waters, minnows and other small fish. Their diet is highly opportunistic, and they will readily take whatever food is most available in their habitat.',
  recordWeight: { lbs: 14, oz: 8, location: 'Nipigon River, Ontario', year: 1915 },
  averageWeight: { min: 0.25, max: 2, unit: 'lbs' },
  averageLength: { min: 6, max: 12, unit: 'inches' },
  lifespan: { min: 3, max: 8, unit: 'years' },
  preferredTemp: { min: 45, max: 60, unit: 'F' },
  difficultyRating: 3,
  fightRating: 3,
  tasteRating: 5,
  statesFound: [
    'connecticut',
    'georgia',
    'maine',
    'maryland',
    'massachusetts',
    'michigan',
    'minnesota',
    'new-hampshire',
    'new-jersey',
    'new-york',
    'north-carolina',
    'ohio',
    'pennsylvania',
    'south-carolina',
    'tennessee',
    'vermont',
    'virginia',
    'west-virginia',
    'wisconsin',
    'wyoming',
    'colorado',
    'idaho',
    'montana',
    'oregon',
    'washington',
  ],
  seasonalPatterns: {
    spring:
      'Spring is prime brook trout season as snowmelt fills mountain streams and warming water temperatures activate insect hatches. Fish become increasingly aggressive feeders after the lean winter months. Early-season nymphing transitions to exciting dry fly fishing as hatches intensify in April and May.',
    summer:
      'Brook trout remain active through summer in streams cold enough to stay within their thermal tolerance. Fishing is best in early morning and evening, especially during terrestrial insect season. Seek out spring-fed tributaries and shaded headwater streams where water stays cold enough for brook trout to thrive.',
    fall:
      'Fall spawning brings brook trout into their most brilliant coloration. Males develop vivid orange bellies and become aggressive toward intruders near their redds. While fishing near active spawning areas should be avoided to protect reproduction, pre-spawn fish feed heavily to build energy reserves and are highly catchable.',
    winter:
      'Brook trout slow down considerably in winter but will still feed on small nymphs and midges drifting through deep pools. In some states, winter fishing is closed on brook trout waters to protect the species. Where open, slow presentations with tiny nymphs fished deep produce occasional hookups on warmer afternoons.',
  },
  bestTechniques: ['fly-fishing-basics'],
  bestBaits: [
    'Royal Wulff dry fly',
    'Adams dry fly',
    'Elk Hair Caddis',
    'Prince Nymph',
    'small spinners',
    'nightcrawler pieces',
    'live wax worms',
    'Panther Martin spinner',
  ],
  relatedSpecies: ['brown-trout', 'rainbow-trout', 'lake-trout'],
  funFacts: [
    'Brook trout are not actually trout at all — they are char, more closely related to Arctic char and lake trout than to brown or rainbow trout.',
    'Brook trout can hybridize with brown trout to produce "tiger trout," which are sterile but grow quickly and display striking tiger-stripe markings.',
    'The world record brook trout of 14 lbs 8 oz was caught in 1915 from the Nipigon River in Ontario, Canada — a record that has stood for over a century.',
    'Brook trout can survive being frozen into ice in shallow pools and resume activity when the ice thaws, thanks to antifreeze proteins in their blood.',
    'Many eastern brook trout populations are now limited to tiny headwater streams because introduced brown and rainbow trout have outcompeted them in larger downstream waters.',
  ],
  faq: [
    {
      question: 'Where can I find native brook trout?',
      answer:
        'Native brook trout populations persist primarily in small, cold headwater streams throughout the Appalachian Mountains from Georgia to Maine. They are also native to the Great Lakes region and parts of the upper Midwest. Many of the healthiest native populations exist in remote mountain streams that are too cold and small for competing introduced species. National forests and parks in Virginia, West Virginia, Pennsylvania, and the Adirondacks of New York hold excellent native brook trout water.',
    },
    {
      question: 'What size rod should I use for brook trout?',
      answer:
        'A 2 to 4 weight fly rod in 6 to 7.5 feet is ideal for most brook trout fishing. Shorter rods are preferred in the tight, overgrown streams where native brookies live, as they allow for roll casts and bow-and-arrow casts under overhanging branches. For spin fishing, an ultralight rod with 2 to 4 pound test line is appropriate. The light tackle matches the small size of most brook trout and maximizes the fight.',
    },
    {
      question: 'How big do brook trout get?',
      answer:
        'In most small streams, brook trout average 6 to 10 inches. A 12-inch stream brook trout is considered a trophy in many waters. In larger rivers and lakes, brook trout can reach 2 to 4 pounds. In the far north of Maine, Labrador, and northern Ontario, brook trout can exceed 5 pounds. The all-tackle world record is 14 lbs 8 oz from the Nipigon River in Ontario, though fish that large are exceptionally rare.',
    },
    {
      question: 'Are brook trout good to eat?',
      answer:
        'Brook trout are widely considered one of the finest-tasting freshwater fish. Their flesh is delicate, mildly flavored, and ranges from white to pink depending on diet. They are excellent pan-fried in butter with simple seasoning. Due to conservation concerns with native populations, many anglers practice catch and release, especially in waters with wild, self-sustaining populations.',
    },
  ],
  imagePath: '/images/species/brook-trout-id.jpg',
  imageAlt: 'A vibrant brook trout with worm-like markings on its back and red spots with blue halos',
  imageCredit: 'Photo via Unsplash',
};
