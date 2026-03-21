import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Syne, Instrument_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Theme } from "@radix-ui/themes";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Rob Abby - Staff Engineer & Agentic Engineering Practitioner",
  description: "Staff Engineer & Agentic Engineering Practitioner with 15+ years building exceptional web experiences for startups and enterprises. Expert in React, TypeScript, and design systems.",
  metadataBase: new URL("https://robabby.com"),
  openGraph: {
    title: "Rob Abby - Staff Engineer & Agentic Engineering Practitioner",
    description: "15+ years building exceptional web experiences. Expert in React, TypeScript, and design systems. Available for opportunities.",
    url: "https://robabby.com",
    siteName: "Rob Abby",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rob Abby - Staff Engineer & Agentic Engineering Practitioner",
    description: "15+ years building exceptional web experiences. Expert in React, TypeScript, and design systems.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${instrumentSans.variable}`}>
        <Theme appearance="dark">
          {children}
        </Theme>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

