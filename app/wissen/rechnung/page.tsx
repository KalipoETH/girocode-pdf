import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode auf Rechnungen – So geht’s richtig',
  description:
    'GiroCode auf Rechnungen integrieren: Platzierung, Pflichtangaben und wie du mit unserem Tool eine PDF-Rechnung mit SEPA-QR-Code erstellst.',
};

export default function WissenRechnungPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/wissen" className="text-sky-400 hover:text-sky-300">Wissen</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">GiroCode auf Rechnungen</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Praxis · GiroCode auf Rechnungen
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode auf Rechnungen – So geht&apos;s richtig
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Ein GiroCode auf der Rechnung macht Bezahlen für deine Kundinnen und Kunden deutlich
              komfortabler. Gleichzeitig bleiben alle rechtlichen Anforderungen an Rechnungen
              erfüllt – wenn du ein paar Punkte beachtest.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="warum-girocode">
            <h2 id="warum-girocode">Warum ein GiroCode auf Rechnungen?</h2>
            <p>
              Ein auf der Rechnung platzierter <strong>GiroCode (SEPA-QR)</strong> ermöglicht es
              deinen Kundinnen und Kunden, die Überweisung mit wenigen Klicks zu erledigen. Statt
              IBAN, Betrag und Verwendungszweck abzutippen, wird einfach der QR-Code mit der
              Banking-App gescannt.
            </p>
            <p>Die Vorteile liegen auf der Hand:</p>
            <ul>
              <li>
                <strong>Weniger Tippfehler</strong> dank automatischer Übernahme aller Zahlungsdaten.
              </li>
              <li>
                <strong>Schnelleres Bezahlen</strong>, insbesondere bei Rechnungen mit vielen
                Einzelposten.
              </li>
              <li>
                <strong>Professioneller Auftritt</strong> und moderner Eindruck bei deinen Kunden.
              </li>
            </ul>
          </section>

          <section aria-labelledby="platzierung" className="mt-8">
            <h2 id="platzierung">Wo auf der Rechnung platziert man den GiroCode?</h2>
            <p>
              In der Praxis hat sich eine Platzierung <strong>im unteren rechten Bereich</strong> der
              Rechnung bewährt – etwa in der Nähe der klassischen Zahlungsinformationen. Wichtig ist,
              dass der Code:
            </p>
            <ul>
              <li>
                <strong>gut sichtbar</strong> ist und nicht von anderen Elementen überlagert wird,
              </li>
              <li>
                ausreichend <strong>weißen Rand (Ruhezone)</strong> um sich herum hat,
              </li>
              <li>
                nicht über Falzkanten oder Lochränder läuft, wenn die Rechnung gedruckt wird.
              </li>
            </ul>
          </section>

          <section aria-labelledby="groesse" className="mt-8">
            <h2 id="groesse">Mindestgröße des QR-Codes</h2>
            <p>
              Damit Banking-Apps den QR-Code zuverlässig scannen können, sollte er eine bestimmte
              Mindestgröße einhalten. In der Praxis haben sich Kantenlängen von etwa{' '}
              <strong>25–35 mm</strong> bewährt. Auf digitalen PDFs darf der Code natürlich kleiner
              erscheinen, wird beim Zoomen aber wieder gut lesbar.
            </p>
            <p>
              Wichtig ist eine <strong>ausreichende Auflösung</strong>, insbesondere wenn die
              Rechnung später gedruckt werden soll. Unser Generator bettet daher einen hochwertigen
              QR-Code direkt in die Rechnungs-PDF ein.
            </p>
          </section>

          <section aria-labelledby="pflichtangaben" className="mt-8">
            <h2 id="pflichtangaben">Pflichtangaben auf einer Rechnung (§ 14 UStG)</h2>
            <p>
              Unabhängig vom GiroCode müssen Rechnungen bestimmte Pflichtangaben nach{' '}
              <strong>§ 14 UStG</strong> enthalten, zum Beispiel:
            </p>
            <ul>
              <li>vollständiger Name und Anschrift des leistenden Unternehmers und des Leistungsempfängers</li>
              <li>Steuernummer oder Umsatzsteuer-Identifikationsnummer</li>
              <li>Ausstellungsdatum der Rechnung</li>
              <li>fortlaufende Rechnungsnummer</li>
              <li>Menge und Art der gelieferten Gegenstände oder Umfang und Art der Leistung</li>
              <li>Zeitpunkt der Lieferung oder Leistung</li>
              <li>Entgelt und darauf entfallender Steuerbetrag sowie Steuersatz</li>
            </ul>
            <p>
              Der GiroCode ersetzt diese Angaben nicht, sondern ergänzt sie lediglich als
              <strong>komfortable Bezahloption</strong>.
            </p>
          </section>

          <section aria-labelledby="kleinunternehmer" className="mt-8">
            <h2 id="kleinunternehmer">Kleinunternehmerregelung (§ 19 UStG)</h2>
            <p>
              Wenn du die <strong>Kleinunternehmerregelung nach § 19 UStG</strong> nutzt, darfst du
              keine Umsatzsteuer ausweisen. In diesem Fall muss die Rechnung einen entsprechenden
              Hinweis enthalten, etwa:
            </p>
            <p>
              <em>
                „Gemäß § 19 UStG wird keine Umsatzsteuer berechnet und ausgewiesen (Kleinunternehmerregelung).“
              </em>
            </p>
            <p>
              Dieser Hinweis kann im Textteil der Rechnung oder in der Fußzeile platziert werden und
              gilt unabhängig vom eingesetzten GiroCode.
            </p>
          </section>

          <section aria-labelledby="tool" className="mt-8">
            <h2 id="tool">Wie unser PDF-Tool die Rechnung erstellt</h2>
            <p>
              Unser <strong>GiroCode Generator</strong> bietet neben dem QR-Code auch die Möglichkeit,
              eine <strong>Rechnungs-PDF mit eingebettetem GiroCode</strong> zu erzeugen. Du gibst
              dazu:
            </p>
            <ul>
              <li>Empfänger- und Rechnungsdaten,</li>
              <li>die gewünschte IBAN und optional den BIC,</li>
              <li>den Rechnungsbetrag und Verwendungszweck (z.&nbsp;B. Rechnungsnummer)</li>
            </ul>
            <p>
              Die Anwendung erzeugt daraus im Browser eine fertige PDF-Rechnung, in der der GiroCode
              an der passenden Stelle platziert ist. Alle Daten werden <strong>ausschließlich lokal
              verarbeitet</strong> und nicht an einen Server übertragen.
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
                <li><Link href="/wissen/betrag-und-zweck" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Betrag &amp; Verwendungszweck</Link></li>
                <li><Link href="/wissen/banking-apps" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Banking-Apps Übersicht</Link></li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

