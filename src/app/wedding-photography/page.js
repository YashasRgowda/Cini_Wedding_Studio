import Navbar from "@/components/Navbar";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Wedding Photography | Cini Wedding Studio — Featured Galleries",
  description:
    "Browse featured wedding photography galleries by Cini Wedding Studio — candid couple stories captured across Bangalore and beyond.",
};

export default function WeddingPhotographyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px] lg:pt-0">
        <GalleryGrid />
        {/* thin cream divider between the grid and the closing CTA */}
        <div className="h-1 w-full bg-cream md:h-1.5" />
        <ClosingCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
