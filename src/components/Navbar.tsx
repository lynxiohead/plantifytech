"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FramerLogo, PillButton } from "./ui";

const links = [
  { href: "/about", label: "About" },
  { href: "/farmers", label: "For Farmers" },
  { href: "/investors", label: "For Investors" },
  { href: "/help", label: "Help" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-5">
      <div className="nav-liquid-shell glass-nav-liquid w-full max-w-[960px]">
        <nav className="glass-nav nav-liquid-inner relative flex w-full items-center justify-between px-4 py-3.5 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-4 md:px-6 md:py-4">
          <Link href="/" className="nav-logo-link relative z-10 flex shrink-0 items-center">
            <FramerLogo variant="icon" size={40} className="h-10 w-10 sm:h-11 sm:w-11" />
          </Link>

          <ul className="hidden items-center justify-center gap-7 md:flex md:justify-self-center lg:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass(link.href)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative z-10 flex shrink-0 items-center md:justify-self-end">
            <div className="hidden md:block">
              <PillButton href="/contact" label="Contact" variant="green" className="text-[14px]" />
            </div>

            <button
              type="button"
              className={`nav-burger flex md:hidden ${open ? "nav-burger--open" : "nav-burger--closed"}`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <IoClose size={20} /> : <IoMenu size={20} />}
            </button>
          </div>

          {open && (
            <div className="absolute top-[calc(100%+0.65rem)] right-0 left-0 rounded-[16px] border border-black/5 bg-white p-4 shadow-xl md:hidden">
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
                  <PillButton
                    href="/contact"
                    label="Contact"
                    variant="green"
                    className="btn-pill-gloss--block w-full text-sm"
                    onClick={() => setOpen(false)}
                  />
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
