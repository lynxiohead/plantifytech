"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { ASSETS } from "@/lib/content";

export default function QuoteSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[160px_1fr] md:gap-10">
            <div className="relative mx-auto h-[140px] w-[140px] overflow-hidden rounded-[var(--radius-media)] ring-4 ring-[var(--bg-soft)] md:mx-0 md:h-[160px] md:w-[160px]">
              <Image
                src={ASSETS.founders.primary}
                alt="PlantifyTech founder"
                fill
                className="object-cover rounded-[var(--radius-media-inner)]"
                sizes="160px"
              />
            </div>
            <blockquote>
              <p className="display-title text-[clamp(1.5rem,3vw,2.25rem)] leading-snug text-[var(--text)]">
                &ldquo;We built Plantify to connect farmers who need funding with
                everyday people who want to invest — growing farms, communities,
                and returns together.&rdquo;
              </p>
              <footer className="mt-5 text-sm font-semibold text-[var(--accent)]">
                Founder &amp; CPCO
              </footer>
            </blockquote>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
