"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";
import LanguageToggle from "./LanguageToggle";

const navLink =
  "font-bold text-on-surface hover:text-secondary active-press font-label uppercase tracking-wider";
const navLinkActive =
  "font-bold text-secondary border-b-[3px] border-secondary active-press font-label uppercase tracking-wider";

type NavbarProps = {
  lang: Locale;
  nav: Dictionary["nav"];
  languageToggleLabel: string;
};

export default function Navbar({
  lang,
  nav,
  languageToggleLabel,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  const sections = [
    { id: "projects", label: nav.projects },
    { id: "skills", label: nav.skills },
    { id: "experience", label: nav.experience },
    { id: "contact", label: nav.contact },
  ];

  /* ไฮไลต์เมนูตามส่วนที่อยู่บนจอจริง — เดิม hardcode ให้ Projects ค้างตลอด */
  useEffect(() => {
    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      // กันไม่ให้ section ที่โผล่แค่ขอบจอชิงไฮไลต์ไป
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
    // sections สร้างใหม่ทุก render แต่ id คงที่ — ผูกกับ nav ที่เปลี่ยนตอนสลับภาษาพอ
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nav]);

  const hireHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    nav.mailSubject
  )}`;

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-6 py-4 bg-white border-b-[4px] border-on-surface shadow-neo relative">
      <div className="latin text-xl md:text-2xl font-black text-on-surface tracking-tighter font-h1">
        DEV &amp; App_Support
      </div>

      <div className="flex items-center gap-3 md:hidden">
        <LanguageToggle lang={lang} label={languageToggleLabel} />

        <button
          type="button"
          aria-label={nav.toggleMenu}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-primary-container text-on-primary-container border-[3px] border-on-surface shadow-neo p-2 active-press"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1">
            <div
              className={`h-1 bg-on-primary-container transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <div
              className={`h-1 bg-on-primary-container transition-all ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`h-1 bg-on-primary-container transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </div>

      <div className="hidden md:flex gap-8 items-center">
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            aria-current={activeId === section.id ? "true" : undefined}
            className={activeId === section.id ? navLinkActive : navLink}
          >
            {section.label}
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-4">
        <LanguageToggle lang={lang} label={languageToggleLabel} />

        <a
          href={hireHref}
          className="bg-primary-container text-on-primary-container font-bold px-6 py-2 border-[3px] border-on-surface shadow-neo active-press font-label uppercase tracking-wider"
        >
          {nav.hireMe}
        </a>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b-[4px] border-on-surface shadow-neo-lg md:hidden z-[60]">
          <div className="flex flex-col p-6 gap-4">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={activeId === section.id ? "true" : undefined}
                className={`${activeId === section.id ? navLinkActive : navLink} py-2`}
              >
                {section.label}
              </Link>
            ))}

            <a
              href={hireHref}
              onClick={() => setIsMenuOpen(false)}
              className="bg-primary-container text-on-primary-container font-bold px-6 py-3 border-[3px] border-on-surface shadow-neo active-press font-label uppercase tracking-wider mt-4 text-center"
            >
              {nav.hireMe}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
