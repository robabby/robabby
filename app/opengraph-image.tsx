import { shareImage } from "@/app/lib/share-image";

export const alt =
  "Rob Abby Founder & operator of WavePoint. Websites, useful software, and practical AI.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return shareImage({
    eyebrow: "Product, design & engineering",
    heading: "Rob Abby",
    role: "Founder & operator of WavePoint",
    description: "Websites, useful software, and practical AI.",
  });
}
