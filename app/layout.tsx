import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Outfit, Crimson_Pro } from "next/font/google";
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

export const metadata = {
  title: "Rob Abby - Product Engineer",
  description: "Personal website of Rob Abby, a Product Engineer specializing in creating exceptional web experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${crimsonPro.variable}`}>
        <Theme appearance="dark">
          {children}
        </Theme>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

