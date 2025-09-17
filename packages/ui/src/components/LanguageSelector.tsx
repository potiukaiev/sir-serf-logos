import { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useVariant } from '@/hooks/useVariant';

export const LanguageSelector = () => {
  const variant = useVariant();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === selectedLanguage);

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
          <span className="text-sm">{currentLanguage?.flag}</span>
          <Globe className="w-4 h-4" />
          <span className="hidden sm:inline">{currentLanguage?.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={`
          w-48 max-h-64 overflow-y-auto
          ${variant === 'B' ? 
            'bg-gaming-darker border-gaming-cyan/20 backdrop-blur-md' : 
            'bg-gaming-dark border-gaming-cyan/20'
          }
        `}
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setSelectedLanguage(language.code)}
            className={`
              flex items-center justify-between gap-3 cursor-pointer
              ${selectedLanguage === language.code ? 'bg-gaming-cyan/20 text-gaming-cyan' : 'text-foreground hover:bg-gaming-cyan/10'}
            `}
          >
            <div className="flex items-center gap-3">
              <span className="text-base">{language.flag}</span>
              <span className="text-sm">{language.name}</span>
            </div>
            {selectedLanguage === language.code && (
              <Check className="w-4 h-4 text-gaming-cyan" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};