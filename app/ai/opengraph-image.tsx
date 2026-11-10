import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/app/lib/share-image";

export const alt = "How I work with AI. Rob Abby. Tools, plans and parallel sessions, illustrated with a terminal workspace.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const steps = ["Read the Linear plan", "Build and review", "Open a pull request"];
  const [display, body] = await Promise.all([
    loadGoogleFont("Newsreader:opsz,wght@60,400", "How I workwith AI."),
    loadGoogleFont("Instrument+Sans", `Rob Abbyrobabby.com/aiTools, plans and parallel sessions.CodexClaude CodePick up the plan.${steps.join("")}Ready for review`),
  ]);
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#191c20", color: "#eef0f2", padding: "48px 64px", fontFamily: "Instrument Sans" }}>
      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #3c434b", paddingBottom: 24, fontSize: 22 }}>
        <span>Rob Abby</span><span style={{ color: "#b0c3ff" }}>robabby.com/ai</span>
      </div>
      <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 44 }}>
        <div style={{ display: "flex", flexDirection: "column", width: 520 }}>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Newsreader", fontSize: 84, letterSpacing: -2, lineHeight: 1.08 }}>
            <span>How I work</span><span style={{ color: "#b0c3ff" }}>with AI.</span>
          </div>
          <div style={{ display: "flex", color: "#b1b8c1", fontSize: 24, lineHeight: 1.5, marginTop: 26, maxWidth: 390 }}>Tools, plans and parallel sessions.</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 508, border: "1px solid #515963", borderRadius: 12, overflow: "hidden", background: "#22272d" }}>
          <div style={{ display: "flex", padding: "18px 24px", gap: 28, borderBottom: "1px solid #515963", fontSize: 19 }}>
            <span style={{ color: "#b0c3ff" }}>Codex</span><span style={{ color: "#b1b8c1" }}>Claude Code</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", padding: "27px 24px", gap: 24, fontSize: 22 }}>
            {steps.map(step => <div key={step} style={{ display: "flex", alignItems: "center", gap: 14 }}><div style={{ display: "flex", width: 6, height: 6, borderRadius: 3, background: "#b0c3ff" }} /><span>{step}</span></div>)}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "19px 24px", background: "#343b44", fontSize: 22 }}>
            <svg width="10" height="18" viewBox="0 0 10 18"><path d="m2 3 6 6-6 6" fill="none" stroke="#b0c3ff" strokeWidth="2" /></svg>
            <span>Pick up the plan.</span><div style={{ width: 9, height: 25, background: "#eef0f2" }} />
          </div>
        </div>
      </div>
    </div>,
    { ...size, fonts: [
      { name: "Newsreader", data: display, weight: 400, style: "normal" },
      { name: "Instrument Sans", data: body, weight: 400, style: "normal" },
    ] },
  );
}
