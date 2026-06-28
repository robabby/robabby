import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — Rob Abby",
  description:
    "How robabby.com handles analytics and your data. The short version: anonymous, aggregate traffic stats via Google Analytics — no accounts, no ads, nothing sold.",
};

export default function PrivacyPage() {
  return (
    <main className="legal">
      <Link href="/" className="legal-back">
        ← Back
      </Link>
      <h1>Privacy</h1>
      <p className="legal-updated">Last updated: June 2026</p>

      <p>
        robabby.com is a personal portfolio site. There are no accounts, no
        sign-ins, and no newsletter — so there’s very little to say here. This
        is the whole of it.
      </p>

      <h2>What’s collected</h2>
      <p>
        The site uses Google Analytics 4 to understand aggregate traffic — which
        pages are viewed, roughly where visitors arrive from, and what kind of
        device they’re on. This data is anonymous and reported in aggregate; it
        isn’t used to identify you.
      </p>

      <h2>Cookies</h2>
      <p>
        Google Analytics sets first-party cookies to recognize repeat visits and
        measure sessions. You can block or clear these anytime through your
        browser settings without affecting how the site works.
      </p>

      <h2>Google as a processor</h2>
      <p>
        Analytics data is processed by Google. See{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google’s Privacy Policy
        </a>{" "}
        for how they handle it. You can opt out of Google Analytics across every
        site with Google’s{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
        >
          opt-out browser add-on
        </a>
        .
      </p>

      <h2>What’s not collected</h2>
      <p>
        No personal accounts, no form submissions, no advertising trackers, and
        nothing sold or shared for marketing. The site is hosted on Vercel,
        which collects standard request logs and privacy-friendly aggregate
        analytics as part of hosting.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email{" "}
        <a href="mailto:robabby23@gmail.com">robabby23@gmail.com</a>.
      </p>
    </main>
  );
}
