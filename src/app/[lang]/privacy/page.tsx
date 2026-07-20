import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";
import { locales, hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const LAST_UPDATED = "2026-05-27";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return {
    title: `${dict.privacy.metaTitle} | ${siteConfig.seo.siteName}`,
    description: dict.privacy.metaDescription,
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `/${l}/privacy`])
      ),
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  const t = dict.privacy;

  return (
    <>
      <Navbar
        lang={lang}
        nav={dict.nav}
        languageToggleLabel={dict.languageToggle.label}
      />
      <main className="min-h-screen bg-surface py-12 px-4 sm:px-6">
        <article className="max-w-3xl mx-auto space-y-8">
          <div>
            <Link
              href={`/${lang}`}
              className="text-sm font-bold text-secondary hover:underline font-label uppercase tracking-wider"
            >
              {t.back}
            </Link>
          </div>

          <header className="space-y-2">
            <h1 className="section-title">{t.title}</h1>
            <p className="text-sm text-on-surface/70 font-body">
              {t.lastUpdatedLabel}: {LAST_UPDATED}
            </p>
          </header>

          <section className="card-brutal p-6 sm:p-8 space-y-4 font-body text-on-surface/85 leading-relaxed">
            <p>{t.intro}</p>

            <h2 className="font-bold text-on-surface">{t.displayedHeading}</h2>
            <p>{t.displayedBody}</p>

            <h2 className="font-bold text-on-surface">{t.collectedHeading}</h2>
            <ul className="list-disc pl-6 space-y-1">
              {t.collected.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2 className="font-bold text-on-surface">{t.cookiesHeading}</h2>
            <p>{t.cookiesBody}</p>

            <h2 className="font-bold text-on-surface">{t.externalHeading}</h2>
            <p>{t.externalBody}</p>

            <h2 className="font-bold text-on-surface">{t.contactHeading}</h2>
            <p>
              {t.contactBody}{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-secondary underline"
              >
                {siteConfig.email}
              </a>
            </p>
          </section>
        </article>
      </main>
    </>
  );
}
