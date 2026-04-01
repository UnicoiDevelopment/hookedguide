/**
 * Seasonal Latitude Adjustments
 *
 * Maps month + region to species-specific seasonal context. Captures the
 * critical timing differences caused by latitude: spawn timing varies 6-8
 * weeks from south to north, and fall/winter patterns differ dramatically.
 */

export interface SeasonalContext {
  months: number[];
  regions: string[];
  speciesContext: Record<string, {
    pattern: string;
    spawnStatus: 'pre-spawn' | 'spawn' | 'post-spawn' | 'summer' | 'fall-feed' | 'winter' | 'ice';
    adjustment: string;
  }>;
}

export const seasonalLatitude: SeasonalContext[] = [
  // ===========================
  // JANUARY
  // ===========================
  {
    months: [1],
    regions: ['southeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Slow but fishable. Bass hold on deeper structure in 48-55F water. Mild days push fish shallow briefly.',
        spawnStatus: 'winter',
        adjustment: 'Fish slow-rolling spinnerbaits or jigs along channel ledges and deeper docks. Target warmest part of the afternoon.',
      },
      'crappie': {
        pattern: 'Winter crappie school tightly on brush piles and standing timber in 15-25ft depths.',
        spawnStatus: 'winter',
        adjustment: 'Vertical jig with minnows or small plastics over brush piles. Use electronics to pinpoint suspended schools.',
      },
      'redfish': {
        pattern: 'Redfish push into shallow mud flats on sunny days to warm up. Tailing activity on low tides.',
        spawnStatus: 'winter',
        adjustment: 'Sight-fish mud flats on warm sunny afternoons. Gold spoons and soft plastics on 1/4oz jig heads.',
      },
      'speckled-trout': {
        pattern: 'Specks stage in deep holes and channels near river mouths. Cold snaps can cause die-offs in shallow bays.',
        spawnStatus: 'winter',
        adjustment: 'Target deeper channels and holes with slow-sinking MirrOlures or live shrimp under a popping cork.',
      },
      'catfish': {
        pattern: 'Blue and channel cats concentrate in deep wintering holes below dams and in river bends.',
        spawnStatus: 'winter',
        adjustment: 'Anchor above deep holes and fish cut shad or skipjack on the bottom. Current seams below dams are productive.',
      },
    },
  },
  {
    months: [1],
    regions: ['northeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Bass are nearly dormant in 33-38F water. Metabolism is at its lowest. Only the most dedicated anglers fish them.',
        spawnStatus: 'winter',
        adjustment: 'Dead-stick a jig or drop-shot on the deepest available structure. Soak presentations for 30+ seconds between moves.',
      },
      'walleye': {
        pattern: 'Walleye remain active under ice and in open tailwaters. One of the few reliable winter targets.',
        spawnStatus: 'winter',
        adjustment: 'Fish dam tailwaters with blade baits and jigging spoons. In ice states, tip-ups with shiners near drop-offs.',
      },
      'trout': {
        pattern: 'Trout feed throughout winter in tailwaters and spring-fed streams where water stays 40-50F.',
        spawnStatus: 'winter',
        adjustment: 'Nymph deep runs with small midges and blue-winged olives. Slow drifts with split shot rigs. Fish midday warmth.',
      },
      'striped-bass': {
        pattern: 'Stripers hold in deep wintering holes in tidal rivers. Minimal feeding, but catchable on warm spells.',
        spawnStatus: 'winter',
        adjustment: 'Slow-troll bucktails or vertically jig deep channel edges in tidal rivers. Fish the warmest days.',
      },
    },
  },
  {
    months: [1],
    regions: ['midwest'],
    speciesContext: {
      'walleye': {
        pattern: 'Ice fishing prime time. Walleye active at dawn and dusk under the ice on main-lake flats near drop-offs.',
        spawnStatus: 'ice',
        adjustment: 'Tip-ups with large fatheads near deep breaks. Jigging Rapala or spoon tipped with minnow head at dusk.',
      },
      'crappie': {
        pattern: 'Crappie suspend 1-3ft off bottom over deep basin areas. One of the best ice-fishing targets.',
        spawnStatus: 'ice',
        adjustment: 'Small tungsten jigs tipped with wax worms or plastics. Use electronics to find suspended schools at 20-30ft.',
      },
      'northern-pike': {
        pattern: 'Pike aggressively feed under ice near weed edges and points. Best big-pike window of the year.',
        spawnStatus: 'ice',
        adjustment: 'Tip-ups with large suckers or shiners set 2-3ft off bottom near green weed edges. Check frequently.',
      },
      'largemouth-bass': {
        pattern: 'Bass are dormant and mostly uncatchable under ice. Not a viable target in January.',
        spawnStatus: 'ice',
        adjustment: 'Focus on other species. If targeting bass, dead-stick a tiny jig near deep wood cover.',
      },
      'bluegill': {
        pattern: 'Bluegill feed actively under ice in soft-bottom basins. Excellent panfish opportunity.',
        spawnStatus: 'ice',
        adjustment: 'Micro jigs tipped with wax worms or spikes. Drill multiple holes and stay mobile until you find a school.',
      },
    },
  },
  {
    months: [1],
    regions: ['southwest', 'west'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Desert reservoirs in AZ and southern CA stay fishable at 50-58F. Bass relate to rocky banks and main-lake points.',
        spawnStatus: 'winter',
        adjustment: 'Jerkbaits and small jigs along rocky banks. Fish the warmest afternoons for shallow bites. Slow retrieves.',
      },
      'rainbow-trout': {
        pattern: 'Stocked trout fishing peaks in put-and-take lakes. Mountain streams are frozen but tailwaters produce.',
        spawnStatus: 'winter',
        adjustment: 'PowerBait on bottom rigs in stocked lakes. Small nymphs and midges in tailwaters. Fish midday.',
      },
      'striped-bass': {
        pattern: 'Stripers school deep in western reservoirs. Boiling activity rare but fish catchable with electronics.',
        spawnStatus: 'winter',
        adjustment: 'Use sonar to locate deep schools at 40-60ft. Vertically spoon or drop-shot with swimbaits.',
      },
      'brown-trout': {
        pattern: 'Post-spawn browns recovering in deeper pools of tailwaters. Feeding slowly increases through the month.',
        spawnStatus: 'post-spawn',
        adjustment: 'Streamer fishing in tailwaters on warmer afternoons. Woolly buggers and sculpins stripped slowly through deep runs.',
      },
    },
  },
  {
    months: [1],
    regions: ['pacific'],
    speciesContext: {
      'steelhead': {
        pattern: 'Winter steelhead run in full swing. Fish pushing into tributaries of the Columbia, coastal rivers of OR and WA.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Drift fishing with eggs, beads, or jigs under a float in river slots and tailouts. Fish low, slow, and persistent.',
      },
      'rainbow-trout': {
        pattern: 'Resident rainbows feed on winter nymphs in freestone streams. Slower metabolism but still catchable.',
        spawnStatus: 'winter',
        adjustment: 'Euro-nymph with small stonefly and midge patterns in deeper runs. Dead-drift tight to the bottom.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth nearly dormant in 38-42F river water. Holding in the deepest slow pools.',
        spawnStatus: 'winter',
        adjustment: 'Not a viable January target in the Pacific NW. Focus on steelhead and trout instead.',
      },
    },
  },

  // ===========================
  // FEBRUARY
  // ===========================
  {
    months: [2],
    regions: ['southeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Pre-spawn begins in the deep south. Bass move to staging areas near spawning flats as water reaches 55-60F.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Fish secondary points and channel swings near spawning pockets. Lipless crankbaits, jerkbaits, and crawfish-colored jigs.',
      },
      'crappie': {
        pattern: 'Crappie begin migrating from winter holes toward shallow spawning areas. Staging on channel edges and brush.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Spider-rig or slow-troll jigs along channel ledges leading to spawning flats. Minnows and chartreuse jigs.',
      },
      'redfish': {
        pattern: 'Reds become more active as water temps climb. Schooling activity increases around oyster bars and grass edges.',
        spawnStatus: 'winter',
        adjustment: 'Work oyster bar edges and grass lines with gold spoons and soft plastic paddletails. Morning incoming tides.',
      },
      'speckled-trout': {
        pattern: 'Specks start moving from deep winter holes back toward shallow flats. Baitfish activity increases.',
        spawnStatus: 'winter',
        adjustment: 'Popping corks with live shrimp over grass flats on warmer days. Soft plastic jigs in darker colors for stained water.',
      },
      'catfish': {
        pattern: 'Catfish begin feeding more aggressively as water temps rise into the mid-50s. Moving toward shallower flats.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Fresh cut bait on ledges and flats adjacent to deep holes. Drift rigs in river bends become productive.',
      },
    },
  },
  {
    months: [2],
    regions: ['northeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Still deep winter. Lakes may still be iced over. Tailwaters and tidal rivers offer only open-water option.',
        spawnStatus: 'winter',
        adjustment: 'Limited opportunities. Fish warm-water discharges if available. Jigs and blade baits dead-sticked on bottom.',
      },
      'trout': {
        pattern: 'Late winter trout fishing picks up slightly. Early black stonefly hatches begin in tailwaters.',
        spawnStatus: 'winter',
        adjustment: 'Fish small black stonefly nymphs and midges. Tailwater fishing improves on overcast warmer days.',
      },
      'walleye': {
        pattern: 'Walleye increasingly active as days lengthen. Ice anglers find fish moving shallower near spawning tributaries.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Ice fish near tributary mouths and shallow reefs. Aggressive jigging with Rapala and minnow tips works at dusk.',
      },
      'striped-bass': {
        pattern: 'Holdover stripers in rivers become more active. First signs of pre-run staging in tidal rivers.',
        spawnStatus: 'winter',
        adjustment: 'Vertical jig deep holes in tidal rivers. Bloodworm and clam baits on bottom rigs in harbors.',
      },
    },
  },
  {
    months: [2],
    regions: ['midwest'],
    speciesContext: {
      'walleye': {
        pattern: 'Late ice. Walleye staging near spawning reefs and tributary mouths. Feeding intensity increases before ice-out.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Ice fish aggressive presentations near shallow reefs. Jigging Rapalas and buckshot spoons. Sunset is prime.',
      },
      'northern-pike': {
        pattern: 'Pike move to staging areas near shallow bays where they will spawn shortly after ice-out.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Tip-ups near shallow bay entrances with large shiners. Pike feed heavily before the spawn.',
      },
      'crappie': {
        pattern: 'Late-ice crappie bite can be excellent. Fish move shallower as ice begins to thin.',
        spawnStatus: 'ice',
        adjustment: 'Fish shallower brush and weed edges. Small jigs tipped with minnows in 10-15ft near spawning bays.',
      },
      'largemouth-bass': {
        pattern: 'Still under ice and largely dormant. Not a viable target.',
        spawnStatus: 'ice',
        adjustment: 'Focus efforts on walleye, crappie, and pike. Bass remain inactive.',
      },
    },
  },
  {
    months: [2],
    regions: ['southwest', 'west'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Pre-spawn intensifies in desert reservoirs. Bass move to 5-12ft on main-lake flats and secondary points as water hits 56-62F.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Lipless crankbaits, jerkbaits, and Ned rigs on rocky flats. Target wind-blown banks that warm fastest.',
      },
      'rainbow-trout': {
        pattern: 'Excellent stocked trout fishing continues. Some wild rainbows begin showing pre-spawn behavior.',
        spawnStatus: 'pre-spawn',
        adjustment: 'PowerBait and small spinners in stocked lakes. Egg patterns and nymphs in streams with spawning fish.',
      },
      'brown-trout': {
        pattern: 'Post-spawn recovery complete. Browns feeding more aggressively on larger prey in tailwaters.',
        spawnStatus: 'post-spawn',
        adjustment: 'Streamer fishing improves. Larger profiles in natural colors. Swing through deep runs and undercut banks.',
      },
      'striped-bass': {
        pattern: 'Stripers remain deep but begin schooling more actively as shad spawn approaches in warmer reservoirs.',
        spawnStatus: 'winter',
        adjustment: 'Continue deep jigging with flutter spoons. Watch for occasional surface activity on warm afternoons.',
      },
    },
  },
  {
    months: [2],
    regions: ['pacific'],
    speciesContext: {
      'steelhead': {
        pattern: 'Peak winter steelhead on many coastal rivers. Fresh fish entering systems after rain events.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Focus on fresh arrivals after rain bumps. Jigs under floats and side-drifted eggs in holding water.',
      },
      'rainbow-trout': {
        pattern: 'Resident trout start feeding more as days lengthen. Early stonefly activity begins in some rivers.',
        spawnStatus: 'winter',
        adjustment: 'Nymph with stoneflies and midges. Look for early afternoon hatches of blue-winged olives on overcast days.',
      },
      'smallmouth-bass': {
        pattern: 'Still dormant in cold river water. Not a productive target yet.',
        spawnStatus: 'winter',
        adjustment: 'Wait for warmer months. Steelhead and trout remain the focus.',
      },
    },
  },

  // ===========================
  // MARCH
  // ===========================
  {
    months: [3],
    regions: ['southeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Full spawn in FL/LA/south TX. Pre-spawn to spawn in GA/AL/SC/NC. Water temps 62-70F. Best month of the year.',
        spawnStatus: 'spawn',
        adjustment: 'Sight-fish beds in clear water. Soft plastics on Texas rigs pitched to bedding fish. Swimbaits around staging areas.',
      },
      'crappie': {
        pattern: 'Spawn is on. Crappie flood into 2-6ft water around brush, docks, and stakebeds. Easiest crappie fishing of the year.',
        spawnStatus: 'spawn',
        adjustment: 'Cast or pitch small jigs and minnows to shallow cover. Docks and bridge pilings hold concentrations. Slow retrieves.',
      },
      'redfish': {
        pattern: 'Reds very active on warming flats. Schools push shallow aggressively chasing mullet and crabs.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Topwater plugs early morning over shallow flats. Gold spoons and paddletail plastics. Focus on moving tides.',
      },
      'speckled-trout': {
        pattern: 'Spring run begins. Specks move onto grass flats and around points feeding heavily on shrimp and mullet.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Popping corks with live shrimp or DOA shrimp over grass beds. Topwater plugs at dawn over 3-5ft flats.',
      },
      'catfish': {
        pattern: 'Channel cats scatter to feed across flats and into tributaries. Blue cats follow shad migrations upstream.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Drift rigs with cut shad on river flats. Tributaries with current produce channel cats on chicken liver and nightcrawlers.',
      },
    },
  },
  {
    months: [3],
    regions: ['northeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Ice-out on many lakes. Bass slowly emerging from winter torpor. Water still 38-45F. Very early pre-spawn at best.',
        spawnStatus: 'winter',
        adjustment: 'Fish dark-bottom bays that warm first. Suspending jerkbaits and blade baits with long pauses. Afternoons only.',
      },
      'trout': {
        pattern: 'Spring stocking begins. Wild trout start feeding more as water warms and early hatches appear.',
        spawnStatus: 'winter',
        adjustment: 'Fish newly stocked trout with PowerBait and spinners. Wild trout respond to nymphs. March brown mayflies in some streams.',
      },
      'walleye': {
        pattern: 'Walleye spawn run begins on tributaries and reefs. One of the best walleye fishing windows.',
        spawnStatus: 'spawn',
        adjustment: 'Fish below tributary dams and on shallow reefs at night. Jigs tipped with minnows. Slow and steady retrieves.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth still in deep winter holding areas. Not yet active enough to target reliably.',
        spawnStatus: 'winter',
        adjustment: 'Deep structure with hair jigs or blade baits. Very slow presentations. Better to wait for April.',
      },
    },
  },
  {
    months: [3],
    regions: ['midwest'],
    speciesContext: {
      'walleye': {
        pattern: 'Ice-out triggers the spawn run. Walleye pour into rivers and onto rocky reefs. Premier fishing event of the year.',
        spawnStatus: 'spawn',
        adjustment: 'Jig and minnow below dams and on rocky spawning reefs. Current seams and eddies in tributaries. Fish after dark.',
      },
      'northern-pike': {
        pattern: 'Pike spawn in shallow marshy bays right at ice-out. Some of the biggest pike of the year are caught now.',
        spawnStatus: 'spawn',
        adjustment: 'Fish shallow weedy bays with large suckers under a bobber. Spinnerbaits and jerkbaits along marsh edges.',
      },
      'crappie': {
        pattern: 'Still in transition. Crappie staging in 12-18ft near channels leading to spawning bays. Not yet shallow.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Vertical jig over deeper brush and channel edges. Minnows under slip bobbers. Patience with slow bites.',
      },
      'largemouth-bass': {
        pattern: 'Just emerged from ice-out. Bass lethargic in 40-48F water. Very early season with tough fishing.',
        spawnStatus: 'winter',
        adjustment: 'Jerkbaits with long pauses in dark-bottom bays. Jigs on steep banks near deep water. Fish warmest part of afternoon.',
      },
    },
  },
  {
    months: [3],
    regions: ['southwest', 'west'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Full pre-spawn to spawn in desert reservoirs. Water temps 60-68F. Biggest bass of the year come from beds.',
        spawnStatus: 'spawn',
        adjustment: 'Sight-fish spawning flats. Senkos and creature baits on Texas rigs. Swimbaits on pre-spawn staging points.',
      },
      'rainbow-trout': {
        pattern: 'Wild rainbows spawning in mountain streams (where open). Stocked lakes remain excellent.',
        spawnStatus: 'spawn',
        adjustment: 'Respect spawning closures on wild trout streams. Fish stocked lakes with spinners and bait. Tailwaters with egg patterns.',
      },
      'brown-trout': {
        pattern: 'Aggressive feeding in tailwaters. Browns keying on emerging caddis and early mayflies.',
        spawnStatus: 'summer',
        adjustment: 'Nymph with caddis pupae and mayfly nymphs. Streamer fishing on overcast days. Match emerging hatches.',
      },
      'striped-bass': {
        pattern: 'Stripers begin pushing shallow following threadfin shad. Surface schooling activity starts on warm afternoons.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Topwater walking baits and swimbaits early morning. Underspins and blade baits over submerged humps.',
      },
    },
  },

  // ===========================
  // APRIL
  // ===========================
  {
    months: [4],
    regions: ['southeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Post-spawn in deep south, spawn finishing in Carolinas. Bass transitioning to summer patterns. Water 68-75F.',
        spawnStatus: 'post-spawn',
        adjustment: 'Post-spawn bass hungry and aggressive. Topwater frogs, swimbaits, and spinnerbaits around spawning flat exits.',
      },
      'crappie': {
        pattern: 'Post-spawn crappie recuperating near deeper structure adjacent to spawning areas. Scattered but feeding.',
        spawnStatus: 'post-spawn',
        adjustment: 'Spider-rig or cast small jigs near deeper brush piles and boat docks. Minnows outfish plastics now.',
      },
      'redfish': {
        pattern: 'Excellent sight-fishing on flats. Reds aggressively feeding in shallow water with tailing activity on low tides.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Sight-cast to tailing reds with gold spoons and weedless soft plastics. Fly rod poppers are deadly.',
      },
      'speckled-trout': {
        pattern: 'Peak spring trout run. Specks stacked on grass flats and around passes feeding on shrimp migrations.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Live shrimp under popping corks is unbeatable. Topwater plugs at dawn. Work grass flat edges and points.',
      },
      'catfish': {
        pattern: 'Pre-spawn feeding frenzy. Trophy blue cats gorging on shad. Channel cats preparing to spawn.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Big cut skipjack baits for trophy blues on river ledges. Channel cats hit prepared baits in tributaries.',
      },
    },
  },
  {
    months: [4],
    regions: ['northeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Pre-spawn kicks in as water reaches 50-58F. Bass moving shallow into staging areas. Action improves fast.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Jerkbaits and lipless crankbaits on secondary points. Jigs and Ned rigs on staging flats. Fish afternoon warming.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth awakening from winter. Moving toward rocky pre-spawn staging areas. Water 48-55F.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Ned rigs and tubes on rocky points and gravel bars. Jerkbaits on windy banks. Fish warms up fast.',
      },
      'walleye': {
        pattern: 'Post-spawn walleye recovering on main-lake structure. Slow period before summer feeding kicks in.',
        spawnStatus: 'post-spawn',
        adjustment: 'Slow presentations near spawning areas. Nightcrawler harnesses and jigs along rocky structures.',
      },
      'trout': {
        pattern: 'Prime spring trout season. Hendrickson hatches and caddis emergences drive excellent dry-fly fishing.',
        spawnStatus: 'summer',
        adjustment: 'Match the hatch with Hendricksons and caddis. Swing soft hackles during evening hatches. Fish stocked streams.',
      },
      'striped-bass': {
        pattern: 'Striper migration north begins. Fish entering rivers for spawning run. Herring runs pull them inshore.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Fish herring runs with bucktails and swimbaits. River mouths and tidal rips hold concentrations of pre-spawn fish.',
      },
    },
  },
  {
    months: [4],
    regions: ['midwest'],
    speciesContext: {
      'walleye': {
        pattern: 'Post-spawn walleye dispersing to main-lake structure. The toughest walleye period of the year.',
        spawnStatus: 'post-spawn',
        adjustment: 'Slow trolling with crawler harnesses over emerging weed flats. Jig and leech on rocky points. Patience required.',
      },
      'crappie': {
        pattern: 'Crappie spawn begins as water hits 58-64F. Fish flooding into shallow cover in 3-8ft.',
        spawnStatus: 'spawn',
        adjustment: 'Small jigs and minnows pitched to brush, docks, and shallow laydowns. Fish slowly and methodically.',
      },
      'largemouth-bass': {
        pattern: 'Pre-spawn heating up. Bass staging on secondary points and flat edges. Water 52-60F.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Jerkbaits on rocky banks, jigs on wood cover, and lipless crankbaits over emerging grass. Fish the warmest bays.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth moving to pre-spawn staging areas on gravel and rock. River smallmouth particularly active.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Tubes and Ned rigs on rock transitions in 8-15ft. River fish respond to jerkbaits and hair jigs.',
      },
      'northern-pike': {
        pattern: 'Post-spawn pike recovering but starting to feed along emerging weed lines.',
        spawnStatus: 'post-spawn',
        adjustment: 'Spinnerbaits and jerkbaits along early weed growth in 4-8ft. Focus on inside weed edges.',
      },
    },
  },
  {
    months: [4],
    regions: ['pacific'],
    speciesContext: {
      'steelhead': {
        pattern: 'Late winter run finishing. Summer steelhead returning on some rivers. Spawning fish in tributaries.',
        spawnStatus: 'spawn',
        adjustment: 'Target fresh chrome fish below falls and in holding water. Avoid disturbing active spawners on redds.',
      },
      'rainbow-trout': {
        pattern: 'Spring hatches beginning. Skwala stoneflies and blue-winged olives bring trout to the surface.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Dry-dropper rigs with Skwala patterns. Nymph deep runs with stoneflies and PT nymphs. Prime month.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth waking up in rivers as water passes 50F. Early season feeding on crawfish.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Crawfish-colored tubes and Ned rigs along rocky banks. Slow retrieves in warming water.',
      },
    },
  },

  // ===========================
  // MAY
  // ===========================
  {
    months: [5],
    regions: ['southeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Full summer pattern. Bass on offshore structure, grass edges, and shade during the day. Topwater at dawn.',
        spawnStatus: 'summer',
        adjustment: 'Early morning topwater over grass flats. Midday punch through mats and flip heavy cover. Deep cranking ledges.',
      },
      'crappie': {
        pattern: 'Post-spawn crappie settling into summer haunts on deeper brush and offshore structure.',
        spawnStatus: 'summer',
        adjustment: 'Deeper brush piles with small jigs and minnows. Night fishing under lights around docks becomes productive.',
      },
      'redfish': {
        pattern: 'Schools of slot reds cruising flats and marshes. Consistent sight-fishing and blind-casting opportunities.',
        spawnStatus: 'summer',
        adjustment: 'Weedless soft plastics and topwater chug-style baits on flats. Target mullet schools for following reds.',
      },
      'speckled-trout': {
        pattern: 'Specks transitioning to summer patterns on deeper grass edges and around structure.',
        spawnStatus: 'summer',
        adjustment: 'Live shrimp or croaker under corks on grass edges. Early and late fishing best as midday heat intensifies.',
      },
      'catfish': {
        pattern: 'Catfish spawning in isolated holes and bank cavities. Trophy blues still feeding on main-river structure.',
        spawnStatus: 'spawn',
        adjustment: 'Noodling season where legal. Trophy blue cats on cut bait near ledges. Channel cats in holes and under cover.',
      },
    },
  },
  {
    months: [5],
    regions: ['northeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Spawn is on in most waters as temps reach 62-68F. Bass on beds in shallow protected coves.',
        spawnStatus: 'spawn',
        adjustment: 'Sight-fish beds with Texas-rigged soft plastics. Wacky Senkos near spawning flats. Protect your catch for the fishery.',
      },
      'smallmouth-bass': {
        pattern: 'Pre-spawn to spawn. Smallmouth building beds on gravel and rock in 4-10ft. Outstanding fishing.',
        spawnStatus: 'spawn',
        adjustment: 'Ned rigs and drop-shots on gravel flats. Sight-fish in clear water. Tubes dragged slowly near beds.',
      },
      'walleye': {
        pattern: 'Walleye recovered from spawn and feeding aggressively on emerging weed flats and rocky structure.',
        spawnStatus: 'post-spawn',
        adjustment: 'Trolling crankbaits along weed lines and rocky points. Live bait rigs with leeches and crawlers.',
      },
      'trout': {
        pattern: 'Peak dry-fly season. Sulphur, march brown, and caddis hatches make this the best month for stream trout.',
        spawnStatus: 'summer',
        adjustment: 'Match hatches with appropriate dries and emergers. Evening sulphur hatches are magical. Fish pocket water.',
      },
      'striped-bass': {
        pattern: 'Spring striper run peaks. Fish feeding voraciously inshore and in rivers on herring and bunker.',
        spawnStatus: 'spawn',
        adjustment: 'Live-line bunker or herring in rivers. Cast bucktails and swimbaits at breaking fish. Best surf fishing begins.',
      },
    },
  },
  {
    months: [5],
    regions: ['midwest'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Spawn in full swing. Bass on beds in 3-8ft of water around docks, laydowns, and grass. Water 62-70F.',
        spawnStatus: 'spawn',
        adjustment: 'Sight-fish beds with Texas-rigged craws and Senkos. Shallow spinnerbaits and buzzbaits for cruisers.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth spawning on gravel and rock in lakes and rivers. Outstanding sight-fishing in clear water.',
        spawnStatus: 'spawn',
        adjustment: 'Ned rigs and tubes on gravel flats. Drop-shot in clear water. River smallmouth on hair jigs.',
      },
      'walleye': {
        pattern: 'Walleye transitioning to summer feeding patterns on weed edges, reefs, and wind-blown points.',
        spawnStatus: 'summer',
        adjustment: 'Live bait rigs with leeches and nightcrawlers on weed edges. Trolling crankbaits along breaklines.',
      },
      'crappie': {
        pattern: 'Crappie finishing spawn and moving to post-spawn holding areas near deeper structure.',
        spawnStatus: 'post-spawn',
        adjustment: 'Fish just outside spawning bays on brush piles and timber in 8-15ft. Minnows under slip bobbers.',
      },
      'musky': {
        pattern: 'Musky season opens in many states. Post-spawn fish recovering but starting to feed on shallow weed flats.',
        spawnStatus: 'post-spawn',
        adjustment: 'In-line spinners and jerkbaits over shallow weed flats. Focus on inside weed edges near spawning bays.',
      },
    },
  },

  // ===========================
  // JUNE
  // ===========================
  {
    months: [6],
    regions: ['southeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Deep summer. Bass schooling on offshore ledges, humps, and creek channel bends. Early and late bites.',
        spawnStatus: 'summer',
        adjustment: 'Deep cranking ledges and humps with 10-20ft divers. Football jigs on bottom. Topwater buzzbaits at dawn.',
      },
      'crappie': {
        pattern: 'Summer crappie deep on brush piles and suspended over open water following shad schools.',
        spawnStatus: 'summer',
        adjustment: 'Night fishing under lights is the top tactic. Daytime vertical jigging over deep brush in 18-25ft.',
      },
      'redfish': {
        pattern: 'Bull reds appear offshore around rigs and jetties. Slot reds consistent on inshore flats and marshes.',
        spawnStatus: 'summer',
        adjustment: 'Cut mullet and crab baits for bulls near jetties. Topwater and soft plastics for slot reds on morning flats.',
      },
      'speckled-trout': {
        pattern: 'Summer pattern established. Specks around structure, deeper edges, and under bird activity chasing shrimp.',
        spawnStatus: 'summer',
        adjustment: 'Fish first light and last light. Live croaker where legal. Soft plastic jigs around oil platforms and jetties.',
      },
      'catfish': {
        pattern: 'Post-spawn catfish feeding heavily. Blue cats schooled up on river ledges following shad.',
        spawnStatus: 'post-spawn',
        adjustment: 'Anchor on river ledges with fresh cut shad. Drift rigs across flats. Night fishing from the bank is productive.',
      },
    },
  },
  {
    months: [6],
    regions: ['northeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Post-spawn transition. Bass moving from beds to first available summer structure. Weed growth accelerating.',
        spawnStatus: 'post-spawn',
        adjustment: 'Fish emerging weed lines with spinnerbaits and swim jigs. Topwater walking baits over flats at dawn.',
      },
      'smallmouth-bass': {
        pattern: 'Post-spawn smallmouth feeding aggressively. Arguably the best smallmouth fishing of the year.',
        spawnStatus: 'post-spawn',
        adjustment: 'Drop-shot and Ned rig on rocky main-lake points. Topwater poppers in rivers. Crawfish-colored tubes on structure.',
      },
      'walleye': {
        pattern: 'Walleye settled into summer patterns on deep weed edges and rocky mid-lake structure.',
        spawnStatus: 'summer',
        adjustment: 'Trolling crankbaits and crawler harnesses along deep weed edges. Jig and leech on rock piles at night.',
      },
      'trout': {
        pattern: 'Summer trout fishing in full swing. Early morning and evening hatches. Terrestrials becoming important.',
        spawnStatus: 'summer',
        adjustment: 'Fish early and late to avoid warm water. Terrestrials like ants and beetles productive. Seek cold water tributaries.',
      },
      'striped-bass': {
        pattern: 'Post-spawn stripers aggressive along beaches and in bays. Blitzes on schools of bunker and sand eels.',
        spawnStatus: 'post-spawn',
        adjustment: 'Chase breaking fish with topwater plugs and swimbaits. Live-line bunker from boats. Surf fishing excellent.',
      },
    },
  },
  {
    months: [6],
    regions: ['midwest'],
    speciesContext: {
      'walleye': {
        pattern: 'Prime summer walleye. Fish on weed edges, rock reefs, and mid-lake bars feeding at dawn and dusk.',
        spawnStatus: 'summer',
        adjustment: 'Trolling crawler harnesses at 1.2-1.5mph along weed edges. Jig and leech on rocks. Live bait rigs at night.',
      },
      'largemouth-bass': {
        pattern: 'Post-spawn bass moving to summer structure. Weed fishing dominates. Frog and punch bait season begins.',
        spawnStatus: 'summer',
        adjustment: 'Topwater frogs over mats at dawn. Punch heavy cover with 1oz weights and creature baits. Swim jigs on weed edges.',
      },
      'smallmouth-bass': {
        pattern: 'Post-spawn smallmouth aggressive on main-lake structure. One of the best bites of the year.',
        spawnStatus: 'post-spawn',
        adjustment: 'Drop-shot and tubes on rocky main-lake points and humps. Topwater early morning. Jerkbaits over rock.',
      },
      'musky': {
        pattern: 'Musky feeding actively as water hits 65-72F. Shallow weed flats hold the most fish.',
        spawnStatus: 'summer',
        adjustment: 'Bucktails and topwater over shallow weed flats at dawn and dusk. Large jerkbaits along weed edges.',
      },
      'northern-pike': {
        pattern: 'Pike moving to deeper weed edges as shallows warm. Still aggressive but seeking cooler water.',
        spawnStatus: 'summer',
        adjustment: 'Spinnerbaits and spoons along deep weed edges. Focus on 8-14ft with green healthy weeds.',
      },
    },
  },
  {
    months: [6],
    regions: ['pacific'],
    speciesContext: {
      'rainbow-trout': {
        pattern: 'Outstanding dry-fly fishing as salmonfly and golden stonefly hatches occur on major rivers.',
        spawnStatus: 'summer',
        adjustment: 'Big dry flies during the salmonfly hatch. Stimulators and Chubby Chernobyls. Bank fishing with nymphs elsewhere.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth post-spawn and feeding aggressively in rivers. Water temps ideal at 60-68F.',
        spawnStatus: 'post-spawn',
        adjustment: 'Topwater poppers and crawfish patterns in rivers. Tube jigs on rocky runs and pools.',
      },
      'steelhead': {
        pattern: 'Summer steelhead entering rivers. Fresh bright fish available in lower sections of major rivers.',
        spawnStatus: 'summer',
        adjustment: 'Swing flies or drift jigs for fresh summer-run fish. Focus on lower river reaches. Early morning best.',
      },
    },
  },

  // ===========================
  // JULY
  // ===========================
  {
    months: [7],
    regions: ['southeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Peak summer. Offshore ledge fishing at its best. Night fishing an excellent option. Water 82-90F.',
        spawnStatus: 'summer',
        adjustment: 'Ledge cranking and football jigs in 15-25ft during the day. Topwater and spinnerbaits at night. Fish early or late.',
      },
      'crappie': {
        pattern: 'Deep summer crappie. Fish suspended over deep structure and around bridge pilings. Night bite strongest.',
        spawnStatus: 'summer',
        adjustment: 'Night fishing under dock lights with minnows and small jigs. Daytime deep trolling with spider rigs.',
      },
      'redfish': {
        pattern: 'Slot reds consistent in marshes. Big schools of bull reds staging near passes and offshore structures.',
        spawnStatus: 'summer',
        adjustment: 'Fish early morning and late evening to avoid heat. Topwater at dawn in marshes. Cut bait for bulls.',
      },
      'speckled-trout': {
        pattern: 'Specks around deeper structure, jetties, and rigs. Avoid fishing dead-low oxygen water in back bays.',
        spawnStatus: 'summer',
        adjustment: 'Fish moving water around passes and jetties. Live bait under corks or free-lined. Night fishing under lights.',
      },
      'catfish': {
        pattern: 'Summer catfish feeding heavily at night. Blue cats on river ledges, channel cats on flats.',
        spawnStatus: 'summer',
        adjustment: 'Night fishing with cut shad on river ledges and flat banks. Limb lines and jug fishing popular and productive.',
      },
    },
  },
  {
    months: [7],
    regions: ['northeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Full summer. Bass keying on weed edges, shade, and current areas. Early morning topwater prime.',
        spawnStatus: 'summer',
        adjustment: 'Frogging and punching thick cover. Wacky Senkos on shade lines. Drop-shots on deep rock. Fish dawn and dusk.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth on main-lake rock structure and deep current breaks in rivers. Active and fighting hard.',
        spawnStatus: 'summer',
        adjustment: 'Drop-shot with gobies or crawfish imitators on rock. Topwater poppers in low-light. Tube jigs on humps.',
      },
      'striped-bass': {
        pattern: 'Stripers schooling on surface hitting bait. Surf fishing and boat casting both excellent.',
        spawnStatus: 'summer',
        adjustment: 'Follow the birds and breaking fish. Topwater plugs and metal lips on blitzing fish. Live eels at night.',
      },
      'trout': {
        pattern: 'Trout stressed in warm water. Only viable in cold tailwaters, high-elevation streams, and spring creeks.',
        spawnStatus: 'summer',
        adjustment: 'Fish early morning only to avoid warm-water stress. Terrestrial patterns. Seek coldest water available.',
      },
      'walleye': {
        pattern: 'Summer walleye deep on structure, feeding at night. Good trolling bite during the day.',
        spawnStatus: 'summer',
        adjustment: 'Troll deep crankbaits on lead core over structure. Night fishing with jigs on shallow reefs.',
      },
    },
  },
  {
    months: [7],
    regions: ['midwest'],
    speciesContext: {
      'walleye': {
        pattern: 'Peak summer walleye. Fish on deep structure by day, shallow reefs at night. Water 72-78F.',
        spawnStatus: 'summer',
        adjustment: 'Trolling bottom bouncers and crawler harnesses over deep bars. Night jigging on shallow reefs with leeches.',
      },
      'largemouth-bass': {
        pattern: 'Summer bass on weed mats and deep weed edges. Frog fishing at its prime. Early and late bites key.',
        spawnStatus: 'summer',
        adjustment: 'Topwater frogs at dawn over heavy vegetation. Punch mats midday. Deep-crank weed edges and rock breaks.',
      },
      'musky': {
        pattern: 'Dog days of musky. Fish follow but do not commit. Large topwater and night fishing best strategies.',
        spawnStatus: 'summer',
        adjustment: 'Walk-the-dog topwater over deep weeds at dusk. Night fish with large black bucktails. Fish current areas.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth on deep rock structure. Mid-lake humps and deep points hold the best fish.',
        spawnStatus: 'summer',
        adjustment: 'Drop-shot with finesse plastics on rock humps. Tubes on deep points. Topwater early morning.',
      },
      'crappie': {
        pattern: 'Deep summer crappie suspended over basins and on deeper brush. Night bite under lights is best.',
        spawnStatus: 'summer',
        adjustment: 'Night fishing under lights with small jigs and minnows. Find suspended fish on electronics during the day.',
      },
    },
  },
  {
    months: [7],
    regions: ['southwest', 'west'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Extreme heat drives bass very deep or into heavy shade. Water temps can exceed 85F in desert reservoirs.',
        spawnStatus: 'summer',
        adjustment: 'Fish the first and last hour of light with topwater. Midday deep-drop with Carolina rigs and spoons at 25-40ft.',
      },
      'rainbow-trout': {
        pattern: 'Low-elevation trout fishing poor due to heat. Mountain streams and high-altitude lakes are the focus.',
        spawnStatus: 'summer',
        adjustment: 'Fish high-elevation streams and alpine lakes. Terrestrial patterns and small attractors. Avoid warm lowland water.',
      },
      'striped-bass': {
        pattern: 'Stripers may be boiling on the surface at dawn chasing shad. Then they go deep fast.',
        spawnStatus: 'summer',
        adjustment: 'Be on the water before sunrise for topwater blitzes. Once surface activity stops, vertical jig deep schools.',
      },
      'brown-trout': {
        pattern: 'Browns in tailwaters and high mountain streams. Seeking coldest available water and shade.',
        spawnStatus: 'summer',
        adjustment: 'Fish tailwater cold releases and high-elevation freestoners. Terrestrials, hoppers, and ants midday.',
      },
    },
  },

  // ===========================
  // AUGUST
  // ===========================
  {
    months: [8],
    regions: ['southeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Dog days continue. Ledge and offshore fishing dominates. Schooling bass breaking on shad at dawn.',
        spawnStatus: 'summer',
        adjustment: 'Follow surface-feeding schools at dawn with topwater. Fish offshore structure deep with jigs and spoons midday.',
      },
      'crappie': {
        pattern: 'Summer doldrums for crappie. Fish deep and lethargic during the day. Night bite remains strongest.',
        spawnStatus: 'summer',
        adjustment: 'Focus on night fishing under lights. Daytime only productive with deep vertical jigging in brush.',
      },
      'redfish': {
        pattern: 'Bull red migration ramping up around passes. Slot reds schooling in marshes as fall transition nears.',
        spawnStatus: 'summer',
        adjustment: 'Target bull red schools near passes with heavy tackle and cut bait. Slot reds on topwater at dawn in marshes.',
      },
      'speckled-trout': {
        pattern: 'Specks holding near structure in deeper water. Avoid dead zones with low dissolved oxygen.',
        spawnStatus: 'summer',
        adjustment: 'Fish moving water with good oxygen. Jetties, passes, and current areas. Live bait or soft plastics.',
      },
      'catfish': {
        pattern: 'Catfish remain active at night. Blue cats schooled on main river ledges following shad.',
        spawnStatus: 'summer',
        adjustment: 'Night bank fishing with cut bait. Jug fishing on river flats. Anchor on ledges for trophy blues.',
      },
    },
  },
  {
    months: [8],
    regions: ['northeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Warmest water of the year. Bass in heavy cover, shade, and current areas. Night fishing very productive.',
        spawnStatus: 'summer',
        adjustment: 'Frogs and buzzbaits at dawn. Jigs and worms in shade and current. Consider night fishing tournaments.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth on deepest available rock structure. Some river fishing tougher due to low flows.',
        spawnStatus: 'summer',
        adjustment: 'Deep drop-shot on rock humps and ledges. River smallmouth near current breaks with tubes and crawfish.',
      },
      'striped-bass': {
        pattern: 'Continued surface blitzes. Sand eel and peanut bunker runs keep stripers close to shore.',
        spawnStatus: 'summer',
        adjustment: 'Topwater through blitzes. Metal jigs and teasers for boat fisherman. Surf casting with plugs at dawn and dusk.',
      },
      'trout': {
        pattern: 'Trout survival mode in low, warm streams. Only fish early or in the coldest tributaries and spring creeks.',
        spawnStatus: 'summer',
        adjustment: 'Do not fish stressed trout in warm water over 68F. Seek spring creeks and tailwaters. Early morning tricos.',
      },
    },
  },
  {
    months: [8],
    regions: ['midwest'],
    speciesContext: {
      'walleye': {
        pattern: 'Late summer walleye on deep mid-lake structure. Some fish beginning to shift to fall feeding patterns.',
        spawnStatus: 'summer',
        adjustment: 'Trolling crankbaits on deep mud flats and bars. Crawler harnesses remain consistent. Night jigging productive.',
      },
      'largemouth-bass': {
        pattern: 'Summer pattern continues. Frogs, punch baits, and deep cranking remain productive.',
        spawnStatus: 'summer',
        adjustment: 'Morning topwater over thick vegetation. Punch mats with heavy jigs. Swim jigs along deep weed lines.',
      },
      'musky': {
        pattern: 'Still tough dog-days musky. Night fishing and overcast days with fronts are best bet for a bite.',
        spawnStatus: 'summer',
        adjustment: 'Large topwater at night. Oversize bucktails on overcast days. Fish cold-water areas if available.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth on deep rock structure. Rivers may be low and challenging.',
        spawnStatus: 'summer',
        adjustment: 'Deep finesse tactics on lakes. Seek river areas with current and deeper pools for smallmouth.',
      },
    },
  },

  // ===========================
  // SEPTEMBER
  // ===========================
  {
    months: [9],
    regions: ['southeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Still summer in the south. Slight cooling triggers first shallow movements. Water temps dropping from 85F toward 78F.',
        spawnStatus: 'summer',
        adjustment: 'Topwater bite improves as mornings cool. Fish shad-schooling patterns. Shallow running crankbaits on flats.',
      },
      'crappie': {
        pattern: 'Early fall transition. Crappie begin moving from deep summer haunts toward mid-depth structure.',
        spawnStatus: 'summer',
        adjustment: 'Bridge pilings and mid-depth brush in 10-15ft. Small jigs and minnows. Action improving from summer lull.',
      },
      'redfish': {
        pattern: 'Bull red run peaks near passes and beaches. Massive schools in the surf. Slot reds feeding hard in marshes.',
        spawnStatus: 'fall-feed',
        adjustment: 'Surf fishing for bull reds with cut mullet and crab. Slot reds on topwater and soft plastics in marshes.',
      },
      'speckled-trout': {
        pattern: 'Early fall run begins. Specks moving back to flats and marshes as water cools. Bait activity increases.',
        spawnStatus: 'fall-feed',
        adjustment: 'Topwater at dawn over grass flats. Popping corks with shrimp or plastics on mud flats. Action improving.',
      },
      'catfish': {
        pattern: 'Catfish feeding picks up as nights cool. Blue cats following shad migrations. Channel cats active in creeks.',
        spawnStatus: 'fall-feed',
        adjustment: 'Cut shad on ledges for blues. Prepared baits and nightcrawlers in creek mouths for channels.',
      },
    },
  },
  {
    months: [9],
    regions: ['northeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Fall transition begins. Bass following baitfish shallow. Water dropping from 72F toward 65F. Outstanding fishing.',
        spawnStatus: 'fall-feed',
        adjustment: 'Spinnerbaits and shallow crankbaits on flats with baitfish. Jerkbaits on points. Fish aggressively.',
      },
      'smallmouth-bass': {
        pattern: 'Fall smallmouth feed-up. Fish following baitfish to rocky points and current areas. Hard-fighting fish.',
        spawnStatus: 'fall-feed',
        adjustment: 'Jerkbaits and crankbaits on rocky points. Tube jigs on river current breaks. Fast and aggressive retrieves.',
      },
      'walleye': {
        pattern: 'Fall walleye turnover bite. Fish moving shallower following baitfish. Evening and night bites excellent.',
        spawnStatus: 'fall-feed',
        adjustment: 'Jig and minnow on wind-blown points and reefs. Trolling crankbaits shallower than summer. Night casting jerkbaits.',
      },
      'trout': {
        pattern: 'Fall trout fishing improves as water cools. Brown trout pre-spawn feeding starts. Terrestrials still work.',
        spawnStatus: 'fall-feed',
        adjustment: 'Streamers for pre-spawn browns. Blue-winged olives and terrestrials. Fish longer into the day as water cools.',
      },
      'striped-bass': {
        pattern: 'Fall run beginning. Stripers pushing south along the coast following baitfish schools.',
        spawnStatus: 'fall-feed',
        adjustment: 'Surf casting with large plugs and metal during the migration. Follow diving birds. Fish rips and points.',
      },
    },
  },
  {
    months: [9],
    regions: ['midwest'],
    speciesContext: {
      'walleye': {
        pattern: 'Fall turnover approaching. Walleye moving shallower as lake destratifies. Feeding activity increasing.',
        spawnStatus: 'fall-feed',
        adjustment: 'Jig and minnow on shallow to mid-depth reefs and points. Crankbaits over rocky flats. Focus on wind-blown structure.',
      },
      'largemouth-bass': {
        pattern: 'Fall transition. Bass following shad schools shallow. Some of the best fishing of the year as temps drop toward 65F.',
        spawnStatus: 'fall-feed',
        adjustment: 'Spinnerbaits and shallow crankbaits on flats. Topwater walking baits around schooling shad. Fish aggressively.',
      },
      'musky': {
        pattern: 'Fall feed-up begins for musky. Increasing activity as water cools below 65F. Best season approaching.',
        spawnStatus: 'fall-feed',
        adjustment: 'Large jerkbaits and rubber baits on deep weed edges and rock structure. Increasing figure-8 follows at the boat.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth feeding aggressively on crawfish and baitfish on rock structure. Excellent fall fishing.',
        spawnStatus: 'fall-feed',
        adjustment: 'Jerkbaits, crankbaits, and tubes on rocky points and humps. River smallmouth on crawfish-colored plastics.',
      },
      'northern-pike': {
        pattern: 'Pike feeding actively along weed edges and on baitfish schools. Aggressive fall feeding behavior.',
        spawnStatus: 'fall-feed',
        adjustment: 'Large spinnerbaits and spoons on weed edges. Jerkbaits along drop-offs. Big pike return to shallower water.',
      },
    },
  },
  {
    months: [9],
    regions: ['pacific'],
    speciesContext: {
      'rainbow-trout': {
        pattern: 'Fall hatches of blue-winged olives and October caddis begin. Trout feeding heavily before winter.',
        spawnStatus: 'fall-feed',
        adjustment: 'October caddis dries and emergers in afternoon. Blue-winged olives on overcast days. Streamers for large fish.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth feeding aggressively in rivers before cooling. Some of the best river bass fishing of the year.',
        spawnStatus: 'fall-feed',
        adjustment: 'Crawfish patterns and topwater in rivers. Tube jigs on deeper pools. Fish later into the day.',
      },
      'salmon': {
        pattern: 'Fall salmon runs begin. Chinook and coho entering rivers. Major fishing event of the year.',
        spawnStatus: 'spawn',
        adjustment: 'Anchor and back-bounce eggs or drift-fish with cured roe. Spinners in tidal sections. Respect spawning fish.',
      },
    },
  },

  // ===========================
  // OCTOBER
  // ===========================
  {
    months: [10],
    regions: ['southeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Still warm in the deep south at 72-80F. Bass beginning fall feed-up. Shallow bites improving on cooling days.',
        spawnStatus: 'summer',
        adjustment: 'Shallow crankbaits and spinnerbaits on flats as bait moves shallow. Topwater lasts well into mid-morning.',
      },
      'crappie': {
        pattern: 'Fall crappie migration to mid-depth cover. Schools consolidating on brush piles and bridge pilings.',
        spawnStatus: 'fall-feed',
        adjustment: 'Shooting docks and bridge pilings with small jigs. Spider-rigging brush piles in 8-15ft. Minnow tipped jigs.',
      },
      'redfish': {
        pattern: 'Outstanding inshore fishing. Reds schooling aggressively on flats and chasing mullet. Bull run winding down.',
        spawnStatus: 'fall-feed',
        adjustment: 'Gold spoons and topwater on schooling reds. Sight-fish tailing fish on flats. Mullet-pattern lures.',
      },
      'speckled-trout': {
        pattern: 'Fall specks flooding grass flats chasing shrimp and mullet. Best inshore fishing of the year in many areas.',
        spawnStatus: 'fall-feed',
        adjustment: 'Topwater at dawn over grass flats. MirrOlures and soft plastics through the day. Popping corks with shrimp.',
      },
      'catfish': {
        pattern: 'Blue cats gorging on shad as water cools. Fall cooling triggers aggressive feeding binges.',
        spawnStatus: 'fall-feed',
        adjustment: 'Fresh-cut shad on main river ledges and flats. Trophy blue cat season is heating up.',
      },
    },
  },
  {
    months: [10],
    regions: ['northeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Peak fall feeding at 55-62F. Bass gorging on baitfish before winter. Best power-fishing window of the year.',
        spawnStatus: 'fall-feed',
        adjustment: 'Spinnerbaits, shallow crankbaits, and lipless cranks on baitfish flats. Jerkbaits on windy points. Fish all day.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth pushing deep as water cools. Aggressive feeding on crawfish and gobies on rock.',
        spawnStatus: 'fall-feed',
        adjustment: 'Jerkbaits and tubes on deep rock structure. Drop-shot with goby imitations. Last great smallmouth fishing before winter.',
      },
      'walleye': {
        pattern: 'Post-turnover walleye scattered but feeding. Moving to shallow reefs at night.',
        spawnStatus: 'fall-feed',
        adjustment: 'Jig and minnow on rocky points and reefs. Trolling crankbaits over flats. Night casting jerkbaits in shallows.',
      },
      'trout': {
        pattern: 'Brown trout spawn run. Stream browns aggressive and territorial. Excellent streamer fishing.',
        spawnStatus: 'spawn',
        adjustment: 'Large streamers in fall colors for aggressive browns. Avoid fishing over active redds. Fish deep holding water.',
      },
      'striped-bass': {
        pattern: 'Peak fall striper run. Fish blitzing baitfish along the coast. Epic surf fishing opportunities.',
        spawnStatus: 'fall-feed',
        adjustment: 'Large pencil poppers and darters in the surf. Follow bird activity. Fish inlet mouths and rocky points.',
      },
    },
  },
  {
    months: [10],
    regions: ['midwest'],
    speciesContext: {
      'walleye': {
        pattern: 'Post-turnover walleye feeding aggressively. Fish transitioning to fall patterns on rocky structure and shorelines.',
        spawnStatus: 'fall-feed',
        adjustment: 'Jig and minnow on rocky shorelines and mid-lake bars. Crankbaits trolled at 2mph over gravel. Wind-blown banks.',
      },
      'largemouth-bass': {
        pattern: 'Fall feed-up peaks at 55-62F. Bass chasing shad in shallow bays and on flat banks.',
        spawnStatus: 'fall-feed',
        adjustment: 'Squarebill crankbaits and spinnerbaits on shallow flats. Lipless cranks over dying vegetation. Fish all day.',
      },
      'musky': {
        pattern: 'Prime time musky. The best musky fishing of the year as water drops into the 50s. Trophy fish are caught now.',
        spawnStatus: 'fall-feed',
        adjustment: 'Large rubber baits and glide baits on deep structure. Jerkbaits along steep breaks. Commit to long casts and figure-8s.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth gorging on crawfish as they move toward winter rock. Some of the fattest fish of the year.',
        spawnStatus: 'fall-feed',
        adjustment: 'Crawfish-colored jerkbaits and tubes on deep rock. Football jigs on main-lake gravel points.',
      },
      'northern-pike': {
        pattern: 'Pike aggressive on baitfish in shallow to mid-depth weed areas. Last good pike fishing before winter.',
        spawnStatus: 'fall-feed',
        adjustment: 'Large spinnerbaits and dead baits along deep weed edges and over dying weed flats.',
      },
    },
  },
  {
    months: [10],
    regions: ['southwest', 'west'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Desert reservoirs cooling from summer extremes. Bass moving from deep summer spots to mid-depth structure.',
        spawnStatus: 'fall-feed',
        adjustment: 'Crankbaits and spinnerbaits on mid-depth points and flats. Topwater improving as mornings cool.',
      },
      'rainbow-trout': {
        pattern: 'Fall stocking begins in put-and-take lakes. Mountain trout feeding aggressively before winter.',
        spawnStatus: 'fall-feed',
        adjustment: 'Fresh stocked trout on PowerBait and small spinners. Wild trout on streamers and blue-winged olives.',
      },
      'brown-trout': {
        pattern: 'Brown trout spawn in mountain streams and tailwaters. Males aggressive and territorial.',
        spawnStatus: 'spawn',
        adjustment: 'Swing streamers for aggressive pre-spawn and spawning browns. Respect active redds. Focus on deeper holding water.',
      },
      'striped-bass': {
        pattern: 'Stripers following shad schools in reservoirs. Surface activity returns as water cools below 75F.',
        spawnStatus: 'fall-feed',
        adjustment: 'Follow boiling schools with topwater and swimbaits. Trolling umbrella rigs over deep structure.',
      },
    },
  },

  // ===========================
  // NOVEMBER
  // ===========================
  {
    months: [11],
    regions: ['southeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Fall feed-up peaks in the Carolinas and upper south at 58-65F. Deep south still comfortable at 65-72F.',
        spawnStatus: 'fall-feed',
        adjustment: 'Crankbaits and jerkbaits on rocky banks and points. Spinnerbaits over grass. Football jigs on deeper structure.',
      },
      'crappie': {
        pattern: 'Fall crappie schooled on mid-depth brush and structure. Excellent numbers as fish concentrate before winter.',
        spawnStatus: 'fall-feed',
        adjustment: 'Spider-rig brush piles with minnow-tipped jigs. Fish in 10-18ft around standing timber and stakebeds.',
      },
      'redfish': {
        pattern: 'Cooler water concentrates reds around mud flats and marsh drains. Consistent sight-fishing opportunities.',
        spawnStatus: 'fall-feed',
        adjustment: 'Sight-fish mud flats on sunny days. Gold spoons and cut bait. Focus on drain mouths on falling tides.',
      },
      'speckled-trout': {
        pattern: 'Trophy speckled trout season. Larger fish move inshore as water cools. Best big-trout fishing of the year.',
        spawnStatus: 'fall-feed',
        adjustment: 'Large MirrOlures and soft plastics for trophy specks. Fish deeper edges and drop-offs. Slow retrieves.',
      },
      'catfish': {
        pattern: 'Fall catfishing continues strong. Blue cats following fall shad runs provide trophy opportunities.',
        spawnStatus: 'fall-feed',
        adjustment: 'Cut skipjack and shad on river ledges. Drift rigs on main channel flats. Some of the biggest blues of the year.',
      },
    },
  },
  {
    months: [11],
    regions: ['northeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Late fall at 45-52F. Bass slowing down and moving toward deep winter structure. Last shot before cold.',
        spawnStatus: 'fall-feed',
        adjustment: 'Jerkbaits and blade baits on steep structure near deep water. Jigs on main-lake points. Slower presentations.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth grouping up on deep rock structure for winter. Can find large schools with electronics.',
        spawnStatus: 'fall-feed',
        adjustment: 'Drop-shot and blade baits on deep rock humps and points. Find the school and you can catch many.',
      },
      'walleye': {
        pattern: 'Fall walleye feeding on shallow structure at night. Good jigging bite on wind-blown reefs.',
        spawnStatus: 'fall-feed',
        adjustment: 'Jig and minnow on shallow reefs at dusk and after dark. Trolling crankbaits during the day along breaklines.',
      },
      'trout': {
        pattern: 'Brown trout spawn winding down. Post-spawn browns recovering. Late-season dry-fly fishing on warm days.',
        spawnStatus: 'post-spawn',
        adjustment: 'Nymph deep runs with stones and midges. Streamers for recovering browns. Last good stream fishing before freeze.',
      },
      'striped-bass': {
        pattern: 'Late fall striper run. Fish pushing through to southern wintering areas. Last chance at big migration fish.',
        spawnStatus: 'fall-feed',
        adjustment: 'Large plugs and bucktails from the surf and boats. Focus on warm-water outflows and deep structure.',
      },
    },
  },
  {
    months: [11],
    regions: ['midwest'],
    speciesContext: {
      'walleye': {
        pattern: 'Late fall walleye on shallow rocky structure. Night fishing on reefs produces big fish.',
        spawnStatus: 'fall-feed',
        adjustment: 'Jig and large minnows on rocky reefs and points. Blade baits on steep breaks. Night jerkbait casting.',
      },
      'largemouth-bass': {
        pattern: 'Bass moving deep for winter at 48-55F. Final fall window before slowdown. Creek arms with shad still produce.',
        spawnStatus: 'fall-feed',
        adjustment: 'Jerkbaits and blade baits on steep banks. Last squarebill bites in backs of creeks with shad. Slow retrieves.',
      },
      'musky': {
        pattern: 'Trophy musky season continues. Cold water pushes big fish to feed heavily. Last shot before ice-up.',
        spawnStatus: 'fall-feed',
        adjustment: 'Large rubber baits and jerkbaits on deep structure. Slow, deep presentations. Commit full days for one bite.',
      },
      'northern-pike': {
        pattern: 'Pike very active in cold water. Feeding heavily on baitfish along remaining weed edges and on rocky flats.',
        spawnStatus: 'fall-feed',
        adjustment: 'Dead baits on quick-strike rigs near remaining green weeds. Large spinnerbaits and jerkbaits.',
      },
      'crappie': {
        pattern: 'Crappie grouping on deep winter brush. Can find large schools and fill a bucket. Pre-ice concentration.',
        spawnStatus: 'fall-feed',
        adjustment: 'Vertical jig deep brush piles with minnows and small jigs in 18-25ft. Electronics essential.',
      },
    },
  },

  // ===========================
  // DECEMBER
  // ===========================
  {
    months: [12],
    regions: ['southeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Winter approaching but still fishable at 50-60F. Bass on deeper structure, ledges, and docks. Slow but steady.',
        spawnStatus: 'winter',
        adjustment: 'Jigs and blade baits on deep points and ledges. Jerkbaits with long pauses on rocky banks. Fish warmest afternoons.',
      },
      'crappie': {
        pattern: 'Winter crappie concentrating on deep brush and structure. Schools tight and catchable with electronics.',
        spawnStatus: 'winter',
        adjustment: 'Vertical jig deep brush piles with minnows. Electronics critical to find concentrated schools at 18-25ft.',
      },
      'redfish': {
        pattern: 'Reds slow in cooling water but still catchable on sunny days when flats warm. Tailing on calm low tides.',
        spawnStatus: 'winter',
        adjustment: 'Sight-fish mud flats on sunny warm afternoons. Gold spoons and jig-and-shrimp combos. Patience required.',
      },
      'speckled-trout': {
        pattern: 'Trophy specks in deeper channels and holes. Big fish feeding on shrimp and mullet in deep-water areas.',
        spawnStatus: 'winter',
        adjustment: 'Slow-sinking plugs and soft plastics in deep channels. Live shrimp on bottom in holes. Target warmest days.',
      },
      'catfish': {
        pattern: 'Catfish consolidating in deep winter holes. Blue cats still catchable in deep river bends and tailwaters.',
        spawnStatus: 'winter',
        adjustment: 'Cut shad in deep holes and tailwater areas. Fish bottom rigs in the deepest bends. Afternoons most productive.',
      },
    },
  },
  {
    months: [12],
    regions: ['northeast'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Pre-ice or just after ice-up. Bass nearly dormant in 35-42F water. Most anglers have put boats away.',
        spawnStatus: 'winter',
        adjustment: 'If open water remains, dead-stick jigs and blade baits on the deepest structure. Extremely slow presentations.',
      },
      'walleye': {
        pattern: 'First ice or pre-ice walleye. Fish active in dam tailwaters and on shallow reefs at night.',
        spawnStatus: 'winter',
        adjustment: 'Fish dam tailwaters with blade baits and jigs. First-ice fishing on shallow reefs with tip-ups and jigging spoons.',
      },
      'trout': {
        pattern: 'Tailwater trout remain active. Stream fishing limited to warmest days. Midge-focused feeding.',
        spawnStatus: 'winter',
        adjustment: 'Fish tailwaters with small midges and blue-winged olive nymphs. Focus on midday warmth. Slow nymphing.',
      },
      'striped-bass': {
        pattern: 'Most stripers have migrated south. Holdover fish in deep river holes. Very limited opportunity.',
        spawnStatus: 'winter',
        adjustment: 'Target holdover fish in warm-water discharge areas with jigs and live bait. Season essentially over.',
      },
    },
  },
  {
    months: [12],
    regions: ['midwest'],
    speciesContext: {
      'walleye': {
        pattern: 'First ice or just before ice-up. Walleye active on shallow reefs and near tributary mouths.',
        spawnStatus: 'ice',
        adjustment: 'First-ice tip-ups with shiners on shallow reefs. Jigging spoons and Rapalas. Dawn and dusk best.',
      },
      'crappie': {
        pattern: 'First-ice crappie bite is outstanding. Fish in basins and over brush near deep breaks.',
        spawnStatus: 'ice',
        adjustment: 'Small jigs tipped with minnow or wax worms in 20-30ft. Find suspended schools with electronics. Excellent fishing.',
      },
      'northern-pike': {
        pattern: 'First-ice pike aggressive and feeding near weed edges. Excellent tip-up fishing.',
        spawnStatus: 'ice',
        adjustment: 'Tip-ups with large shiners or suckers near green weed edges. Set at 2-3ft off bottom.',
      },
      'largemouth-bass': {
        pattern: 'Bass dormant under ice. Not a viable target for most ice anglers.',
        spawnStatus: 'ice',
        adjustment: 'Focus on walleye, crappie, and pike through the ice. Bass fishing resumes in spring.',
      },
      'bluegill': {
        pattern: 'First-ice bluegill bite is one of the best panfish opportunities of the year.',
        spawnStatus: 'ice',
        adjustment: 'Micro jigs tipped with wax worms over mud-bottom basins in 15-25ft. Drill many holes and stay mobile.',
      },
    },
  },
  {
    months: [12],
    regions: ['southwest', 'west'],
    speciesContext: {
      'largemouth-bass': {
        pattern: 'Desert reservoirs cooling into the 52-58F range. Bass on deeper structure and rock. Fishable year-round.',
        spawnStatus: 'winter',
        adjustment: 'Jerkbaits and jigs on main-lake rock and points. Fish the warmest part of the afternoon for shallow bites.',
      },
      'rainbow-trout': {
        pattern: 'Winter stocking in full swing at low-elevation lakes. Mountain waters frozen. Tailwaters excellent.',
        spawnStatus: 'winter',
        adjustment: 'PowerBait and small spoons in stocked lakes. Nymph with midges and small stones in tailwaters.',
      },
      'brown-trout': {
        pattern: 'Post-spawn browns in tailwaters recovering. Slow feeding but catchable on warmer days.',
        spawnStatus: 'post-spawn',
        adjustment: 'Small streamers and nymphs in tailwaters. Fish midday warmth. Slow retrieves and dead-drifts.',
      },
      'striped-bass': {
        pattern: 'Stripers deep in reservoirs following shad schools. Surface activity has ended for the season.',
        spawnStatus: 'winter',
        adjustment: 'Deep jigging with spoons and blade baits over shad schools at 30-50ft. Use electronics to locate fish.',
      },
    },
  },
  {
    months: [12],
    regions: ['pacific'],
    speciesContext: {
      'steelhead': {
        pattern: 'Winter steelhead run begins on coastal rivers. Fresh fish entering after fall rains.',
        spawnStatus: 'pre-spawn',
        adjustment: 'Jigs under floats and drift-fished eggs in holding water. Focus on fresh arrivals in lower river sections.',
      },
      'rainbow-trout': {
        pattern: 'Resident trout in winter mode. Feeding on midges and small nymphs in slower water.',
        spawnStatus: 'winter',
        adjustment: 'Small nymphs and midges dead-drifted through deep runs. Euro-nymphing effective. Fish midday.',
      },
      'smallmouth-bass': {
        pattern: 'Smallmouth dormant in deep river pools. Not a viable winter target in the Pacific NW.',
        spawnStatus: 'winter',
        adjustment: 'Focus on steelhead and resident trout. Smallmouth fishing resumes in April.',
      },
    },
  },
];
