import { ImageResponse } from "next/og";

type ShareCopy = {
  eyebrow: string;
  heading: string;
  role: string;
  description: string;
};

async function loadGoogleFont(family: string, text: string) {
  const response = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`,
  );
  if (!response.ok)
    throw new Error(`Could not load share font: ${response.status}`);
  const css = await response.text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
  );
  if (!resource) throw new Error(`No TTF source resolved for ${family}`);
  const font = await fetch(resource[1]);
  if (!font.ok)
    throw new Error(`Could not load share font data: ${font.status}`);
  return font.arrayBuffer();
}

export async function shareImage({
  eyebrow,
  heading,
  role,
  description,
}: ShareCopy) {
  const [display, body] = await Promise.all([
    loadGoogleFont("Fraunces:opsz,wght@144,400", heading),
    loadGoogleFont(
      "Instrument+Sans",
      `${eyebrow}${role}${description}robabby.com`,
    ),
  ]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f5f3eb",
          color: "#20372c",
          padding: "66px 80px",
          fontFamily: "Instrument Sans",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "1px solid #cdd1c4",
            paddingBottom: 23,
            color: "#4f5b51",
            fontSize: 19,
          }}
        >
          <span>{eyebrow}</span>
          <span>robabby.com</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Fraunces",
              fontSize: 112,
              letterSpacing: -4,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            {heading}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 31,
              lineHeight: 1.4,
              marginBottom: 17,
            }}
          >
            {role}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 25,
              lineHeight: 1.5,
              color: "#4f5b51",
              maxWidth: 930,
            }}
          >
            {description}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Fraunces", data: display, weight: 400, style: "normal" },
        { name: "Instrument Sans", data: body, weight: 400, style: "normal" },
      ],
    },
  );
}
