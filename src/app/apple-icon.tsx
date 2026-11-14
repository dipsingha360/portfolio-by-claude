import { ImageResponse } from "next/og";
import { glyphBox, logoGlyph } from "@/lib/logo";

// Home-screen icon on iPhone and iPad (the system rounds the corners itself).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const g = glyphBox(size.width);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080808",
        }}
      >
        <svg
          width={g.width}
          height={g.height}
          viewBox="0 0 21.3333 14.6667"
          style={{ display: "flex" }}
        >
          {logoGlyph.paths.map((d) => (
            <path key={d} d={d} fill="#ffffff" />
          ))}
        </svg>
      </div>
    ),
    { ...size },
  );
}
