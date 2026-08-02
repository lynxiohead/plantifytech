"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { SectionTitle, SectionCopy } from "./ui";
import { IoCheckmarkCircle, IoSend, IoLeaf } from "react-icons/io5";

const FARM_TYPES = [
  "Grains & Cereals",
  "Horticulture & Vegetables",
  "Livestock & Cattle",
  "Poultry & Farming",
  "Irrigation & Solar Infrastructure Upgrade",
  "Fruit & Macadamia Orchards",
  "Mixed Agriculture",
  "Other",
];

const FUNDING_TIERS = [
  "R0 – R10,000",
  "R10,000 – R50,000",
  "R50,000 – R100,000",
  "R100,000+",
];

export default function FarmerApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    farmType: FARM_TYPES[0],
    capitalNeeded: FUNDING_TIERS[0],
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="apply" className="scroll-mt-28 mt-24 border-t border-black/5 pt-20">
      <ScrollReveal>
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">
            <IoLeaf size={16} />
            Farmer Onboarding
          </span>
          <SectionTitle className="mt-2">
            Apply for Farm Funding
          </SectionTitle>
          <SectionCopy className="mt-3 max-w-xl mx-auto">
            Tell us about your farm to get started. Our agricultural vetting team
            will review your profile and reach out within 5–7 business days.
          </SectionCopy>
        </div>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto">
        <ScrollReveal delay={0.08}>
          <div className="card-soft rounded-[var(--radius-xl)] border border-black/5 bg-white p-6 sm:p-10 shadow-[0_24px_80px_rgba(10,31,26,0.08)]">
            {isSubmitted ? (
              <div className="text-center py-10 px-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f4ea] text-[var(--accent)]">
                  <IoCheckmarkCircle size={40} />
                </div>
                <h3 className="display-title mt-5 text-2xl text-[var(--text)]">
                  Application Submitted!
                </h3>
                <p className="mt-3 text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[var(--text)]">{formData.name || "Farmer"}</span>.
                  We have received your farm profile for <span className="font-semibold text-[var(--text)]">{formData.location || "Southern Africa"}</span>.
                  Our team will review your application and contact you via email or WhatsApp soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      location: "",
                      farmType: FARM_TYPES[0],
                      capitalNeeded: FUNDING_TIERS[0],
                      description: "",
                    });
                  }}
                  className="mt-8 inline-flex items-center justify-center rounded-full border border-[var(--accent)]/20 bg-[var(--bg-soft)] px-6 py-2.5 text-sm font-semibold text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--text)] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-[var(--radius-md)] border border-black/10 bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--text)] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-[var(--radius-md)] border border-black/10 bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--text)] mb-2"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-[var(--radius-md)] border border-black/10 bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="location"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--text)] mb-2"
                    >
                      Location (Country &amp; Region) *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full rounded-[var(--radius-md)] border border-black/10 bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="farmType"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--text)] mb-2"
                    >
                      Primary Sector / Type *
                    </label>
                    <select
                      id="farmType"
                      name="farmType"
                      required
                      value={formData.farmType}
                      onChange={handleChange}
                      className="w-full rounded-[var(--radius-md)] border border-black/10 bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:bg-white focus:outline-none transition-colors"
                    >
                      {FARM_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="capitalNeeded"
                      className="block text-xs font-semibold uppercase tracking-wider text-[var(--text)] mb-2"
                    >
                      Estimated Capital Needed (ZAR) *
                    </label>
                    <select
                      id="capitalNeeded"
                      name="capitalNeeded"
                      required
                      value={formData.capitalNeeded}
                      onChange={handleChange}
                      className="w-full rounded-[var(--radius-md)] border border-black/10 bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:bg-white focus:outline-none transition-colors"
                    >
                      {FUNDING_TIERS.map((tier) => (
                        <option key={tier} value={tier}>
                          {tier}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--text)] mb-2"
                  >
                    Brief Description &amp; Use of Funds *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full rounded-[var(--radius-md)] border border-black/10 bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--text)] focus:border-[var(--accent)] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-pill btn-pill-dark w-full justify-center py-3.5 text-sm font-semibold disabled:opacity-70 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Submitting Profile...
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        Submit Application
                        <IoSend size={15} />
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
