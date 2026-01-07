import { Badge, Box, Button, Callout, Container, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import GeometricPattern from "./GeometricPattern";
import AnimatedSection from "./AnimatedSection";
import "./Projects.css";

const PROJECTS = [
  {
    title: "Sacred Geometry Webapp",
    category: "Web App",
    callout: null,
    githubLink: "https://github.com/robabby/sacred-geometry",
    liveLink: "https://sacred-geometry.vercel.app/",
    _target: "_blank",
    description: "A site for navigating Platonic Solids, Sacred Geometry concepts, and related mathematical structures. Features in-depth information and search functionality.",
    tech: [
      "Nextjs", "radix-ui", "TypeScript", "MDX", "Jest", "Vitest"
    ],
    gradientType: "blue",
    featured: true
  },
  {
    title: "AI Art Gallery",
    category: "Gallery",
    callout: null,
    githubLink: "https://github.com/robabby/robabby",
    liveLink: "/art",
    _target: "_self",
    description: "A smattering of AI-generated art pieces created using various tools including Midjourney, DALL·E 3, and Stable Diffusion. Showcased in a sleek, responsive Next.js application (this site).",
    tech: [
      "Nextjs", "radix-ui", "Midjourney", "DALL-E", "Flux.1", "Invoke UI"
    ],
    gradientType: "gold"
  },
  {
    title: "tldr-bot",
    category: "Bot",
    callout: null,
    githubLink: "https://github.com/robabby/tldr-bot",
    liveLink: null,
    description: "A Discord bot written in Python that leverages OpenAI's GPT-5 API to generate sarcastic summaries of recent messages in a channel. Will also generate memes based on message contents.",
    tech: [
      "Python", "Discord.py", "OpenAI GPT-5 API"
    ],
    gradientType: "green"
  }
]

export default function Projects() {

  return (
    <Box
      id="projects"
      py="9"
      style={{ background: "var(--sg-deep)", position: "relative", overflow: "hidden" }}
    >
      <GeometricPattern variant="hexagons" opacity={0.02} />
      <AnimatedSection style={{ position: "relative", zIndex: 1 }}>
        <Container size="4" px="6">
          {/* Asymmetric grid layout */}
          <Flex direction={{ initial: "column", md: "row" }} gap={{ initial: "4", md: "8" }} align="start">
            {/* Left column - Section header */}
            <Box className="section-header-column">
              <Text className="section-subtitle" mb="2" style={{ display: "block" }}>
                Work
              </Text>
              <Heading size="8" className="section-title" style={{ textAlign: "left" }}>
                Projects
              </Heading>
            </Box>

            {/* Right column - Masonry grid */}
            <Box style={{ flex: 1 }} className="projects-masonry">
              {PROJECTS.map((proj, index) => (
                <Box
                  key={index}
                  className={`sg-card project-card ${proj.featured ? 'project-card--featured' : ''}`}
                >
                  <Box className={`project-visual project-visual--${proj.gradientType}`}>
                    <Box className="project-visual-pattern" />
                    <Box className="project-visual-content">
                      <Badge size="1" className="sg-badge--featured">
                        {proj.category}
                      </Badge>
                      <Heading size="5" className="project-visual-title">{proj.title}</Heading>
                    </Box>
                  </Box>
                  <Box p="4">
                    {proj.callout && (
                      <Callout.Root mb="3" size="1">
                        <Callout.Icon>
                          <InfoCircledIcon />
                        </Callout.Icon>
                        <Callout.Text>
                          {proj.callout}
                        </Callout.Text>
                      </Callout.Root>
                    )}
                    <Text size="2" style={{ color: "var(--sg-text-secondary)", display: "block" }} mb="3">
                      {proj.description}
                    </Text>
                    <Flex wrap="wrap" gap="1" mb="4">
                      {proj.tech.map((item, techIndex) => (
                        <Badge size="1" key={techIndex} className="sg-badge">
                          {item}
                        </Badge>
                      ))}
                    </Flex>
                    <Flex gap="2">
                      {proj.githubLink && (
                        <Button size="1" variant="outline" asChild>
                          <Link href={proj.githubLink} target="_blank">
                            GitHub
                          </Link>
                        </Button>
                      )}
                      {proj.liveLink && (
                        <Button size="1" asChild>
                          <Link href={proj.liveLink} target={proj._target}>
                            Demo
                          </Link>
                        </Button>
                      )}
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Box>
          </Flex>
        </Container>
      </AnimatedSection>
    </Box>
  )
}

