import { ArrowLeftIcon } from "@radix-ui/react-icons";
import SiteHeader from "../components/SiteHeader";
import { pageMetadata } from "../lib/site";
import Link from "next/link";

export const metadata = pageMetadata("privacy");

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="wrap legal" id="main-content" tabIndex={-1}>
        <Link href="/" className="legal-back">
          <ArrowLeftIcon aria-hidden="true" /> Back
        </Link>
        <h1>Privacy</h1>
        <p className="legal-updated">Last updated: November 2026</p>

        <p>
          robabby.com is a personal portfolio site. There are no accounts, no
          sign-ins, and no newsletter — so there’s very little to say here. This
          is the whole of it.
        </p>

        <h2>What’s collected</h2>
        <p>
          The site uses Google Analytics 4 to understand aggregate traffic —
          which pages are viewed, roughly where visitors arrive from, and what
          kind of device they’re on. This data is anonymous and reported in
          aggregate; it isn’t used to identify you.
        </p>

        <h2>When you contact me</h2>
        <p>
          The contact form sends your name, email address, and message through
          Brevo to my Gmail inbox so I can reply. Your email address is used as
          the reply address. Your name and email address are also saved in a
          contact-inquiries list in Brevo, along with any source, medium, and campaign tags in the contact-page link, so I can keep track of people who reach
          out. The website does not keep a separate database of messages;
          correspondence and delivery records are handled by these email services.
          Please avoid sending sensitive information through the form.
        </p>
        <h2>The map</h2>
        <p>
          The contact page uses Apple Maps to show the Bellingham area. Loading
          the map connects your browser to Apple, which receives information
          such as your IP address. The map does not request your location.
          See <a href="https://www.apple.com/legal/privacy/">Apple’s privacy policy</a>.
        </p>

        <h2>Cookies</h2>
        <p>
          Google Analytics sets first-party cookies to recognize repeat visits
          and measure sessions. You can block or clear these anytime through
          your browser settings without affecting how the site works.
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
          for how they handle it. You can opt out of Google Analytics across
          every site with Google’s{" "}
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
          No personal accounts, no advertising trackers,
          and nothing sold or shared for marketing. The site is hosted on
          Vercel, which collects standard request logs and privacy-friendly
          aggregate analytics as part of hosting.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Email{" "}
          <a href="mailto:robabby23@gmail.com">robabby23@gmail.com</a>.
        </p>
      </main>
    </>
  );
}
