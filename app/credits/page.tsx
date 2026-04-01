import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Image Credits | HOOKED',
  description: 'Image attribution and credits for photos used on HOOKED.',
  alternates: { canonical: 'https://hookedguide.com/credits' },
};

export default function CreditsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Image Credits' }]} />

      <h1 className="font-heading text-3xl font-bold text-water-800 dark:text-sand-100 mt-4">
        Image Credits
      </h1>

      <p className="mt-4 text-water-700 dark:text-sand-200 leading-relaxed">
        HookedGuide uses images from multiple sources. We are grateful to the photographers and organizations that make these images available.
      </p>

      <section className="mt-8">
        <h2 className="font-heading text-2xl font-semibold text-water-800 dark:text-sand-100 mb-4">
          Wikimedia Commons
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          Species identification photos are sourced from Wikimedia Commons. These images are used under their respective Creative Commons licenses or are in the public domain. Individual attributions are noted in the image manifest.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-heading text-2xl font-semibold text-water-800 dark:text-sand-100 mb-4">
          Unsplash
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          Action photos, state landscapes, technique images, and the hero photo are sourced from Unsplash. All Unsplash photos are used under the Unsplash License, which grants free use for commercial and non-commercial purposes. We thank the following photographers for their contributions:
        </p>
        <p className="mt-2 text-sm text-water-600 dark:text-sand-300 italic">
          Individual photographer credits are listed in our image manifest file and are attributed per Unsplash guidelines.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-heading text-2xl font-semibold text-water-800 dark:text-sand-100 mb-4">
          U.S. Fish & Wildlife Service
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          Some species images may be sourced from the U.S. Fish & Wildlife Service National Digital Library. These images are public domain works of the United States Government.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-heading text-2xl font-semibold text-water-800 dark:text-sand-100 mb-4">
          Contact
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          If you believe an image has been used incorrectly or you would like to request attribution changes, please contact us at contact@hookedguide.com.
        </p>
      </section>
    </div>
  );
}
