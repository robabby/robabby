"use client";

import { Box, Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import AnimatedSection from "../AnimatedSection";
import StaggeredList from "../StaggeredList";
import PlatformTopology from "./diagrams/PlatformTopology";
import AgenticWorkflow from "./diagrams/AgenticWorkflow";
import "./style.css";

const BLOCK_1_STATS = [
  { value: "82", label: "API Routes" },
  { value: "37", label: "Computation Modules" },
  { value: "6", label: "Native Apple Apps" },
  { value: "2", label: "Shared Packages" },
];

export default function FeaturedWork() {
  return (
    <Box
      id="featured-work"
      py="9"
      style={{
        background: "var(--color-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle blue radial glow */}
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          height: "60%",
          background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <AnimatedSection style={{ position: "relative", zIndex: 1 }}>
        <Container size="4" px="6">
          {/* Section header — asymmetric */}
          <Flex direction={{ initial: "column", md: "row" }} gap={{ initial: "4", md: "8" }} align="start">
            <Box className="section-header-column">
              <Text className="section-subtitle" mb="2" style={{ display: "block" }}>
                Featured
              </Text>
              <Heading size="8" className="section-title" style={{ textAlign: "left" }}>
                WavePoint
              </Heading>
            </Box>

            <Box style={{ flex: 1 }}>
              <Text className="about-lead" mb="4" style={{ display: "block" }}>
                A cross-platform astrology product built solo with AI agents — 450+ commits in 9 weeks across a web app and 6 native Apple apps.
              </Text>
              <Button size="2" variant="outline" asChild>
                <a href="https://wavepoint.space" target="_blank" rel="noopener noreferrer">
                  wavepoint.space
                </a>
              </Button>
            </Box>
          </Flex>

          {/* Content blocks */}
          <StaggeredList className="featured-work-blocks">
            {/* Block 1: What I Built */}
            <Box className="card featured-work-block">
              <Flex direction={{ initial: "column", md: "row" }} gap="6">
                <Box style={{ flex: "0 0 40%" }}>
                  <span className="featured-work-block-label">01</span>
                  <h3 className="featured-work-block-title">What I Built</h3>
                  <Text size="2" style={{ color: "var(--color-text-2)", display: "block", lineHeight: 1.7 }}>
                    WavePoint is an intelligence-native astrology platform spanning a Next.js 16 web app and 6 native Apple apps (iOS, macOS, iPadOS, watchOS), all shipping from a single monorepo. The system includes 82 API routes, 37 computation modules, 111 primitives, a Swift astronomy engine for real-time celestial calculations, and a &ldquo;Modern Mystic&rdquo; design system that unifies every surface.
                  </Text>

                  <Box className="featured-work-stats">
                    {BLOCK_1_STATS.map((stat) => (
                      <Box key={stat.label}>
                        <span className="featured-work-stat-value">{stat.value}</span>
                        <span className="featured-work-stat-label">{stat.label}</span>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box style={{ flex: 1 }} className="featured-work-diagram-container">
                  <PlatformTopology />
                </Box>
              </Flex>
            </Box>

            {/* Block 2: How I Built It */}
            <Box className="card featured-work-block">
              <Flex direction={{ initial: "column", md: "row-reverse" }} gap="6">
                <Box style={{ flex: "0 0 40%" }}>
                  <span className="featured-work-block-label">02</span>
                  <h3 className="featured-work-block-title">How I Built It</h3>
                  <Text size="2" style={{ color: "var(--color-text-2)", display: "block", lineHeight: 1.7 }}>
                    WavePoint is built solo using an AI-augmented development model I designed from scratch. Claude Code agents operate under 44 auto-loading governance rules that enforce architectural standards without manual review of every line. Work is isolated in git worktrees tied to a structured initiative system. A purpose-built MCP server exposes 12 composed tools — not auto-generated wrappers, but carefully designed interfaces following a Stripe-inspired 5-level abstraction ladder.
                  </Text>

                  <Box className="featured-work-callout">
                    <Text size="2" style={{ color: "var(--color-text)", fontWeight: 500, fontStyle: "italic" }}>
                      One engineer. Full platform. AI-augmented workflow.
                    </Text>
                  </Box>
                </Box>

                <Box style={{ flex: 1 }} className="featured-work-diagram-container">
                  <AgenticWorkflow />
                </Box>
              </Flex>
            </Box>

            {/* Block 3: Why It Matters */}
            <Box className="card featured-work-block">
              <span className="featured-work-block-label">03</span>
              <h3 className="featured-work-block-title">Why It Matters</h3>

              <Flex direction={{ initial: "column", md: "row" }} gap="4" mt="3">
                <Box className="featured-work-angle">
                  <Text className="featured-work-angle-title" style={{ display: "block" }}>
                    For Companies
                  </Text>
                  <Text size="2" style={{ color: "var(--color-text-2)", display: "block", lineHeight: 1.7 }}>
                    Most organizations are still figuring out how to let engineers use Copilot without breaking prod. WavePoint demonstrates what&apos;s possible when AI-augmented development is treated as an infrastructure problem — with governance, abstraction layers, and review systems — rather than a productivity hack.
                  </Text>
                </Box>

                <Box className="featured-work-angle">
                  <Text className="featured-work-angle-title" style={{ display: "block" }}>
                    For the Industry
                  </Text>
                  <Text size="2" style={{ color: "var(--color-text-2)", display: "block", lineHeight: 1.7 }}>
                    The gap between &ldquo;engineer who uses AI tools&rdquo; and &ldquo;engineer who builds systems for AI-augmented development&rdquo; is going to define the next era of Staff+ engineering. WavePoint is my proof of work.
                  </Text>
                </Box>
              </Flex>
            </Box>
          </StaggeredList>
        </Container>
      </AnimatedSection>
    </Box>
  );
}
