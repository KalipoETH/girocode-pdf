import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IBAN & BIC in GiroCode – what to enter?',
  description:
    'IBAN and BIC in GiroCode: format, mandatory vs optional and how the Mod‑97 IBAN check works.',
};

export default function WissenIbanBicPageEn() {
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
            <li className="text-slate-400">IBAN &amp; BIC</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Basics · IBAN &amp; BIC
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              IBAN &amp; BIC in GiroCode – what to enter?
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              For a valid GiroCode the IBAN – and historically the BIC – are crucial. Here you&apos;ll
              learn how IBAN and BIC are structured, when you need them and how IBAN validation works.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="what-iban-en">
            <h2 id="what-iban-en">What is an IBAN?</h2>
            <p>
              The <strong>IBAN (International Bank Account Number)</strong> is an internationally
              standardised account number. It ensures that payments in the SEPA area can be assigned
              unambiguously and automatically. In Germany, for example, every IBAN starts with the
              country code <strong>DE</strong>.
            </p>
            <p>A German IBAN follows this scheme:</p>
            <ul>
              <li>
                <strong>DE</strong> – country code
              </li>
              <li>
                <strong>2 check digits</strong>
              </li>
              <li>
                <strong>8‑digit bank code</strong>
              </li>
              <li>
                <strong>10‑digit account number</strong> (with leading zeros if needed)
              </li>
            </ul>
            <p>
              In total a German IBAN therefore has <strong>22 characters</strong>: country code + 2
              check digits + 18 further characters.
            </p>
          </section>

          <section aria-labelledby="what-bic-en" className="mt-8">
            <h2 id="what-bic-en">What is a BIC?</h2>
            <p>
              The <strong>BIC (Business Identifier Code)</strong> is an international identifier for
              banks and payment providers. It is usually 8 or 11 characters long, for example{' '}
              <code>GENODEF1S02</code>. The BIC indicates which bank an IBAN belongs to.
            </p>
            <p>
              In everyday life you will mainly see the BIC in international transfers or on older
              forms. In SEPA payments the requirement to provide a BIC has gradually been removed for
              many domestic payments.
            </p>
          </section>

          <section aria-labelledby="bic-mandatory-en" className="mt-8">
            <h2 id="bic-mandatory-en">Is the BIC mandatory in GiroCode?</h2>
            <p>
              During the early SEPA migration the BIC used to be a mandatory field. Today for domestic
              payments it is often <strong>no longer required</strong>, as banks can determine the
              recipient bank from the IBAN alone.
            </p>
            <p>
              In <strong>GiroCodes</strong> the BIC is therefore <strong>optional</strong> in many
              implementations. Some generators and banking apps accept an empty BIC, others still
              expect one. If you want maximum compatibility, it&apos;s a good idea to provide the BIC
              – but in many cases it is no longer strictly necessary.
            </p>
          </section>

          <section aria-labelledby="iban-check-en" className="mt-8">
            <h2 id="iban-check-en">IBAN validation: how does the Mod‑97 check work?</h2>
            <p>
              To detect input errors, every IBAN contains a <strong>two‑digit check number</strong>.
              This is calculated using the <strong>Mod‑97 algorithm</strong>. Simplified, the process
              works like this:
            </p>
            <ol>
              <li>The first four characters (country code + check digits) are moved to the end.</li>
              <li>Letters are converted to numbers (A=10, B=11, ..., Z=35).</li>
              <li>The resulting large number is divided by <strong>97</strong>.</li>
              <li>If the <strong>remainder is 1</strong>, the IBAN is considered formally valid.</li>
            </ol>
            <p>
              Our GiroCode generator can perform this check and warns you if an IBAN is obviously
              wrong – for example due to swapped digits or missing characters.
            </p>
          </section>

          <section aria-labelledby="common-errors-en" className="mt-8">
            <h2 id="common-errors-en">Common mistakes when entering the IBAN</h2>
            <p>In practice the same types of errors occur again and again, for example:</p>
            <ul>
              <li>
                <strong>Swapped digits</strong> when copying account or bank code parts.
              </li>
              <li>
                <strong>Too few or too many characters</strong>, especially when spaces are copied.
              </li>
              <li>
                <strong>Wrong country code</strong> for foreign accounts.
              </li>
            </ul>
            <p>
              With integrated <strong>IBAN validation</strong> you can ensure that account details are
              formally correct when you create the GiroCode. This avoids failed payments and
              follow‑up questions – especially for invoices and recurring payments.
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
                    href="/en/wissen/girocode"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    What is a GiroCode?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/wissen/epc-standard"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    EPC standard explained
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/wissen/betrag-und-zweck"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Amount &amp; payment reference
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

