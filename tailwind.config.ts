// tailwind.config.ts
import type { Config } from "tailwindcss";

/**
 * ระบบสีสองสี — เหลือง = action/tag, ม่วง = accent/highlight
 * ที่เหลือเป็นโทนกระดาษ (surface) กับหมึก (on-surface)
 *
 * เดิมไฟล์นี้คือ export ดิบจาก Material Theme Builder มี 47 สีแต่ใช้จริง 11
 * สีที่ไม่ได้ใช้ถูกตัดออกโดยตั้งใจ — อย่าเพิ่มกลับมาถ้ายังไม่มีที่ใช้จริง
 * โดยเฉพาะ tertiary/cyan ที่ถอดออกเพราะหลุดจากระบบและ contrast ไม่ผ่าน
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- กระดาษ: พื้นหลังไล่ระดับจากสว่างสุดไปเข้มสุด ---
        surface: "#fff9ef", // พื้นหลังหลักของหน้า
        "surface-container-lowest": "#ffffff", // การ์ดที่ต้องเด่นสุด
        "surface-container": "#f6edda", // พื้นที่ว่าง / empty state
        "surface-container-highest": "#eae2cf", // footer, การ์ดรอง

        // --- หมึก: ใช้ตัวเดียวทั้งเว็บ ทั้งข้อความ เส้นขอบ และเงา ---
        "on-surface": "#1f1b10",

        // --- เหลือง = action, tag, ป้ายปี ---
        "primary-container": "#ffd700",
        "on-primary-container": "#705e00",

        // --- ม่วง = accent, เส้นใต้หัวข้อ, ลิงก์เน้น ---
        secondary: "#7b41b3",
        "secondary-container": "#c588fe",
        "on-secondary-container": "#54118a",
        "secondary-fixed": "#f0dbff", // ม่วงอ่อนสุด ใช้เป็นพื้นไฮไลต์
      },
      fontFamily: {
        // ต่อ --font-thai ท้ายทุก stack: เบราว์เซอร์เลือกฟอนต์ราย glyph
        // ละติน = ฟอนต์หลัก, ไทย = Noto Sans Thai
        h1: ["var(--font-lexend)", "var(--font-thai)", "sans-serif"],
        h2: ["var(--font-lexend)", "var(--font-thai)", "sans-serif"],
        h3: ["var(--font-lexend)", "var(--font-thai)", "sans-serif"],
        label: ["var(--font-space)", "var(--font-thai)", "sans-serif"],
        body: ["var(--font-inter)", "var(--font-thai)", "sans-serif"],
        sans: ["var(--font-inter)", "var(--font-thai)", "sans-serif"],
      },
      boxShadow: {
        "neo-sm": "3px 3px 0px 0px rgba(31, 27, 16, 1)",
        neo: "4px 4px 0px 0px rgba(31, 27, 16, 1)",
        "neo-lg": "6px 6px 0px 0px rgba(31, 27, 16, 1)",
        "neo-xl": "10px 10px 0px 0px rgba(31, 27, 16, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
