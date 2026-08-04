export type FaqItem = { q: string; a: string };
export type FaqGroup = { title: string; items: FaqItem[] };

export const FAQ_GROUPS: FaqGroup[] = [
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

export function allFaqItems(): FaqItem[] {
  return FAQ_GROUPS.flatMap((group) => group.items);
}
