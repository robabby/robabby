import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { CASE_STUDIES } from "../case-studies/data";
import "./CaseStudies.css";

export default function CaseStudies() {
  return (
    <Box id="case-studies" py="9" style={{ background: "var(--gradient-section)", position: "relative", overflow: "hidden" }}>
      <AnimatedSection style={{ position: "relative", zIndex: 1 }}>
        <Container size="4" px="6">
          {/* Asymmetric grid layout */}
          <Flex direction={{ initial: "column", md: "row" }} gap={{ initial: "4", md: "8" }} align="start">
            {/* Left column - Section header */}
            <Box className="section-header-column">
              <Text className="section-subtitle" mb="2" style={{ display: "block" }}>
                Impact
              </Text>
              <Heading size="8" className="section-title" style={{ textAlign: "left" }}>
                Case Studies
              </Heading>
            </Box>

            {/* Right column - Teaser cards */}
            <Flex direction="column" gap="5" style={{ flex: 1 }}>
              {CASE_STUDIES.map((study) => (
                <Box key={study.slug} className="card case-study-card">
                  <Text className="date-badge" mb="3" style={{ display: "block" }}>
                    {study.period} &middot; {study.company}
                  </Text>

                  <Text className="case-study-title" mb="3" style={{ display: "block" }}>
                    {study.title}
                  </Text>

                  <Text className="about-narrative" mb="4" style={{ display: "block" }}>
                    {study.teaserDescription}
                  </Text>

                  <Flex className="case-study-metrics" mb="4">
                    {study.metrics.slice(0, 3).map((metric, i) => (
                      <Box key={i} className="case-study-metric">
                        <Text className="case-study-metric-value">{metric.value}</Text>
                        <Text className="case-study-metric-label">{metric.label}</Text>
                      </Box>
                    ))}
                  </Flex>

                  <Link href={`/case-studies/${study.slug}`} className="case-study-link">
                    Read case study <span aria-hidden="true">&rarr;</span>
                  </Link>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Container>
      </AnimatedSection>
    </Box>
  );
}
