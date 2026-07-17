import Navbar from "@/components/Navbar";
import CoupleGallery from "@/components/gallery/CoupleGallery";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Aishwarya & Rohan | Cini Wedding Studio",
  description:
    "A candid pre-wedding story of Aishwarya & Rohan, captured by Cini Wedding Studio across the fields, forests and hills around Bangalore.",
};

const base = "/images/gallery/aishwarya-rohan";
const photos = [
  `${base}/01.jpg`,
  `${base}/02.jpg`,
  `${base}/03.jpg`,
  `${base}/04.jpg`,
  `${base}/05.jpg`,
  `${base}/06.jpg`,
  `${base}/07.jpg`,
  `${base}/08.jpg`,
  `${base}/09.jpg`,
  `${base}/10.jpg`,
  `${base}/11.jpg`,
];

export default function AishwaryaAndRohanPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px] lg:pt-0">
        <CoupleGallery title="Aishwarya & Rohan" photos={photos} />
      </main>
      <BackToTop />
    </>
  );
}
