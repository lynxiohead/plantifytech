import type { Metadata } from "next";

export const SITE_NAME = "Plantify Tech";
export const SITE_TAGLINE = "Invest in farms. Empower farmers. Grow returns.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://plantify.tech";
export const SITE_EMAIL = "hello@plantify.tech";
export const SITE_PHONE = "+27824878855";
export const SITE_LOCALE = "en_ZA";

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/plantify.tech?igsh=eWsxc3Q2M3FpeWJ6",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/plantify-lynxio-tech/",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@plantify.tech?_r=1&_t=ZS-98bqkrwgf13",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/plantify.tech/",
  },
] as const;

/** Core keywords — agricultural investment & fintech discovery (Easy Equities-style intent). */
export const CORE_KEYWORDS = [
  "farm investment",
  "agricultural investment",
  "invest in farms",
  "agricultural investment platform",
  "farm investment South Africa",
  "agricultural fintech",
  "agri fintech",
  "fintech South Africa",
  "fintech investment platform",
  "agricultural fintech platform",
  "farm fintech",
  "mobile fintech South Africa",
  "agritech investment",
  "crowd farming",
  "agricultural crowdfunding",
  "farm funding platform",
  "invest in agriculture",
  "agricultural funds",
  "impact investing agriculture",
  "alternative investments farming",
  "invest in farms from R100",
  "small scale farmer funding",
  "agricultural finance South Africa",
  "Southern Africa agriculture investment",
  "real asset investment farming",
  "fractional farm investment",
] as const;

export const ROUTES = {
  home: "/",
  about: "/about",
  farmers: "/farmers",
  investors: "/investors",
  help: "/help",
  contact: "/contact",
  investor: "/investor",
  privacy: "/privacy-policy",
} as const;

type PageSeo = {
  title: string;
  description: string;
  path: keyof typeof ROUTES | (string & {});
  keywords?: readonly string[];
  ogType?: "website" | "article";
};

export function absoluteUrl(path: string = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  ogType = "website",
}: PageSeo): Metadata {
  const url = absoluteUrl(typeof path === "string" && path.startsWith("/") ? path : ROUTES[path as keyof typeof ROUTES] ?? path);
  const fullTitle =
    path === "home" || path === "/"
      ? `${SITE_NAME} | Agricultural Fintech & Farm Investment Platform South Africa`
      : `${title} | ${SITE_NAME}`;

  const keywordSet = [...new Set([...keywords, ...CORE_KEYWORDS])];

  return {
    title: fullTitle,
    description,
    keywords: keywordSet,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: ogType,
      locale: SITE_LOCALE,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: absoluteUrl("/assets/logos/OneBlack-nav.png"),
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — agricultural investment platform`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/assets/logos/OneBlack-nav.png")],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "finance",
  };
}

export const PAGE_SEO = {
  home: {
    title: "Farm & Agricultural Fintech Investment Platform",
    description:
      "Plantify Tech is South Africa's agricultural fintech platform — invest in vetted farm projects from R100, track real crops with AI insights, and earn returns at harvest. A mobile fintech app for farm investment: simple, transparent, and built like Easy Equities for agriculture.",
    path: "home" as const,
    keywords: [
      "Easy Equities agriculture alternative",
      "buy farm shares online",
      "mobile farm investment app",
      "invest in crops and livestock",
      "agriculture investment app South Africa",
      "agri fintech startup",
      "fintech for farmers and investors",
    ],
  },
  about: {
    title: "About Our Agricultural Fintech Mission",
    description:
      "Learn how Plantify Tech connects smallholder farmers with everyday investors across Southern Africa — democratising agricultural finance, food security, and real-asset returns.",
    path: "about" as const,
    keywords: ["about Plantify Tech", "agricultural fintech mission", "crowdfarming Southern Africa"],
  },
  farmers: {
    title: "Farm Funding for Farmers",
    description:
      "Raise capital for your farm without traditional bank barriers. List your agricultural project, reach verified investors, and get funded faster with Plantify Tech's farmer beta.",
    path: "farmers" as const,
    keywords: [
      "farm funding South Africa",
      "agricultural loans alternative",
      "farmer crowdfunding platform",
      "raise capital for farming",
    ],
  },
  investors: {
    title: "Invest in Farms from R100",
    description:
      "Browse vetted farm projects, invest from R100, and track agricultural returns with AI-powered insights. Plantify Tech makes farm investment as accessible as buying shares — secure, transparent, and built for Southern Africa.",
    path: "investors" as const,
    keywords: [
      "how to invest in farms",
      "agricultural investment returns",
      "farm shares investment",
      "start investing in agriculture R100",
    ],
  },
  help: {
    title: "Help & FAQs",
    description:
      "Answers about farm investment, farmer funding, minimum investments, returns at harvest, verification, and support on the Plantify Tech agricultural investment platform.",
    path: "help" as const,
    keywords: ["farm investment FAQ", "agricultural crowdfunding questions"],
  },
  contact: {
    title: "Contact Us",
    description:
      "Contact Plantify Tech for farm investment enquiries, farmer onboarding, partnerships, and platform support across Southern Africa.",
    path: "contact" as const,
    keywords: ["contact Plantify Tech", "agricultural investment support"],
  },
  investor: {
    title: "Join the Investor Beta",
    description:
      "Sign up for early access to Plantify Tech — invest in real agriculture from R100, diversify with farm assets, and join South Africa's growing agricultural investment community.",
    path: "investor" as const,
    keywords: ["investor beta signup", "early access farm investment"],
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "Plantify Tech privacy policy — how we collect, use, and protect personal data on our agricultural investment and farm funding platform.",
    path: "privacy" as const,
    keywords: ["Plantify Tech privacy policy"],
  },
} as const;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    legalName: "Plantify Tech",
    url: SITE_URL,
    logo: absoluteUrl("/assets/logos/OneBlack-nav.png"),
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    description:
      "Agricultural investment platform connecting farmers who need funding with everyday investors across Southern Africa.",
    areaServed: [
      { "@type": "Country", name: "South Africa" },
      { "@type": "Country", name: "Botswana" },
      { "@type": "Country", name: "Namibia" },
      { "@type": "Country", name: "Mozambique" },
      { "@type": "Country", name: "Zimbabwe" },
    ],
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Invest in farms and agricultural projects from R100. South Africa's mobile-first agricultural fintech platform.",
    inLanguage: "en-ZA",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function financialServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Mobile agricultural investment platform for farm funding, crowd farming, and transparent returns on real farm assets in Southern Africa.",
    areaServed: "Southern Africa",
    serviceType: [
      "Agricultural investment",
      "Farm crowdfunding",
      "Farmer funding",
      "Impact investing",
    ],
    offers: {
      "@type": "Offer",
      name: "Farm investment from R100",
      description: "Minimum investment of R100 in vetted agricultural projects.",
      priceCurrency: "ZAR",
      price: "100",
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function webPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@type": "WebSite", url: SITE_URL, name: SITE_NAME },
    inLanguage: "en-ZA",
  };
}
