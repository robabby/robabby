import { 
  Badge,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Inset,
  Link
} from "@radix-ui/themes";
import { AI_TOOLS, IMAGES } from "./images";
import Image from "next/image";
import React from "react";

export default function Art() {
  const renderImages = () => IMAGES.map((img, index) => {
    const badgeColor = img.tool === AI_TOOLS.midjourney ? "blue" : img.tool === AI_TOOLS.dalle ? "green" : "orange";

    return (
      <Box key={index} maxWidth={{ sm: "100%", md: "45%", lg: "30%" }}>
        <Card size="2">
          <Inset clip="padding-box" side="top" pb="current">
            <Link href={img.src}>
              <Image
                src={img.src}
                alt={img.alt}
                style={{
                  display: "block",
                  objectFit: "cover",
                  maxWidth: "100%",
                  height: 240,
                  backgroundColor: "var(--gray-5)",
                }}
                width={400}
                height={300}
              />
            </Link>
          </Inset>
          <Box>
            <Link href={img.src}>
              <Heading size="2" my="2">{img.title}</Heading>
            </Link>
          </Box>
          <Badge color={badgeColor}>{img.tool}</Badge>
        </Card>
      </Box>
    )
  });

  return (
    <Container size="4" m="2">
      <Flex justify="between" align="center">
        <Heading size="8" my="6" align="center">AI Art Gallery</Heading>
        <Button>
          <Link href="/">Back Home</Link>
        </Button>
      </Flex>
      <Flex direction="row" wrap="wrap" justify="center" gap="6" mb="8">
        {renderImages()}
      </Flex>
    </Container>
  )
}

