import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { gearCategories } from '@/data/gear/categories';
import { allReviews } from '@/data/gear/reviews';
import { affiliateProducts } from '@/data/affiliate-products';
import type { AffiliateProduct } from '@/data/types';

export const metadata: Metadata = {
  title: 'Fishing Gear Reviews & Buyer\'s Guides (2026)',
  description:
    'Expert fishing gear reviews and buyer\'s guides. Find the best rods, reels, lures, and tackle for every species and technique.',
  alternates: {
    canonical: 'https://hookedguide.com/gear',
  },
  openGraph: {
    title: 'Fishing Gear Reviews & Buyer\'s Guides (2026)',
    description:
      'Expert fishing gear reviews and buyer\'s guides. Find the best rods, reels, lures, and tackle for every species and technique.',
    url: 'https://hookedguide.com/gear',
  },
  twitter: {
    title: 'Fishing Gear Reviews & Buyer\'s Guides (2026)',
    description:
      'Expert fishing gear reviews and buyer\'s guides. Find the best rods, reels, lures, and tackle for every species and technique.',
  },
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

function TrendingProductCard({ product }: { product: AffiliateProduct }) {
  return (
    <div className="relative rounded-xl border-2 border-copper-300 dark:border-copper-700 bg-white dark:bg-water-800 p-5 hover:shadow-lg transition-shadow">
      <div className="absolute -top-2.5 left-4">
        {product.isNewBrand && (
          <span className="inline-flex items-center gap-1 rounded-full bg-copper-500 text-white text-xs font-bold px-3 py-1">
            NEW BRAND
          </span>
        )}
        {!product.isNewBrand && product.isTrending && (
          <span className="inline-flex items-center gap-1 rounded-full bg-forest-500 text-white text-xs font-bold px-3 py-1">
            TRENDING
          </span>
        )}
      </div>
      <div className="mt-2">
        <p className="text-xs text-copper-500 font-semibold uppercase tracking-wider">{product.brand}</p>
        <p className="font-semibold text-sm mt-1">{product.name}</p>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
        {product.price && <p className="text-sm font-medium mt-2">{product.price}</p>}
      </div>
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-md bg-copper-500 px-4 py-2 text-sm font-medium text-white hover:bg-copper-600 transition-colors w-full"
      >
        Check It Out
      </a>
    </div>
  );
}

export default function GearIndexPage() {
  const latestReviews = allReviews.slice(0, 6);
  const trendingProducts = affiliateProducts.filter(p => (p.isNewBrand || p.isTrending) && p.affiliateUrl !== '');

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

        {/* New & Trending Section */}
        {trendingProducts.length > 0 && (
          <section className="mt-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🔥</span>
              <div>
                <h2 className="font-heading text-2xl font-bold">New & Trending</h2>
                <p className="text-sm text-muted-foreground">Rising brands and gear making waves right now</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {trendingProducts.map(product => (
                <TrendingProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

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
