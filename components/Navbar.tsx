'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Generator' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/fuer-entwickler', label: 'Für Entwickler' },
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/5 bg-[#0b0c10]/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/40">
            QR
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-50">
              GiroCode Generator
            </span>
            <span className="text-[11px] text-slate-400">
              SEPA-EPC &amp; Rechnungs-PDF
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 text-xs text-slate-300 md:flex">
          {links.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  'rounded-full px-3 py-1 transition',
                  active
                    ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40'
                    : 'text-slate-300 hover:bg-slate-800/70 hover:text-slate-50',
                ].join(' ')}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

