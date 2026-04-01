import type { Metadata } from "next";
import Script from "next/script";
import { Barlow_Condensed, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: {
    default: "HookedGuide — Your AI Fishing Guide",
    template: "%s | HookedGuide",
  },
  description: "Your AI fishing guide. Species guides, gear recommendations, and fishing intelligence for every state. Find the best techniques, lures, and tackle.",
  metadataBase: new URL('https://hookedguide.com'),
  openGraph: {
    siteName: 'HookedGuide',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  verification: {
    google: 'GOOGLE_SITE_VERIFICATION_TOKEN',
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "HookedGuide",
  url: "https://hookedguide.com",
  description: "Your AI Fishing Guide — Species guides, gear recommendations, and fishing intelligence for every state.",
  logo: "https://hookedguide.com/logo.png",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HookedGuide",
  url: "https://hookedguide.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://hookedguide.com/species?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${barlowCondensed.variable} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header />
          <main className="min-h-screen pb-16 md:pb-0">
            {children}
          </main>
          <Footer />
          <MobileNav />
        </ThemeProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GCF9QXKB3C" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-GCF9QXKB3C');`}
        </Script>
      </body>
    </html>
  );
}
