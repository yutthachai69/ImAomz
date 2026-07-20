import Image from "next/image";
import { projects } from "@/data/projects";
import { btnBrutalPrimary } from "@/lib/button-classes";
import { isSafeImageSrc, safeExternalHref } from "@/lib/safe-url";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/en";

function isLocalImage(src: string) {
  return src.startsWith("/");
}

type ProjectsProps = {
  lang: Locale;
  dict: Dictionary["projects"];
};

export default function Projects({ lang, dict }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:py-20 sm:px-6 max-w-7xl mx-auto space-y-8 sm:space-y-12"
    >
      <h2 className="section-title">{dict.title}</h2>

      <div className="flex flex-col gap-8 sm:gap-12">
        {projects.map((project, index) => {
          const imageSrc = project.image.trim();
          const safeImage = isSafeImageSrc(imageSrc) ? imageSrc : "";
          const projectHref = safeExternalHref(project.link);
          /* สลับด้านรูปทุกใบ — เลิกเรียงซ้ายเหมือนกันหมด */
          const isReversed = index % 2 === 1;

          return (
            <div
              key={project.title}
              className={`card-brutal flex flex-col overflow-hidden group ${
                isReversed ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div
                className={`md:w-2/5 border-b-[4px] md:border-b-0 border-on-surface bg-surface-container overflow-hidden relative min-h-[200px] md:min-h-[280px] ${
                  isReversed ? "md:border-l-[4px]" : "md:border-r-[4px]"
                }`}
              >
                {safeImage ? (
                  <Image
                    src={safeImage}
                    alt={project.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    unoptimized={isLocalImage(imageSrc)}
                  />
                ) : (
                  /* empty state แบบตั้งใจ: ลายทแยงกับอักษรย่อโปรเจกต์ ไม่ใช่โน้ตนักพัฒนา */
                  <div
                    aria-hidden="true"
                    className="w-full h-full min-h-[200px] md:min-h-[280px] flex items-center justify-center bg-surface-container"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, #1f1b10 0 2px, transparent 2px 14px)",
                      backgroundColor: "#f6edda",
                      opacity: 0.9,
                    }}
                  >
                    <span className="latin px-4 py-2 bg-surface-container-lowest border-[3px] border-on-surface shadow-neo font-h1 font-black text-3xl sm:text-4xl tracking-tighter">
                      {project.title
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 3)
                        .toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-brutal latin">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter font-h1">
                    {project.title}
                  </h3>
                  <p className="font-medium text-on-surface/70 leading-relaxed font-body">
                    {project.description[lang]}
                  </p>
                </div>

                {projectHref ? (
                  <a
                    href={projectHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnBrutalPrimary} self-start !text-sm !py-3`}
                  >
                    {dict.viewProject}
                  </a>
                ) : (
                  <span className="text-sm font-medium text-on-surface/70 font-body">
                    {dict.linkUnavailable}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
