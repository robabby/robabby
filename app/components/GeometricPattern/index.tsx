"use client";

import "./style.css";

type GeometricPatternProps = {
  variant?: "dots" | "lines" | "hexagons";
  opacity?: number;
};

export default function GeometricPattern({
  variant = "dots",
  opacity = 0.03
}: GeometricPatternProps) {
  return (
    <div
      className={`geometric-pattern geometric-pattern--${variant}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
