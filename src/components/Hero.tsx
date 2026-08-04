"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ASSETS } from "@/lib/content";
import { PillButton } from "./ui";

function mockupAt(index: number, offset: number) {
  const mockups = ASSETS.mockups;
  return mockups[(index + offset + mockups.length) % mockups.length];
}

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);
  const [mockupIndex, setMockupIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setBgIndex((current) => (current + 1) % ASSETS.hero.images.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setMockupIndex((current) => (current + 1) % ASSETS.mockups.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero-sky relative flex min-h-[100svh] items-center pt-28 pb-16 md:pb-20">
      {ASSETS.hero.images.map((image, index) => (
        <div
          key={image}
          className="hero-bg-layer"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === bgIndex ? 1 : 0,
          }}
        />
      ))}
      <div className="hero-bg-overlay" />

      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="mx-auto flex max-w-xl flex-col items-start pt-10 text-left md:pt-14 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/15 bg-white/70 px-4 py-1.5 text-[12px] font-semibold tracking-[0.12em] text-[var(--accent)] uppercase backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-light)]" />
            Agri-fintech for Southern Africa
          </motion.div>

          <motion.h1
            className="display-title text-[clamp(2.75rem,6.5vw,4.85rem)] text-[var(--text)]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Invest in farms.
            <br />
            Empower farmers.
            <br />
            Grow returns.
          </motion.h1>

          <motion.p
            className="body-copy mt-6 max-w-md text-[16px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
          >
            Plantify Tech connects farmers who need funding with everyday people
            who want to invest in real agriculture.
            <br />
            <span className="font-semibold text-[var(--text)]">Power to the People.</span>
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.34 }}
          >
            <PillButton href="/investors" label="I'm an investor" variant="dark" />
            <PillButton href="/farmers" label="I'm a farmer" variant="light" />
          </motion.div>
        </div>

        <motion.div
          className="mockup-stage mx-auto w-full max-w-[480px] lg:max-w-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 mx-auto max-w-[380px]"
          >
            <div className="media-frame mockup-shell mockup-shell-primary">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mockupAt(mockupIndex, 0)}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.45 }}
                >
                  <Image
                    src={mockupAt(mockupIndex, 0)}
                    alt="PlantifyTech mobile app screen"
                    width={520}
                    height={640}
                    priority
                    className="media-image media-image-contain mx-auto max-w-[340px] md:max-w-[360px]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="mockup-secondary hidden md:block"
          >
            <div className="media-frame mockup-shell mockup-shell-secondary">
              <Image
                src={mockupAt(mockupIndex, 1)}
                alt="PlantifyTech app feature screen"
                width={280}
                height={560}
                className="media-image media-image-contain"
              />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="mockup-tertiary hidden lg:block"
          >
            <div className="media-frame mockup-shell mockup-shell-secondary">
              <Image
                src={mockupAt(mockupIndex, 2)}
                alt="PlantifyTech app dashboard screen"
                width={240}
                height={520}
                className="media-image media-image-contain"
              />
            </div>
          </motion.div>

          <div className="absolute -left-6 top-12 hidden h-28 w-28 rounded-full bg-[var(--accent-light)]/20 blur-3xl lg:block" />
          <div className="absolute -right-4 bottom-16 hidden h-36 w-36 rounded-full bg-[var(--gold)]/25 blur-3xl lg:block" />

          <div className="relative z-20 mt-6 flex flex-wrap items-center justify-center gap-2 px-2">
            {ASSETS.mockups.map((mockup, index) => (
              <button
                key={mockup}
                type="button"
                aria-label={`Show app screen ${index + 1}`}
                onClick={() => setMockupIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === mockupIndex
                    ? "w-7 bg-[var(--accent)]"
                    : "w-2.5 bg-[var(--accent)]/25 hover:bg-[var(--accent)]/45"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
