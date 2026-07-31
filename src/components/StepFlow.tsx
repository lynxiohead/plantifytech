"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

type Step = {
  id: string;
  title: string;
  body: string;
  image: string;
  imageFit?: "cover" | "contain";
};

type StepFlowProps = {
  id?: string;
  label: string;
  steps: Step[];
  statValue?: string;
  statNote?: string;
  introTitle?: string;
  introCopy?: string;
};

function StepImage({ step }: { step: Step }) {
  return (
    <div className="card-soft media-panel overflow-hidden bg-gradient-to-br from-[var(--bg-soft)] to-white">
      <div className="media-frame media-frame-fill relative flex min-h-[240px] items-center justify-center p-4 sm:min-h-[280px] md:min-h-[340px] md:p-5">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className={`media-image ${step.imageFit === "contain" ? "object-contain p-2" : "media-image-cover"}`}
          sizes="(max-width: 768px) 100vw, 520px"
        />
      </div>
    </div>
  );
}

export default function StepFlow({
  id,
  label,
  steps,
  statValue,
  statNote,
  introTitle,
  introCopy,
}: StepFlowProps) {
  const [active, setActive] = useState(0);
  const mobilePanelRefs = useRef<(HTMLElement | null)[]>([]);
  const desktopPanelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goToStep = (index: number) => {
    setActive(index);
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const target = isDesktop
      ? desktopPanelRefs.current[index]
      : mobilePanelRefs.current[index];
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    let observers: IntersectionObserver[] = [];

    const bindObservers = () => {
      observers.forEach((observer) => observer.disconnect());
      observers = [];

      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const nodes = isDesktop ? desktopPanelRefs.current : mobilePanelRefs.current;

      nodes.forEach((node, index) => {
        if (!node) return;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActive(index);
          },
          {
            root: null,
            rootMargin: isDesktop ? "-28% 0px -28% 0px" : "-40% 0px -40% 0px",
            threshold: 0.15,
          },
        );
        observer.observe(node);
        observers.push(observer);
      });
    };

    bindObservers();
    const media = window.matchMedia("(min-width: 1024px)");
    media.addEventListener("change", bindObservers);

    return () => {
      media.removeEventListener("change", bindObservers);
      observers.forEach((observer) => observer.disconnect());
    };
  }, [steps.length]);

  const current = steps[active] ?? steps[0];

  const stepTabs = (
    <div className="flex flex-wrap gap-2">
      {steps.map((step, index) => (
        <button
          key={step.id}
          type="button"
          className={`step-tab ${active === index ? "active" : ""}`}
          onClick={() => goToStep(index)}
        >
          Step {step.id}
        </button>
      ))}
    </div>
  );

  const stepCopy = (
    <AnimatePresence mode="wait">
      <motion.div
        key={current.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="card-soft p-6 md:p-8"
      >
        <p className="text-[12px] font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
          Step {current.id}
        </p>
        <h3 className="display-title mt-3 text-[clamp(1.6rem,3vw,2.2rem)]">
          {current.title}
        </h3>
        <p className="body-copy mt-4">{current.body}</p>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section id={id} className="mt-20">
      {introTitle && (
        <ScrollReveal>
          <h2 className="display-title max-w-2xl text-[clamp(1.9rem,3.8vw,2.8rem)]">
            {introTitle}
          </h2>
          {introCopy && <p className="body-copy mt-4 max-w-2xl">{introCopy}</p>}
        </ScrollReveal>
      )}

      <ScrollReveal delay={0.08}>
        <p className="mt-8 text-[13px] font-semibold tracking-[0.12em] text-[var(--accent)] uppercase">
          {label}
        </p>
      </ScrollReveal>

      {/* Mobile: sticky step tabs + scrollable step panels */}
      <div className="mt-6 lg:hidden">
        <div className="sticky top-[5.25rem] z-20 -mx-1 border-b border-black/5 bg-white/95 px-1 py-3 backdrop-blur-lg">
          {stepTabs}
        </div>

        <div className="mt-6 space-y-10">
          {steps.map((step, index) => (
            <article
              key={`mobile-step-${step.id}`}
              ref={(el) => {
                mobilePanelRefs.current[index] = el;
              }}
              className="scroll-mt-36 space-y-4"
            >
              <StepImage step={step} />
              <div className="card-soft p-6">
                <p className="text-[12px] font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
                  Step {step.id}
                </p>
                <h3 className="display-title mt-3 text-[clamp(1.45rem,4vw,1.85rem)]">
                  {step.title}
                </h3>
                <p className="body-copy mt-3">{step.body}</p>
              </div>
            </article>
          ))}
        </div>

        {statValue && (
          <div className="stat-card mt-8 p-5">
            <p className="display-title text-3xl text-[var(--accent)]">{statValue}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{statNote}</p>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="mt-8 hidden gap-8 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <ScrollReveal delay={0.1}>
            <div className="mb-6">{stepTabs}</div>
          </ScrollReveal>

          {stepCopy}

          {statValue && (
            <ScrollReveal delay={0.14}>
              <div className="stat-card mt-5 p-5">
                <p className="display-title text-3xl text-[var(--accent)]">{statValue}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{statNote}</p>
              </div>
            </ScrollReveal>
          )}
        </div>

        <div className="space-y-24 lg:space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => {
                desktopPanelRefs.current[index] = el;
              }}
              className="min-h-[42vh] lg:min-h-[52vh]"
            >
              <ScrollReveal delay={index * 0.08}>
                <StepImage step={step} />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
