import { Metadata } from 'next';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy | HookedGuide',
  description:
    'HookedGuide privacy policy. Learn how we handle your data and protect your privacy.',
  alternates: { canonical: 'https://hookedguide.com/privacy' },
  openGraph: {
    title: 'Privacy Policy | HookedGuide',
    description: 'HookedGuide privacy policy. Learn how we handle your data.',
    url: 'https://hookedguide.com/privacy',
  },
  twitter: {
    title: 'Privacy Policy | HookedGuide',
    description: 'HookedGuide privacy policy. Learn how we handle your data.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <h1 className="font-heading text-3xl font-bold text-water-900 dark:text-sand-50 mt-4 mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-water-500 dark:text-sand-400 mb-8">
        Last updated: April 2026
      </p>

      {/* Information We Collect */}
      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Information We Collect
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          HookedGuide does not require user accounts or collect personal
          information. We use Google Analytics (GA4) to collect anonymous usage
          data including pages visited, time on site, and general location. This
          data helps us understand how visitors use our site so we can improve
          the experience.
        </p>
      </section>

      {/* Cookies */}
      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Cookies
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          We use essential cookies for site functionality and analytics cookies
          through Google Analytics. You can disable cookies in your browser
          settings. Please note that disabling cookies may affect certain
          features of the site.
        </p>
      </section>

      {/* Affiliate Links */}
      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Affiliate Links
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          When you click affiliate links on our site, our affiliate partners may
          use cookies to track purchases. This is governed by their respective
          privacy policies. We do not have access to or control over these
          third-party cookies.
        </p>
      </section>

      {/* Third-Party Services */}
      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Third-Party Services
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed mb-4">
          We use the following third-party services:
        </p>
        <ul className="list-disc list-inside space-y-2 text-water-700 dark:text-sand-200 leading-relaxed">
          <li>
            <strong>Google Analytics</strong> — for anonymous site usage
            analytics
          </li>
          <li>
            <strong>Vercel</strong> — for website hosting and delivery
          </li>
          <li>
            <strong>Affiliate partners</strong> — including Amazon Associates,
            Enigma Fishing, Mustad, Pure Fishing, Bass Pro Shops, YETI, and
            Columbia Sportswear
          </li>
        </ul>
      </section>

      {/* Data Retention */}
      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Data Retention
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          We do not store personal data on our servers. Analytics data is
          retained by Google per their data retention policies.
        </p>
      </section>

      {/* Children's Privacy */}
      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Children&apos;s Privacy
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          HookedGuide is not directed at children under 13. We do not knowingly
          collect any personal information from children under the age of 13. If
          you believe we have inadvertently collected such information, please
          contact us immediately.
        </p>
      </section>

      {/* Changes to This Policy */}
      <section className="mb-8">
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Changes to This Policy
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date. We encourage you
          to review this policy periodically to stay informed about how we
          protect your information.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="font-heading text-2xl font-semibold text-water-900 dark:text-sand-50 mt-8 mb-4">
          Contact
        </h2>
        <p className="text-water-700 dark:text-sand-200 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us
          at{' '}
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
