"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/content";
import { PillButton } from "./ui";

export default function FarmersHero() {
  return (
    <section className="hero-sky relative flex min-h-[92svh] items-center pt-28 pb-16 md:pb-20">
      <div
        className="hero-bg-layer"
        style={{
          backgroundImage: `url(${ASSETS.hero.images[1]})`,
          opacity: 0.15,
        }}
      />
      <div className="hero-bg-overlay" />

      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="mx-auto flex max-w-xl flex-col items-start pt-8 text-left md:pt-12">
          <motion.h1
            className="display-title text-[clamp(2.6rem,6vw,4.5rem)] text-[var(--text)] leading-[1.05]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Grow Your Farm.
            <br />
            Without Banking
            <br />
            Barriers.
          </motion.h1>

          <motion.p
            className="body-copy mt-6 max-w-md text-[16px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
          >
            PlantifyTech connects ambitious Southern African farmers directly with
            everyday and impact investors. Get vetted, get funded, and scale your
            harvest without traditional property collateral.
            <br />
            <span className="font-semibold text-[var(--text)]">
              Power to the People.
            </span>
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.34 }}
          >
            <PillButton href="#apply" label="Apply for Funding" variant="dark" />
            <PillButton href="#eligibility" label="Check Eligibility" variant="light" />
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-3 gap-4 border-t border-black/5 pt-6 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <div>
              <p className="display-title text-xl text-[var(--text)] md:text-2xl">
                0%
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Collateral required
              </p>
            </div>
            <div>
              <p className="display-title text-xl text-[var(--text)] md:text-2xl">
                5-7 Days
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Vetting &amp; launch
              </p>
            </div>
            <div>
              <p className="display-title text-xl text-[var(--text)] md:text-2xl">
                Harvest
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Aligned repayments
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mockup-stage mx-auto w-full max-w-[560px] lg:max-w-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto max-w-[520px]">
            <div className="card-soft overflow-hidden p-3.5 bg-gradient-to-br from-[var(--bg-soft)] to-white shadow-[0_32px_80px_rgba(10,31,26,0.12)] rounded-[var(--radius-xl)]">
              <div className="relative h-[400px] w-full sm:h-[500px] overflow-hidden rounded-[var(--radius-lg)]">
                <Image
                  src="/assets/mockups/farmer-hero-mockup.jpg"
                  alt="PlantifyTech farmer app mockup on grass"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
