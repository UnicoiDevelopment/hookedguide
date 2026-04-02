import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { allReviews } from '../../../../data/gear/reviews';

function renderStars(rating: number): string {
  const full = Math.round(rating);
  return '\u2605'.repeat(full) + '\u2606'.repeat(5 - full);
}

export default function GearIndex() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
          <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.text }]}>Gear Reviews</Text>
        {allReviews.map((r) => (
          <TouchableOpacity
            key={r.slug}
            style={[styles.row, { backgroundColor: theme.card }]}
            onPress={() => router.push(`/gear/${r.slug}`)}
          >
            <View style={{ flex: 1 }}>
              <Text style={[styles.name, { color: theme.text }]}>{r.productName}</Text>
              <Text style={[styles.brand, { color: theme.textSecondary }]}>{r.brand}</Text>
            </View>
            <Text style={[styles.stars, { color: Colors.copper[500] }]}>
              {renderStars(r.rating)}
            </Text>
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
  row: { borderRadius: 10, padding: 14, marginBottom: 6, flexDirection: 'row', alignItems: 'center', gap: 8 },
  name: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 16 },
  brand: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 1 },
  stars: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14 },
});
