import type { Dictionary } from "./en";

const th: Dictionary = {
  nav: {
    projects: "ผลงาน",
    skills: "ทักษะ",
    experience: "ประสบการณ์",
    contact: "ติดต่อ",
    hireMe: "ร่วมงานกัน",
    toggleMenu: "เปิด/ปิดเมนู",
    mailSubject: "สนใจร่วมงาน — Portfolio",
  },
  languageToggle: {
    label: "เปลี่ยนภาษา",
  },
  hero: {
    // สั้นกว่า "สวัสดีครับ ผม" เพื่อให้อยู่บรรทัดเดียวกับกล่องชื่อได้
    greeting: "ผมชื่อ",
    headline: "APP SUPPORT & DEV",
    viewProjects: "ดูผลงาน",
    marquee: [
      "สร้างของเจ๋งๆ",
      "แก้ปัญหาให้จบ",
      "เขียนโค้ด",
      "APP SUPPORT",
      "DEVELOPMENT",
    ],
  },
  skills: {
    title: "เครื่องมือที่ใช้",
  },
  experience: {
    title: "ประสบการณ์",
    education: "การศึกษา",
  },
  projects: {
    title: "ผลงานล่าสุด",
    viewProject: "ดูโปรเจกต์",
    linkUnavailable: "ยังไม่มีลิงก์",
  },
  resume: {
    download: "ดาวน์โหลดเรซูเม่",
  },
  footer: {
    title: "ติดต่อผม",
    blurb:
      "กำลังมองหา Application Support หรือ Full-stack Developer เพิ่มในทีมไหม? ทักมาคุยกันได้เลยครับ!",
    ctaHeading: "พร้อมลุยงานถัดไปแล้ว",
    privacy: "ความเป็นส่วนตัว",
    builtWith: "สร้างด้วย NEXT.JS",
  },
  privacy: {
    metaTitle: "นโยบายความเป็นส่วนตัว",
    metaDescription:
      "เว็บไซต์นี้จัดการข้อมูล คุกกี้ และบริการภายนอกอย่างไร",
    back: "← กลับไปหน้าแรก",
    title: "นโยบายความเป็นส่วนตัว",
    lastUpdatedLabel: "อัปเดตล่าสุด",
    intro:
      "เว็บไซต์นี้เป็น portfolio ส่วนตัวแบบ static ไม่มีระบบสมัครสมาชิก (login) และไม่มีฟอร์มให้ผู้เยี่ยมชมกรอกข้อมูลบนเว็บ",
    displayedHeading: "ข้อมูลที่แสดงบนเว็บ",
    displayedBody:
      "ข้อมูลที่ปรากฏ เช่น ชื่อ อีเมล ลิงก์ GitHub/LinkedIn ประสบการณ์ทำงาน และโปรเจกต์ เป็นข้อมูลที่เจ้าของเว็บตั้งใจเผยแพร่สาธารณะเพื่อการสมัครงาน",
    collectedHeading: "ข้อมูลที่เราเก็บจากคุณ",
    collected: [
      "ไม่เก็บข้อมูลส่วนตัวผ่านฟอร์ม — ไม่มีการส่งข้อมูลจากเบราว์เซอร์ของคุณเข้าฐานข้อมูลของเว็บนี้",
      "ไฟล์ Resume (PDF) สร้างในเบราว์เซอร์ของคุณเอง ไม่ได้อัปโหลดไปเซิร์ฟเวอร์ของเรา",
      "บันทึกของผู้ให้บริการโฮสต์ — ผู้ให้บริการ (เช่น Vercel) อาจเก็บ IP, User-Agent และเวลาเข้าชม ตามนโยบายของเขา",
    ],
    cookiesHeading: "คุกกี้",
    cookiesBody:
      "เว็บนี้ไม่ได้ตั้งค่า analytics หรือโฆษณาในตัวแอป คุกกี้จากผู้ให้บริการโฮสต์อาจมีได้ตามการตั้งค่าของแพลตฟอร์ม",
    externalHeading: "ลิงก์ภายนอก",
    externalBody:
      "ลิงก์ไปยัง GitHub, LinkedIn, โปรเจกต์ หรืออีเมล อยู่ภายใต้นโยบายของบริการนั้นๆ",
    contactHeading: "ติดต่อ",
    contactBody: "หากมีคำถามเกี่ยวกับความเป็นส่วนตัว ติดต่อ:",
  },
};

export default th;
