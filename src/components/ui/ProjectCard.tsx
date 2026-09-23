import type { Project } from '../../types';

// Technology color mapping for badge accents
const techColorMap: Record<string, string> = {
  PHP: 'bg-indigo-900/40 text-indigo-300 border-indigo-700/30',
  MySQL: 'bg-blue-900/40 text-blue-300 border-blue-700/30',
  JavaScript: 'bg-yellow-900/30 text-yellow-300 border-yellow-700/30',
  HTML: 'bg-orange-900/30 text-orange-300 border-orange-700/30',
  CSS: 'bg-sky-900/30 text-sky-300 border-sky-700/30',
  Python: 'bg-green-900/30 text-green-300 border-green-700/30',
  Django: 'bg-emerald-900/30 text-emerald-300 border-emerald-700/30',
  React: 'bg-cyan-900/30 text-cyan-300 border-cyan-700/30',
  eSewa: 'bg-green-900/30 text-green-200 border-green-700/30',
  Git: 'bg-red-900/30 text-red-300 border-red-700/30',
  GitHub: 'bg-gray-800/60 text-gray-300 border-gray-600/30',
  Java: 'bg-amber-900/30 text-amber-300 border-amber-700/30',
  C: 'bg-gray-700/30 text-gray-300 border-gray-600/30',
};

const defaultBadgeClass = 'bg-slate-800/60 text-slate-300 border-slate-600/30';

function TechBadge({ tech }: { tech: string }) {
  const colorClass = techColorMap[tech] ?? defaultBadgeClass;
  return (
    <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded border ${colorClass}`}>
      {tech}
    </span>
  );
}

// SVG icon components (inline — no extra library needed)
function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15,3 21,3 21,9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

// Deterministic placeholder pattern based on project id
function ProjectPlaceholder({ project }: { project: Project }) {
  const patterns: Record<string, string> = {
    'e-stationery': 'from-indigo-900/80 to-blue-900/80',
    'car-rental': 'from-slate-800/80 to-primary-900/80',
    'shoe-store': 'from-emerald-900/80 to-teal-900/80',
  };
  const gradient = patterns[project.id] ?? 'from-slate-800/80 to-slate-700/80';
  const initials = project.name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <div
      className={`h-44 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center border-b border-white/5`}
      role="img"
      aria-label={project.imageAlt}
    >
      <span className="text-4xl font-bold text-white/20 font-mono select-none">{initials}</span>
      <span className="text-xs text-white/30 mt-1 px-4 text-center leading-tight">
        {project.imageAlt}
      </span>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        flex flex-col bg-card border border-border rounded-xl overflow-hidden
        transition-all duration-300
        hover:border-primary-700/60 hover:shadow-lg hover:shadow-primary-900/20
        hover:-translate-y-1
      "
      aria-label={`Project: ${project.name}`}
    >
      {/* Image / Placeholder */}
      <ProjectPlaceholder project={project} />

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white leading-snug mb-2">{project.name}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} tech={tech} />
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto pt-2 flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 text-sm font-medium text-gray-300
              hover:text-white transition-colors duration-200
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 rounded
            "
            aria-label={`View ${project.name} source code on GitHub`}
          >
            <GithubIcon />
            View on GitHub
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </article>
  );
}
