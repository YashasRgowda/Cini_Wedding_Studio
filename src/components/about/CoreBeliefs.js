"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// PLACEHOLDER Q&A — replace answers with Puneeth's real ones. 4 per page like the reference.
const questions = [
  { q: "We were born in…", a: "Bangalore, India" },
  { q: "Our favourite thing to shoot:", a: "Bridal portraits" },
  { q: "Our favourite season of the year:", a: "Wedding Season" },
  { q: "Our biggest dream is:", a: "To grow Cini across South India" },
  { q: "Our dream destination is…", a: "Kashmir" },
  { q: "How big is our team:", a: "A close-knit crew" },
  { q: "The best part about weddings:", a: "The food (and the reels!)" },
  { q: "Our hidden talent is:", a: "Calming nervous brides" },
];

const PER_PAGE = 4;

export default function CoreBeliefs() {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(questions.length / PER_PAGE);
  const current = questions.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* full-bleed background video */}
      <video
        src="/videos/core-beliefs/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      {/* cream veil that fades the video, exactly like the reference */}
      <div className="absolute inset-0 bg-cream/65" />

      {/* centered translucent card */}
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-cream/85 px-6 py-16 text-center backdrop-blur-[2px] sm:px-14 md:py-20"
        >
          <span className="block text-[11px] font-medium uppercase tracking-widest-lg text-ink/70">
            Our Core Beliefs
          </span>
          <h2 className="mt-5 font-serif text-4xl text-gold md:text-5xl">
            Get to Know Us
          </h2>

          <div className="mt-14 min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.ul
                key={page}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45 }}
                className="space-y-10"
              >
                {current.map((item, i) => (
                  <li key={i}>
                    <p className="text-[11px] font-medium uppercase tracking-widest-lg text-wine">
                      {page * PER_PAGE + i + 1}. {item.q}
                    </p>
                    <p className="mx-auto mt-3 max-w-md border-b border-olive/40 pb-4 font-script text-3xl text-olive md:text-4xl">
                      {item.a}
                    </p>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6 text-xs font-medium uppercase tracking-widest-lg text-wine-soft">
            <button
              type="button"
              onClick={() => setPage((p) => (p - 1 + pages) % pages)}
              className="transition-colors hover:text-wine"
            >
              &lt; Go Back
            </button>
            <span className="text-wine/30">/</span>
            <button
              type="button"
              onClick={() => setPage((p) => (p + 1) % pages)}
              className="transition-colors hover:text-wine"
            >
              Next Questions &gt;
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
