import { ReactNode } from 'react';
import { useVariant } from '@/hooks/useVariant';
import { ThemePicker } from '@/components/ThemePicker';

interface VariantWrapperProps {
  children: ReactNode;
}

export const VariantWrapper = ({ children }: VariantWrapperProps) => {
  const variant = useVariant();

  return (
    <div className={variant === 'B' ? 'glass-variant' : ''}>
      {children}
      <ThemePicker />
    </div>
  );
};