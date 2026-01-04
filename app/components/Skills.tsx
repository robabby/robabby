import { Badge, Box, Container, Flex, Heading } from "@radix-ui/themes";
import GeometricPattern from "./GeometricPattern";
import AnimatedSection from "./AnimatedSection";
import StaggeredList from "./StaggeredList";

const SKILLS = {
  "Languages & Frameworks": [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js",
    "HTML5", "CSS3", "Sass", "Tailwind", "GraphQL", "REST APIs", 
    "React Query", "Apollo Client", "Storybook", "React Testing Library", 
    "Webpack", "Vite", "ES6+", "Babel", "SWC", "Jest", "Enzyme", "Cypress"
  ],
  "Leadership": [
    "Coaching", "Mentorship", "Pair Programming", "Cross-functional Collaboration", 
    "Agile Methodologies", "Team Building", "User-Centered Design", "Design Thinking",
    "Knowledge Sharing", "Technical Writing"
  ],
  "Platforms & Tools": [
    "AWS", "ECR", "ECS", "S3", "CloudWatch", "Route 53", "Living Design Systems", "Docker", "Figma",
    "Git & Github", "CI/CD", "VS Code", "Claude Code", "Chrome DevTools", "Postman", "Jira", "Confluence",
    "Slack", "Zoom"
  ]
}

export default function Skills() {

  return (
    <Box id="skills" py="8" style={{ background: "var(--sg-deep)", position: "relative", overflow: "hidden" }}>
      <GeometricPattern variant="lines" opacity={0.02} />
      <AnimatedSection style={{ position: "relative", zIndex: 1 }}>
        <Flex direction="column" justify="center" align="center">
          <Heading mb="8" size="8">Skills</Heading>
          <Container size="3">
            <Flex direction="column" gap="4">
              {Object.entries(SKILLS).map(([category, skills]) => (
                <Box key={category} mx="4" p="4" className="sg-card">
                  <Heading mb="4" size="5">{category}</Heading>
                  <StaggeredList style={{ display: "flex", flexDirection: "row", gap: "var(--space-2)", flexWrap: "wrap" }}>
                    {skills.map((skill, index) => (
                      <Badge size="3" key={index}>
                        {skill}
                      </Badge>
                    ))}
                  </StaggeredList>
                </Box>
              ))}
            </Flex>
          </Container>
        </Flex>
      </AnimatedSection>
    </Box>
  )
}

