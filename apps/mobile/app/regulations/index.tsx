import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { stateMetadata } from '../../../../data/states';

export default function RegulationsIndex() {
  const { theme } = useTheme();
  const router = useRouter();
  const sorted = [...stateMetadata].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
          <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.text }]}>Regulations by State</Text>
        <View style={styles.grid}>
          {sorted.map((state) => (
            <TouchableOpacity
              key={state.slug}
              style={[styles.stateBtn, { backgroundColor: theme.card }]}
              onPress={() => router.push(`/regulations/${state.slug}`)}
            >
              <Text style={[styles.abbr, { color: Colors.copper[500] }]}>{state.abbreviation}</Text>
              <Text style={[styles.stateName, { color: theme.textSecondary }]} numberOfLines={1}>
                {state.name}
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
  scroll: { padding: 16 },
  backRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 8 },
  backText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  title: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 28, marginBottom: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  stateBtn: { borderRadius: 10, padding: 10, width: '22%', flexGrow: 1, alignItems: 'center' },
  abbr: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
  stateName: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 10, marginTop: 2 },
});
