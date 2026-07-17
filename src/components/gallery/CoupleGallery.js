"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

// Deterministic seeded shuffle so similar shots don't sit next to each other,
// while keeping the order stable across renders (no hydration flicker).
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle(arr, seedStr) {
  let seed = 0;
  for (let i = 0; i < seedStr.length; i++) seed = (seed * 31 + seedStr.charCodeAt(i)) | 0;
  const rand = mulberry32(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function CoupleGallery({ title, photos: rawPhotos }) {
  const photos = useMemo(
    () => seededShuffle(rawPhotos, title),
    [rawPhotos, title]
  );
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [ratios, setRatios] = useState({}); // src -> width/height
  const mounted = useRef(true);

  // Measure container width
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Load natural aspect ratios
  useEffect(() => {
    mounted.current = true;
    photos.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        if (!mounted.current) return;
        setRatios((r) =>
          r[src] ? r : { ...r, [src]: img.naturalWidth / img.naturalHeight }
        );
      };
      img.src = src;
    });
    return () => {
      mounted.current = false;
    };
  }, [photos]);

  const gap = width < 640 ? 12 : 16;
  const targetH = width < 640 ? 300 : width < 1024 ? 340 : 400;

  // Justified height a row would take when stretched to the full width.
  const rowHeight = (arr) => {
    const rs = arr.reduce((s, x) => s + x.ratio, 0);
    return (width - gap * (arr.length - 1)) / rs;
  };

  // 1) Greedily break photos into rows.
  const built = [];
  let cur = [];
  photos.forEach((src) => {
    cur.push({ src, ratio: ratios[src] || 1.5 });
    if (rowHeight(cur) <= targetH) {
      built.push(cur);
      cur = [];
    }
  });
  if (cur.length) built.push(cur); // leftover (possibly underfull) last row

  // 2) If the last row is underfull, borrow photos from the row above so it
  //    fills the width instead of leaving an orphan with empty space.
  if (built.length > 1) {
    const last = built[built.length - 1];
    while (rowHeight(last) > targetH * 1.3 && built[built.length - 2].length > 2) {
      last.unshift(built[built.length - 2].pop());
    }
  }

  // 3) Justify every row (including the last) to the full width.
  const rows = built.map((arr) => {
    const h = rowHeight(arr);
    return arr.map((p) => ({ ...p, w: p.ratio * h, h }));
  });

  return (
    <section className="w-full bg-cream">
      {/* Couple name header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-4xl px-6 pt-24 pb-14 text-center md:pt-32"
      >
        <h1 className="font-serif text-4xl text-wine md:text-6xl">{title}</h1>
        <span className="mx-auto mt-6 block h-px w-16 bg-wine/40" />
      </motion.div>

      {/* Justified rows */}
      <div className="mx-auto max-w-[1500px] px-3 pb-24 md:px-4">
        <div ref={containerRef}>
          {width > 0 &&
            rows.map((r, ri) => (
              <div
                key={ri}
                className="flex"
                style={{ gap, marginBottom: gap }}
              >
                {r.map((img, i) => (
                  <motion.div
                    key={img.src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6, delay: (i % 4) * 0.04 }}
                    className="overflow-hidden"
                    style={{ width: img.w, height: img.h }}
                  >
                    <img
                      src={img.src}
                      alt={`${title} — photo`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                    />
                  </motion.div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
