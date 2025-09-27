import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Theme } from "@radix-ui/themes";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rob Abby - Product Engineer',
  description: 'Personal website of Rob Abby, a Product Engineer specializing in creating exceptional web experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark">
          {children}
        </Theme>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

