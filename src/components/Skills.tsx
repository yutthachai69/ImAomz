import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:py-20 sm:px-6 max-w-7xl mx-auto space-y-12 sm:space-y-16">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-black inline-block border-b-[6px] border-secondary pr-8 mb-4 uppercase tracking-tight font-h1">
        My Toolkit
      </h2>

      {skillCategories.map((category) => (
        <div key={category.title} className="space-y-6 sm:space-y-8">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider font-h1 flex items-center gap-3">
            <span className="w-8 h-8 bg-on-surface text-surface flex items-center justify-center text-sm">/</span>
            {category.title}
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
            {category.skills.map((skill) => (
              <div 
                key={skill.name}
                className={`${skill.color} border-[3px] border-on-surface p-3 sm:p-4 flex flex-col items-center justify-center gap-2 shadow-neo hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-default active-press hover:animate-wiggle`}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-on-surface/10 border-[2px] border-on-surface flex items-center justify-center font-bold font-label">
                  {skill.name[0]}
                </div>
                <p className="font-bold text-xs sm:text-sm uppercase tracking-tighter font-label text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}