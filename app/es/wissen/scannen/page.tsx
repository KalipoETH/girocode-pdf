import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo escanear un GiroCode – Guía paso a paso',
  description:
    'Guía paso a paso para escanear GiroCodes con la app bancaria y consejos si el escaneo falla.',
};

export default function WissenScannenPageEs() {
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
            <li className="text-slate-400">Escanear un GiroCode</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Práctica · Escanear un GiroCode
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Cómo escanear un GiroCode – Guía paso a paso
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Escanear un GiroCode es sencillo si sabes dónde está el lector de QR en tu app
              bancaria. Esta guía te explica los pasos básicos y qué hacer si ocurre algún
              problema.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="pasos-es">
            <h2 id="pasos-es">Pasos básicos</h2>
            <ol>
              <li>abre tu app bancaria e inicia sesión si es necesario,</li>
              <li>busca la sección de transferencias o pagos,</li>
              <li>
                inicia el escáner de QR (a menudo representado por un icono de cámara o código QR),
              </li>
              <li>
                apunta la cámara hacia el GiroCode de la factura o de la pantalla y espera a que se
                rellenen los datos.
              </li>
            </ol>
          </section>

          <section aria-labelledby="consejos-es" className="mt-8">
            <h2 id="consejos-es">Consejos si el código no se reconoce</h2>
            <p>Si la app tiene problemas para leer el código, prueba lo siguiente:</p>
            <ul>
              <li>mejora la iluminación y evita reflejos fuertes,</li>
              <li>ajusta un poco la distancia hasta que el código esté bien enfocado,</li>
              <li>si estás en pantalla, aumenta el zoom del PDF o de la página.</li>
            </ul>
          </section>

          <section aria-labelledby="seguridad-es" className="mt-8">
            <h2 id="seguridad-es">Seguridad: revisar siempre los datos</h2>
            <p>
              Aunque el GiroCode rellena el formulario automáticamente, debes comprobar siempre los
              datos antes de confirmar:
            </p>
            <ul>
              <li>nombre del beneficiario,</li>
              <li>IBAN,</li>
              <li>importe,</li>
              <li>concepto de pago.</li>
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
                    href="/es/wissen/banking-apps"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Apps bancarias compatibles
                  </Link>
                </li>
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
                    href="/es/wissen/rechnung"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    GiroCode en facturas
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

