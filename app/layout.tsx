import "@radix-ui/themes/styles.css";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import ThemeProvider from "./components/ThemeProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rob Abby — Senior Frontend Product Engineer",
  description:
    "Senior Frontend Product Engineer with 15 years shipping consumer and B2B products in React and TypeScript. Bellingham, WA.",
  metadataBase: new URL("https://robabby.com"),
  openGraph: {
    title: "Rob Abby — Senior Frontend Product Engineer",
    description:
      "15 years shipping consumer and B2B products in React and TypeScript. Bellingham, WA.",
    url: "https://robabby.com",
    siteName: "Rob Abby",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rob Abby — Senior Frontend Product Engineer",
    description:
      "15 years shipping consumer and B2B products in React and TypeScript. Bellingham, WA.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#14110d" },
  ],
  colorScheme: "light dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rob Abby",
  jobTitle: "Senior Frontend Product Engineer",
  url: "https://robabby.com",
  image: "https://robabby.com/profile.jpeg",
  email: "mailto:robabby23@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bellingham",
    addressRegion: "WA",
  },
  sameAs: ["https://linkedin.com/in/robabby", "https://github.com/robabby"],
};

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=s||d;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${fraunces.variable} ${instrumentSans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
