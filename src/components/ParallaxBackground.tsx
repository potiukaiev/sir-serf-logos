import { useEffect, useState } from 'react';
import { useVariant } from '@/hooks/useVariant';

interface ParallaxBackgroundProps {
  className?: string;
}

export const ParallaxBackground = ({ className = '' }: ParallaxBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);
  const variant = useVariant();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Gaming Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: variant === 'A' 
            ? `url('/cs2-gaming-bg.jpg')` 
            : `url('/dota2-gaming-bg.jpg')`,
          opacity: variant === 'B' ? 1.0 : 0.6, // Full opacity for variant B
          backgroundColor: variant === 'B' ? '#1a1a2e' : '#2a2a3e' // Fallback dark blue
        }}
      />
      
      {/* Lighter overlay for variant B to show image */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${parallaxOffset * 0.3}px)`,
          background: variant === 'A' 
            ? 'linear-gradient(180deg, hsl(220 39% 11% / 0.7), hsl(220 39% 8% / 0.9))'
            : 'linear-gradient(180deg, hsl(220 39% 8% / 0.1), hsl(220 39% 6% / 0.2))', // Very light overlay for B
        }}
      />
      
      {/* Gaming Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${parallaxOffset * 0.5}px)`,
          backgroundImage: variant === 'A' 
            ? `radial-gradient(circle at 25% 25%, hsl(var(--gaming-cyan) / 0.3) 0%, transparent 50%),
               radial-gradient(circle at 75% 75%, hsl(var(--gaming-purple) / 0.2) 0%, transparent 50%)`
            : `radial-gradient(circle at 20% 30%, hsl(47 96% 53% / 0.2) 0%, transparent 40%),
               radial-gradient(circle at 80% 70%, hsl(200 100% 80% / 0.1) 0%, transparent 40%)`,
          backgroundSize: '100% 100%'
        }}
      />

      {/* Circuit Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${parallaxOffset * 0.8}px)`,
          backgroundImage: variant === 'A'
            ? `linear-gradient(90deg, hsl(var(--gaming-cyan) / 0.1) 1px, transparent 1px),
               linear-gradient(hsl(var(--gaming-cyan) / 0.1) 1px, transparent 1px)`
            : `linear-gradient(90deg, hsl(47 96% 53% / 0.05) 1px, transparent 1px),
               linear-gradient(hsl(47 96% 53% / 0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Additional Gaming Elements */}
      <div 
        className="absolute top-20 left-10 w-2 h-2 bg-gaming-cyan rounded-full animate-pulse opacity-60"
        style={{
          transform: `translateY(${parallaxOffset * 0.9}px)`,
        }}
      />
      <div 
        className="absolute top-40 right-20 w-1 h-1 bg-gaming-purple rounded-full animate-pulse opacity-40"
        style={{
          transform: `translateY(${parallaxOffset * 1.2}px)`,
        }}
      />
      <div 
        className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-gaming-orange rounded-full animate-pulse opacity-50"
        style={{
          transform: `translateY(${parallaxOffset * 0.7}px)`,
        }}
      />
    </div>
  );
};