import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

// The picture shown when a link to the site is shared (also used by X/Twitter).
export const alt = `${site.name} — Product Designer`;
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
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "72px 80px",
          color: "#080808",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, fontWeight: 600 }}>{site.name}</div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -4,
            }}
          >
            Product Designer
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 38, color: "#555555" }}>
            Simple, user friendly products for web and mobile.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, color: "#555555" }}>
            Based in Bangladesh, working worldwide
          </div>
          <div
            style={{
              display: "flex",
              width: 120,
              height: 12,
              background: "#080808",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
