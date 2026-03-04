import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Amount & payment reference in GiroCode – how to enter them correctly',
  description:
    'How to enter amount and payment reference in GiroCode correctly – format, limits and practical tips for invoices and payments.',
};

export default function WissenBetragUndZweckPageEn() {
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
            <li className="text-slate-400">Amount &amp; payment reference</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Practice · Amount &amp; payment reference
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Amount &amp; payment reference in GiroCode – how to enter them correctly
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              The way you handle amount and payment reference in a GiroCode determines how easily
              payments can be matched later. Here you&apos;ll learn about the options and limits.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="amount-format-en">
            <h2 id="amount-format-en">Amount: format and options</h2>
            <p>
              In a GiroCode the amount is usually specified in the format <strong>EUR12.34</strong> –
              the currency code <code>EUR</code> followed by an amount with two decimal places, for
              example <code>EUR19.99</code>.
            </p>
            <p>
              Important: the amount is <strong>optional</strong>. You can decide whether to set a
              fixed amount or leave the field empty. Both variants have their use cases:
            </p>
            <ul>
              <li>
                <strong>With amount:</strong> ideal for invoices with a fixed total or standard fees
                (e.g. memberships).
              </li>
              <li>
                <strong>Without amount:</strong> useful for donations or flexible payments where the
                payer should choose the amount.
              </li>
            </ul>
          </section>

          <section aria-labelledby="reference-length-en" className="mt-8">
            <h2 id="reference-length-en">Payment reference: maximum length and content</h2>
            <p>
              The payment reference in a GiroCode is limited to around <strong>140 characters</strong>.
              Within this limit you should include all information needed to match the payment.
            </p>
            <p>Typical elements are for example:</p>
            <ul>
              <li>Invoice number (e.g. INV‑2024‑015)</li>
              <li>Customer number or member ID</li>
              <li>Short description of the service</li>
            </ul>
            <p>
              Try to keep the reference <strong>clear and unambiguous</strong>. Very long internal
              notes should be avoided so you don&apos;t hit the character limit.
            </p>
          </section>

          <section aria-labelledby="invoice-number-en" className="mt-8">
            <h2 id="invoice-number-en">Invoice number in the payment reference</h2>
            <p>
              For <strong>freelancers and businesses</strong> the invoice number is the most important
              reference. It should definitely appear in the payment reference, for example:
            </p>
            <p>
              <code>Invoice INV-2024-015, Customer 12345</code>
            </p>
            <p>
              This lets you match the payment quickly in your accounting – even if the payer adds
              additional free text or changes minor details.
            </p>
          </section>

          <section aria-labelledby="empty-amount-en" className="mt-8">
            <h2 id="empty-amount-en">What happens if the amount is left empty?</h2>
            <p>
              If you leave the amount field empty, the banking app will only fill in{' '}
              <strong>recipient, IBAN (and optionally BIC) plus payment reference</strong> when the
              code is scanned. The amount field stays blank.
            </p>
            <p>
              The payer then enters the amount manually. This is useful when you <strong>don&apos;t
              want to define a fixed amount</strong> – for example for donations, collections or
              variable settlements.
            </p>
          </section>

          <section aria-labelledby="recommendations-en" className="mt-8">
            <h2 id="recommendations-en">Recommendations for self‑employed users</h2>
            <p>The following best practices work well for freelancers and small businesses:</p>
            <ul>
              <li>
                Use a <strong>fixed amount</strong> when sending an invoice with a defined total.
              </li>
              <li>
                Always include <strong>invoice number and, if needed, customer ID</strong> in the
                payment reference.
              </li>
              <li>
                Keep the reference <strong>short and precise</strong> – internal details belong in
                your own system, not in the GiroCode.
              </li>
            </ul>
            <p>
              With our generator you can manage amount and payment reference easily and create a
              matching <strong>invoice PDF with embedded GiroCode</strong>.
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
                    href="/en/wissen/rechnung"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    GiroCode on invoices
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
                    href="/en/wissen/girocode"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    What is a GiroCode?
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

