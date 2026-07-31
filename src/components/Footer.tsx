import Link from "next/link";
import { IoArrowForward, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { FramerLogo } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white pt-16 pb-8">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-5 inline-flex h-9 items-center md:h-10">
            <FramerLogo variant="nav" className="h-full w-auto" />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
            Connecting farmers and investors to grow a sustainable future together.
          </p>
          <div className="mt-5 flex gap-4 text-[var(--text-muted)]">
            <IoLogoFacebook size={20} className="transition-colors hover:text-[var(--accent)]" />
            <IoLogoInstagram size={20} className="transition-colors hover:text-[var(--accent)]" />
            <IoLogoLinkedin size={20} className="transition-colors hover:text-[var(--accent)]" />
          </div>
        </div>

        <div>
          <h4 className="display-title mb-4 text-sm text-[var(--text)]">Quick links</h4>
          <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/#how-it-works" className="hover:text-[var(--accent)]">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-[var(--accent)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/#investors" className="hover:text-[var(--accent)]">
                For Investors
              </Link>
            </li>
            <li>
              <Link href="/#farmers" className="hover:text-[var(--accent)]">
                For Farmers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="display-title mb-4 text-sm text-[var(--text)]">Support</h4>
          <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/contact#help" className="hover:text-[var(--accent)]">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--accent)]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--accent)]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="display-title mb-4 text-sm text-[var(--text)]">Contact</h4>
          <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
            <li>
              <a href="mailto:hello@plantify.tech" className="hover:text-[var(--accent)]">
                hello@plantify.tech
              </a>
            </li>
            <li>
              <a href="tel:+27824878855" className="hover:text-[var(--accent)]">
                +27 82 487 8855
              </a>
            </li>
            <li>Pretoria, South Africa</li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 flex flex-col items-start justify-between gap-4 border-t border-black/5 pt-6 md:flex-row md:items-center">
        <p className="text-sm text-[var(--text-soft)]">
          PlantifyTech 2026. All rights reserved.
        </p>
        <Link href="/contact" className="btn-pill btn-pill-dark text-sm">
          Contact Us
          <span className="btn-arrow">
            <IoArrowForward size={14} />
          </span>
        </Link>
      </div>
    </footer>
  );
}
