import type { StateFishingData } from '../types';

export const alaska: StateFishingData = {
  slug: 'alaska',
  name: 'Alaska',
  abbreviation: 'AK',
  region: 'pacific',
  licenseUrl: 'https://www.adfg.alaska.gov/index.cfm?adfg=license.main',
  licenseInfo: 'Alaska requires a sport fishing license for residents and non-residents 18 and older. Non-resident licenses are available in annual, 14-day, 7-day, 3-day, and 1-day options. A King Salmon Stamp is required for anyone targeting king salmon.',
  freshwaterSpecies: [
    'rainbow-trout',
    'northern-pike',
  ],
  saltwaterSpecies: [],
  topWaters: [
    {
      name: 'Kenai River',
      type: 'river',
      species: ['rainbow-trout'],
    },
    {
      name: 'Bristol Bay',
      type: 'bay',
      species: ['rainbow-trout'],
    },
    {
      name: 'Copper River',
      type: 'river',
      species: ['rainbow-trout'],
    },
  ],
  seasonInfo: 'Alaska fishing is highly seasonal. Salmon runs occur from May through September, with different species peaking at different times. King salmon run from mid-May through July, sockeye from June through August, and silver salmon from July through October. Halibut fishing is best from May through September. Trophy rainbow trout fishing peaks in late summer and fall after salmon spawning. Winter offers ice fishing for northern pike and trout.',
  regulations: [
    {
      species: 'rainbow-trout',
      bagLimit: '2 per day (varies by region)',
      sizeLimit: '20 inches minimum on many waters',
      season: 'Varies by region and drainage',
      notes: 'Alaska fishing regulations are highly specific to individual drainages and regions. Always consult the current Alaska Sport Fishing Regulations Summary before fishing.',
    },
    {
      species: 'northern-pike',
      bagLimit: '5 per day (varies by region)',
      sizeLimit: 'No minimum in most areas',
      season: 'Year-round in most areas',
      notes: 'In some Southcentral Alaska waters, unlimited harvest of pike is encouraged to protect native species.',
    },
  ],
  stateRecord: [
    { species: 'rainbow-trout', weight: '42 lbs 3 oz', year: 1970, water: 'Bell Island' },
    { species: 'northern-pike', weight: '38 lbs', year: 1991, water: 'Innoko River' },
  ],
  imagePath: '/images/states/alaska.jpg',
  imageAlt: 'Crystal-clear Alaskan river flowing through wilderness mountains with salmon visible beneath the surface',
  imageCredit: 'Photo via Unsplash',
  lastUpdated: '2025-01-01',
};
