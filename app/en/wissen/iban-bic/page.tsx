import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IBAN & BIC for GiroCode – Complete Guide',
  description:
    'IBAN and BIC for GiroCode: format, when BIC is required, and how IBAN validation works. Everything explained simply.',
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
            <li className="text-slate-400">IBAN &amp; BIC for GiroCode</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Basics · IBAN &amp; BIC
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              IBAN &amp; BIC for GiroCode – Complete Guide
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              IBAN and BIC are the two key banking identifiers used in GiroCodes. This complete
              guide explains their structure, how to validate an IBAN, when BIC is still needed,
              and what the security implications are of sharing your IBAN.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">

          <section aria-labelledby="what-is-iban">
            <h2 id="what-is-iban">What is an IBAN?</h2>
            <p>
              An <strong>IBAN</strong> (International Bank Account Number) is a standardised
              international format for identifying bank accounts. It was developed by the
              International Organization for Standardization (ISO) and the European Committee for
              Banking Standards (ECBS) and is defined in the ISO 13616 standard. The IBAN
              uniquely identifies a bank account across national boundaries, eliminating the
              ambiguity of country-specific account number formats.
            </p>
            <p>
              Before the IBAN was introduced, cross-border bank transfers in Europe required both
              a domestic account number and a bank code (Bankleitzahl in Germany, sort code in the
              UK, etc.), and the formats varied significantly between countries. The IBAN combines
              the country code, check digits and the domestic bank details into a single
              standardised string that can be processed by any bank in the SEPA zone and beyond.
            </p>

            <h3>Structure of a German IBAN</h3>
            <p>
              A German IBAN always follows this structure:
            </p>
            <pre className="rounded-md bg-slate-900/70 p-3 text-xs text-slate-200">
{`DE  02  12030000  0000202051
 ↑   ↑      ↑          ↑
 CC  CD   BLZ       Kontonummer
(Country) (Check) (Bank code) (Account number)`}
            </pre>
            <ul>
              <li><strong>CC (Country Code):</strong> <code>DE</code> – two-letter ISO 3166-1 country code</li>
              <li><strong>CD (Check Digits):</strong> Two-digit number calculated using the Mod-97 algorithm</li>
              <li><strong>BLZ (Bank Code):</strong> Eight-digit German Bankleitzahl</li>
              <li><strong>Account Number:</strong> Ten-digit German account number (zero-padded)</li>
            </ul>
            <p>
              German IBANs always have exactly <strong>22 characters</strong>. Any IBAN that is
              longer or shorter is immediately invalid for a German account.
            </p>

            <h3>International IBAN formats</h3>
            <p>
              IBAN lengths and formats vary by country. The maximum IBAN length is 34 characters.
              Here are some examples of IBAN lengths and formats across Europe:
            </p>

            <h3>History of IBAN introduction</h3>
            <p>
              The IBAN standard was initially developed in the 1990s for European cross-border
              transfers. It was made mandatory for all SEPA credit transfers within the EU/EEA
              as part of the SEPA migration, which was completed in February 2014 for retail
              payments. From that date, the old national account number formats became officially
              obsolete for SEPA transfers. Banks continue to maintain the mapping between old
              account numbers and IBANs, so customers who only know their old account number can
              still have it converted.
            </p>
          </section>

          <section aria-labelledby="iban-step-by-step" className="mt-10">
            <h2 id="iban-step-by-step">The IBAN Explained Step by Step</h2>

            <h3>Country code</h3>
            <p>
              The first two characters of an IBAN are always the two-letter ISO 3166-1 alpha-2
              country code of the country where the account is held. For Germany this is
              <code>DE</code>, for Austria <code>AT</code>, for Switzerland <code>CH</code>, for
              France <code>FR</code>, for the Netherlands <code>NL</code> and so on. This tells
              the receiving bank which country&apos;s banking system the account belongs to.
            </p>

            <h3>Check digits (Mod-97 algorithm explained)</h3>
            <p>
              Characters 3 and 4 of an IBAN are two decimal check digits, calculated using the
              ISO 7064 Mod-97-10 algorithm. This provides a mathematical validation layer that
              allows any software to verify that an IBAN is correctly formed before attempting a
              transfer. Here is how the algorithm works:
            </p>
            <ol>
              <li>Move the first four characters (country code + check digits) to the end of the IBAN string</li>
              <li>Replace each letter with its numeric equivalent (A=10, B=11, ..., Z=35)</li>
              <li>Calculate the remainder of dividing the resulting number by 97</li>
              <li>If the result is 1, the IBAN check digits are valid</li>
            </ol>
            <p>
              Example: <code>DE02120300000000202051</code>
            </p>
            <ol>
              <li>Rearranged: <code>120300000000202051DE02</code></li>
              <li>Letters replaced: <code>1203000000002020511310 2</code> (D=13, E=14, check digits preserved)</li>
              <li>Divide by 97: remainder = 1 ✓</li>
            </ol>
            <p>
              This check does not verify that the account actually exists or belongs to the named
              person – it only confirms that the IBAN number is mathematically consistent. A typo
              in the IBAN will almost certainly produce a check digit failure, which is caught
              before the transfer is even submitted.
            </p>

            <h3>Bank code</h3>
            <p>
              In the German IBAN, characters 5–12 (8 digits) represent the{' '}
              <strong>Bankleitzahl (BLZ)</strong> – the German bank sort code that identifies
              the specific bank and branch. For example, <code>12030000</code> is the BLZ of
              Deutsche Kreditbank AG (DKB). The BLZ is assigned by the Deutsche Bundesbank and
              uniquely identifies every bank (and in some cases, every branch) in Germany.
            </p>

            <h3>Account number</h3>
            <p>
              Characters 13–22 of a German IBAN (10 digits) represent the domestic account
              number, zero-padded on the left to fill exactly 10 digits. So an account number of
              <code>202051</code> becomes <code>0000202051</code> in the IBAN. Together, the BLZ
              and account number form the <strong>BBAN</strong> (Basic Bank Account Number) –
              the country-specific part of the IBAN.
            </p>
          </section>

          <section aria-labelledby="what-is-bic" className="mt-10">
            <h2 id="what-is-bic">What is a BIC?</h2>
            <p>
              A <strong>BIC</strong> (Bank Identifier Code), also known as SWIFT code, is an
              international standard (ISO 9362) for identifying banks in international financial
              transactions. While the IBAN identifies a specific account, the BIC identifies the
              bank itself – more specifically, the financial institution and optionally a specific
              branch or department within it.
            </p>

            <h3>Structure of a BIC (8 or 11 characters)</h3>
            <p>
              A BIC consists of 8 or 11 characters in the following structure:
            </p>
            <pre className="rounded-md bg-slate-900/70 p-3 text-xs text-slate-200">
{`SSKM  DE  MM  XXX
 ↑     ↑   ↑   ↑
Bank  CC  Loc  Branch
(4)  (2) (2)  (3)`}
            </pre>
            <ul>
              <li><strong>Bank code (4 chars):</strong> Identifies the bank (e.g. <code>SSKM</code> for Stadtsparkasse München)</li>
              <li><strong>Country code (2 chars):</strong> ISO 3166-1 country code (e.g. <code>DE</code> for Germany)</li>
              <li><strong>Location code (2 chars):</strong> Identifies the city or region (e.g. <code>MM</code> for Munich)</li>
              <li><strong>Branch code (3 chars, optional):</strong> Identifies a specific branch; <code>XXX</code> means the primary office</li>
            </ul>
            <p>
              The 8-character BIC (without branch code) and the 11-character BIC (with{' '}
              <code>XXX</code> branch code) are equivalent – both refer to the main office of the
              bank. Some systems require an 11-character BIC; in that case, append{' '}
              <code>XXX</code> to an 8-character BIC.
            </p>

            <h3>Where to find your BIC</h3>
            <p>
              You can find your bank&apos;s BIC in several places:
            </p>
            <ul>
              <li>Your bank&apos;s website (usually in the &ldquo;Contact&rdquo; or &ldquo;Bank details&rdquo; section)</li>
              <li>Your bank statement or account passbook</li>
              <li>Your online banking portal (usually in the account details section)</li>
              <li>The Deutsche Bundesbank&apos;s bank sort code directory (for German banks)</li>
              <li>The SWIFT website&apos;s BIC lookup tool</li>
            </ul>
          </section>

          <section aria-labelledby="bic-required" className="mt-10">
            <h2 id="bic-required">Is BIC Required for GiroCode?</h2>

            <h3>Optional since SEPA migration 2016</h3>
            <p>
              Since the completion of the SEPA migration in 2016, the BIC is <strong>no longer
              required</strong> for domestic and cross-border SEPA transfers within the SEPA zone.
              The IBAN alone is sufficient to route the payment to the correct bank and account.
              Banks are obligated to accept SEPA transfers based on IBAN only, without requiring
              a BIC.
            </p>
            <p>
              In the EPC QR standard (version 002), the BIC field (line 5 of the payload) is
              therefore optional. Our GiroCode Generator generates valid QR codes without a BIC.
              We recommend leaving the BIC empty for simplicity – it keeps the payload shorter,
              the QR code less dense and easier to scan.
            </p>

            <h3>When is BIC still needed?</h3>
            <p>
              Despite the general rule, there are still some situations where providing a BIC is
              beneficial or required:
            </p>
            <ul>
              <li>
                <strong>Some legacy banking systems:</strong> Older banking software or payment
                processors may still require a BIC for certain transaction types. When in doubt,
                include the BIC.
              </li>
              <li>
                <strong>Non-SEPA international transfers:</strong> For transfers outside the SEPA
                zone (e.g. to the USA, UK since Brexit, or other non-SEPA countries), a BIC is
                still required. However, GiroCodes are only designed for SEPA transfers.
              </li>
              <li>
                <strong>Certain EPC version 001 implementations:</strong> Some older banking apps
                that only support EPC version 001 expect a BIC in the payload. If you need
                maximum compatibility with legacy systems, include the BIC.
              </li>
              <li>
                <strong>Bank-specific requirements:</strong> A small number of banks in certain
                SEPA countries still require a BIC for incoming transfers. If your recipient has
                specifically requested a BIC, include it.
              </li>
            </ul>

            <h3>Domestic vs. international transfers</h3>
            <p>
              For transfers between accounts in the same country (e.g. two German accounts), the
              BIC has been optional since February 2016. For transfers between accounts in
              different SEPA countries (e.g. from Germany to the Netherlands), the BIC has been
              optional since October 2016. For transfers to non-SEPA countries, GiroCode is not
              applicable – these require a different format and the BIC is always needed.
            </p>
          </section>

          <section aria-labelledby="iban-validation" className="mt-10">
            <h2 id="iban-validation">IBAN Validation Explained</h2>

            <h3>Mod-97 algorithm step by step</h3>
            <p>
              The Mod-97 check digit algorithm is the mathematical backbone of IBAN validation.
              Here is a step-by-step walkthrough using the example IBAN{' '}
              <code>DE89370400440532013000</code>:
            </p>
            <ol>
              <li>
                <strong>Move first 4 characters to end:</strong>{' '}
                <code>370400440532013000DE89</code>
              </li>
              <li>
                <strong>Replace letters with numbers</strong> (A=10, B=11, ..., Z=35):{' '}
                <code>37040044053201300013148 9</code> (D=13, E=14)
              </li>
              <li>
                <strong>Treat the result as a number</strong> and calculate modulo 97:{' '}
                <code>370400440532013000131489 mod 97 = 1</code>
              </li>
              <li>
                <strong>If the result is 1, the IBAN is valid.</strong> Otherwise it is invalid.
              </li>
            </ol>

            <h3>Why validation matters</h3>
            <p>
              Validating an IBAN before using it in a GiroCode is critical for two reasons:
            </p>
            <ul>
              <li>
                <strong>Prevent payment failures:</strong> An invalid IBAN will be rejected by
                the banking app, causing the payment to fail. This creates confusion and delays.
              </li>
              <li>
                <strong>Prevent misdirected payments:</strong> While the check digit algorithm
                catches most typos, not all wrong IBANs are invalid. A typo could produce a
                different, valid IBAN – causing the payment to be sent to the wrong account.
                Always double-check IBAN entries visually as well.
              </li>
            </ul>

            <h3>Common IBAN input errors</h3>
            <ul>
              <li>Transposing two adjacent digits (e.g. <code>...1023...</code> instead of <code>...1032...</code>)</li>
              <li>Missing leading zeros in the account number part</li>
              <li>Incorrect country code (e.g. using <code>AT</code> instead of <code>DE</code>)</li>
              <li>Including spaces (IBANs should have no spaces when used in data fields)</li>
              <li>Using the wrong IBAN length (e.g. 21 characters for a German IBAN)</li>
              <li>Confusing letters and numbers (e.g. letter O vs digit 0)</li>
            </ul>

            <h3>Code example for IBAN validation in JavaScript</h3>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`function validateIBAN(iban) {
  // Remove spaces and convert to uppercase
  iban = iban.replace(/\s/g, '').toUpperCase();

  // Basic format check
  if (!/^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/.test(iban)) return false;

  // Move first 4 characters to end
  const rearranged = iban.slice(4) + iban.slice(0, 4);

  // Replace each letter with its numeric value (A=10, ..., Z=35)
  const numericString = rearranged
    .split('')
    .map(ch => isNaN(ch) ? ch.charCodeAt(0) - 55 : ch)
    .join('');

  // Compute modulo 97 using BigInt for large numbers
  const remainder = BigInt(numericString) % 97n;
  return remainder === 1n;
}

// Examples:
console.log(validateIBAN('DE89 3704 0044 0532 0130 00')); // true
console.log(validateIBAN('DE89370400440532013001')); // false (wrong check digit)`}
            </pre>
          </section>

          <section aria-labelledby="iban-by-country" className="mt-10">
            <h2 id="iban-by-country">IBAN Formats by Country</h2>
            <p>
              Here is an overview of IBAN formats for the most important European countries:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 pr-4 text-left text-slate-300">Country</th>
                    <th className="py-2 pr-4 text-left text-slate-300">Code</th>
                    <th className="py-2 pr-4 text-left text-slate-300">Length</th>
                    <th className="py-2 text-left text-slate-300">Format / Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-400">
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Germany</td>
                    <td className="py-2 pr-4">DE</td>
                    <td className="py-2 pr-4">22</td>
                    <td className="py-2"><code>DEkk bbbb bbbb cccc cccc cc</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Austria</td>
                    <td className="py-2 pr-4">AT</td>
                    <td className="py-2 pr-4">20</td>
                    <td className="py-2"><code>ATkk bbbb bccc cccc cccc</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Switzerland</td>
                    <td className="py-2 pr-4">CH</td>
                    <td className="py-2 pr-4">21</td>
                    <td className="py-2"><code>CHkk bbbb bccc cccc cccc c</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">France</td>
                    <td className="py-2 pr-4">FR</td>
                    <td className="py-2 pr-4">27</td>
                    <td className="py-2"><code>FRkk bbbb bggg ggcc cccc cccc cxx</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Spain</td>
                    <td className="py-2 pr-4">ES</td>
                    <td className="py-2 pr-4">24</td>
                    <td className="py-2"><code>ESkk bbbb gggg xxcc cccc cccc</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Italy</td>
                    <td className="py-2 pr-4">IT</td>
                    <td className="py-2 pr-4">27</td>
                    <td className="py-2"><code>ITkk xbbb bbss ssscc cccc cccc</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Netherlands</td>
                    <td className="py-2 pr-4">NL</td>
                    <td className="py-2 pr-4">18</td>
                    <td className="py-2"><code>NLkk bbbb cccc cccc cc</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Belgium</td>
                    <td className="py-2 pr-4">BE</td>
                    <td className="py-2 pr-4">16</td>
                    <td className="py-2"><code>BEkk bbbc cccc ccxx</code></td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Poland</td>
                    <td className="py-2 pr-4">PL</td>
                    <td className="py-2 pr-4">28</td>
                    <td className="py-2"><code>PLkk bbbs sssx cccc cccc cccc cccc</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              (Where k=check digit, b=bank code, c=account number, g=branch/sort code, s=sort
              code, x=control digit)
            </p>
          </section>

          <section aria-labelledby="iban-security" className="mt-10">
            <h2 id="iban-security">IBAN Security</h2>

            <h3>Is it safe to share your IBAN?</h3>
            <p>
              Sharing your IBAN is generally safe and is necessary for receiving SEPA transfers.
              Your IBAN is like your postal address for money – people need it to send you
              payments. Banks print IBANs on bank cards, statements and in online banking portals.
              The EPC QR standard (GiroCode) is specifically designed for sharing payment
              details, so embedding your IBAN in a QR code on an invoice is a normal and accepted
              practice.
            </p>

            <h3>What can someone do with your IBAN?</h3>
            <p>
              With only your IBAN, another person can:
            </p>
            <ul>
              <li><strong>Send you money</strong> – the primary intended use</li>
              <li><strong>Set up a SEPA Direct Debit mandate</strong> – this is the main risk (see below)</li>
            </ul>
            <p>
              They <strong>cannot</strong> withdraw money from your account or initiate a transfer
              using only your IBAN. SEPA transfers are push payments – only the account holder
              (or their authorised representative) can initiate an outgoing transfer.
            </p>

            <h3>IBAN for direct debit vs. transfer</h3>
            <p>
              The main risk of sharing your IBAN is that a fraudulent actor could use it to set
              up an unauthorised SEPA Direct Debit (SDD) mandate. Unlike SEPA Credit Transfers,
              direct debits are pull payments – the payee initiates the collection. However, SEPA
              regulations provide strong consumer protection:
            </p>
            <ul>
              <li>Unauthorised direct debits can be reversed within <strong>8 weeks</strong> (with valid mandate) or <strong>13 months</strong> (without valid mandate)</li>
              <li>Banks are obligated to refund reversed direct debits immediately upon request</li>
              <li>Recurring direct debits from unknown originators should always be investigated immediately</li>
            </ul>
            <p>
              If you notice an unexpected direct debit on your account, contact your bank
              immediately to reverse it. Also check your direct debit mandate list in your online
              banking to identify and cancel any unauthorised mandates.
            </p>

            <h3>Privacy with GiroCode</h3>
            <p>
              GiroCodes on public invoices embed your IBAN in a machine-readable format. Anyone
              who scans the code will be able to read your IBAN, bank name and account holder
              name. For business invoices, this is entirely normal and expected – the same
              information appears in plain text in the invoice footer anyway. For private use,
              be mindful about where you publish or share invoices with GiroCodes.
            </p>
            <p>
              Unlike some other payment methods (e.g. PayPal), SEPA bank transfers via GiroCode
              do not expose your payment data to any third-party payment processor. The
              transaction data flows only between the payer&apos;s bank and your bank.
            </p>
          </section>

          <section aria-labelledby="accounting-iban" className="mt-10">
            <h2 id="accounting-iban">Accounting Software with IBAN Management</h2>
            <p>
              Managing multiple IBANs – your own, your clients&apos;, your suppliers&apos; –
              is a significant part of business accounting. Professional accounting software
              can handle IBAN validation, storage and GiroCode generation automatically.
            </p>

            <h3>sevDesk – IBAN Management and Automatic GiroCodes</h3>
            <p>
              <strong>sevDesk</strong> stores and validates IBANs for all your contacts – clients,
              suppliers and employees. When you create an invoice, sevDesk automatically retrieves
              your bank account IBAN from your account settings and generates a GiroCode with the
              correct IBAN, amount and invoice reference. IBAN validation is built in, preventing
              incorrectly formatted IBANs from being used in invoices or transfers.
            </p>
            <p>
              sevDesk also supports multiple bank accounts, so if you have separate accounts for
              different business purposes, you can choose which IBAN to embed in each invoice.
              Bank account syncing via open banking (PSD2) means incoming payments are
              automatically matched to outstanding invoices based on the payment reference.
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

            <h3>FastBill – Simple Account Management</h3>
            <p>
              <strong>FastBill</strong> makes IBAN management straightforward for freelancers and
              small businesses. Store your bank account details once, and FastBill automatically
              includes your IBAN in all invoices – along with a GiroCode for scan-to-pay
              convenience. FastBill validates IBAN formats on input to prevent errors.
            </p>
            <p>
              For businesses that collect payments from clients, FastBill&apos;s payment tracking
              feature helps monitor which invoices have been paid and which are outstanding,
              matching incoming SEPA transfers to open invoices based on the encoded payment
              reference.
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
                    href="/en/wissen/epc-standard"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    EPC Standard &amp; SEPA-QR – Technical Structure
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
                    href="/en/wissen/rechnung"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    GiroCode on Invoices – The Complete Guide
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
