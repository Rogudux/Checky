"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PHONE = "524451586866";

function waLink(msg: string) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

export default function Header() {
  const pathname = usePathname();

  const isLoyalty = pathname.startsWith("/loyalty");
  const isTickets =
    pathname.startsWith("/tickets") || pathname.startsWith("/eventos");

  return (
    <header className="sticky top-0 z-50 border-b border-checky-border bg-checky-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logos/Isotipo.png"
            alt="Checky"
            width={44}
            height={44}
            priority
          />
          <Image
            src="/logos/letrasLogo.png"
            alt="Checky"
            width={110}
            height={32}
            priority
          />
        </Link>

        {/* Nav home paraguas */}
        {!isLoyalty && !isTickets && (
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="/loyalty"
              className="font-medium hover:text-loyalty-accent transition-colors"
            >
              Checky Loyalty
            </Link>
            <Link
              href="/tickets"
              className="font-medium hover:text-tickets-accent transition-colors"
            >
              Checky Tickets
            </Link>
          </nav>
        )}

        {/* Nav Loyalty */}
        {isLoyalty && (
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a
              className="hover:text-checky-green transition-colors"
              href="#como-funciona"
            >
              Cómo funciona
            </a>
            <a
              className="hover:text-checky-green transition-colors"
              href="#beneficios"
            >
              Beneficios
            </a>
            <a
              className="hover:text-checky-green transition-colors"
              href="#sectores"
            >
              Sectores
            </a>
            <a
              className="hover:text-checky-green transition-colors"
              href="#planes"
            >
              Planes
            </a>
          </nav>
        )}

        {/* Nav Tickets */}
        {isTickets && (
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a
              className="hover:text-tickets-accent transition-colors"
              href="#como-funciona"
            >
              Cómo funciona
            </a>
            <a
              className="hover:text-tickets-accent transition-colors"
              href="#para-quien"
            >
              ¿Para quién?
            </a>
            <a
              className="hover:text-tickets-accent transition-colors"
              href="#contacto"
            >
              Contacto
            </a>
          </nav>
        )}

        {/* CTA home paraguas */}
        {!isLoyalty && !isTickets && (
          <Link
            href="/loyalty"
            className="rounded-full bg-checky-green px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Ver productos
          </Link>
        )}

        {/* CTA Loyalty */}
        {isLoyalty && (
          <a
            href={waLink(
              "Hola Checky :) Quiero información del Estampillero de lealtad digital para mi negocio."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-checky-green px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Pedir info
          </a>
        )}

        {/* CTA Tickets */}
        {isTickets && (
          <a
            href="#contacto"
            className="rounded-full bg-tickets-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Quiero saber más
          </a>
        )}
      </div>
    </header>
  );
}
