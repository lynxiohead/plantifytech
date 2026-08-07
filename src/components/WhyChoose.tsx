"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import TypingRotator from "./TypingRotator";
import { SectionTitle } from "./ui";
import { WHY_CARDS, WHY_TYPING_PHRASES, ASSETS } from "@/lib/content";

export default function WhyChoose() {
  const partners = [...ASSETS.partners, ...ASSETS.partners];

  return (
    <section className="section-pad bg-[var(--bg-soft)]">
      <div className="container">
        <ScrollReveal>
          <SectionTitle>Why choose Plantify Tech?</SectionTitle>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="why-typing-block">
            <p className="why-typing-static">We provide</p>
            <p className="why-typing-dynamic">
              <TypingRotator phrases={WHY_TYPING_PHRASES} />
            </p>
          </div>
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

          <div className="relative mt-8 overflow-hidden md:hidden">
            <div className="partners-marquee-track gap-10 px-2">
              {partners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="inline-flex shrink-0 items-center px-3"
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={280}
                    height={104}
                    className="h-20 w-auto max-w-[260px] object-contain sm:h-24 sm:max-w-[300px]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 hidden flex-wrap items-center justify-center gap-x-10 gap-y-6 md:flex">
            {ASSETS.partners.map((partner) => (
              <Image
                key={partner.name}
                src={partner.src}
                alt={partner.name}
                width={200}
                height={72}
                className="h-12 w-auto max-w-[160px] object-contain transition-transform duration-300 hover:scale-105 md:h-14 md:max-w-[180px]"
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );

}