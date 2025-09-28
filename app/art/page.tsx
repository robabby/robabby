import { Badge, Box, Card, Container, Flex, Heading, Inset, Link } from "@radix-ui/themes";
import Image from "next/image";

const AI_TOOLS = {
  midjourney: "Midjourney",
  dalle: "DALL·E",
  stableDiffusion: "Stable Diffusion",
  invokeAI: "Invoke AI"
}

const IMAGES = [
  {
    src: "/art/bliss83_A_cylindrical_glass_bottle_ornament_inside_a_Japanese_9e610fcb-5bf5-439c-8ea9-06e0ea30e9e5_0.png",
    alt: "AI-generated art piece",
    title: "Glass Bottle Ornament",
    tool: AI_TOOLS.midjourney
  },
  {
    src: "/art/bliss83_A_magical_forest_scene_encased_within_a_crystal_globe_e011919d-e14a-4465-b452-3855f12876a4_3.png",
    alt: "AI-generated art piece",
    title: "Crystal Globe Dragon Forest",
    tool: AI_TOOLS.midjourney
  },
  {
    src: "/art/Astral Bridge.png",
    alt: "AI-generated art piece",
    title: "Astral Bridge",
    tool: AI_TOOLS.dalle
  },
  {
    src: "/art/DALL·E visionary image.webp",
    alt: "AI-generated art piece",
    title: "Visionary",
    tool: AI_TOOLS.dalle
  },
  {
    src: "/art/Meditation Chakra.webp",
    alt: "AI-generated art piece",
    title: "Chakra Meditation",
    tool: AI_TOOLS.dalle
  },
  {
    src: "/art/Deep Meditation with Chakras and Metatron's Cube.webp",
    alt: "AI-generated art piece",
    title: "Metatron's Cube Meditation",
    tool: AI_TOOLS.dalle
  },
  {
    src: "/art/Digital Sovereignty Meditation.webp",
    alt: "AI-generated art piece",
    title: "Digital Sovereignty Meditation",
    tool: AI_TOOLS.dalle
  },
  {
    src: "/art/Astrology Birth Chart GPT DALL·E Feb 27 2025.webp",
    alt: "AI-generated art piece",
    title: "Astrology Birth Chart",
    tool: AI_TOOLS.dalle
  },
  {
    src: "/art/Desk Astrology Birth Chart GPT.webp",
    alt: "AI-generated art piece",
    title: "Desk Astrology",
    tool: AI_TOOLS.dalle
  },
  {
    src: "/art/Atomic Aura Person.webp",
    alt: "AI-generated art piece",
    title: "Atomic Aura",
    tool: AI_TOOLS.dalle
  },
  {
    src: "/art/DNA double helix personal knowledge.webp",
    alt: "AI-generated art piece",
    title: "Helix Knowledge",
    tool: AI_TOOLS.dalle
  },
  {
    src: "/art/Visionary Workspace.webp",
    alt: "AI-generated art piece",
    title: "Visionary Workspace",
    tool: AI_TOOLS.dalle
  },
  {
    src: "/art/DALL·E holographic summary.webp",
    alt: "AI-generated art piece",
    title: "Holographic Summary",
    tool: AI_TOOLS.dalle
  },
  {
    src: "/art/DALL·E Desk Network.webp",
    alt: "AI-generated art piece",
    title: "Desk Network",
    tool: AI_TOOLS.dalle
  }
]

export default function Home() {
  const renderImages = () => IMAGES.map((img, index) => {
    const badgeColor = img.tool === AI_TOOLS.midjourney ? "blue" : img.tool === AI_TOOLS.dalle ? "green" : "orange";

    return (
      <Box key={index} maxWidth="360px">
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
            <Heading size="2" my="2">{img.title}</Heading>
          </Box>
          <Badge color={badgeColor}>{img.tool}</Badge>
        </Card>
      </Box>
    )
  });

  return (
    <Box>
      <Heading size="9" my="6" align="center">AI Art Gallery</Heading>
      <Container size="3">
        <Flex direction="row" wrap="wrap" justify="center" gap="6" mb="8">
          {renderImages()}
        </Flex>
      </Container>
		</Box>
  )
}

