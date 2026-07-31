"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { ASSETS } from "@/lib/content";

export default function RegionsStrip() {
  return (
    <section className="border-y border-black/5 bg-white py-10">
      <div className="container">
        <ScrollReveal>
          <p className="text-center text-[12px] font-semibold tracking-[0.16em] text-[var(--text-soft)] uppercase">
            Serving farmers and investors across Southern Africa
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {ASSETS.countries.map((country) => (
              <div key={country.name} className="region-pill">
                <Image
                  src={country.src}
                  alt={`${country.name} flag`}
                  width={28}
                  height={20}
                  className="h-5 w-7 rounded-sm object-cover"
                />
                {country.name}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
