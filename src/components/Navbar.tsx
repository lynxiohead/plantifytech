"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu, IoClose, IoArrowForward } from "react-icons/io5";

const LOGO_SRC =
  "https://framerusercontent.com/images/edOaf9VeW0UmbMZ5qbIh9nT4L8.png";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#farmers", label: "For Farmers" },
  { href: "/#investors", label: "For Investors" },
  { href: "/#help", label: "Help" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isContact = pathname === "/contact";

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="glass-nav flex w-full max-w-4xl items-center justify-between rounded-full px-3 py-2 md:px-4">
        <Link href="/" className="flex items-center gap-2 pl-1">
          <Image src={LOGO_SRC} alt="PlantifyTech" width={32} height={32} />
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className={`btn-pill btn-pill-dark text-sm ${isContact ? "ring-2 ring-black/10" : ""}`}
          >
            Contact
            <span className="btn-arrow">
              <IoArrowForward size={14} />
            </span>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IoClose size={20} /> : <IoMenu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="absolute top-[calc(100%+0.75rem)] left-4 right-4 rounded-3xl border border-black/5 bg-white p-4 shadow-xl md:hidden">
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-3 py-2 text-sm text-[var(--text-muted)] hover:bg-[var(--bg-soft)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
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
    </header>
  );
}
