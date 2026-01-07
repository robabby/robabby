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
        background: "var(--sg-void)",
        borderTop: "1px solid rgba(74, 158, 255, 0.1)",
      }}
    >
      <footer>
        {/* Gold geometric divider */}
        <Box
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, var(--sg-secondary), transparent)",
            opacity: 0.5,
          }}
        />

        <Container px="6" py="8">
          <Flex direction="column" justify="between" align="center" gap="6">
            {/* Availability CTA */}
            <Box
              p="6"
              style={{
                background: "rgba(201, 169, 98, 0.12)",
                border: "2px solid rgba(201, 169, 98, 0.4)",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 0 40px rgba(201, 169, 98, 0.15)",
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
                <Text size="2" style={{ color: "var(--sg-text-secondary)" }}>
                  Available for opportunities
                </Text>
              </Flex>
              <Text
                size="5"
                weight="bold"
                style={{ color: "var(--sg-secondary)", display: "block" }}
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
              <Link
                href="/robert-abby-resume.pdf"
                download
                style={{
                  color: "var(--sg-text-secondary)",
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
              <Text size="1" style={{ color: "var(--sg-text-muted)" }}>
                Crafted with React, Next.js & Sacred Geometry
              </Text>
              <Text size="1" style={{ color: "var(--sg-text-muted)" }}>
                &copy; {new Date().getFullYear()} Rob Abby
              </Text>
            </Flex>
          </Flex>
        </Container>
      </footer>
    </Box>
  );
}
