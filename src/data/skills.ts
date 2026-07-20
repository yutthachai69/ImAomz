// src/data/skills.ts
import type { Localized } from "@/i18n/config";

/**
 * สีผูกกับ "หมวด" ไม่ใช่ผูกกับทักษะรายตัว
 * สีจึงเป็นข้อมูล (บอกว่าอยู่กลุ่มไหน) ไม่ใช่ของประดับแบบสุ่ม
 */
export const skillCategories: {
  title: Localized;
  accent: string;
  skills: string[];
}[] = [
  {
    title: { th: "ภาษาโปรแกรม", en: "Languages" },
    accent: "bg-primary-container text-on-surface",
    skills: ["TypeScript", "JavaScript", "PHP", "Python"],
  },
  {
    title: { th: "เครื่องมือพัฒนา", en: "Development Tools" },
    accent: "bg-secondary-container text-on-surface",
    skills: [
      "Next.js",
      "React 19",
      "Prisma ORM",
      "Tailwind CSS",
      "PostgreSQL",
      "Node.js",
      "NextAuth.js",
    ],
  },
  {
    title: { th: "DevOps & Cloud", en: "DevOps & Cloud" },
    accent: "bg-surface-container-highest text-on-surface",
    skills: ["Docker", "Git", "Linux", "Vercel"],
  },
];
