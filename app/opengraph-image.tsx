import { ImageResponse } from "next/og";

export const alt = "Nile Ai Solutions";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #f8fbff 0%, #eef8ff 52%, #e8fffa 100%)",
          color: "#07152d",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            right: "-100px",
            top: "-100px",
            borderRadius: "999px",
            background:
              "linear-gradient(135deg, rgba(15,191,159,0.28), rgba(20,119,248,0.22))",
            filter: "blur(20px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            left: "-120px",
            bottom: "-120px",
            borderRadius: "999px",
            background: "rgba(20,119,248,0.12)",
            filter: "blur(20px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            width: "100%",
            zIndex: 2,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <div
              style={{
                width: "76px",
                height: "76px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "24px",
                background:
                  "linear-gradient(135deg, #0fbf9f 0%, #22cfe5 50%, #1477f8 100%)",
                color: "white",
                fontSize: "38px",
                fontWeight: 800,
              }}
            >
              N
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: "34px",
                  fontWeight: 800,
                  letterSpacing: "-1px",
                }}
              >
                Nile Ai
              </span>

              <span
                style={{
                  marginTop: "5px",
                  fontSize: "16px",
                  fontWeight: 700,
                  letterSpacing: "8px",
                  textTransform: "uppercase",
                  color: "#64748b",
                }}
              >
                Solutions
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "950px",
            }}
          >
            <span
              style={{
                fontSize: "76px",
                lineHeight: 1.03,
                fontWeight: 850,
                letterSpacing: "-4px",
              }}
            >
              We Build Intelligent Systems for Africa&apos;s Future.
            </span>

            <span
              style={{
                marginTop: "28px",
                fontSize: "26px",
                lineHeight: 1.4,
                color: "#52647c",
              }}
            >
              AI software, automation and digital solutions for organisations
              across Africa.
            </span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}