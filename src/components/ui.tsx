"use client";

import Link from "next/link";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { ASSETS } from "@/lib/content";
import { SITE_NAME } from "@/lib/seo";

type PillButtonProps = {
  href: string;
  label: string;
  variant?: "dark" | "light";
  className?: string;
};

export function PillButton({
  href,
  label,
  variant = "dark",
  className = "",
}: PillButtonProps) {
  return (
    <Link
      href={href}
      className={`btn-pill ${variant === "dark" ? "btn-pill-dark" : "btn-pill-light"} ${className}`}
    >
      {label}
      <span className="btn-arrow">
        <IoArrowForward size={14} />
      </span>
    </Link>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-center text-[13px] font-semibold tracking-[0.14em] text-[var(--accent)] uppercase">
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className = "",
  align = "center",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <h2
      className={`display-title text-[clamp(2rem,4.2vw,3.25rem)] ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionCopy({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mx-auto max-w-2xl text-center text-[15px] leading-relaxed text-[var(--text-muted)] md:text-base ${className}`}
    >
      {children}
    </p>
  );
}

export function FramerLogo({
  size = 32,
  variant = "full",
  className = "",
}: {
  size?: number;
  variant?: "full" | "icon" | "nav";
  className?: string;
}) {
  if (variant === "icon") {
    return (
      <Image
        src={ASSETS.logoIcon}
        alt={SITE_NAME}
        width={size}
        height={size}
        className={`object-contain ${className}`}
        priority
      />
    );
  }

  if (variant === "nav") {
    return (
      <Image
        src={ASSETS.logoNav}
        alt={SITE_NAME}
        width={280}
        height={64}
        className={`h-full w-auto max-w-none object-contain ${className}`}
        priority
      />
    );
  }

  return (
    <Image
      src={ASSETS.logoOneBlack}
      alt={SITE_NAME}
      width={280}
      height={64}
      className={`w-auto max-w-none object-contain ${className}`}
      style={className ? undefined : { height: size, width: "auto" }}
      priority
    />
  );
}
