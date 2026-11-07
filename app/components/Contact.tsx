import { ArrowRightIcon } from "@radix-ui/react-icons";

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
        <a className="text-link email" href="mailto:robabby23@gmail.com">
          robabby23@gmail.com <ArrowRightIcon className="arrow" aria-hidden="true" />
        </a>
        {wavepointLink && (
          <p className="contact-product">Interested in WavePoint? <a href="https://wavepoint.space/">Visit WavePoint.</a></p>
        )}
      </div>
    </section>
  );
}
