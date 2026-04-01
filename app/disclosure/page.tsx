import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | HookedGuide',
  description:
    'HookedGuide affiliate disclosure. Learn how we earn commissions through affiliate partnerships.',
  alternates: { canonical: 'https://hookedguide.com/disclosure' },
  openGraph: {
    title: 'Affiliate Disclosure | HookedGuide',
    description:
      'HookedGuide affiliate disclosure and FTC compliance statement.',
    url: 'https://hookedguide.com/disclosure',
  },
  twitter: {
    title: 'Affiliate Disclosure | HookedGuide',
    description:
      'HookedGuide affiliate disclosure and FTC compliance statement.',
  },
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Affiliate Disclosure' },
        ]}
      />

      <h1 className="font-heading text-3xl font-bold text-water-900 dark:text-sand-50 mt-4 mb-6">
        Affiliate Disclosure
      </h1>

      {/* FTC Compliance Statement */}
      <section className="mb-10">
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          In accordance with the Federal Trade Commission&apos;s guidelines,
          HookedGuide discloses that we earn commissions from qualifying
          purchases made through affiliate links on this website. This helps
          support HookedGuide at no additional cost to you.
        </p>
      </section>

      {/* Our Affiliate Partners */}
      <section className="mb-10">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Our Affiliate Partners
        </h2>
        <ul className="space-y-4 text-water-700 dark:text-sand-200 leading-relaxed">
          <li>
            <strong>Amazon Associates</strong> — As an Amazon Associate,
            HookedGuide earns from qualifying purchases.
          </li>
          <li>
            <strong>Mustad</strong> — We participate in the Mustad affiliate
            program.
          </li>
          <li>
            <strong>Pure Fishing (Berkley, Abu Garcia, Penn)</strong> — We are a
            Pure Fishing affiliate partner.
          </li>
          <li>
            <strong>Bass Pro Shops / Cabela&apos;s</strong> — We participate in
            the Bass Pro Shops affiliate program.
          </li>
          <li>
            <strong>YETI</strong> — We are a YETI affiliate partner.
          </li>
          <li>
            <strong>Columbia Sportswear</strong> — We participate in the Columbia
            PFG affiliate program.
          </li>
        </ul>
      </section>

      {/* How This Works */}
      <section className="mb-10">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          How This Works
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          When you click a product link on HookedGuide and make a purchase, we
          may receive a small commission. This does not affect the price you pay.
          We only recommend products that we believe provide genuine value to
          anglers.
        </p>
      </section>

      {/* Editorial Independence */}
      <section className="mb-10">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Editorial Independence
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          Our reviews and recommendations are based on product quality,
          performance, and value — not commission rates. Affiliate relationships
          do not influence our editorial content or product rankings.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Contact
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          If you have any questions about our affiliate relationships, please
          contact us at{' '}
          <a
            href="mailto:contact@hookedguide.com"
            className="text-water-500 dark:text-water-300 underline hover:text-water-600 dark:hover:text-water-200"
          >
            contact@hookedguide.com
          </a>
        </p>
      </section>
    </main>
  );
}
