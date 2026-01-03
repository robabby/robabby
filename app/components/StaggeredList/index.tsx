"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import React from "react";

type StaggeredListProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export default function StaggeredList({
  children,
  className,
  style
}: StaggeredListProps) {
  const childrenArray = React.Children.toArray(children);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={className} style={style}>
      {childrenArray.map((child, index) => {
        // Cap stagger at 10 items (0.5s max total delay)
        const cappedIndex = Math.min(index, 9);
        const delay = prefersReducedMotion ? 0 : cappedIndex * 0.05;

        return (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 20
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: prefersReducedMotion ? 0 : 0.5,
                delay
              }
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}
