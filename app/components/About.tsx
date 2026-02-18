import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import AnimatedSection from "./AnimatedSection";

const ENGINEERING_PRINCIPLES = [
  {
    title: "Systems over features",
    description: "Build the infrastructure that makes the next 100 features easier to ship.",
  },
  {
    title: "Accessibility as architecture",
    description: "WCAG compliance baked into the design system, not bolted on after.",
  },
  {
    title: "Ship with evidence",
    description: "Measure, iterate, measure again. Every UI decision should have a feedback loop.",
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
                I build the systems and teams that build the product — design infrastructure, component architecture, and engineering culture that compound over time.
              </Text>

              {/* Narrative paragraphs */}
              <Text className="about-narrative" mb="2" style={{ display: "block" }}>
                My path started as the first developer at a car marketplace, writing jQuery and learning to ship fast with founders breathing down my neck. At Savo, I spun out an autonomous UX team, ran 50+ research sessions, and built the company&#39;s first living design system in Ember. At project44, I brought that same systems thinking to React. Then at PartySlate, I joined a 12-person startup and stayed through Series B — scaling the frontend team, building a 25+ component library, and helping grow the platform to 200k+ monthly users.
              </Text>

              <Text className="about-narrative" mb="2" style={{ display: "block" }}>
                The thread through all of it: I care about the layer beneath the feature. Design systems that make the next hundred features easier to ship. Accessibility scores that climb because compliance is baked into the component library, not patched in before launch. Performance budgets that hold because the architecture respects them from the start. I&#39;ve worked across Ember, React, Vue, and jQuery — the framework matters less than the engineering discipline behind it.
              </Text>

              <Text className="about-narrative" mb="6" style={{ display: "block" }}>
                I&#39;m drawn to teams where frontend engineering is treated as a craft — where the work is as much about mentoring the next senior engineer as shipping the next release.
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
