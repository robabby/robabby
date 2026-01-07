"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function AnimatedSection({
  children,
  className,
  style
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut"
      }}
      viewport={{
        once: true,
        amount: 0.1
      }}
    >
      {children}
    </motion.div>
  );
}
