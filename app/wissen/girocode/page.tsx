import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Was ist ein GiroCode? – Erklärung & Anleitung',
  description:
    'GiroCode einfach erklärt: Was ist ein SEPA-QR-/EPC-Code, wie funktioniert er und wie erstellt man ihn kostenlos?',
};

export default function WissenGirocodePage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/wissen" className="text-sky-400 hover:text-sky-300">Wissen</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">Was ist ein GiroCode?</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Grundlagen · GiroCode / SEPA-QR
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Was ist ein GiroCode?
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Der GiroCode – häufig auch SEPA-QR- oder EPC-QR-Code genannt – ist ein standardisierter
              QR-Code für Überweisungen im SEPA-Raum. Er spart Tipparbeit, reduziert Tippfehler und
              macht das Bezahlen für Zahler und Empfänger deutlich komfortabler.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">
          <section aria-labelledby="definition">
            <h2 id="definition">Definition: GiroCode, SEPA-QR, EPC-QR</h2>
            <p>
              Ein GiroCode ist ein QR-Code, der eine SEPA-Überweisung in einem genormten Textformat
              kodiert. Technisch basiert er auf den Spezifikationen des{' '}
              <strong>European Payments Council (EPC)</strong> und wird daher häufig auch als{' '}
              <strong>SEPA-QR</strong> oder <strong>EPC-QR</strong> bezeichnet. Banken und
              Zahlungsdienstleister können dieses Format einheitlich interpretieren und daraus eine
              fertige Überweisungsmaske erzeugen.
            </p>
          </section>

          <section aria-labelledby="funktion" className="mt-8">
            <h2 id="funktion">Wie funktioniert ein GiroCode?</h2>
            <p>
              Der Ablauf ist bewusst einfach gehalten: Du platzierst den GiroCode zum Beispiel auf
              einer Rechnung oder einem Zahlungsbeleg. Die zahlende Person öffnet ihre{' '}
              <strong>Banking-App</strong>, startet den integrierten QR-Scanner und hält die Kamera
              über den Code. Die App liest den EPC-Text aus und füllt damit automatisch eine
              Überweisung aus.
            </p>
            <p>
              In der Regel erscheinen <strong>Empfänger, IBAN, BIC, Betrag und Verwendungszweck</strong>{' '}
              direkt in der Überweisungsmaske. Der Zahler prüft die Angaben, ergänzt bei Bedarf
              fehlende Felder (z.&nbsp;B. Betrag) und bestätigt die Zahlung wie gewohnt mit TAN oder
              biometrischer Freigabe.
            </p>
          </section>

          <section aria-labelledby="daten" className="mt-8">
            <h2 id="daten">Welche Daten enthält ein GiroCode?</h2>
            <p>
              Ein GiroCode enthält einen strukturierten Text, der in mehreren Zeilen organisiert ist.
              Zu den typischen Feldern gehören:
            </p>
            <ul>
              <li>
                <strong>Name des Empfängers</strong> (Kontoinhaber)
              </li>
              <li>
                <strong>IBAN</strong> des Empfängers
              </li>
              <li>
                <strong>BIC</strong> (teilweise optional, je nach Bank und Land)
              </li>
              <li>
                <strong>Betrag</strong> in Euro mit zwei Dezimalstellen (z.&nbsp;B. EUR12.34)
              </li>
              <li>
                <strong>Verwendungszweck</strong> – häufig mit Rechnungsnummer oder Mitgliedsnummer
              </li>
            </ul>
            <p>
              Nicht jedes Feld muss zwingend gesetzt werden: Du kannst zum Beispiel den Betrag offen
              lassen, sodass der Zahler diesen selbst einträgt. Wichtig ist jedoch, dass das
              Pflichtgerüst des EPC-Standards eingehalten wird.
            </p>
          </section>

          <section aria-labelledby="vorteile" className="mt-8">
            <h2 id="vorteile">Vorteile eines GiroCodes</h2>
            <p>GiroCodes bringen gleich mehrere Vorteile mit sich:</p>
            <ul>
              <li>
                <strong>Fehlerreduktion:</strong> IBAN und Betrag müssen nicht mehr per Hand
                abgetippt werden – Tippfehler und Zahlendreher werden deutlich seltener.
              </li>
              <li>
                <strong>Geschwindigkeit:</strong> Eine Überweisung ist in wenigen Sekunden vorbereitet
                und kann sofort freigegeben werden.
              </li>
              <li>
                <strong>Kompatibilität:</strong> Viele <strong>Banking-Apps</strong> im
                deutschsprachigen Raum unterstützen SEPA-QR / GiroCode bereits heute.
              </li>
              <li>
                <strong>Professionalität:</strong> Rechnungen mit GiroCode wirken moderner und
                kundenfreundlich.
              </li>
            </ul>
          </section>

          <section aria-labelledby="zielgruppen" className="mt-8">
            <h2 id="zielgruppen">Wer kann GiroCodes nutzen?</h2>
            <p>
              Grundsätzlich kann <strong>jede Person mit einem SEPA-Konto</strong> GiroCodes nutzen –
              sowohl als Zahler als auch als Rechnungssteller. Besonders geeignet ist der Einsatz für:
            </p>
            <ul>
              <li>
                <strong>Selbstständige &amp; Freelancer</strong>, die ihren Kunden das Bezahlen
                erleichtern möchten.
              </li>
              <li>
                <strong>Vereine</strong>, zum Beispiel für Mitgliedsbeiträge oder Spendenaktionen.
              </li>
              <li>
                <strong>Privatpersonen</strong>, etwa für Sammelbestellungen, Geschenke oder
                gemeinsame Ausgaben.
              </li>
            </ul>
          </section>

          <section aria-labelledby="generator-link" className="mt-8">
            <h2 id="generator-link">GiroCode kostenlos online erstellen</h2>
            <p>
              Mit unserem <strong>GiroCode Generator</strong> kannst du in wenigen Schritten einen
              SEPA-QR-/EPC-Code erstellen – komplett lokal im Browser, ohne dass Daten an unseren
              Server gesendet werden. Optional erzeugst du zusätzlich eine{' '}
              <strong>Rechnungs-PDF mit eingebettetem QR-Code</strong>.
            </p>
          </section>

          <section aria-labelledby="faq" className="mt-10">
            <h2 id="faq">Häufige Fragen zum GiroCode</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Ist ein GiroCode nur in Deutschland nutzbar?
                </h3>
                <p className="text-sm text-slate-300">
                  Der GiroCode basiert auf dem SEPA-Standard und ist damit grundsätzlich im gesamten
                  SEPA-Raum nutzbar. Ob eine bestimmte Banking-App den Code unterstützt, hängt von der
                  jeweiligen Bank ab. Viele Institute in Deutschland, Österreich und weiteren
                  SEPA-Ländern bieten bereits einen QR-Scanner an.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Kann ich den GiroCode auch ohne Betrag erstellen?
                </h3>
                <p className="text-sm text-slate-300">
                  Ja. Wenn du keinen Betrag angibst, bleibt das Feld in der Überweisungsmaske leer
                  und der Zahler trägt den gewünschten Betrag selbst ein. Das ist zum Beispiel bei
                  Spendenaktionen oder offenen Beiträgen sinnvoll.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Welche Daten sind beim GiroCode Pflicht?
                </h3>
                <p className="text-sm text-slate-300">
                  Pflicht sind in der Regel der Name des Empfängers und die IBAN. Andere Felder wie
                  BIC, Betrag oder Verwendungszweck können – je nach Anwendungsfall – optional sein.
                  Für eine reibungslose Zuordnung empfiehlt sich aber ein aussagekräftiger
                  Verwendungszweck.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Was kostet die Nutzung eines GiroCodes?
                </h3>
                <p className="text-sm text-slate-300">
                  Die Nutzung eines GiroCodes ist in der Regel kostenlos. Es fallen lediglich die
                  üblichen Gebühren deiner Bank für SEPA-Überweisungen an, sofern diese nicht ohnehin
                  kostenlos sind. Unser Generator selbst ist dauerhaft kostenfrei nutzbar.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-10 flex flex-col gap-6 border-t border-slate-800 pt-8">
            <p className="mb-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Jetzt GiroCode erstellen
                <span aria-hidden>→</span>
              </Link>
            </p>
            <div>
              <h2 className="text-sm font-semibold text-slate-50">Weitere Artikel</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li><Link href="/wissen/epc-standard" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">EPC-Standard erklärt</Link></li>
                <li><Link href="/wissen/iban-bic" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">IBAN &amp; BIC im GiroCode</Link></li>
                <li><Link href="/wissen/rechnung" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">GiroCode auf Rechnungen</Link></li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

