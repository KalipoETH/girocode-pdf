import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Amount & Payment Reference in GiroCode – Complete Guide',
  description:
    'How to correctly enter amount and payment reference in a GiroCode: format, limits, best practices and examples.',
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
            <li className="text-slate-400">Amount &amp; Payment Reference</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Practice · Amount &amp; Payment Reference
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Amount &amp; Payment Reference in GiroCode – Complete Guide
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Two of the most important fields in a GiroCode are the transfer amount and the
              payment reference. Getting these right is essential for error-free payment processing
              and reliable invoice matching. This guide explains everything from formatting rules
              to industry-specific best practices.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">

          <section aria-labelledby="amount-in-girocode">
            <h2 id="amount-in-girocode">The Amount in GiroCode</h2>
            <p>
              The amount field in a GiroCode encodes the transfer amount in a standardised format
              defined by the EPC standard. When a banking app scans the code, the amount is
              automatically pre-filled in the transfer form – saving the payer from typing it
              manually and eliminating the most common cause of wrong payment amounts.
            </p>

            <h3>Format: EUR12.34 (period as decimal separator)</h3>
            <p>
              The EPC standard requires amounts to be formatted as the ISO 4217 currency code
              followed immediately by the decimal amount, using a <strong>period (.) as the
              decimal separator</strong> – not a comma. This is an important distinction for
              German-speaking users, where the comma is the standard decimal separator in everyday
              use. In a GiroCode, the format is always:
            </p>
            <pre className="rounded-md bg-slate-900/70 p-3 text-xs text-slate-200">
{`EUR12.34     ✓ Correct
EUR1250.00   ✓ Correct
EUR0.50      ✓ Correct
EUR1.250,00  ✗ Wrong (comma as decimal + period as thousands separator)
EUR1250      ✗ Wrong (no decimal places)
EUR12,34     ✗ Wrong (comma as decimal separator)`}
            </pre>
            <p>
              The amount must always have <strong>exactly two decimal places</strong>. Amounts
              without decimal places (e.g. <code>EUR100</code>) or with only one decimal place
              (e.g. <code>EUR12.5</code>) are technically invalid and may be rejected by banking
              apps. Always use <code>EUR12.50</code> instead of <code>EUR12.5</code>.
            </p>
            <p>
              The currency is always expressed as the three-letter ISO 4217 currency code
              immediately before the amount, with no space. For Euro amounts (the most common
              case in SEPA payments), this is always <code>EUR</code>. Some SEPA countries also
              use non-Euro currencies (e.g. Poland uses PLN, Czech Republic uses CZK), but the
              vast majority of GiroCodes use EUR.
            </p>

            <h3>Is amount required? (No, optional)</h3>
            <p>
              The amount field is <strong>optional</strong> in the EPC standard. If the amount
              is not specified, line 8 of the EPC payload is simply left empty (a blank line),
              and the banking app will show an empty amount field in the pre-filled transfer form.
              The payer can then enter any amount they wish before confirming.
            </p>

            <h3>What happens without an amount?</h3>
            <p>
              When a GiroCode without an amount is scanned, all other fields (recipient name, IBAN,
              payment reference) are pre-filled as usual, but the amount field is left blank.
              Depending on the banking app, the app may:
            </p>
            <ul>
              <li>Show an empty amount field that the payer must fill in before submitting</li>
              <li>Display a notice that the amount was not specified in the QR code</li>
              <li>Refuse to pre-submit the form until the amount is entered</li>
            </ul>
            <p>
              This is completely valid and often desirable for use cases like donations or
              open-ended contributions.
            </p>

            <h3>Maximum amount</h3>
            <p>
              The EPC standard specifies a maximum amount of <strong>EUR 999,999,999.99</strong>
              (roughly 1 billion euros). In practice, SEPA standard credit transfers have a
              default limit that varies by bank (typically EUR 999,999.99 per transaction for
              retail banking), but the QR code format itself supports amounts up to the
              theoretical maximum. SEPA Instant Credit Transfers have a maximum of EUR 100,000
              per transaction (as of 2024), though this limit is being raised progressively by the
              EU.
            </p>

            <h3>Rounding rules</h3>
            <p>
              Amounts in GiroCodes must be exact – they should not require rounding before
              encoding. If your invoice total is EUR 1,250.50, encode exactly{' '}
              <code>EUR1250.50</code>. Do not round to the nearest whole number unless your
              invoice genuinely shows a whole number amount. Encoding a different amount than the
              invoice total creates a discrepancy that will confuse both payer and recipient.
            </p>
          </section>

          <section aria-labelledby="pros-cons-amount" className="mt-10">
            <h2 id="pros-cons-amount">Pros and Cons of Omitting the Amount</h2>
            <p>
              Whether to include a fixed amount or leave it open depends on your use case. Here
              is a structured comparison:
            </p>

            <h3>When omitting the amount is useful</h3>
            <ul>
              <li>
                <strong>Donations and charitable giving:</strong> Donors typically want to choose
                their own contribution amount. A GiroCode without a fixed amount lets each donor
                decide freely without needing a separate code for each donation level.
              </li>
              <li>
                <strong>Variable-price offers:</strong> If you sell products or services where
                the final price varies (e.g. custom orders, bespoke services, tip-based
                payments), omitting the amount lets the payer enter the agreed amount.
              </li>
              <li>
                <strong>Membership with tiered fees:</strong> Associations that offer different
                membership tiers (standard, supporting, family) can use a single GiroCode without
                amount, letting each member enter their applicable fee.
              </li>
              <li>
                <strong>Payment requests where amount is agreed verbally:</strong> If you and your
                client have agreed on a price in a conversation and you just need to share payment
                details quickly, a GiroCode without amount can be convenient.
              </li>
            </ul>

            <h3>When including the amount is better</h3>
            <ul>
              <li>
                <strong>Standard invoices:</strong> For regular business invoices with a fixed
                total, always include the exact amount. This prevents the payer from accidentally
                entering the wrong amount.
              </li>
              <li>
                <strong>Recurring fixed fees:</strong> Annual membership fees, monthly retainer
                fees, subscription renewals – any predictable fixed amount should be pre-filled
                to reduce friction and errors.
              </li>
              <li>
                <strong>Automated payment matching:</strong> When the amount is pre-filled, your
                accounting software can more reliably match incoming payments to outstanding
                invoices (amount + payment reference = unambiguous match).
              </li>
              <li>
                <strong>Preventing overpayment or underpayment:</strong> Particularly important
                for large invoice amounts where even small discrepancies require manual
                reconciliation.
              </li>
            </ul>

            <h3>Practical examples</h3>
            <ul>
              <li>Charity donation box → GiroCode without amount (donor chooses)</li>
              <li>Freelance invoice for EUR 2,450.00 → GiroCode with EUR2450.00</li>
              <li>Club membership, annual fee EUR 120 → GiroCode with EUR120.00</li>
              <li>Restaurant table QR code for tipping → GiroCode without amount</li>
              <li>Shared apartment utility cost split → GiroCode without amount (each person pays their share)</li>
            </ul>
          </section>

          <section aria-labelledby="payment-reference" className="mt-10">
            <h2 id="payment-reference">The Payment Reference in GiroCode</h2>
            <p>
              The payment reference (Verwendungszweck in German) is the text that appears on
              both the sender&apos;s and recipient&apos;s bank statement. It is the primary
              mechanism by which invoice issuers identify which invoice an incoming payment is
              for. Getting the payment reference right is crucial for efficient accounting.
            </p>

            <h3>Maximum length: 140 characters</h3>
            <p>
              The EPC standard allows a maximum of <strong>140 characters</strong> (in UTF-8
              encoding) for the payment reference. This is enough for a comprehensive reference
              text. However, banking apps often display only the first 35 or 70 characters on
              the transfer confirmation screen, so the most important information should come
              first.
            </p>
            <p>
              Note that individual banks may impose stricter limits on their end. Some German
              banks truncate payment references to 140 characters during processing. Always
              design your references to be as concise as possible while still being uniquely
              identifiable.
            </p>

            <h3>Allowed characters (UTF-8)</h3>
            <p>
              The EPC standard permits UTF-8 encoded text in the payment reference, which
              supports standard ASCII characters (letters, digits, spaces, common punctuation)
              as well as European special characters (German umlauts ä/ö/ü/ß, French accents
              é/à/ç, etc.). However, in practice, sticking to plain ASCII characters (A-Z, a-z,
              0-9, spaces, hyphens, slashes, dots) ensures maximum compatibility across all
              banking systems and minimises the risk of character encoding issues.
            </p>
            <p>
              Characters to <strong>avoid</strong> in payment references:
            </p>
            <ul>
              <li>Control characters (tabs, newlines within the reference)</li>
              <li>Emojis and non-Latin scripts</li>
              <li>Quotation marks (may cause parsing issues in some systems)</li>
              <li>Ampersands (&amp;) and angle brackets (&lt;&gt;) – may interfere with XML processing</li>
            </ul>

            <h3>What belongs in the payment reference?</h3>
            <p>
              The payment reference should contain enough information to uniquely identify the
              payment purpose. For invoices, the essential elements are:
            </p>
            <ul>
              <li><strong>Invoice number:</strong> The unique identifier for the invoice</li>
              <li><strong>Customer/client number:</strong> If applicable, helps with multi-client accounting</li>
              <li><strong>Date or period:</strong> Invoice date or service period</li>
              <li><strong>Project name or description:</strong> Brief description of what is being paid for</li>
            </ul>
            <p>
              A well-structured payment reference might look like this:
            </p>
            <pre className="rounded-md bg-slate-900/70 p-3 text-xs text-slate-200">
{`Invoice 2024-0042 / Client 1234 / Web Development March 2024`}
            </pre>
          </section>

          <section aria-labelledby="best-practices-reference" className="mt-10">
            <h2 id="best-practices-reference">Best Practices for Payment References</h2>
            <p>
              Following consistent best practices for payment references dramatically reduces
              the time spent on payment reconciliation and prevents disputes over incorrect
              payments.
            </p>

            <h3>Always include the invoice number</h3>
            <p>
              The invoice number is the most important element of any payment reference for
              business invoices. It provides an unambiguous link between the incoming payment
              and the corresponding invoice. Use a consistent numbering format (e.g.{' '}
              <code>2024-0042</code> or <code>INV-2024-042</code>) that sorts chronologically
              and is easy to communicate verbally if needed.
            </p>

            <h3>Include the date or service period</h3>
            <p>
              Adding the invoice date or service period helps with queries like &ldquo;which
              payment is for which month?&rdquo;. This is particularly useful for recurring
              services (monthly retainers, subscription billing) where invoice numbers alone
              may not make the time period immediately clear.
            </p>
            <p>Example: <code>Invoice 2024-0042 / March 2024</code></p>

            <h3>Include the project name</h3>
            <p>
              For project-based billing, adding a brief project name or code helps both you
              and your client identify the context of the payment quickly. Keep it short –
              a project code like <code>PROJ-WEBSHOP</code> is more practical than a full
              description.
            </p>

            <h3>For associations: membership fee + member number</h3>
            <p>
              Associations should include both the membership year (or period) and the
              member number in the payment reference. This allows the accounting team to
              reconcile payments automatically without manual lookup.
            </p>
            <p>Example: <code>Membership fee 2024 / Member 4711</code></p>

            <h3>For private individuals: short description</h3>
            <p>
              For informal payments between private individuals, a brief, clear description
              is sufficient. Avoid overly long explanations – focus on what the payment is for.
            </p>
            <p>Examples: <code>Birthday dinner share</code> / <code>Rent April 2024</code> /
              <code>Concert tickets refund</code></p>
          </section>

          <section aria-labelledby="common-mistakes-reference" className="mt-10">
            <h2 id="common-mistakes-reference">Common Mistakes with Payment References</h2>

            <h3>Text too long (gets cut off)</h3>
            <p>
              Exceeding the 140-character limit means the reference will be truncated. If the
              invoice number appears at the end of a long description, it may be cut off entirely,
              making reconciliation impossible. Always put the most critical information
              (invoice number) at the beginning, not the end.
            </p>

            <h3>Special characters causing issues</h3>
            <p>
              While UTF-8 special characters are technically allowed, some bank systems still
              have issues with non-ASCII characters. Umlauts (ä, ö, ü) can sometimes appear
              garbled on bank statements, especially when the transfer crosses to a system with
              different encoding expectations. To be safe, replace umlauts with their ASCII
              equivalents (ae, oe, ue) in payment references.
            </p>

            <h3>Missing invoice number</h3>
            <p>
              Without the invoice number in the payment reference, matching incoming payments to
              invoices requires manual comparison of amounts and dates – a time-consuming and
              error-prone process. Never send an invoice without a payment reference that includes
              the invoice number.
            </p>

            <h3>Unclear descriptions</h3>
            <p>
              Vague references like &ldquo;Thank you&rdquo;, &ldquo;Payment&rdquo; or
              &ldquo;Services&rdquo; are useless for accounting purposes. If you have multiple
              clients paying for similar services, such descriptions provide no way to distinguish
              between payments. Always be specific and include unique identifiers.
            </p>

            <h3>Different reference in QR code and invoice text</h3>
            <p>
              Ensure the payment reference encoded in the GiroCode exactly matches the payment
              reference printed on the invoice in human-readable form. Discrepancies create
              confusion – the payer may change the reference in the banking app to match what
              they read on the invoice, breaking automated reconciliation.
            </p>
          </section>

          <section aria-labelledby="references-by-industry" className="mt-10">
            <h2 id="references-by-industry">Payment References for Different Industries</h2>

            <h3>Freelancers &amp; agencies</h3>
            <p>
              Freelancers and agencies typically have multiple clients and multiple projects
              running simultaneously. A well-structured reference format like{' '}
              <code>[Invoice no.] / [Client name/code] / [Project]</code> makes reconciliation
              efficient even without dedicated accounting software.
            </p>
            <p>Example: <code>INV-2024-0042 / CLIENT-ACME / Logo Design</code></p>

            <h3>Tradespeople</h3>
            <p>
              Tradespeople (electricians, plumbers, carpenters) often have a mix of job-site
              references, order numbers and customer names. Including the job number and
              customer name is most practical.
            </p>
            <p>Example: <code>Job 4711 / Mueller / Kitchen installation</code></p>

            <h3>Associations</h3>
            <p>
              For associations, include the membership period and member number or name to
              allow batch reconciliation of membership fee payments.
            </p>
            <p>Example: <code>Membership 2024 / Member 1234 / Smith</code></p>

            <h3>Online shops</h3>
            <p>
              Online shops using manual bank transfer as a payment method (common for B2B in
              Germany) should include the order number as the primary identifier.
            </p>
            <p>Example: <code>Order 2024-18450 / shop.example.com</code></p>

            <h3>Service providers</h3>
            <p>
              Service providers with recurring billing (consultants, coaches, trainers) benefit
              from including the service period to distinguish between monthly invoices.
            </p>
            <p>Example: <code>Coaching March 2024 / INV-2024-03 / Johnson</code></p>
          </section>

          <section aria-labelledby="professional-invoicing" className="mt-10">
            <h2 id="professional-invoicing">Professional Invoicing with Correct Payment References</h2>
            <p>
              Manually crafting the right payment reference for every invoice is tedious and
              error-prone. Professional invoicing software automates this: it generates a
              consistent, correctly formatted payment reference for every invoice and embeds it
              in both the human-readable invoice text and the GiroCode QR code.
            </p>

            <h3>FastBill – Automatic Payment Reference Generation</h3>
            <p>
              <strong>FastBill</strong> automatically generates a consistent payment reference
              for every invoice based on your settings – typically using the invoice number,
              optionally combined with the client name or project code. The same reference
              appears in the invoice text and is encoded in the GiroCode. When your client
              pays by scanning the code, FastBill can match the incoming payment automatically
              based on the payment reference, keeping your outstanding invoices list up to date
              with zero manual effort.
            </p>
            <p>
              FastBill&apos;s payment tracking dashboard shows you at a glance which invoices
              have been paid (with the correct reference), which are outstanding and which are
              overdue. Automatic payment reminders can be configured to include a fresh GiroCode,
              making it easy for late payers to complete the payment.
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

            <h3>sevDesk – Automatic Invoice Numbering</h3>
            <p>
              <strong>sevDesk</strong> uses sequential, GoBD-compliant invoice numbering that
              automatically generates the correct payment reference for each invoice. The invoice
              number, client reference and service period are automatically included in the payment
              reference text and encoded in the GiroCode.
            </p>
            <p>
              When you connect your bank account to sevDesk via open banking, incoming payments
              are automatically matched to outstanding invoices based on the payment reference.
              This eliminates the need for manual reconciliation – your bookkeeping stays up to
              date automatically, which is a significant time-saver during tax season.
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
                    href="/en/wissen/iban-bic"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    IBAN &amp; BIC for GiroCode – Complete Guide
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
                    EPC Standard &amp; SEPA-QR Explained
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
