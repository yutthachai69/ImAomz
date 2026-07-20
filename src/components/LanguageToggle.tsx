"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeMeta, type Locale } from "@/i18n/config";

type LanguageToggleProps = {
  lang: Locale;
  label: string;
  className?: string;
};

export default function LanguageToggle({
  lang,
  label,
  className = "",
}: LanguageToggleProps) {
  const pathname = usePathname();
  /** ตัด segment ภาษาออก เหลือ path ที่เหลือ เช่น "/th/privacy" → "/privacy" */
  const rest = pathname.replace(/^\/[^/]+/, "");

  return (
    <div
      role="group"
      aria-label={label}
      className={`flex border-[3px] border-on-surface shadow-neo bg-white ${className}`}
    >
      {locales.map((locale) => {
        const isActive = locale === lang;

        return (
          <Link
            key={locale}
            href={`/${locale}${rest}`}
            hrefLang={locale}
            aria-current={isActive ? "true" : undefined}
            className={`px-3 py-1.5 text-sm font-black uppercase tracking-wider font-label transition-colors active-press ${
              isActive
                ? "bg-on-surface text-surface"
                : "text-on-surface hover:bg-secondary-fixed"
            }`}
          >
            {localeMeta[locale].label}
          </Link>
        );
      })}
    </div>
  );
}
