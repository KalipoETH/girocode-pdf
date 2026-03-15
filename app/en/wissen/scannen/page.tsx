import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Scan a GiroCode – Complete Guide for iPhone & Android',
  description:
    'Scan a GiroCode with your banking app: step-by-step guide for iPhone and Android, troubleshooting and security tips.',
};

export default function WissenScannenPageEn() {
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
            <li className="text-slate-400">How to Scan a GiroCode</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Guide · Scanning GiroCodes
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              How to Scan a GiroCode – Complete Guide for iPhone &amp; Android
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Scanning a GiroCode with your banking app takes less than 30 seconds and eliminates
              the most common cause of payment errors: manual data entry. This guide covers
              everything from the basic scanning process to iPhone- and Android-specific
              instructions, troubleshooting, quality requirements and security tips.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">

          <section aria-labelledby="scanning-how-it-works">
            <h2 id="scanning-how-it-works">Scanning a GiroCode – How It Works</h2>
            <p>
              A GiroCode is a QR code that encodes SEPA payment data in a standardised
              text format (EPC payload). When you point your banking app&apos;s camera at
              the code, the app reads the encoded data and automatically fills in the
              transfer form. This eliminates the need to type IBAN, amount and payment
              reference manually.
            </p>
            <p>
              The scanning process is simple and takes less than 30 seconds from start to
              payment confirmation:
            </p>
            <ol>
              <li>Open your banking app and navigate to &ldquo;New Transfer&rdquo;</li>
              <li>Tap the QR code / camera icon</li>
              <li>Point the camera at the GiroCode</li>
              <li>Wait for automatic recognition (usually under 1 second)</li>
              <li>Review the pre-filled data</li>
              <li>Confirm with your TAN or biometrics</li>
            </ol>
            <p>
              The banking app decodes the EPC payload and extracts the following fields:
              recipient name, IBAN, BIC (if present), transfer amount (if pre-specified) and
              payment reference. Each field is placed into the corresponding field in the
              transfer form. Fields that were not specified in the QR code (e.g. amount, if
              left open) remain empty for the payer to fill in.
            </p>
            <p>
              After scanning, you are in full control: you see exactly what will be transferred
              before you confirm anything. The transfer is only initiated after you explicitly
              confirm it with your bank&apos;s authentication method. At no point does the
              scanning process itself move any money – that only happens after your explicit
              TAN confirmation.
            </p>
          </section>

          <section aria-labelledby="scanning-iphone" className="mt-10">
            <h2 id="scanning-iphone">Scanning on iPhone (iOS) – Step by Step</h2>
            <p>
              iPhone banking apps on iOS all follow Apple&apos;s camera and permissions model.
              Here is the detailed process:
            </p>

            <h3>Prerequisites</h3>
            <ul>
              <li>iPhone with iOS 14 or later (iOS 16+ recommended for best camera performance)</li>
              <li>Your banking app installed and up to date (check App Store for updates)</li>
              <li>Camera permission granted for your banking app (Settings → Privacy → Camera)</li>
              <li>Good lighting and a clear view of the GiroCode</li>
            </ul>

            <h3>Step-by-step instructions</h3>
            <ol>
              <li>
                <strong>Unlock your iPhone</strong> and open your banking app (e.g. Sparkasse,
                ING, DKB, VR-Banking, Deutsche Bank, Commerzbank).
              </li>
              <li>
                <strong>Log in</strong> using Face ID, Touch ID or your PIN.
              </li>
              <li>
                <strong>Navigate to transfers:</strong> Find the &ldquo;Transfer&rdquo;,
                &ldquo;Pay&rdquo; or &ldquo;Überweisung&rdquo; function. In most apps this
                is on the home screen or accessible via the bottom navigation bar.
              </li>
              <li>
                <strong>Tap &ldquo;New Transfer&rdquo;:</strong> This opens the transfer
                form with fields for recipient, IBAN, amount and reference.
              </li>
              <li>
                <strong>Find the QR scanner:</strong> Look for a small QR code icon or
                camera symbol. This is typically located at the right end of the IBAN field,
                in the top-right corner of the form, or as a dedicated &ldquo;Scan QR
                code&rdquo; button. If you cannot find it, check the app&apos;s help section
                or FAQ.
              </li>
              <li>
                <strong>Allow camera access:</strong> If this is your first time using the
                QR scanner, iOS will ask for permission to access your camera. Tap
                &ldquo;Allow&rdquo; to grant permission. This is a one-time permission that
                is remembered for future scans.
              </li>
              <li>
                <strong>Scan the GiroCode:</strong> Hold your iPhone steady, 15–30 cm from
                the printed invoice or screen. Point the camera directly at the GiroCode,
                making sure the entire code is visible within the camera frame. The app
                will automatically focus and scan the code – you do not need to tap anything.
              </li>
              <li>
                <strong>Wait for recognition:</strong> On modern iPhones with high-performance
                cameras, recognition happens in under 1 second. A brief animation or sound
                confirms successful scanning.
              </li>
              <li>
                <strong>Review pre-filled data:</strong> The transfer form is now filled with
                the scanned data. Carefully check each field: recipient name, IBAN (at minimum
                the country code and first few digits), amount and payment reference.
              </li>
              <li>
                <strong>Confirm with Face ID or Touch ID:</strong> Tap &ldquo;Next&rdquo; and
                confirm with your authentication method. Some banking apps also require an
                additional TAN (pushTAN or SMS-TAN) for transfers above a certain amount.
              </li>
              <li>
                <strong>Done:</strong> The transfer is submitted. You receive a confirmation
                notification from your banking app.
              </li>
            </ol>

            <h3>iOS-specific tips</h3>
            <ul>
              <li>
                <strong>Struggling to scan?</strong> Try tapping the QR code area on screen
                to help the camera focus. iPhones with older cameras (iPhone 8 and earlier)
                may need to be held at a slightly greater distance.
              </li>
              <li>
                <strong>iOS native camera app:</strong> The iOS built-in camera can read QR
                codes, but it cannot initiate bank transfers. It will show the decoded EPC
                text as a notification, which you can then copy. This is not a substitute for
                banking app integration – use the QR scanner in your banking app.
              </li>
              <li>
                <strong>ProMotion displays (iPhone 13 Pro and later):</strong> The 120Hz
                ProMotion display makes banking apps feel smoother, and the advanced camera
                systems on Pro models scan QR codes extremely quickly, even at angles.
              </li>
            </ul>
          </section>

          <section aria-labelledby="scanning-android" className="mt-10">
            <h2 id="scanning-android">Scanning on Android – Step by Step</h2>
            <p>
              Android offers slightly more variation between devices and banking apps, but the
              general process is very similar to iOS.
            </p>

            <h3>Prerequisites</h3>
            <ul>
              <li>Android smartphone with Android 8.0 or later</li>
              <li>Banking app updated to the latest version (check Google Play Store)</li>
              <li>Camera permission granted for the banking app (Settings → Apps → [Banking App] → Permissions → Camera)</li>
              <li>QR code within the Android device&apos;s camera resolution capabilities</li>
            </ul>

            <h3>Step-by-step instructions</h3>
            <ol>
              <li>
                <strong>Open your banking app:</strong> Authenticate with fingerprint, face
                unlock or PIN.
              </li>
              <li>
                <strong>Go to &ldquo;Transfer&rdquo;:</strong> Most banking apps have a
                &ldquo;Transfer&rdquo; or &ldquo;Pay&rdquo; shortcut on the home screen.
              </li>
              <li>
                <strong>Start a new transfer</strong> and find the QR code scanner icon.
                On Android, this is often a camera icon within the IBAN input field or a
                floating action button labelled &ldquo;QR-Code scannen&rdquo;.
              </li>
              <li>
                <strong>Grant camera permission</strong> if prompted by the Android system
                dialog. Select &ldquo;Allow only while using the app&rdquo; for best security.
              </li>
              <li>
                <strong>Hold your Android device steady,</strong> approximately 15–25 cm from
                the GiroCode. Most Android camera modules have excellent autofocus that handles
                QR code scanning automatically.
              </li>
              <li>
                <strong>The app scans automatically</strong> when the QR code comes into focus.
                Some Android banking apps may require you to tap a scan button.
              </li>
              <li>
                <strong>Review and confirm:</strong> Check all pre-filled fields, then confirm
                with your TAN (typically pushTAN via the same app, or a separate TAN app on
                Android).
              </li>
            </ol>

            <h3>Android-specific tips</h3>
            <ul>
              <li>
                <strong>Google Lens integration:</strong> Android 9+ includes Google Lens
                which can decode QR codes from any context, including banking. However, Google
                Lens cannot initiate bank transfers directly – it shows the decoded text which
                you would need to copy manually. Use the in-app scanner instead.
              </li>
              <li>
                <strong>Low-end Android cameras:</strong> Budget Android smartphones with
                lower-resolution cameras may struggle with smaller QR codes (under 2 × 2 cm).
                If scanning fails, try moving closer or to better lighting.
              </li>
              <li>
                <strong>Android QR code scanning from notification shade:</strong> Some Android
                manufacturers (Samsung, Huawei, OnePlus) include a QR code scanner in the
                quick settings panel. This can read GiroCodes, but again cannot initiate
                transfers directly.
              </li>
            </ul>
          </section>

          <section aria-labelledby="troubleshooting" className="mt-10">
            <h2 id="troubleshooting">Troubleshooting – Common Problems and Solutions</h2>

            <h3>Problem: App does not recognise the QR code</h3>
            <p>
              <strong>Possible causes and solutions:</strong>
            </p>
            <ul>
              <li><strong>Poor lighting:</strong> Increase ambient light or use your phone&apos;s flashlight (some banking apps activate the torch automatically)</li>
              <li><strong>QR code too small:</strong> Move closer to the code; ensure the code is at least 2 × 2 cm printed or 200px digital</li>
              <li><strong>Camera dirty:</strong> Clean the camera lens with a soft cloth</li>
              <li><strong>Shaky hands:</strong> Rest your phone on a surface or support your arm to keep the camera steady</li>
              <li><strong>QR code damaged:</strong> If the code is printed with smudges or tears, the error correction (level M = 15%) may be exceeded</li>
              <li><strong>Background interference:</strong> Ensure there are no other QR codes or complex patterns immediately adjacent to the GiroCode</li>
            </ul>

            <h3>Problem: App says &ldquo;Invalid QR code&rdquo;</h3>
            <p>
              This error means the app scanned something but it does not match the EPC format.
              Possible causes:
            </p>
            <ul>
              <li>The QR code is not a GiroCode/EPC code (e.g. it is a URL or contact QR code)</li>
              <li>The QR code was generated with invalid data (wrong IBAN format, invalid amount format)</li>
              <li>The EPC payload has been corrupted (very rare with proper generation)</li>
            </ul>
            <p>
              Solution: Verify that the QR code was generated correctly. Use our free GiroCode
              Generator to create a new one.
            </p>

            <h3>Problem: Pre-filled data looks wrong</h3>
            <p>
              If the pre-filled data (IBAN, amount, recipient) does not match your expectations:
            </p>
            <ul>
              <li>Do not confirm the transfer</li>
              <li>Contact the invoice sender to verify the correct payment details</li>
              <li>Consider whether the QR code may have been tampered with (quishing attack)</li>
            </ul>

            <h3>Problem: Amount field remains empty after scanning</h3>
            <p>
              This is not an error – it means the invoice sender deliberately left the amount
              open, so you can enter it yourself. This is valid and common for donations or
              variable-price payments.
            </p>

            <h3>Problem: Banking app crashes or freezes during scanning</h3>
            <p>
              Try: force-close the app, restart it and try scanning again. If the problem
              persists, check for app updates, clear the app cache (Android), or reinstall
              the app. Contact your bank&apos;s support if the issue continues.
            </p>
          </section>

          <section aria-labelledby="quality-requirements" className="mt-10">
            <h2 id="quality-requirements">Quality Requirements for Scannable GiroCodes</h2>
            <p>
              For a GiroCode to be reliably scanned by all banking apps, it must meet certain
              quality requirements. These apply to both the generation and the printing/display
              of the code.
            </p>

            <h3>Print quality requirements</h3>
            <ul>
              <li><strong>Resolution:</strong> Minimum 300 DPI; 600 DPI recommended for small codes</li>
              <li><strong>Colour contrast:</strong> Black modules on white background; no grey, coloured or transparent backgrounds</li>
              <li><strong>Quiet zone:</strong> White border of at least 4 modules on all four sides (~3–4 mm at 2 cm size)</li>
              <li><strong>Size:</strong> Minimum 2 × 2 cm; recommended 3 × 3 cm</li>
              <li><strong>Undistorted:</strong> No stretching, rotation or skewing of the QR code image</li>
              <li><strong>Sharp edges:</strong> Avoid blurry or anti-aliased QR code images in print</li>
            </ul>

            <h3>Digital display requirements</h3>
            <ul>
              <li><strong>Resolution:</strong> Minimum 200 × 200 pixels; 400 × 400 recommended</li>
              <li><strong>Display size:</strong> At least 3 × 3 cm when rendered on screen at standard viewing distance</li>
              <li><strong>PNG or SVG format:</strong> Avoid JPEG for QR codes (JPEG compression creates artefacts that interfere with scanning)</li>
              <li><strong>No overlay elements:</strong> Do not place logos or text over the QR code modules (only in the quiet zone)</li>
            </ul>

            <h3>Error correction level</h3>
            <p>
              GiroCodes use error correction level M, which allows up to 15% of the code to
              be damaged or obscured while remaining readable. This means a slightly smudged
              print, minor corner damage or a screen reflection covering part of the code
              will usually not prevent successful scanning. However, if more than 15% is
              obscured, the code becomes unreadable and must be regenerated or rescanned
              from an undamaged copy.
            </p>
          </section>

          <section aria-labelledby="scanning-digital" className="mt-10">
            <h2 id="scanning-digital">Scanning GiroCodes Digitally (from a Screen)</h2>
            <p>
              Scanning a GiroCode from a digital source (computer screen, tablet, second
              phone screen) works just as well as scanning a printed code, with a few
              practical considerations.
            </p>

            <h3>From a computer screen</h3>
            <p>
              If your invoice is open in a PDF viewer or web browser on your computer screen,
              hold your phone at a comfortable reading distance (30–50 cm) and use your banking
              app&apos;s QR scanner to scan the code from the screen. The code must be large
              enough on the display to be scanned comfortably – increase the zoom level in your
              PDF viewer if needed.
            </p>
            <p>
              <strong>Tip:</strong> On macOS and Windows, you can usually zoom into a PDF
              with Ctrl/Cmd + scroll wheel. Aim for the GiroCode to appear at least 5–6 cm
              on screen for easiest scanning.
            </p>

            <h3>From a tablet</h3>
            <p>
              Tablets have larger displays, making it easy to show the invoice at a size that
              is comfortable to scan. Simply open the invoice PDF on the tablet and scan from
              your phone as described above. This is a common workflow for businesses that send
              invoices digitally and for clients who prefer to review invoices on a tablet.
            </p>

            <h3>From another phone screen</h3>
            <p>
              If someone sends you an invoice on your phone (e.g. via email or messaging app),
              you need to use a second device to scan the GiroCode – or switch between apps.
              Some banking apps support scanning from the device&apos;s own screen via a second
              camera (front camera), but this varies by app. The most reliable method is to
              use a second device.
            </p>
            <p>
              Alternatively, some banking apps allow you to share or open the invoice PDF
              directly in the banking app, which can then detect and process the embedded
              GiroCode without a camera scan.
            </p>

            <h3>From a PDF attachment in email</h3>
            <p>
              On iPhone, you can open a PDF invoice in the Files app or Mail app and then switch
              to your banking app to scan the GiroCode – but you will need to hold the two apps
              side-by-side on an iPad, or use a second device. Alternatively, print the PDF and
              scan the printed code.
            </p>
          </section>

          <section aria-labelledby="security-tips-scanning" className="mt-10">
            <h2 id="security-tips-scanning">Security Tips When Scanning</h2>
            <p>
              Scanning a GiroCode is safe and secure when used correctly. Follow these tips
              to ensure your payments are always going to the right recipient:
            </p>
            <ul>
              <li>
                <strong>Always check the recipient name and IBAN</strong> after scanning,
                before confirming the transfer. The first 8–12 characters of the IBAN
                identify the country and bank – do they match what you expect?
              </li>
              <li>
                <strong>Match the amount</strong> to the invoice total. If the pre-filled
                amount differs from the invoice total, investigate before paying.
              </li>
              <li>
                <strong>Verify the payment reference</strong> contains your correct invoice
                or order number.
              </li>
              <li>
                <strong>Do not scan QR codes from unknown or unsolicited senders</strong>
                – particularly from unsolicited postal mail, emails from unknown addresses
                or unfamiliar websites.
              </li>
              <li>
                <strong>Check the QR code for tampering</strong> – physical stickers placed
                over the original QR code are a red flag. If the QR code looks like it has
                been stuck on rather than printed, do not scan it.
              </li>
              <li>
                <strong>Keep your banking app updated</strong> – security patches and
                improvements to QR code scanning are regularly included in app updates.
              </li>
              <li>
                <strong>Use your bank&apos;s official app only</strong> – do not use
                third-party QR scanner apps to initiate bank transfers. Only your bank&apos;s
                official app should handle payment initiation.
              </li>
              <li>
                <strong>Enable transaction notifications</strong> in your banking app so
                you immediately see when a transfer has been made from your account.
              </li>
            </ul>
          </section>

          <section aria-labelledby="professional-bulk" className="mt-10">
            <h2 id="professional-bulk">Professional Solutions for Bulk GiroCodes</h2>
            <p>
              For businesses that generate GiroCodes at scale – creating hundreds or thousands
              of invoices per month – manual QR code creation is not practical. Professional
              accounting and invoicing software automates the entire workflow.
            </p>

            <h3>sevDesk – Automatic GiroCode in Invoices</h3>
            <p>
              <strong>sevDesk</strong> generates a GiroCode for every invoice automatically.
              As soon as you create and send an invoice, the GiroCode is embedded in the PDF –
              with the correct IBAN, amount and invoice reference, every time. No manual QR
              code generation is needed. For businesses sending 50–1,000+ invoices per month,
              this automation saves significant time and eliminates the risk of QR code errors.
            </p>
            <p>
              sevDesk&apos;s open banking integration means that when your clients scan the
              GiroCode and pay, the incoming transfer is automatically matched to the
              corresponding invoice in your accounting system – keeping your books up to date
              in real time.
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

            <h3>FastBill – Easy Invoicing with QR Code</h3>
            <p>
              <strong>FastBill</strong> is a streamlined invoicing solution that includes
              automatic GiroCode generation. Every invoice created in FastBill automatically
              includes a GiroCode in the PDF output. FastBill is designed for freelancers and
              small service providers who want professional invoicing without accounting
              complexity. The integrated payment tracking dashboard shows you which invoices
              have been paid (including those paid via GiroCode scan) and which are outstanding.
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

          <section aria-labelledby="faq-scanning" className="mt-10">
            <h2 id="faq-scanning">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Can I scan a GiroCode without a banking app?
                </h3>
                <p className="text-sm text-slate-300">
                  You can decode the QR code with any QR scanner, but you cannot initiate a
                  bank transfer without a banking app. The decoded EPC text shows the payment
                  details, which you can then manually enter in your banking app or online
                  banking portal. For the best experience, use your banking app&apos;s integrated
                  QR scanner.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Is scanning a GiroCode safe?
                </h3>
                <p className="text-sm text-slate-300">
                  Yes, scanning a GiroCode is safe. The QR code only transfers data to your
                  banking app – it does not initiate any payment on its own. A transfer is
                  only made after you explicitly review the pre-filled data and confirm with
                  your TAN or biometrics. Always verify the recipient name and IBAN before
                  confirming.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Why does the amount field stay empty after scanning?
                </h3>
                <p className="text-sm text-slate-300">
                  The GiroCode was created without a pre-specified amount (the amount field
                  in the EPC payload is optional). This is intentional for donations, open
                  contributions or variable-price payments. You need to enter the amount
                  yourself based on the invoice total before confirming the transfer.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  My banking app says the QR code is invalid. What should I do?
                </h3>
                <p className="text-sm text-slate-300">
                  First, check that you are trying to scan an actual GiroCode (EPC QR code),
                  not a different type of QR code. If it is supposed to be a GiroCode, ask
                  the invoice sender to verify and resend the code. You can also use our free
                  GiroCode Generator to generate a new, valid GiroCode.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Can I scan GiroCodes with the native iOS camera app?
                </h3>
                <p className="text-sm text-slate-300">
                  The iOS native camera app can read QR codes and will display the decoded text.
                  However, it cannot initiate bank transfers. You must use your banking app&apos;s
                  integrated QR scanner to initiate a transfer from a GiroCode.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Does scanning a GiroCode work from a PDF on screen?
                </h3>
                <p className="text-sm text-slate-300">
                  Yes. Open the PDF invoice on a computer or tablet screen, zoom in on the
                  GiroCode so it is at least 5 cm in size, and scan it with your banking app
                  on your phone. Make sure the screen brightness is high and there are no
                  screen reflections obscuring the code.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  What happens if I confirm a payment with the wrong data?
                </h3>
                <p className="text-sm text-slate-300">
                  Contact your bank immediately. SEPA transfers can sometimes be recalled if
                  reported quickly (ideally within the same business day). There is no guarantee
                  of recovery, especially for SEPA Instant transfers. This is why it is
                  essential to verify all pre-filled data before confirming.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50">
                  Can both the payer and the recipient use GiroCodes?
                </h3>
                <p className="text-sm text-slate-300">
                  GiroCodes are used by the recipient (invoice sender) to make payments easy
                  for payers. The recipient creates and embeds the GiroCode in their invoice.
                  The payer scans it to initiate the transfer. Both parties benefit: the
                  payer saves time, the recipient gets faster and more accurate payments.
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
                    href="/en/wissen/banking-apps"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Banking Apps Supporting GiroCode – Complete Overview
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
                    EPC Standard &amp; SEPA-QR – Technical Structure
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
              </ul>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
