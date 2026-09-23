interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span
      className="
        inline-flex items-center px-3 py-1.5
        bg-navy-800 border border-primary-700/40
        text-gray-200 text-sm font-medium
        rounded-md transition-colors duration-200
        hover:border-primary-500 hover:bg-primary-700/20 hover:text-white
      "
    >
      {name}
    </span>
  );
}
