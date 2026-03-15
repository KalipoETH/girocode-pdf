import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode on Invoices – The Complete Guide',
  description:
    'How to add a GiroCode to your invoices: placement, legal requirements, and how to create invoice PDFs with embedded QR code.',
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
              GiroCode on Invoices – The Complete Guide
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Adding a GiroCode to your invoices is one of the simplest ways to speed up your
              cash flow, reduce payment errors and impress clients with a modern, professional
              touch. This guide covers everything from legal requirements to placement, invoicing
              software and step-by-step instructions.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">

          <section aria-labelledby="why-girocode-invoices">
            <h2 id="why-girocode-invoices">Why Use GiroCode on Invoices?</h2>
            <p>
              Every invoice you send without a GiroCode forces your client to manually type
              your IBAN, the exact amount and the payment reference – typically 22 + 10 + 20+
              characters – into their banking app. Each of those characters is an opportunity
              for a typo. According to studies by European banking associations, around{' '}
              <strong>1 in 20 manual IBAN entries contains at least one error</strong>. Most
              IBAN errors are caught by the Mod-97 check digit algorithm, causing the payment
              to fail. But some errors produce a valid (different) IBAN, meaning the money
              goes to the wrong account – a problem that can take weeks to resolve.
            </p>

            <h3>Statistics: How long does an average bank transfer take?</h3>
            <p>
              A standard SEPA Credit Transfer takes <strong>1 business day</strong> to settle
              after initiation. But the bottleneck is rarely the banking system – it is the
              human factor. Research shows that:
            </p>
            <ul>
              <li>Invoices without a payment QR code are paid on average <strong>3–5 days later</strong> than invoices with a QR code</li>
              <li>The average invoice-to-payment cycle in Germany is <strong>14–21 days</strong> for invoices without scan-to-pay</li>
              <li>With GiroCode, clients who scan immediately pay within <strong>1–3 days</strong> of receiving the invoice</li>
              <li>Late payment rates drop by up to <strong>30%</strong> when invoices include a GiroCode, according to a 2022 survey by a German freelancer association</li>
            </ul>

            <h3>Benefits for invoice senders</h3>
            <ul>
              <li><strong>Faster cash flow:</strong> Earlier payments improve liquidity</li>
              <li><strong>Fewer errors:</strong> No mistyped IBANs or wrong amounts</li>
              <li><strong>Less chasing:</strong> Fewer follow-up calls and emails about payment status</li>
              <li><strong>Automatic reconciliation:</strong> Pre-filled payment reference enables automatic invoice matching</li>
              <li><strong>Professional image:</strong> Positions you as a modern, tech-forward business</li>
              <li><strong>No additional cost:</strong> Unlike payment processors, GiroCode incurs no per-transaction fees</li>
            </ul>

            <h3>Benefits for payers (customers)</h3>
            <ul>
              <li><strong>Fast and convenient:</strong> Scan, verify, confirm – done in under 30 seconds</li>
              <li><strong>Error-free:</strong> No manual data entry, no risk of typos</li>
              <li><strong>Works with any bank:</strong> All major German banking apps support GiroCode scanning</li>
              <li><strong>No third-party account needed:</strong> Unlike PayPal, no additional registration required</li>
              <li><strong>Privacy-respecting:</strong> Payment data stays between your bank and the recipient&apos;s bank</li>
            </ul>
          </section>

          <section aria-labelledby="legal-requirements" className="mt-10">
            <h2 id="legal-requirements">Legal Requirements for Invoices (EU/Germany)</h2>
            <p>
              A GiroCode is a payment convenience feature – it does not change or replace the
              legal requirements for invoices. German VAT law (Umsatzsteuergesetz) and the
              EU VAT Directive specify which information must appear on every invoice. Here is
              the complete list:
            </p>
            <ul>
              <li><strong>Full name and address</strong> of both the supplier and the customer</li>
              <li><strong>VAT identification number (USt-IdNr.)</strong> of the supplier, or tax number (Steuernummer) if no VAT ID is available</li>
              <li><strong>Invoice date</strong> (date of issuing the invoice)</li>
              <li><strong>Consecutive invoice number</strong> – must be unique and sequential for each invoice</li>
              <li><strong>Quantity and description</strong> of the goods or services provided</li>
              <li><strong>Date of supply or service</strong> (if different from invoice date)</li>
              <li><strong>Net amount</strong> per line item and total</li>
              <li><strong>Applicable VAT rate(s)</strong></li>
              <li><strong>VAT amount</strong> per rate and total</li>
              <li><strong>Gross amount</strong> (total including VAT)</li>
              <li><strong>Bank details</strong> (IBAN, optionally BIC) for payment</li>
              <li><strong>Payment terms</strong> (payment deadline)</li>
            </ul>
            <p>
              The GiroCode encodes the bank details (IBAN, BIC, amount, reference) in
              machine-readable form as a convenience. The same information should also appear
              in human-readable form on the invoice, so clients who do not use mobile banking
              can still make the transfer manually.
            </p>

            <h3>VAT number requirements</h3>
            <p>
              For invoices exceeding EUR 250 (net), a VAT identification number
              (Umsatzsteuer-Identifikationsnummer) or a tax number is required. For
              invoices up to EUR 250 (simplified invoices, Kleinbetragsrechnungen), the
              VAT rate and amount can be combined in a single line without the need for
              separate listing of net, VAT and gross. GiroCodes on simplified invoices
              work exactly the same way as on full invoices.
            </p>

            <h3>Small business exemption (Kleinunternehmerregelung)</h3>
            <p>
              In Germany, businesses whose annual turnover is below EUR 22,000 (as of 2024)
              can apply for the small business exemption under § 19 UStG. Under this scheme,
              you do not charge VAT, and your invoices must include the following disclaimer:
            </p>
            <p className="rounded-md border border-slate-700 bg-slate-900/40 p-3 text-sm italic text-slate-300">
              &ldquo;Pursuant to § 19 UStG (small business regulation), this invoice does not
              include VAT.&rdquo;
            </p>
            <p>
              GiroCodes work identically for small business invoices. Include the gross amount
              (which equals the net amount since no VAT is charged) in the GiroCode.
            </p>
          </section>

          <section aria-labelledby="placement" className="mt-10">
            <h2 id="placement">Where to Place the GiroCode on an Invoice</h2>

            <h3>Bottom right (recommended)</h3>
            <p>
              The <strong>bottom-right corner</strong> of the invoice is the most universally
              recognised and expected location for a GiroCode. This placement mirrors the
              position of traditional payment slips in Germany and Austria and aligns with
              where payers intuitively look when preparing to make a payment. German banking
              associations recommend this placement in their GiroCode style guides.
            </p>
            <p>
              The GiroCode should be placed <strong>near the bank details section</strong>
              of the invoice, typically below or beside the IBAN, BIC and account holder
              name. This makes it clear that the QR code is a payment convenience feature,
              not a product code or other unrelated symbol.
            </p>

            <h3>Minimum size (2×2 cm recommended)</h3>
            <p>
              For <strong>printed invoices</strong>, the GiroCode should have a minimum
              size of <strong>2 × 2 cm</strong>. This is the absolute minimum for reliable
              scanning by standard smartphone cameras. A size of <strong>3 × 3 cm</strong>
              is recommended for better scan reliability, especially for older phones or in
              lower-light conditions.
            </p>
            <p>
              For <strong>digital invoices (PDF)</strong>, the QR code should be at least
              200 × 200 pixels. A size of 300–400 pixels is more comfortable for scanning
              from a screen and should be the default for PDF invoices.
            </p>

            <h3>Distance from edges and contrast</h3>
            <p>
              The QR code must have a <strong>quiet zone</strong> – a clear white border –
              of at least 4 QR code modules on all four sides. This is roughly 3–4 mm at
              the recommended 2 × 2 cm size. Without the quiet zone, scanning apps may
              struggle to detect the code boundaries.
            </p>
            <p>
              Print the QR code in <strong>black on white background</strong>. Avoid printing
              it over a coloured or patterned background, as this drastically reduces
              scannability. Do not place the code in the binding margin or near punch holes
              on printed documents.
            </p>

            <h3>Digital vs. print</h3>
            <p>
              For digital invoices (sent by email as PDF), the GiroCode can be scanned
              directly from the screen. The recipient holds their phone camera up to the
              screen and scans the code. Ensure the QR code is large enough in the PDF to
              be scannable without zooming – at least 200 pixels in the final PDF rendering.
            </p>
            <p>
              For printed invoices, print quality matters: use at least 300 DPI, preferably
              600 DPI for QR codes. Low-resolution printing creates a blurry, pixelated QR
              code that scanning apps cannot read reliably.
            </p>
          </section>

          <section aria-labelledby="invoicing-programs" className="mt-10">
            <h2 id="invoicing-programs">GiroCode in Different Invoicing Programs</h2>
            <p>
              You have three main options for including GiroCodes in your invoices: dedicated
              accounting software, or our free GiroCode Generator. Here is a detailed comparison:
            </p>

            <h3>sevDesk – Automatic GiroCode Generation</h3>
            <p>
              <strong>sevDesk</strong> is a cloud-based accounting platform for freelancers,
              self-employed professionals and small businesses. It natively generates GiroCodes
              for every invoice:
            </p>
            <ul>
              <li>Automatic GiroCode generation based on your stored bank account</li>
              <li>Correct EPC payload formatting (amount, reference, IBAN)</li>
              <li>Professional invoice templates with GiroCode placement</li>
              <li>Online invoicing, offer and credit note creation</li>
              <li>Bank account sync via PSD2 for automatic payment matching</li>
              <li>DATEV export for tax advisors</li>
              <li>GoBD-compliant document storage</li>
              <li>Pricing from approx. EUR 14/month (annual billing)</li>
            </ul>
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

            <h3>FastBill – GiroCode Integration</h3>
            <p>
              <strong>FastBill</strong> is an intuitive invoicing solution particularly popular
              with freelancers and creative professionals. Key features:
            </p>
            <ul>
              <li>GiroCode automatically embedded in every invoice PDF</li>
              <li>Clean, professional invoice templates</li>
              <li>Invoice, offer and delivery note creation</li>
              <li>Expense tracking and receipt scanning</li>
              <li>Bank account sync for payment monitoring</li>
              <li>Automatic payment reminder emails</li>
              <li>DATEV and Lexware integration</li>
              <li>Pricing from approx. EUR 12/month</li>
            </ul>
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

            <h3>GiroCode Generator (our solution) – Free &amp; Privacy-Friendly</h3>
            <p>
              Our free <strong>GiroCode Generator</strong> is the ideal solution for beginners,
              occasional users and anyone who wants to generate GiroCodes without a subscription:
            </p>
            <ul>
              <li>Completely free, no registration required</li>
              <li>All processing happens locally in your browser – no data sent to servers</li>
              <li>Generates GiroCode QR code as PNG for embedding in your own invoice template</li>
              <li>Optional invoice PDF generation with embedded GiroCode</li>
              <li>Supports all EPC fields: IBAN, BIC, amount, payment reference</li>
              <li>Ideal for freelancers who create invoices manually or in Word/Excel</li>
            </ul>
          </section>

          <section aria-labelledby="step-by-step" className="mt-10">
            <h2 id="step-by-step">Step-by-Step: Create Invoice with GiroCode</h2>
            <p>
              Here is how to create a complete invoice with an embedded GiroCode using our
              free tool:
            </p>
            <ol>
              <li>
                <strong>Enter payment details:</strong> Open our{' '}
                <Link href="/en" className="text-sky-400 underline hover:text-sky-300">
                  GiroCode Generator
                </Link>{' '}
                and fill in your recipient name, IBAN, optionally BIC, invoice amount (e.g.
                EUR 1,250.00) and payment reference (e.g. &ldquo;Invoice 2024-0042&rdquo;).
              </li>
              <li>
                <strong>Generate GiroCode:</strong> Click &ldquo;Generate GiroCode&rdquo;.
                The tool creates an EPC-compliant QR code instantly in your browser, with no
                data sent to any server.
              </li>
              <li>
                <strong>Fill in invoice details:</strong> In the invoice tab, enter your
                business name, address, client details, line items, VAT and other required
                fields.
              </li>
              <li>
                <strong>Preview the invoice:</strong> The tool shows a live preview of the
                invoice PDF with the GiroCode embedded in the bottom-right corner.
              </li>
              <li>
                <strong>Download PDF:</strong> Click &ldquo;Download Invoice PDF&rdquo; to
                save the completed invoice with embedded GiroCode to your device.
              </li>
              <li>
                <strong>Send to customer:</strong> Email the PDF to your customer, or print
                and mail it. The GiroCode is embedded in the PDF and ready to scan.
              </li>
            </ol>
            <p>
              The entire process takes less than 3 minutes. All data is processed locally
              in your browser – your IBAN and invoice details never leave your device.
            </p>
          </section>

          <section aria-labelledby="faq-invoices" className="mt-10">
            <h2 id="faq-invoices">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Does adding a GiroCode to an invoice have any legal implications?
                </h3>
                <p className="text-sm text-slate-300">
                  No. A GiroCode is a payment convenience feature with no legal implications.
                  It does not replace any legally required invoice element. The same payment
                  details (IBAN, amount, reference) that are encoded in the QR code must also
                  appear in human-readable form on the invoice.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Can I add a GiroCode to Word or Excel invoices?
                </h3>
                <p className="text-sm text-slate-300">
                  Yes. Generate the GiroCode as a PNG using our free tool, then insert the
                  image into your Word or Excel invoice template. Position it in the bottom-right
                  area near your bank details. Make sure the image is at least 2 × 2 cm when
                  printed.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  What happens if my client&apos;s banking app cannot scan GiroCodes?
                </h3>
                <p className="text-sm text-slate-300">
                  All major German banking apps support GiroCode scanning. For clients using
                  an older or unsupported app, the payment details are still clearly visible
                  on the invoice in human-readable form, so they can make the transfer manually.
                  The GiroCode is an additional convenience, not a replacement for standard
                  payment details.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Should I include both IBAN text and GiroCode on the invoice?
                </h3>
                <p className="text-sm text-slate-300">
                  Yes, always. Include your IBAN, BIC, bank name and payment reference in
                  human-readable text on the invoice, and also include the GiroCode QR code.
                  The human-readable details are legally required and serve clients who prefer
                  manual entry. The GiroCode is the scan-to-pay convenience option.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Can I create one GiroCode for multiple invoices?
                </h3>
                <p className="text-sm text-slate-300">
                  Technically yes, but it is not recommended. If you create a single GiroCode
                  for multiple invoices (with no specific reference), incoming payments cannot
                  be automatically matched to individual invoices. Each invoice should have its
                  own GiroCode with the specific invoice number encoded in the payment reference.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Is a GiroCode on invoices required by law?
                </h3>
                <p className="text-sm text-slate-300">
                  No. Including a GiroCode on invoices is entirely voluntary. There is no legal
                  obligation to include one. However, the business benefits (faster payments,
                  fewer errors) make it a strongly recommended practice.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Does a GiroCode work for international (non-SEPA) payments?
                </h3>
                <p className="text-sm text-slate-300">
                  No. GiroCodes (EPC SEPA QR codes) are specifically designed for SEPA Credit
                  Transfers within the 36-country SEPA zone. For international payments to
                  non-SEPA countries, different payment methods and formats are used.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  What is the correct size for a GiroCode on a printed invoice?
                </h3>
                <p className="text-sm text-slate-300">
                  The minimum recommended size is 2 × 2 cm for print. Our recommendation is
                  3 × 3 cm for reliable scanning by all camera types. Print at 300 DPI or
                  higher. Include a white quiet zone (border) of at least 4 mm on all sides.
                </p>
              </div>
            </div>
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
                    href="/en/wissen/betrag-und-zweck"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Amount &amp; Payment Reference in GiroCode
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/wissen/banking-apps"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Banking Apps Supporting GiroCode
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/wissen/scannen"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    How to Scan a GiroCode
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
