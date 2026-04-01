import { MetadataRoute } from 'next';
import { allSpecies } from '@/data/species';
import { allTechniques } from '@/data/techniques';
import { allKnots } from '@/data/knots';
import { gearCategories } from '@/data/gear/categories';
import { allReviews } from '@/data/gear/reviews';
import { allStates } from '@/data/states';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hookedguide.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/species`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/techniques`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/gear`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/knots`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/tool`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/regulations`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/seasons`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/disclosure`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];

  const seasonPages: MetadataRoute.Sitemap = ['spring', 'summer', 'fall', 'winter'].map(s => ({
    url: `${baseUrl}/seasons/${s}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7,
  }));

  const speciesPages: MetadataRoute.Sitemap = allSpecies.map(s => ({
    url: `${baseUrl}/species/${s.slug}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8,
  }));

  // Species-state pages - only where species exists in state
  const speciesStatePages: MetadataRoute.Sitemap = allSpecies.flatMap(species =>
    species.statesFound.map(state => ({
      url: `${baseUrl}/species/${species.slug}/${state}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7,
    }))
  );

  const techniquePages: MetadataRoute.Sitemap = allTechniques.map(t => ({
    url: `${baseUrl}/techniques/${t.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8,
  }));

  const knotPages: MetadataRoute.Sitemap = allKnots.map(k => ({
    url: `${baseUrl}/knots/${k.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8,
  }));

  const gearCategoryPages: MetadataRoute.Sitemap = gearCategories.map(c => ({
    url: `${baseUrl}/gear/${c.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7,
  }));

  const gearReviewPages: MetadataRoute.Sitemap = allReviews.map(r => ({
    url: `${baseUrl}/gear/reviews/${r.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6,
  }));

  const regulationPages: MetadataRoute.Sitemap = allStates.map(s => ({
    url: `${baseUrl}/regulations/${s.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7,
  }));

  return [
    ...staticPages,
    ...seasonPages,
    ...speciesPages,
    ...speciesStatePages,
    ...techniquePages,
    ...knotPages,
    ...gearCategoryPages,
    ...gearReviewPages,
    ...regulationPages,
  ];
}
