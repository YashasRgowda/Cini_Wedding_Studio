import Navbar from "@/components/Navbar";
import CoupleGallery from "@/components/gallery/CoupleGallery";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Celebrities | Cini Wedding Studio",
  description:
    "Star-studded celebrity moments and grand receptions, captured by Cini Wedding Studio.",
};

const base = "/images/gallery/meghana-vikram";
const photos = Array.from(
  { length: 10 },
  (_, i) => `${base}/${String(i + 1).padStart(2, "0")}.jpg`
);

export default function CelebritiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px] lg:pt-0">
        <CoupleGallery title="Celebrities" photos={photos} />
      </main>
      <BackToTop />
    </>
  );
}
