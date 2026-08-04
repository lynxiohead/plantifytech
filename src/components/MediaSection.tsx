"use client";

import ScrollReveal from "./ScrollReveal";
import { SectionCopy, SectionTitle } from "./ui";
import { ASSETS } from "@/lib/content";

export default function MediaSection() {
  return (
    <section className="section-pad bg-[var(--bg-soft)]">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal>
          <p className="text-[13px] font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
            See Plantify Tech in action
          </p>
          <SectionTitle align="left" className="mt-3">
            Power to the people, on the ground
          </SectionTitle>
          <SectionCopy className="mx-0 mt-4 max-w-lg text-left">
            Watch how Plantify Tech is connecting communities, farmers, and
            investors to grow a more inclusive agricultural economy.
          </SectionCopy>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="video-frame aspect-video w-full">
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={ASSETS.hero.primary}
            >
              <source src={ASSETS.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
