import type { Localized } from "@/i18n/config";
import { siteConfig } from "./site";

type EducationEntry = {
  degree: Localized;
  institution: Localized;
  /** ใส่เว็บสถาบันถ้ามี — ชื่อสถาบันจะกลายเป็นลิงก์ให้อัตโนมัติ */
  institutionUrl?: string;
  period: string;
  description: Localized;
};

type ExperienceEntry = {
  role: Localized;
  company: Localized;
  /** ใส่เว็บบริษัทถ้ามี — ชื่อบริษัทจะกลายเป็นลิงก์ให้อัตโนมัติ */
  companyUrl?: string;
  period: string;
  description: Localized;
};

/**
 * ข้อมูลสำหรับ PDF resume และหน้า Experience
 * ฟิลด์ที่เป็น { th, en } จะสลับตามภาษาที่เลือก — ต้องกรอกทั้งสองช่อง
 * แก้ experience / education / projects (ใน PDF) ตามประวัติจริงได้ที่นี่
 */
export const resumeData = {
  personalInfo: {
    name: siteConfig.name,
    nickname: siteConfig.nickname,
    title: siteConfig.role,
    email: siteConfig.email,
    phone: siteConfig.phone.trim(),
    linkedin: siteConfig.links.linkedin.replace(/^https?:\/\//, ""),
    github: siteConfig.links.github.replace(
      /^https?:\/\/(www\.)?github\.com\//,
      ""
    ),
  },
  summary: siteConfig.hero.description,
  education: [
    {
      degree: {
        th: "วิทยาศาสตรบัณฑิต สาขาวิทยาการคอมพิวเตอร์",
        en: "Bachelor of Science in Computer Science",
      },
      institution: {
        th: "มหาวิทยาลัยกาฬสินธุ์",
        en: "Kalasin University",
      },
      institutionUrl: "https://en.ksu.ac.th/",
      period: "2018 - 2022",
      description: {
        th: "เน้นด้านวิศวกรรมซอฟต์แวร์และเทคโนโลยีเว็บ",
        en: "Focused on software engineering and web technologies.",
      },
    },
    {
      degree: {
        th: "มัธยมศึกษาตอนปลาย",
        en: "High School Diploma",
      },
      institution: {
        th: "โรงเรียนประจักษ์ศิลปาคม",
        en: "Prachaksinlapakom School",
      },
      period: "2015 - 2018",
      description: {
        th: "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์",
        en: "Science-Mathematics program.",
      },
    },
  ] as EducationEntry[],
  // annotation ไม่ใช่ satisfies — ไม่งั้น TS จะ infer เป็น union ของสอง shape
  // แล้วอ่าน job.companyUrl ไม่ได้ เพราะบางรายการไม่มีฟิลด์นี้
  experience: [
    {
      role: {
        th: "นักศึกษาฝึกงาน",
        en: "Internship",
      },
      company: {
        th: "Analytical System Engineering",
        en: "Analytical System Engineering",
      },
      companyUrl: "https://www.ase-thai.com/",
      period: "2021",
      description: {
        th: "ดูแลงานสนับสนุนด้านเทคนิค บำรุงรักษาระบบ IT และช่วยแก้ปัญหาทั้งฮาร์ดแวร์และซอฟต์แวร์",
        en: "Provided technical support, maintained IT infrastructure, and assisted in troubleshooting hardware and software issues.",
      },
    },
    {
      role: {
        th: "พนักงานพาร์ทไทม์",
        en: "Part-time Staff",
      },
      company: {
        th: "Oh Phra Chao George",
        en: "Oh Phra Chao George",
      },
      period: "2019 - 2020",
      description: {
        th: "งานบริการลูกค้าและสนับสนุนการปฏิบัติงานหน้าร้าน",
        en: "Customer service and operational support.",
      },
    },
  ] as ExperienceEntry[],
  projects: [
    {
      name: {
        th: "เว็บจองห้องและควบคุมประตูอัตโนมัติ",
        en: "Room Reservation & Door Lock Control Website",
      },
      tech: ["React", "Node.js", "MongoDB"],
      description: {
        th: "พัฒนาเว็บแอปแบบ full-stack สำหรับจองห้องและสั่งล็อก/ปลดล็อกประตูอัจฉริยะจากระยะไกล",
        en: "Developed a full-stack web application for booking rooms and controlling smart door locks remotely.",
      },
    },
    {
      name: {
        th: "ระบบ CEMS",
        en: "CEMS Program",
      },
      tech: ["FastAPI", "Python", "InfluxDB"],
      description: {
        th: "ระบบตรวจวัดการปล่อยมลพิษแบบต่อเนื่อง ออกแบบและพัฒนาสถาปัตยกรรมฝั่ง backend สำหรับประมวลผลข้อมูลเซนเซอร์แบบเรียลไทม์",
        en: "Continuous Emission Monitoring System. Designed and implemented backend architecture for real-time sensor data processing.",
      },
    },
  ] satisfies {
    name: Localized;
    tech: string[];
    description: Localized;
  }[],
  skills: [
    "HTML/CSS",
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "FastAPI",
    "SQL",
    "MongoDB",
    "InfluxDB",
  ],
  interests: [
    { th: "CEMS", en: "CEMS" },
    { th: "PLC", en: "PLC" },
    { th: "IoT", en: "IoT" },
    { th: "พัฒนาเว็บ", en: "Web Development" },
    { th: "สถาปัตยกรรมระบบ", en: "System Architecture" },
  ] satisfies Localized[],
};
