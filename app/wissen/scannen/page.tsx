import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode scannen – Die komplette Anleitung für iPhone & Android',
  description:
    'GiroCode scannen: Schritt-für-Schritt Anleitungen für iPhone und Android, Lösungen bei Scan-Problemen, Qualitätsanforderungen und Sicherheitstipps.',
  keywords: 'GiroCode scannen iPhone, GiroCode scannen Android, SEPA QR Code scannen, QR Code Überweisung scannen',
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
              GiroCode scannen – Die komplette Anleitung für iPhone &amp; Android
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Einen GiroCode zu scannen dauert weniger als 10 Sekunden – wenn man weiß, wo sich
              der QR-Scanner in der Banking-App befindet. Hier findest du alles: allgemeine
              Anleitung, plattformspezifische Tipps, Lösungen bei Problemen und Sicherheitshinweise.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">

          {/* ─── SECTION 1: Übersicht ─── */}
          <section aria-labelledby="ueberblick">
            <h2 id="ueberblick">GiroCode scannen – So einfach geht's</h2>
            <p>
              Der GiroCode spart beim Überweisen eine Menge Zeit und Nerven: Statt 22-stellige
              IBANs abzutippen, Beträge zu übertragen und Verwendungszwecke einzugeben, reicht
              ein kurzer Scan mit der Banking-App. Der gesamte Prozess dauert in der Praxis
              zwischen <strong>5 und 30 Sekunden</strong> – abhängig davon, wie schnell die
              Kamera den Code erkennt und wie die TAN-Methode konfiguriert ist.
            </p>

            <h3>Voraussetzungen</h3>
            <ul>
              <li>
                <strong>Banking-App</strong> mit integriertem QR-Scanner (die meisten großen
                deutschen Banken – Details in der{' '}
                <Link href="/wissen/banking-apps" className="text-sky-400 hover:text-sky-300">
                  Banking-Apps Übersicht
                </Link>)
              </li>
              <li>
                <strong>Kamera-Berechtigung</strong> für die Banking-App im Betriebssystem
              </li>
              <li>
                <strong>Gültiger GiroCode</strong> – ausgedruckt oder auf einem Bildschirm
              </li>
            </ul>

            <h3>Wie lange dauert der Prozess?</h3>
            <p>
              In der Praxis dauert eine Überweisung via GiroCode etwa:
            </p>
            <ul>
              <li><strong>5–10 Sekunden</strong> bei Push-TAN oder biometrischer Freigabe</li>
              <li><strong>20–40 Sekunden</strong> bei SMS-TAN oder ChipTAN</li>
            </ul>
            <p>
              Zum Vergleich: Eine manuelle Überweisung (IBAN eintippen, Betrag eingeben,
              Verwendungszweck) dauert erfahrungsgemäß 1–3 Minuten.
            </p>
          </section>

          {/* ─── SECTION 2: iPhone ─── */}
          <section aria-labelledby="iphone" className="mt-8">
            <h2 id="iphone">GiroCode scannen mit iPhone (iOS)</h2>

            <h3>Kamera-App vs. Banking-App</h3>
            <p>
              Die native iPhone-Kamera (iOS 11+) erkennt QR-Codes und kann den enthaltenen Text
              anzeigen. Für einen <strong>GiroCode reicht das allein jedoch nicht</strong>, da die
              Kamera den EPC-Payload nur als Text anzeigt, aber keine Überweisung auslöst. Du
              brauchst immer die Banking-App mit integriertem Scanner.
            </p>
            <p>
              <strong>Ausnahme:</strong> Einige Banking-Apps auf iOS erlauben es, QR-Codes direkt
              aus dem Foto-Archiv zu importieren. Das ist praktisch, wenn du eine Rechnung als PDF
              auf dem iPhone gespeichert hast: Screenshot erstellen, in der Banking-App „Aus Galerie
              scannen" wählen.
            </p>

            <h3>Schritt-für-Schritt Anleitung für iPhone</h3>
            <ol>
              <li>
                <strong>Banking-App öffnen</strong> und mit Face ID, Touch ID oder PIN anmelden.
              </li>
              <li>
                Navigiere zum Bereich <strong>„Überweisung"</strong> oder „Senden".
              </li>
              <li>
                Suche nach einem <strong>QR-Code-Symbol</strong> oder einer Kamera. Es befindet
                sich meist oben rechts oder als eigener Button im Formular.
              </li>
              <li>
                Beim ersten Start fragt iOS nach der <strong>Kamera-Berechtigung</strong>. Erteile
                sie dauerhaft (nicht nur einmal), sonst musst du bei jedem Scan neu bestätigen.
              </li>
              <li>
                Halte das iPhone im <strong>Querformat oder Hochformat</strong> – beide
                funktionieren. Optimaler Abstand: <strong>15–25 cm</strong> vom QR-Code.
              </li>
              <li>
                Die App erkennt den Code und zeigt die <strong>vorausgefüllte Überweisung</strong>
                an. Prüfe alle Felder.
              </li>
              <li>
                <strong>Bestätigen</strong> mit Face ID, Touch ID oder TAN.
              </li>
            </ol>

            <h3>Häufige Probleme auf iOS</h3>
            <ul>
              <li>
                <strong>Kamera-Berechtigung verweigert:</strong> Einstellungen → Datenschutz →
                Kamera → Banking-App → „Beim Verwenden der App erlauben".
              </li>
              <li>
                <strong>Code wird nicht erkannt:</strong> Bildschirmhelligkeit erhöhen (bei
                digitalem Scan), Abstand anpassen, Kameraobjektiv reinigen.
              </li>
              <li>
                <strong>App-Version veraltet:</strong> Im App Store nach Updates suchen.
                GiroCode-Support wurde bei vielen Apps erst in neueren Versionen eingeführt.
              </li>
            </ul>

            <h3>iOS-Version Kompatibilität</h3>
            <p>
              Banking-Apps setzen in der Regel eine aktuelle iOS-Version voraus. Ab iOS 15 ist
              die Kamera-Performance für QR-Code-Scans sehr zuverlässig. Bei iOS 13 oder älter
              kann es gelegentlich zu langsamerer Erkennung kommen.
            </p>
          </section>

          {/* ─── SECTION 3: Android ─── */}
          <section aria-labelledby="android" className="mt-8">
            <h2 id="android">GiroCode scannen mit Android</h2>

            <h3>Unterschiede zwischen Android-Versionen</h3>
            <p>
              Android ist offener als iOS, was mehr Variabilität bedeutet. Je nach Hersteller und
              Android-Version unterscheiden sich die Kamera-Apps und Berechtigungsdialoge. Die
              Banking-App selbst verhält sich jedoch auf allen Android-Geräten ähnlich, da sie
              den Scanner selbst implementiert.
            </p>

            <h3>Samsung vs. Google Pixel vs. andere</h3>
            <ul>
              <li>
                <strong>Samsung:</strong> Kamera-App unterstützt QR-Codes nativ, Banking-Apps
                funktionieren zuverlässig. Samsung-spezifische Sicherheits-Features (Knox) können
                die Banking-App in einer gesicherten Zone ausführen.
              </li>
              <li>
                <strong>Google Pixel:</strong> Sehr gute Kamera-Performance, direktes Android ohne
                Hersteller-Overlay. Banking-Apps funktionieren optimal.
              </li>
              <li>
                <strong>Andere Hersteller (Xiaomi, Huawei, OnePlus etc.):</strong> Im Wesentlichen
                identische Funktionalität, aber manchmal abweichende Datenschutzeinstellungen
                oder App-Berechtigungen, die vorab konfiguriert werden müssen.
              </li>
            </ul>

            <h3>Schritt-für-Schritt Anleitung für Android</h3>
            <ol>
              <li>
                <strong>Banking-App öffnen</strong> und anmelden.
              </li>
              <li>
                Im Hauptmenü oder via Navigation <strong>„Überweisung"</strong> aufrufen.
              </li>
              <li>
                QR-Scanner-Symbol antippen – bei Android oft als Kamera-Icon oder QR-Symbol,
                manchmal über das <strong>Drei-Punkte-Menü</strong> zugänglich.
              </li>
              <li>
                Bei erster Nutzung: <strong>Kamera-Berechtigung erteilen</strong>. Unter Android
                kann das in Einstellungen → Apps → [Banking-App] → Berechtigungen nachgeholt werden.
              </li>
              <li>
                <strong>GiroCode scannen</strong> – idealer Abstand 15–30 cm, gute Beleuchtung.
              </li>
              <li>
                Felder prüfen, Überweisung mit TAN oder Fingerabdruck <strong>bestätigen</strong>.
              </li>
            </ol>

            <h3>Häufige Probleme auf Android</h3>
            <ul>
              <li>
                <strong>Scan-Button nicht auffindbar:</strong> Manche Android-Apps verstecken
                den QR-Scanner hinter einem Menü. Suche unter „Mehr", den drei Punkten oder
                einem Kamera-Symbol.
              </li>
              <li>
                <strong>Kamera-Berechtigung fehlt:</strong> Einstellungen → Apps → [Banking-App]
                → Berechtigungen → Kamera aktivieren.
              </li>
              <li>
                <strong>App vom Hintergrund beendet:</strong> Manche Energiesparmodi beenden
                Apps aggressiv. Banking-App zu den Ausnahmen hinzufügen.
              </li>
            </ul>
          </section>

          {/* ─── SECTION 4: Probleme und Lösungen ─── */}
          <section aria-labelledby="probleme" className="mt-8">
            <h2 id="probleme">Probleme beim Scannen – Lösungen</h2>

            <h3>QR-Code wird nicht erkannt</h3>
            <div className="not-prose my-4 space-y-3">
              <div className="rounded-lg border border-slate-700 bg-slate-900/40 p-4">
                <p className="mb-1 text-sm font-medium text-amber-400">Problem: Code zu dunkel / zu hell</p>
                <p className="text-sm text-slate-300">
                  <strong>Lösung:</strong> Bildschirmhelligkeit erhöhen (bei digitalem Scan) oder
                  für bessere Beleuchtung sorgen (bei gedrucktem Code). Glanzpapier vermeiden,
                  da Reflexionen den Scan behindern.
                </p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900/40 p-4">
                <p className="mb-1 text-sm font-medium text-amber-400">Problem: Falscher Abstand</p>
                <p className="text-sm text-slate-300">
                  <strong>Lösung:</strong> Optimaler Abstand ist <strong>15–30 cm</strong>. Zu nah
                  kann dazu führen, dass die Kamera nicht scharf stellen kann; zu weit, dass der
                  Code zu klein wird.
                </p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900/40 p-4">
                <p className="mb-1 text-sm font-medium text-amber-400">Problem: Kamera schmutzig</p>
                <p className="text-sm text-slate-300">
                  <strong>Lösung:</strong> Kameraobjektiv vorsichtig mit einem weichen Tuch reinigen.
                  Fingerabdrücke auf dem Objektiv verschlechtern die Scanqualität deutlich.
                </p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900/40 p-4">
                <p className="mb-1 text-sm font-medium text-amber-400">Problem: Code zu klein gedruckt</p>
                <p className="text-sm text-slate-300">
                  <strong>Lösung:</strong> GiroCode neu generieren und auf mindestens 2 × 2 cm
                  (besser 3 × 3 cm) drucken. Unsere Generierung erzeugt hochauflösende Codes.
                </p>
              </div>
            </div>

            <h3>Falsche Daten werden angezeigt</h3>
            <p>
              Wenn nach dem Scan falsche IBAN, falscher Betrag oder falscher Verwendungszweck
              angezeigt werden:
            </p>
            <ul>
              <li><strong>GiroCode neu generieren</strong> – möglicherweise ist der aktuelle Code fehlerhaft</li>
              <li>IBAN aus einem anderen Dokument überprüfen und vergleichen</li>
              <li>Im Generator alle Felder kontrollieren, besonders das Betragsformat (Punkt, kein Komma)</li>
            </ul>

            <h3>App stürzt beim Scannen ab</h3>
            <ul>
              <li><strong>App-Update:</strong> Im App Store / Play Store nach Updates suchen</li>
              <li><strong>App neu installieren:</strong> Deinstallieren und neu installieren (Anmeldedaten werden benötigt)</li>
              <li><strong>Gerät neu starten:</strong> Manchmal löst ein einfacher Neustart Kamera-Probleme</li>
              <li><strong>Bank kontaktieren:</strong> Falls das Problem anhält, beim Kundenservice melden</li>
            </ul>
          </section>

          {/* ─── SECTION 5: Qualitätsanforderungen ─── */}
          <section aria-labelledby="qualitaet" className="mt-8">
            <h2 id="qualitaet">Qualitätsanforderungen für scannbare GiroCodes</h2>

            <h3>Mindestgröße beim Druck</h3>
            <p>
              Der EPC-Standard empfiehlt eine Mindestgröße von <strong>2 × 2 cm</strong> für den
              Druck. Für optimale Ergebnisse wird <strong>3 × 3 cm</strong> empfohlen. Kleinere
              Codes funktionieren bei guten Lichtverhältnissen und hochwertigen Kameras, sind aber
              risikoreicher.
            </p>

            <h3>Druckauflösung</h3>
            <p>
              Für scharfe QR-Codes beim Druck werden mindestens <strong>300 DPI</strong> (dots
              per inch) empfohlen. Bei 600 DPI werden Kanten noch schärfer und der Code ist
              noch zuverlässiger lesbar. Viele Standard-Bürodrucker drucken mit 300–600 DPI –
              das ist in der Regel ausreichend.
            </p>

            <h3>Kontrast: Schwarz auf Weiß</h3>
            <p>
              Der QR-Code muss einen ausreichenden Kontrast haben. Optimal ist <strong>schwarz auf
              weißem Hintergrund</strong>. Folgendes sollte vermieden werden:
            </p>
            <ul>
              <li>Farbiger Hintergrund hinter dem QR-Code</li>
              <li>Farbiger QR-Code (grün, blau etc.)</li>
              <li>Textur oder Muster im Hintergrund</li>
              <li>Logo-Überlagerung im QR-Code (auch wenn technisch möglich)</li>
            </ul>

            <h3>Laminierung und Reflexionen</h3>
            <p>
              Laminierte Dokumente können durch <strong>Reflexionen</strong> die Scanbarkeit
              beeinträchtigen. Wenn ein QR-Code laminiert werden muss (z.&nbsp;B. für ein
              dauerhaftes Schild), sollte matte Laminierung verwendet werden, keine Hochglanz-Folie.
            </p>

            <h3>Digitale Mindestgröße am Bildschirm</h3>
            <p>
              Für digitale GiroCodes (auf Bildschirmen oder in PDFs) gilt: Der Code sollte auf
              dem normalen Zoom-Level mindestens <strong>100 × 100 Pixel</strong> groß sein.
              Bei Displays mit hoher Auflösung (Retina, 4K) ist die Größe kein Problem, aber bei
              alten Low-Resolution-Displays oder bei der Verwendung in E-Mails ist auf ausreichende
              Größe zu achten.
            </p>
          </section>

          {/* ─── SECTION 6: Digital scannen ─── */}
          <section aria-labelledby="digital" className="mt-8">
            <h2 id="digital">GiroCode digital scannen (Bildschirm)</h2>
            <p>
              Das Scannen eines GiroCodes vom Bildschirm – also ein Smartphone vor den Monitor
              halten – funktioniert in den meisten Fällen sehr gut, hat aber ein paar Eigenheiten:
            </p>

            <h3>Funktioniert das?</h3>
            <p>
              Ja, in der Regel sehr gut. Moderne Smartphone-Kameras mit gutem Autofokus haben
              keine Probleme, QR-Codes von Bildschirmen zu lesen. Wichtig ist, dass keine
              störenden Muster (Moiré-Effekt) durch die unterschiedlichen Pixelgitter von
              Kamera und Display entstehen.
            </p>

            <h3>Optimale Bildschirmhelligkeit</h3>
            <p>
              Der Monitor oder das Display, auf dem der QR-Code angezeigt wird, sollte auf
              <strong>mittlerer bis hoher Helligkeit</strong> eingestellt sein. Zu dunkel macht
              den Scan schwieriger, zu hell kann bei spiegelnden Displays Reflexionen erzeugen.
              70–80 % Helligkeit ist ein guter Richtwert.
            </p>

            <h3>Abstand und Winkel</h3>
            <p>
              Halte das Smartphone <strong>parallel zum Bildschirm</strong>, also nicht schräg.
              Ein Winkel von mehr als 30° kann dazu führen, dass der QR-Code verzerrt erscheint
              und nicht mehr korrekt gelesen werden kann. Abstand: 15–30 cm.
            </p>

            <h3>Entspiegelung wichtig</h3>
            <p>
              Bei spiegelnden Monitoren oder Tablets kann das Reflexionslicht der Kamera-Lampe
              (Flash-Licht) die Lesbarkeit stören. Flash ausschalten und für gutes Umgebungslicht
              sorgen – das löst das Problem in den meisten Fällen.
            </p>
          </section>

          {/* ─── SECTION 7: Sicherheitshinweise ─── */}
          <section aria-labelledby="sicherheit" className="mt-8">
            <h2 id="sicherheit">Sicherheitstipps beim Scannen</h2>

            <h3>Daten immer vor Bestätigung prüfen</h3>
            <p>
              Die Bequemlichkeit des GiroCodes darf nicht dazu verleiten, die Überweisungsdaten
              blind zu bestätigen. Prüfe nach jedem Scan:
            </p>
            <ul>
              <li>
                <strong>Empfängername:</strong> Entspricht er dem Rechnungssteller, dem du zahlen möchtest?
              </li>
              <li>
                <strong>IBAN:</strong> Schaue dir zumindest die <strong>ersten und letzten 4 Stellen</strong>
                an und vergleiche sie mit der textlichen Angabe auf der Rechnung.
              </li>
              <li>
                <strong>Betrag:</strong> Stimmt er mit dem auf der Rechnung ausgewiesenen Bruttobetrag überein?
              </li>
              <li>
                <strong>Verwendungszweck:</strong> Enthält er die Rechnungsnummer und weitere
                erwartete Angaben?
              </li>
            </ul>

            <h3>Manipulierte QR-Codes erkennen – Quishing</h3>
            <p>
              <strong>Quishing</strong> (QR-Code + Phishing) ist eine aufkommende Betrugsform, bei
              der Kriminelle legitime QR-Codes durch manipulierte ersetzen. Erkennungszeichen:
            </p>
            <ul>
              <li>
                QR-Code als <strong>Aufkleber</strong> über einem Original-Code (ungewöhnlich glattes
                Papier, leicht anzuheben)
              </li>
              <li>
                Die IBAN nach dem Scan <strong>stimmt nicht</strong> mit der auf der Rechnung
                gedruckten IBAN überein
              </li>
              <li>
                Der <strong>Empfängername</strong> nach dem Scan ist unbekannt oder klingt verdächtig
              </li>
            </ul>

            <h3>Was tun bei Verdacht?</h3>
            <ol>
              <li>Überweisung <strong>abbrechen</strong> – ohne Bestätigung.</li>
              <li>Rechnungssteller über einen <strong>unabhängigen Kanal kontaktieren</strong>
                (z.&nbsp;B. gespeicherte Telefonnummer, nicht die auf der verdächtigen Rechnung).</li>
              <li>Bei bereits getätigter Überweisung: <strong>Sofort die Bank anrufen</strong>
                und Rückbuchung beantragen. SEPA-Überweisungen können unter Umständen noch
                gestoppt werden, wenn sie noch nicht verarbeitet wurden.</li>
              <li>Anzeige bei der <strong>Polizei</strong> erstatten.</li>
            </ol>
          </section>

          {/* ─── SECTION 8: Profis ─── */}
          <section aria-labelledby="profis" className="mt-8">
            <h2 id="profis">GiroCode für Profis – Massenverarbeitung</h2>
            <p>
              Wer nicht nur gelegentlich einen GiroCode scannt, sondern auf der anderen Seite
              steht – also GiroCodes für viele Rechnungen generiert – sollte über eine
              professionelle Lösung nachdenken.
            </p>

            <h3>Wann lohnt sich Automatisierung?</h3>
            <p>
              Wenn du regelmäßig mehr als 5–10 Rechnungen pro Monat erstellst, lohnt sich die
              Integration in eine Buchhaltungssoftware. Der manuelle Aufwand (GiroCode generieren,
              in Rechnung einbetten) summiert sich schnell zu mehreren Stunden pro Jahr.
            </p>

            <div className="not-prose my-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-5">
                <h3 className="mb-2 text-base font-semibold text-slate-50">sevDesk</h3>
                <p className="mb-3 text-sm text-slate-300">
                  sevDesk generiert GiroCodes automatisch für jede Ausgangsrechnung.
                  Zahlungseingänge werden per IBAN-Matching automatisch gebucht. Keine
                  manuelle Arbeit mehr – von der Rechnungserstellung bis zum
                  Zahlungseingang läuft alles automatisch.
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
                  FastBill ist ideal für Freelancer, die einfach und schnell Rechnungen
                  mit QR-Code erstellen möchten. Wenige Klicks, fertige Rechnung mit GiroCode,
                  direkt per E-Mail versenden.
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

          {/* ─── SECTION 9: FAQ ─── */}
          <section aria-labelledby="faq" className="mt-8">
            <h2 id="faq">Häufige Fragen zum GiroCode scannen</h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Kann ich einen GiroCode auch mit der normalen Kamera-App scannen?
                </h3>
                <p className="text-sm text-slate-300">
                  Die Kamera-App kann den QR-Code lesen und den EPC-Text anzeigen, aber keine
                  Überweisung auslösen. Du brauchst immer die Banking-App mit integriertem
                  QR-Scanner für die Überweisung.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Was passiert, wenn ich nach dem Scan den Betrag ändere?
                </h3>
                <p className="text-sm text-slate-300">
                  Du kannst den vorausgefüllten Betrag in der Überweisungsmaske jederzeit ändern.
                  Die Banking-App lässt das zu. Ändere Beträge nur, wenn du sicher bist, dass
                  der im QR-Code kodierte Betrag falsch ist – z.&nbsp;B. nach einer Gutschrift.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Funktioniert das Scannen auch bei einer schlechten Internetverbindung?
                </h3>
                <p className="text-sm text-slate-300">
                  Der Scan selbst benötigt keine Internetverbindung – er läuft lokal auf dem
                  Gerät. Für die Überweisung wird jedoch eine Verbindung zur Banking-App des
                  Anbieters benötigt. TAN-Generierung und Übertragung benötigen Internet.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Kann ich einen GiroCode aus einer E-Mail heraus scannen?
                </h3>
                <p className="text-sm text-slate-300">
                  Das hängt von der Banking-App ab. Einige Apps erlauben den Import aus dem
                  Foto-Archiv oder als Screenshot. Am einfachsten: Rechnung als PDF öffnen,
                  Screenshot machen, dann in der Banking-App „Aus Galerie scannen" verwenden.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Warum erkennt meine App den GiroCode nicht, obwohl andere Apps es können?
                </h3>
                <p className="text-sm text-slate-300">
                  Manche Banking-Apps unterstützen nur bestimmte Versionen des EPC-Standards oder
                  haben Kompatibilitätsprobleme mit bestimmten QR-Code-Generatoren. Unser Generator
                  erzeugt EPC-konforme Codes (Version 002), die von allen gängigen Apps unterstützt
                  werden sollten.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Kann ich einen GiroCode mehrfach scannen und überweisen?
                </h3>
                <p className="text-sm text-slate-300">
                  Ja, ein GiroCode kann beliebig oft gescannt werden. Es gibt keinen technischen
                  Mechanismus, der doppelte Zahlungen verhindert. Als Empfänger solltest du
                  Doppelzahlungen in der Buchhaltung erkennen und zurückbuchen.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Gibt es einen Unterschied zwischen GiroCode und SEPA-QR?
                </h3>
                <p className="text-sm text-slate-300">
                  Nein, beide Begriffe bezeichnen dasselbe Format. „GiroCode" ist der deutsche
                  Markenname, „SEPA-QR" oder „EPC-QR" beschreiben den zugrunde liegenden
                  technischen Standard.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Muss ich nach dem Scan noch manuell etwas eingeben?
                </h3>
                <p className="text-sm text-slate-300">
                  Nur wenn der GiroCode kein Betragsfeld enthält (optionales Feld). Dann muss
                  der Betrag noch manuell eingetragen werden. Alle anderen Felder (IBAN, Name,
                  Verwendungszweck) werden vollautomatisch ausgefüllt.
                </p>
              </div>
            </div>
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
                <li><Link href="/wissen/banking-apps" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">Banking-Apps Übersicht 2025</Link></li>
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
