"use client";

import ScrollReveal from "./ScrollReveal";
import { IoTrendingUp, IoLeaf, IoGlobe, IoPieChart } from "react-icons/io5";

const audiences = [
  {
    icon: IoTrendingUp,
    title: "First-time investors",
    body: "Start small, learn as you go, and grow your money in real agriculture with as little as R100.",
    badge: "From R100",
    note: "Low barrier to start investing",
  },
  {
    icon: IoLeaf,
    title: "Farmers",
    body: "Access the capital you need to grow your farm without the traditional barriers of bank loans.",
    badge: "No collateral",
    note: "Access to capital without traditional requirements",
  },
  {
    icon: IoGlobe,
    title: "Impact investors",
    body: "Generate financial returns while contributing to sustainable agriculture and food security in communities.",
    badge: "Dual impact",
    note: "Financial returns plus social good",
  },
  {
    icon: IoPieChart,
    title: "Portfolio diversifiers",
    body: "Add real agricultural assets to your portfolio with transparent, AI-tracked performance.",
    badge: "Real assets",
    note: "Diversification beyond stocks and crypto",
  },
];

export default function AudienceSection() {
  return (
    <section id="about" className="section-pad bg-[var(--bg-soft)]">
      <div className="container">
        <ScrollReveal>
          <h2 className="display-title text-center text-[clamp(2rem,4vw,3rem)]">
            Who this platform is built for
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {audiences.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.08}>
              <article className="card-soft h-full p-6 md:p-7">
                <item.icon size={24} className="text-[var(--text)]" />
                <h3 className="display-title mt-4 text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                  {item.body}
                </p>
                <div className="mt-5 rounded-xl bg-white p-4">
                  <p className="display-title text-base">{item.badge}</p>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{item.note}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
