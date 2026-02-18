export default function MetricsBeforeAfter() {
  const metrics = [
    {
      label: "Lighthouse Accessibility",
      before: "78",
      after: "95",
      progress: 0.95,
    },
    {
      label: "Bundle Size",
      before: "baseline",
      after: "-40%",
      progress: 0.6,
    },
    {
      label: "Page Load Time",
      before: "baseline",
      after: "-2.3s",
      progress: 0.7,
    },
    {
      label: "Venue Inquiries",
      before: "baseline",
      after: "+150%",
      progress: 1.0,
    },
  ];

  const rowHeight = 60;
  const startY = 68;

  return (
    <svg
      viewBox="0 0 600 320"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Before and after metrics comparison showing improvements: Lighthouse Accessibility from 78 to 95, Bundle Size reduced by 40 percent, Page Load Time reduced by 2.3 seconds, and Venue Inquiries increased by 150 percent"
    >
      {/* Column headers */}
      <text
        x="200"
        y="32"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        fontWeight="500"
        letterSpacing="0.1em"
        fill="var(--color-text-muted)"
      >
        BEFORE
      </text>
      <text
        x="400"
        y="32"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="12"
        fontWeight="500"
        letterSpacing="0.1em"
        fill="var(--color-accent)"
      >
        AFTER
      </text>

      {/* Header divider */}
      <line
        x1="40"
        y1="44"
        x2="560"
        y2="44"
        stroke="var(--color-border)"
        strokeWidth="1"
      />

      {metrics.map((metric, i) => {
        const y = startY + i * rowHeight;
        const barY = y + 18;
        const barWidth = 160;
        const barHeight = 4;
        const filledWidth = barWidth * metric.progress;

        return (
          <g key={metric.label}>
            {/* Alternating subtle row background */}
            {i % 2 === 0 && (
              <rect
                x="30"
                y={y - 16}
                width="540"
                height={rowHeight}
                rx="4"
                fill="var(--color-surface)"
                opacity="0.5"
              />
            )}

            {/* Metric label */}
            <text
              x="48"
              y={y + 4}
              fontFamily="var(--font-body)"
              fontSize="13"
              fontWeight="400"
              fill="var(--color-text)"
            >
              {metric.label}
            </text>

            {/* Before value */}
            <text
              x="200"
              y={y + 4}
              textAnchor="middle"
              fontFamily="var(--font-display)"
              fontSize="16"
              fontWeight="400"
              fill="var(--color-text-muted)"
            >
              {metric.before}
            </text>

            {/* Arrow separator */}
            <line
              x1="268"
              y1={y}
              x2="320"
              y2={y}
              stroke="var(--color-border)"
              strokeWidth="1"
            />
            <path
              d={`M316,${y - 4} L324,${y} L316,${y + 4}`}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
            />

            {/* After value */}
            <text
              x="400"
              y={y + 5}
              textAnchor="middle"
              fontFamily="var(--font-display)"
              fontSize="20"
              fontWeight="600"
              fill="var(--color-primary)"
            >
              {metric.after}
            </text>

            {/* Progress bar track */}
            <rect
              x="460"
              y={barY}
              width={barWidth}
              height={barHeight}
              rx="2"
              fill="var(--color-border)"
            />

            {/* Progress bar fill */}
            <rect
              x="460"
              y={barY}
              width={filledWidth}
              height={barHeight}
              rx="2"
              fill="var(--color-primary)"
            />

            {/* Glow on progress bar fill end */}
            <circle
              cx={460 + filledWidth}
              cy={barY + barHeight / 2}
              r="3"
              fill="var(--color-primary)"
              opacity="0.6"
            />

            {/* Row divider (except last) */}
            {i < metrics.length - 1 && (
              <line
                x1="48"
                y1={y + rowHeight / 2 + 6}
                x2="552"
                y2={y + rowHeight / 2 + 6}
                stroke="var(--color-border-subtle)"
                strokeWidth="1"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
