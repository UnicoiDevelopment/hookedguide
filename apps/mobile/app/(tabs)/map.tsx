import { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import MapView, { Circle, Marker } from 'react-native-maps';
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

function generateZoneCoordinates(centerLat: number, centerLng: number) {
  const directions = [
    { name: 'N', bearing: 0 },
    { name: 'NE', bearing: 45 },
    { name: 'E', bearing: 90 },
    { name: 'SE', bearing: 135 },
    { name: 'S', bearing: 180 },
    { name: 'SW', bearing: 225 },
    { name: 'W', bearing: 270 },
    { name: 'NW', bearing: 315 },
  ];
  const distances = [0.005, 0.012, 0.02];

  return directions.flatMap((dir, _i) =>
    distances.map((_dist, j) => ({
      id: `${dir.name}-${j}`,
      lat: centerLat + distances[j] * Math.cos((dir.bearing * Math.PI) / 180),
      lng: centerLng + distances[j] * Math.sin((dir.bearing * Math.PI) / 180),
      radius: 150 + j * 100,
    }))
  );
}

function getHeatFill(score: number): string {
  if (score >= 80) return 'rgba(255, 0, 0, 0.35)';
  if (score >= 60) return 'rgba(255, 140, 0, 0.30)';
  if (score >= 40) return 'rgba(255, 255, 0, 0.25)';
  return 'rgba(0, 100, 255, 0.15)';
}

function getHeatStroke(score: number): string {
  if (score >= 80) return 'rgba(255, 0, 0, 0.6)';
  if (score >= 60) return 'rgba(255, 140, 0, 0.5)';
  if (score >= 40) return 'rgba(255, 255, 0, 0.4)';
  return 'rgba(0, 100, 255, 0.3)';
}

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

  // Generate map overlay zones by combining heat map scores with coordinates
  const heatZones = location
    ? generateZoneCoordinates(location.latitude, location.longitude).map((coord, i) => {
        const zone = zones[i % zones.length];
        return {
          ...coord,
          score: zone?.score ?? 30,
          label: zone ? getHeatMapLabel(zone.score) : 'Low',
          reasons: zone?.reasons ?? [],
        };
      })
    : [];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Conditions bar at top */}
      {weather && (
        <View style={[styles.condBar, { backgroundColor: theme.surface }]}>
          <Text style={[styles.condText, { color: theme.textSecondary }]}>
            {skyEmoji(weather.sky)} {weather.tempF}°F ·
            {' '}{'\uD83D\uDCA8'} {weather.wind.speed}mph {weather.wind.direction} ·
            {' '}{'\uD83D\uDCCA'} {weather.pressure.value}"
            {weather.pressure.trend === 'falling' ? '↓' : weather.pressure.trend === 'rising' ? '↑' : ''}
          </Text>
        </View>
      )}

      {/* Water body info */}
      {waterBody && (
        <View style={[styles.waterCard, { backgroundColor: theme.card }]}>
          <Ionicons name="water" size={20} color={Colors.copper[500]} />
          <View style={{ flex: 1 }}>
            <Text style={[styles.waterName, { color: theme.text }]}>{waterBody.name}</Text>
            <Text style={[styles.waterType, { color: theme.textSecondary }]}>
              {waterBody.type} · {Math.round(waterBody.distanceFromUser)}m away
            </Text>
          </View>
        </View>
      )}

      {/* Map with heat zones */}
      {location && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          showsUserLocation
          showsMyLocationButton
        >
          {heatZones.map((zone) => (
            <Circle
              key={zone.id}
              center={{ latitude: zone.lat, longitude: zone.lng }}
              radius={zone.radius}
              fillColor={getHeatFill(zone.score)}
              strokeColor={getHeatStroke(zone.score)}
              strokeWidth={1}
            />
          ))}
          {heatZones
            .filter((z) => z.score >= 60)
            .map((zone) => (
              <Marker
                key={`marker-${zone.id}`}
                coordinate={{ latitude: zone.lat, longitude: zone.lng }}
                title={zone.label}
                description={`Score: ${zone.score}/100`}
                onPress={() => {
                  Haptics.selectionAsync();
                  const matched = zones.find((z) => z.score === zone.score) ?? null;
                  setSelectedZone(selectedZone === matched ? null : matched);
                }}
              />
            ))}
        </MapView>
      )}

      {!location && !waterBody && (
        <View style={[styles.waterCard, { backgroundColor: theme.card, margin: 16 }]}>
          <Ionicons name="help-circle-outline" size={20} color={theme.textMuted} />
          <Text style={[styles.waterType, { color: theme.textSecondary }]}>
            No water body detected nearby. Move closer to a lake or river.
          </Text>
        </View>
      )}

      {/* Selected zone detail modal */}
      {selectedZone && (
        <View style={[styles.zoneDetailOverlay, { backgroundColor: theme.card }]}>
          <View style={styles.zoneHeader}>
            <View style={[styles.zoneDot, { backgroundColor: getHeatMapColor(selectedZone.score) }]} />
            <View style={{ flex: 1 }}>
              <Text style={[styles.zoneLabel, { color: theme.text }]}>
                {getHeatMapLabel(selectedZone.score)}
              </Text>
              <Text style={[styles.zoneScore, { color: theme.textSecondary }]}>
                Score: {selectedZone.score}/100
              </Text>
            </View>
            <TouchableOpacity onPress={() => setSelectedZone(null)}>
              <Ionicons name="close" size={20} color={theme.textMuted} />
            </TouchableOpacity>
          </View>
          <View style={styles.zoneDetails}>
            {selectedZone.reasons.map((reason, j) => (
              <Text key={j} style={[styles.zoneReason, { color: theme.text }]}>
                {'\u2705'} {reason}
              </Text>
            ))}
          </View>
        </View>
      )}

      {/* CTA to The Guide */}
      <View style={{ padding: 16, backgroundColor: theme.background }}>
        <TouchableOpacity
          style={[styles.guideCta, { backgroundColor: Colors.copper[500] }]}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            router.push('/(tabs)/guide');
          }}
        >
          <Text style={styles.guideCtaText}>Get Full Setup from The Guide →</Text>
        </TouchableOpacity>
      </View>
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
  zoneDetailOverlay: {
    position: 'absolute',
    bottom: 80,
    left: 16,
    right: 16,
    borderRadius: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  zoneHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  zoneDot: { width: 14, height: 14, borderRadius: 7 },
  zoneLabel: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 16 },
  zoneScore: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13 },
  zoneDetails: { marginTop: 10, paddingLeft: 24, gap: 4 },
  zoneReason: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, lineHeight: 20 },
  guideCta: { borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginTop: 16 },
  guideCtaText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
});
