// src/components/Projects.tsx
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:py-20 sm:px-6 max-w-7xl mx-auto space-y-8 sm:space-y-12">
      <h2 className="text-3xl sm:text-4xl font-black inline-block border-b-[6px] border-secondary pr-8 mb-4 sm:mb-8 uppercase tracking-tight font-h1">
        Recent Work
      </h2>

      <div className="flex flex-col gap-8 sm:gap-12">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row bg-white border-[4px] border-on-surface shadow-neo-lg overflow-hidden group hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
          >
            {/* Project Image Area */}
            <div className="md:w-2/5 border-b-[4px] md:border-b-0 md:border-r-[4px] border-on-surface bg-surface-container overflow-hidden">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface-container text-on-surface/50 font-label uppercase tracking-wider">
                  No Image
                </div>
              )}
            </div>

            {/* Project Info Area */}
            <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 border-[2px] border-on-surface bg-primary-container font-bold text-xs uppercase tracking-wider font-label">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter font-h1">{project.title}</h3>
                <p className="font-medium text-on-surface/70 leading-relaxed font-body">
                  {project.description}
                </p>
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="self-start bg-primary-container text-on-primary-container border-[3px] border-on-surface font-black px-6 sm:px-8 py-3 shadow-neo active-press uppercase tracking-wider text-sm font-label hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}