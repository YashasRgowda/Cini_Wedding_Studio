"use client";

const press = [
  "WeddingSutra",
  "WedMeGood",
  "Vogue Weddings",
  "Brides Today",
  "Harper's Bazaar",
  "ELLE",
];

export default function PressLogos() {
  return (
    <section className="bg-tan px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest-lg text-wine-soft/70">
          As Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {press.map((name) => (
            <span
              key={name}
              className="font-serif text-lg tracking-wide text-wine-soft/60"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="mt-8 h-px w-full bg-wine/10" />
      </div>
    </section>
  );
}
