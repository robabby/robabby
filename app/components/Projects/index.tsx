import { Badge, Box, Button, Callout, Container, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import AnimatedSection from "../AnimatedSection";
import ClaudeSkillsPipeline from "./diagrams/ClaudeSkillsPipeline";
import "./style.css";

const DIAGRAMS: Record<string, React.ComponentType> = {
  "claude-skills-pipeline": ClaudeSkillsPipeline,
};

type Project = {
  title: string;
  category: string;
  callout: string | null;
  githubLink: string | null;
  liveLink: string | null;
  liveLinkLabel?: string;
  _target?: string;
  description: string;
  tech: string[];
  gradientType: string;
  featured?: boolean;
  diagramId?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Claude Skills",
    category: "Developer Tool",
    callout: null,
    githubLink: "https://github.com/robabby/claude-skills",
    liveLink: null,
    _target: "_blank",
    description: "A cross-session memory and workflow system for Claude Code built on the MCP protocol. Six composable skills \u2014 hydrate, remember, recall, reflect, glean, and pickup \u2014 manage persistent state across conversations using Obsidian as the storage layer.",
    tech: ["Claude Code", "Obsidian", "MCP", "TypeScript"],
    gradientType: "purple",
    featured: true,
    diagramId: "claude-skills-pipeline"
  },
  {
    title: "robabby.com",
    category: "Portfolio",
    callout: null,
    githubLink: "https://github.com/robabby/robabby",
    liveLink: "/art",
    liveLinkLabel: "Art Gallery",
    _target: "_self",
    description: "A Next.js 15 + React 19 portfolio featuring code-generated SVG architecture diagrams, WCAG AA compliance, static generation with dynamic routes, motion/react animations with reduced-motion support, and an integrated AI art gallery with lightbox navigation.",
    tech: [
      "Next.js", "React 19", "TypeScript", "Radix UI", "motion/react", "Vercel"
    ],
    gradientType: "gold"
  },
  {
    title: "tldr-bot",
    category: "Bot",
    callout: null,
    githubLink: "https://github.com/robabby/tldr-bot",
    liveLink: null,
    description: "An early exploration of AI-powered developer tools \u2014 a Discord bot that uses OpenAI\u2019s API to generate sarcastic summaries of channel history and auto-generate memes from message context.",
    tech: [
      "Python", "Discord.py", "OpenAI GPT-5 API"
    ],
    gradientType: "green"
  }
];

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
                Builds
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
                  <Box className={`project-visual ${proj.diagramId ? 'project-visual--diagram' : `project-visual--${proj.gradientType}`}`}>
                    {proj.diagramId && DIAGRAMS[proj.diagramId] ? (
                      (() => {
                        const DiagramComponent = DIAGRAMS[proj.diagramId!];
                        return <DiagramComponent />;
                      })()
                    ) : (
                      <Box className="project-visual-content">
                        <Badge size="1" className="badge--featured">
                          {proj.category}
                        </Badge>
                        <Heading size="5" className="project-visual-title">{proj.title}</Heading>
                      </Box>
                    )}
                  </Box>
                  <Box p="4">
                    {proj.diagramId && (
                      <Flex gap="2" align="center" mb="3">
                        <Badge size="1" className="badge--featured">
                          {proj.category}
                        </Badge>
                        <Heading size="4" style={{ color: "var(--color-text)" }}>{proj.title}</Heading>
                      </Flex>
                    )}
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
                            {proj.liveLinkLabel || "Demo"}
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
