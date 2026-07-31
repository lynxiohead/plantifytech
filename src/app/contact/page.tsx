import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import ContactForm, {
  ContactInfo,
  FaqSection,
} from "@/components/ContactSections";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="sky-bg pt-28">
        <ContactForm />
        <ContactInfo />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
