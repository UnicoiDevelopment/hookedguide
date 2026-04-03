import { NextRequest, NextResponse } from 'next/server';

const PROMO_CODES: Record<string, { duration: string; maxUses: number; uses: number; description: string }> = {
  'HOOKPRO2026': { duration: 'lifetime', maxUses: 50, uses: 0, description: 'Launch promo' },
  'TESTER100': { duration: 'three_month', maxUses: 100, uses: 0, description: 'Beta tester code' },
  'PARTNER2026': { duration: 'annual', maxUses: 25, uses: 0, description: 'Partner/advertiser code' },
};

const REVENUECAT_SECRET = process.env.REVENUECAT_SECRET_KEY;

export async function POST(req: NextRequest) {
  try {
    const { code, userId } = await req.json();

    if (!code || !userId) {
      return NextResponse.json({ success: false, message: 'Missing code or user ID.' }, { status: 400 });
    }

    const promo = PROMO_CODES[code];
    if (!promo) {
      return NextResponse.json({ success: false, message: 'Invalid promo code.' }, { status: 400 });
    }

    if (promo.uses >= promo.maxUses) {
      return NextResponse.json({ success: false, message: 'This code has reached its maximum uses.' }, { status: 400 });
    }

    if (!REVENUECAT_SECRET) {
      return NextResponse.json({ success: false, message: 'Server configuration error.' }, { status: 500 });
    }

    const rcResponse = await fetch(
      `https://api.revenuecat.com/v1/subscribers/${userId}/entitlements/pro/promotional`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${REVENUECAT_SECRET}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ duration: promo.duration }),
      }
    );

    if (!rcResponse.ok) {
      const err = await rcResponse.text();
      console.error('RevenueCat error:', err);
      return NextResponse.json({ success: false, message: 'Could not activate subscription. Try again.' }, { status: 500 });
    }

    promo.uses++;

    return NextResponse.json({
      success: true,
      message: promo.duration === 'lifetime'
        ? 'HOOKED Pro activated for life! Enjoy!'
        : `HOOKED Pro activated for ${promo.duration.replace('_', ' ')}!`,
    });
  } catch (error) {
    console.error('Promo error:', error);
    return NextResponse.json({ success: false, message: 'Server error.' }, { status: 500 });
  }
}
