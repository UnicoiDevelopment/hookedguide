import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { allSpecies } from '../../../../data/species';

export default function SpeciesDetail() {
  const { theme } = useTheme();
  const router = useRouter();
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const species = allSpecies.find((s) => s.slug === slug);

  if (!species) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text, padding: 20 }}>Species not found.</Text>
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

        <Text style={[styles.title, { color: theme.text }]}>{species.name}</Text>
        <Text style={[styles.sci, { color: theme.textSecondary }]}>{species.scientificName}</Text>

        {/* Quick Stats */}
        <View style={[styles.statsRow, { backgroundColor: theme.card }]}>
          <Stat label="Difficulty" value={`${species.difficultyRating}/5`} theme={theme} />
          <Stat label="Fight" value={`${species.fightRating}/5`} theme={theme} />
          <Stat label="Taste" value={`${species.tasteRating}/5`} theme={theme} />
          <Stat label="Temp" value={`${species.preferredTemp.min}-${species.preferredTemp.max}°F`} theme={theme} />
        </View>

        <Section title="DESCRIPTION" content={species.description} theme={theme} />
        <Section title="IDENTIFICATION" content={species.identification} theme={theme} />
        <Section title="HABITAT" content={species.habitat} theme={theme} />
        <Section title="BEHAVIOR" content={species.behavior} theme={theme} />

        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.textMuted }]}>BEST TECHNIQUES</Text>
          {species.bestTechniques.map((t) => (
            <Text key={t} style={[styles.listItem, { color: theme.text }]}>
              \u2022 {t.replace(/-/g, ' ')}
            </Text>
          ))}
        </View>

        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.textMuted }]}>SEASONAL PATTERNS</Text>
          {(['spring', 'summer', 'fall', 'winter'] as const).map((s) => (
            <View key={s} style={{ marginBottom: 8 }}>
              <Text style={[styles.seasonLabel, { color: Colors.copper[500] }]}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </Text>
              <Text style={[styles.text, { color: theme.text }]}>{species.seasonalPatterns[s]}</Text>
            </View>
          ))}
        </View>

        {/* CTA */}
        <TouchableOpacity
          style={[styles.cta, { backgroundColor: Colors.copper[500] }]}
          onPress={() => router.push({ pathname: '/(tabs)/guide', params: { species: species.slug } })}
        >
          <Text style={styles.ctaText}>Ask the Guide for {species.name} →</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function Stat({ label, value, theme }: { label: string; value: string; theme: any }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={[{ fontFamily: 'BarlowCondensed_700Bold', fontSize: 16 }, { color: Colors.copper[500] }]}>{value}</Text>
      <Text style={[{ fontFamily: 'BarlowCondensed_400Regular', fontSize: 11 }, { color: theme.textMuted }]}>{label}</Text>
    </View>
  );
}

function Section({ title, content, theme }: { title: string; content: string; theme: any }) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.cardTitle, { color: theme.textMuted }]}>{title}</Text>
      <Text style={[styles.text, { color: theme.text }]}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16 },
  backRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 8 },
  backText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  title: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 30 },
  sci: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 16, fontStyle: 'italic', marginBottom: 12 },
  statsRow: { borderRadius: 12, padding: 14, flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  card: { borderRadius: 12, padding: 14, marginBottom: 8 },
  cardTitle: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 12, letterSpacing: 1.5, marginBottom: 6 },
  text: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, lineHeight: 22 },
  listItem: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, lineHeight: 24, textTransform: 'capitalize' },
  seasonLabel: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 14, marginBottom: 2 },
  cta: { borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 8 },
  ctaText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 17 },
});
