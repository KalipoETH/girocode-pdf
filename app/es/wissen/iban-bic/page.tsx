import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IBAN y BIC en el GiroCode – Qué introducir',
  description:
    'IBAN y BIC en el GiroCode: qué datos son necesarios y por qué una comprobación básica del IBAN es útil.',
};

export default function WissenIbanBicPageEs() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-slate-100">
      <div className="mx-auto max-w-3xl px-4 py-10 md:py-12">
        <nav aria-label="Ruta de navegación" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/es" className="text-sky-400 hover:text-sky-300">
                Inicio
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li>
              <Link href="/es/wissen" className="text-sky-400 hover:text-sky-300">
                Información
              </Link>
            </li>
            <li aria-hidden>›</li>
            <li className="text-slate-400">IBAN y BIC</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Bases · IBAN y BIC
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              IBAN y BIC en el GiroCode – Qué introducir
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Para que un GiroCode funcione, el IBAN debe ser correcto. El BIC puede ser opcional
              según el banco, pero sigue siendo recomendable en algunos casos.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="iban-es">
            <h2 id="iban-es">La importancia del IBAN</h2>
            <p>
              El <strong>IBAN</strong> identifica de forma inequívoca la cuenta dentro de la zona
              SEPA. Cambiar un solo dígito puede hacer que la transferencia falle, por lo que merece
              la pena comprobarlo con cuidado o utilizar una validación automática.
            </p>
          </section>

          <section aria-labelledby="bic-es" className="mt-8">
            <h2 id="bic-es">BIC – obligatorio o no</h2>
            <p>
              En muchos pagos SEPA nacionales, el BIC ya no es estrictamente necesario, ya que el
              banco puede determinar la entidad a partir del IBAN. Sin embargo, algunas
              implementaciones de GiroCode siguen esperando un BIC para ser totalmente compatibles.
            </p>
          </section>

          <section aria-labelledby="validacion-es" className="mt-8">
            <h2 id="validacion-es">Comprobación básica del IBAN</h2>
            <p>
              Una comprobación simple (por ejemplo mediante el algoritmo Mod‑97) puede detectar muchos
              errores típicos antes de crear el GiroCode. Nuestro generador puede avisarte si el IBAN
              parece inválido.
            </p>
          </section>

          <div className="mt-10 flex flex-col gap-6 border-t border-slate-800 pt-8">
            <p className="mb-2">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Crear un GiroCode ahora
                <span aria-hidden>→</span>
              </Link>
            </p>
            <div>
              <h2 className="text-sm font-semibold text-slate-50">Más artículos</h2>
              <ul className="mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    href="/es/wissen/girocode"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    ¿Qué es un GiroCode?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/es/wissen/epc-standard"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Estándar EPC y SEPA-QR
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

