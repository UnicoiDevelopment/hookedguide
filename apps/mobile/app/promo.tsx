import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { useAuth } from '@/lib/auth-context';
import { Colors } from '@/constants/colors';

export default function PromoScreen() {
  const { theme } = useTheme();
  const { user, refreshSubscription } = useAuth();
  const router = useRouter();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRedeem = async () => {
    if (!code.trim()) {
      Alert.alert('Enter a code', 'Please enter your promo code.');
      return;
    }
    if (!user) {
      Alert.alert('Sign in required', 'Please sign in to redeem a promo code.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('https://hookedguide.com/api/promo/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim().toUpperCase(), userId: user.id }),
      });

      const data = await res.json();
      if (data.success) {
        await refreshSubscription();
        Alert.alert('Welcome to Pro!', data.message || 'Your HOOKED Pro subscription is now active.', [
          { text: 'Awesome!', onPress: () => router.back() },
        ]);
      } else {
        Alert.alert('Invalid Code', data.message || 'That code is not valid or has already been used.');
      }
    } catch {
      Alert.alert('Error', 'Could not validate code. Check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
        <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
        <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { color: theme.text }]}>Redeem Promo Code</Text>
      <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
        Enter your promo code to unlock HOOKED Pro.
      </Text>

      <TextInput
        style={[styles.input, { backgroundColor: theme.card, color: theme.text, borderColor: theme.border }]}
        placeholder="Enter code"
        placeholderTextColor={theme.textMuted}
        value={code}
        onChangeText={setCode}
        autoCapitalize="characters"
        autoCorrect={false}
      />

      <TouchableOpacity
        style={[styles.redeemBtn, { opacity: loading ? 0.6 : 1 }]}
        onPress={handleRedeem}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.redeemText}>Redeem Code</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  backRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 24 },
  backText: { fontSize: 16, fontFamily: 'BarlowCondensed_600SemiBold' },
  title: { fontSize: 28, fontFamily: 'BarlowCondensed_700Bold', marginBottom: 8 },
  subtitle: { fontSize: 16, fontFamily: 'BarlowCondensed_400Regular', marginBottom: 24 },
  input: {
    fontSize: 20,
    fontFamily: 'BarlowCondensed_600SemiBold',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    textAlign: 'center',
    letterSpacing: 4,
    marginBottom: 20,
  },
  redeemBtn: {
    backgroundColor: Colors.copper[500],
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  redeemText: { color: '#fff', fontSize: 18, fontFamily: 'BarlowCondensed_700Bold' },
});
