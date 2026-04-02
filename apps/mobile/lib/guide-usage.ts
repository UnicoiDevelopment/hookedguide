import { supabase } from './supabase';
import { checkSubscription } from './purchases';

const FREE_GUIDE_LIMIT = 3;

export async function canUseGuide(userId: string | null): Promise<{
  allowed: boolean;
  usesRemaining: number;
  isPro: boolean;
}> {
  // Check Pro subscription
  const sub = await checkSubscription();
  if (sub.isPro) {
    return { allowed: true, usesRemaining: Infinity, isPro: true };
  }

  // No user = no tracking, allow with limit
  if (!userId) {
    return { allowed: true, usesRemaining: FREE_GUIDE_LIMIT, isPro: false };
  }

  try {
    const { data: profile } = await supabase
      .from('profiles')
      .select('guide_uses_this_month, guide_uses_reset_at')
      .eq('id', userId)
      .single();

    if (!profile) {
      return { allowed: true, usesRemaining: FREE_GUIDE_LIMIT, isPro: false };
    }

    // Reset counter on new month
    const resetAt = new Date(profile.guide_uses_reset_at);
    const now = new Date();
    if (
      now.getMonth() !== resetAt.getMonth() ||
      now.getFullYear() !== resetAt.getFullYear()
    ) {
      await supabase
        .from('profiles')
        .update({
          guide_uses_this_month: 0,
          guide_uses_reset_at: now.toISOString(),
        })
        .eq('id', userId);
      return { allowed: true, usesRemaining: FREE_GUIDE_LIMIT, isPro: false };
    }

    const usesRemaining = FREE_GUIDE_LIMIT - profile.guide_uses_this_month;
    return {
      allowed: usesRemaining > 0,
      usesRemaining: Math.max(0, usesRemaining),
      isPro: false,
    };
  } catch {
    // If Supabase not configured, allow with default limit
    return { allowed: true, usesRemaining: FREE_GUIDE_LIMIT, isPro: false };
  }
}

export async function recordGuideUse(
  userId: string,
  input: any,
  output: any,
  conversation: string
): Promise<void> {
  try {
    // Increment usage
    await supabase.rpc('increment_guide_uses', { user_id: userId });

    // Save recommendation history
    await supabase.from('guide_usage').insert({
      user_id: userId,
      species: input.species,
      state: input.state,
      conditions: input,
      recommendation: output,
      conversation,
    });
  } catch {
    // Silently fail if Supabase not configured
  }
}
