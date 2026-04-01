import type { MoonPhase } from '../types';

export interface MoonRule {
  phase: MoonPhase;
  feedingActivity: 'peak' | 'above-average' | 'average' | 'below-average';
  tips: string[];
}

export const moonRules: MoonRule[] = [
  {
    phase: 'new',
    feedingActivity: 'peak',
    tips: [
      'New moon periods produce peak feeding activity — fish feed heavily during low-light conditions.',
      'Daytime fishing is excellent during a new moon as fish compensate for reduced nighttime feeding visibility.',
      'Expect stronger dawn and dusk bites as fish rely on these transition periods to feed.',
      'Topwater action can be exceptional during the new moon phase.',
      'Plan your best fishing trips around the new moon for maximum catch potential.',
    ],
  },
  {
    phase: 'waxing-crescent',
    feedingActivity: 'above-average',
    tips: [
      'Feeding activity remains strong as the moon transitions from new toward the first quarter.',
      'Evening bites tend to improve as the crescent moon provides just enough light for predators.',
      'This is a great phase for planning multi-day fishing trips with consistent action.',
      'Fish are active in both shallow and mid-depth zones during this transition.',
    ],
  },
  {
    phase: 'first-quarter',
    feedingActivity: 'average',
    tips: [
      'First quarter moon produces average and predictable feeding activity.',
      'Expect a reliable morning bite and a decent afternoon to evening window.',
      'Tidal movements are moderate during quarter moon phases, producing steady inshore action.',
      'Focus on proven techniques and high-confidence spots for consistent results.',
    ],
  },
  {
    phase: 'waxing-gibbous',
    feedingActivity: 'below-average',
    tips: [
      'Feeding activity dips slightly as the moon approaches full — fish feed more at night.',
      'Daytime fishing can be tougher since fish are actively feeding overnight under bright moonlight.',
      'Focus on early morning before fish settle in from their nighttime feeding activity.',
      'Finesse presentations tend to outperform power fishing during this phase.',
    ],
  },
  {
    phase: 'full',
    feedingActivity: 'peak',
    tips: [
      'Full moon triggers peak feeding — but much of it happens at night under bright moonlight.',
      'Nighttime fishing during a full moon can be absolutely incredible for bass, walleye, and catfish.',
      'Daytime action may be slower since fish gorge themselves overnight — focus on dawn and dusk.',
      'Use dark-colored lures at night to create strong silhouettes against the bright moonlit sky.',
      'Major and minor solunar feeding periods are at their strongest during the full moon.',
    ],
  },
  {
    phase: 'waning-gibbous',
    feedingActivity: 'above-average',
    tips: [
      'Above-average feeding activity as the moon begins waning from full.',
      'Fish are transitioning back to more daytime feeding as nighttime light diminishes.',
      'Morning bites are especially productive during this phase as fish shift schedules.',
      'This is an underrated phase that many anglers overlook — take advantage of it.',
    ],
  },
  {
    phase: 'last-quarter',
    feedingActivity: 'average',
    tips: [
      'Average feeding patterns return during the last quarter phase.',
      'Tidal movements are moderate, providing predictable inshore fishing windows.',
      'Standard dawn and dusk patterns hold true — plan around the traditional feeding windows.',
      'This is a good phase for exploring new water since fish behavior is predictable.',
    ],
  },
  {
    phase: 'waning-crescent',
    feedingActivity: 'above-average',
    tips: [
      'Feeding activity picks up as the moon wanes toward the next new moon.',
      'Fish sense the approaching dark phase and begin increasing daytime feeding.',
      'Dawn bites are particularly strong during the waning crescent.',
      'This is an excellent time to fish — the days leading into a new moon are consistently productive.',
    ],
  },
];
