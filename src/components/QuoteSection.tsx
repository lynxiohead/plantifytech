"use client";

import ScrollReveal from "./ScrollReveal";

export default function QuoteSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <ScrollReveal>
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="display-title text-[clamp(1.6rem,3vw,2.4rem)] leading-snug text-[var(--text)]">
              &ldquo;We built Plantify to connect farmers who need funding with
              everyday people who want to invest — growing farms, communities,
              and returns together.&rdquo;
            </p>
            <footer className="mt-6 text-sm text-[var(--text-muted)]">
              Founder and CPCO
            </footer>
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
