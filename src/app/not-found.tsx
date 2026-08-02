import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import CtaSection from "@/components/CtaSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <section className="container flex min-h-[calc(100vh-2rem)] items-center justify-center py-12 sm:py-16">
          <div className="card-soft relative flex w-full max-w-190 flex-col items-center justify-center overflow-hidden rounded-[2.5rem] px-6 py-12 text-center sm:px-10 sm:py-14 md:aspect-square md:px-14">
            <div
              className="absolute inset-0 bg-[url('/assets/MISC/BG1.png')] bg-cover bg-center bg-no-repeat"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.78)_45%,rgba(255,255,255,0.92)_100%)]"
              aria-hidden="true"
            />

            <div className="relative z-10 inline-flex items-center gap-2 rounded-full border border-(--pill-border) bg-white px-4 py-2 text-sm font-medium text-(--text-muted) shadow-sm">
              {/* <span className="icon-circle h-7 w-7">
                <IoSparklesOutline size={16} />
              </span> */}
              Something went wrong
            </div>

            <p className="relative z-10 display-title mt-8 text-7xl text-(--accent) sm:text-8xl md:text-[8.5rem]">
              404
            </p>

            <h1 className="relative z-10 display-title mt-4 text-3xl text-foreground sm:text-4xl md:text-5xl">
              Page not found
            </h1>

            <p className="relative z-10 body-copy mt-4 max-w-xl text-base sm:text-lg">
              The page you are looking for doesnt exist or has been moved.
            </p>

            <Link
              href="/"
              className="btn-pill btn-pill-dark relative z-10 mt-8 justify-center"
            >
              <span className="btn-arrow">
                <IoArrowBack size={14} />
              </span>
              Back to home
            </Link>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
