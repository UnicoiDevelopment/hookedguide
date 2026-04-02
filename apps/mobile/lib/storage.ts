import AsyncStorage from '@react-native-async-storage/async-storage';

// ---- Fishing Log ----

export interface FishingLogEntry {
  id: string;
  timestamp: string;
  species: string;
  weight?: { lbs: number; oz: number };
  length?: number;
  photo?: string;
  location: { lat: number; lon: number; name: string; state: string };
  conditions: {
    waterTemp?: number;
    airTemp: number;
    sky: string;
    wind: string;
    windDirection: string;
    pressure: number;
    pressureTrend: string;
    moonPhase: string;
  };
  setup: {
    technique?: string;
    lure?: string;
    color?: string;
    lineType?: string;
    lineWeight?: string;
  };
  notes?: string;
  guideRecommendation?: string;
}

const LOG_KEY = 'fishing_log';
const PREFS_KEY = 'user_preferences';
const SAVED_RIGS_KEY = 'saved_rigs';
const SAVED_RECS_KEY = 'saved_recommendations';

export async function getLogEntries(): Promise<FishingLogEntry[]> {
  try {
    const data = await AsyncStorage.getItem(LOG_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export async function saveLogEntry(entry: FishingLogEntry): Promise<void> {
  const entries = await getLogEntries();
  entries.unshift(entry);
  await AsyncStorage.setItem(LOG_KEY, JSON.stringify(entries));
}

export async function deleteLogEntry(id: string): Promise<void> {
  const entries = await getLogEntries();
  await AsyncStorage.setItem(LOG_KEY, JSON.stringify(entries.filter(e => e.id !== id)));
}

// ---- Saved Rigs ----

export interface SavedRig {
  id: string;
  name: string;
  species: string;
  reelType: string;
  tier: string;
  rod: string;
  reel: string;
  line: string;
  hook: string;
  weight: string;
  lure: string;
  createdAt: string;
}

export async function getSavedRigs(): Promise<SavedRig[]> {
  try {
    const data = await AsyncStorage.getItem(SAVED_RIGS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export async function saveRig(rig: SavedRig): Promise<void> {
  const rigs = await getSavedRigs();
  rigs.unshift(rig);
  await AsyncStorage.setItem(SAVED_RIGS_KEY, JSON.stringify(rigs));
}

// ---- User Preferences ----

export interface UserPreferences {
  favoriteSpecies: string[];
  homeState: string;
  notificationsEnabled: boolean;
  conditionsAlertEnabled: boolean;
  goldenHourReminderEnabled: boolean;
  solunarAlertEnabled: boolean;
  darkMode: 'system' | 'light' | 'dark';
  units: 'imperial' | 'metric';
}

const defaultPrefs: UserPreferences = {
  favoriteSpecies: [],
  homeState: '',
  notificationsEnabled: false,
  conditionsAlertEnabled: false,
  goldenHourReminderEnabled: false,
  solunarAlertEnabled: false,
  darkMode: 'system',
  units: 'imperial',
};

export async function getPreferences(): Promise<UserPreferences> {
  try {
    const data = await AsyncStorage.getItem(PREFS_KEY);
    return data ? { ...defaultPrefs, ...JSON.parse(data) } : defaultPrefs;
  } catch {
    return defaultPrefs;
  }
}

export async function savePreferences(prefs: Partial<UserPreferences>): Promise<void> {
  const current = await getPreferences();
  await AsyncStorage.setItem(PREFS_KEY, JSON.stringify({ ...current, ...prefs }));
}

// ---- Saved Recommendations ----

export async function getSavedRecommendations(): Promise<any[]> {
  try {
    const data = await AsyncStorage.getItem(SAVED_RECS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export async function saveRecommendation(rec: any): Promise<void> {
  const recs = await getSavedRecommendations();
  recs.unshift(rec);
  await AsyncStorage.setItem(SAVED_RECS_KEY, JSON.stringify(recs));
}
