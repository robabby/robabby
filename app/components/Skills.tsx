"use client";

import { Badge, Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import { motion } from "motion/react";
import GeometricPattern from "./GeometricPattern";
import AnimatedSection from "./AnimatedSection";
import StaggeredList from "./StaggeredList";

// Core competencies for editorial hero display
const CORE_COMPETENCIES = [
  { skill: "TypeScript", emphasis: "Type-Safe" },
  { skill: "React", emphasis: "Component" },
  { skill: "Next.js", emphasis: "Full-Stack" },
  { skill: "Design Systems", emphasis: "Systematic" },
];

type SkillCategory = {
  featured: string[];
  other: string[];
};

const SKILL_CATEGORIES: Record<string, SkillCategory> = {
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
    <Box id="skills" py="9" className="skills-section">
      <GeometricPattern variant="lines" opacity={0.02} />
      <AnimatedSection style={{ position: "relative", zIndex: 1 }}>
        <Container size="4" px="6">
          {/* Asymmetric grid layout */}
          <Flex direction={{ initial: "column", md: "row" }} gap="8" align="start">
            {/* Left column - Section header + Hero statements */}
            <Box className="skills-left-column">
              <Text className="section-subtitle" mb="2" style={{ display: "block" }}>
                Expertise
              </Text>
              <Heading size="8" className="section-title" style={{ textAlign: "left" }}>
                Skills
              </Heading>

              {/* Editorial Hero Statements */}
              <Box className="skills-hero-statements">
                {CORE_COMPETENCIES.map((item, index) => (
                  <motion.div
                    key={item.skill}
                    className="skill-statement"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <span className="skill-statement-emphasis">{item.emphasis}</span>
                    <span className="skill-statement-skill">{item.skill}</span>
                  </motion.div>
                ))}
              </Box>
            </Box>

            {/* Right column - Category cards with equal weight */}
            <Box className="skills-categories">
              <StaggeredList style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {Object.entries(SKILL_CATEGORIES).map(([category, { featured, other }]) => (
                  <Box key={category} className="sg-card skill-category-card">
                    {/* Category header */}
                    <h3 className="skill-category-title">{category}</h3>

                    {/* Featured skills as pull quotes */}
                    <Box className="skill-featured-container">
                      {featured.map((skill) => (
                        <Text key={skill} className="skill-pull-quote">
                          {skill}
                        </Text>
                      ))}
                    </Box>

                    {/* Supporting skills */}
                    <Flex wrap="wrap" gap="2" className="skill-supporting-container">
                      {other.map((skill) => (
                        <Badge key={skill} size="2" className="sg-badge">
                          {skill}
                        </Badge>
                      ))}
                    </Flex>
                  </Box>
                ))}
              </StaggeredList>
            </Box>
          </Flex>
        </Container>
      </AnimatedSection>
    </Box>
  );
}

