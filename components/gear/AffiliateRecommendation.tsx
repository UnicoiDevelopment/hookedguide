import { getMatchingProducts } from "@/lib/affiliate-matcher";
import GearProductCard from "@/components/gear/GearProductCard";

interface AffiliateRecommendationProps {
  pageTags: string[];
  limit?: number;
}

export default function AffiliateRecommendation({
  pageTags,
  limit = 3,
}: AffiliateRecommendationProps) {
  const products = getMatchingProducts(pageTags, limit).filter(
    (p) => p.affiliateUrl !== ""
  );

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="mt-8">
      <h2 className="font-heading font-semibold text-xl text-water-900 dark:text-white mb-4">
        Recommended Gear
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <GearProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
