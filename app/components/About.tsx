import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";

export default function About() {
  return (
    <Box id="about" py="8">
      <Flex direction="column" justify="center" align="center">
        <Heading mb="4" size="8">About</Heading>
        <Container p="4" mx="4" my="8" size="3" style={{ background: "var(--gray-a3)", borderRadius: "var(--radius-3)" }}>
          <Text size="4">
            I have 15 years of experience building performant, user-centered web applications across B2B and B2C domains 
            in agile software development teams. I specialize in React frameworks and excel at translating complex technical 
            requirements into scalable UI systems. I bring deep experience with design systems, component architecture, 
            refactoring and cross-functional collaboration—and I&apos;m seeking frontend software engineering roles where thoughtful 
            code meets innovation.
          </Text>
        </Container>
      </Flex>
    </Box>
  )
}

