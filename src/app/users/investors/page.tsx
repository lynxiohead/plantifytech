import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import InvestorsHero from "@/components/InvestorsHero";
import InvestorsBenefits from "@/components/InvestorsBenefits";
import StepFlow from "@/components/StepFlow";
import TrustStrip from "@/components/TrustStrip";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { INVESTOR_STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Investors | PlantifyTech - Invest in African Agriculture from R100",
  description:
    "Diversify your portfolio with inflation-resilient agricultural assets across Southern Africa. Start investing from R100 and track real-time farm growth with AI insights.",
};

export default function InvestorsPage() {
  return (
    <>
      <Navbar />
      <main>
        <InvestorsHero />
        <InvestorsBenefits />
        <StepFlow
          id="process"
          label="How It Works: For Investors"
          steps={INVESTOR_STEPS}
          statValue="R100"
          statNote="Minimum amount to start investing"
          introTitle="Start investing in Southern African farms"
          introCopy="Browse vetted farm projects, invest any amount from R100, and track real growth with AI powered satellite and sensor insights."
        />
        <TrustStrip />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
