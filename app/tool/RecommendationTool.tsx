'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import {
  Waves,
  Droplets,
  Circle,
  Mountain,
  Ship,
  Leaf,
  Sun,
  TreePine,
  Snowflake,
  Sunrise,
  SunDim,
  Sunset,
  Moon,
  Search,
  ChevronLeft,
  ChevronRight,
  Target,
  Fish,
  Anchor,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  ExternalLink,
  AlertTriangle,
} from 'lucide-react';
import { allSpecies } from '@/data/species';
import { allStates } from '@/data/states';
import { getRecommendation } from '@/data/recommendations/engine';
import { getMatchingProducts } from '@/lib/affiliate-matcher';
import type {
  WaterType,
  Season,
  TimeOfDay,
  RecommendationOutput,
} from '@/data/types';

const POPULAR_SLUGS = [
  'largemouth-bass',
  'crappie',
  'walleye',
  'redfish',
  'channel-catfish',
  'rainbow-trout',
];

function getCurrentSeason(): Season {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  return 'winter';
}

const WATER_TYPES: { value: WaterType; label: string; icon: typeof Waves }[] = [
  { value: 'lake', label: 'Lake', icon: Waves },
  { value: 'river', label: 'River', icon: Droplets },
  { value: 'pond', label: 'Pond', icon: Circle },
  { value: 'reservoir', label: 'Reservoir', icon: Mountain },
  { value: 'saltwater', label: 'Saltwater', icon: Ship },
];

const SEASONS: { value: Season; label: string; icon: typeof Leaf; color: string }[] = [
  { value: 'spring', label: 'Spring', icon: Leaf, color: 'bg-green-100 text-green-800 border-green-300' },
  { value: 'summer', label: 'Summer', icon: Sun, color: 'bg-amber-100 text-amber-800 border-amber-300' },
  { value: 'fall', label: 'Fall', icon: TreePine, color: 'bg-orange-100 text-orange-800 border-orange-300' },
  { value: 'winter', label: 'Winter', icon: Snowflake, color: 'bg-blue-100 text-blue-800 border-blue-300' },
];

const TIMES: { value: TimeOfDay; label: string; sublabel: string; icon: typeof Sun }[] = [
  { value: 'dawn', label: 'Dawn', sublabel: '5 - 7 AM', icon: Sunrise },
  { value: 'morning', label: 'Morning', sublabel: '7 - 11 AM', icon: Sun },
  { value: 'midday', label: 'Midday', sublabel: '11 AM - 2 PM', icon: Sun },
  { value: 'afternoon', label: 'Afternoon', sublabel: '2 - 5 PM', icon: SunDim },
  { value: 'dusk', label: 'Dusk', sublabel: '5 - 8 PM', icon: Sunset },
  { value: 'night', label: 'Night', sublabel: '8 PM - 5 AM', icon: Moon },
];

const FAQ_ITEMS = [
  {
    q: 'How does this tool work?',
    a: 'Our recommendation engine analyzes your target species, location, water conditions, season, and time of day to suggest the best technique, lure, line, and gear combination.',
  },
  {
    q: 'Is this really AI?',
    a: 'Our engine uses a sophisticated rule-based system built from expert angler knowledge, not a language model. It considers species behavior patterns, seasonal movements, water temperature triggers, and regional preferences.',
  },
  {
    q: 'How accurate are the recommendations?',
    a: 'High confidence recommendations (when you provide water temperature) are very accurate. The engine accounts for species-specific seasonal patterns, water type adjustments, and temperature triggers.',
  },
  {
    q: 'Can I use this on my phone while fishing?',
    a: 'Yes! This tool is designed to work great on mobile. Bookmark your results URL to save your recommendation for later.',
  },
];

export default function RecommendationTool() {
  const [step, setStep] = useState(1);
  const [species, setSpecies] = useState('');
  const [state, setState] = useState('');
  const [waterType, setWaterType] = useState<WaterType>('lake');
  const [season, setSeason] = useState<Season>('spring');
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('morning');
  const [waterTemp, setWaterTemp] = useState<number | null>(null);
  const [tempSlider, setTempSlider] = useState(60);
  const [result, setResult] = useState<RecommendationOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [speciesSearch, setSpeciesSearch] = useState('');
  const [stateSearch, setStateSearch] = useState('');
  const [initialized, setInitialized] = useState(false);

  // Sort species: popular first, then alphabetical
  const sortedSpecies = useMemo(() => {
    const popular = POPULAR_SLUGS.map((slug) => allSpecies.find((s) => s.slug === slug)).filter(
      Boolean
    ) as typeof allSpecies;
    const rest = allSpecies
      .filter((s) => !POPULAR_SLUGS.includes(s.slug))
      .sort((a, b) => a.name.localeCompare(b.name));
    return [...popular, ...rest];
  }, []);

  const filteredSpecies = useMemo(() => {
    if (!speciesSearch.trim()) return sortedSpecies;
    const q = speciesSearch.toLowerCase();
    return sortedSpecies.filter(
      (s) => s.name.toLowerCase().includes(q) || s.type.toLowerCase().includes(q)
    );
  }, [speciesSearch, sortedSpecies]);

  const filteredStates = useMemo(() => {
    if (!stateSearch.trim()) return allStates;
    const q = stateSearch.toLowerCase();
    return allStates.filter(
      (s) =>
        s.name.toLowerCase().includes(q) || s.abbreviation.toLowerCase().includes(q)
    );
  }, [stateSearch]);

  const selectedSpecies = useMemo(
    () => allSpecies.find((s) => s.slug === species),
    [species]
  );

  const currentSeason = useMemo(() => getCurrentSeason(), []);

  const computeResult = useCallback(
    (sp: string, st: string, wt: WaterType, se: Season, tod: TimeOfDay, temp: number | null) => {
      try {
        const rec = getRecommendation({
          species: sp,
          state: st || undefined,
          waterType: wt,
          season: se,
          timeOfDay: tod,
          waterTemp: temp ?? undefined,
        });
        return rec;
      } catch {
        return null;
      }
    },
    []
  );

  // On mount: check URL params
  useEffect(() => {
    if (initialized) return;
    const params = new URLSearchParams(window.location.search);
    const pSpecies = params.get('species');
    const pState = params.get('state');
    const pWater = params.get('water') as WaterType | null;
    const pSeason = params.get('season') as Season | null;
    const pTime = params.get('time') as TimeOfDay | null;
    const pTemp = params.get('temp');

    if (pSpecies && pWater && pSeason && pTime) {
      const tempVal = pTemp ? parseInt(pTemp, 10) : null;
      setSpecies(pSpecies);
      setState(pState || '');
      setWaterType(pWater);
      setSeason(pSeason);
      setTimeOfDay(pTime);
      setWaterTemp(isNaN(tempVal as number) ? null : tempVal);
      if (tempVal && !isNaN(tempVal)) setTempSlider(tempVal);

      const rec = computeResult(pSpecies, pState || '', pWater, pSeason, pTime, isNaN(tempVal as number) ? null : tempVal);
      if (rec) {
        setResult(rec);
        setStep(7);
      }
    }
    setInitialized(true);
  }, [initialized, computeResult]);

  function handleSubmit() {
    setLoading(true);
    const rec = computeResult(species, state, waterType, season, timeOfDay, waterTemp);
    setTimeout(() => {
      setResult(rec);
      setStep(7);
      setLoading(false);

      const params = new URLSearchParams();
      params.set('species', species);
      if (state) params.set('state', state);
      params.set('water', waterType);
      params.set('season', season);
      params.set('time', timeOfDay);
      if (waterTemp !== null) params.set('temp', String(waterTemp));
      window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }, 800);
  }

  function reset() {
    setStep(1);
    setSpecies('');
    setState('');
    setWaterType('lake');
    setSeason('spring');
    setTimeOfDay('morning');
    setWaterTemp(null);
    setTempSlider(60);
    setResult(null);
    setSpeciesSearch('');
    setStateSearch('');
    window.history.replaceState({}, '', window.location.pathname);
  }

  function goBack() {
    if (step > 1 && step <= 6) setStep(step - 1);
    if (step === 7) setStep(6);
  }

  // Matching products for results
  const matchingProducts = useMemo(() => {
    if (!result) return [];
    const tags = [
      species,
      result.technique.slug,
      result.alternateTechnique.slug,
      ...result.lure.tags,
      result.line.type.toLowerCase(),
      ...result.rodReel.tags,
    ];
    return getMatchingProducts(tags, 3).filter((p) => p.affiliateUrl !== '');
  }, [result, species]);

  const tempColor =
    tempSlider < 50 ? 'text-blue-500' : tempSlider <= 70 ? 'text-green-600' : 'text-red-500';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'What Should I Fish With? — Fishing Recommendation Tool',
    description:
      'Get personalized fishing recommendations. Select your species, location, season, and conditions — we\'ll tell you exactly what technique, bait, and gear to use.',
    url: 'https://hookedguide.com/tool',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HookedGuide',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-water-800 via-water-600 to-water-700 py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            What Should I Fish With?
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Tell us what you&apos;re after and we&apos;ll recommend exactly what to use.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress indicator */}
        {step < 7 && (
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    s < step
                      ? 'bg-copper-500'
                      : s === step
                      ? 'ring-2 ring-copper-500 ring-offset-2 bg-copper-500'
                      : 'bg-gray-300'
                  }`}
                />
                {s < 6 && (
                  <div
                    className={`w-6 h-0.5 transition-colors duration-300 ${
                      s < step ? 'bg-copper-500' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Back button */}
        {step > 1 && step <= 6 && (
          <button
            onClick={goBack}
            className="flex items-center gap-1 text-water-600 hover:text-water-800 mb-4 text-sm font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        )}

        {/* STEP 1: Species */}
        {step === 1 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="font-heading text-2xl font-bold text-water-900 mb-2">
              What are you fishing for?
            </h2>
            <p className="text-gray-600 mb-6">Select your target species to get started.</p>

            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search species..."
                value={speciesSearch}
                onChange={(e) => setSpeciesSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-copper-500 focus:border-transparent text-water-900 bg-white"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {filteredSpecies.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => {
                    setSpecies(s.slug);
                    setStep(2);
                  }}
                  className="group relative flex flex-col items-start p-4 rounded-lg border border-gray-200 bg-white hover:border-copper-500 hover:shadow-md transition-all duration-200 text-left"
                >
                  <span className="font-semibold text-water-900 group-hover:text-copper-600 transition-colors">
                    {s.name}
                  </span>
                  <span
                    className={`mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                      s.type === 'freshwater'
                        ? 'bg-blue-100 text-blue-700'
                        : s.type === 'saltwater'
                        ? 'bg-teal-100 text-teal-700'
                        : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {s.type}
                  </span>
                  {POPULAR_SLUGS.includes(s.slug) && !speciesSearch && (
                    <span className="absolute top-2 right-2 text-[10px] font-bold text-copper-500 uppercase tracking-wide">
                      Popular
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Location */}
        {step === 2 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="font-heading text-2xl font-bold text-water-900 mb-2">
              Where are you fishing?
            </h2>
            <p className="text-gray-600 mb-6">
              Select your state for local regulation info, or skip this step.
            </p>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search states..."
                value={stateSearch}
                onChange={(e) => setStateSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-copper-500 focus:border-transparent text-water-900 bg-white"
              />
            </div>

            <div className="max-h-72 overflow-y-auto rounded-lg border border-gray-200 bg-white mb-4">
              {filteredStates.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => {
                    setState(s.slug);
                    setStep(3);
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-copper-50 border-b border-gray-100 last:border-b-0 transition-colors text-left"
                >
                  <span className="font-medium text-water-900">{s.name}</span>
                  <span className="text-gray-400 text-sm">{s.abbreviation}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setState('');
                setStep(3);
              }}
              className="w-full py-3 rounded-lg border-2 border-dashed border-gray-300 text-gray-500 hover:border-copper-400 hover:text-copper-600 transition-colors font-medium"
            >
              Skip — I don&apos;t want regulation info
            </button>
          </div>
        )}

        {/* STEP 3: Water Type */}
        {step === 3 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="font-heading text-2xl font-bold text-water-900 mb-2">
              What type of water?
            </h2>
            <p className="text-gray-600 mb-6">Choose the body of water you&apos;ll be fishing.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {WATER_TYPES.map((w) => {
                const Icon = w.icon;
                return (
                  <button
                    key={w.value}
                    onClick={() => {
                      setWaterType(w.value);
                      setStep(4);
                    }}
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 border-gray-200 bg-white hover:border-copper-500 hover:shadow-lg transition-all duration-200 group"
                  >
                    <Icon className="w-10 h-10 text-water-500 group-hover:text-copper-500 transition-colors" />
                    <span className="font-semibold text-water-900 group-hover:text-copper-600 transition-colors text-lg">
                      {w.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Season */}
        {step === 4 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="font-heading text-2xl font-bold text-water-900 mb-2">
              What time of year?
            </h2>
            <p className="text-gray-600 mb-6">Season affects fish behavior and the best approach.</p>

            <div className="grid grid-cols-2 gap-4">
              {SEASONS.map((s) => {
                const Icon = s.icon;
                const isCurrent = s.value === currentSeason;
                return (
                  <button
                    key={s.value}
                    onClick={() => {
                      setSeason(s.value);
                      setStep(5);
                    }}
                    className={`relative flex flex-col items-center justify-center gap-3 p-6 rounded-xl border-2 bg-white hover:shadow-lg transition-all duration-200 group ${
                      isCurrent
                        ? 'border-copper-500 shadow-md'
                        : 'border-gray-200 hover:border-copper-500'
                    }`}
                  >
                    {isCurrent && (
                      <span className="absolute top-2 right-2 text-[10px] font-bold bg-copper-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                        Current
                      </span>
                    )}
                    <Icon
                      className={`w-10 h-10 transition-colors ${
                        s.value === 'spring'
                          ? 'text-green-500'
                          : s.value === 'summer'
                          ? 'text-amber-500'
                          : s.value === 'fall'
                          ? 'text-orange-500'
                          : 'text-blue-500'
                      } group-hover:scale-110 transition-transform`}
                    />
                    <span className="font-semibold text-water-900 text-lg">{s.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 5: Time of Day */}
        {step === 5 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="font-heading text-2xl font-bold text-water-900 mb-2">
              When are you fishing?
            </h2>
            <p className="text-gray-600 mb-6">Time of day impacts feeding activity and technique selection.</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {TIMES.map((t) => {
                const Icon = t.icon;
                return (
                  <button
                    key={t.value}
                    onClick={() => {
                      setTimeOfDay(t.value);
                      setStep(6);
                    }}
                    className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl border-2 border-gray-200 bg-white hover:border-copper-500 hover:shadow-lg transition-all duration-200 group"
                  >
                    <Icon className="w-8 h-8 text-water-500 group-hover:text-copper-500 transition-colors" />
                    <span className="font-semibold text-water-900 group-hover:text-copper-600 transition-colors">
                      {t.label}
                    </span>
                    <span className="text-xs text-gray-500">{t.sublabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 6: Water Temperature */}
        {step === 6 && !loading && (
          <div className="animate-in fade-in duration-300">
            <h2 className="font-heading text-2xl font-bold text-water-900 mb-2">
              What&apos;s the water temperature?
            </h2>
            <p className="text-gray-600 mb-6">
              Water temperature is the single biggest factor in fish behavior. If you know it, we can give a much better recommendation.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
              <div className="text-center mb-6">
                <span className={`font-heading text-5xl font-bold ${tempColor} transition-colors`}>
                  {tempSlider}
                </span>
                <span className={`text-2xl font-semibold ${tempColor} ml-1`}>&deg;F</span>
              </div>

              <input
                type="range"
                min={30}
                max={90}
                value={tempSlider}
                onChange={(e) => setTempSlider(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-copper-500"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>30&deg;F (Cold)</span>
                <span>60&deg;F (Moderate)</span>
                <span>90&deg;F (Warm)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setWaterTemp(tempSlider);
                  handleSubmit();
                }}
                className="flex-1 py-4 rounded-xl bg-copper-500 hover:bg-copper-600 text-white font-bold text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Target className="w-5 h-5" />
                Get My Recommendation
              </button>
              <button
                onClick={() => {
                  setWaterTemp(null);
                  handleSubmit();
                }}
                className="py-4 px-6 rounded-xl border-2 border-gray-300 text-gray-600 hover:border-copper-400 hover:text-copper-600 font-medium transition-colors"
              >
                I don&apos;t know
              </button>
            </div>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 animate-in fade-in duration-300">
            <div className="relative">
              <Fish className="w-16 h-16 text-copper-500 animate-bounce" />
            </div>
            <p className="mt-4 text-water-700 font-medium text-lg">Analyzing conditions...</p>
            <p className="text-gray-500 text-sm mt-1">Building your personalized recommendation</p>
          </div>
        )}

        {/* STEP 7: Results */}
        {step === 7 && result && !loading && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Back to edit */}
            <button
              onClick={() => setStep(6)}
              className="flex items-center gap-1 text-water-600 hover:text-water-800 mb-4 text-sm font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Adjust inputs
            </button>

            {/* Results header */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              {/* Confidence badge + species name header */}
              <div className="bg-gradient-to-r from-water-800 to-water-700 px-6 py-5 flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-sm font-medium">Recommendation for</p>
                  <h2 className="font-heading text-2xl font-bold text-white">
                    {selectedSpecies?.name ?? species}
                  </h2>
                </div>
                <span
                  className={`px-3 py-1.5 rounded-full text-sm font-bold ${
                    result.confidence === 'high'
                      ? 'bg-green-100 text-green-800'
                      : result.confidence === 'medium'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {result.confidence === 'high'
                    ? 'High Confidence'
                    : result.confidence === 'medium'
                    ? 'Medium Confidence'
                    : 'Low Confidence'}
                </span>
              </div>

              <div className="p-6 space-y-6">
                {/* Technique */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Recommended Technique
                  </p>
                  <h3 className="font-heading text-2xl font-bold text-water-900 mb-1">
                    Use a {result.technique.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{result.technique.description}</p>
                  <Link
                    href={`/techniques/${result.technique.slug}`}
                    className="inline-flex items-center gap-1 text-copper-600 hover:text-copper-700 font-medium text-sm transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Alternate technique */}
                <div className="bg-sand-50 rounded-lg p-4 border border-sand-200">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Or Try
                  </p>
                  <p className="font-semibold text-water-900">{result.alternateTechnique.name}</p>
                  <p className="text-gray-600 text-sm">{result.alternateTechnique.description}</p>
                  <Link
                    href={`/techniques/${result.alternateTechnique.slug}`}
                    className="inline-flex items-center gap-1 text-copper-600 hover:text-copper-700 font-medium text-sm mt-1 transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <hr className="border-gray-200" />

                {/* Lure / Bait */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Lure / Bait
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <p className="text-xs font-bold text-copper-500 uppercase mb-1">Primary</p>
                      <p className="font-semibold text-water-900">{result.lure.name}</p>
                      <p className="text-sm text-gray-600">
                        Color: <span className="font-medium">{result.lure.color}</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Size: <span className="font-medium">{result.lure.size}</span>
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <p className="text-xs font-bold text-gray-400 uppercase mb-1">Alternate</p>
                      <p className="font-semibold text-water-900">{result.alternateLure.name}</p>
                      <p className="text-sm text-gray-600">
                        Color: <span className="font-medium">{result.alternateLure.color}</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Size: <span className="font-medium">{result.alternateLure.size}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* Line */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Line
                  </p>
                  <div className="flex items-start gap-3">
                    <Anchor className="w-5 h-5 text-copper-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-water-900">
                        {result.line.type} — {result.line.weight}
                      </p>
                      {result.line.description && (
                        <p className="text-sm text-gray-600">{result.line.description}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Rod & Reel */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Rod &amp; Reel
                  </p>
                  <div className="bg-sand-50 rounded-lg p-4 border border-sand-200">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                      <div>
                        <span className="text-gray-500">Rod Type:</span>{' '}
                        <span className="font-medium text-water-900">{result.rodReel.rodType}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Power:</span>{' '}
                        <span className="font-medium text-water-900">{result.rodReel.power}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Action:</span>{' '}
                        <span className="font-medium text-water-900">{result.rodReel.action}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Reel Type:</span>{' '}
                        <span className="font-medium text-water-900">{result.rodReel.reelType}</span>
                      </div>
                    </div>
                    {result.rodReel.description && (
                      <p className="text-sm text-gray-600 mt-2">{result.rodReel.description}</p>
                    )}
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* Target Depth */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Target Depth
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-water-100 flex items-center justify-center flex-shrink-0">
                      <Waves className="w-5 h-5 text-water-600" />
                    </div>
                    <p className="font-semibold text-water-900 text-lg">
                      Fish at {result.targetDepth}
                    </p>
                  </div>
                </div>

                {/* Tips */}
                {result.tips.length > 0 && (
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                      Contextual Tips
                    </p>
                    <ul className="space-y-2">
                      {result.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-copper-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Regulations */}
                {result.regulations && (
                  <>
                    <hr className="border-gray-200" />
                    <div className="border-2 border-amber-300 bg-amber-50 rounded-xl p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600" />
                        <p className="font-heading font-bold text-amber-800 text-lg">
                          Regulations
                        </p>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-3">
                        <div>
                          <span className="text-amber-700 font-medium">Bag Limit:</span>{' '}
                          <span className="text-amber-900">{result.regulations.bagLimit}</span>
                        </div>
                        <div>
                          <span className="text-amber-700 font-medium">Size Limit:</span>{' '}
                          <span className="text-amber-900">{result.regulations.sizeLimit}</span>
                        </div>
                        <div>
                          <span className="text-amber-700 font-medium">Season:</span>{' '}
                          <span className="text-amber-900">{result.regulations.season}</span>
                        </div>
                      </div>
                      {result.regulations.notes && (
                        <p className="text-sm text-amber-800 mb-3">{result.regulations.notes}</p>
                      )}
                      <p className="text-xs text-amber-700 font-medium">
                        &#9888;&#65039; Always verify with your state agency
                      </p>
                      {state && (
                        <Link
                          href={`/regulations/${state}`}
                          className="inline-flex items-center gap-1 text-amber-700 hover:text-amber-900 font-medium text-sm mt-2 transition-colors"
                        >
                          View full {allStates.find((s) => s.slug === state)?.name} regulations{' '}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </>
                )}

                {/* Matching Gear */}
                {matchingProducts.length > 0 && (
                  <>
                    <hr className="border-gray-200" />
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Recommended Gear
                      </p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {matchingProducts.map((product) => (
                          <div
                            key={product.id}
                            className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow"
                          >
                            <p className="text-xs text-gray-500 font-medium">{product.brand}</p>
                            <p className="font-semibold text-water-900 text-sm mt-0.5 mb-2 line-clamp-2">
                              {product.name}
                            </p>
                            {product.price && (
                              <p className="text-copper-600 font-bold mb-2">{product.price}</p>
                            )}
                            <a
                              href={product.affiliateUrl}
                              target="_blank"
                              rel="noopener noreferrer nofollow sponsored"
                              className="inline-flex items-center gap-1 text-sm font-medium text-copper-600 hover:text-copper-700 transition-colors"
                            >
                              Check Price <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Actions */}
              <div className="border-t border-gray-200 px-6 py-5 bg-sand-50 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={reset}
                  className="flex-1 py-3 rounded-lg bg-copper-500 hover:bg-copper-600 text-white font-bold transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Get New Recommendation
                </button>
                {selectedSpecies && (
                  <Link
                    href={`/species/${species}`}
                    className="flex-1 py-3 rounded-lg border-2 border-water-600 text-water-700 hover:bg-water-600 hover:text-white font-bold transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    View {selectedSpecies.name} Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                <Link
                  href={`/techniques/${result.technique.slug}`}
                  className="flex-1 py-3 rounded-lg border-2 border-copper-400 text-copper-700 hover:bg-copper-500 hover:text-white font-bold transition-colors flex items-center justify-center gap-2 text-center"
                >
                  View {result.technique.name} Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <section className="mt-16 mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-water-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-semibold text-water-900 hover:bg-sand-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-3" />
                </summary>
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
