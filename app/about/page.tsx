import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About HookedGuide — Our Mission',
  description:
    'Learn about HookedGuide, your AI-powered fishing guide. Our mission is to make fishing more accessible with data-driven recommendations.',
  alternates: { canonical: 'https://hookedguide.com/about' },
  openGraph: {
    title: 'About HookedGuide',
    description: 'Learn about HookedGuide, your AI-powered fishing guide.',
    url: 'https://hookedguide.com/about',
  },
  twitter: {
    title: 'About HookedGuide',
    description: 'Learn about HookedGuide, your AI-powered fishing guide.',
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
      />

      <h1 className="font-heading text-3xl font-bold text-water-900 dark:text-sand-50 mt-4 mb-6">
        About HookedGuide
      </h1>

      {/* Our Mission */}
      <section className="mb-10">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Our Mission
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed mb-4">
          HookedGuide exists to make fishing more accessible and enjoyable for
          everyone. Whether you&apos;re a first-time angler or a seasoned
          tournament competitor, we provide data-driven fishing intelligence to
          help you catch more fish.
        </p>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed mb-4">
          We believe that great fishing shouldn&apos;t depend on years of
          trial-and-error or expensive guide services. By combining expert angler
          knowledge with structured data about species behavior, seasonal
          patterns, and regional conditions, we put actionable fishing advice in
          the hands of every angler — completely free.
        </p>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          Our long-term vision is to become the most comprehensive and trusted
          fishing resource on the web. From species identification and technique
          selection to gear recommendations and state regulation lookups,
          HookedGuide is building the all-in-one platform that anglers deserve.
        </p>
      </section>

      {/* How Our Recommendation Engine Works */}
      <section className="mb-10">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          How Our Recommendation Engine Works
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          Our recommendation engine analyzes your target species, location, water
          conditions, season, and time of day. It draws from expert angler
          knowledge covering 30 species, 50 states, 20 techniques, and thousands
          of species-location combinations to deliver personalized
          recommendations. Rather than relying on generic advice, our engine
          tailors suggestions to your specific fishing scenario so you can spend
          less time guessing and more time catching.
        </p>
      </section>

      {/* What We Cover */}
      <section className="mb-10">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          What We Cover
        </h2>
        <ul className="list-disc list-inside space-y-2 text-water-700 dark:text-sand-200 leading-relaxed">
          <li>30 species guides with detailed behavior and habitat information</li>
          <li>20 technique tutorials from beginner to advanced</li>
          <li>15 knot-tying guides with step-by-step instructions</li>
          <li>50 state regulation guides with licensing and season details</li>
          <li>Gear reviews and recommendations for every budget</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Contact
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          Have questions or feedback? Reach us at{' '}
          <a
            href="mailto:contact@hookedguide.com"
            className="text-water-500 dark:text-water-300 underline hover:text-water-600 dark:hover:text-water-200"
          >
            contact@hookedguide.com
          </a>
        </p>
      </section>
    </main>
  );
}
