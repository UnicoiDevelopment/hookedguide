import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { allKnots } from '../../../../data/knots';

export default function KnotsIndex() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
          <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.text }]}>Fishing Knots</Text>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          Large text, easy to read with one hand while tying
        </Text>
        {allKnots.map((k) => (
          <TouchableOpacity
            key={k.slug}
            style={[styles.row, { backgroundColor: theme.card }]}
            onPress={() => router.push(`/knots/${k.slug}`)}
          >
            <View style={{ flex: 1 }}>
              <Text style={[styles.name, { color: theme.text }]}>{k.name}</Text>
              <Text style={[styles.meta, { color: theme.textSecondary }]}>
                Strength: {k.strengthRating}% · Difficulty: {k.difficulty}/5
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color={theme.textMuted} />
          </TouchableOpacity>
        ))}
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
  subtitle: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, marginBottom: 16, marginTop: 2 },
  row: { borderRadius: 10, padding: 14, marginBottom: 6, flexDirection: 'row', alignItems: 'center' },
  name: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 17 },
  meta: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 2 },
});
