import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { gearCategories } from '@/data/gear/categories';
import { allReviews } from '@/data/gear/reviews';

export const metadata: Metadata = {
  title: 'Fishing Gear Reviews & Buyer\'s Guides (2026) | HookedGuide',
};

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < full; i++) stars += '★';
  if (half) stars += '★';
  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < empty; i++) stars += '☆';
  return <span className="text-copper-500">{stars}</span>;
}

export default function GearIndexPage() {
  const latestReviews = allReviews.slice(0, 6);

  return (
    <>
      <HeroSection
        title="Fishing Gear Reviews"
        subtitle="Expert reviews and buyer's guides for fishing gear"
        backgroundGradient="from-copper-600 via-copper-500 to-copper-400"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Gear' },
          ]}
        />

        <section className="mt-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Gear Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gearCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/gear/${cat.slug}`}
                className="bg-white dark:bg-water-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-lg font-semibold mb-2">
                  {cat.name}
                </h3>
                <p className="text-sm text-sand-600 dark:text-sand-300">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Latest Reviews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestReviews.map((review) => (
              <Link
                key={review.slug}
                href={`/gear/reviews/${review.slug}`}
                className="bg-white dark:bg-water-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-lg font-semibold mb-1">
                  {review.productName}
                </h3>
                <p className="text-sm text-sand-500 dark:text-sand-400 mb-2">
                  {review.brand}
                </p>
                <StarRating rating={review.rating} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
