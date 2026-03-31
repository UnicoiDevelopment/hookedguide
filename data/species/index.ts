import { Species } from '../types';

import { blueCatfish } from './blue-catfish';
import { bluegill } from './bluegill';
import { brookTrout } from './brook-trout';
import { brownTrout } from './brown-trout';
import { carp } from './carp';
import { channelCatfish } from './channel-catfish';
import { crappie } from './crappie';
import { flatheadCatfish } from './flathead-catfish';
import { flounder } from './flounder';
import { gar } from './gar';
import { grouper } from './grouper';
import { kingMackerel } from './king-mackerel';
import { largemouthBass } from './largemouth-bass';
import { mahiMahi } from './mahi-mahi';
import { musky } from './musky';
import { northernPike } from './northern-pike';
import { rainbowTrout } from './rainbow-trout';
import { redSnapper } from './red-snapper';
import { redfish } from './redfish';
import { sauger } from './sauger';
import { sheepshead } from './sheepshead';
import { smallmouthBass } from './smallmouth-bass';
import { snook } from './snook';
import { speckledTrout } from './speckled-trout';
import { spottedBass } from './spotted-bass';
import { stripedBass } from './striped-bass';
import { tarpon } from './tarpon';
import { walleye } from './walleye';
import { whiteBass } from './white-bass';
import { yellowPerch } from './yellow-perch';

export const allSpecies: Species[] = [
  blueCatfish,
  bluegill,
  brookTrout,
  brownTrout,
  carp,
  channelCatfish,
  crappie,
  flatheadCatfish,
  flounder,
  gar,
  grouper,
  kingMackerel,
  largemouthBass,
  mahiMahi,
  musky,
  northernPike,
  rainbowTrout,
  redSnapper,
  redfish,
  sauger,
  sheepshead,
  smallmouthBass,
  snook,
  speckledTrout,
  spottedBass,
  stripedBass,
  tarpon,
  walleye,
  whiteBass,
  yellowPerch,
];

export const speciesMetadata = allSpecies.map(s => ({
  slug: s.slug,
  name: s.name,
  type: s.type,
}));
