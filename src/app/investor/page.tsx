import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import InvestorForm from "@/components/InvestorForm";

export default function InvestorPage() {
  return (
    <>
      <Navbar />
      <main className="sky-bg pt-28">
        <InvestorForm />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
