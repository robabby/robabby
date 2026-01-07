import { Box } from "@radix-ui/themes";

interface SectionDividerProps {
  variant?: "gold" | "subtle";
}

export default function SectionDivider({ variant = "gold" }: SectionDividerProps) {
  const isGold = variant === "gold";

  return (
    <Box
      style={{
        position: "relative",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Main line */}
      <Box
        style={{
          position: "absolute",
          width: "100%",
          height: "1px",
          background: isGold
            ? "linear-gradient(90deg, transparent 0%, rgba(201, 169, 98, 0.1) 20%, rgba(201, 169, 98, 0.3) 50%, rgba(201, 169, 98, 0.1) 80%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)",
        }}
      />

      {/* Center diamond accent */}
      {isGold && (
        <Box
          style={{
            position: "relative",
            width: "8px",
            height: "8px",
            background: "var(--sg-gold)",
            transform: "rotate(45deg)",
            boxShadow: "0 0 12px var(--sg-gold-glow)",
          }}
        />
      )}
    </Box>
  );
}
