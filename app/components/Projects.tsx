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
    gradientType: "blue"
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
    title: "ai-chatbot",
    category: "AI Tool",
    callout: "[09/26/2025] Site loads, but chat responses currently not working.  Debugging...",
    githubLink: "https://github.com/robabby/ai-chatbot",
    liveLink: "https://ai-chatbot-psi-green-88.vercel.app/",
    _target: "_blank",
    description: "ChatGPT/Grok clone built with Next.js, TailwindCSS, Grok and OpenAI API. Features include conversation history, user authentication, and a sleek, responsive design.",
    tech: [
      "Nextjs", "shadcn/ui", "radix-ui", "OpenAI API", "Grok API", "TypeScript", "Vercel Chat SDK"
    ],
    gradientType: "purple"
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
      py="8"
      style={{ background: "var(--sg-deep)", position: "relative", overflow: "hidden" }}
    >
      <GeometricPattern variant="hexagons" opacity={0.02} />
      <AnimatedSection style={{ position: "relative", zIndex: 1 }}>
        <Flex
          align="center"
          direction="column"
          justify="center"
        >
        <Heading mb="8" size="8" className="section-title">
          Projects
        </Heading>
        {PROJECTS.map((proj, index) => (
          <Container
            key={index}
            size="3"
            mx="4"
            mb="8"
            className="sg-card project-card"
          >
            <Box className={`project-visual project-visual--${proj.gradientType}`}>
              <Box className="project-visual-pattern" />
            </Box>
            <Box p="4">
              <Badge size="1" mb="2" className="sg-badge--featured">
                {proj.category}
              </Badge>
              <Heading mb="4" size="4">{proj.title}</Heading>
            {proj.callout && (
              <Callout.Root mb="4">
                <Callout.Icon>
                  <InfoCircledIcon />
                </Callout.Icon>
                <Callout.Text>
                  {proj.callout}
                </Callout.Text>
              </Callout.Root>
            )}
            <Box mb="4">
              <Text mb="4">{proj.description}</Text>
            </Box>
            <Flex wrap="wrap" gap="2" mb="4">
              {proj.tech.map((item, index) => (
                <Badge size="2" key={index}>
                  {item}
                </Badge>
              ))}
            </Flex>
              <Box>
                {proj.githubLink && (
                  <Button asChild mb="2" mr="2">
                    <Link href={proj.githubLink} target="_blank">
                      Github Link
                    </Link>
                  </Button>
                )}
                {proj.liveLink && (
                  <Button mb="2">
                    <Link href={proj.liveLink} target={proj._target}>
                      Demo Link
                    </Link>
                  </Button>
                )}
              </Box>
            </Box>
          </Container>
        ))}
        </Flex>
      </AnimatedSection>
    </Box>
  )
}

