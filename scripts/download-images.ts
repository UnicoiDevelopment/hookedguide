import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const UNSPLASH_ACCESS_KEY = '1xuZiFKaLbp-9KzrPXMxZzkt1lFDMUCqszmuDGSalPM';
const UNSPLASH_BASE = 'https://api.unsplash.com';
const WIKI_USER_AGENT = 'HookedGuide/1.0 (contact: jim@unicoidevelopment.com)';

// Rate limits
const WIKI_DELAY = 1000;      // 1 second
const UNSPLASH_DELAY = 75000;  // 75 seconds
const USFWS_DELAY = 2000;     // 2 seconds

// ─── Species Map ───
const speciesImageMap: Record<string, { scientific: string; common: string; unsplashAction: string }> = {
  'largemouth-bass': { scientific: 'Micropterus salmoides', common: 'largemouth bass', unsplashAction: 'largemouth bass fishing caught' },
  'smallmouth-bass': { scientific: 'Micropterus dolomieu', common: 'smallmouth bass', unsplashAction: 'smallmouth bass fishing caught' },
  'spotted-bass': { scientific: 'Micropterus punctulatus', common: 'spotted bass', unsplashAction: 'spotted bass fish caught' },
  'crappie': { scientific: 'Pomoxis nigromaculatus', common: 'crappie', unsplashAction: 'crappie fish caught' },
  'bluegill': { scientific: 'Lepomis macrochirus', common: 'bluegill', unsplashAction: 'bluegill sunfish caught' },
  'channel-catfish': { scientific: 'Ictalurus punctatus', common: 'channel catfish', unsplashAction: 'channel catfish caught' },
  'blue-catfish': { scientific: 'Ictalurus furcatus', common: 'blue catfish', unsplashAction: 'blue catfish large caught' },
  'flathead-catfish': { scientific: 'Pylodictis olivaris', common: 'flathead catfish', unsplashAction: 'flathead catfish caught' },
  'walleye': { scientific: 'Sander vitreus', common: 'walleye', unsplashAction: 'walleye fish caught fishing' },
  'rainbow-trout': { scientific: 'Oncorhynchus mykiss', common: 'rainbow trout', unsplashAction: 'rainbow trout fishing river' },
  'brown-trout': { scientific: 'Salmo trutta', common: 'brown trout', unsplashAction: 'brown trout fish caught' },
  'brook-trout': { scientific: 'Salvelinus fontinalis', common: 'brook trout', unsplashAction: 'brook trout fish caught' },
  'musky': { scientific: 'Esox masquinongy', common: 'muskellunge', unsplashAction: 'musky fish caught' },
  'northern-pike': { scientific: 'Esox lucius', common: 'northern pike', unsplashAction: 'northern pike fish caught' },
  'yellow-perch': { scientific: 'Perca flavescens', common: 'yellow perch', unsplashAction: 'yellow perch fish caught' },
  'striped-bass': { scientific: 'Morone saxatilis', common: 'striped bass', unsplashAction: 'striped bass fishing caught' },
  'white-bass': { scientific: 'Morone chrysops', common: 'white bass', unsplashAction: 'white bass fish caught angler' },
  'carp': { scientific: 'Cyprinus carpio', common: 'common carp', unsplashAction: 'carp fish caught' },
  'gar': { scientific: 'Lepisosteus osseus', common: 'longnose gar', unsplashAction: 'gar fish caught' },
  'sauger': { scientific: 'Sander canadensis', common: 'sauger', unsplashAction: 'sauger fish caught' },
  'redfish': { scientific: 'Sciaenops ocellatus', common: 'red drum', unsplashAction: 'redfish caught inshore fishing' },
  'speckled-trout': { scientific: 'Cynoscion nebulosus', common: 'spotted seatrout', unsplashAction: 'speckled trout caught fishing' },
  'flounder': { scientific: 'Paralichthys lethostigma', common: 'southern flounder', unsplashAction: 'flounder fish caught' },
  'snook': { scientific: 'Centropomus undecimalis', common: 'common snook', unsplashAction: 'snook fish caught fishing' },
  'tarpon': { scientific: 'Megalops atlanticus', common: 'tarpon', unsplashAction: 'tarpon jumping fishing' },
  'mahi-mahi': { scientific: 'Coryphaena hippurus', common: 'mahi mahi', unsplashAction: 'mahi mahi fish caught offshore' },
  'king-mackerel': { scientific: 'Scomberomorus cavalla', common: 'king mackerel', unsplashAction: 'king mackerel fish caught' },
  'grouper': { scientific: 'Epinephelus morio', common: 'red grouper', unsplashAction: 'grouper fish caught fishing' },
  'sheepshead': { scientific: 'Archosargus probatocephalus', common: 'sheepshead', unsplashAction: 'sheepshead fish caught' },
  'red-snapper': { scientific: 'Lutjanus campechanus', common: 'red snapper', unsplashAction: 'red snapper fish caught' },
};

const heroSearchTerms = [
  'fishing sunrise lake silhouette',
  'bass fishing boat morning mist',
  'fly fishing river mountains sunset',
  'fishing silhouette sunset lake',
];

// ─── Types ───
interface ManifestSpecies {
  id: string;
  action: string;
  idCredit: string;
  actionCredit: string;
}

interface Manifest {
  species: Record<string, ManifestSpecies>;
  hero: { main: string; credit: string };
  states: Record<string, { path: string; credit: string }>;
  techniques: Record<string, { path: string; credit: string }>;
}

// ─── Helpers ───
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function ensureDir(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function downloadFile(url: string, destPath: string): Promise<boolean> {
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': WIKI_USER_AGENT },
    });
    if (!response.ok) return false;
    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    console.error(`  Download error: ${err}`);
    return false;
  }
}

// ─── Wikipedia API ───
async function getWikimediaImage(scientificName: string): Promise<{ url: string; credit: string } | null> {
  try {
    const encoded = encodeURIComponent(scientificName.replace(/ /g, '_'));
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encoded}`, {
      headers: { 'User-Agent': WIKI_USER_AGENT },
    });
    if (!response.ok) return null;
    const data = await response.json();
    if (data.originalimage?.source) {
      return {
        url: data.originalimage.source,
        credit: `Wikimedia Commons — ${data.title}`,
      };
    }
    if (data.thumbnail?.source) {
      // Use thumbnail but request larger version
      const largeUrl = data.thumbnail.source.replace(/\/\d+px-/, '/800px-');
      return {
        url: largeUrl,
        credit: `Wikimedia Commons — ${data.title}`,
      };
    }
    return null;
  } catch {
    return null;
  }
}

// ─── Unsplash API ───
async function searchUnsplash(query: string): Promise<{ url: string; credit: string; downloadLocation: string } | null> {
  try {
    const url = new URL(`${UNSPLASH_BASE}/search/photos`);
    url.searchParams.set('query', query);
    url.searchParams.set('orientation', 'landscape');
    url.searchParams.set('per_page', '1');
    const response = await fetch(url.toString(), {
      headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
    });
    if (!response.ok) return null;
    const data = await response.json();
    if (!data.results?.length) return null;
    const photo = data.results[0];
    return {
      url: photo.urls.regular,
      credit: `Photo by ${photo.user.name} on Unsplash`,
      downloadLocation: photo.links.download_location,
    };
  } catch {
    return null;
  }
}

async function triggerUnsplashDownload(downloadLocation: string): Promise<void> {
  try {
    await fetch(`${downloadLocation}?client_id=${UNSPLASH_ACCESS_KEY}`);
  } catch { /* best effort */ }
}

// ─── State search terms (keep existing) ───
const stateSearchTerms: Record<string, string> = {
  'alabama': 'Alabama fishing lake', 'alaska': 'Alaska fishing river', 'arizona': 'Arizona fishing lake desert',
  'arkansas': 'Arkansas Ozark river fishing', 'california': 'California fishing coast', 'colorado': 'Colorado mountain river fishing',
  'connecticut': 'Connecticut river fishing', 'delaware': 'Delaware Bay fishing', 'florida': 'Florida fishing coast',
  'georgia': 'Georgia lake fishing', 'hawaii': 'Hawaii ocean fishing', 'idaho': 'Idaho mountain river fishing',
  'illinois': 'Illinois lake fishing', 'indiana': 'Indiana lake fishing', 'iowa': 'Iowa river fishing',
  'kansas': 'Kansas reservoir fishing', 'kentucky': 'Kentucky Lake fishing', 'louisiana': 'Louisiana bayou fishing marsh',
  'maine': 'Maine lake fishing', 'maryland': 'Maryland Chesapeake Bay fishing', 'massachusetts': 'Massachusetts Cape Cod fishing',
  'michigan': 'Michigan Great Lakes fishing', 'minnesota': 'Minnesota lake fishing', 'mississippi': 'Mississippi river fishing',
  'missouri': 'Missouri Ozark stream fishing', 'montana': 'Montana fly fishing river', 'nebraska': 'Nebraska Sandhills lake fishing',
  'nevada': 'Nevada desert lake fishing', 'new-hampshire': 'New Hampshire lake fishing', 'new-jersey': 'New Jersey shore fishing',
  'new-mexico': 'New Mexico mountain lake fishing', 'new-york': 'New York Finger Lakes fishing', 'north-carolina': 'North Carolina mountain fishing',
  'north-dakota': 'North Dakota lake fishing', 'ohio': 'Ohio Lake Erie fishing', 'oklahoma': 'Oklahoma lake reservoir fishing',
  'oregon': 'Oregon river fishing', 'pennsylvania': 'Pennsylvania creek fly fishing', 'rhode-island': 'Rhode Island coast fishing',
  'south-carolina': 'South Carolina lowcountry fishing', 'south-dakota': 'South Dakota Missouri River fishing',
  'tennessee': 'Tennessee river reservoir fishing', 'texas': 'Texas bass fishing lake', 'utah': 'Utah mountain lake fishing',
  'vermont': 'Vermont lake fishing', 'virginia': 'Virginia Chesapeake fishing', 'washington': 'Washington Pacific Northwest fishing',
  'west-virginia': 'West Virginia mountain stream fishing', 'wisconsin': 'Wisconsin Northwoods lake fishing', 'wyoming': 'Wyoming fly fishing river',
};

const techniqueSearchTerms: Record<string, string> = {
  'texas-rig': 'bass fishing soft plastic worm', 'carolina-rig': 'bass fishing bottom rig',
  'drop-shot': 'finesse bass fishing drop shot', 'ned-rig': 'ned rig bass fishing',
  'wacky-rig': 'wacky rig senko bass', 'jigging': 'vertical jigging fish',
  'crankbait': 'crankbait fishing', 'topwater': 'topwater fishing bass explosion',
  'spinnerbait': 'spinnerbait fishing', 'fly-fishing-basics': 'fly fishing trout river',
  'trolling': 'trolling fishing boat', 'bottom-fishing': 'bottom fishing ocean',
  'drift-fishing': 'drift fishing river', 'surf-fishing': 'surf fishing beach',
  'kayak-fishing': 'kayak fishing', 'ice-fishing': 'ice fishing winter',
  'live-bait': 'live bait minnow fishing', 'artificial-lure-selection': 'fishing lure tackle box',
  'night-fishing': 'night fishing lights', 'noodling': 'catfish noodling',
};

// ─── Main ───
async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const speciesOnly = args.includes('--species-only');
  const statesOnly = args.includes('--states-only');
  const techniquesOnly = args.includes('--techniques-only');
  const heroOnly = args.includes('--hero-only');
  const downloadAll = !speciesOnly && !statesOnly && !techniquesOnly && !heroOnly;

  const outputBase = path.resolve(__dirname, '..', 'public', 'images');
  const manifestPath = path.join(outputBase, 'images-manifest.json');

  let manifest: Manifest = { species: {}, hero: { main: '', credit: '' }, states: {}, techniques: {} };
  if (fs.existsSync(manifestPath)) {
    try { manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8')); } catch { /* start fresh */ }
  }

  // === HERO IMAGE ===
  if (downloadAll || heroOnly) {
    console.log('\n=== Downloading hero image ===\n');
    const heroDir = path.join(outputBase, 'hero');
    ensureDir(heroDir);
    const heroPath = path.join(heroDir, 'hero-main.jpg');
    if (!fs.existsSync(heroPath)) {
      for (const term of heroSearchTerms) {
        console.log(`Searching Unsplash: "${term}"`);
        const result = await searchUnsplash(term);
        if (result) {
          const ok = await downloadFile(result.url, heroPath);
          if (ok) {
            await triggerUnsplashDownload(result.downloadLocation);
            manifest.hero = { main: '/images/hero/hero-main.jpg', credit: result.credit };
            console.log(`  SUCCESS: ${result.credit}`);
            break;
          }
        }
        await sleep(UNSPLASH_DELAY);
      }
    } else {
      console.log('SKIP (exists): hero-main.jpg');
    }
  }

  // === SPECIES IMAGES ===
  if (downloadAll || speciesOnly) {
    console.log('\n=== Downloading species images ===\n');
    const speciesDir = path.join(outputBase, 'species');
    ensureDir(speciesDir);
    const slugs = Object.keys(speciesImageMap);

    for (let i = 0; i < slugs.length; i++) {
      const slug = slugs[i];
      const spec = speciesImageMap[slug];
      const idPath = path.join(speciesDir, `${slug}-id.jpg`);
      const actionPath = path.join(speciesDir, `${slug}-action.jpg`);

      // --- ID Photo (Wikipedia) ---
      if (!fs.existsSync(idPath)) {
        console.log(`[${i + 1}/${slugs.length}] ID photo: ${slug} (${spec.scientific})`);
        const wikiResult = await getWikimediaImage(spec.scientific);
        if (wikiResult) {
          const ok = await downloadFile(wikiResult.url, idPath);
          if (ok) {
            console.log(`  SUCCESS (Wikipedia): ${wikiResult.credit}`);
            if (!manifest.species[slug]) manifest.species[slug] = { id: '', action: '', idCredit: '', actionCredit: '' };
            manifest.species[slug].id = `/images/species/${slug}-id.jpg`;
            manifest.species[slug].idCredit = wikiResult.credit;
          } else {
            console.log(`  FAILED to download Wikipedia image`);
          }
        } else {
          console.log(`  No Wikipedia image found, trying Unsplash fallback...`);
          const unsplashResult = await searchUnsplash(`${spec.common} fish identification`);
          if (unsplashResult) {
            const ok = await downloadFile(unsplashResult.url, idPath);
            if (ok) {
              await triggerUnsplashDownload(unsplashResult.downloadLocation);
              if (!manifest.species[slug]) manifest.species[slug] = { id: '', action: '', idCredit: '', actionCredit: '' };
              manifest.species[slug].id = `/images/species/${slug}-id.jpg`;
              manifest.species[slug].idCredit = unsplashResult.credit;
              console.log(`  SUCCESS (Unsplash fallback): ${unsplashResult.credit}`);
            }
          }
          await sleep(UNSPLASH_DELAY);
        }
        await sleep(WIKI_DELAY);
      } else {
        console.log(`[${i + 1}/${slugs.length}] SKIP (exists): ${slug}-id.jpg`);
      }

      // --- Action Photo (Unsplash) ---
      if (!fs.existsSync(actionPath)) {
        console.log(`[${i + 1}/${slugs.length}] Action photo: ${slug}`);
        const result = await searchUnsplash(spec.unsplashAction);
        if (result) {
          const ok = await downloadFile(result.url, actionPath);
          if (ok) {
            await triggerUnsplashDownload(result.downloadLocation);
            if (!manifest.species[slug]) manifest.species[slug] = { id: '', action: '', idCredit: '', actionCredit: '' };
            manifest.species[slug].action = `/images/species/${slug}-action.jpg`;
            manifest.species[slug].actionCredit = result.credit;
            console.log(`  SUCCESS (Unsplash): ${result.credit}`);
          }
        } else {
          console.log(`  FAILED: No Unsplash result for action photo`);
        }
        await sleep(UNSPLASH_DELAY);
      } else {
        console.log(`[${i + 1}/${slugs.length}] SKIP (exists): ${slug}-action.jpg`);
      }
    }
  }

  // === STATE IMAGES ===
  if (downloadAll || statesOnly) {
    console.log('\n=== Downloading state images ===\n');
    const statesDir = path.join(outputBase, 'states');
    ensureDir(statesDir);
    const slugs = Object.keys(stateSearchTerms);
    for (let i = 0; i < slugs.length; i++) {
      const slug = slugs[i];
      const destPath = path.join(statesDir, `${slug}.jpg`);
      if (fs.existsSync(destPath)) {
        console.log(`[${i + 1}/${slugs.length}] SKIP (exists): ${slug}`);
        continue;
      }
      console.log(`[${i + 1}/${slugs.length}] State: ${slug}`);
      const result = await searchUnsplash(stateSearchTerms[slug]);
      if (result) {
        const ok = await downloadFile(result.url, destPath);
        if (ok) {
          await triggerUnsplashDownload(result.downloadLocation);
          manifest.states[slug] = { path: `/images/states/${slug}.jpg`, credit: result.credit };
          console.log(`  SUCCESS: ${result.credit}`);
        }
      }
      if (i < slugs.length - 1) await sleep(UNSPLASH_DELAY);
    }
  }

  // === TECHNIQUE IMAGES ===
  if (downloadAll || techniquesOnly) {
    console.log('\n=== Downloading technique images ===\n');
    const techDir = path.join(outputBase, 'techniques');
    ensureDir(techDir);
    const slugs = Object.keys(techniqueSearchTerms);
    for (let i = 0; i < slugs.length; i++) {
      const slug = slugs[i];
      const destPath = path.join(techDir, `${slug}.jpg`);
      if (fs.existsSync(destPath)) {
        console.log(`[${i + 1}/${slugs.length}] SKIP (exists): ${slug}`);
        continue;
      }
      console.log(`[${i + 1}/${slugs.length}] Technique: ${slug}`);
      const result = await searchUnsplash(techniqueSearchTerms[slug]);
      if (result) {
        const ok = await downloadFile(result.url, destPath);
        if (ok) {
          await triggerUnsplashDownload(result.downloadLocation);
          manifest.techniques[slug] = { path: `/images/techniques/${slug}.jpg`, credit: result.credit };
          console.log(`  SUCCESS: ${result.credit}`);
        }
      }
      if (i < slugs.length - 1) await sleep(UNSPLASH_DELAY);
    }
  }

  // Write manifest
  ensureDir(path.dirname(manifestPath));
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\n=== Manifest written to ${manifestPath} ===`);
  console.log('Done!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
