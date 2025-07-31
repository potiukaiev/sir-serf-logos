import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Shield, Zap, ExternalLink, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { GamingAd } from "@/components/GamingAd";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { ThemeSelector } from "@/components/ThemeSelector";
import { LanguageSelector } from "@/components/LanguageSelector";

const Index = () => {
  const featuredSites = [
    {
      name: "CSGOEmpire",
      rating: 4.8,
      bonus: "250%",
      rarity: "covert",
      status: "online",
      users: "12.5K",
      description: "Premium case opening with guaranteed drops"
    },
    {
      name: "DotaSkins",
      rating: 4.6,
      bonus: "200%",
      rarity: "classified",
      status: "online", 
      users: "8.3K",
      description: "Best Dota 2 cosmetic marketplace"
    },
    {
      name: "SkinClub",
      rating: 4.4,
      bonus: "150%",
      rarity: "restricted",
      status: "online",
      users: "15.2K",
      description: "Multi-game skin trading platform"
    }
  ];

  const rarityColors = {
    covert: "rarity-covert",
    classified: "rarity-classified", 
    restricted: "rarity-restricted",
    milspec: "rarity-milspec",
    industrial: "rarity-industrial",
    consumer: "rarity-consumer"
  };

  return (
    <div className="min-h-screen relative">
      <ParallaxBackground />
      {/* Gaming Header */}
      <header className="border-b border-gaming-cyan/20 bg-gaming-dark/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-gaming rounded-lg flex items-center justify-center shadow-neon">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CaseHunters
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/sites" className="text-foreground hover:text-gaming-cyan transition-colors">Sites</Link>
                <Link to="/categories" className="text-foreground hover:text-gaming-cyan transition-colors">Categories</Link>
                <Link to="/about" className="text-foreground hover:text-gaming-cyan transition-colors">About</Link>
              </nav>
              <div className="flex items-center gap-2">
                <ThemeSelector />
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8 animate-slide-up">
            <Badge variant="outline" className="mb-6 border-gaming-cyan text-gaming-cyan">
              🎮 #1 CS2 & Dota Case Site Directory
            </Badge>
          </div>
          
          <h2 className="text-6xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent animate-slide-up">
            Find The Best Case Sites
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
            Discover verified CS2, Dota 2, and gaming case sites. Compare bonuses, read reviews, 
            and find the perfect platform for your skin hunting adventures.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap animate-slide-up">
            <Button size="lg" className="px-8 bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
              Browse Sites
            </Button>
            <Button variant="outline" size="lg" className="px-8 border-gaming-purple text-gaming-purple hover:bg-gaming-purple/10">
              Read Reviews
            </Button>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-cyan">150+</div>
              <div className="text-sm text-muted-foreground">Verified Sites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-purple">50K+</div>
              <div className="text-sm text-muted-foreground">Monthly Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gaming-magenta">$2M+</div>
              <div className="text-sm text-muted-foreground">Skins Tracked</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sites */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-4">🔥 Hot Sites This Week</h3>
          <p className="text-muted-foreground">Top-rated platforms with the best bonuses and user reviews</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredSites.map((site, index) => (
            <Card key={index} className="bg-gradient-card border-gaming-cyan/20 shadow-gaming hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-6">
                {/* Site Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gaming-green animate-pulse`}></div>
                    <span className="text-sm text-gaming-green font-medium">ONLINE</span>
                  </div>
                  <Badge className={`bg-${rarityColors[site.rarity as keyof typeof rarityColors]} text-white`}>
                    {site.rarity.toUpperCase()}
                  </Badge>
                </div>

                {/* Site Name & Rating */}
                <div className="mb-4">
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-gaming-cyan transition-colors">
                    {site.name}
                  </h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(site.rating) ? 'text-gaming-orange fill-current' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-gaming-orange">{site.rating}</span>
                    <span className="text-sm text-muted-foreground">({site.users} users)</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{site.description}</p>
                </div>

                {/* Bonus & Features */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gaming-darker/50 rounded-lg">
                    <span className="text-sm">Welcome Bonus</span>
                    <span className="font-bold text-gaming-green">{site.bonus}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-gaming-cyan" />
                      <span>Verified</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4 text-gaming-orange" />
                      <span>Instant</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-gaming-green" />
                      <span>Trending</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
                    Play Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" className="w-full border-gaming-purple text-gaming-purple hover:bg-gaming-purple/10">
                    Read Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gaming Ad */}
      <section className="container mx-auto px-6 py-8">
        <GamingAd variant="inline" />
      </section>

      {/* Game Categories */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-12">🎮 Popular Games</h3>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "CS2", icon: "🔫", count: "85 sites", color: "gaming-cyan" },
            { name: "Dota 2", icon: "⚔️", count: "42 sites", color: "gaming-purple" },
            { name: "Rust", icon: "🦀", count: "28 sites", color: "gaming-orange" },
            { name: "TF2", icon: "🎯", count: "15 sites", color: "gaming-magenta" }
          ].map((game, index) => (
            <Card key={index} className="bg-gradient-card border-gaming-cyan/20 hover:shadow-purple transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{game.icon}</div>
                <h4 className="text-xl font-bold mb-2 group-hover:text-gaming-cyan transition-colors">{game.name}</h4>
                <p className="text-muted-foreground text-sm">{game.count}</p>
                <div className={`w-full h-1 bg-${game.color} rounded-full mt-4 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gaming-cyan/20 bg-gaming-dark/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-gaming rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  CaseHunters
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your trusted guide to the best gaming case sites. Find verified platforms, compare bonuses, and hunt for rare skins.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-gaming-cyan">Browse</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-gaming-cyan transition-colors">All Sites</a></li>
                <li><a href="#" className="hover:text-gaming-cyan transition-colors">CS2 Sites</a></li>
                <li><a href="#" className="hover:text-gaming-cyan transition-colors">Dota 2 Sites</a></li>
                <li><a href="#" className="hover:text-gaming-cyan transition-colors">New Sites</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-gaming-cyan">Resources</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-gaming-cyan transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-gaming-cyan transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-gaming-cyan transition-colors">Rankings</a></li>
                <li><a href="#" className="hover:text-gaming-cyan transition-colors">Articles</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-gaming-cyan">Community</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-gaming-cyan transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-gaming-cyan transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-gaming-cyan transition-colors">Reddit</a></li>
                <li><a href="#" className="hover:text-gaming-cyan transition-colors">Submit Site</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gaming-cyan/20 mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 CaseHunters. Find the best gaming case sites and hunt for legendary skins.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;