import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts, BarlowCondensed_400Regular, BarlowCondensed_500Medium, BarlowCondensed_600SemiBold, BarlowCondensed_700Bold } from '@expo-google-fonts/barlow-condensed';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider, useTheme } from '@/lib/theme-context';
import { AuthProvider } from '@/lib/auth-context';

SplashScreen.preventAutoHideAsync();

function RootNav() {
  const { theme, isDark } = useTheme();

  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.background },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
          name="guide/results"
          options={{ headerShown: false, presentation: 'card' }}
        />
        <Stack.Screen
          name="log/new"
          options={{ headerShown: false, presentation: 'modal' }}
        />
        <Stack.Screen
          name="log/[id]"
          options={{ headerShown: false, presentation: 'card' }}
        />
        <Stack.Screen
          name="auth/sign-in"
          options={{ headerShown: false, presentation: 'modal' }}
        />
        <Stack.Screen
          name="auth/sign-up"
          options={{ headerShown: false, presentation: 'modal' }}
        />
        <Stack.Screen
          name="paywall"
          options={{ headerShown: false, presentation: 'modal' }}
        />
        <Stack.Screen name="species/[slug]" options={{ headerShown: false }} />
        <Stack.Screen name="techniques/[slug]" options={{ headerShown: false }} />
        <Stack.Screen name="knots/[slug]" options={{ headerShown: false }} />
        <Stack.Screen name="gear/[slug]" options={{ headerShown: false }} />
        <Stack.Screen name="regulations/[state]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    BarlowCondensed_400Regular,
    BarlowCondensed_500Medium,
    BarlowCondensed_600SemiBold,
    BarlowCondensed_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider>
      <AuthProvider>
        <RootNav />
      </AuthProvider>
    </ThemeProvider>
  );
}
