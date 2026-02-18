import { Box, Button, Container, Flex, Link, Text } from "@radix-ui/themes";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <Box
      asChild
      style={{
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <footer>
        <Container px="6" py="8">
          <Flex direction="column" justify="between" align="center" gap="6">
            {/* Availability CTA */}
            <Box
              p="6"
              style={{
                background: "rgba(59, 130, 246, 0.08)",
                border: "2px solid rgba(59, 130, 246, 0.25)",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.1)",
              }}
            >
              <Flex align="center" justify="center" gap="2" mb="2">
                <Box
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 8px #22c55e",
                  }}
                />
                <Text size="2" style={{ color: "var(--color-text-2)" }}>
                  Available for opportunities
                </Text>
              </Flex>
              <Text
                size="5"
                weight="bold"
                style={{ color: "var(--color-primary)", display: "block" }}
                mb="3"
              >
                Let&apos;s Build Something Great
              </Text>
              <Button size="3" asChild style={{ cursor: "pointer" }}>
                <a href="mailto:robabby23@gmail.com">Get in Touch</a>
              </Button>
            </Box>

            {/* Social links */}
            <Flex direction="row" align="center" gap="4">
              <Link
                href="https://linkedin.com/in/robabby"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--color-text-2)",
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
                  color: "var(--color-text-2)",
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
                style={{
                  color: "var(--color-text-2)",
                  transition: "color 0.2s",
                }}
                className="footer-link"
              >
                <Flex align="center" gap="1">
                  <EnvelopeClosedIcon />
                  <Text size="2">Email</Text>
                </Flex>
              </Link>
              <Link
                href="/robert-abby-resume.pdf"
                download
                style={{
                  color: "var(--color-text-2)",
                  transition: "color 0.2s",
                }}
                className="footer-link"
              >
                <Flex align="center" gap="1">
                  <FileTextIcon />
                  <Text size="2">Resume</Text>
                </Flex>
              </Link>
            </Flex>

            {/* Branding */}
            <Flex direction="column" align="center" gap="1">
              <Text size="1" style={{ color: "var(--color-text-muted)" }}>
                Crafted with React & Next.js
              </Text>
              <Text size="1" style={{ color: "var(--color-text-muted)" }}>
                &copy; {new Date().getFullYear()} Rob Abby
              </Text>
            </Flex>
          </Flex>
        </Container>
      </footer>
    </Box>
  );
}
