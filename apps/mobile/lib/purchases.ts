import Purchases, {
  type CustomerInfo,
  type PurchasesOfferings,
} from 'react-native-purchases';

const REVENUECAT_API_KEY = process.env.EXPO_PUBLIC_REVENUECAT_KEY || '';

let initialized = false;

export async function initializePurchases() {
  if (initialized || !REVENUECAT_API_KEY) return;
  Purchases.configure({ apiKey: REVENUECAT_API_KEY });
  initialized = true;
}

export async function checkSubscription(): Promise<{
  isPro: boolean;
  expiresAt: string | null;
  willRenew: boolean;
}> {
  if (!REVENUECAT_API_KEY) {
    return { isPro: false, expiresAt: null, willRenew: false };
  }

  try {
    const customerInfo: CustomerInfo = await Purchases.getCustomerInfo();
    const proEntitlement = customerInfo.entitlements.active['pro'];
    return {
      isPro: !!proEntitlement,
      expiresAt: proEntitlement?.expirationDate || null,
      willRenew: proEntitlement?.willRenew || false,
    };
  } catch {
    return { isPro: false, expiresAt: null, willRenew: false };
  }
}

export async function getOfferings(): Promise<{
  monthly: { price: string; identifier: string } | null;
  yearly: { price: string; identifier: string; savings: string } | null;
} | null> {
  if (!REVENUECAT_API_KEY) return null;

  try {
    const offerings: PurchasesOfferings = await Purchases.getOfferings();
    const current = offerings.current;
    if (!current) return null;

    return {
      monthly: current.monthly
        ? {
            price: current.monthly.product.priceString,
            identifier: current.monthly.product.identifier,
          }
        : null,
      yearly: current.annual
        ? {
            price: current.annual.product.priceString,
            identifier: current.annual.product.identifier,
            savings: '40%',
          }
        : null,
    };
  } catch {
    return null;
  }
}

export async function purchasePackage(
  period: 'monthly' | 'yearly'
): Promise<boolean> {
  if (!REVENUECAT_API_KEY) return false;

  try {
    const offerings = await Purchases.getOfferings();
    const pkg =
      period === 'yearly'
        ? offerings.current?.annual
        : offerings.current?.monthly;
    if (!pkg) return false;

    const { customerInfo } = await Purchases.purchasePackage(pkg);
    return !!customerInfo.entitlements.active['pro'];
  } catch (error: any) {
    if (error.userCancelled) return false;
    throw error;
  }
}

export async function restorePurchases(): Promise<boolean> {
  if (!REVENUECAT_API_KEY) return false;

  try {
    const customerInfo = await Purchases.restorePurchases();
    return !!customerInfo.entitlements.active['pro'];
  } catch {
    return false;
  }
}
