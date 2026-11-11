import { ExternalLinkIcon } from "@radix-ui/react-icons";
import SiteHeader from "../components/SiteHeader";
import { pageMetadata } from "../lib/site";
import ContactForm from "./ContactForm";
import RegionMap from "./RegionMap";
import styles from "./contact.module.css";

export const metadata = pageMetadata("contact");

export default function ContactPage() {
  return <>
    <SiteHeader currentPage="contact" />
    <main id="main-content" tabIndex={-1}>
      <div className={`wrap ${styles.layout}`}>
        <div className={styles.intro}>
          <h1>Let’s talk.</h1>
          <p>Have a question, an idea, or an opportunity to work together? I’d love to hear from you.</p>
        </div>
        <ContactForm />
        <div className={styles.alternatives}>
          <h2>Prefer to write directly?</h2>
          <a className={styles.email} href="mailto:robabby23@gmail.com">robabby23@gmail.com</a>
          <div className={styles.socials}>
            <a href="https://linkedin.com/in/robabby" target="_blank" rel="noopener noreferrer">LinkedIn <ExternalLinkIcon aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
            <a href="https://bsky.app/profile/robabby.bsky.social" target="_blank" rel="noopener noreferrer">Bluesky <ExternalLinkIcon aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </div>
      </div>
      <section className={styles.location} aria-labelledby="location-title">
        <div className={`wrap ${styles.locationHeading}`}><h2 id="location-title">Based in Bellingham.</h2><p>Washington · Working locally and remotely.</p></div>
        <RegionMap />
      </section>
    </main>
  </>;
}
