"use client";

import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    label: "WE PROVIDE",
    title: "Capital for farmers",
  },
  {
    label: "WE PROVIDE",
    title: "Exposure for farm projects",
  },
];

export default function WhyChoose() {
  return (
    <section className="section-pad bg-[var(--bg-soft)]">
      <div className="container">
        <ScrollReveal>
          <h2 className="display-title text-center text-[clamp(2rem,4vw,3rem)]">
            Why choose PlantifyTech?
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={index * 0.1}>
              <article className="card-soft min-h-[220px] p-8">
                <p className="text-xs tracking-[0.18em] text-[var(--text-soft)] uppercase">
                  {card.label}
                </p>
                <h3 className="display-title mt-4 text-2xl md:text-3xl">
                  {card.title}
                </h3>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <p className="mt-12 text-center text-sm tracking-[0.14em] text-[var(--text-soft)] uppercase">
            Supported and Recognized By
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 opacity-70">
            {["Partner One", "Partner Two", "Partner Three"].map((name) => (
              <div
                key={name}
                className="rounded-xl border border-black/5 bg-white px-6 py-3 text-sm text-[var(--text-muted)]"
              >
                {name}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
