import type { AffiliateProduct } from "@/data/types";

interface GearProductCardProps {
  product: AffiliateProduct;
}

export default function GearProductCard({ product }: GearProductCardProps) {
  if (!product.affiliateUrl) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-water-800 rounded-lg shadow-sm p-4">
      <div className="mb-2">
        <h3 className="font-heading font-semibold text-water-900 dark:text-white">
          {product.name}
        </h3>
        <p className="text-sm text-water-500 dark:text-water-400">
          {product.brand}
        </p>
      </div>

      {product.price && (
        <p className="text-lg font-semibold text-copper-600 dark:text-copper-400 mb-2">
          {product.price}
        </p>
      )}

      {product.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block text-xs px-2 py-0.5 rounded-full bg-sand-100 text-water-700 dark:bg-water-700 dark:text-water-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="inline-block w-full text-center text-sm font-medium px-4 py-2 rounded-md bg-copper-500 text-white hover:bg-copper-600 transition-colors"
      >
        Check Price
      </a>
    </div>
  );
}
