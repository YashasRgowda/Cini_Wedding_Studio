"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "@/lib/images";

export default function Videography() {
  const ref = useRef(null);
  // parallax: as the section scrolls through the viewport, the background
  // drifts slower than the page, revealing through the fixed-height "window"
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-11%", "11%"]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[560px] w-full overflow-hidden"
    >
      {/* parallax video background — taller than the window so it can drift */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-[-15%] h-[130%] will-change-transform"
      >
        <video
          src="/videos/explore-videography/teaser.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={images.videographyBg}
          className="h-full w-full object-cover"
        />
      </motion.div>
      {/* Cinematic gradient overlay for legibility of overlaid text */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/25 to-ink/60" />

      {/* inline title, top-left */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="absolute left-6 top-8 z-10 text-cream md:left-14 md:top-10"
      >
        <span className="font-script text-3xl md:text-5xl">Explore</span>{" "}
        <span className="font-serif text-3xl md:text-5xl">Videography</span>
      </motion.div>

      {/* top-right label */}
      <span className="absolute right-6 top-10 z-10 hidden text-[11px] font-medium uppercase tracking-widest-xl text-cream/85 md:right-14 md:block">
        Unfiltered Memories
      </span>

      {/* bottom-right button */}
      <motion.a
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        href="#films"
        className="absolute bottom-10 right-6 z-10 rounded-full border border-cream px-7 py-3 text-xs font-medium uppercase tracking-widest-lg text-cream transition-colors hover:bg-cream hover:text-ink md:right-14"
      >
        View Films
      </motion.a>
    </section>
  );
}
