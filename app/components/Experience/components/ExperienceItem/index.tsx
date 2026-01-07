"use client";

import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import * as Collapsible from "@radix-ui/react-collapsible";
import React from "react";

const { useState } = React;

type ExperienceItemType = {
  title: string;
  company: string;
  companyLink: string;
  period: string;
  description: string;
  highlights: string[];
  featured?: boolean;
  position?: "left" | "right";
}

export default function ExperienceItem({
  title,
  company,
  companyLink,
  period,
  description,
  highlights,
  featured = false,
}: ExperienceItemType) {
  const [isOpen, setIsOpen] = useState(featured);

  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Box p="5" mb="6" className={`sg-card ${featured ? 'sg-card--featured' : ''}`}>
        <Flex direction="row" justify="between" align="start" mb="2" gap="4">
          <Heading size="5" style={{ color: featured ? "var(--sg-secondary)" : "var(--sg-text-primary)" }}>
            {title}
          </Heading>
          <Text className="date-badge" style={{ whiteSpace: "nowrap" }}>{period}</Text>
        </Flex>
        <Text size="3" mb="3" style={{ display: "block" }}>
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--sg-primary)", textDecoration: "none" }}
          >
            {company}
          </a>
        </Text>
        <Text size="3" style={{ color: "var(--sg-text-secondary)", display: "block" }} mb="3">
          {description}
        </Text>
        <Box>
          <Collapsible.Content>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                paddingLeft: "1rem",
              }}
            >
              {highlights.map((highlight, highlightIndex) => (
                <li
                  key={highlightIndex}
                  style={{
                    position: "relative",
                    paddingLeft: "1rem",
                    marginBottom: "0.5rem",
                    color: "var(--sg-text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: 1.6
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "0.5em",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "var(--sg-gold)",
                      display: "block"
                    }}
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </Collapsible.Content>
        </Box>
        <Box mt="3">
          <Collapsible.Trigger asChild>
            <Button
              variant="ghost"
              size="1"
              style={{
                color: "var(--sg-secondary)",
                cursor: "pointer"
              }}
            >
              {isOpen ? <Cross2Icon /> : <RowSpacingIcon />}
              <Text ml="1">{isOpen ? "Less" : "More"}</Text>
            </Button>
          </Collapsible.Trigger>
        </Box>
      </Box>
    </Collapsible.Root>
  )
}
