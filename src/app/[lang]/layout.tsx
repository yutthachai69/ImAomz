import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Lexend, Space_Grotesk, Inter, Noto_Sans_Thai } from "next/font/google";
import { siteConfig } from "@/data/site";
import { locales, localeMeta, hasLocale } from "@/i18n/config";
import "../globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/**
 * Lexend / Space Grotesk / Inter ไม่มี glyph ภาษาไทยเลย
 * ตัวนี้จึงถูกต่อท้ายทุก font stack ให้เบราว์เซอร์หยิบไปใช้เฉพาะอักขระไทย
 */
const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-thai",
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return {
    title: siteConfig.seo.title[lang],
    description: siteConfig.seo.description[lang],
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
    ),
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      title: siteConfig.seo.title[lang],
      description: siteConfig.seo.description[lang],
      siteName: siteConfig.seo.siteName,
      type: "website",
      locale: localeMeta[lang].ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.seo.title[lang],
      description: siteConfig.seo.description[lang],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={localeMeta[lang].htmlLang}
      className={`${lexend.variable} ${spaceGrotesk.variable} ${inter.variable} ${notoSansThai.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
