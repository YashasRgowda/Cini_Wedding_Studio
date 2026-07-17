"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Wedding films — YouTube IDs in display order.
const films = [
  "parF_HKDQnM",
  "-k39tOE_iZg",
  "AR-VWY_ENq8",
  "N4-WKxbL7YU",
  "CzIR3Ns5wU8",
];

function FilmEmbed({ id, index }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.05 }}
      className="relative aspect-video w-full overflow-hidden rounded-sm bg-black shadow-[0_18px_50px_-20px_rgba(44,32,24,0.55)]"
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={`Wedding film ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play film"
          className="group absolute inset-0 h-full w-full"
        >
          <img
            src={thumb}
            alt={`Wedding film ${index + 1}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-ink/25 transition-colors duration-500 group-hover:bg-ink/40" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-wine">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </motion.div>
  );
}

export default function FilmsGallery() {
  return (
    <section className="w-full bg-cream">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center md:pt-32"
      >
        <h1 className="font-serif text-4xl leading-tight text-wine md:text-6xl">
          wedding <span className="font-script text-5xl md:text-7xl">Films</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-ink/70">
          Every love story deserves to be relived — cinematic films that capture
          the laughter, the tears and every unscripted moment in between.
        </p>
      </motion.div>

      {/* Video list */}
      <div className="mx-auto flex max-w-4xl flex-col gap-16 px-5 pb-28 md:gap-20 md:px-6">
        {films.map((id, i) => (
          <FilmEmbed key={id} id={id} index={i} />
        ))}
      </div>
    </section>
  );
}
