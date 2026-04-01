'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import {
  Search,
  ChevronDown,
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
  Waves,
  Droplets,
  Sun,
  CloudSun,
  Cloud,
  CloudRain,
  CloudLightning,
  Snowflake,
  CloudFog,
  Wind,
  TreePine,
  Compass,
  CircleDot,
  Home,
  Minimize2,
  Maximize2,
  MoveHorizontal,
  Navigation,
  TrendingUp,
  TrendingDown,
  Minus,
  ChevronsDown,
  Clock,
} from 'lucide-react';
import { allSpecies } from '@/data/species';
import { allStates } from '@/data/states';
import { getDetailedRecommendation } from '@/data/recommendations/detailed-engine';
import { getMatchingProducts } from '@/lib/affiliate-matcher';
import type {
  DetailedRecommendationInput,
  DetailedRecommendationOutput,
  SkyCondition,
  WindSpeed,
  WindDirection,
  FrontalSystem,
  PressureTrend,
  WaterBodyType,
  WaterClarity,
  CoverType,
  DepthAvailable,
  MoonPhase,
} from '@/data/types';

const POPULAR_SLUGS = [
  'largemouth-bass',
  'crappie',
  'walleye',
  'redfish',
  'channel-catfish',
  'rainbow-trout',
];

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

function getMoonPhase(date: Date): MoonPhase {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const c = Math.floor(365.25 * year);
  const e = Math.floor(30.6 * month);
  const jd = c + e + day - 694039.09;
  const phase = jd / 29.5305882;
  const phaseIndex = Math.round((phase - Math.floor(phase)) * 8) % 8;
  const phases: MoonPhase[] = ['new', 'waxing-crescent', 'first-quarter', 'waxing-gibbous', 'full', 'waning-gibbous', 'last-quarter', 'waning-crescent'];
  return phases[phaseIndex];
}

function formatHour(hour: number): string {
  if (hour === 0 || hour === 24) return '12:00 AM';
  if (hour === 12) return '12:00 PM';
  if (hour < 12) return `${hour}:00 AM`;
  return `${hour - 12}:00 PM`;
}

const FAQ_ITEMS = [
  {
    q: 'How does this tool work?',
    a: 'Our recommendation engine analyzes your target species, location, water body details, temperature, weather conditions, moon phase, and time of day to suggest the best technique, lure, line, and gear combination. It considers species behavior patterns, seasonal movements, temperature triggers, frontal systems, and regional preferences.',
  },
  {
    q: 'Is this really AI?',
    a: 'Our engine uses a sophisticated rule-based system built from expert angler knowledge, not a language model. It considers over 30 variables including species-specific temperature maps, weather impact rules, moon feeding periods, and water body adjustments to deliver highly targeted recommendations.',
  },
  {
    q: 'How accurate are the recommendations?',
    a: 'Very-high confidence recommendations (when you provide detailed conditions) are extremely accurate. The more information you provide — especially water temperature, weather conditions, and moon phase — the more precise the recommendation. Our engine accounts for frontal system impacts, barometric pressure trends, and species-specific feeding windows.',
  },
  {
    q: 'Can I use this on my phone while fishing?',
    a: 'Yes! This tool is designed to work great on mobile. Bookmark your results URL to save your recommendation for later reference on the water.',
  },
];

export default function RecommendationTool() {
  const [step, setStep] = useState(1);
  const [species, setSpecies] = useState('');
  const [state, setState] = useState('');
  const [waterBody, setWaterBody] = useState<{ type: WaterBodyType; clarity: WaterClarity; coverType: CoverType; depthAvailable: DepthAvailable }>({ type: 'medium-lake', clarity: 'stained', coverType: 'mixed', depthAvailable: 'medium' });
  const [waterTemp, setWaterTemp] = useState(65);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [hourOfDay, setHourOfDay] = useState(7);
  const [weather, setWeather] = useState<{ sky: SkyCondition; wind: WindSpeed; windDirection: WindDirection; frontalSystem: FrontalSystem; pressureTrend: PressureTrend }>({ sky: 'partly-cloudy', wind: 'light', windDirection: 'S', frontalSystem: 'stable', pressureTrend: 'steady' });
  const [moonPhase, setMoonPhase] = useState<MoonPhase>('first-quarter');
  const [result, setResult] = useState<DetailedRecommendationOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [guideText, setGuideText] = useState<string | null>(null);
  const [guideLoading, setGuideLoading] = useState(false);

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
    if (!searchQuery.trim()) return sortedSpecies;
    const q = searchQuery.toLowerCase();
    return sortedSpecies.filter(
      (s) => s.name.toLowerCase().includes(q) || s.type.toLowerCase().includes(q)
    );
  }, [searchQuery, sortedSpecies]);

  const filteredStates = useMemo(() => {
    if (!searchQuery.trim()) return allStates;
    const q = searchQuery.toLowerCase();
    return allStates.filter(
      (s) =>
        s.name.toLowerCase().includes(q) || s.abbreviation.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const selectedSpecies = useMemo(
    () => allSpecies.find((s) => s.slug === species),
    [species]
  );

  const currentMonth = useMemo(() => new Date().getMonth() + 1, []);

  // Auto-detect moon phase on mount
  useEffect(() => {
    setMoonPhase(getMoonPhase(new Date()));
  }, []);

  const computeResult = useCallback(
    (input: DetailedRecommendationInput) => {
      try {
        return getDetailedRecommendation(input);
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
    const pWaterType = params.get('waterType') as WaterBodyType | null;
    const pClarity = params.get('clarity') as WaterClarity | null;
    const pCover = params.get('cover') as CoverType | null;
    const pDepth = params.get('depth') as DepthAvailable | null;
    const pTemp = params.get('temp');
    const pMonth = params.get('month');
    const pHour = params.get('hour');
    const pSky = params.get('sky') as SkyCondition | null;
    const pWind = params.get('wind') as WindSpeed | null;
    const pWindDir = params.get('windDir') as WindDirection | null;
    const pFrontal = params.get('frontal') as FrontalSystem | null;
    const pPressure = params.get('pressure') as PressureTrend | null;
    const pMoon = params.get('moon') as MoonPhase | null;

    if (pSpecies && pWaterType && pMonth && pHour && pSky) {
      const tempVal = pTemp ? parseInt(pTemp, 10) : 65;
      const monthVal = pMonth ? parseInt(pMonth, 10) : new Date().getMonth() + 1;
      const hourVal = pHour ? parseInt(pHour, 10) : 7;

      setSpecies(pSpecies);
      setState(pState || '');
      setWaterBody({
        type: pWaterType || 'medium-lake',
        clarity: pClarity || 'stained',
        coverType: pCover || 'mixed',
        depthAvailable: pDepth || 'medium',
      });
      setWaterTemp(isNaN(tempVal) ? 65 : tempVal);
      setMonth(isNaN(monthVal) ? new Date().getMonth() + 1 : monthVal);
      setHourOfDay(isNaN(hourVal) ? 7 : hourVal);
      setWeather({
        sky: pSky || 'partly-cloudy',
        wind: pWind || 'light',
        windDirection: pWindDir || 'S',
        frontalSystem: pFrontal || 'stable',
        pressureTrend: pPressure || 'steady',
      });
      if (pMoon) setMoonPhase(pMoon);

      const input: DetailedRecommendationInput = {
        species: pSpecies,
        state: pState || undefined,
        waterTemp: isNaN(tempVal) ? 65 : tempVal,
        waterBody: {
          type: pWaterType || 'medium-lake',
          clarity: pClarity || 'stained',
          coverType: pCover || 'mixed',
          depthAvailable: pDepth || 'medium',
        },
        month: isNaN(monthVal) ? new Date().getMonth() + 1 : monthVal,
        hourOfDay: isNaN(hourVal) ? 7 : hourVal,
        weather: {
          sky: pSky || 'partly-cloudy',
          wind: pWind || 'light',
          windDirection: pWindDir || 'S',
          frontalSystem: pFrontal || 'stable',
          pressureTrend: pPressure || 'steady',
        },
        moonPhase: pMoon || undefined,
      };

      const rec = computeResult(input);
      if (rec) {
        setResult(rec);
        setStep(9);
        fetchGuideText(rec, input);
      }
    }
    setInitialized(true);
  }, [initialized, computeResult]);

  function fetchGuideText(rec: DetailedRecommendationOutput, inputData: DetailedRecommendationInput) {
    setGuideLoading(true);
    setGuideText(null);
    fetch('/api/guide', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recommendation: rec, input: inputData }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((data) => setGuideText(data.conversation || null))
      .catch(() => setGuideText(null))
      .finally(() => setGuideLoading(false));
  }

  function handleSubmit() {
    setLoading(true);
    const input: DetailedRecommendationInput = {
      species,
      state: state || undefined,
      waterTemp,
      waterBody,
      month,
      hourOfDay,
      weather,
      moonPhase,
    };
    const rec = computeResult(input);
    setTimeout(() => {
      setResult(rec);
      setStep(9);
      setLoading(false);

      if (rec) fetchGuideText(rec, input);

      const params = new URLSearchParams();
      params.set('species', species);
      if (state) params.set('state', state);
      params.set('waterType', waterBody.type);
      params.set('clarity', waterBody.clarity);
      params.set('cover', waterBody.coverType);
      params.set('depth', waterBody.depthAvailable);
      params.set('temp', String(waterTemp));
      params.set('month', String(month));
      params.set('hour', String(hourOfDay));
      params.set('sky', weather.sky);
      params.set('wind', weather.wind);
      params.set('windDir', weather.windDirection);
      params.set('frontal', weather.frontalSystem);
      params.set('pressure', weather.pressureTrend);
      params.set('moon', moonPhase);
      window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    }, 800);
  }

  function reset() {
    setStep(1);
    setSpecies('');
    setState('');
    setWaterBody({ type: 'medium-lake', clarity: 'stained', coverType: 'mixed', depthAvailable: 'medium' });
    setWaterTemp(65);
    setMonth(new Date().getMonth() + 1);
    setHourOfDay(7);
    setWeather({ sky: 'partly-cloudy', wind: 'light', windDirection: 'S', frontalSystem: 'stable', pressureTrend: 'steady' });
    setMoonPhase(getMoonPhase(new Date()));
    setResult(null);
    setGuideText(null);
    setGuideLoading(false);
    setSearchQuery('');
    window.history.replaceState({}, '', window.location.pathname);
  }

  function goBack() {
    if (step > 1 && step <= 8) setStep(step - 1);
    if (step === 9) setStep(7);
  }

  // Matching products for results
  const matchingProducts = useMemo(() => {
    if (!result) return [];
    const tags = [
      species,
      result.primary.technique.slug,
      result.alternate.technique.slug,
      ...result.primary.lure.tags,
      result.primary.line.type.toLowerCase(),
      ...result.primary.rodReel.tags,
    ];
    return getMatchingProducts(tags, 3).filter((p) => p.affiliateUrl !== '');
  }, [result, species]);

  const tempColor =
    waterTemp < 50 ? 'text-blue-500' : waterTemp <= 70 ? 'text-green-600' : 'text-red-500';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'The Guide — Fishing Recommendation Tool',
    description:
      'Get personalized fishing recommendations based on species, water conditions, weather, and moon phase. We\'ll tell you exactly what technique, bait, and gear to use.',
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
      name: 'HOOKED',
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
            The Guide
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Tell us your species, conditions, and we&apos;ll build a complete game plan — technique, lure, gear, and feeding windows.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress indicator */}
        {step < 9 && !loading && (
          <div className="flex items-center justify-center gap-1.5 mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((s) => (
              <div key={s} className="flex items-center gap-1.5">
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    s < step
                      ? 'bg-copper-500'
                      : s === step
                      ? 'ring-2 ring-copper-500 ring-offset-2 bg-copper-500'
                      : 'bg-gray-300'
                  }`}
                />
                {s < 8 && (
                  <div
                    className={`w-4 h-0.5 transition-colors duration-300 ${
                      s < step ? 'bg-copper-500' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        {/* Back button */}
        {step > 1 && step <= 8 && !loading && (
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-copper-500 focus:border-transparent text-water-900 bg-white"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {filteredSpecies.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => {
                    setSpecies(s.slug);
                    setSearchQuery('');
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
                  {POPULAR_SLUGS.includes(s.slug) && !searchQuery && (
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-copper-500 focus:border-transparent text-water-900 bg-white"
              />
            </div>

            <div className="max-h-72 overflow-y-auto rounded-lg border border-gray-200 bg-white mb-4">
              {filteredStates.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => {
                    setState(s.slug);
                    setSearchQuery('');
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
                setSearchQuery('');
                setStep(3);
              }}
              className="w-full py-3 rounded-lg border-2 border-dashed border-gray-300 text-gray-500 hover:border-copper-400 hover:text-copper-600 transition-colors font-medium"
            >
              Skip — I don&apos;t want regulation info
            </button>
          </div>
        )}

        {/* STEP 3: Water Details */}
        {step === 3 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="font-heading text-2xl font-bold text-water-900 mb-2">
              Tell us about the water
            </h2>
            <p className="text-gray-600 mb-8">Describe the body of water you&apos;ll be fishing.</p>

            {/* 3a: Water Body Type */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-water-800 mb-3">Water Body Type</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {([
                  { value: 'pond' as WaterBodyType, label: 'Pond', icon: CircleDot },
                  { value: 'small-lake' as WaterBodyType, label: 'Small Lake', icon: Waves },
                  { value: 'medium-lake' as WaterBodyType, label: 'Medium Lake', icon: Waves },
                  { value: 'large-reservoir' as WaterBodyType, label: 'Large Reservoir', icon: Maximize2 },
                  { value: 'major-reservoir' as WaterBodyType, label: 'Major Reservoir', icon: Maximize2 },
                  { value: 'creek' as WaterBodyType, label: 'Creek', icon: Droplets },
                  { value: 'small-river' as WaterBodyType, label: 'Small River', icon: Navigation },
                  { value: 'large-river' as WaterBodyType, label: 'Large River', icon: MoveHorizontal },
                  { value: 'saltwater-inshore' as WaterBodyType, label: 'Saltwater Inshore', icon: Anchor },
                  { value: 'saltwater-offshore' as WaterBodyType, label: 'Saltwater Offshore', icon: Compass },
                  { value: 'canal' as WaterBodyType, label: 'Canal', icon: Minimize2 },
                ]).map((w) => {
                  const Icon = w.icon;
                  const selected = waterBody.type === w.value;
                  return (
                    <button
                      key={w.value}
                      onClick={() => setWaterBody({ ...waterBody, type: w.value })}
                      className={`flex flex-col items-center gap-1.5 p-3 rounded-lg border-2 transition-all duration-200 text-center ${
                        selected
                          ? 'border-copper-500 bg-copper-50 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-copper-300'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${selected ? 'text-copper-600' : 'text-water-500'}`} />
                      <span className={`text-xs font-medium leading-tight ${selected ? 'text-copper-700' : 'text-water-900'}`}>
                        {w.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3b: Water Clarity */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-water-800 mb-3">Water Clarity</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {([
                  { value: 'crystal-clear' as WaterClarity, label: 'Crystal Clear', sub: '8+ ft visibility', color: 'bg-sky-50 border-sky-200 text-sky-800' },
                  { value: 'clear' as WaterClarity, label: 'Clear', sub: '4-8 ft visibility', color: 'bg-blue-50 border-blue-200 text-blue-800' },
                  { value: 'stained' as WaterClarity, label: 'Stained', sub: '1-4 ft visibility', color: 'bg-amber-50 border-amber-200 text-amber-800' },
                  { value: 'muddy' as WaterClarity, label: 'Muddy', sub: '<1 ft visibility', color: 'bg-orange-50 border-orange-200 text-orange-900' },
                ]).map((c) => {
                  const selected = waterBody.clarity === c.value;
                  return (
                    <button
                      key={c.value}
                      onClick={() => setWaterBody({ ...waterBody, clarity: c.value })}
                      className={`flex flex-col items-center gap-1 p-4 rounded-lg border-2 transition-all duration-200 ${
                        selected
                          ? 'border-copper-500 bg-copper-50 shadow-sm'
                          : `${c.color} hover:border-copper-300`
                      }`}
                    >
                      <span className={`font-semibold text-sm ${selected ? 'text-copper-700' : ''}`}>{c.label}</span>
                      <span className={`text-xs ${selected ? 'text-copper-600' : 'opacity-70'}`}>{c.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3c: Cover Type */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-water-800 mb-3">Primary Cover</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {([
                  { value: 'grass' as CoverType, label: 'Grass / Vegetation', icon: TreePine },
                  { value: 'wood' as CoverType, label: 'Wood / Timber', icon: TreePine },
                  { value: 'rock' as CoverType, label: 'Rock', icon: Target },
                  { value: 'docks' as CoverType, label: 'Docks / Man-made', icon: Home },
                  { value: 'open-water' as CoverType, label: 'Open Water', icon: Waves },
                  { value: 'mixed' as CoverType, label: 'Mixed', icon: CircleDot },
                ]).map((c) => {
                  const Icon = c.icon;
                  const selected = waterBody.coverType === c.value;
                  return (
                    <button
                      key={c.value}
                      onClick={() => setWaterBody({ ...waterBody, coverType: c.value })}
                      className={`flex flex-col items-center gap-1.5 p-3 rounded-lg border-2 transition-all duration-200 ${
                        selected
                          ? 'border-copper-500 bg-copper-50 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-copper-300'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${selected ? 'text-copper-600' : 'text-water-500'}`} />
                      <span className={`text-xs font-medium text-center leading-tight ${selected ? 'text-copper-700' : 'text-water-900'}`}>
                        {c.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3d: Depth Available */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-water-800 mb-3">Depth Available</h3>
              <div className="grid grid-cols-3 gap-3">
                {([
                  { value: 'shallow' as DepthAvailable, label: 'Shallow', sub: 'Under 10 ft' },
                  { value: 'medium' as DepthAvailable, label: 'Medium', sub: '10-30 ft' },
                  { value: 'deep' as DepthAvailable, label: 'Deep', sub: '30+ ft' },
                ]).map((d) => {
                  const selected = waterBody.depthAvailable === d.value;
                  return (
                    <button
                      key={d.value}
                      onClick={() => setWaterBody({ ...waterBody, depthAvailable: d.value })}
                      className={`flex flex-col items-center gap-1 p-4 rounded-lg border-2 transition-all duration-200 ${
                        selected
                          ? 'border-copper-500 bg-copper-50 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-copper-300'
                      }`}
                    >
                      <span className={`font-semibold ${selected ? 'text-copper-700' : 'text-water-900'}`}>{d.label}</span>
                      <span className={`text-xs ${selected ? 'text-copper-600' : 'text-gray-500'}`}>{d.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => setStep(4)}
              className="w-full py-4 rounded-xl bg-copper-500 hover:bg-copper-600 text-white font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Continue
            </button>
          </div>
        )}

        {/* STEP 4: Water Temperature */}
        {step === 4 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="font-heading text-2xl font-bold text-water-900 mb-2">
              What&apos;s the water temperature?
            </h2>
            <p className="text-gray-600 mb-6">
              Water temperature is the single biggest factor in fish behavior.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
              <div className="text-center mb-6">
                <span className={`font-heading text-5xl font-bold ${tempColor} transition-colors`}>
                  {waterTemp}
                </span>
                <span className={`text-2xl font-semibold ${tempColor} ml-1`}>&deg;F</span>
              </div>

              <input
                type="range"
                min={30}
                max={90}
                value={waterTemp}
                onChange={(e) => setWaterTemp(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-copper-500"
              />

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>30&deg;F (Cold)</span>
                <span>60&deg;F (Moderate)</span>
                <span>90&deg;F (Warm)</span>
              </div>
            </div>

            <button
              onClick={() => setStep(5)}
              className="w-full py-4 rounded-xl bg-copper-500 hover:bg-copper-600 text-white font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Continue
            </button>
          </div>
        )}

        {/* STEP 5: When */}
        {step === 5 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="font-heading text-2xl font-bold text-water-900 mb-2">
              When are you fishing?
            </h2>
            <p className="text-gray-600 mb-6">Month and time of day affect feeding patterns and technique selection.</p>

            {/* Month selector */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-water-800 mb-3">Month</h3>
              <div className="grid grid-cols-6 gap-2">
                {MONTH_NAMES.map((m, i) => {
                  const monthNum = i + 1;
                  const selected = month === monthNum;
                  const isCurrent = currentMonth === monthNum;
                  return (
                    <button
                      key={m}
                      onClick={() => setMonth(monthNum)}
                      className={`relative py-3 rounded-lg border-2 font-medium text-sm transition-all duration-200 ${
                        selected
                          ? 'border-copper-500 bg-copper-50 text-copper-700 shadow-sm'
                          : isCurrent
                          ? 'border-copper-300 bg-white text-water-900'
                          : 'border-gray-200 bg-white text-water-900 hover:border-copper-300'
                      }`}
                    >
                      {m}
                      {isCurrent && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-copper-500 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time of day slider */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-water-800 mb-3">Time of Day</h3>
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="text-center mb-4">
                  <span className="font-heading text-3xl font-bold text-water-900">
                    {formatHour(hourOfDay)}
                  </span>
                </div>
                <input
                  type="range"
                  min={4}
                  max={23}
                  value={hourOfDay}
                  onChange={(e) => setHourOfDay(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-copper-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>4:00 AM</span>
                  <span>12:00 PM</span>
                  <span>11:00 PM</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setStep(6)}
              className="w-full py-4 rounded-xl bg-copper-500 hover:bg-copper-600 text-white font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Continue
            </button>
          </div>
        )}

        {/* STEP 6: Weather Conditions */}
        {step === 6 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="font-heading text-2xl font-bold text-water-900 mb-2">
              What are the conditions?
            </h2>
            <p className="text-gray-600 mb-8">Weather has a major impact on fish activity and feeding patterns.</p>

            {/* 6a: Sky */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-water-800 mb-3">Sky Conditions</h3>
              <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                {([
                  { value: 'clear' as SkyCondition, label: 'Clear / Sunny', icon: Sun },
                  { value: 'partly-cloudy' as SkyCondition, label: 'Partly Cloudy', icon: CloudSun },
                  { value: 'overcast' as SkyCondition, label: 'Overcast', icon: Cloud },
                  { value: 'light-rain' as SkyCondition, label: 'Light Rain', icon: CloudRain },
                  { value: 'heavy-rain' as SkyCondition, label: 'Heavy Rain', icon: CloudLightning },
                  { value: 'snow' as SkyCondition, label: 'Snow', icon: Snowflake },
                  { value: 'fog' as SkyCondition, label: 'Fog', icon: CloudFog },
                ]).map((s) => {
                  const Icon = s.icon;
                  const selected = weather.sky === s.value;
                  return (
                    <button
                      key={s.value}
                      onClick={() => setWeather({ ...weather, sky: s.value })}
                      className={`flex flex-col items-center gap-1.5 p-3 rounded-lg border-2 transition-all duration-200 ${
                        selected
                          ? 'border-copper-500 bg-copper-50 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-copper-300'
                      }`}
                    >
                      <Icon className={`w-6 h-6 ${selected ? 'text-copper-600' : 'text-water-500'}`} />
                      <span className={`text-[10px] font-medium text-center leading-tight ${selected ? 'text-copper-700' : 'text-water-900'}`}>
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 6b: Wind Speed */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-water-800 mb-3">Wind Speed</h3>
              <div className="grid grid-cols-4 gap-3">
                {([
                  { value: 'calm' as WindSpeed, label: 'Calm', sub: '0-5 mph' },
                  { value: 'light' as WindSpeed, label: 'Light', sub: '5-10 mph' },
                  { value: 'moderate' as WindSpeed, label: 'Moderate', sub: '10-20 mph' },
                  { value: 'strong' as WindSpeed, label: 'Strong', sub: '20+ mph' },
                ]).map((w) => {
                  const selected = weather.wind === w.value;
                  return (
                    <button
                      key={w.value}
                      onClick={() => setWeather({ ...weather, wind: w.value })}
                      className={`flex flex-col items-center gap-1.5 p-4 rounded-lg border-2 transition-all duration-200 ${
                        selected
                          ? 'border-copper-500 bg-copper-50 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-copper-300'
                      }`}
                    >
                      <Wind className={`w-5 h-5 ${selected ? 'text-copper-600' : 'text-water-500'}`} />
                      <span className={`font-semibold text-sm ${selected ? 'text-copper-700' : 'text-water-900'}`}>{w.label}</span>
                      <span className={`text-xs ${selected ? 'text-copper-600' : 'text-gray-500'}`}>{w.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 6c: Wind Direction */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-water-800 mb-3">Wind Direction</h3>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {(['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'] as WindDirection[]).map((dir) => {
                  const selected = weather.windDirection === dir;
                  return (
                    <button
                      key={dir}
                      onClick={() => setWeather({ ...weather, windDirection: dir })}
                      className={`py-3 rounded-lg border-2 font-semibold text-sm transition-all duration-200 ${
                        selected
                          ? 'border-copper-500 bg-copper-50 text-copper-700 shadow-sm'
                          : 'border-gray-200 bg-white text-water-900 hover:border-copper-300'
                      }`}
                    >
                      {dir}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 6d: Frontal System */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-water-800 mb-3">Frontal System</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {([
                  { value: 'pre-frontal' as FrontalSystem, label: 'Pre-Frontal', sub: 'Storm approaching', colorClass: 'bg-yellow-50 border-yellow-300' },
                  { value: 'post-frontal' as FrontalSystem, label: 'Post-Frontal', sub: 'Bluebird after storm', colorClass: 'bg-blue-50 border-blue-300' },
                  { value: 'stable' as FrontalSystem, label: 'Stable', sub: 'No change expected', colorClass: 'bg-green-50 border-green-300' },
                  { value: 'during-front' as FrontalSystem, label: 'During Front', sub: 'Front passing through', colorClass: 'bg-red-50 border-red-300' },
                ]).map((f) => {
                  const selected = weather.frontalSystem === f.value;
                  return (
                    <button
                      key={f.value}
                      onClick={() => setWeather({ ...weather, frontalSystem: f.value })}
                      className={`flex flex-col items-center gap-1 p-4 rounded-lg border-2 transition-all duration-200 ${
                        selected
                          ? 'border-copper-500 bg-copper-50 shadow-sm'
                          : `${f.colorClass} hover:border-copper-300`
                      }`}
                    >
                      <span className={`font-semibold text-sm ${selected ? 'text-copper-700' : 'text-water-900'}`}>{f.label}</span>
                      <span className={`text-xs text-center ${selected ? 'text-copper-600' : 'text-gray-600'}`}>{f.sub}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 6e: Pressure Trend */}
            <div className="mb-8">
              <h3 className="font-heading text-lg font-semibold text-water-800 mb-3">Pressure Trend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {([
                  { value: 'rising' as PressureTrend, label: 'Rising', icon: TrendingUp },
                  { value: 'falling' as PressureTrend, label: 'Falling', icon: TrendingDown },
                  { value: 'steady' as PressureTrend, label: 'Steady', icon: Minus },
                  { value: 'rapidly-falling' as PressureTrend, label: 'Rapidly Falling', icon: ChevronsDown },
                ]).map((p) => {
                  const Icon = p.icon;
                  const selected = weather.pressureTrend === p.value;
                  return (
                    <button
                      key={p.value}
                      onClick={() => setWeather({ ...weather, pressureTrend: p.value })}
                      className={`flex flex-col items-center gap-1.5 p-4 rounded-lg border-2 transition-all duration-200 ${
                        selected
                          ? 'border-copper-500 bg-copper-50 shadow-sm'
                          : 'border-gray-200 bg-white hover:border-copper-300'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${selected ? 'text-copper-600' : 'text-water-500'}`} />
                      <span className={`font-semibold text-sm ${selected ? 'text-copper-700' : 'text-water-900'}`}>{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => setStep(7)}
              className="w-full py-4 rounded-xl bg-copper-500 hover:bg-copper-600 text-white font-bold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Continue
            </button>
          </div>
        )}

        {/* STEP 7: Moon Phase */}
        {step === 7 && (
          <div className="animate-in fade-in duration-300">
            <h2 className="font-heading text-2xl font-bold text-water-900 mb-2">
              Moon phase (optional)
            </h2>
            <p className="text-gray-600 mb-6">
              Moon phase influences feeding activity. We&apos;ve auto-detected today&apos;s phase.
            </p>

            <div className="grid grid-cols-4 gap-3 mb-8">
              {([
                { value: 'new' as MoonPhase, label: 'New', emoji: '\uD83C\uDF11' },
                { value: 'waxing-crescent' as MoonPhase, label: 'Waxing Crescent', emoji: '\uD83C\uDF12' },
                { value: 'first-quarter' as MoonPhase, label: 'First Quarter', emoji: '\uD83C\uDF13' },
                { value: 'waxing-gibbous' as MoonPhase, label: 'Waxing Gibbous', emoji: '\uD83C\uDF14' },
                { value: 'full' as MoonPhase, label: 'Full', emoji: '\uD83C\uDF15' },
                { value: 'waning-gibbous' as MoonPhase, label: 'Waning Gibbous', emoji: '\uD83C\uDF16' },
                { value: 'last-quarter' as MoonPhase, label: 'Last Quarter', emoji: '\uD83C\uDF17' },
                { value: 'waning-crescent' as MoonPhase, label: 'Waning Crescent', emoji: '\uD83C\uDF18' },
              ]).map((m) => {
                const selected = moonPhase === m.value;
                const isDetected = getMoonPhase(new Date()) === m.value;
                return (
                  <button
                    key={m.value}
                    onClick={() => setMoonPhase(m.value)}
                    className={`relative flex flex-col items-center gap-1.5 p-4 rounded-lg border-2 transition-all duration-200 ${
                      selected
                        ? 'border-copper-500 bg-copper-50 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-copper-300'
                    }`}
                  >
                    <span className="text-2xl">{m.emoji}</span>
                    <span className={`text-xs font-medium text-center leading-tight ${selected ? 'text-copper-700' : 'text-water-900'}`}>
                      {m.label}
                    </span>
                    {isDetected && (
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-copper-500 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-xl bg-copper-500 hover:bg-copper-600 text-white font-bold text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Target className="w-5 h-5" />
              Get My Recommendation
            </button>

            <button
              onClick={() => {
                handleSubmit();
              }}
              className="w-full mt-3 py-2 text-gray-500 hover:text-copper-600 text-sm font-medium transition-colors"
            >
              Skip moon phase
            </button>
          </div>
        )}

        {/* STEP 8: not used as a step — reserved for future */}

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

        {/* STEP 9: Results */}
        {step === 9 && result && !loading && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Back to edit */}
            <button
              onClick={() => setStep(7)}
              className="flex items-center gap-1 text-water-600 hover:text-water-800 mb-4 text-sm font-medium transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Adjust inputs
            </button>

            {/* Confidence Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4 ${
              result.confidence === 'very-high'
                ? 'bg-green-100 text-green-800'
                : result.confidence === 'high'
                ? 'bg-green-50 text-green-700'
                : result.confidence === 'medium'
                ? 'bg-amber-100 text-amber-800'
                : 'bg-gray-100 text-gray-800'
            }`}>
              <CheckCircle2 className="w-4 h-4" />
              {result.confidence === 'very-high' ? 'Very High Confidence' : result.confidence === 'high' ? 'High Confidence' : result.confidence === 'medium' ? 'Medium Confidence' : 'Low Confidence'}
            </div>
            {result.confidenceNotes && (
              <p className="text-sm text-gray-600 mb-6">{result.confidenceNotes}</p>
            )}

            {/* Warnings */}
            {result.warnings.length > 0 && (
              <div className="space-y-2 mb-6">
                {result.warnings.map((w, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-red-800">{w}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              {/* Results header */}
              <div className="bg-gradient-to-r from-water-800 to-water-700 px-6 py-5">
                <p className="text-white/70 text-sm font-medium">Recommendation for</p>
                <h2 className="font-heading text-2xl font-bold text-white">
                  {selectedSpecies?.name ?? species}
                </h2>
              </div>

              <div className="p-6 space-y-6">
                {/* Conversational Guide Recommendation */}
                <div className="bg-water-50 dark:bg-water-800/50 border border-water-200 dark:border-water-700 rounded-xl p-5">
                  <p className="text-xs font-bold text-copper-500 uppercase tracking-wider mb-3">
                    Your Guide Says
                  </p>
                  {guideLoading ? (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="inline-block w-2 h-2 bg-copper-400 rounded-full animate-pulse" />
                      Your guide is analyzing conditions...
                    </div>
                  ) : guideText ? (
                    <p className="text-water-800 dark:text-sand-100 leading-relaxed italic">
                      &ldquo;{guideText}&rdquo;
                    </p>
                  ) : (
                    <p className="text-water-700 dark:text-sand-200 leading-relaxed italic text-sm">
                      &ldquo;{result.primary.technique.why} Go with a {result.primary.lure.specificLure} in {result.primary.lure.color} — it&apos;s your best bet in these conditions.&rdquo;
                    </p>
                  )}
                </div>

                {/* Primary Technique */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                    Recommended Technique
                  </p>
                  <h3 className="font-heading text-2xl font-bold text-water-900 mb-1">
                    Use: {result.primary.technique.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{result.primary.technique.why}</p>
                  <Link
                    href={`/techniques/${result.primary.technique.slug}`}
                    className="inline-flex items-center gap-1 text-copper-600 hover:text-copper-700 font-medium text-sm transition-colors"
                  >
                    Full {result.primary.technique.name} Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Presentation */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Presentation
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-sand-50 border border-sand-200 rounded-lg p-4 text-center">
                      <p className="text-xs text-gray-500 font-medium mb-1">Speed</p>
                      <p className="font-semibold text-water-900">{result.primary.presentation.speed}</p>
                    </div>
                    <div className="bg-sand-50 border border-sand-200 rounded-lg p-4 text-center">
                      <p className="text-xs text-gray-500 font-medium mb-1">Action</p>
                      <p className="font-semibold text-water-900">{result.primary.presentation.action}</p>
                    </div>
                    <div className="bg-sand-50 border border-sand-200 rounded-lg p-4 text-center">
                      <p className="text-xs text-gray-500 font-medium mb-1">Depth</p>
                      <p className="font-semibold text-water-900">{result.primary.presentation.depth}</p>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* Lure / Bait */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Lure / Bait
                  </p>
                  <div className="bg-white border border-gray-200 rounded-lg p-5 mb-3">
                    <p className="text-xs font-bold text-copper-500 uppercase mb-1">Primary</p>
                    <p className="font-heading font-bold text-water-900 text-lg">{result.primary.lure.specificLure}</p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-sm">
                      <div>
                        <span className="text-gray-500">Type:</span>{' '}
                        <span className="font-medium text-water-900">{result.primary.lure.type}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Color:</span>{' '}
                        <span className="font-medium text-water-900">{result.primary.lure.color}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Size:</span>{' '}
                        <span className="font-medium text-water-900">{result.primary.lure.size}</span>
                      </div>
                    </div>
                    {result.primary.lure.why && (
                      <p className="text-sm text-gray-600 mt-2">{result.primary.lure.why}</p>
                    )}
                  </div>
                  <div className="bg-sand-50 border border-sand-200 rounded-lg p-4">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-1">Alternate</p>
                    <p className="font-semibold text-water-900">{result.alternate.lure.specificLure}</p>
                    <p className="text-sm text-gray-600">
                      {result.alternate.lure.type} &mdash; {result.alternate.lure.color}, {result.alternate.lure.size}
                    </p>
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* Line & Rod/Reel */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Line */}
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Line
                    </p>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 h-full">
                      <div className="flex items-start gap-3">
                        <Anchor className="w-5 h-5 text-copper-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-water-900">
                            {result.primary.line.type} &mdash; {result.primary.line.weight}
                          </p>
                          {result.primary.line.why && (
                            <p className="text-sm text-gray-600 mt-1">{result.primary.line.why}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rod & Reel */}
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Rod &amp; Reel
                    </p>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 h-full">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                        <div>
                          <span className="text-gray-500">Length:</span>{' '}
                          <span className="font-medium text-water-900">{result.primary.rodReel.rodLength}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Power:</span>{' '}
                          <span className="font-medium text-water-900">{result.primary.rodReel.rodPower}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Action:</span>{' '}
                          <span className="font-medium text-water-900">{result.primary.rodReel.rodAction}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Reel:</span>{' '}
                          <span className="font-medium text-water-900">{result.primary.rodReel.reelType}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Speed:</span>{' '}
                          <span className="font-medium text-water-900">{result.primary.rodReel.reelSpeed}</span>
                        </div>
                      </div>
                      {result.primary.rodReel.why && (
                        <p className="text-sm text-gray-600 mt-2">{result.primary.rodReel.why}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hook */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Hook
                  </p>
                  <div className="flex items-center gap-3 bg-sand-50 border border-sand-200 rounded-lg p-4">
                    <Target className="w-5 h-5 text-copper-500 flex-shrink-0" />
                    <p className="font-semibold text-water-900">
                      {result.primary.hookType} &mdash; Size {result.primary.hookSize}
                    </p>
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* Target Zone */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Target Zone
                  </p>
                  <div className="bg-water-50 border border-water-200 rounded-xl p-5">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-water-100 flex items-center justify-center mx-auto mb-2">
                          <Waves className="w-5 h-5 text-water-600" />
                        </div>
                        <p className="text-xs text-gray-500 font-medium">Depth</p>
                        <p className="font-semibold text-water-900">{result.primary.targetDepth}</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-water-100 flex items-center justify-center mx-auto mb-2">
                          <TreePine className="w-5 h-5 text-water-600" />
                        </div>
                        <p className="text-xs text-gray-500 font-medium">Structure</p>
                        <p className="font-semibold text-water-900">{result.primary.targetStructure}</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-water-100 flex items-center justify-center mx-auto mb-2">
                          <Compass className="w-5 h-5 text-water-600" />
                        </div>
                        <p className="text-xs text-gray-500 font-medium">Cast Direction</p>
                        <p className="font-semibold text-water-900">{result.primary.castDirection}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* Feeding Window */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Feeding Window
                  </p>
                  <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <p className="text-gray-700 mb-3">{result.feedingWindow.description}</p>
                    {result.feedingWindow.peakTimes.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-2">Peak Times</p>
                        <div className="flex flex-wrap gap-2">
                          {result.feedingWindow.peakTimes.map((t, i) => (
                            <span key={i} className="inline-flex items-center gap-1 bg-copper-50 text-copper-700 text-sm font-medium px-3 py-1 rounded-full border border-copper-200">
                              <Clock className="w-3.5 h-3.5" />
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {result.feedingWindow.moonFeedingPeriods && result.feedingWindow.moonFeedingPeriods.length > 0 && (
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase mb-2">Moon Feeding Periods</p>
                        <div className="flex flex-wrap gap-2">
                          {result.feedingWindow.moonFeedingPeriods.map((p, i) => (
                            <span key={i} className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full border border-indigo-200">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Technical Details */}
                {result.technicalDetails && (
                  <div className="mt-8 space-y-4">
                    {/* Rigging Details */}
                    <details className="group rounded-lg border border-sand-200 dark:border-water-700 overflow-hidden">
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-sand-50 dark:bg-water-800 font-heading font-semibold text-lg text-water-800 dark:text-sand-100 hover:bg-sand-100 dark:hover:bg-water-700">
                        <span>Rigging Details</span>
                        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-6 py-4 space-y-3 text-sm">
                        <div className="grid grid-cols-2 gap-4">
                          <div><span className="font-semibold text-water-600 dark:text-sand-300">Hook:</span> {result.technicalDetails.rigging.hookType}</div>
                          <div><span className="font-semibold text-water-600 dark:text-sand-300">Size:</span> {result.technicalDetails.rigging.hookSize}</div>
                          <div><span className="font-semibold text-water-600 dark:text-sand-300">Weight:</span> {result.technicalDetails.rigging.weightType} — {result.technicalDetails.rigging.weightSize}</div>
                          {result.technicalDetails.rigging.leaderLength && (
                            <div><span className="font-semibold text-water-600 dark:text-sand-300">Leader:</span> {result.technicalDetails.rigging.leaderLength}</div>
                          )}
                        </div>
                        <p className="text-water-600 dark:text-sand-300 italic">{result.technicalDetails.rigging.weightNotes}</p>
                        <h4 className="font-heading font-semibold mt-4 text-water-800 dark:text-sand-100">How to Rig It</h4>
                        <ol className="list-decimal list-inside space-y-2 text-water-700 dark:text-sand-200">
                          {result.technicalDetails.rigging.riggingSteps.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </details>

                    {/* Presentation */}
                    <details className="group rounded-lg border border-sand-200 dark:border-water-700 overflow-hidden">
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-sand-50 dark:bg-water-800 font-heading font-semibold text-lg text-water-800 dark:text-sand-100 hover:bg-sand-100 dark:hover:bg-water-700">
                        <span>Presentation Guide</span>
                        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-6 py-4 space-y-3 text-sm text-water-700 dark:text-sand-200">
                        <div className="grid gap-3">
                          <div><span className="font-semibold text-water-800 dark:text-sand-100">Cast:</span> {result.technicalDetails.presentation.castTarget}</div>
                          <div><span className="font-semibold text-water-800 dark:text-sand-100">Angle:</span> {result.technicalDetails.presentation.castAngle}</div>
                          <div><span className="font-semibold text-water-800 dark:text-sand-100">The Fall:</span> {result.technicalDetails.presentation.letItFall}</div>
                          <div><span className="font-semibold text-water-800 dark:text-sand-100">Retrieve:</span> {result.technicalDetails.presentation.retrieve}</div>
                          <div><span className="font-semibold text-water-800 dark:text-sand-100">Speed:</span> {result.technicalDetails.presentation.speed}</div>
                          <div><span className="font-semibold text-water-800 dark:text-sand-100">Cadence:</span> {result.technicalDetails.presentation.cadence}</div>
                          <div><span className="font-semibold text-water-800 dark:text-sand-100">Hookset:</span> {result.technicalDetails.presentation.hookset}</div>
                          <div><span className="font-semibold text-water-800 dark:text-sand-100">After hookset:</span> {result.technicalDetails.presentation.afterHookset}</div>
                        </div>
                        <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
                          <p className="font-semibold text-amber-800 dark:text-amber-300">Common mistake:</p>
                          <p className="text-amber-700 dark:text-amber-400">{result.technicalDetails.presentation.commonMistake}</p>
                        </div>
                      </div>
                    </details>

                    {/* Color Strategy */}
                    <details className="group rounded-lg border border-sand-200 dark:border-water-700 overflow-hidden">
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-sand-50 dark:bg-water-800 font-heading font-semibold text-lg text-water-800 dark:text-sand-100 hover:bg-sand-100 dark:hover:bg-water-700">
                        <span>Color Strategy</span>
                        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-6 py-4 space-y-3 text-sm text-water-700 dark:text-sand-200">
                        <div><span className="font-semibold text-water-800 dark:text-sand-100">Primary:</span> {result.technicalDetails.colorStrategy.primaryColor} — {result.technicalDetails.colorStrategy.whyThisColor}</div>
                        <div><span className="font-semibold text-water-800 dark:text-sand-100">Alternate:</span> {result.technicalDetails.colorStrategy.alternateColor} — {result.technicalDetails.colorStrategy.whenToSwitch}</div>
                        <h4 className="font-heading font-semibold mt-3 text-water-800 dark:text-sand-100">Color Rules</h4>
                        <ul className="space-y-1">
                          {result.technicalDetails.colorStrategy.colorRules.map((rule, i) => (
                            <li key={i} className="flex items-start gap-2"><span className="text-copper-500 mt-0.5">•</span> {rule}</li>
                          ))}
                        </ul>
                      </div>
                    </details>

                    {/* Depth & Positioning */}
                    <details className="group rounded-lg border border-sand-200 dark:border-water-700 overflow-hidden">
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-sand-50 dark:bg-water-800 font-heading font-semibold text-lg text-water-800 dark:text-sand-100 hover:bg-sand-100 dark:hover:bg-water-700">
                        <span>Depth & Positioning</span>
                        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-6 py-4 space-y-3 text-sm text-water-700 dark:text-sand-200">
                        <div><span className="font-semibold text-water-800 dark:text-sand-100">Target depth:</span> {result.technicalDetails.depthStrategy.targetDepth}</div>
                        <div><span className="font-semibold text-water-800 dark:text-sand-100">How to find it:</span> {result.technicalDetails.depthStrategy.howToFindIt}</div>
                        <div><span className="font-semibold text-water-800 dark:text-sand-100">Structure:</span> {result.technicalDetails.depthStrategy.structure}</div>
                        <div><span className="font-semibold text-water-800 dark:text-sand-100">Positioning:</span> {result.technicalDetails.depthStrategy.positioning}</div>
                        <div><span className="font-semibold text-water-800 dark:text-sand-100">Visual cues:</span> {result.technicalDetails.depthStrategy.visualCues}</div>
                      </div>
                    </details>

                    {/* Rod & Reel Why */}
                    <details className="group rounded-lg border border-sand-200 dark:border-water-700 overflow-hidden">
                      <summary className="flex items-center justify-between px-6 py-4 cursor-pointer bg-sand-50 dark:bg-water-800 font-heading font-semibold text-lg text-water-800 dark:text-sand-100 hover:bg-sand-100 dark:hover:bg-water-700">
                        <span>Why This Setup</span>
                        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-6 py-4 space-y-3 text-sm text-water-700 dark:text-sand-200">
                        <div><span className="font-semibold text-water-800 dark:text-sand-100">Rod:</span> {result.technicalDetails.rodReelSetup.whyThisRod}</div>
                        <div><span className="font-semibold text-water-800 dark:text-sand-100">Reel:</span> {result.technicalDetails.rodReelSetup.whyThisRatio}</div>
                        <div><span className="font-semibold text-water-800 dark:text-sand-100">Line:</span> {result.technicalDetails.lineSetup.mainLine.whyThisWeight}</div>
                        {result.technicalDetails.lineSetup.leader && (
                          <div><span className="font-semibold text-water-800 dark:text-sand-100">Leader:</span> {result.technicalDetails.lineSetup.leader.whyLeader}</div>
                        )}
                        <div><span className="font-semibold text-water-800 dark:text-sand-100">Size:</span> {result.technicalDetails.sizeStrategy.whyThisSize}</div>
                        <p className="text-xs text-water-500 dark:text-sand-300 italic mt-2">Upsize when: {result.technicalDetails.sizeStrategy.upsizeWhen}</p>
                        <p className="text-xs text-water-500 dark:text-sand-300 italic">Downsize when: {result.technicalDetails.sizeStrategy.downsizeWhen}</p>
                      </div>
                    </details>
                  </div>
                )}

                <Link href={`/rig-builder?from=guide&species=${species}`} className="inline-flex items-center gap-2 mt-4 text-copper-500 hover:text-copper-600 font-medium">
                  Build This Rig <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Pro Tips */}
                {result.tips.length > 0 && (
                  <div className="bg-sand-50 dark:bg-water-800/30 border border-sand-200 dark:border-water-700 rounded-xl p-5">
                    <p className="text-xs font-bold text-copper-500 uppercase tracking-wider mb-3">
                      Pro Tips
                    </p>
                    <ol className="space-y-3">
                      {result.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-sand-200">
                          <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-copper-100 dark:bg-copper-900/40 text-copper-600 dark:text-copper-400 text-xs font-bold mt-0.5">
                            {i + 1}
                          </span>
                          <span className="text-sm leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ol>
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
                        &#9888;&#65039; Always verify current regulations with your state agency before fishing.
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
                    View Species Guide <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                <Link
                  href={`/techniques/${result.primary.technique.slug}`}
                  className="flex-1 py-3 rounded-lg border-2 border-copper-400 text-copper-700 hover:bg-copper-500 hover:text-white font-bold transition-colors flex items-center justify-center gap-2 text-center"
                >
                  View Technique Guide <ArrowRight className="w-4 h-4" />
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
