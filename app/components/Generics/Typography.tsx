// src/components/ui/Typograph.tsx
import { cn } from '@/lib/utils';

interface TypographProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'default' | 'muted' | 'highlight';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Typograph({
  variant = 'default',
  size = 'sm',
  className,
  children,
  ...props
}: TypographProps) {
  const variantClasses = {
    default: 'Typograph-foreground',
    muted: 'Typograph-muted-foreground',
    highlight: 'Typograph-primary',
  };

  const sizeClasses = {
    sm: 'Typograph-sm',
    md: 'Typograph-base',
    lg: 'Typograph-lg',
  };

  return (
    <p
      className={cn(
        variantClasses[variant],
        sizeClasses[size],
        'font-semibold',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
