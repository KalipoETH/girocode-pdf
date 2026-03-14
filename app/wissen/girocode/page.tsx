import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Was ist ein GiroCode? – Alles was du wissen musst',
  description:
    'GiroCode vollständig erklärt: Definition, Funktionsweise, Vorteile, Vergleich mit PayPal & Co., FAQ und Empfehlungen für Selbstständige und Unternehmen.',
  keywords: 'GiroCode, SEPA QR Code, EPC QR Code, Bezahlcode, GiroCode erstellen, GiroCode Rechnung',
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
              Was ist ein GiroCode? – Alles was du wissen musst
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Der GiroCode – häufig auch SEPA-QR- oder EPC-QR-Code genannt – ist ein standardisierter
              QR-Code für Überweisungen im SEPA-Raum. Er spart Tipparbeit, reduziert Fehler und
              macht das Bezahlen für Zahler und Empfänger deutlich komfortabler.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">

          {/* ─── SECTION 1: Was ist ein GiroCode ─── */}
          <section aria-labelledby="definition">
            <h2 id="definition">Was ist ein GiroCode?</h2>
            <p>
              Ein <strong>GiroCode</strong> ist ein standardisierter QR-Code, der alle relevanten
              Informationen für eine SEPA-Überweisung in maschinenlesbarer Form enthält. Technisch
              basiert er auf der Spezifikation des <strong>European Payments Council (EPC)</strong> –
              daher die häufig verwendeten Synonyme <strong>EPC-QR-Code</strong> oder{' '}
              <strong>SEPA-QR-Code</strong>. In Deutschland hat sich der Begriff „GiroCode" als
              Markenbezeichnung durchgesetzt, der von der deutschen Kreditwirtschaft geprägt wurde.
            </p>
            <p>
              Neben diesen beiden Hauptbezeichnungen gibt es weitere Namen, die je nach Kontext
              verwendet werden: <strong>Bezahlcode</strong>, <strong>Giro-QR</strong> oder schlicht
              „Überweisungs-QR". All diese Begriffe beschreiben im Wesentlichen dasselbe Konzept –
              einen QR-Code, der beim Scannen mit einer Banking-App automatisch eine
              Überweisungsmaske ausfüllt.
            </p>

            <h3>Geschichte: Wann wurde der GiroCode eingeführt?</h3>
            <p>
              Die Grundlagen des Standards wurden vom European Payments Council bereits um 2012
              erarbeitet. In Deutschland wurde der GiroCode in seiner aktuellen Form schrittweise
              zwischen 2016 und <strong>2018</strong> eingeführt. Die deutschen Sparkassen und
              Volksbanken waren unter den ersten Instituten, die den QR-Scanner für SEPA-Überweisungen
              in ihren Banking-Apps etablierten. Seitdem ist die Unterstützung stetig gewachsen und
              heute unterstützen nahezu alle großen deutschen Kreditinstitute das Format.
            </p>
            <p>
              Die Einführung war eine direkte Antwort auf den Wunsch nach einfacheren, fehlerfreien
              Zahlungsprozessen im bargeldlosen Alltag. Zuvor mussten Überweisungsempfänger IBAN,
              Betrag und Verwendungszweck mühsam abtippen – ein fehleranfälliger Prozess, der immer
              wieder zu Rückläufern und Zahlungsverzögerungen führte.
            </p>

            <h3>Wer hat den GiroCode entwickelt?</h3>
            <p>
              Der technische Standard stammt vom <strong>European Payments Council (EPC)</strong>,
              dem zentralen Entscheidungsgremium des europäischen Bankensektors für Zahlungsstandards.
              Das EPC definiert im Rahmen des SEPA-Regelwerks, wie Überweisungen, Lastschriften und
              Zahlungsinformationen technisch formatiert werden müssen. Das spezifische Dokument für
              den GiroCode-Standard ist das „EPC Quick Response Code – Guidelines to Enable the
              Data Capture for the Initiation of a SCT" (kurz: EPC069).
            </p>
            <p>
              In Deutschland hat der <strong>Zentraler Kreditausschuss (ZKA)</strong>, heute bekannt
              als <strong>Die Deutsche Kreditwirtschaft (DK)</strong>, die Spezifikation für den
              deutschen Markt adaptiert und den Begriff „GiroCode" als einheitliche Bezeichnung
              eingeführt. Dies sorgt dafür, dass Kunden und Unternehmen in Deutschland eine
              konsistente Terminologie verwenden.
            </p>
          </section>

          {/* ─── SECTION 2: Wie funktioniert ein GiroCode ─── */}
          <section aria-labelledby="funktion" className="mt-8">
            <h2 id="funktion">Wie funktioniert ein GiroCode?</h2>
            <p>
              Das Prinzip hinter dem GiroCode ist denkbar einfach: Alle Informationen, die für eine
              SEPA-Überweisung benötigt werden, werden in einem strukturierten Textformat
              zusammengefasst und anschließend als QR-Code kodiert. Beim Scannen liest die
              Banking-App diesen Text aus und füllt damit automatisch die Überweisungsmaske aus.
            </p>

            <h3>Schritt-für-Schritt Erklärung</h3>
            <ol>
              <li>
                <strong>Erstellen:</strong> Du trägst in unserem Generator (oder einer
                Buchhaltungssoftware) deine Zahlungsdaten ein – Name, IBAN, optionaler Betrag,
                Verwendungszweck.
              </li>
              <li>
                <strong>Generieren:</strong> Der Generator erstellt daraus den EPC-Payload (einen
                strukturierten Text nach EPC-Standard) und kodiert diesen als QR-Code.
              </li>
              <li>
                <strong>Platzieren:</strong> Der QR-Code wird auf der Rechnung, dem Kassenbon,
                dem Brief oder der Website platziert.
              </li>
              <li>
                <strong>Scannen:</strong> Der Zahler öffnet seine Banking-App, startet den
                QR-Scanner und hält die Kamera auf den Code.
              </li>
              <li>
                <strong>Prüfen:</strong> Die App zeigt die vorausgefüllte Überweisung an. Der
                Zahler überprüft alle Felder – besonders IBAN und Betrag.
              </li>
              <li>
                <strong>Bestätigen:</strong> Die Überweisung wird wie gewohnt mit TAN,
                Fingerabdruck oder Face ID freigegeben.
              </li>
            </ol>

            <h3>Was passiert beim Scannen technisch?</h3>
            <p>
              Die Banking-App aktiviert die Kamera des Smartphones und scannt kontinuierlich nach
              QR-Code-Mustern. Sobald ein gültiger QR-Code erkannt wird, dekodiert die App den
              enthaltenen Text. Die App prüft, ob es sich um einen EPC-konformen Payload handelt
              (erkennbar am Service-Tag <code>BCD</code> in der ersten Zeile) und extrahiert dann
              die einzelnen Felder wie IBAN, Betrag und Verwendungszweck. Diese Daten werden direkt
              in die Überweisungsmaske der App übertragen.
            </p>

            <h3>Welche Daten werden übertragen?</h3>
            <p>Ein vollständiger GiroCode-Payload enthält folgende Informationen:</p>
            <ul>
              <li><strong>Service Tag:</strong> „BCD" – kennzeichnet das Format</li>
              <li><strong>Version:</strong> meist 002</li>
              <li><strong>Zeichenkodierung:</strong> UTF-8</li>
              <li><strong>Überweisungsart:</strong> SCT (SEPA Credit Transfer)</li>
              <li><strong>BIC:</strong> optional seit 2016</li>
              <li><strong>Name des Empfängers:</strong> bis zu 70 Zeichen</li>
              <li><strong>IBAN:</strong> vollständige Kontonummer des Empfängers</li>
              <li><strong>Betrag:</strong> optional, z.&nbsp;B. EUR49.90</li>
              <li><strong>Verwendungszweck:</strong> bis zu 140 Zeichen</li>
            </ul>

            <h3>Sicherheitsaspekte</h3>
            <p>
              Der GiroCode ist ein <strong>pull-basiertes</strong> System: Der Zahler löst die
              Transaktion aktiv aus und bestätigt sie mit einer TAN oder biometrischen Freigabe.
              Anders als bei manchen anderen Zahlungsmethoden kann der Empfänger <strong>kein
              Geld abbuchen</strong>, ohne dass der Zahler aktiv zustimmt. Dies macht den GiroCode
              deutlich sicherer als beispielsweise das Einzugsermächtigung-Verfahren.
            </p>
            <p>
              Dennoch gilt: <strong>Prüfe die Daten immer vor der Bestätigung.</strong> Manipulierte
              QR-Codes könnten auf eine andere IBAN umleiten. Vertrauenswürdige Rechnungssteller
              drucken daher alle relevanten Daten auch im Klartext auf die Rechnung.
            </p>
          </section>

          {/* ─── SECTION 3: Vorteile ─── */}
          <section aria-labelledby="vorteile" className="mt-8">
            <h2 id="vorteile">Vorteile eines GiroCodes</h2>

            <h3>Vorteile für Rechnungssteller</h3>
            <p>
              Wer als Freelancer, Unternehmen oder Verein GiroCodes auf seinen Rechnungen einsetzt,
              profitiert von einer Reihe handfester Vorteile:
            </p>
            <ul>
              <li>
                <strong>Weniger Rückfragen:</strong> Kunden müssen nicht mehr anrufen, weil sie
                sich bei der IBAN vertippt haben oder den Verwendungszweck vergessen haben.
              </li>
              <li>
                <strong>Schnellere Zahlungseingänge:</strong> Da der Überweisungsprozess deutlich
                vereinfacht ist, tendieren Kunden dazu, Rechnungen schneller zu begleichen.
              </li>
              <li>
                <strong>Professioneller Eindruck:</strong> Eine Rechnung mit GiroCode signalisiert
                Modernität und Kundenorientierung.
              </li>
              <li>
                <strong>Bessere Zuordnung:</strong> Wenn der Verwendungszweck vorgegeben ist,
                werden Zahlungen automatisch mit der richtigen Rechnungsnummer verknüpft.
              </li>
              <li>
                <strong>Kein Mehraufwand:</strong> Mit den richtigen Tools wird der GiroCode
                automatisch beim Erstellen der Rechnung generiert.
              </li>
            </ul>

            <h3>Vorteile für Zahler</h3>
            <ul>
              <li>
                <strong>Schnell und einfach:</strong> Statt 22-stellige IBANs abzutippen, reicht
                ein Scan mit der Banking-App.
              </li>
              <li>
                <strong>Fehlerfrei:</strong> Zahlendreher und Tippfehler werden eliminiert.
              </li>
              <li>
                <strong>Kostenlos:</strong> Das Scannen und Überweisen ist völlig kostenlos – es
                fallen nur die üblichen Kontoführungsgebühren der eigenen Bank an.
              </li>
              <li>
                <strong>Sicher:</strong> Die Zahlung wird durch TAN oder Biometrie abgesichert,
                wie jede normale Überweisung auch.
              </li>
            </ul>

            <h3>Im Vergleich zur manuellen IBAN-Eingabe</h3>
            <p>
              Studien zeigen, dass bei manueller Eingabe langer Zahlenreihen wie IBANs die
              Fehlerquote deutlich über 1&nbsp;% liegt. Bei der deutschen IBAN mit 22 Stellen passiert
              es schnell, dass eine Ziffer umgestellt oder vergessen wird. Wird eine Überweisung
              mit falscher IBAN an eine existierende Kontonummer gesendet, ist die Rückbuchung
              aufwendig und kostspielig. Der GiroCode löst dieses Problem vollständig.
            </p>
          </section>

          {/* ─── SECTION 4: Wer kann GiroCodes nutzen ─── */}
          <section aria-labelledby="zielgruppen" className="mt-8">
            <h2 id="zielgruppen">Wer kann GiroCodes nutzen?</h2>
            <p>
              Grundsätzlich kann <strong>jede Person mit einem SEPA-Konto</strong> einen GiroCode
              erstellen und empfangen. Der Einsatz ist besonders sinnvoll für folgende Gruppen:
            </p>

            <h3>Selbstständige und Freelancer</h3>
            <p>
              Für Freelancer und Selbstständige ist der GiroCode ein einfaches Mittel, um
              Kundenzahlungen zu beschleunigen. Gerade bei einer hohen Anzahl von Rechnungen
              lohnt sich die Integration in die Buchhaltungssoftware. Wer heute noch händisch
              GiroCodes auf Rechnungen klebt, sollte über eine professionelle Lösung nachdenken.
            </p>

            <h3>Kleine und mittlere Unternehmen</h3>
            <p>
              KMUs profitieren besonders von der verbesserten Zahlungsquote und der reduzierten
              Bearbeitungszeit im Zahlungseingangsmanagement. Ein GiroCode auf jeder Ausgangsrechnung
              kann die durchschnittliche Zahlungsfrist spürbar senken.
            </p>

            <h3>Vereine und Organisationen</h3>
            <p>
              Vereine nutzen GiroCodes häufig für Mitgliedsbeiträge, Spendenaufrufe oder
              Veranstaltungsgebühren. Ein QR-Code auf dem Mitgliederbrief oder der Website
              vereinfacht die Abwicklung erheblich und entlastet den Kassenwart.
            </p>

            <h3>Privatpersonen</h3>
            <p>
              Auch Privatpersonen können GiroCodes einsetzen – etwa für Sammelbestellungen im
              Freundeskreis, gemeinsame Urlaubsausgaben oder als komfortable Zahlungsmethode für
              Kleinanzeigen-Transaktionen. Mit unserem kostenlosen Generator geht das in wenigen
              Sekunden.
            </p>
          </section>

          {/* ─── SECTION 5: GiroCode vs. andere Zahlungsmethoden ─── */}
          <section aria-labelledby="vergleich" className="mt-8">
            <h2 id="vergleich">GiroCode vs. andere Zahlungsmethoden</h2>
            <p>
              Der GiroCode ist nicht die einzige Möglichkeit, Zahlungen zu empfangen. Hier ein
              Vergleich mit den gängigsten Alternativen:
            </p>

            <div className="not-prose my-6 overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="px-4 py-3 text-left font-medium">Merkmal</th>
                    <th className="px-4 py-3 text-left font-medium">GiroCode</th>
                    <th className="px-4 py-3 text-left font-medium">PayPal</th>
                    <th className="px-4 py-3 text-left font-medium">Klarna</th>
                    <th className="px-4 py-3 text-left font-medium">Lastschrift</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/50">
                  <tr className="text-slate-300">
                    <td className="px-4 py-3 font-medium text-slate-200">Kosten Empfänger</td>
                    <td className="px-4 py-3 text-emerald-400">Kostenlos</td>
                    <td className="px-4 py-3 text-amber-400">1,2–3,4 % + Fix</td>
                    <td className="px-4 py-3 text-amber-400">Händlergebühr</td>
                    <td className="px-4 py-3 text-emerald-400">Meist kostenlos</td>
                  </tr>
                  <tr className="bg-slate-800/30 text-slate-300">
                    <td className="px-4 py-3 font-medium text-slate-200">Datenschutz</td>
                    <td className="px-4 py-3 text-emerald-400">DSGVO-konform</td>
                    <td className="px-4 py-3 text-amber-400">US-Unternehmen</td>
                    <td className="px-4 py-3 text-amber-400">Datenanalyse</td>
                    <td className="px-4 py-3 text-emerald-400">DSGVO-konform</td>
                  </tr>
                  <tr className="text-slate-300">
                    <td className="px-4 py-3 font-medium text-slate-200">Verbreitung DE</td>
                    <td className="px-4 py-3 text-emerald-400">Alle SEPA-Banken</td>
                    <td className="px-4 py-3 text-emerald-400">Sehr weit</td>
                    <td className="px-4 py-3 text-amber-400">E-Commerce</td>
                    <td className="px-4 py-3 text-emerald-400">Universal</td>
                  </tr>
                  <tr className="bg-slate-800/30 text-slate-300">
                    <td className="px-4 py-3 font-medium text-slate-200">Einfachheit</td>
                    <td className="px-4 py-3 text-emerald-400">QR-Scan</td>
                    <td className="px-4 py-3 text-emerald-400">App/Web</td>
                    <td className="px-4 py-3 text-amber-400">Checkout-Prozess</td>
                    <td className="px-4 py-3 text-amber-400">Mandat nötig</td>
                  </tr>
                  <tr className="text-slate-300">
                    <td className="px-4 py-3 font-medium text-slate-200">Voraussetzung</td>
                    <td className="px-4 py-3 text-emerald-400">SEPA-Konto</td>
                    <td className="px-4 py-3 text-amber-400">PayPal-Konto</td>
                    <td className="px-4 py-3 text-amber-400">Klarna-Integration</td>
                    <td className="px-4 py-3 text-amber-400">SEPA-Mandat</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Der GiroCode überzeugt besonders durch seine <strong>Kostenlosigkeit</strong> und
              seinen <strong>Datenschutz</strong>: Weder der Rechnungssteller noch der Zahler
              müssen sich bei einem Drittanbieter registrieren. Die Transaktion läuft direkt über
              die eigene Hausbank ab – genau wie eine normale Überweisung.
            </p>
          </section>

          {/* ─── SECTION 6: FAQ ─── */}
          <section aria-labelledby="faq" className="mt-10">
            <h2 id="faq">Häufige Fragen zum GiroCode (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Ist ein GiroCode nur in Deutschland nutzbar?
                </h3>
                <p className="text-sm text-slate-300">
                  Nein. Der GiroCode basiert auf dem EPC-Standard und ist im gesamten{' '}
                  <strong>SEPA-Raum</strong> nutzbar – das umfasst alle EU-Länder sowie Island,
                  Liechtenstein, Norwegen und die Schweiz (mit leichten Besonderheiten). Ob eine
                  bestimmte Banking-App das Format unterstützt, hängt von der jeweiligen Bank ab.
                  In Österreich wird der gleiche Standard unter dem Namen „Stuzza-QR" geführt.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Kann ich den GiroCode auch ohne Betrag erstellen?
                </h3>
                <p className="text-sm text-slate-300">
                  Ja, der Betrag ist optional. Lässt du ihn weg, erscheint die Überweisungsmaske
                  mit leerem Betragsfeld und der Zahler trägt den gewünschten Betrag selbst ein.
                  Das ist bei Spenden, Vereinsbeiträgen oder variablen Preisen sehr praktisch.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Welche Daten sind beim GiroCode Pflicht?
                </h3>
                <p className="text-sm text-slate-300">
                  Pflicht sind der <strong>Name des Empfängers</strong> und die <strong>IBAN</strong>.
                  Alle anderen Felder wie BIC, Betrag oder Verwendungszweck sind optional, auch wenn
                  ein aussagekräftiger Verwendungszweck für eine saubere Buchhaltung dringend
                  empfohlen wird.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Was kostet die Nutzung eines GiroCodes?
                </h3>
                <p className="text-sm text-slate-300">
                  Die Nutzung ist grundsätzlich kostenlos. Es fallen lediglich die üblichen
                  Bankgebühren für die SEPA-Überweisung an, die bei vielen Konten ohnehin
                  inklusive sind. Unser Generator ist dauerhaft kostenlos und erfordert keine
                  Registrierung.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Wie groß muss der GiroCode auf der Rechnung sein?
                </h3>
                <p className="text-sm text-slate-300">
                  Empfohlen werden mindestens <strong>2 × 2 cm</strong> für den Druck. Bei
                  digitalen PDFs sollte der Code auf dem Bildschirm mindestens 100 × 100 Pixel
                  groß sein. Zu kleine Codes können von Kamera-Scannern nicht zuverlässig gelesen
                  werden.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Kann jemand mit meiner IBAN im GiroCode Geld von mir abbuchen?
                </h3>
                <p className="text-sm text-slate-300">
                  Nein. Ein GiroCode ist eine <strong>Zahlungsaufforderung</strong>, kein
                  Lastschriftmandat. Nur der Zahler kann aktiv eine Überweisung auslösen. Deine
                  IBAN zu kennen ermöglicht es jemandem lediglich, dir Geld zu schicken – aber
                  nicht, es abzubuchen.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Funktioniert der GiroCode auch für internationale Zahlungen?
                </h3>
                <p className="text-sm text-slate-300">
                  Der GiroCode / EPC-Standard ist für <strong>SEPA-Überweisungen</strong>
                  konzipiert. Für Zahlungen außerhalb des SEPA-Raums (z.&nbsp;B. in die USA oder
                  nach Australien) ist er nicht geeignet. Dort sind andere Systeme wie SWIFT
                  notwendig.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Muss ich den GiroCode jedes Mal neu erstellen?
                </h3>
                <p className="text-sm text-slate-300">
                  Wenn du immer denselben Betrag und Verwendungszweck verwendest (z.&nbsp;B. ein
                  monatlicher Vereinsbeitrag), kannst du denselben GiroCode mehrfach nutzen. Für
                  individuelle Rechnungen mit unterschiedlichen Beträgen und Rechnungsnummern
                  muss der Code jedoch jedes Mal neu generiert werden.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Was passiert, wenn jemand den GiroCode zweimal scannt und überweist?
                </h3>
                <p className="text-sm text-slate-300">
                  Der GiroCode selbst hat keinen Mechanismus zur Verhinderung von Doppelzahlungen.
                  Die Verantwortung liegt beim Zahler. Als Rechnungssteller solltest du
                  Doppelzahlungen in deiner Buchhaltung erkennen und entsprechend reagieren.
                  Eine eindeutige Rechnungsnummer im Verwendungszweck hilft dabei.
                </p>
              </div>
            </div>
          </section>

          {/* ─── SECTION 7: Empfehlungen + Affiliate ─── */}
          <section aria-labelledby="empfehlungen" className="mt-10">
            <h2 id="empfehlungen">GiroCode professionell nutzen – Software-Empfehlungen</h2>
            <p>
              Wer GiroCodes professionell und dauerhaft auf Rechnungen einsetzen möchte, kommt
              früher oder später an einer guten Buchhaltungs- oder Rechnungsstellungs-Software
              nicht vorbei. Einen GiroCode manuell zu erstellen und in jede Rechnung einzufügen
              ist für gelegentliche Nutzung in Ordnung – bei regelmäßiger Rechnungsstellung
              zahlt sich eine automatisierte Lösung jedoch schnell aus.
            </p>
            <p>
              Wir empfehlen zwei bewährte Tools, die GiroCodes nativ unterstützen:
            </p>

            <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
                <h3 className="mb-2 text-base font-semibold text-slate-50">sevDesk</h3>
                <p className="mb-3 text-sm text-slate-300">
                  sevDesk ist eine der führenden deutschen Buchhaltungssoftwares für Selbstständige
                  und KMUs. Rechnungen mit automatisch generiertem GiroCode lassen sich in wenigen
                  Klicks erstellen und direkt per E-Mail versenden. Die Software ist DATEV-kompatibel
                  und unterstützt die Kleinunternehmerregelung.
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
                  FastBill bietet eine einfache, auf Geschwindigkeit ausgelegte
                  Rechnungsstellungs-Plattform. Mit FastBill erstellst du in unter zwei Minuten
                  eine professionelle Rechnung inklusive GiroCode – direkt aus dem Browser, ohne
                  Installation. Ideal für Freelancer und kleine Teams.
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

            <p className="mt-4">
              Für gelegentliche Nutzung oder als erste Anlaufstelle empfehlen wir unseren{' '}
              <Link href="/" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">
                kostenlosen GiroCode Generator
              </Link>{' '}
              – komplett lokal im Browser, ohne Registrierung und ohne dass Daten an Server
              übertragen werden.
            </p>
          </section>

          {/* ─── Footer Links ─── */}
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
                <li><Link href="/wissen/epc-standard" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">EPC-Standard – Technischer Aufbau des GiroCodes</Link></li>
                <li><Link href="/wissen/iban-bic" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">IBAN &amp; BIC im GiroCode</Link></li>
                <li><Link href="/wissen/rechnung" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">GiroCode auf Rechnungen – Der komplette Leitfaden</Link></li>
                <li><Link href="/wissen/betrag-und-zweck" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Betrag &amp; Verwendungszweck richtig eingeben</Link></li>
                <li><Link href="/wissen/banking-apps" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Banking-Apps mit GiroCode-Support</Link></li>
                <li><Link href="/wissen/scannen" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">GiroCode scannen – Anleitung</Link></li>
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
