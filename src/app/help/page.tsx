import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { HelpHero, FaqGroups } from "@/components/HelpSections";
import JsonLd from "@/components/JsonLd";
import { allFaqItems } from "@/lib/faqContent";
import {
  buildMetadata,
  breadcrumbSchema,
  faqPageSchema,
  PAGE_SEO,
  webPageSchema,
} from "@/lib/seo";

export const metadata = buildMetadata(PAGE_SEO.help);

export default function HelpPage() {
  const seo = PAGE_SEO.help;
  const faqs = allFaqItems();

  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(faqs),
          webPageSchema({ title: seo.title, description: seo.description, path: "/help" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Help", path: "/help" },
          ]),
        ]}
      />
      <Navbar />
      <main className="sky-bg pt-28">
        <HelpHero />
        <FaqGroups />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
