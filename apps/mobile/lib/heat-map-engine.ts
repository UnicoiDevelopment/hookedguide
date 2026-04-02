import type { WeatherTrend } from './weather-trends';
import type { DetectedWaterBody } from './water-body-detection';
import type { WindDirection, SkyCondition } from '../../../data/types';

export interface HeatMapZone {
  lat: number;
  lon: number;
  radius: number; // meters
  score: number; // 0-100
  reasons: string[];
  recommendation?: string;
}

export interface HeatMapInput {
  waterBody: DetectedWaterBody;
  species: string;
  targetDepth: { min: number; max: number };
  preferredStructure: string[];
  windDirection: WindDirection;
  windSpeed: number; // mph
  skyCondition: SkyCondition;
  weatherTrend: WeatherTrend | null;
  seasonalPattern: string;
  month: number;
  hourOfDay: number;
}

export function calculateFishHeatMap(input: HeatMapInput): HeatMapZone[] {
  const zones: HeatMapZone[] = [];
  const { waterBody, windDirection, windSpeed, skyCondition, weatherTrend, seasonalPattern, hourOfDay } = input;

  // Generate candidate zones around the water body center
  // In production, these would be generated from actual bathymetric contour data
  // For now, create 8 cardinal zones around the water body
  const radiusMeters = waterBody.sizeCategory === 'pond' ? 200 :
    waterBody.sizeCategory === 'small-lake' ? 500 :
    waterBody.sizeCategory === 'medium-lake' ? 1000 : 2000;

  const directions: { name: string; bearing: number; windFacing: boolean }[] = [
    { name: 'North', bearing: 0, windFacing: isWindward('N', windDirection) },
    { name: 'Northeast', bearing: 45, windFacing: isWindward('NE', windDirection) },
    { name: 'East', bearing: 90, windFacing: isWindward('E', windDirection) },
    { name: 'Southeast', bearing: 135, windFacing: isWindward('SE', windDirection) },
    { name: 'South', bearing: 180, windFacing: isWindward('S', windDirection) },
    { name: 'Southwest', bearing: 225, windFacing: isWindward('SW', windDirection) },
    { name: 'West', bearing: 270, windFacing: isWindward('W', windDirection) },
    { name: 'Northwest', bearing: 315, windFacing: isWindward('NW', windDirection) },
  ];

  for (const dir of directions) {
    const zoneLat = waterBody.lat + (radiusMeters / 111320) * Math.cos((dir.bearing * Math.PI) / 180);
    const zoneLon = waterBody.lon + (radiusMeters / (111320 * Math.cos((waterBody.lat * Math.PI) / 180))) * Math.sin((dir.bearing * Math.PI) / 180);

    let score = 40; // baseline
    const reasons: string[] = [];

    // Windward shore bonus (20%)
    if (dir.windFacing && windSpeed > 15) {
      // Very windy — windward still attracts bait but fish may seek calmer water
      score += 8;
      reasons.push('Windward but very windy \u2014 bait here but fish may hold slightly off the bank');
    } else if (dir.windFacing && windSpeed > 5) {
      score += 20;
      reasons.push(`Windward ${dir.name.toLowerCase()} shore \u2014 bait pushed here by ${windSpeed}mph ${windDirection} wind`);
    } else if (!dir.windFacing && windSpeed > 5) {
      score -= 5;
    }

    // Time-based light/shade bonus (10%)
    if (hourOfDay < 8 || hourOfDay > 18) {
      // Dawn/dusk — shallow zones all score higher
      score += 10;
      reasons.push('Low light period \u2014 fish moving shallow to feed');
    } else if (skyCondition === 'overcast' || skyCondition === 'light-rain') {
      score += 8;
      reasons.push('Overcast skies \u2014 fish roaming freely');
    } else if (skyCondition === 'clear') {
      // Shade matters — north-facing banks shaded in afternoon, etc
      const sunFromSouth = hourOfDay > 10 && hourOfDay < 16;
      if (sunFromSouth && (dir.bearing > 315 || dir.bearing < 45)) {
        score += 5;
        reasons.push('North-facing bank \u2014 shaded during midday');
      }
    }

    // Seasonal pattern bonus (10%)
    if (seasonalPattern.includes('spawn') || seasonalPattern.includes('pre-spawn')) {
      // Creek arms and protected pockets
      if (['North', 'Northwest', 'Northeast'].includes(dir.name)) {
        score += 8;
        reasons.push('Protected area \u2014 likely staging/spawning zone');
      }
    } else if (seasonalPattern.includes('summer')) {
      // Main lake points — deeper structure
      if (['South', 'Southeast', 'Southwest'].includes(dir.name)) {
        score += 5;
        reasons.push('Main lake area \u2014 deep water access for summer pattern');
      }
    }

    // Weather trend bonus (5%)
    if (weatherTrend) {
      if (weatherTrend.frontalAnalysis.status === 'pre-frontal') {
        score += 8;
        reasons.push('Pre-frontal \u2014 aggressive feeding expected');
      } else if (weatherTrend.frontalAnalysis.status === 'post-frontal-day1') {
        score -= 10;
        // Deep/thick cover areas get relative bonus
        if (['South', 'Southwest'].includes(dir.name)) {
          score += 5;
          reasons.push('Deepest area \u2014 post-frontal fish retreat here');
        }
      }
      if (weatherTrend.rain.pattern === 'recent-rain') {
        // Creek inflow areas
        if (['North', 'Northeast', 'East'].includes(dir.name)) {
          score += 8;
          reasons.push('Near creek inflow \u2014 rain bringing food and fresh water');
        }
      }
    }

    // Clamp score
    score = Math.max(0, Math.min(100, score));

    zones.push({
      lat: zoneLat,
      lon: zoneLon,
      radius: radiusMeters / 3,
      score,
      reasons,
    });
  }

  return zones.sort((a, b) => b.score - a.score);
}

function isWindward(zoneDir: string, windDir: WindDirection): boolean {
  // A zone is windward if the wind is blowing TOWARD it
  // Wind from S means north shore is windward
  const opposites: Record<string, string[]> = {
    N: ['S', 'SW', 'SE'],
    NE: ['SW', 'S', 'W'],
    E: ['W', 'NW', 'SW'],
    SE: ['NW', 'N', 'W'],
    S: ['N', 'NE', 'NW'],
    SW: ['NE', 'N', 'E'],
    W: ['E', 'NE', 'SE'],
    NW: ['SE', 'S', 'E'],
  };
  return opposites[zoneDir]?.includes(windDir) || false;
}

export function getHeatMapColor(score: number): string {
  if (score >= 80) return '#EF4444'; // red
  if (score >= 60) return '#F97316'; // orange
  if (score >= 40) return '#EAB308'; // yellow
  return 'transparent';
}

export function getHeatMapLabel(score: number): string {
  if (score >= 80) return 'Hot';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Fair';
  return 'Skip';
}
