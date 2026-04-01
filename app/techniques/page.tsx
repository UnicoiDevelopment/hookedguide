import { Metadata } from "next";

import { allTechniques } from "@/data/techniques";
import HeroSection from "@/components/ui/HeroSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import TechniqueCard from "@/components/techniques/TechniqueCard";

export const metadata: Metadata = {
  title: "Fishing Techniques — Step-by-Step Guides | HookedGuide",
  description:
    "Browse 20 proven fishing techniques with step-by-step guides, required gear, pro tips, and common mistakes to avoid. From Texas rigs to fly fishing basics.",
  alternates: {
    canonical: "https://hookedguide.com/techniques",
  },
  openGraph: {
    title: "Fishing Techniques — Step-by-Step Guides | HookedGuide",
    description:
      "Browse 20 proven fishing techniques with step-by-step guides, required gear, pro tips, and common mistakes to avoid. From Texas rigs to fly fishing basics.",
    url: "https://hookedguide.com/techniques",
  },
  twitter: {
    title: "Fishing Techniques — Step-by-Step Guides | HookedGuide",
    description:
      "Browse 20 proven fishing techniques with step-by-step guides, required gear, pro tips, and common mistakes to avoid. From Texas rigs to fly fishing basics.",
  },
};

export default function TechniquesIndexPage() {
  const sortedTechniques = [...allTechniques].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <HeroSection
        title="Fishing Techniques"
        subtitle="Step-by-step guides for 20 proven fishing techniques"
        backgroundGradient="from-forest-700 via-forest-500 to-forest-400"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Techniques" },
          ]}
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedTechniques.map((technique) => (
            <TechniqueCard key={technique.slug} technique={technique} />
          ))}
        </div>
      </div>
    </>
  );
}
