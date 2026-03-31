import Link from "next/link";
import SeasonBadge from "@/components/ui/SeasonBadge";

interface TechniqueCardProps {
  technique: {
    slug: string;
    name: string;
    difficulty: number;
    bestFor: string[];
    seasons: string[];
  };
}

const difficultyLabels: Record<number, string> = {
  1: "Beginner",
  2: "Easy",
  3: "Moderate",
  4: "Advanced",
  5: "Expert",
};

const difficultyStyles: Record<number, string> = {
  1: "bg-forest-100 text-forest-700",
  2: "bg-forest-100 text-forest-700",
  3: "bg-copper-100 text-copper-700",
  4: "bg-copper-100 text-copper-700",
  5: "bg-red-100 text-red-700",
};

export default function TechniqueCard({ technique }: TechniqueCardProps) {
  return (
    <Link
      href={`/techniques/${technique.slug}`}
      className="group block bg-white dark:bg-water-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
    >
      <h3 className="font-heading font-semibold text-lg text-water-900 dark:text-white mb-2">
        {technique.name}
      </h3>

      <span
        className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full mb-3 ${
          difficultyStyles[technique.difficulty] ?? "bg-sand-100 text-water-700"
        }`}
      >
        {difficultyLabels[technique.difficulty] ?? "Unknown"}
      </span>

      {technique.bestFor.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-medium text-water-500 dark:text-water-400 mb-1">
            Best for:
          </p>
          <div className="flex flex-wrap gap-1">
            {technique.bestFor.map((species) => (
              <span
                key={species}
                className="inline-block text-xs px-2 py-0.5 rounded-full bg-water-100 text-water-700 dark:bg-water-700 dark:text-water-200"
              >
                {species}
              </span>
            ))}
          </div>
        </div>
      )}

      {technique.seasons.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {technique.seasons.map((season) => (
            <SeasonBadge
              key={season}
              season={season as "spring" | "summer" | "fall" | "winter"}
            />
          ))}
        </div>
      )}
    </Link>
  );
}
