import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { Shield } from "lucide-react";
import { ThemeSelector } from "@/components/ThemeSelector";
import { LanguageSelector } from "@/components/LanguageSelector";
import { MobileMenu } from "@/components/MobileMenu";
import { CasinoTop10Sidebar } from "./CasinoTop10Sidebar";
import { CookieConsent } from "@/components/CookieConsent";

interface CasinoLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  showSidebar?: boolean;
}

export const CasinoLayout = ({ 
  children, 
  title = "HealthyCasinos - Trusted Online Casino Reviews & Ratings",
  description = "Find the best online casinos with honest reviews, verified licenses, and responsible gambling practices.",
  keywords = "online casinos, casino reviews, casino bonuses, gambling sites, licensed casinos",
  showSidebar = true
}: CasinoLayoutProps) => {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/healthy-casinos" },
    { name: "Casinos", href: "/healthy-casinos/casinos" },
    { name: "Rankings", href: "/healthy-casinos/ratings" },
    { name: "Top Sites", href: "/healthy-casinos/top-sites" },
    { name: "Articles", href: "/healthy-casinos/articles" },
    { name: "FAQ", href: "/healthy-casinos/faq" },
    { name: "Responsible Gambling", href: "/healthy-casinos/responsible-gambling" }
  ];

  const isActiveRoute = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "HealthyCasinos",
            "description": description,
            "url": "https://healthycasinos.com"
          })}
        </script>
      </Helmet>
      
      {/* Header */}
      <header className="border-b border-casino-green/20 bg-casino-dark/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/healthy-casinos" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-casino-green" />
              <span className="text-2xl font-bold text-casino-green">
                HealthyCasinos
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <ThemeSelector />
              <LanguageSelector />
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Subheader Navigation */}
      <nav className="border-b border-casino-green/20 bg-casino-dark/90 backdrop-blur-md hidden md:block shadow-[0_2px_10px_hsl(142_76%_36%/0.1)]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-2">
            {navigation.map((item) => (
              <Link 
                key={item.href}
                to={item.href} 
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                  isActiveRoute(item.href) 
                    ? 'text-casino-green bg-casino-green/10 shadow-[0_0_15px_hsl(142_76%_36%/0.2)]' 
                    : 'text-muted-foreground hover:text-casino-green hover:bg-casino-green/5'
                }`}
              >
                {item.name}
                {isActiveRoute(item.href) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-casino-green rounded-full shadow-[0_0_8px_hsl(142_76%_36%/0.6)]"></span>
                )}
              </Link>
            ))}
            <Link 
              to="/" 
              className="ml-4 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-white/5 rounded transition-all border border-transparent hover:border-muted-foreground/20"
            >
              ← CaseHunters
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content with Sidebar */}
      <div className="flex container mx-auto px-4 py-8 gap-8">
        <main className="flex-1 min-w-0">
          {children}
        </main>
        {showSidebar && <CasinoTop10Sidebar />}
      </div>
      
      <CookieConsent />
      
      {/* Footer */}
      <footer className="border-t border-casino-green/20 bg-casino-darker py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="mb-2">© 2025 HealthyCasinos. All rights reserved.</p>
          <p className="text-sm">
            Play responsibly. Gambling can be addictive. 18+
          </p>
        </div>
      </footer>
    </div>
  );
};
