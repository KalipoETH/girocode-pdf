import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Standard EPC & SEPA-QR – Vue d’ensemble technique',
  description:
    'Structure du payload EPC pour les GiroCodes : lignes, champs et limites de longueur expliqués simplement.',
};

export default function WissenEpcStandardPageFr() {
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
            <li className="text-slate-400">Standard EPC &amp; SEPA-QR</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Technique · Standard EPC
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Standard EPC &amp; SEPA-QR – Vue d’ensemble technique
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Le standard EPC définit comment un virement SEPA est encodé dans un code QR. Cette
              vue d’ensemble présente les lignes les plus importantes de ce « payload ».
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="structure-fr">
            <h2 id="structure-fr">Structure de base du texte EPC</h2>
            <p>Un payload EPC se compose de plusieurs lignes, par exemple :</p>
            <pre className="whitespace-pre-wrap rounded-md bg-slate-900/70 p-3 text-xs text-slate-200">
              {`BCD
002
1
SCT
BICBANKXXX
Nom du bénéficiaire
FR7612345678901234567890185
EUR12.34
Facture 2024-001`}
            </pre>
            <p>Chaque ligne a un rôle précis (service tag, version, encodage, schéma SEPA, etc.).</p>
          </section>

          <section aria-labelledby="longueurs-fr" className="mt-8">
            <h2 id="longueurs-fr">Longueurs maximales &amp; jeu de caractères</h2>
            <p>
              Le standard EPC limite la longueur de chaque champ (nom du bénéficiaire, libellé,
              etc.) et impose un jeu de caractères restreint. Cela permet aux banques de traiter les
              données de manière fiable, même à l’international.
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
                    href="/fr/wissen/girocode"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Qu’est-ce qu’un GiroCode ?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fr/wissen/iban-bic"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    IBAN &amp; BIC dans le GiroCode
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

