import { ReactNode } from 'react';
import { useVariant } from '@/hooks/useVariant';
import { ThemePicker } from '@/components/ThemePicker';

interface VariantWrapperProps {
  children: ReactNode;
}

export const VariantWrapper = ({ children }: VariantWrapperProps) => {
  const variant = useVariant();
  
  // Debug log
  console.log('VariantWrapper variant:', variant);

  return (
    <div className={variant === 'B' ? 'glass-variant' : ''}>
      {children}
      <ThemePicker />
    </div>
  );
};