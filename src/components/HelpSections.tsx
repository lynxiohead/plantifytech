"use client";

import ScrollReveal from "./ScrollReveal";
import { PillButton } from "./ui";

const FAQ_GROUPS = [
  {
    title: "For Farmers",
    items: [
      {
        q: "Who can join the Farmers Beta program?",
        a: "Smallholder and commercial farmers who operate legal farms and can provide basic verification details. We prioritise diversity of crops and regions during beta to ensure robust testing.",
      },
      {
        q: "Do I have to pay to join the Beta?",
        a: "No — joining the Farmers Beta is free. Create your profile and list a project at no cost; we only ask for verification details to keep the platform trustworthy.",
      },
      {
        q: "What types of farming projects do you accept?",
        a: "We accept a wide range of projects — crops, livestock, and mixed farming — as long as they're based on a legally operated farm and include clear funding and timeline details.",
      },
      {
        q: "How do I update my farm details?",
        a: "Log in to your farmer profile and edit your project details any time from your dashboard — funding goals, timelines, and progress updates all stay in your control.",
      },
    ],
  },
  {
    title: "For Investors",
    items: [
      {
        q: "How are investors verified on the platform?",
        a: "We use secure, encrypted verification and compliance-first checks to confirm investor identity before funds can be added to the platform.",
      },
      {
        q: "Is there a minimum investment amount?",
        a: "Yes — you can start investing from as little as R100, so you can learn as you go before committing more.",
      },
      {
        q: "How do returns get paid out?",
        a: "Returns are paid out at harvest, based on the performance of the farm project you funded. You can track growth in real time with AI-powered insights before payout.",
      },
      {
        q: "Can I track multiple investments at once?",
        a: "Yes — your dashboard shows every project you've funded side by side, with real-time AI tracking for each one.",
      },
    ],
  },
  {
    title: "Account & support",
    items: [
      {
        q: "How do I create an account?",
        a: "Join the beta from the investor or farmer signup form, verify your email, and you're ready to start browsing projects or listing your farm.",
      },
      {
        q: "How can I contact support?",
        a: "Reach our team any time at hello@plantify.tech, or use the contact form on our Contact page.",
      },
      {
        q: "How quickly will I receive a response?",
        a: "We aim to respond to every enquiry within one business day.",
      },
    ],
  },
];

export function HelpHero() {
  return (
    <section className="section-pad bg-white pb-0">
      <div className="container max-w-3xl text-center">
        <ScrollReveal>
          <h1 className="display-title text-[clamp(2.2rem,4vw,3.4rem)]">
            Frequently asked questions
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="mt-4 text-(--text-muted)">
            Find quick answers to common questions about the platform,
            pricing, and security.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function FaqGroups() {
  return (
    <section className="section-pad bg-white">
      <div className="container max-w-3xl space-y-12">
        {FAQ_GROUPS.map((group, groupIndex) => (
          <div key={group.title}>
            <ScrollReveal delay={groupIndex * 0.05}>
              <h2 className="display-title text-xl">{group.title}</h2>
            </ScrollReveal>
            <div className="mt-5 space-y-4">
              {group.items.map((item, index) => (
                <ScrollReveal key={item.q} delay={index * 0.06}>
                  <details className="card-soft group p-5">
                    <summary className="display-title cursor-pointer list-none text-lg">
                      {item.q}
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-(--text-muted)">
                      {item.a}
                    </p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}

        <ScrollReveal>
          <div className="card-soft flex flex-col items-center gap-4 p-8 text-center">
            <h3 className="display-title text-xl">Still have questions?</h3>
            <p className="text-(--text-muted)">
              Reach out, and our team will guide you.
            </p>
            <PillButton href="/contact" label="Talk to our team" variant="dark" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
