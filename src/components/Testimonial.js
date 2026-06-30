"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { images } from "@/lib/images";
import Emblem from "@/components/Emblem";

const clients = [
  {
    photo: images.testimonials[0],
    quote: "They were a dream team & surpassed all expectations",
    text: "They made us feel completely at ease across every event, and somehow made the whole day even more fun than we'd imagined. The photos and film are simply incredible — and the team's calm and flexibility through all the chaos meant the world to us.",
    names: "Ananya & Rohan",
  },
  {
    photo: images.testimonials[1],
    quote: "We had a great time; the team was incredible",
    text: "The turnaround was wonderfully quick and every frame was beautiful. They worked with us patiently over the following months to craft a film we were completely thrilled with. We could not recommend them more highly.",
    names: "Nikita & Siddharth",
  },
  {
    photo: images.testimonials[2],
    quote: "We all got so emotional looking at the pictures",
    text: "They were absolutely brilliant with both the captures and the edit. The images reached us so quickly and held every memory so beautifully. Sweet, patient, and deeply skilled — exactly the people you want beside you on the day.",
    names: "Priyanka & Suresh",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const total = clients.length;
  const client = clients[index];

  const go = (dir) => setIndex((i) => (i + dir + total) % total);

  return (
    <section className="relative overflow-hidden bg-tan px-6 py-20 md:py-28">
      {/* matted card with framed portrait */}
      <div className="relative mx-auto max-w-2xl">
        <div className="rounded-[10px] bg-cream p-3 shadow-[0_18px_45px_-22px_rgba(44,32,24,0.45)] md:p-4">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-[4px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={client.photo}
                alt={`${client.names} on their wedding day`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
        {/* oval emblem badge overlapping the bottom edge */}
        <span className="absolute -bottom-12 left-1/2 -translate-x-1/2">
          <Emblem className="h-24 w-auto" tone="wine" />
        </span>
      </div>

      <div className="mx-auto mt-20 max-w-3xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="font-serif text-3xl uppercase leading-tight tracking-wide text-wine md:text-5xl">
              {client.quote}
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-ink/75">
              {client.text}
            </p>
            <p className="mt-8 text-xs font-medium uppercase tracking-widest-lg text-wine-soft">
              {client.names}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* arrow navigation */}
        <div className="mt-10 flex items-center justify-center gap-10">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous client"
            className="text-wine-soft transition-colors hover:text-wine"
          >
            <svg viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-4 w-10">
              <path d="M12 6l-8 6 8 6M4 12h34" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next client"
            className="text-wine-soft transition-colors hover:text-wine"
          >
            <svg viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-4 w-10">
              <path d="M28 6l8 6-8 6M36 12H2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
