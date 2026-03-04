import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to scan a GiroCode – step‑by‑step guide',
  description:
    'Scan a GiroCode with your banking app: step‑by‑step instructions for iPhone and Android plus tips if scanning fails.',
};

export default function WissenScannenPageEn() {
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
            <li className="text-slate-400">Scan a GiroCode</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Practice · Scan a GiroCode
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              How to scan a GiroCode – step‑by‑step guide
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Scanning a GiroCode is straightforward – once you know where the QR scanner is hidden in
              your banking app. This guide walks you through the steps and gives practical tips.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="steps-en">
            <h2 id="steps-en">Step‑by‑step: scanning a GiroCode</h2>
            <p>The basic steps are similar in almost all banking apps:</p>
            <ol>
              <li>Open your banking app and log in if needed.</li>
              <li>Go to the “Transfer”, “Payments” or “GiroCode” section.</li>
              <li>Start the QR scanner – usually a camera or QR symbol.</li>
              <li>Point the camera at the GiroCode on the invoice or screen.</li>
              <li>Check the auto‑filled data (recipient, IBAN, amount, reference).</li>
              <li>Fill in any missing or variable fields (e.g. amount).</li>
              <li>Authorise the transfer using TAN, fingerprint or Face ID.</li>
            </ol>
          </section>

          <section aria-labelledby="ios-android-en" className="mt-8">
            <h2 id="ios-android-en">Differences between iPhone and Android</h2>
            <p>
              The actual GiroCode scan happens <strong>inside the banking app</strong>, so
              differences between iOS and Android are minor. Typical differences are:
            </p>
            <ul>
              <li>
                <strong>Navigation:</strong> on iOS, scan buttons are often in the bottom tab bar; on
                Android they may appear in a side menu or as a floating action button.
              </li>
              <li>
                <strong>Camera permissions:</strong> the operating system will ask for camera access
                the first time you start the QR scanner. You must grant it for scanning to work.
              </li>
              <li>
                <strong>Screenshots &amp; files:</strong> some apps let you scan QR codes directly
                from screenshots or PDFs on both platforms.
              </li>
            </ul>
            <p>
              So what really matters is not the OS but how your specific banking app implements the
              feature.
            </p>
          </section>

          <section aria-labelledby="not-detected-en" className="mt-8">
            <h2 id="not-detected-en">What if the code is not detected?</h2>
            <p>
              Sometimes you need a bit of fine‑tuning for the QR scanner to recognise the GiroCode
              reliably. The following factors matter:
            </p>
            <ul>
              <li>
                <strong>Lighting &amp; contrast:</strong> ensure good lighting and avoid reflections –
                especially on glossy paper.
              </li>
              <li>
                <strong>Distance &amp; focus:</strong> don&apos;t hold the phone too close or too far
                away. Many scanners work best at a medium distance.
              </li>
              <li>
                <strong>Print quality:</strong> very small or low‑resolution codes can cause problems.
                Make sure the code is large and sharp enough.
              </li>
            </ul>
            <p>
              If scanning from the screen doesn&apos;t work, try printing the invoice or zooming in
              further until the code fills more of the camera view.
            </p>
          </section>

          <section aria-labelledby="security-en" className="mt-8">
            <h2 id="security-en">Security tip: always check the data</h2>
            <p>
              Even though the GiroCode automates many steps, one thing remains essential:{' '}
              <strong>always check the displayed data</strong> before you authorise the transfer,
              paying particular attention to:
            </p>
            <ul>
              <li>the recipient&apos;s name,</li>
              <li>the IBAN,</li>
              <li>the amount,</li>
              <li>and the payment reference.</li>
            </ul>
            <p>
              If something looks wrong you can edit individual fields manually or cancel the process.
              Serious invoice issuers make this verification easy by printing all details clearly in
              plain text next to the GiroCode.
            </p>
          </section>

          <div className="mt-10 flex flex-col gap-6 border-t border-slate-800 pt-8">
            <p className="mb-2">
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
                    href="/en/wissen/banking-apps"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Banking apps overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/wissen/girocode"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    What is a GiroCode?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/wissen/rechnung"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    GiroCode on invoices
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

