type Props = { intro?: string; eyebrow?: string };

export default function Contact({
  intro = "Tell me about your business, what’s getting in the way, and what you’d like to make better.",
  eyebrow = "Have a project in mind?",
}: Props) {
  return (
    <section
      className="wrap contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id="contact-title">
          Tell me what needs
          <br />
          to work better.
        </h2>
      </div>
      <div>
        <p>{intro}</p>
        <a className="button" href="mailto:robabby23@gmail.com">
          Discuss a project{" "}
          <span className="arrow" aria-hidden="true">
            ↗
          </span>
        </a>
        <a className="email" href="mailto:robabby23@gmail.com">
          robabby23@gmail.com
        </a>
      </div>
    </section>
  );
}
