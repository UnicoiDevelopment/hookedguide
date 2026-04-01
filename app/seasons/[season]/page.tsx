import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Thermometer, MapPin } from 'lucide-react';

import HeroSection from '@/components/ui/HeroSection';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import FAQSection from '@/components/ui/FAQSection';
import SpeciesCard from '@/components/species/SpeciesCard';
import AdPlacement from '@/components/ads/AdPlacement';
import { allSpecies } from '@/data/species';
import { allTechniques } from '@/data/techniques';
import type { Season } from '@/data/types';

const seasonConfig: Record<
  Season,
  {
    label: string;
    gradient: string;
    description: string;
    tips: string;
    speciesIndices: number[];
  }
> = {
  spring: {
    label: 'Spring',
    gradient: 'from-forest-500 via-forest-400 to-forest-300',
    description:
      'Spring brings rising water temperatures and spawning activity. Fish move shallow and become more aggressive. Focus on shallow flats, spawning beds, and creek arms.',
    tips: 'Spring brings rising water temperatures and spawning activity. Fish move shallow and become more aggressive. Focus on shallow flats, spawning beds, and creek arms.',
    speciesIndices: [12, 6, 22, 16, 8, 1, 21, 25],
  },
  summer: {
    label: 'Summer',
    gradient: 'from-copper-500 via-copper-400 to-copper-300',
    description:
      'Summer means warm water and active fish. Early morning and late evening are prime feeding times. Fish seek deeper, cooler water during midday heat.',
    tips: 'Summer means warm water and active fish. Early morning and late evening are prime feeding times. Fish seek deeper, cooler water during midday heat.',
    speciesIndices: [12, 10, 13, 26, 11, 8, 25, 0],
  },
  fall: {
    label: 'Fall',
    gradient: 'from-amber-600 via-amber-500 to-amber-400',
    description:
      'Fall triggers baitfish migrations and aggressive feeding as fish prepare for winter. Follow the bait schools into creek arms and shallow flats.',
    tips: 'Fall triggers baitfish migrations and aggressive feeding as fish prepare for winter. Follow the bait schools into creek arms and shallow flats.',
    speciesIndices: [12, 27, 29, 14, 15, 24, 6, 21],
  },
  winter: {
    label: 'Winter',
    gradient: 'from-water-600 via-water-500 to-water-400',
    description:
      'Winter slows fish metabolism significantly. Use slow, finesse presentations near deep structure. Fish are less active but can still be caught with patience.',
    tips: 'Winter slows fish metabolism significantly. Use slow, finesse presentations near deep structure. Fish are less active but can still be caught with patience.',
    speciesIndices: [27, 29, 6, 2, 3, 16, 19, 17],
  },
};

const validSeasons: Season[] = ['spring', 'summer', 'fall', 'winter'];

const regionalTips: Record<
  Season,
  { region: string; tip: string }[]
> = {
  spring: [
    {
      region: 'Northeast',
      tip: 'Ice-out on lakes creates excellent trout and bass fishing. Target tributaries as water warms. Shad runs along the coast provide great striped bass action.',
    },
    {
      region: 'Southeast',
      tip: 'Bass spawn kicks off in February and March. Look for bedding fish in shallow coves. Crappie fishing is exceptional around brush piles and docks.',
    },
    {
      region: 'Midwest',
      tip: 'Walleye runs in tributaries are the highlight of spring. Crappie and bluegill move shallow as water temperatures rise above 55 degrees.',
    },
    {
      region: 'West',
      tip: 'Snowmelt runoff can muddy rivers but creates great opportunities on lakes. Trout stocking programs are in full swing. Target bass in warming shallows.',
    },
  ],
  summer: [
    {
      region: 'Northeast',
      tip: 'Striped bass run peaks along the coast. Freshwater bass and panfish are active in early morning. Deep trolling for lake trout becomes productive.',
    },
    {
      region: 'Southeast',
      tip: 'Fish early and late to avoid midday heat. Offshore saltwater fishing for grouper, snapper, and king mackerel is prime. Night fishing for catfish is excellent.',
    },
    {
      region: 'Midwest',
      tip: 'Focus on deep structure for walleye during the day. Topwater bass fishing at dawn and dusk is outstanding. Night fishing for catfish along river channels is peak.',
    },
    {
      region: 'West',
      tip: 'Mountain streams offer excellent trout fishing. Salmon runs begin in the Pacific Northwest. Bass fishing on reservoirs is best early and late in the day.',
    },
  ],
  fall: [
    {
      region: 'Northeast',
      tip: 'Striped bass migrates south along the coast offering great surf fishing. Trout become aggressive before winter. Bass feed heavily in cooling shallows.',
    },
    {
      region: 'Southeast',
      tip: 'Redfish and speckled trout fishing is at its best. Bass move shallow following baitfish. Flounder run provides excellent inshore action along the coast.',
    },
    {
      region: 'Midwest',
      tip: 'Walleye and musky fishing peaks as water cools. Follow shad schools for excellent white bass and hybrid striped bass action. Crappie school up near deep timber.',
    },
    {
      region: 'West',
      tip: 'Salmon runs reach their peak. Trophy trout fishing is excellent on tailwaters. Cooling reservoir temperatures push bass into predictable feeding patterns.',
    },
  ],
  winter: [
    {
      region: 'Northeast',
      tip: 'Ice fishing for panfish, pike, and walleye is the primary game. Open water trout fishing can still be productive on tailwaters and spring-fed streams.',
    },
    {
      region: 'Southeast',
      tip: 'Some of the best bass fishing occurs during mild winter days. Crappie school deep around brush piles. Inshore saltwater species remain active in warmer states.',
    },
    {
      region: 'Midwest',
      tip: 'Ice fishing dominates the season. Target walleye, perch, and panfish through the ice. Open water options exist on power plant lakes and tailwaters.',
    },
    {
      region: 'West',
      tip: 'Steelhead runs provide exciting river fishing. Deep jigging for bass on reservoirs can produce big fish. Mountain lakes are frozen, but lower-elevation lakes remain fishable.',
    },
  ],
};

const seasonFAQs: Record<Season, { question: string; answer: string }[]> = {
  spring: [
    {
      question: 'What fish are biting in spring?',
      answer:
        'Spring is prime time for bass, crappie, bluegill, walleye, and trout. As water temperatures rise above 50-60 degrees, many species become active and begin spawning, making them more accessible to anglers.',
    },
    {
      question: 'What bait works best in spring?',
      answer:
        'Soft plastics like worms and crawfish imitations work great for bass. Jigs tipped with minnows are deadly for crappie and walleye. Live bait such as nightcrawlers and minnows is extremely effective across the board as fish feed aggressively.',
    },
    {
      question: 'What time of day is best for spring fishing?',
      answer:
        'Midday is often the best time in spring since warmer afternoon temperatures heat the shallows and activate fish. Unlike summer, you do not need to be on the water at dawn. The warmest hours between 10 AM and 4 PM are often peak.',
    },
    {
      question: 'Do I need different gear for spring fishing?',
      answer:
        'Medium-power rods with moderate action work well for spring presentations. Use lighter line (8-12 lb test) for finesse approaches in clear water. A good selection of jigs, soft plastics, and spinnerbaits covers most spring situations.',
    },
  ],
  summer: [
    {
      question: 'What fish are biting in summer?',
      answer:
        'Nearly all species are active in summer. Bass, catfish, panfish, and carp thrive in warm freshwater. Saltwater species like redfish, snook, grouper, and king mackerel are in peak season. Early morning and evening are the most productive periods.',
    },
    {
      question: 'What bait works best in summer?',
      answer:
        'Topwater lures shine during low-light periods. Deep-diving crankbaits and Carolina rigs reach fish in deeper water during midday. Live bait like shiners, shad, and cut bait work excellently for catfish and saltwater species.',
    },
    {
      question: 'What time of day is best for summer fishing?',
      answer:
        'Dawn and dusk are the golden hours in summer. Fish are most active when light is low and water is cooler. Night fishing is also extremely productive for species like catfish, walleye, and striped bass during the hottest months.',
    },
    {
      question: 'Do I need different gear for summer fishing?',
      answer:
        'Bring sun protection and plenty of water. Heavier line may be needed for fishing around thick vegetation. A variety of depths in your crankbait selection helps you find where fish are holding. Consider braided line for punching through matted grass.',
    },
  ],
  fall: [
    {
      question: 'What fish are biting in fall?',
      answer:
        'Fall is arguably the best all-around fishing season. Bass, walleye, musky, and pike feed aggressively before winter. Trout fishing is excellent in streams. Saltwater species like redfish and speckled trout are in peak season.',
    },
    {
      question: 'What bait works best in fall?',
      answer:
        'Match the hatch with shad-imitating lures like spinnerbaits, crankbaits, and swimbaits. Fish are focused on baitfish, so anything that mimics a fleeing shad or minnow is effective. Jerkbaits become increasingly effective as water cools.',
    },
    {
      question: 'What time of day is best for fall fishing?',
      answer:
        'Fall offers good fishing throughout the day as water temperatures are comfortable for fish. Midday can be as productive as early morning. Overcast days often produce all-day feeding activity. Focus on afternoons when water reaches peak temperature.',
    },
    {
      question: 'Do I need different gear for fall fishing?',
      answer:
        'Stock up on shad-colored lures. Medium to medium-heavy rods handle the variety of techniques needed. Fluorocarbon line helps in the increasingly clear fall water. Layer your clothing as mornings can be cold but afternoons warm.',
    },
  ],
  winter: [
    {
      question: 'What fish are biting in winter?',
      answer:
        'Walleye, yellow perch, crappie, and trout remain active in cold water. Bass can still be caught with slow presentations. Ice fishing opens up opportunities for panfish and pike in northern states. Steelhead runs are a winter highlight in many areas.',
    },
    {
      question: 'What bait works best in winter?',
      answer:
        'Slow and small is the key. Use finesse jigs, small soft plastics, blade baits, and jigging spoons. For ice fishing, small jigs tipped with wax worms or minnows are standard. Live bait often outperforms artificial in cold water.',
    },
    {
      question: 'What time of day is best for winter fishing?',
      answer:
        'Midday is generally the most productive time in winter when the sun warms the water slightly. Fish are sluggish in the morning and feed most during the warmest part of the day, typically between 11 AM and 3 PM.',
    },
    {
      question: 'Do I need different gear for winter fishing?',
      answer:
        'Lighter line and smaller presentations are essential. Use sensitive rods to detect subtle bites. Fluorocarbon line performs well in cold water. Dress in layers and bring hand warmers. For ice fishing, you will need an auger, tip-ups, and ice-specific rods.',
    },
  ],
};

const difficultyLabels: Record<number, string> = {
  1: 'Beginner',
  2: 'Easy',
  3: 'Intermediate',
  4: 'Advanced',
  5: 'Expert',
};

export function generateStaticParams() {
  return [
    { season: 'spring' },
    { season: 'summer' },
    { season: 'fall' },
    { season: 'winter' },
  ];
}

export function generateMetadata({
  params,
}: {
  params: { season: string };
}): Metadata {
  const season = params.season as Season;
  const config = seasonConfig[season];
  if (!config) return {};

  const title = `${config.label} Fishing Guide (2026) — Best Species, Techniques & Tips | HookedGuide`;
  const description = config.description;

  return {
    title,
    description,
    alternates: {
      canonical: `https://hookedguide.com/seasons/${params.season}`,
    },
    openGraph: {
      title,
      description,
      url: `https://hookedguide.com/seasons/${params.season}`,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function SeasonPage({
  params,
}: {
  params: { season: string };
}) {
  const season = params.season as Season;
  if (!validSeasons.includes(season)) {
    notFound();
  }

  const config = seasonConfig[season];
  const regions = regionalTips[season];
  const faqs = seasonFAQs[season];

  // Pick 8 species for this season
  const seasonSpecies = config.speciesIndices
    .map((i) => allSpecies[i])
    .filter(Boolean)
    .slice(0, 8);

  // Filter techniques for this season
  const seasonTechniques = allTechniques
    .filter((t) => t.seasons.includes(season))
    .slice(0, 6);

  return (
    <main>
      <HeroSection
        title={`Fishing in ${config.label}: Complete Guide`}
        backgroundGradient={config.gradient}
        overlay={true}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Seasons', href: '/seasons' },
            { label: config.label },
          ]}
        />

        {/* Top Species This Season */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Top Species This {config.label}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonSpecies.map((species) => (
              <SpeciesCard key={species.slug} species={species} />
            ))}
          </div>
        </section>

        <AdPlacement id="ad-below-hero" />

        {/* Seasonal Tips */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            What to Expect in {config.label}
          </h2>
          <div className="bg-white dark:bg-water-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <Thermometer className="w-6 h-6 text-copper-500 shrink-0 mt-1" />
              <p className="text-water-700 dark:text-water-200 text-lg leading-relaxed">
                {config.tips}
              </p>
            </div>
          </div>
        </section>

        {/* Technique Recommendations */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Best Techniques for {config.label}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasonTechniques.map((technique) => (
              <Link
                key={technique.slug}
                href={`/techniques/${technique.slug}`}
                className="block bg-white dark:bg-water-800 rounded-lg p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="font-heading font-semibold text-lg text-water-900 dark:text-white mb-2">
                  {technique.name}
                </h3>
                <p className="text-sm text-water-600 dark:text-water-300 mb-3">
                  Difficulty: {difficultyLabels[technique.difficulty] ?? 'N/A'}
                </p>
                <span className="text-copper-500 text-sm font-medium">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Regional Tips */}
        <section>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Regional {config.label} Fishing Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((r) => (
              <div
                key={r.region}
                className="bg-white dark:bg-water-800 rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-forest-500" />
                  <h3 className="font-heading font-semibold text-lg text-water-900 dark:text-white">
                    {r.region}
                  </h3>
                </div>
                <p className="text-water-700 dark:text-water-200 leading-relaxed">
                  {r.tip}
                </p>
              </div>
            ))}
          </div>
        </section>

        <AdPlacement id="ad-mid-content" />

        {/* FAQ */}
        <FAQSection
          questions={faqs}
          pageTitle={`${config.label} Fishing FAQ`}
        />
      </div>
    </main>
  );
}
