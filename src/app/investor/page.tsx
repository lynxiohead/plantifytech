import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import InvestorForm from "@/components/InvestorForm";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, PAGE_SEO, webPageSchema } from "@/lib/seo";

export const metadata = buildMetadata(PAGE_SEO.investor);

export default function InvestorPage() {
  const seo = PAGE_SEO.investor;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: seo.title, description: seo.description, path: "/investor" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Investor Beta", path: "/investor" },
          ]),
        ]}
      />
      <Navbar />
      <main className="sky-bg pt-28">
        <InvestorForm />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
