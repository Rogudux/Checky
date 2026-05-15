import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

export const metadata: Metadata = {
  title: "Aviso de Privacidad · Checky",
  description:
    "Aviso de Privacidad de Checky, plataforma de tarjetero digital de lealtad. Tratamiento de datos personales conforme a la LFPDPPP.",
};

const PRIVACY_EMAIL = "privacidad@checky.com";
const PHONE = "524451586866";

const toc = [
  { id: "s1", label: "Identidad y domicilio del responsable" },
  { id: "s2", label: "Datos personales que recabamos" },
  { id: "s3", label: "Finalidades primarias del tratamiento" },
  { id: "s4", label: "Finalidades secundarias (puedes oponerte)" },
  { id: "s5", label: "Transferencia mensual al Establecimiento" },
  { id: "s6", label: "Encargados y subencargados" },
  { id: "s7", label: "Transferencias internacionales" },
  { id: "s8", label: "Medidas de seguridad" },
  { id: "s9", label: "Conservación de datos" },
  { id: "s10", label: "Derechos ARCO" },
  { id: "s11", label: "Revocación del consentimiento" },
  { id: "s12", label: "Limitación de uso o divulgación" },
  { id: "s13", label: "Uso de cookies y tecnologías" },
  { id: "s14", label: "Cambios al aviso" },
  { id: "s15", label: "Consentimiento del titular" },
];

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="bg-checky-bg text-checky-text">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16 pb-24">

          {/* Encabezado */}
          <div className="border-b border-checky-border pb-8 mb-10">
            <h1 className="text-4xl font-bold tracking-tight leading-tight">
              Aviso de Privacidad
            </h1>
            <p className="mt-3 text-checky-muted">
              Tratamiento de datos personales conforme a la Ley Federal de Protección de Datos
              Personales en Posesión de los Particulares (LFPDPPP).
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-checky-muted">
              <span>Última actualización: <time dateTime="2026-05-14">14 de mayo de 2026</time></span>
              <span>· Versión 1.0</span>
            </div>
          </div>

          {/* Aviso simplificado */}
          <div className="mb-10 rounded-lg border border-blue-200 border-l-4 border-l-blue-500 bg-blue-50 p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
              Aviso simplificado
            </p>
            <dl className="grid gap-y-2 gap-x-4 text-sm sm:grid-cols-[140px_1fr]">
              {[
                {
                  term: "Responsable",
                  def: "Checky, persona física con actividad empresarial, operando la plataforma Checky.",
                },
                {
                  term: "Qué recabamos",
                  def: "Nombre y apellido, edad, sexo, correo electrónico, teléfono y datos de uso del pase digital.",
                },
                {
                  term: "Para qué",
                  def: "Operar tu pase de lealtad, transferir tus datos mensualmente al Establecimiento donde te registraste, y realizar analítica para mejora del servicio.",
                },
                {
                  term: "Transferencias",
                  def: "Mensualmente entregamos tus datos al Establecimiento donde te inscribiste. A partir de ese momento, el Establecimiento es responsable autónomo de tus datos.",
                },
                {
                  term: "Tus derechos",
                  def: "Puedes acceder, rectificar, cancelar u oponerte (ARCO), y revocar tu consentimiento en cualquier momento.",
                },
                {
                  term: "Contacto",
                  def: `${PRIVACY_EMAIL}`,
                },
              ].map((d) => (
                <div key={d.term} className="contents">
                  <dt className="font-semibold text-blue-900 sm:py-0.5">{d.term}</dt>
                  <dd className="text-checky-text sm:py-0.5">
                    {d.term === "Contacto" ? (
                      <a href={`mailto:${PRIVACY_EMAIL}`} className="text-checky-green hover:underline">
                        {PRIVACY_EMAIL}
                      </a>
                    ) : (
                      d.def
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Índice */}
          <nav className="mb-12 rounded-xl bg-green-50 border border-green-100 p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-checky-green mb-3">
              Índice
            </p>
            <ol className="grid gap-1 sm:grid-cols-2">
              {toc.map((item, i) => (
                <li key={item.id} className="text-sm">
                  <a
                    href={`#${item.id}`}
                    className="text-checky-text hover:text-checky-green transition-colors"
                  >
                    <span className="text-checky-muted mr-1">{i + 1}.</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Secciones */}
          <div className="space-y-10 text-[15px] leading-relaxed">

            <section id="s1" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">1. Identidad y domicilio del responsable</h2>
              <p className="mb-4 text-checky-muted">
                El responsable del tratamiento de tus datos personales es{" "}
                <strong className="text-checky-text">Checky</strong>, persona física con actividad
                empresarial, titular de la marca y operador de la plataforma tecnológica «Checky» (en
                adelante, también «Checky» o «nosotros»).
              </p>
              <div className="rounded-lg border border-checky-border bg-white p-5 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-checky-muted mb-1">
                    Domicilio para efectos del presente aviso
                  </p>
                  <p className="text-checky-text">León, Guanajuato, México.</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-checky-muted mb-1">
                    Correo electrónico para asuntos de privacidad
                  </p>
                  <a
                    href={`mailto:${PRIVACY_EMAIL}`}
                    className="text-checky-green hover:underline"
                  >
                    {PRIVACY_EMAIL}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-checky-muted mb-1">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${PHONE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-checky-green hover:underline"
                  >
                    +52 445 158 6866
                  </a>
                </div>
              </div>
            </section>

            <section id="s2" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">2. Datos personales que recabamos</h2>
              <p className="mb-3 text-checky-muted">
                Para el registro y participación en cualquier programa de lealtad operado a través de
                Checky, recabamos los siguientes datos personales que tú mismo nos proporcionas al
                momento del registro:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-checky-muted">
                <li><strong className="text-checky-text">Nombre y apellido(s)</strong></li>
                <li><strong className="text-checky-text">Edad</strong></li>
                <li>
                  <strong className="text-checky-text">Sexo</strong> (masculino, femenino u otro,
                  declarado por ti)
                </li>
                <li><strong className="text-checky-text">Correo electrónico</strong></li>
                <li><strong className="text-checky-text">Número de teléfono</strong></li>
              </ul>
              <p className="mb-3 text-checky-muted">
                Adicionalmente, durante tu uso del servicio recabamos automáticamente los siguientes{" "}
                <strong className="text-checky-text">datos de uso</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-checky-muted">
                <li>Establecimiento(s) al que te has registrado.</li>
                <li>Fechas y registros de visitas validadas por el personal del Establecimiento.</li>
                <li>Sellos o estampas acumuladas.</li>
                <li>Recompensas canjeadas y fechas de canje.</li>
                <li>Identificador técnico del pase digital emitido.</li>
              </ul>
              <div className="rounded-lg border border-yellow-300 border-l-4 border-l-yellow-400 bg-yellow-50 p-4 text-sm">
                <strong className="block mb-1 font-semibold">No recabamos datos sensibles.</strong>
                Checky no solicita ni trata datos personales sensibles (origen racial o étnico, estado
                de salud, información genética, creencias religiosas, opiniones políticas, preferencia
                sexual, datos biométricos o información financiera o patrimonial).
              </div>
            </section>

            <section id="s3" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">3. Finalidades primarias del tratamiento</h2>
              <p className="mb-3 text-checky-muted">
                Tus datos personales son tratados para las siguientes finalidades, necesarias para que
                puedas participar en el programa de lealtad:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-checky-muted">
                <li>Identificarte como participante de un programa de lealtad operado mediante Checky.</li>
                <li>Verificar que cumples con el requisito de mayoría de edad (18 años).</li>
                <li>
                  Emitir y mantener tu pase digital en tu billetera (Apple Wallet, Google Wallet u
                  otras).
                </li>
                <li>
                  Registrar las visitas validadas por el Establecimiento y acumular los sellos
                  correspondientes.
                </li>
                <li>
                  Permitir el canje de recompensas conforme a las reglas del Establecimiento.
                </li>
                <li>
                  Enviarte notificaciones operativas del pase (sello registrado, recompensa lista,
                  vencimientos).
                </li>
                <li>Atender solicitudes de soporte técnico y resolver incidencias.</li>
                <li>
                  <strong className="text-checky-text">
                    Transferir mensualmente tus datos al Establecimiento donde te registraste
                  </strong>
                  , conforme a la sección 5 de este aviso.
                </li>
                <li>
                  Cumplir con obligaciones legales, fiscales y regulatorias aplicables a Checky.
                </li>
              </ol>
            </section>

            <section id="s4" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">4. Finalidades secundarias</h2>
              <p className="mb-3 text-checky-muted">
                Adicionalmente, Checky utiliza tus datos para las siguientes{" "}
                <strong className="text-checky-text">finalidades secundarias</strong>, a las que puedes
                oponerte sin que ello afecte tu participación en el programa de lealtad:
              </p>
              <ol className="list-decimal pl-5 space-y-2 text-checky-muted mb-4">
                <li>
                  <strong className="text-checky-text">Analítica estadística</strong>: análisis del
                  comportamiento de uso (frecuencia de visitas, hábitos de consumo en programas de
                  lealtad, demografía agregada) con fines de mejora del servicio.
                </li>
                <li>
                  <strong className="text-checky-text">Investigación y desarrollo</strong>: diseño de
                  nuevas funcionalidades, modelos predictivos y productos derivados.
                </li>
                <li>
                  <strong className="text-checky-text">Indicadores de mercado</strong>: generación de
                  tendencias, benchmarks y estudios agregados que NO permiten identificarte
                  directamente, los cuales podrán ser compartidos públicamente o con terceros.
                </li>
                <li>
                  <strong className="text-checky-text">Mejora de seguridad</strong>: prevención de
                  fraude, detección de uso indebido del servicio.
                </li>
              </ol>
              <div className="rounded-lg border border-yellow-300 border-l-4 border-l-yellow-400 bg-yellow-50 p-4 text-sm">
                <strong className="block mb-1 font-semibold">
                  Cómo oponerte a las finalidades secundarias.
                </strong>
                Puedes manifestar tu oposición en cualquier momento enviando un correo a{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="text-checky-green hover:underline">
                  {PRIVACY_EMAIL}
                </a>{" "}
                con el asunto «Oposición a finalidades secundarias» e incluyendo tu nombre completo y
                correo de registro. Tu oposición no afectará tu participación en el programa de
                lealtad.
              </div>
            </section>

            <section id="s5" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">5. Transferencia mensual al Establecimiento</h2>
              <p className="mb-3 text-checky-muted">
                Para que el Establecimiento donde te inscribiste pueda dar continuidad comercial a tu
                relación con el programa de lealtad, Checky{" "}
                <strong className="text-checky-text">
                  entrega al Establecimiento una copia de tus datos personales en formato Excel o CSV,
                  una vez al mes
                </strong>
                .
              </p>
              <p className="mb-4 text-checky-muted">
                Esta transferencia incluye los datos enunciados en la sección 2 de este aviso y los
                datos de uso relativos exclusivamente al Establecimiento receptor.
              </p>
              <div className="rounded-lg border border-yellow-300 border-l-4 border-l-yellow-400 bg-yellow-50 p-4 text-sm mb-4">
                <strong className="block mb-1 font-semibold">Consecuencia legal de esta transferencia.</strong>
                A partir del momento en que el Establecimiento recibe la copia de tus datos, dicho
                Establecimiento se convierte en{" "}
                <strong>responsable autónomo</strong> del tratamiento que les dé. Checky{" "}
                <strong>no controla ni es responsable</strong> del uso que cada Establecimiento haga de
                los datos transferidos, incluyendo las comunicaciones comerciales o promociones que el
                Establecimiento te envíe directamente. Cualquier reclamación relacionada con dichos
                usos deberá dirigirse al Establecimiento.
              </div>
              <p className="text-checky-muted">
                La transferencia mensual al Establecimiento{" "}
                <strong className="text-checky-text">
                  es necesaria para la operación del programa de lealtad
                </strong>{" "}
                y forma parte de las finalidades primarias del tratamiento. Si no estás de acuerdo con
                esta transferencia, te pedimos no completar tu registro al programa.
              </p>
            </section>

            <section id="s6" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">6. Encargados y subencargados</h2>
              <p className="mb-3 text-checky-muted">
                Para la operación técnica de la plataforma, Checky utiliza proveedores tecnológicos que
                actúan como <strong className="text-checky-text">encargados del tratamiento</strong>{" "}
                (no como terceros independientes). Estos encargados solo tratan tus datos siguiendo
                nuestras instrucciones y bajo obligaciones contractuales de confidencialidad y
                seguridad. Los encargados principales son:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-checky-muted">
                <li>
                  <strong className="text-checky-text">Pass2U Inc.</strong> — emisión y mantenimiento
                  de los pases digitales para Apple Wallet y Google Wallet.
                </li>
                <li>
                  <strong className="text-checky-text">Tally</strong> — formularios de registro.
                </li>
                <li>
                  <strong className="text-checky-text">Vercel Inc.</strong> — alojamiento y entrega del
                  sitio web y la aplicación.
                </li>
                <li>
                  Proveedores de base de datos, correo transaccional y analítica que utilizamos para
                  operar el servicio.
                </li>
              </ul>
              <p className="text-checky-muted">
                Estos encargados{" "}
                <strong className="text-checky-text">no constituyen transferencias</strong> en el
                sentido del artículo 36 de la LFPDPPP, sino prestaciones de servicios necesarios para
                la operación de la plataforma.
              </p>
            </section>

            <section id="s7" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">7. Transferencias internacionales</h2>
              <p className="mb-3 text-checky-muted">
                Algunos de nuestros encargados (incluyendo Pass2U y Vercel) operan infraestructura
                ubicada fuera del territorio nacional, principalmente en los Estados Unidos de América.
                Esto puede implicar que tus datos personales sean almacenados o procesados
                temporalmente en servidores fuera de México.
              </p>
              <p className="mb-3 text-checky-muted">
                Estas comunicaciones se realizan exclusivamente para la operación del servicio y se
                encuentran cubiertas por las excepciones previstas en el artículo 37 de la LFPDPPP, en
                particular por ser{" "}
                <strong className="text-checky-text">
                  necesarias para el mantenimiento de la relación jurídica
                </strong>{" "}
                entre tú y Checky.
              </p>
              <p className="text-checky-muted">
                En todos los casos, exigimos a nuestros encargados que mantengan estándares de
                seguridad razonablemente equivalentes a los previstos por la normativa mexicana.
              </p>
            </section>

            <section id="s8" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">8. Medidas de seguridad</h2>
              <p className="mb-3 text-checky-muted">
                Checky implementa medidas administrativas, técnicas y físicas razonables para proteger
                tus datos personales contra daño, pérdida, alteración, destrucción o uso, acceso o
                tratamiento no autorizado, incluyendo:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-checky-muted">
                <li>Cifrado de comunicaciones (HTTPS/TLS) en todas las páginas y formularios.</li>
                <li>
                  Control de accesos a la base de datos mediante autenticación y permisos restringidos.
                </li>
                <li>Respaldos periódicos.</li>
                <li>Registro de actividad y monitoreo de seguridad.</li>
                <li>
                  Obligaciones contractuales de seguridad y confidencialidad con todos nuestros
                  encargados.
                </li>
              </ul>
              <p className="text-checky-muted">
                En caso de un incidente de seguridad que afecte significativamente tus derechos, te
                notificaremos por los medios disponibles dentro de los plazos que establece la ley
                aplicable.
              </p>
            </section>

            <section id="s9" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">9. Conservación de datos</h2>
              <p className="mb-3 text-checky-muted">
                Conservamos tus datos personales durante el tiempo en que mantengas un pase activo en
                algún programa de lealtad operado con Checky, más los plazos adicionales necesarios
                para cumplir obligaciones legales, fiscales o atender reclamaciones.
              </p>
              <p className="mb-3 text-checky-muted">
                Si cancelas tu participación o solicitas la eliminación de tus datos, procederemos a su
                eliminación dentro de los{" "}
                <strong className="text-checky-text">30 días naturales siguientes</strong>, salvo
                aquellos datos que debamos conservar por mandato legal o para defensa frente a posibles
                reclamaciones.
              </p>
              <p className="text-checky-muted">
                Los datos transferidos previamente al Establecimiento permanecen bajo su control y
                conservación; Checky no puede eliminarlos del Establecimiento receptor. Para ese efecto
                deberás contactar al Establecimiento directamente.
              </p>
            </section>

            <section id="s10" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">10. Derechos ARCO</h2>
              <p className="mb-3 text-checky-muted">Tienes derecho a:</p>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-checky-muted">
                <li>
                  <strong className="text-checky-text">Acceso</strong>: conocer qué datos tuyos tenemos
                  y para qué los usamos.
                </li>
                <li>
                  <strong className="text-checky-text">Rectificación</strong>: solicitar que corrijamos
                  datos inexactos o incompletos.
                </li>
                <li>
                  <strong className="text-checky-text">Cancelación</strong>: solicitar que eliminemos
                  tus datos cuando consideres que no son necesarios.
                </li>
                <li>
                  <strong className="text-checky-text">Oposición</strong>: solicitar que dejemos de
                  usar tus datos para finalidades específicas (en particular, las finalidades
                  secundarias).
                </li>
              </ul>
              <p className="mb-3 text-checky-muted">
                Para ejercer cualquiera de estos derechos, envía un correo a{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="text-checky-green hover:underline">
                  {PRIVACY_EMAIL}
                </a>{" "}
                incluyendo:
              </p>
              <ol className="list-decimal pl-5 space-y-1 mb-4 text-checky-muted">
                <li>Tu nombre completo y correo electrónico de registro.</li>
                <li>Una descripción clara y precisa del derecho que deseas ejercer.</li>
                <li>
                  Cualquier documento o información adicional que facilite la localización de tus datos.
                </li>
                <li>
                  Una copia de identificación oficial para verificar tu identidad (solo para
                  protegerte: no la usaremos para otra finalidad).
                </li>
              </ol>
              <p className="text-checky-muted">
                Te responderemos en un plazo máximo de{" "}
                <strong className="text-checky-text">20 días hábiles</strong>, y haremos efectiva la
                respuesta dentro de los 15 días hábiles siguientes a su notificación, conforme al
                artículo 32 de la LFPDPPP. El ejercicio de estos derechos es gratuito; solo podrán
                cobrarse, en su caso, los gastos justificados de envío o reproducción.
              </p>
            </section>

            <section id="s11" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">11. Revocación del consentimiento</h2>
              <p className="mb-3 text-checky-muted">
                Puedes revocar tu consentimiento para el tratamiento de tus datos en cualquier momento,
                enviando un correo a{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="text-checky-green hover:underline">
                  {PRIVACY_EMAIL}
                </a>{" "}
                con el asunto «Revocación de consentimiento».
              </p>
              <p className="text-checky-muted">
                Ten en cuenta que la revocación implicará que{" "}
                <strong className="text-checky-text">
                  no podrás continuar participando
                </strong>{" "}
                en los programas de lealtad operados con Checky, ya que el tratamiento de tus datos es
                necesario para la operación del servicio. Procederemos a eliminar tus datos conforme a
                la sección 9 de este aviso.
              </p>
            </section>

            <section id="s12" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">12. Limitación de uso o divulgación</h2>
              <p className="mb-3 text-checky-muted">
                Puedes limitar el uso o divulgación de tus datos solicitándolo por correo a{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="text-checky-green hover:underline">
                  {PRIVACY_EMAIL}
                </a>
                . Por ejemplo, puedes pedir:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-checky-muted">
                <li>
                  Que dejemos de incluirte en la transferencia mensual al Establecimiento (en cuyo
                  caso, deberás cancelar tu participación en el programa).
                </li>
                <li>
                  Que no se incluyan tus datos en analíticas o estudios estadísticos.
                </li>
                <li>
                  Que no recibas más comunicaciones operativas (en cuyo caso, podrías no recibir
                  notificaciones importantes sobre tu pase).
                </li>
              </ul>
            </section>

            <section id="s13" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">13. Uso de cookies y tecnologías similares</h2>
              <p className="text-checky-muted">
                El sitio web de Checky y los formularios de registro pueden utilizar cookies y
                tecnologías similares para mejorar tu experiencia, recordar tus preferencias y obtener
                estadísticas de uso. Estas tecnologías pueden recabar información técnica como tu
                dirección IP, tipo de navegador, sistema operativo y páginas visitadas. Puedes
                deshabilitar las cookies desde la configuración de tu navegador, aunque ello podría
                afectar el funcionamiento de algunas funciones.
              </p>
            </section>

            <section id="s14" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">14. Cambios al aviso</h2>
              <p className="mb-3 text-checky-muted">
                Este aviso de privacidad puede ser modificado por Checky en cualquier momento para
                reflejar cambios en nuestras prácticas, en la legislación aplicable o en las
                funcionalidades del servicio. La versión vigente siempre estará disponible en esta
                página.
              </p>
              <p className="mb-3 text-checky-muted">
                Cuando realicemos cambios sustanciales (por ejemplo, nuevas finalidades de tratamiento
                o nuevas categorías de transferencia), te notificaremos por los medios habituales
                (correo electrónico al registrado o notificación visible en la plataforma) antes de que
                entren en vigor, para que puedas decidir si continúas usando el servicio.
              </p>
              <p className="text-checky-muted">
                La fecha de última actualización se muestra al inicio de este documento.
              </p>
            </section>

            <section id="s15" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">15. Consentimiento del titular</h2>
              <p className="mb-4 text-checky-muted">
                Al marcar la casilla de aceptación en el formulario de registro a cualquier programa de
                lealtad operado con Checky, manifiestas que:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mb-5 text-checky-muted">
                <li>Has leído y comprendido el presente Aviso de Privacidad.</li>
                <li>Eres mayor de edad (18 años o más).</li>
                <li>
                  Otorgas tu consentimiento expreso para el tratamiento de tus datos personales
                  conforme a las finalidades primarias y secundarias aquí descritas.
                </li>
                <li>
                  Otorgas tu consentimiento expreso para la transferencia mensual de tus datos al
                  Establecimiento donde te registraste, conforme a la sección 5.
                </li>
              </ol>
              <div className="rounded-lg border border-yellow-300 border-l-4 border-l-yellow-400 bg-yellow-50 p-4 text-sm">
                <strong className="block mb-1 font-semibold">
                  Si no estás de acuerdo con alguno de los términos de este aviso, te pedimos no
                  continuar con el registro.
                </strong>
                Si tienes dudas antes de aceptar, contáctanos en{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="text-checky-green hover:underline">
                  {PRIVACY_EMAIL}
                </a>
                .
              </div>
            </section>

          </div>

          {/* Pie del documento */}
          <div className="mt-16 border-t border-checky-border pt-6 text-xs text-checky-muted text-center space-y-1">
            <p>© 2026 Checky · Todos los derechos reservados</p>
            <p>
              <Link href="/terminos" className="text-checky-green hover:underline">
                Términos y Condiciones
              </Link>
              {" · "}
              <Link href="/" className="text-checky-green hover:underline">
                Volver al inicio
              </Link>
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
