"use client";

import ScrollReveal from "./ScrollReveal";
import { PillButton, SectionCopy, SectionTitle } from "./ui";

export default function CtaSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container text-center">
        <ScrollReveal>
          <SectionTitle>Ready to invest smarter?</SectionTitle>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <SectionCopy className="mt-4">
            Dedicated to enabling power to our people. Join PlantifyTech today.
          </SectionCopy>
        </ScrollReveal>
        <ScrollReveal delay={0.14}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PillButton href="/contact" label="Join Beta" variant="dark" />
            <PillButton href="/contact" label="Contact Us" variant="light" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
