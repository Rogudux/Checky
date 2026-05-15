# CLAUDE.md — Biblia del proyecto Checky

> **Este archivo es leído automáticamente por Claude Code en cada sesión.**
> Es la fuente de verdad del proyecto. Mantenlo actualizado.
> Última actualización: 2026-05-14

---

## 🎯 Misión del proyecto

**Checky** es una plataforma que convierte cualquier interacción de un negocio con sus clientes en un pase digital que vive en la wallet del teléfono (Apple Wallet / Google Wallet). Sin instalar apps. Sin fricciones.

Bajo el paraguas Checky existen **dos productos hermanos**:

### 🟢 Checky Loyalty (estampilleros — el producto original)
> *"Lealtad que se siente como cuidado. Para que los mismos clientes vuelvan."*

Estampilleros de lealtad digitales. Vendido como suscripción mensual a comercios. Es el producto vivo y funcionando hoy.

### 🟣 Checky Tickets (boletaje — el producto nuevo que vamos a construir)
> *"Dale a tu evento un giro tecnológico. Boletos en la wallet, fricción cero."*

Boletaje digital para eventos. Se vende como servicio a organizadores. Primer caso real: evento tipo Hyrox de un socio del fundador.

**Promesa raíz que une ambos:**
> **Checky — Tu negocio en la wallet de tus clientes.**

---

## 🧠 Contexto importante

- Checky usa **Pass2U** (servicio de Taiwán) como motor de creación de pases en Apple/Google Wallet. Ya hay cuenta operando.
- El fundador ya tiene Checky Loyalty funcionando con clientes reales. La landing actual es la del producto Loyalty.
- Checky Tickets se construye desde cero, dentro del mismo proyecto Next.js.
- **No queremos confundir a los clientes actuales de Loyalty.** Por eso la marca se reposiciona como paraguas, no como pivot.

---

## 🛠️ Stack técnico

### Lo que ya está
- **Framework:** Next.js 15+ con App Router
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v3 con tokens custom
- **Fuente actual:** Geist Sans + Geist Mono (vía `next/font/google`)
- **Imágenes:** `next/image`
- **Hosting esperado:** Vercel
- **Base de datos:** Ninguna por ahora (es solo landing)

### Lo que vamos a agregar para Tickets
- **Pasarela de pago:** Stripe Checkout (hosteado)
- **Wallet:** Pass2U API (ya existe cuenta)
- **Base de datos:** Supabase (Postgres + Auth + Storage)
- **Email transaccional:** Resend
- **Animaciones:** Framer Motion (`motion` package)
- **Iconos:** Lucide React

### Comandos básicos
```bash
npm run dev      # Desarrollo
npm run build    # Build de producción
npm run lint     # Lint
```

---

## 🎨 Sistema de diseño renovado

> **Misión visual:** Pasar de una landing "informativa básica" a algo que se sienta **moderno, premium, con vida**. Que cuando alguien la abra, sienta que detrás hay un equipo serio.

### Aesthetic direction
- **Tono general:** Moderno-minimal con personalidad. Mucho espacio en blanco, tipografía expresiva, animaciones suaves pero presentes. Premium sin ser frío.
- **Inspiración de referencia:** Linear, Vercel, Stripe, Arc Browser, Raycast. No copiar, inspirarse en la **densidad de información, calidad de motion y refinamiento tipográfico**.
- **NO HACER:** gradientes morados sobre blanco, fuente Inter genérica, hero con stock photo, layouts predecibles de "hero + features + cta". Diferenciarse.

### Tokens de color (Tailwind config)

Mantener todos los tokens actuales de Checky y agregar acentos por producto:

```js
// tailwind.config.ts
colors: {
  // Base Checky (existentes — NO CAMBIAR)
  'checky-bg':     '#FAFAF7',  // crema cálido (ajustar al valor real actual)
  'checky-text':   '#1A1A1A',
  'checky-muted':  '#6B6B6B',
  'checky-border': '#E5E5E0',
  'checky-green':  '#16A34A',  // verde Checky — color principal

  // Acentos por producto
  'loyalty-accent': '#16A34A',   // verde (igual al checky-green) → para Checky Loyalty
  'tickets-accent': '#7C3AED',   // morado vibrante → para Checky Tickets
  'tickets-bg':     '#0F0A1E',   // morado oscuro casi negro para hero de tickets

  // Estados
  'success': '#16A34A',
  'warning': '#F59E0B',
  'error':   '#DC2626',
}
```

**Regla:** Loyalty habla en verde (cálido, cuidado). Tickets habla en morado (energético, tecnológico, evento). El home paraguas usa ambos en armonía.

### Tipografía

- **Display (para hero, títulos grandes):** instalar **Instrument Serif** o **Fraunces** (serif moderno expresivo) vía `next/font/google`. Estilo editorial.
- **Body:** Geist Sans (ya está).
- **Mono:** Geist Mono (ya está, usar para detalles tipo "código", precios destacados, badges).

Esta combinación serif-display + sans-body se siente premium sin ser predecible.

### Motion y micro-interacciones

Usar **Framer Motion** (`motion/react`). Reglas:

- **Hero on load:** fade + slide-up con stagger (0.08s entre elementos).
- **Scroll reveals:** `whileInView` con `viewport={{ once: true, margin: "-100px" }}`.
- **Hover en cards:** lift sutil (translateY -4px), sombra crece, transition 200ms ease-out.
- **Botones primarios:** hover scale 1.02 con feedback de spring.
- **Imágenes/cards en marquee:** mantener animaciones CSS actuales pero suavizar timing.
- **Cursor:** dejar el default del SO. No reinventar.

**NO USAR:** parallax exagerado, scrolljacking, animaciones de más de 600ms, efectos partículas.

### Detalles visuales que elevan el nivel

- **Grain/noise sutil** en el fondo del hero (CSS noise o SVG filter, opacity 3-5%).
- **Bordes con micro-radius diferenciado** (cards: rounded-3xl, botones: rounded-full, inputs: rounded-2xl).
- **Sombras layered** en cards importantes: `shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)]`.
- **Tipografía con tracking ajustado** en headings (tracking-tight) y en eyebrows (tracking-widest uppercase text-xs).
- **Iconografía consistente** con Lucide React (stroke-width 1.5).

---

## 🗂️ Arquitectura de rutas

### Estructura final que vamos a construir

```
checky.mx/
├── /                          ← Home paraguas (NUEVO)
│
├── /loyalty                   ← Página de Checky Loyalty (lo que hoy es la home actual, refinada)
│
├── /tickets                   ← Página de venta de Checky Tickets (B2B: organizadores)
│
├── /eventos/
│   ├── /hyrox                 ← Landing del evento + compra (B2C: asistentes)
│   ├── /hyrox/exito           ← Post-pago, muestra link al pase
│   └── /hyrox/cancelado       ← Compra cancelada
│
├── /privacidad                ← Aviso de privacidad (legal)
├── /terminos                  ← Términos y condiciones (legal)
│
└── /api/
    ├── /checkout/route.ts          ← Crea Stripe Checkout Session
    ├── /stripe/webhook/route.ts    ← Webhook: pago confirmado → crea pase en Pass2U → email
    └── /refund/route.ts            ← Admin: refund Stripe + void pase
```

### Estructura del repo

```
checky/
├── app/
│   ├── page.tsx                    # Home paraguas (NUEVO)
│   ├── layout.tsx                  # Layout raíz con fuentes
│   ├── globals.css                 # Tailwind + animaciones globales
│   │
│   ├── loyalty/page.tsx            # Producto Loyalty
│   ├── tickets/page.tsx            # Producto Tickets
│   ├── privacidad/page.tsx
│   ├── terminos/page.tsx
│   │
│   ├── eventos/
│   │   └── hyrox/
│   │       ├── page.tsx
│   │       ├── exito/page.tsx
│   │       └── cancelado/page.tsx
│   │
│   └── api/
│       ├── checkout/route.ts
│       ├── stripe/webhook/route.ts
│       └── refund/route.ts
│
├── components/
│   ├── shared/                     # Componentes usados en toda la web
│   │   ├── Header.tsx              # Header global (con switch Loyalty/Tickets)
│   │   ├── Footer.tsx              # Footer global
│   │   ├── WhatsAppButton.tsx
│   │   └── Section.tsx             # Wrapper con padding consistente
│   │
│   ├── home/                       # Específicos del home paraguas
│   │   ├── Hero.tsx
│   │   ├── ProductCards.tsx        # Las 2 cards grandes Loyalty/Tickets
│   │   └── WhyWallet.tsx
│   │
│   ├── loyalty/                    # Específicos de /loyalty
│   │   ├── LoyaltyHero.tsx
│   │   ├── HeroMarquee.tsx         # Carrusel actual (mantener)
│   │   ├── HowItWorks.tsx
│   │   ├── Benefits.tsx
│   │   ├── SectorsMarquee.tsx
│   │   └── Plans.tsx
│   │
│   ├── tickets/                    # Específicos de /tickets
│   │   ├── TicketsHero.tsx
│   │   ├── TicketsHowItWorks.tsx
│   │   ├── TicketsForWho.tsx
│   │   └── TicketsCTA.tsx
│   │
│   └── event/                      # Específicos de /eventos/[slug]
│       ├── EventHero.tsx
│       ├── EventInfo.tsx
│       └── CheckoutForm.tsx
│
├── lib/
│   ├── pass2u.ts                   # Cliente Pass2U
│   ├── stripe.ts                   # Cliente Stripe
│   ├── supabase.ts                 # Cliente Supabase
│   ├── email.ts                    # Cliente Resend
│   └── utils.ts                    # Helpers (cn, formatPrice, etc.)
│
├── data/
│   └── events/
│       └── hyrox.ts                # Config del evento Hyrox (datos estáticos)
│
├── public/
│   ├── logos/                      # Isotipo.png, letrasLogo.png (existentes)
│   └── icons/, images/...
│
├── .env.local                      # Variables (NO commitear)
├── .env.example                    # Template (sí commitear)
├── CLAUDE.md                       # Este archivo
└── tailwind.config.ts
```

---

## 📐 Plan de implementación por fases

> **Filosofía:** No tocar nada que ya funciona hasta que el reemplazo esté listo. Cada fase es un PR mental cerrado y desplegable.

### Fase 0 — Setup base (antes de cualquier otra fase)

1. Crear `CLAUDE.md` en raíz (este archivo). ✅
2. Crear `.env.example` con todas las variables documentadas.
3. Agregar al `.gitignore`: `.env*` (excepto `.env.example`).
4. Instalar dependencias nuevas:
   ```bash
   npm install motion lucide-react
   npm install stripe @stripe/stripe-js
   npm install @supabase/supabase-js
   npm install resend
   ```
5. Configurar fuente display (Instrument Serif o Fraunces) en `layout.tsx`.
6. Actualizar `tailwind.config.ts` con los tokens nuevos (`tickets-accent`, `tickets-bg`, `loyalty-accent`).
7. Crear estructura de carpetas vacías de `components/` según el árbol de arriba.

### Fase 1 — Refactor de marca (Checky paraguas + Loyalty + Tickets)

1. Mover la home actual (`app/page.tsx`) a `app/loyalty/page.tsx` SIN MODIFICAR CONTENIDO. Solo cambiar:
   - Encabezado: agregar el badge "Checky Loyalty" arriba del H1.
   - Header global: actualizar para mostrar producto activo.
2. Crear `app/page.tsx` NUEVO (home paraguas) con:
   - Hero unificador con la promesa raíz.
   - Dos cards grandes 50/50: Checky Loyalty / Checky Tickets.
   - Sección "Por qué la wallet" (3 beneficios universales).
   - Footer con WhatsApp.
3. Crear `app/tickets/page.tsx` con contenido completo (B2B para organizadores).
4. Crear `components/shared/Header.tsx` que se adapta según ruta:
   - En `/` muestra Checky neutro.
   - En `/loyalty/*` resalta Loyalty (verde).
   - En `/tickets/*` y `/eventos/*` resalta Tickets (morado).
5. Crear `components/shared/Footer.tsx` con links a Loyalty, Tickets, Privacidad, Términos.

### Fase 2 — Renovación visual de Loyalty

> Sin cambiar el contenido, hacer que Loyalty se sienta del 2026.

1. Refactorizar `components/loyalty/LoyaltyHero.tsx` con:
   - Tipografía display serif para el H1.
   - Entrada animada con Framer Motion (stagger).
   - Grain sutil en el fondo.
2. Agregar scroll reveals en secciones Cómo Funciona, Beneficios, Sectores, Planes.
3. Pulir cards: sombras layered, hover lift, transitions consistentes.
4. Marquees existentes: suavizar velocidad, agregar fade en bordes (mask-image).
5. Botones: estandarizar variantes (primary, secondary, ghost) en `components/shared/Button.tsx`.

### Fase 3 — Páginas legales

1. Crear `app/privacidad/page.tsx` con Aviso de Privacidad Integral.
   - Cubre datos de comercios (B2B Loyalty) y compradores de boletos (B2C Tickets).
   - LFPDPPP México. Disclaimer: **NO es asesoría legal**, revisar con abogado antes de live.
2. Crear `app/terminos/page.tsx` con Términos y Condiciones.
   - Incluye cláusulas de compra de boletos (reembolsos, cancelación de evento, transferibilidad).
3. Linkear ambos desde el footer global y desde el checkout form.

### Fase 4 — Sistema de boletaje (backend)

1. Crear `lib/pass2u.ts`:
   - Cliente con `PASS2U_API_KEY`.
   - Función `createPass({ modelId, attendeeName, email, barcode })` que devuelve `{ passUrl, passId }`.
   - Función `voidPass({ passId })` para reembolsos.
   - Manejo de errores tipados.
2. Crear `lib/stripe.ts`:
   - Cliente con `STRIPE_SECRET_KEY`.
   - Función `createCheckoutSession({ eventSlug, attendeeName, email, phone })` que devuelve session URL.
3. Crear `lib/supabase.ts`:
   - Cliente server-side (service role) y client-side (anon).
   - Tabla `tickets`:
     ```sql
     create table tickets (
       id uuid primary key default gen_random_uuid(),
       event_slug text not null,
       stripe_session_id text unique not null,
       stripe_payment_intent_id text,
       pass2u_pass_id text,
       barcode text,
       pass_url text,
       attendee_name text not null,
       email text not null,
       phone text,
       amount_mxn integer not null,
       status text not null default 'pending',  -- pending | paid | refunded | void
       created_at timestamptz default now(),
       paid_at timestamptz,
       redeemed_at timestamptz
     );
     create index idx_tickets_event on tickets(event_slug);
     create index idx_tickets_email on tickets(email);
     ```
4. Crear `lib/email.ts`:
   - Cliente Resend.
   - Template `sendTicketEmail({ to, name, eventName, passUrl })` con HTML branded.
5. Crear endpoints:
   - `app/api/checkout/route.ts` — POST: valida input, llama Stripe, devuelve URL.
   - `app/api/stripe/webhook/route.ts` — POST: verifica firma, en `checkout.session.completed` → crea pase Pass2U → guarda en Supabase → envía email.

### Fase 5 — Landing del evento Hyrox

1. Crear `data/events/hyrox.ts` con toda la info del evento (nombre, fecha, lugar, precio, capacidad, imagen).
2. Crear `app/eventos/hyrox/page.tsx`:
   - Hero del evento con branding propio fuerte (la marca del Hyrox al frente, "Boletaje por Checky" discreto).
   - Sección de info del evento.
   - Formulario de compra (CheckoutForm).
   - Disclaimer de términos + privacidad.
3. Crear `app/eventos/hyrox/exito/page.tsx`:
   - Muestra confirmación.
   - Botón grande "Agregar a Apple/Google Wallet" (link del pase Pass2U).
   - Mensaje: "También te enviamos el boleto por email a {email}".
4. Crear `app/eventos/hyrox/cancelado/page.tsx` con mensaje amable y CTA de volver al evento.

### Fase 6 — Testing y go-live

1. Probar flow completo en Stripe test mode + Pass2U trial.
2. Configurar dominio del email en Resend (DKIM, SPF).
3. Configurar webhook de Stripe en dashboard apuntando a `/api/stripe/webhook`.
4. Cargar la API key real de Pass2U (trial 30 días o renovar a $100 USD/año si el evento es lejano).
5. Switch a Stripe live.
6. Configurar dominio en Vercel y SSL.

---

## 🔐 Variables de entorno

Crear `.env.example` con esto (vacío) y `.env.local` con valores reales (nunca commitear):

```env
# === App ===
NEXT_PUBLIC_APP_URL=http://localhost:3000

# === Pass2U ===
PASS2U_API_KEY=
PASS2U_MODEL_ID_HYROX=        # Model ID específico del evento Hyrox

# === Stripe ===
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# === Supabase ===
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# === Resend ===
RESEND_API_KEY=
RESEND_FROM_EMAIL=boletos@checky.mx
```

---

## 🎫 Detalles del primer evento (Hyrox)

> ⚠️ Datos pendientes — actualizar cuando los confirme el organizador. Hasta entonces, hardcodear placeholders en `data/events/hyrox.ts`.

```ts
// data/events/hyrox.ts
export const hyroxEvent = {
  slug: 'hyrox',
  name: 'PENDIENTE',
  date: 'PENDIENTE',           // ISO format
  location: 'PENDIENTE',
  address: 'PENDIENTE',
  price: 0,                    // en MXN, entero
  capacity: 500,
  ticketType: 'general',
  refundPolicy: 'PENDIENTE',
  organizer: 'PENDIENTE',
  coverImage: '/images/events/hyrox-cover.jpg',
  description: 'PENDIENTE',
  pass2uModelId: process.env.PASS2U_MODEL_ID_HYROX!,
};
```

---

## 🎟️ Configuración crítica del Model en Pass2U

El Model del evento DEBE estar configurado así (ya validado por el fundador):

1. **Style:** Event Ticket
2. **Barcode Data Format:** QR Code
3. **Barcode Data Type:** `Dynamic – unique random 8-digit number` (actual) o `Dynamic – assigned by API (non-replicable)` si se quiere control total
4. **Install to Wallet for one time only:** ✅ **OBLIGATORIO ACTIVADO** — esto bloquea reenvío del link tras instalación
5. **Campos dinámicos requeridos:** al menos `attendeeName`
6. **Campaña de Checkout:** debe existir para validar con app Pass2U Checkout el día del evento

---

## ⚠️ Limitantes conocidas de Pass2U

- **Sin webhook de redención** sin plan enterprise → no se notifica al backend cuando se escanea. Para Hyrox no importa, el staff ve el dashboard de Pass2U directamente.
- **SMS solo Taiwán** → irrelevante, usamos Resend.
- **Monthly Premium ($29/$79 USD/Modelo/mes)** → NO se contrata para este evento. Solo pay-as-you-go.
- **3 créditos por pase creado** + 3 por update. 500 boletos = 1,500 créditos. Hay 5,450 disponibles.
- **API Key trial = 30 días.** Renovación: $100 USD/año. Verificar fechas vs evento.

---

## 💰 Flujo end-to-end de compra

```
1. Usuario visita /eventos/hyrox
2. Llena form (nombre, email, teléfono)
3. Acepta términos + privacidad (checkbox)
4. Clic "Comprar boleto"
5. POST /api/checkout
   → valida input con Zod
   → crea Stripe Checkout Session con metadata (eventSlug, attendeeName, etc.)
   → guarda registro en Supabase con status='pending'
   → devuelve session.url
6. Redirect a Stripe Checkout hosted
7. Usuario paga (tarjeta / OXXO / SPEI)
8. Stripe envía webhook → /api/stripe/webhook
9. Webhook:
   a. Verifica firma con STRIPE_WEBHOOK_SECRET
   b. Si event.type === 'checkout.session.completed':
      - Llama Pass2U API → crea pase
      - Update Supabase: status='paid', pass2u_pass_id, pass_url, paid_at
      - Envía email con Resend (template branded Checky Tickets)
10. Usuario es redirigido a /eventos/hyrox/exito
11. Página de éxito muestra el pass_url para agregar a Wallet
12. Día del evento: staff escanea con app Pass2U Checkout
```

---

## 🧑‍💻 Convenciones de código

### TypeScript
- Strict mode ON.
- Tipos explícitos en boundaries (API routes, funciones exportadas de `lib/`).
- Evitar `any`. Usar `unknown` + narrowing.
- Schemas de validación con **Zod** para inputs de API.

### Componentes React
- Server Components por default. `'use client'` solo cuando se necesite (estado, event handlers, hooks).
- Props tipadas con interface o type local.
- Composición sobre props gigantes.
- Naming: PascalCase para componentes, camelCase para todo lo demás.

### Estilos
- **Tailwind only.** Nada de CSS-in-JS ni archivos `.module.css`.
- Usar SIEMPRE los tokens custom (`checky-green`, `tickets-accent`, etc.). NUNCA hex codes inline.
- Para clases largas usar `clsx` o `cn` helper.
- Mobile-first. Breakpoints estándar Tailwind.

### Idioma
- **UI 100% en español (México).** Tono cálido, cercano, sin tutear con exceso.
- **Comentarios de código en español.**
- Variables, funciones y nombres de archivo en **inglés** (estándar de la industria).

### Estructura de archivos
- Una responsabilidad por archivo.
- Componentes grandes (>200 líneas) se rompen en sub-componentes.
- Cada feature tiene su carpeta en `components/`.

---

## 📜 Reglas de oro (LEER ANTES DE CADA CAMBIO)

1. **NUNCA modificar `app/loyalty/page.tsx`** una vez migrada la home actual ahí, sin permiso explícito del fundador. Es el producto vivo.
2. **NUNCA commitear** archivos `.env*` (excepto `.env.example`) ni claves de cualquier tipo.
3. **NUNCA hardcodear** API keys, model IDs, dominios, ni precios en el código. Todo a env vars o a `data/`.
4. **NUNCA instalar paquetes** sin antes preguntar al fundador y justificar por qué.
5. **NUNCA modificar este `CLAUDE.md`** sin avisar — pero SÍ actualizarlo cuando se tomen decisiones nuevas.
6. **NUNCA usar colores fuera del sistema de tokens.** Si se necesita uno nuevo, agregarlo a `tailwind.config.ts` con nombre semántico.
7. **NUNCA romper la promesa de Loyalty.** Aunque la marca crezca, "que vuelvan" sigue siendo sagrado.
8. **SIEMPRE proponer antes de cambios estructurales grandes.** Pequeños refactors está bien hacerlos directo.
9. **SIEMPRE responsive.** Probar mental o realmente en móvil ANTES de declarar listo.
10. **SIEMPRE accesibilidad básica:** alt en imágenes, labels en inputs, contraste WCAG AA mínimo, focus visible en interactivos.

---

## 📋 Checklist al iniciar una sesión nueva

Cuando Claude Code abre el proyecto, debe:

1. Leer este `CLAUDE.md` completo.
2. Identificar en qué fase del plan estamos (preguntar al usuario si no es claro).
3. Si hay cambios desde la última sesión que aún no están aquí, **pedir al fundador que los documente** y proponer las líneas exactas a agregar.
4. Antes de tocar cualquier archivo de `app/loyalty/*`, recordar la regla #1.
5. Antes de instalar cualquier paquete, recordar la regla #4.

---

## 🚀 Estado actual del proyecto

- [x] Fase 0 - Setup base
- [ ] Fase 1 - Refactor de marca (Checky paraguas + Loyalty + Tickets)
- [ ] Fase 2 - Renovación visual de Loyalty
- [ ] Fase 3 - Páginas legales
- [ ] Fase 4 - Sistema de boletaje (backend)
- [ ] Fase 5 - Landing del evento Hyrox
- [ ] Fase 6 - Testing y go-live

> Marcar con [x] cuando se complete cada fase. Actualizar este bloque en cada cierre de sesión.

---

## 💬 Cómo trabajar con el fundador

- Habla **español de México**. Tono profesional pero cercano.
- Si hay decisión de marca o UX que pueda ir en dos direcciones, **plantear opciones con trade-offs**, no asumir.
- Si una tarea va a tomar más de ~3 cambios de archivos, **proponer el plan primero**, esperar visto bueno, ejecutar.
- Cuando termines algo, **resumir qué se hizo y qué sigue** en 3-5 bullets.
- El fundador valora honestidad sobre limitantes técnicas, costos reales y trade-offs. No vender humo.

---

*Fin del archivo. Mantener actualizado.*