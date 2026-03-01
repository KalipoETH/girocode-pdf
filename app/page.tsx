'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GiroCodeForm } from '../components/GiroCodeForm';
import { InvoiceForm } from '../components/InvoiceForm';

export default function HomePage() {
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
            url: 'https://www.girocodegenerator.com',
            description:
              'Kostenloser GiroCode (SEPA-QR / EPC) Generator – komplett lokal im Browser, keine Datenweitergabe. Mit Rechnungs-PDF.',
            applicationCategory: 'FinanceApplication',
            operatingSystem: 'Web Browser',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'EUR',
            },
            featureList: [
              'GiroCode / SEPA-QR / EPC QR-Code erstellen',
              'IBAN-Validierung',
              'Rechnungs-PDF mit eingebettetem QR-Code',
              '100% lokal im Browser',
              'Keine Datenspeicherung',
            ],
            inLanguage: 'de',
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
            100% client-seitig · keine Uploads
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode Generator &amp; Rechnungs-PDF
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Erzeuge SEPA-EPC/GiroCodes und eine DIN-konforme Rechnungs-PDF – komplett lokal im
              Browser. Ideal für Freelancer, Vereine und kleine Unternehmen.
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-6">
          <div className="animate-card-in" style={{ animationDelay: '0.1s' }}>
            <GiroCodeForm onQrDataUrlChange={setQrPngDataUrl} />
          </div>
          <div className="animate-card-in" style={{ animationDelay: '0.2s' }}>
            <InvoiceForm qrPngDataUrl={qrPngDataUrl} />
          </div>
        </div>

        <section
          aria-labelledby="seo-how-it-works"
          className="animate-card-in mt-4 space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-5 text-sm text-slate-300 shadow-inner shadow-black/40"
          style={{ animationDelay: '0.3s' }}
        >
          <div>
            <h2
              id="seo-how-it-works"
              className="text-base font-semibold tracking-tight text-slate-50"
            >
              GiroCode kostenlos erstellen – so funktioniert&apos;s
            </h2>
            <p className="mt-2">
              Ein GiroCode ist ein standardisierter <strong>SEPA-QR- bzw. EPC-Code</strong>, der alle
              wichtigen Überweisungsdaten wie Empfänger, IBAN, Betrag und Verwendungszweck enthält.
              Statt Zahlenkolonnen abzutippen, scannst du den Code einfach mit deiner Banking-App und
              übernimmst die Daten mit wenigen Klicks.
            </p>
            <p className="mt-2">
              Unser Generator arbeitet <strong>100% lokal im Browser</strong>: Deine Eingaben werden
              weder gespeichert noch an einen Server gesendet. Auf Wunsch erzeugst du zusätzlich eine
              <strong> Rechnungs-PDF mit eingebettetem GiroCode</strong>, die du direkt per E-Mail
              verschicken oder ausdrucken kannst.
            </p>
            <p className="mt-2">
              Der GiroCode eignet sich ideal für <strong>Selbstständige, Vereine und
              Privatpersonen</strong> – überall dort, wo Zahlungen schnell, fehlerfrei und bequem
              abgewickelt werden sollen.
            </p>
          </div>

          <div className="pt-2">
            <h2 className="text-base font-semibold tracking-tight text-slate-50">
              Häufige Fragen zum GiroCode Generator
            </h2>
            <dl className="mt-3 space-y-3">
              <div className="rounded-lg bg-slate-950/40 p-3">
                <dt className="text-xs font-semibold text-slate-100">
                  1. Ist der GiroCode Generator wirklich kostenlos?
                </dt>
                <dd className="mt-1 text-xs text-slate-300">
                  Ja. Du kannst den Generator dauerhaft kostenlos nutzen – es fallen nur die üblichen
                  Gebühren deiner Bank für SEPA-Überweisungen an, sofern diese nicht ohnehin
                  kostenfrei sind.
                </dd>
              </div>
              <div className="rounded-lg bg-slate-950/40 p-3">
                <dt className="text-xs font-semibold text-slate-100">
                  2. Werden meine Daten gespeichert?
                </dt>
                <dd className="mt-1 text-xs text-slate-300">
                  Nein. Alle Eingaben werden ausschließlich in deinem Browser verarbeitet. Es findet
                  keine serverseitige Speicherung oder Auswertung statt.
                </dd>
              </div>
              <div className="rounded-lg bg-slate-950/40 p-3">
                <dt className="text-xs font-semibold text-slate-100">
                  3. Welche Banking-Apps können den GiroCode scannen?
                </dt>
                <dd className="mt-1 text-xs text-slate-300">
                  Viele Apps im deutschsprachigen Raum unterstützen SEPA-QR / GiroCode, darunter
                  Sparkasse, Volks- und Raiffeisenbanken, ING, DKB, Comdirect, Deutsche Bank, N26 und
                  weitere. Details findest du im Wissensbereich unter „Banking-Apps mit GiroCode“.
                </dd>
              </div>
              <div className="rounded-lg bg-slate-950/40 p-3">
                <dt className="text-xs font-semibold text-slate-100">
                  4. Muss ich einen Betrag angeben?
                </dt>
                <dd className="mt-1 text-xs text-slate-300">
                  Nein. Du kannst den Betrag frei lassen – dann trägt der Zahler den gewünschten Betrag
                  selbst ein. Für klassische Rechnungen empfiehlt sich jedoch ein fest hinterlegter
                  Betrag.
                </dd>
              </div>
              <div className="rounded-lg bg-slate-950/40 p-3">
                <dt className="text-xs font-semibold text-slate-100">
                  5. Kann ich den GiroCode direkt in eine Rechnung einbinden?
                </dt>
                <dd className="mt-1 text-xs text-slate-300">
                  Ja. Mit der integrierten Rechnungsfunktion erzeugst du eine <strong>
                    PDF-Rechnung mit eingebettetem GiroCode
                  </strong>
                  , die sich ideal für den Versand per E-Mail oder zum Ausdrucken eignet.
                </dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-slate-400">
              Noch mehr Hintergrundwissen findest du im{' '}
              <Link href="/wissen" className="text-sky-400 hover:text-sky-300 underline">
                Wissensbereich rund um GiroCode &amp; SEPA-QR
              </Link>
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="mehr-wissen" className="animate-card-in mt-8 space-y-4" style={{ animationDelay: '0.4s' }}>
          <h2 id="mehr-wissen" className="text-base font-semibold tracking-tight text-slate-50 md:text-lg">
            Mehr über GiroCodes erfahren
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/wissen/girocode"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:border-[#22c55e] hover:-translate-y-[3px] motion-reduce:transform-none"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="text-2xl" aria-hidden>📄</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">Was ist ein GiroCode?</h3>
                <p className="mt-0.5 text-xs text-slate-400">Grundlagen und Funktionsweise des SEPA-QR-Codes.</p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">→</span>
              </div>
            </Link>
            <Link
              href="/wissen/epc-standard"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:border-[#22c55e] hover:-translate-y-[3px] motion-reduce:transform-none"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="text-2xl" aria-hidden>⚙️</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">EPC-Standard erklärt</h3>
                <p className="mt-0.5 text-xs text-slate-400">Technischer Aufbau des EPC-Payloads im Detail.</p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">→</span>
              </div>
            </Link>
            <Link
              href="/wissen/iban-bic"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:border-[#22c55e] hover:-translate-y-[3px] motion-reduce:transform-none"
              style={{ animationDelay: '0.7s' }}
            >
              <span className="text-2xl" aria-hidden>🏦</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">IBAN &amp; BIC im GiroCode</h3>
                <p className="mt-0.5 text-xs text-slate-400">Pflichtangaben, Format und IBAN-Prüfung.</p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">→</span>
              </div>
            </Link>
            <Link
              href="/wissen/rechnung"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:border-[#22c55e] hover:-translate-y-[3px] motion-reduce:transform-none"
              style={{ animationDelay: '0.8s' }}
            >
              <span className="text-2xl" aria-hidden>🧾</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">GiroCode auf Rechnungen</h3>
                <p className="mt-0.5 text-xs text-slate-400">Rechtssicher integrieren und PDF-Rechnungen erstellen.</p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">→</span>
              </div>
            </Link>
            <Link
              href="/wissen/banking-apps"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:border-[#22c55e] hover:-translate-y-[3px] motion-reduce:transform-none"
              style={{ animationDelay: '0.9s' }}
            >
              <span className="text-2xl" aria-hidden>📱</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">Banking-Apps Übersicht</h3>
                <p className="mt-0.5 text-xs text-slate-400">Welche Apps GiroCodes scannen können.</p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">→</span>
              </div>
            </Link>
            <Link
              href="/wissen/scannen"
              className="animate-card-in group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 transition duration-200 ease-out hover:border-[#22c55e] hover:-translate-y-[3px] motion-reduce:transform-none"
              style={{ animationDelay: '1s' }}
            >
              <span className="text-2xl" aria-hidden>📷</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">GiroCode scannen</h3>
                <p className="mt-0.5 text-xs text-slate-400">Schritt-für-Schritt mit der Banking-App scannen.</p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-slate-500 group-hover:text-[#22c55e]">→</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

