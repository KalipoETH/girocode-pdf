import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode en facturas – Cómo integrarlo correctamente',
  description:
    'Cómo integrar un GiroCode en tus facturas: colocación, información obligatoria y uso del generador para crear PDFs con código SEPA-QR.',
};

export default function WissenRechnungPageEs() {
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
            <li className="text-slate-400">GiroCode en facturas</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Práctica · GiroCode en facturas
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode en facturas – Cómo integrarlo correctamente
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Un GiroCode en la factura hace que el pago sea mucho más cómodo para tus clientes. Al
              mismo tiempo, se siguen cumpliendo todos los requisitos legales de la factura si se
              tienen en cuenta algunos puntos.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="por-que-es">
            <h2 id="por-que-es">¿Por qué añadir un GiroCode a una factura?</h2>
            <p>
              Un <strong>GiroCode (SEPA-QR)</strong> impreso en la factura permite al cliente
              realizar la transferencia con unos pocos toques. En lugar de introducir IBAN, importe
              y concepto, solo tiene que escanear el código con su app bancaria.
            </p>
          </section>

          <section aria-labelledby="lugar-es" className="mt-8">
            <h2 id="lugar-es">¿Dónde colocar el GiroCode en la factura?</h2>
            <p>
              En la práctica, suele colocarse en la <strong>parte inferior derecha</strong> de la
              factura, cerca de la información de pago clásica. El código debe:
            </p>
            <ul>
              <li>ser <strong>bien visible</strong> y no quedar cubierto por otros elementos,</li>
              <li>
                disponer de un <strong>margen blanco suficiente</strong> alrededor (zona tranquila),
              </li>
              <li>
                evitar doblarse o coincidir con perforaciones si la factura se imprime en papel.
              </li>
            </ul>
          </section>

          <section aria-labelledby="tamano-es" className="mt-8">
            <h2 id="tamano-es">Tamaño mínimo del código QR</h2>
            <p>
              Para que las apps bancarias puedan leer el código de forma fiable, debe tener un
              tamaño mínimo adecuado. En la práctica, suele funcionar bien un lado de{' '}
              <strong>25–35 mm</strong>. En un PDF, el código puede mostrarse más pequeño, pero
              sigue siendo legible al hacer zoom.
            </p>
          </section>

          <section aria-labelledby="info-legal-es" className="mt-8">
            <h2 id="info-legal-es">Información obligatoria en la factura</h2>
            <p>
              Independientemente del GiroCode, la factura debe contener la información legalmente
              requerida (según la normativa aplicable en cada país), por ejemplo:
            </p>
            <ul>
              <li>nombre y dirección completos del emisor y del receptor,</li>
              <li>número fiscal o número de identificación de IVA,</li>
              <li>fecha de emisión de la factura,</li>
              <li>número de factura único,</li>
              <li>descripción de bienes y servicios,</li>
              <li>importe neto, tipo de IVA y cuota de IVA.</li>
            </ul>
            <p>
              El GiroCode <strong>no sustituye</strong> estos datos, sino que es únicamente una{' '}
              <strong>opción de pago más cómoda</strong>.
            </p>
          </section>

          <section aria-labelledby="pdf-es" className="mt-8">
            <h2 id="pdf-es">Crear un PDF con GiroCode integrado</h2>
            <p>
              Nuestro <strong>GiroCode Generator</strong> te permite crear una{' '}
              <strong>factura PDF con GiroCode integrado</strong>. Solo tienes que introducir:
            </p>
            <ul>
              <li>los datos de facturación y del cliente,</li>
              <li>la IBAN y, si procede, el BIC,</li>
              <li>el importe y el concepto de pago (por ejemplo, número de factura).</li>
            </ul>
            <p>
              La aplicación genera, directamente en tu navegador, un PDF de la factura en el que el
              código se coloca en la posición adecuada. Todos los datos se procesan{' '}
              <strong>exclusivamente de forma local</strong>.
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
                    href="/es/wissen/betrag-und-zweck"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Importe y concepto de pago
                  </Link>
                </li>
                <li>
                  <Link
                    href="/es/wissen/banking-apps"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Apps bancarias compatibles
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

