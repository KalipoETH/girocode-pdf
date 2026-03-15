import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is a GiroCode? – Everything You Need to Know',
  description:
    'GiroCode explained: What is a SEPA QR code, how does it work, and how do you create one for free? Complete guide with examples.',
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
              What is a GiroCode? – Everything You Need to Know
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              The GiroCode – also known as SEPA-QR or EPC QR code – is a standardised QR code for
              bank transfers in the SEPA area. It eliminates manual data entry, reduces errors and
              makes payments significantly faster for both payers and recipients. This complete guide
              explains everything you need to know.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">

          <section aria-labelledby="what-is-girocode">
            <h2 id="what-is-girocode">What is a GiroCode?</h2>
            <p>
              A <strong>GiroCode</strong> is a standardised QR code that encodes all the data
              required for a SEPA bank transfer in a machine-readable format. When a payer scans
              the code with their banking app, the transfer form is filled out automatically –
              including recipient name, IBAN, amount and payment reference. All the payer needs to
              do is verify the pre-filled details and confirm the transaction.
            </p>
            <p>
              Technically, the GiroCode is based on the specification of the{' '}
              <strong>European Payments Council (EPC)</strong>, which is why it is also commonly
              referred to as <strong>SEPA-QR</strong>, <strong>EPC-QR</strong> or{' '}
              <strong>payment QR code</strong>. All these terms refer to the same underlying
              standard – a plain-text payload, encoded as a QR code, that banking apps across
              Europe can interpret in the same way.
            </p>
            <p>
              The GiroCode was officially introduced in Germany in <strong>2018</strong>, following
              the EPC&apos;s publication of the QR Code Guidelines. Since then it has been adopted
              by virtually all major German banks and savings banks, and is increasingly recognised
              by banking apps throughout the SEPA zone. Today it is considered the de-facto
              standard for scan-to-pay bank transfers within Europe.
            </p>

            <h3>Who developed the GiroCode?</h3>
            <p>
              The technical standard behind the GiroCode was developed by the{' '}
              <strong>European Payments Council (EPC)</strong> – the decision-making and
              coordination body of the European banking industry for payment schemes. The EPC
              manages the SEPA Credit Transfer (SCT) scheme, the SEPA Direct Debit (SDD) scheme
              and the SEPA Instant Credit Transfer (SCT Inst) scheme. The QR code guideline that
              defines the GiroCode format is called the{' '}
              <em>EPC069-12 SEPA Credit Transfer QR Code Guideline</em>.
            </p>
            <p>
              In Germany, the Deutsche Kreditwirtschaft (DK) – the umbrella association of German
              banks – adopted the EPC standard and introduced it under the brand name
              &ldquo;GiroCode&rdquo;. The name itself is a portmanteau of &ldquo;Giro&rdquo;
              (German for bank transfer) and &ldquo;code&rdquo; (QR code).
            </p>

            <h3>How widespread is GiroCode in Europe?</h3>
            <p>
              While GiroCode is best known in Germany, the underlying EPC standard is used across
              the entire SEPA zone. Austria uses the closely related{' '}
              <strong>Stuzza QR code</strong> (also based on EPC), Belgium has widely adopted the
              same EPC QR standard for invoice payments, and Switzerland has introduced its own
              variant called the <strong>Swiss QR Code</strong> (QR-Bill) – which shares many
              similarities but includes Swiss-specific fields. In the Netherlands, France, Spain and
              Italy, the EPC QR format is also gaining traction as banks update their apps.
            </p>
            <p>
              As of 2024, virtually every major German retail bank – including Sparkasse, VR-Banken,
              ING, DKB, Deutsche Bank, Commerzbank, Postbank, N26 and Comdirect – supports QR code
              scanning for SEPA transfers. The European Banking Authority has also signalled support
              for harmonised QR-based payment initiation across Europe.
            </p>
          </section>

          <section aria-labelledby="how-girocode-works" className="mt-10">
            <h2 id="how-girocode-works">How Does a GiroCode Work?</h2>
            <p>
              Understanding how a GiroCode works requires looking at two sides: the{' '}
              <strong>creation side</strong> (how the QR code is generated) and the{' '}
              <strong>scanning side</strong> (how the QR code is read and processed).
            </p>

            <h3>Step-by-step: From creation to payment</h3>
            <ol>
              <li>
                <strong>Enter payment details:</strong> The invoice issuer enters the recipient
                name, IBAN, BIC (optional), amount (optional) and payment reference into a
                GiroCode generator tool like ours.
              </li>
              <li>
                <strong>Generate QR code:</strong> The tool assembles a plain-text EPC payload
                from these fields and encodes it as a QR code using error correction level M.
              </li>
              <li>
                <strong>Embed in invoice:</strong> The QR code image is placed on the invoice –
                typically in the bottom-right corner, near the bank details.
              </li>
              <li>
                <strong>Payer scans code:</strong> The customer opens their banking app, taps the
                QR scanner function and points the camera at the GiroCode.
              </li>
              <li>
                <strong>Transfer form auto-fills:</strong> The app decodes the payload and
                pre-populates the transfer form with all encoded fields.
              </li>
              <li>
                <strong>Payer verifies and confirms:</strong> The customer checks the pre-filled
                data, enters their TAN or uses biometric authentication, and confirms the transfer.
              </li>
            </ol>

            <h3>What data is transferred?</h3>
            <p>
              The EPC payload that is encoded in a GiroCode contains the following fields, each on
              a separate line:
            </p>
            <ul>
              <li><strong>Service tag:</strong> Always &ldquo;BCD&rdquo; – identifies the payload as a bank QR code</li>
              <li><strong>Version:</strong> Either &ldquo;001&rdquo; or &ldquo;002&rdquo;</li>
              <li><strong>Character set encoding:</strong> Typically &ldquo;1&rdquo; for UTF-8</li>
              <li><strong>Identification code:</strong> &ldquo;SCT&rdquo; for SEPA Credit Transfer</li>
              <li><strong>BIC:</strong> Bank Identifier Code of the recipient&apos;s bank (optional since 2016)</li>
              <li><strong>Recipient name:</strong> Full account holder name (max. 70 characters)</li>
              <li><strong>IBAN:</strong> Full IBAN of the recipient</li>
              <li><strong>Amount:</strong> Optional, format &ldquo;EUR12.34&rdquo;</li>
              <li><strong>Purpose type:</strong> Optional category code (usually left empty)</li>
              <li><strong>Creditor reference:</strong> Structured reference (usually left empty)</li>
              <li><strong>Payment reference:</strong> Free-text description (max. 140 characters)</li>
            </ul>

            <h3>Security aspects</h3>
            <p>
              A GiroCode is a <strong>push payment</strong> – the payer actively initiates the
              transfer and must confirm it with their bank&apos;s authentication method (TAN,
              fingerprint, Face ID, etc.). Unlike direct debits, nobody can pull money from your
              account using only a GiroCode. The banking app always shows the pre-filled data
              before any money moves, giving the payer full control.
            </p>
            <p>
              However, as with any QR code, payers should <strong>always verify the
              pre-filled data</strong> before confirming. A manipulated QR code could in theory
              redirect a payment to a different IBAN. This type of attack is known as
              &ldquo;quishing&rdquo; (QR phishing). Banks and security experts therefore recommend
              always checking the recipient name and IBAN before confirming any scan-to-pay
              transfer.
            </p>
          </section>

          <section aria-labelledby="advantages-girocode" className="mt-10">
            <h2 id="advantages-girocode">Advantages of a GiroCode</h2>

            <h3>For invoice senders (businesses and freelancers)</h3>
            <p>
              Adding a GiroCode to your invoices offers measurable advantages in day-to-day
              business:
            </p>
            <ul>
              <li>
                <strong>Fewer payment errors:</strong> Customers no longer type IBAN or payment
                reference manually. Transposition errors, wrong amounts and missing references
                become rare exceptions rather than common problems.
              </li>
              <li>
                <strong>Faster incoming payments:</strong> Studies show that invoices with
                GiroCode are paid on average 2–4 days faster than those without, because the
                barrier to making the payment is drastically reduced.
              </li>
              <li>
                <strong>Easier reconciliation:</strong> When the payment reference is
                pre-filled correctly, matching incoming payments to invoices in your accounting
                software becomes automatic.
              </li>
              <li>
                <strong>Professional image:</strong> A GiroCode signals that you are
                tech-savvy, customer-focused and up to date with modern payment standards.
              </li>
              <li>
                <strong>No extra costs:</strong> Unlike PayPal or Stripe, there are no
                percentage fees for SEPA bank transfers. The GiroCode itself is free to generate.
              </li>
            </ul>

            <h3>For payers (customers)</h3>
            <ul>
              <li>
                <strong>Simple and fast:</strong> Scan once, review, confirm – payment takes
                under 30 seconds.
              </li>
              <li>
                <strong>Error-free:</strong> All data is pre-filled; no risk of typos.
              </li>
              <li>
                <strong>No app registration required:</strong> Any banking app that supports
                SEPA QR scanning works immediately, without any additional sign-up.
              </li>
              <li>
                <strong>Full control:</strong> The payer always sees exactly what is being
                transferred before confirming.
              </li>
              <li>
                <strong>Privacy-friendly:</strong> No third-party payment processor sees
                your transaction data.
              </li>
            </ul>

            <h3>GiroCode vs. manual IBAN entry</h3>
            <p>
              Manual IBAN entry is error-prone: a German IBAN has 22 characters, and even a
              single transposition means the payment either fails (if the IBAN is invalid) or –
              much worse – lands in the wrong account. Recovery of a misdirected payment can
              take weeks. A GiroCode eliminates this risk entirely by filling the IBAN
              automatically.
            </p>

            <h3>GiroCode vs. PayPal and other online payment methods</h3>
            <p>
              PayPal and similar services are widely used, but they come with significant
              drawbacks for B2B and freelance invoicing:
            </p>
            <ul>
              <li>PayPal charges fees of 1.5–3.5% per transaction</li>
              <li>PayPal and Stripe require the payer to have an account with the service</li>
              <li>Chargeback risk is much higher with PayPal than with SEPA bank transfers</li>
              <li>SEPA transfers are covered by your bank&apos;s deposit protection; PayPal balances are not</li>
              <li>GiroCode works with any bank in the SEPA zone – no additional infrastructure needed</li>
            </ul>
          </section>

          <section aria-labelledby="who-uses-girocode" className="mt-10">
            <h2 id="who-uses-girocode">Who Can Use GiroCodes?</h2>
            <p>
              In principle, anyone with a SEPA bank account can issue and receive payments via
              GiroCode. The standard is particularly valuable for the following groups:
            </p>

            <h3>Freelancers and self-employed professionals</h3>
            <p>
              For freelancers, consultants, designers, developers and other self-employed
              professionals, GiroCodes are a game-changer. You can generate a unique QR code for
              every invoice in seconds, embed it in your PDF and significantly reduce the time
              customers take to pay. Because you control the payment reference, incoming payments
              are easy to match to specific invoices in your accounting.
            </p>

            <h3>Small and medium businesses (SMEs)</h3>
            <p>
              SMEs that send high volumes of invoices benefit enormously from GiroCodes. Every
              incorrectly transferred payment requires time to investigate and correct. With
              GiroCodes, payment reference errors drop to near zero. Modern accounting software
              like <strong>sevDesk</strong> and <strong>FastBill</strong> can generate GiroCodes
              automatically as part of the invoicing workflow, making the process seamless.
            </p>

            <h3>Associations and non-profit organisations</h3>
            <p>
              Clubs and associations use GiroCodes on membership fee invoices, event tickets and
              donation requests. A QR code for annual dues with a pre-filled member number in the
              payment reference makes bookkeeping straightforward. Donation QR codes without a
              fixed amount allow donors to choose their own contribution.
            </p>

            <h3>Private individuals</h3>
            <p>
              Even private individuals can use GiroCodes for group purchases, shared expenses or
              informal payments. Many banking apps allow users to generate a personal payment QR
              code directly from their account details, making it easy to request money from
              friends and family without sharing IBAN details verbally.
            </p>
          </section>

          <section aria-labelledby="girocode-vs-payment-methods" className="mt-10">
            <h2 id="girocode-vs-payment-methods">GiroCode vs. Other Payment Methods</h2>
            <p>
              Here is a detailed comparison of GiroCode against the most common alternative
              payment methods:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 pr-4 text-left text-slate-300">Feature</th>
                    <th className="py-2 pr-4 text-left text-slate-300">GiroCode</th>
                    <th className="py-2 pr-4 text-left text-slate-300">PayPal</th>
                    <th className="py-2 pr-4 text-left text-slate-300">Stripe</th>
                    <th className="py-2 text-left text-slate-300">Direct Debit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-400">
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Transaction cost</td>
                    <td className="py-2 pr-4">Free (bank SEPA fee)</td>
                    <td className="py-2 pr-4">1.5–3.5% + fixed fee</td>
                    <td className="py-2 pr-4">1.5% + 0.25 € (SEPA)</td>
                    <td className="py-2">Free or low bank fee</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Account required</td>
                    <td className="py-2 pr-4">Bank account only</td>
                    <td className="py-2 pr-4">PayPal account</td>
                    <td className="py-2 pr-4">Card or bank account</td>
                    <td className="py-2">Bank account only</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Privacy</td>
                    <td className="py-2 pr-4">High – bank only</td>
                    <td className="py-2 pr-4">Low – PayPal sees all</td>
                    <td className="py-2 pr-4">Medium – Stripe sees all</td>
                    <td className="py-2">High – bank only</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Chargeback risk</td>
                    <td className="py-2 pr-4">Very low</td>
                    <td className="py-2 pr-4">High (buyer protection)</td>
                    <td className="py-2 pr-4">Medium</td>
                    <td className="py-2">Medium (8-week reversal)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Setup complexity</td>
                    <td className="py-2 pr-4">None</td>
                    <td className="py-2 pr-4">Low</td>
                    <td className="py-2 pr-4">Medium</td>
                    <td className="py-2">Requires SEPA mandate</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">SEPA availability</td>
                    <td className="py-2 pr-4">All 36 SEPA countries</td>
                    <td className="py-2 pr-4">200+ countries</td>
                    <td className="py-2 pr-4">40+ countries</td>
                    <td className="py-2">All 36 SEPA countries</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-slate-300">Payment initiation</td>
                    <td className="py-2 pr-4">Payer (push)</td>
                    <td className="py-2 pr-4">Payer (push)</td>
                    <td className="py-2 pr-4">Merchant (pull)</td>
                    <td className="py-2">Merchant (pull)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The comparison shows that GiroCode is the most cost-effective and privacy-friendly
              option for SEPA-zone transactions, particularly for B2B invoicing and service
              providers where low transaction costs matter.
            </p>
          </section>

          <section aria-labelledby="girocode-in-europe" className="mt-10">
            <h2 id="girocode-in-europe">GiroCode in Different European Countries</h2>
            <p>
              Although the EPC standard is the technical foundation for all SEPA QR payment codes,
              different countries have adopted their own branded variants with minor adaptations.
            </p>

            <h3>Germany – GiroCode</h3>
            <p>
              In Germany, the EPC QR standard was introduced under the name &ldquo;GiroCode&rdquo;
              by the Deutsche Kreditwirtschaft in 2018. It is now supported by all major German
              banks and savings banks. German banking apps typically feature a dedicated QR scanner
              within the transfer section. GiroCodes are widely used on invoices, payment slips and
              donation requests.
            </p>

            <h3>Austria – Stuzza QR</h3>
            <p>
              Austria uses the <strong>Stuzza QR code</strong>, developed by the Austrian payment
              standards body Stuzza GmbH. It is closely based on the EPC standard but has some
              Austrian-specific extensions, particularly around the payment reference format.
              Austrian banking apps from banks like Bank Austria, Erste Bank and Raiffeisen support
              the Stuzza QR format. German GiroCodes are often readable by Austrian apps as well,
              due to the high compatibility between the two standards.
            </p>

            <h3>Belgium</h3>
            <p>
              Belgium was among the early adopters of the EPC QR standard. The Belgian banking
              association Febelfin has promoted QR code-based payments since 2018. Belgian banking
              apps like KBC, ING Belgium and BNP Paribas Fortis support EPC QR scanning. Belgian
              invoicing software typically includes EPC QR code generation as a standard feature.
            </p>

            <h3>Switzerland – QR-Bill</h3>
            <p>
              Switzerland introduced the <strong>Swiss QR-Bill</strong> in 2020 as a replacement
              for the legacy orange and red payment slips. The Swiss QR code uses the same ISO
              20022 data standard but is specifically designed for the Swiss payment system (IBAN
              format CH...). It includes the Swiss QR Reference (QRR) number, which is not part
              of the EPC standard. Swiss banking apps (PostFinance, UBS, Credit Suisse, Raiffeisen
              Switzerland) support QR-Bill scanning. Note that Swiss QR-Bills are not directly
              compatible with German GiroCodes due to the different underlying formats.
            </p>

            <h3>Similarities and differences</h3>
            <p>
              All these formats share the same basic concept: a QR code that encodes payment data
              for automatic transfer form pre-filling. The key differences lie in the specific
              fields supported, the reference number format and the banking infrastructure. For
              cross-border SEPA payments within the EU/EEA, the EPC standard (GiroCode) is the
              most broadly compatible option.
            </p>
          </section>

          <section aria-labelledby="faq-girocode" className="mt-10">
            <h2 id="faq-girocode">Frequently Asked Questions (FAQ)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Is a GiroCode only usable in Germany?
                </h3>
                <p className="text-sm text-slate-300">
                  No. The GiroCode is based on the EPC SEPA QR standard, which is used
                  throughout the 36-country SEPA zone. While the GiroCode brand name is specific
                  to Germany, the underlying format is internationally recognised. Many banking
                  apps in Austria, Belgium, the Netherlands and other SEPA countries can scan and
                  process GiroCodes. However, app support varies by country and bank.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Can I create a GiroCode without specifying an amount?
                </h3>
                <p className="text-sm text-slate-300">
                  Yes. The amount field is optional. If you leave it empty, the transfer form
                  will have an empty amount field and the payer can enter their own amount. This
                  is ideal for donation requests, open contributions or situations where the
                  final amount is determined by the payer (e.g. &ldquo;pay what you want&rdquo;).
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Which fields are mandatory in a GiroCode?
                </h3>
                <p className="text-sm text-slate-300">
                  The minimum required fields are the recipient name and the recipient IBAN.
                  BIC, amount and payment reference are all optional. However, for invoicing
                  purposes, including both the amount and a clear payment reference (e.g. the
                  invoice number) is strongly recommended to ensure correct payment matching.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Is it free to create and use GiroCodes?
                </h3>
                <p className="text-sm text-slate-300">
                  Creating a GiroCode with our generator is completely free. The SEPA bank
                  transfer itself may incur your bank&apos;s standard transfer fee, but many
                  banks offer free SEPA transfers for private and business accounts. There are no
                  per-transaction fees for GiroCode itself.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  How large should a GiroCode be on a printed invoice?
                </h3>
                <p className="text-sm text-slate-300">
                  The recommended minimum size for a printed GiroCode is <strong>2 × 2 cm</strong>.
                  For best scan reliability, 3 × 3 cm or larger is preferred. The code should be
                  printed at high resolution (at least 300 DPI) and have sufficient white space
                  (quiet zone) around all four sides. Our generator creates high-resolution QR
                  codes suitable for both digital and print use.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Does a GiroCode work on digital invoices too?
                </h3>
                <p className="text-sm text-slate-300">
                  Yes. Digital invoices in PDF format can also include a GiroCode. The recipient
                  can scan the QR code directly from their screen or phone. Many banking apps
                  support scanning from a second device or from a screen. Our PDF generator
                  embeds a high-resolution GiroCode in the invoice PDF that can be scanned from
                  both print and screen.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  What is the difference between a GiroCode and a BezahlCode?
                </h3>
                <p className="text-sm text-slate-300">
                  The GiroCode follows the EPC SEPA QR standard and is designed specifically for
                  SEPA credit transfers. The BezahlCode is an older German format that can encode
                  multiple payment types (transfers, direct debits, contact data). Today, GiroCode
                  is the dominant standard for invoice payments in Germany, as it is supported by
                  far more banking apps.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Can I include a GiroCode in emails?
                </h3>
                <p className="text-sm text-slate-300">
                  Yes. You can include a GiroCode image in email invoices or payment requests.
                  The recipient can scan the code from their screen. Alternatively, many
                  businesses attach the invoice PDF (with embedded GiroCode) to the email. For
                  best results, ensure the QR code image is large enough (at least 200 × 200
                  pixels in digital formats) to be easily scanned.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="professional-tools" className="mt-10">
            <h2 id="professional-tools">Professional Tools for GiroCode Users</h2>
            <p>
              If you regularly issue invoices with GiroCodes, dedicated accounting and invoicing
              software can automate the entire process – from invoice creation to GiroCode
              generation to payment matching.
            </p>

            <h3>sevDesk – Accounting Software with GiroCode Support</h3>
            <p>
              <strong>sevDesk</strong> is a cloud-based accounting platform designed for
              freelancers, self-employed professionals and small businesses in German-speaking
              countries. It offers native support for GiroCode generation: every invoice you
              create can automatically include a GiroCode in the PDF, pre-filled with your
              bank details, the invoice amount and the invoice number as payment reference.
            </p>
            <p>
              Key features: online invoicing, offer and delivery note creation, automatic dunning,
              tax reporting, bank account integration, DATEV export, digital receipt management
              and annual financial statements. sevDesk is fully compliant with GoBD (German
              accounting standards) and connects to all major German banks via open banking.
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

            <h3>FastBill – Easy Invoicing with Automatic GiroCode</h3>
            <p>
              <strong>FastBill</strong> is an intuitive invoicing and accounting solution
              particularly popular with freelancers and service providers. It allows you to
              create professional invoices in minutes, with automatic GiroCode integration.
              Invoices sent via FastBill include a pre-filled QR code, and incoming payments
              can be tracked and matched automatically.
            </p>
            <p>
              Key features: invoice and offer creation, expense tracking, bank account sync,
              tax reports, revenue overview, payment reminders and integrations with DATEV,
              Lexware and other accounting systems. FastBill is a great choice for anyone who
              wants a simple, affordable solution without unnecessary complexity.
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
                    href="/en/wissen/epc-standard"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    EPC Standard &amp; SEPA-QR – Technical Structure Explained
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
