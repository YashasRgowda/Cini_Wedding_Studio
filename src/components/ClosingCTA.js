"use client";

import { motion } from "framer-motion";
import { images } from "@/lib/images";
import Emblem from "@/components/Emblem";

export default function ClosingCTA() {
  return (
    <section
      id="contact"
      className="relative z-20 flex min-h-[55vh] w-full items-center justify-center pb-16"
    >
      <img
        src={images.closing}
        alt="Soft, blurred wedding florals"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-wine/55" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center px-6 text-center text-cream"
      >
        <h2 className="max-w-xl font-serif text-4xl leading-snug md:text-5xl">
          Ready to immortalize your love story?
        </h2>
        <p className="mt-5 text-xs font-medium uppercase tracking-widest-lg text-cream/85">
          Reach Out To Us Now And Let&apos;s Start Planning Together!
        </p>
        <a
          href="mailto:hello@yourstudioname.com"
          aria-label="Email Your Studio Name"
          className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-cream/70 transition-colors hover:bg-cream hover:text-wine"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
            <path d="M4 12h16M14 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </motion.div>

      {/* single brand emblem, straddling the boundary between the photo and the footer */}
      <span className="absolute bottom-0 left-1/2 z-20 flex h-28 w-24 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-[50%] bg-cream shadow-[0_12px_30px_-14px_rgba(44,32,24,0.5)]">
        <Emblem className="h-20 w-auto" tone="wine" />
      </span>
    </section>
  );
}
