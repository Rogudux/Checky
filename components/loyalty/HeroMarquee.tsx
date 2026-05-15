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
  const track = [...slides, ...slides];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-checky-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-checky-bg to-transparent" />

      <div
        className="flex w-max items-center gap-6"
        style={{
          animation: `checky-marquee ${speedSeconds}s linear infinite`,
        }}
      >
        {track.map((s, idx) => (
          <div
            key={`${s.src}-${idx}`}
            className="relative h-[200px] w-[120px] shrink-0 md:h-[300px] md:w-[230px]"
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-contain"
              priority={idx < slides.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
