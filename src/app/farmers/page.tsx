import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StepFlow from "@/components/StepFlow";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { FARMER_STEPS } from "@/lib/content";
import { PillButton, SectionCopy, SectionEyebrow, SectionTitle } from "@/components/ui";
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
        <section className="section-pad bg-white pb-10">
          <div className="container text-center">
            <SectionEyebrow>For Farmers</SectionEyebrow>
            <SectionTitle className="mt-4">Simple steps to get your farm funded</SectionTitle>
            <SectionCopy className="mt-4">
              Get capital without endless paperwork. Our streamlined process connects you
              with investors in days, not months.
            </SectionCopy>
            <div className="mt-8 flex justify-center">
              <PillButton
                href="/contact"
                label="Get me funded"
                variant="green"
                className="btn-pill-gloss--block sm:btn-pill-gloss--inline"
              />
            </div>
          </div>
        </section>

        <section className="bg-white pb-24 pt-2">
          <div className="container">
            <StepFlow label="How it works: For Farmers" steps={FARMER_STEPS} />
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
