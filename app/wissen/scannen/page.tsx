import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode scannen – Schritt-für-Schritt Anleitung',
  description:
    'GiroCode mit der Banking-App scannen: So funktioniert es Schritt für Schritt auf iPhone und Android – inklusive Tipps bei Scan-Problemen.',
};

export default function WissenScannenPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/wissen" className="text-sky-400 hover:text-sky-300">Wissen</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">GiroCode scannen</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Praxis · GiroCode scannen
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode scannen – Schritt-für-Schritt Anleitung
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Einen GiroCode zu scannen ist unkompliziert – wenn man weiß, wo sich der QR-Scanner in
              der Banking-App versteckt. Hier findest du eine Schritt-für-Schritt-Anleitung und
              praktische Tipps.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="schritte">
            <h2 id="schritte">Schritt-für-Schritt: So scannst du einen GiroCode</h2>
            <p>Der grundsätzliche Ablauf ist bei fast allen Banking-Apps ähnlich:</p>
            <ol>
              <li>Banking-App öffnen und bei Bedarf einloggen.</li>
              <li>In den Bereich „Überweisung“, „Zahlungen“ oder „GiroCode“ wechseln.</li>
              <li>Den QR-Scanner starten – oft erkennbar am Kamera- oder QR-Symbol.</li>
              <li>Die Kamera auf den GiroCode auf der Rechnung oder am Bildschirm richten.</li>
              <li>Die automatisch ausgefüllten Daten (Empfänger, IBAN, Betrag, Verwendungszweck) prüfen.</li>
              <li>Bei Bedarf fehlende oder variable Felder (z.&nbsp;B. Betrag) ergänzen.</li>
              <li>Die Überweisung wie gewohnt mit TAN, Fingerabdruck oder Face ID freigeben.</li>
            </ol>
          </section>

          <section aria-labelledby="iphone-android" className="mt-8">
            <h2 id="iphone-android">Unterschiede zwischen iPhone und Android</h2>
            <p>
              Der eigentliche GiroCode-Scan läuft in der <strong>Banking-App</strong> ab – daher sind
              die Unterschiede zwischen iPhone und Android eher gering. Typische Unterschiede sind:
            </p>
            <ul>
              <li>
                <strong>Menüführung:</strong> Auf iOS sitzen Scan-Buttons häufig in der unteren
                Navigationsleiste, auf Android eher im Seitenmenü oder als Floating-Action-Button.
              </li>
              <li>
                <strong>Kamera-Berechtigungen:</strong> Beim ersten Start des QR-Scanners fragt das
                Betriebssystem nach der Kamera-Freigabe. Diese muss erteilt werden, sonst kann der
                Code nicht erkannt werden.
              </li>
              <li>
                <strong>Screenshots und Dateien:</strong> Einige Apps erlauben auf beiden Plattformen,
                QR-Codes direkt aus einem Screenshot oder einer PDF zu scannen.
              </li>
            </ul>
            <p>
              Entscheidend ist also weniger das Betriebssystem als die konkrete Umsetzung in deiner
              Banking-App.
            </p>
          </section>

          <section aria-labelledby="nicht-erkannt" className="mt-8">
            <h2 id="nicht-erkannt">Was tun, wenn der Code nicht erkannt wird?</h2>
            <p>
              Manchmal braucht es ein wenig Feintuning, bis der GiroCode zuverlässig erkannt wird.
              Folgende Faktoren spielen eine Rolle:
            </p>
            <ul>
              <li>
                <strong>Helligkeit &amp; Kontrast:</strong> Sorge für gute Beleuchtung und vermeide
                Spiegelungen – insbesondere bei glänzendem Papier.
              </li>
              <li>
                <strong>Abstand &amp; Fokus:</strong> Halte das Smartphone nicht zu nah oder zu weit
                weg. Viele QR-Scanner arbeiten am besten bei mittlerem Abstand.
              </li>
              <li>
                <strong>Druckqualität:</strong> Bei stark verpixelten oder sehr kleinen Codes kann es
                zu Lesefehlern kommen. Eine saubere, ausreichend große Darstellung ist wichtig.
              </li>
            </ul>
            <p>
              Wenn der Scan am Bildschirm nicht funktioniert, lohnt sich ein Test mit der <strong>
                ausgedruckten Rechnung
              </strong>{' '}
              oder einem höheren Zoom-Level am Monitor.
            </p>
          </section>

          <section aria-labelledby="sicherheit" className="mt-8">
            <h2 id="sicherheit">Sicherheitshinweis: Daten immer prüfen</h2>
            <p>
              Auch wenn der GiroCode viel Arbeit abnimmt, bleibt ein Schritt besonders wichtig:
              <strong>Kontrolliere immer die angezeigten Daten</strong>, bevor du die Überweisung
              freigibst. Achte insbesondere auf:
            </p>
            <ul>
              <li>den Namen des Empfängers,</li>
              <li>die IBAN,</li>
              <li>den Betrag,</li>
              <li>und den Verwendungszweck.</li>
            </ul>
            <p>
              Stimmt etwas nicht, kannst du einzelne Felder manuell anpassen oder den Vorgang abbrechen.
              Seriöse Rechnungssteller machen dir die Kontrolle leicht, indem sie alle Angaben gut
              lesbar zusätzlich im Klartext auf der Rechnung ausweisen.
            </p>
          </section>

          <div className="mt-10 flex flex-col gap-6 border-t border-slate-800 pt-8">
            <p className="mb-2">
              <Link href="/" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500">
                Jetzt GiroCode erstellen
                <span aria-hidden>→</span>
              </Link>
            </p>
            <div>
              <h2 className="text-sm font-semibold text-slate-50">Weitere Artikel</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li><Link href="/wissen/banking-apps" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Banking-Apps Übersicht</Link></li>
                <li><Link href="/wissen/girocode" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Was ist ein GiroCode?</Link></li>
                <li><Link href="/wissen/rechnung" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">GiroCode auf Rechnungen</Link></li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

