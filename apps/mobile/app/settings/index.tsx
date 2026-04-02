import { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { getPreferences, savePreferences, type UserPreferences } from '@/lib/storage';

export default function SettingsScreen() {
  const { theme, mode, setMode } = useTheme();
  const router = useRouter();
  const [prefs, setPrefs] = useState<UserPreferences | null>(null);

  useEffect(() => {
    getPreferences().then(setPrefs);
  }, []);

  const toggle = (key: keyof UserPreferences) => {
    if (!prefs) return;
    const updated = { ...prefs, [key]: !prefs[key] };
    setPrefs(updated);
    savePreferences({ [key]: updated[key] });
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
          <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.text }]}>Settings</Text>

        {/* Appearance */}
        <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>APPEARANCE</Text>
        <View style={[styles.group, { backgroundColor: theme.card }]}>
          {(['system', 'light', 'dark'] as const).map((m) => (
            <TouchableOpacity
              key={m}
              style={[styles.row, mode === m && { backgroundColor: theme.surfaceAlt }]}
              onPress={() => setMode(m)}
            >
              <Text style={[styles.rowLabel, { color: theme.text }]}>
                {m.charAt(0).toUpperCase() + m.slice(1)}
              </Text>
              {mode === m && <Ionicons name="checkmark" size={18} color={Colors.copper[500]} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Notifications */}
        {prefs && (
          <>
            <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>NOTIFICATIONS</Text>
            <View style={[styles.group, { backgroundColor: theme.card }]}>
              <View style={styles.switchRow}>
                <Text style={[styles.rowLabel, { color: theme.text }]}>Great Conditions Alert</Text>
                <Switch
                  value={prefs.conditionsAlertEnabled}
                  onValueChange={() => toggle('conditionsAlertEnabled')}
                  trackColor={{ true: Colors.copper[500] }}
                />
              </View>
              <View style={styles.switchRow}>
                <Text style={[styles.rowLabel, { color: theme.text }]}>Golden Hour Reminder</Text>
                <Switch
                  value={prefs.goldenHourReminderEnabled}
                  onValueChange={() => toggle('goldenHourReminderEnabled')}
                  trackColor={{ true: Colors.copper[500] }}
                />
              </View>
              <View style={styles.switchRow}>
                <Text style={[styles.rowLabel, { color: theme.text }]}>Solunar Feeding Alert</Text>
                <Switch
                  value={prefs.solunarAlertEnabled}
                  onValueChange={() => toggle('solunarAlertEnabled')}
                  trackColor={{ true: Colors.copper[500] }}
                />
              </View>
            </View>
          </>
        )}

        {/* About */}
        <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>ABOUT</Text>
        <View style={[styles.group, { backgroundColor: theme.card }]}>
          <View style={styles.row}>
            <Text style={[styles.rowLabel, { color: theme.text }]}>Version</Text>
            <Text style={[styles.rowValue, { color: theme.textSecondary }]}>1.0.0</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerLogo, { color: Colors.copper[500] }]}>HOOKED</Text>
          <Text style={[styles.footerText, { color: theme.textMuted }]}>Fish Smarter.</Text>
          <Text style={[styles.footerText, { color: theme.textMuted }]}>
            This app contains affiliate links. Purchases through these links support
            HOOKED at no extra cost to you.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16, paddingBottom: 40 },
  backRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 8 },
  backText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  title: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 28, marginBottom: 16 },
  sectionLabel: {
    fontFamily: 'BarlowCondensed_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.5,
    marginBottom: 8,
    marginTop: 16,
  },
  group: { borderRadius: 12, overflow: 'hidden' },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  rowLabel: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 16 },
  rowValue: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14 },
  footer: { alignItems: 'center', marginTop: 32 },
  footerLogo: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 22, letterSpacing: 3 },
  footerText: {
    fontFamily: 'BarlowCondensed_400Regular',
    fontSize: 13,
    marginTop: 4,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
