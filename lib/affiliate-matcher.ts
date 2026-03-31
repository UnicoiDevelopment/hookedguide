import { affiliateProducts } from '../data/affiliate-products';
import type { AffiliateProduct } from '../data/types';

export function getMatchingProducts(tags: string[], limit: number = 4): AffiliateProduct[] {
  return affiliateProducts
    .filter(p => p.affiliateUrl !== '' && p.tags.some(t => tags.includes(t)))
    .sort((a, b) => {
      const aMatches = a.tags.filter(t => tags.includes(t)).length;
      const bMatches = b.tags.filter(t => tags.includes(t)).length;
      // Sort by match count desc, then priority desc
      if (bMatches !== aMatches) return bMatches - aMatches;
      return b.priority - a.priority;
    })
    .slice(0, limit);
}
