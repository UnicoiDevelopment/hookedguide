import type {
  SkyCondition,
  WindSpeed,
  WindDirection,
  PressureTrend,
  FrontalSystem,
} from '../../../data/types';

// WeatherAPI.com — free tier: 1M calls/month
const WEATHER_API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY || '';

export interface WeatherTrend {
  rain: {
    lastDay: number;
    last3Days: number;
    last7Days: number;
    daysWithoutRain: number;
    pattern: 'drought' | 'dry-spell' | 'normal' | 'recent-rain' | 'extended-rain' | 'flooding';
    fishingImpact: string;
  };
  temperature: {
    currentAirF: number;
    trend3Day: 'warming' | 'cooling' | 'stable';
    trendDegrees: number;
    highToday: number;
    lowToday: number;
    fishingImpact: string;
  };
  pressure: {
    current: number;
    trend24hr: PressureTrend;
    changeAmount: number;
    fishingImpact: string;
  };
  wind: {
    avgLast24hr: number;
    directionShift: boolean;
    gust: number;
    fishingImpact: string;
  };
  frontalAnalysis: {
    status: 'pre-frontal' | 'frontal-passage' | 'post-frontal-day1' | 'post-frontal-day2' | 'post-frontal-day3-plus' | 'stable';
    frontPassedHoursAgo: number | null;
    nextFrontIn: number | null;
    fishingImpact: string;
  };
  bestFishingWindows: {
    today: FishingWindow[];
    tomorrow: FishingWindow[];
    bestDayThisWeek: { day: string; reason: string; rating: 1 | 2 | 3 | 4 | 5 } | null;
  };
  overallScore: {
    rating: 1 | 2 | 3 | 4 | 5;
    label: 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Tough';
    summary: string;
  };
}

export interface FishingWindow {
  start: string;
  end: string;
  reason: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

interface ForecastDay {
  date: string;
  maxTempF: number;
  minTempF: number;
  avgTempF: number;
  totalRainIn: number;
  avgWindMph: number;
  maxGustMph: number;
  avgPressureInHg: number;
  condition: string;
  chanceOfRain: number;
  sunrise: string;
  sunset: string;
  moonPhase: string;
}

interface HistoryDay {
  date: string;
  avgTempF: number;
  totalRainIn: number;
  avgPressureInHg: number;
  avgWindMph: number;
  windDir: string;
}

export async function getWeatherTrends(
  lat: number,
  lon: number
): Promise<WeatherTrend | null> {
  if (!WEATHER_API_KEY) return null;

  try {
    // Fetch forecast + history in parallel
    const [forecastRes, historyRes] = await Promise.all([
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=7&aqi=no`
      ),
      fetchHistory(lat, lon, 7),
    ]);

    if (!forecastRes.ok) return null;
    const forecast = await forecastRes.json();
    const history = historyRes;

    const current = forecast.current;
    const forecastDays: ForecastDay[] = forecast.forecast.forecastday.map((d: any) => ({
      date: d.date,
      maxTempF: d.day.maxtemp_f,
      minTempF: d.day.mintemp_f,
      avgTempF: d.day.avgtemp_f,
      totalRainIn: d.day.totalprecip_in,
      avgWindMph: d.day.maxwind_mph,
      maxGustMph: d.day.maxwind_mph,
      avgPressureInHg: 29.92, // approximation from forecast
      condition: d.day.condition.text,
      chanceOfRain: d.day.daily_chance_of_rain,
      sunrise: d.astro.sunrise,
      sunset: d.astro.sunset,
      moonPhase: d.astro.moon_phase,
    }));

    // Rain analysis
    const rain = analyzeRain(history, forecastDays);

    // Temperature trend
    const temperature = analyzeTempTrend(current.temp_f, history);

    // Pressure trend
    const pressure = analyzePressure(current.pressure_in, history);

    // Wind
    const wind = analyzeWind(current, history);

    // Frontal analysis
    const frontalAnalysis = analyzeFronts(pressure, temperature, wind);

    // Best fishing windows
    const bestFishingWindows = calculateBestWindows(forecastDays, frontalAnalysis);

    // Overall score
    const overallScore = calculateOverallScore(rain, temperature, pressure, frontalAnalysis, wind);

    return {
      rain,
      temperature,
      pressure,
      wind,
      frontalAnalysis,
      bestFishingWindows,
      overallScore,
    };
  } catch {
    return null;
  }
}

async function fetchHistory(lat: number, lon: number, days: number): Promise<HistoryDay[]> {
  const results: HistoryDay[] = [];
  const now = new Date();

  for (let i = 1; i <= Math.min(days, 3); i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/history.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&dt=${dateStr}`
      );
      if (!res.ok) continue;
      const data = await res.json();
      const day = data.forecast.forecastday[0]?.day;
      if (day) {
        results.push({
          date: dateStr,
          avgTempF: day.avgtemp_f,
          totalRainIn: day.totalprecip_in,
          avgPressureInHg: 29.92, // WeatherAPI doesn't expose historical pressure easily
          avgWindMph: day.maxwind_mph,
          windDir: '',
        });
      }
    } catch {
      // Skip failed days
    }
  }

  return results;
}

function analyzeRain(history: HistoryDay[], forecast: ForecastDay[]): WeatherTrend['rain'] {
  const lastDay = history[0]?.totalRainIn || 0;
  const last3Days = history.slice(0, 3).reduce((sum, d) => sum + d.totalRainIn, 0);
  const last7Days = history.reduce((sum, d) => sum + d.totalRainIn, 0);

  let daysWithoutRain = 0;
  for (const day of history) {
    if (day.totalRainIn > 0.05) break;
    daysWithoutRain++;
  }

  let pattern: WeatherTrend['rain']['pattern'];
  let fishingImpact: string;

  if (last7Days < 0.1 && daysWithoutRain >= 7) {
    pattern = 'drought';
    fishingImpact = 'No rain in over a week. Water levels are low, clarity is high. Fish are concentrated in deep areas and very spooky. Finesse is key.';
  } else if (lastDay > 1.0) {
    pattern = 'recent-rain';
    fishingImpact = `${lastDay.toFixed(1)}" of rain yesterday is pulling fish shallow. Rising water triggers aggressive feeding. Focus on creek mouths and mudlines.`;
  } else if (last7Days > 3.0) {
    pattern = last7Days > 5.0 ? 'flooding' : 'extended-rain';
    fishingImpact = `${last7Days.toFixed(1)}" of rain this week. Water is high and muddy. Fish backwaters and eddies with noisy, vibrating lures.`;
  } else if (lastDay > 0.1) {
    pattern = 'recent-rain';
    fishingImpact = `Light rain yesterday (${lastDay.toFixed(1)}") freshened the water. Good stained conditions \u2014 fish are active.`;
  } else if (daysWithoutRain >= 4) {
    pattern = 'dry-spell';
    fishingImpact = `${daysWithoutRain} dry days. Water is clearing up and levels dropping slightly. Fish moving deeper.`;
  } else {
    pattern = 'normal';
    fishingImpact = 'Normal rainfall pattern. Standard conditions apply.';
  }

  return { lastDay, last3Days, last7Days, daysWithoutRain, pattern, fishingImpact };
}

function analyzeTempTrend(currentTemp: number, history: HistoryDay[]): WeatherTrend['temperature'] {
  const threeDaysAgo = history[2]?.avgTempF || history[0]?.avgTempF || currentTemp;
  const change = currentTemp - threeDaysAgo;
  const trend: 'warming' | 'cooling' | 'stable' =
    change > 5 ? 'warming' : change < -5 ? 'cooling' : 'stable';

  let fishingImpact: string;
  if (change < -10) {
    fishingImpact = `Temps dropped ${Math.abs(Math.round(change))}\u00B0F in 3 days \u2014 major cold front. Fish are deep and lethargic. Downsize everything and fish dead slow.`;
  } else if (change < -5) {
    fishingImpact = `Cooling trend (${Math.abs(Math.round(change))}\u00B0F in 3 days). Fish pulling slightly deeper. Slow your presentation.`;
  } else if (change > 8) {
    fishingImpact = `Warming fast (+${Math.round(change)}\u00B0F in 3 days). Fish are moving shallow and feeding aggressively. Cover water with moving baits.`;
  } else if (change > 5) {
    fishingImpact = `Gradual warming trend (+${Math.round(change)}\u00B0F). Fish pushing shallower each day. Good conditions.`;
  } else {
    fishingImpact = 'Stable temps \u2014 fish are in predictable seasonal patterns.';
  }

  return {
    currentAirF: Math.round(currentTemp),
    trend3Day: trend,
    trendDegrees: Math.round(change),
    highToday: Math.round(currentTemp + 5),
    lowToday: Math.round(currentTemp - 8),
    fishingImpact,
  };
}

function analyzePressure(currentPressure: number, history: HistoryDay[]): WeatherTrend['pressure'] {
  const yesterdayPressure = history[0]?.avgPressureInHg || currentPressure;
  const change = currentPressure - yesterdayPressure;

  let trend: PressureTrend;
  if (change < -0.1) trend = 'rapidly-falling';
  else if (change < -0.03) trend = 'falling';
  else if (change > 0.1) trend = 'rising';
  else trend = 'steady';

  let fishingImpact: string;
  if (trend === 'rapidly-falling') {
    fishingImpact = `Pressure dropping fast (${Math.abs(change).toFixed(2)}" in 24hr) \u2014 fish are feeding aggressively before the front. Best bite of the week.`;
  } else if (trend === 'falling') {
    fishingImpact = 'Falling pressure \u2014 fish are active and feeding up. Good conditions.';
  } else if (trend === 'rising') {
    fishingImpact = 'Rising pressure \u2014 post-frontal conditions. Bite improving but fish may be tight to cover.';
  } else {
    fishingImpact = 'Stable pressure \u2014 consistent, predictable fishing.';
  }

  return {
    current: Math.round(currentPressure * 100) / 100,
    trend24hr: trend,
    changeAmount: Math.round(change * 100) / 100,
    fishingImpact,
  };
}

function analyzeWind(current: any, history: HistoryDay[]): WeatherTrend['wind'] {
  const avgYesterday = history[0]?.avgWindMph || 0;
  const dirShift = history.length > 1 && history[0]?.windDir !== history[1]?.windDir;

  let fishingImpact: string;
  if (current.wind_mph > 20) {
    fishingImpact = 'Strong wind \u2014 fish the windward bank where bait is pushed, but be safe on the water.';
  } else if (current.wind_mph > 10) {
    fishingImpact = 'Moderate wind \u2014 good conditions. Wind breaks up the surface and makes fish less spooky.';
  } else if (current.wind_mph < 5) {
    fishingImpact = 'Calm conditions \u2014 clear calm water means finesse fishing. Light line, subtle presentations.';
  } else {
    fishingImpact = 'Light wind \u2014 standard conditions.';
  }

  return {
    avgLast24hr: Math.round(avgYesterday),
    directionShift: dirShift,
    gust: Math.round(current.gust_mph || current.wind_mph * 1.3),
    fishingImpact,
  };
}

function analyzeFronts(
  pressure: WeatherTrend['pressure'],
  temperature: WeatherTrend['temperature'],
  wind: WeatherTrend['wind']
): WeatherTrend['frontalAnalysis'] {
  let status: WeatherTrend['frontalAnalysis']['status'];
  let fishingImpact: string;
  let frontPassedHoursAgo: number | null = null;
  let nextFrontIn: number | null = null;

  if (pressure.trend24hr === 'rapidly-falling') {
    status = 'pre-frontal';
    nextFrontIn = 12;
    fishingImpact = 'Front approaching \u2014 THIS is your window. Fish are feeding aggressively before conditions change. Get on the water NOW.';
  } else if (
    pressure.trend24hr === 'rising' &&
    temperature.trend3Day === 'cooling' &&
    temperature.trendDegrees < -5
  ) {
    status = 'post-frontal-day1';
    frontPassedHoursAgo = 18;
    fishingImpact = 'Post-frontal day 1 \u2014 the toughest day. Fish are deep, tight to cover, barely feeding. Downsize everything. Fish dead slow. The bite will recover in 2-3 days.';
  } else if (pressure.trend24hr === 'rising' && temperature.trend3Day === 'cooling') {
    status = 'post-frontal-day2';
    frontPassedHoursAgo = 42;
    fishingImpact = 'Post-frontal day 2 \u2014 bite improving but still tough. Fish are starting to move again. Finesse presentations near cover.';
  } else if (pressure.trend24hr === 'falling') {
    status = 'pre-frontal';
    nextFrontIn = 24;
    fishingImpact = 'Pressure dropping \u2014 front moving in. Fish are feeding up in anticipation. Good bite window.';
  } else {
    status = 'stable';
    fishingImpact = 'No frontal activity \u2014 stable, predictable conditions. Standard seasonal patterns.';
  }

  return { status, frontPassedHoursAgo, nextFrontIn, fishingImpact };
}

function calculateBestWindows(
  forecast: ForecastDay[],
  frontal: WeatherTrend['frontalAnalysis']
): WeatherTrend['bestFishingWindows'] {
  const today = forecast[0];
  const tomorrow = forecast[1];

  const todayWindows: FishingWindow[] = [];
  const tomorrowWindows: FishingWindow[] = [];

  // Golden hours are always good
  if (today) {
    todayWindows.push({
      start: today.sunrise || '6:00 AM',
      end: addHours(today.sunrise || '6:00 AM', 2),
      reason: 'Golden hour \u2014 low light feeding period',
      rating: frontal.status === 'pre-frontal' ? 5 : 4,
    });
    todayWindows.push({
      start: subtractHours(today.sunset || '7:30 PM', 1.5),
      end: today.sunset || '7:30 PM',
      reason: 'Evening golden hour',
      rating: 3,
    });
  }

  if (tomorrow) {
    tomorrowWindows.push({
      start: tomorrow.sunrise || '6:00 AM',
      end: addHours(tomorrow.sunrise || '6:00 AM', 2),
      reason: 'Morning golden hour',
      rating: 4,
    });
  }

  // Find best day this week
  let bestDay: WeatherTrend['bestFishingWindows']['bestDayThisWeek'] = null;
  let bestScore = 0;

  for (const day of forecast) {
    let score = 3;
    if (day.chanceOfRain > 40 && day.chanceOfRain < 80) score += 1; // overcast/light rain
    if (day.avgWindMph > 5 && day.avgWindMph < 15) score += 0.5;
    if (score > bestScore) {
      bestScore = score;
      bestDay = {
        day: new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' }),
        reason: day.chanceOfRain > 40
          ? 'Overcast/rain conditions \u2014 fish roaming freely'
          : 'Favorable wind and cloud cover',
        rating: Math.min(5, Math.round(score)) as 1 | 2 | 3 | 4 | 5,
      };
    }
  }

  return { today: todayWindows, tomorrow: tomorrowWindows, bestDayThisWeek: bestDay };
}

function calculateOverallScore(
  rain: WeatherTrend['rain'],
  temp: WeatherTrend['temperature'],
  pressure: WeatherTrend['pressure'],
  frontal: WeatherTrend['frontalAnalysis'],
  wind: WeatherTrend['wind']
): WeatherTrend['overallScore'] {
  let score = 50;

  // Pressure (biggest factor)
  if (pressure.trend24hr === 'rapidly-falling') score += 25;
  else if (pressure.trend24hr === 'falling') score += 15;
  else if (pressure.trend24hr === 'rising') score -= 10;

  // Frontal
  if (frontal.status === 'pre-frontal') score += 15;
  else if (frontal.status === 'post-frontal-day1') score -= 25;
  else if (frontal.status === 'post-frontal-day2') score -= 10;

  // Rain
  if (rain.pattern === 'recent-rain' && rain.lastDay > 0.5 && rain.lastDay < 2.0) score += 10;
  else if (rain.pattern === 'flooding') score -= 15;
  else if (rain.pattern === 'drought') score -= 5;

  // Temp trend
  if (temp.trend3Day === 'warming' && temp.trendDegrees > 5) score += 10;
  else if (temp.trendDegrees < -10) score -= 15;

  const stars: 1 | 2 | 3 | 4 | 5 =
    score >= 80 ? 5 : score >= 65 ? 4 : score >= 50 ? 3 : score >= 35 ? 2 : 1;
  const labels = { 5: 'Excellent', 4: 'Good', 3: 'Fair', 2: 'Poor', 1: 'Tough' } as const;

  const parts: string[] = [];
  parts.push(`${stars}/5 \u2014 ${labels[stars]}.`);
  if (frontal.status !== 'stable') parts.push(frontal.fishingImpact.split('.')[0] + '.');
  if (rain.pattern !== 'normal') parts.push(rain.fishingImpact.split('.')[0] + '.');

  return { rating: stars, label: labels[stars], summary: parts.join(' ') };
}

function addHours(timeStr: string, hours: number): string {
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return timeStr;
  let h = parseInt(match[1]);
  const m = parseInt(match[2]);
  const ampm = match[3].toUpperCase();
  if (ampm === 'PM' && h !== 12) h += 12;
  if (ampm === 'AM' && h === 12) h = 0;
  h += hours;
  const newAmpm = h >= 12 ? 'PM' : 'AM';
  const displayH = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${displayH}:${m.toString().padStart(2, '0')} ${newAmpm}`;
}

function subtractHours(timeStr: string, hours: number): string {
  return addHours(timeStr, -hours);
}
