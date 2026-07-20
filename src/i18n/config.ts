export const locales = ["th", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "th";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** ข้อความที่มีทั้งสองภาษา — ใช้ในไฟล์ data เช่น projects.ts */
export type Localized<T = string> = Record<Locale, T>;

/** ป้ายบนปุ่มสลับภาษา และค่า lang/OG locale ของแต่ละภาษา */
export const localeMeta: Record<
  Locale,
  { label: string; htmlLang: string; ogLocale: string }
> = {
  th: { label: "ไทย", htmlLang: "th", ogLocale: "th_TH" },
  en: { label: "EN", htmlLang: "en", ogLocale: "en_US" },
};
