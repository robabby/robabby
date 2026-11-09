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
          <p>95% of the time, I work with AI directly in the terminal.</p>
          <p className="secondary">I rarely touch VS Code or work in an IDE.</p>
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
                <strong>Think, build and review.</strong>
                {" I give direction, explore ideas and work through changes in the terminal."}
              </p>
              <span className="platform-access">Terminal UI</span>
            </div>
          </li>
          <li className="platform-row">
            <div className="platform-marks">
              <Image src="/images/ai-workflow/linear.svg" alt="" width={80} height={80} unoptimized />
            </div>
            <div className="platform-copy">
              <h3>Linear</h3>
              <p>
                <strong>Keep the work connected.</strong>
                {" Assignments, plans and handoffs stay together, including decisions, screenshots and feedback."}
              </p>
              <span className="platform-access">MCP + desktop app</span>
            </div>
          </li>
          <li className="platform-row">
            <div className="platform-marks">
              <Image src="/images/ai-workflow/drive.png" alt="" width={80} height={80} unoptimized />
            </div>
            <div className="platform-copy">
              <h3>Google Drive</h3>
              <p>
                <strong>Bring the context along.</strong>
                {" Shared documents and drafts give sessions the background they need."}
              </p>
              <span className="platform-access">MCP + web app</span>
            </div>
          </li>
          <li className="platform-row">
            <div className="platform-marks">
              <Image src="/images/ai-workflow/github.png" alt="" width={80} height={80} unoptimized />
            </div>
            <div className="platform-copy">
              <h3>GitHub</h3>
              <p>
                <strong>Track and review changes.</strong>
                {" Code history and pull requests make changes inspectable before they merge."}
              </p>
              <span className="platform-access">gh command-line tool</span>
            </div>
          </li>
          <li className="platform-row">
            <div className="platform-marks">
              <Image src="/images/ai-workflow/vercel-symbol.svg" alt="" width={80} height={80} unoptimized />
            </div>
            <div className="platform-copy">
              <h3>Vercel</h3>
              <p>
                <strong>See the web work running.</strong>
                {" Previews let me inspect the result; deployments deliver the approved work."}
              </p>
              <span className="platform-access">MCP + Next.js / React skills</span>
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
          <p>Reusable instructions for how AI helps me plan, build and review.</p>
        </div>
        <dl className="skills-list">
          <div className="skill-row">
            <dt>
              <a href="https://www.skills.sh/mattpocock/skills/grilling">Grilling</a>
            </dt>
            <dd>
              <h3>Decide what to build.</h3>
              <p>Ask focused questions and resolve the important choices before implementation.</p>
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
      </section>
      <section className="parallel-section" id="parallel" aria-labelledby="parallel-heading">
        <div className="work-intro">
          <h2 id="parallel-heading">
            {"Several sessions."}
            <br />
            {"Different priorities."}
          </h2>
          <p>I generally aim for three or four concurrent sessions and try not to stay above four for too long. It depends on the work.</p>
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
      </section>
      <WorkflowTranscript />
      <p className="workflow-end"><Link href="/#work">Explore my work →</Link><Link href="/work-with-me">Ways we can work together →</Link></p>
    </main>
  </>;
}
