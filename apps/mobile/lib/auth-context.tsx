import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { type Session, type User } from '@supabase/supabase-js';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as Crypto from 'expo-crypto';
import { supabase } from './supabase';
import { checkSubscription, initializePurchases } from './purchases';
import { canUseGuide } from './guide-usage';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  isPro: boolean;
  guideUsesRemaining: number;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signInWithApple: () => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  refreshSubscription: () => Promise<void>;
  refreshGuideUsage: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isPro: false,
  guideUsesRemaining: 3,
  loading: true,
  signIn: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signInWithApple: async () => ({ error: null }),
  signOut: async () => {},
  refreshSubscription: async () => {},
  refreshGuideUsage: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isPro, setIsPro] = useState(false);
  const [guideUsesRemaining, setGuideUsesRemaining] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializePurchases();

    // Get initial session
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user || null);
      if (s?.user) loadUserState(s.user.id);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, s) => {
      setSession(s);
      setUser(s?.user || null);
      if (s?.user) {
        await loadUserState(s.user.id);
      } else {
        setIsPro(false);
        setGuideUsesRemaining(3);
      }
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadUserState = async (userId: string) => {
    const [sub, usage] = await Promise.all([
      checkSubscription(),
      canUseGuide(userId),
    ]);
    setIsPro(sub.isPro);
    setGuideUsesRemaining(usage.usesRemaining);
  };

  const signIn = async (
    email: string,
    password: string
  ): Promise<{ error: string | null }> => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error: error?.message || null };
  };

  const signUp = async (
    email: string,
    password: string
  ): Promise<{ error: string | null }> => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (!error) {
      // Create profile
      const {
        data: { user: newUser },
      } = await supabase.auth.getUser();
      if (newUser) {
        await supabase.from('profiles').upsert({
          id: newUser.id,
          email,
          subscription_tier: 'free',
          guide_uses_this_month: 0,
          guide_uses_reset_at: new Date().toISOString(),
        });
      }
    }
    return { error: error?.message || null };
  };

  const signInWithApple = async (): Promise<{ error: string | null }> => {
    try {
      const nonce = Math.random().toString(36).substring(2);
      const hashedNonce = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        nonce
      );

      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
        nonce: hashedNonce,
      });

      if (!credential.identityToken) {
        return { error: 'No identity token from Apple' };
      }

      const { error } = await supabase.auth.signInWithIdToken({
        provider: 'apple',
        token: credential.identityToken,
        nonce,
      });

      return { error: error?.message || null };
    } catch (e: any) {
      if (e.code === 'ERR_REQUEST_CANCELED') return { error: null };
      return { error: e.message || 'Apple sign in failed' };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const refreshSubscription = async () => {
    const sub = await checkSubscription();
    setIsPro(sub.isPro);
  };

  const refreshGuideUsage = async () => {
    if (user) {
      const usage = await canUseGuide(user.id);
      setGuideUsesRemaining(usage.usesRemaining);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isPro,
        guideUsesRemaining,
        loading,
        signIn,
        signUp,
        signInWithApple,
        signOut,
        refreshSubscription,
        refreshGuideUsage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
