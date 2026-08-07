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

        <div className="mt-6 space-y-5 text-left md:text-center">
          <SectionCopy className="mx-0 max-w-none">
            Plantify Tech is an agricultural investment platform built for people who
            want real assets — not abstract tickers.
          </SectionCopy>

          <SectionCopy className="mx-0 max-w-none">
            Browse vetted farm projects, invest from R100, and track crops, livestock,
            and mixed-farming campaigns with AI-powered insights.
          </SectionCopy>

          <SectionCopy className="mx-0 max-w-none">
            Whether you search for farm investment, agricultural crowdfunding, agritech
            fintech, or an accessible way to invest in agriculture online, Plantify Tech
            brings transparency, mobile-first design, and harvest-linked returns to
            everyday investors across South Africa and the wider region.
          </SectionCopy>

          <SectionCopy className="mx-0 max-w-none">
            For farmers, our platform offers an alternative to slow traditional
            agricultural finance — list your project, reach verified investors, and
            access farm funding without unnecessary collateral barriers.
          </SectionCopy>

          <SectionCopy className="mx-0 max-w-none">
            For investors, it works like modern share investing: discover opportunities,
            start small, diversify across real farms, and grow with agriculture.
          </SectionCopy>
        </div>
      </div>
    </section>
  );
}
