import type { WeatherData } from './weather';
import type { MoonPhaseData } from './moon';

export interface ConditionsRating {
  stars: 1 | 2 | 3 | 4 | 5;
  rating: 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Tough';
  reasons: string[];
}

export function rateFishingConditions(input: {
  weather: WeatherData | null;
  moonPhase: MoonPhaseData;
}): ConditionsRating {
  let score = 50;
  const reasons: string[] = [];

  if (!input.weather) {
    return { stars: 3, rating: 'Fair', reasons: ['Weather data unavailable'] };
  }

  const { weather, moonPhase } = input;

  // Pressure trend (biggest factor)
  if (weather.pressure.trend === 'falling') {
    score += 20;
    reasons.push('Falling barometric pressure \u2014 fish feeding aggressively');
  } else if (weather.pressure.trend === 'rapidly-falling') {
    score += 25;
    reasons.push('Rapidly falling pressure \u2014 pre-frontal feeding frenzy');
  } else if (weather.pressure.trend === 'rising') {
    score -= 10;
    reasons.push('Rising pressure \u2014 fish transitioning, bite improving');
  }

  // Frontal system
  if (weather.frontalSystem === 'pre-frontal') {
    score += 20;
    reasons.push('Storm approaching \u2014 best time to be on the water');
  } else if (weather.frontalSystem === 'post-frontal') {
    score -= 25;
    reasons.push('Post-frontal bluebird \u2014 tough conditions, go finesse');
  }

  // Sky
  if (weather.sky === 'overcast' || weather.sky === 'light-rain') {
    score += 10;
    reasons.push('Overcast skies \u2014 fish roam more freely');
  } else if (weather.sky === 'clear') {
    score -= 5;
    reasons.push('Clear skies \u2014 fish holding tighter to cover');
  }

  // Wind direction
  if (['S', 'SW', 'W'].includes(weather.wind.direction)) {
    score += 5;
    reasons.push('Favorable wind direction (south/west)');
  } else if (['N', 'NE', 'E'].includes(weather.wind.direction)) {
    score -= 5;
    reasons.push('Unfavorable wind direction (north/east)');
  }

  // Moon phase
  if (moonPhase.phase === 'new' || moonPhase.phase === 'full') {
    score += 10;
    reasons.push(`${moonPhase.phaseName} \u2014 peak solunar activity`);
  }

  const stars: 1 | 2 | 3 | 4 | 5 =
    score >= 80 ? 5 : score >= 65 ? 4 : score >= 50 ? 3 : score >= 35 ? 2 : 1;
  const ratings = {
    5: 'Excellent' as const,
    4: 'Good' as const,
    3: 'Fair' as const,
    2: 'Poor' as const,
    1: 'Tough' as const,
  };

  return { stars, rating: ratings[stars], reasons };
}
