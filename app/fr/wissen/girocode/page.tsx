import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Qu’est-ce qu’un GiroCode ? – Explication',
  description:
    'GiroCode expliqué simplement : définition, fonctionnement et cas d’usage typiques.',
};

export default function WissenGirocodePageFr() {
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
            <li className="text-slate-400">Qu’est-ce qu’un GiroCode ?</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Bases · GiroCode / SEPA-QR
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Qu’est-ce qu’un GiroCode ?
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Le GiroCode – aussi appelé SEPA-QR ou EPC-QR – est un code QR standardisé pour les
              virements SEPA. Il contient toutes les informations importantes pour un paiement et
              évite la saisie manuelle d’IBAN, de montant et de libellé.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="definition-fr">
            <h2 id="definition-fr">Définition et objectifs</h2>
            <p>
              Un GiroCode encode un virement SEPA dans un format texte défini par le{' '}
              <strong>European Payments Council (EPC)</strong>. Les applications bancaires peuvent
              lire ce texte, remplir automatiquement un formulaire de virement et te laissent ensuite
              simplement vérifier et valider l’opération.
            </p>
          </section>

          <section aria-labelledby="fonctionnement-fr" className="mt-8">
            <h2 id="fonctionnement-fr">Fonctionnement général</h2>
            <p>Le déroulement typique est le suivant :</p>
            <ol>
              <li>Le créateur de la facture génère un GiroCode avec IBAN, montant et libellé.</li>
              <li>Le code est imprimé sur la facture ou affiché à l’écran.</li>
              <li>La personne qui paie scanne le QR avec son application bancaire.</li>
              <li>Les champs du virement sont remplis automatiquement.</li>
              <li>La personne vérifie et confirme le paiement.</li>
            </ol>
          </section>

          <section aria-labelledby="donnees-fr" className="mt-8">
            <h2 id="donnees-fr">Quelles données sont contenues ?</h2>
            <p>Un GiroCode peut notamment contenir :</p>
            <ul>
              <li>le nom du bénéficiaire,</li>
              <li>l’IBAN (et éventuellement le BIC),</li>
              <li>le montant en EUR,</li>
              <li>un libellé ou une référence (par ex. numéro de facture).</li>
            </ul>
            <p>
              Certaines informations sont obligatoires (par ex. IBAN), d’autres sont facultatives. Il
              est par exemple possible de laisser le montant vide pour que la personne qui paie le
              choisisse librement.
            </p>
          </section>

          <section aria-labelledby="avantages-fr" className="mt-8">
            <h2 id="avantages-fr">Avantages pour les émetteurs et les payeurs</h2>
            <ul>
              <li>
                <strong>Moins d’erreurs de saisie</strong> : l’IBAN n’a plus besoin d’être retapé.
              </li>
              <li>
                <strong>Paiements plus rapides</strong> : quelques secondes suffisent pour préparer le
                virement.
              </li>
              <li>
                <strong>Réconciliation facilitée</strong> grâce à un libellé structuré (numéro de
                facture, etc.).
              </li>
            </ul>
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
                    href="/fr/wissen/epc-standard"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Standard EPC expliqué
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

