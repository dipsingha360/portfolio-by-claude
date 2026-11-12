import { ImageResponse } from "next/og";

// Browser tab icon: a black rounded square with the initials.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -1,
          borderRadius: 12,
        }}
      >
        DS
      </div>
    ),
    { ...size },
  );
}
