interface SeasonBadgeProps {
  season: "spring" | "summer" | "fall" | "winter";
}

const seasonStyles: Record<SeasonBadgeProps["season"], string> = {
  spring: "bg-forest-100 text-forest-700",
  summer: "bg-copper-100 text-copper-700",
  fall: "bg-amber-100 text-amber-700",
  winter: "bg-water-100 text-water-700",
};

export default function SeasonBadge({ season }: SeasonBadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${seasonStyles[season]}`}
    >
      {season.charAt(0).toUpperCase() + season.slice(1)}
    </span>
  );
}
