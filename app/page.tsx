import Link from "next/link";
import type { Metadata } from "next";
import { ChevronDown, Fish, Thermometer, Target } from "lucide-react";
import SpeciesCard from "@/components/species/SpeciesCard";
import AdPlacement from "@/components/ads/AdPlacement";
import { allSpecies } from "@/data/species";
import { allReviews } from "@/data/gear/reviews";
import { stateMetadata } from "@/data/states";

export const metadata: Metadata = {
  title: "HookedGuide — Fish Smarter. | Species, Techniques & Gear",
  description:
    "Fish Smarter. Species guides, gear recommendations, and fishing intelligence for every state. Ask the Guide for personalized recommendations.",
  alternates: { canonical: "https://hookedguide.com" },
  openGraph: {
    title: "HookedGuide — Fish Smarter.",
    description:
      "Fish Smarter. Species guides, gear recommendations, and fishing intelligence for every state.",
    url: "https://hookedguide.com",
  },
  twitter: {
    title: "HookedGuide — Fish Smarter.",
    description:
      "Fish Smarter. Species guides, gear recommendations, and fishing intelligence for every state.",
  },
};

function renderStars(rating: number): string {
  const full = Math.round(rating);
  return "\u2605".repeat(full) + "\u2606".repeat(5 - full);
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

const testimonials = [
  {
    quote: "Finally, a fishing tool that actually understands conditions.",
    author: "Placeholder Angler",
  },
  {
    quote: "The Guide nailed my setup. Caught my PB on the first trip.",
    author: "Placeholder Angler",
  },
  {
    quote: "Better recommendations than most fishing buddies I know.",
    author: "Placeholder Angler",
  },
];

export default function Home() {
  const popularSpecies = popularSpeciesSlugs
    .map((slug) => allSpecies.find((s) => s.slug === slug))
    .filter(Boolean);

  const featuredReviews = allReviews.slice(0, 4);

  const sortedStates = [...stateMetadata].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      {/* 1. Full-viewport Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/hero/hero-main.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-water-900/70 via-water-900/50 to-water-900/90" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-copper-500 tracking-widest uppercase">
            HOOKEDGUIDE
          </h1>
          <p className="font-body text-xl md:text-2xl font-light text-white mt-4">
            Fish Smarter.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link
              href="/guide"
              className="bg-copper-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-copper-600 transition-colors"
            >
              Ask the Guide
            </Link>
            <Link
              href="/rig-builder"
              className="border border-white/40 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Build a Rig
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* 2. How It Works */}
      <section className="py-16 bg-white dark:bg-water-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading uppercase tracking-wider text-water-500 text-center text-sm font-semibold mb-8">
            HOW IT WORKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Fish className="w-10 h-10 text-copper-500 mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-water-900 dark:text-white mb-2">
                Tell us what you&apos;re after
              </h3>
              <p className="text-sm text-water-600 dark:text-water-300">
                Select your target species, location, and conditions.
              </p>
            </div>
            <div className="text-center p-6">
              <Thermometer className="w-10 h-10 text-copper-500 mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-water-900 dark:text-white mb-2">
                We analyze the conditions
              </h3>
              <p className="text-sm text-water-600 dark:text-water-300">
                Water temp, weather, time of day, moon phase — it all matters.
              </p>
            </div>
            <div className="text-center p-6">
              <Target className="w-10 h-10 text-copper-500 mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-water-900 dark:text-white mb-2">
                Get your exact setup
              </h3>
              <p className="text-sm text-water-600 dark:text-water-300">
                Technique, lure, line, rod — everything you need, down to the
                color.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/guide"
              className="text-copper-500 font-medium hover:text-copper-600 transition-colors"
            >
              Ask the Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Popular Species */}
      <section className="py-16 bg-sand-50 dark:bg-water-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading uppercase tracking-wider text-water-500 text-center text-sm font-semibold mb-8">
            POPULAR SPECIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularSpecies.map((species) => (
              <SpeciesCard key={species!.slug} species={species!} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/species"
              className="text-copper-500 font-medium hover:text-copper-600 transition-colors"
            >
              View All Species &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Gear */}
      <section className="py-16 bg-white dark:bg-water-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading uppercase tracking-wider text-water-500 text-center text-sm font-semibold mb-8">
            FEATURED GEAR
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredReviews.map((review) => (
              <Link
                key={review.slug}
                href={`/gear/reviews/${review.slug}`}
                className="block bg-sand-50 dark:bg-water-800 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
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
              href="/gear/reviews"
              className="text-copper-500 font-medium hover:text-copper-600 transition-colors"
            >
              See All Gear Reviews &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-16 bg-sand-50 dark:bg-water-800">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-heading uppercase tracking-wider text-water-500 text-center text-sm font-semibold mb-8">
            WHAT ANGLERS ARE SAYING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-water-700 rounded-lg p-6"
              >
                <p className="italic text-water-700 dark:text-water-200 mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-sm font-medium text-water-500 dark:text-water-400">
                  &mdash; {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Explore by State */}
      <section className="py-16 bg-white dark:bg-water-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-heading uppercase tracking-wider text-water-500 text-center text-sm font-semibold mb-4">
            EXPLORE BY STATE
          </h2>
          <p className="text-center text-water-600 dark:text-water-300 mb-8">
            Find regulations, top waters, and species in your state
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {sortedStates.map((state) => (
              <Link
                key={state.slug}
                href={`/regulations/${state.slug}`}
                className="block text-center bg-sand-50 dark:bg-water-800 rounded-lg p-2 hover:shadow-sm hover:bg-sand-100 dark:hover:bg-water-700 transition-all"
              >
                <span className="block text-sm font-semibold text-water-700 dark:text-water-200">
                  {state.abbreviation}
                </span>
                <span className="block text-xs text-water-500 dark:text-water-400">
                  {state.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Ad Placement */}
      <AdPlacement id="ad-footer" />
    </div>
  );
}
