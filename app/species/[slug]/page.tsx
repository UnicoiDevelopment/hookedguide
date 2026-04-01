import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Trophy,
  Ruler,
  Thermometer,
  Clock,
  Zap,
  UtensilsCrossed,
} from "lucide-react";

import { allSpecies } from "@/data/species";
import { allStates } from "@/data/states";
import HeroSection from "@/components/ui/HeroSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import StatCard from "@/components/ui/StatCard";
import FAQSection from "@/components/ui/FAQSection";
import SeasonBadge from "@/components/ui/SeasonBadge";
import RelatedContent from "@/components/ui/RelatedContent";
import AdPlacement from "@/components/ads/AdPlacement";
import AffiliateRecommendation from "@/components/gear/AffiliateRecommendation";
import { technicalDetails } from "@/data/recommendations/technical-details";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* ---------- Static params ---------- */
export async function generateStaticParams() {
  return allSpecies.map((s) => ({ slug: s.slug }));
}

/* ---------- Metadata ---------- */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const species = allSpecies.find((s) => s.slug === slug);
  if (!species) return {};

  const stateCount = species.statesFound.length;
  const title = `${species.name} Fishing Guide — Tips, Techniques & Best Gear (2026) | HookedGuide`;
  const description = `Complete guide to ${species.name.toLowerCase()} fishing. Learn the best techniques, lures, seasonal patterns, and gear. ${species.name} found in ${stateCount} states.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://hookedguide.com/species/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://hookedguide.com/species/${slug}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

/* ---------- Helpers ---------- */
function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function stateSlugToName(slug: string) {
  const state = allStates.find((s) => s.slug === slug);
  return state ? state.name : slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ---------- Page ---------- */
export default async function SpeciesPage({ params }: PageProps) {
  const { slug } = await params;
  const species = allSpecies.find((s) => s.slug === slug);
  if (!species) notFound();

  /* Find state records that mention this species */
  const stateRecords = allStates
    .filter((st) => species.statesFound.includes(st.slug))
    .flatMap((st) =>
      st.stateRecord
        .filter(
          (r) =>
            r.species.toLowerCase() === species.name.toLowerCase() ||
            r.species.toLowerCase().includes(species.name.toLowerCase())
        )
        .map((r) => ({ stateName: st.name, stateSlug: st.slug, ...r }))
    );

  /* Related species items */
  const relatedItems = species.relatedSpecies.map((rs) => {
    const found = allSpecies.find((s) => s.slug === rs);
    return {
      title: found ? found.name : rs.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      href: `/species/${rs}`,
    };
  });

  /* JSON-LD: Article */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${species.name} Fishing Guide`,
    description: species.description,
    image: species.imagePath || undefined,
    author: {
      "@type": "Organization",
      name: "HookedGuide",
      url: "https://hookedguide.com",
    },
    publisher: {
      "@type": "Organization",
      name: "HookedGuide",
      url: "https://hookedguide.com",
    },
    mainEntityOfPage: `https://hookedguide.com/species/${slug}`,
  };

  /* JSON-LD: BreadcrumbList */
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hookedguide.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Species",
        item: "https://hookedguide.com/species",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: species.name,
        item: `https://hookedguide.com/species/${slug}`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero — use action photo if available, fall back to ID photo */}
      <HeroSection
        title={species.name}
        subtitle={species.scientificName}
        overlay={true}
        {...(species.imagePath
          ? { backgroundImage: species.imagePath.replace('-id.jpg', '-action.jpg') }
          : {})}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Species", href: "/species" },
            { label: species.name },
          ]}
        />

        {/* Quick Stats Bar */}
        <section className="mt-8" aria-label="Quick stats">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <StatCard
              icon={<Trophy className="w-6 h-6" />}
              label="Record Weight"
              value={`${species.recordWeight.lbs} lbs ${species.recordWeight.oz} oz`}
              subtext={species.recordWeight.location}
            />
            <StatCard
              icon={<Ruler className="w-6 h-6" />}
              label="Average Size"
              value={`${species.averageWeight.min}-${species.averageWeight.max} ${species.averageWeight.unit}`}
            />
            <StatCard
              icon={<Thermometer className="w-6 h-6" />}
              label="Preferred Temp"
              value={`${species.preferredTemp.min}°-${species.preferredTemp.max}°F`}
            />
            <StatCard
              icon={<Clock className="w-6 h-6" />}
              label="Lifespan"
              value={`${species.lifespan.min}-${species.lifespan.max} ${species.lifespan.unit}`}
            />
            <StatCard
              icon={<Zap className="w-6 h-6" />}
              label="Fight Rating"
              value={`${species.fightRating}/5`}
            />
            <StatCard
              icon={<UtensilsCrossed className="w-6 h-6" />}
              label="Taste Rating"
              value={`${species.tasteRating}/5`}
            />
          </div>
        </section>

        {/* Ad below hero */}
        <AdPlacement id="ad-below-hero" className="mt-8" />

        {/* Main Content: 2-column layout */}
        <div className="mt-12 flex flex-col lg:flex-row gap-12">
          {/* Content Column */}
          <div className="lg:w-2/3 space-y-12">
            {/* Identification */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Identification
              </h2>
              <p className="text-base leading-relaxed">{species.identification}</p>
            </section>

            {/* Habitat & Behavior */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Habitat &amp; Behavior
              </h2>
              <p className="text-base leading-relaxed mb-4">{species.habitat}</p>
              <p className="text-base leading-relaxed">{species.behavior}</p>
            </section>

            {/* Best Techniques */}
            <section id="techniques" className="mt-10">
              <h2 className="font-heading text-2xl font-bold text-water-800 dark:text-sand-100 mb-4">
                Best Techniques
              </h2>
              <div className="space-y-4">
                {species.bestTechniques.slice(0, 5).map((technique, i) => {
                  const slug = technique.toLowerCase().replace(/\s+/g, '-');
                  const techKey = `${slug}:${species.slug}`;
                  const techDetail = technicalDetails[techKey] || technicalDetails[slug];
                  return (
                    <div key={i} className="border border-sand-200 dark:border-water-700 rounded-lg overflow-hidden">
                      <div className="p-4 flex items-center justify-between">
                        <div>
                          <Link href={`/techniques/${slug}`} className="font-heading font-semibold text-lg text-water-800 dark:text-sand-100 hover:text-copper-500">
                            {i + 1}. {technique}
                          </Link>
                        </div>
                        <div className="flex items-center gap-3">
                          <Link href={`/rig-builder?species=${species.slug}`} className="text-xs text-copper-500 hover:text-copper-600 font-medium">
                            Build this rig →
                          </Link>
                        </div>
                      </div>
                      {techDetail && (
                        <details className="group border-t border-sand-200 dark:border-water-700">
                          <summary className="px-4 py-3 cursor-pointer text-sm font-medium text-copper-500 hover:text-copper-600 flex items-center gap-1">
                            Show setup details
                          </summary>
                          <div className="px-4 pb-4 text-sm space-y-2 text-water-700 dark:text-sand-200">
                            <div className="grid grid-cols-2 gap-2">
                              <div><span className="font-semibold">Hook:</span> {techDetail.rigging.hookType}</div>
                              <div><span className="font-semibold">Weight:</span> {techDetail.rigging.weightType} {techDetail.rigging.weightSize}</div>
                              <div><span className="font-semibold">Line:</span> {techDetail.lineSetup.mainLine.type} {techDetail.lineSetup.mainLine.weight}</div>
                              <div><span className="font-semibold">Rod:</span> {techDetail.rodReelSetup.rodLength} {techDetail.rodReelSetup.rodPower} {techDetail.rodReelSetup.rodAction}</div>
                              <div><span className="font-semibold">Reel:</span> {techDetail.rodReelSetup.reelType} {techDetail.rodReelSetup.reelGearRatio}</div>
                              <div><span className="font-semibold">Color:</span> {techDetail.colorStrategy.primaryColor}</div>
                              <div><span className="font-semibold">Bait size:</span> {techDetail.sizeStrategy.recommendedSize}</div>
                            </div>
                            <p className="text-xs italic text-water-500 dark:text-sand-300 mt-2">{techDetail.presentation.commonMistake}</p>
                            <div className="flex gap-3 mt-2">
                              <Link href={`/techniques/${slug}`} className="text-xs text-copper-500 hover:underline">Full technique guide →</Link>
                              <Link href={`/rig-builder?species=${species.slug}`} className="text-xs text-copper-500 hover:underline">Build this rig →</Link>
                            </div>
                          </div>
                        </details>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Mid-content ad */}
            <AdPlacement id="ad-mid-content" />

            {/* Best Baits & Lures */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Best Baits &amp; Lures
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {species.bestBaits.map((bait) => (
                  <li key={bait} className="text-base">
                    {bait}
                  </li>
                ))}
              </ul>
              <AffiliateRecommendation
                pageTags={[
                  species.slug,
                  species.type,
                  ...species.bestBaits.map((b) => toSlug(b)),
                ]}
              />
            </section>

            {/* Seasonal Patterns */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                Seasonal Patterns
              </h2>
              <div className="space-y-6">
                {(["spring", "summer", "fall", "winter"] as const).map(
                  (season) => (
                    <div key={season}>
                      <h3 className="font-heading text-xl font-semibold mb-2 flex items-center gap-2">
                        <SeasonBadge season={season} />
                        {season.charAt(0).toUpperCase() + season.slice(1)} Fishing
                      </h3>
                      <p className="text-base leading-relaxed">
                        {species.seasonalPatterns[season]}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* State Records */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                State Records
              </h2>
              {stateRecords.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-sand-200 dark:border-water-700">
                        <th className="py-3 pr-4 font-heading font-semibold text-sm">
                          State
                        </th>
                        <th className="py-3 pr-4 font-heading font-semibold text-sm">
                          Weight
                        </th>
                        <th className="py-3 pr-4 font-heading font-semibold text-sm">
                          Year
                        </th>
                        <th className="py-3 font-heading font-semibold text-sm">
                          Water
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {stateRecords.map((record, i) => (
                        <tr
                          key={`${record.stateSlug}-${i}`}
                          className="border-b border-sand-100 dark:border-water-800"
                        >
                          <td className="py-3 pr-4">
                            <Link
                              href={`/species/${slug}/${record.stateSlug}`}
                              className="text-water-600 dark:text-water-400 hover:underline"
                            >
                              {record.stateName}
                            </Link>
                          </td>
                          <td className="py-3 pr-4">{record.weight}</td>
                          <td className="py-3 pr-4">{record.year}</td>
                          <td className="py-3">{record.water}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-muted-foreground">
                  State record data is being compiled. Check back soon.
                </p>
              )}
            </section>

            {/* Tips & Fun Facts */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Tips &amp; Fun Facts
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {species.funFacts.map((fact, i) => (
                  <li key={i} className="text-base leading-relaxed">
                    {fact}
                  </li>
                ))}
              </ul>
            </section>

            {/* Ad above FAQ */}
            <AdPlacement id="ad-above-faq" />

            {/* FAQ */}
            <FAQSection
              questions={species.faq}
              pageTitle={`${species.name} Fishing FAQ`}
            />
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block lg:w-1/3 space-y-8">
            <RelatedContent
              title="Related Species"
              items={relatedItems}
            />
            <AffiliateRecommendation
              pageTags={[species.slug, species.type, species.family]}
            />
            <AdPlacement id="ad-sidebar" />
          </aside>
        </div>

        {/* Fish in Your State - full width */}
        <section className="mt-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Fish in Your State
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {species.statesFound.map((stateSlug) => (
              <Link
                key={stateSlug}
                href={`/species/${slug}/${stateSlug}`}
                className="block rounded-lg border border-sand-200 dark:border-water-700 px-3 py-2 text-center text-sm font-medium hover:bg-sand-50 dark:hover:bg-water-800 transition-colors"
              >
                {stateSlugToName(stateSlug)}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
