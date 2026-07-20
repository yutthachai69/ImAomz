import { resumeData } from "@/data/resume";
import { safeExternalHref } from "@/lib/safe-url";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

const orgText = "font-bold text-secondary font-label uppercase tracking-wider";

/**
 * ชื่อองค์กร (บริษัท / สถาบัน) — เป็นลิงก์เมื่อมี url ที่ปลอดภัย
 * ไม่มีก็แสดงเป็นข้อความธรรมดา
 */
function OrgName({
  name,
  url,
  className = "",
}: {
  name: string;
  url?: string;
  className?: string;
}) {
  const href = url ? safeExternalHref(url) : null;

  if (!href) {
    return <p className={`${orgText} ${className}`}>{name}</p>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${orgText} ${className} inline-flex items-center gap-1.5 border-b-[3px] border-secondary/40 hover:border-secondary hover:bg-secondary-fixed transition-colors active-press`}
    >
      {name}
      <span aria-hidden="true" className="text-base">
        ↗
      </span>
    </a>
  );
}

type ExperienceProps = {
  lang: Locale;
  dict: Dictionary["experience"];
};

export default function Experience({ lang, dict }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="py-16 px-4 sm:py-20 sm:px-6 max-w-7xl mx-auto space-y-12 sm:space-y-16"
    >
      <h2 className="section-title">{dict.title}</h2>

      <div className="space-y-6 sm:space-y-8">
        {resumeData.experience.map((job) => (
          <article
            key={`${job.company.en}-${job.period}`}
            /* เว้นซ้ายสลับฟันปลา + ป้ายปีห้อยคร่อมเส้นขอบบน */
            className="card-brutal relative p-6 sm:p-8 sm:even:ml-8 lg:even:ml-16"
          >
            <span className="period-brutal latin absolute -top-4 right-5 sm:right-8 z-10 shadow-neo">
              {job.period}
            </span>

            <div className="mb-4 pr-24 sm:pr-32">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight font-h1">
                {job.role[lang]}
              </h3>
              <OrgName
                name={job.company[lang]}
                url={job.companyUrl}
                className="text-lg"
              />
            </div>
            <p className="font-medium text-on-surface/80 leading-relaxed font-body">
              {job.description[lang]}
            </p>
          </article>
        ))}
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-h1 flex items-center gap-3">
          <span className="w-8 h-8 bg-on-surface text-surface flex items-center justify-center text-sm">
            /
          </span>
          {dict.education}
        </h3>
        {resumeData.education.map((edu) => (
          <article
            key={edu.institution.en}
            className="relative bg-surface-container border-[4px] border-on-surface shadow-neo p-6 sm:p-8 hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <span className="period-brutal latin absolute -top-4 right-5 sm:right-8 z-10 shadow-neo">
              {edu.period}
            </span>

            <div className="mb-3 pr-24 sm:pr-32">
              <h4 className="text-lg sm:text-xl font-black font-h1">
                {edu.degree[lang]}
              </h4>
            </div>
            <div className="mb-2">
              <OrgName name={edu.institution[lang]} url={edu.institutionUrl} />
            </div>
            <p className="font-medium text-on-surface/80 font-body">
              {edu.description[lang]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
