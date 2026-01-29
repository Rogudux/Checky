import Image from "next/image";
import HeroMarquee from "./components/HeroMarquee";
import SectorsMarquee from "./components/SectorsMarquee";


const PHONE = "524451586866";

const baseMsg =
  "Hola Checky :) Quiero información del Estampillero de lealtad digital para mi negocio.";

const planMsg = {
  basico:
    "Hola Checky :) Quiero información del Estampillero de lealtad digital plan básico.",
  multi:
    "Hola Checky :) Quiero información del Estampillero de lealtad digital plan multi-sucursal.",
  pro: "Hola Checky :) Quiero información del Estampillero de lealtad digital plan pro.",
};

function waLink(message: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

/** Carrusel del hero: pon aquí tus ejemplos por tipo de negocio */
const heroCarousel = [
  { src: "/images/hero/cafe.webp", alt: "Ejemplo estampillero para cafeteria" },
  { src: "/images/hero/pizzeria.webp", alt: "Ejemplo estampillero para restaurante" },
  { src: "/images/hero/barberia.webp", alt: "Ejemplo estampillero para barberia" },
  { src: "/images/hero/spa.webp", alt: "Ejemplo estampillero para spa" },
  { src: "/images/hero/lavadero.webp", alt: "Ejemplo estampillero para autolavado" },
  { src: "/images/hero/salon.webp", alt: "Ejemplo estampillero para belleza" },
  { src: "/images/hero/tatto.webp", alt: "Ejemplo estampillero para studio de tattos" },
  { src: "/images/hero/spaPerros.webp", alt: "Ejemplo estampillero para spa de perros" },
  { src: "/images/hero/floreria.webp", alt: "Ejemplo estampillero para floreria" },

];

/** Imágenes por paso (Cómo funciona) */
const howImages = {
  step1: { src: "https://www.coupontools.com/assets/images/loyalty/loyaltycard-mockup-stamp.webp", alt: "Personalización del Checky" },
  step2: { src: "https://media.istockphoto.com/id/2193788051/es/foto/primer-plano-de-una-mujer-que-realiza-un-pago-m%C3%B3vil-escaneando-un-c%C3%B3digo-qr.webp?a=1&b=1&s=612x612&w=0&k=20&c=HNJOggbj8oqzn8E77of2dsEMqOBmawkRiX-p3VWYiAc=", alt: "QR para guardar el Checky" },
  step3: { src: "https://www.puntosparati.com/images/hero-sistema-puntos-5.webp", alt: "Estadísticas / crecimiento" },
};

/** Sectores como tiles con imagen + texto encima */
const sectors = [
  { name: "Cafeterías", img: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Restaurantes", img: "https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Clases de arte", img: "https://images.unsplash.com/photo-1757085242669-076c35ff9397?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Barberías", img: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Autolavados", img: "https://plus.unsplash.com/premium_photo-1663036887804-4125d57b8b65?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Spas", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Salones de belleza", img: "https://plus.unsplash.com/premium_photo-1676677515308-34748d48d71b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Pestañas", img: "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Uñas", img: "https://plus.unsplash.com/premium_photo-1661432806304-6d6cb7bfa4c1?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Maquillaje", img: "https://plus.unsplash.com/premium_photo-1682087987464-51ba6adab1d0?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Tattoo studios", img: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Florerías", img: "https://plus.unsplash.com/premium_photo-1672848397468-a231009044c1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Heladerías", img: "https://media.istockphoto.com/id/1496731774/es/foto/mujer-latina-ocupada-sirviendo-ingredientes-en-yogur-helado-y-helado.webp?a=1&b=1&s=612x612&w=0&k=20&c=L1HyfzlXPejU4Ju7OwMMbySZOX0NIjHUFqXOXMU8MaE=" },
  { name: "Spa de perros", img: "https://plus.unsplash.com/premium_photo-1663036401821-d60fe33f066f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Veterinarias", img: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const plans = [
  {
    id: "basico",
    name: "Básico",
    price: 350,
    period: "al mes",
    badge: "Ideal para empezar",
    branches: "1 sucursal",
    features: [
      "Clientes ilimitados",
      "Formulario de recoleccion de información",
      "Notificaciones geolocalizadas",
      "Estadísticas avanzadas",
      "Soporte prioritario",
    ],
    cta: "Solicitar info del Plan Básico",
    msg: planMsg.basico,
    highlighted: false,
  },
  {
    id: "multi",
    name: "Multi-sucursal",
    price: 550,
    period: "al mes",
    badge: "Más recomendado",
    branches: "3 sucursales",
    features: [
      "Clientes ilimitados",
      "Formulario de recoleccion de información",
      "Notificaciones geolocalizadas",
      "Estadísticas avanzadas",
      "Soporte prioritario",
    ],
    cta: "Solicitar info del Plan Multi",
    msg: planMsg.multi,
    highlighted: true,
  },
  {
    id: "pro",
    name: "Pro",
    price: 700,
    period: "al mes",
    badge: "Para crecer en serio",
    branches: "10 sucursales",
    features: [
      "Clientes ilimitados",
      "Formulario de recoleccion de información",
      "Notificaciones geolocalizadas",
      "Estadísticas avanzadas",
      "Soporte prioritario",
    ],
    cta: "Solicitar info del Plan Pro",
    msg: planMsg.pro,
    highlighted: false,
  },
];

export default function Home() {
  return (
    <main className="bg-checky-bg text-checky-text">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-checky-border bg-checky-bg/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Image src="/logos/Isotipo.png" alt="Checky" width={44} height={44} priority />
            <Image src="/logos/letrasLogo.png" alt="Checky" width={110} height={32} priority />
          </div>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:text-checky-green" href="#como-funciona">Cómo funciona</a>
            <a className="hover:text-checky-green" href="#beneficios">Beneficios</a>
            <a className="hover:text-checky-green" href="#sectores">Sectores</a>
            <a className="hover:text-checky-green" href="#planes">Planes</a>
          </nav>

          <a
            href={waLink(baseMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-checky-green px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Pedir info
          </a>
        </div>
      </header>

      {/* HERO (sin mockup; carrusel debajo) */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-checky-border bg-white px-3 py-1 text-xs text-checky-muted">
            Lealtad que se siente como cuidado
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            No necesitas más clientes
            <br />
            Necesitas que los mismos <span className="text-checky-green">vuelvan</span>.
          </h1>

          <p className="mt-4 text-lg text-checky-muted">
            Checky es tu{" "}
            <span className="font-semibold text-checky-text">
              estampillero de lealtad digital
            </span>
            . 
          </p>

          <p className="mt-4 text-lg text-checky-muted">
            En cada visita el cliente se siente reconocido, recompensado y querido… y cuando eso pasa, <span className="text-checky-green font-bold">vuelven</span>. 
          </p>

          <p className="mt-4 text-base text-checky-muted">
            Se guarda en su teléfono en segundos,{" "}
            <span className="font-semibold">sin instalar apps</span>.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#como-funciona"
              className="rounded-full bg-checky-green px-6 py-3 text-center font-semibold text-white hover:opacity-90"
            >
              Ver cómo funciona
            </a>

            <a
              href={waLink(baseMsg)}
              target="_blank"
              rel="noopener noreferrer"
className="inline-flex items-center gap-2 rounded-full border border-checky-border bg-white px-10 py-1 font-semibold hover:border-checky-green"
            >
              <Image src="/icons/whatsappNegro.svg" alt="WhatsApp" width={18} height={18} /> Solicitar info por WhatsApp

            </a>
          </div>

      

          

        </div>

        {/*Carrusel de estampillero */}
        <div className="mt-10">
    <HeroMarquee slides={heroCarousel} speedSeconds={30} />
  </div>
      </section>

      {/* CÓMO FUNCIONA (con imagen por paso) */}
      <section id="como-funciona" className="border-t border-checky-border bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold">Cómo funciona</h2>
          <p className="mt-2 text-checky-muted">
            Simple, rápido y pensado para que el cliente vuelva.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-3xl border border-checky-border bg-checky-bg p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-checky-border bg-white text-sm font-bold text-checky-green">
                  1
                </span>
                <h3 className="text-lg font-bold">Diseñamos tu Checky</h3>
              </div>
              <p className="mt-3 text-checky-muted">
                Personalizamos tu estampillero con tu marca, colores, logotipos y reglas de recompensa a tu gusto.
              </p>

              <div className="mt-5 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-checky-border bg-white">
                {/* Imagen ejemplo de personalización */}
                <Image src={howImages.step1.src} alt={howImages.step1.alt} fill className="object-cover" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl border border-checky-border bg-checky-bg p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-checky-border bg-white text-sm font-bold text-checky-green">
                  2
                </span>
                <h3 className="text-lg font-bold">Comparte</h3>
              </div>
              <p className="mt-3 text-checky-muted">
                Tus clientes guardan el estampillero en Apple Wallet o Google Wallet por medio de un QR en cuestion de segundos.
              </p>

              <div className="mt-5 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-checky-border bg-white">
                {/* Imagen ejemplo QR / guardar tarjeta */}
                <Image src={howImages.step2.src} alt={howImages.step2.alt} fill className="object-cover" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl border border-checky-border bg-checky-bg p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-checky-border bg-white text-sm font-bold text-checky-green">
                  3
                </span>
                <h3 className="text-lg font-bold">Crece</h3>
              </div>
              <p className="mt-3 text-checky-muted">
                Mide el impacto en tu negocio. Descubre cómo crece la lealtad de tus clientes y aumentan tus ingresos con cada visita.
              </p>

              <div className="mt-5 relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-checky-border bg-white">
                {/* Imagen ejemplo stats / crecimiento */}
                <Image src={howImages.step3.src} alt={howImages.step3.alt} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

{/* BENEFICIOS (lista izquierda + 3 cards de imágenes “flotantes”) */}
<section id="beneficios" className="mx-auto max-w-6xl px-4 py-14">
  <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
    {/* Izquierda: lista */}
    <div>
      <h2 className="text-3xl font-bold">Beneficios</h2>
      <p className="mt-2 text-checky-muted">
        Todo lo que necesitas para fidelizar sin fricción.
      </p>

      <ul className="mt-8 space-y-5">
        {[
          [
            "Todo es digital",
            "No se necesitan cartones. Ya no se pierden: todo se guarda en el teléfono.",
          ],[
            "Notificaciones geolocalizadas",
            "Atrae más clientes justo cuando están a 1 km de tu sucursal.",
          ],
          [
            "Fidelizas a tus clientes",
            "Premias la constancia y haces que quieran volver más seguido.",
          ],
          
          [
            "Consientes a tus clientes",
            "Cada visita se siente como un gesto de cuidado, no como un trámite.",
          ],
          [
            "Fácil de gestionar",
            "Reglas claras, control simple y experiencia rápida para el cliente.",
          ],
          [
            "Estadísticas",
            "Mide el impacto: visitas, recurrencia y comportamiento.",
          ],
        ].map(([t, d]) => (
          <li key={t} className="flex gap-4">
            <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-checky-green/15 text-checky-green">
              ✓
            </span>

            <div>
              <p className="font-semibold">{t}</p>
              <p className="mt-1 text-checky-muted">{d}</p>
            </div>
          </li>
        ))}
      </ul>

      
    </div>

    {/* Derecha: imágenes escalonadas */}
<div className="relative">
  <div className="relative h-[620px] w-full rounded-[2.5rem] border border-checky-border bg-white/40 p-1 backdrop-blur">
    
    {/* Card 1 – superior izquierda */}
    <div className="absolute left-6 top-6 w-[260px] rounded-3xl bg-white p-2 shadow-md ring-1 ring-black/5">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-checky-bg">
        <Image
          src="https://i.blogs.es/02357f/diseno-sin-titulo---2023-10-11t151754.988-1-/500_333.jpeg"
          alt="Notificaciones geolocalizadas"
          fill
          className="object-cover"
        />
      </div>
      
      
    </div>

    {/* Card 2 – centro (principal) */}
   <div className="absolute left-1/2 top-1/2 z-10 w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-1 shadow-lg ring-1 ring-black/5">
  <div className="relative aspect-[4/1] w-full overflow-hidden rounded-2xl bg-white">
    <Image
      src="/images/hero/notificacion.webp"
      alt="Notificación Checky"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>

    {/* Card 3 – inferior derecha */}
    <div className="absolute bottom-6 right-6 w-[260px] rounded-3xl bg-white p-2 shadow-md ring-1 ring-black/5">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-checky-bg">
        <Image
          src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Todo digital"
          fill
          className="object-cover"
        />
      </div>
        
    </div>

  </div>
</div>

  </div>
</section>

 {/* PLANES */}
<section id="planes" className="bg-white">
   <div className="mx-auto max-w-6xl px-4 py-14">
  <h2 className="text-3xl font-bold">Planes</h2>
  <p className="mt-2 text-checky-muted">
  Elige el plan perfecto para ti.
</p>
<div className="mt-2 inline-flex items-center gap-2 rounded-full bg-checky-green/10 px-3 py-1 text-sm font-semibold text-checky-green">
  Cancela cuando quieras · Sin cargos adicionales
</div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.id}
              className={[
                "rounded-3xl border bg-white p-7 shadow-sm",
                p.highlighted ? "border-checky-green" : "border-checky-border",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className={p.highlighted ? "text-sm font-semibold text-checky-green" : "text-sm font-semibold text-checky-muted"}>
                    {p.name}
                  </p>
                  <p className="mt-2 text-4xl font-bold">
                    ${p.price}{" "}
                    <span className="text-base font-semibold text-checky-muted">MXN</span>
                  </p>
                  <p className="text-sm text-checky-muted">{p.period}</p>
                </div>

                <span className="rounded-full border border-checky-border bg-checky-bg px-3 py-1 text-xs text-checky-muted">
                  {p.badge}
                </span>
              </div>

              <div className="mt-5 rounded-2xl border border-checky-border bg-checky-bg px-4 py-3 text-sm">
                <span className="font-semibold text-checky-text">Incluye:</span>{" "}
                <span className="text-checky-muted">{p.branches}</span>
              </div>

              <ul className="mt-6 space-y-3 text-checky-muted">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-[2px] inline-block h-4 w-4 rounded-full bg-checky-green/20" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(p.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-checky-green px-4 py-3 font-semibold text-white hover:opacity-90"
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* SECTORES (tiles con imagen + nombre encima) */}
      <section id="sectores" className="border-t border-checky-border">
  <div className="mx-auto max-w-6xl px-4 py-14">
    <h2 className="text-3xl font-bold">Hecho para tu negocio</h2>
    <p className="mt-2 text-checky-muted">
      Checky se adapta a cualquier servicio con cualquier cliente.
    </p>

    <SectorsMarquee sectors={sectors} />
  </div>
</section>

     

      {/* CONTACTO (botón con icono WhatsApp) */}
      <section id="contacto" className="border-t border-checky-border bg-checky-bg">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-checky-border bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold">Pídeme información</h2>
            

            <div className="mt-6">
              <a
                href={waLink(baseMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-checky-green px-6 py-3 font-semibold text-white hover:opacity-90 md:w-auto"
              >
                <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={18} height={18} />
                Escribir por WhatsApp
              </a>
            </div>

            <p className="mt-3 text-xs text-checky-muted">
              Nota: WhatsApp no permite enviar mensajes automáticamente por privacidad, verifica que enviaste el mensaje.
            </p>
          </div>

          <footer className="mt-10 text-center text-xs text-checky-muted">
            © {new Date().getFullYear()} Checky. Hecho con cariño.
          </footer>
        </div>
      </section>
    </main>
  );
}
