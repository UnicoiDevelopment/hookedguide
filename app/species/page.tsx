import { Metadata } from 'next';
import { allSpecies } from '@/data/species';
import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import SpeciesListClient from './SpeciesListClient';

export const metadata: Metadata = {
  title: 'All Fish Species Guides — Freshwater & Saltwater | HookedGuide',
  description:
    'Browse all 30 fish species guides. Filter by freshwater, saltwater, or difficulty. Learn techniques, gear, and seasonal patterns for each species.',
};

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Species' },
];

export default function SpeciesPage() {
  return (
    <>
      <HeroSection
        title="Species Guides"
        subtitle="Complete fishing guides for 30 freshwater and saltwater species"
        backgroundGradient="from-water-700 via-water-500 to-water-400"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbs} />
        <SpeciesListClient species={allSpecies} />
      </div>
    </>
  );
}
