import { useInView } from '../../hooks/useInView';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillBadge } from '../ui/SkillBadge';
import { skillCategories } from '../../data/skills';

export function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 bg-[#060F20]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionHeading
            title="Skills"
            id="skills-heading"
            subtitle="Technologies and tools I have worked with"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, idx) => (
              <div
                key={category.category}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary-700/50 transition-colors duration-300"
                style={{
                  transitionDelay: isInView ? `${idx * 80}ms` : '0ms',
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease',
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary-700/20 text-primary-300 font-mono text-xs font-bold border border-primary-700/30"
                    aria-hidden="true"
                  >
                    {category.icon}
                  </span>
                  <h3 className="text-white font-semibold text-sm">{category.category}</h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2" role="list" aria-label={`${category.category} skills`}>
                  {category.skills.map((skill) => (
                    <div key={skill} role="listitem">
                      <SkillBadge name={skill} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note about no fake percentages */}
          <p className="mt-8 text-gray-600 text-xs text-center">
            Skills are listed as technologies worked with — not ranked by subjective percentages.
          </p>
        </div>
      </div>
    </section>
  );
}
