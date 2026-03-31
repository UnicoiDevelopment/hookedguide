/**
 * Image download script using Unsplash API
 * Downloads hero images for species, states, and techniques pages.
 *
 * Usage:
 *   npx ts-node scripts/download-images.ts
 *   npx ts-node scripts/download-images.ts --species-only
 *   npx ts-node scripts/download-images.ts --states-only
 *   npx ts-node scripts/download-images.ts --techniques-only
 */

import * as fs from 'fs';
import * as path from 'path';

const UNSPLASH_ACCESS_KEY = '1xuZiFKaLbp-9KzrPXMxZzkt1lFDMUCqszmuDGSalPM';
const BASE_URL = 'https://api.unsplash.com';
const RATE_LIMIT_DELAY_MS = 75_000; // 75 seconds between requests

// ─── Search term mappings ──────────────────────────────────────────────

const speciesSearchTerms: Record<string, string> = {
  'largemouth-bass': 'largemouth bass fish',
  'smallmouth-bass': 'smallmouth bass fish',
  'spotted-bass': 'spotted bass fish',
  'striped-bass': 'striped bass fish',
  'white-bass': 'white bass fish',
  'rock-bass': 'rock bass fish',
  'crappie': 'crappie fish',
  'bluegill': 'bluegill sunfish',
  'channel-catfish': 'channel catfish fish',
  'blue-catfish': 'blue catfish fish',
  'flathead-catfish': 'flathead catfish fish',
  'walleye': 'walleye fish',
  'sauger': 'sauger fish',
  'yellow-perch': 'yellow perch fish',
  'rainbow-trout': 'rainbow trout fish',
  'brown-trout': 'brown trout fish',
  'brook-trout': 'brook trout fish',
  'lake-trout': 'lake trout fish',
  'redfish': 'redfish red drum',
  'speckled-trout': 'speckled trout spotted seatrout',
  'flounder': 'flounder fish',
  'snook': 'snook fish',
  'tarpon': 'tarpon fish',
  'mahi-mahi': 'mahi mahi dolphin fish',
  'northern-pike': 'northern pike fish',
  'muskie': 'muskellunge musky fish',
  'carp': 'carp fish',
  'drum': 'freshwater drum fish',
  'bowfin': 'bowfin fish',
  'gar': 'longnose gar fish',
};

const stateSearchTerms: Record<string, string> = {
  'alabama': 'Alabama fishing lake',
  'alaska': 'Alaska fishing river',
  'arizona': 'Arizona fishing lake desert',
  'arkansas': 'Arkansas Ozark river fishing',
  'california': 'California fishing coast',
  'colorado': 'Colorado mountain river fishing',
  'connecticut': 'Connecticut river fishing',
  'delaware': 'Delaware Bay fishing',
  'florida': 'Florida fishing coast',
  'georgia': 'Georgia lake fishing',
  'hawaii': 'Hawaii ocean fishing',
  'idaho': 'Idaho mountain river fishing',
  'illinois': 'Illinois lake fishing',
  'indiana': 'Indiana lake fishing',
  'iowa': 'Iowa river fishing',
  'kansas': 'Kansas reservoir fishing',
  'kentucky': 'Kentucky Lake fishing',
  'louisiana': 'Louisiana bayou fishing marsh',
  'maine': 'Maine lake fishing',
  'maryland': 'Maryland Chesapeake Bay fishing',
  'massachusetts': 'Massachusetts Cape Cod fishing',
  'michigan': 'Michigan Great Lakes fishing',
  'minnesota': 'Minnesota lake fishing',
  'mississippi': 'Mississippi river fishing',
  'missouri': 'Missouri Ozark stream fishing',
  'montana': 'Montana fly fishing river',
  'nebraska': 'Nebraska Sandhills lake fishing',
  'nevada': 'Nevada desert lake fishing',
  'new-hampshire': 'New Hampshire lake fishing',
  'new-jersey': 'New Jersey shore fishing',
  'new-mexico': 'New Mexico mountain lake fishing',
  'new-york': 'New York Finger Lakes fishing',
  'north-carolina': 'North Carolina mountain fishing',
  'north-dakota': 'North Dakota lake fishing',
  'ohio': 'Ohio Lake Erie fishing',
  'oklahoma': 'Oklahoma lake reservoir fishing',
  'oregon': 'Oregon river fishing',
  'pennsylvania': 'Pennsylvania creek fly fishing',
  'rhode-island': 'Rhode Island coast fishing',
  'south-carolina': 'South Carolina lowcountry fishing',
  'south-dakota': 'South Dakota Missouri River fishing',
  'tennessee': 'Tennessee river reservoir fishing',
  'texas': 'Texas bass fishing lake',
  'utah': 'Utah mountain lake fishing',
  'vermont': 'Vermont lake fishing',
  'virginia': 'Virginia Chesapeake fishing',
  'washington': 'Washington Pacific Northwest fishing',
  'west-virginia': 'West Virginia mountain stream fishing',
  'wisconsin': 'Wisconsin Northwoods lake fishing',
  'wyoming': 'Wyoming fly fishing river',
};

const techniqueSearchTerms: Record<string, string> = {
  'texas-rig': 'bass fishing soft plastic worm',
  'carolina-rig': 'bass fishing bottom rig',
  'drop-shot': 'finesse bass fishing drop shot',
  'ned-rig': 'ned rig bass fishing',
  'jig-fishing': 'bass jig fishing',
  'crankbait-fishing': 'crankbait fishing',
  'topwater-fishing': 'topwater fishing bass explosion',
  'spinnerbait-fishing': 'spinnerbait fishing',
  'fly-fishing': 'fly fishing trout river',
  'trolling': 'trolling fishing boat',
  'jigging': 'vertical jigging fish',
  'live-bait-fishing': 'live bait minnow fishing',
  'surf-fishing': 'surf fishing beach',
  'kayak-fishing': 'kayak fishing',
  'ice-fishing': 'ice fishing winter',
  'noodling': 'catfish noodling',
  'float-fishing': 'float bobber fishing',
  'bottom-fishing': 'bottom fishing ocean',
  'sight-fishing': 'sight fishing shallow flats',
  'wade-fishing': 'wade fishing river stream',
};

// ─── Types ──────────────────────────────────────────────────────────────

interface ImageManifestEntry {
  slug: string;
  category: 'species' | 'states' | 'techniques';
  path: string;
  credit: string;
  creditUrl: string;
  unsplashId: string;
}

interface UnsplashPhoto {
  id: string;
  urls: { regular: string; small: string; medium?: string };
  user: { name: string; links: { html: string } };
  links: { download_location: string };
}

// ─── Helpers ────────────────────────────────────────────────────────────

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function searchUnsplash(query: string): Promise<UnsplashPhoto | null> {
  const url = new URL(`${BASE_URL}/search/photos`);
  url.searchParams.set('query', query);
  url.searchParams.set('orientation', 'landscape');
  url.searchParams.set('per_page', '1');

  const response = await fetch(url.toString(), {
    headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
  });

  if (!response.ok) {
    console.error(`  Unsplash API error: ${response.status} ${response.statusText}`);
    return null;
  }

  const data = await response.json();
  if (!data.results || data.results.length === 0) {
    console.error(`  No results for query: "${query}"`);
    return null;
  }

  return data.results[0] as UnsplashPhoto;
}

async function triggerDownload(photo: UnsplashPhoto): Promise<void> {
  // Unsplash API guidelines require triggering the download endpoint
  try {
    await fetch(`${photo.links.download_location}?client_id=${UNSPLASH_ACCESS_KEY}`);
  } catch {
    // Non-critical: best effort
  }
}

async function downloadImage(imageUrl: string, destPath: string): Promise<boolean> {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      console.error(`  Failed to download image: ${response.status}`);
      return false;
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    console.error(`  Download error: ${err}`);
    return false;
  }
}

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// ─── Main download logic ────────────────────────────────────────────────

async function downloadCategory(
  searchTerms: Record<string, string>,
  category: 'species' | 'states' | 'techniques',
  manifest: ImageManifestEntry[],
): Promise<void> {
  const outputDir = path.resolve(__dirname, '..', 'public', 'images', category);
  ensureDir(outputDir);

  const slugs = Object.keys(searchTerms);
  console.log(`\n=== Downloading ${category} images (${slugs.length} items) ===\n`);

  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    const query = searchTerms[slug];
    const destPath = path.join(outputDir, `${slug}.jpg`);

    // Skip existing images (re-runnable)
    if (fs.existsSync(destPath)) {
      console.log(`[${i + 1}/${slugs.length}] SKIP (exists): ${slug}`);
      // Still add to manifest if not already there
      const existing = manifest.find(m => m.slug === slug && m.category === category);
      if (!existing) {
        manifest.push({
          slug,
          category,
          path: `/images/${category}/${slug}.jpg`,
          credit: 'Previously downloaded',
          creditUrl: '',
          unsplashId: '',
        });
      }
      continue;
    }

    console.log(`[${i + 1}/${slugs.length}] Searching: "${query}" (${slug})`);

    const photo = await searchUnsplash(query);
    if (!photo) {
      console.log(`  FAILED: No photo found for ${slug}`);
      if (i < slugs.length - 1) {
        console.log(`  Waiting ${RATE_LIMIT_DELAY_MS / 1000}s for rate limit...`);
        await sleep(RATE_LIMIT_DELAY_MS);
      }
      continue;
    }

    // Use the "regular" size (1080px width)
    const imageUrl = photo.urls.regular;
    console.log(`  Downloading from Unsplash (photo: ${photo.id}, by ${photo.user.name})`);

    const success = await downloadImage(imageUrl, destPath);
    if (success) {
      // Trigger download event per Unsplash guidelines
      await triggerDownload(photo);

      manifest.push({
        slug,
        category,
        path: `/images/${category}/${slug}.jpg`,
        credit: photo.user.name,
        creditUrl: photo.user.links.html,
        unsplashId: photo.id,
      });

      console.log(`  SUCCESS: Saved to ${destPath}`);
      console.log(`  Credit: Photo by ${photo.user.name} on Unsplash`);
    } else {
      console.log(`  FAILED: Could not download image for ${slug}`);
    }

    // Rate limit delay between requests (skip after last item)
    if (i < slugs.length - 1) {
      console.log(`  Waiting ${RATE_LIMIT_DELAY_MS / 1000}s for rate limit...`);
      await sleep(RATE_LIMIT_DELAY_MS);
    }
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const speciesOnly = args.includes('--species-only');
  const statesOnly = args.includes('--states-only');
  const techniquesOnly = args.includes('--techniques-only');
  const downloadAll = !speciesOnly && !statesOnly && !techniquesOnly;

  const manifestPath = path.resolve(__dirname, '..', 'public', 'images', 'images-manifest.json');

  // Load existing manifest if present
  let manifest: ImageManifestEntry[] = [];
  if (fs.existsSync(manifestPath)) {
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
      console.log(`Loaded existing manifest with ${manifest.length} entries.`);
    } catch {
      console.log('Could not parse existing manifest, starting fresh.');
      manifest = [];
    }
  }

  if (downloadAll || speciesOnly) {
    await downloadCategory(speciesSearchTerms, 'species', manifest);
  }

  if (downloadAll || statesOnly) {
    await downloadCategory(stateSearchTerms, 'states', manifest);
  }

  if (downloadAll || techniquesOnly) {
    await downloadCategory(techniqueSearchTerms, 'techniques', manifest);
  }

  // Ensure output directory for manifest exists
  ensureDir(path.dirname(manifestPath));

  // Write manifest
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\n=== Manifest written to ${manifestPath} (${manifest.length} entries) ===`);
  console.log('Done!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
