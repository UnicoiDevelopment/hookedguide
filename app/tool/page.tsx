import { Metadata } from 'next';
import RecommendationTool from './RecommendationTool';

export const metadata: Metadata = {
  title: "What Should I Fish With? — AI Fishing Recommendation Tool | HookedGuide",
  description: "Get personalized fishing recommendations. Select your species, location, season, and conditions — we'll tell you exactly what technique, bait, and gear to use.",
  alternates: {
    canonical: "https://hookedguide.com/tool",
  },
  openGraph: {
    title: "What Should I Fish With? — AI Fishing Recommendation Tool | HookedGuide",
    description: "Get personalized fishing recommendations. Select your species, location, season, and conditions — we'll tell you exactly what technique, bait, and gear to use.",
    url: "https://hookedguide.com/tool",
  },
  twitter: {
    title: "What Should I Fish With? — AI Fishing Recommendation Tool | HookedGuide",
    description: "Get personalized fishing recommendations. Select your species, location, season, and conditions — we'll tell you exactly what technique, bait, and gear to use.",
  },
};

export default function ToolPage() {
  return <RecommendationTool />;
}
