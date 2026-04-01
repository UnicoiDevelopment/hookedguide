// === SPECIES ===
export interface Species {
  slug: string;
  name: string;
  scientificName: string;
  type: 'freshwater' | 'saltwater' | 'both';
  family: string;
  description: string;
  identification: string;
  habitat: string;
  behavior: string;
  diet: string;
  recordWeight: { lbs: number; oz: number; location: string; year: number };
  averageWeight: { min: number; max: number; unit: string };
  averageLength: { min: number; max: number; unit: string };
  lifespan: { min: number; max: number; unit: string };
  preferredTemp: { min: number; max: number; unit: 'F' };
  difficultyRating: 1 | 2 | 3 | 4 | 5;
  fightRating: 1 | 2 | 3 | 4 | 5;
  tasteRating: 1 | 2 | 3 | 4 | 5;
  statesFound: string[];
  seasonalPatterns: {
    spring: string;
    summer: string;
    fall: string;
    winter: string;
  };
  bestTechniques: string[];
  bestBaits: string[];
  relatedSpecies: string[];
  funFacts: string[];
  faq: { question: string; answer: string }[];
  imagePath: string;
  imageAlt: string;
  imageCredit: string;
}

// === STATES ===
export interface StateFishingData {
  slug: string;
  name: string;
  abbreviation: string;
  region: 'northeast' | 'southeast' | 'midwest' | 'southwest' | 'west' | 'pacific';
  licenseUrl: string;
  licenseInfo: string;
  freshwaterSpecies: string[];
  saltwaterSpecies: string[];
  topWaters: { name: string; type: string; species: string[] }[];
  seasonInfo: string;
  regulations: {
    species: string;
    bagLimit: string;
    sizeLimit: string;
    season: string;
    notes: string;
  }[];
  stateRecord: { species: string; weight: string; year: number; water: string }[];
  imagePath: string;
  imageAlt: string;
  imageCredit: string;
  lastUpdated: string;
}

// === TECHNIQUES ===
export interface Technique {
  slug: string;
  name: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  bestFor: string[];
  waterTypes: ('lake' | 'river' | 'pond' | 'reservoir' | 'saltwater')[];
  seasons: ('spring' | 'summer' | 'fall' | 'winter')[];
  steps: { step: number; title: string; description: string }[];
  requiredGear: { item: string; description: string; tags: string[] }[];
  commonMistakes: string[];
  proTips: string[];
  faq: { question: string; answer: string }[];
  imagePath: string;
  imageAlt: string;
}

// === KNOTS ===
export interface Knot {
  slug: string;
  name: string;
  description: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  strengthRating: number;
  bestFor: string[];
  lineTypes: ('monofilament' | 'fluorocarbon' | 'braided')[];
  steps: { step: number; instruction: string }[];
  tips: string[];
  faq: { question: string; answer: string }[];
}

// === RECOMMENDATION ENGINE ===
export type WaterType = 'lake' | 'river' | 'pond' | 'reservoir' | 'saltwater';
export type Season = 'spring' | 'summer' | 'fall' | 'winter';
export type TimeOfDay = 'dawn' | 'morning' | 'midday' | 'afternoon' | 'dusk' | 'night';

export interface RecommendationInput {
  species: string;
  state?: string;
  waterType: WaterType;
  season: Season;
  timeOfDay: TimeOfDay;
  waterTemp?: number;
}

export interface RecommendationOutput {
  technique: { name: string; slug: string; description: string };
  alternateTechnique: { name: string; slug: string; description: string };
  lure: { name: string; color: string; size: string; description: string; tags: string[] };
  alternateLure: { name: string; color: string; size: string; description: string; tags: string[] };
  line: { type: string; weight: string; description: string };
  rodReel: { rodType: string; power: string; action: string; reelType: string; description: string; tags: string[] };
  targetDepth: string;
  tips: string[];
  confidence: 'high' | 'medium' | 'low';
  regulations?: { bagLimit: string; sizeLimit: string; season: string; notes: string };
}

// === AFFILIATE ===
export interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  brand: string;
  program: 'enigma' | 'mustad' | 'pure-fishing' | 'bass-pro' | 'yeti' | 'columbia' | 'amazon';
  commission: number;
  affiliateUrl: string;
  imageAlt: string;
  tags: string[];
  priority: number;
  price?: string;
}

// === GEAR ===
export interface GearCategory {
  slug: string;
  name: string;
  description: string;
  products: string[];
  faq: { question: string; answer: string }[];
}

export interface GearReview {
  slug: string;
  productName: string;
  brand: string;
  category: string;
  rating: number;
  pros: string[];
  cons: string[];
  bestFor: string[];
  description: string;
  specifications: { key: string; value: string }[];
  affiliateProductId: string;
  faq: { question: string; answer: string }[];
}

// === DETAILED RECOMMENDATION ENGINE ===
export type SkyCondition = 'clear' | 'partly-cloudy' | 'overcast' | 'light-rain' | 'heavy-rain' | 'snow' | 'fog';
export type WindSpeed = 'calm' | 'light' | 'moderate' | 'strong';
export type WindDirection = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW';
export type FrontalSystem = 'pre-frontal' | 'post-frontal' | 'stable' | 'during-front';
export type PressureTrend = 'rising' | 'falling' | 'steady' | 'rapidly-falling';
export type WaterBodyType = 'pond' | 'small-lake' | 'medium-lake' | 'large-reservoir' | 'major-reservoir' | 'creek' | 'small-river' | 'large-river' | 'saltwater-inshore' | 'saltwater-offshore' | 'canal';
export type WaterClarity = 'crystal-clear' | 'clear' | 'stained' | 'muddy';
export type CoverType = 'grass' | 'wood' | 'rock' | 'docks' | 'open-water' | 'mixed';
export type DepthAvailable = 'shallow' | 'medium' | 'deep';
export type MoonPhase = 'new' | 'waxing-crescent' | 'first-quarter' | 'waxing-gibbous' | 'full' | 'waning-gibbous' | 'last-quarter' | 'waning-crescent';

export interface DetailedRecommendationInput {
  species: string;
  waterTemp: number;
  state?: string;
  waterBody: {
    type: WaterBodyType;
    clarity: WaterClarity;
    coverType: CoverType;
    depthAvailable: DepthAvailable;
  };
  month: number;
  hourOfDay: number;
  weather: {
    sky: SkyCondition;
    wind: WindSpeed;
    windDirection: WindDirection;
    frontalSystem: FrontalSystem;
    pressureTrend: PressureTrend;
  };
  moonPhase?: MoonPhase;
  date?: string;
}

export interface DetailedRecommendationOutput {
  primary: {
    technique: { name: string; slug: string; why: string };
    presentation: { speed: string; action: string; depth: string };
    lure: {
      type: string;
      specificLure: string;
      color: string;
      size: string;
      why: string;
      tags: string[];
    };
    line: { type: string; weight: string; why: string };
    rodReel: {
      rodLength: string;
      rodPower: string;
      rodAction: string;
      reelType: string;
      reelSpeed: string;
      why: string;
      tags: string[];
    };
    hookType: string;
    hookSize: string;
    targetDepth: string;
    targetStructure: string;
    castDirection: string;
  };
  alternate: {
    technique: { name: string; slug: string; why: string };
    lure: { type: string; specificLure: string; color: string; size: string; tags: string[] };
  };
  tips: string[];
  warnings: string[];
  confidence: 'very-high' | 'high' | 'medium' | 'low';
  confidenceNotes: string;
  feedingWindow: {
    description: string;
    peakTimes: string[];
    moonFeedingPeriods?: string[];
  };
  regulations?: {
    bagLimit: string;
    sizeLimit: string;
    season: string;
    notes: string;
    disclaimerUrl: string;
  };
}
