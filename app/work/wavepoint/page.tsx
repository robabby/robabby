import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import Contact from "@/app/components/Contact";
import { pageMetadata } from "@/app/lib/site";

export const metadata = pageMetadata("wavepoint");

export default function WavePoint() {
  return (
    <>
      <SiteHeader active="wavepoint" />

      <main id="main-content" tabIndex={-1}>
        {" "}
        <div className="wrap">
          {" "}
          <section className="case-hero" aria-labelledby="case-title">
            {" "}
            <p className="eyebrow">A business I build and operate</p>{" "}
            <h1 id="case-title">WavePoint.</h1>{" "}
            <p className="sub-lead">Personal astrology, on screen and paper.</p>{" "}
            <p className="sub-intro">
              I’m the founder and operator of WavePoint. I’m responsible for
              the product, design, engineering, and day-to-day operation.
              Building it has taught me a great deal about working with AI and
              about bringing an idea into the world.
            </p>{" "}
            <div className="hero-actions">
              {" "}
              <a
                className="text-link"
                href="https://wavepoint.space/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit WavePoint <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>{" "}
              <a className="text-link" href="#process">
                How I build with AI <span aria-hidden="true">↓</span>
              </a>{" "}
            </div>{" "}
          </section>{" "}
          <dl className="case-facts">
            {" "}
            <div>
              <dt>My role</dt>
              <dd>Founder &amp; operator</dd>
            </div>{" "}
            <div>
              <dt>Available today</dt>
              <dd>Birth charts, library, Moon Calendar</dd>
            </div>{" "}
            <div>
              <dt>In development</dt>
              <dd>iPhone &amp; iPad app</dd>
            </div>{" "}
          </dl>{" "}
          <section className="case-overview" aria-labelledby="chart-title">
            {" "}
            <figure>
              {" "}
              <Image
                src="/images/wavepoint/wavepoint-web.png"
                width={1280}
                height={820}
                alt="WavePoint’s public homepage, with the birth-chart introduction and a labeled example chart"
                sizes="(max-width: 760px) calc(100vw - 80px), 620px"
              />{" "}
              <figcaption>
                The public website, with an example birth chart.
              </figcaption>{" "}
            </figure>{" "}
            <div>
              {" "}
              <p className="eyebrow">The first visit</p>{" "}
              <h2 id="chart-title">
                A birth chart
                <br />
                without sign-up.
              </h2>{" "}
              <p className="body-copy">
                Visitors can create a birth chart and download a PDF or PNG
                without creating an account. A reference library gives them
                another way to explore astrology through the site.
              </p>{" "}
              <p className="body-copy">
                I want someone to be able to try WavePoint and take something
                away from that first visit. They can make a chart, explore it,
                and keep a copy without signing up.
              </p>{" "}
            </div>{" "}
          </section>{" "}
          <section
            className="case-overview case-print"
            aria-labelledby="print-title"
          >
            {" "}
            <div>
              {" "}
              <p className="eyebrow">A physical product</p>{" "}
              <h2 id="print-title">
                A year
                <br />
                on paper.
              </h2>{" "}
              <p className="body-copy">
                The 2027 Moon Calendar gives WavePoint a physical form.
                Published sample pages let people see what they’re buying.
              </p>{" "}
              <p className="body-copy">
                Working on paper brings a different set of design questions.
                The page has a fixed size, so I have to think carefully about
                what belongs, what’s readable, and where someone’s eye goes
                first.
              </p>{" "}
            </div>{" "}
            <figure>
              {" "}
              <Image
                src="/images/wavepoint/calendar-2027-august.jpg"
                width={1600}
                height={1131}
                loading="lazy"
                alt="August sample page from WavePoint’s 2027 Moon Calendar"
                sizes="(max-width: 760px) calc(100vw - 80px), 620px"
              />{" "}
              <figcaption>
                A published sample from the 2027 Moon Calendar.
              </figcaption>{" "}
            </figure>{" "}
          </section>{" "}
          <aside className="case-app-note" aria-labelledby="app-note-title">
            {" "}
            <h3 id="app-note-title">An app is taking shape.</h3>{" "}
            <p>
              I’m also developing an iPhone and iPad app.
            </p>{" "}
          </aside>{" "}
          <section
            className="case-method"
            id="process"
            aria-labelledby="process-title"
          >
            {" "}
            <div className="case-section-intro">
              {" "}
              <div>
                {" "}
                <p className="eyebrow">What I’ve learned building WavePoint</p>{" "}
                <h2 id="process-title">
                  How I build
                  <br /> with AI.
                </h2>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="case-lead">
                  Building WavePoint has changed how I work.
                </p>{" "}
                <p className="body-copy">
                  I use AI to research questions, explore designs, build
                  prototypes, write code, and review the result. I make the
                  decisions and stay responsible for the finished work.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <ol
              className="method-steps"
              role="list"
              aria-label="Product development process"
            >
              {" "}
              <li>
                {" "}
                <div className="method-heading">
                  <span className="method-number" aria-hidden="true">
                    01
                  </span>
                  <h3>Understand the problem.</h3>
                </div>{" "}
                <div>
                  <p>
                    I start with questions. Who is this for? What are they
                    trying to do? I use the conversation to challenge
                    assumptions and understand what would make the experience
                    better.
                  </p>
                </div>{" "}
              </li>{" "}
              <li>
                {" "}
                <div className="method-heading">
                  <span className="method-number" aria-hidden="true">
                    02
                  </span>
                  <h3>Make the experience visible.</h3>
                </div>{" "}
                <div>
                  <p>
                    I use wireframes and clickable prototypes to see how an
                    idea holds up. Trying the words, navigation, and behavior
                    together often reveals things a written description
                    misses.
                  </p>
                </div>{" "}
              </li>{" "}
              <li>
                {" "}
                <div className="method-heading">
                  <span className="method-number" aria-hidden="true">
                    03
                  </span>
                  <h3>Agree on what to build.</h3>
                </div>{" "}
                <div>
                  <p>
                    Once the direction is settled, I record what I’m building
                    and how I’ll know it’s done. I use Linear to keep track of
                    the work, decisions, and questions still to resolve.
                  </p>
                </div>{" "}
              </li>{" "}
              <li>
                {" "}
                <div className="method-heading">
                  <span className="method-number" aria-hidden="true">
                    04
                  </span>
                  <h3>Build and review.</h3>
                </div>{" "}
                <div>
                  <p>
                    I work with AI to write code, investigate problems, and
                    question an approach. I review the changes and use tests
                    to check the behavior that matters.
                  </p>
                </div>{" "}
              </li>{" "}
              <li>
                {" "}
                <div className="method-heading">
                  <span className="method-number" aria-hidden="true">
                    05
                  </span>
                  <h3>Check the experience in use.</h3>
                </div>{" "}
                <div>
                  <p>
                    I try the experience itself: different screens, keyboard
                    navigation, and what happens when something goes wrong. I
                    check the live result after release and keep track of what
                    needs attention.
                  </p>
                </div>{" "}
              </li>{" "}
            </ol>{" "}
          </section>{" "}
          <section
            className="case-context"
            id="across-models"
            aria-labelledby="context-title"
          >
            {" "}
            <div className="context-copy">
              {" "}
              <p className="eyebrow">Working across models</p>{" "}
              <h2 id="context-title">
                The work continues
                <br />
                across tools.
              </h2>{" "}
              <p className="body-copy">
                I work with AI models from different labs. I keep the brief,
                designs, decisions, and working conventions with the project
                so I can continue across tools and sessions.
              </p>{" "}
              <p className="body-copy">
                That gives me a way to compare perspectives and choose tools
                for the work at hand. I review what comes back and decide what
                belongs in the product.
              </p>{" "}
            </div>{" "}
            <div
              className="context-record"
              role="group"
              aria-labelledby="context-record-title"
            >
              {" "}
              <h3 id="context-record-title">What carries forward</h3>{" "}
              <dl>
                {" "}
                <div>
                  <dt>Purpose</dt>
                  <dd>Who it’s for, the problem, and the agreed scope.</dd>
                </div>{" "}
                <div>
                  <dt>Design</dt>
                  <dd>
                    References, prototypes, patterns, and accepted decisions.
                  </dd>
                </div>{" "}
                <div>
                  <dt>Progress</dt>
                  <dd>
                    The work in Linear, open questions, and what happens next.
                  </dd>
                </div>{" "}
                <div>
                  <dt>Evidence</dt>
                  <dd>
                    Versioned code, reviews, checks, and known limitations.
                  </dd>
                </div>{" "}
              </dl>{" "}
              <p>The tools change. The project keeps its history.</p>{" "}
            </div>{" "}
          </section>{" "}
          <section className="case-transfer" aria-labelledby="transfer-title">
            {" "}
            <div>
              {" "}
              <p className="eyebrow">What I bring to your project</p>{" "}
              <h2 id="transfer-title">
                A view of the
                <br /> whole experience.
              </h2>{" "}
            </div>{" "}
            <div>
              {" "}
              <p className="body-copy">
                Running WavePoint means thinking about more than the
                interface. I also have to explain the product, help people buy
                it, take care with their information, and maintain it after
                release.
              </p>{" "}
              <p className="body-copy">
                That’s the perspective I bring to client work. We’ll work
                through the decisions together, with prototypes we can try and
                a shared understanding of what we’re building. I’ll be the
                person doing the hands-on work.
              </p>{" "}
              <Link className="text-link" href="/work-with-me">
                Ways we can work together <span aria-hidden="true">→</span>
              </Link>{" "}
            </div>{" "}
          </section>{" "}
        </div>{" "}
        <Contact />{" "}
      </main>
    </>
  );
}
