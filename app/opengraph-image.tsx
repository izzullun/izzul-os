import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#050805",
          color: "#33ff33",
          fontFamily: "monospace",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.7 }}>izzul@os:~$ ./hello.sh</div>
        <div style={{ fontSize: 110, fontWeight: 900, marginTop: 8 }}>
          IZZUL ZAQWAN
        </div>
        <div style={{ fontSize: 32, marginTop: 12, opacity: 0.9 }}>
          &gt; full-stack dev — open to work
        </div>
      </div>
    ),
    { ...size }
  );
}
