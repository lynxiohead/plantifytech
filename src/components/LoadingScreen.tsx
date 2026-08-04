"use client";

import { motion } from "framer-motion";
import LoadingVariant1 from "./loading/LoadingVariant1";
import LoadingVariant2 from "./loading/LoadingVariant2";
import LoadingVariant3 from "./loading/LoadingVariant3";
import { getLoadingVariant, type LoadingVariant } from "@/lib/loadingVariant";

const VARIANTS = {
  1: LoadingVariant1,
  2: LoadingVariant2,
  3: LoadingVariant3,
} as const;

export function LoadingScreenByVariant({
  variant,
}: {
  variant: LoadingVariant;
}) {
  const Screen = VARIANTS[variant];
  return <Screen />;
}

export default function LoadingScreen() {
  const variant = getLoadingVariant();

  return (
    <motion.div
      className="fixed inset-0 z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LoadingScreenByVariant variant={variant} />
    </motion.div>
  );
}
