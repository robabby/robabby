import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import SiteFooter from "./components/SiteFooter";
import JsonLd from "./components/JsonLd";
import { identitySchema, pageMetadata, SITE_URL } from "./lib/site";

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
  metadataBase: new URL(SITE_URL),
  ...pageMetadata("home"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3eb" },
    { media: "(prefers-color-scheme: dark)", color: "#111d17" },
  ],
  colorScheme: "light dark",
};

const themeScript = `(function(){var e=document.documentElement;e.dataset.js="";var d=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';try{var s=localStorage.getItem('theme');e.dataset.theme=s==='light'||s==='dark'?s:d;}catch(err){e.dataset.theme=d;}})();`;

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
        <JsonLd value={identitySchema} />
        {children}
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
