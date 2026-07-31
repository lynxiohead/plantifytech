"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { SectionCopy, SectionTitle } from "./ui";
import { AUDIENCES } from "@/lib/content";

export default function AudienceSection() {
  return (
    <section id="about" className="section-pad bg-[var(--bg-soft)]">
      <div className="container">
        <ScrollReveal>
          <SectionTitle>Who this platform is built for</SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <SectionCopy className="mt-4">
            From first-time investors to seasoned farmers — PlantifyTech is built
            for everyone who believes in growing real returns from real agriculture.
          </SectionCopy>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {AUDIENCES.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <article className="audience-card">
                <div className="audience-photo relative h-[220px] w-full md:h-[240px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-[var(--radius-media-inner)]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="display-title text-[1.35rem] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.body}
                  </p>
                  <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--accent)]/10 bg-[var(--bg-soft)] p-4">
                    <p className="display-title text-base text-[var(--accent)]">
                      {item.badge}
                    </p>
                    <p className="mt-1 text-sm text-[var(--text-muted)]">{item.note}</p>
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
