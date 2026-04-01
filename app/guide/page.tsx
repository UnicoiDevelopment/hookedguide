import { Metadata } from 'next';
import RecommendationTool from './RecommendationTool';

export const metadata: Metadata = {
  title: "The Guide — Personalized Fishing Recommendations | HookedGuide",
  description: "Tell us what you're chasing. The Guide analyzes species, conditions, water, and weather to recommend exactly what technique, bait, and gear to use.",
  alternates: {
    canonical: "https://hookedguide.com/guide",
  },
  openGraph: {
    title: "The Guide — Personalized Fishing Recommendations | HookedGuide",
    description: "Tell us what you're chasing. The Guide analyzes species, conditions, water, and weather to recommend exactly what technique, bait, and gear to use.",
    url: "https://hookedguide.com/guide",
  },
  twitter: {
    title: "The Guide — Personalized Fishing Recommendations | HookedGuide",
    description: "Tell us what you're chasing. The Guide analyzes species, conditions, water, and weather to recommend exactly what technique, bait, and gear to use.",
  },
};

export default function GuidePage() {
  return <RecommendationTool />;
}
