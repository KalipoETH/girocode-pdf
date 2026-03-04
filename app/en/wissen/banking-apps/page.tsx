import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Banking apps that support GiroCodes – overview',
  description:
    'Which banking apps support GiroCodes? Overview of major apps plus tips for scanning.',
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
            <li className="text-slate-400">Banking apps with GiroCode</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Practice · Banking apps with GiroCode
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Banking apps that support GiroCodes – overview
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Many modern banking apps can scan SEPA‑QR / GiroCodes and create a transfer from them.
              Here you&apos;ll find an overview and practical tips for scanning.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="apps-en">
            <h2 id="apps-en">Which apps support SEPA‑QR / GiroCode?</h2>
            <p>
              Support for GiroCodes is not a legal requirement but a convenience feature that banks
              can offer. Many major banks and direct banks now include a QR scanner in their apps,
              for example:
            </p>
            <ul>
              <li>Sparkassen apps</li>
              <li>Volks‑ and Raiffeisenbank apps</li>
              <li>ING banking app</li>
              <li>DKB banking app</li>
              <li>Comdirect banking app</li>
              <li>Deutsche Bank banking app</li>
              <li>N26</li>
              <li>Consorsbank</li>
            </ul>
            <p>
              This list is <strong>not exhaustive</strong>. Many smaller banks and specialised
              finance apps also include QR scanners, although the feature might have different names
              in the user interface.
            </p>
          </section>

          <section aria-labelledby="scan-en" className="mt-8">
            <h2 id="scan-en">How to scan a GiroCode in the banking app</h2>
            <p>The exact steps differ between apps, but the pattern is usually the same:</p>
            <ol>
              <li>Open your banking app and log in if necessary.</li>
              <li>Navigate to the “Transfer” or “Payments” section.</li>
              <li>Look for a button such as “Scan GiroCode”, “Scan QR code” or a camera icon.</li>
              <li>Point the camera at the GiroCode on the invoice or on your screen.</li>
              <li>Check the automatically filled in data and confirm the payment with TAN or biometrics.</li>
            </ol>
            <p>
              Many apps also allow you to scan a QR code directly from a{' '}
              <strong>screenshot or PDF</strong>, which is especially convenient for invoices you
              receive by email.
            </p>
          </section>

          <section aria-labelledby="no-scanner-en" className="mt-8">
            <h2 id="no-scanner-en">What if the app has no QR scanner?</h2>
            <p>If your banking app has no built‑in GiroCode scanner, you still have options:</p>
            <ul>
              <li>
                Check whether your bank offers an <strong>alternative app</strong> or a separate
                module for QR payments.
              </li>
              <li>
                Switch to a different official app of your bank, if multiple versions exist.
              </li>
              <li>
                Copy the data from the GiroCode generator and paste it into your online banking form
                <strong>manually</strong>.
              </li>
            </ul>
            <p>
              Note that <strong>third‑party QR scanner apps</strong> can usually display the EPC text
              but often cannot pass it directly to your banking app.
            </p>
          </section>

          <section aria-labelledby="note-en" className="mt-8">
            <h2 id="note-en">Important note</h2>
            <p>
              Each bank decides itself whether and how it supports GiroCodes. Features can change
              over time. If you are unsure whether your bank supports SEPA‑QR / GiroCode, check:
            </p>
            <ul>
              <li>the help or FAQ pages of your bank,</li>
              <li>the app description in the App Store / Play Store,</li>
              <li>or contact customer support briefly.</li>
            </ul>
            <p>
              Our generator creates GiroCodes strictly according to the <strong>EPC standard</strong>{' '}
              and is technically compatible. Actual support, however, depends on your specific
              banking app.
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
                    href="/en/wissen/scannen"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    How to scan a GiroCode
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

