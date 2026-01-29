"use client";

import Image from "next/image";

type Slide = { src: string; alt: string };

export default function HeroMarquee({
  slides,
  speedSeconds = 28,
}: {
  slides: Slide[];
  speedSeconds?: number;
}) {
  // Duplicamos la lista para que el loop sea perfecto
  const track = [...slides, ...slides];

  return (
<div className="relative w-full overflow-hidden">
      {/* Fade en los lados para que se vea premium */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-checky-bg to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-checky-bg to-transparent z-10" />

      <div
        className="flex w-max items-center gap-6"
        style={{
          animation: `checky-marquee ${speedSeconds}s linear infinite`,
        }}
      >
        {track.map((s, idx) => (
          <div
            key={`${s.src}-${idx}`}
            className="relative h-[180px] w-[300px] md:h-[300px] md:w-[230px] shrink-0"
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-contain"
              priority={idx < slides.length} // solo los primeros
            />
          </div>
        ))}
      </div>
    </div>
  );
}
