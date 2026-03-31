import { StateFishingData } from '../types';

export const idaho: StateFishingData = {
  slug: 'idaho',
  name: 'Idaho',
  abbreviation: 'ID',
  region: 'west',
  licenseUrl: 'https://idfg.idaho.gov/fish',
  licenseInfo:
    'Idaho requires a fishing license for anyone 14 years and older. Residents and non-residents can purchase annual or short-term licenses online through the Idaho Department of Fish and Game. A salmon or steelhead permit is required in addition to the base license for those species. A two-pole permit allows fishing with two rods simultaneously.',
  freshwaterSpecies: [
    'rainbow-trout',
    'brown-trout',
    'brook-trout',
    'smallmouth-bass',
    'largemouth-bass',
    'channel-catfish',
    'yellow-perch',
    'crappie',
  ],
  saltwaterSpecies: [],
  topWaters: [
    {
      name: 'Snake River',
      type: 'river',
      species: ['rainbow-trout', 'brown-trout', 'smallmouth-bass', 'channel-catfish'],
    },
    {
      name: 'Salmon River',
      type: 'river',
      species: ['rainbow-trout', 'brook-trout', 'brown-trout'],
    },
    {
      name: 'Lake Coeur d\'Alene',
      type: 'lake',
      species: ['smallmouth-bass', 'largemouth-bass', 'rainbow-trout', 'yellow-perch'],
    },
    {
      name: 'Henry\'s Fork',
      type: 'river',
      species: ['rainbow-trout', 'brown-trout', 'brook-trout'],
    },
    {
      name: 'Payette Lake',
      type: 'lake',
      species: ['rainbow-trout', 'yellow-perch', 'crappie'],
    },
    {
      name: 'Lake Pend Oreille',
      type: 'lake',
      species: ['rainbow-trout', 'brown-trout', 'smallmouth-bass', 'yellow-perch'],
    },
    {
      name: 'South Fork Boise River',
      type: 'river',
      species: ['rainbow-trout', 'brown-trout'],
    },
  ],
  seasonInfo:
    'Idaho fishing peaks from late spring through early fall. Trout fishing is excellent from May through October, with hatches on Henry\'s Fork drawing fly anglers worldwide in June and July. Bass fishing heats up from June through September. Ice fishing is popular on many lakes from December through February. Check specific water regulations as seasons vary widely by region.',
  regulations: [
    {
      species: 'rainbow-trout',
      bagLimit: '6 per day, 12 in possession',
      sizeLimit: 'None (varies by water)',
      season: 'Year-round on most waters',
      notes: 'Some waters have catch-and-release only or slot limits. Check specific water rules.',
    },
    {
      species: 'brown-trout',
      bagLimit: '6 per day, 12 in possession',
      sizeLimit: 'None (varies by water)',
      season: 'Year-round on most waters',
      notes: 'Some trophy waters have special regulations.',
    },
    {
      species: 'smallmouth-bass',
      bagLimit: '6 per day, 12 in possession',
      sizeLimit: 'No minimum (varies by water)',
      season: 'Year-round',
      notes: 'Snake River has specific bass regulations in certain sections.',
    },
    {
      species: 'largemouth-bass',
      bagLimit: '6 per day, 12 in possession',
      sizeLimit: 'No minimum (varies by water)',
      season: 'Year-round',
      notes: 'Check individual water body regulations for exceptions.',
    },
    {
      species: 'channel-catfish',
      bagLimit: '6 per day',
      sizeLimit: 'No minimum',
      season: 'Year-round',
      notes: 'Popular in Snake River reservoirs.',
    },
  ],
  stateRecord: [
    { species: 'Rainbow Trout', weight: '36 lbs 8 oz', year: 2007, water: 'Pend Oreille River' },
    { species: 'Brown Trout', weight: '30 lbs 1 oz', year: 2013, water: 'Ashton Reservoir' },
    { species: 'Brook Trout', weight: '7 lbs 14 oz', year: 1978, water: 'Henrys Lake' },
    { species: 'Smallmouth Bass', weight: '9 lbs 2 oz', year: 2001, water: 'Dworshak Reservoir' },
    { species: 'Largemouth Bass', weight: '10 lbs 15 oz', year: 1990, water: 'Anderson Ranch Reservoir' },
    { species: 'Channel Catfish', weight: '35 lbs 2 oz', year: 1989, water: 'Snake River' },
    { species: 'Yellow Perch', weight: '2 lbs 11 oz', year: 1969, water: 'Lake Cascade' },
  ],
  imagePath: '/images/states/idaho.jpg',
  imageAlt: 'Crystal clear waters of the Salmon River flowing through Idaho mountain wilderness',
  imageCredit: 'Photo via Unsplash',
  lastUpdated: '2025-01-01',
};
