import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones · Checky",
  description:
    "Términos y Condiciones de uso de Checky, plataforma de tarjetero digital de lealtad.",
};

const PHONE = "524451586866";
const PRIVACY_EMAIL = "privacidad@checky.com";

const toc = [
  { id: "s1", label: "Alcance y aplicabilidad" },
  { id: "s2", label: "Definiciones" },
  { id: "s3", label: "Relación entre las partes" },
  { id: "s4", label: "Registro y elegibilidad" },
  { id: "s5", label: "Funcionamiento del Programa" },
  { id: "s6", label: "Uso aceptable de la Plataforma" },
  { id: "s7", label: "Datos personales y privacidad" },
  { id: "s8", label: "Comunicaciones" },
  { id: "s9", label: "Disponibilidad del servicio" },
  { id: "s10", label: "Propiedad intelectual" },
  { id: "s11", label: "Limitación de responsabilidad" },
  { id: "s12", label: "Modificaciones" },
  { id: "s13", label: "Baja del Programa" },
  { id: "s14", label: "Contacto y soporte" },
  { id: "s15", label: "Ley aplicable y jurisdicción" },
  { id: "s16", label: "Aceptación" },
];

export default function TerminosPage() {
  return (
    <>
      <Header />
      <main className="bg-checky-bg text-checky-text">
        <div className="mx-auto max-w-3xl px-4 py-12 md:py-16 pb-24">

          {/* Encabezado */}
          <div className="border-b border-checky-border pb-8 mb-10">
            <h1 className="text-4xl font-bold tracking-tight leading-tight">
              Términos y Condiciones de uso
            </h1>
            <p className="mt-3 text-checky-muted">
              Documento aplicable a todos los programas de lealtad operados con Checky.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-checky-muted">
              <span>Última actualización: <time dateTime="2026-05-14">14 de mayo de 2026</time></span>
              <span>· Versión 1.0</span>
            </div>
          </div>

          {/* Aviso de bienvenida */}
          <div className="mb-10 rounded-lg border border-yellow-300 border-l-4 border-l-yellow-400 bg-yellow-50 p-4 text-sm">
            <strong className="block mb-1 font-semibold">Bienvenido a Checky.</strong>
            Estos Términos y Condiciones regulan el uso de la plataforma Checky por parte de los
            usuarios finales (clientes de los establecimientos comerciales que han contratado el
            servicio). Al inscribirte a cualquier programa de lealtad operado con Checky y aceptar
            estos Términos, declaras ser mayor de edad y haber leído el{" "}
            <Link href="/privacidad" className="underline hover:text-checky-green">
              Aviso de Privacidad
            </Link>{" "}
            correspondiente. Si no estás de acuerdo con alguno de estos puntos, por favor no
            continúes con el registro.
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
              <h2 className="text-xl font-bold mb-4">1. Alcance y aplicabilidad</h2>
              <p className="mb-3">
                <span className="font-semibold">1.1.</span> Los presentes Términos y Condiciones (en
                adelante, los «Términos») son aplicables a todos los usuarios que se registren a
                cualquier programa de lealtad digital operado mediante la plataforma tecnológica
                «Checky» (en adelante, la «Plataforma»), con independencia del establecimiento,
                comercio o negocio (en adelante, el «Establecimiento») que ofrezca dicho programa.
              </p>
              <p className="mb-3">
                <span className="font-semibold">1.2.</span> Los Términos constituyen un documento
                único, genérico y de aplicación general. Las reglas comerciales específicas de cada
                programa (número de sellos, recompensas, condiciones para acumular sellos, vigencias,
                sucursales participantes, etc.) son definidas por cada Establecimiento bajo su
                exclusiva responsabilidad y comunicadas a través del pase digital o de sus medios
                habituales.
              </p>
              <p>
                <span className="font-semibold">1.3.</span> Estos Términos se complementan con el{" "}
                <Link href="/privacidad" className="text-checky-green hover:underline">
                  Aviso de Privacidad de Checky
                </Link>
                , el cual deberás consultar antes de aceptar tu participación en el programa
                correspondiente.
              </p>
            </section>

            <section id="s2" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">2. Definiciones</h2>
              <dl className="space-y-3">
                {[
                  {
                    term: "Checky o Proveedor Tecnológico",
                    def: "Titular y operador de la Plataforma Checky, persona física con actividad empresarial.",
                  },
                  {
                    term: "Plataforma",
                    def: "El conjunto de herramientas tecnológicas (sitio web, formularios de registro, sistema de emisión de pases digitales, panel de administración, módulos de validación y reportes) ofrecidos por Checky para operar programas de lealtad digitales.",
                  },
                  {
                    term: "Establecimiento",
                    def: "Cualquier comercio, negocio, marca o profesional que haya contratado el servicio Checky para implementar un programa de lealtad dirigido a sus clientes. Cada Establecimiento opera su propio programa de forma independiente.",
                  },
                  {
                    term: "Programa de Lealtad",
                    def: "El conjunto de reglas, beneficios y recompensas que cada Establecimiento, por separado, ofrece a sus clientes a través de la Plataforma.",
                  },
                  {
                    term: "Pase Digital",
                    def: "El documento electrónico emitido a través de la Plataforma y guardado en la billetera digital del Usuario (Apple Wallet, Google Wallet u otras), que registra los sellos o estampas acumulados en el Programa de Lealtad de un Establecimiento determinado.",
                  },
                  {
                    term: "Usuario o tú",
                    def: "La persona física, mayor de edad, que se registra a uno o varios Programas de Lealtad operados a través de la Plataforma y acepta estos Términos.",
                  },
                ].map((d) => (
                  <div key={d.term}>
                    <dt className="font-semibold text-checky-text">{d.term}</dt>
                    <dd className="text-checky-muted mt-0.5">{d.def}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="s3" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">3. Relación entre las partes</h2>
              <p className="mb-3">
                <span className="font-semibold">3.1.</span> Es importante que comprendas con claridad
                la relación entre los tres actores involucrados:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4 text-checky-muted">
                <li>
                  <strong className="text-checky-text">Checky</strong> es el operador de la Plataforma
                  y el{" "}
                  <strong className="text-checky-text">responsable principal</strong> del tratamiento
                  de tus datos personales al momento de tu registro. Checky recaba, almacena, procesa,
                  asegura y administra tus datos durante tu participación en cualquier Programa,
                  conforme a su{" "}
                  <Link href="/privacidad" className="text-checky-green hover:underline">
                    Aviso de Privacidad
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-checky-text">El Establecimiento</strong> es el responsable
                  comercial del Programa de Lealtad: define las reglas, las recompensas, los precios,
                  las promociones y te atiende presencialmente. Mensualmente, el Establecimiento recibe
                  de Checky una copia de los datos de los Usuarios registrados a su Programa y, a
                  partir de ese momento, se convierte en{" "}
                  <strong className="text-checky-text">responsable autónomo</strong> del tratamiento
                  que dé a dicha copia.
                </li>
                <li>
                  <strong className="text-checky-text">Tú, el Usuario,</strong> eres la persona física
                  que voluntariamente se registra al Programa, acepta estos Términos y participa en él
                  para obtener beneficios.
                </li>
              </ul>
              <p className="mb-3">
                <span className="font-semibold">3.2.</span> Las relaciones comerciales y de servicio
                entre el Usuario y el Establecimiento son independientes de los servicios tecnológicos
                prestados por Checky. Cualquier asunto relativo a la calidad del producto o servicio
                del Establecimiento, recompensas, atención al cliente, quejas presenciales o
                promociones específicas deberá ser tratado directamente con el Establecimiento.
              </p>
              <p>
                <span className="font-semibold">3.3.</span> Cualquier asunto relativo al
                funcionamiento técnico de la Plataforma, el tratamiento de tus datos personales por
                parte de Checky o el ejercicio de tus derechos ARCO frente a Checky, deberá ser
                tratado directamente con Checky a través de los canales señalados en su{" "}
                <Link href="/privacidad" className="text-checky-green hover:underline">
                  Aviso de Privacidad
                </Link>
                .
              </p>
            </section>

            <section id="s4" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">4. Registro y elegibilidad</h2>
              <p className="mb-3">
                <span className="font-semibold">4.1.</span> Para registrarte a cualquier Programa de
                Lealtad operado con Checky debes ser mayor de edad (18 años o más) y contar con un
                dispositivo móvil compatible con billeteras digitales.
              </p>
              <p className="mb-3">
                <span className="font-semibold">4.2.</span> El registro requiere que proporciones los
                datos solicitados por Checky en el formulario correspondiente (nombre y apellido, edad,
                sexo, correo electrónico y número de teléfono). El detalle completo se encuentra en el{" "}
                <Link href="/privacidad" className="text-checky-green hover:underline">
                  Aviso de Privacidad de Checky
                </Link>
                .
              </p>
              <p className="mb-3">
                <span className="font-semibold">4.3.</span> Te obligas a proporcionar información
                veraz, completa y actualizada. La información falsa o inexacta podrá dar lugar a la
                cancelación de tu participación en el Programa por parte del Establecimiento o por
                Checky.
              </p>
              <p className="mb-3">
                <span className="font-semibold">4.4.</span> Tu registro es personal e intransferible.
                No puedes ceder, vender, prestar ni transferir tu Pase Digital a otra persona.
              </p>
              <p>
                <span className="font-semibold">4.5.</span> Puedes registrarte a múltiples Programas
                de Lealtad operados con Checky. Cada registro es independiente: aceptar estos Términos
                una vez no significa aceptar automáticamente futuras participaciones.
              </p>
            </section>

            <section id="s5" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">5. Funcionamiento general del Programa</h2>
              <p className="mb-3">
                <span className="font-semibold">5.1.</span> Cada Establecimiento define libremente las
                reglas de su Programa: número de sellos requeridos, naturaleza de la recompensa,
                condiciones para acumular sellos, sucursales participantes, vigencias y limitaciones
                aplicables.
              </p>
              <p className="mb-3">
                <span className="font-semibold">5.2.</span> El registro de un sello, estampa o
                validación requiere la intervención del personal autorizado del Establecimiento. Los
                auto-registros realizados por el Usuario sin validación del Establecimiento no son
                válidos.
              </p>
              <p className="mb-3">
                <span className="font-semibold">5.3.</span> Al completar el número de sellos requerido
                en un Programa específico, podrás canjear la recompensa indicada, conforme a las
                reglas del Establecimiento. La recompensa solo es canjeable en el Establecimiento
                correspondiente.
              </p>
              <p className="mb-2">
                <span className="font-semibold">5.4.</span> Las recompensas:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-checky-muted">
                <li>No son canjeables por dinero en efectivo.</li>
                <li>No son transferibles a otras personas.</li>
                <li>
                  No se acumulan con otras promociones, salvo que el Establecimiento lo indique
                  expresamente.
                </li>
                <li>Pueden estar sujetas a fechas de vencimiento.</li>
                <li>
                  Constituyen un beneficio promocional y no un derecho de crédito a favor del Usuario.
                </li>
              </ul>
            </section>

            <section id="s6" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">6. Uso aceptable de la Plataforma</h2>
              <p className="mb-2">Al utilizar la Plataforma te obligas a NO:</p>
              <ul className="list-disc pl-5 space-y-1 text-checky-muted mb-3">
                <li>
                  Usar tu Pase Digital de forma fraudulenta, duplicar sellos, modificar el pase o
                  intentar vulnerar la Plataforma.
                </li>
                <li>
                  Crear múltiples cuentas o pases con la misma identidad o con identidades falsas para
                  acumular sellos indebidamente.
                </li>
                <li>Revender, ceder o comerciar con el Pase Digital o las recompensas.</li>
                <li>
                  Realizar conductas que afecten la operación de la Plataforma, otros usuarios o los
                  Establecimientos participantes.
                </li>
                <li>
                  Utilizar la Plataforma para fines distintos a participar en un Programa de Lealtad
                  legítimo.
                </li>
              </ul>
              <p className="text-checky-muted">
                El incumplimiento de estas reglas podrá conducir a la cancelación inmediata de tu
                participación en uno o varios Programas, así como a las acciones legales que
                correspondan.
              </p>
            </section>

            <section id="s7" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">7. Datos personales y privacidad</h2>
              <p className="mb-3">
                <span className="font-semibold">7.1.</span> El tratamiento de tus datos personales por
                parte de Checky se rige por el{" "}
                <Link href="/privacidad" className="text-checky-green hover:underline">
                  Aviso de Privacidad de Checky
                </Link>
                , que debes consultar antes de aceptar tu registro a cualquier Programa.
              </p>
              <p className="mb-2">
                <span className="font-semibold">7.2.</span> De forma resumida y general:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3 text-checky-muted">
                <li>
                  <strong className="text-checky-text">Checky es el responsable principal</strong> del
                  tratamiento de tus datos durante tu participación en cualquier Programa: los recaba,
                  almacena, procesa, asegura y los utiliza para operar el servicio y para finalidades
                  de analítica y mejora del producto.
                </li>
                <li>
                  <strong className="text-checky-text">
                    Mensualmente, Checky transfiere una copia de tus datos al Establecimiento
                  </strong>{" "}
                  donde te registraste, en formato Excel o CSV. Esta transferencia es necesaria para la
                  operación del programa de lealtad y forma parte de las finalidades primarias del
                  tratamiento.
                </li>
                <li>
                  <strong className="text-checky-text">
                    A partir de la transferencia, el Establecimiento se convierte en responsable
                    autónomo
                  </strong>{" "}
                  de la copia recibida. Checky no controla ni es responsable del uso que el
                  Establecimiento haga de los datos transferidos.
                </li>
                <li>
                  Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación u Oposición
                  (derechos ARCO), así como revocar tu consentimiento, en cualquier momento, conforme
                  al Aviso de Privacidad de Checky.
                </li>
                <li>
                  Puedes oponerte a las finalidades secundarias (analítica, mejora del servicio,
                  indicadores de mercado) sin que ello afecte tu participación en los Programas.
                </li>
              </ul>
              <p className="mb-3">
                <span className="font-semibold">7.3.</span> Checky podrá generar información
                estadística agregada y anonimizada (no identificable) basada en el uso general de la
                Plataforma. Dicha información no permite identificarte directamente y puede ser
                utilizada para mejorar el servicio, desarrollar nuevas funcionalidades o publicar
                tendencias generales del mercado, sin que ello constituya tratamiento de datos
                personales.
              </p>
              <p>
                <span className="font-semibold">7.4.</span> Para asuntos relacionados con el
                tratamiento de tus datos por parte de un Establecimiento{" "}
                <strong>después</strong> de la transferencia mensual (incluyendo comunicaciones
                comerciales que el Establecimiento te envíe directamente), deberás contactar a dicho
                Establecimiento, ya que él es responsable autónomo de su propia copia.
              </p>
            </section>

            <section id="s8" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">8. Comunicaciones</h2>
              <p className="mb-3">
                <span className="font-semibold">8.1.</span> Al registrarte, autorizas a Checky a
                enviarte <strong>únicamente comunicaciones operativas</strong> relacionadas con tu Pase
                Digital y el funcionamiento del servicio (por ejemplo: aviso de sello registrado,
                recompensa lista para canjear, vencimientos próximos o avisos importantes sobre tu
                pase).
              </p>
              <p className="mb-3">
                <span className="font-semibold">8.2.</span> Checky{" "}
                <strong>no te enviará comunicaciones promocionales, comerciales ni de marketing</strong>
                . Cualquier comunicación de este tipo provendrá directamente del Establecimiento donde
                te registraste, una vez que haya recibido la transferencia mensual de tus datos,
                conforme a su propia política comercial y bajo su responsabilidad autónoma.
              </p>
              <p className="mb-3">
                <span className="font-semibold">8.3.</span> Si no deseas recibir comunicaciones
                comerciales del Establecimiento, deberás contactarlo directamente para solicitar la
                baja de sus comunicaciones, o ejercer tus derechos ARCO frente a él.
              </p>
              <p>
                <span className="font-semibold">8.4.</span> Las comunicaciones operativas de Checky se
                enviarán por los medios disponibles: notificaciones del Pase Digital, correo
                electrónico u otros canales técnicos. Si decides no recibirlas, podrías perderte avisos
                importantes sobre tu pase.
              </p>
            </section>

            <section id="s9" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">9. Disponibilidad del servicio</h2>
              <p className="mb-3">
                <span className="font-semibold">9.1.</span> Checky y los Establecimientos procurarán
                mantener el servicio disponible, pero no garantizan operación ininterrumpida. Pueden
                existir interrupciones por mantenimiento, fallas técnicas, de internet, de proveedores
                externos o por causa de fuerza mayor.
              </p>
              <p className="mb-3">
                <span className="font-semibold">9.2.</span> Si tu Pase Digital no funciona
                temporalmente, puedes acudir al Establecimiento para que registre manualmente tu visita
                conforme a sus procedimientos internos.
              </p>
              <p className="mb-2">
                <span className="font-semibold">9.3.</span> Si un Establecimiento incumple con sus
                obligaciones frente a Checky, el servicio para los Pases asociados a ese
                Establecimiento podrá suspenderse, con los siguientes efectos:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-checky-muted mb-3">
                <li>
                  Tu Pase Digital permanecerá visible y activo en tu billetera digital, conservando los
                  sellos previamente acumulados.
                </li>
                <li>NO podrás acumular nuevos sellos durante el periodo de suspensión.</li>
                <li>
                  No se podrán emitir nuevos Pases ni nuevos registros para el Programa del
                  Establecimiento suspendido.
                </li>
                <li>
                  Si el Establecimiento regulariza su situación, el servicio se reanudará. Los sellos
                  de visitas durante la suspensión NO son automáticamente retroactivos; queda a criterio
                  del Establecimiento compensarlos.
                </li>
              </ul>
              <p className="mb-3">
                <span className="font-semibold">9.4.</span> Si un Establecimiento decide terminar su
                Programa de Lealtad, o si su contrato con Checky se da por terminado, el Pase asociado
                podrá quedar inactivo permanentemente y los sellos no canjeados podrían perderse.
                Cualquier reclamación deberá dirigirse directamente al Establecimiento correspondiente.
              </p>
              <p>
                <span className="font-semibold">9.5.</span> Reconoces y aceptas que ni Checky ni los
                Establecimientos garantizan la permanencia indefinida de los Programas, ni el valor
                económico de los sellos acumulados, los cuales constituyen un beneficio promocional
                sujeto a las reglas de cada Programa.
              </p>
            </section>

            <section id="s10" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">10. Propiedad intelectual</h2>
              <p className="mb-3">
                <span className="font-semibold">10.1.</span> La marca, nombre comercial, diseño y
                logotipos de cada Establecimiento son de su titularidad exclusiva.
              </p>
              <p className="mb-3">
                <span className="font-semibold">10.2.</span> La marca «Checky», la Plataforma, el
                software, los diseños de interfaz, los modelos analíticos y la documentación son
                propiedad de Checky. Estos Términos no te otorgan derecho alguno sobre dicha propiedad
                intelectual.
              </p>
              <p>
                <span className="font-semibold">10.3.</span> No puedes copiar, modificar, descompilar,
                realizar ingeniería inversa ni usar la Plataforma para fines distintos a participar en
                un Programa de Lealtad.
              </p>
            </section>

            <section id="s11" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">11. Limitación de responsabilidad</h2>
              <p className="mb-3">
                <span className="font-semibold">11.1.</span> Cada Establecimiento es el único
                responsable de la entrega de sus recompensas, la calidad de sus productos o servicios,
                la veracidad de sus promociones y la atención presencial a sus clientes. Cualquier
                reclamación al respecto debe dirigirse directamente al Establecimiento correspondiente.
              </p>
              <p className="mb-3">
                <span className="font-semibold">11.2.</span> Checky es responsable únicamente del
                funcionamiento técnico de la Plataforma dentro del alcance del servicio que presta.
                Checky no es responsable por las decisiones comerciales de los Establecimientos, la
                calidad de las recompensas ofrecidas, ni la atención presencial.
              </p>
              <p className="mb-3">
                <span className="font-semibold">11.3.</span> Ni Checky ni los Establecimientos serán
                responsables por daños indirectos, lucro cesante, pérdida de oportunidad o cualquier
                daño no patrimonial derivado del uso de un Programa de Lealtad, salvo lo expresamente
                dispuesto por la ley aplicable.
              </p>
              <p>
                <span className="font-semibold">11.4.</span> En la máxima medida permitida por la ley
                aplicable, la responsabilidad total de Checky frente al Usuario, por cualquier causa
                derivada del uso de la Plataforma, no excederá del beneficio económico efectivo que el
                Usuario habría obtenido con la recompensa pendiente de canje, si la hubiera.
              </p>
            </section>

            <section id="s12" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">12. Modificaciones</h2>
              <p className="mb-3">
                <span className="font-semibold">12.1.</span> Cada Establecimiento podrá modificar las
                reglas de su propio Programa notificándolo por los medios que utilice habitualmente
                para comunicarse con sus clientes.
              </p>
              <p className="mb-3">
                <span className="font-semibold">12.2.</span> Estos Términos pueden actualizarse por
                Checky en cualquier momento. La versión vigente estará disponible permanentemente en
                esta página. Si continúas usando la Plataforma después de una actualización, se
                entenderá que aceptas la versión nueva.
              </p>
              <p>
                <span className="font-semibold">12.3.</span> Si no aceptas una modificación a estos
                Términos, podrás solicitar la baja de los Programas en los que participes, conforme a
                la cláusula 13.
              </p>
            </section>

            <section id="s13" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">13. Baja del Programa y cancelación</h2>
              <p className="mb-3">
                <span className="font-semibold">13.1.</span> Puedes darte de baja de cualquier
                Programa en el que participes, en cualquier momento, eliminando el Pase Digital
                correspondiente de tu billetera y solicitando a Checky la cancelación de tus datos a
                través del correo señalado en su{" "}
                <Link href="/privacidad" className="text-checky-green hover:underline">
                  Aviso de Privacidad
                </Link>
                .
              </p>
              <p className="mb-3">
                <span className="font-semibold">13.2.</span> La baja en Checky elimina tus datos de la
                base de datos de la Plataforma. Sin embargo, las copias previamente transferidas al
                Establecimiento permanecen bajo su control y conservación; para solicitar su eliminación
                de la base de datos del Establecimiento, deberás contactarlo directamente.
              </p>
              <p className="mb-3">
                <span className="font-semibold">13.3.</span> La baja implicará la pérdida de los
                sellos acumulados que no hayan sido canjeados, salvo que decidas conservar tus datos
                para un eventual canje futuro mientras la recompensa siga vigente.
              </p>
              <p>
                <span className="font-semibold">13.4.</span> Checky podrá cancelar tu participación en
                uno o varios Programas si: incurres en uso fraudulento; proporcionas datos falsos; das
                un trato indebido al personal del Establecimiento; o cualquier otra causa razonable
                conforme a estos Términos.
              </p>
            </section>

            <section id="s14" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">14. Contacto y soporte</h2>
              <p className="mb-4 text-checky-muted">
                Para preguntas, quejas o ejercicio de derechos, dirígete al canal correcto según el
                tema:
              </p>
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold">
                    Tratamiento de tus datos por Checky, derechos ARCO, revocación de consentimiento,
                    asuntos técnicos del pase digital
                  </dt>
                  <dd className="text-checky-muted mt-1">
                    Contacta a Checky en{" "}
                    <a
                      href={`mailto:${PRIVACY_EMAIL}`}
                      className="text-checky-green hover:underline"
                    >
                      {PRIVACY_EMAIL}
                    </a>
                    {" "}· WhatsApp:{" "}
                    <a
                      href={`https://wa.me/${PHONE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-checky-green hover:underline"
                    >
                      +52 445 158 6866
                    </a>
                    . Atendemos en máximo 20 días hábiles.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">
                    Reglas del Programa, recompensas, promociones, atención presencial, quejas
                    comerciales
                  </dt>
                  <dd className="text-checky-muted mt-1">
                    Contacta directamente al Establecimiento donde te registraste, por los canales que
                    dicho Establecimiento ponga a tu disposición (presencial, redes sociales, teléfono,
                    etc.).
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold">
                    Tratamiento de tus datos por parte del Establecimiento después de la transferencia
                    mensual
                  </dt>
                  <dd className="text-checky-muted mt-1">
                    Contacta directamente al Establecimiento, ya que él es responsable autónomo de su
                    copia.
                  </dd>
                </div>
              </dl>
            </section>

            <section id="s15" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">15. Ley aplicable y jurisdicción</h2>
              <p className="text-checky-muted">
                Estos Términos se rigen por las leyes federales de los Estados Unidos Mexicanos.
                Cualquier controversia entre el Usuario y Checky se someterá a los tribunales
                competentes de León, Guanajuato, salvo cuando la ley aplicable establezca un fuero
                distinto a favor del Usuario en su calidad de consumidor. Las controversias entre el
                Usuario y un Establecimiento se rigen por las normas aplicables a su relación comercial
                directa.
              </p>
            </section>

            <section id="s16" className="scroll-mt-6">
              <h2 className="text-xl font-bold mb-4">16. Aceptación</h2>
              <p className="mb-4 text-checky-muted">
                Al marcar la casilla de aceptación en cualquier formulario de registro de un Programa
                de Lealtad operado con Checky, y/o al continuar usando un Pase Digital emitido a través
                de la Plataforma, declaras haber leído, comprendido y aceptado estos Términos y
                Condiciones, así como el{" "}
                <Link href="/privacidad" className="text-checky-green hover:underline">
                  Aviso de Privacidad de Checky
                </Link>
                .
              </p>
              <div className="rounded-lg border border-yellow-300 border-l-4 border-l-yellow-400 bg-yellow-50 p-4 text-sm">
                <strong className="block mb-1 font-semibold">
                  Texto sugerido para el checkbox de aceptación:
                </strong>
                «He leído y acepto los Términos y Condiciones y el Aviso de Privacidad de Checky.
                Autorizo el tratamiento de mis datos personales y su transferencia mensual al
                Establecimiento donde me registro, para participar en el Programa de Lealtad.»
              </div>
            </section>

          </div>

          {/* Pie del documento */}
          <div className="mt-16 border-t border-checky-border pt-6 text-xs text-checky-muted text-center space-y-1">
            <p>© 2026 Checky · Todos los derechos reservados</p>
            <p>
              <Link href="/privacidad" className="text-checky-green hover:underline">
                Aviso de Privacidad
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
