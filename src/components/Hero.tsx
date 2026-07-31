"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";

const HERO_IMG =
  "https://framerusercontent.com/images/5GPSDrKF1936GiTqGLs1pJuB8.png";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center sky-bg pt-28 pb-16">
      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
          <motion.h1
            className="display-title text-[clamp(2.5rem,6vw,4.5rem)] text-[var(--text)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Invest in farms.
            <br />
            Empower farmers.
            <br />
            Grow returns.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--text-muted)] md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            Plantify Tech connects farmers who need funding with everyday people
            who want to invest in real agriculture. Power to the People.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link href="/#investors" className="btn-pill btn-pill-dark text-sm md:text-base">
              I&apos;m an investor
              <span className="btn-arrow">
                <IoArrowForward size={14} />
              </span>
            </Link>
            <Link href="/#farmers" className="btn-pill btn-pill-light text-sm md:text-base">
              I&apos;m a farmer
              <span className="btn-arrow">
                <IoArrowForward size={14} />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <div className="card-soft relative overflow-hidden p-6 md:p-8">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#f6d9a8]/50 blur-2xl" />
            <div className="absolute -bottom-10 -left-6 h-36 w-36 rounded-full bg-[#d7ead8]/70 blur-2xl" />
            <Image
              src={HERO_IMG}
              alt="Plantify mobile app preview"
              width={407}
              height={372}
              className="relative z-10 mx-auto h-auto w-full max-w-[320px] object-contain md:max-w-[380px]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
