import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Rob Abby — Staff Engineer & IT Manager";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#faf7f2",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#5a5a5a",
            marginBottom: 32,
          }}
        >
          Bellingham, WA
        </div>
        <div
          style={{
            fontSize: 132,
            color: "#1a1a1a",
            letterSpacing: -2,
            lineHeight: 1,
            marginBottom: 36,
          }}
        >
          Rob Abby
        </div>
        <div
          style={{
            width: 80,
            height: 1,
            backgroundColor: "#d4ccc0",
            marginBottom: 36,
          }}
        />
        <div
          style={{
            fontSize: 36,
            color: "#1a1a1a",
            marginBottom: 16,
          }}
        >
          Staff Engineer & IT Manager
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#5a5a5a",
            maxWidth: 720,
            textAlign: "center",
          }}
        >
          15 years across software engineering and IT operations.
        </div>
      </div>
    ),
    { ...size }
  );
}
