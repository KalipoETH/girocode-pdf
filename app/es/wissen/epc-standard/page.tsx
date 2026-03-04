import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Estándar EPC y SEPA-QR – Visión general técnica',
  description:
    'Estructura básica del estándar EPC para GiroCodes: qué contiene el texto y por qué es importante para la compatibilidad.',
};

export default function WissenEpcStandardPageEs() {
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
            <li className="text-slate-400">Estándar EPC y SEPA-QR</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Técnica · Estándar EPC
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Estándar EPC y SEPA-QR – Visión general técnica
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              El estándar EPC define cómo se codifica una transferencia SEPA en un código QR. Esta
              breve introducción muestra la estructura general del texto.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="estructura-es">
            <h2 id="estructura-es">Estructura básica del texto EPC</h2>
            <p>
              El texto EPC se compone de varias líneas en un orden fijo (por ejemplo identificador,
              versión, tipo de operación SEPA, BIC, nombre, IBAN, importe, concepto). Las apps
              bancarias leen estas líneas y crean a partir de ellas la orden de transferencia.
            </p>
          </section>

          <section aria-labelledby="compatibilidad-es" className="mt-8">
            <h2 id="compatibilidad-es">Compatibilidad entre bancos</h2>
            <p>
              Como el estándar EPC está definido de forma centralizada, un GiroCode creado en un
              país SEPA puede leerse en principio en otros países SEPA, siempre que la app bancaria
              soporte SEPA-QR. Esto hace que el formato sea especialmente adecuado para facturas y
              pagos recurrentes.
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
                    href="/es/wissen/iban-bic"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    IBAN y BIC en el GiroCode
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

