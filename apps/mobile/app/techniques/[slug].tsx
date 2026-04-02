import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { allTechniques } from '../../../../data/techniques';

export default function TechniqueDetail() {
  const { theme } = useTheme();
  const router = useRouter();
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const technique = allTechniques.find((t) => t.slug === slug);

  if (!technique) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text, padding: 20 }}>Technique not found.</Text>
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

        <Text style={[styles.title, { color: theme.text }]}>{technique.name}</Text>
        <Text style={[styles.desc, { color: theme.textSecondary }]}>{technique.description}</Text>

        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.textMuted }]}>STEPS</Text>
          {technique.steps.map((s) => (
            <View key={s.step} style={styles.stepRow}>
              <View style={[styles.stepNum, { backgroundColor: Colors.copper[500] }]}>
                <Text style={styles.stepNumText}>{s.step}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.stepTitle, { color: theme.text }]}>{s.title}</Text>
                <Text style={[styles.stepDesc, { color: theme.textSecondary }]}>{s.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.textMuted }]}>REQUIRED GEAR</Text>
          {technique.requiredGear.map((g, i) => (
            <View key={i} style={{ marginBottom: 6 }}>
              <Text style={[styles.gearName, { color: theme.text }]}>{g.item}</Text>
              <Text style={[styles.gearDesc, { color: theme.textSecondary }]}>{g.description}</Text>
            </View>
          ))}
        </View>

        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.textMuted }]}>PRO TIPS</Text>
          {technique.proTips.map((tip, i) => (
            <Text key={i} style={[styles.tip, { color: theme.text }]}>{'\uD83D\uDCA1'} {tip}</Text>
          ))}
        </View>

        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.textMuted }]}>COMMON MISTAKES</Text>
          {technique.commonMistakes.map((m, i) => (
            <Text key={i} style={[styles.tip, { color: theme.text }]}>{'\u26A0\uFE0F'} {m}</Text>
          ))}
        </View>

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
  desc: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, lineHeight: 22, marginTop: 4, marginBottom: 16 },
  card: { borderRadius: 12, padding: 14, marginBottom: 8 },
  cardTitle: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 12, letterSpacing: 1.5, marginBottom: 10 },
  stepRow: { flexDirection: 'row', gap: 10, marginBottom: 12 },
  stepNum: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  stepNumText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 14 },
  stepTitle: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 16 },
  stepDesc: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, lineHeight: 20, marginTop: 2 },
  gearName: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 15 },
  gearDesc: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13 },
  tip: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, lineHeight: 22, marginBottom: 6 },
});
