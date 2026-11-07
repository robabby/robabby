import { ImageResponse } from "next/og";

type ShareCopy = {
  heading: string;
  role: string;
  description?: string;
  home?: boolean;
};

async function loadGoogleFont(family: string, text: string) {
  const response = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`,
  );
  if (!response.ok) throw new Error(`Could not load share font: ${response.status}`);
  const css = await response.text();
  const resource = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!resource) throw new Error(`No TTF source resolved for ${family}`);
  const font = await fetch(resource[1]);
  if (!font.ok) throw new Error(`Could not load share font data: ${font.status}`);
  return font.arrayBuffer();
}

export async function shareImage({ heading, role, description = "", home = false }: ShareCopy) {
  const [display, italic, body] = await Promise.all([
    loadGoogleFont("Newsreader:opsz,wght@60,400", `${heading}${role}Product thinking.A feel for people.`),
    loadGoogleFont("Newsreader:ital,opsz,wght@1,60,400", "Hands on the work."),
    loadGoogleFont("Instrument+Sans", `${description}Rob AbbyProduct, design and engineeringrobabby.com`),
  ]);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#191c20", color: "#eef0f2", padding: "54px 70px", fontFamily: "Instrument Sans" }}>
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #3c434b", paddingBottom: 22, color: "#b1b8c1", fontSize: 19 }}>
          <span>{home ? "Product, design and engineering" : "Rob Abby"}</span>
          <span>robabby.com</span>
        </div>
        <div style={{ display: "flex", flex: 1, alignItems: home ? "center" : "flex-start", justifyContent: "center", flexDirection: home ? "row" : "column", gap: home ? 65 : 0 }}>
          <div style={{ display: "flex", fontFamily: "Newsreader", fontSize: home ? 60 : 91, letterSpacing: -2, lineHeight: 1.1, width: home ? 295 : "100%", marginBottom: home ? 0 : 24, alignSelf: "flex-start", marginTop: home ? 81 : 0 }}>{heading}</div>
          {home ? (
            <div style={{ display: "flex", flexDirection: "column", fontFamily: "Newsreader", fontSize: 64, letterSpacing: -1.7, lineHeight: 1.15, flex: 1 }}>
              <span>Product thinking.</span>
              <span>A feel for people.</span>
              <span style={{ color: "#b0c3ff", fontStyle: "italic" }}>Hands on the work.</span>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", color: "#b0c3ff", fontFamily: "Newsreader", fontSize: 44, lineHeight: 1.2, marginBottom: 20 }}>{role}</div>
              <div style={{ display: "flex", color: "#b1b8c1", fontSize: 24, lineHeight: 1.5, maxWidth: 940 }}>{description}</div>
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Newsreader", data: display, weight: 400, style: "normal" },
        { name: "Newsreader", data: italic, weight: 400, style: "italic" },
        { name: "Instrument Sans", data: body, weight: 400, style: "normal" },
      ],
    },
  );
}
