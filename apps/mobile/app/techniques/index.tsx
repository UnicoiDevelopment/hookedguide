import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { allTechniques } from '../../../../data/techniques';

export default function TechniquesIndex() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
          <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.text }]}>Techniques</Text>
        {allTechniques.map((t) => (
          <TouchableOpacity
            key={t.slug}
            style={[styles.row, { backgroundColor: theme.card }]}
            onPress={() => router.push(`/techniques/${t.slug}`)}
          >
            <View style={{ flex: 1 }}>
              <Text style={[styles.name, { color: theme.text }]}>{t.name}</Text>
              <Text style={[styles.desc, { color: theme.textSecondary }]} numberOfLines={1}>
                {t.description}
              </Text>
            </View>
            <View style={[styles.diffBadge, { backgroundColor: theme.surfaceAlt }]}>
              <Text style={[styles.diffText, { color: Colors.copper[500] }]}>{t.difficulty}/5</Text>
            </View>
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
  title: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 28, marginBottom: 16 },
  row: { borderRadius: 10, padding: 14, marginBottom: 6, flexDirection: 'row', alignItems: 'center', gap: 10 },
  name: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 17 },
  desc: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 2 },
  diffBadge: { borderRadius: 8, paddingHorizontal: 8, paddingVertical: 4 },
  diffText: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 13 },
});
