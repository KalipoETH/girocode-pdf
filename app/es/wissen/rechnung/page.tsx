import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'GiroCode en facturas – La guía completa',
  description:
    'Cómo añadir un GiroCode a tus facturas: ubicación, requisitos legales y creación de PDF con código QR integrado.',
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

        <header className="mb-8 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Práctica · GiroCode en facturas
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              GiroCode en facturas – La guía completa
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              Incluir un GiroCode en tus facturas es una de las mejoras más sencillas y
              efectivas que puedes hacer para acelerar el cobro y reducir errores. En esta
              guía completa te explicamos los requisitos legales de una factura en España y
              la UE, dónde y cómo colocar el GiroCode, qué herramientas usar y cómo
              responder a las preguntas más frecuentes de tus clientes.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-slate-200 prose-code:text-emerald-400">

          <section aria-labelledby="por-que-girocode-factura">
            <h2 id="por-que-girocode-factura">¿Por qué usar GiroCode en facturas?</h2>
            <p>
              Cada vez que envías una factura sin GiroCode, estás transfiriendo a tu cliente
              la responsabilidad de copiar correctamente tu IBAN, el importe exacto y el
              concepto de pago. Cualquier error en este proceso puede significar semanas de
              retraso: el pago llega incompleto, con el concepto equivocado o simplemente no
              llega porque el IBAN se copió mal.
            </p>
            <p>
              Con un GiroCode en la factura, estos problemas desaparecen. El cliente escanea
              el código con su app bancaria y todos los datos se rellenan automáticamente.
              Solo tiene que confirmar. Este sencillo cambio tiene efectos medibles:
            </p>
            <ul>
              <li>
                <strong>Pagos más rápidos:</strong> La fricción del proceso de pago se reduce
                al mínimo, lo que aumenta la proporción de pagos realizados a tiempo.
              </li>
              <li>
                <strong>Menos errores:</strong> Sin introducción manual de datos, desaparecen
                los errores tipográficos en IBAN, importe y concepto.
              </li>
              <li>
                <strong>Conciliación automática:</strong> El número de factura llega siempre
                en el concepto exactamente como tú lo has configurado, facilitando la
                identificación del pago en tu contabilidad.
              </li>
              <li>
                <strong>Imagen profesional:</strong> Una factura con GiroCode transmite
                modernidad, organización y preocupación por la comodidad del cliente.
              </li>
              <li>
                <strong>Sin costes adicionales:</strong> A diferencia de PayPal o Stripe,
                el GiroCode no tiene comisiones. El dinero llega íntegro.
              </li>
            </ul>
          </section>

          <section aria-labelledby="menciones-legales" className="mt-10">
            <h2 id="menciones-legales">Menciones legales obligatorias en una factura (España/UE)</h2>
            <p>
              Antes de hablar del GiroCode, es fundamental recordar qué elementos debe
              contener obligatoriamente una factura en España y en la Unión Europea. El
              GiroCode es un complemento al contenido de la factura, pero no sustituye ningún
              elemento legal obligatorio.
            </p>
            <p>
              Según la Ley del IVA española y la Directiva 2006/112/CE de la UE, una factura
              completa debe incluir:
            </p>
            <ul>
              <li><strong>Número de factura:</strong> Correlativo y único. No puede haber dos facturas con el mismo número.</li>
              <li><strong>Fecha de expedición:</strong> La fecha en que se emite la factura.</li>
              <li><strong>Fecha de operación:</strong> Si difiere de la fecha de expedición (cuando se prestó el servicio o entregó el bien).</li>
              <li><strong>Nombre y apellidos o razón social del emisor:</strong> Nombre completo o nombre de la empresa.</li>
              <li><strong>Domicilio del emisor:</strong> Dirección fiscal o de la sede social.</li>
              <li><strong>NIF del emisor:</strong> Número de Identificación Fiscal (DNI, NIE o CIF).</li>
              <li><strong>Datos del destinatario:</strong> Nombre, dirección y NIF del cliente (en facturas B2B o cuando el cliente lo solicite).</li>
              <li><strong>Descripción de la operación:</strong> Descripción de los bienes entregados o servicios prestados.</li>
              <li><strong>Base imponible:</strong> El importe sin IVA.</li>
              <li><strong>Tipo impositivo de IVA:</strong> El porcentaje de IVA aplicado (21%, 10%, 4% o 0%).</li>
              <li><strong>Cuota tributaria:</strong> El importe del IVA en euros.</li>
              <li><strong>Importe total:</strong> La suma de la base imponible más el IVA.</li>
            </ul>

            <h3>Número de IVA (NIF-IVA)</h3>
            <p>
              Para facturas a clientes de otros países de la UE (operaciones intracomunitarias),
              debe incluirse el número de IVA intracomunitario (NIF-IVA), que en España tiene
              el formato «ES» seguido del NIF. Por ejemplo: <code>ESB12345678</code>.
            </p>

            <h3>Autónomos y pequeñas empresas: régimen de recargo de equivalencia y exención</h3>
            <p>
              Algunos autónomos y pequeñas empresas están acogidos a regímenes especiales de
              IVA. En estos casos, la factura debe incluir una mención específica:
            </p>
            <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-slate-300">
              <p className="font-semibold text-slate-200 mb-2">Texto de ejemplo para exención de IVA (art. 20 Ley IVA):</p>
              <p className="italic text-slate-400">
                «Operación exenta de IVA según el artículo 20.1.X de la Ley 37/1992, de 28 de
                diciembre, del Impuesto sobre el Valor Añadido.»
              </p>
            </div>
            <p className="mt-3">
              Nota: Consulta siempre con un asesor fiscal para asegurarte de que tus facturas
              cumplen la normativa aplicable a tu actividad específica.
            </p>
          </section>

          <section aria-labelledby="donde-colocar" className="mt-10">
            <h2 id="donde-colocar">¿Dónde colocar el GiroCode en una factura?</h2>
            <p>
              La posición del GiroCode en la factura afecta directamente a su usabilidad. Un
              código mal colocado puede pasar desapercibido o resultar difícil de escanear.
            </p>

            <h3>Posición recomendada: abajo a la derecha</h3>
            <p>
              La práctica estándar y más extendida es colocar el GiroCode en la
              <strong> esquina inferior derecha</strong> de la factura, junto a los datos
              bancarios (IBAN, nombre del banco). Esta posición tiene varias ventajas:
            </p>
            <ul>
              <li>Es la zona donde el cliente normalmente busca los datos de pago.</li>
              <li>Queda separada del cuerpo principal de la factura (líneas, importes, etc.).</li>
              <li>No interfiere con el número de factura ni con otros elementos legales importantes.</li>
              <li>Es fácilmente accesible para escanear con el móvil.</li>
            </ul>
            <p>
              También es posible colocarlo en la parte inferior central o junto al bloque de
              datos bancarios en cualquier posición de la factura, siempre que esté claramente
              visible y no quede comprimido.
            </p>

            <h3>Tamaño mínimo recomendado: 2 × 2 cm</h3>
            <p>
              El GiroCode debe tener al menos <strong>2 × 2 centímetros</strong> en la versión
              impresa para garantizar que las cámaras de smartphones de gama media puedan
              leerlo correctamente. Un tamaño de <strong>3 × 3 cm</strong> es más seguro y
              sigue siendo discreto en una factura estándar A4.
            </p>
            <p>
              En documentos digitales (PDF enviado por correo), el tamaño mínimo es menos
              crítico porque el destinatario puede hacer zoom en el documento antes de
              escanear. Sin embargo, en impresión física, el tamaño mínimo es fundamental.
            </p>

            <h3>Contraste y calidad de impresión</h3>
            <p>
              Para que el GiroCode sea legible:
            </p>
            <ul>
              <li>
                <strong>Módulos oscuros sobre fondo claro:</strong> La combinación estándar
                es negro sobre blanco. Evitar módulos grises o con poco contraste.
              </li>
              <li>
                <strong>No imprimir sobre fondos de color o imágenes:</strong> El código debe
                estar sobre un fondo completamente blanco o muy claro.
              </li>
              <li>
                <strong>Zona de silencio:</strong> Dejar un margen mínimo de 4 módulos
                alrededor del código, sin texto ni elementos gráficos.
              </li>
              <li>
                <strong>Impresora de calidad:</strong> Las impresoras de baja calidad o con
                tóner agotado pueden producir módulos borrosos que dificulten la lectura.
              </li>
            </ul>
          </section>

          <section aria-labelledby="software-facturacion" className="mt-10">
            <h2 id="software-facturacion">GiroCode en diferentes programas de facturación</h2>
            <p>
              La forma más cómoda de incluir GiroCodes en todas tus facturas es usar un
              software de facturación que los genere automáticamente. A continuación comparamos
              las principales opciones:
            </p>

            <div className="not-prose mt-6 space-y-4">
              <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="mb-2 text-base font-semibold text-slate-50">
                      sevDesk – GiroCode automático en cada factura
                    </h3>
                    <p className="mb-3 text-sm text-slate-300">
                      sevDesk es un software de contabilidad y facturación en la nube para
                      autónomos y pymes. Genera automáticamente un GiroCode en cada factura
                      PDF, configurado con el IBAN de tu cuenta bancaria vinculada, el importe
                      de la factura y el número de factura como concepto. No necesitas hacer
                      nada manualmente: cada factura que envíes incluirá el GiroCode correcto.
                      Además, sevDesk gestiona la contabilidad completa, los pagos pendientes
                      y se conecta con más de 1.500 bancos alemanes y europeos.
                    </p>
                    <ul className="mb-4 space-y-1 text-sm text-slate-400">
                      <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> GiroCode automático en facturas</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Contabilidad completa integrada</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Conexión bancaria directa</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Cumple normativa fiscal alemana y europea</li>
                    </ul>
                    <a
                      href="https://www.awin1.com/cread.php?awinmid=15944&awinaffid=2793610"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-500"
                    >
                      Probar sevDesk gratis *<span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="mb-2 text-base font-semibold text-slate-50">
                      FastBill – Facturación rápida con GiroCode integrado
                    </h3>
                    <p className="mb-3 text-sm text-slate-300">
                      FastBill es una herramienta de facturación diseñada para la velocidad
                      y simplicidad. Perfecta para freelances y autónomos que necesitan crear
                      facturas profesionales en minutos. FastBill incluye la generación de
                      GiroCodes en sus facturas PDF y ofrece seguimiento automático de pagos,
                      recordatorios de pago y gestión de clientes. Su interfaz intuitiva la
                      hace ideal para quienes no quieren complicarse con la contabilidad.
                    </p>
                    <ul className="mb-4 space-y-1 text-sm text-slate-400">
                      <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Facturas con GiroCode en minutos</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Seguimiento automático de pagos</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Interfaz simple e intuitiva</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Recordatorios de pago automáticos</li>
                    </ul>
                    <a
                      href="https://www.awin1.com/cread.php?awinmid=20766&awinaffid=2793610"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-600"
                    >
                      Probar FastBill gratis *<span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="mb-2 text-base font-semibold text-slate-50">
                      GiroCode Generator – Gratuito, local, privado
                    </h3>
                    <p className="mb-3 text-sm text-slate-300">
                      Nuestro generador es ideal para quienes crean facturas con otras
                      herramientas (Word, LibreOffice, Canva…) y quieren añadir un GiroCode
                      manualmente. Genera el código QR directamente en tu navegador, sin
                      enviar ningún dato a ningún servidor. Puedes descargarlo como PNG o SVG
                      e insertarlo en tu factura. Completamente gratuito, sin registro.
                    </p>
                    <ul className="mb-4 space-y-1 text-sm text-slate-400">
                      <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> 100 % gratuito y sin registro</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Todos los datos procesados localmente</li>
                      <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Descarga en PNG y SVG</li>
                      <li className="flex items-center gap-2"><span className="text-yellow-400">–</span> No genera la factura completa, solo el código QR</li>
                    </ul>
                    <Link
                      href="/es"
                      className="inline-flex items-center gap-2 rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-600"
                    >
                      Usar el generador gratuito <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="paso-a-paso-factura" className="mt-10">
            <h2 id="paso-a-paso-factura">Paso a paso: crear una factura con GiroCode</h2>
            <p>
              Si usas nuestro generador gratuito junto con tu herramienta de facturación
              habitual, el proceso es el siguiente:
            </p>
            <ol>
              <li>
                <strong>Crea tu factura</strong> con tu herramienta habitual (Word, LibreOffice,
                Google Docs, Canva, etc.) con todos los elementos legales obligatorios.
                Deja un espacio en la esquina inferior derecha para el código QR (aprox. 3 × 3 cm).
              </li>
              <li>
                <strong>Ve al generador de GiroCode</strong> en{' '}
                <Link href="/es" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  nuestra página de inicio
                </Link>{' '}
                e introduce:
                <ul>
                  <li>Nombre del beneficiario (tu nombre o el de tu empresa)</li>
                  <li>Tu IBAN</li>
                  <li>El importe total de la factura (con IVA)</li>
                  <li>El número de factura como concepto</li>
                </ul>
              </li>
              <li>
                <strong>Genera el código QR</strong> haciendo clic en el botón de generación.
                El código aparece en pantalla de forma instantánea.
              </li>
              <li>
                <strong>Descarga el código</strong> como PNG (para Word/LibreOffice) o SVG
                (para herramientas vectoriales como Canva o Illustrator).
              </li>
              <li>
                <strong>Inserta el código</strong> en tu factura en la posición reservada.
                Asegúrate de que tenga al menos 2 × 2 cm de tamaño y un margen blanco alrededor.
              </li>
              <li>
                <strong>Exporta a PDF</strong> y envía la factura a tu cliente.
              </li>
            </ol>
          </section>

          <section aria-labelledby="faq-rechnung" className="mt-10">
            <h2 id="faq-rechnung">Preguntas frecuentes</h2>

            <h3>1. ¿Es obligatorio incluir un GiroCode en las facturas?</h3>
            <p>
              No, el GiroCode es completamente opcional. No existe ninguna normativa legal que
              obligue a incluirlo en las facturas. Es simplemente una mejora que facilita el
              proceso de pago para el cliente y el cobro para el emisor.
            </p>

            <h3>2. ¿El GiroCode sustituye a los datos bancarios en la factura?</h3>
            <p>
              No. El GiroCode complementa los datos bancarios pero no los sustituye. Es buena
              práctica incluir tanto el GiroCode como los datos bancarios en texto (IBAN, nombre
              del banco), para que los clientes que no tengan una app compatible también puedan
              realizar la transferencia manualmente.
            </p>

            <h3>3. ¿Puedo usar el mismo GiroCode para todas mis facturas?</h3>
            <p>
              No es recomendable. Cada factura debe tener su propio GiroCode con el importe
              correcto y el número de factura en el concepto. Si usas el mismo código para
              todas las facturas, el concepto no identificará cada pago individualmente,
              dificultando la conciliación contable.
            </p>

            <h3>4. ¿Qué pasa si el cliente paga un importe diferente al del GiroCode?</h3>
            <p>
              Los datos del GiroCode son sugerencias iniciales. El cliente puede modificar el
              importe antes de confirmar la transferencia. Si un cliente paga menos de lo
              indicado, habrá un pago parcial y deberás gestionar la diferencia manualmente.
              Si paga más, tendrás un exceso que debes devolver.
            </p>

            <h3>5. ¿El GiroCode funciona para facturas internacionales dentro de la UE?</h3>
            <p>
              Sí, siempre que el cliente tenga una cuenta bancaria en un país de la zona SEPA
              y su app bancaria soporte el estándar EPC/SEPA-QR. Para clientes fuera de la
              zona SEPA, el GiroCode no es aplicable y deberás usar otros métodos de pago.
            </p>

            <h3>6. ¿Puedo incluir el GiroCode en facturas electrónicas (e-factura)?</h3>
            <p>
              Sí. En la mayoría de los formatos de factura electrónica (XML, PDF/A, ZUGFeRD,
              Factur-X), es posible incluir una representación visual del GiroCode. Algunos
              formatos de e-factura incluso permiten incluir los datos de pago en campos
              estructurados que equivalen al contenido del GiroCode.
            </p>

            <h3>7. ¿Se puede usar el GiroCode para el cobro de cuotas de asociación?</h3>
            <p>
              Absolutamente sí, y es uno de los usos más populares. Las asociaciones usan
              GiroCodes para facilitar el pago de cuotas anuales o mensuales. Se puede crear
              un GiroCode diferente para cada socio (con el número de socio en el concepto)
              o un GiroCode genérico sin importe para donaciones y cuotas de importe libre.
            </p>

            <h3>8. ¿Puedo enviar el GiroCode por correo electrónico sin imprimirlo?</h3>
            <p>
              Sí. El GiroCode puede incluirse en el cuerpo de un correo electrónico o en
              un PDF adjunto. El cliente puede escanear el código desde la pantalla de su
              ordenador o móvil usando la función de escaneo QR de su app bancaria. La
              mayoría de las apps permiten escanear desde la galería de fotos del móvil,
              por lo que el cliente puede hacer una captura de pantalla y escanearla.
            </p>
          </section>

          <section aria-labelledby="mas-articulos-rechnung" className="mt-10">
            <h2 id="mas-articulos-rechnung">Artículos relacionados</h2>
            <ul>
              <li>
                <Link href="/es/wissen/girocode" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  ¿Qué es un GiroCode? – Todo lo que necesitas saber
                </Link>
              </li>
              <li>
                <Link href="/es/wissen/betrag-und-zweck" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  Importe y concepto de pago en GiroCode
                </Link>
              </li>
              <li>
                <Link href="/es/wissen/iban-bic" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  IBAN & BIC para GiroCode
                </Link>
              </li>
              <li>
                <Link href="/es/wissen/banking-apps" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  Apps bancarias compatibles con GiroCode
                </Link>
              </li>
              <li>
                <Link href="/es/wissen/scannen" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  Cómo escanear un GiroCode
                </Link>
              </li>
            </ul>
          </section>

          <div className="mt-10 flex flex-col gap-6 border-t border-slate-800 pt-8">
            <p className="mb-2">
              <Link
                href="/es"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-500"
              >
                Crear un GiroCode ahora →
              </Link>
            </p>
            <p className="text-xs text-slate-500 border-t border-slate-800 pt-6">
              * Divulgación: Los enlaces marcados con * son enlaces de afiliado. Si compras a
              través de estos enlaces, recibimos una pequeña comisión sin coste adicional para ti.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
