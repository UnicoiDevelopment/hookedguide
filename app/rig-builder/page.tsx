import { Metadata } from 'next';
import RigBuilderClient from './RigBuilderClient';

export const metadata: Metadata = {
  title: "Fishing Rig Builder — Build Your Perfect Setup",
  description: "Build your complete fishing rig piece by piece. Select rod, reel, line, and lure — get matched to the best gear with affiliate recommendations.",
  alternates: { canonical: 'https://hookedguide.com/rig-builder' },
  openGraph: { title: "Fishing Rig Builder", description: "Build your complete fishing rig piece by piece.", url: 'https://hookedguide.com/rig-builder' },
  twitter: { title: "Fishing Rig Builder", description: "Build your complete fishing rig piece by piece." },
};

export default function RigBuilderPage() {
  return <RigBuilderClient />;
}
