"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// PLACEHOLDER answers — Puneeth can refine the wording.
const faqs = [
  {
    q: "What services does Cini Wedding Studio offer?",
    a: "We offer bridal & groom makeup, hair styling, saree draping, candid photography, cinematic films, video coverage, and pre-wedding & outdoor shoots — everything for your big day under one roof.",
  },
  {
    q: "What makes candid photography different from traditional styles?",
    a: "Candid photography captures genuine, unposed moments as they happen — real laughter, quiet glances and emotion — rather than only formal, posed portraits.",
  },
  {
    q: "Do you offer both photography and videography?",
    a: "Yes. Our team covers both wedding photography and cinematic video, including candid and traditional coverage, so your day is preserved from every angle.",
  },
  {
    q: "Can we request specific shots or styles for our wedding?",
    a: "Absolutely. We meet with every couple beforehand to understand your vision, must-have moments and preferred style.",
  },
  {
    q: "How long does it take to receive our photos and videos?",
    a: "Delivery timelines vary by package and event size. We share an estimated timeline during your booking and keep you updated throughout.",
  },
  {
    q: "How do we book your services?",
    a: "Simply fill out the form above or call us directly. We&apos;ll check availability for your date and walk you through the next steps.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-serif text-3xl text-wine md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-14 divide-y divide-wine/15 border-y border-wine/15">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-5 py-6 text-left"
                >
                  <span className="font-serif text-lg text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-[13px] font-medium uppercase tracking-widest-lg text-wine">
                    {item.q}
                  </span>
                  <span className="text-xl text-wine/50">{isOpen ? "–" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden pl-11 pr-8 text-[15px] leading-relaxed text-ink/75"
                    >
                      <span className="block pb-6">{item.a}</span>
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
