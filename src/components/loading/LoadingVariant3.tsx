"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ASSETS } from "@/lib/content";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo";

export default function LoadingVariant3() {
  return (
    <div className="relative flex min-h-[100svh] flex-col items-center justify-center bg-white px-6">
      <motion.div
        className="flex w-full max-w-md flex-col items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-3">
          <Image
            src={ASSETS.logoIcon}
            alt=""
            aria-hidden
            width={56}
            height={56}
            priority
            className="h-14 w-14 object-contain"
          />
          <div>
            <p className="display-title text-[1.65rem] leading-none text-[var(--text)]">
              Plantify
            </p>
            <p className="display-title mt-0.5 text-[1.65rem] leading-none text-[var(--accent)]">
              Tech
            </p>
          </div>
        </div>

        <div className="w-full max-w-xs text-center">
          <p className="text-sm text-[var(--text-muted)]">{SITE_TAGLINE}</p>
          <div className="mt-5 flex items-center justify-center gap-1.5">
            {[0, 1, 2, 3].map((dot) => (
              <motion.span
                key={dot}
                className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  delay: dot * 0.12,
                }}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="glass-nav w-full rounded-[24px] px-5 py-4 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
            {SITE_NAME}
          </p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Agricultural investment, made simple
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
