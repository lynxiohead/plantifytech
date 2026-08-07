"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { PillButton, SectionCopy, SectionEyebrow, SectionTitle } from "./ui";
import WorldPresenceMap from "@/components/WorldPresenceMap";
import { ABOUT_MISSION, ABOUT_VALUES, FOUNDERS, ASSETS } from "@/lib/content";

export default function AboutSections() {
  return (
    <>
      <section className="section-pad bg-white">
        <div className="container text-center">
          <ScrollReveal>
            <SectionEyebrow>About Plantify Tech</SectionEyebrow>
            <SectionTitle className="mt-4">
              Growing farms, communities, and returns together
            </SectionTitle>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-soft)]">
        <div className="container grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <ScrollReveal>
            <h2 className="display-title text-[clamp(1.9rem,3.8vw,2.8rem)]">Our mission</h2>
            <SectionCopy align="left" className="mx-0 mt-4 max-w-xl">
              {ABOUT_MISSION}
            </SectionCopy>
            <div className="mt-8">
              <PillButton href="/investors" label="Explore" variant="green" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="about-mission-media relative min-h-[280px] overflow-hidden rounded-[var(--radius-xl)] md:min-h-[360px]">
              <Image
                src={ASSETS.slides[4]}
                alt="Plantify Tech mission"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container">
          <ScrollReveal>
            <SectionTitle>Our values</SectionTitle>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {ABOUT_VALUES.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.08}>
                <article className="about-value-card card-soft h-full p-6 md:p-7">
                  <h3 className="display-title text-xl md:text-2xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {value.body}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-soft)]">
        <div className="container">
          <ScrollReveal>
            <p className="text-center text-[12px] font-semibold tracking-[0.16em] text-[var(--text-soft)] uppercase">
              Our experts
            </p>
            <SectionTitle className="mt-3">Meet our team</SectionTitle>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FOUNDERS.map((founder, index) => (
              <ScrollReveal key={founder.name} delay={index * 0.08}>
                <article className="about-founder-card card-soft overflow-hidden">
                  <div className="relative aspect-[4/4.5] w-full">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 360px"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] font-semibold tracking-[0.16em] text-[var(--accent)] uppercase">
                      {founder.badge}
                    </p>
                    <h3 className="display-title mt-2 text-xl">{founder.name}</h3>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{founder.role}</p>
                    <Link
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm font-medium text-[var(--accent)] hover:underline"
                    >
                      View Profile
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WorldPresenceMap />
    </>
  );
}
