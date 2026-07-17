"use client";

import { motion } from "framer-motion";

// PLACEHOLDER milestones — replace years & text with Cini's real history (Est. 2014).
const milestones = [
  { year: "2014", text: "Cini Wedding Studio was founded in Vijayanagar, Bangalore." },
  { year: "2016", text: "Grew from bridal makeup into full wedding photography." },
  { year: "2018", text: "Added cinematic video coverage and candid teams." },
  { year: "2021", text: "Crossed our first major milestone of weddings shot." },
  { year: "2024", text: "A trusted name for bridal makeup & films across the city." },
];

export default function Timeline() {
  return (
    <section className="bg-cream px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="block text-[11px] font-medium uppercase tracking-widest-lg text-wine">
            From the Beginning
          </span>
          <h2 className="mt-4 font-serif text-4xl text-wine md:text-5xl">
            Our <span className="font-script text-wine-soft">story</span>
          </h2>
        </div>

        {/* horizontal line with milestones */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-wine/20" />
          <div className="grid grid-cols-5 gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative flex flex-col items-center ${
                  i % 2 === 0 ? "pb-28" : "pt-28"
                }`}
              >
                <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-wine" />
                <div className={i % 2 === 0 ? "order-1" : "order-2"}>
                  <p className="text-center text-sm font-medium uppercase tracking-widest-lg text-wine">
                    {m.year}
                  </p>
                  <p className="mx-auto mt-3 max-w-[180px] text-center text-[13px] leading-relaxed text-ink/70">
                    {m.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* stacked vertical timeline for mobile/tablet */}
        <div className="mt-14 space-y-10 lg:hidden">
          {milestones.map((m) => (
            <div key={m.year} className="border-l border-wine/20 pl-6">
              <p className="text-sm font-medium uppercase tracking-widest-lg text-wine">
                {m.year}
              </p>
              <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-ink/70">
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
