import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Rob Abby - Staff Frontend Engineer";
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
          backgroundColor: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
        }}
      >
        {/* Sacred geometry accent */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            border: "1px solid rgba(212, 175, 55, 0.1)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(60deg)",
            width: "400px",
            height: "400px",
            border: "1px solid rgba(212, 175, 55, 0.08)",
            borderRadius: "50%",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: "#ffffff",
              letterSpacing: "0.1em",
              marginBottom: 16,
            }}
          >
            ROB ABBY
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "#d4af37",
              marginBottom: 24,
            }}
          >
            Staff Frontend Engineer
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: 600,
            }}
          >
            15+ Years Building Web Experiences
          </div>

          {/* Availability badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 40,
              padding: "12px 24px",
              backgroundColor: "rgba(34, 197, 94, 0.1)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              borderRadius: 100,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: "#22c55e",
                borderRadius: "50%",
                marginRight: 12,
              }}
            />
            <span style={{ color: "#22c55e", fontSize: 18 }}>
              Available for opportunities
            </span>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #d4af37, transparent)",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
