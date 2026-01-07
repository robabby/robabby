import { Badge, Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import GeometricPattern from "./GeometricPattern";
import AnimatedSection from "./AnimatedSection";

const KEY_STRENGTHS = [
  "React Frameworks",
  "Design Systems",
  "Component Architecture",
  "Cross-functional Leadership"
];

export default function About() {
  return (
    <Box id="about" py="9" style={{ background: "var(--sg-gradient-section)", position: "relative", overflow: "hidden" }}>
      <GeometricPattern variant="dots" opacity={0.02} />
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
              {/* Oversized lead statement */}
              <Text className="lead-statement" mb="6" style={{ display: "block" }}>
                15 years crafting performant, user-centered web applications that drive measurable business outcomes.
              </Text>

              {/* Key competency badges */}
              <Flex gap="2" wrap="wrap" mb="6">
                {KEY_STRENGTHS.map((strength) => (
                  <Badge key={strength} size="2" className="sg-badge--featured">
                    {strength}
                  </Badge>
                ))}
              </Flex>

              {/* Expanded description */}
              <Text size="4" style={{ color: "var(--sg-text-secondary)", lineHeight: 1.8 }}>
                Specializing in B2B and B2C domains within agile teams. Expert at translating
                complex technical requirements into scalable UI systems—seeking frontend roles
                where thoughtful code meets innovation.
              </Text>
            </Box>
          </Flex>
        </Container>
      </AnimatedSection>
    </Box>
  )
}

