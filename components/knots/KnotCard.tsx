import Link from "next/link";
import DifficultyStars from "@/components/ui/DifficultyStars";

interface KnotCardProps {
  knot: {
    slug: string;
    name: string;
    difficulty: number;
    strengthRating: number;
    lineTypes: string[];
  };
}

export default function KnotCard({ knot }: KnotCardProps) {
  return (
    <Link
      href={`/knots/${knot.slug}`}
      className="group block bg-white dark:bg-water-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
    >
      <h3 className="font-heading font-semibold text-lg text-water-900 dark:text-white mb-2">
        {knot.name}
      </h3>

      <div className="mb-2">
        <DifficultyStars rating={knot.difficulty} />
      </div>

      <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-forest-100 text-forest-700 mb-3">
        {knot.strengthRating}% strength
      </span>

      {knot.lineTypes.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {knot.lineTypes.map((lineType) => (
            <span
              key={lineType}
              className="inline-block text-xs px-2 py-0.5 rounded-full bg-water-100 text-water-700 dark:bg-water-700 dark:text-water-200 capitalize"
            >
              {lineType}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
