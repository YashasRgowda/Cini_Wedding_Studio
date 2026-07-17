import Navbar from "@/components/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import GetInTouchForm from "@/components/contact/GetInTouchForm";
import FAQ from "@/components/contact/FAQ";
import ContactInfo from "@/components/contact/ContactInfo";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export const metadata = {
  title: "Contact | Cini Wedding Studio — Send Us a Note",
  description:
    "Get in touch with Cini Wedding Studio for bridal makeup, wedding photography and cinematic films in Bangalore. Send us a note and we'll reply within 1–2 business days.",
};

export default function ContactPage() {
  return (
    <>
      <main className="pt-[70px] lg:pt-0">
        <ContactHero />
        <Navbar />
        <GetInTouchForm />
        <FAQ />
        <ContactInfo />
        <ClosingCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
