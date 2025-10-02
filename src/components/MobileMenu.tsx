import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ThemeSelector } from "@/components/ThemeSelector";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useTranslation } from 'react-i18next';

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  
  const navigation = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.sites'), href: "/sites" },
    { name: t('nav.rating'), href: "/ratings" },
    { name: t('nav.tops'), href: "/top-sites" },
    { name: t('nav.faq'), href: "/faq" },
    { name: t('nav.responsibleGambling'), href: "/responsible-gambling" },
  ];

  const isActiveRoute = (href: string) => location.pathname === href;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground hover:text-gaming-cyan"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-gaming-dark/95 backdrop-blur-md border-gaming-cyan/20">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between py-4 border-b border-gaming-cyan/20">
            <h2 className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
              CaseHunters
            </h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActiveRoute(item.href)
                        ? "bg-gaming-cyan/20 text-gaming-cyan font-medium"
                        : "text-foreground hover:text-gaming-cyan hover:bg-gaming-cyan/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme and Language Controls */}
          <div className="border-t border-gaming-cyan/20 pt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">{t('mobile.settings')}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <span className="text-sm text-muted-foreground mb-2 block">{t('mobile.theme')}</span>
                <ThemeSelector />
              </div>
              <div className="flex-1">
                <span className="text-sm text-muted-foreground mb-2 block">{t('mobile.language')}</span>
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};