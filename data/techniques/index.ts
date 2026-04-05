import { Technique } from '../types';

import { texasRig } from './texas-rig';
import { carolinaRig } from './carolina-rig';
import { dropShot } from './drop-shot';
import { nedRig } from './ned-rig';
import { wackyRig } from './wacky-rig';
import { jigging } from './jigging';
import { crankbait } from './crankbait';
import { topwater } from './topwater';
import { spinnerbait } from './spinnerbait';
import { flyFishingBasics } from './fly-fishing-basics';
import { trolling } from './trolling';
import { bottomFishing } from './bottom-fishing';
import { driftFishing } from './drift-fishing';
import { surfFishing } from './surf-fishing';
import { kayakFishing } from './kayak-fishing';
import { iceFishing } from './ice-fishing';
import { liveBait } from './live-bait';
import { artificialLureSelection } from './artificial-lure-selection';
import { nightFishing } from './night-fishing';
import { noodling } from './noodling';
import { spinningVsBaitcasting } from './spinning-vs-baitcasting';
import { rodSelectionGuide } from './rod-selection-guide';

export const allTechniques: Technique[] = [
  spinningVsBaitcasting,
  rodSelectionGuide,
  texasRig,
  carolinaRig,
  dropShot,
  nedRig,
  wackyRig,
  jigging,
  crankbait,
  topwater,
  spinnerbait,
  flyFishingBasics,
  trolling,
  bottomFishing,
  driftFishing,
  surfFishing,
  kayakFishing,
  iceFishing,
  liveBait,
  artificialLureSelection,
  nightFishing,
  noodling,
];
