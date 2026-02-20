export default function MetricsBeforeAfter() {
  const metrics = [
    { label: "Lighthouse Accessibility", value: "78 → 95" },
    { label: "Bundle Size", value: "-40%" },
    { label: "Page Load Time", value: "-2.3s" },
    { label: "Venue Inquiries", value: "+150%" },
  ];

  const rowHeight = 50;
  const startY = 16;
  const contentX = 40;
  const contentWidth = 520;

  return (
    <svg
      viewBox="0 0 600 232"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Key performance improvements: Lighthouse Accessibility from 78 to 95, Bundle Size reduced by 40 percent, Page Load Time reduced by 2.3 seconds, and Venue Inquiries increased by 150 percent"
    >
      {metrics.map((metric, i) => {
        const y = startY + i * rowHeight;
        const textY = y + 32;

        return (
          <g key={metric.label}>
            {/* Alternating row background */}
            {i % 2 === 0 && (
              <rect
                x="30"
                y={y}
                width="540"
                height={rowHeight}
                rx="4"
                fill="var(--color-surface)"
                opacity="0.5"
              />
            )}

            {/* Metric label — left-aligned */}
            <text
              x={contentX}
              y={textY}
              fontFamily="var(--font-body)"
              fontSize="13"
              fontWeight="400"
              fill="var(--color-text)"
            >
              {metric.label}
            </text>

            {/* Value — right-aligned, large, blue */}
            <text
              x={contentX + contentWidth}
              y={textY}
              textAnchor="end"
              fontFamily="var(--font-display)"
              fontSize="20"
              fontWeight="600"
              fill="var(--color-primary)"
            >
              {metric.value}
            </text>

            {/* Row divider (except last) */}
            {i < metrics.length - 1 && (
              <line
                x1={contentX}
                y1={y + rowHeight}
                x2={contentX + contentWidth}
                y2={y + rowHeight}
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
