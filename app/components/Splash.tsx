import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const YEAR = new Date().getFullYear();

const PROJECTS = [
  {
    name: "WavePoint",
    description:
      "Solo-built and live in production: an astrology platform computing birth charts, astrocartography, and transits from live astronomical positions. A pure-function TypeScript computation engine on real ephemeris math, behind a Next.js 16 App Router app with partial prerendering, roughly a thousand programmatically generated pages, Supabase auth, and Stripe subscriptions — 2,300+ unit tests and CI on every change, 700+ PRs merged solo.",
    stack: "Next.js 16 · React 19 · TypeScript · Supabase · Stripe",
    links: [{ label: "Live site", href: "https://wavepoint.space" }],
  },
];

const EXPERIENCE = [
  {
    company: "VIMSIA",
    role: "Technology Strategist & IT Manager",
    dates: "Mar 2025 – Nov 2025",
    summary:
      "Led technology strategy and AI integration for a PK-12 school; reduced support requests 20% through training and systems improvements.",
  },
  {
    company: "PartySlate",
    role: "Staff Engineer",
    dates: "Dec 2018 – Feb 2024",
    summary:
      "Senior-most frontend engineer through growth from a 12-person startup to a 50+ employee Series-B company. Led the rewrite of Find Venues — the platform's highest-traffic page — driving a 150% increase in venue inquiries, and built the 25-module component library that cut feature rollout cycles 40% across teams.",
  },
  {
    company: "project44",
    role: "Senior UX Engineer",
    dates: "Jun 2018 – Dec 2018",
    summary:
      "Built map-based logistics interfaces in a React/Redux codebase; established a living style guide and UI component library.",
  },
  {
    company: "SAVO",
    role: "Senior UI/UX & Product Developer",
    dates: "Apr 2013 – Jun 2018",
    summary:
      "Led the spinout of an autonomous UI/UX team and a living design system informed by 50+ user research sessions; founded the org-wide Front-End Guild.",
  },
  {
    company: "Web2Carz",
    role: "Web Developer",
    dates: "Nov 2011 – Mar 2013",
    summary:
      "Built consumer-facing galleries, forms, and a standalone mobile web app; introduced git and a formal deployment process.",
  },
];

export default function Splash() {
  return (
    <>
      <ThemeToggle />
      <main>
        <section className="splash">
          <article className="card lift-in">
            <Image
              className="portrait"
              src="/profile.jpeg"
              alt=""
              width={88}
              height={88}
              priority
            />
            <p className="eyebrow">Bellingham, WA</p>
            <h1 className="name">Rob Abby</h1>
            <hr className="rule" aria-hidden />
            <p className="role">Senior Frontend Product Engineer</p>
            <p className="tagline">
              15 years shipping consumer and B2B web products — React and
              TypeScript since 2018.
            </p>
            <p className="proof">Previously: PartySlate · project44 · SAVO</p>
            <a
              className="cta"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Résumé
            </a>
            <nav className="links" aria-label="Contact">
              <a
                href="https://linkedin.com/in/robabby"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span aria-hidden>·</span>
              <a href="mailto:robabby23@gmail.com">Email</a>
              <span aria-hidden>·</span>
              <a
                href="https://github.com/robabby"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </nav>
          </article>
        </section>
        <section
          className="work fade-in fade-in-d2"
          aria-labelledby="work-heading"
        >
          <h2 className="eyebrow" id="work-heading">
            Current Work
          </h2>
          <p className="work-sub">
            Founder &amp; Senior Frontend Engineer · WavePoint · Nov 2025 –
            Present
          </p>
          <hr className="rule" aria-hidden />
          <ul className="work-list">
            {PROJECTS.map((project) => (
              <li className="work-item" key={project.name}>
                <h3 className="work-name">{project.name}</h3>
                <p className="work-description">{project.description}</p>
                <p className="work-stack">{project.stack}</p>
                <p className="work-links">
                  {project.links.map((link, i) => (
                    <span key={link.href}>
                      {i > 0 && <span aria-hidden> · </span>}
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section
          className="work fade-in fade-in-d3"
          aria-labelledby="experience-heading"
        >
          <h2 className="eyebrow" id="experience-heading">
            Experience
          </h2>
          <hr className="rule" aria-hidden />
          <ul className="work-list">
            {EXPERIENCE.map((job) => (
              <li className="work-item" key={job.company}>
                <h3 className="work-name">{job.company}</h3>
                <p className="exp-meta">
                  {job.role} · {job.dates}
                </p>
                <p className="work-description">{job.summary}</p>
              </li>
            ))}
          </ul>
        </section>
        <footer className="footer">
          <p className="copyright">© {YEAR} Rob Abby</p>
          <p className="colophon">
            Designed &amp; built with Next.js ·{" "}
            <a
              href="https://github.com/robabby/robabby"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source
            </a>{" "}
            · <Link href="/privacy">Privacy</Link>
          </p>
        </footer>
      </main>
    </>
  );
}
