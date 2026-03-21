import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import AnimatedSection from "./AnimatedSection";

const ENGINEERING_PRINCIPLES = [
  {
    title: "Build the tooling layer",
    description: "Sherpa Studio exists because reliable AI development requires more than a capable model — it requires workforce management, skill orchestration, and convention enforcement at the infrastructure level.",
  },
  {
    title: "AI as a governed system, not a shortcut",
    description: "Review gates, structured workflows, and clear boundaries. The value compounds when you treat AI as infrastructure you architect, not magic you invoke.",
  },
  {
    title: "Own the full surface",
    description: "Consulting practice, product, native apps, APIs, tooling, deployment. Founding means shipping end-to-end — every layer, every decision.",
  },
];

export default function About() {
  return (
    <Box id="about" py="9" style={{ background: "var(--gradient-section)", position: "relative", overflow: "hidden" }}>
      <AnimatedSection style={{ position: "relative", zIndex: 1 }}>
        <Container size="4" px="6">
          {/* Asymmetric grid layout */}
          <Flex direction={{ initial: "column", md: "row" }} gap={{ initial: "4", md: "8" }} align="start">
            {/* Left column - Section header */}
            <Box className="section-header-column">
              <Text className="section-subtitle" mb="2" style={{ display: "block" }}>
                Background
              </Text>
              <Heading size="8" className="section-title" style={{ textAlign: "left" }}>
                About
              </Heading>
            </Box>

            {/* Right column - Content */}
            <Box style={{ flex: 1 }}>
              {/* Editorial lead statement */}
              <Text className="about-lead" mb="6" style={{ display: "block" }}>
                After 13 years building frontend infrastructure at scale, I spent a year building my own — founding Sherpa, shipping WavePoint, and creating the developer tooling that ties them together. The result: a practice that ships complex software with the velocity of a team and the architectural rigor of a staff engineer.
              </Text>

              {/* Narrative paragraphs */}
              <Text className="about-narrative" mb="2" style={{ display: "block" }}>
                My first 13 years were a deep apprenticeship in frontend infrastructure. I was the first developer at a car marketplace writing jQuery for founders. I spun out an autonomous UX team at Savo, ran 50+ research sessions, and built the company&#39;s first design system in Ember. At PartySlate, I joined at 12 people and stayed through Series B — scaling the frontend team, shipping a 25+ component library, and helping drive 258% YoY revenue growth across a platform serving 200k+ monthly users.
              </Text>

              <Text className="about-narrative" mb="6" style={{ display: "block" }}>
                Now I&#39;m applying that infrastructure instinct to a new kind of engineering. I founded Sherpa, an AI consulting practice grounded in honesty and craftsmanship, then built WavePoint — a full astrology and spirituality platform spanning a Next.js web app, native Apple apps, shared TypeScript packages, and a Swift astronomy engine — shipping 472+ PRs in 11 weeks as both a product and a proof-of-concept for agentic engineering at scale. To make that possible, I built Sherpa Studio, an Agentic Engineering workflow suite handling workforce management, skill orchestration, and convention enforcement. The throughline: I didn&#39;t just use AI tools, I built the infrastructure that makes AI-assisted development reliable. I&#39;ve built the solo version — now I&#39;m looking for a team where that velocity and system-design thinking compounds at real scale.
              </Text>

              {/* Engineering principles */}
              <Flex direction="column" gap="4" className="about-principles">
                {ENGINEERING_PRINCIPLES.map((principle) => (
                  <Box key={principle.title} className="about-principle">
                    <Text className="about-principle-title" style={{ display: "block" }}>
                      {principle.title}
                    </Text>
                    <Text className="about-principle-description" style={{ display: "block" }}>
                      {principle.description}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Flex>
        </Container>
      </AnimatedSection>
    </Box>
  )
}
