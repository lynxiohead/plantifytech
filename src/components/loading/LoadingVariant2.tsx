"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ASSETS } from "@/lib/content";

export default function LoadingVariant2() {
  return (
    <div className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#f4faf6] px-6">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#1f6b4a]/25 via-[#8bc4a0]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#174f38]/10 to-transparent" />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3"
        >
          <Image
            src={ASSETS.logoIcon}
            alt=""
            aria-hidden
            width={64}
            height={64}
            priority
            className="h-16 w-16 object-contain"
          />
          <div>
            <p className="display-title text-[2rem] leading-none text-[var(--text)]">
              Plantify
            </p>
            <p className="display-title text-[2rem] leading-none text-[var(--accent)]">
              Tech
            </p>
          </div>
        </motion.div>

        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-[var(--accent)] uppercase">
            Preparing your experience
          </p>
          <p className="mt-2 text-[15px] text-[var(--text-muted)]">
            Connecting farms, investors, and real returns
          </p>
        </div>

        <div className="flex items-center gap-2 pt-2">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              className="h-2 w-2 rounded-full bg-[var(--accent)]"
              animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.1, 0.85] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                delay: dot * 0.18,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
