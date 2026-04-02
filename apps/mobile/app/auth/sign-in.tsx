import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@/lib/auth-context';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';

export default function SignInScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const { signIn, signInWithApple } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Please enter email and password');
      return;
    }
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) {
      Alert.alert('Sign In Failed', error);
    } else {
      router.replace('/(tabs)');
    }
  };

  const handleApple = async () => {
    setLoading(true);
    const { error } = await signInWithApple();
    setLoading(false);
    if (error) {
      Alert.alert('Apple Sign In Failed', error);
    } else {
      router.replace('/(tabs)');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.content}>
        <Text style={[styles.logo, { color: Colors.copper[500] }]}>HOOKED</Text>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>Sign in to your account</Text>

        {Platform.OS === 'ios' && (
          <TouchableOpacity
            style={[styles.appleBtn, { backgroundColor: theme.text }]}
            onPress={handleApple}
            disabled={loading}
          >
            <Ionicons name="logo-apple" size={20} color={theme.background} />
            <Text style={[styles.appleBtnText, { color: theme.background }]}>
              Sign in with Apple
            </Text>
          </TouchableOpacity>
        )}

        <View style={styles.divider}>
          <View style={[styles.dividerLine, { backgroundColor: theme.border }]} />
          <Text style={[styles.dividerText, { color: theme.textMuted }]}>or</Text>
          <View style={[styles.dividerLine, { backgroundColor: theme.border }]} />
        </View>

        <TextInput
          style={[styles.input, { backgroundColor: theme.card, color: theme.text }]}
          placeholder="Email"
          placeholderTextColor={theme.textMuted}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, { backgroundColor: theme.card, color: theme.text }]}
          placeholder="Password"
          placeholderTextColor={theme.textMuted}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={[styles.signInBtn, { backgroundColor: Colors.copper[500], opacity: loading ? 0.6 : 1 }]}
          onPress={handleSignIn}
          disabled={loading}
        >
          <Text style={styles.signInBtnText}>{loading ? 'Signing in...' : 'Sign In'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/auth/sign-up')} style={styles.link}>
          <Text style={[styles.linkText, { color: theme.textSecondary }]}>
            Don&apos;t have an account?{' '}
            <Text style={{ color: Colors.copper[500] }}>Sign up</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()} style={styles.link}>
          <Text style={[styles.skipText, { color: theme.textMuted }]}>Skip for now \u2192</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 24, justifyContent: 'center' },
  logo: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 40, letterSpacing: 4, textAlign: 'center' },
  subtitle: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 16, textAlign: 'center', marginTop: 4, marginBottom: 32 },
  appleBtn: {
    borderRadius: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 12,
  },
  appleBtnText: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 17 },
  divider: { flexDirection: 'row', alignItems: 'center', marginVertical: 16 },
  dividerLine: { flex: 1, height: 1 },
  dividerText: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, marginHorizontal: 12 },
  input: {
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontFamily: 'BarlowCondensed_500Medium',
    fontSize: 16,
    marginBottom: 10,
  },
  signInBtn: { borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 8 },
  signInBtnText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
  link: { marginTop: 16, alignItems: 'center' },
  linkText: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15 },
  skipText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 15 },
});
