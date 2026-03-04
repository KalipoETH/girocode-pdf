import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Apps bancarias que admiten GiroCodes',
  description:
    'Resumen de las apps bancarias que admiten GiroCodes / SEPA-QR y consejos para escanear los códigos.',
};

export default function WissenBankingAppsPageEs() {
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
            <li className="text-slate-400">Apps bancarias con GiroCode</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Práctica · Apps bancarias
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Apps bancarias que admiten GiroCodes
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Muchas apps bancarias modernas pueden escanear códigos GiroCode / SEPA-QR y crear una
              transferencia a partir de ellos. Aquí tienes un resumen general y algunos consejos
              prácticos.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="apps-es">
            <h2 id="apps-es">¿Qué apps admiten SEPA-QR / GiroCode?</h2>
            <p>
              El soporte para GiroCode no es obligatorio por ley, sino una función de comodidad que
              ofrecen muchas entidades. Entre otras, apps de:
            </p>
            <ul>
              <li>cajas de ahorros,</li>
              <li>bancos cooperativos,</li>
              <li>bancos directos y neobancos como ING, DKB, N26, etc.</li>
            </ul>
            <p>
              Esta lista no es <strong>exhaustiva</strong>. Algunas entidades más pequeñas o apps
              especializadas también cuentan con lector de QR, aunque bajo otros nombres.
            </p>
          </section>

          <section aria-labelledby="usar-es" className="mt-8">
            <h2 id="usar-es">Cómo usar el escáner de GiroCode</h2>
            <p>En muchas apps, los pasos son muy similares:</p>
            <ol>
              <li>abre la app bancaria e inicia sesión si es necesario,</li>
              <li>ve a la sección de transferencias o pagos,</li>
              <li>
                busca un botón «Escanear GiroCode», «Escanear QR» o un icono de cámara / QR,
              </li>
              <li>
                apunta con la cámara al código en la factura o en la pantalla, y comprueba los datos
                rellenados.
              </li>
            </ol>
            <p>
              Muchas apps también permiten escanear un código directamente desde una{' '}
              <strong>captura de pantalla o un PDF</strong>, lo que resulta muy práctico cuando
              recibes facturas por correo electrónico.
            </p>
          </section>

          <section aria-labelledby="sin-es" className="mt-8">
            <h2 id="sin-es">Si tu app no tiene escáner</h2>
            <p>Entonces puedes:</p>
            <ul>
              <li>
                comprobar si tu banco ofrece otra app o módulo específico para pagos con QR,
              </li>
              <li>
                introducir los datos de forma clásica copiándolos desde el generador GiroCode,
              </li>
              <li>
                preguntar al servicio de atención al cliente si tienen previsto admitir GiroCodes.
              </li>
            </ul>
          </section>

          <section aria-labelledby="nota-es" className="mt-8">
            <h2 id="nota-es">Nota importante</h2>
            <p>
              Cada banco decide si admite o no el formato GiroCode y en qué medida. Las funciones
              pueden cambiar con el tiempo. Si tienes dudas, consulta:
            </p>
            <ul>
              <li>la ayuda o la sección de preguntas frecuentes de tu banco,</li>
              <li>la descripción de la app en App Store / Play Store,</li>
              <li>o ponte en contacto directamente con el soporte.</li>
            </ul>
            <p>
              Nuestro generador crea códigos estrictamente según el <strong>estándar EPC</strong>.
              La compatibilidad concreta dependerá después de tu app bancaria.
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
                    href="/es/wissen/scannen"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    Cómo escanear un GiroCode
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

