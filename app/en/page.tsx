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
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-8 md:py-12">
        <header className="animate-card-in space-y-3" style={{ animationDelay: '0s' }}>
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {en.hero.badge}
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              {en.hero.title}
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              {en.hero.subtitle}
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-6">
          <div className="animate-card-in" style={{ animationDelay: '0.1s' }}>
            <GiroCodeForm locale="en" onQrDataUrlChange={setQrPngDataUrl} />
          </div>
          <div className="animate-card-in" style={{ animationDelay: '0.2s' }}>
            <InvoiceForm locale="en" qrPngDataUrl={qrPngDataUrl} />
          </div>
        </div>

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
              <Link
                href="/en/wissen"
                className="text-sky-400 underline hover:text-sky-300"
              >
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
              <span className="text-2xl" aria-hidden>
                📄
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">
                  What is a GiroCode?
                </h3>
                <p className="mt-0.5 text-xs text-slate-400">
                  Basics and how the SEPA-QR code works.
                </p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">
                  →
                </span>
              </div>
            </Link>
            <Link
              href="/en/wissen/epc-standard"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#22c55e] motion-reduce:transform-none"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="text-2xl" aria-hidden>
                ⚙️
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">
                  EPC standard explained
                </h3>
                <p className="mt-0.5 text-xs text-slate-400">
                  Technical structure of the EPC payload in detail.
                </p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">
                  →
                </span>
              </div>
            </Link>
            <Link
              href="/en/wissen/iban-bic"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#22c55e] motion-reduce:transform-none"
              style={{ animationDelay: '0.7s' }}
            >
              <span className="text-2xl" aria-hidden>
                🏦
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">
                  IBAN &amp; BIC in GiroCode
                </h3>
                <p className="mt-0.5 text-xs text-slate-400">
                  Mandatory fields, format and IBAN validation.
                </p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">
                  →
                </span>
              </div>
            </Link>
            <Link
              href="/en/wissen/rechnung"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#22c55e] motion-reduce:transform-none"
              style={{ animationDelay: '0.8s' }}
            >
              <span className="text-2xl" aria-hidden>
                🧾
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">
                  GiroCode on invoices
                </h3>
                <p className="mt-0.5 text-xs text-slate-400">
                  How to integrate it correctly into invoices.
                </p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">
                  →
                </span>
              </div>
            </Link>
            <Link
              href="/en/wissen/banking-apps"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#22c55e] motion-reduce:transform-none"
              style={{ animationDelay: '0.9s' }}
            >
              <span className="text-2xl" aria-hidden>
                📱
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">
                  Banking apps overview
                </h3>
                <p className="mt-0.5 text-xs text-slate-400">
                  Which apps support GiroCodes.
                </p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">
                  →
                </span>
              </div>
            </Link>
            <Link
              href="/en/wissen/scannen"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:-translate-y-[3px] hover:border-[#22c55e] motion-reduce:transform-none"
              style={{ animationDelay: '1s' }}
            >
              <span className="text-2xl" aria-hidden>
                📷
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">
                  Scan a GiroCode
                </h3>
                <p className="mt-0.5 text-xs text-slate-400">
                  Step-by-step with your banking app.
                </p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">
                  →
                </span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

