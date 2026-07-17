"use client";

import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="bg-blush px-6 py-20 md:py-28">
      {/* centered header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="block text-[11px] font-medium uppercase tracking-widest-lg text-wine">
          Crafting Timeless Memories
        </span>
        <h2 className="mt-5 font-serif text-3xl text-wine md:text-[2.75rem]">
          Your Wedding,
        </h2>
        <p className="mt-1 font-script text-4xl text-wine-soft md:text-5xl">
          Our Passion
        </p>
      </motion.div>

      {/* photo (left) + two-column bio (right) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mx-auto mt-16 grid max-w-5xl items-stretch gap-10 lg:mt-20 lg:grid-cols-[340px_1fr] lg:gap-14"
      >
        {/* PLACEHOLDER — replace with a portrait of Puneeth / the studio team.
            Stretches to match the text height so the two columns always align. */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden lg:aspect-auto lg:h-full lg:max-w-none">
          <img
            src="/images/about-left.jpg"
            alt="Puneeth — Cini Wedding Studio"
            className="h-full w-full object-cover lg:absolute lg:inset-0"
          />
        </div>

        <div className="flex flex-col justify-center">
          {/* PLACEHOLDER BIO — Puneeth can refine, but this reads well as-is */}
          <div className="columns-1 gap-10 text-[14px] leading-[1.75] text-olive-dark sm:columns-2 [&>p]:mb-5">
            <p>
              Hello, and welcome! We are Cini Wedding Studio — a Bangalore-based
              team of photographers, cinematographers and bridal makeup artists,
              led by Puneeth in Vijayanagar. What began as a passion for bridal
              makeup has grown into a full-service wedding studio.
            </p>
            <p>
              Under one roof we bring together everything your celebration needs —
              bridal &amp; groom makeup, hair styling, saree draping, candid
              photography, cinematic films, video coverage and pre-wedding shoots.
            </p>
            <p>
              We believe no two weddings should ever look the same. Our approach is
              simple: stay close enough to catch the honest, in-between moments — a
              quiet glance, a happy tear, a burst of laughter — while never getting
              in the way of you living your day.
            </p>
            <p>
              From the first meeting to the final album, we treat your wedding as if
              it were our own family&apos;s — obsessing over every detail so the day
              feels as beautiful as it will look for years to come.
            </p>
            <p>
              Thank you for letting us be a part of your story. We can&apos;t wait to
              help you relive it, frame by frame, and forever.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
