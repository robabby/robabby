import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import AnimatedSection from "./AnimatedSection";

const ENGINEERING_PRINCIPLES = [
  {
    title: "Systems that absorb complexity",
    description: "Build the abstraction layer that makes the next 100 features — and the next 100 AI-generated contributions — safe to ship.",
  },
  {
    title: "AI as infrastructure, not shortcut",
    description: "Governance rules, review gates, and structured workflows. The value is in the system around the model, not the model alone.",
  },
  {
    title: "Ship the whole product",
    description: "Architecture, APIs, native apps, payments, deployment. Staff-level thinking means owning the full surface, not just one layer.",
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
                I build products at the intersection of systems engineering and AI-augmented development — shipping complex, cross-platform software as a solo technical founder at a pace that used to require a team.
              </Text>

              {/* Narrative paragraphs */}
              <Text className="about-narrative" mb="2" style={{ display: "block" }}>
                My first 13 years were a deep apprenticeship in frontend infrastructure. I was the first developer at a car marketplace writing jQuery for founders. I spun out an autonomous UX team at Savo, ran 50+ research sessions, and built the company&#39;s first design system in Ember. At PartySlate, I joined at 12 people and stayed through Series B — scaling the frontend team, shipping a 25+ component library, and helping drive 258% YoY revenue growth across a platform serving 200k+ monthly users.
              </Text>

              <Text className="about-narrative" mb="6" style={{ display: "block" }}>
                Now I&#39;m applying that infrastructure instinct to a new kind of engineering. With WavePoint, I&#39;m building a full product — Next.js web app, 6 native Apple apps, shared TypeScript packages, a Swift astronomy engine — solo, shipping 450+ commits in 9 weeks. The multiplier is a purpose-built AI development workflow: governance rules, worktree isolation, a custom MCP server, and a 5-level abstraction ladder that lets me operate at the scope of a small team while maintaining the architectural standards of a Staff engineer.
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
