import { useState, useEffect } from 'react';
import { navLinks, siteConfig } from '../../data/config';

function LogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="6" fill="#123A6B" />
      <text
        x="14"
        y="20"
        fontFamily="Inter, sans-serif"
        fontSize="14"
        fontWeight="700"
        fill="white"
        textAnchor="middle"
      >
        R
      </text>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-[#0A1628]/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20' : 'bg-transparent'}
      `}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded"
            aria-label="Raj Krishna Silwal — Go to home"
          >
            <LogoIcon />
            <span className="text-white font-semibold text-sm tracking-wide hidden sm:inline">
              Raz<span className="text-primary-400"> Silwal</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`
                    px-3 py-1.5 text-sm rounded-md transition-colors duration-200 font-medium
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500
                    ${isActive
                      ? 'text-white bg-primary-700/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold
                bg-primary-700 hover:bg-primary-600 text-white rounded-md
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
              View Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="
              md:hidden p-2 rounded-md text-gray-300 hover:text-white
              hover:bg-white/5 transition-colors
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500
            "
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMobileOpen ? 'max-h-screen pb-4' : 'max-h-0'}
          `}
          aria-hidden={!isMobileOpen}
        >
          <div className="border-t border-border pt-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`
                    w-full text-left px-4 py-3 text-sm rounded-lg transition-colors duration-200 font-medium
                    ${isActive ? 'text-white bg-primary-700/30' : 'text-gray-400 hover:text-white hover:bg-white/5'}
                  `}
                  aria-current={isActive ? 'page' : undefined}
                  tabIndex={isMobileOpen ? 0 : -1}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-2 border-t border-border mt-1">
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2 mx-3 px-4 py-2.5 text-sm font-semibold
                  bg-primary-700 hover:bg-primary-600 text-white rounded-md
                  transition-colors duration-200
                "
                tabIndex={isMobileOpen ? 0 : -1}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                View Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
