"use client";

import Image from "next/image";
import { ASSETS } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function AboutStory() {
  return (
    <section className="section-pad bg-white">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="inline-block rounded-full border border-[var(--line-strong)] bg-[var(--bg-soft)] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                Our Story
              </span>
              <h2 className="display-title mt-4 text-[clamp(2rem,4.5vw,3.25rem)] text-[var(--text)] leading-tight">
                Why We Built PlantifyTech
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                Across Southern Africa, small and mid-sized farmers produce the majority of regional food yet remain locked out of traditional banking. Lenders demand brick-and-mortar property deeds as collateral, ignoring fertile soils, farming experience, and proven harvest yields.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
                At the same time, everyday citizens seek inflation-resilient assets that grow in the real economy. Stocks and speculative assets often feel disconnected from community impact.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--line)] shadow-lg">
                <Image
                  src={ASSETS.illustrations.aboutStory}
                  alt="PlantifyTech logo and mission"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-white p-5 shadow-xl sm:block max-w-xs">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                  Regional Impact
                </p>
                <p className="mt-1 text-sm font-bold text-[var(--text)]">
                  Empowering farmers across Southern Africa with direct retail &amp; impact capital.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
