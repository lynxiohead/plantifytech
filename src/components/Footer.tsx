import Link from "next/link";
import Image from "next/image";
import { IoArrowForward, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const LOGO_SRC =
  "https://framerusercontent.com/images/edOaf9VeW0UmbMZ5qbIh9nT4L8.png";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white pt-16 pb-8">
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="mb-4 inline-flex items-center gap-2">
            <Image src={LOGO_SRC} alt="PlantifyTech" width={36} height={36} />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
            Connecting farmers and investors to grow a sustainable future together.
          </p>
          <div className="mt-4 flex gap-3 text-[var(--text-muted)]">
            <IoLogoFacebook size={18} />
            <IoLogoInstagram size={18} />
            <IoLogoLinkedin size={18} />
          </div>
        </div>

        <div>
          <h4 className="display-title mb-4 text-sm text-[var(--text)]">Quick links</h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            <li><Link href="/#how-it-works">How It Works</Link></li>
            <li><Link href="/#about">About</Link></li>
            <li><Link href="/#investors">For Investors</Link></li>
            <li><Link href="/#farmers">For Farmers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="display-title mb-4 text-sm text-[var(--text)]">Support</h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            <li><Link href="/#help">FAQs</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/contact">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="display-title mb-4 text-sm text-[var(--text)]">Contact</h4>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            <li>
              <a href="mailto:hello@plantify.tech">hello@plantify.tech</a>
            </li>
            <li>
              <a href="tel:+27824878855">+27 82 487 8855</a>
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
