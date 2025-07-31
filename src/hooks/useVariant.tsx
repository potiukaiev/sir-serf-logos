import { useState, useEffect } from 'react';

type Variant = 'A' | 'B';

export const useVariant = (): Variant => {
  const [variant, setVariant] = useState<Variant>('A');

  useEffect(() => {
    // Check if variant already exists in localStorage
    const savedVariant = localStorage.getItem('ab-variant') as Variant;
    
    if (savedVariant) {
      setVariant(savedVariant);
    } else {
      // Randomly assign variant
      const randomVariant: Variant = Math.random() < 0.5 ? 'A' : 'B';
      localStorage.setItem('ab-variant', randomVariant);
      setVariant(randomVariant);
    }
  }, []);

  return variant;
};