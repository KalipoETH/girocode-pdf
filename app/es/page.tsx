'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GiroCodeForm } from '../../components/GiroCodeForm';
import { InvoiceForm } from '../../components/InvoiceForm';
import { es } from '../../lib/translations/es';

export default function HomePageEs() {
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
            url: 'https://www.girocodegenerator.com/es',
            description:
              'Generador de GiroCode (SEPA-QR / EPC) gratuito – 100% local en tu navegador, sin transmisión de datos. Incluye factura PDF con código QR integrado.',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'EUR',
            },
            featureList: [
              'Generar códigos GiroCode / SEPA-QR / EPC',
              'Validación de IBAN',
              'Factura PDF con código QR integrado',
              '100% local en el navegador',
              'Sin almacenamiento de datos',
            ],
            inLanguage: 'es',
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
            {es.hero.badge}
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              {es.hero.title}
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              {es.hero.subtitle}
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-6">
          <div className="animate-card-in" style={{ animationDelay: '0.1s' }}>
            <GiroCodeForm locale="es" onQrDataUrlChange={setQrPngDataUrl} />
          </div>
          <div className="animate-card-in" style={{ animationDelay: '0.2s' }}>
            <InvoiceForm locale="es" qrPngDataUrl={qrPngDataUrl} />
          </div>
        </div>

        <section
          aria-labelledby="seo-how-it-works-es"
          className="animate-card-in mt-4 space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm text-slate-300 shadow-inner shadow-black/40"
          style={{ animationDelay: '0.3s' }}
        >
          <div>
            <h2
              id="seo-how-it-works-es"
              className="text-base font-semibold tracking-tight text-slate-50"
            >
              {es.seo.howTitle}
            </h2>
            <p className="mt-2">{es.seo.howText}</p>
          </div>

          <div className="pt-2">
            <h2 className="text-base font-semibold tracking-tight text-slate-50">
              {es.seo.faqTitle}
            </h2>
            <dl className="mt-3 space-y-3">
              {es.seo.faq.map((item, index) => (
                <div key={index} className="rounded-lg bg-slate-950/40 p-3">
                  <dt className="text-xs font-semibold text-slate-100">
                    {index + 1}. {item.q}
                  </dt>
                  <dd className="mt-1 text-xs text-slate-300">{item.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-slate-400">
              Más información en la sección{' '}
              <Link
                href="/es/wissen"
                className="text-sky-400 underline hover:text-sky-300"
              >
                de información sobre GiroCode y SEPA-QR
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

