"use client";

import { motion, useReducedMotion } from "motion/react";

export function CosmicBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="cosmic-background" aria-hidden="true">
      <motion.div
        className="cosmic-gradient"
        animate={
          prefersReducedMotion
            ? {}
            : {
                x: ["0%", "2%", "0%"],
                y: ["0%", "2%", "0%"],
                rotate: [0, 3, 0],
              }
        }
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="cosmic-noise" />
    </div>
  );
}
