"use client";

import { images } from "@/lib/images";

// The "Elation" widget, reused in the Experience and About sections.
// Pass `quote` to render it as a still photo with an overlaid line (About);
// omit it for the film-player variant with play controls (Experience).
export default function FilmCard({ quote }) {
  return (
    <div className="border border-tan bg-blush p-3 shadow-lg">
      <div className="flex items-center gap-2 pb-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-wine/40 font-script text-sm text-wine">
          YS
        </span>
        <div className="overflow-hidden">
          <p className="truncate font-serif text-xs text-wine">
            Elation : An Emotional Film
          </p>
          <p className="truncate text-[10px] uppercase tracking-widest text-wine-soft/80">
            Your Studio Name
          </p>
        </div>
      </div>

      <div className="relative aspect-[9/15] overflow-hidden">
        <img
          src={images.experienceFilm}
          alt="Wedding film preview"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/15" />

        {/* play controls only for the film-player variant */}
        {!quote && (
          <div className="absolute inset-0 flex items-center justify-center gap-4 text-cream">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 opacity-80">
              <path d="M16 5v14l-11-7z" />
            </svg>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/70">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              </svg>
            </span>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 opacity-80">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent p-3 pt-12">
          <p className="font-script text-2xl text-cream">Elation</p>
          {quote ? (
            <p className="mt-1 max-w-[90%] text-[10px] italic leading-snug text-cream/85">
              {quote}
            </p>
          ) : (
            <div className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-cream/90">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
                <path d="M10 8v8l6-4z" />
              </svg>
              YouTube
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
