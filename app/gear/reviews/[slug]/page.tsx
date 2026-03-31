import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, XCircle } from 'lucide-react';
import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import AdPlacement from '@/components/ads/AdPlacement';
import { allReviews } from '@/data/gear/reviews';
import { gearCategories } from '@/data/gear/categories';
import { affiliateProducts } from '@/data/affiliate-products';

export function generateStaticParams() {
  return allReviews.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const review = allReviews.find((r) => r.slug === params.slug);
  if (!review) return {};
  return {
    title: `${review.productName} Review (2026) — Is It Worth It? | HookedGuide`,
  };
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const roundUp = rating % 1 >= 0.75;
  let stars = '';
  const wholeStars = roundUp ? full + 1 : full;
  for (let i = 0; i < wholeStars; i++) stars += '★';
  if (hasHalf) stars += '½';
  const filled = wholeStars + (hasHalf ? 1 : 0);
  for (let i = filled; i < 5; i++) stars += '☆';
  return <span className="text-copper-500 text-xl">{stars}</span>;
}

export default function GearReviewPage({
  params,
}: {
  params: { slug: string };
}) {
  const review = allReviews.find((r) => r.slug === params.slug);
  if (!review) notFound();

  const category = gearCategories.find((c) => c.slug === review.category);
  const categoryName = category?.name ?? review.category;
  const affiliate = affiliateProducts.find(
    (p) => p.id === review.affiliateProductId
  );

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gear', href: '/gear' },
    { label: categoryName, href: `/gear/${review.category}` },
    { label: review.productName },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Review',
        name: `${review.productName} Review`,
        reviewBody: review.description,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: review.rating,
          bestRating: 5,
        },
        author: {
          '@type': 'Organization',
          name: 'HookedGuide',
        },
        itemReviewed: {
          '@type': 'Product',
          name: review.productName,
          brand: {
            '@type': 'Brand',
            name: review.brand,
          },
        },
      },
      {
        '@type': 'Product',
        name: review.productName,
        brand: {
          '@type': 'Brand',
          name: review.brand,
        },
        review: {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: review.rating,
            bestRating: 5,
          },
          author: {
            '@type': 'Organization',
            name: 'HookedGuide',
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.label,
          ...(item.href
            ? { item: `https://hookedguide.com${item.href}` }
            : {}),
        })),
      },
    ],
  };

  const paragraphs = review.description
    .split('\n')
    .filter((p) => p.trim().length > 0);

  return (
    <>
      <HeroSection
        title={review.productName}
        subtitle={review.brand}
        backgroundGradient="from-copper-600 via-copper-500 to-water-700"
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Quick Info */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <StarRating rating={review.rating} />
          <span className="text-sm text-sand-500">{review.rating}/5</span>
          <span className="text-sm font-medium text-sand-600 dark:text-sand-300">
            {review.brand}
          </span>
          <span className="bg-water-100 dark:bg-water-700 text-water-700 dark:text-water-200 text-xs font-medium px-3 py-1 rounded-full">
            {categoryName}
          </span>
        </div>

        <AdPlacement id="ad-below-hero" className="mt-6" />

        {/* Full Review */}
        <section className="mt-8 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Full Review
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Specifications Table */}
        {review.specifications && review.specifications.length > 0 && (
          <section className="mt-10 max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Specifications
            </h2>
            <table className="w-full text-sm border border-sand-200 dark:border-water-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-sand-100 dark:bg-water-900">
                  <th className="text-left py-3 px-4 font-semibold">Spec</th>
                  <th className="text-left py-3 px-4 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody>
                {review.specifications.map((spec, i) => (
                  <tr
                    key={i}
                    className={
                      i % 2 === 0 ? 'bg-sand-50 dark:bg-water-800' : ''
                    }
                  >
                    <td className="py-2 px-4 font-medium">{spec.key}</td>
                    <td className="py-2 px-4">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {/* Pros / Cons */}
        <section className="mt-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Pros &amp; Cons
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-water-800 rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-green-600 mb-3 text-lg">Pros</h3>
              <ul className="space-y-2">
                {review.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-water-800 rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-red-500 mb-3 text-lg">Cons</h3>
              <ul className="space-y-2">
                {review.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Who Is This For? */}
        <section className="mt-10 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Who Is This For?
          </h2>
          <ul className="space-y-2">
            {review.bestFor.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sand-700 dark:text-sand-300"
              >
                <span className="text-copper-500 font-bold mt-0.5">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Affiliate CTA */}
        {affiliate && affiliate.affiliateUrl && (
          <div className="mt-8">
            <a
              href={affiliate.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="inline-block bg-copper-500 text-white font-medium rounded-lg px-8 py-4 hover:bg-copper-600 transition-colors text-lg"
            >
              Check Price
            </a>
          </div>
        )}

        <AdPlacement id="ad-mid-content" className="mt-8" />

        {/* FAQ */}
        {review.faq && review.faq.length > 0 && (
          <section className="mt-12">
            <FAQSection questions={review.faq} />
          </section>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
