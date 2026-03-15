import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Banking Apps Supporting GiroCode – Complete Overview 2025',
  description:
    'Which banking apps support GiroCodes? Sparkasse, ING, DKB, Volksbank and more – complete overview with step-by-step guides.',
};

export default function WissenBankingAppsPageEn() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/en" className="text-sky-400 hover:text-sky-300">
                Home
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link href="/en/wissen" className="text-sky-400 hover:text-sky-300">
                Knowledge
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">Banking Apps with GiroCode</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Practice · Banking Apps &amp; GiroCode
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Banking Apps Supporting GiroCode – Complete Overview 2025
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              GiroCode scanning is supported by virtually all major German banking apps in 2025.
              This guide covers which apps support the standard, how to use the QR scanner
              feature in the most popular apps, and what to do if your app does not support
              GiroCode scanning.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">

          <section aria-labelledby="which-apps-support">
            <h2 id="which-apps-support">Which Banking Apps Support GiroCodes?</h2>
            <p>
              As of early 2025, GiroCode scanning is supported by all major German banking apps.
              The feature is typically found in the &ldquo;Transfer&rdquo; or &ldquo;Payments&rdquo;
              section of each app, often as a QR code icon or camera button next to the IBAN input
              field. Here is a comprehensive overview:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 pr-4 text-left text-slate-300">Banking App</th>
                    <th className="py-2 pr-4 text-left text-slate-300">Support</th>
                    <th className="py-2 text-left text-slate-300">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-400">
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Sparkasse App</td>
                    <td className="py-2 pr-4 text-emerald-400">✅ Full support</td>
                    <td className="py-2">QR scanner in transfer section; widely tested</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">VR-Banking (Volksbank/Raiffeisenbank)</td>
                    <td className="py-2 pr-4 text-emerald-400">✅ Full support</td>
                    <td className="py-2">QR code button in new transfer form</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">ING Banking to go</td>
                    <td className="py-2 pr-4 text-emerald-400">✅ Full support</td>
                    <td className="py-2">Camera icon in IBAN field during transfers</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">DKB Banking</td>
                    <td className="py-2 pr-4 text-emerald-400">✅ Full support</td>
                    <td className="py-2">Dedicated QR scan button in transfer view</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Comdirect (Commerzbank)</td>
                    <td className="py-2 pr-4 text-emerald-400">✅ Full support</td>
                    <td className="py-2">QR scan available in &ldquo;New transfer&rdquo;</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Deutsche Bank</td>
                    <td className="py-2 pr-4 text-emerald-400">✅ Full support</td>
                    <td className="py-2">QR code scan in mobile banking app</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Commerzbank</td>
                    <td className="py-2 pr-4 text-emerald-400">✅ Full support</td>
                    <td className="py-2">GiroCode support via camera in transfer form</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">N26</td>
                    <td className="py-2 pr-4 text-yellow-400">⚠️ Partial</td>
                    <td className="py-2">QR scan available; BIC sometimes required</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Consorsbank (BNP Paribas)</td>
                    <td className="py-2 pr-4 text-emerald-400">✅ Full support</td>
                    <td className="py-2">QR scan in transfer section</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Targobank</td>
                    <td className="py-2 pr-4 text-emerald-400">✅ Full support</td>
                    <td className="py-2">GiroCode scan available in banking app</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">HypoVereinsbank (UniCredit)</td>
                    <td className="py-2 pr-4 text-emerald-400">✅ Full support</td>
                    <td className="py-2">QR scan in mobile transfer view</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Postbank</td>
                    <td className="py-2 pr-4 text-emerald-400">✅ Full support</td>
                    <td className="py-2">Integrated QR scanner for SEPA transfers</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Note: App versions and features change frequently. If you cannot find the QR scanner
              in your banking app, check for app updates in the App Store or Google Play Store.
              Feature locations also vary between app updates and device types (iOS vs. Android).
            </p>
          </section>

          <section aria-labelledby="general-scanning-guide" className="mt-10">
            <h2 id="general-scanning-guide">Step-by-Step: Scanning a GiroCode</h2>
            <p>
              While each banking app has a slightly different interface, the general process for
              scanning a GiroCode follows the same steps:
            </p>
            <ol>
              <li>
                <strong>Open your banking app:</strong> Launch the app and log in with your
                PIN, fingerprint or Face ID.
              </li>
              <li>
                <strong>Navigate to &ldquo;Transfer&rdquo; or &ldquo;Payments&rdquo;:</strong>{' '}
                Find the transfer or payment initiation function. In most apps this is a prominent
                button on the home screen or in the navigation bar.
              </li>
              <li>
                <strong>Find the QR scanner:</strong> Look for a QR code icon, camera icon or
                a button labelled &ldquo;Scan QR code&rdquo; or similar. This is usually located
                near the IBAN input field or as a button in the transfer form header.
              </li>
              <li>
                <strong>Point the camera at the GiroCode:</strong> Allow camera access when
                prompted. Hold your phone steady and point the camera at the GiroCode printed
                on the invoice or displayed on screen. Ensure the code is well-lit and the
                entire code (including quiet zone) is visible in the frame.
              </li>
              <li>
                <strong>Wait for automatic recognition:</strong> The app will automatically
                detect and decode the QR code. You do not need to tap a button to trigger
                scanning – it happens automatically when the code is in focus.
              </li>
              <li>
                <strong>Verify the pre-filled data:</strong> After scanning, the transfer form
                is pre-filled. <strong>Always carefully check</strong> the recipient name, IBAN,
                amount and payment reference before proceeding. Confirm they match what you
                expect.
              </li>
              <li>
                <strong>Enter your TAN or use biometrics:</strong> Confirm the transfer using
                your bank&apos;s authentication method (pushTAN, chipTAN, SMS-TAN, fingerprint,
                Face ID or similar).
              </li>
              <li>
                <strong>Confirm the transfer:</strong> Tap the final confirmation button.
                The transfer is submitted and the money typically arrives on the next business
                day (or instantly if SEPA Instant is supported).
              </li>
            </ol>
          </section>

          <section aria-labelledby="sparkasse-guide" className="mt-10">
            <h2 id="sparkasse-guide">Scanning with Sparkasse App – Step by Step</h2>
            <p>
              The Sparkasse app is used by over 10 million people in Germany and was among the
              first German banking apps to support GiroCode scanning.
            </p>
            <ol>
              <li>Open the Sparkasse app and log in with your PIN or fingerprint</li>
              <li>Tap &ldquo;Überweisungen&rdquo; (Transfers) in the bottom navigation</li>
              <li>Tap &ldquo;Neue Überweisung&rdquo; (New Transfer)</li>
              <li>Tap the QR code icon (camera symbol) in the upper area of the transfer form</li>
              <li>Grant camera permission if prompted</li>
              <li>Point the camera at the GiroCode – the app automatically scans it</li>
              <li>Check the pre-filled recipient name, IBAN, amount and reference</li>
              <li>Tap &ldquo;Weiter&rdquo; (Next), then confirm with your TAN</li>
            </ol>
            <p>
              <strong>Tip:</strong> If the QR code is on a dark invoice background, increase
              the screen brightness or move to better lighting for more reliable scanning.
            </p>
          </section>

          <section aria-labelledby="vr-banking-guide" className="mt-10">
            <h2 id="vr-banking-guide">Scanning with VR-Banking – Step by Step</h2>
            <p>
              VR-Banking is used by members of Volksbanken and Raiffeisenbanken across Germany.
            </p>
            <ol>
              <li>Open the VR-Banking app and authenticate (PIN/fingerprint/Face ID)</li>
              <li>Tap &ldquo;Überweisung&rdquo; (Transfer) in the main menu or home screen</li>
              <li>Select &ldquo;Neue Überweisung&rdquo; (New Transfer)</li>
              <li>In the transfer form, tap the QR code / camera icon next to the recipient IBAN field</li>
              <li>Allow camera access when prompted</li>
              <li>Scan the GiroCode – the form fills automatically</li>
              <li>Review all pre-filled fields carefully</li>
              <li>Complete the transfer with your SecureGo+ TAN or ChipTAN</li>
            </ol>
          </section>

          <section aria-labelledby="ing-guide" className="mt-10">
            <h2 id="ing-guide">Scanning with ING Banking – Step by Step</h2>
            <p>
              ING&apos;s banking app is known for its clean, straightforward interface. GiroCode
              scanning is well-integrated:
            </p>
            <ol>
              <li>Open the ING Banking to go app and log in</li>
              <li>Tap &ldquo;Überweisen&rdquo; (Transfer) on the home screen or account overview</li>
              <li>In the transfer form, look for the camera icon at the right end of the IBAN input field</li>
              <li>Tap the camera icon to activate the QR scanner</li>
              <li>Scan the GiroCode – all fields are filled in automatically</li>
              <li>Verify the data, enter your amount if not pre-filled, and confirm with your ING TAN</li>
            </ol>
          </section>

          <section aria-labelledby="dkb-guide" className="mt-10">
            <h2 id="dkb-guide">Scanning with DKB Banking – Step by Step</h2>
            <p>
              DKB (Deutsche Kreditbank) is a popular online bank with a strong mobile app.
            </p>
            <ol>
              <li>Open the DKB app and log in with your access number and PIN</li>
              <li>Navigate to &ldquo;Überweisungen&rdquo; (Transfers)</li>
              <li>Tap &ldquo;Neue Überweisung&rdquo; (New Transfer)</li>
              <li>Find the QR code scan icon in the transfer form</li>
              <li>Grant camera permissions and scan the GiroCode</li>
              <li>All fields (recipient, IBAN, amount, reference) are pre-filled</li>
              <li>Review and confirm with your DKB TAN (pushTAN or chipTAN)</li>
            </ol>
          </section>

          <section aria-labelledby="no-qr-scanner" className="mt-10">
            <h2 id="no-qr-scanner">What to Do If Your App Has No QR Scanner</h2>
            <p>
              In the unlikely event that your banking app does not have a built-in GiroCode
              scanner, you have several alternatives:
            </p>

            <h3>Alternative 1: Google Lens / iOS Camera App</h3>
            <p>
              The standard iOS camera app and Google Lens can read QR codes, but they cannot
              directly initiate bank transfers. Instead, they decode the EPC payload and may
              offer to open it as text. You can then manually copy the payment details.
            </p>

            <h3>Alternative 2: Standard QR scanner apps</h3>
            <p>
              Many generic QR scanner apps (QR Code Reader, Barcode Scanner, etc.) can read
              GiroCodes and display the decoded text payload. You can then manually enter the
              displayed IBAN, amount and reference into your banking app&apos;s transfer form.
              This is faster than reading the invoice text directly and reduces transcription
              errors.
            </p>

            <h3>Alternative 3: Contact your bank</h3>
            <p>
              If your bank&apos;s app does not support GiroCode scanning, contact your bank
              and ask them to add this feature. Many banks have added GiroCode support after
              customer requests. You can also suggest switching to a bank with a more capable
              banking app.
            </p>

            <h3>Alternative 4: Check for app updates</h3>
            <p>
              Banking apps are updated regularly. If your current version does not have a QR
              scanner, check for updates in the App Store (iOS) or Google Play Store (Android).
              Banks frequently add new features in app updates, and GiroCode support may have
              been added since you last updated.
            </p>
          </section>

          <section aria-labelledby="security-scanning" className="mt-10">
            <h2 id="security-scanning">Security When Scanning GiroCodes</h2>

            <h3>Always verify data before confirming</h3>
            <p>
              The single most important security practice when scanning a GiroCode is to{' '}
              <strong>always carefully check the pre-filled transfer data</strong> before
              confirming. Specifically, verify:
            </p>
            <ul>
              <li><strong>Recipient name:</strong> Does it match who you expect to pay?</li>
              <li><strong>IBAN:</strong> Does the first few characters (country code + bank code) match the expected bank?</li>
              <li><strong>Amount:</strong> Does it match the invoice total?</li>
              <li><strong>Payment reference:</strong> Does it reference the correct invoice number?</li>
            </ul>
            <p>
              If anything looks unexpected, do not confirm the transfer. Contact the invoice
              sender to verify the payment details.
            </p>

            <h3>Recognising manipulated QR codes</h3>
            <p>
              A fraudulent actor could in theory replace a legitimate GiroCode on a printed
              invoice with a sticker containing a different QR code that redirects the payment
              to a different IBAN. This is particularly relevant for paper invoices received
              by post from unknown senders. Warning signs include:
            </p>
            <ul>
              <li>A QR code sticker that appears to be placed over the original</li>
              <li>The recipient name or IBAN in the pre-filled form does not match what is printed on the invoice</li>
              <li>The QR code is of noticeably different print quality than the rest of the invoice</li>
            </ul>
            <p>
              When in doubt, do not scan the QR code – enter the payment details manually from
              the human-readable invoice text instead.
            </p>

            <h3>QR code phishing (Quishing) explained</h3>
            <p>
              <strong>Quishing</strong> is the use of malicious QR codes for phishing attacks.
              In the context of bank payments, quishing attacks involve replacing legitimate
              GiroCodes with ones that redirect payments to fraudulent accounts. This can happen
              via:
            </p>
            <ul>
              <li>Physical stickers placed over legitimate QR codes on invoices</li>
              <li>Fake invoices with fraudulent GiroCodes sent by email</li>
              <li>QR codes in unsolicited mail claiming to be from utilities, tax authorities or debt collectors</li>
            </ul>
            <p>
              The best defence is simple: always verify the pre-filled transfer data against the
              human-readable invoice text before confirming. Never pay an invoice from an unknown
              sender based solely on a QR code scan.
            </p>

            <h3>What to do if you suspect fraud</h3>
            <p>
              If you have accidentally made a payment to a fraudulent GiroCode:
            </p>
            <ol>
              <li>Contact your bank immediately – the sooner you report it, the better the chance of recovery</li>
              <li>Provide your bank with the transaction date, amount and recipient IBAN</li>
              <li>File a police report</li>
              <li>Report the incident to the German Federal Financial Supervisory Authority (BaFin) if appropriate</li>
            </ol>
            <p>
              SEPA transfers can sometimes be recalled if reported quickly enough, but there is
              no guarantee of recovery once the recipient has withdrawn the funds.
            </p>
          </section>

          <section aria-labelledby="professional-invoice-mgmt" className="mt-10">
            <h2 id="professional-invoice-mgmt">Professional Invoice Management</h2>
            <p>
              For businesses that send large volumes of invoices with GiroCodes, professional
              invoice management software provides significant advantages over manual processes.
            </p>

            <h3>sevDesk – Manage Invoices and Incoming Payments</h3>
            <p>
              <strong>sevDesk</strong> provides a complete solution for invoice management:
              create invoices with automatic GiroCodes, monitor payment status in real time,
              and reconcile incoming bank transfers automatically via open banking. When a client
              scans your GiroCode and pays, the payment shows up in sevDesk within minutes
              (with SEPA Instant) or the next business day (standard SEPA). The system matches
              the payment to the open invoice based on the payment reference, marking it as paid
              automatically.
            </p>
            <p>
              sevDesk&apos;s dunning module can automatically send payment reminders for overdue
              invoices, each with a fresh GiroCode embedded, making it easy for clients to pay
              even after the due date.
            </p>
            <p>
              <a
                href="https://www.awin1.com/cread.php?awinmid=15944&awinaffid=2793610"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="font-medium text-sky-400 hover:text-sky-300 underline"
              >
                Try sevDesk free for 14 days *
              </a>
            </p>

            <h3>FastBill – Automatic Payment Reminders</h3>
            <p>
              <strong>FastBill</strong> makes it easy to track which invoices have been paid
              and automatically sends payment reminders for overdue invoices. Each reminder
              includes the original invoice with GiroCode, and FastBill can escalate the reminder
              level automatically (first reminder, second reminder, final notice). The integrated
              bank account sync ensures that payments made via GiroCode are immediately recognised
              and matched to the corresponding invoice.
            </p>
            <p>
              <a
                href="https://www.awin1.com/cread.php?awinmid=20766&awinaffid=2793610"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="font-medium text-sky-400 hover:text-sky-300 underline"
              >
                Try FastBill free for 14 days *
              </a>
            </p>
          </section>

          <div className="mt-10 flex flex-col gap-6 border-t border-slate-800 pt-8">
            <div className="rounded-lg border border-slate-700 bg-slate-900/40 p-4 text-xs text-slate-400">
              <strong className="text-slate-300">* Affiliate Disclosure:</strong> Links marked
              with * are affiliate links. If you purchase through these links, we receive a small
              commission at no extra cost to you. This helps us keep our free tools running.
            </div>
            <p>
              <Link
                href="/en"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Create GiroCode now
                <span aria-hidden>→</span>
              </Link>
            </p>
            <div>
              <h2 className="text-sm font-semibold text-slate-50">More articles</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    href="/en/wissen/girocode"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    What is a GiroCode? – Everything You Need to Know
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/wissen/scannen"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    How to Scan a GiroCode – Complete Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/wissen/rechnung"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    GiroCode on Invoices – The Complete Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/wissen/epc-standard"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    EPC Standard &amp; SEPA-QR – Technical Structure
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
