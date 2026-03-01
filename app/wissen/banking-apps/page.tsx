import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Banking-Apps die GiroCodes unterstützen – Übersicht',
  description:
    'Welche Banking-Apps unterstützen GiroCodes? Sparkasse, ING, DKB, Volksbank und mehr im Überblick – plus Tipps zum Scannen.',
};

export default function WissenBankingAppsPage() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li><Link href="/" className="text-sky-400 hover:text-sky-300">Startseite</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/wissen" className="text-sky-400 hover:text-sky-300">Wissen</Link></li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">Banking-Apps mit GiroCode</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Praxis · Banking-Apps mit GiroCode
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Banking-Apps die GiroCodes unterstützen – Übersicht
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Viele moderne Banking-Apps können SEPA-QR-/GiroCodes direkt scannen und daraus eine
              Überweisung erstellen. Hier findest du einen Überblick und praktische Tipps fürs
              Scannen.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="apps">
            <h2 id="apps">Welche Apps unterstützen SEPA-QR / GiroCode?</h2>
            <p>
              Die Unterstützung von GiroCodes ist keine gesetzliche Pflicht, sondern eine
              Komfortfunktion der jeweiligen Bank. Viele große Institute und Direktbanken haben einen
              QR-Scanner inzwischen fest in ihre Apps integriert, darunter unter anderem:
            </p>
            <ul>
              <li>Sparkassen-Apps (z.&nbsp;B. „Sparkasse“, „Mobiles Bezahlen“)</li>
              <li>Volksbank / Raiffeisenbank Apps (z.&nbsp;B. „VR-Banking“)</li>
              <li>ING Banking-App</li>
              <li>DKB Banking-App</li>
              <li>Comdirect Banking-App</li>
              <li>Deutsche Bank Banking-App</li>
              <li>N26</li>
              <li>Consorsbank</li>
            </ul>
            <p>
              Diese Liste ist <strong>nicht abschließend</strong>. Viele kleinere Banken oder
              spezialisierte Finanz-Apps haben ebenfalls QR-Scanner integriert, verwenden aber
              unterschiedliche Bezeichnungen in der Oberfläche.
            </p>
          </section>

          <section aria-labelledby="scannen" className="mt-8">
            <h2 id="scannen">Wie scanne ich einen GiroCode in der Banking-App?</h2>
            <p>
              Der konkrete Ablauf unterscheidet sich je nach App leicht, folgt aber meist demselben
              Muster:
            </p>
            <ol>
              <li>Banking-App öffnen und bei Bedarf einloggen.</li>
              <li>In den Bereich „Überweisung“ oder „Zahlungen“ wechseln.</li>
              <li>Nach einem Button wie „GiroCode scannen“, „QR-Code scannen“ oder einem Kamera-Symbol suchen.</li>
              <li>Die Kamera auf den GiroCode auf der Rechnung oder am Bildschirm richten.</li>
              <li>Die automatisch ausgefüllten Daten prüfen und die Zahlung mit TAN oder biometrisch freigeben.</li>
            </ol>
            <p>
              Viele Apps bieten außerdem die Möglichkeit, einen QR-Code direkt aus einem
              <strong>Screenshot oder einer PDF</strong> zu scannen, was besonders praktisch ist, wenn
              du Rechnungen per E-Mail erhältst.
            </p>
          </section>

          <section aria-labelledby="keine-app" className="mt-8">
            <h2 id="keine-app">Was tun, wenn die App keinen QR-Scanner hat?</h2>
            <p>
              Wenn deine Banking-App keinen integrierten GiroCode-Scanner anbietet, hast du mehrere
              Optionen:
            </p>
            <ul>
              <li>
                Prüfen, ob deine Bank eine <strong>alternative App</strong> oder ein separates Modul
                für QR-Zahlungen anbietet.
              </li>
              <li>
                Gegebenenfalls auf eine andere Banking-App der gleichen Bank wechseln, falls mehrere
                Versionen existieren.
              </li>
              <li>
                Die Daten aus dem GiroCode-Generator klassisch <strong>per Copy &amp; Paste</strong>{' '}
                in das Online-Banking übertragen.
              </li>
            </ul>
            <p>
              Beachte, dass <strong>externe QR-Scanner-Apps</strong> zwar den EPC-Text anzeigen
              können, in der Regel aber keine direkte Übergabe an deine Banking-App ermöglichen.
            </p>
          </section>

          <section aria-labelledby="hinweis" className="mt-8">
            <h2 id="hinweis">Wichtiger Hinweis</h2>
            <p>
              Ob und in welchem Umfang eine App GiroCodes unterstützt, entscheidet jede Bank selbst.
              Funktionen können sich mit der Zeit ändern. Wenn du unsicher bist, ob deine Bank
              SEPA-QR / GiroCode unterstützt, lohnt sich ein Blick in:
            </p>
            <ul>
              <li>die Hilfe- oder FAQ-Seite deiner Bank,</li>
              <li>die Beschreibung der App im App Store / Play Store,</li>
              <li>oder eine kurze Nachfrage beim Kundenservice.</li>
            </ul>
            <p>
              Unser Generator erzeugt den GiroCode strikt nach dem <strong>EPC-Standard</strong> und
              ist damit technisch kompatibel. Die tatsächliche Unterstützung hängt jedoch von der
              jeweiligen Bank-App ab.
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
                <li><Link href="/wissen/scannen" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">GiroCode scannen</Link></li>
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

