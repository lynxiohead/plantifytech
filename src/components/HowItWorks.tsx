"use client";

import ScrollReveal from "./ScrollReveal";
import StepFlow from "./StepFlow";
import { SectionCopy, SectionEyebrow, SectionTitle } from "./ui";
import { FARMER_STEPS, INVESTOR_STEPS } from "@/lib/content";
import { IoCash, IoShieldCheckmark } from "react-icons/io5";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-white">
      <div className="container">
        <ScrollReveal>
          <SectionEyebrow>How does it work?</SectionEyebrow>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <SectionTitle className="mt-4">Start investing in minutes</SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <SectionCopy className="mt-4">
            Browse vetted farm projects, invest any amount from R100, and track
            real growth with AI powered insights.
          </SectionCopy>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="stat-card p-6 md:p-7">
              <span className="icon-circle">
                <IoShieldCheckmark size={22} />
              </span>
              <h3 className="display-title mt-5 text-[2rem] md:text-[2.4rem]">100%</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Secure, encrypted data protection
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <div className="stat-card p-6 md:p-7">
              <span className="icon-circle">
                <IoCash size={22} />
              </span>
              <h3 className="display-title mt-5 text-[2rem] md:text-[2.4rem]">R100</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Minimum amount to start investing
              </p>
            </div>
          </ScrollReveal>
        </div>

        <StepFlow
          id="investors"
          label="How it works: For Investors"
          steps={INVESTOR_STEPS}
        />

        <div className="mt-24 border-t border-black/5 pt-24">
          <StepFlow
            id="farmers"
            label="How it works: For Farmers"
            steps={FARMER_STEPS}
            statValue="R100"
            statNote="Minimum amount to start investing"
            introTitle="Simple steps to get your farm funded"
            introCopy="Get capital without endless paperwork. Our streamlined process connects you with investors in days, not months."
          />
        </div>
      </div>
    </section>
  );
}
