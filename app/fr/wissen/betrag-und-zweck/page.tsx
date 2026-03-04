import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Montant & référence de paiement dans le GiroCode',
  description:
    'Comment saisir correctement le montant et la référence de paiement dans un GiroCode – format, limites et bonnes pratiques pour les factures.',
};

export default function WissenBetragUndZweckPageFr() {
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
            <li className="text-slate-400">Montant &amp; référence de paiement</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Pratique · Montant &amp; référence
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Montant &amp; référence de paiement dans le GiroCode
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Le choix du montant et de la référence de paiement dans le GiroCode détermine à quel
              point les paiements pourront être rapprochés facilement par la suite. Voici ce qu’il
              faut savoir.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="montant-format-fr">
            <h2 id="montant-format-fr">Montant : format et options</h2>
            <p>
              Dans un GiroCode, le montant est généralement indiqué au format{' '}
              <strong>EUR12.34</strong> – c’est-à-dire le code devise <code>EUR</code> suivi d’un
              montant avec deux décimales, par exemple <code>EUR19.99</code>.
            </p>
            <p>
              Important : le montant est <strong>optionnel</strong>. Vous pouvez décider de fixer un
              montant précis ou de laisser le champ vide. Les deux variantes ont leurs avantages :
            </p>
            <ul>
              <li>
                <strong>Avec montant fixe&nbsp;:</strong> idéal pour les factures avec un total
                déterminé ou des contributions standard (p. ex. cotisation annuelle).
              </li>
              <li>
                <strong>Sans montant&nbsp;:</strong> utile pour les dons ou paiements libres, où la
                personne qui paie doit choisir elle-même le montant.
              </li>
            </ul>
          </section>

          <section aria-labelledby="reference-fr" className="mt-8">
            <h2 id="reference-fr">Référence de paiement : longueur maximale et contenu</h2>
            <p>
              La référence de paiement d’un GiroCode est limitée à environ{' '}
              <strong>140 caractères</strong>. Dans cet espace, vous devez placer toutes les
              informations nécessaires à l’identification du paiement.
            </p>
            <p>Exemples typiques :</p>
            <ul>
              <li>numéro de facture (p. ex. FA-2024-015),</li>
              <li>numéro de client ou d’adhérent,</li>
              <li>nom ou courte description de la prestation.</li>
            </ul>
            <p>
              L’objectif est d’avoir une référence <strong>claire et non ambiguë</strong>. Évitez les
              textes très longs ou les notes internes pour ne pas atteindre inutilement la limite de
              caractères.
            </p>
          </section>

          <section aria-labelledby="facture-fr" className="mt-8">
            <h2 id="facture-fr">Numéro de facture dans la référence</h2>
            <p>
              Pour les <strong>indépendants et petites entreprises</strong>, le numéro de facture
              est l’élément le plus important. Il devrait toujours figurer dans la référence, par
              exemple&nbsp;:
            </p>
            <p>
              <code>Facture FA-2024-015, Client 12345</code>
            </p>
            <p>
              Ainsi, il est beaucoup plus simple de rapprocher le paiement dans la comptabilité – y
              compris lorsque la personne qui paie ajoute du texte libre dans le libellé de
              virement.
            </p>
          </section>

          <section aria-labelledby="montant-vide-fr" className="mt-8">
            <h2 id="montant-vide-fr">Que se passe-t-il si le montant est vide ?</h2>
            <p>
              Si vous laissez le montant vide, l’application bancaire ne remplira que les champs{' '}
              <strong>bénéficiaire, IBAN (et éventuellement BIC) ainsi que la référence</strong>. Le
              champ du montant reste vide.
            </p>
            <p>
              La personne qui paie doit alors saisir elle-même la somme. C’est particulièrement utile
              lorsque vous ne souhaitez <strong>pas imposer de montant fixe</strong> – par exemple
              pour des dons ou des contributions variables.
            </p>
          </section>

          <section aria-labelledby="recommandations-fr" className="mt-8">
            <h2 id="recommandations-fr">Recommandations pour les indépendants</h2>
            <p>Les bonnes pratiques suivantes fonctionnent bien pour les indépendants :</p>
            <ul>
              <li>
                Utiliser un <strong>montant fixe</strong> lorsque vous envoyez une facture avec un
                total déterminé.
              </li>
              <li>
                Toujours inclure le <strong>numéro de facture</strong> – et si nécessaire le numéro
                de client – dans la référence.
              </li>
              <li>
                Garder la référence <strong>courte et explicite</strong> – les commentaires internes
                devraient rester dans vos propres systèmes.
              </li>
            </ul>
            <p>
              Avec notre générateur, vous pouvez saisir facilement le montant et la référence, puis
              créer une <strong>facture PDF avec GiroCode intégré</strong>.
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
                    href="/fr/wissen/rechnung"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    GiroCode sur les factures
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
                <li>
                  <Link
                    href="/fr/wissen/girocode"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Qu’est-ce qu’un GiroCode ?
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

