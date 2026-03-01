import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IBAN & BIC im GiroCode – Was muss ich eingeben?',
  description:
    'IBAN und BIC im GiroCode: Format, Pflicht oder optional und wie du die IBAN mit dem Mod-97-Verfahren prüfen kannst.',
};

export default function WissenIbanBicPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/wissen" className="text-sky-400 hover:text-sky-300">Wissen</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">IBAN &amp; BIC</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Grundlagen · IBAN &amp; BIC
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              IBAN &amp; BIC im GiroCode – Was muss ich eingeben?
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Für einen gültigen GiroCode sind vor allem IBAN und – historisch – der BIC relevant.
              Hier erfährst du, wie IBAN und BIC aufgebaut sind, wann sie benötigt werden und wie die
              IBAN-Prüfung funktioniert.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="was-ist-iban">
            <h2 id="was-ist-iban">Was ist eine IBAN?</h2>
            <p>
              Die <strong>IBAN (International Bank Account Number)</strong> ist eine international
              standardisierte Kontonummer. Sie sorgt dafür, dass Zahlungen im SEPA-Raum eindeutig und
              automatisiert zugeordnet werden können. In Deutschland beginnt jede IBAN mit dem
              Länderkennzeichen <strong>DE</strong>.
            </p>
            <p>
              Eine deutsche IBAN hat folgendes Schema:
            </p>
            <ul>
              <li>
                <strong>DE</strong> – Länderkennzeichen
              </li>
              <li>
                <strong>2 Prüfziffern</strong>
              </li>
              <li>
                <strong>8-stellige Bankleitzahl</strong>
              </li>
              <li>
                <strong>10-stellige Kontonummer</strong> (ggf. mit führenden Nullen)
              </li>
            </ul>
            <p>
              Insgesamt hat eine deutsche IBAN also <strong>22 Zeichen</strong>: DE + 2 Prüfziffern +
              18 weitere Stellen.
            </p>
          </section>

          <section aria-labelledby="was-ist-bic" className="mt-8">
            <h2 id="was-ist-bic">Was ist ein BIC?</h2>
            <p>
              Der <strong>BIC (Business Identifier Code)</strong> ist eine internationale
              Kennzeichnung für Banken und Zahlungsdienstleister. Er ist meist 8 oder 11 Zeichen
              lang, zum Beispiel <code>GENODEF1S02</code>. Der BIC gibt an, zu welcher Bank die IBAN
              gehört.
            </p>
            <p>
              Im Alltag begegnet dir der BIC vor allem bei internationalen Überweisungen oder älteren
              Formularen. Im SEPA-Raum wurde der Zwang zur Angabe des BIC für viele Zahlungen
              schrittweise abgeschafft.
            </p>
          </section>

          <section aria-labelledby="bic-pflicht" className="mt-8">
            <h2 id="bic-pflicht">Ist der BIC beim GiroCode Pflicht?</h2>
            <p>
              Im Rahmen der SEPA-Migration war der BIC ursprünglich ein Pflichtfeld. Inzwischen ist er
              für Zahlungen innerhalb des eigenen Landes in vielen Fällen <strong>nicht mehr
              erforderlich</strong>. Banken können die Zielbank anhand der IBAN automatisch
              bestimmen.
            </p>
            <p>
              Beim <strong>GiroCode</strong> ist der BIC in vielen Implementierungen daher{' '}
              <strong>optional</strong>. Manche Generatoren und Banking-Apps akzeptieren einen leeren
              BIC, andere erwarten ihn weiterhin. Wenn du auf maximale Kompatibilität setzen willst,
              ist es sinnvoll, den BIC anzugeben – zwingend notwendig ist er aber oft nicht mehr.
            </p>
          </section>

          <section aria-labelledby="iban-validierung" className="mt-8">
            <h2 id="iban-validierung">IBAN-Validierung: Wie funktioniert der Mod-97-Check?</h2>
            <p>
              Um Eingabefehler zu erkennen, enthält jede IBAN eine <strong>zweistellige Prüfziffer</strong>.
              Diese Prüfziffer wird mit dem sogenannten <strong>Mod-97-Verfahren</strong> berechnet.
              Vereinfacht funktioniert das so:
            </p>
            <ol>
              <li>
                Die ersten vier Zeichen der IBAN (Länderkennzeichen + Prüfziffer) werden ans Ende
                gestellt.
              </li>
              <li>
                Die Buchstaben werden durch Zahlen ersetzt (A=10, B=11, ..., Z=35).
              </li>
              <li>
                Die so entstehende Zahl wird durch <strong>97</strong> geteilt.
              </li>
              <li>
                Wenn der <strong>Rest 1</strong> ist, gilt die IBAN als formal gültig.
              </li>
            </ol>
            <p>
              Unser GiroCode-Generator kann diesen Prüfschritt übernehmen und warnt dich, wenn eine
              IBAN offensichtlich falsch eingegeben wurde – etwa durch Zahlendreher oder fehlende
              Ziffern.
            </p>
          </section>

          <section aria-labelledby="haeufige-fehler" className="mt-8">
            <h2 id="haeufige-fehler">Häufige Fehler bei der IBAN-Eingabe</h2>
            <p>In der Praxis kommen immer wieder ähnliche Fehler vor, zum Beispiel:</p>
            <ul>
              <li>
                <strong>Vertauschte Ziffern</strong> beim Abtippen von Konto- oder BLZ-Teilen.
              </li>
              <li>
                <strong>Zu wenige oder zu viele Stellen</strong>, besonders wenn Leerzeichen
                mitkopiert werden.
              </li>
              <li>
                <strong>Falsches Landeskürzel</strong> bei Konten im Ausland.
              </li>
            </ul>
            <p>
              Mit einer integrierten <strong>IBAN-Prüfung</strong> kannst du schon beim Erstellen des
              GiroCodes sicherstellen, dass die Kontodaten formal korrekt sind. Das spart Rückläufer
              und Rückfragen – gerade bei Rechnungen und Serienzahlungen.
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
                <li><Link href="/wissen/epc-standard" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">EPC-Standard erklärt</Link></li>
                <li><Link href="/wissen/betrag-und-zweck" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Betrag &amp; Verwendungszweck</Link></li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}

