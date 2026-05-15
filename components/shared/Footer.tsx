import Image from "next/image";
import Link from "next/link";

const PHONE = "524451586866";
const BASE_MSG =
  "Hola Checky :) Quiero información del servicio.";

export default function Footer() {
  return (
    <footer className="border-t border-checky-border bg-checky-bg">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logos/Isotipo.png" alt="Checky" width={36} height={36} />
              <Image src="/logos/letrasLogo.png" alt="Checky" width={90} height={26} />
            </Link>
            <p className="text-xs text-checky-muted max-w-[200px]">
              Tu negocio en la wallet de tus clientes.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-checky-muted mb-3">
                Productos
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/loyalty"
                    className="text-checky-text hover:text-loyalty-accent transition-colors"
                  >
                    Checky Loyalty
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tickets"
                    className="text-checky-text hover:text-tickets-accent transition-colors"
                  >
                    Checky Tickets
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-checky-muted mb-3">
                Legal
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacidad"
                    className="text-checky-text hover:text-checky-green transition-colors"
                  >
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terminos"
                    className="text-checky-text hover:text-checky-green transition-colors"
                  >
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <a
              href={`https://wa.me/${PHONE}?text=${encodeURIComponent(BASE_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-checky-green px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                width={16}
                height={16}
              />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-checky-border pt-6 text-center text-xs text-checky-muted">
          © {new Date().getFullYear()} Checky. Hecho con cariño en México.
        </div>
      </div>
    </footer>
  );
}
