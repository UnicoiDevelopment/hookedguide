import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Lightbulb, Shield, Target, Layers } from 'lucide-react';

import { allKnots } from '@/data/knots';
import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import DifficultyStars from '@/components/ui/DifficultyStars';
import AdPlacement from '@/components/ads/AdPlacement';
import AffiliateRecommendation from '@/components/gear/AffiliateRecommendation';
import KnotCard from '@/components/knots/KnotCard';

interface PageProps {
  params: { slug: string };
}

const lineTypeDescriptions: Record<string, string> = {
  monofilament:
    "Standard nylon line. This knot works well with mono's inherent stretch and grip.",
  fluorocarbon:
    "Nearly invisible in water. This knot holds reliably on fluorocarbon's stiffer material.",
  braided:
    'Zero stretch super line. This knot grips braid without slipping.',
};

const lineTypeLabels: Record<string, string> = {
  monofilament: 'Monofilament',
  fluorocarbon: 'Fluorocarbon',
  braided: 'Braided',
};

export async function generateStaticParams() {
  return allKnots.map((knot) => ({
    slug: knot.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const knot = allKnots.find((k) => k.slug === params.slug);
  if (!knot) return {};

  const lineTypesStr = knot.lineTypes.map((lt) => lineTypeLabels[lt] || lt).join(', ');

  const title = `How to Tie a ${knot.name} — Step-by-Step with Diagrams | HOOKED`;
  const description = `Learn to tie the ${knot.name} with ${knot.strengthRating}% line strength. Difficulty: ${knot.difficulty}/5. Works with ${lineTypesStr}. Step-by-step instructions, tips, and FAQs.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://hookedguide.com/knots/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://hookedguide.com/knots/${params.slug}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function KnotPage({ params }: PageProps) {
  const knot = allKnots.find((k) => k.slug === params.slug);
  if (!knot) notFound();

  const relatedKnots = allKnots
    .filter((k) => k.slug !== knot.slug)
    .slice(0, 3);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Knots', href: '/knots' },
    { label: knot.name },
  ];

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Tie a ${knot.name}`,
    description: knot.description,
    totalTime: `PT${knot.steps.length * 2}M`,
    step: knot.steps.map((s) => ({
      '@type': 'HowToStep',
      position: s.step,
      text: s.instruction,
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems
      .filter((item) => item.href)
      .map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        item: `https://hookedguide.com${item.href}`,
      })),
  };

  return (
    <>
      {/* Hero */}
      <HeroSection
        title={knot.name}
        backgroundGradient="from-water-600 via-water-400 to-water-300"
        overlay={true}
      />

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Quick Info Bar */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-4">
          {/* Strength */}
          <div className="flex items-center gap-3 bg-forest-100 text-forest-700 rounded-lg px-5 py-3">
            <Shield className="w-5 h-5 shrink-0" aria-hidden="true" />
            <div>
              <div className="text-xs font-medium uppercase tracking-wide">Strength</div>
              <div className="font-bold">{knot.strengthRating}% line strength</div>
            </div>
          </div>

          {/* Difficulty */}
          <div className="flex items-center gap-3 bg-white dark:bg-water-800 rounded-lg px-5 py-3 shadow-sm">
            <Target className="w-5 h-5 shrink-0 text-copper-500" aria-hidden="true" />
            <div>
              <div className="text-xs font-medium uppercase tracking-wide">Difficulty</div>
              <DifficultyStars rating={knot.difficulty} />
            </div>
          </div>

          {/* Best For */}
          <div className="flex items-center gap-3 bg-white dark:bg-water-800 rounded-lg px-5 py-3 shadow-sm">
            <Lightbulb className="w-5 h-5 shrink-0 text-copper-500" aria-hidden="true" />
            <div>
              <div className="text-xs font-medium uppercase tracking-wide">Best For</div>
              <div className="text-sm">{knot.bestFor.join(', ')}</div>
            </div>
          </div>

          {/* Line Types */}
          <div className="flex items-center gap-3 bg-white dark:bg-water-800 rounded-lg px-5 py-3 shadow-sm">
            <Layers className="w-5 h-5 shrink-0 text-copper-500" aria-hidden="true" />
            <div>
              <div className="text-xs font-medium uppercase tracking-wide mb-1">Line Types</div>
              <div className="flex flex-wrap gap-1">
                {knot.lineTypes.map((lt) => (
                  <span
                    key={lt}
                    className="inline-block text-xs px-2 py-0.5 rounded-full bg-water-100 text-water-700 dark:bg-water-700 dark:text-water-200 capitalize"
                  >
                    {lineTypeLabels[lt] || lt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdPlacement id="ad-below-hero" />

      {/* 2-column layout */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* When to Use */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                When to Use This Knot
              </h2>
              {knot.description.split('\n').map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed mb-3">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Step by Step */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                How to Tie a {knot.name} &mdash; Step by Step
              </h2>
              <div className="space-y-6">
                {knot.steps.map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className="text-3xl font-heading font-bold text-copper-500 shrink-0 w-10 text-right">
                      {s.step}
                    </span>
                    <p className="text-lg leading-relaxed pt-1">{s.instruction}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tips */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Tips for a Better Knot
              </h2>
              <ul className="space-y-3">
                {knot.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Lightbulb className="w-5 h-5 text-copper-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-base leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </section>

            <AdPlacement id="ad-mid-content" />

            {/* Best Line Types */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Best Line Types
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {knot.lineTypes.map((lt) => (
                  <div
                    key={lt}
                    className="bg-white dark:bg-water-800 rounded-lg shadow-sm p-5"
                  >
                    <h3 className="font-heading font-semibold text-lg capitalize mb-1">
                      {lineTypeLabels[lt] || lt}
                    </h3>
                    <p className="text-sm text-sand-600 dark:text-sand-300">
                      {lineTypeDescriptions[lt] || ''}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            {knot.faq.length > 0 && (
              <FAQSection questions={knot.faq} pageTitle={knot.name} />
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Related Knots */}
            <div>
              <h2 className="font-heading font-semibold text-xl mb-4">
                Related Knots
              </h2>
              <div className="space-y-3">
                {relatedKnots.map((rk) => (
                  <KnotCard key={rk.slug} knot={rk} />
                ))}
              </div>
            </div>

            <AffiliateRecommendation
              pageTags={['line', 'leader', ...knot.lineTypes]}
            />

            <AdPlacement id="ad-sidebar" />
          </aside>
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
