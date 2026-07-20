import Image from "next/image";
import Link from "next/link";
import { siteConfig, hasProfileImage } from "@/data/site";
import { isSafeImageSrc } from "@/lib/safe-url";
import { btnBrutalPrimary } from "@/lib/button-classes";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import ResumeDownload from "./ResumeDownload";

type HeroProps = {
  lang: Locale;
  dict: Dictionary;
};

function Marquee({
  items,
  ariaHidden,
}: {
  items: string[];
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="latin flex whitespace-nowrap animate-marquee font-h1 text-white text-lg sm:text-xl font-black tracking-widest uppercase"
      aria-hidden={ariaHidden}
    >
      {items.map((item, index) => (
        <span key={index}>
          <span className="mx-4">{item}</span> •
        </span>
      ))}
    </div>
  );
}

/** บัตรประจำตัวฝั่งขวา — ถ่วงน้ำหนักกับตัวอักษรยักษ์ฝั่งซ้าย */
function IdCard({ lang }: { lang: Locale }) {
  const showPhoto =
    hasProfileImage() && isSafeImageSrc(siteConfig.hero.profileImage);

  const initials = siteConfig.nickname.slice(0, 3).toUpperCase();

  return (
    <div
      className="relative w-full max-w-[300px] mx-auto md:mx-0 md:ml-auto animate-slam"
      style={{ animationDelay: "250ms" }}
    >
      {/* badge ล้นออกนอกกรอบการ์ด — จุดที่องค์ประกอบซ้อนทับกัน */}
      <span className="badge-brutal absolute -top-4 -right-2 z-20 rotate-3">
        {siteConfig.availability[lang]}
      </span>

      <div className="border-[4px] border-on-surface shadow-neo-xl bg-surface-container-lowest rotate-[1.5deg] hover:rotate-0 transition-transform">
        <div className="relative aspect-square border-b-[4px] border-on-surface overflow-hidden bg-surface-container">
          {showPhoto ? (
            <Image
              src={siteConfig.hero.profileImage}
              alt={siteConfig.name}
              fill
              className="object-cover"
              sizes="300px"
              priority
            />
          ) : (
            /* ไม่มีรูป: ใช้ลายทแยงชุดเดียวกับ empty state ของโปรเจกต์ */
            <div
              aria-hidden="true"
              className="w-full h-full flex items-center justify-center"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #1f1b10 0 2px, transparent 2px 14px)",
                backgroundColor: "#f6edda",
              }}
            >
              <span className="latin px-5 py-3 bg-primary-container border-[4px] border-on-surface shadow-neo font-h1 font-black text-5xl tracking-tighter">
                {initials}
              </span>
            </div>
          )}
        </div>

        <div className="p-4 space-y-1">
          <p className="latin font-h1 font-black text-lg leading-tight">
            {siteConfig.name}
          </p>
          <p className="font-label text-sm uppercase tracking-wider text-on-surface/70 leading-snug">
            {siteConfig.role[lang]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ lang, dict }: HeroProps) {
  return (
    <section className="bg-surface relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1f1b10 2px, transparent 2px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-14 sm:pt-20 md:pt-24 md:pb-24">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 md:gap-10 lg:gap-14 items-center">
          {/* ซ้าย: ตัวอักษรยักษ์ชิดซ้าย — กระแทกตากว่าจัดกลาง */}
          <div className="text-left">
            <h1
              /* 8xl ทำให้ "APP SUPPORT & DEV" แตก 3 บรรทัดและ & ห้อยท้าย — 6xl/7xl พอดีกับคอลัมน์ */
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-on-surface leading-[0.95] mb-6 tracking-tighter font-h1 text-balance animate-slam"
              style={{ animationDelay: "0ms" }}
            >
              {dict.hero.greeting}{" "}
              <span className="latin text-secondary bg-secondary-fixed px-2 border-[4px] border-on-surface shadow-neo inline-block rotate-[-2deg] hover:rotate-[2deg] transition-transform">
                {siteConfig.nickname.toUpperCase()}
              </span>
              <br />
              <span className="latin">{dict.hero.headline}</span>
            </h1>

            <p
              className="text-lg sm:text-xl font-medium text-on-surface/80 mb-8 max-w-xl font-body animate-slam"
              style={{ animationDelay: "100ms" }}
            >
              {siteConfig.hero.description[lang]}
            </p>

            <div
              className="flex flex-col sm:flex-row flex-wrap gap-4 animate-slam"
              style={{ animationDelay: "200ms" }}
            >
              <Link
                href="#projects"
                className={`${btnBrutalPrimary} w-full sm:w-auto`}
              >
                {dict.hero.viewProjects}
              </Link>
              <ResumeDownload variant="hero" labels={dict.resume} />
            </div>
          </div>

          <IdCard lang={lang} />
        </div>
      </div>

      <div className="relative z-10 w-full bg-secondary border-y-[4px] border-on-surface py-3 overflow-hidden flex transform -rotate-2 scale-105 origin-left shadow-neo-lg">
        <Marquee items={dict.hero.marquee} />
        <Marquee items={dict.hero.marquee} ariaHidden />
        <Marquee items={dict.hero.marquee} ariaHidden />
      </div>
    </section>
  );
}
