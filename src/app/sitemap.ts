import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const lastModified = new Date();

  /** hreflang ให้ Google รู้ว่าหน้าไหนเป็นคู่แปลของกัน */
  const alternates = (path: string) => ({
    languages: Object.fromEntries(
      locales.map((locale) => [locale, `${base}/${locale}${path}`])
    ),
  });

  return locales.flatMap((locale) => [
    {
      url: `${base}/${locale}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 1,
      alternates: alternates(""),
    },
    {
      url: `${base}/${locale}/privacy`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: alternates("/privacy"),
    },
  ]);
}
