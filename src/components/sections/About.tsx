import { useInView } from '../../hooks/useInView';
import { SectionHeading } from '../ui/SectionHeading';

// ─── Same photo config as Hero — keep in sync ────────────────────────────────
const HAS_PHOTO = true;
const PROFILE_IMAGE_URL = '/images/profile.webp';

const academicInterests = [
  'Computer Science',
  'Data Science',
  'Machine Learning',
  'Backend Development',
  'Database Systems',
  'Software Systems',
];

export function About() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <SectionHeading
            title="About"
            id="about-heading"
            subtitle="Background and academic interests"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Main bio */}
            <div className="lg:col-span-3 space-y-5">
              <p className="text-gray-300 text-base leading-relaxed">
                <span className="text-white font-medium">Raj Krishna Silwal</span> is a Computer
                Science graduate from{' '}
                <span className="text-white font-medium">Tribhuvan University</span> (BCA, 2024),
                based in Chitwan, Nepal. He has hands-on experience in backend web development with
                Python, Django, MySQL, and PHP, and has built database-driven web applications
                through academic and professional work.
              </p>

              <p className="text-gray-300 text-base leading-relaxed">
                He completed a{' '}
                <span className="text-white font-medium">Python Django Developer internship</span>{' '}
                at Mindrisers Technology, where he worked on web application functionality,
                database components, and version control using Git. His projects include
                e-commerce systems, management platforms, and other database-driven applications.
              </p>

              <p className="text-gray-300 text-base leading-relaxed">
                Raj is currently preparing for{' '}
                <span className="text-primary-300 font-semibold">
                  graduate study in Data Science and Machine Learning
                </span>
                . His goal is to build on his software development foundation to work with
                data-driven systems, and he is actively expanding his knowledge in statistics,
                machine learning, and data analysis.
              </p>

              <p className="text-gray-300 text-base leading-relaxed">
                He is open to developer roles and research opportunities in this direction, with a
                focus on backend development, data-driven applications, and software systems.
              </p>
            </div>

            {/* Interests sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-xl p-6">
                {/* Profile photo */}
                <div className="flex flex-col items-center mb-6 pb-6 border-b border-border">
                  <div className="relative mb-4">
                    {/* Decorative ring */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-700/50 to-transparent blur-sm" aria-hidden="true" />
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-primary-700/50">
                      {HAS_PHOTO ? (
                        <img
                          src={PROFILE_IMAGE_URL}
                          alt="Raj Krishna Silwal, Computer Science graduate and software developer from Nepal"
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-700">
                          <span className="text-3xl font-bold text-primary-300/70 font-mono select-none">RK</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-white font-semibold text-sm">Raj Krishna Silwal</p>
                  <p className="text-primary-300 text-xs mt-0.5">BCA Graduate · Chitwan, Nepal</p>
                </div>

                <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
                  Academic Interests
                </h3>

                <ul className="flex flex-wrap gap-2" aria-label="Academic interests">
                  {academicInterests.map((interest) => (
                    <li key={interest}>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-primary-300 bg-primary-700/15 border border-primary-700/30 rounded-md">
                        <span className="w-1 h-1 rounded-full bg-primary-400 flex-shrink-0" aria-hidden="true" />
                        {interest}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Quick facts */}
                <div className="mt-6 pt-5 border-t border-border space-y-3">
                  <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                    Quick Facts
                  </h3>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary-400 mt-0.5 flex-shrink-0" aria-hidden="true">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                    <span className="text-gray-400 text-sm">BCA — Tribhuvan University, 2024</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary-400 mt-0.5 flex-shrink-0" aria-hidden="true">
                      <rect width="20" height="14" x="2" y="7" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    <span className="text-gray-400 text-sm">Python Django Intern — Mindrisers Technology</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary-400 mt-0.5 flex-shrink-0" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-gray-400 text-sm">Chitwan, Nepal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}