"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 2,
        background: "var(--sg-secondary)",
        transformOrigin: "0%",
        scaleX,
        zIndex: 100,
        boxShadow: "0 0 10px var(--sg-secondary-glow)",
      }}
    />
  );
}
