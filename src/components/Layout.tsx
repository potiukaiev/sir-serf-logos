import { Helmet } from "react-helmet-async";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { Logo } from "@/components/Logo";
import { ThemeSelector } from "@/components/ThemeSelector";
import { LanguageSelector } from "@/components/LanguageSelector";
import { MobileMenu } from "@/components/MobileMenu";
import { Top10Sidebar } from "@/components/Top10Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

export const Layout = ({ 
  children, 
  title = "CaseHunters - Best CS2 & Dota 2 Case Sites | Reviews & Bonuses",
  description = "Discover the best CS2 and Dota 2 case opening sites. Compare bonuses, read reviews, and find verified platforms for skin trading and case battles.",
  keywords = "CS2 case sites, Dota 2 case opening, skin trading, case battles, gaming bonuses, verified platforms"
}: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://casehunters.lovable.app" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://casehunters.lovable.app" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "CaseHunters",
            "description": description,
            "url": "https://casehunters.lovable.app"
          })}
        </script>
      </Helmet>
      
      <ParallaxBackground />
      
      {/* Header */}
      <header className="relative z-10 sticky top-0 border-b border-gaming-cyan/20 bg-gaming-dark/90 backdrop-blur-md shadow-gaming">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo variant="compact" />
            
            <div className="hidden md:flex items-center space-x-4">
              <ThemeSelector />
              <LanguageSelector />
            </div>
            
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex container mx-auto px-4 py-8 gap-8">
        <main className="flex-1 min-w-0">
          {children}
        </main>
        <Top10Sidebar />
      </div>
    </div>
  );
};