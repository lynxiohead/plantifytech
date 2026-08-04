import Link from "next/link";
import type { Metadata } from "next";
import { LOADING_VARIANT_LABELS } from "@/lib/loadingVariant";

export const metadata: Metadata = {
  title: "Loading Screen Options",
  robots: { index: false, follow: false },
};

export default function LoadingPreviewIndexPage() {
  return (
    <main className="section-pad min-h-[100svh] bg-white">
      <div className="container max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
          CEO preview
        </p>
        <h1 className="display-title mt-3 text-[clamp(2rem,4vw,2.75rem)] text-[var(--text)]">
          Loading screen options
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-muted)]">
          Choose an option below to preview the full-screen loading experience.
          Each dedicated preview link can also be opened on mobile.
        </p>

        <div className="mt-8 space-y-4">
          {([1, 2, 3] as const).map((variant) => (
            <Link
              key={variant}
              href={`/preview/loading/${variant}`}
              className="block rounded-[20px] border border-[var(--accent)]/10 bg-[var(--bg-soft)] px-5 py-4 transition hover:border-[var(--accent)]/25"
            >
              <p className="font-semibold text-[var(--text)]">
                Option {variant}
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {LOADING_VARIANT_LABELS[variant]}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
