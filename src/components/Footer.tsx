import Link from "next/link";
import { FramerLogo } from "./ui";
import SocialLinks from "./SocialLinks";
import { ASSETS } from "@/lib/content";

export default function Footer() {
  return (
    <footer
      className="footer-shell"
      style={{ backgroundImage: `url('${ASSETS.misc.bg1}')` }}
    >
      <div className="container footer-shell-inner">
        <div className="footer-panel">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="nav-logo-link mb-5 inline-flex h-10 items-center sm:h-11">
                <FramerLogo variant="icon" size={40} className="h-10 w-10 sm:h-11 sm:w-11" />
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-[var(--text-muted)]">
                Connecting farmers and investors to grow a sustainable future together.
              </p>
              <SocialLinks className="mt-5 flex gap-4 text-[var(--text-muted)]" />
            </div>

            <div>
              <h4 className="display-title mb-4 text-sm text-[var(--text)]">Quick links</h4>
              <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
                <li>
                  <Link href="/investors" className="hover:text-[var(--accent)]">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[var(--accent)]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/investors" className="hover:text-[var(--accent)]">
                    For Investors
                  </Link>
                </li>
                <li>
                  <Link href="/farmers" className="hover:text-[var(--accent)]">
                    For Farmers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="display-title mb-4 text-sm text-[var(--text)]">Support</h4>
              <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
                <li>
                  <Link href="/help" className="hover:text-[var(--accent)]">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/investor" className="hover:text-[var(--accent)]">
                    Investor Beta
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[var(--accent)]">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[var(--accent)]">
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

          <div className="mt-12 border-t border-black/5 pt-6">
            <p className="text-sm text-[var(--text-soft)]">
              Plantify Tech 2026. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
