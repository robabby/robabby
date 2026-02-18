export default function DesignSystemLayers() {
  const layers = [
    {
      label: "Product UIs",
      subtitle: "Applications \u2014 unified across all products",
      y: 32,
      width: 340,
      opacity: 1.0,
      strokeOpacity: 1.0,
    },
    {
      label: "Salesforce Integration",
      subtitle: "Embedding \u2014 auth, cross-origin, state sync",
      y: 120,
      width: 400,
      opacity: 0.7,
      strokeOpacity: 0.8,
    },
    {
      label: "Ember.js Components",
      subtitle: "Component Library \u2014 iframe-safe, Lightning-aware",
      y: 208,
      width: 460,
      opacity: 0.45,
      strokeOpacity: 0.6,
    },
    {
      label: "Material Design",
      subtitle: "Foundation \u2014 tokens, color, typography, spacing",
      y: 296,
      width: 520,
      opacity: 0.2,
      strokeOpacity: 0.35,
    },
  ];

  const boxHeight = 72;

  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Design system technology stack showing four layers from bottom to top: Material Design foundation, Ember.js component library, Salesforce integration layer, and Product UIs at the top"
    >
      <defs>
        {/* Gradient for layer fills — primary color at varying opacities */}
        <linearGradient id="layer-gradient-0" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="layer-gradient-1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="layer-gradient-2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.10" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="layer-gradient-3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.05" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {layers.map((layer, i) => {
        const x = (600 - layer.width) / 2;

        return (
          <g key={layer.label}>
            {/* Layer box */}
            <rect
              x={x}
              y={layer.y}
              width={layer.width}
              height={boxHeight}
              rx="8"
              fill={`url(#layer-gradient-${i})`}
            />
            <rect
              x={x}
              y={layer.y}
              width={layer.width}
              height={boxHeight}
              rx="8"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="1"
              opacity={layer.strokeOpacity}
            />

            {/* Layer background surface */}
            <rect
              x={x}
              y={layer.y}
              width={layer.width}
              height={boxHeight}
              rx="8"
              fill="var(--color-surface)"
              opacity={0.4}
            />

            {/* Layer label */}
            <text
              x="300"
              y={layer.y + 32}
              textAnchor="middle"
              fontFamily="var(--font-display)"
              fontSize="15"
              fontWeight="500"
              fill="var(--color-text)"
              opacity={0.5 + layer.opacity * 0.5}
            >
              {layer.label}
            </text>

            {/* Layer subtitle */}
            <text
              x="300"
              y={layer.y + 52}
              textAnchor="middle"
              fontFamily="var(--font-body)"
              fontSize="10.5"
              fill="var(--color-text-2)"
              opacity={0.4 + layer.opacity * 0.5}
            >
              {layer.subtitle}
            </text>

            {/* Left accent bar showing hierarchy */}
            <rect
              x={x + 1}
              y={layer.y + 8}
              width="3"
              height={boxHeight - 16}
              rx="1.5"
              fill="var(--color-primary)"
              opacity={layer.opacity}
            />

            {/* Upward connector line (except top layer) */}
            {i > 0 && (
              <line
                x1="300"
                y1={layer.y}
                x2="300"
                y2={layer.y - (layer.y - layers[i - 1].y - boxHeight)}
                stroke="var(--color-primary)"
                strokeWidth="1"
                opacity="0.2"
                strokeDasharray="4 3"
              />
            )}
          </g>
        );
      })}

      {/* Directional annotation — bottom to top */}
      <text
        x="567"
        y="378"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        letterSpacing="0.08em"
        fill="var(--color-text-muted)"
      >
        FOUNDATION
      </text>
      <line
        x1="567"
        y1="370"
        x2="567"
        y2="52"
        stroke="var(--color-text-muted)"
        strokeWidth="0.75"
        opacity="0.4"
      />
      <path
        d="M563,58 L567,46 L571,58"
        fill="none"
        stroke="var(--color-text-muted)"
        strokeWidth="0.75"
        opacity="0.4"
      />
      <text
        x="567"
        y="42"
        textAnchor="middle"
        fontFamily="var(--font-body)"
        fontSize="9"
        letterSpacing="0.08em"
        fill="var(--color-text-muted)"
      >
        PRODUCT
      </text>
    </svg>
  );
}
