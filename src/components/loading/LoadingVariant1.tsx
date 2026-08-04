"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ASSETS } from "@/lib/content";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export default function LoadingVariant1() {
  return (
    <div className="relative flex min-h-[100svh] flex-col items-center justify-center sky-bg px-6">
      <motion.div
        className="flex flex-col items-center gap-5"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative flex h-28 w-28 items-center justify-center rounded-[26px] bg-white shadow-[0_20px_60px_rgba(10,31,26,0.12)] sm:h-32 sm:w-32"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={ASSETS.logoIcon}
            alt={SITE_NAME}
            width={80}
            height={80}
            priority
            className="h-[4.5rem] w-[4.5rem] object-contain sm:h-20 sm:w-20"
          />
        </motion.div>

        <div className="text-center">
          <p className="display-title text-xl text-[var(--text)] sm:text-2xl">
            {SITE_NAME}
          </p>
          <p className="mt-2 max-w-xs text-sm text-[var(--text-muted)]">
            {SITE_TAGLINE}
          </p>
        </div>
      </motion.div>

      <div className="absolute inset-x-8 bottom-10 sm:inset-x-12 sm:bottom-12">
        <div className="mx-auto max-w-sm">
          <div className="mb-2 flex justify-between text-[11px] font-medium tracking-wide text-[var(--text-muted)] uppercase">
            <span>Loading</span>
            <motion.span
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              Please wait
            </motion.span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[var(--accent)]/10">
            <motion.div
              className="h-full rounded-full bg-[var(--accent)]"
              initial={{ width: "8%" }}
              animate={{ width: ["8%", "72%", "92%"] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
