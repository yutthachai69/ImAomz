import type { Localized } from "@/i18n/config";

/**
 * แก้ข้อมูล portfolio ที่นี่ที่เดียว
 *
 * ฟิลด์ที่เป็น { th, en } คือข้อความที่สลับตามภาษา — ต้องกรอกทั้งสองช่อง
 *
 * ใส่เอง (ปล่อย "" ถ้ายังไม่มี):
 * - phone
 * - hero.profileImage  → ใส่ใน public/images/profile.jpg แล้วใช้ "/images/profile.jpg"
 * - experience / education ใน resume.ts
 * - รูปโปรเจกต์ใน projects.ts (ฟิลด์ image)
 */
export const siteConfig = {
  name: "Yutthachai Khammeephak",
  nickname: "Aom",
  role: {
    th: "นักพัฒนา & Application Support Specialist",
    en: "Developer & App Support Specialist",
  } satisfies Localized,
  email: "Firstaza4455@gmail.com",
  /** ใส่เบอร์โทร เช่น "081-234-5678" */
  phone: "0828310466",
  availability: {
    th: "พร้อมรับงาน",
    en: "Available for Work",
  } satisfies Localized,
  links: {
    github: "https://github.com/yutthachai69",
    linkedin: "https://www.linkedin.com/in/yutthachai-khammeephak-204212409/",
  },
  hero: {
    description: {
      th: "นักพัฒนาและ Application Support ที่เน้นแก้ปัญหาให้จบ สร้างเว็บและระบบที่ใช้งานได้จริง มีประสบการณ์ Full-stack, IoT/CEMS และการดูแลระบบ",
      en: "Developer & App Support Specialist focused on shipping reliable web apps, solving production issues, and building full-stack and IoT/CEMS systems.",
    } satisfies Localized,
    /** รูปโปรไฟล์: วางไฟล์ที่ public/images/profile.jpg แล้วใส่ "/images/profile.jpg" */
    profileImage: "",
  },
  /**
   * ไฟล์เรซูเม่ที่ทำเอง: วางไว้ที่ public/resume/ แล้วใส่ path ตรงนี้
   * เช่น "/resume/Aomz_Resume.pdf"
   * ปล่อย "" ไว้ = ซ่อนปุ่มดาวน์โหลด (จะได้ไม่มีปุ่มที่กดแล้ว 404)
   */
  resumeFile: "",
  seo: {
    title: {
      th: "Aomz | พอร์ตโฟลิโอ Developer & App Support",
      en: "Aomz | Developer & App Support Portfolio",
    } satisfies Localized,
    description: {
      th: "พอร์ตโฟลิโอของ ยุทธชัย คำมีภักดิ์ (Aomz) — Full-stack developer และ Application Support specialist รวมผลงาน ประสบการณ์ ทักษะ และเรซูเม่",
      en: "Portfolio of Yutthachai Khammeephak (Aomz) — Full-stack developer and Application Support specialist. Projects, experience, skills, and resume.",
    } satisfies Localized,
    siteName: "Aomz Portfolio",
  },
} as const;

/** มีค่าเมื่อผู้ใช้กรอกข้อมูลแล้ว */
export function hasPhone(): boolean {
  return siteConfig.phone.trim().length > 0;
}

export function hasProfileImage(): boolean {
  return siteConfig.hero.profileImage.trim().length > 0;
}

export function hasResume(): boolean {
  return siteConfig.resumeFile.trim().length > 0;
}
