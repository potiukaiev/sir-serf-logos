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
      <nav className="border-b border-casino-green/10 bg-casino-dark/80 backdrop-blur-sm hidden md:block">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center space-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.href}
                to={item.href} 
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActiveRoute(item.href) 
                    ? 'text-casino-green' 
                    : 'text-muted-foreground hover:text-casino-green'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-casino-green transition-all duration-200 ${
                  isActiveRoute(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <Link 
              to="/" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
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
