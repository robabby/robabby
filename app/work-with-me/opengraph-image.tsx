import { shareImage } from "@/app/lib/share-image";

export const alt =
  "Work with me. Web design, software & AI. We can work through it together.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return shareImage({
    eyebrow: "Rob Abby · Bellingham & remote",
    heading: "Work with me.",
    role: "Web design, software & AI.",
    description: "We can work through it together.",
  });
}
