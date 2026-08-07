"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import ScrollReveal from "./ScrollReveal";
import { SectionTitle } from "./ui";
import { AUDIENCES } from "@/lib/content";

export default function AudienceSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToSlide = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    let left: number;

    if (index === 0) {
      left = 0;
    } else if (index === AUDIENCES.length - 1) {
      left = maxScroll;
    } else {
      left = slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2;
    }

    track.scrollTo({ left: Math.min(maxScroll, Math.max(0, left)), behavior: "smooth" });
    setActive(index);
  }, []);

  const goPrev = useCallback(() => {
    scrollToSlide(Math.max(0, active - 1));
  }, [active, scrollToSlide]);

  const goNext = useCallback(() => {
    scrollToSlide(Math.min(AUDIENCES.length - 1, active + 1));
  }, [active, scrollToSlide]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(index)) setActive(index);
        });
      },
      { root: track, threshold: 0.6 },
    );

    Array.from(track.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="audience-section section-pad bg-[var(--bg-soft)]">
      <div className="container">
        <ScrollReveal>
          <SectionTitle>Who this platform is built for</SectionTitle>
        </ScrollReveal>
      </div>

      <div
        ref={trackRef}
        className="audience-carousel-track mt-10"
        data-lenis-prevent
        role="region"
        aria-label="Who this platform is built for"
      >
        {AUDIENCES.map((item, index) => (
          <article
            key={item.title}
            data-index={index}
            className={`audience-card audience-carousel-card ${active === index ? "is-active" : ""}`}
            onClick={() => scrollToSlide(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                scrollToSlide(index);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <div className="audience-photo relative h-[220px] w-full md:h-[240px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 85vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="p-6 md:p-7">
              <h3 className="display-title text-[1.35rem] md:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                {item.body}
              </p>
              <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--accent)]/10 bg-[var(--bg-soft)] p-4">
                <p className="display-title text-base text-[var(--accent)]">{item.badge}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{item.note}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="container mt-6">
        <div className="audience-carousel-controls flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            className="audience-carousel-arrow"
            aria-label="Previous slide"
            disabled={active === 0}
            onClick={goPrev}
          >
            <IoChevronBack size={20} aria-hidden="true" />
          </button>

          <div className="flex justify-center gap-2">
            {AUDIENCES.map((item, index) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Show ${item.title}`}
                aria-current={active === index}
                className={`audience-carousel-dot ${active === index ? "is-active" : ""}`}
                onClick={() => scrollToSlide(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="audience-carousel-arrow"
            aria-label="Next slide"
            disabled={active === AUDIENCES.length - 1}
            onClick={goNext}
          >
            <IoChevronForward size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
