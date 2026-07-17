import Navbar from "@/components/Navbar";
import FilmsGallery from "@/components/films/FilmsGallery";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Wedding Films | Cini Wedding Studio",
  description:
    "Cinematic wedding films by Cini Wedding Studio — reliving every laughter, tear and unscripted moment of your celebration.",
};

export default function WeddingFilmsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px] lg:pt-0">
        <FilmsGallery />
        {/* thin cream divider between the films and the closing CTA */}
        <div className="h-1 w-full bg-cream md:h-1.5" />
        <ClosingCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
