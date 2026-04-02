import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { allSpecies } from '../../../../data/species';

export default function SpeciesIndex() {
  const { theme } = useTheme();
  const router = useRouter();

  const freshwater = allSpecies.filter((s) => s.type === 'freshwater');
  const saltwater = allSpecies.filter((s) => s.type === 'saltwater' || s.type === 'both');

  const renderSection = (title: string, species: typeof allSpecies) => (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: theme.textMuted }]}>{title}</Text>
      {species.map((sp) => (
        <TouchableOpacity
          key={sp.slug}
          style={[styles.row, { backgroundColor: theme.card }]}
          onPress={() => router.push(`/species/${sp.slug}`)}
        >
          <View style={{ flex: 1 }}>
            <Text style={[styles.name, { color: theme.text }]}>{sp.name}</Text>
            <Text style={[styles.sci, { color: theme.textSecondary }]}>{sp.scientificName}</Text>
          </View>
          <Ionicons name="chevron-forward" size={16} color={theme.textMuted} />
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
          <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.text }]}>Species Guides</Text>
        {renderSection('FRESHWATER', freshwater)}
        {renderSection('SALTWATER', saltwater)}
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
  section: { marginBottom: 20 },
  sectionTitle: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 12, letterSpacing: 1.5, marginBottom: 8 },
  row: { borderRadius: 10, padding: 14, marginBottom: 6, flexDirection: 'row', alignItems: 'center' },
  name: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 17 },
  sci: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, fontStyle: 'italic', marginTop: 1 },
});
