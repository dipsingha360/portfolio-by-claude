import { ImageResponse } from "next/og";
import { glyphBox, logoGlyph } from "@/lib/logo";

// Browser tab icon: the logo mark, white on a black rounded square (Figma: Logoo).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 16,
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
