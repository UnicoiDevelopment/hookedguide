import { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Switch,
  StyleSheet,
  Alert,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { useAuth } from '@/lib/auth-context';
import { Colors } from '@/constants/colors';
import { getPreferences, savePreferences, type UserPreferences } from '@/lib/storage';

export default function SettingsScreen() {
  const { theme, mode, setMode } = useTheme();
  const { user, isPro, guideUsesRemaining, signOut } = useAuth();
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

  const handleSignOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Sign Out',
        style: 'destructive',
        onPress: async () => {
          await signOut();
          router.replace('/(tabs)');
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
          <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.text }]}>Settings</Text>

        {/* Account */}
        <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>ACCOUNT</Text>
        <View style={[styles.group, { backgroundColor: theme.card }]}>
          {user ? (
            <>
              <View style={styles.accountRow}>
                <Ionicons name="person-circle-outline" size={24} color={Colors.copper[500]} />
                <View style={{ flex: 1 }}>
                  <Text style={[styles.email, { color: theme.text }]}>
                    {user.email || 'Apple ID User'}
                  </Text>
                  <Text style={[styles.accountMeta, { color: theme.textSecondary }]}>
                    {isPro ? 'HOOKED Pro' : 'Free Plan'} \u00B7{' '}
                    {isPro ? 'Unlimited Guide' : `${guideUsesRemaining} Guide uses left this month`}
                  </Text>
                </View>
              </View>
              {!isPro && (
                <TouchableOpacity
                  style={[styles.upgradeBtn, { backgroundColor: Colors.copper[500] }]}
                  onPress={() => router.push('/paywall')}
                >
                  <Text style={styles.upgradeBtnText}>Upgrade to Pro \u2192</Text>
                </TouchableOpacity>
              )}
            </>
          ) : (
            <TouchableOpacity
              style={[styles.signInRow]}
              onPress={() => router.push('/auth/sign-in')}
            >
              <Ionicons name="log-in-outline" size={20} color={Colors.copper[500]} />
              <Text style={[styles.signInText, { color: Colors.copper[500] }]}>
                Sign In / Create Account
              </Text>
            </TouchableOpacity>
          )}
        </View>

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
            <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>
              NOTIFICATIONS {!isPro ? '(Pro)' : ''}
            </Text>
            <View style={[styles.group, { backgroundColor: theme.card, opacity: isPro ? 1 : 0.5 }]}>
              <View style={styles.switchRow}>
                <Text style={[styles.rowLabel, { color: theme.text }]}>Excellent Conditions Alert</Text>
                <Switch
                  value={prefs.conditionsAlertEnabled}
                  onValueChange={() => isPro ? toggle('conditionsAlertEnabled') : router.push('/paywall')}
                  trackColor={{ true: Colors.copper[500] }}
                />
              </View>
              <View style={styles.switchRow}>
                <Text style={[styles.rowLabel, { color: theme.text }]}>Golden Hour Reminder</Text>
                <Switch
                  value={prefs.goldenHourReminderEnabled}
                  onValueChange={() => isPro ? toggle('goldenHourReminderEnabled') : router.push('/paywall')}
                  trackColor={{ true: Colors.copper[500] }}
                />
              </View>
              <View style={styles.switchRow}>
                <Text style={[styles.rowLabel, { color: theme.text }]}>Solunar Feeding Alert</Text>
                <Switch
                  value={prefs.solunarAlertEnabled}
                  onValueChange={() => isPro ? toggle('solunarAlertEnabled') : router.push('/paywall')}
                  trackColor={{ true: Colors.copper[500] }}
                />
              </View>
            </View>
          </>
        )}

        {/* Support */}
        <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>SUPPORT</Text>
        <View style={[styles.group, { backgroundColor: theme.card }]}>
          {[
            { label: 'About HOOKED', url: 'https://hookedguide.com/about' },
            { label: 'Privacy Policy', url: 'https://hookedguide.com/privacy' },
            { label: 'Terms of Use', url: 'https://hookedguide.com/terms' },
            { label: 'Affiliate Disclosure', url: 'https://hookedguide.com/disclosure' },
            { label: 'Contact Support', url: 'mailto:contact@hookedguide.com' },
          ].map((item, i, arr) => (
            <TouchableOpacity
              key={item.label}
              style={[styles.row, i < arr.length - 1 && { borderBottomWidth: 1, borderBottomColor: theme.border }]}
              onPress={() => Linking.openURL(item.url)}
            >
              <Text style={[styles.rowLabel, { color: theme.text }]}>{item.label}</Text>
              <Ionicons name="open-outline" size={14} color={theme.textMuted} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Version */}
        <View style={[styles.group, { backgroundColor: theme.card, marginTop: 8 }]}>
          <View style={styles.row}>
            <Text style={[styles.rowLabel, { color: theme.text }]}>Version</Text>
            <Text style={[styles.rowValue, { color: theme.textSecondary }]}>1.0.0</Text>
          </View>
        </View>

        {/* Sign Out */}
        {user && (
          <TouchableOpacity style={styles.signOutBtn} onPress={handleSignOut}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={[styles.footerLogo, { color: Colors.copper[500] }]}>HOOKED</Text>
          <Text style={[styles.footerText, { color: theme.textMuted }]}>
            Fish Smarter. {'\u00A9'} 2026 HOOKED
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
  accountRow: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 14 },
  email: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 16 },
  accountMeta: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 2 },
  upgradeBtn: { borderRadius: 10, margin: 14, marginTop: 0, paddingVertical: 12, alignItems: 'center' },
  upgradeBtnText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 16 },
  signInRow: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 14 },
  signInText: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 16 },
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
  signOutBtn: { marginTop: 24, alignItems: 'center', padding: 14 },
  signOutText: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 16, color: '#DC2626' },
  footer: { alignItems: 'center', marginTop: 24 },
  footerLogo: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 22, letterSpacing: 3 },
  footerText: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 4 },
});
