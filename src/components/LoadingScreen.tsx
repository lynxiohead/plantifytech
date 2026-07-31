"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ASSETS } from "@/lib/content";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center sky-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative flex h-28 w-28 items-center justify-center rounded-[28px] bg-white shadow-[0_24px_80px_rgba(10,31,26,0.14)]"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 rounded-[28px] border-2 border-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              borderTopColor: "rgba(31, 107, 74, 0.5)",
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
              borderLeftColor: "transparent",
            }}
          />
          <Image
            src={ASSETS.logoIcon}
            alt="PlantifyTech"
            width={72}
            height={72}
            priority
            className="relative z-10 h-[72px] w-[72px] object-contain"
          />
        </motion.div>
        <motion.p
          className="text-sm font-semibold tracking-[0.22em] text-[var(--text-muted)] uppercase"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          PlantifyTech
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
