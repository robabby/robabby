"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMemo } from "react";
import "./style.css";

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
};

type AmbientParticlesProps = {
  count?: number;
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  className?: string;
};

export default function AmbientParticles({
  count = 20,
  minSize = 3,
  maxSize = 8,
  minOpacity = 0.1,
  maxOpacity = 0.4,
  className = ""
}: AmbientParticlesProps) {
  const prefersReducedMotion = useReducedMotion();

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: minSize + Math.random() * (maxSize - minSize),
      opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
      duration: 10 + Math.random() * 10,
      delay: Math.random() * 5
    }));
  }, [count, minSize, maxSize, minOpacity, maxOpacity]);

  return (
    <div className={`ambient-particles ${className}`}>
      {!prefersReducedMotion && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity
          }}
          animate={{
            y: particle.id % 2 === 0 ? [-20, 20] : [0, 40],
            x: particle.id % 3 === 0 ? [-10, 10] : [0, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
