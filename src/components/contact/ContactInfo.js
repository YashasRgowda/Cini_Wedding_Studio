"use client";

import { motion } from "framer-motion";

const PinIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10">
    <path d="M12 2C7.9 2 4.5 5.4 4.5 9.5c0 5.2 6.6 11.5 7 11.9.3.3.7.3 1 0 .4-.4 7-6.7 7-11.9C19.5 5.4 16.1 2 12 2zm0 10.2a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4z" />
  </svg>
);

const PhoneIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
  </svg>
);

const MailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-9 w-9">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const socials = [
  {
    label: "Facebook",
    href: "#",
    path: <path d="M15.12 5.32H17V2.14A26.1 26.1 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.6H6.6v3.56h3.08V22h3.68v-9.14h3.06l.46-3.56h-3.52V7.05c0-1.03.28-1.73 1.76-1.73z" />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/ciniweddingstudio",
    path: (
      <>
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.1" cy="6.9" r="1.1" />
      </>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    path: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.76C18.2 5 12 5 12 5s-6.2 0-7.84.44A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.76C5.8 19 12 19 12 19s6.2 0 7.84-.44A2.5 2.5 0 0 0 21.6 16.8 26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3z" />,
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-blush px-6 py-20 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mx-auto grid max-w-5xl items-start gap-14 text-center sm:grid-cols-3"
      >
        {/* Address */}
        <div className="flex flex-col items-center">
          <span className="text-wine">{PinIcon}</span>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-widest-lg text-gold">
            Address
          </p>
          <p className="mt-4 max-w-[15rem] text-[14px] leading-relaxed text-ink/75">
            433, 18th Cross Rd, Opposite Vijayanagar Post Office, MRCR Layout,
            Vijayanagar, Bengaluru, Karnataka 560040
          </p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center">
          <span className="text-wine">{PhoneIcon}</span>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-widest-lg text-gold">
            Phone Number
          </p>
          <div className="mt-4 space-y-1 text-[14px] leading-relaxed text-ink/75">
            <p>+91 97420 00794</p>
            <p>+91 90362 12999</p>
          </div>
        </div>

        {/* Email + socials */}
        <div className="flex flex-col items-center">
          <span className="text-wine">{MailIcon}</span>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-widest-lg text-gold">
            Email ID
          </p>
          <p className="mt-4 text-[14px] leading-relaxed text-ink/75">
            ciniweddingstudio@gmail.com
          </p>
          <div className="mt-5 flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-wine-soft transition-colors hover:text-wine"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                  {s.path}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Google Map — Cini Wedding Studio, Vijayanagar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-sm"
      >
        <iframe
          title="Cini Wedding Studio location"
          src="https://maps.google.com/maps?q=Cini%20Wedding%20Studio%2C%2018th%20Cross%20Rd%2C%20Vijayanagar%2C%20Bengaluru%20560040&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="h-[320px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </section>
  );
}
