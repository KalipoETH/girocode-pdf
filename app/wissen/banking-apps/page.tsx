import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Banking-Apps mit GiroCode-Support – Vollständige Übersicht 2025',
  description:
    'Alle deutschen Banking-Apps mit GiroCode-Support im Vergleich: Sparkasse, ING, DKB, Volksbank, N26 und mehr – plus Anleitungen und Sicherheitstipps.',
  keywords: 'GiroCode Banking App, Sparkasse GiroCode scannen, ING GiroCode, DKB QR Code, SEPA QR App',
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
              Banking-Apps mit GiroCode-Support – Vollständige Übersicht 2025
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Viele moderne Banking-Apps können SEPA-QR-/GiroCodes direkt scannen. Hier findest du
              eine vollständige Übersicht aller wichtigen deutschen Banking-Apps, Schritt-für-Schritt-
              Anleitungen und Tipps für den Fall, dass deine App keinen Scanner hat.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">

          {/* ─── SECTION 1: Übersicht ─── */}
          <section aria-labelledby="apps">
            <h2 id="apps">Welche Banking-Apps unterstützen GiroCodes?</h2>
            <p>
              Die Unterstützung von GiroCodes ist keine gesetzliche Pflicht, sondern eine
              Komfortfunktion jeder Bank. Stand 2025 haben die meisten großen deutschen
              Kreditinstitute einen QR-Scanner in ihre Apps integriert. Hier ist ein Überblick:
            </p>

            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Banking-App</th>
                    <th className="px-4 py-3 text-center font-medium">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium">Hinweis</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50 text-slate-300">
                  <tr>
                    <td className="px-4 py-3 font-medium">Sparkasse App</td>
                    <td className="px-4 py-3 text-center text-emerald-400">✅</td>
                    <td className="px-4 py-3">QR-Scanner in der Überweisungsmaske integriert</td>
                  </tr>
                  <tr className="bg-slate-800/30">
                    <td className="px-4 py-3 font-medium">VR-Banking (Volksbank)</td>
                    <td className="px-4 py-3 text-center text-emerald-400">✅</td>
                    <td className="px-4 py-3">Unter „Überweisung" → QR-Code-Symbol</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">ING Banking</td>
                    <td className="px-4 py-3 text-center text-emerald-400">✅</td>
                    <td className="px-4 py-3">Im Überweisung-Dialog oben rechts</td>
                  </tr>
                  <tr className="bg-slate-800/30">
                    <td className="px-4 py-3 font-medium">DKB Banking</td>
                    <td className="px-4 py-3 text-center text-emerald-400">✅</td>
                    <td className="px-4 py-3">QR-Scan im Überweisungsmenü</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Comdirect</td>
                    <td className="px-4 py-3 text-center text-emerald-400">✅</td>
                    <td className="px-4 py-3">Über das Scan-Symbol in der Überweisung</td>
                  </tr>
                  <tr className="bg-slate-800/30">
                    <td className="px-4 py-3 font-medium">Deutsche Bank</td>
                    <td className="px-4 py-3 text-center text-emerald-400">✅</td>
                    <td className="px-4 py-3">QR-Code-Scan in der mobilen Banking-App</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Commerzbank</td>
                    <td className="px-4 py-3 text-center text-emerald-400">✅</td>
                    <td className="px-4 py-3">Unter „Überweisen" → QR-Code scannen</td>
                  </tr>
                  <tr className="bg-slate-800/30">
                    <td className="px-4 py-3 font-medium">N26</td>
                    <td className="px-4 py-3 text-center text-emerald-400">✅</td>
                    <td className="px-4 py-3">Über den QR-Scanner im Zahlungsbereich</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Consorsbank</td>
                    <td className="px-4 py-3 text-center text-emerald-400">✅</td>
                    <td className="px-4 py-3">QR-Code-Scan in der Überweisungsfunktion</td>
                  </tr>
                  <tr className="bg-slate-800/30">
                    <td className="px-4 py-3 font-medium">Targobank</td>
                    <td className="px-4 py-3 text-center text-amber-400">⚠️</td>
                    <td className="px-4 py-3">Teilweise, je nach App-Version prüfen</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">HypoVereinsbank (HVB)</td>
                    <td className="px-4 py-3 text-center text-emerald-400">✅</td>
                    <td className="px-4 py-3">QR-Scan in der HVB Mobile Banking App</td>
                  </tr>
                  <tr className="bg-slate-800/30">
                    <td className="px-4 py-3 font-medium">Postbank</td>
                    <td className="px-4 py-3 text-center text-emerald-400">✅</td>
                    <td className="px-4 py-3">Über den Überweisungs-QR-Scanner</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Diese Liste erhebt keinen Anspruch auf Vollständigkeit. Banking-Apps werden
              regelmäßig aktualisiert, und die GiroCode-Unterstützung kann sich ändern. Im
              Zweifelsfall: App-Beschreibung im Store prüfen oder beim Kundenservice nachfragen.
            </p>
          </section>

          {/* ─── SECTION 2: Allgemeine Anleitung ─── */}
          <section aria-labelledby="scannen" className="mt-8">
            <h2 id="scannen">Schritt-für-Schritt: GiroCode scannen</h2>
            <p>
              Der grundlegende Ablauf ist bei fast allen Banking-Apps ähnlich. Hier ist die
              allgemeine Anleitung:
            </p>
            <ol>
              <li>
                <strong>Banking-App öffnen</strong> und bei Bedarf anmelden (PIN, Fingerabdruck
                oder Face ID).
              </li>
              <li>
                <strong>Bereich „Überweisung"</strong> oder „Zahlungen" aufrufen – bei manchen
                Apps auch „Senden" oder „Transferieren".
              </li>
              <li>
                <strong>QR-Scanner starten:</strong> Meist ein Kamera- oder QR-Symbol oben
                rechts im Überweisungsdialog.
              </li>
              <li>
                <strong>Kamera auf den GiroCode richten:</strong> Auf der Rechnung, dem Brief oder
                dem Bildschirm (ca. 15–30 cm Abstand).
              </li>
              <li>
                <strong>Daten prüfen:</strong> Empfängername, IBAN, Betrag und Verwendungszweck
                auf Korrektheit überprüfen. Niemals blind bestätigen!
              </li>
              <li>
                <strong>TAN eingeben oder biometrisch bestätigen.</strong>
              </li>
              <li>
                <strong>Fertig</strong> – die Überweisung ist abgeschickt.
              </li>
            </ol>
          </section>

          {/* ─── SECTION 3: Sparkasse ─── */}
          <section aria-labelledby="sparkasse" className="mt-8">
            <h2 id="sparkasse">GiroCode scannen mit der Sparkasse App</h2>
            <p>
              Die Sparkassen-App ist eine der meistgenutzten Banking-Apps in Deutschland und
              bietet einen gut integrierten GiroCode-Scanner.
            </p>
            <ol>
              <li>
                Öffne die <strong>Sparkasse App</strong> und melde dich an.
              </li>
              <li>
                Tippe auf <strong>„Überweisen"</strong> in der unteren Navigationsleiste oder
                im Hauptmenü.
              </li>
              <li>
                Oben rechts im Überweisungsformular findest du ein <strong>QR-Code-Symbol</strong>
                oder ein Kamera-Icon. Tippe darauf.
              </li>
              <li>
                Erteile der App die <strong>Kamera-Berechtigung</strong>, falls noch nicht
                geschehen.
              </li>
              <li>
                Halte die Kamera auf den GiroCode. Er wird innerhalb von ein bis zwei Sekunden
                erkannt und die Überweisungsmaske wird automatisch ausgefüllt.
              </li>
              <li>
                <strong>Daten prüfen</strong> und mit der Sparkassen-pushTAN oder ChipTAN
                bestätigen.
              </li>
            </ol>
            <p>
              <strong>Tipp:</strong> Beim Scannen von Bildschirmen die Helligkeit erhöhen und
              Spiegelungen vermeiden.
            </p>
          </section>

          {/* ─── SECTION 4: Volksbank ─── */}
          <section aria-labelledby="volksbank" className="mt-8">
            <h2 id="volksbank">GiroCode scannen mit VR-Banking (Volksbank/Raiffeisenbank)</h2>
            <p>
              Die VR-Banking App der Volks- und Raiffeisenbanken unterstützt GiroCodes
              ebenfalls nativ.
            </p>
            <ol>
              <li>
                Starte die <strong>VR-Banking App</strong> und logge dich ein.
              </li>
              <li>
                Navigiere zu <strong>„Überweisen"</strong>.
              </li>
              <li>
                Im Überweisungsformular gibt es ein <strong>Scan-Symbol</strong> (Kamera oder
                QR-Icon). Tippe darauf.
              </li>
              <li>
                Scan-Ansicht öffnet sich – <strong>GiroCode scannen</strong>.
              </li>
              <li>
                Die Felder werden automatisch befüllt. Kontrolle und Bestätigung mit VR SecureGo
                oder chipTAN.
              </li>
            </ol>
          </section>

          {/* ─── SECTION 5: ING ─── */}
          <section aria-labelledby="ing" className="mt-8">
            <h2 id="ing">GiroCode scannen mit ING Banking</h2>
            <p>
              Die ING Banking App unterstützt GiroCodes und hat den Scanner gut zugänglich
              platziert.
            </p>
            <ol>
              <li>
                Öffne die <strong>ING Banking App</strong>.
              </li>
              <li>
                Tippe auf <strong>„Überweisen"</strong>.
              </li>
              <li>
                Oben in der Überweisungsmaske befindet sich das <strong>QR-Code-Symbol</strong>.
                Tippe darauf.
              </li>
              <li>
                <strong>Code scannen</strong> – die Daten werden übernommen.
              </li>
              <li>
                Bestätigung mit dem ING-PIN oder Fingerabdruck/Face ID.
              </li>
            </ol>
          </section>

          {/* ─── SECTION 6: DKB ─── */}
          <section aria-labelledby="dkb" className="mt-8">
            <h2 id="dkb">GiroCode scannen mit DKB Banking</h2>
            <p>
              Die DKB Banking App bietet seit einigen Jahren GiroCode-Support.
            </p>
            <ol>
              <li>
                Starte die <strong>DKB Banking App</strong>.
              </li>
              <li>
                Wähle <strong>„Überweisung"</strong> aus dem Hauptmenü.
              </li>
              <li>
                In der Überweisungsansicht gibt es ein <strong>QR-Code-Scanner-Symbol</strong>.
              </li>
              <li>
                <strong>GiroCode scannen</strong> – Empfänger, IBAN und Betrag werden automatisch
                eingetragen.
              </li>
              <li>
                Bestätigung mit DKB-TAN oder DKB-Banking-App Push-Freigabe.
              </li>
            </ol>
          </section>

          {/* ─── SECTION 7: Kein Scanner ─── */}
          <section aria-labelledby="keine-app" className="mt-8">
            <h2 id="keine-app">Was tun wenn die App keinen GiroCode-Scanner hat?</h2>
            <p>
              Nicht jede Banking-App unterstützt GiroCodes. Hier sind deine Optionen:
            </p>

            <h3>Alternative 1: Google Lens</h3>
            <p>
              Google Lens kann QR-Codes lesen und den enthaltenen Text anzeigen. Du siehst dann
              die einzelnen Felder (IBAN, Betrag, Verwendungszweck) und kannst sie manuell in
              dein Online-Banking übertragen. Nicht ideal, aber praktikabel.
            </p>

            <h3>Alternative 2: Standard-QR-Scanner</h3>
            <p>
              Jede QR-Scanner-App (iPhone-Kamera, Android-Kamera, Google Lens) kann den EPC-Text
              aus dem GiroCode auslesen und anzeigen. Der Text kann dann kopiert und in das
              Online-Banking eingefügt werden.
            </p>

            <h3>Alternative 3: Bei der Bank anfragen</h3>
            <p>
              Wenn deine Bank GiroCodes noch nicht unterstützt, lohnt es sich, beim Kundenservice
              nachzufragen. Viele Banken planen die Integration oder haben sie bereits für eine
              App-Version verfügbar gemacht.
            </p>

            <h3>Alternative 4: App-Update prüfen</h3>
            <p>
              Die GiroCode-Unterstützung wurde bei vielen Apps erst in neueren Versionen
              hinzugefügt. Prüfe, ob ein Update verfügbar ist, bevor du die Funktion als
              nicht vorhanden abschreibst.
            </p>
          </section>

          {/* ─── SECTION 8: Geräte ─── */}
          <section aria-labelledby="geraete" className="mt-8">
            <h2 id="geraete">GiroCode auf verschiedenen Geräten</h2>

            <h3>iPhone vs. Android</h3>
            <p>
              Der GiroCode-Scan selbst läuft in der Banking-App ab, daher sind die Unterschiede
              zwischen iOS und Android minimal. Was sich unterscheidet:
            </p>
            <ul>
              <li>
                <strong>Menüführung:</strong> Auf iOS erscheinen QR-Scanner-Buttons häufig
                oben rechts, auf Android eher als Floating-Action-Button oder im Menü.
              </li>
              <li>
                <strong>Kamera-Berechtigung:</strong> iOS und Android haben unterschiedliche
                Dialoge für die Kamera-Freigabe. Bei iOS einmalig erlauben, bei Android
                eventuell in den App-Einstellungen nachschauen.
              </li>
              <li>
                <strong>Bildschirm-Scan:</strong> Auf iOS können Banking-Apps direkt aus dem
                Foto-Archiv oder Screenshots QR-Codes lesen. Auf Android ist das abhängig
                von der App-Implementierung.
              </li>
            </ul>

            <h3>Tablet-Nutzung</h3>
            <p>
              Banking-Apps auf Tablets unterstützen in der Regel ebenfalls den GiroCode-Scan,
              da sie dieselbe App wie auf dem Smartphone verwenden. Die Kamera-Qualität ist
              bei Tablets aber oft schlechter, was bei schwachen Codes zu Scan-Problemen führen kann.
            </p>

            <h3>Desktop-Banking (kein QR möglich)</h3>
            <p>
              Im Desktop-Online-Banking ist ein QR-Code-Scan technisch nicht möglich, da
              Desktop-Browser keinen direkten Kamera-Zugriff für Überweisungen bieten. Hier
              musst du die Daten manuell eingeben oder die Banking-App auf dem Smartphone nutzen.
            </p>
          </section>

          {/* ─── SECTION 9: Sicherheit ─── */}
          <section aria-labelledby="sicherheit" className="mt-8">
            <h2 id="sicherheit">Sicherheit beim GiroCode-Scannen</h2>

            <h3>Daten immer vor Bestätigung prüfen</h3>
            <p>
              Die wichtigste Sicherheitsregel: <strong>Nie blind bestätigen!</strong> Prüfe
              nach dem Scan immer:
            </p>
            <ul>
              <li><strong>Empfängername:</strong> Stimmt der Name mit dem erwarteten Empfänger überein?</li>
              <li><strong>IBAN:</strong> Prüfe mindestens die ersten 4 und letzten 4 Ziffern.</li>
              <li><strong>Betrag:</strong> Stimmt der Betrag mit der Rechnung überein?</li>
              <li><strong>Verwendungszweck:</strong> Enthält er die Rechnungsnummer?</li>
            </ul>

            <h3>Manipulierte QR-Codes erkennen</h3>
            <p>
              Theoretisch könnten Betrüger einen GiroCode auf einer Rechnung durch einen
              manipulierten Code ersetzen (z.&nbsp;B. durch Aufkleber). Erkennungszeichen:
            </p>
            <ul>
              <li>Aufgeklebter QR-Code auf einer Rechnung (ungewöhnlich glatt)</li>
              <li>QR-Code führt zu einer anderen IBAN als die textuelle Bankverbindung auf der Rechnung</li>
              <li>Empfängername im Scan stimmt nicht mit dem Rechnungssteller überein</li>
            </ul>

            <h3>Was tun bei Verdacht auf Betrug?</h3>
            <p>
              Wenn du nach dem Scan feststellst, dass die Daten nicht stimmen:
            </p>
            <ol>
              <li>Überweisung <strong>nicht bestätigen</strong> und abbrechen.</li>
              <li>Den Rechnungssteller direkt <strong>kontaktieren</strong> (nicht über in der Rechnung angegebene Kontaktdaten).</li>
              <li>Falls schon überwiesen: Sofort die <strong>Bank kontaktieren</strong> und Rückbuchung beantragen.</li>
              <li>Bei konkretem Betrug: <strong>Anzeige erstatten</strong>.</li>
            </ol>
          </section>

          {/* ─── SECTION 10: Affiliate ─── */}
          <section aria-labelledby="software" className="mt-10">
            <h2 id="software">Rechnungen mit GiroCode professionell verwalten</h2>
            <p>
              Wer nicht nur GiroCodes scannt, sondern auch selbst Rechnungen mit GiroCode
              erstellt und Zahlungseingänge verwalten möchte, profitiert von einer guten
              Buchhaltungssoftware:
            </p>

            <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
                <h3 className="mb-2 text-base font-semibold text-slate-50">sevDesk</h3>
                <p className="mb-3 text-sm text-slate-300">
                  sevDesk verwaltet Rechnungen und Zahlungseingänge in einer integrierten
                  Oberfläche. Eingehende Überweisungen werden automatisch mit offenen Rechnungen
                  abgeglichen – per IBAN-Matching. So sparst du stundenlange manuelle Buchhaltung.
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

              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
                <h3 className="mb-2 text-base font-semibold text-slate-50">FastBill</h3>
                <p className="mb-3 text-sm text-slate-300">
                  FastBill bietet automatische Zahlungserinnerungen per E-Mail und integriertes
                  Forderungsmanagement. Überfällige Rechnungen werden automatisch markiert, und
                  Mahnungen können auf Knopfdruck versendet werden.
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
                <li><Link href="/wissen/scannen" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">GiroCode scannen – Anleitung für iPhone &amp; Android</Link></li>
                <li><Link href="/wissen/girocode" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Was ist ein GiroCode?</Link></li>
                <li><Link href="/wissen/rechnung" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">GiroCode auf Rechnungen</Link></li>
                <li><Link href="/wissen/iban-bic" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">IBAN &amp; BIC im GiroCode</Link></li>
                <li><Link href="/wissen/betrag-und-zweck" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Betrag &amp; Verwendungszweck</Link></li>
                <li><Link href="/wissen/epc-standard" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">EPC-Standard erklärt</Link></li>
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
