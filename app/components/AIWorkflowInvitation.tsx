import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import styles from "./AIWorkflowInvitation.module.css";

export default function AIWorkflowInvitation() {
  return <section className={`wrap ${styles.invitation}`} aria-labelledby="ai-invitation-title">
    <div>
      <p className={styles.eyebrow}>My everyday practice</p>
      <h2 id="ai-invitation-title">How I work<br /><span>with AI.</span></h2>
      <p className={styles.description}>From a conversation in the terminal to several sessions across projects. A look at the tools, plans and judgment behind the work.</p>
      <Link className="text-link" href="/how-i-work-with-ai">See how I work with AI <ArrowRightIcon className="arrow" aria-hidden="true" /></Link>
    </div>
    <div className={styles.preview} aria-label="Illustrative terminal exchange">
      <div className={styles.bar}><span>Codex / Claude Code</span><span>Terminal</span></div>
      <p className={styles.prompt}><span aria-hidden="true">›</span> Let’s work through the plan before we build.</p>
      <p className={styles.response}>I’ll read the Linear ticket and the existing work. Then we can clarify the next step.</p>
      <p className={styles.context}>A clear plan. Shared context. Room to iterate.</p>
      <p className={styles.caption}>Illustrative exchange</p>
    </div>
  </section>;
}
