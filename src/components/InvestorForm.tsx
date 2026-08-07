"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function InvestorForm() {
  const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setStatus("sending");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      full_name: ((fd.get("full_name") as string) || "").trim(),
      email: ((fd.get("email") as string) || "").trim(),
      investment_interest: ((fd.get("investment_interest") as string) || "").trim(),
      investment_level: ((fd.get("investment_level") as string) || "").trim(),
      hear_about: ((fd.get("hear_about") as string) || "").trim(),
      phone: ((fd.get("phone") as string) || "").trim(),
      message: ((fd.get("message") as string) || "").trim(),
    };

    if (!payload.full_name || payload.full_name.length < 2) {
      setErrorMessage("Please provide a valid full name.");
      setStatus("error");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
    if (!emailOk) {
      setErrorMessage("Please provide a valid email address.");
      setStatus("error");
      return;
    }

    if (!payload.investment_interest) {
      setErrorMessage("Please describe your investment interest.");
      setStatus("error");
      return;
    }

    if (!payload.investment_level) {
      setErrorMessage("Please indicate your investment level.");
      setStatus("error");
      return;
    }

    const digits = payload.phone.replace(/\D/g, "");
    if (payload.phone && (digits.length < 7 || digits.length > 15)) {
      setErrorMessage("Please provide a valid phone number (7–15 digits).");
      setStatus("error");
      return;
    }

    if (payload.message && payload.message.length > 2000) {
      setErrorMessage("Message is too long. Please keep it under 2000 characters.");
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);
      if (res.ok && data && data.ok) {
        setStatus("success");
        form.reset();
      } else {
        console.error("Waitlist post failed", data);
        setErrorMessage(data?.error || "Failed to submit. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Server error. Please try again later.");
      setStatus("error");
    }
  }

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
            onSubmit={handleSubmit}
            aria-live="polite"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span>Full name*</span>
                <input
                  name="full_name"
                  required
                  placeholder="Enter your full name"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span>Email address*</span>
                <input
                  name="email"
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
                  name="investment_interest"
                  required
                  placeholder="e.g. Crops, livestock, mixed farming"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span>Investment level*</span>
                <input
                  name="investment_level"
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
                  name="hear_about"
                  placeholder="e.g. Social media, a friend"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span>Phone number</span>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Your contact number"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm">
              <span>Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message here..."
                className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="mt-2 inline-flex w-fit rounded-full bg-(--bg-soft) px-6 py-3 text-sm font-medium text-(--text-muted) transition hover:bg-[#e8eef5] disabled:opacity-60"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Submitting..." : "Request demo"}
              </button>

              {status === "success" && (
                <p className="text-sm font-medium text-green-600">
                  You&apos;re on the list. We&apos;ll be in touch soon!
                </p>
              )}
              {status === "error" && errorMessage && (
                <p className="text-sm font-medium text-red-600">{errorMessage}</p>
              )}
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
