import Link from "next/link";

interface StateCardProps {
  state: {
    slug: string;
    name: string;
    abbreviation: string;
    region: string;
    freshwaterSpecies: string[];
    saltwaterSpecies: string[];
  };
}

export default function StateCard({ state }: StateCardProps) {
  const uniqueSpecies = new Set([
    ...state.freshwaterSpecies,
    ...state.saltwaterSpecies,
  ]);

  return (
    <Link
      href={`/regulations/${state.slug}`}
      className="group block bg-white dark:bg-water-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
    >
      <h3 className="font-heading font-semibold text-lg text-water-900 dark:text-white mb-1">
        {state.name}{" "}
        <span className="text-water-500 dark:text-water-400 font-normal">
          ({state.abbreviation})
        </span>
      </h3>

      <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-water-100 text-water-700 dark:bg-water-700 dark:text-water-200 capitalize mb-2">
        {state.region}
      </span>

      <p className="text-sm text-water-600 dark:text-water-300">
        {uniqueSpecies.size} species available
      </p>
    </Link>
  );
}
