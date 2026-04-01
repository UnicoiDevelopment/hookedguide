'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  House,
  Fish,
  Compass,
  Wrench,
  Menu,
  X,
  BookOpen,
  Package,
  Scale,
  Info,
} from 'lucide-react';

const moreLinks = [
  { label: 'Techniques', href: '/techniques', icon: BookOpen },
  { label: 'Gear', href: '/gear', icon: Package },
  { label: 'Knots', href: '/knots', icon: BookOpen },
  { label: 'Regulations', href: '/regulations', icon: Scale },
  { label: 'About', href: '/about', icon: Info },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-sand-200 bg-white dark:border-water-700 dark:bg-water-800 md:hidden">
        <div className="mx-auto flex h-16 max-w-lg items-center justify-around px-2">
          {/* Home */}
          <Link
            href="/"
            className={`flex flex-col items-center gap-0.5 px-2 py-1 ${
              isActive('/')
                ? 'text-copper-500'
                : 'text-water-500 dark:text-sand-300'
            }`}
          >
            <House className="h-5 w-5" />
            <span className="font-body text-[10px] font-medium">Home</span>
          </Link>

          {/* The Guide - Prominent Center */}
          <Link
            href="/guide"
            className="flex flex-col items-center gap-0.5 px-2 py-1"
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full shadow-md ${
                isActive('/guide')
                  ? 'bg-copper-600'
                  : 'bg-copper-500'
              } text-white transition-colors`}
            >
              <Compass className="h-5 w-5" />
            </span>
            <span className="font-body text-[10px] font-medium text-copper-500">
              The Guide
            </span>
          </Link>

          {/* Species */}
          <Link
            href="/species"
            className={`flex flex-col items-center gap-0.5 px-2 py-1 ${
              isActive('/species')
                ? 'text-copper-500'
                : 'text-water-500 dark:text-sand-300'
            }`}
          >
            <Fish className="h-5 w-5" />
            <span className="font-body text-[10px] font-medium">Species</span>
          </Link>

          {/* Rig Builder */}
          <Link
            href="/rig-builder"
            className={`flex flex-col items-center gap-0.5 px-2 py-1 ${
              isActive('/rig-builder')
                ? 'text-copper-500'
                : 'text-water-500 dark:text-sand-300'
            }`}
          >
            <Wrench className="h-5 w-5" />
            <span className="font-body text-[10px] font-medium">Rig</span>
          </Link>

          {/* More */}
          <button
            type="button"
            aria-label="More links"
            onClick={() => setSheetOpen(true)}
            className={`flex flex-col items-center gap-0.5 px-2 py-1 ${
              sheetOpen
                ? 'text-copper-500'
                : 'text-water-500 dark:text-sand-300'
            }`}
          >
            <Menu className="h-5 w-5" />
            <span className="font-body text-[10px] font-medium">More</span>
          </button>
        </div>
      </nav>

      {/* More Sheet Overlay */}
      {sheetOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setSheetOpen(false)}
        />
      )}

      {/* More Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transform rounded-t-2xl bg-white shadow-xl transition-transform duration-300 ease-in-out dark:bg-water-800 md:hidden ${
          sheetOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-sand-200 px-4 py-3 dark:border-water-700">
          <span className="font-heading text-base font-bold text-water-800 dark:text-sand-100">
            Navigation
          </span>
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setSheetOpen(false)}
            className="rounded-lg p-1.5 text-water-600 hover:bg-sand-200 dark:text-sand-200 dark:hover:bg-water-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="max-h-[60vh] overflow-y-auto p-3">
          <div className="grid grid-cols-1 gap-0.5">
            {moreLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setSheetOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 font-body text-sm font-medium transition-colors ${
                    active
                      ? 'bg-copper-50 text-copper-600 dark:bg-copper-900/30 dark:text-copper-400'
                      : 'text-water-700 hover:bg-sand-100 dark:text-sand-200 dark:hover:bg-water-700'
                  }`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="h-safe-area pb-6" />
      </div>
    </>
  );
}
