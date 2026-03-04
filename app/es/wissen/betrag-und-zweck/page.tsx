import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Importe y concepto de pago en el GiroCode',
  description:
    'Cómo introducir correctamente el importe y el concepto en un GiroCode: formato, límites y buenas prácticas para facturas y pagos.',
};

export default function WissenBetragUndZweckPageEs() {
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
            <li className="text-slate-400">Importe y concepto de pago</li>
          </ol>
        </nav>
        <header className="mb-6 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Práctica · Importe y concepto
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Importe y concepto de pago en el GiroCode
            </h1>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              El modo en que defines el importe y el concepto en el GiroCode determina lo fácil que
              será conciliar los pagos más adelante. Aquí encontrarás las opciones y límites más
              importantes.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300">
          <section aria-labelledby="importe-es">
            <h2 id="importe-es">Importe: formato y opciones</h2>
            <p>
              En un GiroCode, el importe suele indicarse en el formato <strong>EUR12.34</strong>: el
              código de divisa <code>EUR</code> seguido de una cantidad con dos decimales, por
              ejemplo <code>EUR19.99</code>.
            </p>
            <p>
              Importante: el importe es <strong>opcional</strong>. Puedes decidir si fijas una
              cantidad concreta o dejas el campo vacío. Ambas variantes tienen su utilidad:
            </p>
            <ul>
              <li>
                <strong>Con importe fijo:</strong> ideal para facturas con un total definido o
                cuotas estándar.
              </li>
              <li>
                <strong>Sin importe:</strong> útil para donaciones o pagos voluntarios en los que la
                persona que paga debe elegir la cantidad.
              </li>
            </ul>
          </section>

          <section aria-labelledby="concepto-es" className="mt-8">
            <h2 id="concepto-es">Concepto de pago: longitud máxima y contenido</h2>
            <p>
              El concepto de pago en un GiroCode está limitado a unos{' '}
              <strong>140 caracteres</strong>. Dentro de este espacio deberías incluir toda la
              información necesaria para identificar el pago.
            </p>
            <p>Contenido típico:</p>
            <ul>
              <li>número de factura (por ejemplo, FA-2024-015),</li>
              <li>número de cliente o de socio,</li>
              <li>nombre o breve descripción del servicio.</li>
            </ul>
            <p>
              Intenta que el concepto sea <strong>claro y único</strong>. Evita textos largos o
              notas internas para no agotar el límite de caracteres.
            </p>
          </section>

          <section aria-labelledby="factura-es" className="mt-8">
            <h2 id="factura-es">Número de factura en el concepto</h2>
            <p>
              Para <strong>autónomos y pequeñas empresas</strong>, el número de factura es el
              identificador más importante. Debería aparecer siempre en el concepto, por ejemplo:
            </p>
            <p>
              <code>Factura FA-2024-015, Cliente 12345</code>
            </p>
            <p>
              De este modo, el pago se puede asociar rápidamente en la contabilidad, incluso si la
              persona paga añade texto adicional en el campo de concepto de la transferencia.
            </p>
          </section>

          <section aria-labelledby="sin-importe-es" className="mt-8">
            <h2 id="sin-importe-es">¿Qué ocurre si el importe se deja vacío?</h2>
            <p>
              Si dejas el importe vacío, la app bancaria solo rellenará los campos{' '}
              <strong>beneficiario, IBAN (y, en su caso, BIC) y concepto</strong> al escanear. El
              campo de importe quedará vacío.
            </p>
            <p>
              La persona que paga tendrá que introducir la cantidad manualmente. Esto es
              especialmente útil cuando <strong>no quieres fijar un importe concreto</strong>, por
              ejemplo en campañas de donativos.
            </p>
          </section>

          <section aria-labelledby="recomendaciones-es" className="mt-8">
            <h2 id="recomendaciones-es">Recomendaciones para autónomos</h2>
            <p>Para autónomos y pequeños negocios, suelen funcionar bien estas pautas:</p>
            <ul>
              <li>
                Utilizar un <strong>importe fijo</strong> cuando se envía una factura con un total
                determinado.
              </li>
              <li>
                Incluir siempre el <strong>número de factura</strong> (y, si procede, el número de
                cliente) en el concepto.
              </li>
              <li>
                Mantener el concepto <strong>breve y preciso</strong>; los detalles internos
                deberían quedarse en tus propios sistemas.
              </li>
            </ul>
            <p>
              Con nuestro generador puedes definir fácilmente el importe y el concepto, y crear una{' '}
              <strong>factura PDF con GiroCode integrado</strong>.
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
                    href="/es/wissen/rechnung"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    GiroCode en facturas
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
                <li>
                  <Link
                    href="/es/wissen/girocode"
                    className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
                  >
                    ¿Qué es un GiroCode?
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

