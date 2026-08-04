"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu, IoClose, IoArrowForward } from "react-icons/io5";
import { FramerLogo } from "./ui";

const links = [
  { href: "/about", label: "About" },
  { href: "/farmers", label: "For Farmers" },
  { href: "/investors", label: "For Investors" },
  { href: "/help", label: "Help" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isContact = pathname === "/contact";

  const linkClass = (href: string) => {
    const active =
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
    return `text-[14px] font-medium whitespace-nowrap transition-colors ${
      active
        ? "text-[var(--accent)]"
        : "text-[var(--text-muted)] hover:text-[var(--accent)]"
    }`;
  };

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="glass-nav relative flex w-full max-w-[920px] items-center justify-between rounded-full px-3 py-3 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:px-5 md:py-3.5">
        <Link href="/" className="relative z-10 flex h-14 shrink-0 items-center sm:h-[3.75rem] md:h-10">
          <FramerLogo variant="nav" className="h-full w-auto" />
        </Link>

        <ul className="hidden items-center justify-center gap-6 md:flex md:justify-self-center lg:gap-7">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={linkClass(link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative z-10 flex shrink-0 items-center md:justify-self-end">
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`btn-pill btn-pill-dark text-[14px] ${isContact ? "ring-2 ring-[var(--accent)]/20" : ""}`}
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
        </div>

        {open && (
          <div className="absolute top-[calc(100%+0.75rem)] right-0 left-0 rounded-[24px] border border-black/5 bg-white p-4 shadow-xl md:hidden">
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-3 py-2.5 text-sm hover:bg-[var(--bg-soft)] ${
                      pathname === link.href
                        ? "font-semibold text-[var(--accent)]"
                        : "text-[var(--text-muted)]"
                    }`}
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
