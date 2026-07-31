"use client";

import ScrollReveal from "./ScrollReveal";

type Step = {
  step: string;
  title: string;
  body: string;
};

type FlowSectionProps = {
  label: string;
  title: string;
  description: string;
  steps: Step[];
};

export default function FlowSection({
  label,
  title,
  description,
  steps,
}: FlowSectionProps) {
  return (
    <div className="mt-10">
      <ScrollReveal>
        <p className="text-sm font-medium tracking-[0.14em] text-[var(--text-soft)] uppercase">
          {label}
        </p>
      </ScrollReveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal delay={0.08}>
          <div className="card-soft p-8">
            <p className="text-xs tracking-[0.16em] text-[var(--text-soft)] uppercase">
              {steps[0]?.step}
            </p>
            <h3 className="display-title mt-3 text-2xl md:text-3xl">{title}</h3>
            <p className="mt-4 text-[var(--text-muted)]">{description}</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4">
          {steps.map((item, index) => (
            <ScrollReveal key={item.step} delay={0.12 + index * 0.1}>
              <div className="rounded-2xl border border-black/5 bg-[var(--bg-soft)] p-5">
                <p className="text-xs tracking-[0.16em] text-[var(--text-soft)] uppercase">
                  {item.step}
                </p>
                <h4 className="display-title mt-2 text-lg">{item.title}</h4>
                <p className="mt-2 text-sm text-[var(--text-muted)]">{item.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
