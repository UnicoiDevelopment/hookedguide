import * as StoreReview from 'expo-store-review';
import AsyncStorage from '@react-native-async-storage/async-storage';

const REVIEW_KEY = 'hooked_review_state';

interface ReviewState {
  guideUses: number;
  rigsBuilt: number;
  hasPrompted: boolean;
  lastPromptDate: string | null;
}

const defaultState: ReviewState = {
  guideUses: 0,
  rigsBuilt: 0,
  hasPrompted: false,
  lastPromptDate: null,
};

async function getState(): Promise<ReviewState> {
  const raw = await AsyncStorage.getItem(REVIEW_KEY);
  return raw ? JSON.parse(raw) : defaultState;
}

async function setState(state: ReviewState) {
  await AsyncStorage.setItem(REVIEW_KEY, JSON.stringify(state));
}

export async function trackGuideUse() {
  const state = await getState();
  state.guideUses++;
  await setState(state);
  await maybePromptReview(state);
}

export async function trackRigBuild() {
  const state = await getState();
  state.rigsBuilt++;
  await setState(state);
  await maybePromptReview(state);
}

async function maybePromptReview(state: ReviewState) {
  if (state.lastPromptDate) {
    const daysSince = (Date.now() - new Date(state.lastPromptDate).getTime()) / (1000 * 60 * 60 * 24);
    if (daysSince < 90) return;
  }

  const shouldPrompt = state.guideUses >= 3 || state.rigsBuilt >= 2;
  if (!shouldPrompt) return;

  const available = await StoreReview.isAvailableAsync();
  if (!available) return;

  await StoreReview.requestReview();
  state.hasPrompted = true;
  state.lastPromptDate = new Date().toISOString();
  state.guideUses = 0;
  state.rigsBuilt = 0;
  await setState(state);
}
