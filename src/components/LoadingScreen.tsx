"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LOGO_SRC =
  "https://framerusercontent.com/images/edOaf9VeW0UmbMZ5qbIh9nT4L8.png";

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
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-[0_20px_60px_rgba(15,20,25,0.12)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl border border-black/5"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{
              borderTopColor: "rgba(10,10,10,0.35)",
              borderRightColor: "transparent",
              borderBottomColor: "transparent",
              borderLeftColor: "transparent",
            }}
          />
          <Image
            src={LOGO_SRC}
            alt="PlantifyTech"
            width={56}
            height={56}
            priority
            className="relative z-10 h-14 w-14 object-contain"
          />
        </motion.div>
        <motion.p
          className="text-sm font-medium tracking-[0.2em] text-[var(--text-muted)] uppercase"
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
