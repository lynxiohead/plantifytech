import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSections from "@/components/AboutSections";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, PAGE_SEO, webPageSchema } from "@/lib/seo";

export const metadata = buildMetadata(PAGE_SEO.about);

export default function AboutPage() {
  const seo = PAGE_SEO.about;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: seo.title, description: seo.description, path: "/about" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <Navbar />
      <main className="pt-28">
        <AboutSections />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
