import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'EPC standard & SEPA-QR – technical structure explained',
  description:
    'The EPC standard for GiroCodes: structure, fields and rules of the SEPA-QR code explained in a practical way.',
};

export default function WissenEpcStandardPageEn() {
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
            <li className="text-slate-400">EPC standard &amp; SEPA-QR</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Technical · EPC standard &amp; SEPA-QR
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              EPC standard &amp; SEPA-QR – technical structure explained
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Every GiroCode is based on a clearly defined text format specified by the European
              Payments Council (EPC). Here you&apos;ll learn how the EPC payload is structured and
              which rules apply.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400">
          <section aria-labelledby="what-epc-en">
            <h2 id="what-epc-en">What is the EPC standard?</h2>
            <p>
              The <strong>European Payments Council (EPC)</strong> defines technical standards for
              payments in the SEPA area. One of these standards describes how a SEPA bank transfer is
              encoded in a QR code – as a <strong>SEPA-QR or GiroCode</strong>. The goal is for banks
              and payment providers across Europe to understand the same format so that they can
              reliably create transfers from a QR code.
            </p>
            <p>
              The EPC standard specifies both the <strong>order of the fields</strong> and their{' '}
              <strong>maximum lengths</strong> and allowed character sets. This ensures that a
              GiroCode generated in one SEPA country can be read correctly by a banking app in
              another.
            </p>
          </section>

          <section aria-labelledby="structure-en" className="mt-8">
            <h2 id="structure-en">Structure of the EPC payload (line by line)</h2>
            <p>An EPC payload typically consists of several lines of text, for example:</p>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-3 text-xs text-slate-200">
              {`BCD
002
1
SCT
BICBANKXXX
Max Mustermann
DE02120300000000202051
EUR12.34
Invoice 2024-001`}
            </pre>
            <p>The most important lines at a glance:</p>
            <ul>
              <li>
                <strong>Line 1 – Service tag (BCD):</strong> identifies the format as a bank QR code
                in the EPC scheme.
              </li>
              <li>
                <strong>Line 2 – Version:</strong> Versions such as <code>001</code> and{' '}
                <code>002</code> are currently in use. They define which fields are expected.
              </li>
              <li>
                <strong>Line 3 – Encoding:</strong> indicates the character set, e.g. <code>1</code>{' '}
                for UTF‑8.
              </li>
              <li>
                <strong>Line 4 – SEPA scheme:</strong> usually <code>SCT</code> (SEPA Credit Transfer)
                for standard transfers.
              </li>
              <li>
                <strong>Line 5 – BIC:</strong> bank identifier code of the recipient&apos;s bank (in
                many cases optional today).
              </li>
              <li>
                <strong>Line 6 – Name of the recipient:</strong> account holder, e.g. company name or
                person.
              </li>
              <li>
                <strong>Line 7 – IBAN:</strong> full IBAN of the recipient.
              </li>
              <li>
                <strong>Line 8 – Amount:</strong> optional amount in the format <code>EUR12.34</code>.
              </li>
              <li>
                <strong>Line 9 – Payment reference:</strong> free text such as invoice number or
                member ID.
              </li>
            </ul>
          </section>

          <section aria-labelledby="versioning-en" className="mt-8">
            <h2 id="versioning-en">Versioning: 001 vs 002</h2>
            <p>
              In practice you will often see versions <code>001</code> and <code>002</code>. Both
              describe very similar fields but differ in details of the specification and potential
              extensions.
            </p>
            <p>
              For most use cases – especially in the German market – it is sufficient to use a
              version that common banking apps support. Many generators therefore use a widely
              compatible version that works without issues with major banks.
            </p>
          </section>

          <section aria-labelledby="ecc-en" className="mt-8">
            <h2 id="ecc-en">Error correction level M</h2>
            <p>
              When generating a QR code you have to choose an <strong>error correction level</strong>.
              For GiroCodes this is typically <strong>M</strong>. It ensures that the code can still
              be read if parts of it are slightly covered, dirty or blurred.
            </p>
            <p>
              The choice of error correction is important: if it is too low, the code becomes
              vulnerable to read errors; if it is too high, the code becomes unnecessarily large. The
              EPC standard defines a practical compromise here.
            </p>
          </section>

          <section aria-labelledby="lengths-en" className="mt-8">
            <h2 id="lengths-en">Maximum lengths and character set</h2>
            <p>
              Each field has a <strong>maximum length</strong> to ensure compatibility. For example,
              the recipient&apos;s name is limited to a certain number of characters, and the payment
              reference may only use a defined maximum length.
            </p>
            <p>
              The <strong>character set is restricted</strong> as well. Exotic symbols or emojis are
              usually not allowed to avoid processing issues. In practice you should stick to simple
              letters, digits and common punctuation.
            </p>
          </section>

          <section aria-labelledby="other-formats-en" className="mt-8">
            <h2 id="other-formats-en">Other formats: GiroCode, BezahlCode, STUZZA QR</h2>
            <p>Besides <strong>GiroCode</strong> there are other QR formats used in payments:</p>
            <ul>
              <li>
                <strong>BezahlCode:</strong> a format developed in Germany that can represent not only
                transfers but also direct debits or contact information.
              </li>
              <li>
                <strong>STUZZA QR:</strong> a format popular in Austria that also supports SEPA
                payments but with its own specifics.
              </li>
            </ul>
            <p>
              For classic SEPA credit transfers in Germany the{' '}
              <strong>GiroCode / SEPA-QR according to the EPC standard</strong> has become a
              de-facto standard. Many banking apps support it directly, making it particularly
              suitable for invoices and payment requests.
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
                    href="/en/wissen/iban-bic"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    IBAN &amp; BIC in GiroCode
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

