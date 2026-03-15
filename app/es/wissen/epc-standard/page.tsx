import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Norma EPC & SEPA-QR – Estructura técnica explicada',
  description:
    'La norma EPC para GiroCodes explicada: estructura, campos, versiones y reglas del código QR SEPA en términos sencillos.',
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
            <li className="text-slate-400">Norma EPC & SEPA-QR</li>
          </ol>
        </nav>

        <header className="mb-8 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Técnica · Norma EPC
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Norma EPC & SEPA-QR – Estructura técnica explicada
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              El GiroCode se basa en un estándar técnico preciso definido por el European Payments
              Council (EPC). En esta guía te explicamos línea por línea cómo está estructurado el
              payload, qué versiones existen, cómo funciona la corrección de errores y cómo
              implementar la generación en código JavaScript.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-slate-200 prose-code:text-emerald-400 prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700">

          <section aria-labelledby="que-es-epc">
            <h2 id="que-es-epc">¿Qué es la norma EPC?</h2>
            <p>
              La <strong>norma EPC</strong> para códigos QR de pago es un estándar técnico
              publicado y mantenido por el <strong>European Payments Council (EPC)</strong>, el
              organismo que coordina los esquemas de pago SEPA en Europa. El documento oficial
              se denomina <em>«EPC069-12 Quick Response Code – Guidelines to Enable the Data
              Capture for the Initiation of a SCT»</em>, siendo SCT la abreviatura de
              SEPA Credit Transfer (transferencia de crédito SEPA).
            </p>

            <h3>El European Payments Council</h3>
            <p>
              El EPC fue fundado en 2002 por los principales bancos y asociaciones bancarias
              europeas con el objetivo de crear una zona de pagos unificada en euros: el área
              SEPA. Entre sus responsabilidades está la definición de los esquemas de
              transferencia SEPA (SCT), de débito directo SEPA (SDD) y de transferencia
              instantánea SEPA (SCT Inst), además del estándar para los códigos QR de pago
              que es el objeto de este artículo.
            </p>

            <h3>Historia y desarrollo del estándar</h3>
            <p>
              El EPC publicó la primera versión de las directrices para el código QR SEPA en
              2012. A lo largo de los años se han publicado varias revisiones para adaptarse
              a nuevas necesidades técnicas y corregir ambigüedades. La versión 2 (002) del
              estándar eliminó la obligatoriedad del BIC, que desde 2016 ya no es necesario
              para transferencias SEPA nacionales ni para la mayoría de las internacionales
              dentro de la zona SEPA.
            </p>

            <h3>¿Por qué se introdujo?</h3>
            <p>
              Antes de la existencia de este estándar, cada banco o región podía tener su
              propio formato de código QR de pago, lo que generaba incompatibilidades. El
              EPC definió un formato único para garantizar que cualquier código QR generado
              por cualquier emisor de facturas pueda ser leído por cualquier app bancaria
              compatible, independientemente del banco o del país de origen dentro de la
              zona SEPA.
            </p>

            <h3>Adopción en Europa</h3>
            <p>
              El estándar está ampliamente adoptado en Alemania, Austria, Bélgica, Países
              Bajos y Francia, donde la mayoría de las apps bancarias soportan la lectura de
              códigos EPC. En España, Italia y otros países del sur de Europa la adopción es
              más reciente pero crece de forma acelerada, impulsada por la digitalización de
              la facturación. Suiza tiene su propio sistema (QR-Bill) con similitudes pero
              no totalmente compatible.
            </p>
          </section>

          <section aria-labelledby="estructura-payload" className="mt-10">
            <h2 id="estructura-payload">La estructura técnica del payload EPC</h2>
            <p>
              El contenido (payload) de un GiroCode es un bloque de texto estructurado en
              líneas, donde cada línea tiene un significado específico y debe respetar un
              orden fijo. A continuación se describe cada línea con su contenido, restricciones
              y un ejemplo práctico:
            </p>

            <div className="not-prose mt-6 rounded-xl border border-slate-700 bg-slate-900 p-5">
              <pre className="overflow-x-auto text-sm text-emerald-400">
{`BCD
002
1
SCT
SSKMDEMMXXX
Max Mustermann GmbH
DE89370400440532013000
EUR199.99

Factura FA-2024-015`}
              </pre>
            </div>

            <h3 className="mt-6">Línea 1: BCD (Service Tag)</h3>
            <p>
              <strong>Contenido fijo:</strong> <code>BCD</code><br />
              El Service Tag identifica este código QR como un GiroCode/SEPA Credit Transfer.
              Siempre debe ser exactamente <code>BCD</code>. Ningún otro valor es válido. Las
              apps bancarias reconocen este identificador para saber que están ante un código de
              pago SEPA y no ante un código QR genérico.
            </p>

            <h3>Línea 2: Versión</h3>
            <p>
              <strong>Valores posibles:</strong> <code>001</code> o <code>002</code><br />
              Indica la versión del estándar EPC utilizada. La versión <code>001</code> fue la
              original y requería el BIC obligatoriamente. La versión <code>002</code> hace el
              BIC opcional. En la práctica, hoy se recomienda usar siempre <code>002</code>.
            </p>

            <h3>Línea 3: Codificación de caracteres</h3>
            <p>
              <strong>Valores posibles:</strong> <code>1</code> (UTF-8), <code>2</code>
              (ISO 8859-1), <code>3</code> (ISO 8859-2), etc.<br />
              El valor <code>1</code> indica UTF-8, que es la codificación recomendada y la
              más compatible con caracteres especiales de todos los idiomas europeos (tildes,
              diéresis, caracteres especiales…). Es importante ser consistente: la codificación
              indicada aquí debe coincidir con la codificación real del texto del payload.
            </p>

            <h3>Línea 4: Identificación de la función</h3>
            <p>
              <strong>Contenido fijo:</strong> <code>SCT</code><br />
              SCT significa «SEPA Credit Transfer» (Transferencia de Crédito SEPA). Es el
              único valor definido actualmente por el estándar EPC para GiroCodes. Identifica
              el tipo de operación de pago que se va a iniciar.
            </p>

            <h3>Línea 5: BIC del banco beneficiario</h3>
            <p>
              <strong>Formato:</strong> 8 u 11 caracteres alfanuméricos, o vacío en versión 002<br />
              Ejemplo: <code>SSKMDEMMXXX</code><br />
              En la versión 002 del estándar, el BIC es opcional. Si no se incluye, esta línea
              debe estar vacía (línea en blanco). Desde la migración SEPA de 2016, los bancos
              de la zona SEPA pueden derivar el BIC a partir del IBAN, por lo que ya no es
              estrictamente necesario para la mayoría de los pagos nacionales e internacionales
              dentro de SEPA. Sin embargo, algunos implementadores todavía lo requieren para
              mayor compatibilidad.
            </p>

            <h3>Línea 6: Nombre del beneficiario</h3>
            <p>
              <strong>Longitud máxima:</strong> 70 caracteres<br />
              Ejemplo: <code>Max Mustermann GmbH</code><br />
              El nombre del beneficiario tal como aparece en la cuenta bancaria. Este campo
              es obligatorio y no puede estar vacío. Se recomienda usar el nombre exacto que
              figura en el contrato bancario para evitar rechazos en la validación de la
              transferencia por parte del banco destinatario.
            </p>

            <h3>Línea 7: IBAN del beneficiario</h3>
            <p>
              <strong>Formato:</strong> IBAN estándar (hasta 34 caracteres alfanuméricos)<br />
              Ejemplo: <code>DE89370400440532013000</code><br />
              El IBAN identifica de forma única la cuenta bancaria del beneficiario dentro de
              la zona SEPA. Debe ser un IBAN válido según el algoritmo Mod-97. Cambiar un
              solo dígito puede hacer que el pago sea rechazado o vaya a una cuenta incorrecta.
            </p>

            <h3>Línea 8: Importe</h3>
            <p>
              <strong>Formato:</strong> <code>EUR</code> seguido del importe con punto decimal, o vacío<br />
              Ejemplo: <code>EUR199.99</code><br />
              El importe es opcional. Si se incluye, debe seguir el formato exacto: el código
              ISO de la moneda (solo <code>EUR</code> está definido en el estándar EPC) seguido
              directamente del importe sin espacios, usando punto como separador decimal. El
              importe máximo definido por el estándar es de <code>EUR999999999.99</code>
              (aproximadamente 999 millones de euros). Si el campo se deja vacío, el pagador
              deberá introducir el importe manualmente en su app bancaria.
            </p>

            <h3>Línea 9: Tipo de objeto (Purpose)</h3>
            <p>
              <strong>Generalmente vacío</strong><br />
              Este campo permite indicar el propósito de la transferencia según los códigos
              ISO 20022 (por ejemplo <code>SALA</code> para salarios, <code>CHAR</code> para
              donaciones benéficas). En la práctica comercial habitual este campo se deja vacío
              y no afecta al procesamiento de la transferencia.
            </p>

            <h3>Línea 10: Referencia estructurada (Structured Creditor Reference)</h3>
            <p>
              <strong>Generalmente vacío</strong><br />
              Permite incluir una referencia estructurada como el código de referencia belga
              (VCS/OGM) o la referencia ISO 11649. En la mayoría de los casos, especialmente
              en España y Alemania, este campo se deja vacío y se usa la línea 11 para el
              concepto de pago libre.
            </p>

            <h3>Línea 11: Referencia de pago (Remittance Information)</h3>
            <p>
              <strong>Longitud máxima:</strong> 140 caracteres<br />
              Ejemplo: <code>Factura FA-2024-015</code><br />
              El concepto de pago o referencia libre. Este es el campo que el pagador ve
              reflejado en su extracto bancario y que el emisor de la factura utiliza para
              identificar el pago en su contabilidad. Se recomienda incluir siempre el número
              de factura y, si procede, el nombre del cliente.
            </p>
          </section>

          <section aria-labelledby="versiones-epc" className="mt-10">
            <h2 id="versiones-epc">Versiones EPC comparadas</h2>

            <div className="not-prose overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 pr-4 font-semibold text-slate-200">Característica</th>
                    <th className="py-2 pr-4 font-semibold text-sky-300">Versión 001</th>
                    <th className="py-2 font-semibold text-sky-300">Versión 002</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr>
                    <td className="py-2 pr-4">BIC requerido</td>
                    <td className="py-2 pr-4 text-red-400">Obligatorio</td>
                    <td className="py-2 text-emerald-400">Opcional</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Compatibilidad actual</td>
                    <td className="py-2 pr-4 text-yellow-400">Reducida</td>
                    <td className="py-2 text-emerald-400">Amplia</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Recomendación</td>
                    <td className="py-2 pr-4 text-slate-500">No recomendada</td>
                    <td className="py-2 text-emerald-400">Recomendada</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Pagos nacionales SEPA sin BIC</td>
                    <td className="py-2 pr-4 text-red-400">No soportado</td>
                    <td className="py-2 text-emerald-400">Soportado</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              La versión 001 se considera obsoleta y ya no debe usarse en nuevas implementaciones.
              Todos los generadores modernos de GiroCode, incluido el nuestro, generan códigos
              versión 002 por defecto.
            </p>
          </section>

          <section aria-labelledby="correccion-errores" className="mt-10">
            <h2 id="correccion-errores">Corrección de errores y calidad del código QR</h2>
            <p>
              Los códigos QR pueden tolerar cierto nivel de daño o suciedad gracias a los
              <strong> algoritmos de corrección de errores Reed-Solomon</strong>. Existen cuatro
              niveles de corrección de errores definidos en el estándar QR:
            </p>
            <ul>
              <li><strong>Nivel L (Low):</strong> recupera hasta el 7 % del dato dañado.</li>
              <li><strong>Nivel M (Medium):</strong> recupera hasta el 15 %.</li>
              <li><strong>Nivel Q (Quartile):</strong> recupera hasta el 25 %.</li>
              <li><strong>Nivel H (High):</strong> recupera hasta el 30 %.</li>
            </ul>

            <h3>¿Por qué el estándar EPC especifica el nivel M?</h3>
            <p>
              El estándar EPC especifica que los GiroCodes deben generarse con el
              <strong> nivel de corrección de errores M</strong>, que recupera hasta el 15 %
              de datos dañados. Esta elección es un equilibrio cuidadoso entre dos factores
              contrapuestos:
            </p>
            <ul>
              <li>
                <strong>Mayor corrección de errores = código QR más grande y denso:</strong>
                Un nivel H genera un código QR con más módulos (puntos), lo que lo hace más
                grande para la misma cantidad de datos. Esto puede ser un problema cuando el
                código se imprime en un espacio reducido de una factura.
              </li>
              <li>
                <strong>Menor corrección de errores = código más compacto:</strong>
                El nivel L sería más compacto, pero dejaría el código vulnerable a daños
                mínimos durante la impresión o el escaneo.
              </li>
            </ul>
            <p>
              El nivel M ofrece suficiente robustez para uso en facturas impresas (donde puede
              haber arañazos, marcas de plegado o manchas de impresora) sin aumentar
              innecesariamente el tamaño del código.
            </p>

            <h3>Impacto en la legibilidad y tamaño mínimo</h3>
            <p>
              Para garantizar una buena legibilidad, el GiroCode debe cumplir los siguientes
              requisitos mínimos:
            </p>
            <ul>
              <li>
                <strong>Tamaño mínimo impreso:</strong> 2 × 2 cm (recomendado). Por debajo de
                este tamaño, las cámaras de smartphones de gama media pueden tener dificultades
                para leer el código.
              </li>
              <li>
                <strong>Contraste:</strong> El código debe ser oscuro sobre fondo claro (o
                viceverso si se usa inversión de colores compatible). El contraste debe ser
                nítido; evitar impresión sobre fondos de color, degradados o imágenes.
              </li>
              <li>
                <strong>Zona de silencio:</strong> El código QR necesita un margen de al menos
                4 módulos alrededor de todos sus lados. No colocar texto ni elementos gráficos
                dentro de este margen.
              </li>
              <li>
                <strong>Resolución digital:</strong> Para uso en pantallas o PDF digitales, se
                recomienda generar el código QR en formato vectorial (SVG) o en alta resolución
                (mínimo 200 × 200 píxeles para visualización en pantalla).
              </li>
            </ul>
          </section>

          <section aria-labelledby="implementacion-tecnica" className="mt-10">
            <h2 id="implementacion-tecnica">Implementación técnica</h2>
            <p>
              Si quieres implementar la generación de GiroCodes en tu propia aplicación, el
              primer paso es construir el payload EPC correctamente y luego usar una librería
              de generación de QR para codificarlo. Aquí tienes un ejemplo en JavaScript:
            </p>

            <div className="not-prose rounded-xl border border-slate-700 bg-slate-900 p-5">
              <p className="mb-3 text-xs text-slate-500">Ejemplo JavaScript: generar payload EPC</p>
              <pre className="overflow-x-auto text-sm text-emerald-400">
{`function generateEPCPayload({
  name,       // Nombre del beneficiario (máx. 70 chars)
  iban,       // IBAN del beneficiario
  amount,     // Importe en euros (ej: 199.99) o null
  reference,  // Concepto de pago (máx. 140 chars)
  bic = '',   // BIC (opcional en versión 002)
}) {
  const amountStr = amount !== null
    ? 'EUR' + amount.toFixed(2)
    : '';

  return [
    'BCD',          // Línea 1: Service Tag
    '002',          // Línea 2: Versión
    '1',            // Línea 3: UTF-8
    'SCT',          // Línea 4: SEPA Credit Transfer
    bic,            // Línea 5: BIC (opcional)
    name,           // Línea 6: Nombre beneficiario
    iban,           // Línea 7: IBAN
    amountStr,      // Línea 8: Importe
    '',             // Línea 9: Purpose (vacío)
    '',             // Línea 10: Ref. estructurada (vacío)
    reference,      // Línea 11: Concepto de pago
  ].join('\\n');
}

// Uso:
const payload = generateEPCPayload({
  name: 'Max Mustermann GmbH',
  iban: 'DE89370400440532013000',
  amount: 199.99,
  reference: 'Factura FA-2024-015',
});
// Después pasa payload a tu librería QR favorita
// (ej: qrcode, qr-code-generator)`}
              </pre>
            </div>

            <p className="mt-4">
              Una vez generado el payload, se pasa a una librería de generación de código QR
              configurada con nivel de corrección de errores M. En JavaScript/Node.js, la
              librería <code>qrcode</code> (npm) permite especificar este nivel con el parámetro
              <code>errorCorrectionLevel: &apos;M&apos;</code>.
            </p>
          </section>

          <section aria-labelledby="errores-comunes-epc" className="mt-10">
            <h2 id="errores-comunes-epc">Errores comunes con la norma EPC</h2>
            <p>
              A continuación se describen los errores más frecuentes que se cometen al
              implementar o usar la norma EPC para GiroCodes:
            </p>
            <ul>
              <li>
                <strong>IBAN con espacios:</strong> Algunos usuarios copian el IBAN con espacios
                cada cuatro dígitos (por ejemplo <code>DE89 3704 0044 0532 0130 00</code>).
                El estándar EPC requiere el IBAN sin espacios.
              </li>
              <li>
                <strong>Importe con coma decimal:</strong> El estándar EPC usa punto como
                separador decimal (<code>EUR199.99</code>), no coma. Usar coma provocará
                errores de lectura en muchas apps.
              </li>
              <li>
                <strong>Número de líneas incorrecto:</strong> El payload debe tener exactamente
                las líneas en el orden correcto. Una línea de más o de menos, o líneas en
                orden equivocado, producirá errores al escanear.
              </li>
              <li>
                <strong>Caracteres no permitidos:</strong> Aunque UTF-8 es la codificación
                estándar, algunos caracteres especiales (emojis, caracteres de control) pueden
                causar problemas en ciertas apps bancarias. Se recomienda usar solo caracteres
                del rango Latin-1 para máxima compatibilidad.
              </li>
              <li>
                <strong>Nivel de corrección de errores incorrecto:</strong> Generar el código
                QR con nivel L o H en lugar del nivel M especificado por el EPC puede reducir
                la compatibilidad con algunas apps bancarias estrictas en la validación.
              </li>
              <li>
                <strong>Nombre del beneficiario truncado sin aviso:</strong> Si el nombre del
                beneficiario supera los 70 caracteres y se trunca sin validación, el nombre que
                recibe la app puede diferir del nombre real en la cuenta, lo que podría generar
                confusión o rechazo por parte de algunos bancos.
              </li>
              <li>
                <strong>Concepto de pago superior a 140 caracteres:</strong> El estándar limita
                el concepto a 140 caracteres. Los caracteres adicionales serán ignorados o
                generarán un error de lectura.
              </li>
            </ul>
          </section>

          <section aria-labelledby="herramientas-epc" className="mt-10">
            <h2 id="herramientas-epc">Herramientas profesionales que soportan la norma EPC</h2>
            <p>
              Si trabajas con facturas de forma habitual y quieres que la generación de
              GiroCodes cumpla siempre la norma EPC de forma automática, te recomendamos
              estas soluciones:
            </p>

            <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                <h3 className="mb-2 text-base font-semibold text-slate-50">sevDesk</h3>
                <p className="mb-4 text-sm text-slate-300">
                  sevDesk genera automáticamente GiroCodes que cumplen el estándar EPC al crear
                  facturas. No necesitas preocuparte por el formato ni por la versión del payload:
                  el software lo hace correctamente por ti. Compatible con SEPA y con la
                  normativa fiscal alemana y española.
                </p>
                <a
                  href="https://www.awin1.com/cread.php?awinmid=15944&awinaffid=2793610"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-500"
                >
                  Probar sevDesk gratis *<span aria-hidden>→</span>
                </a>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                <h3 className="mb-2 text-base font-semibold text-slate-50">FastBill</h3>
                <p className="mb-4 text-sm text-slate-300">
                  FastBill integra la generación de GiroCodes EPC en su flujo de facturación.
                  Cada factura puede incluir automáticamente el código QR de pago correcto,
                  reduciendo al mínimo los errores y acelerando el cobro. Ideal para autónomos
                  que envían muchas facturas cada mes.
                </p>
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

            <p className="mt-4">
              También puedes usar nuestro{' '}
              <Link href="/es" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                Generador de GiroCode gratuito
              </Link>{' '}
              para crear GiroCodes que cumplen el estándar EPC versión 002 directamente en tu
              navegador, sin enviar datos a ningún servidor.
            </p>
          </section>

          <section aria-labelledby="mas-articulos-epc" className="mt-10">
            <h2 id="mas-articulos-epc">Artículos relacionados</h2>
            <ul>
              <li>
                <Link href="/es/wissen/girocode" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  ¿Qué es un GiroCode? – Todo lo que necesitas saber
                </Link>
              </li>
              <li>
                <Link href="/es/wissen/iban-bic" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  IBAN & BIC para GiroCode – Guía completa
                </Link>
              </li>
              <li>
                <Link href="/es/wissen/betrag-und-zweck" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  Importe y concepto de pago en GiroCode
                </Link>
              </li>
              <li>
                <Link href="/es/wissen/rechnung" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  GiroCode en facturas – La guía completa
                </Link>
              </li>
              <li>
                <Link href="/es/wissen/banking-apps" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  Apps bancarias compatibles con GiroCode
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
