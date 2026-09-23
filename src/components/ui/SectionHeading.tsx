import type { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: 'left' | 'center';
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  children,
  align = 'left',
  id,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignClass}`}>
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="inline-block w-8 h-0.5 bg-primary-700 flex-shrink-0" aria-hidden="true" />
        <h2 id={id} className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <span className="inline-block w-8 h-0.5 bg-primary-700 flex-shrink-0" aria-hidden="true" />
      </div>
      {subtitle && (
        <p className="text-gray-400 text-base max-w-2xl leading-relaxed">{subtitle}</p>
      )}
      {children}
    </div>
  );
}
