"use client";

import ScrollReveal from "./ScrollReveal";
import { IoCheckmarkCircle } from "react-icons/io5";

const items = [
  "Beta open now",
  "Vetted farmers",
  "Real-time insights",
  "Secure and compliant",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-black/5 bg-white py-8">
      <div className="container flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {items.map((item, index) => (
          <ScrollReveal key={item} delay={index * 0.06}>
            <div className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <IoCheckmarkCircle size={18} className="text-[var(--text)]" />
              {item}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
