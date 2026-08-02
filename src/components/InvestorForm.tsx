"use client";

import ScrollReveal from "./ScrollReveal";

export default function InvestorForm() {
  return (
    <section className="section-pad bg-white">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <ScrollReveal>
          <div>
            <h1 className="display-title text-[clamp(2.2rem,4vw,3.4rem)]">
              Join the investor beta
            </h1>
            <p className="mt-4 max-w-lg text-(--text-muted)">
              Be among the first to invest in vetted farm projects from as
              little as R100 — with real-time AI tracking and returns that
              make an impact.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            className="card-soft grid gap-4 p-6 md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span>Full name*</span>
                <input
                  required
                  placeholder="Enter your full name"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span>Email address*</span>
                <input
                  required
                  type="email"
                  placeholder="@gmail.com"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span>Investment interest*</span>
                <input
                  required
                  placeholder="e.g. Crops, livestock, mixed farming"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span>Investment level*</span>
                <input
                  required
                  placeholder="e.g. R100 – R1,000 per month"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span>How did you hear about us?</span>
                <input
                  placeholder="e.g. Social media, a friend"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span>Phone number</span>
                <input
                  type="tel"
                  placeholder="Your contact number"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm">
              <span>Message</span>
              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
              />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit rounded-full bg-(--bg-soft) px-6 py-3 text-sm font-medium text-(--text-muted) transition hover:bg-[#e8eef5]"
            >
              Request demo
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
