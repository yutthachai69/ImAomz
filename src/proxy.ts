import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, hasLocale, type Locale } from "./i18n/config";

/**
 * อ่าน Accept-Language แล้วเลือกภาษาที่รองรับซึ่งได้ q-value สูงสุด
 * เช่น "en-US,en;q=0.9,th;q=0.8" → "en"
 */
function pickLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith("q="))
        ?.slice(2);

      return {
        // "en-US" → "en" — เทียบเฉพาะ primary subtag
        base: tag.trim().toLowerCase().split("-")[0],
        quality: q === undefined ? 1 : Number.parseFloat(q),
      };
    })
    .filter(({ quality }) => Number.isFinite(quality) && quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { base } of ranked) {
    if (hasLocale(base)) return base;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) return;

  const locale = pickLocale(request.headers.get("accept-language"));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // ข้าม static asset และไฟล์ metadata ที่ไม่ต้องมี prefix ภาษา
    "/((?!_next|api|favicon.ico|icon|robots.txt|sitemap.xml|images|.*\\..*).*)",
  ],
};
