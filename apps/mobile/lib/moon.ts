import type { MoonPhase } from '../../../data/types';

export interface MoonPhaseData {
  phase: MoonPhase;
  illumination: number;
  phaseName: string;
  emoji: string;
}

export function getMoonPhase(date: Date = new Date()): MoonPhaseData {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Julian day calculation for moon phase
  const c = Math.floor(365.25 * year);
  const e = Math.floor(30.6 * month);
  const jd = c + e + day - 694039.09;
  const phase = jd / 29.5305882;
  const phaseIndex = Math.round((phase - Math.floor(phase)) * 8) % 8;

  const phases: {
    phase: MoonPhase;
    name: string;
    emoji: string;
  }[] = [
    { phase: 'new', name: 'New Moon', emoji: '\uD83C\uDF11' },
    { phase: 'waxing-crescent', name: 'Waxing Crescent', emoji: '\uD83C\uDF12' },
    { phase: 'first-quarter', name: 'First Quarter', emoji: '\uD83C\uDF13' },
    { phase: 'waxing-gibbous', name: 'Waxing Gibbous', emoji: '\uD83C\uDF14' },
    { phase: 'full', name: 'Full Moon', emoji: '\uD83C\uDF15' },
    { phase: 'waning-gibbous', name: 'Waning Gibbous', emoji: '\uD83C\uDF16' },
    { phase: 'last-quarter', name: 'Last Quarter', emoji: '\uD83C\uDF17' },
    { phase: 'waning-crescent', name: 'Waning Crescent', emoji: '\uD83C\uDF18' },
  ];

  const matched = phases[phaseIndex] || phases[0];

  // Approximate illumination
  const fraction = phase - Math.floor(phase);
  const illumination = Math.round((1 - Math.abs(fraction * 2 - 1)) * 100);

  return {
    phase: matched.phase,
    illumination,
    phaseName: matched.name,
    emoji: matched.emoji,
  };
}
