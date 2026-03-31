import { Fish } from "lucide-react";

interface DifficultyStarsProps {
  rating: number;
  max?: number;
}

export default function DifficultyStars({ rating, max = 5 }: DifficultyStarsProps) {
  return (
    <div className="inline-flex gap-0.5" aria-label={`Difficulty ${rating} out of ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <Fish
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-copper-500"
              : "text-sand-200 dark:text-water-700"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
