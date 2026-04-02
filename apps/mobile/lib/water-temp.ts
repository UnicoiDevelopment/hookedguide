// USGS Water Services API — free, no key needed

export interface WaterTempData {
  tempF: number;
  stationName: string;
  distanceMiles: number;
  lastReading: string;
}

export async function getNearestWaterTemp(
  lat: number,
  lon: number
): Promise<WaterTempData | null> {
  try {
    const bbox = getBoundingBox(lat, lon, 25);
    const url = `https://waterservices.usgs.gov/nwis/iv/?format=json&bBox=${bbox.west},${bbox.south},${bbox.east},${bbox.north}&parameterCd=00010&siteStatus=active`;

    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();

    if (!data.value?.timeSeries?.length) return null;

    const stations = data.value.timeSeries
      .map((ts: any) => ({
        name: ts.sourceInfo.siteName,
        lat: ts.sourceInfo.geoLocation.geogLocation.latitude,
        lon: ts.sourceInfo.geoLocation.geogLocation.longitude,
        tempC: parseFloat(ts.values[0]?.value[0]?.value),
        timestamp: ts.values[0]?.value[0]?.dateTime,
      }))
      .filter((s: any) => !isNaN(s.tempC) && s.tempC > 0 && s.tempC < 40)
      .map((s: any) => ({
        ...s,
        tempF: s.tempC * (9 / 5) + 32,
        distance: haversineDistance(lat, lon, s.lat, s.lon),
      }))
      .sort((a: any, b: any) => a.distance - b.distance);

    if (!stations.length) return null;

    const nearest = stations[0];
    return {
      tempF: Math.round(nearest.tempF * 10) / 10,
      stationName: nearest.name,
      distanceMiles: Math.round(nearest.distance * 10) / 10,
      lastReading: nearest.timestamp,
    };
  } catch {
    return null;
  }
}

function getBoundingBox(lat: number, lon: number, radiusMiles: number) {
  const latDelta = radiusMiles / 69;
  const lonDelta = radiusMiles / (69 * Math.cos((lat * Math.PI) / 180));
  return {
    north: (lat + latDelta).toFixed(4),
    south: (lat - latDelta).toFixed(4),
    east: (lon + lonDelta).toFixed(4),
    west: (lon - lonDelta).toFixed(4),
  };
}

function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959; // miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
