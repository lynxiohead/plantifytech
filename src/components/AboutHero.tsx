"use client";

import { motion } from "framer-motion";
import { ASSETS } from "@/lib/content";
import { PillButton } from "./ui";

export default function AboutHero() {
  return (
    <section className="hero-sky relative flex min-h-[85svh] items-center overflow-hidden pt-32 pb-20 md:pb-28">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={ASSETS.hero.images[0]}
        className="absolute inset-0 z-[-2] h-full w-full object-cover"
      >
        <source src={ASSETS.video2 || "/assets/VIDEOS/video2.mp4"} type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-white/35 via-white/50 to-white/95" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--accent)] shadow-sm backdrop-blur-md"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission &amp; Vision
          </motion.div>

          <motion.h1
            className="display-title text-[clamp(2.5rem,6.5vw,4.5rem)] text-[var(--text)] leading-[1.08]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Power to the People.
            <br />
            <span className="text-[var(--accent)]">Capital to the Fields.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
          >
            We are bridging the gap between ambitious Southern African farmers and everyday investors — replacing exclusionary bank loans with an inflation-resilient, community-backed agricultural economy.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.34 }}
          >
            <PillButton href="/users/farmers" label="For Farmers" variant="dark" />
            <PillButton href="/contact" label="Contact Our Team" variant="light" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
