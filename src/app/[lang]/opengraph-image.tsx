import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";
import { locales } from "@/i18n/config";

export const alt = siteConfig.seo.title.en;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/**
 * ข้อความในภาพเป็นอังกฤษทั้งสองภาษา — ฟอนต์ default ของ ImageResponse (Satori)
 * ไม่มี glyph ภาษาไทย ถ้าจะใส่ไทยต้องโหลดไฟล์ฟอนต์ไทยมาส่งใน options.fonts
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#fff9ef",
          border: "8px solid #1f1b10",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#7b41b3",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: 16,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#1f1b10",
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          {siteConfig.nickname.toUpperCase()}
        </div>
        <div style={{ fontSize: 36, fontWeight: 600, color: "#4d4732" }}>
          {siteConfig.role.en}
        </div>
      </div>
    ),
    { ...size }
  );
}
