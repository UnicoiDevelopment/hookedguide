import { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { getCurrentLocation, type LocationData, stateNameToSlug } from '@/lib/location';
import { getCurrentWeather, type WeatherData, skyEmoji, skyLabel } from '@/lib/weather';
import { getNearestWaterTemp } from '@/lib/water-temp';
import { getMoonPhase } from '@/lib/moon';
import { allSpecies } from '../../../../data/species';
import type {
  WaterBodyType,
  WaterClarity,
  CoverType,
  DepthAvailable,
  SkyCondition,
  WindSpeed,
  WindDirection,
  FrontalSystem,
  PressureTrend,
  DetailedRecommendationInput,
} from '../../../../data/types';
import { getDetailedRecommendation } from '../../../../data/recommendations/detailed-engine';
import { getGuideNarrative } from '@/lib/guide-api';

type Step = 'species' | 'water' | 'loading';

const waterTypes: { value: WaterBodyType; label: string; icon: string }[] = [
  { value: 'small-lake', label: 'Lake', icon: '\uD83C\uDFDE\uFE0F' },
  { value: 'small-river', label: 'River', icon: '\uD83C\uDF0A' },
  { value: 'pond', label: 'Pond', icon: '\uD83D\uDCA7' },
  { value: 'large-reservoir', label: 'Reservoir', icon: '\uD83C\uDF0A' },
  { value: 'saltwater-inshore', label: 'Inshore', icon: '\uD83C\uDF0A' },
  { value: 'saltwater-offshore', label: 'Offshore', icon: '\u26F5' },
];

const clarityOptions: { value: WaterClarity; label: string }[] = [
  { value: 'crystal-clear', label: 'Crystal' },
  { value: 'clear', label: 'Clear' },
  { value: 'stained', label: 'Stained' },
  { value: 'muddy', label: 'Muddy' },
];

const coverOptions: { value: CoverType; label: string; icon: string }[] = [
  { value: 'grass', label: 'Grass', icon: '\uD83C\uDF3F' },
  { value: 'wood', label: 'Wood', icon: '\uD83E\uDEB5' },
  { value: 'rock', label: 'Rock', icon: '\uD83E\uDEA8' },
  { value: 'docks', label: 'Docks', icon: '\u2693' },
  { value: 'open-water', label: 'Open', icon: '\uD83C\uDF0A' },
  { value: 'mixed', label: 'Mixed', icon: '\uD83D\uDD00' },
];

const depthOptions: { value: DepthAvailable; label: string }[] = [
  { value: 'shallow', label: 'Shallow (< 10ft)' },
  { value: 'medium', label: 'Medium (10-25ft)' },
  { value: 'deep', label: 'Deep (25ft+)' },
];

export default function GuideScreen() {
  const { theme } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams<{ species?: string }>();
  const [step, setStep] = useState<Step>('species');
  const [search, setSearch] = useState('');

  // Auto-detected
  const [location, setLocation] = useState<LocationData | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [autoWaterTemp, setAutoWaterTemp] = useState<number | null>(null);

  // User selections
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(
    params.species || null
  );
  const [waterType, setWaterType] = useState<WaterBodyType>('small-lake');
  const [clarity, setClarity] = useState<WaterClarity>('clear');
  const [cover, setCover] = useState<CoverType>('mixed');
  const [depth, setDepth] = useState<DepthAvailable>('medium');
  const [waterTemp, setWaterTemp] = useState<number>(65);

  useEffect(() => {
    (async () => {
      try {
        const loc = await getCurrentLocation();
        setLocation(loc);
        if (loc) {
          const [w, wt] = await Promise.all([
            getCurrentWeather(loc.latitude, loc.longitude),
            getNearestWaterTemp(loc.latitude, loc.longitude),
          ]);
          setWeather(w);
          if (wt) {
            setAutoWaterTemp(wt.tempF);
            setWaterTemp(Math.round(wt.tempF));
          }
        }
      } catch {
        // Graceful degradation — Guide works without auto-detection
      }
    })();
  }, []);

  useEffect(() => {
    if (params.species) {
      setSelectedSpecies(params.species);
      setStep('water');
    }
  }, [params.species]);

  const filteredSpecies = allSpecies.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSpeciesSelect = (slug: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedSpecies(slug);
    setStep('water');
  };

  const [submitting, setSubmitting] = useState(false);

  const handleAskGuide = async () => {
    if (!selectedSpecies || submitting) return;
    setSubmitting(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setStep('loading');

    try {
      const now = new Date();
      const moon = getMoonPhase(now);

      const input: DetailedRecommendationInput = {
        species: selectedSpecies,
        waterTemp,
        state: location ? stateNameToSlug(location.state) : undefined,
        waterBody: {
          type: waterType,
          clarity,
          coverType: cover,
          depthAvailable: depth,
        },
        month: now.getMonth() + 1,
        hourOfDay: now.getHours(),
        weather: {
          sky: weather?.sky || 'partly-cloudy',
          wind: weather?.wind.category || 'light',
          windDirection: weather?.wind.direction || 'S',
          frontalSystem: weather?.frontalSystem || 'stable',
          pressureTrend: weather?.pressure.trend || 'steady',
        },
        moonPhase: moon.phase,
        date: now.toISOString().split('T')[0],
      };

      const recommendation = getDetailedRecommendation(input);
      const narrative = await getGuideNarrative(input, recommendation);

      router.push({
        pathname: '/guide/results',
        params: {
          data: JSON.stringify({ input, recommendation, narrative }),
        },
      });
    } catch {
      setStep('water');
    } finally {
      setSubmitting(false);
    }
  };

  const conditionsBar = weather ? (
    <View style={[styles.conditionsBar, { backgroundColor: theme.surface }]}>
      {location && (
        <Text style={[styles.condBarItem, { color: theme.textSecondary }]}>
          {'\uD83D\uDCCD'} {location.city}
        </Text>
      )}
      <Text style={[styles.condBarItem, { color: theme.textSecondary }]}>
        {skyEmoji(weather.sky)} {weather.tempF}\u00B0F
      </Text>
      <Text style={[styles.condBarItem, { color: theme.textSecondary }]}>
        {'\uD83D\uDCA8'} {weather.wind.speed}mph
      </Text>
      <Text style={[styles.condBarItem, { color: theme.textSecondary }]}>
        {'\uD83D\uDCCA'} {weather.pressure.value}&quot;
      </Text>
    </View>
  ) : null;

  if (step === 'loading') {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.copper[500]} />
          <Text style={[styles.loadingText, { color: theme.text }]}>
            Your guide is reading the conditions...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (step === 'water') {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        {conditionsBar}
        <ScrollView contentContainerStyle={styles.scroll}>
          <TouchableOpacity onPress={() => setStep('species')} style={styles.backRow}>
            <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
            <Text style={[styles.backText, { color: Colors.copper[500] }]}>
              Change species
            </Text>
          </TouchableOpacity>

          <Text style={[styles.stepTitle, { color: theme.text }]}>Water Details</Text>
          <Text style={[styles.stepSub, { color: theme.textSecondary }]}>
            Fishing for{' '}
            <Text style={{ color: Colors.copper[500], fontFamily: 'BarlowCondensed_700Bold' }}>
              {allSpecies.find((s) => s.slug === selectedSpecies)?.name}
            </Text>
          </Text>

          {/* Water Temp */}
          <Text style={[styles.fieldLabel, { color: theme.textMuted }]}>
            WATER TEMPERATURE
            {autoWaterTemp ? ` (auto: ${autoWaterTemp}\u00B0F)` : ''}
          </Text>
          <View style={styles.tempRow}>
            <TouchableOpacity
              onPress={() => setWaterTemp((t) => Math.max(30, t - 5))}
              style={[styles.tempBtn, { backgroundColor: theme.surface }]}
            >
              <Text style={[styles.tempBtnText, { color: theme.text }]}>-5</Text>
            </TouchableOpacity>
            <Text style={[styles.tempValue, { color: theme.text }]}>
              {waterTemp}\u00B0F
            </Text>
            <TouchableOpacity
              onPress={() => setWaterTemp((t) => Math.min(95, t + 5))}
              style={[styles.tempBtn, { backgroundColor: theme.surface }]}
            >
              <Text style={[styles.tempBtnText, { color: theme.text }]}>+5</Text>
            </TouchableOpacity>
          </View>

          {/* Water Type */}
          <Text style={[styles.fieldLabel, { color: theme.textMuted }]}>WATER TYPE</Text>
          <View style={styles.optionGrid}>
            {waterTypes.map((wt) => (
              <TouchableOpacity
                key={wt.value}
                style={[
                  styles.optionCard,
                  { backgroundColor: theme.card },
                  waterType === wt.value && { borderColor: Colors.copper[500], borderWidth: 2 },
                ]}
                onPress={() => {
                  Haptics.selectionAsync();
                  setWaterType(wt.value);
                }}
              >
                <Text style={styles.optionIcon}>{wt.icon}</Text>
                <Text style={[styles.optionLabel, { color: theme.text }]}>{wt.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Clarity */}
          <Text style={[styles.fieldLabel, { color: theme.textMuted }]}>WATER CLARITY</Text>
          <View style={styles.chipRow}>
            {clarityOptions.map((c) => (
              <TouchableOpacity
                key={c.value}
                style={[
                  styles.chip,
                  { backgroundColor: theme.card },
                  clarity === c.value && { backgroundColor: Colors.copper[500] },
                ]}
                onPress={() => {
                  Haptics.selectionAsync();
                  setClarity(c.value);
                }}
              >
                <Text
                  style={[
                    styles.chipText,
                    { color: clarity === c.value ? '#fff' : theme.text },
                  ]}
                >
                  {c.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Cover */}
          <Text style={[styles.fieldLabel, { color: theme.textMuted }]}>COVER TYPE</Text>
          <View style={styles.optionGrid}>
            {coverOptions.map((co) => (
              <TouchableOpacity
                key={co.value}
                style={[
                  styles.optionCard,
                  { backgroundColor: theme.card },
                  cover === co.value && { borderColor: Colors.copper[500], borderWidth: 2 },
                ]}
                onPress={() => {
                  Haptics.selectionAsync();
                  setCover(co.value);
                }}
              >
                <Text style={styles.optionIcon}>{co.icon}</Text>
                <Text style={[styles.optionLabel, { color: theme.text }]}>{co.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Depth */}
          <Text style={[styles.fieldLabel, { color: theme.textMuted }]}>DEPTH AVAILABLE</Text>
          <View style={styles.chipRow}>
            {depthOptions.map((d) => (
              <TouchableOpacity
                key={d.value}
                style={[
                  styles.chip,
                  { backgroundColor: theme.card },
                  depth === d.value && { backgroundColor: Colors.copper[500] },
                ]}
                onPress={() => {
                  Haptics.selectionAsync();
                  setDepth(d.value);
                }}
              >
                <Text
                  style={[
                    styles.chipText,
                    { color: depth === d.value ? '#fff' : theme.text },
                  ]}
                >
                  {d.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Ask Button */}
          <TouchableOpacity
            style={[styles.askButton, { backgroundColor: Colors.copper[500] }]}
            onPress={handleAskGuide}
          >
            <Text style={styles.askButtonText}>Ask the Guide</Text>
          </TouchableOpacity>

          <View style={{ height: 40 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  // Step: species selection
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      {conditionsBar}
      <View style={styles.scroll}>
        <Text style={[styles.stepTitle, { color: theme.text }]}>What are you after?</Text>

        <View style={[styles.searchBox, { backgroundColor: theme.card }]}>
          <Ionicons name="search" size={18} color={theme.textMuted} />
          <TextInput
            style={[styles.searchInput, { color: theme.text }]}
            placeholder="Search species..."
            placeholderTextColor={theme.textMuted}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <ScrollView contentContainerStyle={styles.speciesList}>
          {filteredSpecies.map((species) => (
            <TouchableOpacity
              key={species.slug}
              style={[styles.speciesRow, { backgroundColor: theme.card }]}
              onPress={() => handleSpeciesSelect(species.slug)}
            >
              <View>
                <Text style={[styles.speciesRowName, { color: theme.text }]}>
                  {species.name}
                </Text>
                <Text style={[styles.speciesRowType, { color: theme.textSecondary }]}>
                  {species.type} \u00B7 Difficulty {species.difficultyRating}/5
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color={theme.textMuted} />
            </TouchableOpacity>
          ))}
          <View style={{ height: 100 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { flex: 1, padding: 16 },
  conditionsBar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  condBarItem: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13 },
  backRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 8 },
  backText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  stepTitle: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 28, marginBottom: 4 },
  stepSub: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 16, marginBottom: 16 },
  fieldLabel: {
    fontFamily: 'BarlowCondensed_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.5,
    marginBottom: 8,
    marginTop: 16,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
    marginBottom: 12,
  },
  searchInput: { flex: 1, fontFamily: 'BarlowCondensed_400Regular', fontSize: 16 },
  speciesList: { gap: 6 },
  speciesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
  speciesRowName: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 17 },
  speciesRowType: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 2 },
  tempRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 16 },
  tempBtn: { borderRadius: 8, paddingHorizontal: 16, paddingVertical: 8 },
  tempBtnText: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
  tempValue: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 32, minWidth: 80, textAlign: 'center' },
  optionGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  optionCard: { borderRadius: 10, padding: 12, alignItems: 'center', width: '30%', flexGrow: 1 },
  optionIcon: { fontSize: 22, marginBottom: 4 },
  optionLabel: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 13 },
  chipRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { borderRadius: 20, paddingHorizontal: 16, paddingVertical: 8 },
  chipText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  askButton: { borderRadius: 14, paddingVertical: 16, alignItems: 'center', marginTop: 24 },
  askButtonText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 20 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  loadingText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 18 },
});
