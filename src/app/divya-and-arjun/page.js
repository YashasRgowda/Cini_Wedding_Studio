import Navbar from "@/components/Navbar";
import CoupleGallery from "@/components/gallery/CoupleGallery";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Divya & Arjun | Cini Wedding Studio",
  description:
    "A vibrant pre-wedding story of Divya & Arjun, captured by Cini Wedding Studio around Bangalore.",
};

const base = "/images/gallery/divya-arjun";
const photos = Array.from(
  { length: 17 },
  (_, i) => `${base}/${String(i + 1).padStart(2, "0")}.jpg`
);

export default function DivyaAndArjunPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px] lg:pt-0">
        <CoupleGallery title="Divya & Arjun" photos={photos} />
      </main>
      <BackToTop />
    </>
  );
}
