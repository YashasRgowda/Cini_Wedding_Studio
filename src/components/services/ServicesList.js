"use client";

import { motion } from "framer-motion";

/* ── Inline line icons (wine stroke) ───────────────────────── */
const I = {
  camera: (
    <>
      <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1-2h7l1 2h2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5z" />
      <circle cx="12" cy="13" r="3.2" />
    </>
  ),
  film: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
      <path d="M8 5v14M16 5v14M4 9h4M4 15h4M16 9h4M16 15h4" />
    </>
  ),
  candid: (
    <>
      <path d="M12 20s-6.5-4-8.5-8A4 4 0 0 1 12 7a4 4 0 0 1 8.5 5C18.5 16 12 20 12 20z" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M10.5 9.2 15 12l-4.5 2.8z" />
    </>
  ),
  ring: (
    <>
      <circle cx="12" cy="14" r="5.2" />
      <path d="m9.5 8.5 1.2-3h2.6l1.2 3" />
    </>
  ),
  outdoor: (
    <>
      <path d="M12 3v18M12 9 7 6M12 12l5-3M12 15l-5-3M12 18l5-3" />
    </>
  ),
  makeup: (
    <>
      <path d="M15 4.5 9 10.5m0 0-4.2 4.2a2 2 0 0 0 0 2.8v0a2 2 0 0 0 2.8 0L11.8 13m-2.8-2.5 2.8 2.8M14 3l7 7-2 2-7-7z" />
    </>
  ),
  hair: (
    <>
      <path d="M6 20c-2-6 0-14 6-14s8 8 6 14M9 20c-1-4 0-9 3-9s4 5 3 9" />
    </>
  ),
  saree: (
    <>
      <path d="M8 3s1 3 4 3 4-3 4-3M7 21c0-6 2-9 5-9s5 3 5 9zM12 6v6" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5 13.6 9 19 10.5 13.6 12 12 17.5 10.4 12 5 10.5 10.4 9zM18 4v3M19.5 5.5h-3" />
    </>
  ),
  event: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="1.5" />
      <path d="M4 9h16M8 3v4M16 3v4M9 13h6M9 16h4" />
    </>
  ),
};

const groups = [
  {
    kicker: "Photography & Cinematography",
    title: "Timeless Frames & Films",
    items: [
      { icon: "camera", name: "Wedding Photography", desc: "Full-day coverage of every ritual, emotion and celebration." },
      { icon: "candid", name: "Candid Photography", desc: "Unposed, natural moments captured as they unfold." },
      { icon: "film", name: "Video Coverage", desc: "Complete cinematic documentation of your wedding day." },
      { icon: "play", name: "Candid Videography", desc: "Storytelling films that relive the laughter and the tears." },
      { icon: "ring", name: "Pre-Wedding Shoot", desc: "Beautifully styled shoots that tell your love story." },
      { icon: "outdoor", name: "Outdoor Photo Shoot", desc: "Scenic locations, golden light and dreamy portraits." },
    ],
  },
  {
    kicker: "Bridal Makeup & Styling",
    title: "The Perfect Bridal Look",
    items: [
      { icon: "makeup", name: "Bridal & Groom Makeup", desc: "Flawless, long-lasting makeup for the couple's big day." },
      { icon: "hair", name: "Hair Styling", desc: "Elegant hairstyles for bride and groom to match every look." },
      { icon: "saree", name: "Saree Draping", desc: "Perfectly draped sarees in classic and modern styles." },
      { icon: "sparkle", name: "Party Makeup", desc: "Glam looks for receptions, sangeet and every function." },
      { icon: "event", name: "Other Events", desc: "Birthdays, engagements and special celebrations covered." },
    ],
  },
];

function Card({ icon, name, desc, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
      className="group flex flex-col items-center rounded-sm border border-tan/60 bg-cream/60 px-7 py-10 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:bg-white hover:shadow-[0_20px_50px_-24px_rgba(92,46,42,0.4)]"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-blush text-wine transition-colors duration-500 group-hover:bg-wine group-hover:text-cream">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          {I[icon]}
        </svg>
      </span>
      <h3 className="mt-6 font-serif text-xl text-wine">{name}</h3>
      <p className="mt-3 text-[14px] leading-relaxed text-ink/65">{desc}</p>
    </motion.div>
  );
}

export default function ServicesList() {
  return (
    <section className="w-full bg-blush">
      {/* Hero header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-3xl px-6 pt-24 pb-6 text-center md:pt-32"
      >
        <p className="text-xs font-medium uppercase tracking-widest-lg text-gold">
          What We Offer
        </p>
        <h1 className="mt-6 font-serif text-4xl leading-tight text-wine md:text-6xl">
          Our <span className="font-script text-5xl md:text-7xl">Services</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-ink/70">
          From the first candid glance to the final grand celebration, Cini
          Wedding Studio brings together photography, cinematic films and expert
          bridal styling — everything you need, under one roof.
        </p>
      </motion.div>

      {/* Service groups */}
      <div className="mx-auto max-w-6xl px-6 pb-24">
        {groups.map((g) => (
          <div key={g.title} className="pt-16 md:pt-20">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-widest-lg text-gold">
                {g.kicker}
              </p>
              <h2 className="mt-4 font-serif text-3xl text-wine md:text-4xl">
                {g.title}
              </h2>
              <span className="mx-auto mt-5 block h-px w-16 bg-wine/30" />
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((s, i) => (
                <Card key={s.name} {...s} i={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
