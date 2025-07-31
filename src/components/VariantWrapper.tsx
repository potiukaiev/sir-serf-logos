import { ReactNode } from 'react';
import { useVariant } from '@/hooks/useVariant';

interface VariantWrapperProps {
  children: ReactNode;
}

export const VariantWrapper = ({ children }: VariantWrapperProps) => {
  const variant = useVariant();

  return (
    <div className={variant === 'B' ? 'glass-variant' : ''}>
      {children}
    </div>
  );
};