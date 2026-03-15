import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Apps bancarias compatibles con GiroCode – Resumen completo 2025',
  description:
    '¿Qué apps bancarias soportan GiroCodes? Sparkasse, ING, DKB, Volksbank y más – resumen completo con guías paso a paso.',
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

        <header className="mb-8 space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-[11px] font-medium text-sky-300 ring-1 ring-sky-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Práctica · Apps bancarias
          </p>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Apps bancarias compatibles con GiroCode – Resumen completo 2025
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
              Para pagar con un GiroCode, el cliente necesita una app bancaria que soporte
              el estándar SEPA-QR. En esta guía encontrarás qué apps lo soportan, cómo
              activar la función de escaneo en cada una de ellas, y qué hacer si tu app
              no tiene esta funcionalidad.
            </p>
          </div>
        </header>

        <article className="prose prose-invert prose-slate max-w-none prose-headings:text-slate-50 prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-slate-200 prose-code:text-emerald-400">

          <section aria-labelledby="apps-compatibles">
            <h2 id="apps-compatibles">¿Qué apps bancarias soportan GiroCodes?</h2>
            <p>
              La mayoría de las apps bancarias de los grandes bancos alemanes y de otros países
              de la zona SEPA soportan la lectura de GiroCodes (SEPA-QR). La función suele
              encontrarse en la sección de «Transferencias» o «Pagos», identificada con un
              icono de cámara o código QR.
            </p>
            <p>
              A continuación se muestra un resumen de las principales apps bancarias y su
              compatibilidad con GiroCodes:
            </p>
            <div className="not-prose overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 pr-3 font-semibold text-slate-200">App bancaria</th>
                    <th className="py-2 pr-3 font-semibold text-slate-200">País</th>
                    <th className="py-2 pr-3 font-semibold text-slate-200">GiroCode</th>
                    <th className="py-2 font-semibold text-slate-200">Notas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300 text-xs">
                  <tr>
                    <td className="py-2 pr-3 font-medium">Sparkasse App</td>
                    <td className="py-2 pr-3">DE</td>
                    <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                    <td className="py-2">Función «Überweisen per QR» en transferencias</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">VR-Banking / Volksbank</td>
                    <td className="py-2 pr-3">DE</td>
                    <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                    <td className="py-2">Icono de cámara en formulario de transferencia</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">ING Banking to go</td>
                    <td className="py-2 pr-3">DE</td>
                    <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                    <td className="py-2">Opción «QR-Code scannen» en transferencias</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">DKB Banking</td>
                    <td className="py-2 pr-3">DE</td>
                    <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                    <td className="py-2">Soporte integrado en nueva app DKB</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">Commerzbank</td>
                    <td className="py-2 pr-3">DE</td>
                    <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                    <td className="py-2">Icono QR en sección de pagos</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">Deutsche Bank</td>
                    <td className="py-2 pr-3">DE</td>
                    <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                    <td className="py-2">Disponible en app actualizada</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">N26</td>
                    <td className="py-2 pr-3">DE/EU</td>
                    <td className="py-2 pr-3 text-yellow-400">⚠️ Parcial</td>
                    <td className="py-2">Soporte limitado; verificar versión actual</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">Revolut</td>
                    <td className="py-2 pr-3">EU</td>
                    <td className="py-2 pr-3 text-yellow-400">⚠️ Parcial</td>
                    <td className="py-2">No es banco SEPA nativo; soporte variable</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">Raiffeisen (AT)</td>
                    <td className="py-2 pr-3">AT</td>
                    <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                    <td className="py-2">Formato Stuzza-QR compatible</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">Bank Austria</td>
                    <td className="py-2 pr-3">AT</td>
                    <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                    <td className="py-2">App George/Bank Austria</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">ING (NL/BE)</td>
                    <td className="py-2 pr-3">NL/BE</td>
                    <td className="py-2 pr-3 text-emerald-400">✅ Sí</td>
                    <td className="py-2">Integrado en app de pagos</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">CaixaBank</td>
                    <td className="py-2 pr-3">ES</td>
                    <td className="py-2 pr-3 text-yellow-400">⚠️ En desarrollo</td>
                    <td className="py-2">Soporte QR para pagos Bizum; SEPA-QR limitado</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">BBVA</td>
                    <td className="py-2 pr-3">ES</td>
                    <td className="py-2 pr-3 text-yellow-400">⚠️ En desarrollo</td>
                    <td className="py-2">QR disponible para pagos propios; SEPA-QR parcial</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-medium">Santander</td>
                    <td className="py-2 pr-3">ES</td>
                    <td className="py-2 pr-3 text-yellow-400">⚠️ Verificar</td>
                    <td className="py-2">Consultar versión actual de la app</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Nota: El soporte puede variar según la versión de la app. Verifica siempre en
              la app actualizada de tu banco. Información válida a fecha de 2025.
            </p>
          </section>

          <section aria-labelledby="paso-a-paso-escaneo" className="mt-10">
            <h2 id="paso-a-paso-escaneo">Paso a paso: escanear un GiroCode</h2>
            <p>
              Independientemente de la app bancaria concreta, el proceso general para escanear
              un GiroCode y realizar la transferencia sigue siempre estos pasos:
            </p>
            <ol>
              <li>
                <strong>Abre tu app bancaria</strong> y asegúrate de estar en la sección
                de transferencias o pagos.
              </li>
              <li>
                <strong>Busca el icono de cámara o QR</strong> en el formulario de
                transferencia. Normalmente aparece junto al campo del IBAN o como botón
                separado con el texto «Escanear QR», «Pagar con QR» o «Überweisen per QR».
              </li>
              <li>
                <strong>Activa la cámara</strong> y acepta el permiso de acceso a la cámara
                si la app lo solicita.
              </li>
              <li>
                <strong>Apunta al código QR</strong> de la factura o pantalla. Mantén el
                móvil estable y asegúrate de que el código esté bien iluminado y completamente
                dentro del recuadro de la cámara.
              </li>
              <li>
                <strong>Revisa los datos cargados:</strong> La app rellenará automáticamente
                el nombre del beneficiario, el IBAN, el importe y el concepto. Comprueba que
                todos los datos son correctos antes de continuar.
              </li>
              <li>
                <strong>Confirma la transferencia</strong> con tu PIN, huella dactilar o
                reconocimiento facial. El pago se ejecuta normalmente en segundos
                (transferencia SEPA normal) o de forma instantánea si ambos bancos soportan
                SEPA Instant.
              </li>
            </ol>
          </section>

          <section aria-labelledby="sparkasse-app" className="mt-10">
            <h2 id="sparkasse-app">Escanear con Sparkasse App</h2>
            <p>
              La Sparkasse App es la aplicación bancaria más utilizada en Alemania y tiene
              un soporte excelente para GiroCodes. El proceso es el siguiente:
            </p>
            <ol>
              <li>Abre la app de Sparkasse y navega a <strong>«Überweisen»</strong> (Transferir).</li>
              <li>
                En el formulario de transferencia, toca el <strong>icono de cámara</strong>
                que aparece en la esquina superior derecha o junto al campo del IBAN.
              </li>
              <li>
                La app abrirá la cámara con el lector de QR integrado. Apunta al GiroCode
                impreso en la factura o en la pantalla.
              </li>
              <li>
                Los campos se rellenan automáticamente con los datos del código. Verifica el
                nombre del beneficiario, el IBAN, el importe y el concepto.
              </li>
              <li>
                Si todo es correcto, toca <strong>«Weiter»</strong> (Siguiente) y confirma
                con tu PIN o biometría.
              </li>
            </ol>
            <p>
              La Sparkasse App también permite escanear GiroCodes desde la galería de fotos
              del móvil. Si tienes un PDF en el móvil, puedes hacer una captura de pantalla
              del código y luego seleccionar la imagen desde la galería al activar el escáner.
            </p>
          </section>

          <section aria-labelledby="vr-banking" className="mt-10">
            <h2 id="vr-banking">Escanear con VR-Banking (Volksbank/Raiffeisenbank)</h2>
            <p>
              Las cooperativas bancarias Volksbank y Raiffeisenbank utilizan la app VR-Banking,
              que también tiene soporte completo para GiroCodes:
            </p>
            <ol>
              <li>Abre VR-Banking y ve a <strong>«Überweisung»</strong> o <strong>«Zahlung»</strong>.</li>
              <li>
                Toca el <strong>icono de cámara</strong> en el campo del receptor/IBAN.
              </li>
              <li>Apunta la cámara al GiroCode. El lector detecta el código automáticamente.</li>
              <li>Comprueba los datos y confirma con ChipTAN, SmartTAN o biometría.</li>
            </ol>
          </section>

          <section aria-labelledby="ing-banking" className="mt-10">
            <h2 id="ing-banking">Escanear con ING Banking to go</h2>
            <p>
              ING Alemania ofrece una app moderna con soporte para GiroCodes integrado de
              forma muy accesible:
            </p>
            <ol>
              <li>Abre ING Banking to go y selecciona <strong>«Überweisung»</strong>.</li>
              <li>
                En la pantalla del formulario de transferencia, verás la opción
                <strong> «QR-Code scannen»</strong> o un icono de cámara.
              </li>
              <li>Escanea el GiroCode. Los datos se cargan automáticamente.</li>
              <li>Revisa y confirma con tu PIN o Touch ID/Face ID.</li>
            </ol>
            <p>
              ING también soporta la lectura de códigos QR desde imágenes guardadas en el
              dispositivo, lo cual es útil para facturas en PDF recibidas por correo.
            </p>
          </section>

          <section aria-labelledby="dkb-banking" className="mt-10">
            <h2 id="dkb-banking">Escanear con DKB Banking</h2>
            <p>
              El Deutsche Kreditbank (DKB) ha renovado su app completamente y ahora ofrece
              soporte para GiroCodes en su nueva versión:
            </p>
            <ol>
              <li>Abre la app DKB y ve a <strong>«Überweisen»</strong>.</li>
              <li>
                Busca el icono de QR o cámara en el campo del IBAN o en la barra superior.
              </li>
              <li>Activa el escáner y apunta al código de la factura.</li>
              <li>Verifica todos los datos y confirma el pago.</li>
            </ol>
            <p>
              Si tienes la versión antigua de la app DKB, puede que el soporte sea limitado.
              Asegúrate de tener la versión más reciente instalada.
            </p>
          </section>

          <section aria-labelledby="sin-escaner" className="mt-10">
            <h2 id="sin-escaner">¿Qué hacer si la app no tiene escáner QR?</h2>
            <p>
              Si la app de tu banco no tiene función de escaneo de GiroCodes, tienes varias
              alternativas:
            </p>
            <ul>
              <li>
                <strong>Actualizar la app:</strong> Muchos bancos han añadido soporte para
                GiroCodes en actualizaciones recientes. Asegúrate de tener la versión más
                nueva de la app.
              </li>
              <li>
                <strong>Usar el portal web bancario:</strong> Algunos bancos ofrecen la función
                de escaneo QR también en su versión web. Comprueba si tu banco la tiene en la
                sección de transferencias de la banca online.
              </li>
              <li>
                <strong>App de terceros compatible:</strong> Existen aplicaciones independientes
                que pueden leer GiroCodes y mostrar los datos para que los introduzcas
                manualmente en tu app bancaria. Son útiles como puente si tu banco no soporta
                el formato directamente.
              </li>
              <li>
                <strong>Introducir datos manualmente:</strong> Como último recurso, los datos
                del GiroCode (IBAN, importe, concepto) también están disponibles en texto en la
                factura, por lo que puedes copiarlos manualmente.
              </li>
              <li>
                <strong>Contactar al banco:</strong> Si tu banco no soporta GiroCodes y crees
                que debería, puedes solicitarlo directamente a través del servicio de atención
                al cliente. La demanda de los usuarios es uno de los factores que impulsa la
                adopción de estas funcionalidades.
              </li>
            </ul>
          </section>

          <section aria-labelledby="seguridad-escaneo" className="mt-10">
            <h2 id="seguridad-escaneo">Seguridad al escanear GiroCodes</h2>
            <p>
              Aunque el GiroCode es un método de pago seguro, como con cualquier operación
              bancaria, es importante tomar ciertas precauciones:
            </p>

            <h3>Siempre verificar datos antes de confirmar</h3>
            <p>
              El paso más importante en el proceso de pago con GiroCode es la
              <strong> revisión de los datos antes de confirmar</strong>. La app bancaria
              muestra todos los datos cargados desde el código (beneficiario, IBAN, importe,
              concepto) antes de ejecutar la transferencia. Nunca confirmes sin haber
              verificado:
            </p>
            <ul>
              <li>El nombre del beneficiario coincide con quien esperas pagar.</li>
              <li>El IBAN parece correcto (al menos los primeros 4-6 caracteres).</li>
              <li>El importe es el correcto según la factura.</li>
              <li>El concepto incluye el número de factura esperado.</li>
            </ul>

            <h3>Reconocer códigos QR manipulados</h3>
            <p>
              Un riesgo teórico con los GiroCodes impresos en papel es que alguien pegue
              una etiqueta con un código QR diferente encima del original. Esto es más
              relevante en contextos públicos (carteles, folletos) que en facturas personales.
              Si tienes dudas sobre la autenticidad de un GiroCode impreso:
            </p>
            <ul>
              <li>Compara los datos cargados por la app con los datos de texto de la factura.</li>
              <li>Verifica que el IBAN del código coincide con el IBAN que aparece en el texto de la factura.</li>
              <li>En caso de duda, introduce los datos manualmente desde el texto de la factura.</li>
            </ul>

            <h3>Quishing: phishing por código QR</h3>
            <p>
              El <strong>Quishing</strong> (QR + Phishing) es una técnica de fraude en la que
              los estafadores crean códigos QR fraudulentos que llevan a páginas web falsas
              o que contienen datos bancarios de cuentas de estafa. En el contexto de los
              GiroCodes, el quishing podría manifestarse como:
            </p>
            <ul>
              <li>
                <strong>Facturas falsas con GiroCode:</strong> Alguien envía una factura
                falsa con un GiroCode que lleva el dinero a una cuenta fraudulenta. Siempre
                verifica la autenticidad de las facturas que recibes.
              </li>
              <li>
                <strong>Carteles con QR alterados:</strong> En lugares públicos, códigos QR
                pegados encima de los originales. En el contexto bancario, siempre confirma
                los datos en la app antes de ejecutar.
              </li>
            </ul>
            <p>
              La mejor protección contra el quishing es siempre revisar cuidadosamente los
              datos mostrados por la app bancaria antes de confirmar cualquier pago.
            </p>
          </section>

          <section aria-labelledby="gestion-profesional-facturas" className="mt-10">
            <h2 id="gestion-profesional-facturas">Gestión profesional de facturas</h2>
            <p>
              Si emites facturas con GiroCodes de forma habitual y quieres automatizar todo
              el proceso, desde la creación de la factura hasta el seguimiento del pago,
              estas herramientas te serán de gran utilidad:
            </p>

            <div className="not-prose mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
                <h3 className="mb-2 text-base font-semibold text-slate-50">sevDesk</h3>
                <p className="mb-4 text-sm text-slate-300">
                  sevDesk genera facturas con GiroCode integrado, hace seguimiento automático
                  de los pagos recibidos (conectándose a tu banco) y contabiliza cada pago
                  en la cuenta correcta. Cuando tu cliente paga con el GiroCode, sevDesk
                  reconoce el pago por el concepto y marca la factura como pagada
                  automáticamente. La solución ideal para pymes que quieren cero trabajo
                  manual en la conciliación de pagos.
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
                  FastBill ofrece un seguimiento sencillo de pagos pendientes y envía
                  recordatorios automáticos para facturas vencidas. Con GiroCodes en las
                  facturas, los clientes pagan más rápido, lo que reduce la necesidad de
                  recordatorios. Una combinación muy efectiva para freelances que quieren
                  cobrar a tiempo sin esfuerzo manual.
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
          </section>

          <section aria-labelledby="mas-articulos-apps" className="mt-10">
            <h2 id="mas-articulos-apps">Artículos relacionados</h2>
            <ul>
              <li>
                <Link href="/es/wissen/scannen" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  Cómo escanear un GiroCode – Guía para iPhone y Android
                </Link>
              </li>
              <li>
                <Link href="/es/wissen/girocode" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  ¿Qué es un GiroCode? – Todo lo que necesitas saber
                </Link>
              </li>
              <li>
                <Link href="/es/wissen/rechnung" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  GiroCode en facturas – La guía completa
                </Link>
              </li>
              <li>
                <Link href="/es/wissen/epc-standard" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  Norma EPC & SEPA-QR – Estructura técnica
                </Link>
              </li>
              <li>
                <Link href="/es/wissen/iban-bic" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
                  IBAN & BIC para GiroCode
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
