import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ShowcaseGallery from "@/components/ShowcaseGallery";
import AudienceSection from "@/components/AudienceSection";
import TrustStrip from "@/components/TrustStrip";
import RegionsStrip from "@/components/RegionsStrip";
import QuoteSection from "@/components/QuoteSection";
import WhyChoose from "@/components/WhyChoose";
import MediaSection from "@/components/MediaSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ShowcaseGallery />
        <AudienceSection />
        <TrustStrip />
        <RegionsStrip />
        <QuoteSection />
        <WhyChoose />
        <MediaSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
