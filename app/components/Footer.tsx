import { Box, Container, Flex, Link, Text } from "@radix-ui/themes";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <Box
      asChild
      style={{
        background: "var(--sg-void)",
        borderTop: "1px solid rgba(74, 158, 255, 0.1)",
      }}
    >
      <footer>
        {/* Geometric divider */}
        <Box
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--sg-primary), transparent)",
            opacity: 0.3,
          }}
        />

        <Container px="6" py="8">
          <Flex direction="column" justify="between" align="center" gap="4">
            <Flex direction="row" align="center" gap="4">
              <Link
                href="https://linkedin.com/in/robabby"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--sg-text-secondary)",
                  transition: "color 0.2s",
                }}
                className="footer-link"
              >
                <Flex align="center" gap="1">
                  <LinkedInLogoIcon />
                  <Text size="2">LinkedIn</Text>
                </Flex>
              </Link>
              <Link
                href="https://github.com/robabby"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--sg-text-secondary)",
                  transition: "color 0.2s",
                }}
                className="footer-link"
              >
                <Flex align="center" gap="1">
                  <GitHubLogoIcon />
                  <Text size="2">GitHub</Text>
                </Flex>
              </Link>
              <Link
                href="mailto:robabby23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--sg-text-secondary)",
                  transition: "color 0.2s",
                }}
                className="footer-link"
              >
                <Flex align="center" gap="1">
                  <EnvelopeClosedIcon />
                  <Text size="2">Email</Text>
                </Flex>
              </Link>
            </Flex>
            <Text size="1" style={{ color: "var(--sg-text-muted)" }}>
              &copy; {new Date().getFullYear()} Rob Abby. All rights reserved.
            </Text>
          </Flex>
        </Container>
      </footer>
    </Box>
  );
}
