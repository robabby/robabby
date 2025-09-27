import { Box, Button, Container, Flex, Heading, IconButton, Link, Section, Text } from "@radix-ui/themes";
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FileIcon } from "@radix-ui/react-icons";

export default function Hero() {
  return (
    <Section id="home" style={{ background: "var(--blue-a9)" }}>
      <Box py="9">
        <Container py="8" size="3">
          <Flex direction="column" gap="4" align="center">
            <Heading mb="4" size="9">Robert Abby</Heading>
            <Text mb="4" size="7">Product Engineer</Text>
            <Flex direction="row" gap="4" mb="4">
              <Link href="https://www.linkedin.com/in/robabby/" target="_blank">
                <IconButton size="3" style={{ cursor: "pointer" }}>
                  <LinkedInLogoIcon />
                </IconButton>
              </Link>
              <Link href="https://github.com/robabby" target="_blank">
                <IconButton size="3" style={{ cursor: "pointer" }}>
                  <GitHubLogoIcon />
                </IconButton>
              </Link>
              <Link href="mailto:robabby23@gmail.com">
                <IconButton size="3" style={{ cursor: "pointer" }}>
                  <EnvelopeClosedIcon />
                </IconButton>
              </Link>
            </Flex>
            <Button asChild size="4">
              <Link href="/robert-abby-resume.pdf" target="_blank">
                <FileIcon />
                <Text>R&eacute;sum&eacute;</Text>
              </Link>
            </Button>
          </Flex>
        </Container>
      </Box>
    </Section>
  )
}

