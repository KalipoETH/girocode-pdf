import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Betrag & Verwendungszweck im GiroCode richtig eingeben',
  description:
    'Betrag und Verwendungszweck im GiroCode richtig nutzen: Formate, Best Practices, Branchenbeispiele, steuerliche Bedeutung und häufige Fehler vermeiden.',
  keywords: 'GiroCode Betrag Format, Verwendungszweck GiroCode, Rechnungsnummer QR Code, SEPA Verwendungszweck 140 Zeichen',
};

export default function WissenBetragUndZweckPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/wissen" className="text-sky-400 hover:text-sky-300">Wissen</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">Betrag &amp; Verwendungszweck</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Praxis · Betrag &amp; Verwendungszweck
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Betrag &amp; Verwendungszweck im GiroCode richtig eingeben
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Der richtige Umgang mit Betrag und Verwendungszweck im GiroCode entscheidet darüber,
              wie gut Zahlungen später zugeordnet werden können – und ob die Buchhaltung reibungslos
              funktioniert. Hier erfährst du alles, was du dazu wissen musst.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">

          {/* ─── SECTION 1: Betrag ─── */}
          <section aria-labelledby="betrag-format">
            <h2 id="betrag-format">Der Betrag im GiroCode</h2>

            <h3>Format: EUR12.34</h3>
            <p>
              Im GiroCode-Standard (EPC-Payload) wird der Betrag in einem spezifischen Format
              angegeben: <strong>Währungscode direkt gefolgt vom Betrag</strong>, wobei der Punkt
              als Dezimaltrennzeichen verwendet wird. Kein Leerzeichen, kein Komma.
            </p>
            <div className="not-prose my-4 rounded-lg border border-slate-700 bg-slate-900/50 p-4">
              <p className="mb-2 text-sm font-medium text-slate-300">Richtige Formate:</p>
              <ul className="space-y-1 text-sm text-emerald-400">
                <li><code>EUR12.34</code> – 12 Euro und 34 Cent</li>
                <li><code>EUR1250.00</code> – 1.250 Euro</li>
                <li><code>EUR0.50</code> – 50 Cent</li>
              </ul>
              <p className="mb-2 mt-4 text-sm font-medium text-slate-300">Falsche Formate (führen zu Fehlern):</p>
              <ul className="space-y-1 text-sm text-red-400">
                <li><code>EUR 12.34</code> – Leerzeichen nach EUR</li>
                <li><code>EUR12,34</code> – Komma statt Punkt</li>
                <li><code>12.34 EUR</code> – Währung am Ende</li>
                <li><code>12.34</code> – kein Währungscode</li>
              </ul>
            </div>

            <h3>Ist der Betrag Pflicht?</h3>
            <p>
              Nein, der Betrag ist im EPC-Standard <strong>optional</strong>. Du kannst das
              Betragsfeld leer lassen. In diesem Fall erscheint das Betragsfeld in der
              Überweisungsmaske der Banking-App leer, und der Zahler trägt den Betrag selbst ein.
            </p>

            <h3>Was passiert ohne Betrag?</h3>
            <p>
              Wenn kein Betrag im GiroCode kodiert ist:
            </p>
            <ul>
              <li>Die Banking-App zeigt eine leere Überweisungsmaske mit vorausgefüllter IBAN, Name und Verwendungszweck</li>
              <li>Der Zahler muss den Betrag manuell eingeben</li>
              <li>Der Zahler kann einen beliebigen Betrag eingeben – du hast keine Kontrolle darüber</li>
            </ul>

            <h3>Maximaler Betrag</h3>
            <p>
              Der EPC-Standard definiert den maximalen Betrag mit <strong>999.999.999,99 EUR</strong>
              (knapp eine Milliarde Euro). In der Praxis gelten außerdem die Überweisungslimits
              deiner Bank und der Bank des Zahlers.
            </p>

            <h3>Rundungsregeln</h3>
            <p>
              Beträge werden auf <strong>zwei Dezimalstellen</strong> gerundet. Das Format erlaubt
              keine drei Dezimalstellen. Falls du mit Beträgen arbeitest, die durch Steuerberechnungen
              entstehen und mehr Nachkommastellen haben, muss kaufmännisch gerundet werden.
            </p>
          </section>

          {/* ─── SECTION 2: Vor/Nachteile ohne Betrag ─── */}
          <section aria-labelledby="ohne-betrag" className="mt-8">
            <h2 id="ohne-betrag">Vor- und Nachteile: GiroCode mit und ohne Betrag</h2>

            <h3>Wann ist kein Betrag sinnvoll?</h3>
            <ul>
              <li>
                <strong>Spenden-QR-Codes:</strong> Für Spendenaufrufe von Vereinen oder
                gemeinnützigen Organisationen, bei denen der Spender selbst entscheidet,
                wie viel er geben möchte.
              </li>
              <li>
                <strong>Variable Preise:</strong> Bei Dienstleistungen, deren Endpreis erst
                nach Abschluss der Arbeit feststeht (z.&nbsp;B. Handwerker mit Stundensatz).
              </li>
              <li>
                <strong>Allgemeine Zahlungsaufforderungen:</strong> Ein GiroCode auf der
                Vereins-Website für beliebige Zahlungen.
              </li>
            </ul>

            <h3>Wann ist ein fester Betrag besser?</h3>
            <ul>
              <li>
                <strong>Rechnungen:</strong> Wenn der Bruttobetrag feststeht, sollte er immer
                kodiert werden. So wird sichergestellt, dass der Zahler exakt den richtigen
                Betrag überweist.
              </li>
              <li>
                <strong>Mitgliedsbeiträge:</strong> Monatliche oder jährliche Fixbeträge für
                Vereinsmitglieder, Abonnements etc.
              </li>
              <li>
                <strong>Partiell-Zahlungen:</strong> Auch Anzahlungen oder Ratenzahlungen
                können mit festem Betrag kodiert werden.
              </li>
            </ul>

            <h3>Praxisbeispiel</h3>
            <p>
              Ein Webdesigner stellt eine Rechnung über 1.200 EUR netto + 19&nbsp;% USt. = 1.428 EUR
              brutto. Er kodiert <code>EUR1428.00</code> im GiroCode. Der Kunde scannt den Code,
              sieht sofort den korrekten Betrag und überweist – kein Tippfehler möglich.
            </p>
          </section>

          {/* ─── SECTION 3: Verwendungszweck ─── */}
          <section aria-labelledby="zweck-laenge" className="mt-8">
            <h2 id="zweck-laenge">Der Verwendungszweck im GiroCode</h2>

            <h3>Maximale Zeichenlänge: 140 Zeichen</h3>
            <p>
              Der Verwendungszweck im GiroCode-Standard ist auf <strong>140 Zeichen</strong>
              begrenzt. Das mag viel erscheinen, ist aber schnell aufgebraucht, wenn man
              Rechnungsnummer, Kundennummer, Projekttitel und Datum unterbringen möchte.
            </p>

            <h3>Erlaubte Zeichen</h3>
            <p>
              Mit UTF-8-Encoding (Standard in Version 002) sind grundsätzlich alle gängigen
              Zeichen erlaubt, einschließlich Umlaute (ä, ö, ü, ß). Allerdings sollte man
              bei der Praxis darauf achten, dass:
            </p>
            <ul>
              <li>Sonderzeichen wie <code>&amp;</code>, <code>&lt;</code>, <code>&gt;</code> von manchen Apps nicht korrekt dargestellt werden</li>
              <li>Emojis zwar technisch möglich sind, aber von Banking-Apps oft ignoriert oder abgelehnt werden</li>
              <li>Zeilenumbrüche im Verwendungszweck nicht erlaubt sind</li>
            </ul>

            <h3>Was gehört in den Verwendungszweck?</h3>
            <p>
              Für eine optimale Zuordnung in der Buchhaltung empfehlen sich folgende Angaben:
            </p>
            <ul>
              <li><strong>Rechnungsnummer</strong> – z.&nbsp;B. RE-2024-0042</li>
              <li><strong>Kundennummer</strong> – z.&nbsp;B. KD-1234 (falls vorhanden)</li>
              <li><strong>Projektname oder -nummer</strong> – z.&nbsp;B. Projekt Website-Relaunch</li>
              <li><strong>Zeitraum</strong> – z.&nbsp;B. März 2024 oder Q1/2024</li>
            </ul>
          </section>

          {/* ─── SECTION 4: Best Practices ─── */}
          <section aria-labelledby="best-practices" className="mt-8">
            <h2 id="best-practices">Best Practices für den Verwendungszweck</h2>

            <h3>Rechnungsnummer immer angeben</h3>
            <p>
              Die wichtigste Information im Verwendungszweck ist die <strong>Rechnungsnummer</strong>.
              Sie ermöglicht es dir, den Zahlungseingang eindeutig einer offenen Rechnung
              zuzuordnen – selbst wenn mehrere Zahlungen am gleichen Tag eingehen oder der
              Zahler einen anderen Betrag überweist als erwartet.
            </p>

            <h3>Struktur des Verwendungszwecks</h3>
            <p>
              Eine bewährte Struktur für den Verwendungszweck:
            </p>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`RE-2024-0042 KD-5678 Webdesign Q1/2024`}
            </pre>
            <p>
              Diese kompakte Schreibweise enthält alle relevanten Informationen in unter 45 Zeichen –
              genug Platz für weitere Details.
            </p>

            <h3>Für Vereine: Mitgliedsbeitrag</h3>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`Mitgliedsbeitrag 2024 Mitgl.Nr. 1234`}
            </pre>

            <h3>Für Privatpersonen</h3>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`Anteil Restaurantbesuch 15.03.2024`}
            </pre>

            <h3>Datum oder Zeitraum immer angeben?</h3>
            <p>
              Das Datum ist <strong>nicht zwingend erforderlich</strong>, kann aber die
              Buchungszuordnung deutlich erleichtern, insbesondere bei wiederkehrenden Zahlungen
              oder Rechnungen für mehrere Perioden.
            </p>
          </section>

          {/* ─── SECTION 5: Häufige Fehler ─── */}
          <section aria-labelledby="fehler" className="mt-8">
            <h2 id="fehler">Häufige Fehler beim Verwendungszweck</h2>

            <h3>Text zu lang – wird abgeschnitten</h3>
            <p>
              Wenn der Verwendungszweck mehr als 140 Zeichen enthält, reagieren unterschiedliche
              Systeme unterschiedlich: Manche Generator schneiden den Text stillschweigend ab,
              andere zeigen einen Fehler. Unser Generator zeigt einen Warnhinweis, wenn du dich
              der Grenze näherst.
            </p>

            <h3>Sonderzeichen mit Problemen</h3>
            <p>
              Die Zeichen <code>/</code>, <code>-</code> und Punkt <code>.</code> funktionieren
              problemlos. Problematisch können sein:
            </p>
            <ul>
              <li><code>&amp;</code> – in HTML-Kontexten als <code>&amp;amp;</code> kodiert</li>
              <li>Anführungszeichen (<code>&quot;</code>) – können Parsing-Fehler verursachen</li>
              <li>Zeilenumbrüche – sind im EPC-Payload nicht erlaubt</li>
            </ul>

            <h3>Fehlende Rechnungsnummer</h3>
            <p>
              Der häufigste buchhalterische Fehler: Der Verwendungszweck enthält zwar eine
              Beschreibung (<em>„Website-Projekt"</em>), aber keine Rechnungsnummer. Das macht
              die Zuordnung im Zahlungseingang mühsam und fehleranfällig.
            </p>

            <h3>Zu vage oder unklare Beschreibungen</h3>
            <p>
              Verwendungszwecke wie <em>„Zahlung"</em>, <em>„Rechnung"</em> oder{' '}
              <em>„Für dich"</em> sind für die Buchhaltung praktisch wertlos. Immer so spezifisch
              wie möglich sein.
            </p>
          </section>

          {/* ─── SECTION 6: Branchen ─── */}
          <section aria-labelledby="branchen" className="mt-8">
            <h2 id="branchen">Verwendungszweck für verschiedene Branchen</h2>

            <h3>Freelancer &amp; Agenturen</h3>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`RE-2024-0042 Webentwicklung Projekt XY`}
            </pre>
            <p>
              Rechnungsnummer an erster Stelle, dann Leistungsart und Projektreferenz.
              Kundennummer optional, wenn in der Software hinterlegt.
            </p>

            <h3>Handwerker</h3>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`Auftrag 2024-128 Badezimmer-Renovierung Musterstr. 5`}
            </pre>
            <p>
              Auftragsnummer, kurze Beschreibung der Leistung, ggf. Adresse des Objekts.
            </p>

            <h3>Vereine</h3>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`Jahresbeitrag 2024 MitglNr. 0815`}
            </pre>
            <p>
              Beitragsart, Jahr und Mitgliedsnummer reichen in der Regel aus.
            </p>

            <h3>Online-Shops</h3>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`Bestellung #20241203-4521`}
            </pre>
            <p>
              Die Bestellnummer als einziges Zuordnungsmerkmal ist hier meist ausreichend
              und klar.
            </p>

            <h3>Dienstleister (Abo-Modelle)</h3>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`Abo Monat 03/2024 Kundennr. 9876`}
            </pre>
          </section>

          {/* ─── SECTION 7: Steuerliche Bedeutung ─── */}
          <section aria-labelledby="steuer" className="mt-8">
            <h2 id="steuer">Steuerliche Bedeutung des Verwendungszwecks</h2>

            <h3>Buchungsbelege und Verwendungszweck</h3>
            <p>
              Aus steuerrechtlicher Sicht ist der Verwendungszweck einer Überweisung ein wichtiger
              Bestandteil des Buchungsbelegs. Er dient als Nachweis, dass eine bestimmte Zahlung
              einer bestimmten Leistung zuzuordnen ist. Das Finanzamt kann bei einer Betriebsprüfung
              nach eindeutigen Zuordnungsnachweisen fragen.
            </p>

            <h3>Anforderungen des Finanzamts</h3>
            <p>
              Das Finanzamt verlangt keine spezifische Formulierung im Verwendungszweck, aber:
            </p>
            <ul>
              <li>Der Zusammenhang zwischen Zahlung und Leistung muss <strong>nachvollziehbar</strong> sein</li>
              <li>Bei Betriebsausgaben muss der <strong>betriebliche Zweck</strong> erkennbar sein</li>
              <li>Privatentnahmen und betriebliche Zahlungen sollten klar <strong>getrennt</strong> sein</li>
            </ul>

            <h3>Tipps für die Buchhaltung</h3>
            <ul>
              <li>
                <strong>Rechnungsnummer im Verwendungszweck</strong> erleichtert das automatische
                Matching in der Buchhaltungssoftware erheblich.
              </li>
              <li>
                <strong>Konsistente Formulierungen</strong> über alle Rechnungen hinweg erleichtern
                die spätere Auswertung und Prüfbarkeit.
              </li>
              <li>
                <strong>Kundennummer</strong> hilft, wenn ein Kunde mehrere Rechnungen in kurzer
                Zeit bezahlt.
              </li>
              <li>
                Verwende in deiner Buchhaltungssoftware automatisches <strong>IBAN-Matching</strong>,
                um eingehende Zahlungen ohne manuelle Zuordnung zu verbuchen.
              </li>
            </ul>
          </section>

          {/* ─── SECTION 8: Affiliate ─── */}
          <section aria-labelledby="software" className="mt-10">
            <h2 id="software">Professionelle Rechnungsstellung mit korrektem Verwendungszweck</h2>
            <p>
              Wer regelmäßig Rechnungen stellt, profitiert von einer Software, die den
              Verwendungszweck automatisch aus Rechnungsnummer und Kundendaten zusammenstellt
              und direkt in den GiroCode einbettet:
            </p>

            <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
                <h3 className="mb-2 text-base font-semibold text-slate-50">FastBill</h3>
                <p className="mb-3 text-sm text-slate-300">
                  FastBill generiert den Verwendungszweck automatisch aus der Rechnungsnummer und
                  bettet ihn direkt in den GiroCode ein. So musst du dich nie darum kümmern, ob
                  das Format korrekt ist – die Software erledigt das für dich.
                </p>
                <a
                  href="https://www.awin1.com/cread.php?awinmid=20766&awinaffid=2793610"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-sky-500"
                >
                  FastBill kostenlos testen *
                </a>
              </div>

              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
                <h3 className="mb-2 text-base font-semibold text-slate-50">sevDesk</h3>
                <p className="mb-3 text-sm text-slate-300">
                  sevDesk vergibt Rechnungsnummern automatisch und trägt sie in den GiroCode-Verwendungszweck
                  ein. Die DATEV-Kompatibilität sorgt dafür, dass dein Steuerberater die Daten
                  direkt übernehmen kann.
                </p>
                <a
                  href="https://www.awin1.com/cread.php?awinmid=15944&awinaffid=2793610"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-sky-500"
                >
                  sevDesk kostenlos testen *
                </a>
              </div>
            </div>

            <p className="text-xs text-slate-500">
              * Affiliate-Link – Wenn du über diesen Link kaufst, erhalten wir eine kleine
              Provision ohne Mehrkosten für dich.
            </p>
          </section>

          {/* ─── Footer Links ─── */}
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
                <li><Link href="/wissen/rechnung" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">GiroCode auf Rechnungen – Leitfaden</Link></li>
                <li><Link href="/wissen/iban-bic" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">IBAN &amp; BIC im GiroCode</Link></li>
                <li><Link href="/wissen/epc-standard" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">EPC-Standard erklärt</Link></li>
                <li><Link href="/wissen/girocode" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Was ist ein GiroCode?</Link></li>
                <li><Link href="/wissen/banking-apps" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Banking-Apps mit GiroCode</Link></li>
                <li><Link href="/wissen/scannen" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">GiroCode scannen</Link></li>
              </ul>
            </div>

            <div className="rounded-lg border border-slate-700 bg-slate-800/40 p-4 text-xs text-slate-400">
              <strong className="text-slate-300">* Affiliate-Hinweis:</strong> Mit einem * gekennzeichnete
              Links sind Affiliate-Links. Wenn du über diese Links kaufst, erhalten wir eine kleine
              Provision – für dich entstehen keine Mehrkosten.
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
