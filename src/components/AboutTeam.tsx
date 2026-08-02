"use client";

import Image from "next/image";
import { FOUNDERS_TEAM } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function AboutTeam() {
  return (
    <section className="section-pad bg-[var(--bg-soft)]">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-[var(--line-strong)] bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] shadow-sm">
              Leadership
            </span>
            <h2 className="display-title mt-4 text-[clamp(2rem,4.5vw,3.25rem)] text-[var(--text)]">
              Meet the Founders
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
              A dedicated team of agronomists, technologists, and community builders committed to transforming African agricultural finance.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {FOUNDERS_TEAM.map((founder, idx) => (
            <ScrollReveal key={founder.name} delay={idx * 0.15}>
              <div className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--line)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent)] hover:shadow-xl">
                <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-lg)] bg-[var(--bg-soft)]">
                  <Image
                    src={founder.image}
                    alt={`${founder.name} - ${founder.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </div>

                <div className="mt-5 flex flex-col items-center text-center">
                  <h3 className="display-title text-2xl font-bold text-[var(--text)]">
                    {founder.name}
                  </h3>
                  <span className="mt-2 inline-block rounded-full bg-[var(--bg-soft)] px-3.5 py-1 text-xs font-semibold text-[var(--accent)] border border-[var(--line)]">
                    {founder.role}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
