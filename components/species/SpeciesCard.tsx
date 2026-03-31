import Link from "next/link";
import Image from "next/image";
import DifficultyStars from "@/components/ui/DifficultyStars";

interface SpeciesCardProps {
  species: {
    slug: string;
    name: string;
    type: "freshwater" | "saltwater" | "both";
    difficultyRating: number;
    preferredTemp: { min: number; max: number; unit: string };
    imagePath: string;
    imageAlt: string;
  };
}

const typeBadgeStyles: Record<string, string> = {
  freshwater: "bg-forest-100 text-forest-700",
  saltwater: "bg-water-100 text-water-700",
  both: "bg-copper-100 text-copper-700",
};

const typeLabels: Record<string, string> = {
  freshwater: "Freshwater",
  saltwater: "Saltwater",
  both: "Both",
};

export default function SpeciesCard({ species }: SpeciesCardProps) {
  return (
    <Link
      href={`/species/${species.slug}`}
      className="group block bg-white dark:bg-water-800 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden"
    >
      {species.imagePath ? (
        <Image
          src={species.imagePath}
          alt={species.imageAlt}
          width={400}
          height={250}
          className="w-full h-[250px] object-cover rounded-t-lg"
        />
      ) : (
        <div className="w-full h-[250px] rounded-t-lg bg-gradient-to-br from-water-200 to-water-400 dark:from-water-700 dark:to-water-900" />
      )}

      <div className="p-4 space-y-2">
        <h3 className="font-heading font-semibold text-lg text-water-900 dark:text-white">
          {species.name}
        </h3>

        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${typeBadgeStyles[species.type]}`}
          >
            {typeLabels[species.type]}
          </span>
        </div>

        <DifficultyStars rating={species.difficultyRating} />

        <p className="text-sm text-water-600 dark:text-water-300">
          {species.preferredTemp.min}&deg;F &ndash; {species.preferredTemp.max}&deg;F
        </p>
      </div>
    </Link>
  );
}
