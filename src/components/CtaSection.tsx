import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export default function CtaSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container text-center">
        <h2 className="display-title text-[clamp(2rem,4vw,3rem)]">
          Ready to invest smarter?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
          Dedicated to enabling power to our people. Join PlantifyTech today.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="btn-pill btn-pill-dark text-sm md:text-base">
            Join Beta
            <span className="btn-arrow">
              <IoArrowForward size={14} />
            </span>
          </Link>
          <Link href="/contact" className="btn-pill btn-pill-light text-sm md:text-base">
            Contact Us
            <span className="btn-arrow">
              <IoArrowForward size={14} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
