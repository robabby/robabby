export default function WavePointArchitecture() {
  return (
    <svg
      viewBox="0 0 600 280"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="WavePoint monorepo architecture diagram showing shared TypeScript and Swift packages feeding a Next.js web app and six native Apple apps built with SwiftUI, all connected to shared Supabase Auth, Stripe Payments, and Brevo CRM services"
    >
      <defs>
        <marker
          id="wp-arrow"
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

      {/* Monorepo container */}
      <rect
        x="20"
        y="8"
        width="560"
        height="220"
        rx="8"
        fill="none"
        stroke="var(--color-border)"
        strokeWidth="1"
        strokeDasharray="6 4"
      />
      <text
        x="40"
        y="26"
        fontFamily="var(--font-body)"
        fontSize="10"
        fontWeight="500"
        fill="var(--color-text-muted)"
      >
        Monorepo
      </text>

      {/* Shared Packages layer */}
      {/* @wavepoint/content (TypeScript) */}
      <rect
        x="80"
        y="38"
        width="200"
        height="48"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <rect
        x="80"
        y="38"
        width="200"
        height="48"
        rx="8"
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="4"
        opacity="0.3"
      />
      <text
        x="180"
        y="60"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="13"
        fontWeight="500"
        fill="var(--color-text)"
      >
        @wavepoint/content
      </text>
      <text
        x="180"
        y="76"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fill="var(--color-text-muted)"
      >
        TypeScript
      </text>

      {/* WavePointCore (Swift) */}
      <rect
        x="320"
        y="38"
        width="200"
        height="48"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <rect
        x="320"
        y="38"
        width="200"
        height="48"
        rx="8"
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="4"
        opacity="0.3"
      />
      <text
        x="420"
        y="60"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="13"
        fontWeight="500"
        fill="var(--color-text)"
      >
        WavePointCore
      </text>
      <text
        x="420"
        y="76"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fill="var(--color-text-muted)"
      >
        Swift Package
      </text>

      {/* Connecting lines from shared packages to app branches */}
      {/* Left line from @wavepoint/content down to Next.js */}
      <line
        x1="180"
        y1="86"
        x2="180"
        y2="128"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        markerEnd="url(#wp-arrow)"
      />

      {/* Right line from WavePointCore down to Native Apps */}
      <line
        x1="420"
        y1="86"
        x2="420"
        y2="128"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        markerEnd="url(#wp-arrow)"
      />

      {/* Cross-connect: @wavepoint/content to Native Apps */}
      <line
        x1="280"
        y1="62"
        x2="320"
        y2="62"
        stroke="var(--color-border)"
        strokeWidth="1"
        strokeDasharray="4 3"
      />

      {/* Next.js Web App box */}
      <rect
        x="60"
        y="136"
        width="240"
        height="48"
        rx="8"
        fill="var(--color-surface)"
        stroke="var(--color-primary)"
        strokeWidth="1"
      />
      <text
        x="180"
        y="158"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="14"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Next.js Web App
      </text>
      <text
        x="180"
        y="174"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fill="var(--color-text-2)"
      >
        React + TypeScript
      </text>

      {/* Native Apps box */}
      <rect
        x="340"
        y="136"
        width="200"
        height="48"
        rx="8"
        fill="var(--color-surface)"
        stroke="var(--color-primary)"
        strokeWidth="1"
      />
      <text
        x="440"
        y="158"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="14"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Native Apps
      </text>
      <text
        x="440"
        y="174"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="10"
        fill="var(--color-text-2)"
      >
        iOS, macOS, iPadOS &middot; SwiftUI
      </text>

      {/* Connector lines from app boxes down to shared services */}
      <line
        x1="180"
        y1="184"
        x2="180"
        y2="200"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      <line
        x1="440"
        y1="184"
        x2="440"
        y2="200"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      {/* Horizontal bar connecting both down-lines */}
      <line
        x1="180"
        y1="200"
        x2="440"
        y2="200"
        stroke="var(--color-border)"
        strokeWidth="1"
      />
      {/* Center drop to services bar */}
      <line
        x1="300"
        y1="200"
        x2="300"
        y2="216"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        markerEnd="url(#wp-arrow)"
      />

      {/* Shared Services bar */}
      <rect
        x="60"
        y="224"
        width="480"
        height="40"
        rx="8"
        fill="var(--color-elevated)"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <rect
        x="60"
        y="224"
        width="480"
        height="40"
        rx="8"
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="4"
        opacity="0.2"
      />

      {/* Service labels */}
      <text
        x="180"
        y="248"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="11"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Supabase Auth
      </text>
      {/* Divider dots */}
      <text
        x="250"
        y="248"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="11"
        fill="var(--color-text-muted)"
      >
        &middot;
      </text>
      <text
        x="320"
        y="248"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="11"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Stripe Payments
      </text>
      <text
        x="390"
        y="248"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="11"
        fill="var(--color-text-muted)"
      >
        &middot;
      </text>
      <text
        x="460"
        y="248"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="11"
        fontWeight="500"
        fill="var(--color-text)"
      >
        Brevo CRM
      </text>
    </svg>
  );
}
