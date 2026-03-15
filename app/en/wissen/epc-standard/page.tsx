import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'EPC Standard & SEPA-QR – Technical Structure Explained',
  description:
    'The EPC standard for GiroCodes explained: structure, fields, versions and rules of the SEPA QR code in plain English.',
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
            <li className="text-slate-400">EPC Standard &amp; SEPA-QR</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Technical · EPC Standard &amp; SEPA-QR
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              EPC Standard &amp; SEPA-QR – Technical Structure Explained
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Every GiroCode is built on a precisely defined text format specified by the European
              Payments Council (EPC). This complete technical guide explains the EPC payload
              structure, all fields, versioning, error correction and common implementation
              mistakes.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">

          <section aria-labelledby="what-is-epc">
            <h2 id="what-is-epc">What is the EPC Standard?</h2>
            <p>
              The <strong>European Payments Council (EPC)</strong> is the decision-making and
              coordination body of the European banking industry for payment schemes. Established
              in 2002, it develops and maintains the rules and standards for SEPA (Single Euro
              Payments Area) payments, which cover all 36 SEPA countries – the 27 EU member states
              plus Iceland, Norway, Liechtenstein, Switzerland, Monaco, San Marino, Andorra,
              Vatican City and the United Kingdom.
            </p>
            <p>
              Among its many standards, the EPC published the{' '}
              <strong>EPC069-12 SEPA Credit Transfer QR Code Guideline</strong> – the technical
              specification that defines exactly how a SEPA bank transfer is encoded in a QR code.
              This is the standard behind GiroCode, SEPA-QR and EPC-QR. The current version of
              the guideline is version 3.0, published in 2022.
            </p>

            <h3>History and development</h3>
            <p>
              The idea of using QR codes for payment initiation emerged as smartphone banking
              became mainstream in the early 2010s. Several countries had already developed their
              own proprietary QR payment formats, which led to fragmentation and compatibility
              issues. The EPC recognised the need for a single pan-European standard and published
              the first version of its QR code guideline in 2012.
            </p>
            <p>
              The standard was revised and updated several times over the following years. Key
              milestones include:
            </p>
            <ul>
              <li><strong>2012:</strong> First EPC QR Code Guideline published</li>
              <li><strong>2016:</strong> BIC made optional for domestic SEPA transfers</li>
              <li><strong>2018:</strong> GiroCode launched in Germany by Deutsche Kreditwirtschaft</li>
              <li><strong>2020:</strong> Widespread adoption across European banking apps</li>
              <li><strong>2022:</strong> Updated guideline (version 3.0) with clarifications</li>
            </ul>

            <h3>Why was the EPC standard introduced?</h3>
            <p>
              Before the EPC standard, payment QR codes in Europe were fragmented. Germany had its
              own BezahlCode format, Austria had Stuzza QR, Belgium had its own variant and so on.
              None of these were cross-compatible. The EPC standard was designed to provide a
              single, unified format that any bank in any SEPA country could implement, enabling
              true interoperability across borders.
            </p>
            <p>
              The standard also provides a technically clean separation between the
              <strong>payment initiation layer</strong> (the QR code and its payload) and the
              <strong>payment execution layer</strong> (the bank&apos;s internal systems). This
              means any software can generate a valid EPC payload, and any banking app that
              implements the standard can read it – without any bilateral agreements between
              specific banks or software providers.
            </p>

            <h3>Adoption across Europe</h3>
            <p>
              As of 2024, the EPC QR standard has been adopted by banking institutions in Germany,
              Austria, Belgium, the Netherlands, Finland, Luxembourg, Estonia, Latvia, Lithuania
              and several other SEPA countries. Germany and Belgium have the highest adoption
              rates, with virtually all banking apps in these countries supporting QR code
              scanning for SEPA transfers.
            </p>
          </section>

          <section aria-labelledby="epc-payload-structure" className="mt-10">
            <h2 id="epc-payload-structure">The Technical Structure of the EPC Payload</h2>
            <p>
              The EPC payload is a plain-text string with fields separated by newline characters
              (line breaks). Each line contains exactly one field. The order of the fields is
              fixed and mandatory – no field may be moved or omitted from its position (though
              some may be left empty). Here is a complete example:
            </p>
            <pre className="whitespace-pre rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`BCD
002
1
SCT
SSKMDEMMXXX
Max Mustermann GmbH
DE02120300000000202051
EUR1250.00

Invoice 2024-0042`}
            </pre>
            <p>Now let&apos;s examine each line in detail:</p>

            <h3>Line 1: Service Tag (BCD)</h3>
            <p>
              The first line always contains exactly the string <code>BCD</code> (Bank Customer
              Data). This is a fixed identifier that tells any QR code reader that this payload
              follows the EPC bank transfer standard. No other value is valid here. The service
              tag allows banking apps to distinguish EPC payment QR codes from other types of QR
              codes (URLs, contact data, etc.) at a glance.
            </p>

            <h3>Line 2: Version (001 or 002)</h3>
            <p>
              The second line specifies the version of the EPC standard used. Currently, two
              versions are in active use: <code>001</code> and <code>002</code>. Version 001 was
              the original specification; version 002 introduced minor changes and clarifications.
              In practice, both versions are widely supported by banking apps. If in doubt, use
              <code>002</code> as it is the more recent standard.
            </p>

            <h3>Line 3: Character Set Encoding (1–8)</h3>
            <p>
              The third line specifies the character encoding used for the payload text. The
              value <code>1</code> indicates <strong>UTF-8</strong>, which supports the full
              Unicode character set including umlauts (ä, ö, ü), accented characters (é, à, ñ)
              and other special characters used in European languages. Other values (2–8) represent
              various ISO 8859 encodings (Latin-1, Latin-2, etc.), but UTF-8 (value 1) is the
              recommended choice for modern implementations.
            </p>

            <h3>Line 4: Identification Code (SCT)</h3>
            <p>
              The fourth line contains the payment scheme identification. For SEPA Credit
              Transfers, this is always <code>SCT</code> (SEPA Credit Transfer). This tells the
              banking app that the payment should be processed as a standard SEPA wire transfer.
              No other value is currently supported by the GiroCode/EPC standard.
            </p>

            <h3>Line 5: BIC (optional since 2016)</h3>
            <p>
              The fifth line contains the BIC (Bank Identifier Code, also known as SWIFT code) of
              the recipient&apos;s bank, e.g. <code>SSKMDEMMXXX</code>. Since the completion of
              the SEPA migration in 2016, the BIC is no longer mandatory for domestic transfers
              within SEPA countries. The IBAN alone is sufficient to route the payment. However,
              some legacy banking systems and older apps may still expect a BIC. Leaving this line
              empty (a blank line) is valid and widely supported.
            </p>

            <h3>Line 6: Recipient Name (max. 70 characters)</h3>
            <p>
              The sixth line contains the full name of the payment recipient – the account holder
              name as it appears in the bank records. This can be a person&apos;s full name or a
              company name. The maximum length is <strong>70 characters</strong>. This field is
              mandatory. If the name exceeds 70 characters, it must be truncated, which may cause
              issues with payment matching. Choose the shortest unambiguous form of the name.
            </p>

            <h3>Line 7: IBAN</h3>
            <p>
              The seventh line contains the full IBAN (International Bank Account Number) of the
              payment recipient. For German IBANs, this is 22 characters (DE + 2 check digits +
              18-digit BBAN). The IBAN must be valid according to the Mod-97 algorithm. This field
              is mandatory. No spaces should be included – the IBAN must be entered as a
              continuous string, e.g. <code>DE02120300000000202051</code>.
            </p>

            <h3>Line 8: Amount (format EUR12.34)</h3>
            <p>
              The eighth line contains the transfer amount in the format{' '}
              <code>EURx.xx</code> – the ISO 4217 currency code followed immediately by the
              amount with a period (not a comma) as decimal separator. Examples:{' '}
              <code>EUR12.34</code>, <code>EUR1250.00</code>, <code>EUR0.50</code>. The amount
              must have exactly two decimal places. The maximum amount is EUR 999,999,999.99.
              This field is optional – if the amount is not pre-specified, leave this line empty.
            </p>

            <h3>Line 9: Purpose Type (usually empty)</h3>
            <p>
              The ninth line can contain a purpose type code from the ISO 20022 External Code List
              (e.g. <code>CHAR</code> for charitable payment, <code>SALA</code> for salary). In
              practice, this field is almost always left empty for standard invoice payments. Most
              banking apps ignore this field even if it is populated. Leave it empty unless you
              have a specific reason to use a purpose code.
            </p>

            <h3>Line 10: Creditor Reference (usually empty)</h3>
            <p>
              The tenth line can contain a structured creditor reference (ISO 11649 RF reference,
              e.g. <code>RF18539007547034</code>). This is used in some countries (particularly
              Finland and Belgium) for automated payment reconciliation. In Germany and most other
              SEPA countries, the free-text payment reference on line 11 is preferred instead.
              Leave this line empty if you are using line 11 for the payment reference.
            </p>

            <h3>Line 11: Payment Reference (max. 140 characters)</h3>
            <p>
              The eleventh line contains the free-text payment reference (Verwendungszweck in
              German). This is the text that will appear on the bank statement of both sender and
              recipient. The maximum length is <strong>140 characters</strong> in UTF-8 encoding.
              Best practice is to include the invoice number, date and any relevant reference
              numbers here, e.g. <code>Invoice 2024-0042 dated 2024-03-15</code>. Note that lines
              10 and 11 are mutually exclusive – you should use either the structured reference
              (line 10) or the free-text reference (line 11), not both.
            </p>
          </section>

          <section aria-labelledby="epc-versions" className="mt-10">
            <h2 id="epc-versions">EPC Versions Compared</h2>
            <p>
              The EPC QR standard has two main versions in active use. Understanding the
              differences helps you choose the right version for your use case.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 pr-4 text-left text-slate-300">Aspect</th>
                    <th className="py-2 pr-4 text-left text-slate-300">Version 001</th>
                    <th className="py-2 text-left text-slate-300">Version 002</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-400">
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Year introduced</td>
                    <td className="py-2 pr-4">2012</td>
                    <td className="py-2">2018</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">BIC required</td>
                    <td className="py-2 pr-4">Yes (mandatory)</td>
                    <td className="py-2">No (optional)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Max payload size</td>
                    <td className="py-2 pr-4">331 bytes</td>
                    <td className="py-2">331 bytes</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Bank app support</td>
                    <td className="py-2 pr-4">Widely supported</td>
                    <td className="py-2">Widely supported</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Recommended for</td>
                    <td className="py-2 pr-4">Legacy systems</td>
                    <td className="py-2">New implementations</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Character encoding</td>
                    <td className="py-2 pr-4">UTF-8 or ISO 8859</td>
                    <td className="py-2">UTF-8 recommended</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              For new implementations, version 002 with UTF-8 encoding is the recommended choice.
              It is forward-compatible with version 001 readers and does not require a BIC, which
              simplifies implementation and keeps the payload shorter (and therefore the QR code
              less dense and more reliably scannable).
            </p>
          </section>

          <section aria-labelledby="error-correction" className="mt-10">
            <h2 id="error-correction">Error Correction and QR Code Quality</h2>

            <h3>Error correction level M (15%)</h3>
            <p>
              QR codes support four error correction levels: L (7%), M (15%), Q (25%) and H (30%).
              The EPC standard specifies <strong>error correction level M</strong> for GiroCodes.
              This means up to 15% of the QR code&apos;s data cells can be damaged or covered
              while the code remains fully readable.
            </p>

            <h3>Why M and not H?</h3>
            <p>
              Higher error correction levels make QR codes more robust but also larger (more
              modules = denser pattern = harder to scan in small sizes). The EPC standard chose
              level M as a practical compromise: it provides sufficient robustness for typical
              invoice printing and scanning conditions (slight printing imperfections, minor
              smudges, scanning from a screen at a slight angle) without making the code
              unnecessarily large.
            </p>
            <p>
              Level H would increase the code density significantly. Given that invoice payments
              typically happen in controlled conditions (scanning a printed paper or a PDF on
              screen), the extra robustness of level H is not needed and would only make the code
              harder to scan when printed at small sizes.
            </p>

            <h3>Impact on scannability</h3>
            <p>
              Several factors affect how reliably a GiroCode can be scanned:
            </p>
            <ul>
              <li><strong>Print quality:</strong> At least 300 DPI is recommended for printed codes</li>
              <li><strong>Minimum size:</strong> At least 2 × 2 cm for printed invoices; 200 × 200 px for digital</li>
              <li><strong>Quiet zone:</strong> White border of at least 4 modules on all sides</li>
              <li><strong>Contrast:</strong> Black modules on white background; avoid grey or coloured backgrounds</li>
              <li><strong>Undistorted:</strong> QR codes must not be stretched, rotated or skewed</li>
              <li><strong>Payload length:</strong> Shorter payloads produce less dense QR codes that scan more reliably</li>
            </ul>

            <h3>Minimum QR code size</h3>
            <p>
              The EPC standard recommends a minimum printed size of <strong>2 × 2 cm</strong> for
              GiroCodes. In practice, 3 × 3 cm provides noticeably better scan reliability,
              especially for older or lower-resolution camera phones. For digital use (PDFs,
              emails, websites), 200 × 200 pixels is the minimum, with 400 × 400 pixels
              recommended for good screen scanning performance.
            </p>
          </section>

          <section aria-labelledby="technical-implementation" className="mt-10">
            <h2 id="technical-implementation">Technical Implementation</h2>
            <p>
              Here is a JavaScript example showing how to generate a valid EPC payload from
              payment data:
            </p>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-4 text-xs text-slate-200">
{`function generateEpcPayload({
  name,       // Recipient name (max 70 chars)
  iban,       // Recipient IBAN
  bic = '',   // BIC (optional)
  amount = 0, // Amount in EUR (0 = no amount)
  reference = '', // Payment reference (max 140 chars)
  version = '002',
}) {
  const amountStr = amount > 0
    ? 'EUR' + amount.toFixed(2)
    : '';

  const lines = [
    'BCD',         // Service tag
    version,       // Version
    '1',           // UTF-8 encoding
    'SCT',         // SEPA Credit Transfer
    bic,           // BIC (optional)
    name.slice(0, 70),   // Recipient name
    iban,          // IBAN
    amountStr,     // Amount (optional)
    '',            // Purpose type (leave empty)
    '',            // Creditor reference (leave empty)
    reference.slice(0, 140), // Payment reference
  ];

  return lines.join('\\n');
}

// Usage example:
const payload = generateEpcPayload({
  name: 'Max Mustermann GmbH',
  iban: 'DE02120300000000202051',
  amount: 1250.00,
  reference: 'Invoice 2024-0042',
});

// Now encode 'payload' as a QR code with:
// - Error correction level M
// - Module size appropriate for the target use
console.log(payload);`}
            </pre>
            <p>
              To generate the actual QR code image from this payload in JavaScript, you can use
              libraries like <code>qrcode</code> (npm) or <code>qr-code-styling</code>. Our
              GiroCode Generator uses a similar approach, running entirely in the browser without
              sending any data to a server.
            </p>
          </section>

          <section aria-labelledby="common-mistakes" className="mt-10">
            <h2 id="common-mistakes">Common Mistakes with the EPC Standard</h2>
            <p>
              When implementing GiroCode generation, developers and users frequently encounter
              the following mistakes:
            </p>

            <h3>Wrong character encoding</h3>
            <p>
              If the payload is encoded in a character set other than what is specified in line 3,
              special characters (umlauts, accented letters) will be garbled when the banking app
              reads the code. Always ensure that the encoding declared in line 3 matches the
              actual encoding used. For UTF-8 (value 1), ensure your string handling library
              encodes the payload as UTF-8 bytes, not as Latin-1 or Windows-1252.
            </p>

            <h3>Payment reference too long</h3>
            <p>
              The payment reference (line 11) has a strict maximum of <strong>140 characters</strong>.
              If you exceed this limit, the QR code may be rejected by banking apps or the
              reference may be silently truncated. Always validate the reference length before
              encoding. Note that some banking apps apply even stricter limits (e.g. 35 or 70
              characters) – keeping the reference concise is good practice.
            </p>

            <h3>Wrong amount format</h3>
            <p>
              The amount must use a period (.) as the decimal separator, not a comma. Many
              European languages use commas for decimals, but the EPC standard requires the
              period. Wrong: <code>EUR1.250,00</code> (comma as decimal + period as thousands).
              Correct: <code>EUR1250.00</code> (period as decimal, no thousands separator). Also,
              the amount must have exactly two decimal places – <code>EUR12.5</code> is invalid;
              <code>EUR12.50</code> is correct.
            </p>

            <h3>Invalid IBAN</h3>
            <p>
              Using an IBAN that fails the Mod-97 check digit validation will cause banking apps
              to reject the payment. Always validate the IBAN before embedding it in a GiroCode.
              Common mistakes include typos, missing country code, wrong check digits or wrong
              total length. German IBANs always have 22 characters; shorter or longer strings are
              immediately invalid.
            </p>

            <h3>Missing newlines between fields</h3>
            <p>
              The EPC payload uses Unix-style line breaks (<code>\n</code>, LF) to separate
              fields. Using Windows-style line breaks (<code>\r\n</code>, CRLF) or mixing line
              break styles will cause parsing errors in some banking apps. Ensure your payload
              generator produces pure Unix-style newlines.
            </p>

            <h3>Exceeding the maximum payload size</h3>
            <p>
              The total payload must not exceed <strong>331 bytes</strong> when encoded in UTF-8.
              With error correction level M and this byte limit, the resulting QR code has a
              manageable density. Exceeding this limit may produce a QR code that is too dense to
              scan reliably at small sizes, or may cause validation errors in strict banking app
              implementations.
            </p>
          </section>

          <section aria-labelledby="professional-tools-epc" className="mt-10">
            <h2 id="professional-tools-epc">Professional Tools Supporting EPC Standard</h2>
            <p>
              If you need to generate GiroCodes at scale – for example, for hundreds of invoices
              per month – manual QR code generation quickly becomes a bottleneck. Professional
              accounting software with native EPC standard support can automate this entirely.
            </p>

            <h3>sevDesk – Native EPC Standard Support</h3>
            <p>
              <strong>sevDesk</strong> natively implements the EPC standard in its invoice engine.
              When you create an invoice in sevDesk and include your bank details, the platform
              automatically generates a valid EPC QR code (GiroCode) and embeds it in the invoice
              PDF. The payload is generated correctly according to the standard – right version,
              right encoding, right amount format. You never need to worry about EPC compliance
              when using sevDesk for invoicing.
            </p>
            <p>
              Beyond GiroCode generation, sevDesk offers a complete accounting solution: automatic
              bank transaction import, invoice matching, DATEV export, tax reports, digital receipt
              capture and compliance with German GoBD accounting standards. It supports all major
              German banks via open banking (PSD2).
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

            <h3>FastBill – Automatic GiroCode Generation</h3>
            <p>
              <strong>FastBill</strong> integrates EPC-compliant GiroCode generation directly into
              its invoice workflow. Every invoice created in FastBill can automatically include a
              GiroCode QR code, saving you the manual step of generating and inserting the code.
              FastBill correctly implements all EPC formatting rules, including the right amount
              format, character encoding and reference length limits.
            </p>
            <p>
              FastBill is particularly popular with freelancers and creative professionals who need
              a simple, clean invoicing solution without the complexity of full accounting
              software. It offers invoice creation, expense tracking, revenue reporting, payment
              reminders and integrations with DATEV and Lexware.
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
                    href="/en/wissen/iban-bic"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    IBAN &amp; BIC for GiroCode – Complete Guide
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
