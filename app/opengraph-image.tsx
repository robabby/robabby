import { ImageResponse } from "next/og";

export const alt =
  "Rob Abby — Senior Frontend Product Engineer. 15 years shipping consumer and B2B web products — React and TypeScript since 2018.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const EYEBROW = "Bellingham, WA";
const NAME = "Rob Abby";
const ROLE = "Senior Frontend Product Engineer";
const TAGLINE =
  "15 years shipping consumer and B2B web products — React and TypeScript since 2018.";
const DOMAIN = "robabby.com";

/**
 * Fetch a Google-hosted font as TTF for satori, subset to the glyphs the
 * card actually renders. The css2 endpoint serves truetype sources to
 * clients without a modern browser UA — which build-time fetch is.
 */
async function loadGoogleFont(family: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/,
  );
  if (!resource) throw new Error(`No TTF source resolved for ${family}`);
  return (await fetch(resource[1])).arrayBuffer();
}

export default async function Image() {
  const [fraunces, instrumentSans, instrumentSansMedium] = await Promise.all([
    loadGoogleFont("Fraunces:opsz,wght@144,400", NAME),
    loadGoogleFont("Instrument+Sans", `${TAGLINE}${DOMAIN}`),
    loadGoogleFont("Instrument+Sans:wght@500", `${EYEBROW}${ROLE}`),
  ]);

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
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Instrument Sans",
            fontWeight: 500,
            fontSize: 21,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "#5a5a5a",
            marginBottom: 40,
          }}
        >
          {EYEBROW}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontSize: 150,
            color: "#1a1a1a",
            letterSpacing: -3,
            lineHeight: 1,
            marginBottom: 46,
          }}
        >
          {NAME}
        </div>
        <div
          style={{
            display: "flex",
            width: 72,
            height: 1,
            backgroundColor: "#d4ccc0",
            marginBottom: 46,
          }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: "Instrument Sans",
            fontWeight: 500,
            fontSize: 36,
            color: "#1a1a1a",
            marginBottom: 22,
          }}
        >
          {ROLE}
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "Instrument Sans",
            fontSize: 24,
            color: "#5a5a5a",
            maxWidth: 780,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          {TAGLINE}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 44,
            fontFamily: "Instrument Sans",
            fontSize: 19,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#716c64",
          }}
        >
          {DOMAIN}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 400, style: "normal" },
        {
          name: "Instrument Sans",
          data: instrumentSans,
          weight: 400,
          style: "normal",
        },
        {
          name: "Instrument Sans",
          data: instrumentSansMedium,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
