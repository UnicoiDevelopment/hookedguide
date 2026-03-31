import Link from "next/link";

interface RelatedItem {
  title: string;
  href: string;
  badge?: string;
}

interface RelatedContentProps {
  title?: string;
  items: RelatedItem[];
}

export default function RelatedContent({
  title = "Related",
  items,
}: RelatedContentProps) {
  return (
    <section className="w-full">
      <h3 className="font-heading text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block rounded-lg border border-sand-200 dark:border-water-700 p-3 hover:bg-sand-50 dark:hover:bg-water-800 transition-colors"
          >
            <span className="text-sm font-medium hover:underline">
              {item.title}
            </span>
            {item.badge && (
              <span className="ml-2 inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-copper-100 text-copper-700">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
