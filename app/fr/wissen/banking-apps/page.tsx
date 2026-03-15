import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Applications bancaires compatibles GiroCode – Vue d'ensemble 2025",
  description:
    "Quelles applications bancaires supportent les GiroCodes ? Sparkasse, ING, DKB, Volksbank et plus – vue d'ensemble complète.",
};

export default function WissenBankingAppsPageFr() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <nav aria-label="Fil d'Ariane" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/fr" className="text-sky-400 hover:text-sky-300">
                Accueil
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link href="/fr/wissen" className="text-sky-400 hover:text-sky-300">
                Informations
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">Applications bancaires compatibles</li>
          </ol>
        </nav>

        <header className="mb-8 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Vue d&apos;ensemble · Apps bancaires
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Applications bancaires compatibles GiroCode – Vue d&apos;ensemble 2025
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              Quelle application bancaire peut scanner un GiroCode ? Ce guide dresse un tableau
              complet de la compatibilité des principales applications bancaires allemandes et
              européennes avec le format SEPA-QR (EPC), et vous montre comment l&apos;utiliser
              efficacement.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">

          {/* ── Section 1 ── */}
          <section aria-labelledby="vue-ensemble-fr">
            <h2 id="vue-ensemble-fr">Quelles applications bancaires supportent les GiroCodes ?</h2>
            <p>
              Bonne nouvelle : la grande majorité des applications bancaires modernes dans la zone
              SEPA supportent le scan de GiroCodes (codes QR SEPA au format EPC). En Allemagne en
              particulier, la couverture est quasi universelle parmi les grandes banques de détail.
              Voici un tableau détaillé des principales applications :
            </p>

            <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-800/60">
                    <th className="px-4 py-3 text-left font-semibold text-slate-200">Application / Banque</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-200">Pays</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-200">Support GiroCode</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-200">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-xs">
                  <tr className="bg-slate-900/30">
                    <td className="px-4 py-3 font-medium text-slate-200">Sparkasse App</td>
                    <td className="px-4 py-3 text-slate-400">DE</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">Via « Überweisung » → QR-Scanner</td>
                  </tr>
                  <tr className="bg-slate-900/10">
                    <td className="px-4 py-3 font-medium text-slate-200">VR-Banking (Volksbank)</td>
                    <td className="px-4 py-3 text-slate-400">DE</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">Scanner QR intégré dans le menu Virement</td>
                  </tr>
                  <tr className="bg-slate-900/30">
                    <td className="px-4 py-3 font-medium text-slate-200">ING Banking</td>
                    <td className="px-4 py-3 text-slate-400">DE/FR/BE</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">Bouton scan dans l&apos;écran virement</td>
                  </tr>
                  <tr className="bg-slate-900/10">
                    <td className="px-4 py-3 font-medium text-slate-200">DKB Banking</td>
                    <td className="px-4 py-3 text-slate-400">DE</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">Depuis l&apos;app DKB</td>
                  </tr>
                  <tr className="bg-slate-900/30">
                    <td className="px-4 py-3 font-medium text-slate-200">Deutsche Bank Mobile</td>
                    <td className="px-4 py-3 text-slate-400">DE</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">PhotoTAN + GiroCode supportés</td>
                  </tr>
                  <tr className="bg-slate-900/10">
                    <td className="px-4 py-3 font-medium text-slate-200">Commerzbank</td>
                    <td className="px-4 py-3 text-slate-400">DE</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">Via « Überweisung » → QR</td>
                  </tr>
                  <tr className="bg-slate-900/30">
                    <td className="px-4 py-3 font-medium text-slate-200">N26</td>
                    <td className="px-4 py-3 text-slate-400">DE/EU</td>
                    <td className="px-4 py-3 text-yellow-400">⚠️ Partiel</td>
                    <td className="px-4 py-3 text-slate-400">Support limité selon la version</td>
                  </tr>
                  <tr className="bg-slate-900/10">
                    <td className="px-4 py-3 font-medium text-slate-200">Revolut</td>
                    <td className="px-4 py-3 text-slate-400">EU</td>
                    <td className="px-4 py-3 text-yellow-400">⚠️ Partiel</td>
                    <td className="px-4 py-3 text-slate-400">QR SEPA possible mais pas toujours fiable</td>
                  </tr>
                  <tr className="bg-slate-900/30">
                    <td className="px-4 py-3 font-medium text-slate-200">Postbank</td>
                    <td className="px-4 py-3 text-slate-400">DE</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">Filiale du groupe Deutsche Bank</td>
                  </tr>
                  <tr className="bg-slate-900/10">
                    <td className="px-4 py-3 font-medium text-slate-200">Comdirect</td>
                    <td className="px-4 py-3 text-slate-400">DE</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">Filiale de Commerzbank</td>
                  </tr>
                  <tr className="bg-slate-900/30">
                    <td className="px-4 py-3 font-medium text-slate-200">BNP Paribas (FR)</td>
                    <td className="px-4 py-3 text-slate-400">FR</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">Via l&apos;app Mon BNP</td>
                  </tr>
                  <tr className="bg-slate-900/10">
                    <td className="px-4 py-3 font-medium text-slate-200">Crédit Agricole (FR)</td>
                    <td className="px-4 py-3 text-slate-400">FR</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">App Ma Banque</td>
                  </tr>
                  <tr className="bg-slate-900/30">
                    <td className="px-4 py-3 font-medium text-slate-200">Société Générale (FR)</td>
                    <td className="px-4 py-3 text-slate-400">FR</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">Via l&apos;app SG</td>
                  </tr>
                  <tr className="bg-slate-900/10">
                    <td className="px-4 py-3 font-medium text-slate-200">Banque Postale (FR)</td>
                    <td className="px-4 py-3 text-slate-400">FR</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">App La Banque Postale</td>
                  </tr>
                  <tr className="bg-slate-900/30">
                    <td className="px-4 py-3 font-medium text-slate-200">Raiffeisen (AT)</td>
                    <td className="px-4 py-3 text-slate-400">AT</td>
                    <td className="px-4 py-3 text-emerald-400">✅ Complet</td>
                    <td className="px-4 py-3 text-slate-400">Stuzza-QR supporté</td>
                  </tr>
                  <tr className="bg-slate-900/10">
                    <td className="px-4 py-3 font-medium text-slate-200">Wise (TransferWise)</td>
                    <td className="px-4 py-3 text-slate-400">EU</td>
                    <td className="px-4 py-3 text-red-400">❌ Non supporté</td>
                    <td className="px-4 py-3 text-slate-400">Pas de scanner QR SEPA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-slate-400">
              ✅ = Supporté pleinement · ⚠️ = Support partiel ou limité · ❌ = Non supporté.
              Dernière mise à jour : mars 2025. Les fonctionnalités peuvent évoluer avec les mises
              à jour des applications.
            </p>
          </section>

          {/* ── Section 2 ── */}
          <section aria-labelledby="guide-general-fr" className="mt-10">
            <h2 id="guide-general-fr">Étape par étape : scanner un GiroCode</h2>
            <p>
              Même si le processus varie légèrement d&apos;une application à l&apos;autre, le
              déroulement général est le suivant :
            </p>
            <ol>
              <li>
                <strong>Ouvrez votre application bancaire</strong> et connectez-vous si nécessaire.
              </li>
              <li>
                <strong>Accédez à la section « Virement » ou « Paiement ».</strong> Dans la
                plupart des applications, cette section se trouve dans le menu principal ou sur
                l&apos;écran d&apos;accueil de votre compte.
              </li>
              <li>
                <strong>Cherchez l&apos;icône de scanner QR</strong> – elle ressemble généralement
                à un petit carré avec des lignes, ou à une caméra. Elle peut se trouver à côté du
                champ IBAN ou dans le menu de l&apos;écran de virement.
              </li>
              <li>
                <strong>Autorisez l&apos;accès à la caméra</strong> si l&apos;application vous le
                demande (lors de la première utilisation).
              </li>
              <li>
                <strong>Pointez votre caméra vers le GiroCode</strong> sur la facture imprimée ou
                l&apos;écran. Maintenez le téléphone stable et assurez-vous que le code est bien
                éclairé et dans le cadre de la caméra.
              </li>
              <li>
                <strong>Vérifiez les données pré-remplies :</strong> Contrôlez le nom du
                bénéficiaire, l&apos;IBAN, le montant et la référence de paiement. Si quelque
                chose semble incorrect, n&apos;effectuez pas le paiement et contactez l&apos;émetteur.
              </li>
              <li>
                <strong>Confirmez le virement</strong> avec votre méthode d&apos;authentification
                habituelle (PIN, empreinte digitale, Face ID, ou TAN si requis).
              </li>
            </ol>
          </section>

          {/* ── Section 3 : Sparkasse ── */}
          <section aria-labelledby="sparkasse-fr" className="mt-10">
            <h2 id="sparkasse-fr">Scanner avec Sparkasse App</h2>
            <p>
              La Sparkasse est la plus grande banque de détail en Allemagne avec plus de 50 millions
              de clients. Son application mobile est l&apos;une des premières à avoir intégré la
              lecture des GiroCodes.
            </p>
            <h3>Guide Sparkasse</h3>
            <ol>
              <li>
                Ouvrez l&apos;app Sparkasse et sélectionnez votre compte.
              </li>
              <li>
                Appuyez sur « Überweisung » (Virement) dans le menu inférieur ou dans le menu
                principal.
              </li>
              <li>
                Sur l&apos;écran de virement, appuyez sur l&apos;icône de la caméra ou du QR code
                en haut à droite (ou dans le champ IBAN).
              </li>
              <li>
                La caméra s&apos;ouvre. Scannez le GiroCode sur votre facture.
              </li>
              <li>
                L&apos;application remplit automatiquement le formulaire. Vérifiez toutes les
                données affichées.
              </li>
              <li>
                Appuyez sur « Weiter » (Suivant) puis authentifiez avec votre PIN ou votre
                méthode TAN habituelle.
              </li>
            </ol>
            <p>
              Note : Les différentes caisses d&apos;épargne peuvent avoir des interfaces
              légèrement différentes, mais le processus est toujours similaire. Si vous ne trouvez
              pas le scanner QR, cherchez dans les paramètres de virement ou consultez l&apos;aide
              de votre caisse d&apos;épargne locale.
            </p>
          </section>

          {/* ── Section 4 : VR-Banking ── */}
          <section aria-labelledby="vr-banking-fr" className="mt-10">
            <h2 id="vr-banking-fr">Scanner avec VR-Banking (Volksbank / Raiffeisenbank)</h2>
            <p>
              Les Volksbanken et Raiffeisenbanken utilisent l&apos;application VR-Banking, qui
              supporte pleinement les GiroCodes depuis plusieurs années.
            </p>
            <h3>Guide VR-Banking</h3>
            <ol>
              <li>
                Ouvrez l&apos;app VR-Banking et connectez-vous.
              </li>
              <li>
                Dans le tableau de bord, appuyez sur « Überweisungen » (Virements) ou naviguez
                vers votre compte et sélectionnez « Überweisung ».
              </li>
              <li>
                Sur l&apos;écran de saisie du virement, vous trouverez une icône de scanner QR
                (généralement à droite du champ IBAN ou en haut de l&apos;écran).
              </li>
              <li>
                Scannez le GiroCode. L&apos;app VR-Banking remplit automatiquement tous les champs.
              </li>
              <li>
                Vérifiez les données, ajustez le montant si nécessaire (si le GiroCode n&apos;en
                contient pas), puis confirmez le virement avec votre méthode habituelle (PIN,
                chipcTAN, etc.).
              </li>
            </ol>
          </section>

          {/* ── Section 5 : ING ── */}
          <section aria-labelledby="ing-fr" className="mt-10">
            <h2 id="ing-fr">Scanner avec ING Banking</h2>
            <p>
              ING est présente dans plusieurs pays européens (Allemagne, France, Belgique,
              Pays-Bas, etc.) avec des applications spécifiques par pays. L&apos;application
              allemande ING Banking supporte pleinement les GiroCodes.
            </p>
            <h3>Guide ING Banking (Allemagne)</h3>
            <ol>
              <li>
                Ouvrez l&apos;app ING Banking et accédez à votre compte courant (Girokonto).
              </li>
              <li>
                Appuyez sur le bouton « Überweisen » (Virement) ou sur le signe « + » pour une
                nouvelle transaction.
              </li>
              <li>
                Sur l&apos;écran de virement, cherchez le bouton ou l&apos;icône QR code (souvent
                représenté par un carré avec des coins arrondis).
              </li>
              <li>
                Autorisez l&apos;accès à la caméra si demandé.
              </li>
              <li>
                Scannez le GiroCode. ING Banking remplit automatiquement l&apos;IBAN, le montant
                et le libellé.
              </li>
              <li>
                Vérifiez les informations et confirmez avec votre PIN ou votre empreinte digitale.
              </li>
            </ol>
          </section>

          {/* ── Section 6 : DKB ── */}
          <section aria-labelledby="dkb-fr" className="mt-10">
            <h2 id="dkb-fr">Scanner avec DKB Banking</h2>
            <p>
              La Deutsche Kreditbank (DKB) est une banque en ligne populaire en Allemagne,
              particulièrement appréciée des étudiants et des jeunes professionnels. Son
              application DKB Banking supporte les GiroCodes.
            </p>
            <h3>Guide DKB Banking</h3>
            <ol>
              <li>
                Ouvrez l&apos;app DKB Banking et connectez-vous avec vos identifiants ou votre
                biométrie.
              </li>
              <li>
                Sélectionnez votre compte et appuyez sur « Überweisen » (Virement).
              </li>
              <li>
                Sur l&apos;écran de virement, appuyez sur l&apos;icône de caméra ou de scanner QR
                (en haut de l&apos;écran ou à côté du champ de saisie de l&apos;IBAN).
              </li>
              <li>
                Scannez le GiroCode. Les données sont automatiquement extraites et remplissent le
                formulaire de virement.
              </li>
              <li>
                Vérifiez attentivement toutes les informations, puis confirmez le virement.
              </li>
            </ol>
          </section>

          {/* ── Section 7 ── */}
          <section aria-labelledby="sans-scanner-fr" className="mt-10">
            <h2 id="sans-scanner-fr">Que faire si l&apos;application n&apos;a pas de scanner QR ?</h2>
            <p>
              Si votre application bancaire ne dispose pas d&apos;un scanner de GiroCode intégré,
              plusieurs alternatives s&apos;offrent à vous :
            </p>

            <h3>Option 1 : Applications scanner tierces</h3>
            <p>
              Certaines applications de lecture de QR codes génériques peuvent décoder un
              GiroCode et afficher les données en clair. Vous pouvez ensuite saisir manuellement
              ces informations dans votre application bancaire. Des applications comme Google
              Lens, QR Scanner (iOS/Android) peuvent afficher le contenu texte du GiroCode.
              Cependant, elles ne peuvent pas initier un paiement directement.
            </p>

            <h3>Option 2 : Banque en ligne sur ordinateur</h3>
            <p>
              Si votre banque dispose d&apos;un portail de banque en ligne (via navigateur web),
              vous pouvez ouvrir le GiroCode sur votre ordinateur, décoder son contenu en utilisant
              notre{' '}
              <Link href="/fr" className="text-sky-400 hover:text-sky-300">
                générateur GiroCode
              </Link>{' '}
              (qui peut également afficher les données encodées), et saisir manuellement les
              informations dans le formulaire de virement de votre banque en ligne.
            </p>

            <h3>Option 3 : Mettre à jour votre application</h3>
            <p>
              Si votre application bancaire est ancienne, une mise à jour peut résoudre le
              problème. Les nouvelles versions des applications bancaires intègrent généralement
              la lecture des GiroCodes. Vérifiez dans l&apos;App Store ou Google Play si une
              mise à jour est disponible.
            </p>

            <h3>Option 4 : Changer d&apos;application bancaire</h3>
            <p>
              Si votre banque ne supporte décidément pas les GiroCodes, cela pourrait être un
              facteur à considérer si vous évaluez différentes banques. La compatibilité GiroCode
              est aujourd&apos;hui une fonctionnalité standard que les banques modernes devraient
              offrir.
            </p>
          </section>

          {/* ── Section 8 ── */}
          <section aria-labelledby="securite-scan-fr" className="mt-10">
            <h2 id="securite-scan-fr">Sécurité lors du scan de GiroCodes</h2>

            <h3>Toujours vérifier les données avant confirmation</h3>
            <p>
              La règle la plus importante est simple : <strong>vérifiez toujours toutes les données
              pré-remplies avant de confirmer un paiement</strong>. Contrôlez notamment :
            </p>
            <ul>
              <li>
                <strong>Le nom du bénéficiaire :</strong> Correspond-il à l&apos;entreprise ou à la
                personne que vous souhaitez payer ?
              </li>
              <li>
                <strong>Le montant :</strong> Est-il correct par rapport à la facture reçue ?
              </li>
              <li>
                <strong>La référence de paiement :</strong> Contient-elle le bon numéro de facture ?
              </li>
            </ul>
            <p>
              Si une donnée vous semble suspecte ou incorrecte, n&apos;effectuez pas le paiement
              et contactez directement l&apos;émetteur de la facture.
            </p>

            <h3>Reconnaître les QR codes manipulés</h3>
            <p>
              Une forme d&apos;arnaque émergente est le remplacement physique de QR codes légitimes
              par de faux QR codes sur des affiches, des flyers ou des équipements publics. Un
              criminel pourrait coller un autocollant avec un faux GiroCode par-dessus le vrai.
              Pour vous protéger :
            </p>
            <ul>
              <li>
                Soyez méfiant envers les QR codes sur des supports qui pourraient avoir été
                manipulés (affiches en lieux publics, matériel non officiel).
              </li>
              <li>
                Sur les factures numériques reçues par email, vérifiez que l&apos;email provient
                bien de l&apos;expéditeur attendu.
              </li>
              <li>
                Si le montant ou le bénéficiaire vous semble inhabituel, contactez l&apos;expéditeur
                par téléphone avant de payer.
              </li>
            </ul>

            <h3>Phishing par QR code (Quishing)</h3>
            <p>
              Le « quishing » est une technique d&apos;hameçonnage utilisant des QR codes pour
              rediriger des victimes vers de faux sites web ou initier des paiements frauduleux.
              Dans le contexte des GiroCodes, un escroc pourrait envoyer une fausse facture avec
              un GiroCode pointant vers son propre compte bancaire.
            </p>
            <p>
              Pour vous protéger :
            </p>
            <ul>
              <li>
                Vérifiez l&apos;authenticité de chaque facture reçue, surtout si vous ne
                reconnaissez pas l&apos;émetteur ou si le montant semble anormal.
              </li>
              <li>
                Si une facture ou une demande de paiement vous semble suspecte, appelez
                l&apos;expéditeur via un numéro connu (pas celui figurant sur la facture
                suspecte) pour confirmer.
              </li>
              <li>
                En cas de doute, ne scannez pas le code.
              </li>
            </ul>
          </section>

          {/* ── Section 9 – Outils affiliés ── */}
          <section aria-labelledby="gestion-factures-fr" className="mt-10">
            <h2 id="gestion-factures-fr">Gestion professionnelle des factures</h2>
            <p>
              Pour les entreprises qui émettent régulièrement des factures avec GiroCodes, un
              logiciel de gestion permet de suivre les paiements reçus et de les réconcilier
              automatiquement avec les factures correspondantes :
            </p>

            <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-base font-semibold text-slate-50">sevDesk</h3>
                <p className="mb-4 text-sm text-slate-400">
                  sevDesk permet de connecter votre compte bancaire et de réconcilier
                  automatiquement les virements SEPA reçus avec les factures en attente. Grâce
                  au numéro de facture inclus dans le GiroCode, la réconciliation est souvent
                  entièrement automatique.
                </p>
                <a
                  href="https://www.awin1.com/cread.php?awinmid=15944&awinaffid=2793610"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-500"
                >
                  Essayer sevDesk *<span aria-hidden>→</span>
                </a>
                <p className="mt-2 text-xs text-slate-600">* Lien affilié</p>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-base font-semibold text-slate-50">FastBill</h3>
                <p className="mb-4 text-sm text-slate-400">
                  FastBill offre un tableau de bord de suivi des paiements entrants et des
                  relances automatiques pour les factures impayées. Son intégration bancaire
                  simplifie la réconciliation des virements SEPA avec les GiroCodes.
                </p>
                <a
                  href="https://www.awin1.com/cread.php?awinmid=20766&awinaffid=2793610"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-500"
                >
                  Essayer FastBill *<span aria-hidden>→</span>
                </a>
                <p className="mt-2 text-xs text-slate-600">* Lien affilié</p>
              </div>
            </div>
          </section>

          {/* ── Liens internes ── */}
          <section aria-labelledby="voir-aussi-apps-fr" className="mt-10">
            <h2 id="voir-aussi-apps-fr">Voir aussi</h2>
            <ul>
              <li>
                <Link href="/fr/wissen/scannen" className="text-sky-400 hover:text-sky-300">
                  Comment scanner un GiroCode – Guide complet iPhone &amp; Android
                </Link>
              </li>
              <li>
                <Link href="/fr/wissen/girocode" className="text-sky-400 hover:text-sky-300">
                  Qu&apos;est-ce qu&apos;un GiroCode ?
                </Link>
              </li>
              <li>
                <Link href="/fr/wissen/rechnung" className="text-sky-400 hover:text-sky-300">
                  GiroCode sur les factures – Guide complet
                </Link>
              </li>
              <li>
                <Link href="/fr/wissen/epc-standard" className="text-sky-400 hover:text-sky-300">
                  Norme EPC &amp; SEPA-QR
                </Link>
              </li>
            </ul>
          </section>

          {/* ── CTA + Disclosure ── */}
          <div className="mt-10 border-t border-slate-800 pt-8">
            <Link
              href="/fr"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
            >
              Créer un GiroCode maintenant <span aria-hidden>→</span>
            </Link>
          </div>

          <p className="mt-8 text-xs text-slate-600">
            * Divulgation : Les liens marqués d&apos;un * sont des liens affiliés. Si vous achetez
            via ces liens, nous recevons une petite commission sans frais supplémentaires pour vous.
          </p>
        </article>
      </div>
    </main>
  );
}
