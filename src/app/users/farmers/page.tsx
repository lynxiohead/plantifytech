import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FarmersHero from "@/components/FarmersHero";
import FarmersEligibility from "@/components/FarmersEligibility";
import TrustStrip from "@/components/TrustStrip";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Farmers | PlantifyTech - Collateral-Free Farm Capital",
  description:
    "Apply for collateral-free agricultural funding across Southern Africa. Connect with investors, get vetted in days, and repay around your harvest seasons.",
};

export default function FarmersPage() {
  return (
    <>
      <Navbar />
      <main>
        <FarmersHero />
        <FarmersEligibility />
        <TrustStrip />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
