import { shareImage } from "@/app/lib/share-image";
export const alt = "Let’s talk. A question, an idea, or an opportunity to work together.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return shareImage({ heading: "Let’s talk.", role: "A question, an idea, an opportunity.", description: "Based in Bellingham. Working locally and remotely." });
}
