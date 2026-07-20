const en = {
  nav: {
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    hireMe: "Hire Me",
    toggleMenu: "Toggle menu",
    mailSubject: "Hire inquiry — Portfolio",
  },
  languageToggle: {
    label: "Switch language",
  },
  hero: {
    greeting: "HI, I'M",
    headline: "APP SUPPORT & DEV",
    viewProjects: "VIEW PROJECTS",
    marquee: [
      "BUILDING COOL STUFF",
      "SOLVING PROBLEMS",
      "WRITING CODE",
      "APP SUPPORT",
      "DEVELOPMENT",
    ],
  },
  skills: {
    title: "My Toolkit",
  },
  experience: {
    title: "Experience",
    education: "Education",
  },
  projects: {
    title: "Recent Work",
    viewProject: "View Project",
    linkUnavailable: "Link unavailable",
  },
  resume: {
    download: "DOWNLOAD RESUME",
  },
  footer: {
    title: "Get In Touch",
    blurb:
      "Looking for an Application Support or Full-stack Developer to join your team? Let's talk!",
    ctaHeading: "Ready for the next challenge?",
    privacy: "Privacy",
    builtWith: "BUILT WITH NEXT.JS",
  },
  privacy: {
    metaTitle: "Privacy Notice",
    metaDescription:
      "How this portfolio site handles data, cookies, and third-party services.",
    back: "← Back to portfolio",
    title: "Privacy Notice",
    lastUpdatedLabel: "Last updated",
    intro:
      "This site is a personal static portfolio. There is no user login and no visitor-submitted forms.",
    displayedHeading: "Information shown on this site",
    displayedBody:
      "Details such as name, email, GitHub/LinkedIn links, work experience, and projects are intentionally published by the site owner for professional purposes.",
    collectedHeading: "What we collect from you",
    collected: [
      "No personal data via forms — nothing is sent from your browser into a database owned by this site.",
      "Resume PDFs are generated locally in your browser and are never uploaded to our servers.",
      "Hosting provider logs — the provider (e.g. Vercel) may record IP, user agent, and timestamps under its own policy.",
    ],
    cookiesHeading: "Cookies",
    cookiesBody:
      "This app sets no analytics or advertising cookies. Cookies from the hosting provider may still be present depending on platform settings.",
    externalHeading: "External links",
    externalBody:
      "Links to GitHub, LinkedIn, projects, or email are governed by the policies of those services.",
    contactHeading: "Contact",
    contactBody: "Questions about privacy:",
  },
};

/** en เป็นตัวกำหนดรูปร่างของ dictionary — ภาษาอื่นต้องมีคีย์ครบตามนี้ */
export type Dictionary = typeof en;

export default en;
