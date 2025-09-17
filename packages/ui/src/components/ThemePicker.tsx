import { useState, useEffect } from 'react';
import { Palette, Monitor, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

type Variant = 'A' | 'B';

export const ThemePicker = () => {
  const [currentVariant, setCurrentVariant] = useState<Variant>('A');

  useEffect(() => {
    // Get current variant from localStorage
    const savedVariant = localStorage.getItem('ab-variant') as Variant;
    if (savedVariant) {
      setCurrentVariant(savedVariant);
    }
  }, []);

  const switchVariant = (variant: Variant) => {
    localStorage.setItem('ab-variant', variant);
    setCurrentVariant(variant);
    // Force a page reload to apply the new theme
    window.location.reload();
  };

  const getVariantInfo = (variant: Variant) => {
    switch (variant) {
      case 'A':
        return {
          name: 'Neon Gaming',
          description: 'Dark cyberpunk with neon accents',
          icon: <Monitor className="w-4 h-4" />,
          color: 'bg-gaming-cyan'
        };
      case 'B':
        return {
          name: 'Glassmorphism',
          description: 'Premium glass effects with gold',
          icon: <Sparkles className="w-4 h-4" />,
          color: 'bg-yellow-500'
        };
    }
  };

  const currentInfo = getVariantInfo(currentVariant);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="shadow-lg border-2 bg-card/90 backdrop-blur-sm hover:bg-card"
          >
            <Palette className="w-4 h-4 mr-2" />
            Theme Preview
            <Badge variant="secondary" className="ml-2">
              {currentVariant}
            </Badge>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-64 bg-card/95 backdrop-blur-sm border-2">
          <DropdownMenuLabel className="flex items-center gap-2">
            <Palette className="w-4 h-4" />
            A/B Theme Variants
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          
          {(['A', 'B'] as Variant[]).map((variant) => {
            const info = getVariantInfo(variant);
            const isActive = currentVariant === variant;
            
            return (
              <DropdownMenuItem
                key={variant}
                onClick={() => switchVariant(variant)}
                className={`flex items-center justify-between cursor-pointer p-3 ${
                  isActive ? 'bg-accent' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  {info.icon}
                  <div>
                    <div className="font-medium">{info.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {info.description}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${info.color}`} />
                  {isActive && (
                    <Badge variant="secondary" className="text-xs">
                      Active
                    </Badge>
                  )}
                </div>
              </DropdownMenuItem>
            );
          })}
          
          <DropdownMenuSeparator />
          <div className="p-2 text-xs text-muted-foreground">
            Switch themes to preview A/B test variants
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};