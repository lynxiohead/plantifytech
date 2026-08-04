"use client";

import ScrollReveal from "./ScrollReveal";
import { PillButton } from "./ui";
import { FAQ_GROUPS } from "@/lib/faqContent";

export function HelpHero() {
  return (
    <section className="section-pad bg-white pb-0">
      <div className="container max-w-3xl text-center">
        <ScrollReveal>
          <h1 className="display-title text-[clamp(2.2rem,4vw,3.4rem)]">
            Frequently asked questions
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="mt-4 text-(--text-muted)">
            Find quick answers to common questions about the platform,
            pricing, and security.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function FaqGroups() {
  return (
    <section className="section-pad bg-white">
      <div className="container max-w-3xl space-y-12">
        {FAQ_GROUPS.map((group, groupIndex) => (
          <div key={group.title}>
            <ScrollReveal delay={groupIndex * 0.05}>
              <h2 className="display-title text-xl">{group.title}</h2>
            </ScrollReveal>
            <div className="mt-5 space-y-4">
              {group.items.map((item, index) => (
                <ScrollReveal key={item.q} delay={index * 0.06}>
                  <details className="card-soft group p-5">
                    <summary className="display-title cursor-pointer list-none text-lg">
                      {item.q}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-(--text-muted)">
                      {item.a}
                    </p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}

        <ScrollReveal>
          <div className="card-soft flex flex-col items-center gap-4 p-8 text-center">
            <h3 className="display-title text-xl">Still have questions?</h3>
            <p className="text-(--text-muted)">
              Reach out, and our team will guide you.
            </p>
            <PillButton href="/contact" label="Talk to our team" variant="dark" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
