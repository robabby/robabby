export default function ClaudeSkillsPipeline() {
  return (
    <svg
      viewBox="0 0 600 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Claude Skills pipeline diagram showing Claude Code on the left connecting via MCP to six skills (hydrate, remember, recall, reflect, glean, pickup) in the center, which persist to an Obsidian Vault on the right"
    >
      <defs>
        <marker
          id="cs-arrow"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <path
            d="M0,0 L8,3 L0,6"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="1.5"
          />
        </marker>
      </defs>

      {/* ========== CLAUDE CODE (left) ========== */}
      <rect
        x="16"
        y="80"
        width="108"
        height="64"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      {/* Subtle glow */}
      <rect
        x="16"
        y="80"
        width="108"
        height="64"
        rx="8"
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="6"
        opacity="0.2"
      />
      <text
        x="70"
        y="108"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="13"
        fontWeight="600"
        fill="var(--color-text)"
      >
        Claude Code
      </text>
      <text
        x="70"
        y="124"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        AI Agent
      </text>

      {/* ========== CONNECTING LINE: Claude Code → Skills ========== */}
      <line
        x1="124"
        y1="112"
        x2="186"
        y2="112"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
        markerEnd="url(#cs-arrow)"
      />

      {/* MCP label on the connecting line */}
      <rect
        x="136"
        y="94"
        width="36"
        height="14"
        rx="3"
        fill="var(--color-surface)"
        stroke="var(--color-border)"
        strokeWidth="0.75"
      />
      <text
        x="154"
        y="104"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="8"
        fontWeight="500"
        letterSpacing="0.06em"
        fill="var(--color-accent)"
      >
        MCP
      </text>

      {/* ========== SKILLS GRID (center, 2 rows x 3 cols) ========== */}

      {/* Skills container outline */}
      <rect
        x="192"
        y="44"
        width="216"
        height="176"
        rx="8"
        fill="var(--color-surface)"
        stroke="var(--color-border)"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <text
        x="300"
        y="62"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="10"
        fontWeight="500"
        letterSpacing="0.1em"
        fill="var(--color-text-muted)"
      >
        SKILLS
      </text>

      {/* Row 1: hydrate, remember, recall */}
      {/* hydrate */}
      <rect
        x="202"
        y="74"
        width="60"
        height="32"
        rx="6"
        fill="var(--color-elevated)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="232"
        y="94"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text-2)"
      >
        hydrate
      </text>

      {/* remember */}
      <rect
        x="270"
        y="74"
        width="60"
        height="32"
        rx="6"
        fill="var(--color-elevated)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="300"
        y="94"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text-2)"
      >
        remember
      </text>

      {/* recall */}
      <rect
        x="338"
        y="74"
        width="60"
        height="32"
        rx="6"
        fill="var(--color-elevated)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="368"
        y="94"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text-2)"
      >
        recall
      </text>

      {/* Row 2: reflect, glean, pickup */}
      {/* reflect */}
      <rect
        x="202"
        y="116"
        width="60"
        height="32"
        rx="6"
        fill="var(--color-elevated)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="232"
        y="136"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text-2)"
      >
        reflect
      </text>

      {/* glean */}
      <rect
        x="270"
        y="116"
        width="60"
        height="32"
        rx="6"
        fill="var(--color-elevated)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="300"
        y="136"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text-2)"
      >
        glean
      </text>

      {/* pickup */}
      <rect
        x="338"
        y="116"
        width="60"
        height="32"
        rx="6"
        fill="var(--color-elevated)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="368"
        y="136"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text-2)"
      >
        pickup
      </text>

      {/* Annotation under skills */}
      <text
        x="300"
        y="170"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        fontStyle="italic"
        fill="var(--color-text-muted)"
      >
        Cross-session memory tools
      </text>

      {/* Flow direction labels */}
      <text
        x="247"
        y="200"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="8"
        fill="var(--color-text-muted)"
      >
        {"read \u2190"}
      </text>
      <text
        x="353"
        y="200"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="8"
        fill="var(--color-text-muted)"
      >
        {"\u2192 write"}
      </text>

      {/* ========== CONNECTING LINE: Skills → Obsidian ========== */}
      <line
        x1="408"
        y1="112"
        x2="470"
        y2="112"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
        markerEnd="url(#cs-arrow)"
      />

      {/* MCP label on the right connecting line */}
      <rect
        x="420"
        y="94"
        width="36"
        height="14"
        rx="3"
        fill="var(--color-surface)"
        stroke="var(--color-border)"
        strokeWidth="0.75"
      />
      <text
        x="438"
        y="104"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="8"
        fontWeight="500"
        letterSpacing="0.06em"
        fill="var(--color-accent)"
      >
        MCP
      </text>

      {/* ========== OBSIDIAN VAULT (right) ========== */}
      <rect
        x="476"
        y="80"
        width="108"
        height="64"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      {/* Subtle glow */}
      <rect
        x="476"
        y="80"
        width="108"
        height="64"
        rx="8"
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="6"
        opacity="0.2"
      />
      <text
        x="530"
        y="108"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="13"
        fontWeight="600"
        fill="var(--color-text)"
      >
        Obsidian Vault
      </text>
      <text
        x="530"
        y="124"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        Markdown files
      </text>

      {/* ========== BOTTOM ANNOTATION ========== */}
      <text
        x="300"
        y="248"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontStyle="italic"
        fill="var(--color-accent)"
      >
        Persistent memory across Claude Code sessions
      </text>
    </svg>
  );
}
