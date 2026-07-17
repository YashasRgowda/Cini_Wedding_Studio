"use client";

import { motion } from "framer-motion";

export default function AboutPhilosophy() {
  return (
    <section className="bg-cream px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* PLACEHOLDER image — swap with a Cini couple/detail portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="aspect-[4/5] w-full overflow-hidden">
            <img
              src="/images/experience.jpg"
              alt="A couple on their wedding day"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <span className="block text-[11px] font-medium uppercase tracking-widest-lg text-wine">
            We Believe
          </span>
          <h2 className="mt-6 font-serif text-3xl leading-snug text-wine md:text-[2.6rem]">
            Each couple has a unique{" "}
            <span className="font-script text-4xl text-wine-soft md:text-5xl">
              story to share
            </span>
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink/75">
            With an eye for detail and a passion for storytelling, we ensure every
            moment is beautifully preserved for you to cherish forever.
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/75">
            We are all creative souls — filled with pure magical rainbows — and we
            believe your wedding deserves to be captured exactly as it was: honest,
            joyful, and entirely your own.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
