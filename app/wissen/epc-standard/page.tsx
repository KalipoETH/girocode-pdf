import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'EPC-Standard & SEPA-QR – Technischer Aufbau erklärt',
  description:
    'Der EPC-Standard für GiroCodes: Aufbau, Felder und Regeln des SEPA-QR-Codes einfach und praxisnah erklärt.',
};

export default function WissenEpcStandardPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/wissen" className="text-sky-400 hover:text-sky-300">Wissen</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">EPC-Standard &amp; SEPA-QR</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Technik · EPC-Standard &amp; SEPA-QR
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              EPC-Standard &amp; SEPA-QR – Technischer Aufbau erklärt
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Hinter jedem GiroCode steckt ein klar definiertes Textformat, das vom European Payments
              Council (EPC) spezifiziert wird. Hier erfährst du, wie der EPC-Payload aufgebaut ist
              und welche Regeln gelten.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400">
          <section aria-labelledby="was-ist-epc">
            <h2 id="was-ist-epc">Was ist der EPC-Standard?</h2>
            <p>
              Der <strong>European Payments Council (EPC)</strong> definiert technische Standards für
              Zahlungen im SEPA-Raum. Einer dieser Standards beschreibt, wie eine SEPA-Überweisung in
              einem QR-Code – also als <strong>SEPA-QR- oder GiroCode</strong> – kodiert wird. Ziel
              ist, dass Banken und Zahlungsdienstleister europaweit dasselbe Format verstehen und so
              Überweisungen aus einem QR-Code zuverlässig erstellen können.
            </p>
            <p>
              Der EPC-Standard legt dabei sowohl die <strong>Reihenfolge der Felder</strong> als auch
              deren <strong>maximale Längen</strong> und zulässige Zeichensätze fest. So wird
              sichergestellt, dass ein in Deutschland erzeugter GiroCode auch von einer Banking-App
              in einem anderen SEPA-Land korrekt gelesen werden kann.
            </p>
          </section>

          <section aria-labelledby="aufbau" className="mt-8">
            <h2 id="aufbau">Aufbau des EPC-Payloads (Zeile für Zeile)</h2>
            <p>Ein EPC-Payload besteht typischerweise aus mehreren Zeilen Text, zum Beispiel:</p>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-3 text-xs text-slate-200">
              {`BCD
002
1
SCT
BICBANKXXX
Max Mustermann
DE02120300000000202051
EUR12.34
Rechnung 2024-001`}
            </pre>
            <p>Die wichtigsten Zeilen im Überblick:</p>
            <ul>
              <li>
                <strong>Zeile 1 – Service Tag (BCD):</strong> Kennzeichnet das Format als Bank-QR im
                EPC-Schema.
              </li>
              <li>
                <strong>Zeile 2 – Version:</strong> Aktuell sind Versionen wie <code>001</code> und{' '}
                <code>002</code> gebräuchlich. Sie legen fest, welche Felder erwartet werden.
              </li>
              <li>
                <strong>Zeile 3 – Encoding:</strong> Gibt an, mit welchem Zeichensatz gearbeitet
                wird, z.&nbsp;B. <code>1</code> für UTF-8.
              </li>
              <li>
                <strong>Zeile 4 – SEPA-Verfahren:</strong> Meist <code>SCT</code> (SEPA Credit
                Transfer) für Überweisungen.
              </li>
              <li>
                <strong>Zeile 5 – BIC:</strong> Bank Identifier Code des Empfängers (in vielen
                Fällen heute optional).
              </li>
              <li>
                <strong>Zeile 6 – Name des Empfängers:</strong> Kontoinhaber, zum Beispiel
                Firmenname oder Privatperson.
              </li>
              <li>
                <strong>Zeile 7 – IBAN:</strong> Vollständige IBAN des Empfängers.
              </li>
              <li>
                <strong>Zeile 8 – Betrag:</strong> Optionaler Betrag im Format <code>EUR12.34</code>.
              </li>
              <li>
                <strong>Zeile 9 – Verwendungszweck:</strong> Freitext, z.&nbsp;B. Rechnungsnummer
                oder Mitgliedsnummer.
              </li>
            </ul>
          </section>

          <section aria-labelledby="versionierung" className="mt-8">
            <h2 id="versionierung">Versionierung: 001 vs. 002</h2>
            <p>
              In der Praxis begegnet man häufig den Versionen <code>001</code> und <code>002</code>.
              Beide beschreiben sehr ähnliche Felder, unterscheiden sich aber in Details der
              Spezifikation, etwa bei erweiterten Funktionen oder künftigen Erweiterungen.
            </p>
            <p>
              Für die meisten Anwendungsfälle – insbesondere im deutschen Raum – reicht die Verwendung
              einer kompatiblen Version aus. Wichtig ist, dass <strong>Banking-Apps</strong> die
              gewählte Version unterstützen. Viele Generatoren nutzen heute eine Version, die von den
              gängigen Banken problemlos akzeptiert wird.
            </p>
          </section>

          <section aria-labelledby="fehlerkorrektur" className="mt-8">
            <h2 id="fehlerkorrektur">Fehlerkorrekturstufe M</h2>
            <p>
              Beim Erzeugen eines QR-Codes wird eine sogenannte <strong>Fehlerkorrekturstufe</strong>{' '}
              gewählt. Für GiroCodes ist in der Regel die Stufe <strong>M</strong> vorgegeben. Sie
              sorgt dafür, dass der Code auch dann noch lesbar ist, wenn ein Teil verdeckt, leicht
              verschmutzt oder unscharf gedruckt ist.
            </p>
            <p>
              Die Wahl der richtigen Fehlerkorrekturstufe ist wichtig: Zu niedrig – und der Code wird
              anfällig für Lesefehler, zu hoch – und der Code wird unnötig groß. Der EPC-Standard
              trifft hier einen praxistauglichen Kompromiss.
            </p>
          </section>

          <section aria-labelledby="laengen" className="mt-8">
            <h2 id="laengen">Maximale Zeichenlängen und Zeichenumfang</h2>
            <p>
              Für die einzelnen Felder gelten <strong>maximale Längen</strong>, um die Kompatibilität
              sicherzustellen. Beispielsweise ist der Name des Empfängers auf eine bestimmte Anzahl
              Zeichen begrenzt und auch der Verwendungszweck darf nur bis zu einer festgelegten Länge
              genutzt werden.
            </p>
            <p>
              Zusätzlich ist der <strong>Zeichensatz eingeschränkt</strong>. Sonderzeichen oder
              Emojis sind in der Regel nicht vorgesehen, um Probleme bei der Verarbeitung zu
              vermeiden. In der Praxis empfiehlt es sich, auf einfache Buchstaben, Zahlen und
              gebräuchliche Satzzeichen zu setzen.
            </p>
          </section>

          <section aria-labelledby="unterschiede" className="mt-8">
            <h2 id="unterschiede">Unterschiede: GiroCode, BezahlCode, Stuzza-QR</h2>
            <p>
              Neben dem <strong>GiroCode</strong> gibt es weitere QR-Formate im Zahlungsverkehr:
            </p>
            <ul>
              <li>
                <strong>BezahlCode:</strong> Ein in Deutschland entwickeltes Format, das neben
                Überweisungen z.&nbsp;B. auch Lastschriften oder Kontaktinformationen abbilden kann.
              </li>
              <li>
                <strong>Stuzza-QR:</strong> Ein in Österreich verbreitetes Format, das ähnlich wie
                der GiroCode SEPA-Zahlungen unterstützt, jedoch eigene Spezifika hat.
              </li>
            </ul>
            <p>
              Für klassische SEPA-Überweisungen im deutschen Raum hat sich der{' '}
              <strong>GiroCode / SEPA-QR nach EPC-Standard</strong> als De-facto-Standard etabliert.
              Er wird von vielen Banking-Apps direkt unterstützt und eignet sich daher besonders gut
              für Rechnungen und Zahlungsanforderungen.
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
                <li><Link href="/wissen/girocode" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Was ist ein GiroCode?</Link></li>
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

