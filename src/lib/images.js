// Real, royalty-free wedding photography sourced from Unsplash.
// Each photo is license-free for commercial use, no attribution required.
const u = (id, w) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

export const images = {
  // Faint full-bleed background behind the hero wordmark
  heroBg:
    "https://images.pexels.com/photos/24350035/pexels-photo-24350035.jpeg?auto=compress&cs=tinysrgb&w=1600",

  // Hero triptych (3 touching portrait images under the wordmark)
  triptych: [
    u("photo-1735052712464-9d24b69be5f5", 900),
    u("photo-1722952908667-f4883b8e6df6", 900),
    u("photo-1727430256509-0f897d6f4765", 900),
  ],

  // "The Experience" split section — full-height portrait
  experience:
    "https://images.pexels.com/photos/27825198/pexels-photo-27825198.jpeg?auto=compress&cs=tinysrgb&w=1600",

  // "The Experience" floating film-preview card thumbnail
  experienceFilm: u("photo-1583878545126-2f1ca0142714", 600),

  // "Films" two-image full-bleed CTA split
  filmsLeft: u("photo-1517456363055-5d162a453d6d", 1600),
  filmsRight: u("photo-1505428215601-90f0007b9e83", 1600),

  // Testimonial framed portrait
  testimonialPhoto: u("photo-1606800052052-a08af7148866", 1200),

  // Client / testimonial slider photos (one per client) — distinct couples
  testimonials: [
    "https://images.pexels.com/photos/32149795/pexels-photo-32149795.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/38147801/pexels-photo-38147801.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/17657612/pexels-photo-17657612.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ],

  // "Explore Videography" full-bleed cinematic background
  videographyBg: u("photo-1735052712464-9d24b69be5f5", 2200),

  // "About / dedication" split image
  about:
    "https://images.pexels.com/photos/24334948/pexels-photo-24334948.jpeg?auto=compress&cs=tinysrgb&w=1600",

  // Closing CTA full-bleed blurred background
  closing: u("photo-1690202407412-26b8e18a2a64", 2200),

  // Footer Instagram strip
  instagram: [
    u("photo-1600685890506-593fdf55949b", 700),
    u("photo-1583878545126-2f1ca0142714", 700),
    u("photo-1640953148126-1962ec17a92b", 700),
    u("photo-1698802060978-84008afaeb72", 700),
  ],
};
