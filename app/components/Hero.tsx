"use client";

import { Box, Button, Container, Flex, Heading, IconButton, Link, Section, Text } from "@radix-ui/themes";
import { DownloadIcon, EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
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

        <motion.div style={{ y: cubeY, opacity }} className="hero-cube-container">
          <MetatronsCube />
        </motion.div>

        <motion.div style={{ y: textY, opacity, position: "relative", zIndex: 1 }}>
          <Container py="8" size="3">
            <Flex direction="column" gap="4" align="center">
              <motion.div
                className="hero-portrait"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src="/profile.jpeg"
                  alt="Rob Abby - Staff Frontend Engineer"
                  width={150}
                  height={150}
                  priority
                  className="hero-portrait-image"
                />
              </motion.div>
              <Heading mb="2" size="9" style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" }}>Rob Abby</Heading>
              <Text size="7" style={{ color: "var(--sg-text-primary)", textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)" }}>Staff Frontend Engineer</Text>
              <Text size="3" mb="4" style={{ color: "var(--sg-secondary)", letterSpacing: "0.1em", fontFamily: "var(--font-display)", textShadow: "0 1px 2px rgba(0, 0, 0, 0.3)" }}>
                15+ Years Building Web Experiences
              </Text>
              <Flex direction="row" gap="4" mb="4">
                <Link href="https://www.linkedin.com/in/robabby/" target="_blank">
                  <IconButton size="4" variant="ghost" style={{ cursor: "pointer" }}>
                    <LinkedInLogoIcon width="24" height="24" />
                  </IconButton>
                </Link>
                <Link href="https://github.com/robabby" target="_blank">
                  <IconButton size="4" variant="ghost" style={{ cursor: "pointer" }}>
                    <GitHubLogoIcon width="24" height="24" />
                  </IconButton>
                </Link>
                <Link href="mailto:robabby23@gmail.com">
                  <IconButton size="4" variant="ghost" style={{ cursor: "pointer" }}>
                    <EnvelopeClosedIcon width="24" height="24" />
                  </IconButton>
                </Link>
              </Flex>
              <Flex direction="row" gap="3">
                <Button size="3" asChild style={{ cursor: "pointer" }}>
                  <a href="#experience">View Experience</a>
                </Button>
                <Button size="3" variant="outline" asChild className="resume-button">
                  <a href="/robert-abby-resume.pdf" download>
                    <DownloadIcon /> Resume
                  </a>
                </Button>
              </Flex>
            </Flex>
          </Container>
        </motion.div>
      </Box>
    </Section>
  );
}
