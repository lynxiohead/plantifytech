import type { Metadata } from "next";
import { parseLoadingVariantParam } from "@/lib/loadingVariant";
import LoadingPreviewClient from "./LoadingPreviewClient";

export const metadata: Metadata = {
  title: "Loading Screen Preview",
  robots: { index: false, follow: false },
};

export default async function LoadingPreviewPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  return <LoadingPreviewClient variant={parseLoadingVariantParam(variant)} />;
}
