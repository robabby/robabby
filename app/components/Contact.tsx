type Props = { intro?: string; eyebrow?: string };

export default function Contact({
  intro = "Send me a link and a few sentences about what you’d like to make or improve. We can start there.",
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
          Tell me what
          <br />
          you have in mind.
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
