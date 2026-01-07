import { Badge, Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import GeometricPattern from "./GeometricPattern";
import AnimatedSection from "./AnimatedSection";
import StaggeredList from "./StaggeredList";

// Hero skills displayed as prominent circular badges
const HERO_SKILLS = ["TypeScript", "React", "Next.js", "Design Systems"];

type SkillCategory = {
  featured: string[];
  other: string[];
};

const SKILLS: Record<string, SkillCategory> = {
  "Languages & Frameworks": {
    featured: ["TypeScript", "React", "Next.js"],
    other: [
      "JavaScript", "Vue.js", "Node.js", "HTML5", "CSS3", "Sass", "Tailwind",
      "GraphQL", "REST APIs", "React Query", "Apollo Client", "Storybook",
      "React Testing Library", "Webpack", "Vite", "ES6+", "Babel", "SWC",
      "Jest", "Enzyme", "Cypress"
    ]
  },
  "Leadership": {
    featured: ["Mentorship", "Cross-functional Collaboration"],
    other: [
      "Coaching", "Pair Programming", "Agile Methodologies", "Team Building",
      "User-Centered Design", "Design Thinking", "Knowledge Sharing", "Technical Writing"
    ]
  },
  "Platforms & Tools": {
    featured: ["AWS", "Docker", "Living Design Systems"],
    other: [
      "ECR", "ECS", "S3", "CloudWatch", "Route 53", "Figma", "Git & Github",
      "CI/CD", "VS Code", "Claude Code", "Chrome DevTools", "Postman",
      "Jira", "Confluence", "Slack", "Zoom"
    ]
  }
};

export default function Skills() {
  return (
    <Box id="skills" py="9" style={{ background: "var(--sg-deep)", position: "relative", overflow: "hidden" }}>
      <GeometricPattern variant="lines" opacity={0.02} />
      <AnimatedSection style={{ position: "relative", zIndex: 1 }}>
        <Container size="4" px="6">
          {/* Asymmetric grid layout */}
          <Flex direction={{ initial: "column", md: "row" }} gap="8" align="start">
            {/* Left column - Section header */}
            <Box style={{ flex: "0 0 200px" }}>
              <Text className="section-subtitle" mb="2" style={{ display: "block" }}>
                Expertise
              </Text>
              <Heading size="8" className="section-title" style={{ textAlign: "left" }}>
                Skills
              </Heading>

              {/* Hero skill badges - circular prominent display */}
              <Box className="skill-hero-badges" mt="6">
                {HERO_SKILLS.map((skill) => (
                  <Box key={skill} className="skill-hero-badge">
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right column - Skill categories */}
            <Box style={{ flex: 1 }}>
              <Flex direction="column" gap="6">
                {Object.entries(SKILLS).map(([category, { featured, other }]) => (
                  <Box key={category} p="5" className="sg-card">
                    <Heading mb="4" size="4" style={{ color: "var(--sg-secondary)" }}>{category}</Heading>
                    <StaggeredList style={{ display: "flex", flexDirection: "row", gap: "var(--space-2)", flexWrap: "wrap" }}>
                      {/* Featured skills with gold accent */}
                      {featured.map((skill) => (
                        <Badge size="3" key={skill} className="sg-badge--featured">
                          {skill}
                        </Badge>
                      ))}
                      {/* Standard skills */}
                      {other.map((skill) => (
                        <Badge size="2" key={skill} className="sg-badge">
                          {skill}
                        </Badge>
                      ))}
                    </StaggeredList>
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

