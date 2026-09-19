import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import Contact from "@/app/components/Contact";
import { pageMetadata, PAGE_INFO, SITE_URL } from "@/app/lib/site";
import JsonLd from "@/app/components/JsonLd";
import ExperienceLogos from "@/app/components/ExperienceLogos";

export const metadata = pageMetadata("home");

export default function Home() {
  return (
    <>
      <SiteHeader home />
      <JsonLd
        value={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${SITE_URL}/#page`,
          url: `${SITE_URL}/`,
          name: PAGE_INFO.home.title,
          mainEntity: { "@id": `${SITE_URL}/#rob` },
        }}
      />
      <main id="main-content" tabIndex={-1}>
        {" "}
        <section className="wrap hero" aria-labelledby="hero-title">
          {" "}
          <div className="hero-copy">
            {" "}
            <h1 id="hero-title" tabIndex={-1}>
              Rob Abby
            </h1>{" "}
            <p className="hero-business">
              I’m the founder and operator of <a href="#wavepoint">WavePoint</a>
              , a personal astrology business.
            </p>{" "}
            <p className="hero-lead">
              I also take on select projects with small business owners. I
              design and build websites and software, and help people use AI
              in their work.
            </p>{" "}
            <div className="hero-actions">
              {" "}
              <a className="button" href="#contact">
                Discuss a project{" "}
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>{" "}
              <a className="text-link" href="#wavepoint">
                Explore WavePoint <span aria-hidden="true">↓</span>
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <figure className="hero-portrait">
            {" "}
            <div className="portrait-frame">
              <Image
                src="/profile.jpeg"
                alt="Rob Abby outdoors by the water"
                width={449}
                height={449}
                sizes="(max-width: 370px) 110px, (max-width: 760px) 130px, 340px"
                preload
              />
            </div>{" "}
            <figcaption>
              <span className="portrait-location">
                Based in Bellingham, Washington.
                <span className="location-remote">
                  Working locally and remotely.
                </span>
              </span>
            </figcaption>{" "}
          </figure>{" "}
        </section>{" "}
        <div className="wrap experience-strip" aria-label="Previous experience">
          {" "}
          <p>
            Previously building
            <br />
            web products at
          </p>{" "}
          <ExperienceLogos />{" "}
        </div>{" "}
        <section
          className="wrap section business"
          id="wavepoint"
          aria-labelledby="wavepoint-title"
        >
          {" "}
          <div>
            {" "}
            <p className="eyebrow">My business</p>{" "}
            <h2 id="wavepoint-title">WavePoint.</h2>{" "}
            <p className="business-lead">
              Personal astrology,
              <br />
              on screen and paper.
            </p>{" "}
            <p className="body-copy">
              Birth-chart tools, a reference library, and a printed Moon
              Calendar. An iPhone and iPad app is in development.
            </p>{" "}
            <p className="body-copy">
              I look after the product, design, engineering, and day-to-day
              operation.
            </p>{" "}
            <Link className="text-link" href="/work/wavepoint">
              Read the WavePoint case study <span aria-hidden="true">→</span>
            </Link>{" "}
          </div>{" "}
          <figure className="product-figure">
            {" "}
            <div className="product-art">
              {" "}
              <Image
                className="product-web"
                loading="lazy"
                src="/images/wavepoint/wavepoint-web.png"
                alt="WavePoint’s public website, showing its free birth-chart experience and an example chart"
                width={1280}
                height={820}
                sizes="(max-width: 760px) calc(100vw - 80px), 620px"
              />{" "}
              <p className="art-label">
                Digital tools.
                <br />A year in print.
              </p>{" "}
              <Image
                className="product-calendar"
                loading="lazy"
                src="/images/wavepoint/calendar-2027-august.jpg"
                alt="The August page of WavePoint’s printed 2027 Moon Calendar"
                width={720}
                height={508}
                sizes="(max-width: 760px) 40vw, 320px"
              />{" "}
            </div>{" "}
            <figcaption>
              <span>WavePoint · Web &amp; print</span>
              <span>The website and 2027 Moon Calendar</span>
            </figcaption>{" "}
          </figure>{" "}
        </section>{" "}
        <section
          className="wrap section client-section"
          id="work"
          aria-labelledby="work-title"
        >
          {" "}
          <div className="client-intro">
            {" "}
            <p className="eyebrow">Work with me</p>{" "}
            <h2 id="work-title">
              Websites &amp; software
              <br />
              for your business.
            </h2>{" "}
            <p className="body-copy">
              Have something you want to make or improve? We can work through
              it together. I’ll help you figure out what’s needed, then design
              and build it with you.
            </p>{" "}
            <Link className="text-link" href="/work-with-me">
              Explore ways to work together <span aria-hidden="true">→</span>
            </Link>{" "}
            <p className="scope-note">
              You’ll work directly with me throughout the project.
            </p>{" "}
          </div>{" "}
          <div className="offers">
            {" "}
            <article className="offer">
              {" "}
              <p className="eyebrow">Websites</p>{" "}
              <h3>Help customers take the next step.</h3>{" "}
              <p>
                Help people understand your business, find what they need, and
                get in touch.
              </p>{" "}
            </article>{" "}
            <article className="offer">
              {" "}
              <p className="eyebrow">Tools &amp; workflows</p>{" "}
              <h3>Make daily work simpler.</h3>{" "}
              <p>
                Bring a spreadsheet, a repetitive task, or a process that keeps
                getting in the way.
              </p>{" "}
            </article>{" "}
            <article className="offer">
              {" "}
              <p className="eyebrow">Practical AI</p>{" "}
              <h3>Put AI to work on a real task.</h3>{" "}
              <p>
                We can explore where AI could help your business and try it on
                work you already do.
              </p>{" "}
            </article>{" "}
          </div>{" "}
        </section>{" "}
        <section
          className="wrap section about"
          id="about"
          aria-labelledby="about-title"
        >
          {" "}
          <div>
            {" "}
            <p className="eyebrow">Experience behind the work</p>{" "}
            <h2 id="about-title">
              Product thinking.
              <br />
              Hands-on engineering.
            </h2>{" "}
          </div>{" "}
          <div className="about-detail">
            <p className="body-copy">
              Before WavePoint, I worked on web products at PartySlate,
              project44, and SAVO. Design and engineering have both shaped how I
              work. I care about the whole experience, including the details
              people rely on every day.
            </p>
            <aside className="case-callout" aria-labelledby="savo-callout-title">
              <h3 id="savo-callout-title">
                Building a UI/UX practice at SAVO.
              </h3>
              <p>
                How I helped build the team, the shared UI system, and a closer
                connection to the people using our software.
              </p>
              <Link className="text-link" href="/work/savo">
                Read the SAVO case study <span aria-hidden="true">→</span>
              </Link>
            </aside>
          </div>{" "}
        </section>{" "}
        <Contact eyebrow="Have something in mind?" />{" "}
      </main>
    </>
  );
}
