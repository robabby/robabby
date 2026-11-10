import type { Metadata } from "next";

export const SITE_URL = "https://www.robabby.com";
export const PAGE_INFO = {
  home: {
    path: "/",
    title: "Rob Abby | Product, design and engineering",
    description:
      "I design and build software. I’m Rob Abby, a frontend engineer and founder of WavePoint, based in Bellingham, Washington.",
  },
  ai: {
    path: "/ai",
    title: "How I Work with AI | Rob Abby",
    description: "How Rob Abby works with AI: Codex and Claude Code in the terminal, clear plans in Linear, reusable skills, and concurrent sessions across projects.",
  },
  services: {
    path: "/work-with-me",
    title: "Web Design and Software Development | Rob Abby, Bellingham",
    description:
      "Product improvements, new software, websites, and practical AI workflows. Work directly with Rob Abby in Bellingham or remotely.",
  },
  partyslate: {
    path: "/work/partyslate",
    title: "PartySlate Frontend and Design System Case Study | Rob Abby",
    description: "Rob Abby’s work on PartySlate’s Idea Gallery, venue search, professional onboarding and Soirée design system, alongside mentoring and cross-team collaboration.",
  },
  savo: {
    path: "/work/savo",
    title: "SAVO UI/UX and Design System Case Study | Rob Abby",
    description:
      "How Rob Abby helped establish SAVO’s UI/UX team, redesigned its Asset Page with Brittany Mikottis, and built a shared Ember.js UI system.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy | Rob Abby",
    description:
      "How robabby.com uses analytics and cookies, and how to contact Rob Abby about privacy.",
  },
} as const;

export function pageMetadata(page: keyof typeof PAGE_INFO): Metadata {
  const { path, title, description } = PAGE_INFO[page];
  const url = new URL(path, SITE_URL).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Rob Abby",
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export const identitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#rob`,
      name: "Rob Abby",
      jobTitle: "Founder and operator of WavePoint",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/profile.jpeg`,
      email: "mailto:robabby23@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bellingham",
        addressRegion: "WA",
        addressCountry: "US",
      },
      sameAs: ["https://linkedin.com/in/robabby", "https://github.com/robabby"],
      worksFor: { "@id": "https://wavepoint.space/#organization" },
      knowsAbout: [
        "Product design",
        "Website design",
        "Software development",
        "Design systems",
        "AI-assisted development",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://wavepoint.space/#organization",
      name: "WavePoint",
      url: "https://wavepoint.space/",
      founder: { "@id": `${SITE_URL}/#rob` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Rob Abby",
      url: `${SITE_URL}/`,
      publisher: { "@id": `${SITE_URL}/#rob` },
    },
  ],
};
