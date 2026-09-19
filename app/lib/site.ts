import type { Metadata } from "next";

export const SITE_URL = "https://www.robabby.com";
export const PAGE_INFO = {
  home: {
    path: "/",
    title: "Rob Abby | WavePoint Founder & Product Engineer",
    description:
      "Rob Abby is the founder and operator of WavePoint. Based in Bellingham, he designs and builds websites and software for local and remote clients.",
  },
  services: {
    path: "/work-with-me",
    title: "Web Design & Software Development | Rob Abby, Bellingham",
    description:
      "Website design, custom software, and practical AI help for small businesses. Work directly with Rob Abby in Bellingham or remotely.",
  },
  wavepoint: {
    path: "/work/wavepoint",
    title: "WavePoint: AI-Native Product Development | Rob Abby",
    description:
      "How Rob Abby builds and operates WavePoint, bringing product design, prototypes, and AI-native development together across web, print, and an app in development.",
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
