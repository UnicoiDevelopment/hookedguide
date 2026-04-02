import type {
  SkyCondition,
  WindSpeed,
  WindDirection,
  PressureTrend,
  FrontalSystem,
} from '../../../data/types';

// OpenWeatherMap API — free tier: 1,000 calls/day
// Set your key here or via environment config
const OPENWEATHER_API_KEY = '';

export interface WeatherData {
  sky: SkyCondition;
  tempF: number;
  wind: { speed: number; direction: WindDirection; category: WindSpeed };
  pressure: { value: number; trend: PressureTrend };
  frontalSystem: FrontalSystem;
  humidity: number;
}

export async function getCurrentWeather(
  lat: number,
  lon: number
): Promise<WeatherData | null> {
  if (!OPENWEATHER_API_KEY) return null;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${OPENWEATHER_API_KEY}`
    );
    if (!response.ok) return null;
    const data = await response.json();

    const sky = mapWeatherToSky(data.weather[0].id);
    const windDir = degreesToCompass(data.wind.deg);
    const windCategory = categorizeWind(data.wind.speed);

    // Simplified pressure trend — would need historical data for real trend
    const pressureInHg = data.main.pressure * 0.02953;
    const pressureTrend: PressureTrend =
      pressureInHg < 29.8 ? 'falling' : pressureInHg > 30.2 ? 'rising' : 'steady';

    const frontalSystem = detectFrontalSystem(pressureTrend, windCategory);

    return {
      sky,
      tempF: Math.round(data.main.temp),
      wind: { speed: Math.round(data.wind.speed), direction: windDir, category: windCategory },
      pressure: { value: Math.round(pressureInHg * 100) / 100, trend: pressureTrend },
      frontalSystem,
      humidity: data.main.humidity,
    };
  } catch {
    return null;
  }
}

function mapWeatherToSky(weatherId: number): SkyCondition {
  if (weatherId >= 200 && weatherId < 300) return 'heavy-rain';
  if (weatherId >= 300 && weatherId < 400) return 'light-rain';
  if (weatherId >= 500 && weatherId < 505) return 'light-rain';
  if (weatherId >= 505 && weatherId < 600) return 'heavy-rain';
  if (weatherId >= 600 && weatherId < 700) return 'snow';
  if (weatherId >= 700 && weatherId < 800) return 'fog';
  if (weatherId === 800) return 'clear';
  if (weatherId === 801) return 'partly-cloudy';
  if (weatherId >= 802) return 'overcast';
  return 'clear';
}

function degreesToCompass(degrees: number): WindDirection {
  const dirs: WindDirection[] = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return dirs[Math.round(degrees / 45) % 8];
}

function categorizeWind(mph: number): WindSpeed {
  if (mph < 5) return 'calm';
  if (mph < 10) return 'light';
  if (mph < 20) return 'moderate';
  return 'strong';
}

function detectFrontalSystem(
  pressureTrend: PressureTrend,
  windSpeed: WindSpeed
): FrontalSystem {
  if (pressureTrend === 'rapidly-falling') return 'pre-frontal';
  if (pressureTrend === 'falling' && (windSpeed === 'moderate' || windSpeed === 'strong'))
    return 'pre-frontal';
  if (pressureTrend === 'rising' && windSpeed === 'light') return 'post-frontal';
  return 'stable';
}

export function skyLabel(sky: SkyCondition): string {
  const labels: Record<SkyCondition, string> = {
    clear: 'Clear',
    'partly-cloudy': 'Partly Cloudy',
    overcast: 'Overcast',
    'light-rain': 'Light Rain',
    'heavy-rain': 'Heavy Rain',
    snow: 'Snow',
    fog: 'Fog',
  };
  return labels[sky] || sky;
}

export function skyEmoji(sky: SkyCondition): string {
  const emojis: Record<SkyCondition, string> = {
    clear: '\u2600\uFE0F',
    'partly-cloudy': '\u26C5',
    overcast: '\u2601\uFE0F',
    'light-rain': '\uD83C\uDF27\uFE0F',
    'heavy-rain': '\u26C8\uFE0F',
    snow: '\uD83C\uDF28\uFE0F',
    fog: '\uD83C\uDF2B\uFE0F',
  };
  return emojis[sky] || '\u2600\uFE0F';
}
