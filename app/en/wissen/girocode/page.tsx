import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is a GiroCode? – Explanation & guide',
  description:
    'GiroCode explained: What is a SEPA-QR / EPC code, how does it work and how can you create one for free?',
};

export default function WissenGirocodePageEn() {
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
            <li className="text-slate-400">What is a GiroCode?</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Basics · GiroCode / SEPA-QR
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              What is a GiroCode?
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              The GiroCode – often also called SEPA-QR or EPC QR code – is a standardised QR code for
              bank transfers in the SEPA area. It saves typing, reduces errors and makes payments much
              more convenient for both payers and recipients.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">
          <section aria-labelledby="definition-en">
            <h2 id="definition-en">Definition: GiroCode, SEPA-QR, EPC-QR</h2>
            <p>
              A GiroCode is a QR code that encodes a SEPA bank transfer in a standardised text format.
              Technically it is based on the specifications of the{' '}
              <strong>European Payments Council (EPC)</strong> and is therefore often referred to as{' '}
              <strong>SEPA-QR</strong> or <strong>EPC-QR</strong>. Banks and payment providers can
              interpret this format in a uniform way and use it to create a ready-made transfer form.
            </p>
          </section>

          <section aria-labelledby="function-en" className="mt-8">
            <h2 id="function-en">How does a GiroCode work?</h2>
            <p>
              The process is deliberately simple: you place the GiroCode for example on an invoice or
              payment slip. The paying person opens their <strong>banking app</strong>, starts the
              integrated QR scanner and points the camera at the code. The app reads the EPC text and
              automatically fills in a transfer.
            </p>
            <p>
              In most cases <strong>recipient, IBAN, BIC, amount and payment reference</strong> are
              filled in directly in the transfer form. The payer checks the details, adds any missing
              fields (e.g. the amount) and confirms the payment as usual with TAN or biometric
              approval.
            </p>
          </section>

          <section aria-labelledby="data-en" className="mt-8">
            <h2 id="data-en">Which data does a GiroCode contain?</h2>
            <p>
              A GiroCode contains structured text organised in several lines. Typical fields include:
            </p>
            <ul>
              <li>
                <strong>Name of the recipient</strong> (account holder)
              </li>
              <li>
                <strong>IBAN</strong> of the recipient
              </li>
              <li>
                <strong>BIC</strong> (partly optional, depending on bank and country)
              </li>
              <li>
                <strong>Amount</strong> in euros with two decimal places (e.g. EUR12.34)
              </li>
              <li>
                <strong>Payment reference</strong> – often an invoice number or member ID
              </li>
            </ul>
            <p>
              Not every field has to be filled in: for example, you can leave the amount empty so the
              payer can enter it. What matters is that the mandatory structure of the EPC standard is
              respected.
            </p>
          </section>

          <section aria-labelledby="benefits-en" className="mt-8">
            <h2 id="benefits-en">Benefits of a GiroCode</h2>
            <p>GiroCodes offer several advantages:</p>
            <ul>
              <li>
                <strong>Fewer errors:</strong> IBAN and amount no longer have to be typed manually –
                typos and digit swaps become much rarer.
              </li>
              <li>
                <strong>Speed:</strong> A transfer can be prepared within seconds and confirmed
                immediately.
              </li>
              <li>
                <strong>Compatibility:</strong> Many <strong>banking apps</strong> in Europe already
                support SEPA-QR / GiroCode today.
              </li>
              <li>
                <strong>Professional appearance:</strong> Invoices with GiroCode look more modern and
                customer-friendly.
              </li>
            </ul>
          </section>

          <section aria-labelledby="who-en" className="mt-8">
            <h2 id="who-en">Who can use GiroCodes?</h2>
            <p>
              In principle <strong>anyone with a SEPA account</strong> can use GiroCodes – both as
              payer and as issuer of invoices. It is particularly useful for:
            </p>
            <ul>
              <li>
                <strong>Freelancers &amp; self‑employed</strong> who want to make it easier for
                clients to pay.
              </li>
              <li>
                <strong>Clubs and associations</strong>, for membership fees or donations.
              </li>
              <li>
                <strong>Private individuals</strong>, for group orders, gifts or shared expenses.
              </li>
            </ul>
          </section>

          <section aria-labelledby="generator-link-en" className="mt-8">
            <h2 id="generator-link-en">Create a GiroCode online for free</h2>
            <p>
              With our <strong>GiroCode Generator</strong> you can create a SEPA-QR / EPC code in just
              a few steps – entirely in your browser, without sending any data to our servers.
              Optionally you can also create an{' '}
              <strong>invoice PDF with an embedded QR code</strong>.
            </p>
          </section>

          <section aria-labelledby="faq-en" className="mt-10">
            <h2 id="faq-en">Frequently asked questions about GiroCode</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Is a GiroCode only usable in Germany?
                </h3>
                <p className="text-sm text-slate-300">
                  GiroCode is based on the SEPA standard and is therefore in principle usable
                  throughout the SEPA area. Whether a specific banking app supports the code depends on
                  the bank. Many institutions in Germany, Austria and other SEPA countries already
                  provide a QR scanner.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Can I create a GiroCode without an amount?
                </h3>
                <p className="text-sm text-slate-300">
                  Yes. If you do not specify an amount, the amount field in the transfer form remains
                  empty and the payer enters the desired amount. This is useful e.g. for donations or
                  open contributions.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Which data are mandatory in a GiroCode?
                </h3>
                <p className="text-sm text-slate-300">
                  Usually the name of the recipient and the IBAN are mandatory. Other fields such as
                  BIC, amount or payment reference may be optional depending on the use case. For
                  reliable allocation, however, a meaningful payment reference is strongly
                  recommended.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  What does it cost to use GiroCode?
                </h3>
                <p className="text-sm text-slate-300">
                  Using a GiroCode is usually free of charge. Only your bank&apos;s regular SEPA
                  transfer fees may apply, if any. Our generator itself can be used free of charge.
                </p>
              </div>
            </div>
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
                    href="/en/wissen/epc-standard"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    EPC standard explained
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

