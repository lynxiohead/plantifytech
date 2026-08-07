"use client";

import worldMap from "@svg-maps/world";
import ScrollReveal from "./ScrollReveal";
import { SectionTitle } from "./ui";
import { WORLD_PRESENCE_COUNTRIES } from "@/lib/content";

const highlightedIds = new Set(WORLD_PRESENCE_COUNTRIES.map((country) => country.id));

export default function WorldPresenceMap() {
  return (
    <section className="section-pad bg-white">
      <div className="container">
        <ScrollReveal>
          <p className="text-center text-[12px] font-semibold tracking-[0.16em] text-[var(--text-soft)] uppercase">
            Global reach
          </p>
          <SectionTitle className="mt-3">Countries that know us</SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[var(--text-muted)] md:text-base">
            Plantify Tech is building recognition across Africa, Asia, the Americas, and
            Europe — connecting farmers and investors worldwide.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="world-map-panel mt-10">
            <svg
              viewBox={worldMap.viewBox}
              className="world-map-svg"
              role="img"
              aria-label="World map highlighting countries where Plantify Tech is known"
            >
              {worldMap.locations.map((location: { id: string; name: string; path: string }) => {
                const isHighlighted = highlightedIds.has(location.id);

                return (
                  <path
                    key={location.id}
                    id={location.id}
                    d={location.path}
                    className={isHighlighted ? "world-map-country is-highlighted" : "world-map-country"}
                  >
                    <title>{location.name}</title>
                  </path>
                );
              })}
            </svg>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
            {WORLD_PRESENCE_COUNTRIES.map((country) => (
              <span key={country.id} className="world-map-legend-pill">
                {country.name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
