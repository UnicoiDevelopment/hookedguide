import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { saveRecommendation } from '@/lib/storage';
import { allSpecies } from '../../../../data/species';

export default function GuideResults() {
  const { theme } = useTheme();
  const router = useRouter();
  const params = useLocalSearchParams<{ data: string }>();
  const [showTechnical, setShowTechnical] = useState(false);
  const [showAlternate, setShowAlternate] = useState(false);
  const [saved, setSaved] = useState(false);

  let input: any, recommendation: any, narrative: string, isOffline: boolean;
  try {
    const parsed = JSON.parse(params.data || '{}');
    input = parsed.input;
    recommendation = parsed.recommendation;
    narrative = parsed.narrative || '';
    isOffline = parsed.isOffline || false;
  } catch {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
          <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.errorText, { color: theme.text }]}>
          Error loading results. Please try again.
        </Text>
      </SafeAreaView>
    );
  }

  if (!recommendation?.primary) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
          <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
        </TouchableOpacity>
        <Text style={[styles.errorText, { color: theme.text }]}>
          Could not generate recommendation. Please try again.
        </Text>
      </SafeAreaView>
    );
  }

  const { primary, alternate, tips, confidence, confidenceNotes, regulations, technicalDetails } =
    recommendation;
  const speciesName = allSpecies.find((s: any) => s.slug === input?.species)?.name || input?.species || 'Unknown';

  const handleSave = async () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    await saveRecommendation({ input, recommendation, narrative, savedAt: new Date().toISOString() });
    setSaved(true);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Back button */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backRow}>
          <Ionicons name="arrow-back" size={20} color={Colors.copper[500]} />
          <Text style={[styles.backText, { color: Colors.copper[500] }]}>Back</Text>
        </TouchableOpacity>

        {/* Offline indicator */}
        {isOffline && (
          <View style={[styles.badge, { backgroundColor: '#FEF3C7', marginBottom: 8 }]}>
            <Text style={{ color: '#92400E', fontFamily: 'BarlowCondensed_500Medium', fontSize: 13 }}>
              {'\u26A0\uFE0F'} Offline recommendation — connect for AI-powered analysis
            </Text>
          </View>
        )}

        {/* Confidence badge */}
        <View style={[styles.badge, { backgroundColor: theme.surface }]}>
          <Text style={[styles.badgeText, { color: Colors.copper[500] }]}>
            {confidence?.replaceAll('-', ' ').toUpperCase()} CONFIDENCE
          </Text>
          {confidenceNotes && (
            <Text style={[styles.badgeNote, { color: theme.textSecondary }]}>
              {confidenceNotes}
            </Text>
          )}
        </View>

        {/* YOUR GUIDE SAYS */}
        <View style={[styles.narrativeCard, { backgroundColor: theme.card }]}>
          <Text style={[styles.narrativeLabel, { color: Colors.copper[500] }]}>
            {'\uD83C\uDFA3'} YOUR GUIDE SAYS:
          </Text>
          <Text style={[styles.narrativeText, { color: theme.text }]}>
            &ldquo;{narrative}&rdquo;
          </Text>
        </View>

        {/* Recommended Setup */}
        <View style={[styles.setupCard, { backgroundColor: theme.card }]}>
          <Text style={[styles.setupLabel, { color: theme.textMuted }]}>
            RECOMMENDED SETUP
          </Text>

          <SetupRow label="Technique" value={primary.technique.name} theme={theme} />
          <SetupRow
            label="Lure"
            value={`${primary.lure.specificLure} — ${primary.lure.color}`}
            theme={theme}
          />
          <SetupRow
            label="Hook"
            value={`${primary.hookSize} ${primary.hookType}`}
            theme={theme}
          />
          <SetupRow
            label="Line"
            value={`${primary.line.weight} ${primary.line.type}`}
            theme={theme}
          />
          <SetupRow
            label="Rod"
            value={`${primary.rodReel.rodLength} ${primary.rodReel.rodPower} ${primary.rodReel.rodAction}`}
            theme={theme}
          />
          <SetupRow label="Target" value={`${primary.targetDepth}, ${primary.targetStructure}`} theme={theme} />
        </View>

        {/* Collapsible: Technical Details */}
        {technicalDetails && (
          <CollapsibleSection
            title="Technical Details"
            expanded={showTechnical}
            onToggle={() => setShowTechnical(!showTechnical)}
            theme={theme}
          >
            {technicalDetails.rigging && (
              <DetailBlock label="RIGGING" items={technicalDetails.rigging.steps || [technicalDetails.rigging.description || '']} theme={theme} />
            )}
            {technicalDetails.presentation && (
              <DetailBlock label="PRESENTATION" items={[technicalDetails.presentation.description || `${technicalDetails.presentation.speed} retrieve, ${technicalDetails.presentation.action}`]} theme={theme} />
            )}
            {technicalDetails.colorStrategy && (
              <DetailBlock label="COLOR STRATEGY" items={[technicalDetails.colorStrategy.primary || '', ...(technicalDetails.colorStrategy.alternates || [])]} theme={theme} />
            )}
          </CollapsibleSection>
        )}

        {/* Collapsible: Alternative Approach */}
        {alternate && (
          <CollapsibleSection
            title="Alternative Approach"
            expanded={showAlternate}
            onToggle={() => setShowAlternate(!showAlternate)}
            theme={theme}
          >
            <SetupRow label="Technique" value={alternate.technique.name} theme={theme} />
            <SetupRow
              label="Lure"
              value={`${alternate.lure.specificLure} — ${alternate.lure.color}`}
              theme={theme}
            />
            {alternate.technique.why && (
              <Text style={[styles.whyText, { color: theme.textSecondary }]}>
                {alternate.technique.why}
              </Text>
            )}
          </CollapsibleSection>
        )}

        {/* Pro Tips */}
        {tips && tips.length > 0 && (
          <View style={[styles.tipsCard, { backgroundColor: theme.card }]}>
            <Text style={[styles.tipsLabel, { color: Colors.copper[500] }]}>
              {'\uD83D\uDCA1'} PRO TIPS
            </Text>
            {tips.map((tip: string, i: number) => (
              <Text key={i} style={[styles.tip, { color: theme.text }]}>
                {i + 1}. {tip}
              </Text>
            ))}
          </View>
        )}

        {/* Regulations */}
        {regulations && (
          <View style={[styles.regsCard, { backgroundColor: '#FEF3C7' }]}>
            <Text style={[styles.regsTitle, { color: '#92400E' }]}>
              {'\u26A0\uFE0F'} Regulations
            </Text>
            <Text style={{ color: '#92400E', fontFamily: 'BarlowCondensed_400Regular', fontSize: 14 }}>
              Bag Limit: {regulations.bagLimit}{'\n'}
              Size Limit: {regulations.sizeLimit}{'\n'}
              Season: {regulations.season}
            </Text>
            <Text style={{ color: '#B45309', fontFamily: 'BarlowCondensed_400Regular', fontSize: 12, marginTop: 4 }}>
              Verify with your state fish &amp; wildlife agency
            </Text>
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={[styles.actionBtn, { backgroundColor: Colors.copper[500] }]}
            onPress={() => {
              router.push({
                pathname: '/(tabs)/rig-builder',
                params: { species: input.species },
              });
            }}
          >
            <Text style={styles.actionBtnText}>Build This Rig</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionBtn, { borderWidth: 1, borderColor: Colors.copper[500] }]}
            onPress={handleSave}
          >
            <Text style={[styles.actionBtnText, { color: Colors.copper[500], backgroundColor: 'transparent' }]}>
              {saved ? '\u2713 Saved' : 'Save'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

function SetupRow({ label, value, theme }: { label: string; value: string; theme: any }) {
  return (
    <View style={styles.setupRow}>
      <Text style={[styles.setupRowLabel, { color: theme.textMuted }]}>{label}</Text>
      <Text style={[styles.setupRowValue, { color: theme.text }]}>{value}</Text>
    </View>
  );
}

function CollapsibleSection({
  title,
  expanded,
  onToggle,
  theme,
  children,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  theme: any;
  children: React.ReactNode;
}) {
  return (
    <View style={[styles.collapsible, { backgroundColor: theme.card }]}>
      <TouchableOpacity onPress={onToggle} style={styles.collapsibleHeader}>
        <Text style={[styles.collapsibleTitle, { color: theme.text }]}>{title}</Text>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={18}
          color={theme.textMuted}
        />
      </TouchableOpacity>
      {expanded && <View style={styles.collapsibleBody}>{children}</View>}
    </View>
  );
}

function DetailBlock({ label, items, theme }: { label: string; items: string[]; theme: any }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={[styles.detailLabel, { color: theme.textMuted }]}>{label}</Text>
      {items.filter(Boolean).map((item, i) => (
        <Text key={i} style={[styles.detailText, { color: theme.text }]}>
          {item}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16 },
  errorText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 16, textAlign: 'center', marginTop: 40 },
  backRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginBottom: 12 },
  backText: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  badge: { borderRadius: 10, padding: 10, alignItems: 'center', marginBottom: 12 },
  badgeText: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 14, letterSpacing: 1 },
  badgeNote: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 2 },
  narrativeCard: { borderRadius: 14, padding: 18, marginBottom: 12 },
  narrativeLabel: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 16, marginBottom: 8 },
  narrativeText: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 16, lineHeight: 24, fontStyle: 'italic' },
  setupCard: { borderRadius: 14, padding: 16, marginBottom: 8 },
  setupLabel: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 12, letterSpacing: 1.5, marginBottom: 10 },
  setupRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  setupRowLabel: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 14 },
  setupRowValue: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 14, flex: 1, textAlign: 'right' },
  collapsible: { borderRadius: 14, marginBottom: 8, overflow: 'hidden' },
  collapsibleHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  collapsibleTitle: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 16 },
  collapsibleBody: { paddingHorizontal: 16, paddingBottom: 16 },
  whyText: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, marginTop: 8 },
  tipsCard: { borderRadius: 14, padding: 16, marginBottom: 8 },
  tipsLabel: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 16, marginBottom: 10 },
  tip: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, lineHeight: 22, marginBottom: 6 },
  regsCard: { borderRadius: 14, padding: 16, marginBottom: 12 },
  regsTitle: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 16, marginBottom: 6 },
  actionRow: { flexDirection: 'row', gap: 10, marginTop: 8 },
  actionBtn: { flex: 1, borderRadius: 12, paddingVertical: 14, alignItems: 'center' },
  actionBtnText: { color: '#fff', fontFamily: 'BarlowCondensed_700Bold', fontSize: 16 },
  detailLabel: { fontFamily: 'BarlowCondensed_600SemiBold', fontSize: 12, letterSpacing: 1, marginBottom: 4 },
  detailText: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 14, lineHeight: 20 },
});
