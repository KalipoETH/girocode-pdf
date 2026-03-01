import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Betrag & Verwendungszweck im GiroCode richtig eingeben',
  description:
    'So gibst du Betrag und Verwendungszweck im GiroCode korrekt ein – Format, Limits und praktische Tipps für Rechnungen und Zahlungen.',
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
              wie gut Zahlungen später zugeordnet werden können. Hier erfährst du, welche
              Möglichkeiten und Grenzen es gibt.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="betrag-format">
            <h2 id="betrag-format">Betrag: Format und Optionen</h2>
            <p>
              Im GiroCode wird der Betrag in der Regel im Format <strong>EUR12.34</strong> angegeben
              – also Währungscode <code>EUR</code> gefolgt von einem Betrag mit zwei Dezimalstellen.
              Beispiel: <code>EUR19.99</code>.
            </p>
            <p>
              Wichtig: Der Betrag ist <strong>optional</strong>. Du kannst also entscheiden, ob du
              einen festen Betrag vorgibst oder das Feld leer lässt. Beide Varianten haben ihre
              Vorteile:
            </p>
            <ul>
              <li>
                <strong>Mit Betrag:</strong> Ideal für Rechnungen mit festem Endbetrag oder
                standardisierte Beiträge (z.&nbsp;B. Mitgliedsbeiträge).
              </li>
              <li>
                <strong>Ohne Betrag:</strong> Sinnvoll bei Spenden oder freiwilligen Zahlungen, bei
                denen der Zahler den Betrag selbst wählen soll.
              </li>
            </ul>
          </section>

          <section aria-labelledby="zweck-laenge" className="mt-8">
            <h2 id="zweck-laenge">Verwendungszweck: Maximale Länge und Inhalt</h2>
            <p>
              Der Verwendungszweck im GiroCode ist auf etwa <strong>140 Zeichen</strong> begrenzt. In
              diesem Rahmen solltest du alle Informationen unterbringen, die für die Zuordnung der
              Zahlung wichtig sind.
            </p>
            <p>Typische Inhalte sind zum Beispiel:</p>
            <ul>
              <li>Rechnungsnummer (z.&nbsp;B. RE-2024-015)</li>
              <li>Kundennummer oder Mitgliedsnummer</li>
              <li>Name oder Kurzbeschreibung der Leistung</li>
            </ul>
            <p>
              Versuche, den Verwendungszweck <strong>klar und eindeutig</strong> zu formulieren.
              Lange Zusatztexte oder interne Notizen solltest du vermeiden, um die Zeichenbegrenzung
              nicht auszureizen.
            </p>
          </section>

          <section aria-labelledby="rechnungsnummer" className="mt-8">
            <h2 id="rechnungsnummer">Rechnungsnummer im Verwendungszweck</h2>
            <p>
              Für <strong>Selbstständige und Unternehmen</strong> ist die Rechnungsnummer das
              wichtigste Zuordnungsmerkmal. Sie sollte daher unbedingt im Verwendungszweck erscheinen,
              etwa in der Form:
            </p>
            <p>
              <code>Rechnung RE-2024-015, Kunde 12345</code>
            </p>
            <p>
              So kannst du die Zahlung später in der Buchhaltung schnell zuordnen – auch dann, wenn
              der Zahler im Freitextfeld der Überweisung zusätzlich etwas ergänzt oder einzelne
              Angaben ändert.
            </p>
          </section>

          <section aria-labelledby="betrag-leer" className="mt-8">
            <h2 id="betrag-leer">Was passiert, wenn der Betrag leer bleibt?</h2>
            <p>
              Lässt du den Betrag im GiroCode frei, füllt die Banking-App bei einem Scan lediglich
              die Felder <strong>Empfänger, IBAN (und ggf. BIC) sowie Verwendungszweck</strong> aus.
              Das Betragsfeld bleibt leer.
            </p>
            <p>
              Der Zahler muss den Betrag dann manuell eintragen. Das ist insbesondere sinnvoll, wenn
              du bewusst <strong>keinen festen Betrag vorgeben möchtest</strong> – etwa bei Spenden,
              Sammelaktionen oder flexiblen Abrechnungen.
            </p>
          </section>

          <section aria-labelledby="empfehlungen-selbststaendige" className="mt-8">
            <h2 id="empfehlungen-selbststaendige">Empfehlungen für Selbstständige</h2>
            <p>Für Selbstständige und kleine Unternehmen haben sich folgende Best Practices bewährt:</p>
            <ul>
              <li>
                <strong>Festen Betrag verwenden</strong>, wenn du eine konkrete Rechnung mit
                feststehendem Gesamtbetrag verschickst.
              </li>
              <li>
                <strong>Rechnungsnummer und ggf. Kundennummer</strong> immer im Verwendungszweck
                hinterlegen.
              </li>
              <li>
                Darauf achten, dass der Verwendungszweck <strong>kurz und eindeutig</strong> bleibt –
                interne Notizen gehören eher ins eigene System als in den GiroCode.
              </li>
            </ul>
            <p>
              Mit unserem Generator kannst du Betrag und Verwendungszweck komfortabel pflegen und
              dazu passend eine <strong>Rechnungs-PDF mit eingebettetem GiroCode</strong> erstellen.
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
                <li><Link href="/wissen/rechnung" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">GiroCode auf Rechnungen</Link></li>
                <li><Link href="/wissen/iban-bic" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">IBAN &amp; BIC im GiroCode</Link></li>
                <li><Link href="/wissen/girocode" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Was ist ein GiroCode?</Link></li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

