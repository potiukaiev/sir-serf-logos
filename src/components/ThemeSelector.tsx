import { useState, useEffect } from 'react';
import { Zap, Crown, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useVariant } from '@/hooks/useVariant';

type Variant = 'A' | 'B' | 'C';

export const ThemeSelector = () => {
  const variant = useVariant();
  const [selectedVariant, setSelectedVariant] = useState<Variant>(variant);

  useEffect(() => {
    setSelectedVariant(variant);
  }, [variant]);

  const themes = [
    { 
      value: 'A' as Variant, 
      label: 'Neon Gaming', 
      icon: Zap,
      description: 'CS2 cyberpunk with neon cyan & purple',
      color: 'text-gaming-cyan'
    },
    { 
      value: 'B' as Variant, 
      label: 'Golden Glass', 
      icon: Crown,
      description: 'Dota 2 premium with gold & glassmorphism',
      color: 'text-gaming-orange'
    },
    { 
      value: 'C' as Variant, 
      label: 'Minimal Flat', 
      icon: Palette,
      description: 'Clean white & gray flat design',
      color: 'text-gray-600'
    }
  ];

  const handleThemeChange = (newVariant: Variant) => {
    localStorage.setItem('ab-variant', newVariant);
    setSelectedVariant(newVariant);
    // Trigger a page reload to apply the new variant
    window.location.reload();
  };

  const currentTheme = themes.find(t => t.value === selectedVariant);
  const CurrentIcon = currentTheme?.icon || Palette;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className={`
            flex items-center gap-2 px-3 h-8
            ${variant === 'C' ? 
              'border-gray-300 bg-white text-gray-700 hover:bg-gray-50' : 
              variant === 'B' ? 
                'border-gaming-cyan/20 bg-gaming-darker/50 text-gaming-cyan hover:bg-gaming-cyan/10' : 
                'border-gaming-cyan/20 bg-gaming-dark/50 text-gaming-cyan hover:bg-gaming-cyan/10'
            }
          `}
        >
          <CurrentIcon className={`w-4 h-4 ${currentTheme?.color || 'text-gaming-cyan'}`} />
          <span className="hidden sm:inline">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={`
          w-64
          ${variant === 'C' ? 
            'bg-white border-gray-200 shadow-lg' : 
            variant === 'B' ? 
              'bg-gaming-darker border-gaming-cyan/20 backdrop-blur-md' : 
              'bg-gaming-dark border-gaming-cyan/20'
          }
        `}
      >
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          const isSelected = selectedVariant === themeOption.value;
          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => handleThemeChange(themeOption.value)}
              className={`
                flex flex-col items-start gap-1 cursor-pointer p-3
                ${isSelected ? 'bg-gaming-cyan/20 text-gaming-cyan' : 'text-foreground hover:bg-gaming-cyan/10'}
              `}
            >
              <div className="flex items-center gap-2 w-full">
                <Icon className={`w-4 h-4 ${themeOption.color}`} />
                <span className="font-medium">{themeOption.label}</span>
                {isSelected && <span className="ml-auto text-xs text-gaming-cyan">ACTIVE</span>}
              </div>
              <span className="text-xs text-muted-foreground ml-6">
                {themeOption.description}
              </span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};