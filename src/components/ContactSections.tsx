"use client";

import ScrollReveal from "./ScrollReveal";
import { IoMail, IoCall, IoLocation } from "react-icons/io5";

export default function ContactForm() {
  return (
    <section className="section-pad bg-white">
      <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <ScrollReveal>
          <div>
            <h1 className="display-title text-[clamp(2.2rem,4vw,3.4rem)]">
              Get in touch with our team
            </h1>
            <p className="mt-4 max-w-lg text-[var(--text-muted)]">
              Get answers about investing, farm funding, and the beta program.
              Our team is ready to help you grow with Plantify.
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
                  placeholder="hello@yourbrand.com"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm">
                <span>Phone number</span>
                <input
                  placeholder="Your contact number"
                  className="rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-black/25"
                />
              </label>
              <label className="grid gap-2 text-sm">
                <span>Subject</span>
                <input
                  placeholder="How can we help you?"
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
              className="mt-2 inline-flex w-fit rounded-full bg-[var(--bg-soft)] px-6 py-3 text-sm font-medium text-[var(--text-muted)] transition hover:bg-[#e8eef5]"
            >
              Send Message
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function ContactInfo() {
  const items = [
    {
      icon: IoMail,
      title: "General inquiries",
      body: "Questions about the platform, investing, or listing your farm project? We would love to hear from you.",
      value: "hello@plantify.tech",
      href: "mailto:hello@plantify.tech",
    },
    {
      icon: IoCall,
      title: "Call us",
      body: "Speak directly with our team about the beta program or any support questions.",
      value: "+27 82 487 8855",
      href: "tel:+27824878855",
    },
    {
      icon: IoLocation,
      title: "Visit us",
      body: "We are based in Pretoria, South Africa — building the future of agricultural investment.",
      value: "Pretoria, South Africa",
      href: "#",
    },
  ];

  return (
    <section className="section-pad bg-[var(--bg-soft)]">
      <div className="container">
        <ScrollReveal>
          <h2 className="display-title text-[clamp(1.8rem,3vw,2.5rem)]">
            Connect with our team
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <article className="card-soft h-full p-6">
                <item.icon size={24} />
                <h3 className="display-title mt-4 text-xl">{item.title}</h3>
                <p className="mt-3 text-sm text-[var(--text-muted)]">{item.body}</p>
                {item.href !== "#" ? (
                  <a
                    href={item.href}
                    className="mt-4 inline-block text-sm font-medium text-[var(--text)]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-4 text-sm font-medium text-[var(--text)]">
                    {item.value}
                  </p>
                )}
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const faqs = [
    {
      q: "How does investing on Plantify work?",
      a: "Browse vetted farm projects, invest any amount from R100, and track real-time growth with AI-powered insights. You receive returns while supporting sustainable agriculture.",
    },
    {
      q: "Is my money safe?",
      a: "Plantify uses secure, encrypted data protection and compliance-first processes designed for investor transparency and platform safety.",
    },
    {
      q: "How does the AI-powered tracking work?",
      a: "Our AI tools monitor project performance and provide real-time insights so investors can track progress throughout the farming cycle.",
    },
    {
      q: "I am a farmer. How do I get funding?",
      a: "Create your profile, upload your project details, and launch a campaign to connect with investors through the Plantify platform.",
    },
    {
      q: "When can I start using Plantify?",
      a: "The beta program is open now. Join the beta to be among the first farmers and investors on the platform.",
    },
  ];

  return (
    <section id="help" className="section-pad bg-white">
      <div className="container max-w-3xl">
        <ScrollReveal>
          <h2 className="display-title text-center text-[clamp(1.8rem,3vw,2.5rem)]">
            Frequently asked questions
          </h2>
        </ScrollReveal>

        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => (
            <ScrollReveal key={item.q} delay={index * 0.06}>
              <details className="card-soft group p-5">
                <summary className="display-title cursor-pointer list-none text-lg">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.a}
                </p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
