'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0b0c10]/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 text-[11px] text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} GiroCode Generator. Erstellt lokal im Browser – keine
          Datenübertragung.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/impressum"
            className="hover:text-slate-200 hover:underline"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="hover:text-slate-200 hover:underline"
          >
            Datenschutz
          </Link>
          <Link
            href="/ueber-uns"
            className="hover:text-slate-200 hover:underline"
          >
            Über uns
          </Link>
        </div>
      </div>
    </footer>
  );
}

