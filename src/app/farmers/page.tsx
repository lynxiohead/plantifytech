import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StepFlow from "@/components/StepFlow";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { FARMER_STEPS } from "@/lib/content";
import { SectionCopy, SectionEyebrow, SectionTitle } from "@/components/ui";
import { buildMetadata, breadcrumbSchema, PAGE_SEO, webPageSchema } from "@/lib/seo";

export const metadata = buildMetadata(PAGE_SEO.farmers);

export default function FarmersPage() {
  const seo = PAGE_SEO.farmers;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: seo.title, description: seo.description, path: "/farmers" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "For Farmers", path: "/farmers" },
          ]),
        ]}
      />
      <Navbar />
      <main className="sky-bg pt-28">
        <section className="section-pad bg-white">
          <div className="container">
            <SectionEyebrow>For Farmers</SectionEyebrow>
            <SectionTitle className="mt-4">Simple steps to get your farm funded</SectionTitle>
            <SectionCopy className="mt-4">
              Get capital without endless paperwork. Our streamlined process connects you
              with investors in days, not months.
            </SectionCopy>
          </div>
        </section>

        <section className="section-pad bg-white pb-24">
          <div className="container">
            <StepFlow
              label="How it works: For Farmers"
              steps={FARMER_STEPS}
              statValue="R100"
              statNote="Minimum amount to start investing"
              introTitle="Simple steps to get your farm funded"
              introCopy="Get capital without endless paperwork. Our streamlined process connects you with investors in days, not months."
            />
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
