import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { allReviews } from '../../../../data/gear/reviews';
import { affiliateProducts } from '../../../../data/affiliate-products';

export default function GearDetail() {
  const { theme } = useTheme();
  const router = useRouter();
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const review = allReviews.find((r) => r.slug === slug);
  const affiliateProduct = review
    ? affiliateProducts.find((p) => p.id === review.affiliateProductId)
    : undefined;

  if (!review) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text, padding: 20 }}>Review not found.</Text>
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

        <Text style={[styles.brand, { color: theme.textSecondary }]}>{review.brand}</Text>
        <Text style={[styles.title, { color: theme.text }]}>{review.productName}</Text>
        <Text style={[styles.rating, { color: Colors.copper[500] }]}>
          {'★'.repeat(Math.round(review.rating))} {review.rating}/5
        </Text>

        {affiliateProduct?.affiliateUrl && (
          <TouchableOpacity
            style={styles.checkPriceBtn}
            onPress={() => Linking.openURL(affiliateProduct.affiliateUrl)}
          >
            <Ionicons name="cart-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.checkPriceText}>
              Check Price {affiliateProduct.price ? `- ${affiliateProduct.price}` : ''}
            </Text>
          </TouchableOpacity>
        )}

        <Text style={[styles.desc, { color: theme.text }]}>{review.description}</Text>

        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.textMuted }]}>SPECIFICATIONS</Text>
          {review.specifications.map((spec, i) => (
            <View key={i} style={styles.specRow}>
              <Text style={[styles.specKey, { color: theme.textSecondary }]}>{spec.key}</Text>
              <Text style={[styles.specVal, { color: theme.text }]}>{spec.value}</Text>
            </View>
          ))}
        </View>

        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.textMuted }]}>PROS</Text>
          {review.pros.map((p, i) => (
            <Text key={i} style={[styles.procon, { color: theme.text }]}>{'\u2705'} {p}</Text>
          ))}
        </View>

        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.cardTitle, { color: theme.textMuted }]}>CONS</Text>
          {review.cons.map((c, i) => (
            <Text key={i} style={[styles.procon, { color: theme.text }]}>{'❌'} {c}</Text>
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
  brand: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14, textTransform: 'uppercase', letterSpacing: 1 },
  title: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 26, marginTop: 2 },
  rating: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 16, marginTop: 4, marginBottom: 12 },
  desc: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, lineHeight: 22, marginBottom: 12 },
  card: { borderRadius: 12, padding: 14, marginBottom: 8 },
  cardTitle: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 12, letterSpacing: 1.5, marginBottom: 8 },
  specRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 4 },
  specKey: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  specVal: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 14 },
  procon: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, lineHeight: 22, marginBottom: 4 },
  checkPriceBtn: {
    backgroundColor: Colors.copper[500],
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    flexDirection: 'row' as const,
    justifyContent: 'center',
  },
  checkPriceText: { color: '#fff', fontSize: 16, fontFamily: 'BarlowCondensed_700Bold' },
});
