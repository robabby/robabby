export default function TeamStructure() {
  return (
    <svg
      viewBox="0 0 700 350"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Team structure evolution diagram showing the transition from embedded developers in separate product teams to a centralized UI/UX team using a hub-and-spoke model serving Product A, Product B, and Product C"
    >
      {/* ========== BEFORE STATE (left side) ========== */}

      {/* Before label */}
      <text
        x="155"
        y="30"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        fontWeight="500"
        letterSpacing="0.12em"
        fill="var(--color-text-muted)"
      >
        BEFORE
      </text>
      <line
        x1="80"
        y1="40"
        x2="230"
        y2="40"
        stroke="var(--color-border)"
        strokeWidth="1"
      />

      {/* Product Team A */}
      <rect
        x="50"
        y="60"
        width="210"
        height="72"
        rx="8"
        fill="var(--color-surface)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="155"
        y="86"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="13"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Product Team A
      </text>
      <rect
        x="118"
        y="98"
        width="74"
        height="24"
        rx="4"
        fill="var(--color-elevated)"
        stroke="var(--color-text-muted)"
        strokeWidth="0.75"
      />
      <text
        x="155"
        y="115"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fill="var(--color-text-muted)"
      >
        Dev
      </text>

      {/* Product Team B */}
      <rect
        x="50"
        y="148"
        width="210"
        height="72"
        rx="8"
        fill="var(--color-surface)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="155"
        y="174"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="13"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Product Team B
      </text>
      <rect
        x="118"
        y="186"
        width="74"
        height="24"
        rx="4"
        fill="var(--color-elevated)"
        stroke="var(--color-text-muted)"
        strokeWidth="0.75"
      />
      <text
        x="155"
        y="203"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fill="var(--color-text-muted)"
      >
        Dev
      </text>

      {/* Product Team C */}
      <rect
        x="50"
        y="236"
        width="210"
        height="72"
        rx="8"
        fill="var(--color-surface)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="155"
        y="262"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="13"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Product Team C
      </text>
      <rect
        x="118"
        y="274"
        width="74"
        height="24"
        rx="4"
        fill="var(--color-elevated)"
        stroke="var(--color-text-muted)"
        strokeWidth="0.75"
      />
      <text
        x="155"
        y="291"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fill="var(--color-text-muted)"
      >
        Dev
      </text>

      {/* "No shared process" annotation */}
      <text
        x="155"
        y="332"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontStyle="italic"
        fill="var(--color-text-muted)"
      >
        No shared process or components
      </text>

      {/* ========== TRANSITION ARROW ========== */}
      <line
        x1="290"
        y1="184"
        x2="370"
        y2="184"
        stroke="var(--color-primary)"
        strokeWidth="2"
      />
      <path
        d="M364,178 L376,184 L364,190"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ========== AFTER STATE (right side) ========== */}

      {/* After label */}
      <text
        x="530"
        y="30"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        fontWeight="500"
        letterSpacing="0.12em"
        fill="var(--color-accent)"
      >
        AFTER
      </text>
      <line
        x1="455"
        y1="40"
        x2="605"
        y2="40"
        stroke="var(--color-primary)"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* Central UI/UX Team hub */}
      <rect
        x="440"
        y="110"
        width="180"
        height="80"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      {/* Subtle glow */}
      <rect
        x="440"
        y="110"
        width="180"
        height="80"
        rx="8"
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="6"
        opacity="0.2"
      />
      <text
        x="530"
        y="142"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="15"
        fontWeight="600"
        fill="var(--color-text)"
      >
        UI/UX Team
      </text>
      <text
        x="530"
        y="164"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fill="var(--color-text-2)"
      >
        {"Engineer \u00B7 Designer \u00B7 Researcher"}
      </text>

      {/* Product A spoke */}
      <rect
        x="398"
        y="234"
        width="80"
        height="40"
        rx="6"
        fill="var(--color-surface)"
        stroke="var(--color-border-subtle)"
        strokeWidth="1"
      />
      <text
        x="438"
        y="258"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text-2)"
      >
        Product A
      </text>

      {/* Product B spoke */}
      <rect
        x="490"
        y="234"
        width="80"
        height="40"
        rx="6"
        fill="var(--color-surface)"
        stroke="var(--color-border-subtle)"
        strokeWidth="1"
      />
      <text
        x="530"
        y="258"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text-2)"
      >
        Product B
      </text>

      {/* Product C spoke */}
      <rect
        x="582"
        y="234"
        width="80"
        height="40"
        rx="6"
        fill="var(--color-surface)"
        stroke="var(--color-border-subtle)"
        strokeWidth="1"
      />
      <text
        x="622"
        y="258"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text-2)"
      >
        Product C
      </text>

      {/* Connecting lines from hub to spokes */}
      <line
        x1="490"
        y1="190"
        x2="438"
        y2="234"
        stroke="var(--color-primary)"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="530"
        y1="190"
        x2="530"
        y2="234"
        stroke="var(--color-primary)"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="570"
        y1="190"
        x2="622"
        y2="234"
        stroke="var(--color-primary)"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Hub-and-spoke annotation */}
      <text
        x="530"
        y="298"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontStyle="italic"
        fill="var(--color-accent)"
      >
        Hub-and-spoke model
      </text>

      {/* Shared process highlight */}
      <text
        x="530"
        y="332"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fill="var(--color-text-muted)"
      >
        Shared components, design tokens, and process
      </text>
    </svg>
  );
}
