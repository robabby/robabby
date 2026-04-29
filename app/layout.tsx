import "@radix-ui/themes/styles.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Fraunces, Instrument_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
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

export const metadata = {
  title: "Rob Abby — Staff Engineer & IT Manager",
  description:
    "Senior technologist with 15 years across software engineering and IT operations. Bellingham, WA.",
  metadataBase: new URL("https://robabby.com"),
  openGraph: {
    title: "Rob Abby — Staff Engineer & IT Manager",
    description:
      "15 years across software engineering and IT operations. Bellingham, WA.",
    url: "https://robabby.com",
    siteName: "Rob Abby",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rob Abby — Staff Engineer & IT Manager",
    description:
      "15 years across software engineering and IT operations. Bellingham, WA.",
  },
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
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
