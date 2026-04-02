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
import { getWeatherTrends, type WeatherTrend } from '@/lib/weather-trends';
import { detectNearestWaterBody, type DetectedWaterBody } from '@/lib/water-body-detection';
import { get7DayFishingForecast, type FishingForecast } from '@/lib/fishing-forecast';
import { rateFishingConditions, type ConditionsRating } from '@/lib/conditions-rating';
import { getLogEntries, type FishingLogEntry } from '@/lib/storage';

export default function HomeScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [waterTemp, setWaterTemp] = useState<WaterTempData | null>(null);
  const [waterBody, setWaterBody] = useState<DetectedWaterBody | null>(null);
  const [moonPhase, setMoonPhase] = useState<MoonPhaseData>(getMoonPhase());
  const [weatherTrend, setWeatherTrend] = useState<WeatherTrend | null>(null);
  const [forecast, setForecast] = useState<FishingForecast | null>(null);
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
        const [w, wt, wb, wTrend, fc] = await Promise.all([
          getCurrentWeather(loc.latitude, loc.longitude),
          getNearestWaterTemp(loc.latitude, loc.longitude),
          detectNearestWaterBody(loc.latitude, loc.longitude),
          getWeatherTrends(loc.latitude, loc.longitude),
          get7DayFishingForecast(loc.latitude, loc.longitude),
        ]);
        setWeather(w);
        setWaterTemp(wt);
        setWaterBody(wb);
        setWeatherTrend(wTrend);
        setForecast(fc);
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

  const renderStars = (count: number) =>
    Array(5)
      .fill(0)
      .map((_, i) => (
        <Ionicons
          key={i}
          name={i < count ? 'star' : 'star-outline'}
          size={18}
          color={Colors.copper[500]}
        />
      ));

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        contentContainerStyle={styles.scroll}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.logo, { color: Colors.copper[500] }]}>HOOKED</Text>
          <Text style={[styles.tagline, { color: theme.textSecondary }]}>Fish Smarter.</Text>
        </View>

        {/* Location + Water Body */}
        {(location || waterBody) && (
          <View style={styles.locationBlock}>
            {location && (
              <View style={styles.locationRow}>
                <Ionicons name="location" size={16} color={Colors.copper[500]} />
                <Text style={[styles.locationText, { color: theme.text }]}>
                  {waterBody ? waterBody.name : `${location.city}, ${location.state}`}
                </Text>
              </View>
            )}
            {waterBody && (
              <Text style={[styles.waterSubtext, { color: theme.textSecondary }]}>
                {waterBody.type} \u00B7 {location?.city}, {location?.state}
              </Text>
            )}
          </View>
        )}

        {/* Today's Conditions */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <View style={styles.conditionsGrid}>
            {weather && (
              <>
                <CondItem emoji={skyEmoji(weather.sky)} value={`${weather.tempF}\u00B0F`} theme={theme} />
                <CondItem emoji={'\uD83D\uDCA8'} value={`${weather.wind.speed}mph ${weather.wind.direction}`} theme={theme} />
                <CondItem
                  emoji={'\uD83D\uDCCA'}
                  value={`${weather.pressure.value}" ${weather.pressure.trend === 'falling' ? '\u2193' : weather.pressure.trend === 'rising' ? '\u2191' : ''}`}
                  theme={theme}
                />
              </>
            )}
            <CondItem emoji={moonPhase.emoji} value={moonPhase.phaseName} theme={theme} />
            {waterTemp && (
              <CondItem emoji={'\uD83C\uDF0A'} value={`${waterTemp.tempF}\u00B0F water`} theme={theme} />
            )}
          </View>

          {/* Rain info from trends */}
          {weatherTrend && weatherTrend.rain.pattern !== 'normal' && (
            <View style={[styles.rainBanner, { backgroundColor: theme.surfaceAlt }]}>
              <Text style={[styles.rainText, { color: theme.text }]}>
                {'\uD83C\uDF27\uFE0F'} {weatherTrend.rain.fishingImpact.split('.')[0]}.
              </Text>
            </View>
          )}

          {/* Rating */}
          {(weatherTrend?.overallScore || rating) && (
            <View style={styles.ratingContainer}>
              <View style={styles.starsRow}>
                {renderStars((weatherTrend?.overallScore.rating || rating?.stars) ?? 3)}
              </View>
              <Text style={[styles.ratingText, { color: theme.text }]}>
                {weatherTrend?.overallScore.label || rating?.rating}
              </Text>
              {weatherTrend?.bestFishingWindows.today[0] && (
                <Text style={[styles.bestWindow, { color: Colors.copper[500] }]}>
                  Best window: {weatherTrend.bestFishingWindows.today[0].start} \u2014{' '}
                  {weatherTrend.bestFishingWindows.today[0].end}
                </Text>
              )}
              {!weatherTrend && rating?.reasons[0] && (
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

          {/* Two CTA buttons */}
          <View style={styles.ctaRow}>
            <TouchableOpacity
              style={[styles.ctaButton, { backgroundColor: Colors.copper[500] }]}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                router.push('/(tabs)/guide');
              }}
            >
              <Ionicons name="compass-outline" size={20} color="#fff" />
              <Text style={styles.ctaText}>Ask the Guide</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ctaButton, { backgroundColor: Colors.water[700] }]}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                router.push('/(tabs)/map');
              }}
            >
              <Ionicons name="map-outline" size={20} color="#fff" />
              <Text style={styles.ctaText}>Where to Fish?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 7-Day Fishing Forecast */}
        {forecast && forecast.days.length > 0 && (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>
              7-DAY FISHING FORECAST
            </Text>
            <View style={styles.forecastRow}>
              {forecast.days.map((day, i) => (
                <View key={i} style={styles.forecastDay}>
                  <Text style={[styles.forecastDayName, { color: theme.textSecondary }]}>
                    {day.dayName}
                  </Text>
                  <Text style={styles.forecastEmoji}>{day.conditionEmoji}</Text>
                  <Text style={[styles.forecastTemp, { color: theme.text }]}>
                    {day.highF}\u00B0
                  </Text>
                  <View style={styles.forecastStarsRow}>
                    {Array(day.fishingRating).fill(0).map((_, j) => (
                      <Ionicons key={j} name="star" size={8} color={Colors.copper[500]} />
                    ))}
                  </View>
                </View>
              ))}
            </View>
            {forecast.bestDay && (
              <View style={[styles.bestDayBanner, { backgroundColor: theme.surfaceAlt }]}>
                <Text style={[styles.bestDayLabel, { color: Colors.copper[500] }]}>
                  BEST DAY: {forecast.bestDay.day.dayName.toUpperCase()}
                </Text>
                <Text style={[styles.bestDaySummary, { color: theme.text }]}>
                  {forecast.bestDay.day.summary}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Quick Guide */}
        <View style={styles.section}>
          <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>QUICK GUIDE</Text>
          <View style={styles.speciesGrid}>
            {popularSpecies.slice(0, 4).map((sp) => (
              <TouchableOpacity
                key={sp.slug}
                style={[styles.speciesButton, { backgroundColor: theme.card }]}
                onPress={() => {
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                  router.push({ pathname: '/(tabs)/guide', params: { species: sp.slug } });
                }}
              >
                <Text style={styles.speciesEmoji}>{sp.emoji}</Text>
                <Text style={[styles.speciesName, { color: theme.text }]}>{sp.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity onPress={() => router.push('/(tabs)/guide')}>
            <Text style={[styles.moreLink, { color: Colors.copper[500] }]}>
              More species \u2192
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recent Catches */}
        <View style={styles.section}>
          <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>RECENT CATCHES</Text>
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
                  <Text style={[styles.catchSpecies, { color: theme.text }]}>{entry.species}</Text>
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

function CondItem({ emoji, value, theme }: { emoji: string; value: string; theme: any }) {
  return (
    <View style={condStyles.item}>
      <Text style={condStyles.emoji}>{emoji}</Text>
      <Text style={[condStyles.value, { color: theme.text }]}>{value}</Text>
    </View>
  );
}

const condStyles = StyleSheet.create({
  item: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  emoji: { fontSize: 16 },
  value: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
});

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16 },
  header: { alignItems: 'center', marginBottom: 16, marginTop: 8 },
  logo: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 36, letterSpacing: 4 },
  tagline: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 16, marginTop: 2 },
  locationBlock: { marginBottom: 12 },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  locationText: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 18 },
  waterSubtext: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, textTransform: 'capitalize', marginLeft: 20 },
  card: { borderRadius: 16, padding: 16, marginBottom: 16 },
  sectionLabel: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 12, letterSpacing: 2, marginBottom: 10 },
  conditionsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 12 },
  rainBanner: { borderRadius: 8, padding: 10, marginBottom: 12 },
  rainText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  ratingContainer: { alignItems: 'center', marginBottom: 14 },
  starsRow: { flexDirection: 'row', gap: 2, marginBottom: 4 },
  ratingText: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 20 },
  bestWindow: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 14, marginTop: 4 },
  ratingReason: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, textAlign: 'center', marginTop: 2 },
  noData: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, textAlign: 'center', marginBottom: 16 },
  ctaRow: { flexDirection: 'row', gap: 10 },
  ctaButton: { flex: 1, borderRadius: 12, paddingVertical: 14, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 6 },
  ctaText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 16 },
  forecastRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  forecastDay: { alignItems: 'center', flex: 1 },
  forecastDayName: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 12 },
  forecastEmoji: { fontSize: 18, marginVertical: 2 },
  forecastTemp: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 13 },
  forecastStarsRow: { flexDirection: 'row', gap: 1, marginTop: 2 },
  bestDayBanner: { borderRadius: 10, padding: 12 },
  bestDayLabel: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 13, marginBottom: 2 },
  bestDaySummary: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, lineHeight: 20 },
  section: { marginBottom: 16 },
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
