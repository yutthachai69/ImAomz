import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#ffd700",
          border: "3px solid #1f1b10",
          fontSize: 18,
          fontWeight: 900,
          color: "#1f1b10",
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}
