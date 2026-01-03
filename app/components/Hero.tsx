"use client";

import { Box, Container, Flex, Heading, IconButton, Link, Section, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
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

  const textY = useTransform(
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
      style={{ background: "var(--blue-a9)", position: "relative", overflow: "hidden" }}
    >
      <Box py="9" style={{ position: "relative" }}>
        <AmbientParticles />

        <motion.div style={{ y: cubeY, opacity }}>
          <MetatronsCube />
        </motion.div>

        <motion.div style={{ y: textY, opacity, position: "relative", zIndex: 1 }}>
          <Container py="8" size="3">
            <Flex direction="column" gap="4" align="center">
              <Heading mb="4" size="9">Robert Abby</Heading>
              <Text mb="4" size="7">Product Engineer</Text>
              <Flex direction="row" gap="4" mb="4">
                <Link href="https://www.linkedin.com/in/robabby/" target="_blank">
                  <IconButton size="3" style={{ cursor: "pointer" }}>
                    <LinkedInLogoIcon />
                  </IconButton>
                </Link>
                <Link href="https://github.com/robabby" target="_blank">
                  <IconButton size="3" style={{ cursor: "pointer" }}>
                    <GitHubLogoIcon />
                  </IconButton>
                </Link>
                <Link href="mailto:robabby23@gmail.com">
                  <IconButton size="3" style={{ cursor: "pointer" }}>
                    <EnvelopeClosedIcon />
                  </IconButton>
                </Link>
              </Flex>
            </Flex>
          </Container>
        </motion.div>
      </Box>
    </Section>
  );
}
