import { shareImage } from "@/app/lib/share-image";

export const alt =
  "WavePoint. AI-native product development. From questions and prototypes to a working product.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return shareImage({
    eyebrow: "Rob Abby · Founder & operator",
    heading: "WavePoint.",
    role: "AI-native product development",
    description: "From questions and prototypes to a working product.",
  });
}
