import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Applications bancaires qui supportent le GiroCode',
  description:
    'Aperçu des applications bancaires compatibles GiroCode / SEPA-QR et conseils pratiques pour scanner les codes.',
};

export default function WissenBankingAppsPageFr() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <nav aria-label="Fil d’Ariane" className="mb-6 text-xs text-slate-500">
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
            <li className="text-slate-400">Applications bancaires avec GiroCode</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Pratique · Applications bancaires
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Applications bancaires compatibles GiroCode – Aperçu
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              De nombreuses applications bancaires modernes savent scanner des GiroCodes / SEPA-QR et
              créer automatiquement un virement à partir du code. Voici un aperçu et quelques
              conseils pour le scan.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="apps-fr">
            <h2 id="apps-fr">Quelles applications supportent le GiroCode&nbsp;?</h2>
            <p>
              Le support du GiroCode est une fonction de confort proposée par les banques, pas une
              obligation légale. De nombreuses grandes banques et banques en ligne proposent déjà un
              scanner QR dans leurs applications, par exemple :
            </p>
            <ul>
              <li>applications de caisses d’épargne,</li>
              <li>applications de banques coopératives,</li>
              <li>banques en ligne et néobanques telles que ING, DKB, N26, etc.</li>
            </ul>
            <p>
              Cette liste n’est <strong>pas exhaustive</strong>. Certaines banques plus petites ou
              applications spécialisées disposent également d’un scanner, mais sous d’autres noms.
            </p>
          </section>

          <section aria-labelledby="scan-fr" className="mt-8">
            <h2 id="scan-fr">Comment scanner un GiroCode dans l’application&nbsp;?</h2>
            <p>En général, la procédure ressemble à ceci :</p>
            <ol>
              <li>ouvrir l’application bancaire et se connecter si nécessaire,</li>
              <li>passer dans la section « virement » ou « paiements » ,</li>
              <li>
                rechercher un bouton « scanner un GiroCode », « scanner un QR » ou une icône de
                caméra,
              </li>
              <li>
                pointer la caméra vers le GiroCode sur la facture ou à l’écran, puis vérifier les
                données remplies.
              </li>
            </ol>
            <p>
              De nombreuses applications permettent également de scanner un code directement depuis
              une <strong>capture d’écran ou un PDF</strong>, ce qui est pratique pour les factures
              reçues par e-mail.
            </p>
          </section>

          <section aria-labelledby="no-scanner-fr" className="mt-8">
            <h2 id="no-scanner-fr">Et si mon application ne dispose pas de scanner&nbsp;?</h2>
            <p>Dans ce cas, plusieurs options s’offrent à vous :</p>
            <ul>
              <li>
                vérifier si votre banque propose une <strong>autre application</strong> ou un module
                dédié au scan QR,
              </li>
              <li>
                utiliser la saisie classique en copiant/collant les données depuis le générateur
                GiroCode,
              </li>
              <li>
                contacter le support de la banque pour demander si le support GiroCode est prévu.
              </li>
            </ul>
          </section>

          <section aria-labelledby="note-fr" className="mt-8">
            <h2 id="note-fr">Remarque importante</h2>
            <p>
              Chaque banque décide elle-même de supporter ou non le GiroCode. Les fonctionnalités
              peuvent évoluer. Si vous avez un doute, consultez :
            </p>
            <ul>
              <li>la FAQ de votre banque,</li>
              <li>la description de l’application dans l’App Store / Play Store,</li>
              <li>ou contactez brièvement le service client.</li>
            </ul>
            <p>
              Notre générateur suit strictement le <strong>standard EPC</strong>. La compatibilité
              concrète dépend ensuite de l’application bancaire utilisée.
            </p>
          </section>

          <div className="mt-10 flex flex-col gap-6 border-t border-slate-800 pt-8">
            <p className="mb-2">
              <Link
                href="/fr"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Créer un GiroCode maintenant
                <span aria-hidden>→</span>
              </Link>
            </p>
            <div>
              <h2 className="text-sm font-semibold text-slate-50">Autres articles</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    href="/fr/wissen/scannen"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Scanner un GiroCode
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fr/wissen/girocode"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Qu’est-ce qu’un GiroCode ?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fr/wissen/rechnung"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    GiroCode sur les factures
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

