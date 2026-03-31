import { StateFishingData } from '../types';

export const hawaii: StateFishingData = {
  slug: 'hawaii',
  name: 'Hawaii',
  abbreviation: 'HI',
  region: 'pacific',
  licenseUrl: 'https://dlnr.hawaii.gov/dar/fishing/fishing-licenses/',
  licenseInfo:
    'Hawaii requires a freshwater fishing license for non-commercial freshwater fishing. No license is needed for saltwater fishing from shore, though certain permits may be required for specific areas or species. Licenses can be purchased online through the DLNR Division of Aquatic Resources.',
  freshwaterSpecies: [],
  saltwaterSpecies: [
    'mahi-mahi',
    'tarpon',
    'yellowfin-tuna',
    'blue-marlin',
    'striped-marlin',
    'wahoo',
    'giant-trevally',
    'bonefish',
  ],
  topWaters: [
    {
      name: 'Kona Coast',
      type: 'ocean',
      species: ['blue-marlin', 'yellowfin-tuna', 'mahi-mahi', 'wahoo'],
    },
    {
      name: 'North Shore (Oahu)',
      type: 'ocean',
      species: ['giant-trevally', 'bonefish', 'mahi-mahi'],
    },
    {
      name: 'Penguin Banks',
      type: 'ocean',
      species: ['yellowfin-tuna', 'mahi-mahi', 'wahoo'],
    },
    {
      name: 'Waianae Coast',
      type: 'ocean',
      species: ['blue-marlin', 'striped-marlin', 'mahi-mahi'],
    },
    {
      name: 'Haleiwa Harbor',
      type: 'ocean',
      species: ['mahi-mahi', 'wahoo', 'yellowfin-tuna'],
    },
    {
      name: 'Kauai South Shore',
      type: 'ocean',
      species: ['giant-trevally', 'tarpon', 'bonefish'],
    },
  ],
  seasonInfo:
    'Hawaii offers year-round fishing thanks to its tropical climate. Blue marlin peak from May through September. Yellowfin tuna run strong from April through September. Mahi-mahi are most abundant from March through May and again in September through November. Giant trevally can be caught year-round along rocky shorelines.',
  regulations: [
    {
      species: 'mahi-mahi',
      bagLimit: 'No bag limit',
      sizeLimit: 'No minimum size',
      season: 'Year-round',
      notes: 'No specific restrictions for recreational harvest.',
    },
    {
      species: 'blue-marlin',
      bagLimit: 'No bag limit',
      sizeLimit: 'No minimum size',
      season: 'Year-round',
      notes: 'Catch and release encouraged for billfish conservation.',
    },
    {
      species: 'yellowfin-tuna',
      bagLimit: 'No bag limit',
      sizeLimit: 'No minimum size',
      season: 'Year-round',
      notes: 'Federal regulations may apply in certain waters.',
    },
    {
      species: 'giant-trevally',
      bagLimit: 'No bag limit',
      sizeLimit: 'No minimum size',
      season: 'Year-round',
      notes: 'Some Marine Life Conservation Districts restrict all fishing.',
    },
  ],
  stateRecord: [
    { species: 'Blue Marlin', weight: '1,805 lbs', year: 1982, water: 'Kona Coast' },
    { species: 'Yellowfin Tuna', weight: '325 lbs', year: 1996, water: 'Kona Coast' },
    { species: 'Mahi-Mahi', weight: '82 lbs', year: 1976, water: 'Waianae Coast' },
    { species: 'Wahoo', weight: '101 lbs', year: 1987, water: 'Kona Coast' },
    { species: 'Giant Trevally', weight: '191 lbs', year: 1991, water: 'Maui' },
    { species: 'Striped Marlin', weight: '224 lbs', year: 1981, water: 'Kona Coast' },
  ],
  imagePath: '/images/states/hawaii.jpg',
  imageAlt: 'Deep blue ocean waters off the Kona Coast of Hawaii with fishing boats',
  imageCredit: 'Photo via Unsplash',
  lastUpdated: '2025-01-01',
};
