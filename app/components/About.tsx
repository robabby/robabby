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
    <Box id="about" py="8" style={{ background: "var(--sg-gradient-section)", position: "relative", overflow: "hidden" }}>
      <GeometricPattern variant="dots" opacity={0.02} />
      <AnimatedSection style={{ position: "relative", zIndex: 1 }}>
        <Flex direction="column" justify="center" align="center">
          <Heading mb="4" size="8" className="section-title">About</Heading>
          <Container p="6" mx="4" my="8" size="3" className="sg-card">
            {/* Lead statement with gold accent */}
            <Text size="5" weight="medium" mb="4" style={{ color: "var(--sg-secondary)", display: "block" }}>
              15 years crafting performant, user-centered web applications.
            </Text>

            {/* Key competency badges */}
            <Flex gap="2" wrap="wrap" mb="4">
              {KEY_STRENGTHS.map((strength) => (
                <Badge key={strength} size="2" className="sg-badge--featured">
                  {strength}
                </Badge>
              ))}
            </Flex>

            {/* Expanded description */}
            <Text size="4">
              Specializing in B2B and B2C domains within agile teams. Expert at translating
              complex technical requirements into scalable UI systems—seeking frontend roles
              where thoughtful code meets innovation.
            </Text>
          </Container>
        </Flex>
      </AnimatedSection>
    </Box>
  )
}

