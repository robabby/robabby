import { shareImage } from "@/app/lib/share-image";

export const alt =
  "Rob Abby. I design and build software.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return shareImage({
    heading: "Rob Abby",
    role: "Product, design and engineering",
    home: true,
  });
}
