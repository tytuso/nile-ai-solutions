import { ImageResponse } from "next/og";
export const alt = "Nile AI Solutions — Your next big idea. Built to work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#071c29",
          color: "#f7fcff",
          padding: "65px 75px",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              width: 55,
              height: 55,
              borderRadius: 15,
              background: "#77edd0",
              color: "#071c29",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 35,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <span style={{ fontSize: 26, fontWeight: 700 }}>
            Nile AI Solutions
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 82,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1.06,
          }}
        >
          <span>Your next big idea.</span>
          <span style={{ color: "#77edd0" }}>Built to work.</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 19,
            color: "#a8c1cd",
          }}
        >
          <span>Websites. Business systems. AI tools.</span>
          <span>nileai.solutions</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
