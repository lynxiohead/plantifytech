"use client";

import { IoCheckmarkCircle } from "react-icons/io5";
import { TRUST_ITEMS } from "@/lib/content";

export default function TrustStrip() {
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS];

  return (
    <section className="overflow-hidden border-y border-black/5 bg-white py-6">
      <div className="relative">
        <div className="marquee-track gap-10 px-4">
          {items.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="inline-flex shrink-0 items-center gap-2.5 px-4 text-[15px] text-[var(--text-muted)]"
            >
              <IoCheckmarkCircle size={18} className="text-[var(--text)]" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
