import type { Localized } from "@/i18n/config";

/**
 * โปรเจกต์บนเว็บ — แก้ description / link ได้ตามจริง
 * description ต้องกรอกทั้ง th และ en
 * ฟิลด์ image: ใส่ URL รูป screenshot หรือ path ใน public เช่น "/images/projects/lmt.png"
 * ปล่อย "" จะแสดง placeholder ชื่อโปรเจกต์แทน
 */
export const projects: {
  title: string;
  description: Localized;
  tags: string[];
  link: string;
  image: string;
}[] = [
  {
    title: "LMT Services",
    description: {
      th: "ระบบจัดการ Work Order และติดตามสถานะงานสำหรับองค์กร ช่วยเพิ่มประสิทธิภาพในการทำงานของทีม Application Support",
      en: "Work order management and job-status tracking for enterprise teams, built to speed up the Application Support workflow.",
    },
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    link: "https://lmtservices.trch.tech/",
    image: "",
  },
  {
    title: "Smart Expense Tracker",
    description: {
      th: "แอปพลิเคชันจัดการค่าใช้จ่ายอัจฉริยะ รองรับการบันทึกข้อมูล การจำแนกประเภท และสรุปผลผ่านกราฟที่สวยงาม",
      en: "A smart expense tracking app with entry logging, automatic categorisation, and clean chart-based summaries.",
    },
    tags: ["Next.js", "TypeScript", "Prisma", "Recharts"],
    link: "https://github.com/yutthachai69/smart-expense-tracker",
    image: "",
  },
  {
    title: "E-Commerce System",
    description: {
      th: "ระบบร้านค้าออนไลน์ที่มาพร้อมฟังก์ชันการสแกน QR Code เพื่อจัดการสินค้าและสต็อกอย่างมีประสิทธิภาพ",
      en: "An online storefront with QR code scanning for efficient product and stock management.",
    },
    tags: ["Next.js", "React 19", "PostgreSQL", "QR-Code"],
    link: "https://github.com/yutthachai69",
    image: "",
  },
  {
    title: "CEMS Monitoring",
    description: {
      th: "ระบบตรวจสอบการปล่อยมลพิษแบบต่อเนื่อง (Continuous Emission Monitoring) เน้นความแม่นยำและการแสดงผลแบบ Real-time",
      en: "A Continuous Emission Monitoring System focused on measurement accuracy and real-time dashboards.",
    },
    tags: ["React", "Node.js", "IoT", "Chart.js"],
    link: "https://github.com/yutthachai69",
    image: "",
  },
];
