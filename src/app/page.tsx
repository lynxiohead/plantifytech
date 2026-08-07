import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AudienceSection from "@/components/AudienceSection";
import TrustStrip from "@/components/TrustStrip";
import QuoteSection from "@/components/QuoteSection";
import WhyChoose from "@/components/WhyChoose";
import WorldPresenceMap from "@/components/WorldPresenceMap";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  buildMetadata,
  breadcrumbSchema,
  financialServiceSchema,
  PAGE_SEO,
  webPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata(PAGE_SEO.home);

export default function HomePage() {
  const seo = PAGE_SEO.home;

  return (
    <>
      <JsonLd
        data={[
          financialServiceSchema(),
          webPageSchema({
            title: seo.title,
            description: seo.description,
            path: "/",
          }),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <AudienceSection />
        <TrustStrip />
        <QuoteSection />
        <WhyChoose />
        <WorldPresenceMap />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
