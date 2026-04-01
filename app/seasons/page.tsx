import type { Metadata } from 'next';
import Link from 'next/link';
import { Sun, Leaf, Snowflake, Flower2 } from 'lucide-react';

import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Seasonal Fishing Guides (2026) — Spring, Summer, Fall & Winter | HookedGuide',
  description:
    'Explore seasonal fishing guides for every time of year. Learn what species to target, best techniques, and regional tips for spring, summer, fall, and winter fishing.',
  alternates: {
    canonical: 'https://hookedguide.com/seasons',
  },
  openGraph: {
    title: 'Seasonal Fishing Guides (2026) — Spring, Summer, Fall & Winter | HookedGuide',
    description:
      'Explore seasonal fishing guides for every time of year. Learn what species to target, best techniques, and regional tips for spring, summer, fall, and winter fishing.',
    url: 'https://hookedguide.com/seasons',
  },
  twitter: {
    title: 'Seasonal Fishing Guides (2026) — Spring, Summer, Fall & Winter | HookedGuide',
    description:
      'Explore seasonal fishing guides for every time of year. Learn what species to target, best techniques, and regional tips for spring, summer, fall, and winter fishing.',
  },
};

const seasons = [
  {
    slug: 'spring',
    label: 'Spring',
    gradient: 'from-forest-500 to-forest-300',
    bg: 'bg-gradient-to-br from-forest-500 to-forest-300',
    description:
      'Rising water temperatures awaken fish. Spawning activity puts bass, crappie, and panfish within easy reach.',
    Icon: Flower2,
  },
  {
    slug: 'summer',
    label: 'Summer',
    gradient: 'from-copper-500 to-copper-300',
    bg: 'bg-gradient-to-br from-copper-500 to-copper-300',
    description:
      'Warm water means active fish. Dawn and dusk produce the best bites across freshwater and saltwater.',
    Icon: Sun,
  },
  {
    slug: 'fall',
    label: 'Fall',
    gradient: 'from-amber-600 to-amber-400',
    bg: 'bg-gradient-to-br from-amber-600 to-amber-400',
    description:
      'Baitfish migrations trigger aggressive feeding as fish bulk up before winter. Follow the bait for action.',
    Icon: Leaf,
  },
  {
    slug: 'winter',
    label: 'Winter',
    gradient: 'from-water-600 to-water-400',
    bg: 'bg-gradient-to-br from-water-600 to-water-400',
    description:
      'Slower presentations near deep structure pay off. Ice fishing opens new opportunities in northern states.',
    Icon: Snowflake,
  },
];

export default function SeasonsIndexPage() {
  return (
    <main>
      <HeroSection
        title="Seasonal Fishing Guides"
        subtitle="Find the best species, techniques, and tips for every season of the year"
        backgroundGradient="from-water-700 via-water-500 to-forest-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Seasons' },
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {seasons.map(({ slug, label, bg, description, Icon }) => (
            <Link
              key={slug}
              href={`/seasons/${slug}`}
              className="group block rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className={`${bg} p-8 md:p-10 text-white`}>
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-8 h-8" />
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">
                    {label}
                  </h2>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  {description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  View {label} Guide &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
