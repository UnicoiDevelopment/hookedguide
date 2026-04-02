import Link from 'next/link';
import Image from 'next/image';

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
          <Image
            src="/images/logo/hooked-logo-white.png"
            alt="HOOKED — Fish Smarter."
            width={200}
            height={109}
            className="w-[200px] h-auto"
          />
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
            HOOKED participates in affiliate programs. We earn commissions from qualifying purchases at no extra cost to you.{' '}
            <Link href="/disclosure" className="underline transition-colors hover:text-copper-400">Affiliate Disclosure</Link>
          </p>
          <p className="font-body text-xs text-sand-300">
            &copy; 2026 HOOKED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
