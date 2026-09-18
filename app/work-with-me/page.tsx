import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import Contact from "@/app/components/Contact";
import { pageMetadata } from "@/app/lib/site";

export const metadata = pageMetadata("services");

export default function WorkWithMe() {
  return (
    <>
      <SiteHeader active="services" />

      <main id="main-content" tabIndex={-1}>
        <section className="wrap sub-hero" aria-labelledby="services-title">
          <div>
            <p className="eyebrow">Work with me</p>
            <h1 id="services-title">
              Web design,
              <br />
              software &amp; AI.
            </h1>
            <p className="sub-lead">
              Bring me an idea, a website you’ve outgrown, or a problem you
              haven’t quite figured out yet. We can work through it together.
            </p>
            <p className="sub-intro">
              I design and build websites and software for small businesses,
              and help owners put AI to use in their work. I’m based in
              Bellingham, Washington, and work locally and remotely.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">
                Discuss a project{" "}
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a className="text-link" href="#services">
                Ways I can help <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <figure className="proof-card">
            <Image
              src="/images/wavepoint/wavepoint-web.png"
              width={1280}
              height={820}
              alt="WavePoint’s birth-chart introduction and example chart"
              sizes="(max-width: 760px) calc(100vw - 80px), 620px"
            />
            <figcaption>
              <p className="eyebrow">From my own business</p>
              <h2>WavePoint.</h2>
              <p>
                WavePoint is the business I founded and run. It’s where I put
                this way of working into practice, from the first idea to the
                details of running the product.
              </p>
              <Link className="text-link" href="/work/wavepoint">
                Explore the work <span aria-hidden="true">→</span>
              </Link>
            </figcaption>
          </figure>
        </section>{" "}
        <section
          className="wrap service-list"
          id="services"
          aria-label="Services"
        >
          <article className="service-row">
            <div>
              <p className="eyebrow">Website design &amp; development</p>
              <h2>
                Make the next
                <br />
                step obvious.
              </h2>
            </div>
            <div>
              <p className="body-copy">
                A good website helps people understand what you offer and act on
                it. We can improve what you have or build a new site around the
                needs of your business and customers.
              </p>
              <ul className="deliverables">
                <li>A clearer homepage and service pages</li>
                <li>Navigation and contact paths that work well on phones</li>
                <li>
                  Accessible interfaces, responsive layouts, and a sound search
                  foundation
                </li>
              </ul>
            </div>
          </article>
          <article className="service-row">
            <div>
              <p className="eyebrow">Software &amp; product interfaces</p>
              <h2>
                Give a difficult
                <br />
                process a better tool.
              </h2>
            </div>
            <div>
              <p className="body-copy">
                If you’re working around the limits of a spreadsheet or an
                awkward piece of software, let’s look at how the process
                works. I can help you improve the interface or build a tool
                around what you need.
              </p>
              <ul className="deliverables">
                <li>A prototype to test an idea before a larger build</li>
                <li>A clearer interface for an existing product</li>
                <li>
                  An internal tool for a workflow that has outgrown a
                  spreadsheet
                </li>
              </ul>
            </div>
          </article>
          <article className="service-row">
            <div>
              <p className="eyebrow">Practical AI</p>
              <h2>
                Start with a task
                <br />
                that matters.
              </h2>
            </div>
            <div>
              <p className="body-copy">
                I use AI throughout my work on WavePoint. If you’re wondering
                where it could help your business, we can start with a task
                you already do, try an approach together, and check whether it
                helps.
              </p>
              <ul className="deliverables">
                <li>Choose tools and models around the task</li>
                <li>
                  Give AI useful context and a clear way to check its work
                </li>
                <li>
                  Try the workflow with realistic examples and refine it
                  together
                </li>
              </ul>
              <Link
                className="text-link service-process-link"
                href="/work/wavepoint#process"
              >
                See how I build with AI <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </section>{" "}
        <section className="wrap approach" aria-labelledby="approach-title">
          <div>
            <p className="eyebrow">Working together</p>
            <h2 id="approach-title">
              How we’ll
              <br />
              work together.
            </h2>
          </div>
          <ol className="approach-list">
            <li>
              <div>
                <h3>Understand the problem.</h3>
                <p>
                  I’ll ask about your business, the people using the product,
                  and what’s getting in their way. We’ll work out what needs
                  to change.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Make it tangible.</h3>
                <p>
                  I’ll make a prototype we can look at and try together.
                  Seeing the idea in action gives us something concrete to
                  discuss and improve.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Build, check, and hand over.</h3>
                <p>
                  Once we agree on what to build, I’ll do the hands-on work
                  and check how it behaves. We’ll go through the finished
                  result together so you know how to use it.
                </p>
              </div>
            </li>
          </ol>
        </section>{" "}
        <section className="wrap questions" aria-labelledby="questions-title">
          <div>
            <p className="eyebrow">A few practical questions</p>
            <h2 id="questions-title">Before we begin.</h2>
          </div>
          <div>
            <details>
              <summary>Do I need to be in Bellingham?</summary>
              <p>
                No. I work with local and remote clients. We can review the work
                and make decisions together wherever you are.
              </p>
            </details>
            <details>
              <summary>Can you work with what I already have?</summary>
              <p>
                Yes. We can start by looking at the current website or product
                and decide whether a focused improvement or a new build makes
                sense.
              </p>
            </details>
            <details>
              <summary>What should I send first?</summary>
              <p>
                A link to your business, a short description of the problem, and
                any relevant examples are enough to begin a conversation.
              </p>
            </details>
          </div>
        </section>
        <Contact />
      </main>
    </>
  );
}
