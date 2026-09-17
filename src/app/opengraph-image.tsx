import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "MB1Call marking paint, pin flags and survey stakes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#14110f",
          color: "white",
          padding: "64px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#e85d04",
            fontWeight: 700,
          }}
        >
          MB1Call
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05 }}>
            Marking paint, pin flags & survey stakes
          </div>
          <div style={{ fontSize: 32, color: "#e85d04" }}>
            Safe · Sustainable · Superior
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#d7cbbd" }}>
          Winnipeg · mb1call.ca
        </div>
      </div>
    ),
    { ...size },
  );
}
