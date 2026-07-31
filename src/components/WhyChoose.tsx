"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { SectionTitle } from "./ui";
import { WHY_CARDS, ASSETS } from "@/lib/content";

export default function WhyChoose() {
  return (
    <section className="section-pad bg-[var(--bg-soft)]">
      <div className="container">
        <ScrollReveal>
          <SectionTitle>Why choose PlantifyTech?</SectionTitle>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {WHY_CARDS.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 0.1}>
              <article
                className="why-card"
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="text-[11px] font-semibold tracking-[0.18em] text-white/80 uppercase">
                  {card.label}
                </p>
                <h3 className="display-title mt-3 text-[clamp(1.6rem,3vw,2.2rem)] text-white uppercase">
                  {card.title}
                </h3>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <p className="mt-14 text-center text-[12px] font-semibold tracking-[0.16em] text-[var(--text-soft)] uppercase">
            Supported and Recognized By
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {ASSETS.partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.src}
                alt={partner.name}
                width={140}
                height={48}
                className="h-9 w-auto max-w-[120px] object-contain opacity-75 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:h-11 md:max-w-[140px]"
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
