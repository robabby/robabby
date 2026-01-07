"use client";

import { Box, Button, Container, Flex, Section, Text } from "@radix-ui/themes";
import { DownloadIcon } from "@radix-ui/react-icons";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import MetatronsCube from "./MetatronsCube";
import AmbientParticles from "./AmbientParticles";
import "./Hero.css";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const cubeY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 150]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 50]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, prefersReducedMotion ? 1 : 0]
  );

  return (
    <Section
      ref={sectionRef}
      id="home"
      className="hero-section"
    >
      <AmbientParticles />

      {/* Metatron's Cube - positioned behind portrait */}
      <motion.div style={{ y: cubeY, opacity }} className="hero-cube-container">
        <MetatronsCube />
      </motion.div>

      {/* Diagonal gold accent line */}
      <div className="hero-diagonal-accent" aria-hidden="true" />

      <motion.div style={{ y: contentY, opacity }} className="hero-content-wrapper">
        <Container size="4" className="hero-container">
          <div className="hero-grid">
            {/* Portrait Column */}
            <motion.div
              className="hero-portrait-column"
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <div className="hero-portrait-wrapper">
                <Image
                  src="/profile.jpeg"
                  alt="Rob Abby - Staff Frontend Engineer"
                  width={300}
                  height={300}
                  priority
                  className="hero-portrait-image"
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <div className="hero-content-column">
              {/* Stacked Name */}
              <motion.div
                className="hero-name-wrapper"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="display-dramatic hero-name">
                  <span className="hero-name-line">Rob</span>
                  <span className="hero-name-line">Abby</span>
                </h1>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
              >
                <Text size="6" className="hero-title">
                  Staff Frontend Engineer
                </Text>
              </motion.div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
              >
                <Text className="subtitle-refined hero-tagline">
                  15+ Years Building Web Experiences
                </Text>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
              >
                <Flex direction="row" gap="3" className="hero-cta">
                  <Button size="3" asChild style={{ cursor: "pointer" }}>
                    <a href="#experience">View Experience</a>
                  </Button>
                  <Button size="3" variant="outline" asChild className="resume-button">
                    <a href="/robert-abby-resume.pdf" download>
                      <DownloadIcon /> Resume
                    </a>
                  </Button>
                </Flex>
              </motion.div>
            </div>
          </div>
        </Container>
      </motion.div>
    </Section>
  );
}
