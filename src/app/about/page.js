import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import CoreBeliefs from "@/components/about/CoreBeliefs";
import Timeline from "@/components/about/Timeline";
import OurStory from "@/components/about/OurStory";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "About | Cini Wedding Studio — Bridal Makeup & Wedding Photography",
  description:
    "The story behind Cini Wedding Studio — bridal makeup, hair styling, wedding photography and cinematic films in Bangalore.",
};

export default function AboutPage() {
  return (
    <>
      <main className="pt-[70px] lg:pt-0">
        <AboutHero />
        <Navbar />
        <AboutIntro />
        <CoreBeliefs />
        <Timeline />
        <OurStory />
        <ClosingCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
