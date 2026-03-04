import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Scanner un GiroCode – Guide pas à pas',
  description:
    'Comment scanner un GiroCode avec une application bancaire : instructions pas à pas et conseils si le scan ne fonctionne pas.',
};

export default function WissenScannenPageFr() {
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
            <li className="text-slate-400">Scanner un GiroCode</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Pratique · Scanner un GiroCode
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Scanner un GiroCode – Guide pas à pas
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Scanner un GiroCode est simple – à condition de savoir où se trouve le lecteur de QR
              dans votre application bancaire. Ce guide vous accompagne étape par étape.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="etapes-fr">
            <h2 id="etapes-fr">Étapes de base pour scanner un GiroCode</h2>
            <p>Les étapes sont très similaires dans la plupart des applications :</p>
            <ol>
              <li>ouvrir l’application bancaire et se connecter si nécessaire,</li>
              <li>aller dans la section « virement », « paiements » ou « GiroCode »,</li>
              <li>
                lancer le scanner QR – souvent symbolisé par une icône d’appareil photo ou de QR,
              </li>
              <li>
                pointer la caméra sur le GiroCode situé sur la facture ou affiché à l’écran, puis
                vérifier les données préremplies.
              </li>
            </ol>
          </section>

          <section aria-labelledby="problemes-fr" className="mt-8">
            <h2 id="problemes-fr">Que faire si le code n’est pas reconnu&nbsp;?</h2>
            <p>Si le scan ne fonctionne pas du premier coup, vérifiez :</p>
            <ul>
              <li>
                <strong>la luminosité :</strong> une zone bien éclairée avec peu de reflets aide
                beaucoup,
              </li>
              <li>
                <strong>la distance :</strong> ni trop près ni trop loin – un léger recul améliore
                souvent la mise au point,
              </li>
              <li>
                <strong>la qualité d’impression :</strong> un code trop petit ou flou peut être
                difficile à lire.
              </li>
            </ul>
          </section>

          <section aria-labelledby="verif-fr" className="mt-8">
            <h2 id="verif-fr">Toujours vérifier les données avant de valider</h2>
            <p>
              Même si le GiroCode remplit automatiquement le formulaire, vous devez toujours
              vérifier :
            </p>
            <ul>
              <li>le nom du bénéficiaire,</li>
              <li>l’IBAN,</li>
              <li>le montant,</li>
              <li>la référence / libellé.</li>
            </ul>
            <p>
              En cas de doute, vous pouvez corriger certains champs manuellement ou annuler
              l’opération.
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
                    href="/fr/wissen/banking-apps"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Applications bancaires compatibles
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

