import { Box, Button, Container, Flex, Link, Text } from "@radix-ui/themes";
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
              p="4"
              style={{
                background: "rgba(201, 169, 98, 0.08)",
                border: "1px solid rgba(201, 169, 98, 0.2)",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <Text size="3" style={{ color: "var(--sg-secondary)" }}>
                Open to new opportunities
              </Text>
              <Box mt="3">
                <Button size="2" asChild style={{ cursor: "pointer" }}>
                  <a href="mailto:robabby23@gmail.com">Get in Touch</a>
                </Button>
              </Box>
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
