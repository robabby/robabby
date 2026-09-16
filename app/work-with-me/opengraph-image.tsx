import { shareImage } from "@/app/lib/share-image";

export const alt =
  "Work with me. Website design & software development. Clear websites. Useful software. Practical AI.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return shareImage({
    eyebrow: "Rob Abby · Bellingham & remote",
    heading: "Work with me.",
    role: "Website design & software development",
    description: "Clear websites. Useful software. Practical AI.",
  });
}
