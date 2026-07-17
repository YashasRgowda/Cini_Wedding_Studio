"use client";

import { useEffect, useState } from "react";
import Emblem from "@/components/Emblem";

const leftLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const rightLinks = [
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    path: (
      <path d="M15.12 5.32H17V2.14A26.1 26.1 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.6H6.6v3.56h3.08V22h3.68v-9.14h3.06l.46-3.56h-3.52V7.05c0-1.03.28-1.73 1.76-1.73z" />
    ),
    fill: true,
  },
  {
    label: "Instagram",
    href: "#",
    path: (
      <>
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" stroke="none" />
      </>
    ),
    fill: false,
  },
  {
    label: "YouTube",
    href: "#",
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.76C18.2 5 12 5 12 5s-6.2 0-7.84.44A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.76C5.8 19 12 19 12 19s6.2 0 7.84-.44A2.5 2.5 0 0 0 21.6 16.8 26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z"
      />
    ),
    fill: true,
  },
];

function SocialIcon({ label, href, path, fill }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-wine-soft transition-colors hover:text-wine"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill={fill ? "currentColor" : "none"}
        stroke={fill ? "none" : "currentColor"}
        strokeWidth={fill ? 0 : 1.6}
      >
        {path}
      </svg>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const allLinks = [...leftLinks, ...rightLinks];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full border-y border-wine/15 bg-blush transition-shadow duration-500 lg:sticky ${
        scrolled ? "shadow-[0_2px_10px_-4px_rgba(92,46,42,0.18)]" : ""
      }`}
    >
      {/* Desktop — symmetric 5-column grid so the emblem sits at true center */}
      <nav className="mx-auto hidden w-full max-w-[1600px] grid-cols-[13rem_1fr_auto_1fr_13rem] items-stretch lg:grid">
        <div className="flex items-center border-r border-wine/15 py-5 pl-8">
          <a
            href="/"
            className="font-serif text-[11px] leading-tight tracking-widest-lg uppercase text-wine"
          >
            Cini Wedding
            <br />
            Studio
          </a>
        </div>

        <ul className="flex items-center justify-end gap-4 pr-8 text-xs font-medium uppercase tracking-widest-lg text-wine-soft">
          {leftLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block w-28 text-center transition-colors hover:text-wine"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center px-10">
          <a href="/" aria-label="Home">
            <Emblem className="h-14 w-auto" tone="wine" />
          </a>
        </div>

        <ul className="flex items-center justify-start gap-4 pl-8 text-xs font-medium uppercase tracking-widest-lg text-wine-soft">
          {rightLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="block w-28 text-center transition-colors hover:text-wine"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-5 border-l border-wine/15 py-5 pr-8">
          {socials.map((s) => (
            <SocialIcon key={s.label} {...s} />
          ))}
        </div>
      </nav>

      {/* Mobile / tablet */}
      <nav className="flex items-center justify-between px-6 py-4 lg:hidden">
        <a
          href="/"
          className="font-serif text-sm leading-tight tracking-widest-lg uppercase text-wine"
        >
          Cini Wedding
          <br />
          Studio
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] text-wine"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <>
              <span className="block h-px w-6 bg-wine" />
              <span className="block h-px w-6 bg-wine" />
              <span className="block h-px w-6 bg-wine" />
            </>
          )}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="border-t border-wine/15 bg-blush px-6 py-8 lg:hidden">
          <ul className="flex flex-col items-center gap-5 text-xs font-medium uppercase tracking-widest-lg text-wine-soft">
            {allLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="transition-colors hover:text-wine"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex items-center justify-center gap-6">
            {socials.map((s) => (
              <SocialIcon key={s.label} {...s} />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
