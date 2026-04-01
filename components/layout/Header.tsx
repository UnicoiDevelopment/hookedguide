'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'The Guide', href: '/guide', highlight: true },
  { label: 'Species', href: '/species' },
  { label: 'Techniques', href: '/techniques' },
  { label: 'Rig Builder', href: '/rig-builder' },
  { label: 'Gear', href: '/gear' },
  { label: 'Knots', href: '/knots' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand-200 dark:border-water-700 bg-sand-50/95 backdrop-blur dark:bg-water-900/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="font-heading text-2xl font-bold text-copper-500 tracking-wider">
          HOOKED
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.highlight
                  ? 'rounded-lg border border-copper-500 px-3 py-1.5 font-body text-sm font-semibold text-copper-500 transition-colors hover:bg-copper-500 hover:text-white dark:text-copper-400 dark:hover:bg-copper-500 dark:hover:text-white'
                  : 'font-body text-sm font-medium text-water-700 transition-colors hover:text-copper-500 dark:text-sand-200 dark:hover:text-copper-400'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/guide"
            className="rounded-lg bg-copper-500 px-4 py-2 font-body text-sm font-medium text-white transition-colors hover:bg-copper-600"
          >
            Ask the Guide
          </Link>

          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-lg p-2 text-water-600 transition-colors hover:bg-sand-200 dark:text-sand-200 dark:hover:bg-water-700"
          >
            {mounted && theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-lg p-2 text-water-600 transition-colors hover:bg-sand-200 dark:text-sand-200 dark:hover:bg-water-700"
          >
            {mounted && theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-water-600 transition-colors hover:bg-sand-200 dark:text-sand-200 dark:hover:bg-water-700"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 transform bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-water-900 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-sand-200 px-4 py-4 dark:border-water-700">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="font-heading text-xl font-bold text-copper-500 tracking-wider"
          >
            HOOKED
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-water-600 hover:bg-sand-200 dark:text-sand-200 dark:hover:bg-water-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={
                link.highlight
                  ? 'rounded-lg px-3 py-2.5 font-body text-sm font-semibold text-copper-500 transition-colors hover:bg-copper-50 dark:text-copper-400 dark:hover:bg-water-700'
                  : 'rounded-lg px-3 py-2.5 font-body text-sm font-medium text-water-700 transition-colors hover:bg-sand-100 dark:text-sand-200 dark:hover:bg-water-700'
              }
            >
              {link.label}
            </Link>
          ))}

          <div className="my-2 border-t border-sand-200 dark:border-water-700" />

          <Link
            href="/guide"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg bg-copper-500 px-4 py-2.5 text-center font-body text-sm font-medium text-white transition-colors hover:bg-copper-600"
          >
            Ask the Guide
          </Link>
        </nav>
      </div>
    </header>
  );
}
