import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '@/lib/auth-context';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';

interface ProGateProps {
  feature: string;
  children: React.ReactNode;
}

export function ProGate({ feature, children }: ProGateProps) {
  const { isPro } = useAuth();
  if (isPro) return <>{children}</>;
  return <PaywallPrompt feature={feature} />;
}

export function GuideGate({ children }: { children: React.ReactNode }) {
  const { isPro, guideUsesRemaining } = useAuth();
  if (isPro || guideUsesRemaining > 0) return <>{children}</>;
  return <PaywallPrompt feature="guide" />;
}

export function PaywallPrompt({ feature }: { feature: string }) {
  const { theme } = useTheme();
  const router = useRouter();

  const messages: Record<string, { icon: string; title: string; desc: string }> = {
    guide: {
      icon: '\uD83E\uDDED',
      title: "You've used your 3 free Guide recommendations this month",
      desc: 'Go Pro for unlimited recommendations, anytime.',
    },
    'heat-map': {
      icon: '\uD83D\uDDFA\uFE0F',
      title: 'Fish Heat Map is a Pro feature',
      desc: 'See exactly where fish are on your lake right now.',
    },
    forecast: {
      icon: '\uD83D\uDCCA',
      title: '7-Day Forecast is a Pro feature',
      desc: 'Know the best day to fish this week.',
    },
    'weather-trends': {
      icon: '\uD83C\uDF27\uFE0F',
      title: 'Weather Trend Analysis is a Pro feature',
      desc: "How yesterday's rain and last week's temps affect today's bite.",
    },
    notifications: {
      icon: '\uD83D\uDD14',
      title: 'Smart Notifications are a Pro feature',
      desc: 'Get alerted when conditions are excellent.',
    },
  };

  const msg = messages[feature] || messages.guide;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={styles.icon}>{msg.icon}</Text>
        <Text style={[styles.title, { color: theme.text }]}>{msg.title}</Text>
        <Text style={[styles.desc, { color: theme.textSecondary }]}>{msg.desc}</Text>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: Colors.copper[500] }]}
          onPress={() => router.push('/paywall')}
        >
          <Text style={styles.btnText}>Upgrade to Pro</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.back()} style={styles.later}>
          <Text style={[styles.laterText, { color: theme.textMuted }]}>Maybe Later</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function ProBadge() {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>PRO</Text>
    </View>
  );
}

export function SoftPaywallBanner({ feature }: { feature: string }) {
  const { isPro } = useAuth();
  const { theme } = useTheme();
  const router = useRouter();

  if (isPro) return null;

  return (
    <TouchableOpacity
      style={[styles.banner, { backgroundColor: Colors.copper[50] }]}
      onPress={() => router.push('/paywall')}
    >
      <Text style={[styles.bannerText, { color: Colors.copper[700] }]}>
        {feature === 'guide'
          ? 'Loved this? Go Pro for unlimited recommendations.'
          : 'Upgrade to Pro to unlock this feature.'}
      </Text>
      <Ionicons name="arrow-forward" size={16} color={Colors.copper[700]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  card: { borderRadius: 20, padding: 32, alignItems: 'center', width: '100%', maxWidth: 360 },
  icon: { fontSize: 48, marginBottom: 16 },
  title: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 22, textAlign: 'center', marginBottom: 8 },
  desc: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 16, textAlign: 'center', marginBottom: 24 },
  btn: { borderRadius: 12, paddingVertical: 14, paddingHorizontal: 32, width: '100%', alignItems: 'center' },
  btnText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
  later: { marginTop: 16 },
  laterText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 15 },
  badge: {
    backgroundColor: Colors.copper[500],
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 10, letterSpacing: 1 },
  banner: {
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  bannerText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14, flex: 1 },
});
