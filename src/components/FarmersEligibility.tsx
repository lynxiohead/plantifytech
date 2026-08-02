"use client";

import ScrollReveal from "./ScrollReveal";
import { SectionTitle, SectionCopy } from "./ui";
import { FARMER_ELIGIBILITY, FARMER_FAQS } from "@/lib/content";
import { IoCheckmarkCircle, IoHelpCircleOutline } from "react-icons/io5";
import FarmerApplicationForm from "./FarmerApplicationForm";

export default function FarmersEligibility() {
  return (
    <section id="eligibility" className="section-pad bg-white">
      <div className="container">
        <ScrollReveal>
          <p className="text-center text-[13px] font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
            Requirements &amp; Checklist
          </p>
          <SectionTitle className="mt-2">
            Who Qualifies for Funding?
          </SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <SectionCopy className="mt-4">
            We prioritize active farming operations with verifiable land tenure and clear off-take potential across Southern Africa.
          </SectionCopy>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FARMER_ELIGIBILITY.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <div className="card-soft flex flex-col justify-between h-full p-6 bg-[var(--bg-soft)] rounded-[var(--radius-lg)] border border-black/5">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--accent)] shadow-sm">
                    <IoCheckmarkCircle size={24} />
                  </div>
                  <h3 className="display-title mt-4 text-lg text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
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
                Questions About Farm Funding
              </SectionTitle>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {FARMER_FAQS.map((faq, index) => (
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

          <FarmerApplicationForm />
        </div>
      </div>
    </section>
  );
}
