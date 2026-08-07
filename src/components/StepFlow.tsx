"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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
  stepDurationMs?: number;
};

const DEFAULT_STEP_MS = 5200;

function StepImage({ step }: { step: Step }) {
  return (
    <div className="step-image-panel">
      <div className="step-image-frame media-frame media-frame-fill relative flex min-h-[260px] items-center justify-center bg-white p-4 sm:min-h-[300px] md:min-h-[400px]">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className={`media-image ${step.imageFit === "contain" ? "object-contain p-4" : "object-cover"}`}
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
  stepDurationMs = DEFAULT_STEP_MS,
}: StepFlowProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const elapsedRef = useRef(0);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);

  const goToStep = useCallback((index: number) => {
    elapsedRef.current = 0;
    setActive(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    elapsedRef.current = 0;
    setProgress(0);
  }, [active]);

  useEffect(() => {
    if (!inView) return;

    const tickMs = 50;

    const timer = window.setInterval(() => {
      elapsedRef.current += tickMs;
      const next = elapsedRef.current / stepDurationMs;

      if (next >= 1) {
        elapsedRef.current = 0;
        setProgress(0);
        setActive((step) => (step + 1) % steps.length);
        return;
      }

      setProgress(next);
    }, tickMs);

    return () => window.clearInterval(timer);
  }, [inView, active, steps.length, stepDurationMs]);

  const current = steps[active] ?? steps[0];

  return (
    <section id={id} ref={sectionRef} className="step-flow-section mt-12 md:mt-20">
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

      <div className="step-flow-grid mt-8">
        <div className="step-flow-tabs flex flex-wrap gap-2">
          {steps.map((step, index) => {
            const isActive = index === active;
            const fill = isActive ? progress : 0;

            return (
              <button
                key={step.id}
                type="button"
                className={`step-tab-timer ${isActive ? "is-active" : ""}`}
                onClick={() => goToStep(index)}
                aria-current={isActive}
              >
                <span
                  className="step-tab-fill"
                  style={{ transform: `scaleX(${fill})` }}
                />
                <span className="step-tab-label step-tab-label-dark">Step {step.id}</span>
                <span
                  className="step-tab-label step-tab-label-light"
                  style={{ clipPath: `inset(0 ${100 - fill * 100}% 0 0)` }}
                >
                  Step {step.id}
                </span>
              </button>
            );
          })}
        </div>

        <div className="step-flow-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <StepImage step={current} />
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="step-flow-copy card-soft p-6 md:p-8"
          >
            <p className="text-[12px] font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
              Step {current.id}
            </p>
            <h3 className="display-title mt-3 text-[clamp(1.45rem,3.5vw,2rem)]">
              {current.title}
            </h3>
            <p className="body-copy mt-3">{current.body}</p>
          </motion.div>
        </AnimatePresence>

        {statValue && (
          <div className="step-flow-stat stat-card p-5 md:max-w-sm">
            <p className="display-title text-3xl text-[var(--accent)]">{statValue}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{statNote}</p>
          </div>
        )}
      </div>
    </section>
  );
}
