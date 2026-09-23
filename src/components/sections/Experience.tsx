import { useInView } from '../../hooks/useInView';
import { SectionHeading } from '../ui/SectionHeading';
import { experience } from '../../data/experience';

function TechPill({ tech }: { tech: string }) {
  return (
    <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-primary-700/20 text-primary-300 border border-primary-700/30 rounded">
      {tech}
    </span>
  );
}

export function Experience() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 bg-[#060F20]"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionHeading
            title="Experience"
            id="experience-heading"
            subtitle="Professional development experience"
          />

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px bg-border ml-4 sm:ml-6"
              aria-hidden="true"
            />

            <div className="space-y-8">
              {experience.map((item) => (
                <article
                  key={item.id}
                  className="relative pl-14 sm:pl-20"
                  aria-labelledby={`exp-${item.id}`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-2.5 sm:left-4 top-5 w-3 h-3 rounded-full bg-primary-700 border-2 border-primary-500 -translate-x-1/2"
                    aria-hidden="true"
                  />

                  <div className="bg-card border border-border rounded-xl p-6 hover:border-primary-700/50 transition-colors duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3
                          id={`exp-${item.id}`}
                          className="text-lg font-semibold text-white leading-snug"
                        >
                          {item.role}
                        </h3>
                        <p className="text-primary-300 font-medium text-sm mt-0.5">
                          {item.company}
                        </p>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary-700/20 text-primary-300 border border-primary-700/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400" aria-hidden="true" />
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          {item.period} &middot; {item.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {item.location}
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-5" aria-label="Responsibilities">
                      {item.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-gray-400 text-sm leading-relaxed">
                          <span className="text-primary-500 mt-1 flex-shrink-0" aria-hidden="true">▸</span>
                          {resp}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                      {item.technologies.map((tech) => (
                        <TechPill key={tech} tech={tech} />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
