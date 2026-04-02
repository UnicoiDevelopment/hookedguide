import { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { popularSpecies } from '@/constants/species-icons';
import { getCurrentLocation, type LocationData } from '@/lib/location';
import { getCurrentWeather, type WeatherData, skyEmoji } from '@/lib/weather';
import { getNearestWaterTemp, type WaterTempData } from '@/lib/water-temp';
import { getMoonPhase, type MoonPhaseData } from '@/lib/moon';
import { rateFishingConditions, type ConditionsRating } from '@/lib/conditions-rating';
import { getLogEntries, type FishingLogEntry } from '@/lib/storage';

export default function HomeScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [waterTemp, setWaterTemp] = useState<WaterTempData | null>(null);
  const [moonPhase, setMoonPhase] = useState<MoonPhaseData>(getMoonPhase());
  const [rating, setRating] = useState<ConditionsRating | null>(null);
  const [recentCatches, setRecentCatches] = useState<FishingLogEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    try {
      const moon = getMoonPhase();
      setMoonPhase(moon);

      const loc = await getCurrentLocation();
      setLocation(loc);

      if (loc) {
        const [w, wt] = await Promise.all([
          getCurrentWeather(loc.latitude, loc.longitude),
          getNearestWaterTemp(loc.latitude, loc.longitude),
        ]);
        setWeather(w);
        setWaterTemp(wt);
        setRating(rateFishingConditions({ weather: w, moonPhase: moon }));
      } else {
        setRating(rateFishingConditions({ weather: null, moonPhase: moon }));
      }

      const entries = await getLogEntries();
      setRecentCatches(entries.slice(0, 5));
    } catch {
      // Graceful degradation
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }, [loadData]);

  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Ionicons
          key={i}
          name={i < count ? 'star' : 'star-outline'}
          size={18}
          color={Colors.copper[500]}
        />
      ));
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentContainerStyle={styles.scroll}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.logo, { color: Colors.copper[500] }]}>HOOKED</Text>
          <Text style={[styles.tagline, { color: theme.textSecondary }]}>
            Fish Smarter.
          </Text>
        </View>

        {/* Today's Conditions */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>
            TODAY&apos;S CONDITIONS
          </Text>

          {location && (
            <View style={styles.locationRow}>
              <Ionicons name="location" size={16} color={Colors.copper[500]} />
              <Text style={[styles.locationText, { color: theme.text }]}>
                {location.city}, {location.state}
              </Text>
            </View>
          )}

          <View style={styles.conditionsGrid}>
            {weather && (
              <>
                <View style={styles.conditionItem}>
                  <Text style={styles.conditionEmoji}>
                    {skyEmoji(weather.sky)}
                  </Text>
                  <Text style={[styles.conditionValue, { color: theme.text }]}>
                    {weather.tempF}\u00B0F
                  </Text>
                </View>
                <View style={styles.conditionItem}>
                  <Text style={styles.conditionEmoji}>{'\uD83D\uDCA8'}</Text>
                  <Text style={[styles.conditionValue, { color: theme.text }]}>
                    {weather.wind.speed}mph {weather.wind.direction}
                  </Text>
                </View>
                <View style={styles.conditionItem}>
                  <Text style={styles.conditionEmoji}>{'\uD83D\uDCCA'}</Text>
                  <Text style={[styles.conditionValue, { color: theme.text }]}>
                    {weather.pressure.value}&quot;{' '}
                    {weather.pressure.trend === 'falling'
                      ? '\u2193'
                      : weather.pressure.trend === 'rising'
                        ? '\u2191'
                        : '\u2194'}
                  </Text>
                </View>
              </>
            )}
            <View style={styles.conditionItem}>
              <Text style={styles.conditionEmoji}>{moonPhase.emoji}</Text>
              <Text style={[styles.conditionValue, { color: theme.text }]}>
                {moonPhase.phaseName}
              </Text>
            </View>
            {waterTemp && (
              <View style={styles.conditionItem}>
                <Text style={styles.conditionEmoji}>{'\uD83C\uDF0A'}</Text>
                <Text style={[styles.conditionValue, { color: theme.text }]}>
                  {waterTemp.tempF}\u00B0F water
                </Text>
              </View>
            )}
          </View>

          {rating && (
            <View style={styles.ratingContainer}>
              <View style={styles.starsRow}>{renderStars(rating.stars)}</View>
              <Text style={[styles.ratingText, { color: theme.text }]}>
                {rating.rating}
              </Text>
              {rating.reasons.length > 0 && (
                <Text style={[styles.ratingReason, { color: theme.textSecondary }]}>
                  {rating.reasons[0]}
                </Text>
              )}
            </View>
          )}

          {!weather && !loading && (
            <Text style={[styles.noData, { color: theme.textMuted }]}>
              {'\uD83D\uDCE1'} Enable location for auto-detected conditions
            </Text>
          )}

          <TouchableOpacity
            style={[styles.ctaButton, { backgroundColor: Colors.copper[500] }]}
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              router.push('/(tabs)/guide');
            }}
          >
            <Text style={styles.ctaText}>Ask the Guide \u2192</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Guide */}
        <View style={styles.section}>
          <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>
            QUICK GUIDE
          </Text>
          <View style={styles.speciesGrid}>
            {popularSpecies.slice(0, 4).map((sp) => (
              <TouchableOpacity
                key={sp.slug}
                style={[styles.speciesButton, { backgroundColor: theme.card }]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  router.push({
                    pathname: '/(tabs)/guide',
                    params: { species: sp.slug },
                  });
                }}
              >
                <Text style={styles.speciesEmoji}>{sp.emoji}</Text>
                <Text style={[styles.speciesName, { color: theme.text }]}>
                  {sp.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            onPress={() => router.push('/(tabs)/guide')}
          >
            <Text style={[styles.moreLink, { color: Colors.copper[500] }]}>
              More species \u2192
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recent Catches */}
        <View style={styles.section}>
          <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>
            RECENT CATCHES
          </Text>
          {recentCatches.length === 0 ? (
            <View style={[styles.emptyCard, { backgroundColor: theme.card }]}>
              <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
                No catches logged yet. Hit the water and log your first catch!
              </Text>
              <TouchableOpacity
                style={[styles.smallButton, { borderColor: Colors.copper[500] }]}
                onPress={() => router.push('/log/new')}
              >
                <Text style={{ color: Colors.copper[500], fontFamily: 'BarlowCondensed_600SemiBold' }}>
                  Log a Catch
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            recentCatches.map((entry) => (
              <TouchableOpacity
                key={entry.id}
                style={[styles.catchCard, { backgroundColor: theme.card }]}
                onPress={() => router.push(`/log/${entry.id}`)}
              >
                <View>
                  <Text style={[styles.catchSpecies, { color: theme.text }]}>
                    {entry.species}
                  </Text>
                  <Text style={[styles.catchDate, { color: theme.textSecondary }]}>
                    {new Date(entry.timestamp).toLocaleDateString()}
                  </Text>
                </View>
                {entry.weight && (
                  <Text style={[styles.catchWeight, { color: Colors.copper[500] }]}>
                    {entry.weight.lbs}lb {entry.weight.oz}oz
                  </Text>
                )}
              </TouchableOpacity>
            ))
          )}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16 },
  header: { alignItems: 'center', marginBottom: 20, marginTop: 8 },
  logo: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 36, letterSpacing: 4 },
  tagline: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 16, marginTop: 2 },
  card: { borderRadius: 16, padding: 20, marginBottom: 20 },
  sectionLabel: {
    fontFamily: 'BarlowCondensed_600SemiBold',
    fontSize: 12,
    letterSpacing: 2,
    marginBottom: 12,
  },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 12 },
  locationText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 16 },
  conditionsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 16 },
  conditionItem: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  conditionEmoji: { fontSize: 16 },
  conditionValue: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  ratingContainer: { alignItems: 'center', marginBottom: 16 },
  starsRow: { flexDirection: 'row', gap: 2, marginBottom: 4 },
  ratingText: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 20 },
  ratingReason: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, textAlign: 'center', marginTop: 2 },
  noData: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, textAlign: 'center', marginBottom: 16 },
  ctaButton: { borderRadius: 12, paddingVertical: 14, alignItems: 'center' },
  ctaText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
  section: { marginBottom: 20 },
  speciesGrid: { flexDirection: 'row', gap: 10, marginBottom: 8 },
  speciesButton: { flex: 1, borderRadius: 12, padding: 14, alignItems: 'center' },
  speciesEmoji: { fontSize: 28, marginBottom: 4 },
  speciesName: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 13 },
  moreLink: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14, textAlign: 'center' },
  emptyCard: { borderRadius: 12, padding: 20, alignItems: 'center' },
  emptyText: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, textAlign: 'center', marginBottom: 12 },
  smallButton: { borderWidth: 1, borderRadius: 8, paddingHorizontal: 16, paddingVertical: 8 },
  catchCard: {
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  catchSpecies: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 16, textTransform: 'capitalize' },
  catchDate: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 2 },
  catchWeight: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 16 },
});
