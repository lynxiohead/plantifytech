import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StepFlow from "@/components/StepFlow";
import TrustStrip from "@/components/TrustStrip";
import QuoteSection from "@/components/QuoteSection";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { INVESTOR_STEPS } from "@/lib/content";
import { PillButton, SectionCopy, SectionEyebrow, SectionTitle } from "@/components/ui";
import {
  buildMetadata,
  breadcrumbSchema,
  financialServiceSchema,
  PAGE_SEO,
  webPageSchema,
} from "@/lib/seo";
import { IoCash, IoShieldCheckmark } from "react-icons/io5";

export const metadata = buildMetadata(PAGE_SEO.investors);

export default function InvestorsPage() {
  const seo = PAGE_SEO.investors;

  return (
    <>
      <JsonLd
        data={[
          financialServiceSchema(),
          webPageSchema({ title: seo.title, description: seo.description, path: "/investors" }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "For Investors", path: "/investors" },
          ]),
        ]}
      />
      <Navbar />
      <main className="sky-bg pt-28">
        <section className="section-pad bg-white">
          <div className="container">
            <SectionEyebrow>For Investors</SectionEyebrow>
            <SectionTitle className="mt-4">Start investing in minutes</SectionTitle>
            <SectionCopy className="mt-4">
              Browse vetted farm projects, invest any amount from R100, and track real
              growth with AI powered insights.
            </SectionCopy>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="stat-card p-6 md:p-7">
                <span className="icon-circle">
                  <IoShieldCheckmark size={22} />
                </span>
                <h3 className="display-title mt-5 text-[2rem] md:text-[2.4rem]">100%</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Secure, encrypted data protection
                </p>
              </div>
              <div className="stat-card p-6 md:p-7">
                <span className="icon-circle">
                  <IoCash size={22} />
                </span>
                <h3 className="display-title mt-5 text-[2rem] md:text-[2.4rem]">R100</h3>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Minimum amount to start investing
                </p>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <PillButton href="/investor" label="Join the investor beta" variant="dark" />
            </div>
          </div>
        </section>

        <TrustStrip />

        <section className="section-pad bg-white pb-24">
          <div className="container">
            <StepFlow label="How it works: For Investors" steps={INVESTOR_STEPS} />
          </div>
        </section>

        <QuoteSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
