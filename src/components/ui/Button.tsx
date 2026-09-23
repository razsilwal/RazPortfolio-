import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never };
type ButtonAsAnchor = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-700 hover:bg-primary-600 text-white border border-primary-700 hover:border-primary-500 focus-visible:ring-primary-500',
  outline:
    'bg-transparent hover:bg-primary-700/10 text-white border border-primary-700/60 hover:border-primary-500 focus-visible:ring-primary-500',
  ghost:
    'bg-transparent hover:bg-white/5 text-gray-300 hover:text-white border border-transparent focus-visible:ring-white/40',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] disabled:opacity-50 disabled:cursor-not-allowed select-none';

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', children, className = '', ...rest } = props;

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (props.as === 'a') {
    const { as: _as, variant: _v, size: _s, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, ...btnProps } = rest as ButtonAsButton;
  return (
    <button className={classes} {...btnProps}>
      {children}
    </button>
  );
}
