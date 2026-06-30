"use client";

import { images } from "@/lib/images";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Details", href: "#experience" },
  { label: "Shop", href: "#" },
  { label: "The Blog", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

const socials = ["FB", "PIN", "IG", "YT"];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-olive pt-24 pb-8 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        {/* italic serif tagline (brand emblem lives in the closing section above) */}
        <p className="mx-auto max-w-xl text-center font-serif text-xl italic leading-relaxed text-cream/90 md:text-2xl">
          Preserving the quiet glances and the wild celebrations &mdash; so the
          feeling of your day stays with you for a lifetime.
        </p>

        {/* nav links */}
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs font-medium uppercase tracking-widest-lg">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors hover:text-blush">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* instagram strip with vertical handle and stacked socials */}
        <div className="relative mt-10 flex items-stretch gap-3">
          <span className="vertical-rl hidden text-[10px] font-medium uppercase tracking-widest-xl text-cream/70 md:block">
            @yourstudioname
          </span>

          <div className="grid flex-1 grid-cols-2 gap-2 md:grid-cols-4">
            {images.instagram.map((src) => (
              <div key={src} className="aspect-square overflow-hidden">
                <img
                  src={src}
                  alt="Wedding moment shared on Instagram"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="hidden flex-col items-center justify-center gap-4 text-cream/80 md:flex">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-cream/30 text-[10px] font-semibold transition-colors hover:border-cream hover:text-cream"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-10 text-center text-xs font-medium uppercase tracking-widest-lg text-cream/80">
          International Destination Wedding Photographers &amp; Filmmakers
        </p>

        <div className="mt-8 h-px w-full bg-cream/20" />

        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-[11px] uppercase tracking-widest text-cream/70 md:flex-row">
          <p>
            Copyright &copy; {new Date().getFullYear()} Your Studio Name &nbsp;|&nbsp;{" "}
            <a href="#" className="underline transition-colors hover:text-cream">
              Privacy Policy
            </a>
          </p>
          <p>Website by Your Studio Name</p>
        </div>
      </div>
    </footer>
  );
}
