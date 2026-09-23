import { useInView } from '../../hooks/useInView';
import { SectionHeading } from '../ui/SectionHeading';
import { education } from '../../data/education';

function GpaDisplay({ gpa, scale }: { gpa: string; scale: string }) {
  return (
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-bold text-primary-300">{gpa}</span>
      <span className="text-gray-500 text-sm">/ {scale} GPA</span>
    </div>
  );
}

export function Education() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="education"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 bg-surface"
      aria-labelledby="education-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionHeading
            title="Education"
            id="education-heading"
            subtitle="Academic background and qualifications"
          />

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border"
              aria-hidden="true"
            />

            <div className="space-y-6">
              {education.map((item, idx) => (
                <article
                  key={item.id}
                  className="relative pl-14 sm:pl-20"
                  style={{
                    transitionDelay: isInView ? `${idx * 120}ms` : '0ms',
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(0)' : 'translateY(16px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease',
                  }}
                  aria-labelledby={`edu-${item.id}`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2.5 sm:left-4 top-5 w-3 h-3 rounded-full border-2 -translate-x-1/2 ${idx === 0 ? 'bg-primary-700 border-primary-500' : 'bg-border border-border bg-[#0F172A]'}`}
                    aria-hidden="true"
                  />

                  <div className={`bg-card border rounded-xl p-6 transition-colors duration-300 hover:border-primary-700/40 ${idx === 0 ? 'border-primary-700/30' : 'border-border'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <h3
                          id={`edu-${item.id}`}
                          className="text-base font-semibold text-white leading-snug mb-1"
                        >
                          {item.degree}
                        </h3>
                        <p className="text-primary-300 text-sm font-medium">
                          {item.institution}
                          {item.university && (
                            <span className="text-gray-500 font-normal"> — {item.university}</span>
                          )}
                        </p>
                        <div className="flex items-center gap-1.5 text-gray-500 text-xs mt-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          {item.location}
                        </div>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                        <GpaDisplay gpa={item.gpa} scale={item.gpaScale} />
                        <span className="text-gray-500 text-xs flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                            <rect width="18" height="18" x="3" y="4" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          {item.period}
                        </span>
                      </div>
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
