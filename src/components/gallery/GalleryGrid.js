"use client";

import { motion } from "framer-motion";

// Random couple names for now — swap for real galleries later.
// Each tile links to "#" until the individual galleries are built.
const couples = [
  {
    name: "Aishwarya & Rohan",
    src: "/images/aishwarya-rohan-cover.jpg",
    href: "/aishwarya-and-rohan",
  },
  {
    name: "Sneha & Karthik",
    src: "/images/hero/hero-2.jpg",
    href: "/sneha-and-karthik",
  },
  {
    name: "Divya & Arjun",
    src: "/images/divya-arjun-cover.jpg",
    href: "/divya-and-arjun",
  },
  {
    name: "Celebrities",
    src: "/images/meghana-vikram-cover.jpg",
    href: "/celebrities",
  },
];

function Tile({ name, src, href = "#" }) {
  return (
    <a href={href} className="group relative block aspect-[4/3] overflow-hidden">
      <img
        src={src}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      {/* dark veil so the name stays readable */}
      <div className="absolute inset-0 bg-ink/25 transition-colors duration-500 group-hover:bg-ink/40" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <h2 className="text-center font-serif text-3xl text-cream drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] md:text-5xl">
          {name}
        </h2>
      </div>
    </a>
  );
}

export default function GalleryGrid() {
  return (
    <section className="w-full bg-cream">
      {/* Intro header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-4xl px-6 pt-24 pb-16 text-center md:pt-32"
      >
        <p className="text-xs font-medium uppercase tracking-widest-lg text-gold">
          Featured Wedding Photography Gallery
        </p>
        <h1 className="mt-6 font-serif text-4xl leading-tight text-wine md:text-6xl">
          celebrating Unforgettable{" "}
          <span className="font-script text-5xl md:text-7xl">Moments</span>
        </h1>
      </motion.div>

      {/* Paired photo grid — thin cream lines separate the tiles */}
      <div className="grid w-full grid-cols-1 gap-1 bg-cream md:grid-cols-2 md:gap-1.5">
        {couples.map((c) => (
          <Tile key={c.name} {...c} />
        ))}
      </div>
    </section>
  );
}
