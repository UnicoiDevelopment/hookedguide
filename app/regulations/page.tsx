import type { Metadata } from 'next';
import Link from 'next/link';

import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { allStates } from '@/data/states';

export const metadata: Metadata = {
  title: 'Fishing Regulations by State (2026) — License & Limits | HookedGuide',
  description:
    'Find fishing rules, license info, and bag limits for all 50 states. Stay compliant with the latest fishing regulations.',
};

const regionColors: Record<string, string> = {
  northeast: 'bg-water-100 text-water-700 dark:bg-water-800 dark:text-water-300',
  southeast: 'bg-forest-100 text-forest-700 dark:bg-forest-800 dark:text-forest-300',
  midwest: 'bg-amber-100 text-amber-700 dark:bg-amber-800 dark:text-amber-300',
  southwest: 'bg-copper-100 text-copper-700 dark:bg-copper-800 dark:text-copper-300',
  west: 'bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-300',
  pacific: 'bg-sky-100 text-sky-700 dark:bg-sky-800 dark:text-sky-300',
};

const regionLabels: Record<string, string> = {
  northeast: 'Northeast',
  southeast: 'Southeast',
  midwest: 'Midwest',
  southwest: 'Southwest',
  west: 'West',
  pacific: 'Pacific',
};

export default function RegulationsIndexPage() {
  const sorted = [...allStates].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main>
      <HeroSection
        title="Fishing Regulations by State"
        subtitle="Find fishing rules, license info, and bag limits for all 50 states"
        backgroundGradient="from-water-700 via-water-500 to-water-400"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Regulations' },
          ]}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sorted.map((state) => (
            <Link
              key={state.slug}
              href={`/regulations/${state.slug}`}
              className="block bg-white dark:bg-water-800 rounded-lg p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center"
            >
              <p className="font-heading font-semibold text-water-900 dark:text-white">
                {state.name}
              </p>
              <p className="text-sm text-water-500 dark:text-water-400">
                {state.abbreviation}
              </p>
              <span
                className={`inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full ${regionColors[state.region] ?? ''}`}
              >
                {regionLabels[state.region] ?? state.region}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
