'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GiroCodeForm } from '../../components/GiroCodeForm';
import { InvoiceForm } from '../../components/InvoiceForm';
import { en } from '../../lib/translations/en';

export default function HomePageEn() {
  const [qrPngDataUrl, setQrPngDataUrl] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'GiroCode Generator',
            url: 'https://www.girocodegenerator.com/en',
            description:
              'Free GiroCode (SEPA-QR / EPC) generator – 100% local in your browser, no data transmission. Includes invoice PDF with embedded QR code.',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'EUR',
            },
            featureList: [
              'Create GiroCode / SEPA-QR / EPC QR codes',
              'IBAN validation',
              'Invoice PDF with embedded QR code',
              '100% local in the browser',
              'No data storage',
            ],
            inLanguage: 'en',
            author: {
              '@type': 'Person',
              name: 'Kaleb Jahnke',
            },
          }),
        }}
      />
      {/* Hero */}
      <header
        className="animate-card-in relative overflow-hidden px-4 pb-20 pt-20 text-center"
        style={{ animationDelay: '0s' }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)' }}
          />
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-emerald-500/20"
              style={{ left: `${(i * 37 + 11) % 100}%`, top: `${(i * 53 + 7) % 100}%` }}
            />
          ))}
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {en.hero.badge}
          </p>

          <div className="space-y-2">
            <h1
              className="font-bold tracking-tight text-slate-50"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1 }}
            >
              GiroCode Generator
            </h1>
            <p className="text-xl font-semibold md:text-2xl" style={{ color: '#22c55e' }}>
              SEPA-QR &amp; Invoice PDF
            </p>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            {en.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: '✅', label: 'EPC-compliant' },
              { icon: '🔒', label: 'GDPR-friendly' },
              { icon: '💸', label: '100% free' },
            ].map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                <span>{badge.icon}</span>
                {badge.label}
              </span>
            ))}
          </div>

          <a
            href="#generator"
            className="mt-2 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition duration-200 hover:-translate-y-0.5 hover:shadow-xl motion-reduce:hover:translate-y-0"
            style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              boxShadow: '0 0 24px rgba(34,197,94,0.35)',
            }}
          >
            Create GiroCode now →
          </a>
        </div>
      </header>

      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-12">

        {/* Generator */}
        <section id="generator" className="flex flex-col gap-6">
          <div className="animate-card-in" style={{ animationDelay: '0.1s' }}>
            <GiroCodeForm locale="en" onQrDataUrlChange={setQrPngDataUrl} />
          </div>
          <div className="animate-card-in" style={{ animationDelay: '0.2s' }}>
            <InvoiceForm locale="en" qrPngDataUrl={qrPngDataUrl} />
          </div>
        </section>

        {/* Trust section */}
        <section
          aria-label="Trust & Security"
          className="animate-card-in grid gap-4 sm:grid-cols-3"
          style={{ animationDelay: '0.25s' }}
        >
          {[
            { icon: '🔒', title: 'No data sharing', sub: 'Your IBAN never leaves your browser' },
            { icon: '⚡', title: 'Ready to use', sub: 'No account, no installation' },
            { icon: '🌍', title: '4 languages', sub: 'DE, EN, FR, ES' },
          ].map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5"
            >
              <span className="text-2xl">{card.icon}</span>
              <p className="text-sm font-semibold text-slate-100">{card.title}</p>
              <p className="text-xs text-slate-400">{card.sub}</p>
            </div>
          ))}
        </section>

        <section
          aria-labelledby="seo-how-it-works-en"
          className="animate-card-in mt-4 space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm text-slate-300 shadow-inner shadow-black/40"
          style={{ animationDelay: '0.3s' }}
        >
          <div>
            <h2
              id="seo-how-it-works-en"
              className="text-base font-semibold tracking-tight text-slate-50"
            >
              {en.seo.howTitle}
            </h2>
            <p className="mt-2">{en.seo.howText}</p>
          </div>

          <div className="pt-2">
            <h2 className="text-base font-semibold tracking-tight text-slate-50">
              {en.seo.faqTitle}
            </h2>
            <dl className="mt-3 space-y-3">
              {en.seo.faq.map((item, index) => (
                <div key={index} className="rounded-lg bg-slate-950/40 p-3">
                  <dt className="text-xs font-semibold text-slate-100">
                    {index + 1}. {item.q}
                  </dt>
                  <dd className="mt-1 text-xs text-slate-300">{item.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-slate-400">
              More background information in the{' '}
              <Link href="/en/wissen" className="text-sky-400 underline hover:text-sky-300">
                knowledge area about GiroCode &amp; SEPA-QR
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          aria-labelledby="learn-more-en"
          className="animate-card-in mt-8 space-y-4"
          style={{ animationDelay: '0.4s' }}
        >
          <h2
            id="learn-more-en"
            className="text-base font-semibold tracking-tight text-slate-50 md:text-lg"
          >
            Learn more about GiroCodes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/en/wissen/girocode"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#22c55e] motion-reduce:transform-none"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="text-2xl" aria-hidden>📄</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">What is a GiroCode?</h3>
                <p className="mt-0.5 text-xs text-slate-400">Basics and how the SEPA-QR code works.</p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">→</span>
              </div>
            </Link>
            <Link
              href="/en/wissen/epc-standard"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#22c55e] motion-reduce:transform-none"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="text-2xl" aria-hidden>⚙️</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">EPC standard explained</h3>
                <p className="mt-0.5 text-xs text-slate-400">Technical structure of the EPC payload in detail.</p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">→</span>
              </div>
            </Link>
            <Link
              href="/en/wissen/iban-bic"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#22c55e] motion-reduce:transform-none"
              style={{ animationDelay: '0.7s' }}
            >
              <span className="text-2xl" aria-hidden>🏦</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">IBAN &amp; BIC in GiroCode</h3>
                <p className="mt-0.5 text-xs text-slate-400">Mandatory fields, format and IBAN validation.</p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">→</span>
              </div>
            </Link>
            <Link
              href="/en/wissen/rechnung"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#22c55e] motion-reduce:transform-none"
              style={{ animationDelay: '0.8s' }}
            >
              <span className="text-2xl" aria-hidden>🧾</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">GiroCode on invoices</h3>
                <p className="mt-0.5 text-xs text-slate-400">How to integrate it correctly into invoices.</p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">→</span>
              </div>
            </Link>
            <Link
              href="/en/wissen/banking-apps"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#22c55e] motion-reduce:transform-none"
              style={{ animationDelay: '0.9s' }}
            >
              <span className="text-2xl" aria-hidden>📱</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">Banking apps overview</h3>
                <p className="mt-0.5 text-xs text-slate-400">Which apps support GiroCodes.</p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">→</span>
              </div>
            </Link>
            <Link
              href="/en/wissen/scannen"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#22c55e] motion-reduce:transform-none"
              style={{ animationDelay: '1s' }}
            >
              <span className="text-2xl" aria-hidden>📷</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">Scan a GiroCode</h3>
                <p className="mt-0.5 text-xs text-slate-400">Step-by-step with your banking app.</p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">→</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

