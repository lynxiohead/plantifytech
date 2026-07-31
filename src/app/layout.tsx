import type { Metadata } from "next";
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
  title: "PlantifyTech | AI-Powered Agricultural Fintech",
  description:
    "Plantify Tech connects farmers who need funding with everyday people who want to invest in real agriculture. Power to the People.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} h-full`}>
      <body className="min-h-full antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
