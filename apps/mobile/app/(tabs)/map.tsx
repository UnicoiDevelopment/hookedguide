import { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { getCurrentLocation, type LocationData } from '@/lib/location';
import { getCurrentWeather, type WeatherData, skyEmoji } from '@/lib/weather';
import { getMoonPhase } from '@/lib/moon';
import {
  detectNearestWaterBody,
  type DetectedWaterBody,
} from '@/lib/water-body-detection';
import {
  calculateFishHeatMap,
  getHeatMapColor,
  getHeatMapLabel,
  type HeatMapZone,
  type HeatMapInput,
} from '@/lib/heat-map-engine';
import { getWeatherTrends, type WeatherTrend } from '@/lib/weather-trends';

export default function MapScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<LocationData | null>(null);
  const [waterBody, setWaterBody] = useState<DetectedWaterBody | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherTrend, setWeatherTrend] = useState<WeatherTrend | null>(null);
  const [zones, setZones] = useState<HeatMapZone[]>([]);
  const [selectedZone, setSelectedZone] = useState<HeatMapZone | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const loc = await getCurrentLocation();
      setLocation(loc);
      if (!loc) {
        setLoading(false);
        return;
      }

      const [wb, w, wt] = await Promise.all([
        detectNearestWaterBody(loc.latitude, loc.longitude),
        getCurrentWeather(loc.latitude, loc.longitude),
        getWeatherTrends(loc.latitude, loc.longitude),
      ]);

      setWaterBody(wb);
      setWeather(w);
      setWeatherTrend(wt);

      if (wb && w) {
        const now = new Date();
        const moon = getMoonPhase(now);
        const month = now.getMonth() + 1;
        const hour = now.getHours();

        // Determine seasonal pattern from month
        const seasonalPattern =
          month >= 3 && month <= 5 ? 'pre-spawn' :
          month >= 6 && month <= 8 ? 'summer' :
          month >= 9 && month <= 11 ? 'fall' : 'winter';

        const input: HeatMapInput = {
          waterBody: wb,
          species: 'largemouth-bass', // default, user can change
          targetDepth: { min: 4, max: 12 },
          preferredStructure: ['mixed'],
          windDirection: w.wind.direction,
          windSpeed: w.wind.speed,
          skyCondition: w.sky,
          weatherTrend: wt,
          seasonalPattern,
          month,
          hourOfDay: hour,
        };

        const heatZones = calculateFishHeatMap(input);
        setZones(heatZones);
      }
    } catch {
      // graceful degradation
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.copper[500]} />
          <Text style={[styles.loadingText, { color: theme.text }]}>
            Detecting water body and analyzing conditions...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!location) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.emptyContainer}>
          <Ionicons name="location-outline" size={48} color={theme.textMuted} />
          <Text style={[styles.emptyTitle, { color: theme.text }]}>Location Required</Text>
          <Text style={[styles.emptyText, { color: theme.textSecondary }]}>
            Enable location services to detect nearby water and generate your fish heat map.
          </Text>
          <TouchableOpacity
            style={[styles.retryBtn, { backgroundColor: Colors.copper[500] }]}
            onPress={loadData}
          >
            <Text style={styles.retryText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={[styles.title, { color: theme.text }]}>Where Should I Fish?</Text>

        {/* Water body detection */}
        {waterBody ? (
          <View style={[styles.waterCard, { backgroundColor: theme.card }]}>
            <Ionicons name="water" size={20} color={Colors.copper[500]} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.waterName, { color: theme.text }]}>{waterBody.name}</Text>
              <Text style={[styles.waterType, { color: theme.textSecondary }]}>
                {waterBody.type} \u00B7 {Math.round(waterBody.distanceFromUser)}m away
              </Text>
            </View>
          </View>
        ) : (
          <View style={[styles.waterCard, { backgroundColor: theme.card }]}>
            <Ionicons name="help-circle-outline" size={20} color={theme.textMuted} />
            <Text style={[styles.waterType, { color: theme.textSecondary }]}>
              No water body detected nearby. Move closer to a lake or river.
            </Text>
          </View>
        )}

        {/* Current conditions bar */}
        {weather && (
          <View style={[styles.condBar, { backgroundColor: theme.surface }]}>
            <Text style={[styles.condText, { color: theme.textSecondary }]}>
              {skyEmoji(weather.sky)} {weather.tempF}\u00B0F \u00B7
              {' '}{'\uD83D\uDCA8'} {weather.wind.speed}mph {weather.wind.direction} \u00B7
              {' '}{'\uD83D\uDCCA'} {weather.pressure.value}"
              {weather.pressure.trend === 'falling' ? '\u2193' : weather.pressure.trend === 'rising' ? '\u2191' : ''}
            </Text>
          </View>
        )}

        {/* Weather trend insights */}
        {weatherTrend && (
          <View style={[styles.trendCard, { backgroundColor: theme.card }]}>
            <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>CONDITIONS ANALYSIS</Text>
            <Text style={[styles.trendScore, { color: Colors.copper[500] }]}>
              {'\u2B50'.repeat(weatherTrend.overallScore.rating)} {weatherTrend.overallScore.label}
            </Text>
            <Text style={[styles.trendSummary, { color: theme.text }]}>
              {weatherTrend.overallScore.summary}
            </Text>

            {weatherTrend.rain.pattern !== 'normal' && (
              <View style={styles.trendRow}>
                <Text style={[styles.trendIcon]}>{'\uD83C\uDF27\uFE0F'}</Text>
                <Text style={[styles.trendDetail, { color: theme.textSecondary }]}>
                  {weatherTrend.rain.fishingImpact}
                </Text>
              </View>
            )}
            {weatherTrend.frontalAnalysis.status !== 'stable' && (
              <View style={styles.trendRow}>
                <Text style={[styles.trendIcon]}>{'\uD83C\uDF2A\uFE0F'}</Text>
                <Text style={[styles.trendDetail, { color: theme.textSecondary }]}>
                  {weatherTrend.frontalAnalysis.fishingImpact}
                </Text>
              </View>
            )}

            {weatherTrend.bestFishingWindows.today.length > 0 && (
              <View style={[styles.windowCard, { backgroundColor: theme.surfaceAlt }]}>
                <Text style={[styles.windowLabel, { color: theme.textMuted }]}>BEST WINDOW TODAY</Text>
                <Text style={[styles.windowTime, { color: Colors.copper[500] }]}>
                  {weatherTrend.bestFishingWindows.today[0].start} \u2014 {weatherTrend.bestFishingWindows.today[0].end}
                </Text>
                <Text style={[styles.windowReason, { color: theme.textSecondary }]}>
                  {weatherTrend.bestFishingWindows.today[0].reason}
                </Text>
              </View>
            )}
          </View>
        )}

        {/* Heat Map Zones */}
        {zones.length > 0 && (
          <>
            <Text style={[styles.sectionLabel, { color: theme.textMuted, marginTop: 16, marginBottom: 8 }]}>
              FISH HEAT MAP
            </Text>
            <Text style={[styles.heatNote, { color: theme.textSecondary }]}>
              Based on wind, depth, season, weather trends, and structure
            </Text>

            {zones.filter(z => z.score >= 40).map((zone, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.zoneCard, { backgroundColor: theme.card }]}
                onPress={() => {
                  Haptics.selectionAsync();
                  setSelectedZone(selectedZone === zone ? null : zone);
                }}
              >
                <View style={styles.zoneHeader}>
                  <View
                    style={[styles.zoneDot, { backgroundColor: getHeatMapColor(zone.score) }]}
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={[styles.zoneLabel, { color: theme.text }]}>
                      Zone {i + 1} \u2014 {getHeatMapLabel(zone.score)}
                    </Text>
                    <Text style={[styles.zoneScore, { color: theme.textSecondary }]}>
                      Score: {zone.score}/100
                    </Text>
                  </View>
                  <Ionicons
                    name={selectedZone === zone ? 'chevron-up' : 'chevron-down'}
                    size={16}
                    color={theme.textMuted}
                  />
                </View>

                {selectedZone === zone && (
                  <View style={styles.zoneDetails}>
                    {zone.reasons.map((reason, j) => (
                      <Text key={j} style={[styles.zoneReason, { color: theme.text }]}>
                        {'\u2705'} {reason}
                      </Text>
                    ))}
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </>
        )}

        {/* CTA to The Guide */}
        <TouchableOpacity
          style={[styles.guideCta, { backgroundColor: Colors.copper[500] }]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.push('/(tabs)/guide');
          }}
        >
          <Text style={styles.guideCtaText}>Get Full Setup from The Guide \u2192</Text>
        </TouchableOpacity>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  loadingText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 16, textAlign: 'center', paddingHorizontal: 32 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12, paddingHorizontal: 32 },
  emptyTitle: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 22 },
  emptyText: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, textAlign: 'center' },
  retryBtn: { borderRadius: 10, paddingHorizontal: 24, paddingVertical: 12, marginTop: 8 },
  retryText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 16 },
  title: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 28, marginBottom: 12 },
  waterCard: {
    borderRadius: 12,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  waterName: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
  waterType: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, textTransform: 'capitalize' },
  condBar: { borderRadius: 10, padding: 10, marginBottom: 8 },
  condText: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, textAlign: 'center' },
  trendCard: { borderRadius: 14, padding: 16, marginBottom: 8 },
  sectionLabel: {
    fontFamily: 'BarlowCondensed_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  trendScore: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 20, marginBottom: 4 },
  trendSummary: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 15, lineHeight: 22, marginBottom: 10 },
  trendRow: { flexDirection: 'row', gap: 8, marginBottom: 6, alignItems: 'flex-start' },
  trendIcon: { fontSize: 16, marginTop: 2 },
  trendDetail: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, lineHeight: 20, flex: 1 },
  windowCard: { borderRadius: 10, padding: 12, marginTop: 8 },
  windowLabel: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 11, letterSpacing: 1, marginBottom: 4 },
  windowTime: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
  windowReason: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 2 },
  heatNote: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginBottom: 8 },
  zoneCard: { borderRadius: 12, padding: 14, marginBottom: 6 },
  zoneHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  zoneDot: { width: 14, height: 14, borderRadius: 7 },
  zoneLabel: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 16 },
  zoneScore: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13 },
  zoneDetails: { marginTop: 10, paddingLeft: 24, gap: 4 },
  zoneReason: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, lineHeight: 20 },
  guideCta: { borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginTop: 16 },
  guideCtaText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
});
