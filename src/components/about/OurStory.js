"use client";

import { motion } from "framer-motion";

// PLACEHOLDER values — replace with Cini's real 3 core values.
const values = ["Transparency", "True-Love", "Family"];

export default function OurStory() {
  return (
    <section className="bg-blush px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="max-w-md font-serif text-3xl leading-snug text-wine md:text-[2.6rem]">
            Our Story is Your Story
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink/75">
            Our story is about the first time you met, the moment you fell in love,
            and the day you decided to spend the rest of your lives together. It is
            about a million smiles that reflect the truth of real love.
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/75">
            When it comes to your wedding, we&apos;re no less than family. We
            pamper, we take extra care, and we go all-in on the details — because we
            want your day to be everything you dreamed of, and we want to be there
            to help you relive it.
          </p>

          <div className="mt-10">
            <p className="text-[11px] font-medium uppercase tracking-widest-lg text-wine">
              Our Values
            </p>
            <ul className="mt-4 space-y-2 text-[15px] text-ink/80">
              {values.map((v) => (
                <li key={v} className="font-serif text-xl text-wine">
                  + {v}
                </li>
              ))}
            </ul>
          </div>

          <a href="/#portfolio" className="mt-10 inline-block">
            <span className="block text-xs font-medium uppercase tracking-widest-lg text-wine">
              View Weddings
            </span>
            <span className="mt-1 block text-sm text-wine">+</span>
          </a>
        </motion.div>

        {/* PLACEHOLDER image — swap with a warm Cini couple portrait */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="aspect-[4/5] w-full overflow-hidden">
            <img
              src="/images/about-left.jpg"
              alt="A couple celebrating their wedding"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
