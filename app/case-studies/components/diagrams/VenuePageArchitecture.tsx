export default function VenuePageArchitecture() {
  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Venue page component architecture diagram showing SearchFilters at the top flowing into MapView and ResultsList branches, connected by a shared GraphQL data layer with URL-synced filter state"
    >
      <defs>
        <marker
          id="arrowhead"
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
        <marker
          id="arrowhead-dashed"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
        >
          <path
            d="M0,0 L8,3 L0,6"
            fill="none"
            stroke="var(--color-text-muted)"
            strokeWidth="1.5"
          />
        </marker>
      </defs>

      {/* SearchFilters — top-level box */}
      <rect
        x="100"
        y="24"
        width="400"
        height="56"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <text
        x="300"
        y="50"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="15"
        fontWeight="500"
        fill="var(--color-text)"
      >
        SearchFilters
      </text>
      <text
        x="300"
        y="68"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fill="var(--color-text-muted)"
      >
        URL-driven query params
      </text>

      {/* Center vertical line from SearchFilters */}
      <line
        x1="300"
        y1="80"
        x2="300"
        y2="120"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      />

      {/* Split point dot */}
      <circle cx="300" cy="120" r="3" fill="var(--color-accent)" />

      {/* Left branch — dashed line to MapView */}
      <line
        x1="300"
        y1="120"
        x2="175"
        y2="120"
        stroke="var(--color-text-muted)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
      />
      <line
        x1="175"
        y1="120"
        x2="175"
        y2="160"
        stroke="var(--color-text-muted)"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        markerEnd="url(#arrowhead-dashed)"
      />

      {/* Right branch — solid line to ResultsList */}
      <line
        x1="300"
        y1="120"
        x2="425"
        y2="120"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
      />
      <line
        x1="425"
        y1="120"
        x2="425"
        y2="160"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />

      {/* MapView box */}
      <rect
        x="75"
        y="168"
        width="200"
        height="64"
        rx="8"
        fill="var(--color-surface)"
        stroke="var(--color-text-muted)"
        strokeWidth="1"
        strokeDasharray="6 4"
      />
      <text
        x="175"
        y="196"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="14"
        fontWeight="500"
        fill="var(--color-text)"
      >
        MapView
      </text>
      <text
        x="175"
        y="216"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontStyle="italic"
        fill="var(--color-text-muted)"
      >
        (lazy loaded)
      </text>

      {/* ResultsList box */}
      <rect
        x="325"
        y="168"
        width="200"
        height="64"
        rx="8"
        fill="var(--color-surface)"
        stroke="var(--color-primary)"
        strokeWidth="1"
      />
      <text
        x="425"
        y="196"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="14"
        fontWeight="500"
        fill="var(--color-text)"
      >
        ResultsList
      </text>
      <text
        x="425"
        y="216"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontStyle="italic"
        fill="var(--color-accent)"
      >
        (optimistic UI)
      </text>

      {/* Horizontal connector between the two boxes */}
      <line
        x1="175"
        y1="256"
        x2="175"
        y2="272"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <line
        x1="425"
        y1="256"
        x2="425"
        y2="272"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <line
        x1="175"
        y1="272"
        x2="425"
        y2="272"
        stroke="var(--color-border)"
        strokeWidth="1"
      />

      {/* Arrow down to GraphQL layer */}
      <line
        x1="300"
        y1="272"
        x2="300"
        y2="304"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        markerEnd="url(#arrowhead)"
      />

      {/* GraphQL Data Layer box */}
      <rect
        x="100"
        y="312"
        width="400"
        height="64"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      {/* Subtle glow effect */}
      <rect
        x="100"
        y="312"
        width="400"
        height="64"
        rx="8"
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="4"
        opacity="0.3"
      />
      <text
        x="300"
        y="340"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="15"
        fontWeight="500"
        fill="var(--color-text)"
      >
        GraphQL Data Layer
      </text>
      <text
        x="300"
        y="360"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fill="var(--color-text-2)"
      >
        URL-synced Filter State
      </text>
    </svg>
  );
}
