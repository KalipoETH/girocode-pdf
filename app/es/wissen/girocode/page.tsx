import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '¿Qué es un GiroCode? – Explicación',
  description:
    'GiroCode explicado: qué es, cómo funciona y por qué facilita los pagos SEPA.',
};

export default function WissenGirocodePageEs() {
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
            <li className="text-slate-400">¿Qué es un GiroCode?</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Bases · GiroCode / SEPA-QR
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              ¿Qué es un GiroCode?
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Un GiroCode es un código QR estandarizado para pagos SEPA. Contiene todos los datos
              necesarios para una transferencia y evita tener que introducir el IBAN, el importe y el
              concepto a mano.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="funcion-es">
            <h2 id="funcion-es">Cómo funciona en la práctica</h2>
            <p>
              El emisor de la factura genera un GiroCode con IBAN, importe y concepto. El código se
              imprime en la factura o se muestra en pantalla. La persona que paga escanea el código
              con la app bancaria; la app rellena el formulario de transferencia y solo hay que
              comprobar y confirmar.
            </p>
          </section>

          <section aria-labelledby="ventajas-es" className="mt-8">
            <h2 id="ventajas-es">Ventajas principales</h2>
            <ul>
              <li>Menos errores de tecleo al no introducir el IBAN manualmente.</li>
              <li>Pagos más rápidos con pocos clics.</li>
              <li>Concepto estructurado, por ejemplo con número de factura o de socio.</li>
            </ul>
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
                    href="/es/wissen/epc-standard"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Estándar EPC explicado
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

