import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, XCircle, Lightbulb } from "lucide-react";

import { allTechniques } from "@/data/techniques";
import { allSpecies } from "@/data/species";
import HeroSection from "@/components/ui/HeroSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import DifficultyStars from "@/components/ui/DifficultyStars";
import SeasonBadge from "@/components/ui/SeasonBadge";
import FAQSection from "@/components/ui/FAQSection";
import SpeciesCard from "@/components/species/SpeciesCard";
import AdPlacement from "@/components/ads/AdPlacement";
import AffiliateRecommendation from "@/components/gear/AffiliateRecommendation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const difficultyLabels: Record<number, string> = {
  1: "Beginner",
  2: "Easy",
  3: "Moderate",
  4: "Advanced",
  5: "Expert",
};

const waterTypeLabels: Record<string, string> = {
  lake: "Lake",
  river: "River",
  pond: "Pond",
  reservoir: "Reservoir",
  saltwater: "Saltwater",
};

/* ---------- Static params ---------- */
export async function generateStaticParams() {
  return allTechniques.map((t) => ({ slug: t.slug }));
}

/* ---------- Metadata ---------- */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const technique = allTechniques.find((t) => t.slug === slug);
  if (!technique) return {};

  const speciesNames = technique.bestFor
    .map((s) => {
      const found = allSpecies.find((sp) => sp.slug === s);
      return found ? found.name : s.replace(/-/g, " ");
    })
    .join(", ");

  const title = `How to Fish a ${technique.name} — Step-by-Step Guide (2026) | HookedGuide`;
  const description = `${technique.description.slice(0, 120)}... Best for ${speciesNames}. Difficulty: ${difficultyLabels[technique.difficulty]}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://hookedguide.com/techniques/${slug}`,
    },
  };
}

/* ---------- Helpers ---------- */
function speciesSlugToName(slug: string): string {
  const found = allSpecies.find((s) => s.slug === slug);
  return found
    ? found.name
    : slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/* ---------- Page ---------- */
export default async function TechniquePage({ params }: PageProps) {
  const { slug } = await params;
  const technique = allTechniques.find((t) => t.slug === slug);
  if (!technique) notFound();

  /* Gather matching species for the cards section */
  const matchingSpecies = allSpecies.filter((s) =>
    technique.bestFor.includes(s.slug)
  );

  /* Collect all gear tags for affiliate recommendations */
  const allGearTags = Array.from(
    new Set(technique.requiredGear.flatMap((g) => g.tags))
  );

  /* Sidebar tags */
  const pageTags = [
    technique.slug,
    ...technique.waterTypes,
    ...technique.bestFor,
    ...allGearTags,
  ];

  /* JSON-LD: Article */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `How to Fish a ${technique.name}`,
    description: technique.description,
    image: technique.imagePath || undefined,
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
    mainEntityOfPage: `https://hookedguide.com/techniques/${slug}`,
  };

  /* JSON-LD: HowTo */
  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Fish a ${technique.name}`,
    description: technique.description,
    step: technique.steps.map((s) => ({
      "@type": "HowToStep",
      position: s.step,
      name: s.title,
      text: s.description,
    })),
    tool: technique.requiredGear.map((g) => ({
      "@type": "HowToTool",
      name: g.item,
    })),
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
        name: "Techniques",
        item: "https://hookedguide.com/techniques",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: technique.name,
        item: `https://hookedguide.com/techniques/${slug}`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <HeroSection
        title={technique.name}
        subtitle={`${difficultyLabels[technique.difficulty]} Difficulty — ${technique.seasons
          .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
          .join(", ")}`}
        backgroundGradient="from-forest-700 via-forest-500 to-water-700"
        overlay={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Techniques", href: "/techniques" },
            { label: technique.name },
          ]}
        />

        {/* Quick Info Bar */}
        <section className="mt-8" aria-label="Quick info">
          <div className="flex flex-wrap gap-4">
            {/* Difficulty */}
            <div className="bg-white dark:bg-water-800 rounded-lg shadow-sm p-4 flex-1 min-w-[180px]">
              <p className="text-xs font-medium text-water-500 dark:text-water-400 mb-1">
                Difficulty
              </p>
              <DifficultyStars rating={technique.difficulty} />
              <p className="text-sm mt-1 font-medium">
                {difficultyLabels[technique.difficulty]}
              </p>
            </div>

            {/* Best For */}
            <div className="bg-white dark:bg-water-800 rounded-lg shadow-sm p-4 flex-1 min-w-[180px]">
              <p className="text-xs font-medium text-water-500 dark:text-water-400 mb-1">
                Best For
              </p>
              <div className="flex flex-wrap gap-1">
                {technique.bestFor.map((speciesSlug) => (
                  <Link
                    key={speciesSlug}
                    href={`/species/${speciesSlug}`}
                    className="inline-block text-xs px-2 py-0.5 rounded-full bg-water-100 text-water-700 dark:bg-water-700 dark:text-water-200 hover:underline"
                  >
                    {speciesSlugToName(speciesSlug)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Water Types */}
            <div className="bg-white dark:bg-water-800 rounded-lg shadow-sm p-4 flex-1 min-w-[180px]">
              <p className="text-xs font-medium text-water-500 dark:text-water-400 mb-1">
                Water Types
              </p>
              <div className="flex flex-wrap gap-1">
                {technique.waterTypes.map((wt) => (
                  <span
                    key={wt}
                    className="inline-block text-xs px-2 py-0.5 rounded-full bg-forest-100 text-forest-700"
                  >
                    {waterTypeLabels[wt] ?? wt}
                  </span>
                ))}
              </div>
            </div>

            {/* Seasons */}
            <div className="bg-white dark:bg-water-800 rounded-lg shadow-sm p-4 flex-1 min-w-[180px]">
              <p className="text-xs font-medium text-water-500 dark:text-water-400 mb-1">
                Seasons
              </p>
              <div className="flex flex-wrap gap-1">
                {technique.seasons.map((season) => (
                  <SeasonBadge key={season} season={season} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ad below hero */}
        <AdPlacement id="ad-below-hero" className="mt-8" />

        {/* Main Content: 2-column layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* What Is [Technique]? */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                What Is the {technique.name}?
              </h2>
              <p className="text-base leading-relaxed">
                {technique.description}
              </p>
            </section>

            {/* Step-by-Step Guide */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                Step-by-Step Guide
              </h2>
              <div className="space-y-4">
                {technique.steps.map((step) => (
                  <div
                    key={step.step}
                    className="bg-white dark:bg-water-800 rounded-lg shadow-sm p-4 flex gap-4"
                  >
                    <div className="bg-copper-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">
                        {step.title}
                      </h3>
                      <p className="text-base leading-relaxed mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Required Gear */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Required Gear
              </h2>
              <ul className="space-y-3">
                {technique.requiredGear.map((gear) => (
                  <li key={gear.item} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-forest-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="font-bold">{gear.item}</span>
                      <span className="text-base"> — {gear.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <AffiliateRecommendation pageTags={allGearTags} />
            </section>

            {/* Mid-content ad */}
            <AdPlacement id="ad-mid-content" />

            {/* Common Mistakes */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Common Mistakes
              </h2>
              <ol className="space-y-3">
                {technique.commonMistakes.map((mistake, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle
                      className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed">{mistake}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Pro Tips */}
            <section>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Pro Tips
              </h2>
              <ol className="space-y-3">
                {technique.proTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Lightbulb
                      className="w-5 h-5 text-amber-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Best Species for This Technique */}
            {matchingSpecies.length > 0 && (
              <section>
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                  Best Species for This Technique
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {matchingSpecies.map((species) => (
                    <SpeciesCard key={species.slug} species={species} />
                  ))}
                </div>
              </section>
            )}

            {/* Ad above FAQ */}
            <AdPlacement id="ad-above-faq" />

            {/* FAQ */}
            <FAQSection
              questions={technique.faq}
              pageTitle={`${technique.name} Fishing FAQ`}
            />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">
            <AffiliateRecommendation pageTags={pageTags} />
            <AdPlacement id="ad-sidebar" />
          </aside>
        </div>
      </div>
    </>
  );
}
