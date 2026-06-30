import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import FilmsCTA from "@/components/FilmsCTA";
import Testimonial from "@/components/Testimonial";
import Videography from "@/components/Videography";
import About from "@/components/About";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Navbar />
        <Experience />
        <FilmsCTA />
        <Testimonial />
        <Videography />
        <About />
        <ClosingCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
