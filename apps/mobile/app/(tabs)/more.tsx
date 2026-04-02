import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';

const sections = [
  {
    title: 'EXPLORE',
    items: [
      { label: 'Fishing Log', icon: 'book-outline' as const, href: '/(tabs)/log' },
      { label: 'Species', icon: 'fish-outline' as const, href: '/species' },
      { label: 'Techniques', icon: 'reader-outline' as const, href: '/techniques' },
      { label: 'Knots', icon: 'link-outline' as const, href: '/knots' },
      { label: 'Gear Reviews', icon: 'star-outline' as const, href: '/gear' },
      { label: 'Regulations', icon: 'document-text-outline' as const, href: '/regulations' },
    ],
  },
  {
    title: 'APP',
    items: [
      { label: 'Settings', icon: 'settings-outline' as const, href: '/settings' },
      { label: 'About & Disclosure', icon: 'information-circle-outline' as const, href: '/settings/about' },
    ],
  },
];

export default function MoreScreen() {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={[styles.title, { color: theme.text }]}>More</Text>

        {sections.map((section) => (
          <View key={section.title} style={styles.section}>
            <Text style={[styles.sectionLabel, { color: theme.textMuted }]}>
              {section.title}
            </Text>
            <View style={[styles.group, { backgroundColor: theme.card }]}>
              {section.items.map((item, i) => (
                <TouchableOpacity
                  key={item.href}
                  style={[
                    styles.row,
                    i < section.items.length - 1 && {
                      borderBottomWidth: 1,
                      borderBottomColor: theme.border,
                    },
                  ]}
                  onPress={() => router.push(item.href as any)}
                >
                  <Ionicons name={item.icon} size={20} color={Colors.copper[500]} />
                  <Text style={[styles.rowLabel, { color: theme.text }]}>{item.label}</Text>
                  <Ionicons name="chevron-forward" size={16} color={theme.textMuted} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.footer}>
          <Text style={[styles.footerLogo, { color: Colors.copper[500] }]}>HOOKED</Text>
          <Text style={[styles.footerText, { color: theme.textMuted }]}>
            Fish Smarter. {'\u00A9'} 2026 HOOKED
          </Text>
          <Text style={[styles.footerText, { color: theme.textMuted }]}>
            hookedguide.com
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16, paddingBottom: 40 },
  title: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 28, marginBottom: 16 },
  section: { marginBottom: 20 },
  sectionLabel: {
    fontFamily: 'BarlowCondensed_600SemiBold',
    fontSize: 12,
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  group: { borderRadius: 12, overflow: 'hidden' },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 12,
  },
  rowLabel: { fontFamily: 'BarlowCondensed_500Medium', fontSize: 17, flex: 1 },
  footer: { alignItems: 'center', marginTop: 24 },
  footerLogo: { fontFamily: 'BarlowCondensed_700Bold', fontSize: 24, letterSpacing: 3 },
  footerText: { fontFamily: 'BarlowCondensed_400Regular', fontSize: 13, marginTop: 4 },
});
