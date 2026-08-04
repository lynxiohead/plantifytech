import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import ContactForm, {
  ContactInfo,
  FaqSection,
} from "@/components/ContactSections";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, breadcrumbSchema, PAGE_SEO, webPageSchema } from "@/lib/seo";

export const metadata = buildMetadata(PAGE_SEO.contact);

export default function ContactPage() {
  const seo = PAGE_SEO.contact;

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: seo.title, description: seo.description, path: "/contact" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
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
