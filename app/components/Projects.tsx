import { Badge, Box, Button, Container, Flex, Heading, Link, Text } from "@radix-ui/themes";

export default function Projects() {
  const projects = [
    {
      title: "ai-chatbot",
      githubLink: "https://github.com/robabby/ai-chatbot",
      liveLink: "https://ai-chatbot-psi-green-88.vercel.app/",
      description: "ChatGPT/Grok clone built with Next.js, TailwindCSS, Grok and OpenAI API. Features include conversation history, user authentication, and a sleek, responsive design.",
      tech: [
        "Nextjs", "shadcn/ui", "radix-ui", "OpenAI API", "Grok API", "TypeScript", "Vercel Chat SDK"
      ]
    },
    {
      title: "tldr-bot",
      githubLink: "https://github.com/robabby/tldr-bot",
      liveLink: null,
      description: "A Discord bot written in Python that leverages OpenAI's GPT-5 API to generate sarcastic summaries of recent messages in a channel. Will also generate memes based on message contents.",
      tech: [
        "Python", "Discord.py", "OpenAI GPT-5 API"
      ]
    }
  ]

  return (
    <Box id="projects" py="8" style={{ background: "var(--gray-a2)" }}>
      <Flex direction="column" justify="center" align="center" py="8">
        <Heading mb="8" size="8">Projects</Heading>
        {projects.map((proj, index) => (
          <Container key={index} size="3" mb="8" p="4" style={{ background: "var(--gray-a4)", borderRadius: "var(--radius-3)", boxShadow: "var(--shadow-3)" }}>
            <Heading mb="4" size="4">{proj.title}</Heading>
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
              <Button asChild mb="2" mr="2">
                <Link href={proj.githubLink} target="_blank">
                  Github Link
                </Link>
              </Button>
              {proj.liveLink && (
                <Button mb="2">
                  <Link href={proj.liveLink} target="_blank">
                    Demo Link
                  </Link>
                </Button>
              )}
            </Box>
          </Container>
        ))}
      </Flex>
    </Box>
  )
}

