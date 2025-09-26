import { Box, Button, Container, Flex, Heading, Link, Section, Text } from "@radix-ui/themes";
import { FileIcon } from "@radix-ui/react-icons";

export default function Hero() {
  return (
    <Section id="home" style={{ background: "var(--blue-a9)" }}>
      <Box py="9">
        <Container py="8" size="3">
          <Flex direction="column" gap="4" align="center">
            <Heading mb="4" size="9">Robert Abby</Heading>
            <Text mb="4" size="7">Product Engineer</Text>
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

