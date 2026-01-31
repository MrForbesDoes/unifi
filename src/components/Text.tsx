import type { ElementType, ReactNode } from 'react';
import { typography } from './Typography';

type Variant = keyof typeof typography;

type TextProps = {
  as?: ElementType;
  variant: Variant;
  className?: string;
  children: ReactNode;
};

export default function Text({ as: As = 'p', variant, className = '', children }: TextProps) {
  const baseClasses = typography[variant].replace('text-unifi-dark', '').replace('text-unifi-gray', '');
  const finalClassName = className.includes('text-') ? `${baseClasses} ${className}` : `${typography[variant]} ${className}`;
  return <As className={finalClassName.trim()}>{children}</As>;
}
