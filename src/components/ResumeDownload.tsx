import { siteConfig, hasResume } from "@/data/site";
import { btnBrutalSecondary } from "@/lib/button-classes";
import type { Dictionary } from "@/i18n/dictionaries/en";

type ResumeDownloadProps = {
  variant?: "hero" | "footer";
  labels: Dictionary["resume"];
};

/**
 * ลิงก์ดาวน์โหลดไฟล์เรซูเม่ที่วางไว้ใน public/ ตรงๆ
 * ไม่ใช่ client component แล้ว — ไม่มี JS ฝั่ง client เลย
 * ถ้ายังไม่ได้ใส่ siteConfig.resumeFile จะไม่ render อะไร
 */
export default function ResumeDownload({
  variant = "hero",
  labels,
}: ResumeDownloadProps) {
  if (!hasResume()) return null;

  const width = variant === "hero" ? "w-full sm:w-auto" : "w-full";

  return (
    <a
      href={siteConfig.resumeFile}
      download
      className={`${btnBrutalSecondary} ${width}`}
    >
      {labels.download}
    </a>
  );
}
