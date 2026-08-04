import { SectionCopy } from "./ui";

export default function SeoDiscoverySection() {
  return (
    <section
      aria-labelledby="agricultural-investment-heading"
      className="section-pad border-t border-black/5 bg-[var(--bg-soft)]"
    >
      <div className="container max-w-3xl text-center">
        <h2
          id="agricultural-investment-heading"
          className="display-title text-[clamp(1.75rem,3.5vw,2.5rem)]"
        >
          Farm investment &amp; agricultural finance for Southern Africa
        </h2>
        <SectionCopy className="mt-5 text-left md:text-center">
          Plantify Tech is an agricultural investment platform built for people who
          want real assets — not abstract tickers. Browse vetted farm projects,
          invest from R100, and track crops, livestock, and mixed-farming campaigns
          with AI-powered insights. Whether you search for farm investment, agricultural
          crowdfunding, agritech fintech, or an accessible way to invest in agriculture
          online, Plantify Tech brings transparency, mobile-first design, and harvest-linked
          returns to everyday investors across South Africa and the wider region.
        </SectionCopy>
        <SectionCopy className="mt-4 text-left md:text-center">
          For farmers, our platform offers an alternative to slow traditional agricultural
          finance — list your project, reach verified investors, and access farm funding
          without unnecessary collateral barriers. For investors, it works like modern share
          investing: discover opportunities, start small, diversify across real farms, and
          grow with agriculture.
        </SectionCopy>
      </div>
    </section>
  );
}
