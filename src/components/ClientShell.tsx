"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import { preloadSiteAssets, wait } from "@/lib/preloadAssets";

const MIN_LOAD_MS = 3800;
const MAX_LOAD_MS = 12000;

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function prepareSite() {
      const startedAt = Date.now();

      await Promise.race([
        preloadSiteAssets(),
        wait(MAX_LOAD_MS),
      ]);

      const elapsed = Date.now() - startedAt;
      if (elapsed < MIN_LOAD_MS) {
        await wait(MIN_LOAD_MS - elapsed);
      }

      if (!cancelled) {
        setLoading(false);
      }
    }

    prepareSite();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <div
        className={
          loading
            ? "pointer-events-none opacity-0"
            : "opacity-100 transition-opacity duration-700 ease-out"
        }
      >
        {children}
      </div>
    </>
  );
}
