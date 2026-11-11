import Link from "next/link";
import { ArrowRightIcon, ExternalLinkIcon } from "@radix-ui/react-icons";

type Props = { intro?: string; wavepointLink?: boolean };

export default function Contact({
  intro = "Send me a link and a few sentences about what you’d like to make or improve. We can start there.",
  wavepointLink = false,
}: Props) {
  return (
    <section
      className="wrap contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <h2 id="contact-title">Let’s talk.</h2>
      <div>
        <p>{intro}</p>
        <p><Link className="text-link" href="/contact">Send me a message <ArrowRightIcon aria-hidden="true" /></Link></p>
        <a className="text-link email" href="mailto:robabby23@gmail.com">
          robabby23@gmail.com <ArrowRightIcon className="arrow" aria-hidden="true" />
        </a>
        <div className="contact-socials">
          <a href="https://linkedin.com/in/robabby" target="_blank" rel="noopener noreferrer">LinkedIn <ExternalLinkIcon aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
          <a href="https://bsky.app/profile/robabby.bsky.social" target="_blank" rel="noopener noreferrer">Bluesky <ExternalLinkIcon aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        {wavepointLink && (
          <p className="contact-product">Interested in WavePoint? <a href="https://wavepoint.space/" target="_blank" rel="noopener noreferrer">Visit WavePoint.<span className="sr-only"> (opens in a new tab)</span></a></p>
        )}
      </div>
    </section>
  );
}
