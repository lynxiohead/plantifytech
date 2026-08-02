import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import { HelpHero, FaqGroups } from "@/components/HelpSections";

export default function HelpPage() {
  return (
    <>
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
