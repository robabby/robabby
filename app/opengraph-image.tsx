import { shareImage } from "@/app/lib/share-image";

export const alt =
  "Rob Abby. Product thinking. A feel for people. Hands on the work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return shareImage({
    heading: "Rob Abby",
    role: "Product, design and engineering",
    home: true,
  });
}
