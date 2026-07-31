import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AudienceSection from "@/components/AudienceSection";
import TrustStrip from "@/components/TrustStrip";
import QuoteSection from "@/components/QuoteSection";
import WhyChoose from "@/components/WhyChoose";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <AudienceSection />
        <TrustStrip />
        <QuoteSection />
        <WhyChoose />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
