import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CheckCircle, XCircle } from 'lucide-react';
import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import AdPlacement from '@/components/ads/AdPlacement';
import { gearCategories } from '@/data/gear/categories';
import { allReviews } from '@/data/gear/reviews';
import { affiliateProducts } from '@/data/affiliate-products';

export function generateStaticParams() {
  return gearCategories.map((cat) => ({ category: cat.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const category = gearCategories.find((c) => c.slug === params.category);
  if (!category) return {};
  return {
    title: `Best ${category.name} (2026) — Reviews & Buyer's Guide | HookedGuide`,
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
  return <span className="text-copper-500 text-lg">{stars}</span>;
}

export default function GearCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = gearCategories.find((c) => c.slug === params.category);
  if (!category) notFound();

  const reviews = category.products
    .map((productId) =>
      allReviews.find(
        (r) => r.slug === productId || r.affiliateProductId === productId
      )
    )
    .filter(Boolean);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Gear', href: '/gear' },
    { label: category.name },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: `Best ${category.name} (2026) — Reviews & Buyer's Guide`,
        description: category.description,
        publisher: {
          '@type': 'Organization',
          name: 'HookedGuide',
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.label,
          ...(item.href ? { item: `https://hookedguide.com${item.href}` } : {}),
        })),
      },
    ],
  };

  return (
    <>
      <HeroSection
        title={category.name}
        backgroundGradient="from-copper-600 via-copper-500 to-copper-700"
        overlay={true}
      />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <AdPlacement id="ad-below-hero" />

        <p className="mt-4 text-lg text-sand-600 dark:text-sand-300 max-w-3xl">
          {category.description}
        </p>

        <section className="mt-10 space-y-12">
          {reviews.map((review, index) => {
            if (!review) return null;

            const affiliate = affiliateProducts.find(
              (p) => p.id === review.affiliateProductId
            );

            return (
              <div key={review.slug}>
                {index === 2 && <AdPlacement id="ad-mid-content" className="mb-8" />}
                <article className="bg-white dark:bg-water-800 rounded-lg shadow-sm p-6 md:p-8">
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-1">
                    {review.productName}{' '}
                    <span className="text-sand-500 dark:text-sand-400 font-normal text-lg">
                      by {review.brand}
                    </span>
                  </h3>

                  <div className="mb-4">
                    <StarRating rating={review.rating} />
                    <span className="ml-2 text-sm text-sand-500">
                      {review.rating}/5
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                      <ul className="space-y-1">
                        {review.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-500 mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {review.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Best for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {review.bestFor.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-copper-100 dark:bg-copper-900 text-copper-700 dark:text-copper-300 text-sm px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {review.specifications && review.specifications.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2">Specifications</h4>
                      <table className="w-full text-sm">
                        <tbody>
                          {review.specifications.map((spec, i) => (
                            <tr
                              key={i}
                              className={
                                i % 2 === 0
                                  ? 'bg-sand-50 dark:bg-water-900'
                                  : ''
                              }
                            >
                              <td className="py-2 px-3 font-medium">{spec.key}</td>
                              <td className="py-2 px-3">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {affiliate && affiliate.affiliateUrl && (
                    <a
                      href={affiliate.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow sponsored"
                      className="inline-block bg-copper-500 text-white font-medium rounded-lg px-6 py-3 hover:bg-copper-600 transition-colors"
                    >
                      Check Price
                    </a>
                  )}
                </article>
              </div>
            );
          })}
        </section>

        {category.faq && category.faq.length > 0 && (
          <section className="mt-12">
            <FAQSection questions={category.faq} />
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
