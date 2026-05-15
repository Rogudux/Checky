import Image from "next/image";
import Link from "next/link";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const PHONE = "524451586866";
const BASE_MSG = "Hola Checky :) Quiero información del servicio.";

function waLink(msg: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-checky-bg text-checky-text">

        {/* HERO PARAGUAS */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-checky-border bg-white px-3 py-1 text-xs text-checky-muted">
              Lealtad · Eventos · Wallet
            </p>

            <h1 className="mt-5 font-display text-5xl leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Tu negocio vive en la wallet de tus clientes.
            </h1>

            <p className="mt-5 max-w-xl text-lg text-checky-muted">
              Checky convierte cada interacción de tu negocio en un pase digital
              que vive en el teléfono de tus clientes.{" "}
              <span className="font-semibold text-checky-text">
                Sin apps. Sin fricciones.
              </span>
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/loyalty"
                className="rounded-full bg-checky-green px-6 py-3 text-center font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Ver Checky Loyalty
              </Link>
              <Link
                href="/tickets"
                className="rounded-full bg-tickets-accent px-6 py-3 text-center font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Ver Checky Tickets
              </Link>
            </div>
          </div>
        </section>

        {/* CARDS DE PRODUCTOS */}
        <section className="border-t border-checky-border bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-checky-muted">
              Dos productos. Una promesa.
            </p>
            <h2 className="mt-2 text-3xl font-bold">
              Elige el que necesita tu negocio
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* Card Loyalty */}
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-checky-border bg-checky-bg p-8 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <span className="inline-flex items-center rounded-full bg-checky-green/10 px-3 py-1 text-xs font-semibold text-checky-green">
                    Checky Loyalty · Ya disponible
                  </span>
                  <h3 className="mt-4 text-2xl font-bold leading-tight">
                    Lealtad que se siente como cuidado.
                  </h3>
                  <p className="mt-3 text-checky-muted">
                    Estampilleros de lealtad digitales que viven en la wallet de
                    tu cliente. Sin cartones que perder, sin apps que descargar.
                    Para que los mismos clientes vuelvan.
                  </p>

                  <ul className="mt-6 space-y-2 text-sm text-checky-muted">
                    {[
                      "Personalizado con tu marca",
                      "Apple Wallet y Google Wallet",
                      "Notificaciones geolocalizadas",
                      "Estadísticas de visitas y recurrencia",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-checky-green" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/loyalty"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-checky-green px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity self-start"
                >
                  Ver Checky Loyalty
                  <span aria-hidden>→</span>
                </Link>
              </div>

              {/* Card Tickets */}
              <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-tickets-accent/20 bg-tickets-bg p-8 shadow-sm transition-shadow hover:shadow-md">
                <div>
                  <span className="inline-flex items-center rounded-full bg-tickets-accent/20 px-3 py-1 text-xs font-semibold text-purple-300">
                    Checky Tickets · Próximamente
                  </span>
                  <h3 className="mt-4 text-2xl font-bold leading-tight text-white">
                    Dale a tu evento un giro tecnológico.
                  </h3>
                  <p className="mt-3 text-purple-200">
                    Boletaje digital para eventos. Tus asistentes compran en
                    línea y reciben su boleto directo en Apple Wallet o Google
                    Wallet. QR escaneable. Cero papel.
                  </p>

                  <ul className="mt-6 space-y-2 text-sm text-purple-200">
                    {[
                      "Pago en línea con Stripe",
                      "Boleto en la wallet al instante",
                      "QR único e infalsificable",
                      "Validación con app Pass2U",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-tickets-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/tickets"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-tickets-accent px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity self-start"
                >
                  Ver Checky Tickets
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ LA WALLET */}
        <section className="border-t border-checky-border">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-checky-muted">
              Lo que hace diferente a Checky
            </p>
            <h2 className="mt-2 text-3xl font-bold">¿Por qué la wallet?</h2>
            <p className="mt-2 text-checky-muted">
              Apple Wallet y Google Wallet ya están en el teléfono de tus
              clientes. Checky los pone a trabajar para tu negocio.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-checky-border bg-white p-6 shadow-sm">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-checky-green/10">
                  <span className="text-xl">📱</span>
                </div>
                <h3 className="font-bold">Sin apps extra</h3>
                <p className="mt-2 text-sm text-checky-muted">
                  Los pases viven en Apple Wallet y Google Wallet, que ya están
                  instalados en millones de teléfonos. Tus clientes no necesitan
                  descargar nada.
                </p>
              </div>

              <div className="rounded-3xl border border-checky-border bg-white p-6 shadow-sm">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-checky-green/10">
                  <span className="text-xl">🔔</span>
                </div>
                <h3 className="font-bold">Notificaciones nativas</h3>
                <p className="mt-2 text-sm text-checky-muted">
                  Llegan directo al teléfono sin algoritmos de por medio. Cuando
                  tu cliente está cerca de tu sucursal, Checky le recuerda que
                  existe.
                </p>
              </div>

              <div className="rounded-3xl border border-checky-border bg-white p-6 shadow-sm">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-checky-green/10">
                  <span className="text-xl">👁️</span>
                </div>
                <h3 className="font-bold">Siempre visible</h3>
                <p className="mt-2 text-sm text-checky-muted">
                  Aparece en la pantalla de bloqueo justo cuando importa. Tu
                  marca, en el lugar más valioso del teléfono de tu cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA GLOBAL */}
        <section className="border-t border-checky-border bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="rounded-3xl border border-checky-border bg-checky-bg p-8 shadow-sm">
              <h2 className="text-3xl font-bold">
                ¿Listo para poner tu negocio en la wallet?
              </h2>
              <p className="mt-2 text-checky-muted">
                Escríbenos por WhatsApp y te explicamos todo en minutos.
              </p>
              <div className="mt-6">
                <a
                  href={waLink(BASE_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-checky-green px-6 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="WhatsApp"
                    width={18}
                    height={18}
                  />
                  Escribir por WhatsApp
                </a>
              </div>
              <p className="mt-3 text-xs text-checky-muted">
                Nota: WhatsApp no permite enviar mensajes automáticamente por
                privacidad, verifica que enviaste el mensaje.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
