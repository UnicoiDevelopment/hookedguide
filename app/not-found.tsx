import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | HOOKED',
  description: "Looks like this one got away. The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-water-900 px-4 text-center">
      <Image
        src="/images/logo/hooked-logo-white.png"
        alt="HOOKED — Fish Smarter."
        width={400}
        height={218}
        priority
        className="w-[250px] md:w-[400px] h-auto mb-8"
      />
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
        Looks like this one got away.
      </h1>
      <p className="font-body text-lg text-sand-300 mb-8 max-w-md">
        That page doesn&apos;t exist — but the fish are still biting.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-copper-500 px-6 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-copper-600"
        >
          Back to Home
        </Link>
        <Link
          href="/guide"
          className="rounded-lg border border-white/40 px-6 py-3 font-body text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          Ask the Guide
        </Link>
      </div>
    </div>
  );
}
