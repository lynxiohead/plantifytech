export type LoadingVariant = 1 | 2 | 3;

export const LOADING_VARIANT_LABELS: Record<LoadingVariant, string> = {
  1: "Pulse — icon card with progress bar",
  2: "Horizon — field gradient with stacked logo",
  3: "Minimal — clean wordmark with loading dots",
};

export function getLoadingVariant(): LoadingVariant {
  const raw = process.env.NEXT_PUBLIC_LOADING_VARIANT;
  if (raw === "2") return 2;
  if (raw === "3") return 3;
  return 1;
}

export function parseLoadingVariant(value: string): LoadingVariant | null {
  if (value === "1" || value === "2" || value === "3") {
    return Number(value) as LoadingVariant;
  }
  return null;
}

export function parseLoadingVariantParam(value: string): LoadingVariant {
  return parseLoadingVariant(value) ?? 1;
}
