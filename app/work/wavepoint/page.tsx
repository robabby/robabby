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
              I founded WavePoint and lead its product, design, engineering, and
              day-to-day operation. Building it has also shaped how I work with
              AI: from the first questions and prototypes through development,
              release, and ongoing improvement.
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
                It’s a useful design principle: give someone a clear place to
                start, a result they can understand, and something they can
                keep.
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
                Designing for paper means working with a fixed amount of space.
                The hierarchy, type, and amount of information have to make
                sense on the page, just as they do on a small screen.
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
              An iPhone and iPad app is in development, extending the product
              into another everyday setting.
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
                <p className="eyebrow">From idea to experience</p>{" "}
                <h2 id="process-title">
                  How I build
                  <br /> with AI.
                </h2>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="case-lead">
                  WavePoint is where I’ve developed an AI-native product
                  development process.
                </p>{" "}
                <p className="body-copy">
                  AI is part of the work throughout: researching a question,
                  exploring designs, writing code, and reviewing changes. I
                  guide the direction and stay responsible for the decisions and
                  the finished experience.
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
                    Start with the person using the product and what they need
                    to accomplish. Work through assumptions and tradeoffs, then
                    agree on what a useful result would look like.
                  </p>
                  <p className="method-artifact">
                    <span>Made concrete</span>A working brief and the questions
                    still to resolve.
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
                    Use wireframes to explore structure and clickable prototypes
                    to try the behavior. Review real words, navigation, and
                    different screen sizes while changes are still easy to make.
                  </p>
                  <p className="method-artifact">
                    <span>Made concrete</span>Something to see and try before
                    committing to the build.
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
                    The chosen direction becomes a focused piece of work in
                    Linear, where I track scope, decisions, and criteria for
                    completion. The accepted design gives implementation and
                    review a shared reference.
                  </p>
                  <p className="method-artifact">
                    <span>Made concrete</span>An agreed design, a clear scope,
                    and a way to judge completion.
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
                    Use AI to help implement, investigate problems, and
                    challenge an approach. Keep changes small enough to inspect,
                    with code review and tests matched to the behavior being
                    changed.
                  </p>
                  <p className="method-artifact">
                    <span>Made concrete</span>Reviewable changes, with checks
                    that matter to the work.
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
                    Try the actual journey, including relevant screen sizes,
                    keyboard use, and error states. After release, verify what’s
                    live and carry what I learn into the next improvement.
                  </p>
                  <p className="method-artifact">
                    <span>Made concrete</span>A working experience and a record
                    of what still needs attention.
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
                Keep the context
                <br /> with the project.
              </h2>{" "}
              <p className="body-copy">
                I work across AI models from different labs. The brief,
                decisions, design references, and working conventions live with
                the project, so each new session has a clear starting point.
              </p>{" "}
              <p className="body-copy">
                That lets me bring in different perspectives and change tools as
                the work calls for it. I still review the result and decide what
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
              <p>The project provides continuity as the tools evolve.</p>{" "}
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
                Running WavePoint keeps design connected to the practical work
                of a business: explaining the product, making purchase paths
                clear, handling personal information thoughtfully, and
                maintaining the work after release.
              </p>{" "}
              <p className="body-copy">
                For your project, we can make decisions around something you can
                see and try, keep track of what we’ve agreed, and check how the
                result works in use. You work directly with the person shaping
                and building it.
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
