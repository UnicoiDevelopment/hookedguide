import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, ExternalLink, Waves } from 'lucide-react';

import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import AdPlacement from '@/components/ads/AdPlacement';
import { allStates } from '@/data/states';

function toSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export function generateStaticParams() {
  return allStates.map((s) => ({ state: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { state: string };
}): Metadata {
  const state = allStates.find((s) => s.slug === params.state);
  if (!state) return {};

  const title = `Fishing Regulations in ${state.name} (2026) — License, Limits & Seasons | HOOKED`;
  const description = `Complete fishing regulations for ${state.name} including license info, bag limits, size limits, seasons, and top fishing waters.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://hookedguide.com/regulations/${params.state}`,
    },
    openGraph: {
      title,
      description,
      url: `https://hookedguide.com/regulations/${params.state}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function StateRegulationPage({
  params,
}: {
  params: { state: string };
}) {
  const state = allStates.find((s) => s.slug === params.state);
  if (!state) {
    notFound();
  }

  const totalSpecies =
    state.freshwaterSpecies.length + state.saltwaterSpecies.length;

  const faqs = [
    {
      question: `Do I need a fishing license in ${state.name}?`,
      answer: `Yes, ${state.name} requires a valid fishing license for most anglers. Visit ${state.licenseUrl} for license types, pricing, and exemptions.`,
    },
    {
      question: `What fish can I catch in ${state.name}?`,
      answer: `${state.name} offers ${state.freshwaterSpecies.length} freshwater species and ${state.saltwaterSpecies.length} saltwater species for a total of ${totalSpecies} popular game fish. Check the species regulations table above for specific details.`,
    },
    {
      question: `When does fishing season start in ${state.name}?`,
      answer: `Season dates vary by species in ${state.name}. Check the regulations table above or visit the state agency at ${state.licenseUrl} for current season dates.`,
    },
    {
      question: `What is the bag limit in ${state.name}?`,
      answer: `Bag limits vary by species in ${state.name}. See the regulations table above for specific limits on each species.`,
    },
  ];

  return (
    <main>
      <HeroSection
        title={`Fishing Regulations in ${state.name}`}
        subtitle={`Last updated: ${state.lastUpdated}`}
        overlay={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Regulations', href: '/regulations' },
            { label: state.name },
          ]}
        />

        {/* Disclaimer */}
        <div className="bg-amber-50 border-2 border-amber-400 dark:bg-amber-900/20 dark:border-amber-600 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-900 dark:text-amber-200 font-medium">
                Regulations shown are approximate and may be outdated. Always
                check the official {state.name} fish and game agency for current
                regulations.
              </p>
              <a
                href={state.licenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-2 text-amber-700 dark:text-amber-300 font-medium hover:underline"
              >
                Visit Official Agency <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Fishing License */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Fishing License
          </h2>
          <div className="bg-white dark:bg-water-800 rounded-lg p-6 shadow-sm">
            <p className="text-water-700 dark:text-water-200 leading-relaxed mb-4">
              {state.licenseInfo}
            </p>
            <a
              href={state.licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-copper-500 font-medium hover:underline"
            >
              Get Your License <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        <AdPlacement id="ad-below-hero" />

        {/* Species Regulations */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Species Regulations
          </h2>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-water-200 dark:border-water-700">
                  <th className="py-3 px-4 font-heading font-semibold text-water-900 dark:text-white">
                    Species
                  </th>
                  <th className="py-3 px-4 font-heading font-semibold text-water-900 dark:text-white">
                    Bag Limit
                  </th>
                  <th className="py-3 px-4 font-heading font-semibold text-water-900 dark:text-white">
                    Size Limit
                  </th>
                  <th className="py-3 px-4 font-heading font-semibold text-water-900 dark:text-white">
                    Season
                  </th>
                  <th className="py-3 px-4 font-heading font-semibold text-water-900 dark:text-white">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {state.regulations.map((reg, i) => (
                  <tr
                    key={i}
                    className="border-b border-water-100 dark:border-water-700 hover:bg-water-50 dark:hover:bg-water-800/50"
                  >
                    <td className="py-3 px-4">
                      <Link
                        href={`/species/${toSlug(reg.species)}/${state.slug}`}
                        className="text-copper-500 hover:underline font-medium"
                      >
                        {reg.species}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-water-700 dark:text-water-300">
                      {reg.bagLimit}
                    </td>
                    <td className="py-3 px-4 text-water-700 dark:text-water-300">
                      {reg.sizeLimit}
                    </td>
                    <td className="py-3 px-4 text-water-700 dark:text-water-300">
                      {reg.season}
                    </td>
                    <td className="py-3 px-4 text-water-600 dark:text-water-400 text-sm">
                      {reg.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {state.regulations.map((reg, i) => (
              <div
                key={i}
                className="bg-white dark:bg-water-800 rounded-lg p-4 shadow-sm"
              >
                <Link
                  href={`/species/${toSlug(reg.species)}/${state.slug}`}
                  className="text-copper-500 hover:underline font-heading font-semibold text-lg"
                >
                  {reg.species}
                </Link>
                <div className="mt-2 space-y-1 text-sm">
                  <p className="text-water-700 dark:text-water-300">
                    <span className="font-medium">Bag Limit:</span>{' '}
                    {reg.bagLimit}
                  </p>
                  <p className="text-water-700 dark:text-water-300">
                    <span className="font-medium">Size Limit:</span>{' '}
                    {reg.sizeLimit}
                  </p>
                  <p className="text-water-700 dark:text-water-300">
                    <span className="font-medium">Season:</span> {reg.season}
                  </p>
                  {reg.notes && (
                    <p className="text-water-600 dark:text-water-400">
                      <span className="font-medium">Notes:</span> {reg.notes}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <AdPlacement id="ad-mid-content" />

        {/* Top Fishing Waters */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Top Fishing Waters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {state.topWaters.map((water, i) => (
              <div
                key={i}
                className="bg-white dark:bg-water-800 rounded-lg p-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Waves className="w-5 h-5 text-water-500 shrink-0" />
                  <h3 className="font-heading font-bold text-water-900 dark:text-white">
                    {water.name}
                  </h3>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-water-100 text-water-700 dark:bg-water-700 dark:text-water-200">
                    {water.type}
                  </span>
                </div>
                <p className="text-sm text-water-600 dark:text-water-300">
                  <span className="font-medium">Species: </span>
                  {water.species.map((sp, j) => (
                    <span key={j}>
                      {j > 0 && ', '}
                      <Link
                        href={`/species/${toSlug(sp)}`}
                        className="text-copper-500 hover:underline"
                      >
                        {sp}
                      </Link>
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* State Records */}
        {state.stateRecord.length > 0 && (
          <section>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              State Records
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-water-200 dark:border-water-700">
                    <th className="py-3 px-4 font-heading font-semibold text-water-900 dark:text-white">
                      Species
                    </th>
                    <th className="py-3 px-4 font-heading font-semibold text-water-900 dark:text-white">
                      Weight
                    </th>
                    <th className="py-3 px-4 font-heading font-semibold text-water-900 dark:text-white">
                      Year
                    </th>
                    <th className="py-3 px-4 font-heading font-semibold text-water-900 dark:text-white">
                      Water
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {state.stateRecord.map((rec, i) => (
                    <tr
                      key={i}
                      className="border-b border-water-100 dark:border-water-700 hover:bg-water-50 dark:hover:bg-water-800/50"
                    >
                      <td className="py-3 px-4 font-medium text-water-900 dark:text-white">
                        {rec.species}
                      </td>
                      <td className="py-3 px-4 text-water-700 dark:text-water-300">
                        {rec.weight}
                      </td>
                      <td className="py-3 px-4 text-water-700 dark:text-water-300">
                        {rec.year}
                      </td>
                      <td className="py-3 px-4 text-water-700 dark:text-water-300">
                        {rec.water}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* FAQ */}
        <FAQSection
          questions={faqs}
          pageTitle={`Fishing Regulations in ${state.name} FAQ`}
        />
      </div>
    </main>
  );
}
