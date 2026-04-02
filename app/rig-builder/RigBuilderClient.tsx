'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronDown,
  RotateCcw,
  Share2,
  ExternalLink,
  Fish,
  Crosshair,
} from 'lucide-react';
import { allSpecies } from '@/data/species';
import { getMatchingProducts } from '@/lib/affiliate-matcher';
import { affiliateProducts } from '@/data/affiliate-products';
import type { AffiliateProduct } from '@/data/types';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

/* ─── Types ─── */
interface RigComponent {
  label: string;
  detail: string;
  price: string;
  alternatives: { label: string; detail: string; price: string; tag?: string }[];
}

interface RigPreset {
  rod: RigComponent;
  reel: RigComponent;
  line: RigComponent;
  hook: RigComponent;
  weight: RigComponent | null;
  lure: RigComponent;
}

type BudgetTier = 'budget' | 'sweet-spot' | 'tournament' | 'custom';
type RigSlot = 'rod' | 'reel' | 'line' | 'hook' | 'weight' | 'lure';

/* ─── Rig presets by species + reel type ─── */
const rigPresets: Record<string, Partial<Record<'spinning' | 'baitcasting', RigPreset>> & { baitcastingNote?: string }> = {
  'largemouth-bass': {
    baitcasting: {
      rod: {
        label: 'Dobyns Fury 703C', detail: '7\'0" MH Fast', price: '$139',
        alternatives: [
          { label: 'St. Croix Bass X', detail: '7\'1" MH Fast', price: '$99', tag: 'BUDGET PICK' },
          { label: 'G. Loomis E6X', detail: '7\'0" MH Fast', price: '$229', tag: 'UPGRADE' },
          { label: 'Abu Garcia Veritas', detail: '7\'0" MH Fast', price: '$79', tag: 'VALUE PICK' },
          { label: 'Shimano Expride', detail: '7\'0" MH Fast', price: '$349', tag: 'PREMIUM' },
        ],
      },
      reel: {
        label: 'Shimano SLX DC', detail: '7.2:1 ratio', price: '$199',
        alternatives: [
          { label: 'Abu Garcia Revo X', detail: '7.3:1 ratio', price: '$80', tag: 'BUDGET PICK' },
          { label: 'Shimano Curado K', detail: '7.4:1 ratio', price: '$220', tag: 'UPGRADE' },
          { label: 'Daiwa Tatula SV TW', detail: '7.1:1 ratio', price: '$200' },
          { label: 'Shimano Metanium', detail: '7.1:1 ratio', price: '$400', tag: 'PREMIUM' },
        ],
      },
      line: {
        label: 'Seaguar InvizX', detail: '12 lb Fluorocarbon', price: '$19',
        alternatives: [
          { label: 'Berkley Trilene 100% Fluoro', detail: '12 lb Fluorocarbon', price: '$15', tag: 'BUDGET PICK' },
          { label: 'Seaguar Tatsu', detail: '12 lb Fluorocarbon', price: '$30', tag: 'PREMIUM' },
          { label: 'Sufix 832 Braid + Fluoro Leader', detail: '30 lb Braid + 12 lb Leader', price: '$20' },
        ],
      },
      hook: {
        label: 'Mustad Grip-Pin 3/0 EWG', detail: '3/0 Extra Wide Gap', price: '$5',
        alternatives: [
          { label: 'Owner Offset Worm 3/0', detail: '3/0 Offset', price: '$6' },
          { label: 'Gamakatsu EWG 3/0', detail: '3/0 Extra Wide Gap', price: '$5' },
          { label: 'VMC Ike Approved 3/0', detail: '3/0 Wide Gap', price: '$5' },
        ],
      },
      weight: {
        label: 'Tungsten Bullet 3/16 oz', detail: '3/16 oz, unpegged', price: '$8',
        alternatives: [
          { label: 'Lead Bullet 1/4 oz', detail: '1/4 oz, cheap & effective', price: '$3', tag: 'BUDGET PICK' },
          { label: 'Tungsten Bullet 1/4 oz', detail: '1/4 oz, heavier cover', price: '$8' },
          { label: 'No weight', detail: 'Weightless — for slow fall', price: '$0' },
        ],
      },
      lure: {
        label: 'Zoom Trick Worm 7"', detail: 'Green Pumpkin', price: '$4',
        alternatives: [
          { label: 'Senko 5"', detail: 'Green Pumpkin', price: '$7', tag: 'CLASSIC' },
          { label: 'Berkley PowerBait MaxScent', detail: '5" Green Pumpkin', price: '$8' },
          { label: 'Strike King Rage Tail Craw', detail: 'Green Pumpkin', price: '$5' },
          { label: 'Zoom Brush Hog', detail: 'Watermelon Red', price: '$5' },
        ],
      },
    },
    spinning: {
      rod: {
        label: 'St. Croix Bass X Spinning', detail: '7\'0" M Fast', price: '$99',
        alternatives: [
          { label: 'Abu Garcia Veritas Spin', detail: '7\'0" M Fast', price: '$79', tag: 'BUDGET PICK' },
          { label: 'Dobyns Fury Spinning', detail: '7\'0" M Fast', price: '$139', tag: 'UPGRADE' },
          { label: 'Shimano Expride Spinning', detail: '7\'0" M Fast', price: '$349', tag: 'PREMIUM' },
        ],
      },
      reel: {
        label: 'Shimano Stradic 2500', detail: '6.0:1 ratio', price: '$200',
        alternatives: [
          { label: 'Pflueger President 2500', detail: '5.2:1 ratio', price: '$50', tag: 'BUDGET PICK' },
          { label: 'Daiwa BG 2500', detail: '5.6:1 ratio', price: '$70', tag: 'VALUE' },
          { label: 'Shimano Vanford 2500', detail: '6.1:1 ratio', price: '$250', tag: 'UPGRADE' },
        ],
      },
      line: {
        label: 'Sufix 832 Braid + Fluoro Leader', detail: '15 lb Braid + 10 lb Leader', price: '$20',
        alternatives: [
          { label: 'Berkley FireLine', detail: '10 lb Braid + 8 lb Leader', price: '$15', tag: 'BUDGET PICK' },
          { label: 'PowerPro Super 8 Slick', detail: '15 lb Braid + 10 lb Leader', price: '$25', tag: 'PREMIUM' },
          { label: 'Seaguar InvizX', detail: '8 lb Fluorocarbon (direct)', price: '$19' },
        ],
      },
      hook: {
        label: 'Owner Drop Shot #1', detail: '#1 Drop Shot Hook', price: '$6',
        alternatives: [
          { label: 'Mustad TitanX Drop Shot #1', detail: '#1 Finesse Hook', price: '$5' },
          { label: 'Gamakatsu Split Shot #1', detail: '#1 Split Shot Hook', price: '$5' },
          { label: 'VMC Spinshot #1/0', detail: '#1/0 Spinning Hook', price: '$7' },
        ],
      },
      weight: {
        label: 'Tungsten Drop Shot 3/16 oz', detail: '3/16 oz Cylinder', price: '$6',
        alternatives: [
          { label: 'Lead Drop Shot 1/4 oz', detail: '1/4 oz Round', price: '$2', tag: 'BUDGET PICK' },
          { label: 'Tungsten Cylinder 1/8 oz', detail: '1/8 oz — shallow/calm', price: '$5' },
          { label: 'Tungsten Cylinder 1/4 oz', detail: '1/4 oz — deeper/windy', price: '$6' },
        ],
      },
      lure: {
        label: 'Roboworm Straight 4.5"', detail: 'Aaron\'s Magic', price: '$6',
        alternatives: [
          { label: 'Zoom Finesse Worm 4.5"', detail: 'Green Pumpkin', price: '$4', tag: 'BUDGET PICK' },
          { label: 'Berkley MaxScent Flat Worm', detail: 'Green Pumpkin', price: '$8' },
          { label: 'Jackall Crosstail Shad 4"', detail: 'Sight Flash', price: '$9', tag: 'PREMIUM' },
        ],
      },
    },
  },
  'crappie': {
    spinning: {
      rod: {
        label: 'BPS Crappie Maxx', detail: '6\'6" UL Fast', price: '$60',
        alternatives: [
          { label: 'Ugly Stik GX2 Ultra Light', detail: '6\'0" UL Fast', price: '$40', tag: 'BUDGET PICK' },
          { label: 'Lew\'s Wally Marshall Pro', detail: '6\'6" UL Fast', price: '$50' },
          { label: 'St. Croix Panfish Series', detail: '6\'6" UL Fast', price: '$110', tag: 'UPGRADE' },
        ],
      },
      reel: {
        label: 'Pflueger President 25', detail: '5.2:1 ratio', price: '$50',
        alternatives: [
          { label: 'Abu Garcia Max X 20', detail: '5.2:1 ratio', price: '$30', tag: 'BUDGET PICK' },
          { label: 'Shimano Sienna 2500', detail: '5.0:1 ratio', price: '$30' },
          { label: 'Daiwa Revros 2000', detail: '5.3:1 ratio', price: '$40' },
        ],
      },
      line: {
        label: 'Berkley Trilene XL', detail: '4 lb Monofilament', price: '$8',
        alternatives: [
          { label: 'Berkley Trilene Micro Ice', detail: '4 lb Mono (ultra-limp)', price: '$6' },
          { label: 'Seaguar InvizX', detail: '4 lb Fluorocarbon', price: '$15' },
          { label: 'Sufix Nanobraid 6 lb + Leader', detail: '6 lb Braid + 4 lb Leader', price: '$18' },
        ],
      },
      hook: {
        label: 'Mustad Jig Head 1/16 oz #4', detail: '1/16 oz Jig Head', price: '$4',
        alternatives: [
          { label: 'Eagle Claw Jig Head 1/32 oz #6', detail: '1/32 oz — ultra shallow', price: '$3' },
          { label: 'Slider Head 1/16 oz #4', detail: '1/16 oz — slip bobber rig', price: '$4' },
          { label: 'VMC Neon Moon Eye 1/8 oz #2', detail: '1/8 oz — deeper water', price: '$5' },
        ],
      },
      weight: null,
      lure: {
        label: 'Bobby Garland Baby Shad 2"', detail: 'Monkey Milk', price: '$4',
        alternatives: [
          { label: 'Berkley PowerBait Minnow 2"', detail: 'Pearl White', price: '$5' },
          { label: 'Strike King Mr. Crappie 2"', detail: 'Hot Chicken', price: '$4' },
          { label: 'Southern Pro Lit\'l Hustler', detail: 'Chartreuse/White', price: '$3', tag: 'BUDGET PICK' },
        ],
      },
    },
    baitcastingNote: 'Spinning gear is strongly recommended for crappie fishing. The light lures and line are too small for baitcasting equipment.',
  },
  'channel-catfish': {
    spinning: {
      rod: {
        label: 'Ugly Stik Catfish 7\'', detail: '7\'0" MH Moderate', price: '$50',
        alternatives: [
          { label: 'Shakespeare Ugly Stik GX2', detail: '7\'0" MH Moderate', price: '$40', tag: 'BUDGET PICK' },
          { label: 'Berkley Big Game Spinning', detail: '7\'0" MH Moderate', price: '$45' },
          { label: 'St. Croix Catfish Special', detail: '7\'0" MH Moderate', price: '$100', tag: 'UPGRADE' },
        ],
      },
      reel: {
        label: 'Penn Battle III 4000', detail: '6.2:1 ratio', price: '$100',
        alternatives: [
          { label: 'Daiwa BG 4000', detail: '5.7:1 ratio', price: '$70', tag: 'VALUE' },
          { label: 'Abu Garcia Max X 4000', detail: '5.8:1 ratio', price: '$40', tag: 'BUDGET PICK' },
          { label: 'Penn Slammer IV 4500', detail: '6.2:1 ratio', price: '$260', tag: 'PREMIUM' },
        ],
      },
      line: {
        label: 'Berkley FireLine 30 lb', detail: '30 lb Braid + 20 lb Mono Leader', price: '$15',
        alternatives: [
          { label: 'Berkley Trilene XL 20 lb', detail: '20 lb Monofilament (direct)', price: '$8', tag: 'BUDGET PICK' },
          { label: 'KastKing SuperPower 30 lb', detail: '30 lb Braid + 20 lb Leader', price: '$10' },
          { label: 'Sufix 832 Braid 30 lb', detail: '30 lb Braid + 20 lb Leader', price: '$20', tag: 'PREMIUM' },
        ],
      },
      hook: {
        label: 'Mustad Circle Hook 3/0', detail: '3/0 Circle Hook', price: '$5',
        alternatives: [
          { label: 'Eagle Claw Circle Sea 3/0', detail: '3/0 Circle Hook', price: '$3', tag: 'BUDGET PICK' },
          { label: 'Gamakatsu Octopus Circle 4/0', detail: '4/0 — big channels', price: '$6' },
          { label: 'Team Catfish Dip Tube + Treble #4', detail: '#4 Treble on Dip Tube', price: '$5' },
        ],
      },
      weight: {
        label: 'Egg Sinker 1 oz', detail: '1 oz Egg Sinker (slip rig)', price: '$3',
        alternatives: [
          { label: 'No-Roll Sinker 1 oz', detail: '1 oz — holds in current', price: '$4' },
          { label: 'Egg Sinker 1/2 oz', detail: '1/2 oz — ponds/still water', price: '$2' },
          { label: 'Bank Sinker 2 oz', detail: '2 oz — fast current', price: '$3' },
        ],
      },
      lure: {
        label: 'Team Catfish Dip Bait', detail: 'Dip Bait on Treble #4 Dip Tube', price: '$8',
        alternatives: [
          { label: 'Chicken Liver (fresh)', detail: 'Fresh from grocery store', price: '$3', tag: 'CLASSIC' },
          { label: 'Berkley PowerBait Catfish', detail: 'Pre-formed Chunks', price: '$5' },
          { label: 'Fresh Cut Shad', detail: 'Cut bait — head or chunk', price: '$0' },
        ],
      },
    },
    baitcasting: {
      rod: {
        label: 'Whisker Seeker 7\'6"', detail: '7\'6" MH Moderate', price: '$80',
        alternatives: [
          { label: 'Ugly Stik Catfish Casting', detail: '7\'0" MH Moderate', price: '$50', tag: 'BUDGET PICK' },
          { label: 'B\'n\'M Silver Cat Magnum', detail: '7\'6" H Moderate', price: '$60' },
        ],
      },
      reel: {
        label: 'Abu Garcia Ambassadeur 6500', detail: '5.3:1 ratio', price: '$100',
        alternatives: [
          { label: 'Abu Garcia C3 6500', detail: '5.1:1 ratio', price: '$80', tag: 'BUDGET PICK' },
          { label: 'Penn Squall II 400', detail: '5.3:1 ratio', price: '$130' },
        ],
      },
      line: {
        label: 'Berkley FireLine 30 lb', detail: '30 lb Braid + 25 lb Mono Leader', price: '$15',
        alternatives: [
          { label: 'Berkley Trilene Big Game 25 lb', detail: '25 lb Mono (direct)', price: '$8', tag: 'BUDGET PICK' },
          { label: 'KastKing SuperPower 40 lb', detail: '40 lb Braid + 30 lb Leader', price: '$10' },
        ],
      },
      hook: {
        label: 'Mustad Circle Hook 5/0', detail: '5/0 Circle Hook', price: '$6',
        alternatives: [
          { label: 'Eagle Claw Circle 5/0', detail: '5/0 Circle Hook', price: '$4', tag: 'BUDGET PICK' },
          { label: 'Team Catfish Sinker Slide + 5/0', detail: '5/0 w/ Sinker Slide', price: '$7' },
        ],
      },
      weight: {
        label: 'No-Roll Sinker 2 oz', detail: '2 oz No-Roll Sinker', price: '$4',
        alternatives: [
          { label: 'Bank Sinker 3 oz', detail: '3 oz — heavy current', price: '$3' },
          { label: 'Egg Sinker 1 oz', detail: '1 oz — still water', price: '$2', tag: 'BUDGET PICK' },
        ],
      },
      lure: {
        label: 'Fresh Cut Shad', detail: 'Fresh Cut Shad (head or chunk)', price: '$0',
        alternatives: [
          { label: 'Live Bluegill (where legal)', detail: 'Live bait — check regs', price: '$0' },
          { label: 'Chicken Liver', detail: 'Classic catfish bait', price: '$3' },
          { label: 'Berkley PowerBait Catfish Chunks', detail: 'Pre-formed chunks', price: '$5' },
        ],
      },
    },
  },
  'walleye': {
    spinning: {
      rod: {
        label: 'St. Croix Eyecon', detail: '6\'6" M Fast', price: '$130',
        alternatives: [
          { label: 'Fenwick HMG Walleye', detail: '6\'6" M Fast', price: '$100', tag: 'VALUE' },
          { label: 'Ugly Stik GX2 Medium', detail: '6\'6" M Fast', price: '$40', tag: 'BUDGET PICK' },
          { label: 'G. Loomis E6X Walleye', detail: '6\'8" M Fast', price: '$230', tag: 'PREMIUM' },
        ],
      },
      reel: {
        label: 'Shimano Stradic 2500', detail: '6.0:1 ratio', price: '$200',
        alternatives: [
          { label: 'Pflueger President 2500', detail: '5.2:1 ratio', price: '$50', tag: 'BUDGET PICK' },
          { label: 'Daiwa BG 2500', detail: '5.6:1 ratio', price: '$70', tag: 'VALUE' },
          { label: 'Shimano Vanford 2500', detail: '6.1:1 ratio', price: '$250', tag: 'UPGRADE' },
        ],
      },
      line: {
        label: 'Berkley FireLine 10 lb', detail: '10 lb Braid + 8 lb Fluoro Leader', price: '$15',
        alternatives: [
          { label: 'Berkley Trilene XL 6 lb', detail: '6 lb Mono (direct)', price: '$8', tag: 'BUDGET PICK' },
          { label: 'Sufix 832 Braid 10 lb', detail: '10 lb Braid + 8 lb Leader', price: '$20' },
          { label: 'Seaguar InvizX 8 lb', detail: '8 lb Fluorocarbon (direct)', price: '$19' },
        ],
      },
      hook: {
        label: 'VMC Jig Head 1/4 oz #1/0', detail: '1/4 oz Jig Head', price: '$5',
        alternatives: [
          { label: 'Mustad Jig Head 1/8 oz #1', detail: '1/8 oz — shallow/calm', price: '$4' },
          { label: 'Northland Fire-Ball 3/8 oz #2/0', detail: '3/8 oz — deep/current', price: '$5' },
          { label: 'Live Bait Hook #4', detail: '#4 Aberdeen — lindy rig', price: '$3' },
        ],
      },
      weight: {
        label: 'Walking Sinker 1/4 oz', detail: '1/4 oz — Lindy Rig', price: '$3',
        alternatives: [
          { label: 'No weight', detail: 'Jig head only', price: '$0' },
          { label: 'Walking Sinker 3/8 oz', detail: '3/8 oz — deeper/current', price: '$3' },
          { label: 'Bottom Bouncer 1 oz', detail: '1 oz — trolling', price: '$4' },
        ],
      },
      lure: {
        label: 'Berkley Gulp Minnow 3"', detail: 'Chartreuse Shad', price: '$7',
        alternatives: [
          { label: 'Live Minnow', detail: 'Fathead or Shiner', price: '$4', tag: 'CLASSIC' },
          { label: 'Rapala Jigging Rap', detail: 'Glow Tiger', price: '$9' },
          { label: 'Northland Mimic Minnow', detail: 'Firetiger', price: '$5' },
        ],
      },
    },
    baitcasting: {
      rod: {
        label: 'St. Croix Eyecon Casting', detail: '7\'0" M Moderate-Fast', price: '$130',
        alternatives: [
          { label: 'Abu Garcia Vengeance Casting', detail: '7\'0" M Moderate', price: '$50', tag: 'BUDGET PICK' },
          { label: 'Fenwick HMG Casting', detail: '7\'0" M Moderate-Fast', price: '$100' },
        ],
      },
      reel: {
        label: 'Shimano Curado K', detail: '6.2:1 ratio', price: '$220',
        alternatives: [
          { label: 'Abu Garcia Revo X', detail: '6.6:1 ratio', price: '$80', tag: 'BUDGET PICK' },
          { label: 'Shimano SLX DC', detail: '6.3:1 ratio', price: '$199' },
        ],
      },
      line: {
        label: 'Berkley FireLine 10 lb', detail: '10 lb Braid + 8 lb Fluoro Leader', price: '$15',
        alternatives: [
          { label: 'Seaguar InvizX 8 lb', detail: '8 lb Fluorocarbon (direct)', price: '$19' },
          { label: 'Berkley Trilene XL 8 lb', detail: '8 lb Mono', price: '$8', tag: 'BUDGET PICK' },
        ],
      },
      hook: {
        label: 'VMC Jig Head 3/8 oz #1/0', detail: '3/8 oz Jig Head', price: '$5',
        alternatives: [
          { label: 'Mustad Jig Head 1/4 oz #1/0', detail: '1/4 oz — shallow', price: '$4' },
          { label: 'Northland Fire-Ball 1/2 oz #2/0', detail: '1/2 oz — deep', price: '$5' },
        ],
      },
      weight: null,
      lure: {
        label: 'Rapala Shad Rap #7', detail: 'Firetiger', price: '$10',
        alternatives: [
          { label: 'Berkley Flicker Shad #5', detail: 'Firetiger', price: '$7', tag: 'VALUE' },
          { label: 'Rapala Husky Jerk #10', detail: 'Glass Perch', price: '$10' },
          { label: 'Strike King Red Eye Shad', detail: 'Sexy Shad', price: '$7' },
        ],
      },
    },
  },
  'redfish': {
    spinning: {
      rod: {
        label: 'St. Croix Mojo Inshore', detail: '7\'0" M Fast', price: '$160',
        alternatives: [
          { label: 'Ugly Stik Inshore Select', detail: '7\'0" M Fast', price: '$50', tag: 'BUDGET PICK' },
          { label: 'Penn Squadron III Inshore', detail: '7\'0" M Fast', price: '$70', tag: 'VALUE' },
          { label: 'G. Loomis E6X Inshore', detail: '7\'0" M Fast', price: '$230', tag: 'PREMIUM' },
        ],
      },
      reel: {
        label: 'Penn Battle III 3000', detail: '6.2:1 ratio', price: '$100',
        alternatives: [
          { label: 'Daiwa BG 3000', detail: '5.6:1 ratio', price: '$70', tag: 'VALUE' },
          { label: 'Abu Garcia Revo SX 3000', detail: '6.2:1 ratio', price: '$100' },
          { label: 'Shimano Stradic FL 3000', detail: '6.0:1 ratio', price: '$200', tag: 'UPGRADE' },
        ],
      },
      line: {
        label: 'Sufix 832 Braid 15 lb', detail: '15 lb Braid + 20 lb Fluoro Leader', price: '$20',
        alternatives: [
          { label: 'KastKing SuperPower 20 lb', detail: '20 lb Braid + 20 lb Leader', price: '$10', tag: 'BUDGET PICK' },
          { label: 'PowerPro Super 8 Slick 15 lb', detail: '15 lb Braid + 20 lb Leader', price: '$25' },
        ],
      },
      hook: {
        label: 'Mustad Circle Hook 3/0', detail: '3/0 Inline Circle', price: '$5',
        alternatives: [
          { label: 'Owner Mutu Circle 3/0', detail: '3/0 Light Circle', price: '$7' },
          { label: 'VMC Ike Approved Weedless 4/0', detail: '4/0 Weedless — grass flats', price: '$6' },
          { label: 'Mustad Jig Head 1/4 oz #2/0', detail: '1/4 oz Jig Head', price: '$5' },
        ],
      },
      weight: {
        label: 'Bullet Weight 1/4 oz', detail: '1/4 oz — Texas rig for grass', price: '$4',
        alternatives: [
          { label: 'No weight', detail: 'Under popping cork', price: '$0' },
          { label: 'Split Shot BB', detail: 'Light — under cork', price: '$2', tag: 'BUDGET PICK' },
          { label: 'Jig Head 1/4 oz', detail: 'Jig head replaces weight + hook', price: '$5' },
        ],
      },
      lure: {
        label: 'Z-Man MinnowZ 3"', detail: 'Chartreuse/White', price: '$5',
        alternatives: [
          { label: 'Berkley Gulp Shrimp 3"', detail: 'New Penny', price: '$7', tag: 'TOP PICK' },
          { label: 'DOA Shrimp 3"', detail: 'Rootbeer/Gold', price: '$6' },
          { label: 'Live Shrimp', detail: 'Under popping cork', price: '$5', tag: 'CLASSIC' },
        ],
      },
    },
    baitcasting: {
      rod: {
        label: 'St. Croix Mojo Inshore Casting', detail: '7\'0" M Fast', price: '$160',
        alternatives: [
          { label: 'Penn Squadron III Casting', detail: '7\'0" M Fast', price: '$70', tag: 'VALUE' },
        ],
      },
      reel: {
        label: 'Shimano Curado K 200', detail: '7.4:1 ratio', price: '$220',
        alternatives: [
          { label: 'Abu Garcia Revo Inshore', detail: '6.6:1 ratio', price: '$140' },
          { label: 'Abu Garcia Revo X', detail: '7.3:1 ratio', price: '$80', tag: 'BUDGET PICK' },
        ],
      },
      line: {
        label: 'Sufix 832 Braid 20 lb', detail: '20 lb Braid + 20 lb Fluoro Leader', price: '$20',
        alternatives: [
          { label: 'KastKing SuperPower 20 lb', detail: '20 lb Braid + 20 lb Leader', price: '$10', tag: 'BUDGET PICK' },
        ],
      },
      hook: {
        label: 'Mustad Jig Head 1/4 oz #3/0', detail: '1/4 oz Jig Head', price: '$5',
        alternatives: [
          { label: 'Owner Twistlock 4/0', detail: '4/0 — weedless swimbaits', price: '$6' },
        ],
      },
      weight: null,
      lure: {
        label: 'Z-Man DieZel MinnowZ 4"', detail: 'Sexy Mullet', price: '$5',
        alternatives: [
          { label: 'Rapala Skitter Walk', detail: 'Chrome', price: '$10', tag: 'TOPWATER' },
          { label: 'MirrOLure MR17', detail: 'Green Back/White', price: '$8' },
        ],
      },
    },
  },
  'rainbow-trout': {
    spinning: {
      rod: {
        label: 'Fenwick HMG', detail: '6\'6" ML Fast', price: '$100',
        alternatives: [
          { label: 'Ugly Stik GX2 Ultra Light', detail: '6\'0" UL Fast', price: '$40', tag: 'BUDGET PICK' },
          { label: 'St. Croix Trout Series', detail: '6\'6" ML Fast', price: '$160', tag: 'UPGRADE' },
          { label: 'G. Loomis E6X Trout', detail: '6\'6" ML Fast', price: '$230', tag: 'PREMIUM' },
        ],
      },
      reel: {
        label: 'Shimano Stradic 2000', detail: '5.1:1 ratio', price: '$200',
        alternatives: [
          { label: 'Pflueger President 25', detail: '5.2:1 ratio', price: '$50', tag: 'BUDGET PICK' },
          { label: 'Daiwa Revros 2000', detail: '5.3:1 ratio', price: '$40', tag: 'VALUE' },
          { label: 'Shimano Vanford 2000', detail: '5.1:1 ratio', price: '$250', tag: 'UPGRADE' },
        ],
      },
      line: {
        label: 'Berkley Trilene XL', detail: '4 lb Monofilament', price: '$8',
        alternatives: [
          { label: 'Seaguar InvizX 4 lb', detail: '4 lb Fluorocarbon', price: '$15' },
          { label: 'Trout Magnet Trout S.O.S. 2 lb', detail: '2 lb Mono — streams', price: '$5', tag: 'FINESSE' },
        ],
      },
      hook: {
        label: 'Mustad Aberdeen #8', detail: '#8 Aberdeen', price: '$4',
        alternatives: [
          { label: 'Eagle Claw Aberdeen #10', detail: '#10 — small streams', price: '$3', tag: 'BUDGET PICK' },
          { label: 'Mustad Jig Head 1/32 oz #8', detail: '1/32 oz — micro jig', price: '$4' },
        ],
      },
      weight: {
        label: 'Split Shot BB', detail: 'BB size, 18" above hook', price: '$2',
        alternatives: [
          { label: 'No weight', detail: 'Under float or weightless drift', price: '$0' },
          { label: 'Split Shot #7', detail: 'Lighter — slow current', price: '$2' },
        ],
      },
      lure: {
        label: 'Trout Magnet 1/64 oz', detail: 'White / Chartreuse', price: '$5',
        alternatives: [
          { label: 'Berkley PowerBait Trout Dough', detail: 'Chartreuse (stocked trout)', price: '$5', tag: 'CLASSIC' },
          { label: 'Panther Martin Spinner 1/16 oz', detail: 'Gold', price: '$5' },
          { label: 'Live Worm', detail: 'Under a float — classic', price: '$3' },
          { label: 'Rapala Ultra Light Minnow', detail: 'Brook Trout', price: '$8' },
        ],
      },
    },
    baitcastingNote: 'Spinning gear is strongly recommended for trout fishing. The light lures and line are too delicate for baitcasting equipment.',
  },
  'smallmouth-bass': {
    spinning: {
      rod: {
        label: 'Dobyns Fury Spinning', detail: '6\'6" M Fast', price: '$139',
        alternatives: [
          { label: 'St. Croix Bass X Spin', detail: '6\'8" M Fast', price: '$99', tag: 'VALUE' },
          { label: 'Abu Garcia Veritas Spin', detail: '6\'6" M Fast', price: '$79', tag: 'BUDGET PICK' },
          { label: 'G. Loomis E6X Spin', detail: '6\'8" M Fast', price: '$230', tag: 'PREMIUM' },
        ],
      },
      reel: {
        label: 'Shimano Stradic 2500', detail: '6.0:1 ratio', price: '$200',
        alternatives: [
          { label: 'Pflueger President 25', detail: '5.2:1 ratio', price: '$50', tag: 'BUDGET PICK' },
          { label: 'Shimano Vanford 2500', detail: '6.1:1 ratio', price: '$250', tag: 'UPGRADE' },
        ],
      },
      line: {
        label: 'Seaguar InvizX 8 lb', detail: '8 lb Fluorocarbon', price: '$19',
        alternatives: [
          { label: 'Berkley Trilene XL 6 lb', detail: '6 lb Mono', price: '$8', tag: 'BUDGET PICK' },
          { label: 'Sufix 832 Braid 10 lb + Leader', detail: '10 lb Braid + 6 lb Leader', price: '$20' },
        ],
      },
      hook: {
        label: 'Mustad Grip-Pin 2/0 EWG', detail: '2/0 EWG', price: '$5',
        alternatives: [
          { label: 'Owner Drop Shot #1', detail: '#1 Drop Shot', price: '$6' },
          { label: 'VMC Neko Hook #1', detail: '#1 Wacky/Neko', price: '$5' },
        ],
      },
      weight: {
        label: 'Tungsten Drop Shot 3/16 oz', detail: '3/16 oz Cylinder', price: '$6',
        alternatives: [
          { label: 'Tungsten Ned Head 1/8 oz', detail: '1/8 oz Ned Rig', price: '$6' },
          { label: 'No weight', detail: 'Wacky rig / weightless', price: '$0' },
        ],
      },
      lure: {
        label: 'Berkley Gulp Minnow 3"', detail: 'Smelt', price: '$7',
        alternatives: [
          { label: 'Zoom Finesse Worm 4.5"', detail: 'Green Pumpkin', price: '$4' },
          { label: 'Z-Man TRD 2.75"', detail: 'Green Pumpkin (Ned Rig)', price: '$5', tag: 'HOT' },
          { label: 'Rapala X-Rap 08', detail: 'Olive Ghost', price: '$10' },
        ],
      },
    },
    baitcasting: {
      rod: {
        label: 'Dobyns Fury Casting', detail: '6\'10" M Fast', price: '$139',
        alternatives: [
          { label: 'St. Croix Bass X Casting', detail: '6\'10" M Fast', price: '$99', tag: 'VALUE' },
          { label: 'Abu Garcia Veritas', detail: '6\'10" M Fast', price: '$79', tag: 'BUDGET PICK' },
        ],
      },
      reel: {
        label: 'Shimano SLX DC', detail: '7.2:1 ratio', price: '$199',
        alternatives: [
          { label: 'Abu Garcia Revo X', detail: '6.6:1 ratio', price: '$80', tag: 'BUDGET PICK' },
          { label: 'Shimano Curado K', detail: '6.2:1 ratio', price: '$220' },
        ],
      },
      line: {
        label: 'Seaguar InvizX 10 lb', detail: '10 lb Fluorocarbon', price: '$19',
        alternatives: [
          { label: 'Berkley Trilene 100% Fluoro 10 lb', detail: '10 lb Fluorocarbon', price: '$15', tag: 'BUDGET PICK' },
        ],
      },
      hook: {
        label: 'Mustad Grip-Pin 2/0 EWG', detail: '2/0 EWG', price: '$5',
        alternatives: [
          { label: 'VMC Ike Approved 2/0', detail: '2/0 Wide Gap', price: '$5' },
        ],
      },
      weight: {
        label: 'Tungsten Bullet 1/4 oz', detail: '1/4 oz — Texas Rig', price: '$8',
        alternatives: [
          { label: 'Lead Bullet 1/4 oz', detail: '1/4 oz', price: '$3', tag: 'BUDGET PICK' },
          { label: 'No weight', detail: 'Weightless Senko', price: '$0' },
        ],
      },
      lure: {
        label: 'Senko 4"', detail: 'Green Pumpkin', price: '$7',
        alternatives: [
          { label: 'Strike King KVD Squarebill 1.5', detail: 'Sexy Shad', price: '$7' },
          { label: 'Zoom Ultra Vibe Speed Craw', detail: 'Green Pumpkin', price: '$5' },
        ],
      },
    },
  },
  'speckled-trout': {
    spinning: {
      rod: {
        label: 'Penn Squadron III Inshore', detail: '7\'0" M Fast', price: '$70',
        alternatives: [
          { label: 'Ugly Stik Inshore Select', detail: '7\'0" M Fast', price: '$50', tag: 'BUDGET PICK' },
          { label: 'St. Croix Mojo Inshore', detail: '7\'0" M Fast', price: '$160', tag: 'UPGRADE' },
        ],
      },
      reel: {
        label: 'Penn Battle III 3000', detail: '6.2:1 ratio', price: '$100',
        alternatives: [
          { label: 'Daiwa BG 3000', detail: '5.6:1 ratio', price: '$70', tag: 'VALUE' },
          { label: 'Shimano Stradic FL 3000', detail: '6.0:1 ratio', price: '$200', tag: 'UPGRADE' },
        ],
      },
      line: {
        label: 'Sufix 832 Braid 10 lb', detail: '10 lb Braid + 15 lb Fluoro Leader', price: '$20',
        alternatives: [
          { label: 'KastKing SuperPower 15 lb', detail: '15 lb Braid + 12 lb Leader', price: '$10', tag: 'BUDGET PICK' },
          { label: 'Berkley Trilene XL 10 lb', detail: '10 lb Mono (direct)', price: '$8' },
        ],
      },
      hook: {
        label: 'Mustad Jig Head 1/4 oz #1/0', detail: '1/4 oz Jig Head', price: '$5',
        alternatives: [
          { label: 'Mustad Jig Head 1/8 oz #1', detail: '1/8 oz — shallow marsh', price: '$4' },
          { label: 'Owner Twistlock 3/0', detail: '3/0 Weedless — grass', price: '$6' },
        ],
      },
      weight: null,
      lure: {
        label: 'Z-Man MinnowZ 3"', detail: 'Opening Night', price: '$5',
        alternatives: [
          { label: 'Berkley Gulp Shrimp 3"', detail: 'New Penny', price: '$7', tag: 'TOP PICK' },
          { label: 'DOA Shrimp 3"', detail: 'Rootbeer/Gold', price: '$6' },
          { label: 'MirrOLure MR17', detail: 'Green Back/White', price: '$8' },
          { label: 'Live Shrimp under Cork', detail: 'Live shrimp — classic', price: '$5' },
        ],
      },
    },
    baitcastingNote: 'Spinning gear is the standard for speckled trout. The light lines and lures required make spinning the clear choice.',
  },
};

/* ─── Fallback: build a generic preset from speciesDefaults ─── */
function buildFallbackPreset(reelType: 'spinning' | 'baitcasting', speciesSlug: string): RigPreset {
  const speciesDefaultsMap: Record<string, { rodType: string; rodLength: string; rodPower: string; rodAction: string; lineType: string; lineWeight: string; hookType: string; hookSize: string; lureType: string; lureColor: string }> = {
    'largemouth-bass': { rodType: 'baitcasting', rodLength: "7'0\"", rodPower: 'MH', rodAction: 'Fast', lineType: 'Fluorocarbon', lineWeight: '12 lb', hookType: 'EWG', hookSize: '3/0', lureType: 'Soft Plastic Worm', lureColor: 'Green Pumpkin' },
  };
  const d = speciesDefaultsMap[speciesSlug];
  const sp = allSpecies.find(s => s.slug === speciesSlug);
  const name = sp?.name || speciesSlug;

  return {
    rod: {
      label: `${reelType === 'baitcasting' ? 'Baitcasting' : 'Spinning'} Rod`, detail: `7'0" M Fast — for ${name}`, price: '$80-150',
      alternatives: [],
    },
    reel: {
      label: `${reelType === 'baitcasting' ? 'Baitcasting' : 'Spinning'} Reel`, detail: reelType === 'baitcasting' ? '7.1:1 ratio' : '6.0:1 ratio', price: '$80-200',
      alternatives: [],
    },
    line: {
      label: 'Fluorocarbon or Braid + Leader', detail: '10-15 lb', price: '$15-20',
      alternatives: [],
    },
    hook: {
      label: `Hook for ${name}`, detail: d?.hookSize || '1/0', price: '$5',
      alternatives: [],
    },
    weight: {
      label: 'Appropriate weight', detail: '1/4 oz', price: '$3-5',
      alternatives: [],
    },
    lure: {
      label: `Lure for ${name}`, detail: d?.lureColor || 'Natural', price: '$5-8',
      alternatives: [],
    },
  };
}

/* ─── Constants ─── */
const POPULAR_SLUGS = [
  'largemouth-bass', 'crappie', 'walleye', 'redfish',
  'channel-catfish', 'rainbow-trout', 'smallmouth-bass', 'speckled-trout',
];

const BUDGET_TIERS: { value: BudgetTier; label: string; desc: string }[] = [
  { value: 'budget', label: 'Budget Build', desc: '~$150 total' },
  { value: 'sweet-spot', label: 'Sweet Spot', desc: '~$350 total' },
  { value: 'tournament', label: 'Tournament Grade', desc: '$800+ total' },
  { value: 'custom', label: 'Custom', desc: 'Pick whatever you want' },
];

const RIG_SLOTS: { key: RigSlot; icon: string; label: string }[] = [
  { key: 'rod', icon: '🎣', label: 'Rod' },
  { key: 'reel', icon: '🔄', label: 'Reel' },
  { key: 'line', icon: '🧵', label: 'Line' },
  { key: 'hook', icon: '🪝', label: 'Hook' },
  { key: 'weight', icon: '⚖️', label: 'Weight' },
  { key: 'lure', icon: '🪱', label: 'Lure' },
];

function label(s: string): string {
  return s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/* ─── Product Card ─── */
function ProductCard({ product }: { product: AffiliateProduct }) {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-sand-200 dark:border-water-700 bg-white dark:bg-water-800 p-4">
      <div>
        <p className="text-xs text-copper-500 font-medium">{product.brand}</p>
        <p className="font-medium text-sm mt-1">{product.name}</p>
        {product.price && <p className="text-sm text-muted-foreground mt-1">{product.price}</p>}
      </div>
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-md bg-copper-500 px-3 py-2 text-sm font-medium text-white hover:bg-copper-600 transition-colors"
      >
        Check Price <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

/* ─── Trending Product Card ─── */
function TrendingProductCard({ product }: { product: AffiliateProduct }) {
  return (
    <div className="relative rounded-xl border-2 border-copper-300 dark:border-copper-700 bg-white dark:bg-water-800 p-5 hover:shadow-lg transition-shadow">
      <div className="absolute -top-2.5 left-4">
        {product.isNewBrand && (
          <span className="inline-flex items-center gap-1 rounded-full bg-copper-500 text-white text-xs font-bold px-3 py-1">
            NEW BRAND
          </span>
        )}
        {!product.isNewBrand && product.isTrending && (
          <span className="inline-flex items-center gap-1 rounded-full bg-forest-500 text-white text-xs font-bold px-3 py-1">
            TRENDING
          </span>
        )}
      </div>
      <div className="mt-2">
        <p className="text-xs text-copper-500 font-semibold uppercase tracking-wider">{product.brand}</p>
        <p className="font-semibold text-sm mt-1">{product.name}</p>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
        {product.price && <p className="text-sm font-medium mt-2">{product.price}</p>}
      </div>
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-md bg-copper-500 px-4 py-2 text-sm font-medium text-white hover:bg-copper-600 transition-colors w-full"
      >
        Check It Out
      </a>
    </div>
  );
}

/* ─── Main Component ─── */
export default function RigBuilderClient({ initialSpecies }: { initialSpecies?: string }) {
  // Phase: 'select' (species + reel type) or 'rig' (showing full rig)
  const [phase, setPhase] = useState<'select' | 'rig'>(initialSpecies ? 'rig' : 'select');
  const [species, setSpecies] = useState(initialSpecies || '');
  const [reelType, setReelType] = useState<'spinning' | 'baitcasting'>('spinning');
  const [budgetTier, setBudgetTier] = useState<BudgetTier>('sweet-spot');
  const [openSlot, setOpenSlot] = useState<RigSlot | null>(null);
  const [overrides, setOverrides] = useState<Partial<Record<RigSlot, number>>>({});
  const [copied, setCopied] = useState(false);
  const [fromGuide, setFromGuide] = useState(false);

  /* Read URL params on mount */
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (params.get('from') === 'guide') setFromGuide(true);
    const urlSpecies = initialSpecies || params.get('species') || '';
    if (urlSpecies) {
      setSpecies(urlSpecies);
      const urlReel = params.get('reelType') as 'spinning' | 'baitcasting' | null;
      if (urlReel) setReelType(urlReel);
      setPhase('rig');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Sync URL */
  const syncUrl = useCallback(() => {
    if (typeof window === 'undefined' || phase === 'select') return;
    const p = new URLSearchParams();
    if (species) p.set('species', species);
    p.set('reelType', reelType);
    if (fromGuide) p.set('from', 'guide');
    window.history.replaceState({}, '', `${window.location.pathname}?${p.toString()}`);
  }, [species, reelType, phase, fromGuide]);

  useEffect(() => { syncUrl(); }, [syncUrl]);

  /* Auto-select alternatives when budget tier changes */
  useEffect(() => {
    if (budgetTier === 'custom') return;
    if (budgetTier === 'sweet-spot') {
      setOverrides({});
      return;
    }

    const newOverrides: Partial<Record<RigSlot, number>> = {};

    for (const slot of RIG_SLOTS) {
      const comp = preset[slot.key];
      if (!comp || comp.alternatives.length === 0) continue;

      if (budgetTier === 'budget') {
        const budgetIdx = comp.alternatives.findIndex(alt =>
          alt.tag && /budget|value/i.test(alt.tag)
        );
        if (budgetIdx !== -1) {
          newOverrides[slot.key] = budgetIdx;
        } else {
          let cheapestIdx = -1;
          let cheapestPrice = parseFloat(comp.price.replace(/[^0-9.]/g, '')) || 999;
          comp.alternatives.forEach((alt, idx) => {
            const altPrice = parseFloat(alt.price.replace(/[^0-9.]/g, '')) || 999;
            if (altPrice < cheapestPrice) {
              cheapestPrice = altPrice;
              cheapestIdx = idx;
            }
          });
          if (cheapestIdx !== -1) newOverrides[slot.key] = cheapestIdx;
        }
      } else if (budgetTier === 'tournament') {
        const premIdx = comp.alternatives.findIndex(alt =>
          alt.tag && /premium|upgrade/i.test(alt.tag)
        );
        if (premIdx !== -1) {
          newOverrides[slot.key] = premIdx;
        } else {
          let expIdx = -1;
          let expPrice = 0;
          comp.alternatives.forEach((alt, idx) => {
            const altPrice = parseFloat(alt.price.replace(/[^0-9.]/g, '')) || 0;
            if (altPrice > expPrice) {
              expPrice = altPrice;
              expIdx = idx;
            }
          });
          if (expIdx !== -1) newOverrides[slot.key] = expIdx;
        }
      }
    }

    setOverrides(newOverrides);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budgetTier, species, reelType]);

  const speciesName = useMemo(() => {
    const sp = allSpecies.find(s => s.slug === species);
    return sp?.name || label(species);
  }, [species]);

  /* Get the right preset */
  const presetEntry = rigPresets[species];
  const baitcastingNote = presetEntry?.baitcastingNote;
  const rawPreset = presetEntry?.[reelType] ?? null;
  const preset: RigPreset = rawPreset || buildFallbackPreset(reelType, species);

  /* Calculate current rig (with overrides) */
  function getComponent(slot: RigSlot): RigComponent | null {
    const comp = preset[slot];
    if (!comp) return null;
    const overrideIdx = overrides[slot];
    if (overrideIdx !== undefined && comp.alternatives[overrideIdx]) {
      const alt = comp.alternatives[overrideIdx];
      return { ...alt, alternatives: comp.alternatives };
    }
    return comp;
  }

  const currentRig = useMemo(() => {
    const rig: Partial<Record<RigSlot, RigComponent | null>> = {};
    for (const s of RIG_SLOTS) {
      rig[s.key] = getComponent(s.key);
    }
    return rig;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [species, reelType, overrides, preset]);

  /* Estimated total */
  const estimatedTotal = useMemo(() => {
    let total = 0;
    for (const slot of RIG_SLOTS) {
      const comp = currentRig[slot.key];
      if (comp) {
        const price = comp.price.replace(/[^0-9.]/g, '');
        const num = parseFloat(price);
        if (!isNaN(num)) total += num;
      }
    }
    return total;
  }, [currentRig]);

  /* Product matching */
  const summaryProducts = useMemo(
    () => getMatchingProducts([reelType, species, 'rod', 'reel', 'line'], 6),
    [reelType, species]
  );

  /* Sorted species */
  const sortedSpecies = useMemo(() => {
    const popular = POPULAR_SLUGS.map(slug => allSpecies.find(s => s.slug === slug)).filter(Boolean) as typeof allSpecies;
    const rest = allSpecies.filter(s => !POPULAR_SLUGS.includes(s.slug));
    return [...popular, ...rest];
  }, []);

  function selectSpeciesAndGo(slug: string) {
    setSpecies(slug);
    setOverrides({});
    // Auto-pick reel type from preset
    const entry = rigPresets[slug];
    if (entry?.baitcasting && !entry.baitcastingNote) {
      setReelType('baitcasting');
    } else {
      setReelType('spinning');
    }
    setPhase('rig');
  }

  function selectReelType(type: 'spinning' | 'baitcasting') {
    setReelType(type);
    setOverrides({});
  }

  function resetAll() {
    setPhase('select');
    setSpecies('');
    setReelType('spinning');
    setOverrides({});
    setOpenSlot(null);
    setCopied(false);
    setFromGuide(false);
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', window.location.pathname);
    }
  }

  async function shareRig() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }

  function chooseAlternative(slot: RigSlot, altIndex: number) {
    setOverrides(prev => ({ ...prev, [slot]: altIndex }));
    setOpenSlot(null);
  }

  function resetSlot(slot: RigSlot) {
    setOverrides(prev => {
      const next = { ...prev };
      delete next[slot];
      return next;
    });
    setOpenSlot(null);
  }

  /* ─── Render ─── */
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-water-800 via-water-700 to-copper-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <Breadcrumbs items={[
            { label: 'Home', href: 'https://hookedguide.com' },
            { label: 'Rig Builder' },
          ]} />
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mt-2">Rig Builder</h1>
          <p className="text-white/80 mt-2 max-w-xl">
            {phase === 'select'
              ? 'Two taps. Full rig. Real products.'
              : `Your recommended ${speciesName} setup`}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* From-guide badge */}
        {fromGuide && species && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-forest-50 dark:bg-forest-900 text-forest-600 dark:text-forest-300 px-4 py-1.5 text-sm font-medium border border-forest-200 dark:border-forest-800">
            <Crosshair className="w-4 h-4" />
            The Guide recommended: {speciesName}
          </div>
        )}

        {/* ═══ PHASE 1: Species + Reel Type Selection ═══ */}
        {phase === 'select' && (
          <div className="space-y-8">
            {/* Step 1: Species */}
            <div>
              <h2 className="font-heading text-xl md:text-2xl font-bold mb-2">What are you fishing for?</h2>
              <p className="text-muted-foreground text-sm mb-4">Pick a species and we&apos;ll build your complete rig.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {sortedSpecies.map(sp => (
                  <button
                    key={sp.slug}
                    onClick={() => selectSpeciesAndGo(sp.slug)}
                    className={`text-left rounded-lg border-2 p-3 transition-all hover:shadow-md ${
                      species === sp.slug
                        ? 'border-copper-500 bg-copper-50 dark:bg-copper-900/30'
                        : 'border-sand-200 dark:border-water-700 hover:border-copper-300'
                    }`}
                  >
                    <Fish className="w-5 h-5 text-copper-500 mb-1" />
                    <span className="block text-sm font-medium leading-tight">{sp.name}</span>
                    <span className="block text-xs text-muted-foreground capitalize">{sp.type}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══ PHASE 2: Full Rig Display ═══ */}
        {phase === 'rig' && (
          <div className="space-y-6">
            {/* Reel type toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex gap-3">
                {(['spinning', 'baitcasting'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => selectReelType(t)}
                    className={`rounded-lg border-2 px-5 py-3 text-sm font-medium transition-all ${
                      reelType === t
                        ? 'border-copper-500 bg-copper-50 dark:bg-copper-900/30 text-copper-700 dark:text-copper-300'
                        : 'border-sand-200 dark:border-water-700 hover:border-copper-300'
                    }`}
                  >
                    {label(t)}
                  </button>
                ))}
              </div>
              <button
                onClick={() => { setPhase('select'); setSpecies(''); setOverrides({}); }}
                className="text-sm text-muted-foreground hover:text-copper-500 transition-colors"
              >
                Change species
              </button>
            </div>

            {/* Baitcasting note for species that don't support it */}
            {reelType === 'baitcasting' && baitcastingNote && !rawPreset && (
              <div className="rounded-lg border border-amber-300 bg-amber-50 dark:bg-amber-900/20 p-4 text-sm text-amber-800 dark:text-amber-300">
                {baitcastingNote}
              </div>
            )}

            {/* Budget tier filter */}
            <div className="flex flex-wrap gap-2">
              {BUDGET_TIERS.map(tier => (
                <button
                  key={tier.value}
                  onClick={() => setBudgetTier(tier.value)}
                  className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    budgetTier === tier.value
                      ? 'bg-copper-500 text-white'
                      : 'bg-sand-100 dark:bg-water-700 text-muted-foreground hover:bg-sand-200 dark:hover:bg-water-600'
                  }`}
                >
                  {tier.label} <span className="opacity-70">({tier.desc})</span>
                </button>
              ))}
            </div>

            {/* The Rig Card */}
            <div className="rounded-xl border-2 border-copper-500 bg-white dark:bg-water-800 shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-water-800 to-water-700 px-6 py-5">
                <p className="text-white/70 text-sm font-medium">Your Recommended</p>
                <h2 className="font-heading text-2xl font-bold text-white">
                  {speciesName} Rig
                </h2>
                <p className="text-white/60 text-sm mt-1">{label(reelType)} Setup</p>
              </div>

              <div className="divide-y divide-sand-200 dark:divide-water-700">
                {RIG_SLOTS.map(slot => {
                  const comp = currentRig[slot.key];
                  if (!comp) return null;
                  const isOverridden = overrides[slot.key] !== undefined;
                  const isOpen = openSlot === slot.key;
                  const allAlternatives = preset[slot.key]?.alternatives || [];

                  return (
                    <div key={slot.key} className="relative">
                      <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          <span className="text-lg mt-0.5">{slot.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-bold text-copper-500 uppercase tracking-wider">{slot.label}</p>
                            <p className="font-semibold text-sm mt-0.5 truncate">{comp.label}</p>
                            <p className="text-xs text-muted-foreground">{comp.detail}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <span className="text-sm font-medium text-water-700 dark:text-sand-200">{comp.price}</span>
                          {allAlternatives.length > 0 && (
                            <button
                              onClick={() => setOpenSlot(isOpen ? null : slot.key)}
                              className={`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-xs font-medium transition-all ${
                                isOpen
                                  ? 'border-copper-500 bg-copper-50 dark:bg-copper-900/30 text-copper-600'
                                  : 'border-sand-200 dark:border-water-700 text-muted-foreground hover:border-copper-300'
                              }`}
                            >
                              Change <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Alternatives dropdown */}
                      {isOpen && allAlternatives.length > 0 && (
                        <div className="bg-sand-50 dark:bg-water-900 border-t border-sand-200 dark:border-water-700 px-6 py-3 space-y-1">
                          {/* Current/default option */}
                          <button
                            onClick={() => resetSlot(slot.key)}
                            className={`w-full text-left rounded-lg p-3 transition-all flex items-center justify-between ${
                              !isOverridden
                                ? 'bg-copper-50 dark:bg-copper-900/30 border border-copper-300 dark:border-copper-700'
                                : 'hover:bg-sand-100 dark:hover:bg-water-800 border border-transparent'
                            }`}
                          >
                            <div>
                              <span className="text-sm font-medium">{preset[slot.key]!.label}</span>
                              <span className="text-xs text-muted-foreground ml-2">{preset[slot.key]!.detail}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              {!isOverridden && <span className="text-xs bg-copper-500 text-white rounded px-1.5 py-0.5">RECOMMENDED</span>}
                              <span className="text-xs font-medium">{preset[slot.key]!.price}</span>
                            </div>
                          </button>

                          {allAlternatives.map((alt, idx) => (
                            <button
                              key={idx}
                              onClick={() => chooseAlternative(slot.key, idx)}
                              className={`w-full text-left rounded-lg p-3 transition-all flex items-center justify-between ${
                                isOverridden && overrides[slot.key] === idx
                                  ? 'bg-copper-50 dark:bg-copper-900/30 border border-copper-300 dark:border-copper-700'
                                  : 'hover:bg-sand-100 dark:hover:bg-water-800 border border-transparent'
                              }`}
                            >
                              <div>
                                <span className="text-sm font-medium">{alt.label}</span>
                                <span className="text-xs text-muted-foreground ml-2">{alt.detail}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                {alt.tag && (
                                  <span className="text-xs bg-water-100 dark:bg-water-700 text-water-700 dark:text-sand-200 rounded px-1.5 py-0.5">
                                    {alt.tag}
                                  </span>
                                )}
                                <span className="text-xs font-medium">{alt.price}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Total + Actions */}
              <div className="border-t border-sand-200 dark:border-water-700 px-6 py-4 bg-sand-50 dark:bg-water-900">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">Estimated Total</span>
                  <div className="text-right">
                    <span className="font-heading text-xl font-bold text-water-900 dark:text-sand-100">
                      ~${Math.round(estimatedTotal)}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      {estimatedTotal < 200 ? 'Budget Build Range' :
                       estimatedTotal < 500 ? 'Sweet Spot Range' :
                       'Tournament Grade Range'}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={shareRig}
                    className="inline-flex items-center gap-2 rounded-lg bg-water-600 text-white px-5 py-2.5 text-sm font-medium hover:bg-water-700 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    {copied ? 'Copied!' : 'Share'}
                  </button>
                  <button
                    onClick={resetAll}
                    className="inline-flex items-center gap-2 rounded-lg border border-sand-200 dark:border-water-700 px-5 py-2.5 text-sm font-medium hover:bg-sand-100 dark:hover:bg-water-800 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" /> Start Over
                  </button>
                  <Link
                    href="/guide"
                    className="inline-flex items-center gap-2 rounded-lg bg-copper-500 text-white px-5 py-2.5 text-sm font-medium hover:bg-copper-600 transition-colors"
                  >
                    Ask the Guide <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Matching Gear */}
            {summaryProducts.length > 0 && (
              <div>
                <h3 className="font-heading text-xl font-bold mb-4">Matching Gear</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {summaryProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              </div>
            )}

            {/* New & Trending Gear */}
            {affiliateProducts.filter(p => (p.isNewBrand || p.isTrending) && p.affiliateUrl !== '').length > 0 && (
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🔥</span>
                  <h3 className="font-heading text-xl font-bold">New & Trending Gear</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Rising brands worth checking out</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {affiliateProducts
                    .filter(p => (p.isNewBrand || p.isTrending) && p.affiliateUrl !== '')
                    .slice(0, 6)
                    .map(p => <TrendingProductCard key={p.id} product={p} />)
                  }
                </div>
              </div>
            )}
          </div>
        )}

        {/* ─── FAQ ─── */}
        <section className="mt-16 border-t border-sand-200 dark:border-water-700 pt-10">
          <h2 className="font-heading text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {[
              {
                q: 'How does this work?',
                a: 'Pick your target species and we instantly recommend a complete rig with specific products at every position — rod, reel, line, hook, weight, and lure. Each component has a [Change] button to swap in alternatives. Two taps to a full setup.',
              },
              {
                q: 'How do I choose the right rod power?',
                a: 'Rod power describes the amount of force needed to bend the rod. Ultra-light and light powers are best for small fish like panfish and trout. Medium works for bass and walleye. Medium-heavy and heavy powers handle big baits and heavy cover for large bass, catfish, and saltwater species. Match power to the weight of your lure and the size of your target species.',
              },
              {
                q: 'Spinning or baitcasting — which is better?',
                a: 'Neither is universally better. Spinning reels are easier to learn, handle light line and finesse baits well, and are ideal for beginners. Baitcasting reels offer more casting accuracy and power for heavier lures and line, making them the choice for experienced anglers targeting bass in heavy cover. Many anglers carry both on the water.',
              },
              {
                q: 'What line type should I use?',
                a: 'Monofilament is affordable, stretchy, and forgiving — great for beginners and topwater. Fluorocarbon is nearly invisible underwater and sinks, making it ideal for clear water and bottom presentations. Braided line has zero stretch and high sensitivity for heavy cover and deep water. Many anglers use braided mainline with a fluorocarbon leader for the best of both worlds.',
              },
              {
                q: 'Do I need a leader?',
                a: 'A fluorocarbon leader is recommended when fishing braided line in clear water, since braid is highly visible. A wire leader is essential when targeting toothy species like pike and musky to prevent bite-offs. For monofilament or fluorocarbon mainline in normal conditions, a leader is usually unnecessary.',
              },
            ].map((faq, i) => (
              <details key={i} className="group rounded-lg border border-sand-200 dark:border-water-700 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-medium hover:bg-sand-50 dark:hover:bg-water-800 transition-colors">
                  {faq.q}
                  <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90 shrink-0 ml-2" />
                </summary>
                <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'HOOKED Rig Builder',
            url: 'https://hookedguide.com/rig-builder',
            description: 'Pick your species, get a complete fishing rig instantly. Swap any component to customize. Real products, real recommendations.',
            applicationCategory: 'SportsApplication',
            operatingSystem: 'All',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />
    </main>
  );
}
