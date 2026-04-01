'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronLeft,
  Check,
  RotateCcw,
  Share2,
  ExternalLink,
  Fish,
  Crosshair,
  Anchor,
  Ruler,
  Waves,
} from 'lucide-react';
import { allSpecies } from '@/data/species';
import { getMatchingProducts } from '@/lib/affiliate-matcher';
import type { AffiliateProduct } from '@/data/types';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

/* ─── Species defaults ─── */
interface SpeciesDefaults {
  rodType: 'spinning' | 'baitcasting';
  rodLength: string;
  rodPower: string;
  rodAction: string;
  reelSize: string;
  lineType: string;
  lineWeight: string;
  hookType: string;
  hookSize: string;
  lureType: string;
  lureColor: string;
}

const speciesDefaults: Record<string, SpeciesDefaults> = {
  'largemouth-bass': { rodType: 'baitcasting', rodLength: "7'0\"", rodPower: 'medium-heavy', rodAction: 'fast', reelSize: '3000', lineType: 'fluorocarbon', lineWeight: '12 lb', hookType: 'offset-worm', hookSize: '3/0', lureType: 'soft-plastic', lureColor: 'green-pumpkin' },
  'smallmouth-bass': { rodType: 'spinning', rodLength: "6'6\"", rodPower: 'medium', rodAction: 'fast', reelSize: '2500', lineType: 'fluorocarbon', lineWeight: '8 lb', hookType: 'offset-worm', hookSize: '2/0', lureType: 'soft-plastic', lureColor: 'green-pumpkin' },
  'spotted-bass': { rodType: 'spinning', rodLength: "6'6\"", rodPower: 'medium', rodAction: 'fast', reelSize: '2500', lineType: 'fluorocarbon', lineWeight: '8 lb', hookType: 'offset-worm', hookSize: '2/0', lureType: 'soft-plastic', lureColor: 'green-pumpkin' },
  'rainbow-trout': { rodType: 'spinning', rodLength: "6'6\"", rodPower: 'medium-light', rodAction: 'fast', reelSize: '2000', lineType: 'fluorocarbon', lineWeight: '6 lb', hookType: 'aberdeen', hookSize: '#8', lureType: 'spinnerbait', lureColor: 'silver' },
  'brown-trout': { rodType: 'spinning', rodLength: "6'6\"", rodPower: 'medium-light', rodAction: 'fast', reelSize: '2000', lineType: 'fluorocarbon', lineWeight: '6 lb', hookType: 'aberdeen', hookSize: '#8', lureType: 'crankbait', lureColor: 'silver' },
  'brook-trout': { rodType: 'spinning', rodLength: "6'0\"", rodPower: 'ultra-light', rodAction: 'fast', reelSize: '1000', lineType: 'fluorocarbon', lineWeight: '4 lb', hookType: 'aberdeen', hookSize: '#10', lureType: 'spinnerbait', lureColor: 'silver' },
  'channel-catfish': { rodType: 'spinning', rodLength: "7'0\"", rodPower: 'medium-heavy', rodAction: 'moderate', reelSize: '4000', lineType: 'monofilament', lineWeight: '20 lb', hookType: 'circle', hookSize: '4/0', lureType: 'cut-bait', lureColor: 'natural' },
  'blue-catfish': { rodType: 'baitcasting', rodLength: "7'6\"", rodPower: 'heavy', rodAction: 'moderate', reelSize: '5000', lineType: 'monofilament', lineWeight: '30 lb', hookType: 'circle', hookSize: '5/0', lureType: 'cut-bait', lureColor: 'natural' },
  'flathead-catfish': { rodType: 'baitcasting', rodLength: "7'6\"", rodPower: 'heavy', rodAction: 'moderate', reelSize: '5000', lineType: 'monofilament', lineWeight: '30 lb', hookType: 'circle', hookSize: '5/0', lureType: 'live-bait', lureColor: 'natural' },
  'walleye': { rodType: 'spinning', rodLength: "6'6\"", rodPower: 'medium', rodAction: 'fast', reelSize: '2500', lineType: 'fluorocarbon', lineWeight: '8 lb', hookType: 'jig-head', hookSize: '1/0', lureType: 'soft-plastic', lureColor: 'chartreuse' },
  'redfish': { rodType: 'spinning', rodLength: "7'0\"", rodPower: 'medium', rodAction: 'fast', reelSize: '3000', lineType: 'braided', lineWeight: '15 lb', hookType: 'circle', hookSize: '3/0', lureType: 'soft-plastic', lureColor: 'chartreuse' },
  'crappie': { rodType: 'spinning', rodLength: "6'0\"", rodPower: 'ultra-light', rodAction: 'fast', reelSize: '1000', lineType: 'fluorocarbon', lineWeight: '4 lb', hookType: 'jig-head', hookSize: '#2', lureType: 'soft-plastic', lureColor: 'chartreuse' },
  'speckled-trout': { rodType: 'spinning', rodLength: "7'0\"", rodPower: 'medium', rodAction: 'fast', reelSize: '3000', lineType: 'braided', lineWeight: '10 lb', hookType: 'jig-head', hookSize: '1/0', lureType: 'soft-plastic', lureColor: 'chartreuse' },
  'bluegill': { rodType: 'spinning', rodLength: "6'0\"", rodPower: 'ultra-light', rodAction: 'fast', reelSize: '1000', lineType: 'monofilament', lineWeight: '4 lb', hookType: 'aberdeen', hookSize: '#6', lureType: 'live-bait', lureColor: 'natural' },
  'northern-pike': { rodType: 'baitcasting', rodLength: "7'0\"", rodPower: 'medium-heavy', rodAction: 'fast', reelSize: '4000', lineType: 'braided', lineWeight: '30 lb', hookType: 'treble', hookSize: '2/0', lureType: 'spinnerbait', lureColor: 'white' },
  'musky': { rodType: 'baitcasting', rodLength: "7'6\"", rodPower: 'heavy', rodAction: 'fast', reelSize: '5000', lineType: 'braided', lineWeight: '30 lb', hookType: 'treble', hookSize: '3/0', lureType: 'spinnerbait', lureColor: 'white' },
  'striped-bass': { rodType: 'spinning', rodLength: "7'0\"", rodPower: 'medium-heavy', rodAction: 'fast', reelSize: '4000', lineType: 'braided', lineWeight: '20 lb', hookType: 'circle', hookSize: '4/0', lureType: 'topwater', lureColor: 'white' },
  'white-bass': { rodType: 'spinning', rodLength: "6'6\"", rodPower: 'medium', rodAction: 'fast', reelSize: '2500', lineType: 'monofilament', lineWeight: '8 lb', hookType: 'jig-head', hookSize: '1/0', lureType: 'soft-plastic', lureColor: 'white' },
  'yellow-perch': { rodType: 'spinning', rodLength: "6'0\"", rodPower: 'ultra-light', rodAction: 'fast', reelSize: '1000', lineType: 'monofilament', lineWeight: '4 lb', hookType: 'aberdeen', hookSize: '#6', lureType: 'live-bait', lureColor: 'natural' },
  'sauger': { rodType: 'spinning', rodLength: "6'6\"", rodPower: 'medium', rodAction: 'fast', reelSize: '2500', lineType: 'fluorocarbon', lineWeight: '8 lb', hookType: 'jig-head', hookSize: '1/0', lureType: 'soft-plastic', lureColor: 'chartreuse' },
  'carp': { rodType: 'spinning', rodLength: "7'0\"", rodPower: 'medium-heavy', rodAction: 'moderate', reelSize: '4000', lineType: 'monofilament', lineWeight: '15 lb', hookType: 'circle', hookSize: '2/0', lureType: 'live-bait', lureColor: 'natural' },
  'flounder': { rodType: 'spinning', rodLength: "7'0\"", rodPower: 'medium', rodAction: 'fast', reelSize: '3000', lineType: 'braided', lineWeight: '15 lb', hookType: 'jig-head', hookSize: '2/0', lureType: 'soft-plastic', lureColor: 'white' },
  'snook': { rodType: 'spinning', rodLength: "7'0\"", rodPower: 'medium', rodAction: 'fast', reelSize: '3000', lineType: 'braided', lineWeight: '15 lb', hookType: 'jig-head', hookSize: '2/0', lureType: 'soft-plastic', lureColor: 'white' },
  'tarpon': { rodType: 'spinning', rodLength: "7'6\"", rodPower: 'heavy', rodAction: 'fast', reelSize: '5000', lineType: 'braided', lineWeight: '30 lb', hookType: 'circle', hookSize: '5/0', lureType: 'live-bait', lureColor: 'natural' },
  'grouper': { rodType: 'baitcasting', rodLength: "7'0\"", rodPower: 'heavy', rodAction: 'fast', reelSize: '5000', lineType: 'braided', lineWeight: '30 lb', hookType: 'circle', hookSize: '5/0', lureType: 'live-bait', lureColor: 'natural' },
  'red-snapper': { rodType: 'spinning', rodLength: "7'0\"", rodPower: 'medium-heavy', rodAction: 'fast', reelSize: '4000', lineType: 'braided', lineWeight: '20 lb', hookType: 'circle', hookSize: '4/0', lureType: 'cut-bait', lureColor: 'natural' },
  'king-mackerel': { rodType: 'spinning', rodLength: "7'0\"", rodPower: 'medium-heavy', rodAction: 'fast', reelSize: '4000', lineType: 'braided', lineWeight: '20 lb', hookType: 'treble', hookSize: '3/0', lureType: 'spinnerbait', lureColor: 'silver' },
  'mahi-mahi': { rodType: 'spinning', rodLength: "7'0\"", rodPower: 'medium-heavy', rodAction: 'fast', reelSize: '5000', lineType: 'braided', lineWeight: '30 lb', hookType: 'circle', hookSize: '4/0', lureType: 'live-bait', lureColor: 'natural' },
  'sheepshead': { rodType: 'spinning', rodLength: "7'0\"", rodPower: 'medium', rodAction: 'fast', reelSize: '3000', lineType: 'fluorocarbon', lineWeight: '15 lb', hookType: 'jig-head', hookSize: '1/0', lureType: 'live-bait', lureColor: 'natural' },
  'gar': { rodType: 'baitcasting', rodLength: "7'0\"", rodPower: 'medium-heavy', rodAction: 'fast', reelSize: '4000', lineType: 'braided', lineWeight: '20 lb', hookType: 'treble', hookSize: '2/0', lureType: 'topwater', lureColor: 'white' },
};

const fallbackDefaults: SpeciesDefaults = {
  rodType: 'spinning', rodLength: "7'0\"", rodPower: 'medium', rodAction: 'fast',
  reelSize: '2500', lineType: 'fluorocarbon', lineWeight: '10 lb',
  hookType: 'offset-worm', hookSize: '3/0', lureType: 'soft-plastic', lureColor: 'green-pumpkin',
};

/* ─── Constants ─── */
const POPULAR_SLUGS = [
  'largemouth-bass', 'crappie', 'walleye', 'redfish',
  'channel-catfish', 'rainbow-trout', 'smallmouth-bass', 'speckled-trout',
];

const ROD_LENGTHS = ["6'0\"", "6'6\"", "7'0\"", "7'6\""];
const ROD_POWERS = ['ultra-light', 'light', 'medium-light', 'medium', 'medium-heavy', 'heavy'];
const ROD_ACTIONS = ['slow', 'moderate', 'fast', 'extra-fast'];
const LINE_TYPES = ['monofilament', 'fluorocarbon', 'braided'];
const LINE_WEIGHTS = ['4 lb', '6 lb', '8 lb', '10 lb', '12 lb', '15 lb', '20 lb', '30 lb'];
const HOOK_TYPES = ['offset-worm', 'circle', 'treble', 'jig-head', 'aberdeen'];
const HOOK_SIZES = ['#10', '#8', '#6', '#4', '#2', '1/0', '2/0', '3/0', '4/0', '5/0'];
const LURE_TYPES = ['soft-plastic', 'crankbait', 'spinnerbait', 'topwater', 'jig', 'live-bait', 'cut-bait'];
const LURE_COLORS: { group: string; values: { value: string; label: string }[] }[] = [
  { group: 'Natural', values: [{ value: 'green-pumpkin', label: 'Green Pumpkin' }, { value: 'watermelon', label: 'Watermelon' }, { value: 'natural', label: 'Natural' }] },
  { group: 'Bright', values: [{ value: 'chartreuse', label: 'Chartreuse' }, { value: 'white', label: 'White' }] },
  { group: 'Dark', values: [{ value: 'black', label: 'Black' }, { value: 'black-blue', label: 'Black/Blue' }] },
  { group: 'Shad', values: [{ value: 'silver', label: 'Silver' }, { value: 'pearl', label: 'Pearl' }] },
];
const LURE_SIZES = ['small', 'medium', 'large'];
const WEIGHT_OPTIONS = ['none', '1/8 oz bullet', '1/4 oz bullet', '3/8 oz bullet', '1/2 oz bullet', 'egg sinker', 'split shot'];
const LEADER_OPTIONS = ['none', 'fluorocarbon-leader', 'wire-leader'];
const REEL_SIZES_SPINNING = ['1000', '2000', '2500', '3000', '4000', '5000'];
const REEL_SIZES_BAITCASTING = ['100', '200', '300'];

const TOTAL_STEPS = 6;

function label(s: string): string {
  return s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/* ─── Product Card ─── */
function ProductCard({ product }: { product: AffiliateProduct }) {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-sand-200 dark:border-water-700 bg-white dark:bg-water-800 p-4">
      <div>
        <p className="text-xs text-copper-500 font-medium">{product.brand}</p>
        <p className="font-medium text-sm mt-1">{product.name}</p>
        {product.price && <p className="text-sm text-muted-foreground mt-1">{product.price}</p>}
      </div>
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-md bg-copper-500 px-3 py-2 text-sm font-medium text-white hover:bg-copper-600 transition-colors"
      >
        Check Price <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

/* ─── Section wrapper ─── */
function StepSection({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-heading text-xl md:text-2xl font-bold">{title}</h2>
        {subtitle && <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

/* ─── Option button ─── */
function OptionButton({ selected, onClick, children, className = '' }: { selected: boolean; onClick: () => void; children: React.ReactNode; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg border-2 px-4 py-2.5 text-sm font-medium transition-all ${
        selected
          ? 'border-copper-500 bg-copper-50 dark:bg-copper-900/30 text-copper-700 dark:text-copper-300'
          : 'border-sand-200 dark:border-water-700 hover:border-copper-300 dark:hover:border-copper-700'
      } ${className}`}
    >
      {children}
    </button>
  );
}

/* ─── Main Component ─── */
export default function RigBuilderClient({ initialSpecies }: { initialSpecies?: string }) {
  const [step, setStep] = useState(1);
  const [species, setSpecies] = useState(initialSpecies || '');
  const [rodType, setRodType] = useState<'spinning' | 'baitcasting'>('spinning');
  const [rodLength, setRodLength] = useState("7'0\"");
  const [rodPower, setRodPower] = useState('medium');
  const [rodAction, setRodAction] = useState('fast');
  const [reelSize, setReelSize] = useState('2500');
  const [lineType, setLineType] = useState('fluorocarbon');
  const [lineWeight, setLineWeight] = useState('10 lb');
  const [hookType, setHookType] = useState('offset-worm');
  const [hookSize, setHookSize] = useState('3/0');
  const [lureType, setLureType] = useState('soft-plastic');
  const [lureColor, setLureColor] = useState('green-pumpkin');
  const [lureSize, setLureSize] = useState('medium');
  const [sinkerType, setSinkerType] = useState('none');
  const [leaderType, setLeaderType] = useState('none');
  const [showSummary, setShowSummary] = useState(false);
  const [copied, setCopied] = useState(false);
  const [fromGuide, setFromGuide] = useState(false);

  /* Read URL params on mount (only when no initialSpecies) */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);

    if (params.get('from') === 'guide') setFromGuide(true);

    const urlSpecies = initialSpecies || params.get('species') || '';
    if (urlSpecies) {
      setSpecies(urlSpecies);
      applyDefaults(urlSpecies);
      if (params.get('step')) {
        const s = parseInt(params.get('step')!, 10);
        if (s >= 1 && s <= TOTAL_STEPS) setStep(s);
      }
    }

    // restore other params if present
    if (params.get('rodType')) setRodType(params.get('rodType') as 'spinning' | 'baitcasting');
    if (params.get('rodLength')) setRodLength(params.get('rodLength')!);
    if (params.get('rodPower')) setRodPower(params.get('rodPower')!);
    if (params.get('rodAction')) setRodAction(params.get('rodAction')!);
    if (params.get('reelSize')) setReelSize(params.get('reelSize')!);
    if (params.get('lineType')) setLineType(params.get('lineType')!);
    if (params.get('lineWeight')) setLineWeight(params.get('lineWeight')!);
    if (params.get('hookType')) setHookType(params.get('hookType')!);
    if (params.get('hookSize')) setHookSize(params.get('hookSize')!);
    if (params.get('lureType')) setLureType(params.get('lureType')!);
    if (params.get('lureColor')) setLureColor(params.get('lureColor')!);
    if (params.get('lureSize')) setLureSize(params.get('lureSize')!);
    if (params.get('summary') === '1') setShowSummary(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Sync state to URL */
  const syncUrl = useCallback(() => {
    if (typeof window === 'undefined') return;
    const p = new URLSearchParams();
    if (species) p.set('species', species);
    p.set('rodType', rodType);
    p.set('rodLength', rodLength);
    p.set('rodPower', rodPower);
    p.set('rodAction', rodAction);
    p.set('reelSize', reelSize);
    p.set('lineType', lineType);
    p.set('lineWeight', lineWeight);
    p.set('hookType', hookType);
    p.set('hookSize', hookSize);
    p.set('lureType', lureType);
    p.set('lureColor', lureColor);
    p.set('lureSize', lureSize);
    if (showSummary) p.set('summary', '1');
    window.history.replaceState({}, '', `${window.location.pathname}?${p.toString()}`);
  }, [species, rodType, rodLength, rodPower, rodAction, reelSize, lineType, lineWeight, hookType, hookSize, lureType, lureColor, lureSize, showSummary]);

  useEffect(() => { syncUrl(); }, [syncUrl]);

  /* Apply species defaults */
  function applyDefaults(slug: string) {
    const d = speciesDefaults[slug] || fallbackDefaults;
    setRodType(d.rodType);
    setRodLength(d.rodLength);
    setRodPower(d.rodPower);
    setRodAction(d.rodAction);
    setReelSize(d.reelSize);
    setLineType(d.lineType);
    setLineWeight(d.lineWeight);
    setHookType(d.hookType);
    setHookSize(d.hookSize);
    setLureType(d.lureType);
    setLureColor(d.lureColor);
  }

  function selectSpecies(slug: string) {
    setSpecies(slug);
    applyDefaults(slug);
    setStep(2);
  }

  function resetAll() {
    setStep(1);
    setSpecies('');
    setRodType('spinning');
    setRodLength("7'0\"");
    setRodPower('medium');
    setRodAction('fast');
    setReelSize('2500');
    setLineType('fluorocarbon');
    setLineWeight('10 lb');
    setHookType('offset-worm');
    setHookSize('3/0');
    setLureType('soft-plastic');
    setLureColor('green-pumpkin');
    setLureSize('medium');
    setSinkerType('none');
    setLeaderType('none');
    setShowSummary(false);
    setCopied(false);
  }

  function handleContinue() {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      setShowSummary(true);
    }
  }

  function handleBack() {
    if (showSummary) {
      setShowSummary(false);
      setStep(TOTAL_STEPS);
    } else if (step > 1) {
      setStep(step - 1);
    }
  }

  async function shareRig() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }

  const speciesName = useMemo(() => {
    const sp = allSpecies.find(s => s.slug === species);
    return sp?.name || label(species);
  }, [species]);

  const reelSizes = rodType === 'baitcasting' ? REEL_SIZES_BAITCASTING : REEL_SIZES_SPINNING;

  /* Matching products for each step */
  const rodProducts = useMemo(() => getMatchingProducts(['rod', rodType, rodPower], 2), [rodType, rodPower]);
  const reelProducts = useMemo(() => getMatchingProducts(['reel', rodType], 2), [rodType]);
  const lineProducts = useMemo(() => getMatchingProducts(['line', lineType], 2), [lineType]);
  const tackleProducts = useMemo(() => getMatchingProducts(['hooks', hookType, species], 2), [hookType, species]);
  const lureProducts = useMemo(() => getMatchingProducts(['lure', lureType, species], 2), [lureType, species]);
  const summaryProducts = useMemo(
    () => getMatchingProducts([rodType, rodPower, lineType, hookType, lureType, species], 6),
    [rodType, rodPower, lineType, hookType, lureType, species]
  );

  /* Sorted species: popular first */
  const sortedSpecies = useMemo(() => {
    const popular = POPULAR_SLUGS.map(slug => allSpecies.find(s => s.slug === slug)).filter(Boolean) as typeof allSpecies;
    const rest = allSpecies.filter(s => !POPULAR_SLUGS.includes(s.slug));
    return [...popular, ...rest];
  }, []);

  /* ─── Render ─── */
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-water-800 via-water-700 to-copper-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Home', href: 'https://hookedguide.com' },
            { label: 'Rig Builder' },
          ]} />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2">Rig Builder</h1>
          <p className="text-white/80 mt-2 max-w-xl">Build your perfect setup, piece by piece.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* From-guide badge */}
        {fromGuide && species && !showSummary && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-forest-50 dark:bg-forest-900 text-forest-600 dark:text-forest-300 px-4 py-1.5 text-sm font-medium border border-forest-200 dark:border-forest-800">
            <Crosshair className="w-4 h-4" />
            The Guide recommended: {speciesName}
          </div>
        )}

        {/* Progress dots */}
        {!showSummary && (
          <div className="flex items-center gap-2 mb-8">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => {
              const n = i + 1;
              const active = n === step;
              const done = n < step;
              return (
                <button
                  key={n}
                  onClick={() => { if (done || (n === 1)) setStep(n); }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    active
                      ? 'bg-copper-500 text-white scale-110'
                      : done
                        ? 'bg-copper-200 dark:bg-copper-800 text-copper-700 dark:text-copper-300 cursor-pointer'
                        : 'bg-sand-200 dark:bg-water-700 text-muted-foreground'
                  }`}
                  aria-label={`Step ${n}`}
                >
                  {done ? <Check className="w-4 h-4" /> : n}
                </button>
              );
            })}
            <div className="ml-2 text-sm text-muted-foreground">Step {step} of {TOTAL_STEPS}</div>
          </div>
        )}

        {/* ─── STEP 1: Species ─── */}
        {!showSummary && step === 1 && (
          <StepSection title="What are you targeting?" subtitle="Select a species to auto-fill recommended gear.">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {sortedSpecies.map(sp => (
                <button
                  key={sp.slug}
                  onClick={() => selectSpecies(sp.slug)}
                  className={`text-left rounded-lg border-2 p-3 transition-all hover:shadow-md ${
                    species === sp.slug
                      ? 'border-copper-500 bg-copper-50 dark:bg-copper-900/30'
                      : 'border-sand-200 dark:border-water-700 hover:border-copper-300'
                  }`}
                >
                  <Fish className="w-5 h-5 text-copper-500 mb-1" />
                  <span className="block text-sm font-medium leading-tight">{sp.name}</span>
                  <span className="block text-xs text-muted-foreground capitalize">{sp.type}</span>
                </button>
              ))}
            </div>
          </StepSection>
        )}

        {/* ─── STEP 2: Rod ─── */}
        {!showSummary && step === 2 && (
          <StepSection title="Choose your rod" subtitle="Select rod type, length, power, and action.">
            {/* Rod Type */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Rod Type</h3>
              <div className="grid grid-cols-2 gap-3">
                {(['spinning', 'baitcasting'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => { setRodType(t); setReelSize(t === 'baitcasting' ? '200' : '2500'); }}
                    className={`rounded-lg border-2 p-4 text-center transition-all ${
                      rodType === t
                        ? 'border-copper-500 bg-copper-50 dark:bg-copper-900/30'
                        : 'border-sand-200 dark:border-water-700 hover:border-copper-300'
                    }`}
                  >
                    <Ruler className="w-6 h-6 mx-auto text-copper-500 mb-1" />
                    <span className="block font-medium">{label(t)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Length */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Length</h3>
              <div className="flex flex-wrap gap-2">
                {ROD_LENGTHS.map(l => (
                  <OptionButton key={l} selected={rodLength === l} onClick={() => setRodLength(l)}>{l}</OptionButton>
                ))}
              </div>
            </div>

            {/* Power */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Power</h3>
              <div className="flex flex-wrap gap-2">
                {ROD_POWERS.map(p => (
                  <OptionButton key={p} selected={rodPower === p} onClick={() => setRodPower(p)}>{label(p)}</OptionButton>
                ))}
              </div>
            </div>

            {/* Action */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Action</h3>
              <div className="flex flex-wrap gap-2">
                {ROD_ACTIONS.map(a => (
                  <OptionButton key={a} selected={rodAction === a} onClick={() => setRodAction(a)}>{label(a)}</OptionButton>
                ))}
              </div>
            </div>

            {/* Matching products */}
            {rodProducts.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Recommended Rods</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {rodProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button onClick={handleBack} className="inline-flex items-center gap-1 rounded-lg border border-sand-200 dark:border-water-700 px-5 py-2.5 text-sm font-medium hover:bg-sand-100 dark:hover:bg-water-800 transition-colors">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button onClick={handleContinue} className="inline-flex items-center gap-1 rounded-lg bg-copper-500 text-white px-6 py-2.5 text-sm font-medium hover:bg-copper-600 transition-colors">
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </StepSection>
        )}

        {/* ─── STEP 3: Reel ─── */}
        {!showSummary && step === 3 && (
          <StepSection title="Choose your reel" subtitle={`Auto-matched to your ${label(rodType).toLowerCase()} rod.`}>
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                {label(rodType)} Reel Size
              </h3>
              <div className="flex flex-wrap gap-2">
                {reelSizes.map(s => (
                  <OptionButton key={s} selected={reelSize === s} onClick={() => setReelSize(s)}>{s}</OptionButton>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {rodType === 'spinning'
                  ? 'Small (1000-2500) for panfish/trout. Medium (2500-4000) for bass/walleye. Large (4000+) for catfish/saltwater.'
                  : 'Lower numbers for finesse, higher for heavy cover and big baits.'}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Gear Ratio Suggestion</h3>
              <p className="text-sm">
                {species && (speciesDefaults[species]?.rodPower === 'heavy' || speciesDefaults[species]?.rodPower === 'medium-heavy')
                  ? 'High speed (7.1:1+) — great for power fishing and burning baits.'
                  : 'Medium speed (6.2:1 - 6.8:1) — versatile for most presentations.'}
              </p>
            </div>

            {reelProducts.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Recommended Reels</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {reelProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button onClick={handleBack} className="inline-flex items-center gap-1 rounded-lg border border-sand-200 dark:border-water-700 px-5 py-2.5 text-sm font-medium hover:bg-sand-100 dark:hover:bg-water-800 transition-colors">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button onClick={handleContinue} className="inline-flex items-center gap-1 rounded-lg bg-copper-500 text-white px-6 py-2.5 text-sm font-medium hover:bg-copper-600 transition-colors">
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </StepSection>
        )}

        {/* ─── STEP 4: Line ─── */}
        {!showSummary && step === 4 && (
          <StepSection title="Choose your line" subtitle="Select line type and weight for your setup.">
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Line Type</h3>
              <div className="grid grid-cols-3 gap-3">
                {LINE_TYPES.map(t => (
                  <button
                    key={t}
                    onClick={() => setLineType(t)}
                    className={`rounded-lg border-2 p-4 text-center transition-all ${
                      lineType === t
                        ? 'border-copper-500 bg-copper-50 dark:bg-copper-900/30'
                        : 'border-sand-200 dark:border-water-700 hover:border-copper-300'
                    }`}
                  >
                    <Waves className="w-5 h-5 mx-auto text-copper-500 mb-1" />
                    <span className="block text-sm font-medium">{label(t)}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Line Weight</h3>
              {species && speciesDefaults[species] && (
                <p className="text-xs text-copper-600 dark:text-copper-400 mb-2">
                  Recommended for {speciesName}: {speciesDefaults[species].lineWeight}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {LINE_WEIGHTS.map(w => (
                  <OptionButton key={w} selected={lineWeight === w} onClick={() => setLineWeight(w)}>{w}</OptionButton>
                ))}
              </div>
            </div>

            {lineProducts.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Recommended Line</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {lineProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button onClick={handleBack} className="inline-flex items-center gap-1 rounded-lg border border-sand-200 dark:border-water-700 px-5 py-2.5 text-sm font-medium hover:bg-sand-100 dark:hover:bg-water-800 transition-colors">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button onClick={handleContinue} className="inline-flex items-center gap-1 rounded-lg bg-copper-500 text-white px-6 py-2.5 text-sm font-medium hover:bg-copper-600 transition-colors">
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </StepSection>
        )}

        {/* ─── STEP 5: Terminal Tackle ─── */}
        {!showSummary && step === 5 && (
          <StepSection title="Hooks & tackle" subtitle="Choose your hook, weight, and leader.">
            {/* Hook Type */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Hook Type</h3>
              <div className="flex flex-wrap gap-2">
                {HOOK_TYPES.map(h => (
                  <OptionButton key={h} selected={hookType === h} onClick={() => setHookType(h)}>{label(h)}</OptionButton>
                ))}
              </div>
            </div>

            {/* Hook Size */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Hook Size</h3>
              {species && speciesDefaults[species] && (
                <p className="text-xs text-copper-600 dark:text-copper-400 mb-2">
                  Recommended for {speciesName}: {speciesDefaults[species].hookSize}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {HOOK_SIZES.map(s => (
                  <OptionButton key={s} selected={hookSize === s} onClick={() => setHookSize(s)}>{s}</OptionButton>
                ))}
              </div>
            </div>

            {/* Weight / Sinker */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Weight / Sinker</h3>
              <div className="flex flex-wrap gap-2">
                {WEIGHT_OPTIONS.map(w => (
                  <OptionButton key={w} selected={sinkerType === w} onClick={() => setSinkerType(w)}>{label(w)}</OptionButton>
                ))}
              </div>
            </div>

            {/* Leader */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Leader</h3>
              <div className="flex flex-wrap gap-2">
                {LEADER_OPTIONS.map(l => (
                  <OptionButton key={l} selected={leaderType === l} onClick={() => setLeaderType(l)}>{label(l)}</OptionButton>
                ))}
              </div>
            </div>

            {tackleProducts.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Recommended Hooks</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tackleProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button onClick={handleBack} className="inline-flex items-center gap-1 rounded-lg border border-sand-200 dark:border-water-700 px-5 py-2.5 text-sm font-medium hover:bg-sand-100 dark:hover:bg-water-800 transition-colors">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button onClick={handleContinue} className="inline-flex items-center gap-1 rounded-lg bg-copper-500 text-white px-6 py-2.5 text-sm font-medium hover:bg-copper-600 transition-colors">
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </StepSection>
        )}

        {/* ─── STEP 6: Lure / Bait ─── */}
        {!showSummary && step === 6 && (
          <StepSection title="Choose your lure" subtitle="Pick lure type, color, and size.">
            {/* Lure Type */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Lure Type</h3>
              <div className="flex flex-wrap gap-2">
                {LURE_TYPES.map(t => (
                  <OptionButton key={t} selected={lureType === t} onClick={() => setLureType(t)}>{label(t)}</OptionButton>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Color</h3>
              {LURE_COLORS.map(group => (
                <div key={group.group} className="mb-2">
                  <p className="text-xs text-muted-foreground mb-1">{group.group}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.values.map(c => (
                      <OptionButton key={c.value} selected={lureColor === c.value} onClick={() => setLureColor(c.value)}>{c.label}</OptionButton>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Size */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Size</h3>
              <div className="flex flex-wrap gap-2">
                {LURE_SIZES.map(s => (
                  <OptionButton key={s} selected={lureSize === s} onClick={() => setLureSize(s)}>{label(s)}</OptionButton>
                ))}
              </div>
            </div>

            {lureProducts.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Recommended Lures</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {lureProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button onClick={handleBack} className="inline-flex items-center gap-1 rounded-lg border border-sand-200 dark:border-water-700 px-5 py-2.5 text-sm font-medium hover:bg-sand-100 dark:hover:bg-water-800 transition-colors">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              <button onClick={handleContinue} className="inline-flex items-center gap-1 rounded-lg bg-copper-500 text-white px-6 py-2.5 text-sm font-medium hover:bg-copper-600 transition-colors">
                View My Rig <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </StepSection>
        )}

        {/* ─── SUMMARY ─── */}
        {showSummary && (
          <div className="space-y-8">
            <div className="rounded-xl border-2 border-copper-500 bg-white dark:bg-water-800 p-6 md:p-8 shadow-lg">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
                <Anchor className="w-7 h-7 text-copper-500" /> Your Rig
              </h2>
              {species && (
                <p className="text-sm text-muted-foreground mb-4">
                  Targeting: <span className="font-semibold text-foreground">{speciesName}</span>
                </p>
              )}

              <div className="divide-y divide-sand-200 dark:divide-water-700">
                {/* Rod */}
                <div className="py-3 flex items-start gap-3">
                  <span className="text-xs font-semibold uppercase text-copper-500 w-16 shrink-0 pt-0.5">Rod</span>
                  <span className="text-sm">{label(rodType)} &middot; {rodLength} &middot; {label(rodPower)} Power &middot; {label(rodAction)} Action</span>
                </div>
                {/* Reel */}
                <div className="py-3 flex items-start gap-3">
                  <span className="text-xs font-semibold uppercase text-copper-500 w-16 shrink-0 pt-0.5">Reel</span>
                  <span className="text-sm">{label(rodType)} &middot; Size {reelSize}</span>
                </div>
                {/* Line */}
                <div className="py-3 flex items-start gap-3">
                  <span className="text-xs font-semibold uppercase text-copper-500 w-16 shrink-0 pt-0.5">Line</span>
                  <span className="text-sm">{label(lineType)} &middot; {lineWeight}</span>
                </div>
                {/* Hook */}
                <div className="py-3 flex items-start gap-3">
                  <span className="text-xs font-semibold uppercase text-copper-500 w-16 shrink-0 pt-0.5">Hook</span>
                  <span className="text-sm">{label(hookType)} &middot; Size {hookSize}</span>
                </div>
                {/* Sinker */}
                {sinkerType !== 'none' && (
                  <div className="py-3 flex items-start gap-3">
                    <span className="text-xs font-semibold uppercase text-copper-500 w-16 shrink-0 pt-0.5">Weight</span>
                    <span className="text-sm">{label(sinkerType)}</span>
                  </div>
                )}
                {/* Leader */}
                {leaderType !== 'none' && (
                  <div className="py-3 flex items-start gap-3">
                    <span className="text-xs font-semibold uppercase text-copper-500 w-16 shrink-0 pt-0.5">Leader</span>
                    <span className="text-sm">{label(leaderType)}</span>
                  </div>
                )}
                {/* Lure */}
                <div className="py-3 flex items-start gap-3">
                  <span className="text-xs font-semibold uppercase text-copper-500 w-16 shrink-0 pt-0.5">Lure</span>
                  <span className="text-sm">{label(lureType)} &middot; {label(lureColor)} &middot; {label(lureSize)}</span>
                </div>
              </div>
            </div>

            {/* Matching Gear */}
            {summaryProducts.length > 0 && (
              <div>
                <h3 className="font-heading text-xl font-bold mb-4">Matching Gear</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {summaryProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={shareRig}
                className="inline-flex items-center gap-2 rounded-lg bg-water-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-water-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                {copied ? 'Copied!' : 'Share This Rig'}
              </button>
              <button
                onClick={resetAll}
                className="inline-flex items-center gap-2 rounded-lg border border-sand-200 dark:border-water-700 px-5 py-2.5 text-sm font-medium hover:bg-sand-100 dark:hover:bg-water-800 transition-colors"
              >
                <RotateCcw className="w-4 h-4" /> Start Over
              </button>
              <Link
                href="/guide"
                className="inline-flex items-center gap-2 rounded-lg bg-copper-500 text-white px-5 py-2.5 text-sm font-medium hover:bg-copper-600 transition-colors"
              >
                Ask the Guide <ChevronRight className="w-4 h-4" />
              </Link>
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-1 rounded-lg border border-sand-200 dark:border-water-700 px-5 py-2.5 text-sm font-medium hover:bg-sand-100 dark:hover:bg-water-800 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Edit Rig
              </button>
            </div>
          </div>
        )}

        {/* ─── FAQ ─── */}
        <section className="mt-16 border-t border-sand-200 dark:border-water-700 pt-10">
          <h2 className="font-heading text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: 'How do I choose the right rod power?',
                a: 'Rod power describes the amount of force needed to bend the rod. Ultra-light and light powers are best for small fish like panfish and trout. Medium works for bass and walleye. Medium-heavy and heavy powers handle big baits and heavy cover for large bass, catfish, and saltwater species. Match power to the weight of your lure and the size of your target species.',
              },
              {
                q: 'Spinning or baitcasting — which is better?',
                a: 'Neither is universally better. Spinning reels are easier to learn, handle light line and finesse baits well, and are ideal for beginners. Baitcasting reels offer more casting accuracy and power for heavier lures and line, making them the choice for experienced anglers targeting bass in heavy cover. Many anglers carry both on the water.',
              },
              {
                q: 'What line type should I use?',
                a: 'Monofilament is affordable, stretchy, and forgiving — great for beginners and topwater. Fluorocarbon is nearly invisible underwater and sinks, making it ideal for clear water and bottom presentations. Braided line has zero stretch and high sensitivity for heavy cover and deep water. Many anglers use braided mainline with a fluorocarbon leader for the best of both worlds.',
              },
              {
                q: 'Do I need a leader?',
                a: 'A fluorocarbon leader is recommended when fishing braided line in clear water, since braid is highly visible. A wire leader is essential when targeting toothy species like pike and musky to prevent bite-offs. For monofilament or fluorocarbon mainline in normal conditions, a leader is usually unnecessary.',
              },
            ].map((faq, i) => (
              <details key={i} className="group rounded-lg border border-sand-200 dark:border-water-700 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-medium hover:bg-sand-50 dark:hover:bg-water-800 transition-colors">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90 shrink-0 ml-2" />
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'HookedGuide Rig Builder',
            url: 'https://hookedguide.com/rig-builder',
            description: 'Build your complete fishing rig piece by piece. Select rod, reel, line, and lure to get matched gear recommendations.',
            applicationCategory: 'SportsApplication',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />
    </main>
  );
}
