"use client";

import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import "./style.css";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 258, suffix: "%", label: "YoY Revenue Growth" },
  { value: 150, suffix: "%", label: "Venue Inquiry Increase" },
  { value: 40, suffix: "%", label: "Faster Feature Delivery" },
  { value: 95, suffix: "", label: "Lighthouse Score" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const duration = 1500;
    const startTime = Date.now();
    const endValue = value;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(easeOut * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, prefersReducedMotion]);

  return (
    <span ref={ref} className="stat-number">
      {displayValue}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <Box className="stats-bar">
      <Container size="4" py="6">
        <Flex
          direction={{ initial: "column", sm: "row" }}
          justify="between"
          align="center"
          gap="6"
          className="stats-grid"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="stat-item"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <Text size="2" className="stat-label">
                {stat.label}
              </Text>
            </motion.div>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
