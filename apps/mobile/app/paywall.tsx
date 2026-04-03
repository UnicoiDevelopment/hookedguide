import { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
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
import {
  getOfferings,
  purchasePackage,
  restorePurchases,
} from '@/lib/purchases';

const features = [
  { icon: '\uD83E\uDDED', title: 'UNLIMITED GUIDE', desc: 'Ask The Guide unlimited times. Hyper-specific, condition-based recommendations anytime.' },
  { icon: '\uD83D\uDDFA\uFE0F', title: 'FISH HEAT MAP', desc: 'See exactly where fish are on your lake right now.' },
  { icon: '\uD83D\uDCCA', title: '7-DAY FISHING FORECAST', desc: 'Know the best day to fish this week before you plan your trip.' },
  { icon: '\uD83C\uDF27\uFE0F', title: 'WEATHER TREND ANALYSIS', desc: "How yesterday's rain and last week's temps affect today's bite." },
  { icon: '\uD83D\uDCD4', title: 'UNLIMITED FISHING LOG', desc: 'Log every catch with conditions auto-captured. Cloud synced.' },
  { icon: '\uD83D\uDD14', title: 'SMART NOTIFICATIONS', desc: 'Get alerted when conditions are excellent at your home lake.' },
];

export default function PaywallScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const { refreshSubscription } = useAuth();
  const [monthlyPrice, setMonthlyPrice] = useState('$6.99');
  const [yearlyPrice, setYearlyPrice] = useState('$49.99');
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    getOfferings().then((offerings) => {
      if (offerings?.monthly) setMonthlyPrice(offerings.monthly.price);
      if (offerings?.yearly) setYearlyPrice(offerings.yearly.price);
    });
  }, []);

  const handlePurchase = async (period: 'monthly' | 'yearly') => {
    setPurchasing(true);
    try {
      const success = await purchasePackage(period);
      if (success) {
        await refreshSubscription();
        Alert.alert('Welcome to HOOKED Pro!', 'All features are now unlocked.', [
          { text: "Let's Fish!", onPress: () => router.back() },
        ]);
      }
    } catch (err: any) {
      Alert.alert('Purchase Failed', err.message || 'Please try again.');
    } finally {
      setPurchasing(false);
    }
  };

  const handleRestore = async () => {
    setPurchasing(true);
    const success = await restorePurchases();
    setPurchasing(false);
    if (success) {
      await refreshSubscription();
      Alert.alert('Subscription Restored!', 'Welcome back to HOOKED Pro.', [
        { text: 'OK', onPress: () => router.back() },
      ]);
    } else {
      Alert.alert('No Active Subscription', 'No previous purchase found.');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <Text style={[styles.logo, { color: Colors.copper[500] }]}>HOOKED</Text>
        <Text style={[styles.title, { color: theme.text }]}>Upgrade to HOOKED Pro</Text>

        {/* Features */}
        <View style={styles.featureList}>
          {features.map((f, i) => (
            <View key={i} style={[styles.featureRow, { borderBottomColor: theme.border }]}>
              <Text style={styles.featureIcon}>{f.icon}</Text>
              <View style={{ flex: 1 }}>
                <Text style={[styles.featureTitle, { color: theme.text }]}>{f.title}</Text>
                <Text style={[styles.featureDesc, { color: theme.textSecondary }]}>{f.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Yearly */}
        <TouchableOpacity
          style={[styles.planCard, styles.yearlyCard, { backgroundColor: Colors.copper[500] }]}
          onPress={() => handlePurchase('yearly')}
          disabled={purchasing}
        >
          <View>
            <View style={styles.bestValueBadge}>
              <Text style={styles.bestValueText}>BEST VALUE</Text>
            </View>
            <Text style={styles.planName}>Yearly</Text>
            <Text style={styles.planPrice}>{yearlyPrice}/year</Text>
            <Text style={styles.planSavings}>Save 40% — just $4.17/mo</Text>
          </View>
          <Text style={styles.planCta}>{purchasing ? '...' : 'Subscribe'}</Text>
        </TouchableOpacity>

        {/* Monthly */}
        <TouchableOpacity
          style={[styles.planCard, { backgroundColor: theme.card }]}
          onPress={() => handlePurchase('monthly')}
          disabled={purchasing}
        >
          <View>
            <Text style={[styles.planName, { color: theme.text }]}>Monthly</Text>
            <Text style={[styles.planPrice, { color: theme.text }]}>{monthlyPrice}/month</Text>
          </View>
          <Text style={[styles.planCta, { color: Colors.copper[500] }]}>
            {purchasing ? '...' : 'Subscribe'}
          </Text>
        </TouchableOpacity>

        {/* Restore */}
        <TouchableOpacity onPress={handleRestore} style={styles.restoreBtn}>
          <Text style={[styles.restoreText, { color: theme.textMuted }]}>
            Already subscribed? Restore Purchase
          </Text>
        </TouchableOpacity>

        {/* Promo code */}
        <TouchableOpacity onPress={() => router.push('/promo')} style={{ marginTop: 12, alignItems: 'center' }}>
          <Text style={{ color: Colors.copper[500], textAlign: 'center', fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 14 }}>
            Have a promo code?
          </Text>
        </TouchableOpacity>

        {/* Maybe Later */}
        <TouchableOpacity onPress={() => router.back()} style={styles.laterBtn}>
          <Text style={[styles.laterText, { color: theme.textMuted }]}>Maybe Later</Text>
        </TouchableOpacity>

        {/* Legal */}
        <Text style={[styles.legal, { color: theme.textMuted }]}>
          Payment will be charged to your Apple ID account at confirmation of purchase.
          Subscription automatically renews unless it is canceled at least 24 hours
          before the end of the current period. You can manage and cancel your
          subscriptions by going to your account settings on the App Store after purchase.
        </Text>

        <View style={styles.legalLinks}>
          <TouchableOpacity onPress={() => Linking.openURL('https://hookedguide.com/terms')}>
            <Text style={[styles.legalLink, { color: Colors.copper[500] }]}>Terms of Use</Text>
          </TouchableOpacity>
          <Text style={[styles.legalDot, { color: theme.textMuted }]}> ·</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://hookedguide.com/privacy')}>
            <Text style={[styles.legalLink, { color: Colors.copper[500] }]}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 24 },
  logo: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 32, letterSpacing: 4, textAlign: 'center', marginTop: 16 },
  title: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 24, textAlign: 'center', marginTop: 8, marginBottom: 24 },
  featureList: { marginBottom: 24 },
  featureRow: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    alignItems: 'flex-start',
  },
  featureIcon: { fontSize: 24, marginTop: 2 },
  featureTitle: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 15 },
  featureDesc: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, lineHeight: 20, marginTop: 1 },
  planCard: {
    borderRadius: 14,
    padding: 18,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yearlyCard: {},
  bestValueBadge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  bestValueText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 10, letterSpacing: 1 },
  planName: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
  planPrice: { color: '#fff', fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 16, marginTop: 2 },
  planSavings: { color: 'rgba(255,255,255,0.8)', fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 1 },
  planCta: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 16 },
  restoreBtn: { alignItems: 'center', marginTop: 16 },
  restoreText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14, textDecorationLine: 'underline' },
  laterBtn: { alignItems: 'center', marginTop: 12 },
  laterText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 15 },
  legal: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 11, lineHeight: 16, textAlign: 'center', marginTop: 24 },
  legalLinks: { flexDirection: 'row', justifyContent: 'center', marginTop: 8 },
  legalLink: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 13 },
  legalDot: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13 },
});
