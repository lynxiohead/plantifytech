"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { SectionEyebrow, SectionTitle } from "./ui";
import { ASSETS } from "@/lib/content";

export default function ShowcaseGallery() {
  const items = [...ASSETS.slides, ...ASSETS.slides];

  return (
    <section className="overflow-hidden bg-white py-16 md:py-20">
      <div className="container mb-10">
        <ScrollReveal>
          <SectionEyebrow>Real farms. Real impact.</SectionEyebrow>
          <SectionTitle className="mt-3">Agriculture in motion</SectionTitle>
        </ScrollReveal>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="showcase-track px-4">
          {items.map((slide, index) => (
            <div key={`${slide}-${index}`} className="showcase-item">
              <Image
                src={slide}
                alt={`Agriculture showcase ${(index % ASSETS.slides.length) + 1}`}
                fill
                className="object-cover rounded-[var(--radius-media-inner)]"
                sizes="320px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
