"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { images } from "@/lib/images";

export default function Hero() {
  const [start, setStart] = useState(0);
  const total = images.triptych.length;

  // auto-advance the triptych on an interval
  useEffect(() => {
    const id = setInterval(() => {
      setStart((s) => (s + 1) % total);
    }, 4000);
    return () => clearInterval(id);
  }, [total]);

  return (
    <section className="relative w-full overflow-hidden bg-blush pb-16 pt-14 md:pt-20">
      {/* faint full-bleed background photo */}
      <img
        src={images.heroBg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.16]"
      />
      {/* decorative monogram watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05]"
      >
        <span className="font-script text-[14rem] text-wine md:text-[20rem]">
          CW
        </span>
      </div>

      {/* vertical sidebar label */}
      <div className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 md:block lg:left-8">
        <span className="vertical-rl text-[11px] font-medium uppercase tracking-widest-xl text-wine-soft">
          Bridal Makeup &amp; Wedding Photography · Bangalore
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <span className="mb-5 flex h-20 w-16 items-center justify-center rounded-[50%] border-2 border-wine/60 font-script text-3xl text-wine">
          CW
        </span>

        <div className="flex items-center gap-3 sm:gap-5 md:gap-10">
          <span className="text-[10px] font-medium uppercase tracking-widest-lg text-wine-soft sm:text-xs">
            Est.
          </span>
          <h1 className="font-serif text-[2rem] tracking-wide text-wine sm:text-4xl md:text-6xl">
            Cini Wedding Studio
          </h1>
          <span className="text-[10px] font-medium uppercase tracking-widest-lg text-wine-soft sm:text-xs">
            2014
          </span>
        </div>

        <p className="mt-2 font-script text-3xl text-wine-soft md:text-4xl">
          Bridal Makeup &amp; Photography
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="relative z-10 mx-auto mt-12 max-w-5xl px-4"
      >
        <div className="border border-cream bg-cream p-2 shadow-sm md:p-3">
          <div className="grid grid-cols-3 gap-[2px] overflow-hidden">
            {[0, 1, 2].map((offset) => {
              const src = images.triptych[(start + offset) % total];
              return (
                <div key={offset} className="aspect-[3/4] overflow-hidden">
                  <img
                    src={src}
                    alt="Wedding moment"
                    className="h-full w-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between px-1">
          <span className="font-script text-2xl text-wine-soft">moments</span>
          <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-widest-lg text-wine-soft">
            <button
              type="button"
              onClick={() => setStart((s) => (s - 1 + total) % total)}
              className="transition-colors hover:text-wine"
            >
              Prev
            </button>
            <span className="text-wine/30">/</span>
            <button
              type="button"
              onClick={() => setStart((s) => (s + 1) % total)}
              className="transition-colors hover:text-wine"
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
