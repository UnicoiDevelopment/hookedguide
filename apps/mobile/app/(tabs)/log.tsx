import { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { getLogEntries, type FishingLogEntry } from '@/lib/storage';

export default function LogScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const [entries, setEntries] = useState<FishingLogEntry[]>([]);

  useFocusEffect(
    useCallback(() => {
      getLogEntries().then(setEntries);
    }, [])
  );

  const totalCatches = entries.length;
  const speciesCounts: Record<string, number> = {};
  entries.forEach((e) => {
    speciesCounts[e.species] = (speciesCounts[e.species] || 0) + 1;
  });
  const topSpecies = Object.entries(speciesCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.headerRow}>
        <Text style={[styles.title, { color: theme.text }]}>Fishing Log</Text>
        <TouchableOpacity
          style={[styles.addBtn, { backgroundColor: Colors.copper[500] }]}
          onPress={() => router.push('/log/new')}
        >
          <Ionicons name="add" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {totalCatches > 0 && (
        <View style={[styles.statsBar, { backgroundColor: theme.card }]}>
          <View style={styles.stat}>
            <Text style={[styles.statNum, { color: Colors.copper[500] }]}>{totalCatches}</Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Catches</Text>
          </View>
          <View style={styles.stat}>
            <Text style={[styles.statNum, { color: Colors.copper[500] }]}>
              {Object.keys(speciesCounts).length}
            </Text>
            <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Species</Text>
          </View>
          {topSpecies[0] && (
            <View style={styles.stat}>
              <Text
                style={[styles.statNum, { color: Colors.copper[500] }]}
                numberOfLines={1}
              >
                {topSpecies[0][0]}
              </Text>
              <Text style={[styles.statLabel, { color: theme.textSecondary }]}>Top Species</Text>
            </View>
          )}
        </View>
      )}

      <ScrollView contentContainerStyle={styles.list}>
        {entries.length === 0 ? (
          <View style={[styles.emptyCard, { backgroundColor: theme.card }]}>
            <Ionicons name="fish-outline" size={48} color={theme.textMuted} />
            <Text style={[styles.emptyTitle, { color: theme.text }]}>No catches yet</Text>
            <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
              Hit the water and log your first catch!
            </Text>
            <TouchableOpacity
              style={[styles.emptyCta, { backgroundColor: Colors.copper[500] }]}
              onPress={() => router.push('/log/new')}
            >
              <Text style={styles.emptyCtaText}>Log a Catch</Text>
            </TouchableOpacity>
          </View>
        ) : (
          entries.map((entry) => (
            <TouchableOpacity
              key={entry.id}
              style={[styles.entryCard, { backgroundColor: theme.card }]}
              onPress={() => router.push(`/log/${entry.id}`)}
            >
              <View style={{ flex: 1 }}>
                <Text style={[styles.entrySpecies, { color: theme.text }]}>
                  {entry.species.replace(/-/g, ' ')}
                </Text>
                <Text style={[styles.entryMeta, { color: theme.textSecondary }]}>
                  {new Date(entry.timestamp).toLocaleDateString()} \u00B7{' '}
                  {entry.location.name || entry.location.state}
                </Text>
                {entry.notes && (
                  <Text
                    style={[styles.entryNotes, { color: theme.textMuted }]}
                    numberOfLines={1}
                  >
                    {entry.notes}
                  </Text>
                )}
              </View>
              {entry.weight && (
                <Text style={[styles.entryWeight, { color: Colors.copper[500] }]}>
                  {entry.weight.lbs}lb {entry.weight.oz}oz
                </Text>
              )}
              <Ionicons name="chevron-forward" size={16} color={theme.textMuted} />
            </TouchableOpacity>
          ))
        )}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  title: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 28 },
  addBtn: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  statsBar: {
    flexDirection: 'row',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    justifyContent: 'space-around',
  },
  stat: { alignItems: 'center' },
  statNum: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 18, textTransform: 'capitalize' },
  statLabel: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 12, marginTop: 2 },
  list: { paddingHorizontal: 16 },
  emptyCard: { borderRadius: 16, padding: 32, alignItems: 'center', marginTop: 40 },
  emptyTitle: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 22, marginTop: 12 },
  emptyText: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, textAlign: 'center', marginTop: 4 },
  emptyCta: { borderRadius: 10, paddingHorizontal: 24, paddingVertical: 12, marginTop: 16 },
  emptyCtaText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 16 },
  entryCard: {
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  entrySpecies: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 17, textTransform: 'capitalize' },
  entryMeta: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 2 },
  entryNotes: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 12, marginTop: 2 },
  entryWeight: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 16 },
});
