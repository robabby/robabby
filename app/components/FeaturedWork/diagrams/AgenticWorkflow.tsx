export default function AgenticWorkflow() {
  return (
    <svg
      viewBox="0 0 640 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Agentic workflow diagram showing a five-stage pipeline: Initiative, Worktree, Agent Execution with three sub-agents, Integration Review, and Main"
    >
      <defs>
        <marker
          id="aw-arrow"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <path
            d="M0,0 L8,3 L0,6"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
          />
        </marker>
      </defs>

      <style>{`
        @keyframes agentPulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.35; }
        }
        .agent-glow {
          animation: agentPulse 3s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .agent-glow {
            animation: none;
            opacity: 0.2;
          }
        }
      `}</style>

      {/* === Stage 1: Initiative === */}
      <rect
        x="16"
        y="68"
        width="88"
        height="48"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <text
        x="60"
        y="96"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="11"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Initiative
      </text>

      {/* Arrow 1 + label */}
      <line x1="104" y1="92" x2="138" y2="92" stroke="var(--color-accent)" strokeWidth="1.5" markerEnd="url(#aw-arrow)" />
      <text
        x="121"
        y="84"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="8"
        fill="var(--color-text-muted)"
      >
        branch
      </text>

      {/* === Stage 2: Worktree === */}
      <rect
        x="146"
        y="68"
        width="88"
        height="48"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <text
        x="190"
        y="96"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="11"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Worktree
      </text>

      {/* Arrow 2 + label */}
      <line x1="234" y1="92" x2="268" y2="92" stroke="var(--color-accent)" strokeWidth="1.5" markerEnd="url(#aw-arrow)" />
      <text
        x="251"
        y="84"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="8"
        fill="var(--color-text-muted)"
      >
        spawn
      </text>

      {/* === Stage 3: Agent Execution (tall, dashed container with 3 sub-agents) === */}
      <rect
        x="276"
        y="28"
        width="140"
        height="144"
        rx="8"
        fill="var(--color-surface)"
        stroke="var(--color-border)"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      {/* Glow overlay with pulse */}
      <rect
        x="276"
        y="28"
        width="140"
        height="144"
        rx="8"
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="6"
        className="agent-glow"
      />
      <text
        x="346"
        y="48"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="10"
        fontWeight="500"
        letterSpacing="0.08em"
        fill="var(--color-text-muted)"
      >
        AGENT EXECUTION
      </text>

      {/* Sub-agent 1 */}
      <rect
        x="292"
        y="58"
        width="108"
        height="28"
        rx="6"
        fill="var(--color-elevated)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="346"
        y="76"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        fontWeight="500"
        fill="var(--color-text-2)"
      >
        Agent 1
      </text>

      {/* Sub-agent 2 */}
      <rect
        x="292"
        y="94"
        width="108"
        height="28"
        rx="6"
        fill="var(--color-elevated)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="346"
        y="112"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        fontWeight="500"
        fill="var(--color-text-2)"
      >
        Agent 2
      </text>

      {/* Sub-agent 3 */}
      <rect
        x="292"
        y="130"
        width="108"
        height="28"
        rx="6"
        fill="var(--color-elevated)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="346"
        y="148"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        fontWeight="500"
        fill="var(--color-text-2)"
      >
        Agent 3
      </text>

      {/* Arrow 3 + label */}
      <line x1="416" y1="92" x2="450" y2="92" stroke="var(--color-accent)" strokeWidth="1.5" markerEnd="url(#aw-arrow)" />
      <text
        x="433"
        y="84"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="8"
        fill="var(--color-text-muted)"
      >
        PR
      </text>

      {/* === Stage 4: Integration Review === */}
      <rect
        x="458"
        y="68"
        width="88"
        height="48"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <text
        x="502"
        y="88"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Integration
      </text>
      <text
        x="502"
        y="102"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Review
      </text>

      {/* Arrow 4 + label */}
      <line x1="546" y1="92" x2="580" y2="92" stroke="var(--color-accent)" strokeWidth="1.5" markerEnd="url(#aw-arrow)" />
      <text
        x="563"
        y="84"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="8"
        fill="var(--color-text-muted)"
      >
        merge
      </text>

      {/* === Stage 5: Main === */}
      <rect
        x="588"
        y="68"
        width="40"
        height="48"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <rect
        x="588"
        y="68"
        width="40"
        height="48"
        rx="8"
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="4"
        opacity="0.3"
      />
      <text
        x="608"
        y="96"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="11"
        fontWeight="600"
        fill="var(--color-text)"
      >
        Main
      </text>
    </svg>
  );
}
