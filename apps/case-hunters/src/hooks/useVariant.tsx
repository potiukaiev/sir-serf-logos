import { useState, useEffect } from 'react';

type Variant = 'A' | 'B' | 'C';

export const useVariant = (): Variant => {
  const [variant, setVariant] = useState<Variant>(() => {
    // Initialize from localStorage if available to prevent flash
    const saved = localStorage.getItem('ab-variant') as Variant;
    return saved || 'A';
  });

  useEffect(() => {
    // Check if variant already exists in localStorage
    const savedVariant = localStorage.getItem('ab-variant') as Variant;
    
    if (savedVariant) {
      setVariant(savedVariant);
    } else {
      // Randomly assign variant
      const random = Math.random();
      const randomVariant: Variant = random < 0.33 ? 'A' : random < 0.66 ? 'B' : 'C';
      localStorage.setItem('ab-variant', randomVariant);
      setVariant(randomVariant);
    }
  }, []);

  return variant;
};