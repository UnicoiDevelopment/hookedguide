import Link from 'next/link';

const exploreLinks = [
  { label: 'The Guide', href: '/guide' },
  { label: 'Species', href: '/species' },
  { label: 'Techniques', href: '/techniques' },
  { label: 'Rig Builder', href: '/rig-builder' },
  { label: 'Gear Reviews', href: '/gear' },
  { label: 'Knots', href: '/knots' },
];

const speciesLinks = [
  { label: 'Largemouth Bass', href: '/species/largemouth-bass' },
  { label: 'Crappie', href: '/species/crappie' },
  { label: 'Catfish', href: '/species/channel-catfish' },
  { label: 'Walleye', href: '/species/walleye' },
  { label: 'Redfish', href: '/species/redfish' },
  { label: 'Trout', href: '/species/rainbow-trout' },
];

const infoLinks = [
  { label: 'About', href: '/about' },
  { label: 'Regulations', href: '/regulations' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Affiliate Disclosure', href: '/disclosure' },
  { label: 'Image Credits', href: '/credits' },
];

// Cross-links commented out per brand revision — can re-enable later
// const freeToolsSites = [
//   { label: 'UtilFox', href: 'https://utilfox.dev' },
//   { label: 'FramingCalc', href: 'https://framingcalc.com' },
//   { label: 'ConvertMath', href: 'https://convertmath.com' },
//   { label: 'ChartsAndCodes', href: 'https://chartsandcodes.com' },
//   { label: 'SymbolCrunch', href: 'https://symbolcrunch.com' },
//   { label: 'RandoFox', href: 'https://randofox.com' },
//   { label: 'LifestyleCalc', href: 'https://lifestylecalc.com' },
//   { label: 'ParlayMath', href: 'https://parlaymath.com' },
// ];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-heading text-base font-bold text-sand-100">
        {title}
      </h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-body text-sm text-sand-300 transition-colors hover:text-copper-400"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-water-800 text-sand-200 dark:bg-water-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="mb-8">
          <p className="font-heading text-xl font-bold text-sand-100">HookedGuide</p>
          <p className="mt-1 font-body text-sm text-sand-300">Fish Smarter.</p>
        </div>

        {/* Main Columns */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
          <FooterColumn title="Explore" links={exploreLinks} />
          <FooterColumn title="Popular Species" links={speciesLinks} />
          <FooterColumn title="Info" links={infoLinks} />
        </div>

        {/* Disclaimers */}
        <div className="mt-10 border-t border-water-700 pt-8 space-y-3">
          <p className="font-body text-xs text-sand-300">
            As an Amazon Associate and affiliate partner, HookedGuide earns from
            qualifying purchases.
          </p>
          <p className="font-body text-xs text-sand-300">
            <Link
              href="/disclosure"
              className="underline transition-colors hover:text-copper-400"
            >
              FTC Disclosure
            </Link>
          </p>
          <p className="font-body text-xs text-sand-300">
            &copy; 2026 HookedGuide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
