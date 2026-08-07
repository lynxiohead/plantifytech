"use client";

import ScrollReveal from "./ScrollReveal";
import { PillButton, SectionCopy, SectionTitle } from "./ui";

export default function CtaSection() {
  return (
    <section className="section-pad bg-[var(--bg-soft)] pb-0">
      <div className="container text-center">
        <ScrollReveal>
          <SectionTitle>Ready to invest smarter?</SectionTitle>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <SectionCopy className="mt-4">
            Dedicated to enabling power to our people. Join Plantify Tech today.
          </SectionCopy>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <div className="cta-button-row mt-8 flex flex-col items-center justify-center gap-3 pb-[clamp(3rem,6vw,5rem)] sm:flex-row">
            <PillButton href="/contact" label="Join Beta" variant="green" className="btn-pill-gloss--block" />
            <PillButton href="/contact" label="Contact Us" variant="light" className="btn-pill-gloss--block" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
