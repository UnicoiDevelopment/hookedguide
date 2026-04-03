import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, Platform } from 'react-native';
import { useTheme } from '@/lib/theme-context';
import { Colors } from '@/constants/colors';
import { OfflineBanner } from '@/components/OfflineBanner';

export default function TabLayout() {
  const { theme, isDark } = useTheme();

  return (
    <>
    <OfflineBanner />
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.copper[500],
        tabBarInactiveTintColor: isDark ? Colors.sand[300] : Colors.water[500],
        tabBarStyle: {
          backgroundColor: theme.tabBar,
          borderTopColor: theme.tabBarBorder,
          borderTopWidth: 1,
          paddingBottom: Platform.OS === 'ios' ? 20 : 8,
          paddingTop: 8,
          height: Platform.OS === 'ios' ? 85 : 65,
        },
        tabBarLabelStyle: {
          fontFamily: 'BarlowCondensed_500Medium',
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: 'The Guide',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                backgroundColor: focused ? Colors.copper[600] : Colors.copper[500],
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 0,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 4,
              }}
            >
              <Ionicons name="compass-outline" size={18} color="#fff" />
            </View>
          ),
          tabBarLabel: 'The Guide',
          tabBarLabelStyle: {
            fontFamily: 'BarlowCondensed_600SemiBold',
            fontSize: 11,
            color: Colors.copper[500],
          },
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="log"
        options={{
          href: null, // Hidden from tab bar — accessed via More menu
        }}
      />
      <Tabs.Screen
        name="rig-builder"
        options={{
          title: 'Rig',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="build-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ellipsis-horizontal" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
    </>
  );
}
