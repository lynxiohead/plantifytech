"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { SectionTitle, SectionCopy } from "./ui";
import { INVESTOR_BENEFITS, INVESTOR_FAQS } from "@/lib/content";
import { IoHelpCircleOutline } from "react-icons/io5";

export default function InvestorsBenefits() {
  return (
    <section className="section-pad bg-[var(--bg-soft)]">
      <div className="container">
        <ScrollReveal>
          <p className="text-center text-[13px] font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
            The Agricultural Asset Class
          </p>
          <SectionTitle className="mt-2">
            Why Invest in Real Farmland?
          </SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <SectionCopy className="mt-4">
            Unlike volatile stocks or crypto, agricultural investments represent tangible food production, inflation resilience, and real economic growth.
          </SectionCopy>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {INVESTOR_BENEFITS.map((item, index) => (
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

        {/* FAQ Section */}
        <div className="mt-20 border-t border-black/5 pt-16">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
                <IoHelpCircleOutline size={16} />
                Frequently Asked Questions
              </span>
              <SectionTitle className="mt-2">
                Questions About Investing
              </SectionTitle>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {INVESTOR_FAQS.map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 0.08}>
                <div className="rounded-[var(--radius-lg)] border border-black/5 bg-white p-6 shadow-sm hover:border-[var(--accent)]/20 transition-colors">
                  <h4 className="display-title text-base font-semibold text-[var(--text)]">
                    {faq.question}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
