import type { GearCategory } from '../types';

export const gearCategories: GearCategory[] = [
  {
    slug: 'best-bass-rods-2026',
    name: 'Best Bass Rods 2026',
    description: 'Our picks for the best bass fishing rods in 2026, covering baitcasting and spinning setups for every budget and technique.',
    products: ['st-croix-bass-x', 'dobyns-fury', 'g-loomis-e6x', 'shimano-expride', 'abu-garcia-veritas', 'fenwick-hmg', 'ugly-stik-gx2', 'favorite-fishing-defender-casting', 'cashion-john-crews-casting', 'duckett-ghost-casting', 'favorite-fishing-defender-spinning'],
    faq: [
      { question: 'What power and action rod is best for bass fishing?', answer: 'A medium-heavy power, fast action rod is the most versatile bass rod. It handles Texas rigs, jigs, spinnerbaits, and most other bass techniques.' },
      { question: 'Should I use a baitcasting or spinning rod for bass?', answer: 'Baitcasting rods are preferred for most bass techniques due to better accuracy and power. Spinning rods are better for finesse techniques like drop shot and ned rig.' },
      { question: 'How much should I spend on a bass rod?', answer: 'A quality bass rod starts around $80-100 for entry level. Tournament-quality rods run $130-250. Diminishing returns above $250.' },
    ]
  },
  {
    slug: 'best-spinning-reels-2026',
    name: 'Best Spinning Reels 2026',
    description: 'Top spinning reels for freshwater and saltwater fishing, from budget-friendly to premium options.',
    products: ['daiwa-bg', 'shimano-stradic-fl', 'penn-battle-iii', 'pflueger-president', 'shimano-vanford', 'daiwa-exist', 'abu-garcia-revo-sx', 'piscifun-carbon-x-3000', 'tsunami-saltx-4000'],
    faq: [
      { question: 'What size spinning reel do I need?', answer: 'Size 2500 for bass/trout/crappie, 3000-4000 for inshore saltwater, 5000+ for offshore and surf fishing.' },
      { question: 'What gear ratio is best for a spinning reel?', answer: '6.2:1 is the most versatile. Higher ratios (7:1+) for finesse, lower (5.2:1) for cranking and saltwater.' },
      { question: 'How important is the drag system?', answer: 'Very important. Carbon fiber drag systems are smoother and more reliable than felt. Look for at least 10-15 lbs of drag for freshwater.' },
    ]
  },
  {
    slug: 'best-baitcasting-reels-2026',
    name: 'Best Baitcasting Reels 2026',
    description: 'The best baitcasting reels for bass fishing and beyond, with options for beginners through pros.',
    products: ['abu-garcia-revo-x', 'shimano-slx-dc', 'shimano-curado-k', 'daiwa-tatula-sv-tw', 'abu-garcia-revo-rocket', 'lews-tournament-pro', 'shimano-metanium', '13-fishing-concept-z3', '13-fishing-origin-a', 'kastking-speed-demon-pro'],
    faq: [
      { question: 'Why do baitcasting reels backlash?', answer: 'Backlash occurs when the spool spins faster than line leaves. Modern reels have braking systems to minimize this. Start with brakes set high and reduce as you improve.' },
      { question: 'What gear ratio should I choose?', answer: '7.1:1 is versatile for most bass techniques. 6.3:1 for crankbaits and spinnerbaits. 8.1:1+ for pitching, flipping, and topwater.' },
      { question: 'Are expensive baitcasters worth it?', answer: 'Mid-range reels ($120-180) offer the best value. Premium reels ($200+) are lighter and smoother but the performance gap narrows each year.' },
    ]
  },
  {
    slug: 'best-fish-finders-2026',
    name: 'Best Fish Finders 2026',
    description: 'Fish finders and depth finders for every budget, from kayak-friendly units to full-featured boat electronics.',
    products: ['garmin-striker-4', 'garmin-striker-vivid-7cv', 'lowrance-hook-reveal-7', 'humminbird-helix-7', 'garmin-echomap-uhd2', 'lowrance-hds-live-9', 'garmin-livescope-plus'],
    faq: [
      { question: 'Do I really need a fish finder?', answer: 'A fish finder dramatically improves your ability to locate fish, structure, and depth changes. Even a basic unit is a game-changer, especially on unfamiliar water.' },
      { question: 'What is CHIRP sonar?', answer: 'CHIRP sends a range of frequencies rather than a single frequency, providing clearer and more detailed images of fish and structure below your boat.' },
      { question: 'Can I use a fish finder on a kayak?', answer: 'Yes. The Garmin Striker 4 and similar compact units are popular kayak choices. Use a portable mounting system and small battery.' },
    ]
  },
  {
    slug: 'best-fishing-kayaks-2026',
    name: 'Best Fishing Kayaks 2026',
    description: 'Purpose-built fishing kayaks with features like rod holders, tackle storage, and stable platforms for standing.',
    products: ['pelican-catch-mode-110', 'perception-pescador-pro-12', 'vibe-yellowfin-120', 'bonafide-ss127', 'hobie-mirage-passport-12', 'old-town-sportsman-pdl-120', 'hobie-mirage-pro-angler-14'],
    faq: [
      { question: 'Sit-on-top or sit-inside for fishing?', answer: 'Sit-on-top is overwhelmingly preferred for fishing — easier to cast, more storage, self-draining, and you can stand on wider models.' },
      { question: 'How long should a fishing kayak be?', answer: '12-13 feet is the sweet spot for stability, speed, and maneuverability. Shorter for small ponds, longer for open water.' },
      { question: 'Do I need a pedal-drive kayak?', answer: 'Pedal drives are a luxury that keeps hands free for fishing. Paddle kayaks cost less and work great. Try paddle first before investing in pedal.' },
    ]
  },
  {
    slug: 'best-fluorocarbon-line',
    name: 'Best Fishing Line 2026',
    description: 'Top fluorocarbon, braided, and monofilament lines for every fishing application.',
    products: ['berkley-trilene-xl', 'seaguar-invizx', 'seaguar-tatsu', 'berkley-fireline', 'sufix-832', 'powerpro-super-8-slick', 'berkley-trilene-mono'],
    faq: [
      { question: 'When should I use fluorocarbon?', answer: 'Use fluorocarbon in clear water, for finesse techniques, and as leader material with braided main line. Its near-invisibility gives you an edge with line-shy fish.' },
      { question: 'Can I use fluorocarbon as a main line?', answer: 'Yes, on baitcasting reels. It is stiffer than mono and can cause issues on spinning reels. Many anglers use braid with a fluorocarbon leader instead.' },
      { question: 'What pound test fluorocarbon should I use for bass?', answer: '10-12 lb for finesse, 12-15 lb for general use, 15-20 lb for flipping and heavy cover. As leader: match to your braid or go slightly lighter.' },
    ]
  },
  {
    slug: 'best-braided-line',
    name: 'Best Braided Line 2026',
    description: 'Premium braided fishing lines for maximum sensitivity, strength, and casting distance.',
    products: ['berkley-fireline', 'sufix-832', 'kastking-superpower', 'powerpro-super-8-slick'],
    faq: [
      { question: 'What lb test braid should I use?', answer: '30 lb braid has the diameter of 8 lb mono. Use 20-30 lb for freshwater bass, 30-50 lb for saltwater, 50-80 lb for heavy cover flipping.' },
      { question: 'Do I need a leader with braided line?', answer: 'Usually yes. Braid is visible in clear water. Tie a fluorocarbon leader (2-4 feet) using an FG knot or Alberto knot for best results.' },
      { question: 'What color braid is best?', answer: 'Color matters less since you use a leader. Green blends in most water. High-vis yellow/green helps you see bites and line direction. Avoid white in clear water.' },
    ]
  },
  {
    slug: 'best-bass-lures',
    name: 'Best Bass Lures',
    description: 'Essential bass lures every angler needs in their tackle box, from soft plastics to hard baits.',
    products: ['berkley-powerbait', 'mustad-ewg-worm-hook', 'berkley-gulp-shrimp'],
    faq: [
      { question: 'What is the single best bass lure?', answer: 'A green pumpkin soft plastic worm on a Texas rig. It catches bass in every state, every season, and every water type. If you only carry one lure, this is it.' },
      { question: 'How many bass lures do I really need?', answer: 'Start with 5 essentials: soft plastic worm (Texas rig), spinnerbait, square bill crankbait, topwater popper, and a jig. These cover 90% of bass fishing situations.' },
      { question: 'What lure color works in any water?', answer: 'Green pumpkin is the most versatile soft plastic color. For hard baits: shad/silver in clear water, chartreuse/white in stained water.' },
    ]
  },
  {
    slug: 'best-fishing-sunglasses',
    name: 'Best Fishing Sunglasses 2026',
    description: 'Polarized fishing sunglasses that cut glare and let you see fish, structure, and bottom beneath the surface.',
    products: ['costa-fantail', 'costa-tuna-alley', 'oakley-split-shot', 'smith-guides-choice', 'strike-king-s11', 'maui-jim-peahi'],
    faq: [
      { question: 'What lens color is best for fishing?', answer: 'Copper/amber is the most versatile — enhances contrast in most conditions. Green mirror for bright sun and offshore. Yellow for low light. Gray for comfort.' },
      { question: 'Glass or polycarbonate lenses?', answer: 'Glass (like Costa 580G) is clearer and more scratch-resistant but heavier and more expensive. Polycarbonate is lighter, cheaper, and impact-resistant. Both polarize well.' },
      { question: 'Do cheap polarized sunglasses work for fishing?', answer: 'They help reduce glare but premium lenses from Costa, Smith, or Maui Jim offer noticeably better clarity and sight-fishing ability. For serious sight fishing, invest in quality.' },
    ]
  },
  {
    slug: 'best-fishing-coolers',
    name: 'Best Coolers for Fishing 2026',
    description: 'Rugged coolers built for fishing trips, from hard-sided boat coolers to portable soft coolers for wading.',
    products: ['yeti-tundra-45', 'yeti-hopper-flip', 'rtic-45', 'igloo-bmx-52', 'engel-hd30', 'canyon-outfitter-55', 'coleman-xtreme-70'],
    faq: [
      { question: 'Is YETI worth the price?', answer: 'YETI coolers are extremely durable and hold ice for days. If you fish frequently and need reliable ice retention, yes. For occasional use, budget rotomolded coolers work fine.' },
      { question: 'Hard cooler or soft cooler for fishing?', answer: 'Hard coolers for boats and trucks — better ice retention and can double as a seat. Soft coolers for kayaks, wading, and portability.' },
      { question: 'How long will a YETI keep ice?', answer: 'A YETI Tundra 45 keeps ice 3-5 days in typical conditions. Pre-chill the cooler, use block ice, and keep it in shade for maximum retention.' },
    ]
  },
  {
    slug: 'best-tackle-storage-2026',
    name: 'Best Tackle Storage 2026',
    description: 'Tackle boxes, bags, and backpacks to organize your gear — from individual utility boxes to full tackle systems.',
    products: ['plano-3700-stowaway', 'plano-guide-series', 'flambeau-tuff-tainer-4007', 'plano-weekend-series-bag', 'plano-z-series-backpack', 'plano-v-crate', 'bass-mafia-bait-coffin'],
    faq: [
      { question: 'What size tackle box do I need?', answer: '3600 size for light tackle (crappie, trout). 3700 size for bass and general use — the most popular. 3700 deep for large swimbaits and big jigs.' },
      { question: 'Hard tackle box or soft bag?', answer: 'Hard boxes protect lures better and resist crushing. Soft bags are more portable, comfortable to carry, and fit more in tight spaces like kayaks. Many anglers use a soft bag filled with hard utility boxes.' },
      { question: 'How do I prevent rust on my tackle?', answer: 'Use Zerust-treated boxes like Flambeau Tuff Tainers for saltwater. Rinse hooks in freshwater after salt use. Store tackle in a dry place. Replace rusted hooks immediately.' },
    ]
  },
  {
    slug: 'best-beginner-combos-2026',
    name: 'Best Beginner Fishing Combos 2026',
    description: 'Ready-to-fish rod and reel combos for beginners, kids, and anyone who wants a simple all-in-one setup.',
    products: ['ugly-stik-gx2-combo', 'abu-garcia-max-x-combo', 'lews-mach-smash-combo', 'pflueger-trion-combo', 'abu-garcia-revo-x-combo', 'ugly-stik-gx2-casting-combo', 'shakespeare-catch-more-fish'],
    faq: [
      { question: 'What is the best beginner fishing combo?', answer: 'The Ugly Stik GX2 Spinning Combo ($50) is the most recommended beginner setup. Nearly indestructible, capable of catching any freshwater species, and requires zero knowledge to start.' },
      { question: 'Spinning or baitcasting combo for beginners?', answer: 'Spinning combos. They are dramatically easier to learn and cast. Start with spinning and consider baitcasting after 6-12 months of practice.' },
      { question: 'Do combos come with line?', answer: 'Most combos come pre-spooled with monofilament line. This is fine for getting started. You can upgrade the line later if desired.' },
    ]
  },
];
