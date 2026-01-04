export const AI_TOOLS = {
  midjourney: "Midjourney",
  dalle: "DALL·E",
  flux: "Flux.1",
  invokeAI: "Invoke AI"
};

export type ImageType = {
  src: string;
  alt: string;
  title: string;
  tool: string;
  slug: string;
  width: number;
  height: number;
  description?: string;
}

export const IMAGES: ImageType[] = [
  {
    src: "/art/cosmic-download.png",
    alt: "AI-generated art piece",
    title: "Cosmic Download",
    tool: AI_TOOLS.flux,
    slug: "cosmic-download",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/cosmic-download 2.png",
    alt: "AI-generated art piece",
    title: "Cosmic Download 2",
    tool: AI_TOOLS.flux,
    slug: "cosmic-download-2",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Attunement.png",
    alt: "AI-generated art piece",
    title: "Attunement",
    tool: AI_TOOLS.flux,
    slug: "attunement",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Subtle Energy.png",
    alt: "AI-generated art piece",
    title: "Subtle Energy",
    tool: AI_TOOLS.flux,
    slug: "subtle-energy",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Temple of Perception.png",
    alt: "AI-generated art piece",
    title: "Temple of Perception",
    tool: AI_TOOLS.flux,
    slug: "temple-of-perception",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Lunar Summons.png",
    alt: "AI-generated art piece",
    title: "Lunar Summons",
    tool: AI_TOOLS.flux,
    slug: "lunar-summons",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Lunar Summons 2.png",
    alt: "AI-generated art piece",
    title: "Lunar Summons 2",
    tool: AI_TOOLS.flux,
    slug: "lunar-summons-2",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Lunar Summons 3.png",
    alt: "AI-generated art piece",
    title: "Lunar Summons 3",
    tool: AI_TOOLS.flux,
    slug: "lunar-summons-3",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Evening Stroll.png",
    alt: "AI-generated art piece",
    title: "Evening Stroll",
    tool: AI_TOOLS.flux,
    slug: "evening-stroll",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Sacral Cave.png",
    alt: "AI-generated art piece",
    title: "Sacral Cave",
    tool: AI_TOOLS.flux,
    slug: "sacral-cave",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Sacral Cave 2.png",
    alt: "AI-generated art piece",
    title: "Sacral Cave 2",
    tool: AI_TOOLS.flux,
    slug: "sacral-cave-2",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Sacral Cave 3.png",
    alt: "AI-generated art piece",
    title: "Sacral Cave 3",
    tool: AI_TOOLS.flux,
    slug: "sacral-cave-3",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/bliss83_A_cylindrical_glass_bottle_ornament_inside_a_Japanese_9e610fcb-5bf5-439c-8ea9-06e0ea30e9e5_0.png",
    alt: "AI-generated art piece",
    title: "Glass Bottle Ornament",
    tool: AI_TOOLS.midjourney,
    slug: "glass-bottle-ornament",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/bliss83_A_magical_forest_scene_encased_within_a_crystal_globe_e011919d-e14a-4465-b452-3855f12876a4_3.png",
    alt: "AI-generated art piece",
    title: "Crystal Globe Dragon Forest",
    tool: AI_TOOLS.midjourney,
    slug: "crystal-globe-dragon-forest",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Astral Bridge.png",
    alt: "AI-generated art piece",
    title: "Astral Bridge",
    tool: AI_TOOLS.dalle,
    slug: "astral-bridge",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/DALL·E visionary image.webp",
    alt: "AI-generated art piece",
    title: "Visionary",
    tool: AI_TOOLS.dalle,
    slug: "visionary",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Meditation Chakra.webp",
    alt: "AI-generated art piece",
    title: "Chakra Meditation",
    tool: AI_TOOLS.dalle,
    slug: "chakra-meditation",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Deep Meditation with Chakras and Metatron's Cube.webp",
    alt: "AI-generated art piece",
    title: "Metatron's Cube Meditation",
    tool: AI_TOOLS.dalle,
    slug: "metatrons-cube-meditation",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Digital Sovereignty Meditation.webp",
    alt: "AI-generated art piece",
    title: "Digital Sovereignty Meditation",
    tool: AI_TOOLS.dalle,
    slug: "digital-sovereignty-meditation",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Astrology Birth Chart GPT DALL·E Feb 27 2025.webp",
    alt: "AI-generated art piece",
    title: "Astrology Birth Chart",
    tool: AI_TOOLS.dalle,
    slug: "astrology-birth-chart",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Desk Astrology Birth Chart GPT.webp",
    alt: "AI-generated art piece",
    title: "Desk Astrology",
    tool: AI_TOOLS.dalle,
    slug: "desk-astrology",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Atomic Aura Person.webp",
    alt: "AI-generated art piece",
    title: "Atomic Aura",
    tool: AI_TOOLS.dalle,
    slug: "atomic-aura",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/DNA double helix personal knowledge.webp",
    alt: "AI-generated art piece",
    title: "Helix Knowledge",
    tool: AI_TOOLS.dalle,
    slug: "helix-knowledge",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/Visionary Workspace.webp",
    alt: "AI-generated art piece",
    title: "Visionary Workspace",
    tool: AI_TOOLS.dalle,
    slug: "visionary-workspace",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/DALL·E holographic summary.webp",
    alt: "AI-generated art piece",
    title: "Holographic Summary",
    tool: AI_TOOLS.dalle,
    slug: "holographic-summary",
    width: 1024,
    height: 1024
  },
  {
    src: "/art/DALL·E Desk Network.webp",
    alt: "AI-generated art piece",
    title: "Desk Network",
    tool: AI_TOOLS.dalle,
    slug: "desk-network",
    width: 1024,
    height: 1024
  }
];

export function getImageBySlug(slug: string): ImageType | undefined {
  return IMAGES.find(img => img.slug === slug);
}

export function getToolCounts(): Record<string, number> {
  return IMAGES.reduce((acc, img) => {
    acc[img.tool] = (acc[img.tool] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}
