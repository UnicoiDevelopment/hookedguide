'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import SpeciesCard from '@/components/species/SpeciesCard';

type WaterType = 'freshwater' | 'saltwater' | 'both';

interface SpeciesItem {
  slug: string;
  name: string;
  type: WaterType;
  difficultyRating: number;
  preferredTemp: { min: number; max: number; unit: string };
  imagePath: string;
  imageAlt: string;
}

type FilterOption = 'all' | 'freshwater' | 'saltwater';
type SortOption = 'alphabetical' | 'difficulty';

const filterOptions: { label: string; value: FilterOption }[] = [
  { label: 'All', value: 'all' },
  { label: 'Freshwater', value: 'freshwater' },
  { label: 'Saltwater', value: 'saltwater' },
];

const sortOptions: { label: string; value: SortOption }[] = [
  { label: 'Alphabetical', value: 'alphabetical' },
  { label: 'By Difficulty', value: 'difficulty' },
];

interface SpeciesListClientProps {
  species: SpeciesItem[];
}

export default function SpeciesListClient({ species }: SpeciesListClientProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');
  const [sortBy, setSortBy] = useState<SortOption>('alphabetical');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpecies = useMemo(() => {
    let result = [...species];

    // Filter by water type
    if (activeFilter !== 'all') {
      result = result.filter(
        (s) => s.type === activeFilter || s.type === 'both'
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter((s) => s.name.toLowerCase().includes(query));
    }

    // Sort
    if (sortBy === 'alphabetical') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'difficulty') {
      result.sort((a, b) => a.difficultyRating - b.difficultyRating);
    }

    return result;
  }, [species, activeFilter, sortBy, searchQuery]);

  return (
    <div className="mt-6">
      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
        {/* Water type filter pills */}
        <div className="flex items-center gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === option.value
                  ? 'bg-water-500 text-white shadow-sm'
                  : 'bg-white text-water-700 border border-water-200 hover:border-water-400 dark:bg-water-800 dark:text-water-200 dark:border-water-600 dark:hover:border-water-400'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Sort dropdown */}
        <div className="flex items-center gap-2 sm:ml-auto">
          <label
            htmlFor="sort-select"
            className="text-sm text-water-600 dark:text-water-300 whitespace-nowrap"
          >
            Sort by:
          </label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="rounded-lg border border-water-200 bg-white px-3 py-2 text-sm text-water-700 dark:bg-water-800 dark:border-water-600 dark:text-water-200 focus:outline-none focus:ring-2 focus:ring-water-500"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-water-400" />
          <input
            type="text"
            placeholder="Search species..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-56 rounded-lg border border-water-200 bg-white pl-9 pr-3 py-2 text-sm text-water-700 placeholder:text-water-400 dark:bg-water-800 dark:border-water-600 dark:text-water-200 dark:placeholder:text-water-500 focus:outline-none focus:ring-2 focus:ring-water-500"
          />
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-water-500 dark:text-water-400 mb-4">
        Showing {filteredSpecies.length} of {species.length} species
      </p>

      {/* Species grid */}
      {filteredSpecies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSpecies.map((s) => (
            <SpeciesCard key={s.slug} species={s} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-water-500 dark:text-water-400 text-lg">
            No species found matching your filters.
          </p>
          <button
            onClick={() => {
              setActiveFilter('all');
              setSearchQuery('');
            }}
            className="mt-4 text-water-600 dark:text-water-300 underline hover:text-water-800 dark:hover:text-water-100 text-sm"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
