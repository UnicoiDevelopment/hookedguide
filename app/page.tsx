import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import SpeciesCard from "@/components/species/SpeciesCard";
import TechniqueCard from "@/components/techniques/TechniqueCard";
import AdPlacement from "@/components/ads/AdPlacement";
import { allSpecies } from "@/data/species";
import { allTechniques } from "@/data/techniques";
import { allReviews } from "@/data/gear/reviews";
import { stateMetadata } from "@/data/states";

export const metadata = {
  title: "HookedGuide — Your AI Fishing Guide | Species, Techniques & Gear",
  description:
    "Your AI fishing guide. Species guides, gear recommendations, and fishing intelligence for every state. Find the best techniques, lures, and tackle.",
  alternates: {
    canonical: "https://hookedguide.com",
  },
  openGraph: {
    title: "HookedGuide — Your AI Fishing Guide | Species, Techniques & Gear",
    description:
      "Your AI fishing guide. Species guides, gear recommendations, and fishing intelligence for every state. Find the best techniques, lures, and tackle.",
    url: "https://hookedguide.com",
  },
  twitter: {
    title: "HookedGuide — Your AI Fishing Guide | Species, Techniques & Gear",
    description:
      "Your AI fishing guide. Species guides, gear recommendations, and fishing intelligence for every state. Find the best techniques, lures, and tackle.",
  },
};

function getCurrentSeason(): "spring" | "summer" | "fall" | "winter" {
  const month = new Date().getMonth(); // 0-indexed
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "fall";
  return "winter";
}

function renderStars(rating: number): string {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

const popularSpeciesSlugs = [
  "largemouth-bass",
  "crappie",
  "channel-catfish",
  "walleye",
  "rainbow-trout",
  "redfish",
  "speckled-trout",
  "smallmouth-bass",
];

const popularTechniqueSlugs = [
  "texas-rig",
  "topwater",
  "drop-shot",
  "crankbait",
  "jigging",
  "live-bait",
];

export default function Home() {
  const season = getCurrentSeason();
  const seasonLabel = season.charAt(0).toUpperCase() + season.slice(1);

  const popularSpecies = popularSpeciesSlugs
    .map((slug) => allSpecies.find((s) => s.slug === slug))
    .filter(Boolean);

  const seasonalPicks = allSpecies.slice(0, 4);

  const popularTechniques = popularTechniqueSlugs
    .map((slug) => allTechniques.find((t) => t.slug === slug))
    .filter(Boolean);

  const featuredReviews = allReviews.slice(0, 4);

  const sortedStates = [...stateMetadata].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      {/* 1. Hero Section */}
      <HeroSection
        title="Your AI Fishing Guide"
        subtitle="Species guides, gear recommendations, and fishing intelligence for every state."
        cta={{ label: "What Should I Fish With?", href: "/tool" }}
        backgroundGradient="bg-gradient-to-br from-water-700 via-water-500 to-forest-600"
      />
      <div className="bg-gradient-to-br from-water-700 via-water-500 to-forest-600 -mt-8 pb-8 text-center">
        <Link
          href="/species"
          className="text-white hover:text-white/80 transition-colors text-sm font-medium"
        >
          Explore Species &rarr;
        </Link>
      </div>

      {/* 2. Popular Species Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading font-semibold uppercase text-water-500 tracking-wider mb-8">
            Popular Species
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularSpecies.map((species) => (
              <SpeciesCard key={species!.slug} species={species!} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/species"
              className="text-water-600 hover:text-water-700 font-medium transition-colors"
            >
              View All Species &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Ad Placement */}
      <AdPlacement id="ad-below-hero" />

      {/* 4. Seasonal Spotlight */}
      <section className="py-12 md:py-16 bg-sand-50 dark:bg-water-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading font-semibold uppercase text-water-500 tracking-wider mb-8">
            Fishing This {seasonLabel}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalPicks.map((species) => (
              <SpeciesCard key={species.slug} species={species} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technique Highlights */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading font-semibold uppercase text-water-500 tracking-wider mb-8">
            Popular Techniques
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTechniques.map((technique) => (
              <TechniqueCard key={technique!.slug} technique={technique!} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/techniques"
              className="text-water-600 hover:text-water-700 font-medium transition-colors"
            >
              View All Techniques &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Ad Placement */}
      <AdPlacement id="ad-mid-content" />

      {/* 7. Find Your State */}
      <section className="py-12 md:py-16 bg-sand-50 dark:bg-water-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading font-semibold uppercase text-water-500 tracking-wider mb-8">
            Fishing Regulations by State
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {sortedStates.map((state) => (
              <Link
                key={state.slug}
                href={`/regulations/${state.slug}`}
                className="text-sm text-water-700 dark:text-water-300 hover:text-copper-600 dark:hover:text-copper-400 transition-colors"
              >
                {state.name}{" "}
                <span className="text-water-400 dark:text-water-500">
                  ({state.abbreviation})
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Gear Reviews */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading font-semibold uppercase text-water-500 tracking-wider mb-8">
            Gear Reviews
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredReviews.map((review) => (
              <Link
                key={review.slug}
                href={`/gear/${review.slug}`}
                className="block bg-white dark:bg-water-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-5"
              >
                <p className="text-xs font-medium uppercase text-water-400 dark:text-water-500 tracking-wide mb-1">
                  {review.category}
                </p>
                <h3 className="font-heading font-semibold text-water-900 dark:text-white mb-1">
                  {review.productName}
                </h3>
                <p className="text-sm text-water-600 dark:text-water-300 mb-2">
                  {review.brand}
                </p>
                <p
                  className="text-copper-500"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {renderStars(review.rating)}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/gear"
              className="text-water-600 hover:text-water-700 font-medium transition-colors"
            >
              View All Gear &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Newsletter CTA */}
      <section className="bg-gradient-to-r from-copper-600 to-copper-500 py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Never miss a bite.
          </h2>
          <p className="text-white/80 mb-8">
            Get fishing tips, gear reviews, and seasonal advice delivered to
            your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-water-900 placeholder-water-400 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Email address"
            />
            <button
              type="button"
              className="px-6 py-3 bg-water-800 text-white font-medium rounded-lg hover:bg-water-900 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* 10. Ad Placement */}
      <AdPlacement id="ad-footer" />
    </div>
  );
}
