import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode sur les factures – Bien l’intégrer',
  description:
    'Comment intégrer un GiroCode sur vos factures : emplacement, mentions obligatoires et utilisation du générateur pour créer un PDF avec code SEPA-QR.',
};

export default function WissenRechnungPageFr() {
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
            <li className="text-slate-400">GiroCode sur les factures</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Pratique · GiroCode sur les factures
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode sur les factures – Bien l’intégrer
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Un GiroCode sur la facture simplifie grandement le paiement pour vos clients. En même
              temps, toutes les exigences légales restent remplies – à condition de respecter
              quelques points.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="pourquoi-fr">
            <h2 id="pourquoi-fr">Pourquoi ajouter un GiroCode sur une facture ?</h2>
            <p>
              Un <strong>GiroCode (SEPA-QR)</strong> imprimé sur la facture permet au client
              d’effectuer le virement en quelques secondes. Au lieu de saisir l’IBAN, le montant et
              le libellé, il lui suffit de scanner le code QR avec son application bancaire.
            </p>
            <p>Les avantages :</p>
            <ul>
              <li>
                <strong>Moins d’erreurs de saisie</strong> grâce au remplissage automatique de tous
                les champs.
              </li>
              <li>
                <strong>Paiement plus rapide</strong>, en particulier pour les factures avec de
                nombreux postes.
              </li>
              <li>
                <strong>Image plus professionnelle</strong> auprès de vos clients.
              </li>
            </ul>
          </section>

          <section aria-labelledby="emplacement-fr" className="mt-8">
            <h2 id="emplacement-fr">Où placer le GiroCode sur la facture ?</h2>
            <p>
              En pratique, une position <strong>en bas à droite</strong> de la facture a fait ses
              preuves – à proximité des informations de paiement classiques. Le code doit :
            </p>
            <ul>
              <li>
                être <strong>bien visible</strong> et ne pas être recouvert par d’autres éléments,
              </li>
              <li>
                disposer d’une <strong>zone calme (marge blanche)</strong> suffisante,
              </li>
              <li>
                éviter les plis et perforations si la facture est imprimée.
              </li>
            </ul>
          </section>

          <section aria-labelledby="taille-fr" className="mt-8">
            <h2 id="taille-fr">Taille minimale du code QR</h2>
            <p>
              Pour que les applications bancaires puissent scanner le code de manière fiable, il
              doit respecter une taille minimale. En pratique, une longueur de côté d’environ{' '}
              <strong>25–35 mm</strong> fonctionne bien. Sur un PDF, le code peut apparaître plus
              petit mais reste lisible après zoom.
            </p>
            <p>
              Une <strong>résolution suffisante</strong> est particulièrement importante pour
              l’impression. Notre générateur intègre un code QR en haute résolution directement dans
              le PDF.
            </p>
          </section>

          <section aria-labelledby="mentions-fr" className="mt-8">
            <h2 id="mentions-fr">Mentions obligatoires sur la facture</h2>
            <p>
              Indépendamment du GiroCode, la facture doit contenir certaines mentions légales
              (dépendant du droit applicable), par exemple :
            </p>
            <ul>
              <li>nom et adresse complets du fournisseur et du client,</li>
              <li>numéro de TVA ou numéro d’identification fiscale, le cas échéant,</li>
              <li>date d’émission de la facture,</li>
              <li>numéro de facture unique,</li>
              <li>description des biens ou services,</li>
              <li>date de la livraison ou de la prestation,</li>
              <li>montant hors taxes, taux de TVA et montant de TVA.</li>
            </ul>
            <p>
              Le GiroCode <strong>ne remplace pas</strong> ces informations – il constitue une{' '}
              <strong>option de paiement supplémentaire et pratique</strong>.
            </p>
          </section>

          <section aria-labelledby="outil-fr" className="mt-8">
            <h2 id="outil-fr">Créer automatiquement un PDF avec GiroCode</h2>
            <p>
              Notre <strong>GiroCode Generator</strong> vous permet de créer une{' '}
              <strong>facture PDF avec GiroCode intégré</strong>. Vous saisissez :
            </p>
            <ul>
              <li>les données de facturation et du destinataire,</li>
              <li>l’IBAN souhaité (et éventuellement le BIC),</li>
              <li>le montant et la référence de paiement (par ex. numéro de facture).</li>
            </ul>
            <p>
              L’application génère ensuite dans votre navigateur une facture PDF prête à l’emploi,
              avec le GiroCode placé au bon endroit. Toutes les données sont traitées{' '}
              <strong>uniquement en local</strong>.
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
                    href="/fr/wissen/betrag-und-zweck"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Montant &amp; référence de paiement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fr/wissen/banking-apps"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Applications bancaires compatibles
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

