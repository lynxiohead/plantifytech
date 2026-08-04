import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudienceSection from "@/components/AudienceSection";
import QuoteSection from "@/components/QuoteSection";
import WhyChoose from "@/components/WhyChoose";
import CtaSection from "@/components/CtaSection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <AudienceSection />
        <QuoteSection />
        <WhyChoose />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
