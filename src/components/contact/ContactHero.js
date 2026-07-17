"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* full-bleed hero image — PLACEHOLDER, swap for a Cini favourite */}
      <img
        src="/images/contact-hero.jpg"
        alt="A Cini Wedding Studio couple"
        className="h-[70vh] min-h-[460px] w-full object-cover md:h-auto md:min-h-0 md:aspect-[47/20]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/60 to-ink/35" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
      >
        <h1 className="max-w-3xl font-serif text-3xl leading-snug text-cream drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] sm:text-4xl md:text-[2.9rem]">
          We deliver real, emotional experiences by capturing
        </h1>
        <p className="mt-3 font-script text-4xl text-cream drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] md:text-5xl">
          Candid Moments
        </p>
      </motion.div>
    </section>
  );
}
