import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { allStates } from '../../../../data/states';

export default function StateRegulations() {
  const { theme } = useTheme();
  const router = useRouter();
  const { state: stateSlug } = useLocalSearchParams<{ state: string }>();
  const state = allStates.find((s) => s.slug === stateSlug);

  if (!state) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text, padding: 20 }}>State not found.</Text>
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

        <Text style={[styles.title, { color: theme.text }]}>{state.name}</Text>
        <Text style={[styles.sub, { color: theme.textSecondary }]}>{state.seasonInfo}</Text>

        <TouchableOpacity
          style={[styles.licenseBtn, { backgroundColor: Colors.copper[500] }]}
          onPress={() => Linking.openURL(state.licenseUrl)}
        >
          <Text style={styles.licenseBtnText}>Get Fishing License →</Text>
        </TouchableOpacity>

        <Text style={[styles.licenseInfo, { color: theme.textSecondary }]}>{state.licenseInfo}</Text>

        {/* Regulations table */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.textMuted }]}>REGULATIONS</Text>
          {state.regulations.map((reg, i) => (
            <View key={i} style={[styles.regRow, i > 0 && { borderTopWidth: 1, borderTopColor: theme.border }]}>
              <Text style={[styles.regSpecies, { color: theme.text }]}>
                {reg.species.replace(/-/g, ' ')}
              </Text>
              <Text style={[styles.regDetail, { color: theme.textSecondary }]}>
                Bag: {reg.bagLimit} · Size: {reg.sizeLimit} · Season: {reg.season}
              </Text>
              {reg.notes && (
                <Text style={[styles.regNotes, { color: theme.textMuted }]}>{reg.notes}</Text>
              )}
            </View>
          ))}
        </View>

        {/* Disclaimer */}
        <View style={[styles.disclaimer, { backgroundColor: '#FEF3C7' }]}>
          <Text style={{ color: '#92400E', fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 }}>
            {'\u26A0\uFE0F'} Always verify regulations with the official {state.name} fish and wildlife
            agency before fishing. Rules change frequently.
          </Text>
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
  sub: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, marginTop: 4, marginBottom: 12 },
  licenseBtn: { borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginBottom: 8 },
  licenseBtnText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 17 },
  licenseInfo: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, lineHeight: 20, marginBottom: 16 },
  card: { borderRadius: 12, padding: 14, marginBottom: 8 },
  cardTitle: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 12, letterSpacing: 1.5, marginBottom: 10 },
  regRow: { paddingVertical: 10 },
  regSpecies: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 16, textTransform: 'capitalize' },
  regDetail: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 2 },
  regNotes: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 12, marginTop: 2, fontStyle: 'italic' },
  disclaimer: { borderRadius: 12, padding: 14, marginTop: 8 },
});
