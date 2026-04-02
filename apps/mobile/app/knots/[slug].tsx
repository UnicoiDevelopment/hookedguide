import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { allKnots } from '../../../../data/knots';

export default function KnotDetail() {
  const { theme } = useTheme();
  const router = useRouter();
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const knot = allKnots.find((k) => k.slug === slug);

  if (!knot) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text, padding: 20 }}>Knot not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
          <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
        </TouchableOpacity>

        <Text style={[styles.title, { color: theme.text }]}>{knot.name}</Text>
        <Text style={[styles.desc, { color: theme.textSecondary }]}>{knot.description}</Text>

        <View style={[styles.statsRow, { backgroundColor: theme.card }]}>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.statVal, { color: Colors.copper[500] }]}>{knot.strengthRating}%</Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Strength</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.statVal, { color: Colors.copper[500] }]}>{knot.difficulty}/5</Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Difficulty</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={[styles.statVal, { color: Colors.copper[500] }]}>{knot.lineTypes.length}</Text>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Line Types</Text>
          </View>
        </View>

        {/* Large step-by-step instructions for tying with one hand */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.textMuted }]}>TYING INSTRUCTIONS</Text>
          {knot.steps.map((s) => (
            <View key={s.step} style={styles.stepRow}>
              <View style={[styles.stepNum, { backgroundColor: Colors.copper[500] }]}>
                <Text style={styles.stepNumText}>{s.step}</Text>
              </View>
              <Text style={[styles.stepInstruction, { color: theme.text }]}>
                {s.instruction}
              </Text>
            </View>
          ))}
        </View>

        {knot.tips.length > 0 && (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <Text style={[styles.cardTitle, { color: theme.textMuted }]}>TIPS</Text>
            {knot.tips.map((tip, i) => (
              <Text key={i} style={[styles.tipText, { color: theme.text }]}>
                {'\uD83D\uDCA1'} {tip}
              </Text>
            ))}
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16 },
  backRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 8 },
  backText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  title: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 28 },
  desc: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, lineHeight: 22, marginTop: 4, marginBottom: 12 },
  statsRow: { borderRadius: 12, padding: 14, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  statVal: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
  statLabel: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 12, marginTop: 2 },
  card: { borderRadius: 12, padding: 16, marginBottom: 8 },
  cardTitle: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 12, letterSpacing: 1.5, marginBottom: 12 },
  stepRow: { flexDirection: 'row', gap: 12, marginBottom: 16, alignItems: 'flex-start' },
  stepNum: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center', marginTop: 2 },
  stepNumText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 16 },
  stepInstruction: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 18, lineHeight: 26, flex: 1 },
  tipText: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, lineHeight: 22, marginBottom: 8 },
});
