"use client";

import ScrollReveal from "./ScrollReveal";
import FlowSection from "./FlowSection";
import { IoShieldCheckmark, IoCash } from "react-icons/io5";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-white">
      <div className="container">
        <ScrollReveal>
          <p className="text-center text-sm font-medium tracking-[0.18em] text-[var(--text-soft)] uppercase">
            How does it work?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <h2 className="display-title mx-auto mt-4 max-w-3xl text-center text-[clamp(2rem,4vw,3rem)]">
            Start investing in minutes
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--text-muted)]">
            Browse vetted farm projects, invest any amount from R100, and track
            real growth with AI powered insights.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <ScrollReveal delay={0.1}>
            <div className="card-soft p-6">
              <IoShieldCheckmark size={28} className="text-[var(--text)]" />
              <h3 className="display-title mt-4 text-3xl">100%</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Secure, encrypted data protection
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <div className="card-soft p-6">
              <IoCash size={28} className="text-[var(--text)]" />
              <h3 className="display-title mt-4 text-3xl">R100</h3>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Minimum amount to start investing
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div id="investors" className="mt-20">
          <FlowSection
            label="How it works: For Investors"
            title="Browse farm projects"
            description="Explore vetted farming projects that need funding."
            steps={[
              {
                step: "Step 01",
                title: "Browse farm projects",
                body: "Explore vetted farming projects that need funding.",
              },
              {
                step: "Step 02",
                title: "Invest from R100",
                body: "Choose any amount from R100 and fund projects you believe in.",
              },
              {
                step: "Step 03",
                title: "Track and earn returns",
                body: "Monitor real-time growth with AI insights and receive returns at harvest.",
              },
            ]}
          />
        </div>

        <div id="farmers" className="mt-20">
          <ScrollReveal>
            <h2 className="display-title max-w-2xl text-[clamp(1.8rem,3.5vw,2.6rem)]">
              Simple steps to get your farm funded
            </h2>
            <p className="mt-4 max-w-2xl text-[var(--text-muted)]">
              Get capital without endless paperwork. Our streamlined process
              connects you with investors in days, not months.
            </p>
          </ScrollReveal>

          <FlowSection
            label="How it works: For Farmers"
            title="Create Your Profile"
            description="Set up your farm profile and upload project details. Tell investors about your farming goals and experience."
            steps={[
              {
                step: "Step 01",
                title: "Create your profile",
                body: "Set up your farm profile and upload project details.",
              },
              {
                step: "Step 02",
                title: "Launch your campaign",
                body: "Publish your funding goal and share your farming plan with investors.",
              },
              {
                step: "Step 03",
                title: "Receive funding and grow",
                body: "Get capital, grow your farm, and share returns with your investors.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
