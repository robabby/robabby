export default function PlatformTopology() {
  return (
    <svg
      viewBox="0 0 640 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="WavePoint platform topology diagram showing a three-tier architecture: web and native apps at the top, computation engine in the middle, and MCP server, API layer, and services at the bottom"
    >
      <defs>
        <marker
          id="pt-arrow"
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

      {/* Platform container */}
      <rect
        x="16"
        y="8"
        width="608"
        height="264"
        rx="8"
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="1"
        strokeDasharray="6 4"
      />
      <text
        x="36"
        y="26"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text-muted)"
      >
        WavePoint Platform
      </text>

      {/* === Tier 1: Apps === */}
      {/* Next.js Web App */}
      <rect
        x="36"
        y="40"
        width="180"
        height="44"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <rect
        x="36"
        y="40"
        width="180"
        height="44"
        rx="8"
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="4"
        opacity="0.3"
      />
      <text
        x="126"
        y="58"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Next.js Web App
      </text>
      <text
        x="126"
        y="74"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        React + TypeScript
      </text>

      {/* 6 Native Apple Apps */}
      <rect
        x="236"
        y="40"
        width="200"
        height="44"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <rect
        x="236"
        y="40"
        width="200"
        height="44"
        rx="8"
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="4"
        opacity="0.3"
      />
      <text
        x="336"
        y="58"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-text)"
      >
        6 Native Apple Apps
      </text>
      <text
        x="336"
        y="74"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        iOS · macOS · iPadOS · watchOS
      </text>

      {/* 2 Shared Packages */}
      <rect
        x="456"
        y="40"
        width="152"
        height="44"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <text
        x="532"
        y="58"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-text)"
      >
        2 Shared Packages
      </text>
      <text
        x="532"
        y="74"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        TypeScript + Swift
      </text>

      {/* Lines from Tier 1 down to Tier 2 */}
      <line x1="126" y1="84" x2="126" y2="116" stroke="var(--color-accent)" strokeWidth="1.5" markerEnd="url(#pt-arrow)" />
      <line x1="336" y1="84" x2="336" y2="116" stroke="var(--color-accent)" strokeWidth="1.5" markerEnd="url(#pt-arrow)" />
      <line x1="532" y1="84" x2="532" y2="116" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 3" />

      {/* === Tier 2: Computation Engine === */}
      <rect
        x="60"
        y="124"
        width="520"
        height="44"
        rx="8"
        fill="var(--color-surface)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <rect
        x="60"
        y="124"
        width="520"
        height="44"
        rx="8"
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="4"
        opacity="0.2"
      />
      <text
        x="320"
        y="144"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="13"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Computation Engine
      </text>
      <text
        x="320"
        y="160"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fill="var(--color-text-muted)"
      >
        37 Modules · 111 Primitives
      </text>

      {/* Lines from Tier 2 down to Tier 3 */}
      <line x1="140" y1="168" x2="140" y2="196" stroke="var(--color-accent)" strokeWidth="1.5" markerEnd="url(#pt-arrow)" />
      <line x1="320" y1="168" x2="320" y2="196" stroke="var(--color-accent)" strokeWidth="1.5" markerEnd="url(#pt-arrow)" />
      <line x1="500" y1="168" x2="500" y2="196" stroke="var(--color-accent)" strokeWidth="1.5" markerEnd="url(#pt-arrow)" />

      {/* === Tier 3: Infrastructure === */}
      {/* MCP Server */}
      <rect
        x="36"
        y="204"
        width="180"
        height="44"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="126"
        y="222"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-text)"
      >
        MCP Server
      </text>
      <text
        x="126"
        y="238"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        12 Composed Tools
      </text>

      {/* API Layer */}
      <rect
        x="236"
        y="204"
        width="180"
        height="44"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="326"
        y="222"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-text)"
      >
        API Layer
      </text>
      <text
        x="326"
        y="238"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        82 Routes
      </text>

      {/* Services */}
      <rect
        x="436"
        y="204"
        width="180"
        height="44"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <text
        x="526"
        y="222"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Services
      </text>
      <text
        x="526"
        y="238"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        fill="var(--color-text-muted)"
      >
        Auth · Payments · CRM
      </text>
    </svg>
  );
}
