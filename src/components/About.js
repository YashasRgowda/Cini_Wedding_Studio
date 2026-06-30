"use client";

import { motion } from "framer-motion";
import { images } from "@/lib/images";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-blush py-20 lg:flex lg:min-h-screen lg:items-center lg:py-0"
    >
      {/* left photo, flush to the edge, vertically centered */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="absolute left-0 top-1/2 z-20 hidden w-[17vw] max-w-[260px] -translate-y-1/2 lg:block"
      >
        <div className="aspect-[3/4] w-full overflow-hidden">
          <video
            src="/images/2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* right image flush to the edge, with left legibility gradient */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute right-0 top-1/2 z-0 hidden w-[42vw] max-w-[620px] -translate-y-1/2 lg:block"
      >
        <div className="aspect-[6/5] w-full overflow-hidden">
          <img
            src={images.about}
            alt="Couple sharing a quiet moment on their wedding day"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* heading + copy, sitting above the photo's light left edge */}
      <div className="relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="px-6 lg:pl-[27%] lg:pr-12"
        >
          <h2 className="max-w-[36rem] font-serif text-[2rem] leading-[1.12] text-wine md:text-[2.75rem]">
            We are dedicated to ensuring you re-live your special day for decades
            to come.
          </h2>
          <p className="mt-7 max-w-[28rem] text-[15px] leading-[1.6] text-ink/75">
            Your wedding day is one of the most important days of your life,
            filled with love, joy, and unforgettable moments.
          </p>
          <p className="mt-5 max-w-[28rem] text-[15px] leading-[1.6] text-ink/75">
            Our team is dedicated to capturing these precious memories, ensuring
            that every smile, tear, and embrace is beautifully preserved. Let us
            help you relive the magic of your special day for years to come.
          </p>
          <a href="#portfolio" className="mt-9 inline-block">
            <span className="block text-xs font-medium uppercase tracking-widest-lg text-wine">
              View Portfolio
            </span>
            <span className="mt-1 block text-sm text-wine">+</span>
          </a>
        </motion.div>

        {/* stacked media for small + tablet screens */}
        <div className="mt-12 grid gap-4 px-6 sm:grid-cols-2 lg:hidden">
          <div className="aspect-[6/5] w-full overflow-hidden sm:aspect-[3/4]">
            <img
              src={images.about}
              alt="Couple sharing a quiet moment on their wedding day"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[6/5] w-full overflow-hidden sm:aspect-[3/4]">
            <video
              src="/images/2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
