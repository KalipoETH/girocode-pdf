import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode on invoices – how to do it right',
  description:
    'Integrate GiroCode on invoices: placement, mandatory details and how to create an invoice PDF with SEPA-QR code using our tool.',
};

export default function WissenRechnungPageEn() {
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
            <li className="text-slate-400">GiroCode on invoices</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Practice · GiroCode on invoices
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode on invoices – how to do it right
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              A GiroCode on your invoice makes paying much more convenient for your customers. At the
              same time all legal requirements for invoices remain fulfilled – if you follow a few
              simple rules.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="why-girocode-en">
            <h2 id="why-girocode-en">Why put a GiroCode on invoices?</h2>
            <p>
              A <strong>GiroCode (SEPA-QR)</strong> printed on an invoice allows your customers to
              complete the transfer with just a few taps. Instead of typing IBAN, amount and payment
              reference, they simply scan the QR code with their banking app.
            </p>
            <p>The benefits are clear:</p>
            <ul>
              <li>
                <strong>Fewer typing errors</strong> thanks to automatic transfer of all payment
                details.
              </li>
              <li>
                <strong>Faster payments</strong>, especially for invoices with many line items.
              </li>
              <li>
                <strong>More professional appearance</strong> and a modern impression for your
                customers.
              </li>
            </ul>
          </section>

          <section aria-labelledby="placement-en" className="mt-8">
            <h2 id="placement-en">Where should the GiroCode be placed?</h2>
            <p>
              In practice a placement <strong>in the lower right area</strong> of the invoice has
              proven useful – near the classic payment information. Make sure that the code:
            </p>
            <ul>
              <li>
                is <strong>clearly visible</strong> and not overlapped by other elements,
              </li>
              <li>
                has enough <strong>white space (quiet zone)</strong> around it,
              </li>
              <li>
                does not cross fold marks or punching areas if the invoice is printed.
              </li>
            </ul>
          </section>

          <section aria-labelledby="size-en" className="mt-8">
            <h2 id="size-en">Minimum size of the QR code</h2>
            <p>
              To ensure that banking apps can read the QR code reliably, it should have a certain
              minimum size. In practice an edge length of about <strong>25–35 mm</strong> works well.
              On digital PDFs the code can be displayed smaller, but zooming in makes it readable
              again.
            </p>
            <p>
              A <strong>sufficient resolution</strong> is particularly important if the invoice will
              be printed. Our generator therefore embeds a high‑quality QR code directly into the
              invoice PDF.
            </p>
          </section>

          <section aria-labelledby="mandatory-en" className="mt-8">
            <h2 id="mandatory-en">Mandatory details on an invoice</h2>
            <p>
              Regardless of the GiroCode, invoices must contain certain mandatory information (e.g.
              according to national VAT law), such as:
            </p>
            <ul>
              <li>full name and address of supplier and customer</li>
              <li>tax number or VAT ID (where applicable)</li>
              <li>invoice date</li>
              <li>consecutive invoice number</li>
              <li>description of goods or services</li>
              <li>date of supply or service</li>
              <li>net amount, tax rate and tax amount</li>
            </ul>
            <p>
              The GiroCode <strong>does not replace</strong> these details – it is simply a
              <strong>convenient payment option</strong> on top.
            </p>
          </section>

          <section aria-labelledby="small-business-en" className="mt-8">
            <h2 id="small-business-en">Small‑business regulation</h2>
            <p>
              If you are subject to a <strong>small‑business regulation</strong> in your country and
              do not charge VAT, your invoice must contain an appropriate notice, for example:
            </p>
            <p>
              <em>
                “No VAT is charged or shown in accordance with the applicable small‑business
                regulation.”
              </em>
            </p>
            <p>
              This note can be placed in the text of the invoice or in the footer and is required
              regardless of the GiroCode.
            </p>
          </section>

          <section aria-labelledby="pdf-tool-en" className="mt-8">
            <h2 id="pdf-tool-en">How our PDF tool creates the invoice</h2>
            <p>
              Our <strong>GiroCode Generator</strong> not only creates the QR code but also lets you
              generate an <strong>invoice PDF with an embedded GiroCode</strong>. You provide:
            </p>
            <ul>
              <li>sender and invoice details,</li>
              <li>the target IBAN and optional BIC,</li>
              <li>invoice amount and payment reference (e.g. invoice number).</li>
            </ul>
            <p>
              The app creates a finished invoice PDF directly in your browser and places the
              GiroCode at the appropriate position. All data is processed <strong>locally only</strong>{' '}
              and is never sent to a server.
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
                    href="/en/wissen/betrag-und-zweck"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Amount &amp; payment reference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/wissen/banking-apps"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Banking apps with GiroCode
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

