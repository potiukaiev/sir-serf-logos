import { useState } from 'react';
import { Monitor, Sun, Moon, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useVariant } from '@/hooks/useVariant';

export const ThemeSelector = () => {
  const variant = useVariant();
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('dark');

  const themes = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'auto', label: 'Auto', icon: Monitor }
  ];

  const currentTheme = themes.find(t => t.value === theme);
  const CurrentIcon = currentTheme?.icon || Monitor;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className={`
            flex items-center gap-2 px-3 h-8
            ${variant === 'B' ? 
              'border-gaming-cyan/20 bg-gaming-darker/50 text-gaming-cyan hover:bg-gaming-cyan/10' : 
              'border-gaming-cyan/20 bg-gaming-dark/50 text-gaming-cyan hover:bg-gaming-cyan/10'
            }
          `}
        >
          <CurrentIcon className="w-4 h-4" />
          <span className="hidden sm:inline">Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={`
          ${variant === 'B' ? 
            'bg-gaming-darker border-gaming-cyan/20 backdrop-blur-md' : 
            'bg-gaming-dark border-gaming-cyan/20'
          }
        `}
      >
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value as 'light' | 'dark' | 'auto')}
              className={`
                flex items-center gap-2 cursor-pointer
                ${theme === themeOption.value ? 'bg-gaming-cyan/20 text-gaming-cyan' : 'text-foreground hover:bg-gaming-cyan/10'}
              `}
            >
              <Icon className="w-4 h-4" />
              {themeOption.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};