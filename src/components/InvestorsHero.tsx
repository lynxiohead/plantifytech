"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/content";
import { PillButton } from "./ui";
import { IoShieldCheckmark, IoTrendingUp } from "react-icons/io5";

export default function InvestorsHero() {
  return (
    <section className="hero-sky relative flex min-h-[92svh] items-center pt-28 pb-16 md:pb-20">
      <div
        className="hero-bg-layer"
        style={{
          backgroundImage: `url(${ASSETS.hero.images[0]})`,
          opacity: 0.15,
        }}
      />
      <div className="hero-bg-overlay" />

      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="mx-auto flex max-w-xl flex-col items-start pt-8 text-left md:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/15 bg-white/70 px-4 py-1.5 text-[12px] font-semibold tracking-[0.12em] text-[var(--accent)] uppercase backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-light)]" />
            Invest In Real Agriculture From R100
          </motion.div>

          <motion.h1
            className="display-title text-[clamp(2.6rem,6vw,4.5rem)] text-[var(--text)] leading-[1.05]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Real Farms.
            <br />
            Real Impact.
            <br />
            Real Returns.
          </motion.h1>

          <motion.p
            className="body-copy mt-6 max-w-md text-[16px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
          >
            Diversify your portfolio with inflation-resilient agricultural assets across Southern Africa. Track real-time farm growth with AI-powered insights and earn returns at harvest.
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
            <PillButton href="/contact" label="Start Investing" variant="dark" />
            <PillButton href="#projects" label="Explore Projects" variant="light" />
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-3 gap-4 border-t border-black/5 pt-6 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <div>
              <p className="display-title text-xl text-[var(--text)] md:text-2xl">
                R100
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Minimum investment
              </p>
            </div>
            <div>
              <p className="display-title text-xl text-[var(--text)] md:text-2xl">
                100%
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Asset-backed security
              </p>
            </div>
            <div>
              <p className="display-title text-xl text-[var(--text)] md:text-2xl">
                AI-Tracked
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">
                Live farm insights
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mockup-stage mx-auto w-full max-w-[480px] lg:max-w-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto max-w-[380px]">
            <div className="media-frame mockup-shell mockup-shell-primary">
              <Image
                src={ASSETS.mockups[0]}
                alt="PlantifyTech investor app dashboard"
                width={520}
                height={640}
                priority
                className="media-image media-image-contain mx-auto max-w-[340px] md:max-w-[360px]"
              />
            </div>

            {/* Floating stat pill 1 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-3 sm:-left-6 z-20 flex items-center gap-3 rounded-2xl border border-black/5 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f4ea] text-[var(--accent)]">
                <IoShieldCheckmark size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold text-[var(--text)]">
                  Vetted Farm Assets
                </p>
                <p className="text-[11px] text-[var(--text-muted)]">
                  Strict Southern Africa audits
                </p>
              </div>
            </motion.div>

            {/* Floating stat pill 2 */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-3 sm:-right-4 z-20 flex items-center gap-2.5 rounded-2xl border border-black/5 bg-white/95 px-4 py-2.5 shadow-xl backdrop-blur-md"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6f4ea] text-[var(--accent)]">
                <IoTrendingUp size={18} />
              </span>
              <p className="text-xs font-semibold text-[var(--text)]">
                Real-time AI Growth
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
