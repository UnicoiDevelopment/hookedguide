import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { getLogEntries, deleteLogEntry, type FishingLogEntry } from '@/lib/storage';

export default function LogDetail() {
  const { theme } = useTheme();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [entry, setEntry] = useState<FishingLogEntry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLogEntries().then((entries) => {
      setEntry(entries.find((e) => e.id === id) || null);
      setLoading(false);
    });
  }, [id]);

  const handleDelete = () => {
    Alert.alert('Delete Entry', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await deleteLogEntry(id!);
          router.back();
        },
      },
    ]);
  };

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={Colors.copper[500]} style={{ marginTop: 40 }} />
      </SafeAreaView>
    );
  }

  if (!entry) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
          <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.text, { color: theme.text, padding: 20 }]}>Entry not found.</Text>
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

        {entry.photo && (
          <Image source={{ uri: entry.photo }} style={styles.photo} contentFit="cover" />
        )}

        <Text style={[styles.species, { color: theme.text }]}>
          {entry.species.replace(/-/g, ' ')}
        </Text>
        <Text style={[styles.meta, { color: theme.textSecondary }]}>
          {new Date(entry.timestamp).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </Text>
        <Text style={[styles.meta, { color: theme.textSecondary }]}>
          {entry.location.name}
        </Text>

        {entry.weight && (
          <View style={[styles.statCard, { backgroundColor: theme.card }]}>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Weight</Text>
            <Text style={[styles.statValue, { color: Colors.copper[500] }]}>
              {entry.weight.lbs}lb {entry.weight.oz}oz
            </Text>
          </View>
        )}
        {entry.length && (
          <View style={[styles.statCard, { backgroundColor: theme.card }]}>
            <Text style={[styles.statLabel, { color: theme.textMuted }]}>Length</Text>
            <Text style={[styles.statValue, { color: Colors.copper[500] }]}>{entry.length}&quot;</Text>
          </View>
        )}

        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.textMuted }]}>CONDITIONS</Text>
          <Text style={[styles.text, { color: theme.text }]}>
            {entry.conditions.airTemp}\u00B0F \u00B7 {entry.conditions.sky} \u00B7{' '}
            {entry.conditions.wind} wind {entry.conditions.windDirection}
          </Text>
          <Text style={[styles.text, { color: theme.text }]}>
            Pressure: {entry.conditions.pressure}&quot; {entry.conditions.pressureTrend} \u00B7{' '}
            Moon: {entry.conditions.moonPhase}
          </Text>
        </View>

        {(entry.setup.technique || entry.setup.lure) && (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <Text style={[styles.cardTitle, { color: theme.textMuted }]}>SETUP</Text>
            {entry.setup.technique && (
              <Text style={[styles.text, { color: theme.text }]}>
                Technique: {entry.setup.technique}
              </Text>
            )}
            {entry.setup.lure && (
              <Text style={[styles.text, { color: theme.text }]}>
                Lure: {entry.setup.lure} {entry.setup.color ? `(${entry.setup.color})` : ''}
              </Text>
            )}
          </View>
        )}

        {entry.notes && (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <Text style={[styles.cardTitle, { color: theme.textMuted }]}>NOTES</Text>
            <Text style={[styles.text, { color: theme.text }]}>{entry.notes}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete Entry</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16 },
  backRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 12 },
  backText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  photo: { width: '100%', height: 250, borderRadius: 14, marginBottom: 16 },
  species: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 28, textTransform: 'capitalize' },
  meta: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, marginTop: 2 },
  statCard: {
    borderRadius: 12,
    padding: 14,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statLabel: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  statValue: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
  card: { borderRadius: 12, padding: 14, marginTop: 10 },
  cardTitle: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 12, letterSpacing: 1, marginBottom: 6 },
  text: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, lineHeight: 22 },
  deleteBtn: { marginTop: 24, alignItems: 'center', padding: 12 },
  deleteText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 15, color: '#DC2626' },
});
