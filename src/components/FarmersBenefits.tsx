"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { SectionTitle, SectionCopy } from "./ui";
import { FARMER_BENEFITS } from "@/lib/content";

export default function FarmersBenefits() {
  return (
    <section className="section-pad bg-[var(--bg-soft)]">
      <div className="container">
        <ScrollReveal>
          <p className="text-center text-[13px] font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
            Why Partner With Plantify
          </p>
          <SectionTitle className="mt-2">
            Built for Farmers, Not Bankers
          </SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <SectionCopy className="mt-4">
            Traditional banks demand property collateral and endless paperwork.
            We provide fast, community-backed capital designed around real agricultural harvests.
          </SectionCopy>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {FARMER_BENEFITS.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <article className="audience-card group overflow-hidden bg-white border border-black/5 rounded-[var(--radius-xl)] transition-all duration-300 hover:shadow-[0_24px_80px_rgba(10,31,26,0.1)]">
                <div className="audience-photo relative h-[220px] w-full md:h-[240px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-1 text-xs font-semibold text-[var(--accent)] backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="display-title text-[1.35rem] md:text-2xl text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.body}
                  </p>
                  <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--accent)]/10 bg-[var(--bg-soft)] px-4 py-3">
                    <p className="text-xs font-semibold text-[var(--accent)]">
                      {item.note}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
