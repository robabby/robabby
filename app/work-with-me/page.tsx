import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowDownIcon } from "@radix-ui/react-icons";
import SiteHeader from "@/app/components/SiteHeader";
import Contact from "@/app/components/Contact";
import { pageMetadata } from "@/app/lib/site";

export const metadata = pageMetadata("services");

export default function WorkWithMe() {
  return (
    <>
      <SiteHeader currentPage="services" localContact />

      <main id="main-content" tabIndex={-1}>
        <section className="wrap sub-hero" aria-labelledby="services-title">
          <div>
            <h1 id="services-title">
              Web design,
              <br />
              software and AI.
            </h1>
            <p className="sub-lead">
              Bring me an idea, a product you’d like to improve, or a website
              you’ve outgrown. I can help work through what it needs, design
              how it should work, and build it with you.
            </p>
            <p className="sub-intro">
              I also help people connect the tools they already use and put AI
              to work in everyday workflows. I’m based in Bellingham,
              Washington, and work locally and remotely.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">
                Discuss a project{" "}
                <ArrowRightIcon className="arrow" aria-hidden="true" />
              </a>
              <a className="text-link" href="#services">
                Ways I can help <ArrowDownIcon aria-hidden="true" />
              </a>
            </div>
          </div>
          <figure className="proof-card">
            <Image
              src="/images/wavepoint/homepage-2026-11.png"
              width={1440}
              height={1000}
              alt="WavePoint’s current website homepage, with a Day chart and Moment example"
              sizes="(max-width: 720px) calc(100vw - 68px), 520px"
            />
            <figcaption>
              <h2>WavePoint.</h2>
              <p>
                WavePoint is the business I founded and run. It’s where I put
                this way of working into practice, from the first idea to the
                details of running the product.
              </p>
              <a className="text-link" href="https://wavepoint.space/">
                Visit WavePoint <ArrowRightIcon className="arrow" aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
        </section>
        <section
          className="wrap service-list"
          id="services"
          aria-label="Services"
        >
          <article className="service-row">
            <div><h2>Improve an existing product.</h2></div>
            <div>
              <p className="body-copy">If a part of your product is confusing or getting in people’s way, we can work through it together. I can help understand the problem, refine the design, and work with your team on the implementation.</p>
              <ul className="deliverables">
                <li>Make a difficult workflow easier to use</li>
                <li>Design and build improvements to the interface</li>
                <li>Develop shared components that help the team build consistently</li>
              </ul>
              <p className="body-copy">See how I approached this work at <Link href="/work/partyslate">PartySlate</Link> and <Link href="/work/savo">SAVO</Link>.</p>
            </div>
          </article>
          <article className="service-row">
            <div><h2>Shape and build something new.</h2></div>
            <div>
              <p className="body-copy">If you have an idea, we can work out who it’s for, what it needs to do, and where to start. I can help make it tangible with a prototype, then design and build an agreed first version.</p>
              <ul className="deliverables">
                <li>Work through the idea and its scope</li>
                <li>Build a prototype to try with the people who would use it</li>
                <li>Take an agreed piece of the product through design and development</li>
              </ul>
            </div>
          </article>
          <article className="service-row">
            <div><h2>Design and build a website.</h2></div>
            <div>
              <p className="body-copy">A good website helps people understand what you offer and act on it. We can improve what you have or build a new site around the needs of your business and customers.</p>
              <ul className="deliverables">
                <li>A clearer homepage and service pages</li>
                <li>Navigation and contact paths that work well on phones</li>
                <li>Accessible interfaces, responsive layouts, and a sound search foundation</li>
              </ul>
            </div>
          </article>
          <article className="service-row">
            <div><h2>AI workflows and automation.</h2></div>
            <div>
              <p className="body-copy">If you’re spending time gathering information, moving it between tools, or repeating the same steps, we can look at where AI and automation could help. I can help connect the tools you already use, set up a practical workflow, and work through what should happen automatically and what needs your review.</p>
              <ul className="deliverables">
                <li>Connect tools such as Google Drive, Gmail, or Slack with AI where useful</li>
                <li>Start with one workflow, such as preparing a briefing or drafting a follow-up</li>
                <li>Try it with real examples, refine it together, and make sure you know how to use it</li>
              </ul>
            </div>
          </article>
        </section>
        <section className="wrap approach" aria-labelledby="approach-title">
          <div>
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
                  I’ll ask about your business, the people doing the work,
                  and what’s getting in their way. We’ll work out what needs
                  to change.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Make it tangible.</h3>
                <p>
                  I’ll make a prototype or set up a workflow we can try together.
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
        </section>
        <section className="wrap questions" aria-labelledby="questions-title">
          <div>
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
                Yes. We can start by looking at the current website, product, or workflow
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
