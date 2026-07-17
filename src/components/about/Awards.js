"use client";

import { motion } from "framer-motion";
import { images } from "@/lib/images";

// PLACEHOLDER STATS — replace with Cini Wedding Studio's real numbers.
const stats = [
  { n: "1000+", label: "Happy Families" },
  { n: "900+", label: "Weddings" },
  { n: "50000+", label: "Images" },
  { n: "300+", label: "Films" },
];

export default function Awards() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* full-bleed background photo — PLACEHOLDER, swap for a Cini favourite */}
      <img
        src={images.closing}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-cream">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-[11px] font-medium uppercase tracking-widest-lg text-cream/85">
            Honoring Excellence
          </span>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl">
            Awards &amp; Recognition
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-cream/80">
            Every honour is a milestone that reminds us of the stories we have
            captured and the connections we have built. While titles are
            treasured, it is the smiles, tears of joy, and heartfelt thanks from
            our couples that remain our greatest reward.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-16 grid grid-cols-2 gap-y-12 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-[10px] font-medium uppercase tracking-widest-lg text-cream/70">
                {s.label}
              </p>
              <p className="mt-3 font-serif text-4xl text-tan md:text-5xl">
                {s.n}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
