import { ASSETS } from "./content";

function collectImageUrls(): string[] {
  const urls = new Set<string>([
    ASSETS.logo,
    ASSETS.logoNav,
    ASSETS.logoIcon,
    ASSETS.logoMark,
    ASSETS.hero.primary,
    ...ASSETS.hero.images,
    ...ASSETS.mockups,
    ...Object.values(ASSETS.illustrations),
    ...ASSETS.slides,
    ASSETS.founders.primary,
    ASSETS.founders.abisola,
    ASSETS.founders.abrahame,
    ...ASSETS.partners.map((partner) => partner.src),
    ...ASSETS.countries.map((country) => country.src),
  ]);

  return Array.from(urls);
}

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const image = new window.Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

export async function preloadSiteAssets(): Promise<void> {
  const urls = collectImageUrls();
  const batchSize = 6;

  for (let index = 0; index < urls.length; index += batchSize) {
    const batch = urls.slice(index, index + batchSize);
    await Promise.all(batch.map(preloadImage));
  }
}

export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}
