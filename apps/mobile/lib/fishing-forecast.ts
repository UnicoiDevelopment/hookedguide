import type { WeatherTrend, FishingWindow } from './weather-trends';
import { getMoonPhase } from './moon';

export interface ForecastDay {
  date: string;
  dayName: string;
  highF: number;
  lowF: number;
  condition: string;
  conditionEmoji: string;
  windMph: number;
  chanceOfRain: number;
  fishingRating: 1 | 2 | 3 | 4 | 5;
  moonEmoji: string;
  bestWindow: FishingWindow | null;
  summary: string;
}

export interface FishingForecast {
  days: ForecastDay[];
  bestDay: { index: number; day: ForecastDay } | null;
  worstDay: { index: number; day: ForecastDay } | null;
}

const WEATHER_API_KEY = ''; // same as weather-trends.ts

export async function get7DayFishingForecast(
  lat: number,
  lon: number,
  species?: string
): Promise<FishingForecast | null> {
  if (!WEATHER_API_KEY) return null;

  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=7&aqi=no`
    );
    if (!res.ok) return null;
    const data = await res.json();

    const days: ForecastDay[] = data.forecast.forecastday.map((d: any) => {
      const date = new Date(d.date + 'T12:00:00');
      const moon = getMoonPhase(date);

      // Rate the day for fishing
      let score = 50;
      const reasons: string[] = [];

      // Overcast/light rain = good
      const isOvercast = d.day.condition.text.toLowerCase().includes('cloud') ||
        d.day.condition.text.toLowerCase().includes('overcast');
      const isRain = d.day.condition.text.toLowerCase().includes('rain');
      const isSunny = d.day.condition.text.toLowerCase().includes('sunny');

      if (isOvercast || (isRain && d.day.daily_chance_of_rain < 80)) {
        score += 15;
        reasons.push('Overcast/clouds');
      } else if (isSunny) {
        score -= 5;
      }

      // Wind
      if (d.day.maxwind_mph > 5 && d.day.maxwind_mph < 15) {
        score += 5;
      } else if (d.day.maxwind_mph > 25) {
        score -= 10;
        reasons.push('Very windy');
      }

      // Moon phase bonus
      if (moon.phase === 'new' || moon.phase === 'full') {
        score += 10;
        reasons.push(moon.phaseName);
      }

      // Heavy rain penalty
      if (d.day.daily_chance_of_rain > 80) {
        score -= 5;
        reasons.push('Heavy rain likely');
      }

      const rating: 1 | 2 | 3 | 4 | 5 =
        score >= 75 ? 5 : score >= 65 ? 4 : score >= 50 ? 3 : score >= 40 ? 2 : 1;

      const condEmoji = isRain ? '\uD83C\uDF27\uFE0F' :
        isOvercast ? '\u2601\uFE0F' :
        isSunny ? '\u2600\uFE0F' : '\u26C5';

      const summary = rating >= 4
        ? `Good day for fishing. ${reasons.join(', ') || 'Favorable conditions'}.`
        : rating <= 2
          ? `Tough conditions. ${reasons.join(', ') || 'Not ideal'}.`
          : 'Average conditions. Standard approach.';

      return {
        date: d.date,
        dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
        highF: Math.round(d.day.maxtemp_f),
        lowF: Math.round(d.day.mintemp_f),
        condition: d.day.condition.text,
        conditionEmoji: condEmoji,
        windMph: Math.round(d.day.maxwind_mph),
        chanceOfRain: d.day.daily_chance_of_rain,
        fishingRating: rating,
        moonEmoji: moon.emoji,
        bestWindow: {
          start: d.astro.sunrise || '6:00 AM',
          end: addSimpleHours(d.astro.sunrise || '6:00 AM', 2),
          reason: 'Golden hour',
          rating,
        },
        summary,
      };
    });

    // Find best and worst
    let bestIdx = 0;
    let worstIdx = 0;
    for (let i = 1; i < days.length; i++) {
      if (days[i].fishingRating > days[bestIdx].fishingRating) bestIdx = i;
      if (days[i].fishingRating < days[worstIdx].fishingRating) worstIdx = i;
    }

    return {
      days,
      bestDay: { index: bestIdx, day: days[bestIdx] },
      worstDay: { index: worstIdx, day: days[worstIdx] },
    };
  } catch {
    return null;
  }
}

function addSimpleHours(timeStr: string, hours: number): string {
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return timeStr;
  let h = parseInt(match[1]);
  const m = match[2];
  const ampm = match[3].toUpperCase();
  if (ampm === 'PM' && h !== 12) h += 12;
  if (ampm === 'AM' && h === 12) h = 0;
  h += hours;
  const newAmpm = h >= 12 ? 'PM' : 'AM';
  const displayH = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${displayH}:${m} ${newAmpm}`;
}
