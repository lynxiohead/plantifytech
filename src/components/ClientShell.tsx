"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";
import { preloadSiteAssets, wait } from "@/lib/preloadAssets";

const MIN_LOAD_MS = 3800;
const MAX_LOAD_MS = 12000;

function isPreviewRoute(pathname: string) {
  return pathname.startsWith("/preview");
}

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const skipLoader = isPreviewRoute(pathname);
  const [loading, setLoading] = useState(!skipLoader);

  useEffect(() => {
    if (skipLoader) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    async function prepareSite() {
      const startedAt = Date.now();

      await Promise.race([preloadSiteAssets(), wait(MAX_LOAD_MS)]);

      const elapsed = Date.now() - startedAt;
      if (elapsed < MIN_LOAD_MS) {
        await wait(MIN_LOAD_MS - elapsed);
      }

      if (!cancelled) {
        setLoading(false);
      }
    }

    setLoading(true);
    prepareSite();

    return () => {
      cancelled = true;
    };
  }, [skipLoader]);

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
