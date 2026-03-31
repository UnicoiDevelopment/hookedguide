import { StateFishingData } from '../types';

export const indiana: StateFishingData = {
  slug: 'indiana',
  name: 'Indiana',
  abbreviation: 'IN',
  region: 'midwest',
  licenseUrl: 'https://www.in.gov/dnr/fish-and-wildlife/fishing/',
  licenseInfo:
    'Indiana requires a fishing license for anyone 18 years and older. Residents and non-residents can purchase annual or temporary licenses online through the Indiana DNR. A trout and salmon stamp is required when fishing for those species. Free fishing days are offered each year, typically in June.',
  freshwaterSpecies: [
    'largemouth-bass',
    'smallmouth-bass',
    'channel-catfish',
    'bluegill',
    'crappie',
    'walleye',
    'yellow-perch',
    'carp',
  ],
  saltwaterSpecies: [],
  topWaters: [
    {
      name: 'Lake Monroe',
      type: 'reservoir',
      species: ['largemouth-bass', 'crappie', 'bluegill', 'channel-catfish'],
    },
    {
      name: 'Patoka Lake',
      type: 'reservoir',
      species: ['largemouth-bass', 'crappie', 'bluegill', 'channel-catfish'],
    },
    {
      name: 'Brookville Lake',
      type: 'reservoir',
      species: ['walleye', 'largemouth-bass', 'crappie', 'bluegill'],
    },
    {
      name: 'Wabash River',
      type: 'river',
      species: ['smallmouth-bass', 'channel-catfish', 'carp', 'walleye'],
    },
    {
      name: 'Lake Wawasee',
      type: 'lake',
      species: ['largemouth-bass', 'bluegill', 'crappie', 'yellow-perch'],
    },
    {
      name: 'Mississinewa Lake',
      type: 'reservoir',
      species: ['largemouth-bass', 'crappie', 'walleye', 'channel-catfish'],
    },
    {
      name: 'Blue River',
      type: 'river',
      species: ['smallmouth-bass', 'channel-catfish'],
    },
  ],
  seasonInfo:
    'Indiana fishing is productive from April through October. Crappie and bluegill fishing peaks from April through June during the spawn. Bass fishing is best from May through September. Walleye fishing at Brookville Lake is excellent in early spring from March through May. Channel catfish bite best in summer months. Ice fishing is available in northern Indiana from December through February on lakes like Wawasee.',
  regulations: [
    {
      species: 'largemouth-bass',
      bagLimit: '5 per day',
      sizeLimit: '14 inches minimum',
      season: 'Year-round; catch and release encouraged during spawn',
      notes: 'Some lakes have special 12-inch or slot limit regulations.',
    },
    {
      species: 'smallmouth-bass',
      bagLimit: '5 per day',
      sizeLimit: '14 inches minimum',
      season: 'Year-round',
      notes: 'Combined daily limit with largemouth bass on most waters.',
    },
    {
      species: 'channel-catfish',
      bagLimit: '10 per day',
      sizeLimit: 'No minimum',
      season: 'Year-round',
      notes: 'Liberal limits throughout the state.',
    },
    {
      species: 'bluegill',
      bagLimit: '25 per day',
      sizeLimit: 'No minimum',
      season: 'Year-round',
      notes: 'Excellent panfish opportunities statewide.',
    },
    {
      species: 'crappie',
      bagLimit: '25 per day',
      sizeLimit: 'No minimum',
      season: 'Year-round',
      notes: 'Some lakes have reduced limits of 15 per day.',
    },
    {
      species: 'walleye',
      bagLimit: '6 per day',
      sizeLimit: '14 inches minimum',
      season: 'Year-round',
      notes: 'Brookville Lake is the premier walleye destination.',
    },
  ],
  stateRecord: [
    { species: 'Largemouth Bass', weight: '14 lbs 12 oz', year: 1991, water: 'Ferdinand State Forest Lake' },
    { species: 'Smallmouth Bass', weight: '7 lbs 3 oz', year: 2001, water: 'Lake Lemon' },
    { species: 'Channel Catfish', weight: '40 lbs 7 oz', year: 1964, water: 'Lake Shafer' },
    { species: 'Bluegill', weight: '3 lbs 4 oz', year: 1992, water: 'Private Pond' },
    { species: 'Crappie', weight: '4 lbs 8 oz', year: 2000, water: 'Turtle Creek Reservoir' },
    { species: 'Walleye', weight: '14 lbs 4 oz', year: 1969, water: 'Brookville Reservoir' },
    { species: 'Yellow Perch', weight: '2 lbs 4 oz', year: 1977, water: 'Lake Wawasee' },
    { species: 'Carp', weight: '40 lbs', year: 1967, water: 'Wabash River' },
  ],
  imagePath: '/images/states/indiana.jpg',
  imageAlt: 'Misty morning on Lake Monroe in southern Indiana surrounded by forested hills',
  imageCredit: 'Photo via Unsplash',
  lastUpdated: '2025-01-01',
};
