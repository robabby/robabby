import { Badge, Box, Button, Callout, Container, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import AnimatedSection from "./AnimatedSection";
import "./Projects.css";

const PROJECTS = [
  {
    title: "WavePoint",
    category: "Platform",
    callout: null,
    githubLink: null,
    liveLink: "https://wavepoint.space/",
    _target: "_blank",
    description: "A cross-platform product shipping a Next.js web app and 6 native Apple apps from a single monorepo. Shared TypeScript content packages, a Swift astronomy engine for real-time calculations, Supabase auth, and Stripe payments \u2014 all coordinated across web, iOS, iPadOS, and macOS.",
    tech: [
      "Next.js", "React", "TypeScript", "Supabase", "Stripe", "Swift", "SwiftUI"
    ],
    gradientType: "blue",
    featured: true
  },
  {
    title: "Claude Skills",
    category: "Tool",
    callout: null,
    githubLink: "https://github.com/robabby/claude-skills",
    liveLink: null,
    _target: "_blank",
    description: "A cross-session memory system for Claude Code that uses Obsidian as persistent storage. Includes 6 skills for memory management: hydrate, remember, recall, reflect, glean, and pickup.",
    tech: ["Claude Code", "Obsidian", "MCP", "TypeScript"],
    gradientType: "purple",
    featured: false
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
      style={{ background: "var(--color-surface)", position: "relative", overflow: "hidden" }}
    >
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
                  className={`card project-card ${proj.featured ? 'project-card--featured' : ''}`}
                >
                  <Box className={`project-visual project-visual--${proj.gradientType}`}>
                    <Box className="project-visual-pattern" />
                    <Box className="project-visual-content">
                      <Badge size="1" className="badge--featured">
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
                    <Text size="2" style={{ color: "var(--color-text-2)", display: "block" }} mb="3">
                      {proj.description}
                    </Text>
                    <Flex wrap="wrap" gap="1" mb="4">
                      {proj.tech.map((item, techIndex) => (
                        <Badge size="1" key={techIndex} className="badge">
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

