import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import * as ImagePicker from 'expo-image-picker';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { getCurrentLocation } from '@/lib/location';
import { getCurrentWeather } from '@/lib/weather';
import { getMoonPhase } from '@/lib/moon';
import { saveLogEntry, type FishingLogEntry } from '@/lib/storage';
import { allSpecies } from '../../../../data/species';

export default function NewLogEntry() {
  const { theme } = useTheme();
  const router = useRouter();

  const [species, setSpecies] = useState('');
  const [lbs, setLbs] = useState('');
  const [oz, setOz] = useState('');
  const [length, setLength] = useState('');
  const [technique, setTechnique] = useState('');
  const [lure, setLure] = useState('');
  const [color, setColor] = useState('');
  const [notes, setNotes] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [showSpecies, setShowSpecies] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.7,
    });
    if (!result.canceled && result.assets[0]) {
      setPhoto(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Camera permission needed');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({ quality: 0.7 });
    if (!result.canceled && result.assets[0]) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!species) {
      Alert.alert('Select a species first');
      return;
    }
    setSaving(true);

    try {
      const loc = await getCurrentLocation();
      const weather = loc
        ? await getCurrentWeather(loc.latitude, loc.longitude)
        : null;
      const moon = getMoonPhase();

      const entry: FishingLogEntry = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        timestamp: new Date().toISOString(),
        species,
        weight: lbs || oz ? { lbs: parseInt(lbs) || 0, oz: parseInt(oz) || 0 } : undefined,
        length: length ? parseFloat(length) : undefined,
        photo: photo || undefined,
        location: {
          lat: loc?.latitude || 0,
          lon: loc?.longitude || 0,
          name: loc ? `${loc.city}, ${loc.state}` : 'Unknown',
          state: loc?.state || '',
        },
        conditions: {
          waterTemp: undefined,
          airTemp: weather?.tempF || 0,
          sky: weather?.sky || 'clear',
          wind: weather?.wind.category || 'calm',
          windDirection: weather?.wind.direction || 'N',
          pressure: weather?.pressure.value || 0,
          pressureTrend: weather?.pressure.trend || 'steady',
          moonPhase: moon.phase,
        },
        setup: {
          technique: technique || undefined,
          lure: lure || undefined,
          color: color || undefined,
        },
        notes: notes || undefined,
      };

      await saveLogEntry(entry);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      router.back();
    } catch {
      Alert.alert('Error', 'Failed to save catch. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={[styles.cancelText, { color: Colors.copper[500] }]}>Cancel</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.text }]}>Log a Catch</Text>
        <TouchableOpacity onPress={handleSave} disabled={saving}>
          <Text style={[styles.saveText, { color: Colors.copper[500], opacity: saving ? 0.5 : 1 }]}>
            {saving ? 'Saving...' : 'Save'}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} keyboardDismissMode="on-drag" keyboardShouldPersistTaps="handled">
        {/* Photo */}
        <View style={styles.photoRow}>
          <TouchableOpacity style={[styles.photoBtn, { backgroundColor: theme.card }]} onPress={takePhoto}>
            <Ionicons name="camera-outline" size={24} color={Colors.copper[500]} />
            <Text style={[styles.photoBtnText, { color: theme.text }]}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.photoBtn, { backgroundColor: theme.card }]} onPress={pickImage}>
            <Ionicons name="images-outline" size={24} color={Colors.copper[500]} />
            <Text style={[styles.photoBtnText, { color: theme.text }]}>Gallery</Text>
          </TouchableOpacity>
        </View>
        {photo && (
          <Text style={[styles.photoAdded, { color: Colors.copper[500] }]}>
            {'\u2713'} Photo added
          </Text>
        )}

        {/* Species */}
        <Text style={[styles.label, { color: theme.textMuted }]}>SPECIES</Text>
        <TouchableOpacity
          style={[styles.input, { backgroundColor: theme.card }]}
          onPress={() => setShowSpecies(!showSpecies)}
        >
          <Text style={{ color: species ? theme.text : theme.textMuted, fontFamily: 'BarlowCondensed_500Medium', fontSize: 16, textTransform: 'capitalize' }}>
            {species ? species.replace(/-/g, ' ') : 'Select species...'}
          </Text>
          <Ionicons name="chevron-down" size={16} color={theme.textMuted} />
        </TouchableOpacity>
        {showSpecies && (
          <View style={[styles.speciesPicker, { backgroundColor: theme.card }]}>
            {allSpecies.map((sp) => (
              <TouchableOpacity
                key={sp.slug}
                style={styles.speciesPickerRow}
                onPress={() => {
                  setSpecies(sp.slug);
                  setShowSpecies(false);
                  Haptics.selectionAsync();
                }}
              >
                <Text style={[styles.speciesPickerText, { color: theme.text }]}>
                  {sp.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Weight & Length */}
        <Text style={[styles.label, { color: theme.textMuted }]}>WEIGHT</Text>
        <View style={styles.weightRow}>
          <TextInput
            style={[styles.weightInput, { backgroundColor: theme.card, color: theme.text }]}
            placeholder="lbs"
            placeholderTextColor={theme.textMuted}
            keyboardType="numeric"
            value={lbs}
            onChangeText={setLbs}
          />
          <TextInput
            style={[styles.weightInput, { backgroundColor: theme.card, color: theme.text }]}
            placeholder="oz"
            placeholderTextColor={theme.textMuted}
            keyboardType="numeric"
            value={oz}
            onChangeText={setOz}
          />
        </View>

        <Text style={[styles.label, { color: theme.textMuted }]}>LENGTH (inches)</Text>
        <TextInput
          style={[styles.input, { backgroundColor: theme.card, color: theme.text }]}
          placeholder="e.g. 18.5"
          placeholderTextColor={theme.textMuted}
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
        />

        {/* Setup */}
        <Text style={[styles.label, { color: theme.textMuted }]}>WHAT DID YOU CATCH IT ON?</Text>
        <TextInput
          style={[styles.input, { backgroundColor: theme.card, color: theme.text }]}
          placeholder="Technique (e.g. Texas Rig)"
          placeholderTextColor={theme.textMuted}
          value={technique}
          onChangeText={setTechnique}
        />
        <TextInput
          style={[styles.input, { backgroundColor: theme.card, color: theme.text, marginTop: 6 }]}
          placeholder="Lure/bait"
          placeholderTextColor={theme.textMuted}
          value={lure}
          onChangeText={setLure}
        />
        <TextInput
          style={[styles.input, { backgroundColor: theme.card, color: theme.text, marginTop: 6 }]}
          placeholder="Color"
          placeholderTextColor={theme.textMuted}
          value={color}
          onChangeText={setColor}
        />

        {/* Notes */}
        <Text style={[styles.label, { color: theme.textMuted }]}>NOTES</Text>
        <TextInput
          style={[styles.input, styles.notesInput, { backgroundColor: theme.card, color: theme.text }]}
          placeholder="Any notes about this catch..."
          placeholderTextColor={theme.textMuted}
          multiline
          value={notes}
          onChangeText={setNotes}
        />

        <View style={{ height: 60 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  cancelText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 16 },
  headerTitle: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 18 },
  saveText: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 16 },
  scroll: { padding: 16 },
  photoRow: { flexDirection: 'row', gap: 10, marginBottom: 8 },
  photoBtn: { flex: 1, borderRadius: 12, padding: 16, alignItems: 'center', gap: 4 },
  photoBtnText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  photoAdded: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14, textAlign: 'center', marginBottom: 8 },
  label: {
    fontFamily: 'BarlowCondensed_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.5,
    marginTop: 16,
    marginBottom: 6,
  },
  input: {
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: 'BarlowCondensed_500Medium',
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notesInput: { minHeight: 80, textAlignVertical: 'top' },
  weightRow: { flexDirection: 'row', gap: 10 },
  weightInput: {
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: 'BarlowCondensed_500Medium',
    fontSize: 16,
  },
  speciesPicker: { borderRadius: 10, maxHeight: 200, marginBottom: 8 },
  speciesPickerRow: { paddingHorizontal: 14, paddingVertical: 10 },
  speciesPickerText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 16 },
});
