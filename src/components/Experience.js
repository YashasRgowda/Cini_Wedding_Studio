"use client";

import { motion } from "framer-motion";
import { images } from "@/lib/images";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-cream pt-16 pb-24 md:pb-32 md:pt-20"
    >
      {/* left image — flush to the viewport's left edge, set just below the navbar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="absolute left-0 top-16 hidden w-[19vw] max-w-[360px] md:top-20 md:block"
      >
        <div className="aspect-[4/5] w-full overflow-hidden">
          <img
            src={images.experience}
            alt="Bride being blessed by family during wedding rituals"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* right film-preview card — flush to the right edge, vertically centered */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="absolute right-0 top-1/2 z-10 hidden w-[20vw] max-w-[320px] -translate-y-1/2 lg:block"
      >
        <div className="aspect-[9/14] w-full overflow-hidden">
          <video
            src="/images/1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* centered text — centered to the full viewport, like the reference */}
      <div className="mx-auto max-w-2xl px-6 text-center md:py-10">
        {/* image stacked on top for small screens */}
        <div className="mx-auto mb-10 aspect-[4/5] w-full max-w-[280px] overflow-hidden md:hidden">
          <img
            src={images.experience}
            alt="Bride being blessed by family during wedding rituals"
            className="h-full w-full object-cover"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-xs font-medium uppercase tracking-widest-lg text-gold">
            Experience Real Emotions, Real Moments, Real Weddings
          </span>
          <h2 className="mt-6 font-serif text-3xl leading-snug text-wine md:text-[2.6rem]">
            Capturing real emotions and intimate moments, preserving your special
            day for{" "}
            <span className="font-script text-4xl text-wine-soft md:text-5xl">
              eternity
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-md text-[15px] leading-relaxed text-ink/75">
            Your wedding day is one of the most important days of your life,
            filled with love, joy, and unforgettable moments.
          </p>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-ink/75">
            Our candid photography and videography services ensure you can relive
            the genuine emotions and unforgettable moments of your wedding day for
            years to come.
          </p>

          <a href="#films" className="mt-12 inline-block">
            <span className="block text-xs font-medium uppercase tracking-widest-lg text-wine">
              The Experience
            </span>
            <span className="mt-2 block text-sm text-wine">+</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
