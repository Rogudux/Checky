"use client";

import Image from "next/image";

type Sector = {
  name: string;
  img: string;
};

function Tile({ s }: { s: Sector }) {
  return (
    <div className="group relative h-[160px] w-[260px] md:h-[180px] md:w-[300px] shrink-0 overflow-hidden rounded-3xl border border-checky-border bg-checky-bg shadow-sm">
      <Image
        src={s.img}
        alt={s.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* label */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-lg font-bold text-white">{s.name}</p>
      </div>
    </div>
  );
}

function Track({
  items,
  direction = "left",
  speedSeconds = 28,
}: {
  items: Sector[];
  direction?: "left" | "right";
  speedSeconds?: number;
}) {
  const track = [...items, ...items];
  const animClass = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max items-center gap-6 ${animClass}`}
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {track.map((s, idx) => (
          <Tile key={`${s.name}-${idx}`} s={s} />
        ))}
      </div>
    </div>
  );
}

export default function SectorsMarquee({ sectors }: { sectors: Sector[] }) {
  const top: Sector[] = [];
  const bottom: Sector[] = [];
  sectors.forEach((s, i) => (i % 2 === 0 ? top.push(s) : bottom.push(s)));

  return (
    <div className="relative mt-8 space-y-6 overflow-hidden">
      {/* Fade izquierdo */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-checky-bg to-transparent" />
      {/* Fade derecho */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-checky-bg to-transparent" />

      {/* Fila 1: izquierda */}
      <Track items={top} direction="left" speedSeconds={34} />

      {/* Fila 2: derecha */}
      <Track items={bottom} direction="right" speedSeconds={38} />
    </div>
  );
}
