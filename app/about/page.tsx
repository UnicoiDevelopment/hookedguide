import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About HOOKED',
  description:
    'HOOKED was built for anglers who want to spend less time guessing and more time catching. Learn how our fishing guide, rig builder, and gear reviews work.',
  alternates: { canonical: 'https://hookedguide.com/about' },
  openGraph: {
    title: 'About HOOKED',
    description: 'HOOKED was built for anglers who want to spend less time guessing and more time catching.',
    url: 'https://hookedguide.com/about',
  },
  twitter: {
    title: 'About HOOKED',
    description: 'HOOKED was built for anglers who want to spend less time guessing and more time catching.',
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
        About HOOKED
      </h1>

      <p className="text-water-700 dark:text-sand-200 leading-relaxed text-lg mb-10">
        HOOKED was built for anglers who want to spend less time guessing
        and more time catching.
      </p>

      {/* The Guide */}
      <section className="mb-10">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mb-4">
          The Guide
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed mb-4">
          The Guide analyzes your target species, location, water conditions,
          weather, moon phase, and time of day to recommend the right technique,
          lure, line, and gear for your situation.
        </p>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          It&apos;s not a chatbot. It&apos;s a rules engine built from expert
          angler knowledge covering 30 species, 50 states, and thousands of
          condition combinations.
        </p>
      </section>

      {/* Rig Builder */}
      <section className="mb-10">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mb-4">
          Rig Builder
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          Build your complete setup piece by piece. Every component matched to
          your target species with links to buy.
        </p>
      </section>

      {/* Gear Reviews */}
      <section className="mb-10">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mb-4">
          Gear Reviews
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          Our gear reviews are honest. If something sucks, we&apos;ll tell you.
          We test and research products so you don&apos;t have to waste money on
          gear that doesn&apos;t perform.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mb-4">
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
