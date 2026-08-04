import type { Metadata } from "next";
import { LOADING_VARIANT_LABELS } from "@/lib/loadingVariant";

export const LOADING_PREVIEW_URLS = {
  1: "https://plantify-loading-option-1-ayanda-vilakazis-projects.vercel.app",
  2: "https://plantify-loading-option-2-ayanda-vilakazis-projects.vercel.app",
  3: "https://plantify-loading-option-3-ayanda-vilakazis-projects.vercel.app",
} as const;

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
          Each option lives on its own public Vercel project — no login required.
          Open on mobile or desktop and use Replay to watch the loader again.
        </p>

        <div className="mt-8 space-y-4">
          {([1, 2, 3] as const).map((variant) => (
            <a
              key={variant}
              href={LOADING_PREVIEW_URLS[variant]}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[20px] border border-[var(--accent)]/10 bg-[var(--bg-soft)] px-5 py-4 transition hover:border-[var(--accent)]/25"
            >
              <p className="font-semibold text-[var(--text)]">
                Option {variant}
              </p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                {LOADING_VARIANT_LABELS[variant]}
              </p>
              <p className="mt-2 break-all text-xs text-[var(--accent)]">
                {LOADING_PREVIEW_URLS[variant]}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
