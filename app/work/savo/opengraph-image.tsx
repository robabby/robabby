import { shareImage } from "@/app/lib/share-image";

export const alt =
  "SAVO. Building a UI/UX practice. Product design, a shared UI system, and the people behind the work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return shareImage({
    eyebrow: "Rob Abby · Selected work",
    heading: "SAVO.",
    role: "Building a UI/UX practice",
    description:
      "Product design, a shared UI system, and the people behind the work.",
  });
}
