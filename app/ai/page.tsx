import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import { pageMetadata } from "@/app/lib/site";
import HeroTerminal from "./HeroTerminal";
import events from "./workflow-events.json";
import "./workflow.css";

export const metadata = pageMetadata("ai");

function WorkflowTranscript() {
  return <details className="loop-transcript">
    <summary>Read the simulated workflow</summary>
    {events.map((event, index) => <p key={index}><strong>{event.phase}</strong><br />{event.text}</p>)}
  </details>;
}

export default function AIWorkflow() {
  return <>
    <SiteHeader currentPage="ai" />
    <main id="main-content" tabIndex={-1} className="wrap ai-page">
      <section className="hero" aria-labelledby="title">
        <div className="intro">
          <h1 id="title">
            {"How I work"}
            <br />
            <span>with AI.</span>
          </h1>
          <p>I work with AI mostly in the terminal, using Codex and Claude Code to explore ideas, make plans and build software.</p>
          <p className="secondary">Here’s how the tools, plans and skills fit together—and how I guide several sessions at once.</p>
          <div className="brands">
            <div className="brand">
              <Image src="/images/ai-workflow/openai.svg" alt="" width={80} height={80} unoptimized />
              {"Codex"}
            </div>
            <div className="brand">
              <Image src="/images/ai-workflow/claude-symbol.svg" alt="" width={80} height={80} unoptimized />
              {"Claude Code"}
            </div>
          </div>
        </div>
        <HeroTerminal />
      </section>
      <section className="platform-section" aria-labelledby="platform-heading">
        <div className="platform-heading">
          <h2 id="platform-heading">
            {"The tools "}
            <br />
            {"behind the work."}
          </h2>
        </div>
        <ul className="platform-list">
          <li className="platform-row">
            <div className="platform-marks paired">
              <Image src="/images/ai-workflow/openai.svg" alt="" width={80} height={80} unoptimized />
              <Image src="/images/ai-workflow/claude-symbol.svg" alt="" width={80} height={80} unoptimized />
            </div>
            <div className="platform-copy">
              <h3>Codex + Claude Code</h3>
              <p>
                <strong>AI coding assistants.</strong>
                {" I ask questions, work through plans, and have them read files, edit code and run checks."}
              </p>
              <span className="platform-access">Terminal + Codex and Claude desktop apps</span>
            </div>
          </li>
          <li className="platform-row">
            <div className="platform-marks">
              <Image src="/images/ai-workflow/linear.svg" alt="" width={80} height={80} unoptimized />
            </div>
            <div className="platform-copy">
              <h3>Linear</h3>
              <p>
                <strong>My task tracker.</strong>
                {" Each task holds its plan and progress. Comments let people, agents and different AI models share decisions, screenshots and updates, collaborate and hand work off."}
              </p>
              <span className="platform-access">AI connection (MCP) · Desktop app</span>
            </div>
          </li>
          <li className="platform-row">
            <div className="platform-marks">
              <Image src="/images/ai-workflow/drive.png" alt="" width={80} height={80} unoptimized />
            </div>
            <div className="platform-copy">
              <h3>Google Drive</h3>
              <p>
                <strong>Shared documents and files.</strong>
                {" I use it for drafts and reference material that AI sessions can read while working on an assignment."}
              </p>
              <span className="platform-access">AI connection (MCP) · Web app</span>
            </div>
          </li>
          <li className="platform-row">
            <div className="platform-marks">
              <Image src="/images/ai-workflow/github.png" alt="" width={80} height={80} unoptimized />
            </div>
            <div className="platform-copy">
              <h3>GitHub</h3>
              <p>
                <strong>Code storage and review.</strong>
                {" Proposed changes are grouped into pull requests, which I review before adding them to the main version of the code."}
              </p>
              <span className="platform-access">GitHub’s terminal tool (gh)</span>
            </div>
          </li>
          <li className="platform-row">
            <div className="platform-marks">
              <Image src="/images/ai-workflow/vercel-symbol.svg" alt="" width={80} height={80} unoptimized />
            </div>
            <div className="platform-copy">
              <h3>Vercel</h3>
              <p>
                <strong>Website hosting.</strong>
                {" I open preview versions to check changes before publishing, then verify that the live site works."}
              </p>
              <span className="platform-access">AI connection (MCP) · Next.js / React skills</span>
            </div>
          </li>
          <li className="platform-row" id="messaging-apps">
            <div className="platform-marks messaging">
              <Image src="/images/ai-workflow/slack.svg" alt="Slack" width={80} height={80} unoptimized />
              <Image src="/images/ai-workflow/telegram.svg" alt="Telegram" width={80} height={80} unoptimized />
              <Image src="/images/ai-workflow/whatsapp.svg" alt="WhatsApp" width={80} height={80} unoptimized />
              <Image src="/images/ai-workflow/discord.svg" alt="Discord" width={80} height={80} unoptimized />
            </div>
            <div className="platform-copy">
              <h3>Messaging apps</h3>
              <p>
                <strong>Chat with people and AI agents.</strong>
                {" I share documents, task links and results in chat, using integrations—especially in Slack—to access them from the conversation."}
              </p>
              <span className="platform-access">Slack · Telegram · WhatsApp · Discord</span>
            </div>
          </li>
        </ul>
      </section>
      <section className="skills-section" id="skills" aria-labelledby="skills-heading">
        <div className="skills-intro">
          <h2 id="skills-heading">
            {"Skills that shape "}
            <br />
            {"the work."}
          </h2>
          <p>Skills are reusable instructions that guide how AI works. These are a few cornerstones of my current workflow, not the full list.</p>
        </div>
        <dl className="skills-list">
          <div className="skill-row">
            <dt>
              <a href="https://www.skills.sh/mattpocock/skills/grilling">Grilling</a>
            </dt>
            <dd>
              <h3>Make the direction tangible.</h3>
              <p>I use grilling to explore ideas and challenge assumptions. We work through questions and often iterate on a prototype, turning the discussion into a clearer plan for implementation.</p>
            </dd>
          </div>
          <div className="skill-row">
            <dt>
              <a href="https://www.skills.sh/anthropics/skills/frontend-design">frontend-design</a>
              {" + "}
              <a href="https://www.skills.sh/mattpocock/skills/prototype">Prototype</a>
            </dt>
            <dd>
              <h3>Make the idea visible.</h3>
              <p>Turn a direction into a concrete interface I can inspect and respond to.</p>
            </dd>
          </div>
          <div className="skill-row">
            <dt>
              <a href="https://www.skills.sh/dietrichgebert/ponytail/ponytail">Ponytail</a>
            </dt>
            <dd>
              <h3>Keep the implementation simple.</h3>
              <p>Reuse what exists, limit unnecessary complexity and keep the code understandable.</p>
            </dd>
          </div>
          <div className="skill-row">
            <dt>
              <a href="https://www.skills.sh/pbakaus/impeccable/impeccable">Impeccable</a>
            </dt>
            <dd>
              <h3>Improve the experience.</h3>
              <p>Shape and review layout, typography, clarity and interaction as the work develops.</p>
            </dd>
          </div>
        </dl>
      </section>
      <section className="planning-section" id="plans" aria-labelledby="plans-heading">
        <div className="work-intro">
          <h2 id="plans-heading">
            {"Good work starts"}
            <br />
            {"with a clear plan."}
          </h2>
          <p>I use grilling to shape one or several Linear tickets. Each ticket carries its plan, and can go through another grilling session when the work needs more clarity.</p>
        </div>
        <div className="planning-map">
          <div className="grill-origin">
            <h3>Grill the idea.</h3>
            <p>
              {"Clarify the outcome, "}
              <br />
              {"constraints and open questions."}
            </p>
            <span>One conversation</span>
          </div>
          <svg className="plan-branches" viewBox="0 0 100 300" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 150H40V50H95M40 150H95M40 150V250H95" />
            <path d="m89 44 6 6-6 6m0 88 6 6-6 6m0 88 6 6-6 6" />
          </svg>
          <div className="plan-tickets">
            <details className="plan-ticket">
              <summary>
                <Image src="/images/ai-workflow/linear.svg" alt="Linear" width={80} height={80} unoptimized />
                <span>
                  <strong>Build the tester guide</strong>
                  <span>Plan attached</span>
                </span>
                <svg className="ticket-expand" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m7 10 5 5 5-5" />
                </svg>
              </summary>
              <dl>
                <div>
                  <dt>Outcome</dt>
                  <dd>Give testers a clear place to start.</dd>
                </div>
                <div>
                  <dt>Scope</dt>
                  <dd>Reuse the current page and shared components.</dd>
                </div>
                <div>
                  <dt>Review</dt>
                  <dd>Check the guide on desktop, phone and keyboard.</dd>
                </div>
              </dl>
            </details>
            <details className="plan-ticket">
              <summary>
                <Image src="/images/ai-workflow/linear.svg" alt="Linear" width={80} height={80} unoptimized />
                <span>
                  <strong>Capture the app walkthrough</strong>
                  <span>Plan attached</span>
                </span>
                <svg className="ticket-expand" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m7 10 5 5 5-5" />
                </svg>
              </summary>
              <dl>
                <div>
                  <dt>Outcome</dt>
                  <dd>Show the steps a tester needs to follow.</dd>
                </div>
                <div>
                  <dt>Scope</dt>
                  <dd>Capture the entry point, settings and return path.</dd>
                </div>
                <div>
                  <dt>Review</dt>
                  <dd>Review the screenshots and navigation sequence.</dd>
                </div>
              </dl>
            </details>
            <details className="plan-ticket">
              <summary>
                <Image src="/images/ai-workflow/linear.svg" alt="Linear" width={80} height={80} unoptimized />
                <span>
                  <strong>Write the invitation</strong>
                  <span>Plan attached</span>
                </span>
                <svg className="ticket-expand" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m7 10 5 5 5-5" />
                </svg>
              </summary>
              <dl>
                <div>
                  <dt>Outcome</dt>
                  <dd>Help testers understand how to get started.</dd>
                </div>
                <div>
                  <dt>Scope</dt>
                  <dd>Use the shared draft and keep the invitation concise.</dd>
                </div>
                <div>
                  <dt>Review</dt>
                  <dd>Review the wording and links before sending.</dd>
                </div>
              </dl>
            </details>
          </div>
        </div>
        <div className="plan-return">
          <svg viewBox="0 0 32 20" aria-hidden="true">
            <path d="M8 15H22a6 6 0 0 0 0-12H5m5-3L5 3l5 4" />
          </svg>
          <p>Grill a ticket again. Update its plan. Pick up from there.</p>
        </div>
        <p className="work-caption">Illustrative tickets from one idea. Open a ticket to see its plan.</p>
        <div className="work-evidence" id="linear-in-practice">
          <h3>One task, from plan to review.</h3>
          <p className="evidence-intro">Here’s a real example: a WavePoint iPhone widget. We recorded what to build in a Linear task. The AI session then added progress notes and screenshots to that same task for review.</p>
          <ul className="screens-gallery evidence-pair" aria-label="A real WavePoint task in Linear">
            <li><figure>
              <figcaption><strong>The plan</strong><span>Show the current sky and Moon details, with agreed behavior and implementation steps.</span></figcaption>
              <a className="screen-image" href="/images/ai-workflow/linear-widget-plan.png" aria-label="Open full-size screenshot: Linear implementation plan">
                <Image src="/images/ai-workflow/linear-widget-plan.png" alt="Linear task SG-1712 for WavePoint widgets, showing its implementation plan and accepted product decisions." width={3194} height={1808} sizes="(max-width: 720px) 85vw, (max-width: 1296px) 46vw, 588px" />
              </a>
            </figure></li>
            <li><figure>
              <figcaption><strong>The review</strong><span>The session posts what changed, which checks passed and a screenshot I can inspect.</span></figcaption>
              <a className="screen-image" href="/images/ai-workflow/linear-widget-review.png" aria-label="Open full-size screenshot: Linear review comment">
                <Image src="/images/ai-workflow/linear-widget-review.png" alt="An MCP-posted comment on the same Linear task with implementation notes, checks, and a screenshot of the running Moon widget." width={3204} height={2004} sizes="(max-width: 720px) 85vw, (max-width: 1296px) 46vw, 588px" />
              </a>
            </figure></li>
          </ul>
          <p className="evidence-hint">Both screenshots show the same task. Select an image to view it full size.</p>
        </div>
      </section>
      <section className="parallel-section" id="parallel" aria-labelledby="parallel-heading">
        <div className="work-intro">
          <h2 id="parallel-heading">Working in parallel.</h2>
          <p>When working in the terminal, I generally aim for three or four concurrent AI sessions actively building or working on something. I try not to stay above four parallel sessions for too long. It depends on the work.</p>
        </div>
        <div className="parallel-board">
          <div className="parallel-board-heading">
            <strong>Four concurrent sessions across projects</strong>
            <span>Illustrative snapshot</span>
          </div>
          <ul className="parallel-sessions">
            <li>
              <svg className="session-symbol" viewBox="0 0 32 28" aria-hidden="true">
                <rect x="1" y="1" width="30" height="26" rx="3" />
                <path d="m7 8 5 5-5 5m10 0h8" />
              </svg>
              <div className="parallel-project">
                <strong>WavePoint iOS</strong>
                <span>Journal navigation</span>
              </div>
              <div className="parallel-work">
                <strong>Building</strong>
                <span>Implementing the agreed navigation changes.</span>
              </div>
            </li>
            <li>
              <svg className="session-symbol" viewBox="0 0 32 28" aria-hidden="true">
                <rect x="1" y="1" width="30" height="26" rx="3" />
                <path d="m7 8 5 5-5 5m10 0h8" />
              </svg>
              <div className="parallel-project">
                <strong>WavePoint web</strong>
                <span>Tester guide</span>
              </div>
              <div className="parallel-work">
                <strong>Shaping</strong>
                <span>Clarifying the page structure and what belongs in the ticket.</span>
              </div>
            </li>
            <li>
              <svg className="session-symbol" viewBox="0 0 32 28" aria-hidden="true">
                <rect x="1" y="1" width="30" height="26" rx="3" />
                <path d="m7 8 5 5-5 5m10 0h8" />
              </svg>
              <div className="parallel-project">
                <strong>robabby.com</strong>
                <span>AI workflow page</span>
              </div>
              <div className="parallel-work">
                <strong>Prototyping</strong>
                <span>Making a visual example to review together.</span>
              </div>
            </li>
            <li>
              <svg className="session-symbol" viewBox="0 0 32 28" aria-hidden="true">
                <rect x="1" y="1" width="30" height="26" rx="3" />
                <path d="m7 8 5 5-5 5m10 0h8" />
              </svg>
              <div className="parallel-project">
                <strong>WavePoint content</strong>
                <span>Reading copy</span>
              </div>
              <div className="parallel-work">
                <strong>Grilling</strong>
                <span>Resolving the audience, tone and boundaries of the assignment.</span>
              </div>
            </li>
          </ul>
          <div className="parallel-review">
            <span>I move between sessions</span>
            <p>Answer questions, inspect the work and give feedback. The plans keep the context with each assignment.</p>
          </div>
        </div>
        <figure className="terminal-capture work-evidence" id="terminal-workspace">
          <figcaption><h3>My terminal workspace</h3><p>Tabs keep separate conversations available as I move between projects. Here, the Moments session moves from a merged change into the next design question. Open tabs aren’t necessarily all actively working.</p></figcaption>
          <a className="screen-image" href="/images/ai-workflow/terminal-tabs.png" aria-label="Open full-size screenshot: my terminal workspace">
            <Image src="/images/ai-workflow/terminal-tabs.png" alt="Rob’s terminal with named tabs for iOS, web, content and other projects. The selected Moments session reports a merged change and asks about the next design decision." width={2464} height={1794} sizes="(max-width: 720px) calc(100vw - 40px), (max-width: 1096px) calc(100vw - 96px), 1000px" />
          </a>
          <a className="full-image-link" href="/images/ai-workflow/terminal-tabs.png">Open full-size screenshot →</a>
        </figure>
      </section>
      <section className="work-screens" id="working-screens" aria-labelledby="screens-heading">
        <div className="work-intro">
          <h2 id="screens-heading">From the terminal to working screens.</h2>
          <p>Some sessions build iOS features in separate simulators, while others update the website or develop content. I review working screens, screenshot walkthroughs and proposed changes as the work progresses.</p>
        </div>
        <p className="screens-swipe">Three simulator views. Swipe to explore.</p>
        <ul className="screens-gallery" aria-label="WavePoint development in Device Hub">
          {[
            { file: "event-details", title: "Event details", device: "iPhone-1", width: 1442, height: 1754, alt: "Device Hub with iPhone-1 selected, showing WavePoint’s event details and an interpretation of a Moon transit." },
            { file: "cycles", title: "Cycles", device: "iPhone-2", width: 1436, height: 1752, alt: "Device Hub with iPhone-2 selected, showing WavePoint’s lunar, seasonal and planetary cycles." },
            { file: "moments", title: "Moments", device: "iPhone-3", width: 1438, height: 1754, alt: "Device Hub with iPhone-3 selected, showing a WavePoint profile with photo and text Moments in dark mode." },
          ].map(screen => (
            <li key={screen.file}>
              <figure>
                <a className="screen-image" href={`/images/ai-workflow/device-hub-${screen.file}.png`} aria-label={`Open full-size screenshot: ${screen.title}`}>
                  <Image src={`/images/ai-workflow/device-hub-${screen.file}.png`} alt={screen.alt} width={screen.width} height={screen.height} sizes="(max-width: 720px) 85vw, (max-width: 1296px) 30vw, 384px" />
                </a>
                <figcaption><strong>{screen.title}</strong><span>{screen.device} · Open full size</span></figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <p className="work-caption">WavePoint development previews in three separate iOS simulators, captured in Device Hub. Select an image to view it full size.</p>
      </section>
      <WorkflowTranscript />
      <p className="workflow-end"><Link href="/#work">Explore my work →</Link><Link href="/work-with-me">Ways we can work together →</Link></p>
    </main>
  </>;
}
