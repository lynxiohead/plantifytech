import type { Metadata } from "next";
import {
  buildMetadata,
  organizationSchema,
  PAGE_SEO,
  SITE_NAME,
  websiteSchema,
} from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import ClientShell from "@/components/ClientShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata(PAGE_SEO.home),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} | Farm & Agricultural Investment Platform South Africa`,
    template: `%s | ${SITE_NAME}`,
  },
  description: PAGE_SEO.home.description,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "apple-mobile-web-app-title": SITE_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${bricolage.variable} h-full`}>
      <body className="min-h-full antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <GoogleAnalytics />
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
