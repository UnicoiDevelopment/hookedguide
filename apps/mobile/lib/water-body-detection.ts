// Overpass API (OpenStreetMap) — free, unlimited
// Detects nearest water body from GPS coordinates

export interface DetectedWaterBody {
  name: string;
  type: 'lake' | 'reservoir' | 'river' | 'creek' | 'pond' | 'bay' | 'ocean' | 'canal' | 'unknown';
  sizeCategory:
    | 'pond'
    | 'small-lake'
    | 'medium-lake'
    | 'large-reservoir'
    | 'major-reservoir'
    | 'creek'
    | 'small-river'
    | 'large-river'
    | 'saltwater-inshore'
    | 'saltwater-offshore';
  osmId?: string;
  distanceFromUser: number; // meters
  lat: number;
  lon: number;
}

export async function detectNearestWaterBody(
  lat: number,
  lon: number
): Promise<DetectedWaterBody | null> {
  try {
    const query = `
      [out:json][timeout:10];
      (
        way["natural"="water"](around:2000,${lat},${lon});
        relation["natural"="water"](around:2000,${lat},${lon});
        way["waterway"~"river|stream|canal"](around:500,${lat},${lon});
        way["water"~"lake|reservoir|pond|river"](around:2000,${lat},${lon});
      );
      out tags center;
    `;

    const response = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `data=${encodeURIComponent(query)}`,
    });

    if (!response.ok) return null;
    const data = await response.json();

    if (!data.elements?.length) return null;

    const candidates = data.elements
      .filter((el: any) => el.tags?.name || el.tags?.waterway || el.tags?.natural === 'water')
      .map((el: any) => {
        const cLat = el.center?.lat || el.lat || lat;
        const cLon = el.center?.lon || el.lon || lon;
        return {
          name: el.tags?.name || classifyName(el.tags),
          type: classifyWaterType(el.tags),
          sizeCategory: categorizeSizeFromTags(el.tags),
          osmId: el.id?.toString(),
          lat: cLat,
          lon: cLon,
          distanceFromUser: haversineMeters(lat, lon, cLat, cLon),
        };
      })
      .sort((a: DetectedWaterBody, b: DetectedWaterBody) => a.distanceFromUser - b.distanceFromUser);

    return candidates[0] || null;
  } catch {
    return null;
  }
}

function classifyWaterType(
  tags: Record<string, string> | undefined
): DetectedWaterBody['type'] {
  if (!tags) return 'unknown';
  if (tags.waterway === 'river') return 'river';
  if (tags.waterway === 'stream') return 'creek';
  if (tags.waterway === 'canal') return 'canal';
  if (tags.water === 'reservoir' || tags.landuse === 'reservoir') return 'reservoir';
  if (tags.water === 'lake') return 'lake';
  if (tags.water === 'pond') return 'pond';
  if (tags.water === 'river') return 'river';
  if (tags.natural === 'bay') return 'bay';
  if (tags.natural === 'coastline') return 'ocean';
  if (tags.natural === 'water') return 'lake'; // default for unnamed water
  return 'unknown';
}

function classifyName(tags: Record<string, string> | undefined): string {
  if (!tags) return 'Unknown Water';
  if (tags.waterway) return `Unnamed ${tags.waterway}`;
  if (tags.water) return `Unnamed ${tags.water}`;
  return 'Unnamed Water';
}

function categorizeSizeFromTags(
  tags: Record<string, string> | undefined
): DetectedWaterBody['sizeCategory'] {
  if (!tags) return 'small-lake';
  if (tags.waterway === 'stream') return 'creek';
  if (tags.waterway === 'river') return 'small-river';
  if (tags.waterway === 'canal') return 'small-river';
  if (tags.water === 'pond') return 'pond';
  if (tags.water === 'reservoir') return 'large-reservoir';
  if (tags.natural === 'bay') return 'saltwater-inshore';
  if (tags.natural === 'coastline') return 'saltwater-offshore';
  // Lakes — can't determine size from tags alone, default to medium
  return 'medium-lake';
}

function haversineMeters(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371000; // meters
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
