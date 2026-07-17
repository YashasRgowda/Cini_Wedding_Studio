"use client";

import { motion } from "framer-motion";

// Cini Wedding Studio services — used as the checkbox options
const services = [
  "Wedding Photography",
  "Video Coverage",
  "Candid Photography",
  "Candid Videography",
  "Pre-Wedding Shoot",
  "Outdoor Photo Shoot",
  "Bridal Makeup & Groom",
  "Hair Style for Bridal & Groom",
  "Saree Draping",
  "Party Makeup",
  "Other Event",
];

const hearAbout = [
  "Instagram",
  "Facebook",
  "Google Search",
  "YouTube",
  "Friend / Family Referral",
  "Other",
];

function Label({ children }) {
  return (
    <label className="block text-[15px] font-semibold text-ink">
      {children} <span className="text-red-500">*</span>
    </label>
  );
}

const inputCls =
  "mt-2 w-full rounded-md border border-ink/20 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink/35 focus:border-ink/50 focus:outline-none";

// Cini Wedding Studio WhatsApp number (country code + number, no +/spaces)
const WHATSAPP_NUMBER = "919742000794";

function handleSubmit(e) {
  e.preventDefault();
  const fd = new FormData(e.currentTarget);
  const val = (k) => (fd.get(k) || "").toString().trim();
  const services = fd.getAll("services").join(", ") || "—";

  const lines = [
    "*New Enquiry — Cini Wedding Studio*",
    "",
    `*Name:* ${val("first_name")} ${val("last_name")}`.trim(),
    `*Phone:* ${val("phone") || "—"}`,
    `*Email:* ${val("email") || "—"}`,
    `*Event City:* ${val("event_city") || "—"}`,
    `*Services:* ${services}`,
    `*Event Date & Details:* ${val("details") || "—"}`,
    `*Heard about us:* ${val("heard_from") || "—"}`,
  ];

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    lines.join("\n")
  )}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export default function GetInTouchForm() {
  return (
    <section id="get-in-touch" className="bg-blush px-4 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        {/* intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl text-wine md:text-4xl">Get In Touch</h2>
          <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-ink/75">
            Hey friend, we&apos;d love to hear from you! Please complete our form
            and we will be in touch within 1&ndash;2 business days.
          </p>
        </motion.div>

        {/* white form card — mirrors the reference form structure */}
        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="mt-12 rounded-lg bg-white p-7 shadow-2xl sm:p-10"
        >
          <h3 className="text-center text-[26px] font-bold text-slate-800 sm:text-3xl">
            We&apos;d love to hear from you
          </h3>

          {/* ── Tell us about you ── */}
          <div className="mt-10 border-b border-ink/15 pb-2">
            <h4 className="text-xl font-bold text-slate-800">Tell us about you</h4>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <Label>Name</Label>
              <input name="first_name" type="text" className={inputCls} />
              <p className="mt-1 text-[13px] text-ink/55">First Name</p>
              <input name="last_name" type="text" className={inputCls} />
              <p className="mt-1 text-[13px] text-ink/55">Last Name</p>
            </div>
            <div>
              <Label>Phone</Label>
              <input name="phone" type="tel" className={inputCls} />
            </div>
            <div>
              <Label>Email</Label>
              <input name="email" type="email" className={inputCls} />
            </div>
          </div>

          {/* ── Tell us about your celebration ── */}
          <div className="mt-12 border-b border-ink/15 pb-2">
            <h4 className="text-xl font-bold text-slate-800">
              Tell us about your celebration
            </h4>
          </div>

          <div className="mt-6 space-y-6">
            <div>
              <Label>Event City</Label>
              <input name="event_city" type="text" className={inputCls} />
            </div>
            <div>
              <Label>Services You&apos;d Like From Us</Label>
              <div className="mt-4 space-y-4">
                {services.map((s) => (
                  <label
                    key={s}
                    className="flex cursor-pointer items-center gap-3 text-[15px] text-slate-700"
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={s}
                      className="h-5 w-5 rounded border-ink/30 accent-wine"
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <Label>Event Date &amp; Details</Label>
              <textarea
                name="details"
                rows={4}
                placeholder="Add your message here"
                className={`${inputCls} resize-none`}
              />
            </div>
          </div>

          {/* ── One last thing ── */}
          <div className="mt-12 border-b border-ink/15 pb-2">
            <h4 className="text-xl font-bold text-slate-800">One last thing</h4>
          </div>

          <div className="mt-6">
            <Label>How did you hear about us?</Label>
            <select name="heard_from" defaultValue="" className={inputCls}>
              <option value="" disabled></option>
              {hearAbout.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="mt-12 w-full rounded-full bg-teal-500 py-4 text-base font-semibold text-white transition-colors hover:bg-teal-600"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}
