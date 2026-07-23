import Navbar from "@/components/Navbar";
import CoupleGallery from "@/components/gallery/CoupleGallery";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Sneha & Karthik | Cini Wedding Studio",
  description:
    "A candid pre-wedding story of Sneha & Karthik, captured by Cini Wedding Studio across the hills and open roads around Bangalore.",
};

const base = "/images/gallery/sneha-karthik";
const photos = Array.from(
  { length: 28 },
  (_, i) => `${base}/${String(i + 1).padStart(2, "0")}.jpg`
);

export default function SnehaAndKarthikPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px] lg:pt-0">
        <CoupleGallery title="Sneha & Karthik" photos={photos} />
      </main>
      <BackToTop />
    </>
  );
}
