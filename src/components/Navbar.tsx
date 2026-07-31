"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu, IoClose, IoArrowForward } from "react-icons/io5";
import { FramerLogo } from "./ui";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#farmers", label: "For Farmers" },
  { href: "/#investors", label: "For Investors" },
  { href: "/contact#help", label: "Help" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isContact = pathname === "/contact";

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="glass-nav relative flex w-full max-w-[920px] items-center justify-between rounded-full px-3 py-3 md:grid md:grid-cols-[1fr_auto_1fr] md:px-5 md:py-3.5">
        <Link href="/" className="flex h-9 shrink-0 items-center md:h-10">
          <FramerLogo variant="nav" className="h-full w-auto" />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex lg:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[14px] font-medium whitespace-nowrap text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center md:justify-self-end">
          <Link
            href="/contact"
            className={`btn-pill btn-pill-dark hidden text-[14px] md:inline-flex ${isContact ? "ring-2 ring-[var(--accent)]/20" : ""}`}
          >
            Contact
            <span className="btn-arrow">
              <IoArrowForward size={14} />
            </span>
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IoClose size={20} /> : <IoMenu size={20} />}
          </button>
        </div>

        {open && (
          <div className="absolute top-[calc(100%+0.75rem)] right-0 left-0 rounded-[24px] border border-black/5 bg-white p-4 shadow-xl md:hidden">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-3 py-2.5 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-soft)]"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="btn-pill btn-pill-dark w-full justify-between text-sm"
                  onClick={() => setOpen(false)}
                >
                  Contact
                  <span className="btn-arrow">
                    <IoArrowForward size={14} />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
