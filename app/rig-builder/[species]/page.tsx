import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allSpecies } from '@/data/species';
import RigBuilderClient from '../RigBuilderClient';

const validSlugs = [
  'largemouth-bass',
  'rainbow-trout',
  'channel-catfish',
  'walleye',
  'redfish',
  'crappie',
  'smallmouth-bass',
  'speckled-trout',
];

export function generateStaticParams() {
  return validSlugs.map(slug => ({ species: slug }));
}

export function generateMetadata({ params }: { params: { species: string } }): Metadata {
  const sp = allSpecies.find(s => s.slug === params.species);
  if (!sp) return {};
  const title = `${sp.name} Fishing Rig Builder — Rod, Reel, Line & Lure Setup | HOOKED`;
  const description = `Build the perfect ${sp.name.toLowerCase()} fishing rig. Get rod, reel, line, and lure recommendations matched to ${sp.name.toLowerCase()}.`;
  return {
    title,
    description,
    alternates: { canonical: `https://hookedguide.com/rig-builder/${params.species}` },
    openGraph: {
      title,
      description,
      url: `https://hookedguide.com/rig-builder/${params.species}`,
    },
    twitter: { title, description },
  };
}

export default function SpeciesRigPage({ params }: { params: { species: string } }) {
  if (!validSlugs.includes(params.species)) notFound();
  return <RigBuilderClient initialSpecies={params.species} />;
}
