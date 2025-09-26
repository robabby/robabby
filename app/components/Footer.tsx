import { Box, Container, Flex, Link, Text } from "@radix-ui/themes";
import { LinkedInLogoIcon, GitHubLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <Container px="6">
      <Flex direction="column" justify="between" align="center" my="4">
        <Box mb="4">
          <Flex direction="row" align="center" gap="2">
            <Link href="https://linkedin.com/in/robabby" target="_blank" rel="noopener noreferrer">
              <LinkedInLogoIcon />&nbsp;
              LinkedIn
            </Link>
            <Link href="https://github.com/robabby" target="_blank" rel="noopener noreferrer">
              <GitHubLogoIcon />&nbsp;
              GitHub
            </Link>
            <Link href="mailto:robabby23@gmail.com" target="_blank" rel="noopener noreferrer">
              <EnvelopeClosedIcon />&nbsp;
              Email
            </Link>
          </Flex>
        </Box>
        <Text>&copy; {new Date().getFullYear()} Rob Abby. All rights reserved.</Text>
      </Flex>
    </Container>
  )
}

