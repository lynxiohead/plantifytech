"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/content";
import { PillButton } from "./ui";

export default function Hero() {
  return (
    <section className="hero-framer">
      <div className="hero-framer-media">
        <Image
          src={ASSETS.hero.hero2}
          alt=""
          fill
          priority
          className="hero-framer-image"
          sizes="100vw"
        />
        <div className="hero-framer-overlay" aria-hidden="true" />
      </div>

      <div className="hero-framer-content">
        <div className="container flex w-full max-w-3xl flex-col items-center text-center">
          <div className="hero-framer-stack">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="hero-framer-logo"
            >
              <Image
                src={ASSETS.logoHero}
                alt="Plantify Tech"
                width={220}
                height={150}
                priority
                className="hero-framer-logo-image"
              />
            </motion.div>

            <motion.h1
              className="display-title hero-framer-title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              Invest in farms.
              <br />
              Empower farmers.
              <br />
              Grow returns.
            </motion.h1>

            <motion.p
              className="hero-framer-copy"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22 }}
            >
              Plantify Tech connects farmers who need funding with everyday people
              who want to invest in real agriculture.
              <br />
              <span className="font-semibold">Power to the People.</span>
            </motion.p>

            <motion.div
              className="hero-framer-actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.32 }}
            >
              <PillButton href="/investors" label="I'm an investor" variant="green" className="btn-pill-gloss--block" />
              <PillButton href="/farmers" label="I'm a farmer" variant="light" className="btn-pill-gloss--block" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
