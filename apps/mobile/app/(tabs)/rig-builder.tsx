import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { allSpecies } from '../../../../data/species';
import { affiliateProducts } from '../../../../data/affiliate-products';
import { trackRigBuild } from '@/lib/review-prompt';

// Explicit mapping from rig builder labels to affiliate product IDs
const rigProductMap: Record<string, string> = {
  'Ugly Stik GX2': 'ugly-stik-gx2-spinning',
  'Abu Garcia Max X': 'abu-garcia-max-x-combo',
  'Pflueger President': 'pflueger-president-30',
  'Berkley Trilene XL': 'berkley-trilene-xl',
  'Mustad EWG': 'mustad-grip-pin-ewg-3-0',
  'Dobyns Fury 703C': 'dobyns-fury-casting',
  'St. Croix Bass X': 'st-croix-bass-x-casting',
  'Shimano SLX DC': 'shimano-slx-dc',
  'Shimano Vanford': 'shimano-vanford',
  'Seaguar InvizX': 'seaguar-invizx-12',
  'Mustad Grip-Pin': 'mustad-grip-pin-ewg-3-0',
  'G. Loomis E6X': 'g-loomis-e6x',
  'Shimano Expride': 'shimano-expride',
  'Shimano Metanium': 'shimano-metanium',
  'Daiwa Exist': 'daiwa-exist',
  'Seaguar Tatsu': 'seaguar-tatsu',
};

function findAffiliateUrl(label: string): string | undefined {
  // Try explicit map first
  const id = rigProductMap[label];
  if (id) {
    const product = affiliateProducts.find(p => p.id === id);
    if (product) return product.affiliateUrl;
  }
  // Fallback: fuzzy match by name
  const lower = label.toLowerCase();
  const match = affiliateProducts.find(p => p.name.toLowerCase().includes(lower));
  return match?.affiliateUrl;
}

type Step = 'species' | 'reel-type' | 'result';
type ReelType = 'spinning' | 'baitcasting';
type BudgetTier = 'budget' | 'sweet-spot' | 'tournament';

interface RigComponent {
  label: string;
  detail: string;
  price: string;
  affiliateUrl?: string;
}

interface Rig {
  rod: RigComponent;
  reel: RigComponent;
  line: RigComponent;
  hook: RigComponent;
  weight: RigComponent | null;
  lure: RigComponent;
}

// Simplified rig presets — in production these come from the shared data
function getRigPreset(species: string, reelType: ReelType, tier: BudgetTier): Rig {
  const isBaitcast = reelType === 'baitcasting';

  const tiers: Record<BudgetTier, Rig> = {
    'budget': {
      rod: { label: 'Ugly Stik GX2', detail: isBaitcast ? "6'6\" MH Fast Casting" : "7'0\" M Fast Spinning", price: '$40' },
      reel: { label: isBaitcast ? 'Abu Garcia Max X' : 'Pflueger President', detail: isBaitcast ? '7.1:1 Baitcaster' : '6.2:1 Spinning', price: isBaitcast ? '$50' : '$60' },
      line: { label: 'Berkley Trilene XL', detail: isBaitcast ? '14lb Mono' : '10lb Mono', price: '$5' },
      hook: { label: 'Mustad EWG', detail: '3/0 Offset Worm Hook', price: '$4' },
      weight: { label: 'Lead Bullet Weight', detail: '3/16 oz', price: '$3' },
      lure: { label: 'Zoom Trick Worm', detail: '7" Green Pumpkin', price: '$4' },
    },
    'sweet-spot': {
      rod: { label: isBaitcast ? 'Dobyns Fury 703C' : 'St. Croix Bass X', detail: isBaitcast ? "7'0\" MH Fast Casting" : "6'10\" M Fast Spinning", price: isBaitcast ? '$139' : '$99' },
      reel: { label: isBaitcast ? 'Shimano SLX DC' : 'Shimano Vanford', detail: isBaitcast ? '7.2:1 DC Baitcaster' : '6.0:1 Spinning', price: '$199' },
      line: { label: 'Seaguar InvizX', detail: isBaitcast ? '14lb Fluorocarbon' : '10lb Fluorocarbon', price: '$19' },
      hook: { label: 'Mustad Grip-Pin', detail: '3/0 EWG', price: '$5' },
      weight: { label: 'Tungsten Bullet', detail: '3/16 oz', price: '$8' },
      lure: { label: 'Zoom Trick Worm', detail: '7" Green Pumpkin', price: '$4' },
    },
    'tournament': {
      rod: { label: isBaitcast ? 'G. Loomis E6X' : 'Shimano Expride', detail: isBaitcast ? "7'1\" MH Fast Casting" : "7'0\" M Fast Spinning", price: isBaitcast ? '$229' : '$349' },
      reel: { label: isBaitcast ? 'Shimano Metanium' : 'Daiwa Exist', detail: isBaitcast ? '7.1:1 Baitcaster' : '5.7:1 Spinning', price: isBaitcast ? '$399' : '$599' },
      line: { label: 'Seaguar Tatsu', detail: isBaitcast ? '14lb Fluorocarbon' : '10lb Fluorocarbon', price: '$28' },
      hook: { label: 'Mustad Grip-Pin', detail: '3/0 EWG', price: '$5' },
      weight: { label: 'Tungsten Bullet', detail: '3/16 oz', price: '$12' },
      lure: { label: 'Yamamoto Senko', detail: '5" Green Pumpkin', price: '$8' },
    },
  };

  // Attach affiliate URLs to each component
  const rig = tiers[tier];
  for (const key of Object.keys(rig) as (keyof Rig)[]) {
    const comp = rig[key];
    if (comp && !comp.affiliateUrl) {
      comp.affiliateUrl = findAffiliateUrl(comp.label);
    }
  }
  return rig;
}

function calcTotal(rig: Rig): number {
  const parse = (p: string) => parseInt(p.replace('$', '')) || 0;
  return parse(rig.rod.price) + parse(rig.reel.price) + parse(rig.line.price) +
    parse(rig.hook.price) + (rig.weight ? parse(rig.weight.price) : 0) + parse(rig.lure.price);
}

export default function RigBuilderScreen() {
  const { theme } = useTheme();
  const [step, setStep] = useState<Step>('species');
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);
  const [reelType, setReelType] = useState<ReelType>('baitcasting');
  const [tier, setTier] = useState<BudgetTier>('sweet-spot');

  const speciesName = allSpecies.find(s => s.slug === selectedSpecies)?.name || '';
  const rig = selectedSpecies ? getRigPreset(selectedSpecies, reelType, tier) : null;

  const handleSpecies = (slug: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedSpecies(slug);
    // Auto-select spinning for certain species
    const lightSpecies = ['crappie', 'bluegill', 'yellow-perch', 'brook-trout'];
    if (lightSpecies.includes(slug)) {
      setReelType('spinning');
      setStep('result');
      trackRigBuild();
    } else {
      setStep('reel-type');
    }
  };

  const handleReelType = (type: ReelType) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setReelType(type);
    setStep('result');
    trackRigBuild();
  };

  const reset = () => {
    setStep('species');
    setSelectedSpecies(null);
    setTier('sweet-spot');
  };

  if (step === 'result' && rig) {
    const slots: { key: keyof Rig; icon: string; label: string }[] = [
      { key: 'rod', icon: '\uD83C\uDFA3', label: 'ROD' },
      { key: 'reel', icon: '\uD83D\uDD04', label: 'REEL' },
      { key: 'line', icon: '\uD83E\uDDF5', label: 'LINE' },
      { key: 'hook', icon: '\uD83E\uDE9D', label: 'HOOK' },
      { key: 'weight', icon: '\u2696\uFE0F', label: 'WEIGHT' },
      { key: 'lure', icon: '\uD83E\uDEB1', label: 'LURE' },
    ];

    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <TouchableOpacity onPress={reset} style={styles.backRow}>
            <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
            <Text style={[styles.backText, { color: Colors.copper[500] }]}>Start over</Text>
          </TouchableOpacity>

          <Text style={[styles.title, { color: theme.text }]}>
            Your {speciesName} Rig
          </Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            {reelType === 'baitcasting' ? 'Baitcasting' : 'Spinning'} Setup
          </Text>

          {/* Budget tier filter */}
          <View style={styles.tierRow}>
            {(['budget', 'sweet-spot', 'tournament'] as BudgetTier[]).map((t) => (
              <TouchableOpacity
                key={t}
                style={[
                  styles.tierChip,
                  { backgroundColor: tier === t ? Colors.copper[500] : theme.card },
                ]}
                onPress={() => {
                  Haptics.selectionAsync();
                  setTier(t);
                }}
              >
                <Text style={[styles.tierText, { color: tier === t ? '#fff' : theme.text }]}>
                  {t === 'sweet-spot' ? 'Sweet Spot' : t.charAt(0).toUpperCase() + t.slice(1)}
                  {tier === t ? ' \u2713' : ''}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Components */}
          {slots.map(({ key, icon, label }) => {
            const comp = rig[key];
            if (!comp) return null;
            return (
              <TouchableOpacity
                key={key}
                style={[styles.compCard, { backgroundColor: theme.card }]}
                onPress={() => {
                  if (comp.affiliateUrl) {
                    Linking.openURL(comp.affiliateUrl);
                  }
                }}
                activeOpacity={comp.affiliateUrl ? 0.7 : 1}
              >
                <View style={styles.compHeader}>
                  <Text style={styles.compIcon}>{icon}</Text>
                  <Text style={[styles.compLabel, { color: theme.textMuted }]}>{label}</Text>
                </View>
                <Text style={[styles.compName, { color: theme.text }]}>{comp.label}</Text>
                <View style={styles.compDetailRow}>
                  <Text style={[styles.compDetail, { color: theme.textSecondary }]}>{comp.detail}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.compPrice, { color: Colors.copper[500] }]}>{comp.price}</Text>
                    {comp.affiliateUrl && (
                      <Ionicons name="open-outline" size={14} color={Colors.copper[500]} style={{ marginLeft: 6 }} />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}

          {/* Total */}
          <View style={[styles.totalRow, { borderTopColor: theme.border }]}>
            <Text style={[styles.totalLabel, { color: theme.textSecondary }]}>
              Estimated Total
            </Text>
            <Text style={[styles.totalValue, { color: theme.text }]}>~${calcTotal(rig)}</Text>
          </View>

          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (step === 'reel-type') {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.scroll}>
          <TouchableOpacity onPress={() => setStep('species')} style={styles.backRow}>
            <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
            <Text style={[styles.backText, { color: Colors.copper[500] }]}>Change species</Text>
          </TouchableOpacity>

          <Text style={[styles.title, { color: theme.text }]}>Spinning or Baitcasting?</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
            Building a rig for {speciesName}
          </Text>

          <View style={{ gap: 12, marginTop: 24 }}>
            <TouchableOpacity
              style={[styles.reelCard, { backgroundColor: theme.card }]}
              onPress={() => handleReelType('spinning')}
            >
              <Text style={[styles.reelTitle, { color: theme.text }]}>Spinning</Text>
              <Text style={[styles.reelDesc, { color: theme.textSecondary }]}>
                Easier to learn, great for finesse and light lures
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.reelCard, { backgroundColor: theme.card }]}
              onPress={() => handleReelType('baitcasting')}
            >
              <Text style={[styles.reelTitle, { color: theme.text }]}>Baitcasting</Text>
              <Text style={[styles.reelDesc, { color: theme.textSecondary }]}>
                More accuracy and power, preferred for heavier lures
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  // Species selection
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={[styles.title, { color: theme.text }]}>Rig Builder</Text>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          What are you fishing for?
        </Text>

        <View style={styles.speciesGrid}>
          {allSpecies.slice(0, 12).map((sp) => (
            <TouchableOpacity
              key={sp.slug}
              style={[styles.speciesBtn, { backgroundColor: theme.card }]}
              onPress={() => handleSpecies(sp.slug)}
            >
              <Text style={[styles.speciesBtnText, { color: theme.text }]}>
                {sp.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16, flex: 1 },
  backRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 8 },
  backText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  title: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 28 },
  subtitle: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 16, marginBottom: 16, marginTop: 2 },
  speciesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  speciesBtn: { borderRadius: 10, paddingHorizontal: 16, paddingVertical: 14, width: '48%', flexGrow: 1 },
  speciesBtnText: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 15 },
  reelCard: { borderRadius: 14, padding: 20 },
  reelTitle: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 22 },
  reelDesc: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, marginTop: 4 },
  tierRow: { flexDirection: 'row', gap: 8, marginBottom: 16, marginTop: 8 },
  tierChip: { borderRadius: 20, paddingHorizontal: 16, paddingVertical: 8, flex: 1, alignItems: 'center' },
  tierText: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 14 },
  compCard: { borderRadius: 12, padding: 14, marginBottom: 8 },
  compHeader: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 4 },
  compIcon: { fontSize: 16 },
  compLabel: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 11, letterSpacing: 1 },
  compName: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
  compDetailRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 2 },
  compDetail: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14 },
  compPrice: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 16 },
  totalRow: { borderTopWidth: 1, marginTop: 8, paddingTop: 14, flexDirection: 'row', justifyContent: 'space-between' },
  totalLabel: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 16 },
  totalValue: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 22 },
});
