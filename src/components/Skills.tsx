import { skillCategories } from "@/data/skills";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

type SkillsProps = {
  lang: Locale;
  dict: Dictionary["skills"];
};

export default function Skills({ lang, dict }: SkillsProps) {
  return (
    <section
      id="skills"
      className="py-16 px-4 sm:py-20 sm:px-6 max-w-7xl mx-auto space-y-12 sm:space-y-16"
    >
      <h2 className="section-title">{dict.title}</h2>

      {skillCategories.map((category) => (
        <div key={category.title.en} className="space-y-5">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider font-h1 flex items-center gap-3">
            <span
              aria-hidden="true"
              className={`w-3 h-8 border-[3px] border-on-surface ${category.accent}`}
            />
            {category.title[lang]}
          </h3>

          <ul className="flex flex-wrap gap-3 sm:gap-4">
            {category.skills.map((skill) => (
              <li
                key={skill}
                className={`chip-brutal latin ${category.accent}`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
