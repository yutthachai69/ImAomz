import Link from "next/link";
import { siteConfig, hasPhone, hasResume } from "@/data/site";
import { safeExternalHref } from "@/lib/safe-url";
import { btnBrutalSecondary } from "@/lib/button-classes";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import ResumeDownload from "./ResumeDownload";

const githubHref = safeExternalHref(siteConfig.links.github);
const linkedinHref = safeExternalHref(siteConfig.links.linkedin);

type FooterProps = {
  lang: Locale;
  dict: Dictionary;
};

export default function Footer({ lang, dict }: FooterProps) {
  return (
    <footer
      id="contact"
      className="bg-surface-container-highest border-t-[4px] border-on-surface py-16 px-4 sm:py-20 sm:px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="section-title !mb-0">{dict.footer.title}</h2>
          <p className="text-lg sm:text-xl font-medium max-w-sm font-body">
            {dict.footer.blurb}
          </p>
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xl sm:text-2xl font-black underline hover:text-secondary transition-colors font-label"
            >
              {siteConfig.email}
            </a>
            {hasPhone() && (
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-lg font-bold font-label"
              >
                {siteConfig.phone}
              </a>
            )}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {githubHref && (
                <a
                  href={githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold border-b-2 border-on-surface hover:text-secondary transition-colors font-label uppercase tracking-wider"
                >
                  GitHub
                </a>
              )}
              {linkedinHref && (
                <a
                  href={linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold border-b-2 border-on-surface hover:text-secondary transition-colors font-label uppercase tracking-wider"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="bg-primary-container border-[4px] border-on-surface shadow-neo p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-on-surface text-primary-container border-[3px] border-on-surface flex items-center justify-center font-black text-xl sm:text-2xl">
            ★
          </div>
          <h3 className="text-xl sm:text-2xl font-black uppercase font-h1">
            {dict.footer.ctaHeading}
          </h3>
          {/* ยังไม่มีไฟล์เรซูเม่ก็ไม่ปล่อยการ์ดว่าง — ใช้ปุ่มอีเมลแทน */}
          {hasResume() ? (
            <ResumeDownload variant="footer" labels={dict.resume} />
          ) : (
            <a
              href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                dict.nav.mailSubject
              )}`}
              className={`${btnBrutalSecondary} w-full`}
            >
              {dict.nav.hireMe}
            </a>
          )}
        </div>
      </div>

      {/* เดิมครอบ opacity-50 ทั้งบล็อกทำให้ลิงก์ Privacy contrast ตก — จางเฉพาะข้อความที่อ่านผ่านๆ ได้ */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-20 pt-6 sm:pt-8 border-t-[2px] border-on-surface/20 flex flex-col sm:flex-row justify-between items-center gap-4 font-bold text-sm font-label">
        <p className="latin text-on-surface/70">
          DEV.SUPPORT © {new Date().getFullYear()}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href={`/${lang}/privacy`}
            className="underline text-on-surface hover:text-secondary transition-colors"
          >
            {dict.footer.privacy}
          </Link>
          <span aria-hidden="true" className="text-on-surface/70">
            ·
          </span>
          <p className="latin text-on-surface/70">{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
