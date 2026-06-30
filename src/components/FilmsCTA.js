"use client";

import { images } from "@/lib/images";

function Panel({ src, alt, label, href, align }) {
  const isRight = align === "right";
  return (
    <a
      href={href}
      className="group relative block aspect-[63/50] overflow-hidden"
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
      {/* light veil — always on (touch), fades in on hover (desktop) */}
      <div className="absolute inset-0 bg-blush/45 transition-colors duration-500 md:bg-blush/0 md:group-hover:bg-blush/65" />

      {/* label — always visible on touch, hover-reveal on desktop */}
      <div
        className={`absolute bottom-10 z-10 flex flex-col opacity-100 transition-opacity duration-500 md:bottom-16 md:opacity-0 md:group-hover:opacity-100 ${
          isRight
            ? "right-8 items-end text-right md:right-14"
            : "left-8 items-start text-left md:left-14"
        }`}
      >
        <h2 className="font-serif text-4xl tracking-wide text-wine md:text-6xl">
          {label}
        </h2>
        <span className="mt-3 text-xs font-medium uppercase tracking-widest-lg text-wine">
          Visit The Galleries
        </span>
        <span className="mt-5 block h-px w-40 bg-wine/50" />
      </div>
    </a>
  );
}

export default function FilmsCTA() {
  return (
    <section id="films" className="grid w-full grid-cols-1 md:grid-cols-2">
      <Panel
        src={images.filmsLeft}
        alt="Couple sharing a quiet moment during their ceremony"
        label="Images"
        href="#portfolio"
        align="left"
      />
      <Panel
        src={images.filmsRight}
        alt="Bride smiling in soft natural light"
        label="Films"
        href="#films"
        align="right"
      />
    </section>
  );
}
