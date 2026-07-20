import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <Navbar
        lang={lang}
        nav={dict.nav}
        languageToggleLabel={dict.languageToggle.label}
      />
      <Hero lang={lang} dict={dict} />
      <Skills lang={lang} dict={dict.skills} />
      <Experience lang={lang} dict={dict.experience} />
      <Projects lang={lang} dict={dict.projects} />
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
