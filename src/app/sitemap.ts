import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}${ROUTES.investors}`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}${ROUTES.farmers}`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}${ROUTES.about}`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}${ROUTES.investor}`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}${ROUTES.help}`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}${ROUTES.contact}`, lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${SITE_URL}${ROUTES.privacy}`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  return pages;
}
