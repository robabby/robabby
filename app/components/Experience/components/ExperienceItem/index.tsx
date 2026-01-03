"use client";

import { Box, Button, Container, Flex, Heading, Text } from "@radix-ui/themes";
import { RowSpacingIcon, Cross2Icon } from "@radix-ui/react-icons";
import * as Collapsible from "@radix-ui/react-collapsible";
import React from "react";
import "./style.css";

const { useState } = React;

type ExperienceItemType = {
  title: string;
  company: string;
  companyLink: string;
  period: string;
  description: string;
  highlights: string[];
}

export default function Experience({
  title, 
  company, 
  companyLink, 
  period, 
  description, 
  highlights
}: ExperienceItemType) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible.Root
      className="CollapsibleRoot"
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <Container p="4" mx="4" my="8" size="3" style={{ background: "var(--gray-a3)", borderRadius: "var(--radius-3)" }}>
        <Heading size="6">{title}</Heading>
        <Flex direction="row" justify="between" my="2">
          <Text>
            <a href={companyLink} target="_blank" rel="noopener noreferrer">{company}</a>
          </Text>
          <Text>{period}</Text>
        </Flex>
        <Text>{description}</Text>
        <Box mb="4">
          <Collapsible.Content>
            <ul>
              {highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex}>{highlight}</li>
              ))}
            </ul>
          </Collapsible.Content>
        </Box>
        <Box>
          <Collapsible.Trigger asChild>
            <Button className="IconButton">
              {isOpen ? <Cross2Icon /> : <RowSpacingIcon />}
              {isOpen ? "Read Less" : "Read More"}
            </Button>
          </Collapsible.Trigger>
        </Box>
      </Container>
    </Collapsible.Root>
  )
}
