import type {
  DetailedRecommendationInput,
  DetailedRecommendationOutput,
} from '../../../data/types';

// The Guide API — generates conversational paragraph from Claude
// In production, this calls your backend API route
// For development, it constructs a fallback paragraph from structured data

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || 'https://hookedguide.com';

export interface GuideNarrativeResult {
  narrative: string;
  isOffline: boolean;
}

export async function getGuideNarrative(
  input: DetailedRecommendationInput,
  recommendation: DetailedRecommendationOutput
): Promise<GuideNarrativeResult> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/guide`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input, recommendation }),
    });

    if (!response.ok) throw new Error('API error');

    const data = await response.json();
    return {
      narrative: data.narrative || data.message || buildFallbackNarrative(input, recommendation),
      isOffline: false,
    };
  } catch {
    return {
      narrative: buildFallbackNarrative(input, recommendation),
      isOffline: true,
    };
  }
}

function buildFallbackNarrative(
  input: DetailedRecommendationInput,
  rec: DetailedRecommendationOutput
): string {
  const { primary } = rec;
  const tempDesc =
    input.waterTemp < 50
      ? 'cold'
      : input.waterTemp < 65
        ? 'cooling'
        : input.waterTemp < 75
          ? 'warming up'
          : 'warm';

  const skyDesc =
    input.weather.sky === 'overcast'
      ? 'overcast skies'
      : input.weather.sky === 'clear'
        ? 'clear skies'
        : input.weather.sky === 'light-rain'
          ? 'light rain'
          : input.weather.sky;

  const pressureDesc =
    input.weather.pressureTrend === 'falling'
      ? 'falling pressure means fish are feeding up'
      : input.weather.pressureTrend === 'rising'
        ? 'rising pressure has fish settling in'
        : 'steady pressure';

  return (
    `With ${input.waterTemp}°F water that's ${tempDesc} and ${skyDesc}, ` +
    `a ${primary.technique.name} is your best play right now. ` +
    `Rig up a ${primary.lure.specificLure} in ${primary.lure.color} ` +
    `on ${primary.line.weight} ${primary.line.type}. ` +
    `Target ${primary.targetDepth} around ${primary.targetStructure}. ` +
    `${primary.presentation.speed} retrieve with a ${primary.presentation.action} action. ` +
    `The ${pressureDesc}. ${rec.tips[0] || ''}`
  );
}
