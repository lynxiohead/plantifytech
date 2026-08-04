"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { LoadingScreenByVariant } from "@/components/LoadingScreen";
import {
  LOADING_VARIANT_LABELS,
  type LoadingVariant,
} from "@/lib/loadingVariant";

export default function LoadingPreviewClient({
  variant,
}: {
  variant: LoadingVariant;
}) {
  const [key, setKey] = useState(0);
  const replay = useCallback(() => setKey((current) => current + 1), []);

  return (
    <div className="relative min-h-[100svh]">
      <div key={key}>
        <LoadingScreenByVariant variant={variant} />
      </div>

      <div className="fixed inset-x-0 top-0 z-[10000] border-b border-black/5 bg-white/90 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
              Loading preview {variant}
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              {LOADING_VARIANT_LABELS[variant]}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={replay}
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white"
            >
              Replay
            </button>
            <Link
              href="/"
              className="rounded-full border border-[var(--accent)]/20 px-4 py-2 text-sm font-semibold text-[var(--text)]"
            >
              Back to site
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-[10000] border-t border-black/5 bg-white/90 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2 text-sm">
          {([1, 2, 3] as LoadingVariant[]).map((item) => (
            <Link
              key={item}
              href={`/preview/loading/${item}`}
              className={`rounded-full px-3 py-1.5 font-medium ${
                item === variant
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--bg-soft)] text-[var(--text-muted)]"
              }`}
            >
              Option {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
