import Navbar from "@/components/Navbar";
import ServicesList from "@/components/services/ServicesList";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Services | Cini Wedding Studio — Photography, Films & Bridal Makeup",
  description:
    "Explore Cini Wedding Studio's services — wedding & candid photography, cinematic films, pre-wedding shoots, bridal makeup, hair styling and saree draping in Bangalore.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[70px] lg:pt-0">
        <ServicesList />
        <ClosingCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
