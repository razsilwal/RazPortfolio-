import { contactInfo, siteConfig } from '../../data/config';

// ─── To use your photo: ──────────────────────────────────────────────────────
// 1. Place your image at:  public/images/profile.jpg  (or .png / .webp)
// 2. Set PROFILE_IMAGE_URL to '/images/profile.jpg'
// 3. Set HAS_PHOTO to true
// ─────────────────────────────────────────────────────────────────────────────
const HAS_PHOTO = true;
const PROFILE_IMAGE_URL = '/images/profile.png';

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ArrowDownIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M12 5v14M5 12l7 7 7-7" />
    </svg>
  );
}

/** Profile avatar — shows real photo or an elegant monogram placeholder */
function ProfileAvatar() {
  if (HAS_PHOTO) {
    return (
      <img
        src={PROFILE_IMAGE_URL}
        alt="Raj Krishna Silwal"
        className="w-full h-full object-cover"
        loading="eager"
      />
    );
  }

  // Monogram placeholder shown until photo is added
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-navy-800 to-navy-700 select-none">
      {/* Initials */}
      <span className="text-6xl font-bold text-primary-300/80 font-mono leading-none">RK</span>
      <span className="text-xs text-gray-600 mt-3 px-6 text-center leading-snug">
        Add your photo to<br />
        <code className="font-mono text-gray-500">public/images/profile.jpg</code>
      </span>
    </div>
  );
}

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#060F20] overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true" />

      {/* Radial glow — shifts with layout */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-primary-700/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text content ───────────────────────────────────── */}
          <div className="flex-1 min-w-0">

            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-700/20 border border-primary-700/40 text-primary-300 text-xs font-medium mb-8 animate-fade-in"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" aria-hidden="true" />
              Open to graduate study &amp; developer opportunities
            </div>

            {/* H1 — only one on the page */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-5 animate-slide-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              Raj Krishna{' '}
              <span className="text-primary-400">Silwal</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg sm:text-xl text-gray-300 font-medium mb-6 animate-slide-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              Computer Science Graduate &nbsp;|&nbsp; Software Developer
            </p>

            {/* Introduction */}
            <p
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10 animate-slide-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              Computer Applications graduate with hands-on experience in Python, Django, PHP,
              MySQL, JavaScript, and web application development. Interested in software systems,
              backend development, advanced computing, and graduate study in Computer Science.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-3 mb-12 animate-slide-up"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <button
                onClick={scrollToProjects}
                className="
                  inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold
                  bg-primary-700 hover:bg-primary-600 text-white rounded-md
                  transition-colors duration-200
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-400
                  focus-visible:outline-offset-2
                "
              >
                View My Projects
              </button>

              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold
                  bg-transparent border border-primary-700/60 hover:border-primary-500
                  text-white hover:bg-primary-700/10 rounded-md
                  transition-colors duration-200
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-400
                  focus-visible:outline-offset-2
                "
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>

              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-5 py-3 text-sm font-medium
                  bg-transparent border border-white/10 hover:border-white/30
                  text-gray-300 hover:text-white hover:bg-white/5 rounded-md
                  transition-colors duration-200
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40
                  focus-visible:outline-offset-2
                "
                aria-label="GitHub profile"
              >
                <GithubIcon />
                GitHub
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2 px-5 py-3 text-sm font-medium
                  bg-transparent border border-white/10 hover:border-white/30
                  text-gray-300 hover:text-white hover:bg-white/5 rounded-md
                  transition-colors duration-200
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40
                  focus-visible:outline-offset-2
                "
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>

            {/* Scroll cue */}
            <button
              onClick={scrollToAbout}
              className="
                flex items-center gap-2 text-gray-500 hover:text-gray-300
                text-sm transition-colors duration-200 animate-fade-in
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/40 rounded
              "
              style={{ animationDelay: '0.8s', animationFillMode: 'both' }}
              aria-label="Scroll down to About section"
            >
              <ArrowDownIcon />
              <span>Scroll to explore</span>
            </button>
          </div>

          {/* ── Right: Profile photo ──────────────────────────────────── */}
          <div
            className="flex-shrink-0 flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-700/60 via-primary-600/30 to-transparent blur-sm"
                aria-hidden="true"
              />
              {/* Decorative corner dots */}
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full border-2 border-primary-700/40" aria-hidden="true" />
              <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-primary-700/30" aria-hidden="true" />

              {/* Photo frame */}
              <div
                className="
                  relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72
                  rounded-2xl overflow-hidden
                  border-2 border-primary-700/50
                  shadow-2xl shadow-primary-900/40
                "
              >
                <ProfileAvatar />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
