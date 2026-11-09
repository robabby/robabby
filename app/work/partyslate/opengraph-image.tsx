import { shareImage } from "@/app/lib/share-image";

export const alt = "PartySlate. Interfaces and shared foundations. Frontend engineering, design systems and collaboration.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return shareImage({ heading: "PartySlate.", role: "Interfaces and shared foundations", description: "Frontend engineering, design systems and collaboration." });
}
