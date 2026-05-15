import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

export const metadata: Metadata = {
  title: "Checky Tickets — Boletaje digital para eventos",
  description:
    "Boletaje digital para eventos. Tus asistentes pagan en línea y reciben su boleto directo en Apple Wallet o Google Wallet. QR escaneable. Cero papel.",
};

const PHONE = "524451586866";
const TICKETS_MSG =
  "Hola Checky :) Quiero información sobre Checky Tickets para mi evento.";

function waLink(msg: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

const steps = [
  {
    n: "1",
    title: "Configuras el evento",
    desc: "Nos das los datos: nombre, fecha, lugar, precio y capacidad. Nosotros armamos la landing y el sistema de boletaje.",
  },
  {
    n: "2",
    title: "Tus asistentes compran en línea",
    desc: "Acceden a la página de tu evento y pagan con tarjeta, OXXO o SPEI a través de Stripe Checkout. Seguro y sencillo.",
  },
  {
    n: "3",
    title: "El boleto llega a su wallet",
    desc: "Al confirmar el pago, reciben su boleto al instante en Apple Wallet o Google Wallet. QR único. Cero papel. Listo para escanear.",
  },
];

const eventTypes = [
  { emoji: "🏋️", name: "Competencias fitness", desc: "Hyrox, CrossFit, carreras, torneos" },
  { emoji: "🎤", name: "Conciertos y shows", desc: "Artistas locales, festivales pequeños" },
  { emoji: "🎨", name: "Talleres y workshops", desc: "Arte, cocina, fotografía, desarrollo personal" },
  { emoji: "🏅", name: "Torneos deportivos", desc: "Fútbol, pádel, voleibol, básquetbol" },
  { emoji: "🍷", name: "Catas y degustaciones", desc: "Vino, mezcal, café, gastronomía" },
  { emoji: "🎪", name: "Eventos corporativos", desc: "Conferencias, lanzamientos, networking" },
];

export default function TicketsPage() {
  return (
    <>
      <Header />
      <main className="bg-checky-bg text-checky-text">

        {/* HERO */}
        <section className="bg-tickets-bg">
          <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-purple-700/50 bg-purple-900/30 px-3 py-1 text-xs font-semibold text-purple-300">
                Checky Tickets
              </span>

              <h1 className="mt-5 font-display text-5xl leading-tight tracking-tight text-white md:text-6xl">
                Dale a tu evento un giro tecnológico.
              </h1>

              <p className="mt-5 max-w-xl text-lg text-purple-200">
                Boletos digitales que viven en la wallet de tus asistentes.
                Pagan en línea, reciben su QR al instante.{" "}
                <span className="font-semibold text-white">
                  Fricción cero.
                </span>
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#como-funciona"
                  className="rounded-full bg-tickets-accent px-6 py-3 text-center font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  Ver cómo funciona
                </a>
                <a
                  href={waLink(TICKETS_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-purple-600 bg-transparent px-6 py-3 font-semibold text-white hover:bg-purple-900/30 transition-colors"
                >
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="WhatsApp"
                    width={16}
                    height={16}
                  />
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section id="como-funciona" className="border-t border-checky-border bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-checky-muted">
              El flujo completo
            </p>
            <h2 className="mt-2 text-3xl font-bold">Cómo funciona</h2>
            <p className="mt-2 text-checky-muted">
              Simple para ti como organizador. Simple para tus asistentes.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="rounded-3xl border border-checky-border bg-checky-bg p-6"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-tickets-accent/30 bg-tickets-accent/10 text-sm font-bold text-tickets-accent">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-checky-muted">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Diagrama simplificado del flujo */}
            <div className="mt-10 rounded-3xl border border-checky-border bg-checky-bg p-6">
              <p className="mb-4 text-sm font-semibold text-checky-muted">
                El flujo técnico para el asistente:
              </p>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                {[
                  "Visita la página del evento",
                  "Llena sus datos",
                  "Paga en Stripe",
                  "Recibe boleto por email",
                  "Lo agrega a su wallet",
                  "El día del evento: escaneo QR",
                ].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="rounded-full border border-checky-border bg-white px-3 py-1 font-medium">
                      {step}
                    </span>
                    {i < arr.length - 1 && (
                      <span className="text-checky-muted">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PARA QUIÉN */}
        <section id="para-quien" className="border-t border-checky-border">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-checky-muted">
              Tipos de evento
            </p>
            <h2 className="mt-2 text-3xl font-bold">¿Para quién es?</h2>
            <p className="mt-2 text-checky-muted">
              Checky Tickets se adapta a cualquier evento donde se vendan
              accesos.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {eventTypes.map((e) => (
                <div
                  key={e.name}
                  className="rounded-3xl border border-checky-border bg-white p-5 shadow-sm"
                >
                  <span className="text-2xl">{e.emoji}</span>
                  <h3 className="mt-3 font-bold">{e.name}</h3>
                  <p className="mt-1 text-sm text-checky-muted">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ CHECKY TICKETS */}
        <section className="border-t border-checky-border bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-checky-muted">
              Las ventajas
            </p>
            <h2 className="mt-2 text-3xl font-bold">Por qué Checky Tickets</h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "💳",
                  title: "Pago en línea fácil",
                  desc: "Tarjeta, OXXO o SPEI. Stripe se encarga de la seguridad.",
                },
                {
                  icon: "📲",
                  title: "Boleto en la wallet",
                  desc: "Apple Wallet y Google Wallet. Sin apps, sin PDFs que imprimir.",
                },
                {
                  icon: "🔒",
                  title: "QR único e infalsificable",
                  desc: "Cada boleto tiene un código irrepetible, generado al momento del pago.",
                },
                {
                  icon: "⚡",
                  title: "Validación rápida",
                  desc: "El día del evento tu staff escanea con la app Pass2U Checkout. Sin filas.",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="rounded-3xl border border-checky-border bg-checky-bg p-6"
                >
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-2xl bg-tickets-accent/10">
                    <span className="text-xl">{b.icon}</span>
                  </div>
                  <h3 className="font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-checky-muted">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / CONTACTO */}
        <section id="contacto" className="border-t border-checky-border">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <div className="overflow-hidden rounded-3xl bg-tickets-bg p-8 md:p-12">
              <span className="inline-flex items-center rounded-full border border-purple-700/50 bg-purple-900/30 px-3 py-1 text-xs font-semibold text-purple-300">
                Próximamente
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                ¿Tienes un evento próximo?
              </h2>
              <p className="mt-3 max-w-xl text-purple-200">
                Estamos en las últimas etapas de desarrollo. Si tienes un evento
                en los próximos meses, escríbenos — podemos coordinarnos para
                que seas de los primeros en usar Checky Tickets.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(TICKETS_MSG)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-tickets-accent px-6 py-3 font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="WhatsApp"
                    width={18}
                    height={18}
                  />
                  Hablar por WhatsApp
                </a>
                <Link
                  href="/loyalty"
                  className="inline-flex items-center justify-center rounded-2xl border border-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-900/30 transition-colors"
                >
                  Ver también Checky Loyalty
                </Link>
              </div>

              <p className="mt-4 text-xs text-purple-400">
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
