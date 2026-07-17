"use client";

import { useEffect, useState } from "react";

// PLACEHOLDER PHOTOS — swap with Cini's chosen About-hero images.
const bandImages = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/films-left.jpg",
  "/images/films-right.jpg",
];

// how many images are visible at once, by screen size
function usePerView() {
  const [pv, setPv] = useState(1);
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPv(w >= 1024 ? 4 : w >= 640 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return pv;
}

export default function AboutHero() {
  const perView = usePerView();
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const n = bandImages.length;

  // clone the first `perView` slides at the end for a seamless loop
  const slides = [...bandImages, ...bandImages.slice(0, perView)];
  const itemW = 100 / perView;

  // reset when the visible count changes (e.g. rotate device)
  useEffect(() => setIndex(0), [perView]);

  // auto-advance one image at a time
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => i + 1), 3500);
    return () => clearInterval(id);
  }, [perView]);

  // seamless loop: after sliding onto the cloned set, snap back with no animation
  useEffect(() => {
    if (index === n) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 850);
      return () => clearTimeout(t);
    }
    if (!animate) {
      const r = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(r);
    }
  }, [index, n, animate]);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="h-[62vh] min-h-[440px] w-full overflow-hidden">
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${index * itemW}%)`,
            transition: animate ? "transform 0.85s ease" : "none",
          }}
        >
          {slides.map((src, i) => (
            <div
              key={i}
              className="h-full shrink-0 overflow-hidden"
              style={{ flexBasis: `${itemW}%` }}
            >
              <img
                src={src}
                alt="Cini Wedding Studio moment"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* soft veil so the title reads over any photo */}
      <div className="pointer-events-none absolute inset-0 bg-ink/25" />

      {/* centered title */}
      <h1 className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center font-serif text-[2.4rem] tracking-wide text-cream sm:text-5xl md:text-6xl">
        Embark on a Journey of Love
      </h1>
    </section>
  );
}
