import { Metadata } from 'next';

import { allKnots } from '@/data/knots';
import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import KnotCard from '@/components/knots/KnotCard';

export const metadata: Metadata = {
  title: 'Fishing Knots Guide — How to Tie 15 Essential Knots',
  description:
    'Learn to tie 15 essential fishing knots with step-by-step instructions. Includes the Palomar, Improved Clinch, Uni knot, and more for every line type and situation.',
  alternates: {
    canonical: 'https://hookedguide.com/knots',
  },
  openGraph: {
    title: 'Fishing Knots Guide — How to Tie 15 Essential Knots',
    description:
      'Learn to tie 15 essential fishing knots with step-by-step instructions. Includes the Palomar, Improved Clinch, Uni knot, and more for every line type and situation.',
    url: 'https://hookedguide.com/knots',
  },
  twitter: {
    title: 'Fishing Knots Guide — How to Tie 15 Essential Knots',
    description:
      'Learn to tie 15 essential fishing knots with step-by-step instructions. Includes the Palomar, Improved Clinch, Uni knot, and more for every line type and situation.',
  },
};

const popularSlugs = ['palomar-knot', 'improved-clinch-knot', 'uni-knot'];

export default function KnotsIndexPage() {
  const popularKnots = popularSlugs
    .map((slug) => allKnots.find((k) => k.slug === slug))
    .filter(Boolean);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Knots' },
  ];

  return (
    <>
      <HeroSection
        title="Fishing Knots Guide"
        subtitle="Learn to tie 15 essential fishing knots"
        backgroundGradient="from-water-600 via-water-400 to-water-300"
      />

      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Most Popular */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
          Most Popular
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularKnots.map((knot) =>
            knot ? <KnotCard key={knot.slug} knot={knot} /> : null
          )}
        </div>
      </section>

      {/* All Knots */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
          All Fishing Knots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allKnots.map((knot) => (
            <KnotCard key={knot.slug} knot={knot} />
          ))}
        </div>
      </section>
    </>
  );
}
