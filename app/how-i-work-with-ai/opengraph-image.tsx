import { shareImage } from "@/app/lib/share-image";

export const alt = "How I work with AI. Tools, plans and parallel sessions. Rob Abby.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return shareImage({
    heading: "How I work with AI.",
    role: "Tools, plans and parallel sessions",
    description: "A look at my everyday practice, from a conversation in the terminal to work across projects.",
  });
}
