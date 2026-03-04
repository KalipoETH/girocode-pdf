import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IBAN & BIC dans le GiroCode – Que saisir ?',
  description:
    'IBAN et BIC dans le GiroCode : quelles informations sont nécessaires pour un paiement SEPA, et pourquoi une validation IBAN est utile.',
};

export default function WissenIbanBicPageFr() {
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
            <li className="text-slate-400">IBAN &amp; BIC</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Bases · IBAN &amp; BIC
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              IBAN &amp; BIC dans le GiroCode – Que saisir ?
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Pour qu’un GiroCode fonctionne correctement, l’IBAN doit être saisi sans erreur. Le
              BIC est parfois facultatif, mais peut améliorer la compatibilité avec certaines
              banques.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="iban-fr">
            <h2 id="iban-fr">L’IBAN comme base du paiement SEPA</h2>
            <p>
              L’<strong>IBAN</strong> identifie de manière unique le compte bancaire dans l’espace
              SEPA. Selon le pays, sa longueur et sa structure varient, mais le principe reste le
              même : un préfixe pays, des chiffres de contrôle et une partie nationale (code banque
              + numéro de compte).
            </p>
          </section>

          <section aria-labelledby="bic-fr" className="mt-8">
            <h2 id="bic-fr">BIC – souvent facultatif, parfois recommandé</h2>
            <p>
              Le <strong>BIC</strong> (Business Identifier Code) identifie la banque. Pour de
              nombreux virements SEPA nationaux, il n’est plus requis – la banque peut retrouver
              l’établissement à partir de l’IBAN.
            </p>
          </section>

          <section aria-labelledby="validation-fr" className="mt-8">
            <h2 id="validation-fr">Pourquoi une validation IBAN est utile</h2>
            <p>
              Une simple erreur de saisie dans l’IBAN peut conduire à un virement rejeté. Une
              validation automatique (par exemple via l’algorithme Mod‑97) permet de détecter de
              nombreuses erreurs typiques avant même la création du GiroCode.
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
                    href="/fr/wissen/epc-standard"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Standard EPC &amp; SEPA-QR
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

