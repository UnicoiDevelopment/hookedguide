import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FileText, Ruler, Calendar, ShieldCheck } from "lucide-react";

import { allSpecies } from "@/data/species";
import { allStates } from "@/data/states";
import { speciesStateOverrides } from "@/data/species-state-overrides";
import HeroSection from "@/components/ui/HeroSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQSection from "@/components/ui/FAQSection";
import SeasonBadge from "@/components/ui/SeasonBadge";
import AdPlacement from "@/components/ads/AdPlacement";
import AffiliateRecommendation from "@/components/gear/AffiliateRecommendation";

interface PageProps {
  params: Promise<{ slug: string; state: string }>;
}

/* ---------- Static params ---------- */
export async function generateStaticParams() {
  const params: { slug: string; state: string }[] = [];
  for (const species of allSpecies) {
    for (const stateSlug of species.statesFound) {
      params.push({ slug: species.slug, state: stateSlug });
    }
  }
  return params;
}

/* ---------- Metadata ---------- */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, state: stateSlug } = await params;
  const species = allSpecies.find((s) => s.slug === slug);
  const state = allStates.find((s) => s.slug === stateSlug);
  if (!species || !state) return {};

  const regulation = state.regulations.find(
    (r) => r.species.toLowerCase() === species.name.toLowerCase()
  );

  const bagLimitSnippet = regulation
    ? ` Bag limit: ${regulation.bagLimit}.`
    : "";

  const title = `${species.name} Fishing in ${state.name} — Regulations, Tips & Where to Fish | HOOKED`;
  const description = `Guide to ${species.name.toLowerCase()} fishing in ${state.name}.${bagLimitSnippet} Best waters and season info.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://hookedguide.com/species/${slug}/${stateSlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://hookedguide.com/species/${slug}/${stateSlug}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

/* ---------- Helpers ---------- */
function truncateToFirstSentence(text: string): string {
  const match = text.match(/^[^.!?]+[.!?]/);
  return match ? match[0] : text.slice(0, 200);
}

/* ---------- Page ---------- */
export default async function SpeciesStatePage({ params }: PageProps) {
  const { slug, state: stateSlug } = await params;
  const species = allSpecies.find((s) => s.slug === slug);
  const state = allStates.find((s) => s.slug === stateSlug);
  if (!species || !state) notFound();

  /* Override data */
  const override = speciesStateOverrides.find(
    (o) => o.speciesSlug === slug && o.stateSlug === stateSlug
  );

  /* Regulations for this species in this state */
  const regulation = state.regulations.find(
    (r) => r.species.toLowerCase() === species.name.toLowerCase()
  );

  /* State record for this species */
  const stateRecord = state.stateRecord.find(
    (r) =>
      r.species.toLowerCase() === species.name.toLowerCase() ||
      r.species.toLowerCase().includes(species.name.toLowerCase())
  );

  /* Top waters that include this species */
  const relevantWaters = state.topWaters.filter(
    (w) =>
      w.species.some(
        (ws) =>
          ws.toLowerCase() === species.name.toLowerCase() ||
          ws.toLowerCase() === species.slug ||
          ws.toLowerCase().includes(species.name.toLowerCase())
      )
  );

  /* All species links for sidebar */
  const allStateSpeciesSlugs = [
    ...Array.from(new Set([...state.freshwaterSpecies, ...state.saltwaterSpecies])),
  ];

  /* Build FAQ answers */
  const bestWatersAnswer = override
    ? override.bestWaters.map((w) => w.name).join(", ")
    : relevantWaters.length > 0
      ? relevantWaters.map((w) => w.name).join(", ")
      : `Check local fishing reports for the best ${species.name.toLowerCase()} waters in ${state.name}.`;

  const bagLimitAnswer = regulation
    ? `The bag limit for ${species.name.toLowerCase()} in ${state.name} is ${regulation.bagLimit}.`
    : `Check current ${state.name} regulations for ${species.name.toLowerCase()} bag limits.`;

  const seasonAnswer = regulation
    ? regulation.season
    : "Year-round (check current regulations for specific restrictions).";

  const stateRecordAnswer = stateRecord
    ? `The state record ${species.name.toLowerCase()} in ${state.name} is ${stateRecord.weight}, caught at ${stateRecord.water} in ${stateRecord.year}.`
    : `State record information for ${species.name.toLowerCase()} in ${state.name} is not currently available.`;

  const faqQuestions = [
    {
      question: `Where is the best ${species.name.toLowerCase()} fishing in ${state.name}?`,
      answer: bestWatersAnswer,
    },
    {
      question: `Do I need a fishing license in ${state.name}?`,
      answer: `Yes, ${state.name} requires a fishing license. Visit ${state.licenseUrl} for details.`,
    },
    {
      question: `What is the bag limit for ${species.name.toLowerCase()} in ${state.name}?`,
      answer: bagLimitAnswer,
    },
    {
      question: `When is ${species.name.toLowerCase()} season in ${state.name}?`,
      answer: seasonAnswer,
    },
    {
      question: `What is the state record ${species.name.toLowerCase()} in ${state.name}?`,
      answer: stateRecordAnswer,
    },
  ];

  /* Seasonal data */
  const seasonalData = override
    ? override.seasonalNotes
    : species.seasonalPatterns;

  /* Techniques and baits */
  const techniques = override
    ? override.localTechniques
    : species.bestTechniques;
  const baits = override ? override.localBaits : species.bestBaits;

  /* JSON-LD: Article */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${species.name} Fishing in ${state.name}`,
    description: `Guide to ${species.name.toLowerCase()} fishing in ${state.name}. Best waters, regulations, and season info.`,
    author: {
      "@type": "Organization",
      name: "HOOKED",
      url: "https://hookedguide.com",
    },
    publisher: {
      "@type": "Organization",
      name: "HOOKED",
      url: "https://hookedguide.com",
    },
    mainEntityOfPage: `https://hookedguide.com/species/${slug}/${stateSlug}`,
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
      {
        "@type": "ListItem",
        position: 4,
        name: state.name,
        item: `https://hookedguide.com/species/${slug}/${stateSlug}`,
      },
    ],
  };

  /* JSON-LD: FAQPage */
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqQuestions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <HeroSection
        title={`${species.name} Fishing in ${state.name}`}
        overlay={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Species", href: "/species" },
            { label: species.name, href: `/species/${slug}` },
            { label: state.name },
          ]}
        />

        {/* Quick Info Bar */}
        <section className="mt-8" aria-label="Quick info">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px] rounded-lg border border-sand-200 dark:border-water-700 bg-white dark:bg-water-900 p-4">
              <div className="flex items-center gap-2 mb-1">
                <ShieldCheck className="w-5 h-5 text-water-600 dark:text-water-400" />
                <span className="text-sm font-medium text-muted-foreground">
                  License Required
                </span>
              </div>
              <p className="font-semibold">
                <a
                  href={state.licenseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-water-600 dark:text-water-400 hover:underline"
                >
                  Yes — Get License
                </a>
              </p>
            </div>

            <div className="flex-1 min-w-[200px] rounded-lg border border-sand-200 dark:border-water-700 bg-white dark:bg-water-900 p-4">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-5 h-5 text-water-600 dark:text-water-400" />
                <span className="text-sm font-medium text-muted-foreground">
                  Bag Limit
                </span>
              </div>
              <p className="font-semibold">
                {regulation ? regulation.bagLimit : "Check regulations"}
              </p>
            </div>

            <div className="flex-1 min-w-[200px] rounded-lg border border-sand-200 dark:border-water-700 bg-white dark:bg-water-900 p-4">
              <div className="flex items-center gap-2 mb-1">
                <Ruler className="w-5 h-5 text-water-600 dark:text-water-400" />
                <span className="text-sm font-medium text-muted-foreground">
                  Size Limit
                </span>
              </div>
              <p className="font-semibold">
                {regulation ? regulation.sizeLimit : "Check regulations"}
              </p>
            </div>

            <div className="flex-1 min-w-[200px] rounded-lg border border-sand-200 dark:border-water-700 bg-white dark:bg-water-900 p-4">
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="w-5 h-5 text-water-600 dark:text-water-400" />
                <span className="text-sm font-medium text-muted-foreground">
                  Season
                </span>
              </div>
              <p className="font-semibold">
                {regulation ? regulation.season : "Year-round"}
              </p>
            </div>
          </div>
        </section>

        {/* Ad below hero */}
        <AdPlacement id="ad-below-hero" className="mt-8" />

        {/* Main Content: 2-column layout */}
        <div className="mt-12 flex flex-col lg:flex-row gap-12">
          {/* Content Column */}
          <div className="lg:w-2/3 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Overview
              </h2>
              {override ? (
                <div className="space-y-4">
                  {override.localTips.map((tip, i) => (
                    <p key={i} className="text-base leading-relaxed">
                      {tip}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-base leading-relaxed">
                  The {species.name} is a popular {species.type} game fish
                  found throughout {state.name}.{" "}
                  {truncateToFirstSentence(species.description)}
                </p>
              )}
            </section>

            {/* Best Waters */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Best Waters in {state.name}
              </h2>
              {override ? (
                <ul className="space-y-4">
                  {override.bestWaters.map((water) => (
                    <li key={water.name}>
                      <span className="font-bold">{water.name}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        — {water.description}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : relevantWaters.length > 0 ? (
                <ul className="space-y-4">
                  {relevantWaters.map((water) => (
                    <li key={water.name}>
                      <span className="font-bold">{water.name}</span>
                      <span className="text-muted-foreground">
                        {" "}
                        — {water.type}. Species: {water.species.join(", ")}.
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-base text-muted-foreground">
                  Specific water recommendations for {species.name.toLowerCase()}{" "}
                  in {state.name} are being compiled. Check local fishing reports
                  for current hotspots.
                </p>
              )}
            </section>

            {/* Local Techniques & Baits */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Local Techniques &amp; Baits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Techniques
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {techniques.map((t) => (
                      <li key={t} className="text-base">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Baits &amp; Lures
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    {baits.map((b) => (
                      <li key={b} className="text-base">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Seasonal Guide */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                Seasonal Guide for {state.name}
              </h2>
              <div className="space-y-6">
                {(["spring", "summer", "fall", "winter"] as const).map(
                  (season) => (
                    <div key={season}>
                      <h3 className="font-heading text-xl font-semibold mb-2 flex items-center gap-2">
                        <SeasonBadge season={season} />
                        {season.charAt(0).toUpperCase() + season.slice(1)}{" "}
                        Fishing
                      </h3>
                      <p className="text-base leading-relaxed">
                        {seasonalData[season]}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* Regulations */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Regulations
              </h2>

              {/* Warning box */}
              <div className="rounded-lg border border-amber-300 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-700 p-4 mb-6">
                <p className="text-amber-800 dark:text-amber-300 font-medium">
                  Regulations change frequently. Always verify current
                  regulations with{" "}
                  <a
                    href={state.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    {state.name} Fish &amp; Wildlife
                  </a>
                  . Information shown was last updated {state.lastUpdated}.
                </p>
              </div>

              {regulation ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-sand-200 dark:border-water-700">
                        <td className="py-3 pr-4 font-semibold w-1/3">
                          Bag Limit
                        </td>
                        <td className="py-3">{regulation.bagLimit}</td>
                      </tr>
                      <tr className="border-b border-sand-200 dark:border-water-700">
                        <td className="py-3 pr-4 font-semibold">Size Limit</td>
                        <td className="py-3">{regulation.sizeLimit}</td>
                      </tr>
                      <tr className="border-b border-sand-200 dark:border-water-700">
                        <td className="py-3 pr-4 font-semibold">Season</td>
                        <td className="py-3">{regulation.season}</td>
                      </tr>
                      {regulation.notes && (
                        <tr className="border-b border-sand-200 dark:border-water-700">
                          <td className="py-3 pr-4 font-semibold">Notes</td>
                          <td className="py-3">{regulation.notes}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Specific regulations for {species.name.toLowerCase()} in{" "}
                  {state.name} are not listed in our database. Please check the{" "}
                  <a
                    href={state.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-water-600 dark:text-water-400 hover:underline"
                  >
                    official {state.name} regulations
                  </a>{" "}
                  for current rules.
                </p>
              )}
            </section>

            {/* Mid-content ad */}
            <AdPlacement id="ad-mid-content" />

            {/* FAQ */}
            <FAQSection
              questions={faqQuestions}
              pageTitle={`${species.name} Fishing in ${state.name} FAQ`}
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Other species in this state */}
            <div>
              <h3 className="font-heading text-lg font-semibold mb-4">
                Other Species in {state.name}
              </h3>
              <ul className="space-y-2">
                {allStateSpeciesSlugs
                  .filter((speciesSlug) => speciesSlug !== slug)
                  .slice(0, 20)
                  .map((speciesSlug) => {
                    const sp = allSpecies.find((s) => s.slug === speciesSlug);
                    const label = sp
                      ? sp.name
                      : speciesSlug
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (c: string) => c.toUpperCase());
                    return (
                      <li key={speciesSlug}>
                        <Link
                          href={`/species/${speciesSlug}/${stateSlug}`}
                          className="text-water-600 dark:text-water-400 hover:underline text-sm"
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>

            <AffiliateRecommendation
              pageTags={[species.slug, species.type, stateSlug]}
            />

            <AdPlacement id="ad-sidebar" />
          </aside>
        </div>
      </div>
    </>
  );
}
