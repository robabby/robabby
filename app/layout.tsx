import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Outfit, Crimson_Pro, Cinzel } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Theme } from "@radix-ui/themes";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-mystical",
  display: "swap",
});

export const metadata = {
  title: "Rob Abby - Staff Frontend Engineer",
  description: "Staff Frontend Engineer with 15+ years building exceptional web experiences for startups and enterprises. Expert in React, TypeScript, and design systems.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${crimsonPro.variable} ${cinzel.variable}`}>
        <Theme appearance="dark">
          {children}
        </Theme>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

