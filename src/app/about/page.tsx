import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutTeam from "@/components/AboutTeam";
import TrustStrip from "@/components/TrustStrip";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | PlantifyTech",
  description:
    "A brief description about our company and what we do.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutTeam />
        <TrustStrip />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
